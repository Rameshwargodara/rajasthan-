# Full generator for all 100 RSSB LDC English Lessons
# Each lesson contains 8-9 substantive paragraphs guaranteeing >= 720 words.

import os
import re
import json

def count_words(text):
    return len([w for w in re.split(r'\s+', text.strip()) if w])

print("Building all 100 Lessons with verification...")
