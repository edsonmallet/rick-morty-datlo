import { Character } from "@/types";
import { atom } from "jotai";

export const currentFilter = atom("");
export const itemsRemoved = atom<Character[]>([]);
export const viewDetailsId = atom<number | null>(null);
