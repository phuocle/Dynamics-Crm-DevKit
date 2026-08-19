# Template: MCP Tool Test-Call Documentation

> **What is this file?**
> A template for documenting MCP tool test calls. To use it:
> 1. Copy this file → rename to `{N}.{tool_name}.md` (e.g. `1.execute_fetchxml.md`).
> 2. Fill in every section below — replace all `{placeholders}` with real values.
> 3. Do NOT skip any section. Every section is required.

---

## Document Structure Overview

```
# {N}. {tool_name}                     ← H1: tool identity
# Tool description AI đọc được         ← H1: raw tool metadata (verbatim from MCP server)
# Input tool call                       ← H1: ALL test inputs grouped together
  ## Test 1 — {scenario}                ← H2: one test input
  ## Test 2 — {scenario}
  ...
# Output tool call                      ← H1: ALL test outputs grouped together
  ## Test 1 — {scenario}                ← H2: matching output (3 parts)
  ## Test 2 — {scenario}
  ...
# Kết quả AI tổng hợp                  ← H1: summary and analysis
```

> **Layout rule:** Use **grouped** layout — put ALL inputs under one `# Input tool call` section, then ALL outputs under one `# Output tool call` section. Do NOT interleave input/output per test.

---

# {N}. {tool_name}

> Replace `{N}` with the sequential file number. Replace `{tool_name}` with the exact MCP tool name (e.g. `execute_fetchxml`, `manage_record`).

# Tool description AI đọc được

Paste the **complete, unmodified** tool metadata exactly as returned by the MCP server. Do not trim, truncate, or reformat any part. Include all of these sub-sections if the tool provides them:

- Header fields: `Name`, `Title`, `Idempotent`, `Destructive`, `ReadOnly`
- `Description:` — full narrative text
- `WHEN TO USE:` — usage guidance bullets (if present)
- `RELATED TOOLS:` — cross-references to other tools (if present)
- `Parameters:` — every parameter with type, default, and description

Wrap it in a plain code block:

```text
Name:        {tool_name}
Title:       {human-readable title}
Idempotent:  {true|false}
Destructive: {true|false}
ReadOnly:    {true|false}

Description:
{full tool description — keep all original line breaks and whitespace}

WHEN TO USE:
{usage guidance bullets — keep verbatim}

RELATED TOOLS:
{cross-references — keep verbatim}

Parameters:
{full parameter list — keep all original formatting, types, defaults, descriptions}
```

# Input tool call

> Group ALL test inputs here. Number them sequentially. Each test is an H2 heading.

## Test 1 — {short scenario description}

> Name the scenario clearly. Examples:
> - `Happy path (single page, max_records=3)`
> - `Error: no params`
> - `Error: malformed JSON`
> - `Create + delete cycle`

Provide the exact JSON sent to the MCP tool:

```json
{
  "name": "{tool_name}",
  "arguments": {
    "{param1}": "{value1}",
    "{param2}": "{value2}"
  }
}
```

## Test 2 — {short scenario description}

```json
{
  "name": "{tool_name}",
  "arguments": {
    ...
  }
}
```

> Continue adding `## Test 3`, `## Test 4`, etc. for every test case.
> If a test requires setup data (e.g. a .json or .csv fixture file), include the file content in a code block before the JSON call.

# Output tool call

> Group ALL test outputs here. Each output matches the corresponding input by test number.

## Test 1 — {same scenario description as input}

Every MCP tool response has exactly **3 parts**. Document all three:

**Content (1 line, plain text):**

The single plain-text message returned by the tool. Paste it verbatim:

```text
{exact plaintext output, e.g.: [Success] 3 records returned (more available).}
```

**Structured content (JSON):**

The JSON object returned by the tool. Paste it verbatim, complete, no truncation:

```json
{exact JSON output from the tool}
```

**IsError:**

`false` or `true`

---

## Test 2 — {same scenario description as input}

**Content (1 line, plain text):**

```text
{exact plaintext output}
```

**Structured content (JSON):**

```json
{exact JSON output}
```

**IsError:**

`false` or `true`

---

> Continue with `## Test 3`, `## Test 4`, etc. Separate each test output with a horizontal rule (`---`).
> If a test output requires additional explanation (e.g. Dataverse SDK quirks), add a `**Notes:**` section after `**IsError:**`.

# Kết quả AI tổng hợp

Summarize all test results and key observations. Use the sub-sections below as needed:

## Test coverage

Table listing every test with its result:

| # | Test | Mode | Result |
|---|------|------|--------|
| 1 | {scenario} | {read-only / mutation / error} | {PASSED / FAILED} |
| 2 | {scenario} | {mode} | {result} |

## Key behaviors verified

Bullet list of important behaviors confirmed by the tests:

- {Behavior 1, e.g.: Validation returns clear error message, not generic MCP crash}
- {Behavior 2, e.g.: Bulk partial-failure returns status:"partial" with per-record detail}
- {Behavior 3, e.g.: Pagination respects max_records limit}

## Cleanup evidence

> Include this section only for tools that create/modify data (Destructive: true).

Document how test data was cleaned up:

- {Record GUID → deleted / verified absent}
- {FetchXML re-query confirming no residual test data}
