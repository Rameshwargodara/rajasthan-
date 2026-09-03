# Comprehensive 100 RSSB LDC English Lessons Builder
# Written in Python to generate high quality, authentic content for RSSB LDC typing examination.

import re
import json
import os

def count_words(text):
    return len([w for w in re.split(r'\s+', text.strip()) if w])

lessons = []

def add(id_num, title, category, paras):
    cleaned = [p.strip() for p in paras if p.strip()]
    content = "\n\n".join(cleaned)
    w = count_words(content)
    if w < 700:
        raise ValueError(f"Lesson {id_num} ({title}) has only {w} words (<700)!")
    lessons.append({
        "id": id_num,
        "title": title,
        "category": category,
        "content": content,
        "wordCount": w
    })

print("Initialized RSSB LDC database builder...")
