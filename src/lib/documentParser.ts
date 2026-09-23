import * as pdfjsLib from 'pdfjs-dist';

// Configure PDF.js worker for client-side execution in Vite
if (typeof window !== 'undefined') {
  try {
    pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
      'pdfjs-dist/build/pdf.worker.min.mjs',
      import.meta.url
    ).toString();
  } catch {
    // Fallback CDN if URL resolving fails in certain worker environments
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;
  }
}

export interface ParseResult {
  text: string;
  wordCount: number;
  charCount: number;
  fileName: string;
  fileType: 'text' | 'pdf' | 'unknown';
  pageCount?: number;
  errorMessage?: string;
}

/**
 * Extracts plain text from a .txt file
 */
export async function extractTextFromTxtFile(file: File): Promise<ParseResult> {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const rawText = (e.target?.result as string) || '';
      const cleanText = normalizeExtractedText(rawText);
      const words = cleanText.split(/\s+/).filter(Boolean);

      resolve({
        text: cleanText,
        wordCount: words.length,
        charCount: cleanText.length,
        fileName: file.name,
        fileType: 'text',
      });
    };

    reader.onerror = () => {
      resolve({
        text: '',
        wordCount: 0,
        charCount: 0,
        fileName: file.name,
        fileType: 'text',
        errorMessage: 'Failed to read text file. Please check file permissions.',
      });
    };

    reader.readAsText(file);
  });
}

/**
 * Extracts text from a .pdf file using PDF.js
 */
export async function extractTextFromPdfFile(
  file: File,
  onProgress?: (current: number, total: number) => void
): Promise<ParseResult> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({
      data: new Uint8Array(arrayBuffer),
      useSystemFonts: true,
    });

    const pdf = await loadingTask.promise;
    const totalPages = pdf.numPages;
    let accumulatedText = '';

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      if (onProgress) {
        onProgress(pageNum, totalPages);
      }

      const page = await pdf.getPage(pageNum);
      const textContent = await page.getTextContent();

      // Aggregate text items preserving basic line/word separation
      let lastY: number | null = null;
      let pageText = '';

      for (const item of textContent.items) {
        if ('str' in item) {
          const itemText = item.str;
          // Detect newline if y coordinates differ significantly
          const currentY = 'transform' in item ? item.transform[5] : null;
          if (lastY !== null && currentY !== null && Math.abs(currentY - lastY) > 8) {
            pageText += '\n';
          } else if (pageText.length > 0 && !pageText.endsWith(' ') && !pageText.endsWith('\n')) {
            pageText += ' ';
          }
          pageText += itemText;
          if (currentY !== null) {
            lastY = currentY;
          }
        }
      }

      accumulatedText += (accumulatedText ? '\n\n' : '') + pageText.trim();
    }

    const cleanText = normalizeExtractedText(accumulatedText);
    const words = cleanText.split(/\s+/).filter(Boolean);

    if (words.length === 0) {
      return {
        text: '',
        wordCount: 0,
        charCount: 0,
        fileName: file.name,
        fileType: 'pdf',
        pageCount: totalPages,
        errorMessage:
          'No selectable text found in this PDF. It may contain scanned images. You can paste the transcription manually.',
      };
    }

    return {
      text: cleanText,
      wordCount: words.length,
      charCount: cleanText.length,
      fileName: file.name,
      fileType: 'pdf',
      pageCount: totalPages,
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown PDF parsing error';
    return {
      text: '',
      wordCount: 0,
      charCount: 0,
      fileName: file.name,
      fileType: 'pdf',
      errorMessage: `Failed to parse PDF: ${errorMsg}`,
    };
  }
}

/**
 * Universal file processor supporting both TXT and PDF
 */
export async function parseExerciseFile(
  file: File,
  onProgress?: (current: number, total: number) => void
): Promise<ParseResult> {
  const ext = file.name.split('.').pop()?.toLowerCase();

  if (ext === 'txt') {
    return extractTextFromTxtFile(file);
  } else if (ext === 'pdf' || file.type === 'application/pdf') {
    return extractTextFromPdfFile(file, onProgress);
  } else {
    // Attempt reading as text as fallback
    try {
      return await extractTextFromTxtFile(file);
    } catch {
      return {
        text: '',
        wordCount: 0,
        charCount: 0,
        fileName: file.name,
        fileType: 'unknown',
        errorMessage: 'Unsupported file format. Please upload a .txt or .pdf file.',
      };
    }
  }
}

/**
 * Helper to clean and normalize text for typing practice:
 * - fixes excessive spaces
 * - regularizes typographic quotes and dashes
 * - trims blank lines
 */
export function normalizeExtractedText(text: string): string {
  return text
    .replace(/\r\n/g, '\n')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n\s*\n\s*\n+/g, '\n\n')
    .trim();
}
