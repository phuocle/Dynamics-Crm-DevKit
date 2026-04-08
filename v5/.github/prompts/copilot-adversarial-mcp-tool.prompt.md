---
description: ""Run adversarial test-fix-retest loop against a live MCP tool""
mode: agent
---

# Adversarial MCP Tool Review

Act as a **devil's advocate** to stress-test a DevKit MCP tool against the live Dataverse environment, **fix every bug found**, **add unit tests**, and **loop until clean**. Your goal is to find edge cases where an AI agent would get **silently wrong results**, fix them, prove the fix with a unit test, and verify no regressions — all in one automated run.

> [!CAUTION]
> **REQUIRED ARGUMENT (1):**
> 1. **Tool name** — the snake_case MCP tool name (e.g., `whoami`, `get_tables`, `execute_fetchxml`)
>
> If the argument is missing, **STOP IMMEDIATELY** and show this error:
> ```
> Error: /adversarial-mcp-tool requires 1 argument:
>   Tool name (snake_case MCP tool name)
>
> Usage: /adversarial-mcp-tool <tool_name>
>
> Examples:
>   /adversarial-mcp-tool whoami
>   /adversarial-mcp-tool get_tables
>   /adversarial-mcp-tool execute_fetchxml
>   /adversarial-mcp-tool build_form_xml
> ```

---

## Step 0: Resolve Files

Given the tool name argument `{tool_name}`, auto-resolve all file paths. **Never ask the user for file paths.**

### Tool file

Search `DynamicsCrm.DevKit.Cli/Mcp/Tools/` for a `.cs` file containing `[McpServerTool(Name = "{tool_name}"`. This is the definitive tool file.

> **Why search instead of computing?** File names like `WhoAmITool.cs`, `ManageSiteMapTool.cs`, `ExecuteFetchXmlTool.cs` don't follow a simple PascalCase rule. Searching by the `Name` attribute is the only reliable method.

Extract the **class name** from the matched file (e.g., `public class ExecuteFetchXmlTool` → `ExecuteFetchXmlTool`).

If no file matches, **STOP** and report:
```
Error: No tool file found with [McpServerTool(Name = "{tool_name}")] in DynamicsCrm.DevKit.Cli/Mcp/Tools/
Available tools: whoami, get_tables, execute_fetchxml, ...
```

### Test file

Search `DynamicsCrm.DevKit.UnitTests/Cli/Mcp/` for an existing test file for this tool:
1. First: look for `{ClassName}Tests.cs` (e.g., `ExecuteFetchXmlToolTests.cs`)
2. Fallback: search for any `.cs` file containing `typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.{ClassName})`
3. If not found: the test file will be **created** in Step 6 at `DynamicsCrm.DevKit.UnitTests/Cli/Mcp/{ClassName}Tests.cs`

### Report file

```
DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Cli/mcp/adversarial/{tool_name}.md
```

Create the `adversarial/` directory if it does not exist.

### Verify MCP connection

Call `mcp__devkit-user__whoami` to confirm the MCP server is connected. If it fails, **STOP** and ask the user to start the MCP server.

---

## The Loop (Max 3 Rounds)

```
FOR round = 1 TO 3:
    Step 1: Read source code
    Step 2: Plan + execute adversarial tests
    Step 3: Evaluate findings → if 0 new → EXIT loop
    Step 4: Fix bugs in .cs file
    Step 5: Build CLI (/build-cli) + auto-restart MCP
    Step 6: Add unit tests + run them
    Step 7: Live re-test fixed findings via MCP
    → Loop back to Step 1
EXIT:
    Step 8: Write final report
```

---

### Step 1: Read Source Code

1. Read the **tool file** (.cs) — understand the full implementation, all parameters, error handling, edge cases
2. In Round 2+: focus on **areas changed by previous fixes** — look for regressions the fixes may have introduced
3. Note the tool's `[Description]` text, parameter descriptions, and default values for Category D testing

---

### Step 2: Plan and Execute Adversarial Tests

#### Round 1 — Full Test Suite (minimum 10 tests)

