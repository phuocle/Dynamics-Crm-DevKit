# DynamicsCrm.DevKit - AI Agent Core Rules

> **Purpose**: Supplementary rules for AI agents. Primary project context is in `AGENTS.md`.

---

## Communication Protocol

- **Start every response with**: `"[emoji] Good [morning/afternoon/evening] Phuoc [emoji]"` (based on user's local time)
- **End every response with**: `"[emoji] I'm done, Phuoc — please review my work [emoji]"`

---

## User Timezone (for greeting)

- **Timezone**: Vietnam (Asia/Ho_Chi_Minh, UTC+7)
- **Greeting mapping**: morning (5h-11h), noon (11h-13h), afternoon (13h-17h), evening (17h-21h), night (21h-5h)
- **How to determine current time**: Run `date +"%H"` in the terminal — this returns the user's **local time** (already Vietnam time). Use the hour value directly with the greeting mapping above. Do NOT add 7 hours — the system clock is already in the correct timezone.
- **Build start/end times**: Use the actual timestamp when the command was executed (from terminal output or system), not assumed time. If unknown, omit or use "N/A".

---

## PowerShell Commands (Windows Only)

> [!CAUTION]
> This project runs on **Windows with PowerShell**. Unix/Bash commands do NOT work here. Always use PowerShell equivalents.

### Forbidden Unix Commands -> PowerShell Equivalents

| Forbidden (Unix/Bash) | Use Instead (PowerShell) |
|---|---|
| `grep "pattern" file` | `Select-String -Pattern "pattern" -Path file` |
| `grep -r "pattern" .` | `Get-ChildItem -Recurse \| Select-String "pattern"` |
| `ls` | `Get-ChildItem` |
| `cat file` | `Get-Content file` |
| `find . -name "*.cs"` | `Get-ChildItem -Recurse -Filter "*.cs"` |
| `rm -rf folder` | `Remove-Item -Recurse -Force folder` |
| `touch file.txt` | `New-Item -ItemType File file.txt` |
| `mkdir -p path` | `New-Item -ItemType Directory -Force path` |
| `cmd1 && cmd2` | `cmd1 ; cmd2` (or run separately) |
| `<<'EOF'` heredoc | Use `@" ... "@` here-string or separate lines |
| `which devkit` | `Get-Command devkit` |
| `export VAR=value` | `$env:VAR = "value"` |

---

## Git Operations (PowerShell)

> [!IMPORTANT]
> This project runs on **Windows with PowerShell**. When performing git operations, you **MUST** use PowerShell-compatible syntax. Bash syntax will fail.

**Rules**:
- Do NOT use `&&` to chain commands — use `;` or run commands separately
- Do NOT use heredoc `<<'EOF'` — it is bash-only syntax
- For multi-line commit messages, use multiple `-m` flags: `git commit -m "title" -m "body"`
- Always run `git add` and `git commit` as **separate commands**, not chained
- **CRLF Warning**: Always append `2>$null` to `git add` to suppress the `"LF will be replaced by CRLF"` warning

**Example**:

```powershell
# Step 1: Stage files (2>$null suppresses CRLF warning on Windows)
git add "file1.md" "file2.ps1" 2>$null

# Step 2: Commit (separate command)
git commit -m "Short summary of changes" -m "Longer description of what was changed and why."
```

---

## MCP Configuration (Per IDE)

The DevKit CLI includes an MCP server (`devkit mcp`) for Dataverse operations. Each IDE stores MCP config in a different location:

| IDE | MCP Config File |
|---|---|
| **Antigravity** | `C:\Users\p\.gemini\antigravity\mcp_config.json` |
| **VS Code** | `.vscode/mcp.json` |

> [!IMPORTANT]
> When updating MCP config in one IDE, you **MUST** sync the changes to all other IDEs. The MCP server name and args should be identical across all IDEs (only the JSON format may differ per IDE).

### MCP Sync Rules

1. After updating MCP config in any IDE, copy the equivalent config to the other IDE locations
2. VS Code config is in the workspace (`.vscode/mcp.json`)
3. Antigravity config is at a global user-level path: `C:\Users\p\.gemini\antigravity\mcp_config.json`
4. The `Sync-AI-Config.ps1` script handles rules/workflows sync but **MCP config must be synced manually** due to different JSON formats per IDE
