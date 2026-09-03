const fs = require('fs');
const path = require('path');

function countWords(str) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

// Function to build full text of >= 700 words
function createLesson(id, title, category, ...paragraphs) {
  // If first argument is an array
  let paraList = paragraphs;
  if (paragraphs.length === 1 && Array.isArray(paragraphs[0])) {
    paraList = paragraphs[0];
  }
  const cleanParas = paraList.filter(Boolean).map(p => p.trim());
  const content = cleanParas.join('\n\n');
  const words = countWords(content);
  if (words < 700) {
    console.warn(`Warning: Lesson ${id} has only ${words} words`);
  }
  return { id, title, category, content };
}

module.exports = { createLesson, countWords };
