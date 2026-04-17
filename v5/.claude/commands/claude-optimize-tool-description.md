---
description: ""Optimize an MCP tool's [Description] for token efficiency using error-guided resource pattern""
---

# Optimize MCP Tool Description

Optimize an MCP tool's `[Description("...")]` attribute to reduce AI token consumption while preserving correctness, using the **error-guided resource pattern** (3-layer error messages).

> [!CAUTION]
> **REQUIRED ARGUMENT (1):**
> 1. **Tool name** — the MCP tool's `Name` value in snake_case (e.g., `manage_record`, `build_form_xml`)
>
> If the argument is missing, **STOP IMMEDIATELY** and show this error:
> ```
> Error: /optimize-tool-description requires 1 argument:
>   1. Tool name (snake_case, e.g., "manage_record")
>
> TODO (not yet optimized):
>   get_tables,
>   execute_webapi,
>   manage_form,
>   build_form_xml, build_sitemap_xml,
>   upsert_table, upsert_relationship, manage_sitemap,
>   upsert_column
>
> DONE (already optimized):
>   whoami, manage_role,
>   get_plugin_trace_logs, get_system_jobs,
>   get_business_rules, manage_webresource,
>   get_solution_components, get_messages,
>   manage_record, get_dataverse_commands, parse_record_url,
>   get_plugins, get_flows, get_audit_history,
>   get_custom_apis, get_workflows,
>   get_business_process_flows, manage_view,
>   manage_environment_variable, manage_choice,
>   execute_fetchxml, search_records, publish_customizations
>
> Usage: /optimize-tool-description <tool_name>
> ```

---

## Workflow Gate: READ-ONLY until User Approves

> [!CAUTION]
> **This workflow has TWO phases:**
>
> | Phase | Steps | Allowed Tools | Edits Files? |
> |-------|-------|---------------|-------------|
> | **Analysis** (Steps 1-6) | Read code, analyze, generate report | `Read`, `Grep`, `Glob` only | **NO — FORBIDDEN** |
> | **Apply** (Step 7) | Edit descriptions + error messages | `Edit` | **YES — only after `AskUserQuestion` approval** |
>
> You **MUST NOT** use the `Edit` or `Write` tool during Steps 1-6.
> You **MUST** use `AskUserQuestion` at the start of Step 7 and WAIT for "Yes" before editing.

---

## Golden Rule: NEVER Fabricate

> [!CAUTION]
> **You are OPTIMIZING descriptions, NOT rewriting them.**
>
> - NEVER invent parameters, actions, or values that do not exist in the source code
> - NEVER remove actions/modes that exist in the source code
> - NEVER rename parameters (e.g., `action` → `mode`, `assembly_name` → `assembly_id`)
> - NEVER change parameter types or default values
> - The ONLY allowed changes are: **shorten text**, **remove redundancy**, **add 3-layer error messages**
> - When in doubt, keep the original text — shorter is better, but WRONG is unacceptable

---

## Step 1: Locate and Read Source Code

1. Find the tool file:
   - Search for `Name = "$ARGUMENTS"` in `DynamicsCrm.DevKit.Cli\Mcp\Tools\*Tool.cs`
   - If not found, **STOP** and report: `"Error: No tool found with Name = '$ARGUMENTS'"`

2. Read the **ENTIRE** tool file — you need:
   - The `[Description("...")]` on the method (tool description)
   - The `[Description("...")]` on every parameter
   - ALL `ErrorResult(...)` calls (existing error messages)
   - ALL `throw new ...` calls (exception messages)
   - The method signature (parameter names, types, defaults)
   - ALL action/mode dispatch logic (switch/if-else)

3. Extract the **actual truth** from code:
   - List ALL valid `action` values (from switch expression or if-else chain)
   - List ALL parameters with their exact names, types, and defaults
   - List ALL error messages currently in the code
   - Note which parameters are required vs optional for each action

---

## Step 2: Identify Available Resources

Read the available MCP resources that error messages can reference:

