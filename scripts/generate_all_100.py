# Master Generator for 100 RSSB LDC English Lessons with >= 720 words each
import json
import os
import re

def count_words(text):
    return len([w for w in re.split(r'\s+', text.strip()) if w])

print("Preparing 100 RSSB LDC English Lessons generator...")
