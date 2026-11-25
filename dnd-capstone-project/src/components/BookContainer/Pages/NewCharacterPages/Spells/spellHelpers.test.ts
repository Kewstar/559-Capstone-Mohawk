// spellHelpers.test.ts
// Unit tests: spell validation (slots, limits, class lists, pick rules).
import {
    getAlwaysPreparedSpells,
    getMaxSpellLevel,
    getPickedSpellSections,
    getSpellcastingMod,
    getSpellGroups,
    toggleClassSpellPick,
} from "./spellHelpers";
import type { SpellGroup } from "./spellHelpers";
import { makeClass } from "../Class/classHelpers";
import type { CharacterClass, SpellListKey } from "@/components/BookContainer/types";
import type { ClassName } from "@/data/dnd5e_2014/classes";
import type { SpellDetails } from "@/data/dnd5e_2014/spells";


/**
 * Builds a class entry, optionally with spells already picked.
 *
 * @param name the class.
 * @param level the class level.
 * @param spellChoices spells already chosen.
 * @param subclassId the chosen subclass, if any.
 *
 * @returns the class entry.
 */
function caster(
    name: ClassName,
    level: number,
    spellChoices: Partial<CharacterClass["spellChoices"]> = {},
    subclassId: string | null = null,
): CharacterClass {
    const base = makeClass(name, level);

    return { ...base, subclassId, spellChoices: { ...base.spellChoices, ...spellChoices } };
}


/**
 * Finds a group by key, failing the test if it is missing.
 *
 * @param groups the groups to search.
 * @param key which list.
 *
 * @returns the group.
 */
function groupFor(groups: SpellGroup[], key: SpellListKey): SpellGroup {
    function hasKey(group: SpellGroup) {
        return group.key === key;
    }

    const group = groups.find(hasKey);

    if (!group)
        throw new Error(`No "${key}" group`);

    return group;
}


/** @returns the spell's index. */
function toIndex(spell: SpellDetails): string {
    return spell.index;
}

/** @returns the spell's level. */
function toLevel(spell: SpellDetails): number {
    return spell.level;
}

/** @returns the group's key. */
function toKey(group: SpellGroup): SpellListKey {
    return group.key;
}

/** @returns the section's title. */
function toTitle(section: { title: string }): string {
    return section.title;
}



describe("getMaxSpellLevel", () => {
    it.each([
        ["wizard", 1, 1],
        ["wizard", 3, 2],
        ["wizard", 5, 3],
        ["paladin", 1, 0],
        ["paladin", 2, 1],
        ["fighter", 3, 0],
    ] as const)("%s %i can cast up to level %i spells", (name, level, expected) => {
        expect(getMaxSpellLevel(caster(name, level))).toBe(expected);
    });
});



describe("getSpellcastingMod", () => {
    const abilities = {
        str: { mod: 0 }, dex: { mod: 0 }, con: { mod: 0 },
        int: { mod: 3 }, wis: { mod: 2 }, cha: { mod: -1 },
    };

    it("uses the class's spellcasting ability", () => {
        expect(getSpellcastingMod(caster("wizard", 1), abilities)).toBe(3);
        expect(getSpellcastingMod(caster("cleric", 1), abilities)).toBe(2);
        expect(getSpellcastingMod(caster("bard", 1), abilities)).toBe(-1);
    });

    it("is 0 for a class that doesn't cast spells", () => {
        expect(getSpellcastingMod(caster("fighter", 1), abilities)).toBe(0);
    });
});



describe("getSpellGroups: which lists a class gets", () => {
    it("gives a non-caster no groups", () => {
        expect(getSpellGroups(caster("fighter", 3), 0)).toEqual([]);
    });


    it("gives a 'known' caster cantrips and spells known", () => {
        const groups = getSpellGroups(caster("bard", 1), 0);

        expect(groups.map(toKey)).toEqual(["cantrips", "known"]);
        expect(groupFor(groups, "cantrips").limit).toBe(2);
        expect(groupFor(groups, "known").limit).toBe(4);
    });


    it("gives a 'prepared' caster cantrips and prepared spells", () => {
        expect(getSpellGroups(caster("cleric", 1), 3).map(toKey)).toEqual(["cantrips", "prepared"]);
    });


    it("gives a wizard cantrips, a spellbook, and prepared spells", () => {
        expect(getSpellGroups(caster("wizard", 1), 0).map(toKey)).toEqual(["cantrips", "known", "prepared"]);
    });
});



