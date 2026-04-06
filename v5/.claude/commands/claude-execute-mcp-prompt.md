---
description: "Execute MCP prompt validation — test all 20 prompts in a file against the live Dataverse MCP server"
---

# Execute MCP Prompt

Test a prompt file against the live Dataverse MCP server. Execute each of the 20 prompts, record results, and rename the file to `.tested.md` when complete.

> [!CAUTION]
> **REQUIRED:** One argument — path to a `##.tool_name.prompt.md` file.
>
> If missing, **STOP** and show:
> ```
> Error: /execute-mcp-prompt requires 1 argument — path to a prompt file.
>
> Prompt files: DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Cli/mcp/prompts/
> Example:     /execute-mcp-prompt 07.whoami.prompt.md
>
> List available files:
>   ls DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Cli/mcp/prompts/*.prompt.md
> ```

---

## Step 1: Initialize

1. Verify the prompt file exists. If not, stop and report error.
2. Read the prompt file. Extract all 20 prompts (numbered `1.` through `20.`).
3. Call `mcp__devkit__whoami` to verify MCP connectivity. Record the user and environment URL.
4. **Resume check:** If the file already has an `## Execution Results` section with partial results, find the last completed prompt number and resume from the next one. Report: `"Resuming from prompt {N}/20"`.

---

## Step 2: Execute Each Prompt (1-20)

For each prompt:

### 2a. Interpret

Read the prompt as if a user sent it to you. Decide which MCP tool(s) to call and with what parameters.

### 2b. Call MCP Tool(s)

Call `mcp__devkit__{tool_name}` with the appropriate parameters. Record every step.

### 2c. Record Result

Use this exact format:

```markdown
#### Prompt {n}: "{exact prompt text}"

**Step 1:** Call `mcp__devkit__{tool}` with `{param1: value1, param2: value2}`
**Step 1 Result:** {concise summary — key data: counts, names, IDs, values}

**Verdict:** SUCCESS
**Total MCP Calls:** 1
```

When multiple calls are needed:

```markdown
#### Prompt {n}: "{exact prompt text}"

**Step 1:** Call `mcp__devkit__whoami` with `{}`
**Step 1 Result:** User=# DEVKIT, Roles: System Administrator

**Step 2:** Call `mcp__devkit__get_roles` with `{user_id: "...", entity_name: "account"}`
**Step 2 Result:** Effective privileges on account: CRUD at Organization depth

**Verdict:** SUCCESS
**Total MCP Calls:** 2
**Notes:** Used get_roles with entity_name for effective privilege check
```

### 2d. Write Immediately

After each prompt, **immediately update the file** with the result. Do NOT batch.

### 2e. Handle Errors

If an MCP tool returns an error:

1. Record the error in the step log
2. Read the tool source: `DynamicsCrm.DevKit.Cli/Mcp/Tools/{ToolName}Tool.cs`
3. Determine root cause and apply fix if possible
4. Set verdict to `ERROR` and add:
   ```
   **Error:** {error message}
   **Root Cause:** {explanation}
   **Fix:** {what was changed in which file}
   ```
5. Continue to the next prompt — do NOT stop execution

---

## Step 3: Write Results to File

Append an `## Execution Results` section at the end of the prompt file:

```markdown
---

## Execution Results

> Executed on {YYYY-MM-DD}. Connected as {user} to {environment_url}.

#### Prompt 1: "{prompt text}"

**Step 1:** Call `mcp__devkit__{tool}` with `{params}`
**Step 1 Result:** {summary}

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt 2: "{prompt text}"

...continue through Prompt 20...
```

---

## Step 4: Write Summary

After all 20 prompts are executed, append:

```markdown
### Summary

| Total | Success | Failed | Error | Avg MCP Calls |
|-------|---------|--------|-------|---------------|
| 20    | {n}     | {n}    | {n}   | {avg}         |

### Fixes Applied

| # | Tool | File | Error | Fix |
|---|------|------|-------|-----|
| 1 | {tool} | {file.cs} | {error} | {fix} |

> **Observation:** {Analysis of tool-calling accuracy. Did prompts map cleanly to the intended tool?
> Which prompts required extra calls? Any patterns or insights about tool description quality?}
```

If no fixes were needed, write `No fixes needed` in the Fixes table.

---

## Step 5: Rename to Tested

After ALL 20 prompts are executed, the summary is written, and the file is saved:

**Rename the file** from `##.tool_name.prompt.md` to `##.tool_name.tested.md`.

Example: `07.whoami.prompt.md` becomes `07.whoami.tested.md`

```bash
mv "path/to/07.whoami.prompt.md" "path/to/07.whoami.tested.md"
```

This signals the file has been fully validated.

---

## Rules

| Rule | Detail |
|------|--------|
| **Complete all 20** | Do not skip any prompt |
| **Update after each** | Enables session resume on timeout |
| **Exact format** | Follow the Step/Result/Verdict format precisely |
| **Concise results** | Key data points only, not full JSON |
| **No fabrication** | Every step must reflect an actual MCP call |
| **Notes are optional** | Only add `**Notes:**` when there is something noteworthy |
| **Can fix tool code** | Record the fix, flag for MCP restart, continue |
| **Can call extra tools** | Record as numbered steps (e.g., `whoami` to get user ID) |
| **Rename when done** | `.prompt.md` to `.tested.md` — marks completion |
