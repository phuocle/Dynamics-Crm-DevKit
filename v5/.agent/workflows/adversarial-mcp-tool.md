---
description: "Run adversarial tests against a live MCP tool and write findings to its doc"
---

# Adversarial MCP Tool Review

Act as a **devil's advocate** to stress-test a DevKit MCP tool against the live Dataverse environment. Your goal is to find edge cases where an AI agent would get **silently wrong results** (not just errors — silent failures are worse).

> [!CAUTION]
> **REQUIRED ARGUMENTS (2):**
> 1. **Doc file** — path to a `.md` file in `mcp-done/` (e.g. `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Cli/mcp-done/28.get_business_rules.md`)
> 2. **Tool file** — path to the `.cs` implementation (e.g. `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetBusinessRulesTool.cs`)
>
> If EITHER argument is missing, **STOP IMMEDIATELY** and show this error:
> ```
> Error: /adversarial-mcp-tool requires 2 arguments:
>   1. Doc file path (.md in mcp-done/)
>   2. Tool file path (.cs in Mcp/Tools/)
>
> Usage: /adversarial-mcp-tool <doc_file> <tool_file>
> ```

---

## Step 1: Gather Context

1. Read the **doc file** (.md) — understand parameters, returns, tips, example prompts
2. Read the **tool file** (.cs) — understand the full implementation, error handling, edge cases
3. Extract the MCP tool name from the `[McpServerTool(Name = "...")]` attribute in the .cs file
4. Verify MCP server is connected by calling `mcp__devkit__whoami`

---

## Step 2: Plan Adversarial Test Cases

Design **at least 10 test cases** across these categories:

### Category A — Silent Failures (HIGH PRIORITY)
Tests where the tool returns results **without error** but the results are **wrong or misleading**:
- Invalid enum/filter values that get silently ignored (e.g., `status="xyz"` returns unfiltered data)
- Parameters that look valid but don't filter as expected
- Boundary values that produce unexpected behavior (0, -1, MAX+1)

### Category B — Error Handling
Tests where the tool should return a clear error:
- Required parameters missing or empty
- Invalid GUIDs / malformed input
- Non-existent entities or records
- Wrong entity type (e.g., passing a workflow GUID when expecting a form GUID)

### Category C — Input Normalization
Tests for input variations an AI might produce:
- UPPERCASE, MiXeD CaSe, extra whitespace
- Entity display names instead of logical names (e.g., "Case" instead of "incident")
- GUIDs with/without braces `{guid}` vs `guid`

### Category D — Description vs Implementation Mismatch
Static code analysis (no live calls needed):
- Does the `[Description]` attribute match what the code actually does?
- Are parameter descriptions accurate?
- Does the doc file match the code?

### Category E — Output Quality
- Singular/plural grammar in counts
- Missing data handling (null fields, empty collections)
- Output format consistency with other DevKit MCP tools

---

## Step 3: Execute Tests

Run each test case against the **live MCP tool** using `mcp__devkit__{tool_name}`.

For each test, record:
- **Input**: exact parameters passed
- **Expected**: what should happen
- **Actual**: what actually happened
- **Verdict**: PASS or FAIL

> [!IMPORTANT]
> **Focus on SILENT FAILURES** — these are the most dangerous for AI agents. An error message is fine (the AI can retry). But wrong data returned silently causes the AI to make incorrect decisions downstream.

**Tips for finding test data:**
- Use `mcp__devkit__get_metadata_entities` to find entities that have relevant records
- Use `mcp__devkit__execute_fetchxml` to find specific records for detail-mode testing
- Try at least one entity with data AND one entity without data
- Test with both system entities and custom entities

---

## Step 4: Analyze Code for Static Issues

Without running live tests, review the `.cs` file for:
- Unchecked string comparisons (case sensitivity, trimming)
- Hardcoded values that should be dynamic
- Missing null checks on Dataverse response fields
- Regex patterns that could miss valid XAML/XML structures
- Description text that contradicts implementation behavior
- Grammar issues in output strings

---

## Step 5: Write Findings to Doc File

### If findings exist (at least 1 FAIL):

Append an `## Adversarial Review` section to the **end** of the doc file with this exact structure:

```markdown
---

## Adversarial Review

> Tested against live environment `DEVKITV4` on {YYYY-MM-DD}. {Brief description of test data used}.

### Finding {N} — {Short title}

| Item | Detail |
|------|--------|
| **Severity** | {Critical / Medium / Low} |
| **Input** | `{exact parameters used}` |
| **Expected** | {what should happen} |
| **Actual** | {what actually happened} |
| **Root Cause** | {code reference: method name, line range, specific logic} |
| **AI Impact** | {how this would cause an AI agent to produce wrong results} |

### Summary

| # | Finding | Severity | Category |
|---|---------|----------|----------|
| 1 | {title} | {severity} | {category} |
| ... | ... | ... | ... |

> **Passed tests**: {comma-separated list of test categories/scenarios that passed}.
```

### If NO findings (all tests passed):

```markdown
---

## Adversarial Review

> Tested against live environment `DEVKITV4` on {YYYY-MM-DD}. {Brief description of test data used}.

All tests passed — no adversarial findings.

> **Tests executed**: {comma-separated list of all test scenarios run and passed}.
```

### Severity Definitions

| Severity | Definition |
|----------|------------|
| **Critical** | Silent failure that returns **wrong data** AI will trust and act on |
| **Medium** | Silent failure where filtering/parameter is ignored (data is valid but unfiltered) |
| **Low** | Cosmetic, grammar, or documentation mismatch that doesn't cause wrong AI decisions |

---

## Step 6: Handle Existing Adversarial Review

- If the doc file **already has** an `## Adversarial Review` section, **replace it entirely** with the new findings
- If the doc file does **not have** one, **append it** after the `## Implementation` section

---

## Rules

- **DO NOT modify the .cs tool file** — this command is read-only for code, write-only for docs
- **DO NOT skip live testing** — static analysis alone is insufficient
- **DO NOT fabricate test results** — every finding must be reproducible with the exact input shown
- Minimum **10 live test calls** across different categories
- Focus on **AI Impact** — every finding must explain how it would cause an AI agent to produce incorrect output
- Use the **same finding table format** as shown above — consistency matters across all tool docs
- If the tool has no testable data in the environment (e.g., no records exist), note this in the review and test what you can (error handling, input validation, static analysis)