describe("getSpellGroups: limits", () => {
    it("prepared limit = ability mod + class level", () => {
        expect(groupFor(getSpellGroups(caster("cleric", 1), 3), "prepared").limit).toBe(4);
        expect(groupFor(getSpellGroups(caster("cleric", 5), 3), "prepared").limit).toBe(8);
    });


    it("prepared limit for a half caster (paladin) uses half the level, rounded down", () => {
        expect(groupFor(getSpellGroups(caster("paladin", 2), 3), "prepared").limit).toBe(4);
        expect(groupFor(getSpellGroups(caster("paladin", 5), 3), "prepared").limit).toBe(5);
    });


    it("prepared limit is never below 1", () => {
        expect(groupFor(getSpellGroups(caster("cleric", 1), -3), "prepared").limit).toBe(1);
    });


    // PHB 2014: a wizard's spellbook starts with 6 spells and gains 2 each wizard level after 1st.
    it.each([
        [1,  6],
        [2,  8],
        [3,  10],
        [5,  14],
        [20, 44],
    ])("wizard %i spellbook holds %i spells", (level, expected) => {
        expect(groupFor(getSpellGroups(caster("wizard", level), 0), "known").limit).toBe(expected);
    });
});



describe("getSpellGroups: options come from the class list and allowed levels", () => {
    it("offers only cantrips in the cantrip group", () => {
        const cantrips = groupFor(getSpellGroups(caster("wizard", 1), 0), "cantrips");

        expect(cantrips.options.map(toLevel).every(isZero)).toBe(true);
        expect(cantrips.options.map(toIndex)).toContain("fire-bolt");

        function isZero(level: number) {
            return level === 0;
        }
    });


    it("offers no spells above the highest slot level", () => {
        const level3Book = groupFor(getSpellGroups(caster("wizard", 3), 0), "known");
        const level5Book = groupFor(getSpellGroups(caster("wizard", 5), 0), "known");

        expect(Math.max(...level3Book.options.map(toLevel))).toBe(2);
        expect(level3Book.options.map(toIndex)).not.toContain("fireball");
        expect(level5Book.options.map(toIndex)).toContain("fireball");
    });


    it("does not offer spells from another class's list", () => {
        const book = groupFor(getSpellGroups(caster("wizard", 1), 0), "known");

        expect(book.options.map(toIndex)).toContain("magic-missile");
        expect(book.options.map(toIndex)).not.toContain("cure-wounds");
    });


    it("a wizard can only prepare spells that are in their spellbook", () => {
        const wizard = caster("wizard", 1, { known: ["magic-missile", "shield"] });
        const prepared = groupFor(getSpellGroups(wizard, 0), "prepared");

        expect(prepared.options.map(toIndex)).toEqual(["magic-missile", "shield"]);
    });


    it("keeps a chosen spell listed after it becomes too high level, so it can be unchecked", () => {
        const wizard = caster("wizard", 3, { known: ["fireball"] });
        const book = groupFor(getSpellGroups(wizard, 0), "known");

        expect(book.options.map(toIndex)).toContain("fireball");
    });
});



