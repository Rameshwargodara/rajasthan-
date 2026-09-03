# Generator for all 100 RSSB LDC English Lessons
# Ensures all 100 lessons have >= 700 words (typically 720-760 words) and authentic syllabus topics.

import re
import json

def count_words(text):
    return len([w for w in re.split(r'\s+', text.strip()) if w])

lessons = []

def add_lesson(id_num, title, category, paragraphs):
    clean_p = [p.strip() for p in paragraphs if p.strip()]
    content = "\n\n".join(clean_p)
    w = count_words(content)
    if w < 700:
        raise ValueError(f"Lesson {id_num} ({title}) has only {w} words (<700)!")
    lessons.append({
        "id": id_num,
        "title": title,
        "category": category,
        "content": content
    })

print("Batch builder script initialized...")
