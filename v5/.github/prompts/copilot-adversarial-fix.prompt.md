---
description: ""Fix adversarial findings in MCP tool code and mark them FIXED in the doc""
mode: agent
---

# Adversarial Fix

Fix all adversarial findings from the `## Adversarial Review` section of an MCP tool doc, then update the doc to mark each finding as **FIXED**.

> [!CAUTION]
> **REQUIRED ARGUMENTS (2):**
> 1. **Doc file** — path to a `.md` file in `mcp-done/` that has an `## Adversarial Review` section with findings
> 2. **Tool file** — path to the `.cs` implementation to fix
>
> If EITHER argument is missing, **STOP IMMEDIATELY** and show this error:
> ```
> Error: /adversarial-fix requires 2 arguments:
>   1. Doc file path (.md in mcp-done/ with Adversarial Review section)
>   2. Tool file path (.cs in Mcp/Tools/)
>
> Usage: /adversarial-fix <doc_file> <tool_file>
> ```

---

## Step 1: Read and Parse Findings

1. Read the **doc file** (.md) — locate the `## Adversarial Review` section
2. If no `## Adversarial Review` section exists, **STOP** and report: `"Error: No Adversarial Review section found in the doc file. Run /adversarial-mcp-tool first."`
3. Parse each `### Finding N` — extract: title, severity, root cause, and the specific issue to fix
4. If all findings are already marked **FIXED**, **STOP** and report: `"All findings are already FIXED. Nothing to do."`
5. Read the **tool file** (.cs) — understand the full implementation

---

## Step 2: Fix Each Finding in Code

For each finding that is NOT already FIXED:

1. **Understand the root cause** from the finding's description and root cause field
2. **Locate the exact code** in the .cs file that needs to change
3. **Apply the minimal fix** — do NOT refactor surrounding code, do NOT add features beyond the fix
4. **Verify the fix addresses the AI Impact** described in the finding

### Fix Guidelines

| Finding Category | How to Fix |
|-----------------|------------|
| **Silent failure** (invalid input silently ignored) | Add input validation that returns a clear error message |
| **Doc mismatch** (description contradicts code) | Fix the `[Description]` attribute text to match actual behavior |
| **Cosmetic** (grammar, formatting) | Fix the output string directly |
| **Missing error handling** | Add targeted error check at the specific location |
| **Wrong behavior** | Fix the logic to produce correct results |

### Rules for Code Fixes

- **Minimal changes only** — fix the finding, nothing else
- **Match existing code style** — same patterns, same error message format
- **Do NOT add new using statements** unless absolutely required by the fix
- **Do NOT reorganize or reformat** surrounding code
- **Do NOT add comments** explaining the fix — the code should be self-evident

---

## Step 3: Update Doc — Mark Findings as FIXED

For each finding that was fixed, **replace** the finding's content with the FIXED format:

### Before (finding with full detail):
```markdown
### Finding N — {title}

| Item | Detail |
|------|--------|
| **Severity** | {severity} |
| **Input** | `{parameters}` |
| **Expected** | {expected} |
| **Actual** | {actual} |
| **Root Cause** | {root cause} |
| **AI Impact** | {ai impact} |
```

### After (FIXED — compact):
```markdown
### Finding N — FIXED: {title}

| Item | Detail |
|------|--------|
| **Severity** | {severity} |
| **Status** | **FIXED** — {one-line description of what was changed} |
```

### Update the Summary table:

Replace the `Category` column with `Status` column, marking each as FIXED:

```markdown
### Summary

| # | Finding | Severity | Status |
|---|---------|----------|--------|
| 1 | {title} | {severity} | FIXED |
| 2 | {title} | {severity} | FIXED |
```

> Keep the `> **Passed tests**:` line unchanged at the bottom.

---

## Step 4: Verify

1. Re-read the modified .cs file to confirm changes are syntactically correct
2. Re-read the modified .md file to confirm all findings are marked FIXED
3. Report a summary of what was fixed

---

## Rules

- **DO NOT skip any finding** — fix ALL findings that are not already FIXED
- **DO NOT add new features** beyond fixing the reported issues
- **DO NOT run builds** — this command only edits files. The user will build separately
- **DO NOT modify any other files** — only the 2 files passed as arguments
- If a finding cannot be fixed (e.g., requires architectural change), keep the original finding detail and append: `| **Status** | **DEFERRED** — {reason} |`
