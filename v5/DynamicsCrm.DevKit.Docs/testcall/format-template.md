# TESTCALL FORMAT TEMPLATE

Rules for every `testcall/{N}.{tool}.md` file (37 files, one shared Wiki format). Keep this file short on purpose — every rule below matters.

**Golden reference: `3.get_audit_history.md`** — reviewed and approved by anh Phước. Read it first; compare your file side-by-side with it before reporting done. More approved examples: `1`, `4`, `5`.

## 📍 CURRENT PHASE (2026-08-29): DRY-RUN TESTING

All 37 tools are refactored (rule6 + hints) and their testcall files are fully live-captured and ✅-approved. The phase now is **testing every dry-run path** of every tool that supports it, via the separate `devkit-claude-dry-run` MCP server. Read rule 5 (rewritten for this phase) and the dry-run workflow below before touching any file. If this task gets interrupted, resume here: pick the next dry-run-capable tool without a dry-run block at the end of its testcall file and continue.

Dry-run-capable tools (grep `_options.DryRun` / `return DryRun(` under `DynamicsCrm.DevKit.Cli/Mcp/Tools/`): `18.create_records`, `19.execute_webapi` (non-GET only), `21.manage_app`, `22.manage_chart`, `23.manage_choice`, `24.manage_column`, `25.manage_command`, `26.manage_deleted_records`, `27.manage_environment_variable`, `28.manage_form`, `29.manage_record`, `30.manage_record_file` (uses `Status="dry_run"` in structured output, not the `[DryRun]` prefix — verify), `31.manage_relationship`, `32.manage_report`, `33.manage_ribbon`, `34.manage_role`, `35.manage_table`, `36.manage_view`, `37.manage_webresource`, `38.publish_customizations`. Read-only `get_*`/`search_records`/`whoami`/`parse_record_url`/`execute_fetchxml`/`execute_sql` have no dry-run path — skip them.

## ⛔ MANDATORY RULES — violations AI made before; check EVERY file, BEFORE and AFTER editing

