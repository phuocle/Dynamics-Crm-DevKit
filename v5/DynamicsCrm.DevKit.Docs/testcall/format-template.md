# TESTCALL FORMAT TEMPLATE

Rules for every `testcall/{N}.{tool}.md` file (36 files, one shared Wiki format). Keep this file short on purpose — every rule below matters.

**Golden reference: `2.get_audit_history.md`** — reviewed and approved by anh Phước. Read it first; compare your file side-by-side with it before reporting done. More approved examples: `1`, `3`, `4`.

## ⛔ MANDATORY RULES — violations AI made before; check EVERY file, BEFORE and AFTER editing

1. **ORDERING: success tests first, error tests last.** Tests `1..N` = success (`IsError: false`); tests `N+1..M` = error (`IsError: true`). A success test after any error test is a hard violation → reorder + renumber the whole file immediately (no gaps, no letter suffixes). Zero-result successes and `[Failed]`-with-`IsError: false` count as SUCCESS — they belong in the `1..N` block.
2. **EVERY error MUST carry a `[Hint]` line.** `[Hint]` teaches the AI caller how to fix its mistake; an `[Error]` without `[Hint]` is a **code bug, never a doc choice**. Captured a hintless error → fix the tool code (hint must say exactly what to pass), rebuild, re-run, capture fresh. Never record a hintless error; never invent a hint.
3. **NO OTHER TAGS MAY EXIST.** Complete allowed set (defined in `McpToolResults.cs`): first-line prefixes `[Success]` `[Error]` `[DryRun]` `[Partial]` `[Failed]`; continuation lines `[Hint]` `[Detail]`; per-item `[Warning]` inside `[Detail]` payloads. Nothing else — `[AuditBrowse]`, `[Info]`, any custom tag = **code bug**: fix the tool (route through the `McpToolResults` factory), rebuild, re-capture. Never copy a non-standard tag into a doc; never strip it from a capture to hide the bug.
4. **NEVER FABRICATE OUTPUT.** Every byte of OUTPUT comes from a real run of that test's INPUT — no inventing, no reconstructing, no splicing runs, no deriving one side from the other, no "fixing" prefixes. If the real output has the wrong shape → the CODE is wrong: fix code, rebuild, re-capture. Missing/unreadable output → mark `[miss]` (a `[miss]` is correct; fabrication is far worse):
   - `[miss] Structured output not captured. Re-run test and fill in.`
   - `[miss] Plain text output not captured. Re-run test and fill in.`
   - `[miss] IsError not captured. Re-run test and fill in.`
   aP asks to fix a `[miss]` → re-run that INPUT verbatim, paste real output, update its RESULTS bullet, touch only the named test(s).
5. **NEVER DELETE DATA. NEVER INVENT TEST CASES.** Test only the cases whose INPUT is already in the doc. No cleanup calls — aP deletes artifacts manually. Test solution is always `all_in_one`. CREATE mutations: check existence first — `Customer ABC` exists → create `Customer ABC 2`, then `3`… (every component type); the doc records only the final name. UPDATE mutations: just run them.

## 🔨 Build workflow (aP's rule)

- aP requests an **edit** → plain `dotnet build` on `DynamicsCrm.DevKit.Cli` to verify compile. No release script, no MCP restart.
- aP requests **"full test"** → `.\DynamicsCrm.DevKit.Scripts\Release.DynamicsCrm.DevKit.Cli.ps1` → ask aP to `/mcp` reconnect `devkit-claude` → proof SHA via `whoami` → re-run tests live.

## Structure

- **English only** in prose (headings, descriptions, RESULTS). Captured output data stays verbatim (Vietnamese/special chars in org data are never translated or stripped).
- **No H1 with the tool name/number** — it is in the filename.
- `# TOOL DESCRIPTION` → ` ```text ` block, copied **verbatim** from the tool's `Description(...)` attribute. Exactly 3 sections in order: plain text → `WHEN TO USE:` bullets → `RELATED TOOLS:` `- tool → purpose` bullets (`→`, not `->`). Deviation (extra/missing section) → copy verbatim + **REPORT to aP** — never rewrite the description yourself.
- `# PARAMETERS` → ` ```text ` block, one aligned line per param: `key : type : description`. Types `string`/`int`/`bool` from the C# `[Description(...)]` signatures; defaults/ranges inline (`Default 5000.`). No params → `This tool takes no parameters.`
- Per test:
  - `# TEST N` → `## INPUT` → `## OUTPUT` → `## RESULT`.
  - INPUT: one description line (fold the expectation into it) + ` ```json ` **bare arguments only**, 2-space indent. No envelope (`{"name":..., "arguments":...}`), no arrow pseudo-calls.
  - OUTPUT — exactly ONE block per test, never both:
    - Success → ` ```json ` structured object, always with trailing `"summary"` (byte-identical to the plain-text line, prefix included).
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
