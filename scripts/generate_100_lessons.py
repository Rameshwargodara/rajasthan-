import json
import os
import re

def count_words(text):
    return len([w for w in re.split(r'\s+', text.strip()) if w])

print("Setting up RSSB LDC 100 Lessons Generator...")
