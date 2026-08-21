# TESTCALL FORMAT TEMPLATE

Rules for every `testcall/{N}.{tool}.md` file. Goal: 36 files share one format so they become Wiki docs.

## ⭐ REFERENCE FILE (APPROVED)

**`2.get_audit_history.md` is the golden reference.** It has been written, reviewed, and fully approved by anh Phước — every detail is correct as expected. Before you start, **read `2.get_audit_history.md` in full** and match its format exactly. After you finish your file, **compare it side-by-side against `2.get_audit_history.md`** and self-check that the format matches: same H1/H2 headings, same parameter column alignment, same TEST/INPUT/OUTPUT/RESULT/RESULTS structure, same English-only rule, same cleanup of bug/fix narrative. If it does not match, fix it before reporting done.

## Language

- English only. If a file has Vietnamese, translate it to English.

## Structure

1. **No H1 with tool name** — the number + tool name are already in the filename.
2. `# TOOL DESCRIPTION` (exact, uppercase) → a ` ```text ` block with the tool description copied from the tool's `Description(...)` attribute.
3. `# PARAMETERS` (exact, uppercase) → a ` ```text ` block listing every parameter, one per line, column-aligned:
   `key : type : description`
   - Align the key column to the longest key (pad with spaces), then ` : `, then type padded to the longest type, then ` : `, then description.
   - Get key/type/description from the tool's `[Description(...)] string/int param` signatures in `Mcp/Tools/{Tool}.cs`.
4. Repeat for every test:
   - `# TEST N` (H1, uppercase TEST)
   - `## INPUT` (H2) → one description line, then a ` ```json ` block with the tool-call input.
   - `## OUTPUT` (H2) → a ` ```text ` block with the plain-text output, then a ` ```json ` block with the structured object.
   - `## RESULT` (H2) → a ` ```json ` block: `{ "IsError": true }` or `{ "IsError": false }`.
5. `# RESULTS` (exact, plural, uppercase) → bullet list of outcomes, one per test.

## 🚫 HARD RULE: NEVER FABRICATE OUTPUT (read this twice)

**This is the most important rule. Violating it breaks the whole purpose of these files.**

- Every byte of OUTPUT plain text and OUTPUT JSON must come from a real tool run captured in the source file. You are formatting, not generating.
- **NEVER invent, guess, reconstruct, or "fill in" output** — not counts, not GUIDs, not field values, not record names, not the number of entries, not the `IsError` value. Even an "obvious" reconstruction (e.g. copying entries from another test, inferring a count) is a violation.
- **If any part of a test's output is missing, truncated, illegible, or you cannot see it verbatim in the source file → mark it `[miss]`.** Do not piece it together from other tests, from the tool description, or from your knowledge of the code.
- A `[miss]` is the CORRECT outcome when you lack data. It is not a failure — it is a signal to anh Phước to re-run that test and fill it in. **Fabricating output is far worse than leaving a `[miss]`, because a fabricated value looks real and anh Phước has no way to know it is fake when reviewing.**
- Miss markers (use exactly these strings):
  - Plain text block: `[miss] Plain text output not captured. Re-run test and fill in.`
  - JSON block: `[miss] Structured output not captured. Re-run test and fill in.`
  - RESULT block: `[miss] IsError not captured. Re-run test and fill in.`
- If you can see part of the output but not all, keep the part you can see verbatim and mark only the missing part `[miss]`. Never silently drop or "complete" partial output.
- The reference file `2.get_audit_history.md` is a happy case with full captured output. Most other files will contain `[miss]` markers — that is expected and correct.
- Miss marker fence rules: the plain-text miss uses a ` ```text ` fence; the JSON miss and the RESULT miss use a ` ```json ` fence (the marker text itself is still plain, but the fence matches the block it stands in for).

## 🔧 WHEN aP REQUESTS "FIX THE MISS"

When anh Phước asks you to fix / fill in / resolve a `[miss]` marker in a file:

1. **Find the test** that has the `[miss]` (by `# TEST N` heading above it).
2. **Read its `## INPUT` block** — that is the exact tool-call to re-run. Copy the arguments verbatim.
3. **Run the tool** with that input (use the matching `mcp__devkit-claude__<tool>` tool) and capture the real output — the plain-text content and the structured JSON object, plus the `IsError` value.
4. **Replace the `[miss]` markers** in that test's `## OUTPUT` and `## RESULT` with the captured output, verbatim. Do not edit, summarise, or "clean up" the real output — paste it as-returned.
5. **Update the matching bullet** in `# RESULTS` so it describes the now-captured outcome (no more `[miss]` mention).
6. **Do not touch any other test** — only the test(s) anh Phước named. Do not fabricate output for tests that still lack data; leave their `[miss]` markers intact.
7. After filling, the test must look identical in shape to a happy-case test (e.g. Test 2 in `2.get_audit_history.md`): ` ```text ` plain output, ` ```json ` structured output, ` ```json ` `{ "IsError": ... }`.

## Cleanup rules

- Kill bug/fix-bug narrative. Rewrite any "regression", "phase 4", "fix bug" story as a normal `TEST N` with a clean description.
- Keep real output data (timestamps, GUIDs, values) verbatim from the source file.
- Short is better — long files make AI lose context. Do not duplicate identical structured JSON across tests unless it is the actual output; if two tests share identical output, show it once and reference it.

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
