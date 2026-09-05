# DynamicsCrm.DevKit

## Component Boundaries

If unsure whether a change belongs in `Cli`, `Shared`, or `DynamicsCrm.DevKit` (VSIX) — ask. Different frameworks, different binaries.

| Component | Path | Framework |
|---|---|---|
| VSIX (VS 2026 extension) | `DynamicsCrm.DevKit/` | .NET Framework 4.8 |
| CLI (`devkit` tool) | `DynamicsCrm.DevKit.Cli/` | .NET 10.0 |
| Analyzers (DEVKIT1001–1021) | `DynamicsCrm.DevKit.Analyzers/` | .NET Standard 2.0 |
| Shared (code gen + Dataverse) | `DynamicsCrm.DevKit.Shared/` | Shared Project (.shproj) |
| MCP server (33 tools) | `DynamicsCrm.DevKit.Cli/Mcp/` | inside CLI |

Key entry points:
- CLI: `DynamicsCrm.DevKit.Cli/Program.cs` → `CommandApp` (Spectre.Console.Cli)
- CLI base command: `Commands/DevKitCommand<T>` → connection, validation, output
- MCP: `Mcp/McpServerHost.cs` → `ToolCategoryMap` controls which tools load per tier
- Code gen: `Shared/Helper.cs`, `Shared/XrmHelper.cs` (large by design — do not refactor unless asked)
- VSIX: `DynamicsCrm.DevKit/DevKitPackage.cs` → 13 ProjectTemplates, 17 ItemTemplates

---

## CLI Architecture

```
Commands/  → DevKitCommand<T> (base: connection, validation, header, exit codes)
Models/    → DevKitCommandArgs (base) → specific args per command
Tasks/     → ITask → TaskXxx implementations
Mcp/       → McpServerHost + Tools/ + Resources/ + Services/
```

Command → Task mapping:

| Command | Task |
|---|---|
| `generator` | `TaskGenerator` |
| `server` | `TaskServer` |
| `webresource` | `TaskWebResource` |
| `modelbuilder` | `TaskModelBuilder` |
| `solution` | `TaskPacSolutionPackager` |
| `mcp` | `McpServerHost` |

Deprecated: `plugin`, `workflow`, `dataprovider` → use `server`; `proxytype` → use `modelbuilder`

Auth priority:
- Normal CLI commands: `--conn` > `--auth/--url/...` > project `.env` (`DEVKIT_*`) > empty
- `devkit mcp`: `--conn` > `--auth/--url/...` > OS env vars (`DEVKIT_*`) > empty
Auth types: `Interactive`, `DeviceCode`, `ClientSecret`, `FromPac`, `OAuth` (legacy), `AD` (on-prem)

---

## MCP Tools

33 tools across 3 tiers (`basic` / `standard` / `advanced`).

- Only tool classes get `[McpServerToolType]` — never on helper classes
- When splitting a large tool: entry class stays in `DynamicsCrm.DevKit.Cli.Mcp.Tools`, domain helpers go in subnamespaces (`Tools.Form`, `Tools.Ribbon`, `Tools.SiteMap`)
- `ToolCategoryMap` uses `nameof()` for compile-time safety — preserve when adding tools, keep in sync
- Editing `Cli\Mcp\Tools\*` — preserve existing error text, output shape, structured result fields, and temp-file paths unless the task explicitly changes them

---

## Analyzers

21 analyzers, IDs `DEVKIT1001`–`DEVKIT1021`. All inherit `BaseDiagnosticAnalyzer`. Core in `Analyzers/Core/`: `DiagnosticIdentifiers.cs`, `DiagnosticDescriptors.cs`, `AnalyzerHelper.cs`. Unit tests use xUnit targeting net48.

---

## Conventions