describe("toggleClassSpellPick: validation", () => {
    it("adds a valid spell", () => {
        const result = toggleClassSpellPick([caster("wizard", 1)], 0, "cantrips", "fire-bolt", 0);

        expect(result[0]?.spellChoices.cantrips).toEqual(["fire-bolt"]);
    });


    it("removes a spell that is already picked", () => {
        const classes = [caster("wizard", 1, { cantrips: ["fire-bolt"] })];
        const result = toggleClassSpellPick(classes, 0, "cantrips", "fire-bolt", 0);

        expect(result[0]?.spellChoices.cantrips).toEqual([]);
    });


    it("rejects a spell from another class's list", () => {
        const classes = [caster("wizard", 1)];

        expect(toggleClassSpellPick(classes, 0, "known", "cure-wounds", 0)).toBe(classes);
    });


    it("rejects a spell above the class's highest slot level", () => {
        const classes = [caster("wizard", 1)];

        expect(toggleClassSpellPick(classes, 0, "known", "fireball", 0)).toBe(classes);
    });


    it("rejects a leveled spell in the cantrip list (and a cantrip in a leveled list)", () => {
        const classes = [caster("wizard", 1)];

        expect(toggleClassSpellPick(classes, 0, "cantrips", "magic-missile", 0)).toBe(classes);
        expect(toggleClassSpellPick(classes, 0, "known", "fire-bolt", 0)).toBe(classes);
    });


    it("rejects a spell index that doesn't exist", () => {
        const classes = [caster("wizard", 1)];

        expect(toggleClassSpellPick(classes, 0, "cantrips", "not-a-spell", 0)).toBe(classes);
    });


    it("rejects a pick once the list is full", () => {
        // bard 1 knows 2 cantrips
        const classes = [caster("bard", 1, { cantrips: ["light", "mage-hand"] })];

        expect(toggleClassSpellPick(classes, 0, "cantrips", "vicious-mockery", 0)).toBe(classes);
    });


    it("still allows removing a pick when the list is over its limit", () => {
        // cleric with WIS +3 prepared 4, then WIS dropped to +0 (limit 1)
        const classes = [caster("cleric", 1, { prepared: ["bless", "command", "cure-wounds", "guiding-bolt"] })];

        const removed = toggleClassSpellPick(classes, 0, "prepared", "bless", 0);
        const added = toggleClassSpellPick(classes, 0, "prepared", "bane", 0);

        expect(removed[0]?.spellChoices.prepared).toEqual(["command", "cure-wounds", "guiding-bolt"]);
        expect(added).toBe(classes);
    });


    it("rejects a list the class doesn't have", () => {
        const fighter = [caster("fighter", 5)];
        const bard = [caster("bard", 1)];

        expect(toggleClassSpellPick(fighter, 0, "cantrips", "fire-bolt", 0)).toBe(fighter);
        expect(toggleClassSpellPick(bard, 0, "prepared", "bane", 0)).toBe(bard);
    });


    it("returns the same array for a class index that doesn't exist", () => {
        const classes = [caster("wizard", 1)];

        expect(toggleClassSpellPick(classes, 3, "cantrips", "fire-bolt", 0)).toBe(classes);
    });


    it("only edits the class at the given index", () => {
        const classes = [caster("wizard", 1), caster("cleric", 1)];
        const result = toggleClassSpellPick(classes, 1, "cantrips", "light", 0);

        expect(result[0]).toBe(classes[0]);
        expect(result[1]?.spellChoices.cantrips).toEqual(["light"]);
    });
});



describe("toggleClassSpellPick: spellbook rules", () => {
    it("rejects preparing a spell that isn't in the spellbook", () => {
        const classes = [caster("wizard", 1, { known: ["magic-missile"] })];

        expect(toggleClassSpellPick(classes, 0, "prepared", "shield", 3)).toBe(classes);
    });


    it("prepares a spell that is in the spellbook", () => {
        const classes = [caster("wizard", 1, { known: ["magic-missile"] })];
        const result = toggleClassSpellPick(classes, 0, "prepared", "magic-missile", 3);

        expect(result[0]?.spellChoices.prepared).toEqual(["magic-missile"]);
    });


    it("removing a spell from the spellbook also unprepares it", () => {
        const classes = [caster("wizard", 1, { known: ["magic-missile", "shield"], prepared: ["magic-missile"] })];
        const result = toggleClassSpellPick(classes, 0, "known", "magic-missile", 3);

        expect(result[0]?.spellChoices.known).toEqual(["shield"]);
        expect(result[0]?.spellChoices.prepared).toEqual([]);
    });
});



describe("getAlwaysPreparedSpells", () => {
    it("is empty without a subclass", () => {
        expect(getAlwaysPreparedSpells(caster("cleric", 3))).toEqual([]);
    });


    it("grants domain spells by class level", () => {
        const life1 = caster("cleric", 1, {}, "life");
        const life3 = caster("cleric", 3, {}, "life");

        expect(getAlwaysPreparedSpells(life1).map(toIndex)).toEqual(["bless", "cure-wounds"]);
        expect(getAlwaysPreparedSpells(life3).map(toIndex))
            .toEqual(["bless", "cure-wounds", "lesser-restoration", "spiritual-weapon"]);
    });
});



describe("getPickedSpellSections", () => {
    it("is empty for a non-caster", () => {
        expect(getPickedSpellSections(caster("fighter", 5))).toEqual([]);
    });


    it("leaves out empty sections", () => {
        const wizard = caster("wizard", 1, { known: ["magic-missile"] });

        expect(getPickedSpellSections(wizard).map(toTitle)).toEqual(["Spellbook"]);
    });


    it("shows cantrips, prepared, and spellbook sections for a wizard", () => {
        const wizard = caster("wizard", 1, {
            cantrips: ["fire-bolt"], known: ["magic-missile", "shield"], prepared: ["shield"],
        });

        expect(getPickedSpellSections(wizard).map(toTitle)).toEqual(["Cantrips", "Prepared Spells", "Spellbook"]);
    });
});