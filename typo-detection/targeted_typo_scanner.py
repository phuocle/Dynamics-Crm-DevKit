#!/usr/bin/env python3
"""
Targeted Typo Scanner for Dynamics CRM DevKit
Specifically looks for known typos in the codebase.
"""

import os
import re
import json
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Tuple
import glob

class TargetedTypoScanner:
    """Scanner that specifically looks for known typos."""
    
    def __init__(self):
        self.findings = []
        self.stats = {
            'files_scanned': 0,
            'typos_found': 0,
            'files_with_typos': 0
        }
        
        # Known typos to look for
        self.typos_to_find = {
            'webresouce': 'webresource',
            'dependant': 'dependent',
            'seperately': 'separately',
            'seperate': 'separate',
            'seperation': 'separation',
            'occured': 'occurred',
            'occuring': 'occurring',
            'occurence': 'occurrence',
            'recieve': 'receive',
            'recieved': 'received',
            'recieving': 'receiving',
            'definately': 'definitely',
            'definatly': 'definitely',
            'neccessary': 'necessary',
            'succesful': 'successful',
            'sucessful': 'successful',
            'accomodate': 'accommodate',
            'begining': 'beginning',
            'calender': 'calendar',
            'commited': 'committed',
            'comitted': 'committed',
            'refered': 'referred',
            'refering': 'referring',
            'transfered': 'transferred',
            'transfering': 'transferring',
            'maintainence': 'maintenance',
            'maintainance': 'maintenance',
            'existance': 'existence',
            'existant': 'existent',
            'resistence': 'resistance',
            'persistance': 'persistence',
            'independance': 'independence',
            'independant': 'independent',
            'concensus': 'consensus',
            'liason': 'liaison',
            'mispell': 'misspell',
            'mispelling': 'misspelling',
            'mispelled': 'misspelled',
            'fourty': 'forty',
            'ninty': 'ninety',
            'thier': 'their',
            'wether': 'whether',
            'completly': 'completely',
            'immediatly': 'immediately',
            'aproximately': 'approximately',
            'aproximate': 'approximate',
            'similiar': 'similar',
            'familar': 'familiar',
            'simular': 'similar',
            'simliar': 'similar',
            'simalar': 'similar',
            'developement': 'development',
            'enviroment': 'environment',
            'enviromental': 'environmental',
            'goverment': 'government',
            'govermental': 'governmental',
            'temperture': 'temperature',
            'temprature': 'temperature',
            'explaination': 'explanation',
            'apparant': 'apparent',
            'apparantly': 'apparently',
            'appearence': 'appearance',
            'prefered': 'preferred',
            'prefering': 'preferring',
            'diferent': 'different',
            'diference': 'difference',
            'libary': 'library',
            'libaray': 'library',
            'libery': 'library',
            'lenght': 'length',
            'hieght': 'height',
            'widht': 'width',
            'weigth': 'weight',
            'exmaple': 'example',
            'examlpe': 'example',
            'exampel': 'example',
            'excample': 'example',
            'eample': 'example',
            'exmple': 'example',
            'exapmle': 'example',
            'exampe': 'example',
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
            'buisness': 'business',
            'busness': 'business',
            'busines': 'business',
            'bussiness': 'business',
            'busniess': 'business',
            'performace': 'performance',
            'performence': 'performance',
            'perfomance': 'performance',
            'implmentation': 'implementation',
            'implementaion': 'implementation',
            'implemenation': 'implementation',
            'configuraiton': 'configuration',
            'configuation': 'configuration',
            'configurtion': 'configuration',
            'paramater': 'parameter',
            'paramaters': 'parameters',
            'paramter': 'parameter',
            'paramters': 'parameters',
            'charachter': 'character',
            'charachters': 'characters',
            'charcter': 'character',
            'charcters': 'characters',
            'funciton': 'function',
            'funcitons': 'functions',
            'fucntion': 'function',
            'fucntions': 'functions',
            'funtion': 'function',
            'funtions': 'functions',
            'variabl': 'variable',
            'varaible': 'variable',
            'varabile': 'variable',
            'variabel': 'variable',
            'vairable': 'variable',
            'intializtion': 'initialization',
            'initalization': 'initialization',
            'initializaton': 'initialization',
            'initilization': 'initialization',
            'initilize': 'initialize',
            'initalize': 'initialize',
            'initializtion': 'initialization',
            'intialize': 'initialize',
            'intialise': 'initialize',
            'intialisation': 'initialization',
            'responsiblity': 'responsibility',
            'responsibilty': 'responsibility',
            'responcibility': 'responsibility',
            'authencation': 'authentication',
            'authentification': 'authentication',
            'authentiaction': 'authentication',
            'authenication': 'authentication',
            'authorisation': 'authorization',
            'authorizaiton': 'authorization',
            'authoriation': 'authorization',
            'authoriztion': 'authorization',
            'conneciton': 'connection',
            'conection': 'connection',
            'connetion': 'connection',
            'connectoin': 'connection',
            'connecton': 'connection',
            'conncetion': 'connection',
            'reponse': 'response',
            'respone': 'response',
            'respons': 'response',
            'respose': 'response',
            'repsone': 'response',
            'requets': 'request',
            'requset': 'request',
            'reques': 'request',
            'requst': 'request',
            'requiest': 'request',
            'registraion': 'registration',
            'regisration': 'registration',
            'registraiton': 'registration',
            'registraton': 'registration',
            'registeration': 'registration',
            'regristration': 'registration',
            'serilization': 'serialization',
            'serialiation': 'serialization',
            'serilisation': 'serialization',
            'serialiation': 'serialization',
            'deserilization': 'deserialization',
            'deserialiation': 'deserialization',
            'deserilisation': 'deserialization',
            'deserialiation': 'deserialization',
            'trnsaction': 'transaction',
            'transacion': 'transaction',
            'transacton': 'transaction',
            'transacction': 'transaction',
            'transation': 'transaction',
            'validaiton': 'validation',
            'validaton': 'validation',
            'validaion': 'validation',
            'validtion': 'validation',
            'vaildation': 'validation',
            'notificaiton': 'notification',
            'notificaton': 'notification',
            'notifcation': 'notification',
            'calculaiton': 'calculation',
            'calculaton': 'calculation',
            'calcualtion': 'calculation',
            'calcultion': 'calculation',
            'calcuation': 'calculation',
            'generaiton': 'generation',
            'generaton': 'generation',
            'geneartion': 'generation',
            'genertion': 'generation',
            'genration': 'generation',
            'customizaiton': 'customization',
            'customizaton': 'customization',
            'customisaton': 'customization',
            'customiztion': 'customization',
            'cusomization': 'customization',
            'personalizaiton': 'personalization',
            'personalizaton': 'personalization',
            'personalisaton': 'personalization',
            'personaliztion': 'personalization',
            'peronalization': 'personalization',
            'localizaiton': 'localization',
            'localizaton': 'localization',
            'localisaton': 'localization',
            'localiztion': 'localization',
            'globalizaiton': 'globalization',
            'globalizaton': 'globalization',
            'globalisaton': 'globalization',
            'globaliztion': 'globalization',
            'organizaiton': 'organization',
            'organizaton': 'organization',
            'organisaton': 'organization',
            'organiztion': 'organization',
            'organziation': 'organization',
            'optimizaiton': 'optimization',
            'optimizaton': 'optimization',
            'optimisaton': 'optimization',
            'optimiztion': 'optimization',
            'optmization': 'optimization',
            'synchronizaiton': 'synchronization',
            'synchronizaton': 'synchronization',
            'synchronisaton': 'synchronization',
            'synchroniztion': 'synchronization',
            'syncronization': 'synchronization'
        }
        
        # File patterns to include
        self.file_patterns = [
            '*.cs', '*.js', '*.md', '*.txt', '*.json', '*.xml',
            '*.html', '*.css', '*.yml', '*.yaml', '*.config'
        ]
        
        # Directories to exclude
        self.exclude_patterns = [
            'bin', 'obj', 'node_modules', 'packages', '.git', '.vs',
            'debug', 'release', 'temp', 'tmp', 'TestResults',
            'coverage', 'Published'
        ]
    
    def scan_repository(self, root_path: str = ".") -> List[Dict]:
        """Scan the repository for specific typos."""
        print(f"Starting targeted typo scan of repository: {root_path}")
        
        files_to_scan = self._find_files_to_scan(root_path)
        print(f"Found {len(files_to_scan)} files to scan")
        
        for file_path in files_to_scan:
            self._scan_file(file_path)
            self.stats['files_scanned'] += 1
        
        print(f"Targeted scan complete. Found {self.stats['typos_found']} typos in {self.stats['files_with_typos']} files")
        return self.findings
    
    def _find_files_to_scan(self, root_path: str) -> List[str]:
        """Find all files to scan."""
        files_to_scan = []
        
        for pattern in self.file_patterns:
            pattern_path = os.path.join(root_path, "**", pattern)
            matched_files = glob.glob(pattern_path, recursive=True)
            files_to_scan.extend(matched_files)
        
        # Remove duplicates
        files_to_scan = list(set(files_to_scan))
        
        # Filter out excluded directories
        filtered_files = []
        for file_path in files_to_scan:
            should_exclude = False
            for exclude_pattern in self.exclude_patterns:
                if f"/{exclude_pattern}/" in file_path or f"\\{exclude_pattern}\\" in file_path:
                    should_exclude = True
                    break
            
            if not should_exclude:
                filtered_files.append(file_path)
        
        return filtered_files
    
    def _scan_file(self, file_path: str) -> None:
        """Scan a single file for typos."""
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
            
            lines = content.split('\n')
            file_has_typos = False
            
            for line_num, line in enumerate(lines, 1):
                line_findings = self._scan_line(file_path, line_num, line)
                if line_findings:
                    file_has_typos = True
                    self.findings.extend(line_findings)
            
            if file_has_typos:
                self.stats['files_with_typos'] += 1
                
        except Exception as e:
            print(f"Error scanning file {file_path}: {e}")
    
    def _scan_line(self, file_path: str, line_num: int, line: str) -> List[Dict]:
        """Scan a single line for typos."""
        findings = []
        
        # Create a case-insensitive search for each typo
        for typo, correction in self.typos_to_find.items():
            # Search for whole words only
            pattern = r'\b' + re.escape(typo) + r'\b'
            matches = re.finditer(pattern, line, re.IGNORECASE)
            
            for match in matches:
                found_word = match.group()
                start_pos = match.start()
                end_pos = match.end()
                
                # Preserve the case of the original word
                if found_word.isupper():
                    suggested_correction = correction.upper()
                elif found_word.istitle():
                    suggested_correction = correction.title()
                else:
                    suggested_correction = correction
                
                # Skip if the "typo" is actually part of a larger word (camelCase, etc.)
                if self._is_part_of_identifier(line, start_pos, end_pos):
                    continue
                
                finding = {
                    'file': file_path,
                    'line': line_num,
                    'column': start_pos + 1,
                    'typo': found_word,
                    'correction': suggested_correction,
                    'context': self._get_context(line, found_word),
                    'severity': self._get_severity(file_path, line),
                    'confidence': 0.95,
                    'line_content': line.strip(),
                    'before': line[:start_pos],
                    'after': line[end_pos:]
                }
                
                findings.append(finding)
                self.stats['typos_found'] += 1
        
        return findings
    
    def _is_part_of_identifier(self, line: str, start_pos: int, end_pos: int) -> bool:
        """Check if the found word is part of a larger identifier."""
        # Check if there are word characters immediately before or after
        if start_pos > 0 and line[start_pos - 1].isalnum():
            return True
        if end_pos < len(line) and line[end_pos].isalnum():
            return True
        
        # Check if it's part of a camelCase or PascalCase identifier
        # Look for patterns like someWebresouce or WebresouceHandler
        context_before = line[max(0, start_pos - 20):start_pos]
        context_after = line[end_pos:min(len(line), end_pos + 20)]
        
        # If preceded by lowercase letter, might be camelCase
        if context_before and context_before[-1].islower():
            return True
        
        # If followed by uppercase letter, might be part of compound word
        if context_after and context_after[0].isupper():
            return True
        
        return False
    
    def _get_context(self, line: str, word: str) -> str:
        """Get context information for the typo."""
        line_lower = line.lower()
        
        if '//' in line or '/*' in line or '*/' in line:
            return 'comment'
        elif '"' in line or "'" in line:
            return 'string'
        elif line.strip().startswith('#'):
            return 'markdown_header'
        elif line.strip().startswith('*') or line.strip().startswith('-'):
            return 'markdown_list'
        elif any(keyword in line_lower for keyword in ['class', 'function', 'method', 'var', 'const', 'let']):
            return 'code'
        else:
            return 'text'
    
    def _get_severity(self, file_path: str, line: str) -> str:
        """Get severity based on file type and context."""
        if file_path.endswith('.md'):
            return 'medium'
        elif file_path.endswith('.txt'):
            return 'low'
        elif '//' in line or '/*' in line:
            return 'medium'
        elif '"' in line or "'" in line:
            return 'high'
        else:
            return 'medium'
    
    def generate_report(self, output_path: str = "targeted_typo_report.json") -> None:
        """Generate a detailed JSON report."""
        report = {
            'timestamp': datetime.now().isoformat(),
            'scanner': 'Targeted Typo Scanner',
            'statistics': self.stats,
            'findings': self.findings,
            'typos_searched': len(self.typos_to_find),
            'summary': self._generate_summary()
        }
        
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(report, f, indent=2, ensure_ascii=False)
        
        print(f"Targeted report generated: {output_path}")
    
    def generate_markdown_report(self, output_path: str = "targeted_typo_summary.md") -> None:
        """Generate a detailed markdown report."""
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write("# Targeted Typo Detection Report\n\n")
            f.write(f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
            
            f.write("## Summary\n\n")
            f.write(f"- **Files Scanned:** {self.stats['files_scanned']}\n")
            f.write(f"- **Typos Found:** {self.stats['typos_found']}\n")
            f.write(f"- **Files with Typos:** {self.stats['files_with_typos']}\n")
            f.write(f"- **Unique Typos Searched:** {len(self.typos_to_find)}\n\n")
            
            if self.findings:
                f.write("## Detailed Findings\n\n")
                
                # Group findings by file
                files_with_findings = {}
                for finding in self.findings:
                    file_path = finding['file']
                    if file_path not in files_with_findings:
                        files_with_findings[file_path] = []
                    files_with_findings[file_path].append(finding)
                
                for file_path, file_findings in sorted(files_with_findings.items()):
                    f.write(f"### {file_path}\n\n")
                    f.write(f"**Typos found:** {len(file_findings)}\n\n")
                    
                    for finding in file_findings:
                        f.write(f"**Line {finding['line']}, Column {finding['column']}:**\n")
                        f.write(f"- **Typo:** `{finding['typo']}`\n")
                        f.write(f"- **Correction:** `{finding['correction']}`\n")
                        f.write(f"- **Context:** {finding['context']}\n")
                        f.write(f"- **Severity:** {finding['severity']}\n")
                        f.write(f"- **Confidence:** {finding['confidence']:.1%}\n\n")
                        
                        f.write("**Line Content:**\n")
                        f.write(f"```\n{finding['line_content']}\n```\n\n")
                        
                        f.write("**Suggested Fix:**\n")
                        suggested_line = finding['before'] + finding['correction'] + finding['after']
                        f.write(f"```\n{suggested_line.strip()}\n```\n\n")
                        f.write("---\n\n")
                
                f.write("## Quick Fix Commands\n\n")
                f.write("You can use these commands to quickly fix the typos:\n\n")
                f.write("```bash\n")
                for finding in self.findings:
                    # Create a sed command for quick fixing
                    file_path = finding['file']
                    typo = finding['typo']
                    correction = finding['correction']
                    f.write(f"sed -i 's/\\b{typo}\\b/{correction}/g' '{file_path}'\n")
                f.write("```\n\n")
                
            else:
                f.write("## No Typos Found\n\n")
                f.write("The targeted scan did not find any of the specified typos in the repository.\n\n")
            
            f.write("## Statistics\n\n")
            summary = self._generate_summary()
            
            f.write("### By File Type\n\n")
            for ext, count in sorted(summary['file_types'].items()):
                f.write(f"- **{ext}:** {count} typos\n")
            
            f.write("\n### By Context\n\n")
            for context, count in sorted(summary['contexts'].items()):
                f.write(f"- **{context.title()}:** {count} typos\n")
            
            f.write("\n### By Severity\n\n")
            for severity, count in sorted(summary['severities'].items()):
                f.write(f"- **{severity.title()}:** {count} typos\n")
            
            f.write("\n### Most Common Typos\n\n")
            for typo, count in sorted(summary['typo_counts'].items(), key=lambda x: x[1], reverse=True):
                if count > 0:
                    f.write(f"- **{typo}:** {count} occurrences\n")
        
        print(f"Targeted markdown report generated: {output_path}")
    
    def _generate_summary(self) -> Dict:
        """Generate summary statistics."""
        summary = {
            'file_types': {},
            'contexts': {},
            'severities': {},
            'typo_counts': {}
        }
        
        for finding in self.findings:
            # File types
            ext = Path(finding['file']).suffix or 'no_extension'
            summary['file_types'][ext] = summary['file_types'].get(ext, 0) + 1
            
            # Contexts
            context = finding['context']
            summary['contexts'][context] = summary['contexts'].get(context, 0) + 1
            
            # Severities
            severity = finding['severity']
            summary['severities'][severity] = summary['severities'].get(severity, 0) + 1
            
            # Typo counts
            typo = finding['typo'].lower()
            summary['typo_counts'][typo] = summary['typo_counts'].get(typo, 0) + 1
        
        return summary
    
    def apply_corrections(self, backup: bool = True) -> None:
        """Apply corrections to files."""
        if not self.findings:
            print("No typos found to correct.")
            return
        
        files_to_modify = {}
        
        # Group findings by file
        for finding in self.findings:
            file_path = finding['file']
            if file_path not in files_to_modify:
                files_to_modify[file_path] = []
            files_to_modify[file_path].append(finding)
        
        corrections_applied = 0
        
        for file_path, file_findings in files_to_modify.items():
            if backup:
                self._backup_file(file_path)
            
            corrections_applied += self._apply_file_corrections(file_path, file_findings)
        
        print(f"Applied {corrections_applied} corrections to {len(files_to_modify)} files")
    
    def _backup_file(self, file_path: str) -> None:
        """Create a backup of the file."""
        backup_path = f"{file_path}.backup"
        with open(file_path, 'r', encoding='utf-8') as src:
            with open(backup_path, 'w', encoding='utf-8') as dst:
                dst.write(src.read())
        print(f"Backup created: {backup_path}")
    
    def _apply_file_corrections(self, file_path: str, findings: List[Dict]) -> int:
        """Apply corrections to a single file."""
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        corrections_applied = 0
        
        # Apply corrections (simple string replacement)
        for finding in findings:
            typo = finding['typo']
            correction = finding['correction']
            
            # Use word boundaries to ensure we only replace whole words
            pattern = r'\b' + re.escape(typo) + r'\b'
            new_content = re.sub(pattern, correction, content, flags=re.IGNORECASE)
            
            if new_content != content:
                content = new_content
                corrections_applied += 1
        
        # Write back the corrected content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        if corrections_applied > 0:
            print(f"Applied {corrections_applied} corrections to: {file_path}")
        
        return corrections_applied


def main():
    """Main entry point."""
    import argparse
    
    parser = argparse.ArgumentParser(description='Targeted Typo Scanner for Dynamics CRM DevKit')
    parser.add_argument('--root-path', '-r', default='.', help='Root path to scan')
    parser.add_argument('--report-only', action='store_true', help='Generate report only, no corrections')
    parser.add_argument('--auto-fix', action='store_true', help='Apply corrections automatically')
    parser.add_argument('--output-json', '-j', default='targeted_typo_report.json', help='JSON report output path')
    parser.add_argument('--output-md', '-m', default='targeted_typo_summary.md', help='Markdown report output path')
    
    args = parser.parse_args()
    
    # Initialize scanner
    scanner = TargetedTypoScanner()
    
    # Scan repository
    scanner.scan_repository(args.root_path)
    
    # Generate reports
    scanner.generate_report(args.output_json)
    scanner.generate_markdown_report(args.output_md)
    
    # Apply corrections if requested
    if args.auto_fix and not args.report_only:
        scanner.apply_corrections()
    
    print(f"\nTargeted scan complete!")
    print(f"Files scanned: {scanner.stats['files_scanned']}")
    print(f"Typos found: {scanner.stats['typos_found']}")
    print(f"Files with typos: {scanner.stats['files_with_typos']}")


if __name__ == "__main__":
    main()