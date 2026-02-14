import { notFound } from "next/navigation";
import { ChapterReader } from "@/components/reading/ChapterReader";
import { getBook, getChapter } from "@/lib/content/books";

interface PageProps {
  params: Promise<{ book: string; chapter: string }>;
}

export default async function ChapterPage({ params }: PageProps) {
  const { book: bookId, chapter: chapterNum } = await params;
  const chapterNumber = parseInt(chapterNum, 10);

  const book = getBook(bookId);
  const chapter = getChapter(bookId, chapterNumber);

  if (!book || !chapter) {
    notFound();
  }

  return <ChapterReader book={book} chapter={chapter} />;
}
