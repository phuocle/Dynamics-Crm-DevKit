# DynamicsCrm.DevKit - AI Agent Instructions

> Respond in English. Start: `"[emoji] Good [morning/afternoon/evening] Phuoc [emoji]"` End: `"[emoji] I'm done, Phuoc — please review my work [emoji]"`

## Project Overview

**DynamicsCrm.DevKit** — Development toolkit for Microsoft Dynamics 365 / Power Platform / Dataverse. Includes VS 2026 VSIX extension, .NET CLI tool (`devkit`), 21 Roslyn analyzers, and MCP server.

### Solutions

| Solution | Purpose |
|---|---|
| `DynamicsCrm.DevKit.AllInOne.slnx` | **Main** — all components |
| `DynamicsCrm.DevKit.slnx` | VSIX only |
| `DynamicsCrm.DevKit.Cli.slnx` | CLI only |
| `DynamicsCrm.DevKit.Analyzers.slnx` | Analyzers only |

### Components

| Component | Path | Framework |
|---|---|---|
| **VSIX** | `DynamicsCrm.DevKit/` | .NET Framework 4.8 |
| **CLI** | `DynamicsCrm.DevKit.Cli/` | .NET 10.0 |
| **Analyzers** | `DynamicsCrm.DevKit.Analyzers/` | .NET Standard 2.0 |
| **Shared** | `DynamicsCrm.DevKit.Shared/` | Shared Project (.shproj) — referenced by VSIX, CLI, Tool |
| **Tool** | `DynamicsCrm.DevKit.Tool/` | .NET Framework 4.8 |
| **UnitTests** | `DynamicsCrm.DevKit.UnitTests/` | net48 (xUnit) + net10.0 (MSTest) |
| **Tests** | `DynamicsCrm.DevKit.Tests/` | Integration tests (15+ scenarios, live Dataverse) |
| **Templates** | `ProjectTemplates/` + `ItemTemplates/` | .NET Framework 4.6.2 (13 project + 17 item templates) |

---

## Critical Constraints

| Rule | Detail |
|---|---|
| **No Git** | Never commit/push unless explicitly requested |
| **Default DEBUG** | Use RELEASE only when explicitly requested |
| **MSBuild for VSIX** | `"C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"` |
| **Naming** | `ServiceClient` → `serviceClient`, `IOrganizationService` → `crmService` |
| **Docs location** | `DynamicsCrm.DevKit.Docs/{ComponentName}/` |
| **Security** | Never commit credentials. Use env vars or Azure Key Vault |

---

## CLI (`devkit`)

Entry point: `DynamicsCrm.DevKit.Cli/Program.cs` (Spectre.Console.Cli)

```
Commands/ → DevKitCommand<T> base (connection, validation)
Models/   → DevKitCommandArgs → specific args
Tasks/    → ITask → TaskXxx implementations
Mcp/      → MCP server (17 Dataverse tools)
```

### Commands

| Command | Task | JSON Key | Note |
|---|---|---|---|
| `generator` | `TaskGenerator` | `generators` | |
| `server` | `TaskServer` | `servers` | |
| `webresource` | `TaskWebResource` | `webresources` | |
| `modelbuilder` | `TaskModelBuilder` | `modelbuilders` | |
| `solution` | `TaskPacSolutionPackager` | `solutionpackagers` | |
| `downloadreport` | `TaskDownloadReport` | `downloadreports` | |
| `uploadreport` | `TaskUploadReport` | `uploadreports` | |
| `downloadwebresource` | `TaskDownloadWebResource` | `downloadwebresources` | |
| `datasource` | `TaskDataSource` | `datasources` | |
| `mcp` | `McpServerHost` | — | MCP server |
| `plugin` | `TaskServer` | `plugins` | Deprecated |
| `workflow` | `TaskServer` | `workflows` | Deprecated |
| `dataprovider` | `TaskServer` | `dataproviders` | Deprecated |
| `proxytype` | → `modelbuilder` | `proxytypes` | Deprecated |
| `legacy-solution` | → `solution` | `solutionpackagers` | Deprecated |

### Auth & Env Vars (priority: CLI args > env vars > empty)

