# DynamicsCrm.DevKit - AI Agent Core Rules

> **Purpose**: Supplementary rules for AI agents. Primary project context is in `AGENTS.md`.

---

## Communication Protocol

- **End every response with**: `"[emoji] I'm done, Phuoc — please review my work [emoji]"`

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

> [!CAUTION]
> **NEVER commit or push to Git unless explicitly requested by the user.**
> The **only** allowed way to commit is via the `/claude-commit` skill.
> Do NOT run `git add` / `git commit` / `git push` on your own initiative — even after completing a task.

> [!IMPORTANT]
> This project runs on **Windows with PowerShell**. When performing git operations, you **MUST** use PowerShell-compatible syntax. Bash syntax will fail.

**Rules**:
- **NO self-initiated commits** — wait for the user to run `/claude-commit`
- Do NOT use `&&` to chain commands — use `;` or run commands separately
- Do NOT use heredoc `<<'EOF'` — it is bash-only syntax
- For multi-line commit messages, use multiple `-m` flags: `git commit -m "title" -m "body"`
- Always run `git add` and `git commit` as **separate commands**, not chained
- **CRLF Warning**: Always append `2>$null` to `git add` to suppress the `"LF will be replaced by CRLF"` warning

**Example** (only when invoked via `/claude-commit`):

```powershell
# Step 1: Stage files (2>$null suppresses CRLF warning on Windows)
git add "file1.md" "file2.ps1" 2>$null

# Step 2: Commit (separate command)
git commit -m "Short summary of changes" -m "Longer description of what was changed and why."
```

---

## MCP Configuration

The DevKit CLI includes an MCP server (`devkit mcp`) for Dataverse operations.

| IDE | MCP Config File |
|---|---|
| **VS Code** | `.vscode/mcp.json` |
