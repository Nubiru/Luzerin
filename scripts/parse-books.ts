#!/usr/bin/env tsx
// Book Parser - Converts markdown books to structured JSON

import fs from 'fs';
import path from 'path';
import type { Book, Chapter } from '../lib/types/content';

const BOOKS_SOURCE = '.context/3.Client/Contenido/Textos';
const BOOKS_OUTPUT = 'data/books';

interface BookConfig {
  id: string;
  filename: string;
  title: string;
  subtitle: string;
  author: string;
  coverImage: string;
  description: string;
}

const BOOK_CONFIGS: BookConfig[] = [
  {
    id: 'book-1',
    filename: '1-Lúzerin-La_Fortaleza_del_Colibrí.md',
    title: 'Lúzerin',
    subtitle: 'La Fortaleza del Colibrí',
    author: 'N. de MONTEAGUDO',
    coverImage: '/images/chapters/1 Tapa.jpeg',
    description: 'Primera parte de la saga Lúzerin'
  },
  {
    id: 'book-2',
    filename: '2-Lúzerin-El_Tango_de_la_Muerte.md',
    title: 'Lúzerin',
    subtitle: 'El Tango de la Muerte',
    author: 'N. de MONTEAGUDO',
    coverImage: '/images/chapters/2.jpg',
    description: 'Segunda parte de la saga Lúzerin'
  }
];

function parseMarkdownBook(filepath: string, bookId: string): Chapter[] {
  const content = fs.readFileSync(filepath, 'utf-8');
  const lines = content.split('\n');
  
  const chapters: Chapter[] = [];
  let currentChapter: Partial<Chapter> | null = null;
  let chapterContent: string[] = [];
  let chapterNumber = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Detect chapter titles (all caps lines or lines starting with numbers)
    const isChapterTitle = (
      line.length > 0 &&
      line.length < 100 &&
      (line === line.toUpperCase() || /^\d+\s+/.test(line)) &&
      !line.startsWith('—') &&
      line !== 'N. de MONTEAGUDO'
    );

    if (isChapterTitle && chapterNumber > 0) {
      // Save previous chapter
      if (currentChapter && chapterContent.length > 0) {
        const text = chapterContent.join('\n').trim();
        const wordCount = text.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // 200 words per minute

        chapters.push({
          id: `${bookId}-chapter-${currentChapter.number}`,
          bookId,
          number: currentChapter.number!,
          title: currentChapter.title!,
          content: text,
          wordCount,
          readingTime,
          image: `/images/chapters/${currentChapter.number}.jpeg`
        });
      }

      // Start new chapter
      chapterNumber++;
      currentChapter = {
        number: chapterNumber,
        title: line
      };
      chapterContent = [];
    } else if (currentChapter) {
      // Add content to current chapter
      if (line.length > 0) {
        chapterContent.push(line);
      }
    } else if (line.includes('PRÓLOGO') || line.includes('Capítulo') || line.includes('CAPÍTULO')) {
      // First chapter detected
      chapterNumber = 1;
      currentChapter = {
        number: 1,
        title: line
      };
      chapterContent = [];
    }
  }

  // Save last chapter
  if (currentChapter && chapterContent.length > 0) {
    const text = chapterContent.join('\n').trim();
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    chapters.push({
      id: `${bookId}-chapter-${currentChapter.number}`,
      bookId,
      number: currentChapter.number!,
      title: currentChapter.title!,
      content: text,
      wordCount,
      readingTime,
      image: `/images/chapters/${currentChapter.number}.jpeg`
    });
  }

  return chapters;
}

function main() {
  console.log('📚 Parsing books...');

  // Ensure output directory exists
  if (!fs.existsSync(BOOKS_OUTPUT)) {
    fs.mkdirSync(BOOKS_OUTPUT, { recursive: true });
  }

  for (const config of BOOK_CONFIGS) {
    const filepath = path.join(BOOKS_SOURCE, config.filename);
    
    if (!fs.existsSync(filepath)) {
      console.error(`❌ File not found: ${filepath}`);
      continue;
    }

    console.log(`\n📖 Processing: ${config.title} - ${config.subtitle}`);
    
    const chapters = parseMarkdownBook(filepath, config.id);
    const totalWords = chapters.reduce((sum, ch) => sum + ch.wordCount, 0);

    const book: Book = {
      id: config.id,
      title: config.title,
      subtitle: config.subtitle,
      author: config.author,
      coverImage: config.coverImage,
      description: config.description,
      chapters,
      totalWords
    };

    const outputPath = path.join(BOOKS_OUTPUT, `${config.id}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(book, null, 2), 'utf-8');

    console.log(`✅ Saved: ${outputPath}`);
    console.log(`   Chapters: ${chapters.length}`);
    console.log(`   Total words: ${totalWords.toLocaleString()}`);
  }

  console.log('\n✨ Done!');
}

main();
