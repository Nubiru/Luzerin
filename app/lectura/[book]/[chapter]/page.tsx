import { getChapter, getBook } from "@/lib/content/books";
import { ChapterReader } from "@/components/reading/ChapterReader";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ book: string; chapter: string }>;
}

export default async function ChapterPage({ params }: PageProps) {
  const { book: bookId, chapter: chapterNum } = await params;
  const chapterNumber = parseInt(chapterNum);
  
  const book = getBook(bookId);
  const chapter = getChapter(bookId, chapterNumber);

  if (!book || !chapter) {
    notFound();
  }

  return <ChapterReader book={book} chapter={chapter} />;
}
