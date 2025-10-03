#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script to standardize console.log patterns in Account.js
- Changes all "Test X:" patterns to "⚡ Test X:"
- Removes console.log lines with just dashes
"""

import re
import sys

def fix_console_logs(content):
    """Fix console.log patterns to be consistent"""
    
    # Pattern 1: console.log("Test X: -> console.log("⚡ Test X:
    content = re.sub(
        r'console\.log\("Test (\d+):',
        r'console.log("⚡ Test \1:',
        content
    )
    
    # Pattern 2: console.log("*** Test X: -> console.log("⚡ Test X:
    content = re.sub(
        r'console\.log\("\*\*\* Test (\d+):',
        r'console.log("⚡ Test \1:',
        content
    )
    
    # Pattern 3: console.log("?? Test X: -> console.log("⚡ Test X: (in case of encoding issues)
    content = re.sub(
        r'console\.log\("\?\? Test (\d+):',
        r'console.log("⚡ Test \1:',
        content
    )
    
    # Pattern 4: Remove console.log lines with just dashes
    # Match lines like: console.log("----------");
    content = re.sub(
        r'[\t ]*console\.log\(["\'][-=]+["\']\);?\s*\n',
        '',
        content
    )
    
    return content

def main():
    input_file = 'Account.js'
    
    # Read the file with UTF-8 encoding
    print(f"Reading {input_file}...")
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_length = len(content)
    
    # Fix the patterns
    print("Fixing console.log patterns...")
    fixed_content = fix_console_logs(content)
    
    # Write back with UTF-8 encoding
    print(f"Writing fixed content to {input_file}...")
    with open(input_file, 'w', encoding='utf-8', newline='') as f:
        f.write(fixed_content)
    
    # Report changes
    lines_removed = original_length - len(fixed_content)
    print(f"\n✓ Done!")
    print(f"  Original size: {original_length:,} bytes")
    print(f"  New size: {len(fixed_content):,} bytes")
    print(f"  Difference: {lines_removed:,} bytes")
    
    # Count the ⚡ symbols
    test_count = len(re.findall(r'console\.log\("⚡ Test \d+:', fixed_content))
    print(f"  Total '⚡ Test X:' patterns: {test_count}")
    
    # Check for any remaining non-standard patterns
    remaining_plain = len(re.findall(r'console\.log\("Test \d+:', fixed_content))
    remaining_stars = len(re.findall(r'console\.log\("\*\*\* Test \d+:', fixed_content))
    remaining_question = len(re.findall(r'console\.log\("\?\? Test \d+:', fixed_content))
    
    if remaining_plain + remaining_stars + remaining_question > 0:
        print(f"\n⚠ Warning: Found {remaining_plain + remaining_stars + remaining_question} non-standard patterns remaining!")
    else:
        print(f"\n✓ All test logs are now standardized with ⚡ symbol!")

if __name__ == '__main__':
    main()
