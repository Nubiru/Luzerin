"use client";

import { useMemo, useState } from "react";
import { GlossaryCard } from "@/components/glossary/GlossaryCard";
import { GlossarySearch } from "@/components/glossary/GlossarySearch";
import { getAllEntries, searchEntries } from "@/lib/content/glossary";

export default function GlosarioPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const allEntries = getAllEntries();

  const filteredEntries = useMemo(() => {
    let entries = allEntries;

    // Filter by search query
    if (searchQuery) {
      entries = searchEntries(searchQuery);
    }

    // Filter by category
    if (selectedCategory) {
      entries = entries.filter((entry) => entry.category === selectedCategory);
    }

    return entries;
  }, [searchQuery, selectedCategory, allEntries]);

  return (
    <main className="min-h-screen bg-lz-second py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-center text-lz-cuart mb-8">
          Glosario
        </h1>
        <p className="text-center text-lz-terc mb-12 max-w-2xl mx-auto">
          Explora los personajes, lugares, objetos y términos del mundo de
          Lúzerin
        </p>

        <div className="mb-8">
          <GlossarySearch
            onSearch={setSearchQuery}
            onCategoryFilter={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
        </div>

        {filteredEntries.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No se encontraron resultados para tu búsqueda.
            </p>
          </div>
        ) : (
          <>
            <p className="text-sm text-muted-foreground mb-4">
              Mostrando {filteredEntries.length}{" "}
              {filteredEntries.length === 1 ? "resultado" : "resultados"}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEntries.map((entry) => (
                <GlossaryCard key={entry.id} entry={entry} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
