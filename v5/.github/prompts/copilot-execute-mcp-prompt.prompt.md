---
description: ""Execute MCP prompt validation file against live MCP server and record all results""
mode: agent
---

# Execute MCP Prompt

Execute a pre-defined MCP prompt validation file against the live Dataverse MCP server. For each prompt, call the appropriate MCP tools, record every step, and write results back to the prompt file.

> [!CAUTION]
> **REQUIRED ARGUMENT (1):**
> 1. **Prompt file** --- path to a `.prompts.md` file in `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Cli/mcp/prompts/`
>
> If the argument is missing, **STOP IMMEDIATELY** and show this error:
> ```
> Error: /execute-mcp-prompt requires 1 argument:
>   Prompt file path (e.g. "DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Cli/mcp/prompts/whoami.prompts.md")
>
> Available prompt files:
>   whoami.prompts.md, get_metadata_entities.prompts.md, get_sdk_messages.prompts.md,
>   get_global_optionsets.prompts.md, get_record.prompts.md, get_solution_components.prompts.md,
>   execute_fetchxml.prompts.md, relevance_search.prompts.md, upsert_record.prompts.md,
>   delete_record.prompts.md, execute_webapi.prompts.md, publish_customizations.prompts.md,
>   get_plugin_trace_logs.prompts.md, parse_record_url.prompts.md, get_forms.prompts.md,
>   get_views.prompts.md, get_roles.prompts.md, upsert_form.prompts.md, upsert_view.prompts.md,
>   build_formxml.prompts.md, get_audit_history.prompts.md, upsert_entity.prompts.md,
>   upsert_sitemap.prompts.md, upsert_attribute.prompts.md, get_variables.prompts.md,
>   get_business_rules.prompts.md, upsert_variable.prompts.md, get_classic_workflows.prompts.md,
>   get_custom_apis.prompts.md, get_cloud_flows.prompts.md, get_bpfs.prompts.md,
>   get_jobs.prompts.md, get_plugins.prompts.md, get_webresources.prompts.md
>
> Usage: /execute-mcp-prompt <prompt_file_path>
> ```

---

## IMPORTANT --- Session Resume Support

> [!IMPORTANT]
> **FORCE: You MUST complete ALL prompts in the file (both "Before Optimization" and "After Optimization" sections) and update the file after EACH prompt.**
>
> - After executing each prompt, **immediately** append/update the result in the file. Do NOT batch results.
> - If the session times out or is interrupted, the next session can resume from the last recorded result.
> - To resume: read the prompt file, find the last prompt with a recorded result, and continue from the next prompt.
> - Each prompt result MUST be written to the file **before** moving to the next prompt.

---

## Step 1: Validate and Prepare

1. Verify the prompt file exists --- if not, stop and report error
2. Read the prompt file content
3. Extract all prompts from both `## Before Optimization` and `## After Optimization` sections
4. Verify MCP server is connected by calling `mcp__devkit__whoami`
5. **Check for existing results** --- if the file already has a `## Execution Results` section, find the last completed prompt and resume from the next one. Report: `"Resuming from prompt {N} (found {M} completed prompts from previous session)"`

---

## Step 2: Execute Each Prompt

For **every** prompt in the file (both Before and After Optimization sections), do the following:

### 2a. Understand the Prompt

Read the prompt as if you are an AI agent receiving it from a user. Decide which MCP tool(s) to call and with what parameters.

### 2b. Execute and Record Steps

Call the MCP tool(s) through `mcp__devkit__{tool_name}` and record **every step**:

```
### Prompt {section}.{number}: "{prompt text}"

**Step 1:** Call `mcp__devkit__{tool_name}` with parameters: `{param1: value1, param2: value2}`
**Step 1 Result:** {summary of what was returned --- keep concise but include key data points}

**Step 2:** Call `mcp__devkit__{tool_name2}` with parameters: `{...}`
**Step 2 Result:** {summary}

...

**Verdict:** SUCCESS | FAILED | ERROR
**Total MCP Calls:** {number}
**Notes:** {any observations --- e.g. "required 2 calls instead of 1", "had to call get_metadata_entities first to find the entity name"}
```

