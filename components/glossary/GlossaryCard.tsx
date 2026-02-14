"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import type { GlossaryEntry } from "@/lib/types/content";
import { Book, MapPin, Package, Scroll } from "lucide-react";

interface GlossaryCardProps {
  entry: GlossaryEntry;
}

const categoryIcons = {
  character: Book,
  place: MapPin,
  item: Package,
  term: Scroll,
  creature: Book
};

const categoryColors = {
  character: "bg-blue-500",
  place: "bg-green-500",
  item: "bg-amber-500",
  term: "bg-purple-500",
  creature: "bg-red-500"
};

export function GlossaryCard({ entry }: GlossaryCardProps) {
  const Icon = categoryIcons[entry.category];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-xl font-display">{entry.name}</CardTitle>
                {entry.aliases && entry.aliases.length > 0 && (
                  <CardDescription className="text-sm italic mt-1">
                    También conocido como: {entry.aliases.join(", ")}
                  </CardDescription>
                )}
              </div>
              <Badge className={`${categoryColors[entry.category]} text-white ml-2`}>
                <Icon className="h-3 w-3 mr-1" />
                {entry.category === "character" && "Personaje"}
                {entry.category === "place" && "Lugar"}
                {entry.category === "item" && "Objeto"}
                {entry.category === "term" && "Término"}
                {entry.category === "creature" && "Criatura"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {entry.description}
            </p>
            {entry.firstAppearance && (
              <p className="text-xs text-muted-foreground mt-2">
                Primera aparición: {entry.firstAppearance}
              </p>
            )}
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display flex items-center gap-2">
            <Icon className="h-6 w-6" />
            {entry.name}
          </DialogTitle>
          {entry.aliases && entry.aliases.length > 0 && (
            <DialogDescription className="text-sm italic">
              También conocido como: {entry.aliases.join(", ")}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Descripción</h4>
            <p className="text-sm leading-relaxed">{entry.description}</p>
          </div>
          {entry.firstAppearance && (
            <div>
              <h4 className="font-semibold mb-2">Primera Aparición</h4>
              <p className="text-sm">{entry.firstAppearance}</p>
            </div>
          )}
          {entry.relatedTerms && entry.relatedTerms.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2">Términos Relacionados</h4>
              <div className="flex flex-wrap gap-2">
                {entry.relatedTerms.map((term) => (
                  <Badge key={term} variant="outline">{term}</Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