Design **at least 10 test cases** across all 5 categories:

##### Category A — Silent Failures (HIGH PRIORITY)
Tests where the tool returns results **without error** but the results are **wrong or misleading**:
- Invalid enum/filter values that get silently ignored (e.g., `status="xyz"` returns unfiltered data)
- Parameters that look valid but don't filter as expected
- Boundary values that produce unexpected behavior (0, -1, MAX+1)

##### Category B — Error Handling
Tests where the tool should return a clear error:
- Required parameters missing or empty
- Invalid GUIDs / malformed input
- Non-existent entities or records
- Wrong entity type

##### Category C — Input Normalization
Tests for input variations an AI might produce:
- UPPERCASE, MiXeD CaSe, extra whitespace
- Entity display names instead of logical names (e.g., "Case" instead of "incident")
- GUIDs with/without braces `{guid}` vs `guid`

##### Category D — Description vs Implementation Mismatch
Static code analysis (no live calls needed):
- Does the `[Description]` attribute match what the code actually does?
- Are parameter descriptions accurate?
- Are default values documented correctly?

##### Category E — Output Quality
- Singular/plural grammar in counts
- Missing data handling (null fields, empty collections)
- Output format consistency with other DevKit MCP tools

**Execute** each test case against the **live MCP tool** using `mcp__devkit-user__{tool_name}`.

For each test, record:
- **Input**: exact parameters passed
- **Expected**: what should happen
- **Actual**: what actually happened
- **Verdict**: PASS or FAIL

> [!IMPORTANT]
> **Focus on SILENT FAILURES** — these are the most dangerous for AI agents. An error message is fine (the AI can retry). But wrong data returned silently causes the AI to make incorrect decisions downstream.

**Tips for finding test data:**
- Use `mcp__devkit-user__execute_fetchxml` to find specific records for testing
- Try at least one entity with data AND one entity without data
- Test with both system entities (account, contact) and custom entities

#### Round 2+ — Targeted Regression Testing (minimum 5 tests)

Focus on **3 areas**:

1. **Regression check**: Re-read the fixed code around each change. Could the fix break an adjacent code path? Are there callers that depend on the old behavior?
2. **New static analysis**: Review the modified code for issues introduced by fixes (missing null checks, changed control flow, wrong string comparisons)
3. **Untested paths**: Any code paths from the original tool that weren't covered in Round 1

> **Note**: MCP server is auto-restarted after each build (Step 5), so Round 2+ live MCP calls test the **fixed code**. Use this to verify previous fixes AND find new issues.

---

### Step 3: Evaluate Findings

Count the **new findings** in this round (findings NOT already found and fixed in a previous round).

- If **0 new findings** → proceed to **Step 7** (Write Final Report)
- If **1+ new findings** → continue to **Step 4**

---

### Step 4: Fix Bugs in Code

For each new finding:

1. **Understand the root cause** from the test results
2. **Locate the exact code** in the .cs file
3. **Apply the minimal fix** — do NOT refactor surrounding code, do NOT add features beyond the fix
4. **Verify the fix addresses the AI Impact** described in the finding

#### Fix Guidelines

| Finding Category | How to Fix |
|-----------------|------------|
| **Silent failure** (invalid input silently ignored) | Add input validation that returns a clear error message |
| **Description mismatch** (description contradicts code) | Fix the `[Description]` attribute text to match actual behavior |
| **Cosmetic** (grammar, formatting) | Fix the output string directly |
| **Missing error handling** | Add targeted error check at the specific location |
| **Wrong behavior** | Fix the logic to produce correct results |

#### Fix Rules

- **Minimal changes only** — fix the finding, nothing else
- **Match existing code style** — same patterns, same error message format
- **Do NOT add new using statements** unless absolutely required by the fix
- **Do NOT reorganize or reformat** surrounding code
- **Do NOT add comments** explaining the fix — the code should be self-evident

---

### Step 5: Build CLI + Auto-Restart MCP

Run `/build-cli` to compile the CLI with fixes.

If build **fails**:
1. Read the build error
2. Fix the compilation error in the tool file
3. Re-run `/build-cli`
4. Repeat until build succeeds