| CLI Arg | Env Var |
|---|---|
| `--conn` | `DEVKIT_CONNECTION` |
| `--auth` | `DEVKIT_AUTH_TYPE` |
| `--url` | `DEVKIT_URL` |
| `--clientid` / `--clientsecret` | `DEVKIT_CLIENT_ID` / `DEVKIT_CLIENT_SECRET` |
| `--pacprofile` | `DEVKIT_PAC_PROFILE` |
| `--username` / `--password` / `--domain` | `DEVKIT_USERNAME` / `DEVKIT_PASSWORD` / `DEVKIT_DOMAIN` |
| `--plain` | `NO_COLOR` |

Auth types: `Interactive`, `DeviceCode`, `ClientSecret`, `FromPac`, `OAuth` (legacy), `AD` (on-prem).

### Plain Mode (AI/CI Output)

When AI agents call `devkit` CLI commands directly (not via MCP), add `--plain` for clean text output without ANSI escape codes, colors, box-drawing characters, or spinners.

Detection priority: `--plain` CLI flag > `NO_COLOR` env var > default (rich output)

| Method | Detail |
|---|---|
| `--plain` flag | `devkit server --plain --json cli.json --profile CI` |
| `NO_COLOR` env var | `NO_COLOR=1` (standard convention, https://no-color.org) |

### CLI Run Profile

Read `DynamicsCrm.DevKit.Cli\Properties\launchSettings.json` → `cd` to `workingDirectory` → run CLI with `commandLineArgs`.

### MCP Tools (17)

`whoami`, `get_entities_metadata`, `get_entity_metadata`, `get_messages`, `get_global_optionsets`, `get_record`, `get_solution_components`, `execute_fetchxml`, `search`, `create_record`, `update_record`, `delete_record`, `execute_webapi`, `publish_customizations`, `get_plugin_trace_logs`, `parse_record_url`, `get_forms`

### MCP Resources (6)

| URI | Type | Description |
|-----|------|-------------|
| `schema://formxml` | XSD | FormXml.xsd — form structure schema |
| `schema://layoutxml` | XSD | LayoutXml.xsd — view column layout schema |
| `schema://fetchxml` | XSD | Fetch.xsd — query schema |
| `schema://sitemapxml` | Markdown + XSD | SiteMap.xsd + SiteMapType.xsd + rules |
| `docs://instructions_for_formxml` | Markdown | FormXML manipulation rules |
| `docs://instructions_for_views` | Markdown | View/LayoutXML manipulation rules |

---

## VSIX

Entry: `DynamicsCrm.DevKit/DevKitPackage.cs` (inherits `ToolkitPackage`). Contains `Commands/`, `Lib/`, `Wizard/ProjectTemplates/` (13), `Wizard/ItemTemplates/` (17).

---

## Shared Project (`DynamicsCrm.DevKit.Shared/`)

| Key File | Purpose |
|---|---|
| `Const.cs` | Version constants (replaced at release) |
| `Helper.cs` | Code generation (~926 lines) |
| `XrmHelper.cs` | Dataverse operations (metadata, forms, plugins) |
| `ConnectionBuilder/` | 7 builders: Interactive, DeviceCode, ClientSecret, FromPac, OAuth, AD, Legacy + Factory |
| `Logic/` | `CSharpLateBound`, `CSharpEarlyBound`, `JsForm`, `JsWebApi`, `JsDialog`, `JsTypeScriptDeclaration`, `TsForm`, `TsWebApi`, `TsDialog`, `TsOptionSet` |
| `Models/` | 42 model classes (JSON configs, CRM entities, plugin attributes) |

---

## Analyzers (21: DEVKIT1001–DEVKIT1021)

Target: .NET Standard 2.0. All inherit `BaseDiagnosticAnalyzer`. Core files in `Core/`: `DiagnosticIdentifiers.cs`, `DiagnosticDescriptors.cs`, `AnalyzerHelper.cs`.

---

## Tests

| Type | Framework | Target | Run |
|---|---|---|---|
| Analyzer | xUnit | net48 | `dotnet test --framework net48` |
| CLI | MSTest | net10.0 | `dotnet test --framework net10.0` |
| All | — | — | `dotnet test DynamicsCrm.DevKit.UnitTests\DynamicsCrm.DevKit.UnitTests.csproj` |

Integration: `DynamicsCrm.DevKit.Tests/` (TestNewCli, TestServerCode, TestClientCode, TestWebResource, TestSolutionPackager, TestReports, TestProxyTypes, etc.)

---

## Build Workflows

| Workflow | Description |
|----------|-------------|
| `/build-debug` | Release build evaluating with current date - Build all projects + install CLI locally |
| `/build-cli` | CLI only - Build and install CLI tool |
| `/build-vsix` | VSIX only - Build Visual Studio extension |
| `/build-analyzer` | Analyzers - Build + run analyzer unit tests |
| `/build-tool` | Tool only - Build Tool package |
| `/build-release` | Release - Full release build for all projects |
| `/unit-test` | Run all unit tests + code coverage report |
| `/clean-all` | Clean all build artifacts |
| `/create-new-analyzer` | Create a new Roslyn analyzer |

---

## Documentation Rules

| Working On | Save To |
|------------|---------|
| CLI | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Cli/` |
| VSIX | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit/` |
| Analyzers | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Analyzers/` |
| Tool | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Tool/` |
| Scripts | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Scripts/` |
| Tests | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Tests/` |
| Others / Misc | `DynamicsCrm.DevKit.Docs/Others/` |

---

## Scripts (`DynamicsCrm.DevKit.Scripts/`)

| Script | Purpose |
|---|---|
| `Release-DynamicsCrm-DevKit-CurrentDate.ps1` | Release with current date |
| `Release-DynamicsCrm-DevKit.ps1` | Full release |
| `Sync-AI-Config.ps1` | Sync `.agent/` → `.claude/`, `.cursor/`, `.github/` |
| `Clean-Repository.ps1` | Clean all artifacts |

---

## Config Files

| File | Purpose |
|---|---|
| `DynamicsCrm.DevKit.Cli.json` | CLI profiles |
| `DynamicsCrm.DevKit.Config.json` | VSIX config |
| `DevKit.ReleaseConfig.json` | Release version config |
| `Const.cs` | Version (injected at build) |

---

## Key Files Quick Reference

| What | Where |
|---|---|
| CLI entry / commands / tasks / models | `Cli/Program.cs`, `Cli/Commands/`, `Cli/Tasks/`, `Cli/Models/` |
| CLI MCP server | `Cli/Mcp/` |
| VSIX entry / wizards | `DevKitPackage.cs`, `Wizard/` |
| Dataverse ops / Code gen | `Shared/XrmHelper.cs`, `Shared/Helper.cs` + `Logic/` |
| Connections / Models / Resources | `Shared/ConnectionBuilder/`, `Shared/Models/`, `Shared/Resources/` |
| Analyzers / Core / Tests | `Analyzers/CrmAnalyzers/`, `Analyzers/Core/`, `UnitTests/Analyzers/Tests/` |

---

## AI Agent Configuration

`.agent/` = **source of truth**. Synced via `Sync-AI-Config.ps1`.

| IDE | Rules | Commands | MCP | Entry |
|---|---|---|---|---|
| **Antigravity** | `.agent/rules/` (direct) | `.agent/workflows/` (direct) | `.agent/mcp.json` | `AGENTS.md` |
| **Claude Code** | `.claude/rules/*.md` | `.claude/commands/claude-*.md` | `.vscode/mcp.json` | `CLAUDE.md` (@AGENTS.md) |
| **Cursor** | `.cursor/rules/*.mdc` | `.cursor/commands/cursor-*.md` | `.cursor/mcp.json` | `AGENTS.md` |
| **Copilot** | `.github/copilot-instructions.md` | `.github/prompts/copilot-*.prompt.md` | `.vscode/mcp.json` | `AGENTS.md` |

> Edit `.agent/` files first, then run `Sync-AI-Config.ps1`. MCP config synced manually.

### Antigravity-specific

- `// turbo` in workflows = auto-run next step
- `// turbo-all` = auto-run all steps

---

## Checklist

- [ ] Build succeeded (`devkit --version` shows today's date)
- [ ] All 4 packages in `Published/` (if full build)
- [ ] Docs saved to `DynamicsCrm.DevKit.Docs/`
- [ ] No git changes committed (unless requested)
