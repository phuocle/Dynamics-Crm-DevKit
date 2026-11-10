# DynamicsCrm.DevKit

## Core operating rules

- Preserve unrelated working-tree changes. Never stage, commit, or push unless explicitly requested; never use `git add .` or `git add -A`.
- Run the smallest build covering the changed component. Full debug/release packaging requires an explicit user request; component-specific installation requirements are listed below.
- Keep source version `4.44.44.44`. Build scripts may replace only `xxxx.yy.zz HH.mm.ss`; verify the placeholder is restored afterward and before any commit.
- Preserve public command names, tool names, and JSON keys unless the task explicitly changes them.
- Identify the affected component before editing. If its ownership remains unclear between CLI, Shared, and VSIX, ask: they use different frameworks and binaries.

## Guidance and workflows

`AGENTS.md` is the canonical, client-neutral repository guidance. Keep `CLAUDE.md` and `.github/copilot-instructions.md` as thin bridges without duplicated rules. Client configuration belongs in `.codex/`, `.vscode/`, `.zcode/`, or `.mcp.json`; never commit credentials or local configuration.

Executable recipes live as agent skills under `.agents/skills/` — read the complete `SKILL.md` of a skill before executing it; these are instruction recipes, not generated slash commands. `README.md` in that folder indexes all skills; `devkit-skill-shared` owns the shared PowerShell scripts and `DevKit.ReleaseConfig.json` that the other skills invoke.

| Task | Skill |
|---|---|
| Build analyzer (incl. analyzer dev rules) | `devkit-skill-build-analyzer` |
| Build and install CLI / Tool | `devkit-skill-build-cli` / `devkit-skill-build-tool` |
| Build VSIX | `devkit-skill-build-vsix` |
| Full configured release | `devkit-skill-build-release` |
| Timestamped release without tests/coverage (user-requested fast mode) | `devkit-skill-build-release-only` |
| Visual Studio 2019 configured release | `devkit-skill-build-release-2019` |
| Unit tests (pass/fail) / coverage reports | `devkit-skill-unit-test` / `devkit-skill-code-coverage` |
| Client-code pipeline (clean/install/generate/sync/test) | `devkit-skill-client-code` |
| Prepare and commit changes | `devkit-skill-commit` |

For long tasks or context handoffs, retain the current objective, affected components, user constraints, completed checks, and remaining work. Re-read applicable guidance if context is missing.

## Component boundaries

Paths are relative to this directory; abbreviated paths in later sections are relative to their component.

| Component | Path | Framework |
|---|---|---|
| VSIX (VS 2026) | `DynamicsCrm.DevKit.Vsix/` | .NET Framework 4.8 |
| CLI (`devkit`) | `DynamicsCrm.DevKit.Cli/` | .NET 10.0 |
| Analyzers | `DynamicsCrm.DevKit.Analyzers/` | .NET Standard 2.0 |
| Shared (code generation + Dataverse) | `DynamicsCrm.DevKit.Shared/` | Shared Project (.shproj) |
| MCP server | `DynamicsCrm.DevKit.Cli/Mcp/` | Inside CLI |

- CLI entry: `Program.cs` → Spectre.Console.Cli `CommandApp`.
- VSIX entry: `DevKitPackage.cs`.
- Shared: `Helper.cs` and `XrmHelper.cs` are large by design; do not refactor unless asked.
- Analyzers inherit `BaseDiagnosticAnalyzer`; core files in `Core/`: `DiagnosticIdentifiers.cs`, `DiagnosticDescriptors.cs`, `AnalyzerHelper.cs`.

## CLI

`Commands/DevKitCommand<T>` handles connection, validation, header, output, and exit codes. Arguments derive from `Models/DevKitCommandArgs`; implementations in `Tasks/` implement `ITask`. MCP uses `Mcp/McpServerHost.cs` with `Tools/`, `Resources/`, and `Services/`.

| Command | Implementation |
|---|---|
| `generator` | `TaskGenerator` |
| `server` | `TaskServer` |
| `webresource` | `TaskWebResource` |
| `modelbuilder` | `TaskModelBuilder` |
| `solution` | `TaskPacSolutionPackager` |
| `mcp` | `McpServerHost` |

Deprecated: `plugin`, `workflow`, `dataprovider` → `server`; `proxytype` → `modelbuilder`; `legacy-solution` → `solution`.

Auth priority: `--conn` > `--auth/--url/...` > fallback > empty. Normal commands use project `.env` (`DEVKIT_*`, searched from the current directory upward to the drive root) as fallback; `devkit mcp` accepts explicit connection arguments only (no .env, no environment variables). Auth types: `Interactive`, `DeviceCode`, `ClientSecret`, `FromPac`, `OAuth` (legacy), `AD` (on-prem).

