# DynamicsCrm.DevKit

## Component Boundaries

If unsure whether a change belongs in `Cli`, `Shared`, or `DynamicsCrm.DevKit.Vsix` (VSIX) — ask. Different frameworks, different binaries.

| Component | Path | Framework |
|---|---|---|
| VSIX (VS 2026 extension) | `DynamicsCrm.DevKit.Vsix/` | .NET Framework 4.8 |
| CLI (`devkit` tool) | `DynamicsCrm.DevKit.Cli/` | .NET 10.0 |
| Analyzers (DEVKIT1001–1021) | `DynamicsCrm.DevKit.Analyzers/` | .NET Standard 2.0 |
| Shared (code gen + Dataverse) | `DynamicsCrm.DevKit.Shared/` | Shared Project (.shproj) |
| MCP server (33 tools) | `DynamicsCrm.DevKit.Cli/Mcp/` | inside CLI |

Key entry points:
- CLI: `DynamicsCrm.DevKit.Cli/Program.cs` → `CommandApp` (Spectre.Console.Cli)
- CLI base command: `Commands/DevKitCommand<T>` → connection, validation, output
- MCP: `Mcp/McpServerHost.cs` → `ToolCategoryMap` controls which tools load per tier
- Code gen: `Shared/Helper.cs`, `Shared/XrmHelper.cs` (large by design — do not refactor unless asked)
- VSIX: `DynamicsCrm.DevKit.Vsix/DevKitPackage.cs` → 13 ProjectTemplates, 17 ItemTemplates

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

Deprecated: `plugin`, `workflow`, `dataprovider` → use `server`; `proxytype` → use `modelbuilder`; `legacy-solution` → use `solution`

Auth priority:
- Normal CLI commands: `--conn` > `--auth/--url/...` > project `.env` (`DEVKIT_*`) > empty
- `devkit mcp`: `--conn` > `--auth/--url/...` > OS env vars (`DEVKIT_*`) > empty
Auth types: `Interactive`, `DeviceCode`, `ClientSecret`, `FromPac`, `OAuth` (legacy), `AD` (on-prem)

---

## Unit Tests

Five components, five matching UnitTests projects — all MSTest:

| Component | UnitTests project | Target framework |
|---|---|---|
| CLI | `DynamicsCrm.DevKit.Cli.UnitTests` | net10.0 |
| Tool | `DynamicsCrm.DevKit.Tool.UnitTests` | net10.0 |
| VSIX | `DynamicsCrm.DevKit.Vsix.UnitTests` | net48 |
| Analyzers | `DynamicsCrm.DevKit.Analyzers.UnitTests` | net48 |
| VSIX 2019 | `DynamicsCrm.DevKit.Vsix.2019.UnitTests` | net472 (non-SDK — VS MSBuild + `vstest.console`, not `dotnet test`) |

- Unit tests (run + pass/fail only) → `DynamicsCrm.DevKit.AI/workflows/unit-test.md`
- Code coverage (line/branch/method + HTML reports) → `DynamicsCrm.DevKit.AI/workflows/code-coverage.md`, or one command: `DynamicsCrm.DevKit.Scripts/Run-Coverage.ps1` (all five, or `-Components Cli,Tool` for a subset)
- net10.0 suites run MethodLevel-parallel; mark shared-state classes `[DoNotParallelize]`, and keep the `WaitScalePercent` knob when adding slow metadata wait paths (tests zero it)

---

## MCP Tools

38 tools (one per tool class) across 2 categories: `readonly` (17 tools) and `all` (default, every tool) — the old `basic`/`standard`/`advanced` tiers were removed.

- Only tool classes get `[McpServerToolType]` — never on helper classes
- Category derives from `[McpServerTool(ReadOnly = ...)]` on each tool method — single source of truth, no manual mapping
- When splitting a large tool: entry class stays in `DynamicsCrm.DevKit.Cli.Mcp.Tools`, domain helpers go in subnamespaces (`Tools.Form`, `Tools.Ribbon`, `Tools.SiteMap`)
- `Mcp/McpServerHost.cs` holds `DisabledToolSet` / `ToolResourceMap` / `CategoryLevel` — `nameof()` for compile-time safety; preserve when adding tools, keep in sync
- Editing `Cli\Mcp\Tools\*` — preserve existing error text, output shape, structured result fields, and temp-file paths unless the task explicitly changes them

---

## Analyzers

21 analyzers, IDs `DEVKIT1001`–`DEVKIT1021`. All inherit `BaseDiagnosticAnalyzer`. Core in `Analyzers/Core/`: `DiagnosticIdentifiers.cs`, `DiagnosticDescriptors.cs`, `AnalyzerHelper.cs`. Unit tests use MSTest targeting net48.

