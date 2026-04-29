---
description: Execute one prompt from Mcp.prompts.md, track MCP tools, and write the result inline
argument-hint: [prompt text copied from Mcp.prompts.md]
---

# Test MCP Prompt

Execute a single prompt from `DynamicsCrm.DevKit.Docs/Mcp.prompts.md`, record which MCP tools were called and in what order, then write the result back into the file inline under the matching prompt.

The user invoked this command with:

```text
$ARGUMENTS
```

## Critical Instructions

The user passes a prompt text copied from `Mcp.prompts.md` as `$ARGUMENTS`.

You must:

1. Execute the prompt using available DevKit MCP tools.
2. Track every DevKit MCP tool call made, including tool name and key parameters.
3. Update `DynamicsCrm.DevKit.Docs/Mcp.prompts.md` by appending a result block directly under the matching prompt line.
4. Watch for bugs and fix them if found.
5. Handle re-test scenarios correctly.

## Step 1 - Execute The Prompt

Do not read `Mcp.prompts.md` before executing.

Execute `$ARGUMENTS` exactly as the user typed it, with no extra context from the prompts file. If the prompt is ambiguous or missing parameters, execute it as-is and let the MCP tools return what they return.

Actually call the appropriate MCP tools and observe real results. Do not guess.

## Step 2 - Track The Tool Chain

As you execute, note every DevKit MCP tool call in order:

- Tool name, human-readable.
- Key input parameters used.
- Brief summary of what it returned.

## Step 3 - Update Mcp.prompts.md

Only after executing the prompt, read `DynamicsCrm.DevKit.Docs/Mcp.prompts.md`, find the exact line matching the prompt by its number and text, and insert a result block immediately after that line.

Use exactly two lines:

```text
   > [OK] Tools: [tool A] -> [tool B] -> [tool C]
   > Result: <one sentence summary of what happened>
```

If the prompt was skipped or failed, use:

```text
   > [WARN] Tools: [tool used]
   > Result: <one sentence summary of why it failed or was skipped>
```

Keep the result block to two lines only: one for tools, one for result.

## Step 4 - Bug Handling

If execution reveals a bug in a `.cs` file under `DynamicsCrm.DevKit.Cli\Mcp\`:

1. Read the relevant `.cs` file or files to confirm the bug.
2. Fix the file using Codex file editing tools.
3. Follow the build workflow required by `AGENTS.md` for MCP edits.
4. Kill the running MCP process so it auto-restarts:

```powershell
Get-Process | Where-Object { $_.CommandLine -like "*devkit*mcp*" } | Stop-Process -Force
```

5. Re-run the original prompt from Step 1 and record the corrected result.

## Step 5 - Re-Test Blocked Scenarios

If the prompt tries to create something that already exists, such as a table, column, or choice, and cannot proceed:

Do not silently skip or work around it.

Stop and ask aPhuoc to manually delete the existing record, field, table, or component so the test can run cleanly and produce an accurate result.

Mark the prompt result block as:

```text
   > [WARN] Tools: [tool used to detect conflict]
   > Result: BLOCKED - [name] already exists. Ask aPhuoc to delete it and re-run this prompt.
```