## MCP

- Categories: `readonly` and `all` (default). Derive membership from each method's `[McpServerTool(ReadOnly = ...)]`; do not add manual category mappings or restore the removed `basic`/`standard`/`advanced` tiers.
- Apply `[McpServerToolType]` only to tool classes, never helpers.
- Keep entry classes in `DynamicsCrm.DevKit.Cli.Mcp.Tools`; put extracted domain helpers in subnamespaces such as `Tools.Form`, `Tools.Ribbon`, and `Tools.SiteMap`.
- Maintain `DisabledToolSet`, `ToolResourceMap`, and `CategoryLevel` in `McpServerHost.cs` when adding tools; use `nameof()` for tool type references.
- When editing `Mcp/Tools/`, preserve error text, output shape, structured result fields, and temp-file paths unless explicitly changed by the task.

After editing `DynamicsCrm.DevKit.Cli/Mcp/**`:

1. Rebuild and reinstall using the devkit-skill-build-cli skill (`.agents/skills/devkit-skill-shared/scripts/Release.DynamicsCrm.DevKit.Cli.ps1`).
2. Restart the active MCP client connector and call `whoami` to start a fresh DevKit MCP process.
3. Verify runtime version, build timestamp, process start time, and assembly SHA against the manifest under `Published/<version>/`.

## Verification

For a requested full release verification, read and follow these two skills in order:

1. `devkit-skill-build-release`: wait for completion, verify installed CLI/Tool versions and all four Analyzer/CLI/Tool/VSIX artifacts under `Published/<version>/`, and confirm temporary build-date replacements are restored.
2. `devkit-skill-code-coverage`: run `Run-Coverage.ps1` without `-Components` to build and test all five `*.UnitTests` projects: Cli, Tool, Vsix, Analyzers, and Vsix.2019. Allow roughly 5 minutes for coverage (an estimate, not a timeout); wait for completion. Report pass/fail per project, then measured line/branch/method coverage per assembly and HTML report locations. Report failures and any collected coverage; never infer success from the release build alone.

When the user explicitly requests a release without test verification, follow `devkit-skill-build-release-only` instead: it runs the current-date release script (`Release-DynamicsCrm-DevKit-CurrentDate.ps1`) with output verification only and skips the coverage pass by user decision.

For component-scoped changes, use the checks below; a full release still requires an explicit user request.

| Changed component | Required verification |
|---|---|
| Analyzers | `dotnet build DynamicsCrm.DevKit.Analyzers/DynamicsCrm.DevKit.Analyzers.csproj --configuration Debug --no-incremental`, then the devkit-skill-build-analyzer skill (`Run-Analyzer-Coverage.ps1`) |
| CLI | `dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj`; run focused net10.0 tests |
| Tool | the devkit-skill-build-tool skill (`Release.DynamicsCrm.DevKit.Tool.ps1`) when the installed tool must be refreshed |
| VSIX | Build with Visual Studio MSBuild, not `dotnet build` |

When CLI changes require refreshing the installed `devkit`, use the devkit-skill-build-cli skill (`Release.DynamicsCrm.DevKit.Cli.ps1`). Release scripts restore date-replacement files in `finally`; still inspect the working tree afterward.

All test projects use MSTest and are named `DynamicsCrm.DevKit.<Component>.UnitTests`:

| Component | Test framework target / runner |
|---|---|
| `Cli`, `Tool` | net10.0 |
| `Vsix`, `Analyzers` | net48 |
| `Vsix.2019` | net472, non-SDK; VS MSBuild + `vstest.console`, not `dotnet test` |

- net10.0 suites run MethodLevel-parallel: mark shared-state classes `[DoNotParallelize]`. Preserve `WaitScalePercent` when adding slow metadata wait paths; tests set it to zero.
- Coverage entry point: `.agents/skills/devkit-skill-shared/scripts/Run-Coverage.ps1` (all five suites, or a subset such as `-Components Cli,Tool`); follow the devkit-skill-code-coverage skill.

## Conventions

- Name `ServiceClient` variables `serviceClient`; `IOrganizationService` variables `orgService` (field `_orgService`); `IOrganizationServiceAsync2` variables `orgServiceAsync`.
- Prefer existing helpers in `DynamicsCrm.DevKit.Shared/` and `DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/` before creating new ones.
- Product documentation belongs in `DynamicsCrm.DevKit.Docs/{ComponentName}/` as `.md`; agent skills belong in `.agents/skills/`.