#### Auto-Restart MCP Server

After build succeeds, **automatically restart the MCP server** so the new code is loaded:

1. **Kill the running MCP server processes** (PowerShell):
   ```powershell
   Get-Process -Name "DynamicsCrm.DevKit.Cli" -ErrorAction SilentlyContinue | Stop-Process -Force
   Get-Process -Name "devkit" -ErrorAction SilentlyContinue | Stop-Process -Force
   Start-Sleep -Seconds 2
   ```
2. **Wait for VS Code/Claude Code to auto-restart the MCP server** — the stdio-based server will be restarted automatically when the client detects the disconnection
3. **Verify MCP is alive** — call `mcp__devkit-user__whoami`:
   - If it succeeds → MCP is running with new code, proceed to Step 6
   - If it fails → wait 3 more seconds and retry (max 3 retries)
   - If still fails after 3 retries → **STOP** and ask the user to restart the MCP server manually:
     ```
     MCP server did not auto-restart. Please restart manually:
       VS Code: Ctrl+Shift+P → "MCP: List Servers" → restart the devkit-user server
     ```
     Wait for user confirmation, then proceed.

> [!IMPORTANT]
> This auto-restart step is **critical** for the loop to work. Without it, Round 2+ live tests would still hit the old code. The MCP config is at `.mcp.json` (root folder).

---

### Step 6: Add Unit Tests

For **each finding fixed in this round**, add unit test(s) to the test file.

#### Test file conventions

Follow the existing patterns in `DynamicsCrm.DevKit.UnitTests/Cli/Mcp/`:

- **Namespace**: `DynamicsCrm.DevKit.UnitTests.Cli.Mcp`
- **Framework**: MSTest (`[TestClass]`, `[TestMethod]`, `Assert.*`)
- **Access private methods** via reflection — follow the pattern in `WhoAmIToolTests.cs`:
  ```csharp
  private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.{ClassName});
  private static readonly MethodInfo SomeMethod = ToolType
      .GetMethod("MethodName", BindingFlags.NonPublic | BindingFlags.Static)!;
  ```
- **Test in-memory only** — no Dataverse connection. Use mock objects or call private static methods directly
- **Test naming**: `{MethodName}_{Scenario}_{ExpectedResult}` (e.g., `ValidateStatus_InvalidValue_ReturnsError`)
- For input validation tests, instantiate the tool with `new {ClassName}(null!)` and call the public method directly (it should hit validation before any Dataverse call)

#### If creating a new test file

Use this skeleton:

```csharp
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Reflection;

namespace DynamicsCrm.DevKit.UnitTests.Cli.Mcp;

[TestClass]
public class {ClassName}Tests
{
    private static readonly Type ToolType = typeof(DynamicsCrm.DevKit.Cli.Mcp.Tools.{ClassName});
    // Add method references and tests here
}
```

#### Run the tests

```powershell
dotnet test "DynamicsCrm.DevKit.UnitTests\DynamicsCrm.DevKit.UnitTests.csproj" --framework net10.0 --configuration Debug --filter "FullyQualifiedName~{TestClassName}" --logger "console;verbosity=normal"
```

If tests **fail**: fix the test or the tool code, rebuild (`/build-cli` + auto-restart MCP), and re-run until all pass.

---

### Step 7: Live Re-test Fixed Findings via MCP

After unit tests pass and MCP server is running with new code, **re-test each fixed finding** against the live MCP tool:

1. For each finding fixed in this round, call the MCP tool with the **exact same input** that originally caused the failure
2. Verify the tool now returns the **expected behavior** (correct error message, correct data, etc.)
3. Record result: **RE-TEST PASS** or **RE-TEST FAIL**

If any re-test **FAILS**:
1. Investigate why the fix didn't work
2. Apply additional fix to the .cs file
3. Re-run `/build-cli` + auto-restart MCP (Step 5)
4. Re-run failing tests until all pass

> This step ensures fixes work end-to-end against the real Dataverse, not just in-memory unit tests.

---

