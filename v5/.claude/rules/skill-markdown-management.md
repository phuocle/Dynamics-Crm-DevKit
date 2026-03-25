
# SKILL: Markdown Gold Standard for AI Training

## 1. OVERVIEW

Markdown is not just for human readability — it is the optimal "lingua franca" for AI. Following Markdown standards helps AI:

- **Improve context comprehension:** 40-60% better at understanding structure and meaning.
- **Save resources:** ~25% fewer tokens compared to HTML/XML or raw text.
- **Increase processing speed:** ~38% faster processing thanks to clear structure.

## 2. STRUCTURAL RULES

### Heading Hierarchy

AI relies on headings to understand parent-child relationships and content context.

- **REQUIRED:** Use strict logical order: `H1` -> `H2` -> `H3`.
- **FORBIDDEN:** Skip heading levels (e.g., jumping from `H1` to `H4` just for smaller text).
- **PURPOSE:** Help AI build an accurate knowledge tree.

### Data Tables

Tables are the best way for AI to compare and extract multi-dimensional data.

- **Requirements:** - Always include a clear header row.
  - Align columns using `|---|` syntax.
  - Do not leave cells meaninglessly blank — use "N/A" or "-" if data is missing.
- **Effect:** Helps AI perform calculations and column/row comparisons 52% more accurately.

## 3. CONTEXT OPTIMIZATION

### Metadata

Always start documents with a context information block to "activate" the appropriate knowledge domain for AI.

**Metadata Example:**
**Document Type:** Technical Specification
**Project:** Project Name
**Last Updated:** 2025-01-22
**Status:** Draft

### Cross-Referencing

Use links to create an information network, helping AI connect discrete concepts.

- **Syntax:** `[See Security section](#security-section)`
- **Effect:** Helps AI understand dependencies and relationships between content sections.

## 4. DO & DON'T CHECKLIST

| DO                                                                    | DON'T                                                                    |
| :-------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| Use descriptive headers that clearly describe content.                | Use formatting (bold, italic) instead of headers.                        |
| Use lists for steps or enumerations.                                  | Write process steps as long paragraphs.                                  |
| Wrap code in code blocks with language identifier (e.g., python).     | Use complex HTML/XML when unnecessary.                                   |
| Add context/metadata at the top of the file.                          | Let AI guess the document type or target audience.                       |

## 5. GOLD STANDARD EXAMPLE

Below is an example of how a document should be formatted for optimal AI comprehension:

---

# HR Process Guide (H1)

**Department:** HR
**Effective Date:** 01/2025

## 1. Leave Policy (H2)

Employees are entitled to the following benefits based on seniority:

| Seniority   | Leave Days   | Notes                |
| :---------- | :----------: | :------------------- |
| < 1 year    |      12      | Can be advanced      |
| > 1 year    |      15      | Non-cumulative       |

### Leave Request Process (H3)

1. Access the HR portal.
2. Fill out the [Leave Request Form](#leave-form).
3. Wait for approval from your direct manager.

---
