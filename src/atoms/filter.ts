import { atom } from "jotai";

export const currentFilter = atom("");
export const itemsRemoved = atom<number[]>([]);
export const viewDetailsId = atom<number | null>(null);
