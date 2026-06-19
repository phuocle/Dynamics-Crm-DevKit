---
description: Execute a prompt from Mcp.prompts.md, track tool chain, and update the file with results
---

Execute a single prompt from `DynamicsCrm.DevKit.Docs/Mcp.prompts.md`, record which MCP tools were called and in what order, then write the result back into the file inline under the prompt.

> [!IMPORTANT]
> **AI AGENT INSTRUCTIONS (CRITICAL):**
> The user will pass a prompt text (copy/pasted from `Mcp.prompts.md`).
> You MUST:
> 1. Execute the prompt using MCP tools
> 2. Track every MCP tool call made (tool name + key params)
> 3. Update `Mcp.prompts.md` to append a result block directly under the matching prompt line
> 4. Watch for bugs and fix them if found
> 5. Handle re-test scenarios correctly

---

## Step 1 — Execute the prompt

> [!CAUTION]
> **DO NOT read `Mcp.prompts.md` before executing.** Execute the prompt exactly as the user typed it — no extra context, no peeking at the file. If the prompt is ambiguous or missing parameters (e.g. no solution name), execute it as-is and let the tools return what they return.

Run the prompt using whatever MCP tools are appropriate. Do not guess — actually call the tools and observe real results.

---

## Step 2 — Track the tool chain

As you execute, note every MCP tool call in order:
- Tool name (human-readable, not internal code name)
- Key input parameters used
- Brief summary of what it returned

---

## Step 3 — Update Mcp.prompts.md

**Only now**, read `DynamicsCrm.DevKit.Docs/Mcp.prompts.md`, find the exact line matching the prompt (by its number and text), and insert a result block **immediately after** that line using this format:

```
   > ✅ Tools: [tool A] → [tool B] → [tool C]
   > Result: <one sentence summary of what happened>
```

- Use `→` to show the chain order
- Keep it on **2 lines only** — one for tools, one for result
- If the prompt was skipped or failed, use `⚠️` instead of `✅` and explain why

---

## Step 4 — Bug handling

If during execution you discover a bug in a `.cs` file under `DynamicsCrm.DevKit.Cli\Mcp\`:

1. Read the relevant `.cs` file(s) to confirm the bug
2. Fix the file using Edit tool
3. Run `/devkit-build-cli` to rebuild and restart MCP
4. Kill the running MCP process:
   ```powershell
   Get-Process | Where-Object { $_.CommandLine -like "*devkit*mcp*" } | Stop-Process -Force
   ```
5. Re-run the original prompt from Step 1 and record the corrected result

---

## Step 5 — Re-test blocked scenarios

If the prompt tries to **create something that already exists** (table, column, choice, etc.) and cannot proceed:

> [!WARNING]
> Do NOT silently skip or work around it.
> Stop and ask **aPhước** to manually delete the existing record/field/table so the test can run cleanly and produce an accurate result.

Mark the prompt result block as:
```
   > ⚠️ Tools: [tool used to detect conflict]
   > Result: BLOCKED — [name] already exists. Ask aPhước to delete it and re-run this prompt.
```
