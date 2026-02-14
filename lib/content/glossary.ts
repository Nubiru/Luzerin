import glossaryData from "@/data/glossary.json";
import type { GlossaryEntry } from "../types/content";

export const glossary: GlossaryEntry[] = glossaryData as GlossaryEntry[];

export function getAllEntries(): GlossaryEntry[] {
  return glossary;
}

export function getEntriesByCategory(category: string): GlossaryEntry[] {
  return glossary.filter((entry) => entry.category === category);
}

export function searchEntries(query: string): GlossaryEntry[] {
  const lowerQuery = query.toLowerCase();
  return glossary.filter(
    (entry) =>
      entry.name.toLowerCase().includes(lowerQuery) ||
      entry.description.toLowerCase().includes(lowerQuery) ||
      entry.aliases?.some((alias) => alias.toLowerCase().includes(lowerQuery)),
  );
}

export function getEntry(id: string): GlossaryEntry | undefined {
  return glossary.find((entry) => entry.id === id);
}
