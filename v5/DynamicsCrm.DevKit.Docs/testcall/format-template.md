# TESTCALL FORMAT TEMPLATE

Rules for every `testcall/{N}.{tool}.md` file. Goal: 36 files share one format so they become Wiki docs.

Status: files `1`–`4` already follow this template. Files `5`–`36` still use the old format (`# Tool description AI đọc được` / `# Input tool call` / `# Output tool call` / `# Kết quả AI tổng hợp`) with per-file variations — when you touch one of those files, convert it fully to this template using the migration rules in the last section.

## ⭐ REFERENCE FILE (APPROVED)

**`2.get_audit_history.md` is the golden reference.** It has been written, reviewed, and fully approved by anh Phước — every detail is correct as expected. Before you start, **read `2.get_audit_history.md` in full** and match its format exactly. After you finish your file, **compare it side-by-side against `2.get_audit_history.md`** and self-check that the format matches: same H1/H2 headings, same parameter column alignment, same TEST/INPUT/OUTPUT/RESULT/RESULTS structure, same English-only rule, same cleanup of bug/fix narrative. If it does not match, fix it before reporting done.

`1.execute_fetchxml.md`, `3.get_business_process_flows.md`, and `4.get_business_rules.md` are additional approved examples (3 has no error tests; 4 shows several error tests).

## Language

- English only in all prose: headings, test descriptions, RESULTS bullets, notes. If a file has Vietnamese, translate it to English.
- **Exception — captured output data stays verbatim.** Vietnamese or special characters inside a captured OUTPUT block (e.g. an owner name `"Phước Lê Văn"` in JSON, or `🟢DEVKITV4` in text output) is real org data and must NOT be translated or stripped.

## Structure