- `ServiceClient` variable → `serviceClient`
- `IOrganizationService` variable → `orgService` (field: `_orgService`); `IOrganizationServiceAsync2` variable → `orgServiceAsync`
- Preserve existing public command names, tool names, and JSON keys
- Prefer existing helpers in `DynamicsCrm.DevKit.Shared` and `Mcp/Tools/Helper/` before creating new ones
- All docs → `DynamicsCrm.DevKit.Docs/{ComponentName}/` as `.md` files

---

## Codex App

Codex App/ChatGPT is the only supported AI client for this repository.

- `AGENTS.md` is the single source of repository instructions and is maintained directly.
- `.codex/config.toml.example` is the only tracked MCP client example. It must use the fixed process alias `devkit-codex`.
- `.codex/rules/*.md` contains optional, detailed rules. Do not apply them automatically; read and follow one only when the user points to that rule file.
- `.codex/workflows/*.md` contains the 13 core project workflows referenced below.
- `.codex/config.toml` is local, may contain per-user settings, and must not be committed.
- Do not add generated adapters or configuration for Claude, GitHub Copilot, Antigravity, Cursor, or other AI clients.

## Build and Verification

Run the smallest relevant build; do not run the full debug/release packaging scripts unless the user explicitly requests them.

Detailed Codex workflows live in `.codex/workflows/`. When the user names a workflow (for example `build-cli`, `build-vsix`, `unit-test`, or `client-code-05-test`), read that file completely and execute it. These are Codex instruction recipes, not generated slash commands.

| Workflow | File |
|---|---|
| Build analyzer | `.codex/workflows/build-analyzer.md` |
| Build and install CLI | `.codex/workflows/build-cli.md` |
| Build and install Tool | `.codex/workflows/build-tool.md` |
| Build VSIX | `.codex/workflows/build-vsix.md` |
| Full timestamped build | `.codex/workflows/build-debug.md` |
| Full configured release | `.codex/workflows/build-release.md` |
| All unit tests plus Analyzer coverage | `.codex/workflows/unit-test.md` |
| Client-code pipeline | `.codex/workflows/client-code-01-clean.md` through `.codex/workflows/client-code-05-test.md` |
| Prepare and commit changes | `.codex/workflows/commit.md` |

| Changed component | Verification |
|---|---|
| `DynamicsCrm.DevKit.Analyzers/**` | `dotnet build DynamicsCrm.DevKit.Analyzers/DynamicsCrm.DevKit.Analyzers.csproj --configuration Debug --no-incremental`, then `DynamicsCrm.DevKit.Scripts/Run-Analyzer-Coverage.ps1` |
| `DynamicsCrm.DevKit.Cli/**` | `dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj`; run focused `net10.0` tests |
| `DynamicsCrm.DevKit.Tool/**` | `DynamicsCrm.DevKit.Scripts/Release.DynamicsCrm.DevKit.Tool.ps1` when the installed tool must be refreshed |
| `DynamicsCrm.DevKit/**` | Build with Visual Studio MSBuild, not `dotnet build` |

For CLI changes that must refresh the installed `devkit` tool, run `DynamicsCrm.DevKit.Scripts/Release.DynamicsCrm.DevKit.Cli.ps1`. The release scripts restore date-replacement files in `finally`; still verify the working tree afterward.

After editing `DynamicsCrm.DevKit.Cli/Mcp/**`:

1. Rebuild and reinstall the CLI with `Release.DynamicsCrm.DevKit.Cli.ps1`.
2. Restart the Codex MCP connector and call `whoami` to start a fresh `devkit mcp devkit-codex` process.
3. Verify runtime version, build timestamp, process start time, and assembly SHA against the build manifest under `Published/<version>/`.

Never stage, commit, or push unless the user explicitly requests it.

## Watch Out

- `4.44.44.44` is the stable source version. Release/debug scripts replace only the build-date placeholder `xxxx.yy.zz HH.mm.ss`; never commit files while date replacements are still applied.
- Editing a single component → run only that component's build, not the full solution
