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
     - **If the test has NOT been run yet** (no real output captured), do NOT fabricate output. Put a miss marker in the block instead so anh Phước can re-run and fill it:
       - Plain text block: `[miss] Plain text output not captured. Re-run test and fill in.`
       - JSON block: `[miss] Structured output not captured. Re-run test and fill in.`
     - The reference file `2.get_audit_history.md` is a happy case with full output. Most other files will have `[miss]` markers until re-tested.
   - `## RESULT` (H2) → a ` ```json ` block: `{ "IsError": true }` or `{ "IsError": false }`.
     - If the test has not been run, use `[miss] IsError not captured. Re-run test and fill in.`
5. `# RESULTS` (exact, plural, uppercase) → bullet list of outcomes, one per test.

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
