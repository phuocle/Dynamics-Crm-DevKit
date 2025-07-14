#!/usr/bin/env python3
"""
CI/CD Integration Script for Typo Detection
Designed to run in continuous integration pipelines
"""

import os
import sys
import json
import subprocess
from datetime import datetime
from pathlib import Path

def run_typo_check(root_path='.', fail_on_typos=True, max_typos=0):
    """
    Run typo detection and return results.
    
    Args:
        root_path: Root directory to scan
        fail_on_typos: Whether to fail the CI build if typos are found
        max_typos: Maximum number of typos allowed before failing
        
    Returns:
        dict: Results of the typo check
    """
    
    # Run the comprehensive typo scanner
    script_dir = Path(__file__).parent
    scanner_path = script_dir / 'comprehensive_typo_system.py'
    
    cmd = [
        sys.executable, str(scanner_path),
        '--root-path', root_path,
        '--report-only',
        '--max-workers', '2',
        '--output-dir', '.'
    ]
    
    print(f"Running typo detection on {root_path}...")
    result = subprocess.run(cmd, capture_output=True, text=True)
    
    # Parse the output
    typos_found = 0
    files_with_typos = 0
    
    if result.returncode == 0:
        # Extract statistics from output
        lines = result.stdout.split('\n')
        for line in lines:
            if 'Typos found:' in line:
                typos_found = int(line.split(':')[1].strip().replace(',', ''))
            elif 'Files with typos:' in line:
                files_with_typos = int(line.split(':')[1].strip().replace(',', ''))
    
    # Load the detailed report if it exists
    report_files = list(Path('.').glob('comprehensive_typo_report_*.json'))
    detailed_report = None
    
    if report_files:
        latest_report = max(report_files, key=os.path.getctime)
        with open(latest_report, 'r') as f:
            detailed_report = json.load(f)
    
    results = {
        'success': result.returncode == 0,
        'typos_found': typos_found,
        'files_with_typos': files_with_typos,
        'detailed_report': detailed_report,
        'output': result.stdout,
        'error': result.stderr
    }
    
    # Determine if we should fail the build
    should_fail = False
    if fail_on_typos and typos_found > max_typos:
        should_fail = True
    
    results['should_fail'] = should_fail
    
    return results


def generate_ci_report(results):
    """Generate a CI-friendly report."""
    
    print("\n" + "="*60)
    print("TYPO DETECTION REPORT")
    print("="*60)
    
    if results['success']:
        print(f"✅ Scan completed successfully")
        print(f"📊 Typos found: {results['typos_found']}")
        print(f"📁 Files with typos: {results['files_with_typos']}")
        
        if results['detailed_report']:
            print("\n📋 DETAILED FINDINGS:")
            for finding in results['detailed_report']['findings']:
                print(f"  {finding['file']}:{finding['line']} - {finding['typo']} → {finding['correction']}")
    else:
        print("❌ Scan failed")
        print(f"Error: {results['error']}")
    
    print("\n" + "="*60)
    
    if results['should_fail']:
        print("🚨 BUILD SHOULD FAIL - Too many typos found!")
        return False
    else:
        print("✅ Build can continue")
        return True


def create_github_actions_workflow():
    """Create a GitHub Actions workflow file."""
    
    workflow_content = """name: Typo Detection

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  typo-check:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Python
      uses: actions/setup-python@v3
      with:
        python-version: '3.9'
    
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install pyspellchecker textdistance
    
    - name: Run typo detection
      run: |
        python typo-detection/ci_integration.py --root-path . --fail-on-typos --max-typos 5
    
    - name: Upload typo report
      if: always()
      uses: actions/upload-artifact@v3
      with:
        name: typo-report
        path: |
          comprehensive_typo_report_*.json
          comprehensive_typo_report_*.md
          comprehensive_typo_report_*.csv
"""
    
    # Create .github/workflows directory if it doesn't exist
    workflow_dir = Path('.github/workflows')
    workflow_dir.mkdir(parents=True, exist_ok=True)
    
    # Write workflow file
    workflow_file = workflow_dir / 'typo-detection.yml'
    with open(workflow_file, 'w') as f:
        f.write(workflow_content)
    
    print(f"Created GitHub Actions workflow: {workflow_file}")


def create_pre_commit_hook():
    """Create a pre-commit hook."""
    
    hook_content = """#!/bin/bash
# Pre-commit hook for typo detection

echo "Running typo detection..."

# Run typo detection on staged files
python typo-detection/ci_integration.py --root-path . --fail-on-typos --max-typos 0

if [ $? -ne 0 ]; then
    echo "❌ Commit rejected due to typos. Please fix them before committing."
    exit 1
fi

echo "✅ No typos found. Commit approved."
exit 0
"""
    
    # Create .git/hooks directory if it doesn't exist
    hooks_dir = Path('.git/hooks')
    if hooks_dir.exists():
        hook_file = hooks_dir / 'pre-commit'
        with open(hook_file, 'w') as f:
            f.write(hook_content)
        
        # Make it executable
        os.chmod(hook_file, 0o755)
        print(f"Created pre-commit hook: {hook_file}")
    else:
        print("Warning: .git/hooks directory not found. Make sure you're in a git repository.")


def main():
    """Main entry point for CI integration."""
    import argparse
    
    parser = argparse.ArgumentParser(description='CI/CD Integration for Typo Detection')
    parser.add_argument('--root-path', '-r', default='.', help='Root path to scan')
    parser.add_argument('--fail-on-typos', action='store_true', help='Fail build if typos are found')
    parser.add_argument('--max-typos', type=int, default=0, help='Maximum number of typos allowed')
    parser.add_argument('--setup-github-actions', action='store_true', help='Create GitHub Actions workflow')
    parser.add_argument('--setup-pre-commit', action='store_true', help='Create pre-commit hook')
    
    args = parser.parse_args()
    
    # Setup integrations if requested
    if args.setup_github_actions:
        create_github_actions_workflow()
        return
    
    if args.setup_pre_commit:
        create_pre_commit_hook()
        return
    
    # Run typo detection
    results = run_typo_check(
        root_path=args.root_path,
        fail_on_typos=args.fail_on_typos,
        max_typos=args.max_typos
    )
    
    # Generate report
    success = generate_ci_report(results)
    
    # Exit with appropriate code
    if not success:
        sys.exit(1)
    else:
        sys.exit(0)


if __name__ == "__main__":
    main()