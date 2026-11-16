// src/data/dnd5e_2014/classes/index.ts
import { CLASS_NAMES } from "./types";
import type { ClassDetails, ClassName } from "./types";
import { barbarian } from "./classdata/barbarian";
import { bard } from "./classdata/bard";
import { cleric } from "./classdata/cleric";
import { druid } from "./classdata/druid";
import { fighter } from "./classdata/fighter";
import { monk } from "./classdata/monk";
import { paladin } from "./classdata/paladin";
import { ranger } from "./classdata/ranger";
import { rogue } from "./classdata/rogue";
import { sorcerer } from "./classdata/sorcerer";
import { warlock } from "./classdata/warlock";
import { wizard } from "./classdata/wizard";

export * from "./types";

/** Every class, keyed by name. */
export const CLASSES: Record<ClassName, ClassDetails> = {
    barbarian,
    bard,
    cleric,
    druid,
    fighter,
    monk,
    paladin,
    ranger,
    rogue,
    sorcerer,
    warlock,
    wizard,
};

/**
 * Retrieves a class's ClassDetails.
 * 
 * @param name the class to get the details of.
 * 
 * @returns the ClassDetails data for that class.
 */
export function getClass(name: ClassName): ClassDetails {
    return CLASSES[name];
}

/** Every class in CLASS_NAMES. Used for dropdowns and lists. */
export const CLASS_LIST: ClassDetails[] = CLASS_NAMES.map(getClass);




/**
 * Type guard for the twelve class names.
 * 
 * @param value the string to test, e.g. a select element's value.
 * 
 * @returns true if it is a ClassName.
 */
export function isClassName(value: string): value is ClassName {
    return (CLASS_NAMES as readonly string[]).includes(value);
}