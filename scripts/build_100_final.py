# Master Builder for all 100 RSSB LDC English Lessons
# Generates authentic, syllabus-accurate lessons with >= 720 words per lesson.

import re
import json

def count_words(text):
    return len([w for w in re.split(r'\s+', text.strip()) if w])

print("Master builder starting...")
