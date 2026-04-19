# Core Rules

> Supplementary rules. Primary context: `AGENTS.md`.

---

## 🔴 End Every Response With

`"[emoji] I'm done, Phuoc — please review my work [emoji]"`

---

## ⛔ ABSOLUTE FORBIDDEN — NEVER DO THESE

> [!CAUTION]
> **NEVER** do any of the following — no exceptions, ever:
> - `git add` / `git commit` / `git push` — only allowed via `/anti-commit` skill
> - `/anti-build-debug` or `/anti-build-release` — forbidden build commands

---

## PowerShell (Windows Only)

> [!CAUTION]
> Unix/Bash commands do NOT work. Use PowerShell equivalents.

| Unix/Bash | PowerShell |
|---|---|
| `grep "p" file` | `Select-String -Pattern "p" -Path file` |
| `grep -r "p" .` | `Get-ChildItem -Recurse \| Select-String "p"` |
| `ls` / `cat` / `which` | `Get-ChildItem` / `Get-Content` / `Get-Command` |
| `find . -name "*.cs"` | `Get-ChildItem -Recurse -Filter "*.cs"` |
| `rm -rf` / `touch` / `mkdir -p` | `Remove-Item -Recurse -Force` / `New-Item -ItemType File/Directory -Force` |
| `cmd1 && cmd2` / `<<'EOF'` | `cmd1 ; cmd2` / `@" ... "@` here-string |
| `export VAR=value` | `$env:VAR = "value"` |

---

## Git (only via `/anti-commit`)

```powershell
git add "file1" 2>$null   # 2>$null suppresses CRLF warning
git commit -m "title" -m "body"   # separate commands, no &&
```

---

## Build After Editing

After editing files in these projects, run the corresponding build command:

| Project Folder | Build Command |
|---|---|
| `DynamicsCrm.DevKit.Analyzers\**` | `/anti-build-analyzer` |
| `DynamicsCrm.DevKit.Cli\**` | `/anti-build-cli` |
| `DynamicsCrm.DevKit.Tool\**` | `/anti-build-tool` |
| `DynamicsCrm.DevKit\**` | `/anti-build-vsix` |

---

## Documentation / Saving .md Files

> [!IMPORTANT]
> All docs must be saved as `.md` files inside `DynamicsCrm.DevKit.Docs\`. Auto-resolve the subfolder by keyword:

| Keyword / Context | Save To |
|---|---|
| `cli`, `command`, `mcp`, `task`, `devkit mcp` | `DynamicsCrm.DevKit.Docs\DynamicsCrm.DevKit.Cli\` |
| `vsix`, `extension`, `wizard`, `package` | `DynamicsCrm.DevKit.Docs\DynamicsCrm.DevKit\` |
| `analyzer`, `diagnostic`, `roslyn` | `DynamicsCrm.DevKit.Docs\DynamicsCrm.DevKit.Analyzers\` |
| `tool` | `DynamicsCrm.DevKit.Docs\DynamicsCrm.DevKit.Tool\` |
| `script`, `ps1`, `powershell` | `DynamicsCrm.DevKit.Docs\DynamicsCrm.DevKit.Scripts\` |
| `test`, `unittest`, `integration` | `DynamicsCrm.DevKit.Docs\DynamicsCrm.DevKit.Tests\` |
| anything else / unclear | `DynamicsCrm.DevKit.Docs\Others\` |

**Example**: "save .md mcp" → `DynamicsCrm.DevKit.Docs\DynamicsCrm.DevKit.Cli\<filename>.md`

---

## MCP

DevKit MCP server: `devkit mcp` · Config: `.vscode/mcp.json`

> [!IMPORTANT]
> After editing any file in `DynamicsCrm.DevKit.Cli\Mcp\*.*`:
> 1. Run `/anti-build-cli` to rebuild
> 2. Kill the current MCP process so the system auto-restarts it:
> ```powershell
> Get-Process | Where-Object { $_.CommandLine -like "*devkit*mcp*" } | Stop-Process -Force
> ```
