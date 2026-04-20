# GitHub Copilot

## ⛔ ABSOLUTE FORBIDDEN

> [!CAUTION]
> **NEVER** do any of the following — no exceptions, ever:
> - `git add` / `git commit` / `git push` — only via the IDE's commit workflow
> - `dotnet build` or `dotnet test` directly — always use the build workflows below
> - Running workflows that belong to other IDEs — use only the prefix for your current IDE (`/claude-*`, `/copilot-*`, or `/anti-*`)
> - `/build-debug` or `/build-release` — dangerous, must NOT be auto-executed; only run when explicitly requested

---

## IDE-Specific Command Prefixes

When `AGENTS.md` instructs you to use a workflow like `/*-build-cli` or `/*-commit`, you MUST use the `copilot-` prefix because you are running in GitHub Copilot (VS Code).

| Workflow | Prompt |
|---|---|
| Build Analyzers | `/copilot-build-analyzer` |
| Build CLI | `/copilot-build-cli` |
| Build Tool | `/copilot-build-tool` |
| Build VSIX | `/copilot-build-vsix` |
| Build All (DEBUG) | `/copilot-build-debug` |
| Build All (RELEASE) | `/copilot-build-release` |
| Run Unit Tests | `/copilot-unit-test` |
| Commit code | `/copilot-commit` |

---

## Build After Editing (Copilot prefix)

| Project Folder | Build Command |
|---|---|
| `DynamicsCrm.DevKit.Analyzers\**` | `/copilot-build-analyzer` |
| `DynamicsCrm.DevKit.Cli\**` | `/copilot-build-cli` |
| `DynamicsCrm.DevKit.Tool\**` | `/copilot-build-tool` |
| `DynamicsCrm.DevKit\**` | `/copilot-build-vsix` |

---

## MCP Restart (Copilot prefix)

> After editing any file in `DynamicsCrm.DevKit.Cli\Mcp\*.*`:
> 1. Run `/copilot-build-cli` to rebuild
> 2. Kill the current MCP process:
> ```powershell
> Get-Process | Where-Object { $_.CommandLine -like "*devkit*mcp*" } | Stop-Process -Force
> ```

---

## Copilot Tool Usage Notes

- Always use tools to **execute** commands — never just print steps as text
- Use `run_in_terminal` for PowerShell commands (Windows only — no Bash)
- Use `read_file`, `grep_search`, `file_search` before editing files
- Check `get_errors` after editing to validate changes
- Never call `dotnet build` or `dotnet test` directly — use the prompt workflows
