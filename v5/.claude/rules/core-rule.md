# Core Rules (Claude Code)

> IDE-specific overrides. Shared rules: `AGENTS.md`.

---

## ⛔ ABSOLUTE FORBIDDEN

> [!CAUTION]
> **NEVER** do any of the following — no exceptions, ever:
> - `git add` / `git commit` / `git push` — only via `/claude-commit`

## ⚠️ DO NOT AUTO-EXECUTE

> [!WARNING]
> The following commands are **dangerous** and must NOT be auto-executed by Claude.
> They may ONLY run when the user **explicitly invokes them** in chat:
> - `/claude-build-debug`
> - `/claude-build-release`

---

## Build After Editing (Claude prefix)

| Project Folder | Build Command |
|---|---|
| `DynamicsCrm.DevKit.Analyzers\**` | `/claude-build-analyzer` |
| `DynamicsCrm.DevKit.Cli\**` | `/claude-build-cli` |
| `DynamicsCrm.DevKit.Tool\**` | `/claude-build-tool` |
| `DynamicsCrm.DevKit\**` | `/claude-build-vsix` |

---

## MCP Restart (Claude prefix)

> After editing any file in `DynamicsCrm.DevKit.Cli\Mcp\*.*`:
> 1. Run `/claude-build-cli` to rebuild
> 2. Kill the current MCP process:
> ```powershell
> Get-Process | Where-Object { $_.CommandLine -like "*devkit*mcp*" } | Stop-Process -Force
> ```
