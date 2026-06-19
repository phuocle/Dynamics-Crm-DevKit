# AI Tool Workflow Rules

> Primary context: `AGENTS.md` (read that first). This file is the neutral source used to generate client-specific rule files.

## Command Prefixes

When `AGENTS.md` instructs you to use a workflow like `/*-build-cli` or `/*-commit`, use the prefix generated for your current AI client.

- Build Analyzers: `/*-build-analyzer`
- Build CLI: `/*-build-cli`
- Build Tool: `/*-build-tool`
- Build VSIX: `/*-build-vsix`
- Build All Debug: `/*-build-debug`
- Build All Release: `/*-build-release`
- Run Tests: `/*-unit-test`
- Commit code: `/*-commit`

## Forbidden Actions

> [!CAUTION]
> - NEVER run workflows that belong to another AI client.
> - NEVER use raw Git (`git add`, `git commit`, `git push`) locally. Use the generated commit workflow for your current AI client.
> - NEVER auto-run full debug or release builds. `/*-build-debug` and `/*-build-release` may run only when the user explicitly invokes them.

## Build After Editing

| Project Folder | Build Command |
|---|---|
| `DynamicsCrm.DevKit.Analyzers\**` | `/*-build-analyzer` |
| `DynamicsCrm.DevKit.Cli\**` | `/*-build-cli` |
| `DynamicsCrm.DevKit.Tool\**` | `/*-build-tool` |
| `DynamicsCrm.DevKit\**` | `/*-build-vsix` |

## MCP Restart

After editing any file in `DynamicsCrm.DevKit.Cli\Mcp\*.*`:

1. Run `/*-build-cli` to rebuild, pack, install, and kill stale MCP processes.
2. Restart the MCP connector for the current AI client.
3. Call MCP `whoami` once so the client starts a fresh `devkit mcp` process.
4. Verify `structuredContent.devkit.version`, `structuredContent.devkit.build`, and `structuredContent.devkit.processStartTime`.
5. Compare `structuredContent.devkit.assemblySha256` with `Published\<version>\DynamicsCrm.DevKit.Cli.<version>.build-manifest.json` field `installedAssemblySha256`.
