---
description: "Merge two MCP tool description docs, using the claude/ folder file as the base"
---

Merge two MCP tool description optimization docs into one, keeping the claude/ folder file as the authoritative source.

> [!IMPORTANT]
> **AI AGENT INSTRUCTIONS (CRITICAL):**
> This command REQUIRES two file paths to be provided by the user, e.g.:
> `/claude-merge-description DynamicsCrm.DevKit.Docs/claude/01.create_records.md DynamicsCrm.DevKit.Docs/codex/01.create_records.md`
> If the user does NOT provide exactly 2 paths, STOP immediately and ask:
> "Please provide 2 file paths: `/claude-merge-description <claude-file> <other-file>`"
> Do NOT proceed without both paths confirmed.

> The result MUST be saved back to the **claude/ folder file** (first path). Never overwrite the other file.

## Workflow

**Step 1: Read both files (AUTO-RUN)**

Use the Read tool to load both files in parallel.

**Step 2: Compare and analyze**

Identify what each file has that the other lacks:
- Sections present in one but missing in the other (e.g., `FUZZY/AMBIGUITY`, `WHEN TO USE`, `Phân tích`)
- Token count differences — which estimate is more accurate?
- Optimized description/param quality — which version is tighter and clearer?
- Any conflicting recommendations — prefer the claude/ version unless the other has a clearly better rationale

**Step 3: Merge rules (claude/ file is the base)**

- Keep the structure and language of the **claude/ file** unchanged.
- From the **other file**, extract ONLY what adds genuine value:
  - New sections (e.g., `FUZZY/AMBIGUITY`)
  - Better token counts if the other file used a more accurate tokenizer
  - Tighter param descriptions if strictly shorter without losing meaning
- Do NOT copy redundant or duplicate content.
- Do NOT downgrade quality: if the claude/ version is clearer, keep it.

**Step 4: Write result to claude/ file**

Use the Write tool to save the merged content back to the first path (claude/ folder file).
Confirm to the user: what was added, what was kept, what was discarded.

**Step 5: Summary table**

Output a brief table:

| Source | Section/Change | Action |
|--------|---------------|--------|
| codex  | FUZZY/AMBIGUITY | Added |
| codex  | Token count (248 vs 210) | Updated to higher estimate |
| claude | WHEN TO USE block | Kept (better phrasing) |
| ...    | ...           | ...    |
