# Typo Detection System for Dynamics CRM DevKit

This system provides automated typo detection and correction across the entire codebase using intelligent spell checking and contextual analysis.

## Features

- **Comprehensive Scanning**: Analyzes all source files (.cs, .js, .md, .txt, .json, .xml)
- **Context-Aware Detection**: Differentiates between code identifiers, comments, strings, and documentation
- **Smart Filtering**: Excludes technical terms, abbreviations, and domain-specific terminology
- **Structured Reporting**: Generates detailed reports with categorized findings
- **Correction Suggestions**: Provides intelligent suggestions for identified typos
- **Batch Processing**: Can process large codebases efficiently
- **Integration Ready**: Designed for CI/CD pipeline integration

## Usage

### Quick Start

```bash
# Run basic typo detection on entire repository
python typo_detector.py

# Run with custom configuration
python typo_detector.py --config custom_config.json

# Generate report only (no corrections)
python typo_detector.py --report-only

# Apply suggestions automatically (with backup)
python typo_detector.py --auto-fix
```

### Configuration

The system uses a configuration file (`typo_config.json`) to customize behavior:

- File patterns to include/exclude
- Custom dictionary terms
- Context-specific rules
- Severity levels
- Output formats

## Output

The system generates:

1. **Detailed Report** (`typo_report.json`): Machine-readable findings
2. **Summary Report** (`typo_summary.md`): Human-readable overview
3. **Correction Log** (`corrections.log`): Applied changes record

## Integration

### CI/CD Pipeline

Add to your build pipeline:

```yaml
- name: Check for typos
  run: |
    python typo-detection/typo_detector.py --report-only
    # Fail build if critical typos found
    python typo-detection/check_critical_typos.py
```

### Pre-commit Hook

```bash
#!/bin/bash
python typo-detection/typo_detector.py --changed-files-only
```

## Technical Details

The system uses:

- **pyspellchecker**: Core spell checking functionality
- **textdistance**: Fuzzy string matching for suggestions
- **ast**: AST parsing for code analysis
- **regex**: Advanced pattern matching
- **json**: Structured data handling