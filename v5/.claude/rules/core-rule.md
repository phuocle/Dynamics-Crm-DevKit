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
> 1. Run `/claude-build-cli` to rebuild, pack, install, and kill stale MCP processes.
> 2. Call MCP `whoami` once so Codex starts the newly installed MCP server.
> 3. Compare `structuredContent.devkit.assemblySha256` with `Published\<version>\DynamicsCrm.DevKit.Cli.<version>.build-manifest.json` field `installedAssemblySha256`.
> 4. Also verify `structuredContent.devkit.version`, `structuredContent.devkit.build`, and `structuredContent.devkit.processStartTime`.
> 5. If Codex reports `Transport closed`, run `.\DynamicsCrm.DevKit.Scripts\Test-DynamicsCrm.DevKit.Cli.McpRuntime.ps1 -Version "<version>"` to verify a fresh MCP process through stdio, then reconnect the MCP connector before interactive tool testing.
