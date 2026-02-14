import type { Book } from "../types/content";
import book1Data from "@/data/books/book-1.json";
import book2Data from "@/data/books/book-2.json";

export const books: Book[] = [
  book1Data as Book,
  book2Data as Book
];

export function getBook(bookId: string): Book | undefined {
  return books.find(book => book.id === bookId);
}

export function getAllBooks(): Book[] {
  return books;
}

export function getChapter(bookId: string, chapterNumber: number) {
  const book = getBook(bookId);
  return book?.chapters.find(ch => ch.number === chapterNumber);
}