| Resource URI | Content | Relevant For |
|-------------|---------|--------------|
| `docs://instructions_for_formxml` | FormXML rules, structure, manipulation | `build_form_xml`, `manage_form` |
| `docs://instructions_for_views` | View/LayoutXML rules, sync rules | `manage_view` |
| `docs://schema_tools_guide` | Schema tools: type matrices, immutable properties, cascade | `upsert_table`, `upsert_column`, `upsert_relationship` |
| `docs://data_operations_guide` | Data ops: field type formats, FetchXML joins, search syntax | `manage_record`, `execute_fetchxml`, `search_records` |
| `docs://server_logic_guide` | Server logic: list/detail modes, filtering, entity scoping | `get_plugins`, `get_workflows`, `get_custom_apis`, `get_flows`, `get_business_process_flows`, `get_business_rules` |
| `schema://formxml` | FormXml.xsd | `manage_form` |
| `schema://layoutxml` | LayoutXml.xsd | `manage_view` |
| `schema://fetchxml` | Fetch.xsd | `execute_fetchxml` |
| `schema://sitemapxml` | SiteMap.xsd + rules | `build_sitemap_xml`, `manage_sitemap` |

> If the tool's domain is NOT covered by any existing resource, note this in the output.
> Do NOT reference non-existent resources in error messages.

---

## Step 3: Analyze Current Description

Create a structured analysis:

### 3a. Content Audit

Classify every sentence/block in the current description:

| Content | Type | Keep? | Reason |
|---------|------|-------|--------|
| "Perform CRUD on a single Dataverse record" | Purpose | YES | Core identity |
| "String: 'hello', Integer: 42, Decimal: 99.50..." | Format examples | REMOVE | Move to error-guided |
| "Use get_tables for field names" | Cross-reference | KEEP (shorten) | Helps AI pick right tool |
| ... | ... | ... | ... |

### 3b. Classification Rules

| Content Type | Action |
|-------------|--------|
| Purpose (what the tool does) | **KEEP** — shorten if possible |
| Action/Mode list | **KEEP** — must list ALL actual actions from code |
| Required params per action | **KEEP** — compress to 1 line per action |
| Format examples (JSON, XML, syntax) | **REMOVE** — handle via error messages + resources |
| Cross-references to other tools | **KEEP** — shorten to tool name only |
| Implementation details (category=0, UpsertRequest, etc.) | **REMOVE** — AI doesn't need internals |
| WHEN TO USE bullets | **KEEP** — max 3 bullets, compress |
| TIPS | **KEEP** — max 3 tips, compress |

---

## Step 4: Write Optimized Description

### Structure Template

```
[1-line purpose statement]

[ACTION/MODE list — ALL valid values from code, 1 line each]
- action='X': Short description. Required: param1 + param2

[WHEN TO USE — max 3 bullets]

[TIPS — max 3 bullets]
```

### Verification Checklist (MUST PASS ALL)

Before finalizing, verify against source code:

- [ ] **Every action/mode from the code's switch/dispatch is listed** — no missing, no extra
- [ ] **Every parameter name matches the code exactly** — no renames
- [ ] **Required params per action match the code's validation** — check each `HandleXxx` method
- [ ] **No invented parameters** — search the entire file for each param you mention
- [ ] **No invented action values** — compare against the switch/if-else exactly
- [ ] **Default values match** — check method signature defaults
- [ ] **Cross-referenced tool names exist** — verify against the 31 known tools

---

## Step 5: Design 3-Layer Error Messages

For each `ErrorResult(...)` and `throw new ...` in the tool, evaluate if it needs the 3-layer pattern:

### 3-Layer Error Structure

```
Layer 1: "Error: [what went wrong]."                    ← ALWAYS present
Layer 2: "Valid values: [list]." or "Required: [params]" ← ALWAYS for validation errors
Layer 3: "Read [resource URI] for [specific topic]."     ← ONLY when resource exists AND is relevant
```

### When to Add Each Layer

| Error Type | Layer 1 | Layer 2 | Layer 3 |
|-----------|---------|---------|---------|
| Missing required param | YES | YES (which params needed) | NO |
| Invalid action/enum value | YES | YES (list valid values) | MAYBE (if many options) |
| Invalid JSON/XML format | YES | YES (expected format hint) | YES (if resource exists) |
| GUID parse error | YES | NO (obvious) | NO |
| Dataverse API error | YES | YES (hint: use get_tables) | MAYBE |
| Generic catch exception | YES | NO | NO |

