# Master Generator for 100 Lessons of RSSB LDC English Typing Test
# Strictly >= 720 words per lesson.

import re
import json

def count_words(text):
    return len([w for w in re.split(r'\s+', text.strip()) if w])

print("Master generator starting...")