1. **ORDERING: success tests first, error tests last.** Tests `1..N` = success (`IsError: false`); tests `N+1..M` = error (`IsError: true`). A success test after any error test is a hard violation → reorder + renumber the whole file immediately (no gaps, no letter suffixes). Zero-result successes and `[Failed]`-with-`IsError: false` count as SUCCESS — they belong in the `1..N` block. **Exception (dry-run phase):** dry-run tests are appended as a trailing block at the very END of the file, after the error tests, numbered continuing from the last test — this block is exempt from the success-first ordering (aP's instruction, 2026-08-29).
2. **EVERY error MUST carry a `[Hint]` line.** `[Hint]` teaches the AI caller how to fix its mistake; an `[Error]` without `[Hint]` is a **code bug, never a doc choice**. Captured a hintless error → fix the tool code (hint must say exactly what to pass), rebuild, re-run, capture fresh. Never record a hintless error; never invent a hint.
3. **NO OTHER TAGS MAY EXIST.** Complete allowed set (defined in `McpToolResults.cs`): first-line prefixes `[Success]` `[Error]` `[DryRun]` `[Partial]` `[Failed]`; continuation lines `[Hint]` `[Detail]`; per-item `[Warning]` inside `[Detail]` payloads. Nothing else — `[AuditBrowse]`, `[Info]`, any custom tag = **code bug**: fix the tool (route through the `McpToolResults` factory), rebuild, re-capture. **Inline category markers inside a message line (`[EntityNotFound]`, `[WebApiError]`, …) are redundant tags (aP's call, 2026-08-25) — strip them from the code branch you are fixing;** new captures must not contain them, but never silently edit an old verbatim capture to hide what the build actually emitted. Never copy a non-standard tag into a doc.
4. **NEVER FABRICATE OUTPUT.** Every byte of OUTPUT comes from a real run of that test's INPUT — no inventing, no reconstructing, no splicing runs, no deriving one side from the other, no "fixing" prefixes. If the real output has the wrong shape → the CODE is wrong: fix code, rebuild, re-capture. Output visibly cut off by the harness/MCP → rule 7. Missing/unreadable output → mark `[miss]` (a `[miss]` is correct; fabrication is far worse):
   - `[miss] Structured output not captured. Re-run test and fill in.`
   - `[miss] Plain text output not captured. Re-run test and fill in.`
   - `[miss] IsError not captured. Re-run test and fill in.`
   aP asks to fix a `[miss]` → re-run that INPUT verbatim, paste real output, update its RESULTS bullet, touch only the named test(s).
5. **NEVER DELETE DATA. NEVER INVENT TEST CASES.** Test only the cases whose INPUT is already in the doc. No cleanup calls — aP deletes artifacts manually. Test solution is always `all_in_one`. CREATE mutations: check existence first — `Customer ABC` exists → create `Customer ABC 2`, then `3`… (every component type); the doc records only the final name. UPDATE mutations: just run them. **Dry-run testing (rewritten 2026-08-29, supersedes the old "never test dry_run" rule):** dry-run is a SERVER-level mode (`--dry-run` CLI flag), never a tool param — never pass a `dry_run` argument. Test it through the separate `devkit-claude-dry-run` MCP server (`mcp__devkit-claude-dry-run__<tool>`), which runs the same build with mutations blocked. Workflow per tool: (a) read the tool source and find every `if (_options.DryRun)` / `return DryRun(` path — one path = one test case (a tool with multiple dry-run paths gets multiple tests); (b) learn the params each path needs from the surrounding code; (c) run each case as the NEXT test number (last test number + 1) against `devkit-claude-dry-run`; (d) append INPUT/OUTPUT/RESULT at the end of the file (before `# RESULTS`) plus one RESULTS bullet per test. Dry-run output is the SUCCESS shape: `IsError: false`, first line `[DryRun] <what would happen>`, OUTPUT = ` ```json ` structured block with trailing `"summary"` byte-identical to the `[DryRun]` plain-text line. Prefer INPUTs that reuse artifacts already created by that file's earlier tests (dry-run mutates nothing, so any existing org artifact is safe to target); only create a new artifact (via the normal `devkit-claude` server) if no suitable target exists.
6. **Tool-level `catch (Exception ex)` MUST return `ThrowExceptionFriendly(ex)`, never bare `ThrowException(ex)`.** `ThrowExceptionFriendly` strips the stack trace and rewrites known Dataverse fault messages into concise, actionable error text — bare `ThrowException` leaks raw stack dumps to the caller. When auditing/refactoring a tool, check every catch block at the tool entry point and fix violations before building.
7. **TRUNCATED OUTPUT → STOP AND ASK aP. NEVER WORK AROUND.** If any tool output arrives cut off (rtk truncation, MCP/harness truncation, `... [truncated]`, clearly missing tail/JSON closing brace), STOP that test immediately: report to aP what got cut, at which test, and investigate the root cause WITH aP before re-running. NEVER route around it — no Read offset re-reads, no `tail`/Node/PowerShell side-scripts, no splicing raw API payloads into structured output, no reconstructing the tail from assumptions (all of these were tried before and are banned). **Why:** the AI does not test for itself — after go-live, when a REAL caller's output gets truncated, that AI has no source code and no aP to consult; if the tool's real output is too big or badly shaped for the harness, THAT is a tool-design bug (payload too large, wrong channel) that must be fixed in the tool, not papered over during capture.

## 🔨 Build workflow (aP's rule) — HARD RULES, no exceptions

1. **NEVER run `Release.DynamicsCrm.DevKit.Cli.ps1` on your own initiative.** The release script reinstalls the global tool and kills the live MCP connection. Running it without aP explicitly saying **"full test"** (exact words, in the current message) is a hard violation — "a capture needs the new build" is NOT permission. When in doubt: don't run it.
2. **Code fix during a testcall task** (rule 2/3 fix) → plain `dotnet build` on `DynamicsCrm.DevKit.Cli` to verify compile, then **STOP and report to aP**: what changed, and that a release build + `/mcp` reconnect is required before re-capture. Do not continue capturing on your own — the connected MCP server still runs the OLD build, so any post-fix capture before release+reconnect is **stale** and must never be pasted as if it were the fixed behavior.
3. **aP says "full test"** → run `.\DynamicsCrm.DevKit.Scripts\Release.DynamicsCrm.DevKit.Cli.ps1` → ask aP to `/mcp` reconnect `devkit-claude` → proof SHA via `whoami` → re-run tests live.

## Pre-report verification (aP cannot re-check params by hand — the AI MUST)

Before reporting done, on the FINAL build (after any release + `/mcp` reconnect):
1. Re-load the tool schema fresh (ToolSearch after the reconnect — never trust a schema cached before a release) and diff it against `# PARAMETERS`: exact same param set, same order, same defaults. A param in the doc that is absent from the live schema (or vice versa) = stop and fix.
2. Diff `# TOOL DESCRIPTION` byte-for-byte against the `Description(...)` attribute in the current source (it is also what the live schema advertises).
3. Report the result of both checks to aP explicitly ("description + params verified against build HH:mm:ss").

## Structure

- **English only** in prose (headings, descriptions, RESULTS). Captured output data stays verbatim (Vietnamese/special chars in org data are never translated or stripped).
- **No H1 with the tool name/number** — it is in the filename.
- `# ✅ TOOL DESCRIPTION` — the `✅` prefix marks the tool as **fully tested and confirmed by anh Phước**. Convention: exactly one `✅`, one space, then `TOOL DESCRIPTION` (uppercase). **ONLY add it when aP explicitly asks** — that request means aP has reviewed the file and confirmed every test passed. Never add it on your own; a plain `# TOOL DESCRIPTION` means unreviewed/in-progress. This ✅ is the ONLY emoji allowed anywhere in a testcall file.
- `# TOOL DESCRIPTION` → ` ```text ` block, copied **verbatim** from the tool's `Description(...)` attribute. Exactly 3 sections in order: plain text → `WHEN TO USE:` bullets → `RELATED TOOLS:` `- tool → purpose` bullets (`→`, not `->`). Deviation (extra/missing section) → copy verbatim + **REPORT to aP** — never rewrite the description yourself.
- `# PARAMETERS` → ` ```text ` block, one aligned line per param: `key : type : description`. Types `string`/`int`/`bool` from the C# `[Description(...)]` signatures; defaults/ranges inline (`Default 5000.`). No params → `This tool takes no parameters.`
- Per test:
  - `# TEST N` → `## INPUT` → `## OUTPUT` → `## RESULT`.
  - INPUT: one description line (fold the expectation into it) + ` ```json ` **bare arguments only**, 2-space indent. No envelope (`{"name":..., "arguments":...}`), no arrow pseudo-calls.
  - OUTPUT — exactly ONE block per test, never both:
    - Success → ` ```json ` structured object, always with trailing `"summary"` (byte-identical to the plain-text line, prefix included). Dry-run tests follow this same success shape; the summary's first-line prefix is `[DryRun]`.
    - Error → ` ```text ` `[Error]`/`[Hint]`/`[Detail]` lines verbatim. `[Partial]`/`[Failed]` (IsError: true) follow the same shape. The `[Detail]` JSON keeps .NET escapes verbatim (`\u002B` for `+`, `\u0027` for `'`). No JSON block for an error test, not even `[miss]`; no combined `{"content":..., "structuredContent":...}` dumps. Old real captures showing `Tip:` stay verbatim; never write `Tip:` yourself.
  - RESULT: ` ```json ` `{ "IsError": true|false }`, one line, always present.
- `# RESULTS` → one bullet per test, `- Test N: <English sentence>.`, ordered by test number; same-outcome runs may be ranged (`- Test 5-7: ...`). No tables, ✅, bold lead-ins, or thematic bullets.
- Only two fence languages: ` ```text ` and ` ```json `. Long outputs are pasted in full — never `,...`, never prose substitutes.

## Cleanup rules

- Helper/verification calls (`whoami`, `get_tables`, cleanup deletes) are not tests — drop or fold into one sentence in the description line.
- Kill bug/fix narrative ("Round 2", "BUG FOUND + FIXED"), build stamps, SHA proofs — rewrite as normal tests covering final behavior only.
- No blockquotes, no `Note:` paragraphs, no `Setup:` preambles. If two tests share identical output, show it once and reference it.

## Minimal skeleton

```markdown
# TOOL DESCRIPTION

\`\`\`text
{tool description from Description attribute}
\`\`\`

# PARAMETERS

\`\`\`text
key1 : type1 : description1
key2 : type2 : description2
\`\`\`

# TEST 1

## INPUT

One-line description of this test.

\`\`\`json
{ "input": "..." }
\`\`\`

## OUTPUT

\`\`\`json
{ "structured": "...", "summary": "[Success] One-line summary — byte-identical to the plain-text line." }
\`\`\`

## RESULT

\`\`\`json
{ "IsError": false }
\`\`\`

# RESULTS

- Test 1: ...
```