---

## Conventions

- `ServiceClient` variable → `serviceClient`
- `IOrganizationService` variable → `orgService` (field: `_orgService`); `IOrganizationServiceAsync2` variable → `orgServiceAsync`
- Preserve existing public command names, tool names, and JSON keys
- Prefer existing helpers in `DynamicsCrm.DevKit.Shared` and `Mcp/Tools/Helper/` before creating new ones
- All docs → `DynamicsCrm.DevKit.Docs/{ComponentName}/` as `.md` files

---

## AI Client Instructions

This repository supports multiple AI clients. Keep project guidance client-neutral:

- `AGENTS.md` is the canonical always-on repository instruction file.
- Shared rules and workflows live under `DynamicsCrm.DevKit.AI/` and should be read when the task names or requires them.
- `CLAUDE.md` and `.github/copilot-instructions.md` are thin compatibility bridges; do not duplicate project rules in them.
- `.codex/`, `.vscode/`, `.zcode/`, and `.mcp.json` contain client-specific configuration only. Never commit credentials or local configuration.
- `.codex/config.toml.example` is the tracked Codex MCP example and must use the fixed process alias `devkit-codex`.

## Build and Verification

Run the smallest relevant build; do not run the full debug/release packaging scripts unless the user explicitly requests them.

Detailed project workflows live in `DynamicsCrm.DevKit.AI/workflows/`. When the user names a workflow (for example `build-cli`, `build-vsix`, `unit-test`, or `client-code-05-test`), read that file completely and execute it. These are reusable instruction recipes, not generated slash commands.

| Workflow | File |
|---|---|
| Build analyzer | `DynamicsCrm.DevKit.AI/workflows/build-analyzer.md` |
| Build and install CLI | `DynamicsCrm.DevKit.AI/workflows/build-cli.md` |
| Build and install Tool | `DynamicsCrm.DevKit.AI/workflows/build-tool.md` |
| Build VSIX | `DynamicsCrm.DevKit.AI/workflows/build-vsix.md` |
| Full timestamped build | `DynamicsCrm.DevKit.AI/workflows/build-debug.md` |
| Full configured release | `DynamicsCrm.DevKit.AI/workflows/build-release.md` |
| Unit tests (pass/fail) | `DynamicsCrm.DevKit.AI/workflows/unit-test.md` |
| Code coverage (unit tests + line/branch/method) | `DynamicsCrm.DevKit.AI/workflows/code-coverage.md` |
| Client-code pipeline | `DynamicsCrm.DevKit.AI/workflows/client-code-01-clean.md` through `client-code-05-test.md` |
| Prepare and commit changes | `DynamicsCrm.DevKit.AI/workflows/commit.md` |

| Changed component | Verification |
|---|---|
| `DynamicsCrm.DevKit.Analyzers/**` | `dotnet build DynamicsCrm.DevKit.Analyzers/DynamicsCrm.DevKit.Analyzers.csproj --configuration Debug --no-incremental`, then `DynamicsCrm.DevKit.Scripts/Run-Analyzer-Coverage.ps1` |
| `DynamicsCrm.DevKit.Cli/**` | `dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj`; run focused `net10.0` tests |
| `DynamicsCrm.DevKit.Tool/**` | `DynamicsCrm.DevKit.Scripts/Release.DynamicsCrm.DevKit.Tool.ps1` when the installed tool must be refreshed |
| `DynamicsCrm.DevKit.Vsix/**` | Build with Visual Studio MSBuild, not `dotnet build` |

For CLI changes that must refresh the installed `devkit` tool, run `DynamicsCrm.DevKit.Scripts/Release.DynamicsCrm.DevKit.Cli.ps1`. The release scripts restore date-replacement files in `finally`; still verify the working tree afterward.

After editing `DynamicsCrm.DevKit.Cli/Mcp/**`:

1. Rebuild and reinstall the CLI with `Release.DynamicsCrm.DevKit.Cli.ps1`.
2. Restart the active MCP client connector and call `whoami` to start a fresh DevKit MCP process.
3. Verify runtime version, build timestamp, process start time, and assembly SHA against the build manifest under `Published/<version>/`.

Never stage, commit, or push unless the user explicitly requests it.

## Watch Out

- `4.44.44.44` is the stable source version. Release/debug scripts replace only the build-date placeholder `xxxx.yy.zz HH.mm.ss`; never commit files while date replacements are still applied.
- Editing a single component → run only that component's build, not the full solution
