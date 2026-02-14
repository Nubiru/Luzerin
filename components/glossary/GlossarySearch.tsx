"use client";

import { Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface GlossarySearchProps {
  onSearch: (query: string) => void;
  onCategoryFilter: (category: string | null) => void;
  selectedCategory: string | null;
}

const categories = [
  { id: "character", label: "Personajes" },
  { id: "place", label: "Lugares" },
  { id: "item", label: "Objetos" },
  { id: "term", label: "Términos" },
  { id: "creature", label: "Criaturas" },
];

export function GlossarySearch({
  onSearch,
  onCategoryFilter,
  selectedCategory,
}: GlossarySearchProps) {
  const [query, setQuery] = useState("");

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar personajes, lugares, objetos..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-10"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
            onClick={clearSearch}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryFilter(null)}
        >
          Todos
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryFilter(category.id)}
          >
            {category.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
