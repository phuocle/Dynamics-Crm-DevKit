#!/usr/bin/env python3
"""
Typo Detection System for Dynamics CRM DevKit
Automated typo detection and correction using intelligent spell checking and contextual analysis.
"""

import os
import sys
import json
import re
import argparse
import logging
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Tuple, Set, Optional, Any
import ast
import glob
from collections import defaultdict

try:
    from spellchecker import SpellChecker
except ImportError:
    print("Warning: spellchecker not available. Install with: pip install pyspellchecker")
    SpellChecker = None

try:
    import textdistance
except ImportError:
    print("Warning: textdistance not available. Install with: pip install textdistance")
    textdistance = None


class TypoDetector:
    """Main class for typo detection and correction."""
    
    def __init__(self, config_path: str = "typo_config.json"):
        """Initialize the typo detector with configuration."""
        self.config = self._load_config(config_path)
        self.spell_checker = self._setup_spell_checker()
        self.findings = []
        self.stats = {
            'files_scanned': 0,
            'typos_found': 0,
            'corrections_applied': 0,
            'files_modified': 0
        }
        self.logger = self._setup_logger()
        
    def _load_config(self, config_path: str) -> Dict:
        """Load configuration from JSON file."""
        try:
            with open(config_path, 'r', encoding='utf-8') as f:
                return json.load(f)
        except FileNotFoundError:
            self.logger.warning(f"Config file {config_path} not found. Using default configuration.")
            return self._get_default_config()
        except json.JSONDecodeError as e:
            self.logger.error(f"Invalid JSON in config file: {e}")
            return self._get_default_config()
    
    def _get_default_config(self) -> Dict:
        """Get default configuration when config file is not available."""
        return {
            "file_patterns": {
                "include": ["*.cs", "*.js", "*.md", "*.txt", "*.json", "*.xml"],
                "exclude": ["*/bin/*", "*/obj/*", "*/node_modules/*", "*/.git/*"]
            },
            "custom_dictionary": {
                "technical_terms": ["DynamicsCrm", "DevKit", "WebResource", "CustomApi"],
                "domain_specific": ["CRM", "xRM", "PowerPlatform", "Dataverse"],
                "abbreviations": ["API", "CLI", "GUI", "UI", "UX", "URL", "URI", "SQL", "XML", "JSON"]
            },
            "context_rules": {
                "code_identifiers": {"min_length": 3, "ignore_camel_case": True},
                "comments": {"check_spelling": True, "ignore_urls": True},
                "strings": {"check_spelling": True, "ignore_format_strings": True},
                "documentation": {"check_spelling": True, "ignore_code_blocks": True}
            },
            "correction_settings": {
                "auto_fix": False,
                "backup_files": True,
                "max_edit_distance": 2,
                "min_confidence": 0.7,
                "suggest_count": 3
            }
        }
    
    def _setup_spell_checker(self) -> Optional[SpellChecker]:
        """Setup spell checker with custom dictionary."""
        if SpellChecker is None:
            self.logger.warning("SpellChecker not available. Using basic pattern matching.")
            return None
            
        spell = SpellChecker()
        
        # Add custom terms to dictionary
        custom_terms = set()
        for category in self.config['custom_dictionary'].values():
            custom_terms.update(category)
        
        # Add custom terms to known words
        spell.word_frequency.load_words(custom_terms)
        
        return spell
    
    def _setup_logger(self) -> logging.Logger:
        """Setup logging configuration."""
        logger = logging.getLogger('typo_detector')
        logger.setLevel(logging.INFO)
        
        handler = logging.StreamHandler(sys.stdout)
        formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
        handler.setFormatter(formatter)
        logger.addHandler(handler)
        
        return logger
    
    def scan_repository(self, root_path: str = ".") -> List[Dict]:
        """Scan the entire repository for typos."""
        self.logger.info(f"Starting typo scan of repository: {root_path}")
        
        files_to_scan = self._find_files_to_scan(root_path)
        self.logger.info(f"Found {len(files_to_scan)} files to scan")
        
        for file_path in files_to_scan:
            self._scan_file(file_path)
            self.stats['files_scanned'] += 1
        
        self.logger.info(f"Scan complete. Found {self.stats['typos_found']} typos in {self.stats['files_scanned']} files")
        return self.findings
    
    def _find_files_to_scan(self, root_path: str) -> List[str]:
        """Find all files matching the include patterns and not matching exclude patterns."""
        files_to_scan = []
        
        include_patterns = self.config['file_patterns']['include']
        exclude_patterns = self.config['file_patterns']['exclude']
        
        for pattern in include_patterns:
            pattern_path = os.path.join(root_path, "**", pattern)
            matched_files = glob.glob(pattern_path, recursive=True)
            files_to_scan.extend(matched_files)
        
        # Remove duplicates and filter out excluded files
        files_to_scan = list(set(files_to_scan))
        filtered_files = []
        
        for file_path in files_to_scan:
            should_exclude = False
            for exclude_pattern in exclude_patterns:
                if self._matches_pattern(file_path, exclude_pattern):
                    should_exclude = True
                    break
            
            if not should_exclude:
                filtered_files.append(file_path)
        
        return filtered_files
    
    def _matches_pattern(self, file_path: str, pattern: str) -> bool:
        """Check if file path matches the given pattern."""
        # Convert glob pattern to regex
        regex_pattern = pattern.replace("*", ".*").replace("?", ".")
        return bool(re.search(regex_pattern, file_path))
    
    def _scan_file(self, file_path: str) -> None:
        """Scan a single file for typos."""
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            
            file_extension = Path(file_path).suffix.lower()
            
            if file_extension in ['.cs', '.js']:
                self._scan_code_file(file_path, content)
            elif file_extension in ['.md', '.txt']:
                self._scan_text_file(file_path, content)
            elif file_extension in ['.json', '.xml']:
                self._scan_data_file(file_path, content)
            else:
                self._scan_generic_file(file_path, content)
                
        except Exception as e:
            self.logger.error(f"Error scanning file {file_path}: {e}")
    
    def _scan_code_file(self, file_path: str, content: str) -> None:
        """Scan code files (.cs, .js) for typos."""
        lines = content.split('\\n')
        
        for line_num, line in enumerate(lines, 1):
            # Check comments
            self._check_comments(file_path, line_num, line)
            
            # Check string literals
            self._check_string_literals(file_path, line_num, line)
    
    def _scan_text_file(self, file_path: str, content: str) -> None:
        """Scan text files (.md, .txt) for typos."""
        lines = content.split('\\n')
        
        for line_num, line in enumerate(lines, 1):
            # Skip code blocks in markdown
            if file_path.endswith('.md') and (line.strip().startswith('```') or line.strip().startswith('    ')):
                continue
            
            self._check_text_content(file_path, line_num, line)
    
    def _scan_data_file(self, file_path: str, content: str) -> None:
        """Scan data files (.json, .xml) for typos."""
        if file_path.endswith('.json'):
            self._scan_json_file(file_path, content)
        elif file_path.endswith('.xml'):
            self._scan_xml_file(file_path, content)
    
    def _scan_generic_file(self, file_path: str, content: str) -> None:
        """Scan generic files for typos."""
        lines = content.split('\\n')
        
        for line_num, line in enumerate(lines, 1):
            self._check_text_content(file_path, line_num, line)
    
    def _check_comments(self, file_path: str, line_num: int, line: str) -> None:
        """Check comments for typos."""
        # C# comments
        if '//' in line:
            comment_part = line[line.find('//')+2:].strip()
            self._check_text_content(file_path, line_num, comment_part, context="comment")
        
        # Multi-line comments (simplified)
        if '/*' in line and '*/' in line:
            start = line.find('/*') + 2
            end = line.find('*/')
            comment_part = line[start:end].strip()
            self._check_text_content(file_path, line_num, comment_part, context="comment")
    
    def _check_string_literals(self, file_path: str, line_num: int, line: str) -> None:
        """Check string literals for typos."""
        # Find string literals (simplified)
        string_pattern = r'"([^"]*)"'
        matches = re.finditer(string_pattern, line)
        
        for match in matches:
            string_content = match.group(1)
            # Skip format strings and other special cases
            if not self._should_ignore_string(string_content):
                self._check_text_content(file_path, line_num, string_content, context="string")
    
    def _check_text_content(self, file_path: str, line_num: int, text: str, context: str = "text") -> None:
        """Check text content for typos."""
        if not text.strip():
            return
        
        # Skip URLs
        if 'http' in text or 'www.' in text:
            return
        
        # Extract words
        words = re.findall(r'\\b[a-zA-Z]+\\b', text)
        
        for word in words:
            if self._is_typo(word):
                suggestions = self._get_suggestions(word)
                
                finding = {
                    'file': file_path,
                    'line': line_num,
                    'word': word,
                    'context': context,
                    'suggestions': suggestions,
                    'severity': self._get_severity(context),
                    'confidence': self._get_confidence(word, suggestions)
                }
                
                self.findings.append(finding)
                self.stats['typos_found'] += 1
    
    def _is_typo(self, word: str) -> bool:
        """Check if a word is a typo."""
        # Skip short words
        if len(word) < 3:
            return False
        
        # Skip all caps (likely abbreviations)
        if word.isupper():
            return False
        
        # Skip camelCase and PascalCase words
        if self._is_camel_case(word) or self._is_pascal_case(word):
            return False
        
        # Check against custom dictionary
        if word.lower() in [term.lower() for term in self._get_all_custom_terms()]:
            return False
        
        # Use spell checker if available
        if self.spell_checker:
            return word.lower() not in self.spell_checker
        
        # Fallback: check against basic patterns
        return self._basic_typo_check(word)
    
    def _is_camel_case(self, word: str) -> bool:
        """Check if word is in camelCase."""
        return bool(re.match(r'^[a-z]+([A-Z][a-z]*)*$', word))
    
    def _is_pascal_case(self, word: str) -> bool:
        """Check if word is in PascalCase."""
        return bool(re.match(r'^[A-Z][a-z]*([A-Z][a-z]*)*$', word))
    
    def _get_all_custom_terms(self) -> List[str]:
        """Get all custom terms from configuration."""
        terms = []
        for category in self.config['custom_dictionary'].values():
            terms.extend(category)
        return terms
    
    def _basic_typo_check(self, word: str) -> bool:
        """Basic typo check using common patterns."""
        # Check for common typos
        common_typos = {
            'teh': 'the',
            'adn': 'and',
            'hte': 'the',
            'nad': 'and',
            'taht': 'that',
            'jsut': 'just',
            'liek': 'like',
            'mroe': 'more',
            'thna': 'than',
            'waht': 'what',
            'whne': 'when',
            'whih': 'which',
            'whcih': 'which',
            'becuase': 'because',
            'sicne': 'since',
            'recieve': 'receive',
            'seperate': 'separate',
            'occured': 'occurred',
            'occuring': 'occurring',
            'occurence': 'occurrence',
            'definately': 'definitely',
            'neccessary': 'necessary',
            'succesful': 'successful',
            'sucessful': 'successful',
            'accomodate': 'accommodate',
            'begining': 'beginning',
            'calender': 'calendar',
            'recieved': 'received',
            'commited': 'committed',
            'comitted': 'committed',
            'refered': 'referred',
            'refering': 'referring',
            'transfered': 'transferred',
            'transfering': 'transferring',
            'occassion': 'occasion',
            'occassional': 'occasional',
            'occassionally': 'occasionally',
            'recomend': 'recommend',
            'recomendation': 'recommendation',
            'reccomend': 'recommend',
            'reccomendation': 'recommendation',
            'maintainence': 'maintenance',
            'maintainance': 'maintenance',
            'existance': 'existence',
            'existant': 'existent',
            'resistence': 'resistance',
            'persistance': 'persistence',
            'independance': 'independence',
            'dependant': 'dependent',
            'independant': 'independent',
            'concensus': 'consensus',
            'liason': 'liaison',
            'mispell': 'misspell',
            'mispelling': 'misspelling',
            'mispelled': 'misspelled',
            'fourty': 'forty',
            'ninty': 'ninety',
            'thier': 'their',
            'theirs': 'theirs',
            'wether': 'whether',
            'completly': 'completely',
            'immediatly': 'immediately',
            'aproximately': 'approximately',
            'aproximate': 'approximate',
            'similiar': 'similar',
            'familar': 'familiar',
            'simular': 'similar',
            'stoped': 'stopped',
            'droped': 'dropped',
            'geting': 'getting',
            'runing': 'running',
            'begining': 'beginning',
            'planing': 'planning',
            'wining': 'winning',
            'shinning': 'shining',
            'stoping': 'stopping',
            'droping': 'dropping',
            'arguement': 'argument',
            'judgement': 'judgment',
            'acknowlegment': 'acknowledgment',
            'acknowlegement': 'acknowledgement',
            'priviledge': 'privilege',
            'privilage': 'privilege',
            'occurance': 'occurrence',
            'developement': 'development',
            'enviroment': 'environment',
            'enviromental': 'environmental',
            'goverment': 'government',
            'govermental': 'governmental',
            'temperture': 'temperature',
            'temprature': 'temperature',
            'seperation': 'separation',
            'explaination': 'explanation',
            'apparant': 'apparent',
            'apparantly': 'apparently',
            'appearence': 'appearance',
            'occured': 'occurred',
            'prefered': 'preferred',
            'prefering': 'preferring',
            'diferent': 'different',
            'diference': 'difference',
            'definite': 'definite',
            'definate': 'definite',
            'definitly': 'definitely',
            'definatly': 'definitely',
            'seperate': 'separate',
            'seperately': 'separately',
            'seperating': 'separating',
            'seperator': 'separator',
            'libary': 'library',
            'libaray': 'library',
            'libery': 'library',
            'febuary': 'February',
            'feburary': 'February',
            'janury': 'January',
            'janaury': 'January',
            'wendsday': 'Wednesday',
            'wensday': 'Wednesday',
            'wednsday': 'Wednesday',
            'thirsday': 'Thursday',
            'thusday': 'Thursday',
            'teusday': 'Tuesday',
            'tusday': 'Tuesday',
            'satruday': 'Saturday',
            'saterday': 'Saturday',
            'suday': 'Sunday',
            'sunady': 'Sunday',
            'mondya': 'Monday',
            'mondy': 'Monday',
            'fridya': 'Friday',
            'firday': 'Friday',
            'tommorow': 'tomorrow',
            'tomarrow': 'tomorrow',
            'tommorrow': 'tomorrow',
            'tongiht': 'tonight',
            'tonihgt': 'tonight',
            'yesteday': 'yesterday',
            'yesturday': 'yesterday',
            'calender': 'calendar',
            'calander': 'calendar',
            'lenght': 'length',
            'hieght': 'height',
            'widht': 'width',
            'weigth': 'weight',
            'simliar': 'similar',
            'simalar': 'similar',
            'exmaple': 'example',
            'examlpe': 'example',
            'exampel': 'example',
            'excample': 'example',
            'eample': 'example',
            'exmple': 'example',
            'exapmle': 'example',
            'exmaple': 'example',
            'exampe': 'example'
        }
        
        return word.lower() in common_typos
    
    def _get_suggestions(self, word: str) -> List[str]:
        """Get correction suggestions for a word."""
        if self.spell_checker:
            candidates = self.spell_checker.candidates(word)
            if candidates:
                return list(candidates)[:self.config['correction_settings']['suggest_count']]
        
        # Fallback to basic suggestions
        return self._get_basic_suggestions(word)
    
    def _get_basic_suggestions(self, word: str) -> List[str]:
        """Get basic suggestions for common typos."""
        common_typos = {
            'teh': ['the'],
            'adn': ['and'],
            'hte': ['the'],
            'nad': ['and'],
            'taht': ['that'],
            'jsut': ['just'],
            'liek': ['like'],
            'mroe': ['more'],
            'thna': ['than'],
            'waht': ['what'],
            'whne': ['when'],
            'whih': ['which'],
            'whcih': ['which'],
            'becuase': ['because'],
            'sicne': ['since'],
            'recieve': ['receive'],
            'seperate': ['separate'],
            'occured': ['occurred'],
            'occuring': ['occurring'],
            'occurence': ['occurrence'],
            'definately': ['definitely'],
            'neccessary': ['necessary'],
            'succesful': ['successful'],
            'sucessful': ['successful'],
            'accomodate': ['accommodate'],
            'begining': ['beginning'],
            'calender': ['calendar'],
            'recieved': ['received'],
            'commited': ['committed'],
            'comitted': ['committed'],
            'refered': ['referred'],
            'refering': ['referring'],
            'transfered': ['transferred'],
            'transfering': ['transferring']
        }
        
        return common_typos.get(word.lower(), [])
    
    def _get_severity(self, context: str) -> str:
        """Get severity level based on context."""
        severity_map = {
            'comment': 'medium',
            'string': 'high',
            'text': 'medium',
            'documentation': 'low'
        }
        
        return severity_map.get(context, 'medium')
    
    def _get_confidence(self, word: str, suggestions: List[str]) -> float:
        """Get confidence score for typo detection."""
        if not suggestions:
            return 0.5
        
        # Simple confidence calculation
        if len(suggestions) == 1:
            return 0.9
        elif len(suggestions) <= 3:
            return 0.7
        else:
            return 0.5
    
    def _should_ignore_string(self, string_content: str) -> bool:
        """Check if string should be ignored."""
        # Skip format strings
        if '{' in string_content or '%' in string_content:
            return True
        
        # Skip regex patterns
        if any(char in string_content for char in ['[', ']', '(', ')', '|', '^', '$', '+', '*', '?']):
            return True
        
        # Skip SQL-like strings
        if any(keyword in string_content.upper() for keyword in ['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'CREATE', 'DROP']):
            return True
        
        return False
    
    def _scan_json_file(self, file_path: str, content: str) -> None:
        """Scan JSON file for typos."""
        try:
            data = json.loads(content)
            self._scan_json_values(file_path, data)
        except json.JSONDecodeError:
            # If JSON is invalid, scan as text
            self._scan_generic_file(file_path, content)
    
    def _scan_json_values(self, file_path: str, data: Any, path: str = "") -> None:
        """Recursively scan JSON values for typos."""
        if isinstance(data, dict):
            for key, value in data.items():
                new_path = f"{path}.{key}" if path else key
                self._scan_json_values(file_path, value, new_path)
        elif isinstance(data, list):
            for i, item in enumerate(data):
                new_path = f"{path}[{i}]"
                self._scan_json_values(file_path, item, new_path)
        elif isinstance(data, str):
            # Check string values for typos
            if data and not self._should_ignore_string(data):
                self._check_text_content(file_path, 0, data, context="json_value")
    
    def _scan_xml_file(self, file_path: str, content: str) -> None:
        """Scan XML file for typos."""
        # Simple XML text extraction
        text_content = re.sub(r'<[^>]+>', ' ', content)
        lines = text_content.split('\\n')
        
        for line_num, line in enumerate(lines, 1):
            self._check_text_content(file_path, line_num, line, context="xml_text")
    
    def generate_report(self, output_path: str = "typo_report.json") -> None:
        """Generate a detailed report of findings."""
        report = {
            'timestamp': datetime.now().isoformat(),
            'statistics': self.stats,
            'findings': self.findings,
            'summary': self._generate_summary()
        }
        
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(report, f, indent=2, ensure_ascii=False)
        
        self.logger.info(f"Report generated: {output_path}")
    
    def generate_markdown_report(self, output_path: str = "typo_summary.md") -> None:
        """Generate a markdown summary report."""
        summary = self._generate_summary()
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write("# Typo Detection Report\\n\\n")
            f.write(f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\\n\\n")
            
            f.write("## Summary\\n\\n")
            f.write(f"- **Files Scanned:** {self.stats['files_scanned']}\\n")
            f.write(f"- **Typos Found:** {self.stats['typos_found']}\\n")
            f.write(f"- **Corrections Applied:** {self.stats['corrections_applied']}\\n")
            f.write(f"- **Files Modified:** {self.stats['files_modified']}\\n\\n")
            
            f.write("## Findings by File\\n\\n")
            for file_path, file_findings in summary['files'].items():
                f.write(f"### {file_path}\\n\\n")
                f.write(f"**Typos found:** {len(file_findings)}\\n\\n")
                
                for finding in file_findings:
                    f.write(f"- **Line {finding['line']}:** `{finding['word']}` ")
                    f.write(f"(Context: {finding['context']}, Severity: {finding['severity']})\\n")
                    if finding['suggestions']:
                        f.write(f"  - **Suggestions:** {', '.join(finding['suggestions'])}\\n")
                f.write("\\n")
            
            f.write("## Findings by Context\\n\\n")
            for context, count in summary['contexts'].items():
                f.write(f"- **{context.title()}:** {count} typos\\n")
            
            f.write("\\n## Findings by Severity\\n\\n")
            for severity, count in summary['severities'].items():
                f.write(f"- **{severity.title()}:** {count} typos\\n")
        
        self.logger.info(f"Markdown report generated: {output_path}")
    
    def _generate_summary(self) -> Dict:
        """Generate summary statistics."""
        summary = {
            'files': defaultdict(list),
            'contexts': defaultdict(int),
            'severities': defaultdict(int)
        }
        
        for finding in self.findings:
            summary['files'][finding['file']].append(finding)
            summary['contexts'][finding['context']] += 1
            summary['severities'][finding['severity']] += 1
        
        return {
            'files': dict(summary['files']),
            'contexts': dict(summary['contexts']),
            'severities': dict(summary['severities'])
        }
    
    def apply_corrections(self, backup: bool = True) -> None:
        """Apply corrections to files."""
        if not self.config['correction_settings']['auto_fix']:
            self.logger.warning("Auto-fix is disabled in configuration")
            return
        
        files_to_modify = defaultdict(list)
        
        # Group findings by file
        for finding in self.findings:
            if finding['suggestions'] and finding['confidence'] >= self.config['correction_settings']['min_confidence']:
                files_to_modify[finding['file']].append(finding)
        
        for file_path, file_findings in files_to_modify.items():
            if backup:
                self._backup_file(file_path)
            
            self._apply_file_corrections(file_path, file_findings)
            self.stats['files_modified'] += 1
    
    def _backup_file(self, file_path: str) -> None:
        """Create a backup of the file."""
        backup_path = f"{file_path}.backup"
        with open(file_path, 'r', encoding='utf-8') as src:
            with open(backup_path, 'w', encoding='utf-8') as dst:
                dst.write(src.read())
        
        self.logger.info(f"Backup created: {backup_path}")
    
    def _apply_file_corrections(self, file_path: str, findings: List[Dict]) -> None:
        """Apply corrections to a single file."""
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Sort findings by line number in reverse order to avoid offset issues
        findings.sort(key=lambda x: x['line'], reverse=True)
        
        lines = content.split('\\n')
        
        for finding in findings:
            line_num = finding['line'] - 1  # Convert to 0-based index
            if 0 <= line_num < len(lines):
                suggestion = finding['suggestions'][0]  # Use first suggestion
                lines[line_num] = lines[line_num].replace(finding['word'], suggestion)
                self.stats['corrections_applied'] += 1
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write('\\n'.join(lines))
        
        self.logger.info(f"Applied corrections to: {file_path}")


def main():
    """Main entry point."""
    parser = argparse.ArgumentParser(description='Typo Detection System for Dynamics CRM DevKit')
    parser.add_argument('--config', '-c', default='typo_config.json', help='Configuration file path')
    parser.add_argument('--root-path', '-r', default='.', help='Root path to scan')
    parser.add_argument('--report-only', action='store_true', help='Generate report only, no corrections')
    parser.add_argument('--auto-fix', action='store_true', help='Apply corrections automatically')
    parser.add_argument('--output-json', '-j', default='typo_report.json', help='JSON report output path')
    parser.add_argument('--output-md', '-m', default='typo_summary.md', help='Markdown report output path')
    parser.add_argument('--verbose', '-v', action='store_true', help='Verbose logging')
    
    args = parser.parse_args()
    
    # Setup logging level
    if args.verbose:
        logging.getLogger('typo_detector').setLevel(logging.DEBUG)
    
    # Initialize detector
    detector = TypoDetector(args.config)
    
    # Scan repository
    detector.scan_repository(args.root_path)
    
    # Generate reports
    detector.generate_report(args.output_json)
    detector.generate_markdown_report(args.output_md)
    
    # Apply corrections if requested
    if args.auto_fix and not args.report_only:
        detector.apply_corrections()
    
    print(f"\\nScan complete!")
    print(f"Files scanned: {detector.stats['files_scanned']}")
    print(f"Typos found: {detector.stats['typos_found']}")
    print(f"Corrections applied: {detector.stats['corrections_applied']}")
    print(f"Files modified: {detector.stats['files_modified']}")


if __name__ == "__main__":
    main()