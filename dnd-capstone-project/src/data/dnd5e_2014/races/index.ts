// src/data/dnd5e_2014/races/index.ts
import { RACE_NAMES } from "./types";
import type { RaceDetails, RaceName, SubraceDetails } from "./types";
import { dragonborn } from "./racedata/dragonborn";
import { dwarf } from "./racedata/dwarf";
import { elf } from "./racedata/elf";
import { gnome } from "./racedata/gnome";
import { halfElf } from "./racedata/half-elf";
import { halfOrc } from "./racedata/half-orc";
import { halfling } from "./racedata/halfling";
import { human } from "./racedata/human";
import { tiefling } from "./racedata/tiefling";

export * from "./types";

/** Every race, keyed by name. Record<RaceName, ...> makes a missing race a compile error. */
export const RACES: Record<RaceName, RaceDetails> = {
    dragonborn,
    dwarf,
    elf,
    gnome,
    "half-elf": halfElf,
    "half-orc": halfOrc,
    halfling,
    human,
    tiefling,
};

/**
 * Looks up a race's details.
 *
 * @param name the race to look up.
 *
 * @returns the details for that race.
 */
export function getRace(name: RaceName): RaceDetails {
    return RACES[name];
}

/** Every race in RACE_NAMES order. Used for dropdowns and lists. */
export const RACE_LIST: RaceDetails[] = RACE_NAMES.map(getRace);

/**
 * Type guard for race names.
 *
 * @param value the string to test, e.g. a select element's value.
 *
 * @returns true if it is a RaceName.
 */
export function isRaceName(value: string): value is RaceName {
    return (RACE_NAMES as readonly string[]).includes(value);
}



/**
 * Finds a subrace of a race by id.
 *
 * @param race the race data.
 * @param subraceId the subrace id.
 *
 * @returns the subrace, or null if the race has no subrace with that id.
 */
export function findSubrace(race: RaceDetails, subraceId: string): SubraceDetails | null {
    for (const subrace of race.subraces) {
        if (subrace.id === subraceId) 
            return subrace;
    }

    return null;
}