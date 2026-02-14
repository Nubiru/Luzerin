import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getBook } from "@/lib/content/books";
import { ChevronLeft, BookOpen } from "lucide-react";

interface PageProps {
  params: Promise<{ book: string }>;
}

export default async function BookIndexPage({ params }: PageProps) {
  const { book: bookId } = await params;
  const book = getBook(bookId);

  if (!book) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-lz-second py-12">
      <div className="container max-w-4xl">
        <div className="mb-8">
          <Link
            href="/lectura"
            className="text-lz-cuart hover:text-white flex items-center gap-2 transition-colors inline-flex"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Volver a Libros</span>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/3">
            <div className="aspect-[2/3] relative rounded-lg overflow-hidden shadow-2xl border-4 border-lz-terc/30">
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-lz-cuart mb-2">
              {book.title}
            </h1>
            {book.subtitle && (
              <p className="text-xl md:text-2xl text-white/80 font-serif mb-4">
                {book.subtitle}
              </p>
            )}
            <p className="text-lz-terc/90 italic mb-6">Por {book.author}</p>
            <p className="text-white/70 leading-relaxed mb-6">
              {book.description}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-display font-semibold text-white mb-6 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-lz-cuart" />
            Índice de Capítulos
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {book.chapters.map((chapter) => (
              <Card
                key={chapter.id}
                className="bg-lz-second border-lz-terc/20 hover:border-lz-cuart/50 transition-colors group"
              >
                <Link href={`/lectura/${book.id}/${chapter.number}`}>
                  <CardHeader className="p-4 flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-lg text-white group-hover:text-lz-cuart transition-colors">
                        Capítulo {chapter.number}: {chapter.title}
                      </CardTitle>
                      <CardDescription className="text-white/50">
                        {Math.ceil(chapter.wordCount / 250)} min de lectura
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
