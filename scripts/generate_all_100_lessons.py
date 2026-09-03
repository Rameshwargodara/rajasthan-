# Complete generator for all 100 RSSB LDC English Lessons
# Ensures all 100 lessons have >= 720 words and cover authentic exam syllabus topics.

import re
import json

def count_words(text):
    return len([w for w in re.split(r'\s+', text.strip()) if w])

print("Building all 100 lessons dataset...")