### 2c. Handle Errors

If a prompt results in an **error from the MCP tool**:

1. Record the error in the step log
2. Identify which MCP tool caused the error and the root cause
3. Read the tool source file at `DynamicsCrm.DevKit.Cli/Mcp/Tools/{ToolName}Tool.cs`
4. Determine the fix needed
5. Apply the fix to the `.cs` tool file
6. Set verdict to `ERROR --- FIX APPLIED` and add:
   ```
   **Error:** {error message}
   **Root Cause:** {explanation}
   **Fix:** {what was changed in which file}
   **Action Required:** User must restart MCP server (`devkit mcp`) to apply fix, then re-run this prompt
   ```
7. After fix, mark this prompt as needing re-test: `**Re-test Needed:** Yes`
8. **Continue to the next prompt** --- do not stop the entire execution

### 2d. Write Result Immediately

After each prompt execution, **immediately update the prompt file** with the result. Do NOT wait until all prompts are done.

---

## Step 3: Write Results to File

Append a `## Execution Results` section to the **end** of the prompt file. Structure:

```markdown
---

## Execution Results

> Executed against live environment on {YYYY-MM-DD}. Connected as {user} to {environment_url}.

### Before Optimization

#### Prompt B.1: "{prompt text}"

**Step 1:** Call `mcp__devkit__{tool}` with `{params}`
**Step 1 Result:** {result summary}

**Verdict:** SUCCESS
**Total MCP Calls:** 1

#### Prompt B.2: "{prompt text}"

**Step 1:** Call `mcp__devkit__{tool}` with `{params}`
**Step 1 Result:** {result summary}

**Step 2:** Call `mcp__devkit__{tool2}` with `{params}`
**Step 2 Result:** {result summary}

**Verdict:** SUCCESS
**Total MCP Calls:** 2
**Notes:** Required additional call to resolve entity metadata first

...

### After Optimization

#### Prompt A.1: "{prompt text}"

...

### Summary

| Section | Total Prompts | Success | Failed | Error | Avg MCP Calls |
|---------|--------------|---------|--------|-------|---------------|
| Before Optimization | {n} | {n} | {n} | {n} | {avg} |
| After Optimization | {n} | {n} | {n} | {n} | {avg} |

### Fixes Applied

| # | Tool | File | Error | Fix Description |
|---|------|------|-------|-----------------|
| 1 | {tool_name} | {file.cs} | {error} | {fix description} |

> **Observation:** {Compare Before vs After --- did the optimized prompts require fewer MCP calls on average? Were they more direct?}
```

---

## Step 4: Handle Existing Results

- If the file **already has** an `## Execution Results` section with **partial results**, **resume** from where it left off (do not re-execute completed prompts)
- If the file has **complete results** and user runs again, **replace** the entire `## Execution Results` section with fresh results

---

## Rules

- **MUST complete ALL prompts** --- both Before and After Optimization sections. Do not skip any.
- **MUST update file after EACH prompt** --- this enables session resume on timeout
- **MUST record every MCP call** --- step number, tool name, parameters, and result summary
- **MUST keep result summaries concise** --- include key data points (counts, names, IDs) but not full JSON dumps
- **DO NOT fabricate results** --- every step must reflect an actual MCP call
- **DO NOT skip prompts** that seem similar --- each prompt tests a different angle
- **CAN fix MCP tool code** if an error is found --- but record the fix and flag for MCP restart
- **CAN call supporting MCP tools** (like `get_metadata_entities`, `whoami`) if needed to resolve a prompt --- but record them as steps
- The purpose is to verify AI tool-calling efficiency --- roundabout paths should be visible in the step log