### End of Round — Loop Back to Step 1

Increment the round counter. If round < 3, go back to **Step 1**. Otherwise, proceed to **Step 8**.

---

## Step 8: Write Final Report

Write the adversarial report to `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Cli/mcp/adversarial/{tool_name}.md`.

If the file already exists, **replace it entirely**.

### Report Format

```markdown
# Adversarial Review: {tool_name}

> **Tool**: `{tool_name}` | **File**: `{ToolFile.cs}`
> **Environment**: `DEVKITV4` | **Date**: {YYYY-MM-DD}
> **Rounds**: {N} | **Total findings**: {N} | **All fixed**: Yes/No

---

## Round 1

> {N} findings from {M} live tests + static analysis.

### Finding 1 — {Short title}

| Item | Detail |
|------|--------|
| **Severity** | {Critical / Medium / Low} |
| **Category** | {A: Silent Failure / B: Error Handling / C: Input Normalization / D: Description Mismatch / E: Output Quality} |
| **Input** | `{exact parameters used}` |
| **Expected** | {what should happen} |
| **Actual** | {what actually happened} |
| **Root Cause** | {code reference: method name, line range, specific logic} |
| **AI Impact** | {how this would cause an AI agent to produce wrong results} |
| **Fix** | {one-line description of code change applied} |
| **Test** | `{TestMethodName}` in `{TestFile.cs}` |

### Finding 2 — {Short title}

...

> **Passed tests**: {comma-separated list of test scenarios that passed}.

---

## Round 2

> {N} new findings (regression check + targeted analysis).

(If 0 new findings: "No new findings — all fixes verified clean.")

### Finding 3 — {Short title}
...

---

## Round 3

(If reached: same format. If not reached: omit this section entirely.)

---

## Summary

| Round | New Findings | Fixed | Tests Added | Categories Hit |
|-------|-------------|-------|-------------|----------------|
| 1 | {N} | {N} | {N} | {A, B, C, ...} |
| 2 | {N} | {N} | {N} | {A, B, ...} |
| 3 | {N} | {N} | {N} | {A, ...} |
| **Total** | **{N}** | **{N}** | **{N}** | |

### Exit Reason

> {`0 new findings — tool is clean`} OR {`Max 3 rounds reached — N findings may remain`}
```

### Severity Definitions

| Severity | Definition |
|----------|------------|
| **Critical** | Silent failure that returns **wrong data** AI will trust and act on |
| **Medium** | Silent failure where filtering/parameter is ignored (data is valid but unfiltered) |
| **Low** | Cosmetic, grammar, or documentation mismatch that doesn't cause wrong AI decisions |

---

## Rules

- **Single argument only** — tool name in snake_case, nothing else needed
- **Auto-resolve ALL file paths** — never ask the user for file paths
- **Minimum 10 live MCP test calls** in Round 1 across all 5 categories
- **Minimum 5 targeted tests** in Round 2+ focused on regression and untested paths
- **DO NOT skip live testing** — static analysis alone is insufficient
- **DO NOT fabricate test results** — every finding must be reproducible with the exact input shown
- **Focus on AI Impact** — every finding must explain how it affects an AI agent
- **Minimal fixes only** — fix the finding, do not refactor or add features
- **Must build successfully** after every fix round (`/build-cli`)
- **Must auto-restart MCP** after every build — kill processes, verify with `whoami`, only ask user if auto-restart fails after 3 retries
- **Must live re-test** every fixed finding against the restarted MCP server before proceeding
- **Must add unit tests** for every finding fixed — no exceptions
- **Must run unit tests** after adding them — all must pass before proceeding
- **Max 3 rounds** — prevents infinite fix-break cycles
- **Report to `adversarial/{tool_name}.md`** — not to the tool's doc file
- **MCP auto-restart** — kill processes after build, verify with `whoami`, never ask user unless auto-restart fails
- **MCP config** is at `.mcp.json` (root folder), NOT `.vscode/mcp.json`
- **Allowed file modifications**: only the tool `.cs` file (fixes), the test `.cs` file (unit tests), and the report `.md` file — nothing else