### Rules for Layer 3

- **ONLY** reference resources from the 9 URIs listed in Step 2
- **NEVER** reference resource URIs that are not in the Step 2 table
- Layer 3 must point to a **specific topic** in the resource, not just "read this resource"
- Example GOOD: `"Read docs://instructions_for_formxml for JSON operation format examples."`
- Example BAD: `"Read docs://instructions_for_formxml for more info."`

---

## Step 6: Generate Output Report — DO NOT APPLY YET

> [!CAUTION]
> **MANDATORY: This step is REPORT ONLY.**
> You MUST present the report and WAIT for user approval before touching any file.
> **ABSOLUTELY DO NOT edit any `.cs` file during this step.**

Present the full optimization as a structured report:

### Section A: Tool Identity

```
Tool: {tool_name}
File: DynamicsCrm.DevKit.Cli\Mcp\Tools\{ToolName}Tool.cs
Actions: {list all valid actions from code}
Parameters: {count} ({count_required} required, {count_optional} optional)
```

### Section B: Current vs Optimized Description

Show side-by-side:

```
=== CURRENT DESCRIPTION ===
{exact copy from source code}

=== OPTIMIZED DESCRIPTION ===
{new optimized text}

=== DIFF SUMMARY ===
- Removed: {what was removed and why}
- Kept: {what was kept}
- Shortened: {what was compressed}
- Token estimate: {before} → {after} (−{saved}, −{percent}%)
```

### Section C: Error Messages to Update

For each error message that needs updating:

```
--- Error at line {N} ---
CURRENT:
  ErrorResult("...")

PROPOSED:
  ErrorResult(
      $"Error: [Layer 1].\n" +
      $"[Layer 2].\n" +
      $"[Layer 3 — only if resource exists].")

REASON: {why this error needs updating}
```

### Section D: Parameter Description Changes

For each parameter description that needs updating (most should be "No change"):

```
Parameter: {name}
Change: {No change | Shortened | Updated}
{if changed, show before/after}
```

### Section E: Verification Matrix

| Check | Status | Evidence |
|-------|--------|----------|
| All actions listed match code | PASS/FAIL | {switch expression line numbers} |
| All param names match code | PASS/FAIL | {method signature line number} |
| No invented params/actions | PASS/FAIL | {verification method} |
| Resource URIs exist | PASS/FAIL | {list URIs used} |
| Required params per action correct | PASS/FAIL | {validation line numbers} |

---

## Step 7: Apply Changes — FORCE ASK USER FIRST

> [!CAUTION]
> **MANDATORY GATE: You MUST use `AskUserQuestion` to get explicit user approval BEFORE editing any file.**
> This is NOT optional. This is NOT a suggestion. This is a HARD REQUIREMENT.
> If the user says "No" or wants changes, go back to Step 4 and revise.
> **NEVER skip this confirmation step. NEVER auto-apply.**

Use `AskUserQuestion` with this exact question:
> "I have prepared the optimization report for `{tool_name}`. Should I apply these changes to `{ToolName}Tool.cs`?"

**Only proceed to edit files AFTER receiving explicit "Yes" from the user.**

If user approves:
1. Edit ONLY `[Description("...")]` strings — tool description and parameter descriptions
2. Edit ONLY `ErrorResult(...)` and `throw new ...` message strings
3. **DO NOT** change any logic, parameter names, types, defaults, or method signatures
4. **DO NOT** add or remove parameters
5. **DO NOT** change `[McpServerTool(...)]` attributes (Name, Title, etc.)

After applying:
1. Run `/build-cli` to verify compilation
2. Update this command file (move `{tool_name}` from `TODO` list to `DONE` list in the error message block at the top of this file)
3. Run `/claude-commit` to commit all changes
4. Report the result

---

## Constraints

- This workflow ONLY modifies `[Description("...")]` text and error message strings
- This workflow NEVER changes tool logic, parameters, or functionality
- This workflow NEVER creates new files (no resources, no docs)
- This workflow NEVER references resources that don't exist
- If the tool description is already optimal (under ~150 tokens, no redundancy), report "No optimization needed" and explain why
- **NEVER edit any file without explicit user approval via `AskUserQuestion` — this is the #1 rule of this workflow**