1. **No H1 with the tool name/number** — `# 5. get_custom_apis`, `# Tool description`, `# Tool description AI đọc được` are all wrong. The number + tool name are already in the filename.
2. `# TOOL DESCRIPTION` (exact, uppercase) → a ` ```text ` block with the tool description copied from the tool's `Description(...)` attribute. The description must contain exactly 3 internal sections, in this order:
   1. Plain description text (written so an AI can understand what the tool does)
   2. `WHEN TO USE:` header + `- ` bullets
   3. `RELATED TOOLS:` header + `- tool → purpose` bullets (use the `→` arrow, not `->`)
   - If the source `Description(...)` attribute contains any other section (e.g. `FUZZY/AMBIGUITY:`, `NOTES:`) or is missing one of the 3, **do NOT edit the description yourself — copy it verbatim into the doc and REPORT the deviation to anh Phước**, who decides whether to fix the tool code. Never rewrite, reorganize, or summarize the tool description.
   - When anh Phước fixes the tool description in code, re-capture the description and update the doc's TOOL DESCRIPTION block to match.
3. `# PARAMETERS` (exact, uppercase) → a ` ```text ` block listing every parameter, one per line, column-aligned:
   `key : type : description`
   - Align the key column to the longest key (pad with spaces), then `:`, then type padded to the longest type, then `:`, then description.
   - Types: `string`, `int`, `bool` (match the C# signature).
   - Defaults and ranges go inline in the description (`Default 5000.`, `Max 43200.`).
   - Get key/type/description from the tool's `[Description(...)] string/int param` signatures in `Mcp/Tools/{Tool}.cs`.
   - If the tool has no parameters at all (e.g. `whoami`), keep the `# PARAMETERS` section with a single line `This tool takes no parameters.`
   - Do NOT merge parameters into the TOOL DESCRIPTION block (`Parameters:` sub-lists inside the description fence are the old format — split them out).
4. Repeat for every test:
   - `# TEST N` (H1, uppercase TEST). N is sequential from 1 with no gaps and no letter suffixes — old `Test 8b`, `Test 4b`, `Test 34a`… must be renumbered into the sequence.
   - `## INPUT` (H2) → one description line, then a ` ```json ` block with the tool-call input as **bare arguments only** (`{ "action": "list", ... }`), pretty-printed with 2-space indent. Do NOT use the `{"name": "...", "arguments": {...}}` envelope, arrow pseudo-calls (`→ tool(...)`), or expectation lines (`→ expect: ...`) — fold the expectation into the description line instead.
   - `## OUTPUT` (H2) → a ` ```text ` block with the plain-text output, then a ` ```json ` block with the structured object (success tests only — see the error-test rule below).
   - `## RESULT` (H2) → a ` ```json ` block: `{ "IsError": true }` or `{ "IsError": false }`, one line, always present — never `IsError: `true``inline code, never a`**IsError:**` bold line, never omitted.
5. `# RESULTS` (exact, plural, uppercase) → bullet list of outcomes, one per test: `- Test N: <English summary sentence>.` Bullets are ordered by test number (1, 2, 3, …), never grouped by outcome. Consecutive tests with the same outcome may be ranged: `- Test 4-6: three validation errors ...`.
   - No extra non-test bullets (no `Output convention:` bullet, no `**Bold label:**` thematic bullets, no bug-history bullets).
   - No markdown tables, no ✅ emoji, no numbered lists, no bold lead-ins.

## Test content rules

- Every test is a real tool call against the tool this file documents. Helper/verification calls (`whoami`, `get_tables`, `devkit mcp --tools`, `git status`, `manage_record` delete for cleanup) are **not tests** — drop them. If a cleanup or verification step is genuinely worth keeping, mention it inside the test's description line or the matching RESULTS bullet, in one short sentence.
- A zero-result success (`List 0 found`) is a SUCCESS test: both OUTPUT blocks + `{ "IsError": false }`.
- `[Failed]`-prefixed content with `IsError: false` (e.g. `manage_deleted_records` no-op cases) stays a success test; keep the prefix verbatim in the text block.
- Long outputs: never truncate with `,...` and never replace a block with a prose summary (`Structured content (JSON): giống hệt Test 1 ...` is the old format). Either paste the full verbatim output, or — if genuinely enormous — keep the verbatim first lines and mark the rest `[miss] Output too large to embed. Re-run and capture.` Never invent the omitted part.

## Mutation-test data rules (files 17 onward)

From file 17 onward the tools **mutate Dataverse data** (create/update/delete of records and metadata). These rules govern the test data — they are aP's decisions, not suggestions:

1. **Never delete created data.** No cleanup calls at the end of a migration session. aP controls the org and deletes test artifacts manually when he chooses.
2. **Test solution is always `all_in_one`.** All solution-scoped creates go there.
3. **Test table:** if the org does not already have it, create a new table in `all_in_one` with Display Name `Test Mcp Final` and use it for all table/column/form/view/relationship tests.
4. **Name collisions get a numeric suffix, starting from 2.** This applies to every component type (column, choice, chart, view, form, environment variable, …), not just columns: if `Column A` already exists, create `Column A2`; if that exists too, `Column A3`, and so on. Check before each create.
5. **The doc records only the final name.** If repeated runs meant the session actually created `Column A`, `Column A2`, `Column A3`, and finally tested against `Column A4`, the doc's tests reference `Column A4` as if the earlier names never existed — the file must read as one clean pass against the final values. Earlier intermediate names never appear in the doc.

## 🚫 HARD RULE: NEVER FABRICATE OUTPUT (read this twice)

**This is the most important rule. Violating it breaks the whole purpose of these files.**

- Every byte of OUTPUT plain text and OUTPUT JSON must come from a real tool run captured in the source file. You are formatting, not generating.
- **NEVER invent, guess, reconstruct, or "fill in" output** — not counts, not GUIDs, not field values, not record names, not the number of entries, not the `IsError` value. Even an "obvious" reconstruction (e.g. copying entries from another test, inferring a count) is a violation.
- **NEVER "cook" output either.** Cooking = taking output that DOES exist (from an earlier run, another test, or the structured side) and assembling, merging, trimming, or reformatting it into the block you wish existed. Examples of cooking, all forbidden: splicing an old text line together with a JSON block from a different run; editing a captured line to add/remove a prefix or `[Detail]` part because the template "expects" it; deriving the text side from the structured side (or vice versa); pasting a capture from a DIFFERENT build than the one the test claims to run on. **The only valid way to produce an OUTPUT block is: run the real tool with the test's INPUT, then paste what actually came back, byte for byte.**
- **If the real output does not match what the template or the doc expects (wrong prefix, missing `[Detail]`, wrong shape) → the CODE is wrong, not the capture.** Stop, fix the tool code, rebuild/release, re-run the test live, and capture the new real output. NEVER edit the captured output to make it look correct — that is the worst form of cooking because the doctored capture then hides a real bug.
- **If any part of a test's output is missing, truncated, illegible, or you cannot see it verbatim in the source file → mark it `[miss]`.** Do not piece it together from other tests, from the tool description, or from your knowledge of the code.
- A `[miss]` is the CORRECT outcome when you lack data. It is not a failure — it is a signal to anh Phước to re-run that test and fill it in. **Fabricating output is far worse than leaving a `[miss]`, because a fabricated value looks real and anh Phước has no way to know it is fake when reviewing.**
- Miss markers (use exactly these strings):
  - Plain text block: `[miss] Plain text output not captured. Re-run test and fill in.`
  - JSON block: `[miss] Structured output not captured. Re-run test and fill in.`
  - RESULT block: `[miss] IsError not captured. Re-run test and fill in.`
- If you can see part of the output but not all, keep the part you can see verbatim and mark only the missing part `[miss]`. Never silently drop or "complete" partial output.
- The reference file `2.get_audit_history.md` is a happy case with full captured output. Most other files will contain `[miss]` markers — that is expected and correct.
- Miss marker fence rules: the plain-text miss uses a ` ```text ` fence; the JSON miss and the RESULT miss use a ` ```json ` fence (the marker text itself is still plain, but the fence matches the block it stands in for).
- This rule also applies during migration from the old format: prose substitutes (`giống hệt Test 1`), paraphrased `structured:` digests, and "reconstructed from verification" outputs in the old files are NOT captured output — convert them to `[miss]` markers rather than copying them as if they were real.

## 🔧 WHEN aP REQUESTS "FIX THE MISS"

When anh Phước asks you to fix / fill in / resolve a `[miss]` marker in a file:

1. **Find the test** that has the `[miss]` (by `# TEST N` heading above it).
2. **Read its `## INPUT` block** — that is the exact tool-call to re-run. Copy the arguments verbatim.
3. **Run the tool** with that input (use the matching `mcp__devkit-claude__<tool>` tool) and capture the real output — the plain-text content and the structured JSON object, plus the `IsError` value.
4. **Replace the `[miss]` markers** in that test's `## OUTPUT` and `## RESULT` with the captured output, verbatim. Do not edit, summarise, or "clean up" the real output — paste it as-returned.
5. **Update the matching bullet** in `# RESULTS` so it describes the now-captured outcome (no more `[miss]` mention).
6. **Do not touch any other test** — only the test(s) anh Phước named. Do not fabricate output for tests that still lack data; leave their `[miss]` markers intact.
7. After filling, the test must look identical in shape to a happy-case test (e.g. Test 2 in `2.get_audit_history.md`): ` ```text ` plain output, ` ```json ` structured output, ` ```json ` `{ "IsError": ... }`.

## ERROR test output — text block only

For a test whose result is an **error** (`IsError: true`), the MCP `CallToolResult` carries the same data in two places at once: the `content` text block (a 3-part `[Error]/[Hint]/[Detail]` text) and the `structuredContent` JSON object (`{ "error", "hint", "details" }`). MCP clients surface only one side on errors — never both — and we standardise on the **text** side. So for an error test, record **only the ` ```text ` block (the `[Error]/[Hint]/[Detail]` output, verbatim) and the `## RESULT` `{ "IsError": true }` block. **Do not include a ` ```json ` structured block at all** — not even a `[miss]` marker. The structure for an error test is:

````
## OUTPUT

```text
[Error] {message}
[Hint] {hint}            ← only if a hint exists
[Detail] {json-string}   ← only if details exist
````

**Bulk `[Partial]` / `[Failed]` results behave exactly like `[Error]`.** They also return `IsError: true`, and their text output follows the same convention: a one-line `[Partial]`/`[Failed]` summary followed by a `[Detail]` line carrying the full result DTO (per-item statuses, per-item errors, warnings) as JSON. Record them the same way — text block only, no separate JSON block:

````
## OUTPUT

```text
[Partial] Created 2/3 'account' record(s) in 1.7s (...).
[Detail] {"entity":"account","total":3,...,"items":[...],"status":"partial"}
````

Note: the `[Detail]` JSON is produced by the .NET JSON serializer, which escapes `+` as `\u002B` and `'` as `\u0027` — keep these escapes verbatim in captures; do not "fix" them into `+`/`'`.

## RESULT

```json
{ "IsError": true }
```

- If your client surfaces the **structured JSON** instead of text, record the ` ```json ` object verbatim and omit the ` ```text ` block (still include `## RESULT`). Never include both blocks for an error test.
- Never reconstruct the side you cannot see from the side you can, from the tool description, or from the code.
- The error tag is always `Hint:`. Old captures that show `Tip:` are from pre-standardization builds — keep them verbatim when copying a real capture, but never write `Tip:` yourself.
- Never wrap error output in a combined JSON object (`{"content": ..., "structuredContent": ...}` raw JSON-RPC dumps) — that is the old format.

This rule overrides the general "OUTPUT has both a text block and a JSON block" structure **only for error tests**. Happy-case (success) tests still record both blocks as usual, because success output is surfaced by every client.

## Cleanup rules

- Kill bug/fix-bug narrative. Rewrite any "regression", "phase 4", "fix bug", "Round 2", "Đợt 2", "STRICT BUG POLICY", "BUG #2 FOUND + FIXED" story as a normal `TEST N` with a clean description. Multi-round retest tests (e.g. `34a`–`34d` after a bug fix) collapse into the renumbered sequence covering the final behavior only.
- Kill build/runtime evidence: `Runtime proof:`, `assemblySha256 = ...`, `[Round 2]` build stamps, `whoami` SHA verification, MCP evidence sections, cleanup-evidence sections — all dropped. They belong to the review conversation, not the Wiki doc.
- Keep real output data (timestamps, GUIDs, values) verbatim from the source file.
- Short is better — long files make AI lose context. Do not duplicate identical structured JSON across tests unless it is the actual output; if two tests share identical output, show it once and reference it.
- Only two fence languages exist in these files: ` ```text ` and ` ```json `. No bare ` ``` ` fences, no ` ```js `/` ```xml ` fences (XML content like FormXML or FetchXML lives inside a ` ```text ` or ` ```json ` block as data).
- No blockquotes, no `Note:`/`Lưu ý:`/`Quan sát:` prose paragraphs between tests, no `Setup:`/`Fixture:` preamble blocks inside a test. If the setup matters, one sentence in the INPUT description line.

## Migration checklist (old format → this template)

When converting a file that still uses `# Tool description [AI đọc được]` / `# Input tool call` / `# Output tool call` / `# Kết quả [AI tổng hợp]`:

1. Drop the `# N. tool_name` H1; rename description H1 to `# TOOL DESCRIPTION`.
2. Extract parameters into a new `# PARAMETERS` section (from the embedded `Parameters:` list, `Input schema params:` line, or the C# signatures) in aligned `key : type : description` form.
3. Merge the split Input/Output halves into per-test `# TEST N` / `## INPUT` / `## OUTPUT` / `## RESULT` blocks; renumber all tests sequentially (including letter-suffixed ones); convert envelopes/arrow-calls to bare-argument ` ```json ` inputs.
4. Apply the error-test text-only rule; replace prose substitutes and paraphrases with `[miss]` markers per the hard rule.
5. Translate all Vietnamese prose to English (leave captured output data verbatim); replace `# Kết quả …` with `# RESULTS` bullets in `- Test N: ...` form; drop tables, ✅, bold lead-ins, bug narrative, build proofs, blockquotes.
6. Compare the result side-by-side with `2.get_audit_history.md` before reporting done.

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

\`\`\`text
plain text output
\`\`\`

\`\`\`json
{ "structured": "..." }
\`\`\`

## RESULT

\`\`\`json
{ "IsError": false }
\`\`\`

# RESULTS

- Test 1: ...
```

