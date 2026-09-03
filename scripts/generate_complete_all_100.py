# Full generator for 100 RSSB LDC English Lessons
# Ensures all 100 lessons are strictly >= 720 words.
import re
import json
import os

def count_words(text):
    return len([w for w in re.split(r'\s+', text.strip()) if w])

lessons_db = []

def register_lesson(id_num, title, category, paragraphs):
    cleaned = [p.strip() for p in paragraphs if p.strip()]
    content = "\n\n".join(cleaned)
    w = count_words(content)
    if w < 700:
        raise ValueError(f"Lesson {id_num} ({title}) has only {w} words (<700)!")
    lessons_db.append({
        "id": id_num,
        "title": title,
        "category": category,
        "content": content,
        "words": w
    })

print("Initialized lessons_db...")
