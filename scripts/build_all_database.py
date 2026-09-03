# Build complete 100 lessons dataset for RSSB LDC Typing Test
import os
import re
import json

def count_words(text):
    return len([w for w in re.split(r'\s+', text.strip()) if w])

print("Generating 100 RSSB LDC English Lessons with >= 720 words each...")
