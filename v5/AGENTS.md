# DynamicsCrm.DevKit - AI Agent Instructions

> Respond in English. Start: `"[emoji] Good [morning/afternoon/evening] Phuoc [emoji]"` End: `"[emoji] I'm done, Phuoc — please review my work [emoji]"`

## Project Overview

**DynamicsCrm.DevKit** — Development toolkit for Dynamics 365 / Power Platform / Dataverse. Includes VS 2026 VSIX, .NET CLI (`devkit`), 21 Roslyn analyzers, and MCP server.

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
| **Shared** | `DynamicsCrm.DevKit.Shared/` | Shared Project (.shproj) |
| **Tool** | `DynamicsCrm.DevKit.Tool/` | .NET Framework 4.8 |
| **UnitTests** | `DynamicsCrm.DevKit.UnitTests/` | net48 (xUnit) + net10.0 (MSTest) |
| **Tests** | `DynamicsCrm.DevKit.Tests/` | Integration tests (live Dataverse) |
| **Templates** | `ProjectTemplates/` + `ItemTemplates/` | .NET Framework 4.6.2 |

---

## Critical Constraints

> [!CAUTION]
> **NEVER use `dotnet build` or `dotnet test` directly!** Always use workflows below.

| Workflow | Builds | Replaces |
|---|---|---|
| `/build-cli` | CLI | ~~`dotnet build DynamicsCrm.DevKit.Cli`~~ |
| `/build-vsix` | VSIX | ~~`MSBuild DynamicsCrm.DevKit`~~ |
| `/build-analyzer` | Analyzers + tests | ~~`dotnet build DynamicsCrm.DevKit.Analyzers`~~ |
| `/build-tool` | Tool | ~~`dotnet build DynamicsCrm.DevKit.Tool`~~ |
| `/build-debug` | All (DEBUG) + install CLI | ~~`dotnet build`~~ |
| `/build-release` | All (RELEASE) | ~~`dotnet build --configuration Release`~~ |
| `/unit-test` | Run all unit tests + coverage | ~~`dotnet test`~~ |
| `/clean-all` | Clean all artifacts | - |
| `/create-new-analyzer` | Create new Roslyn analyzer | - |

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

Entry: `DynamicsCrm.DevKit.Cli/Program.cs` (Spectre.Console.Cli)

```
Commands/ → DevKitCommand<T> base (connection, validation)
Models/   → DevKitCommandArgs → specific args
Tasks/    → ITask → TaskXxx implementations
Mcp/      → MCP server (30 Dataverse tools)
```

### Commands

| Command | Task | JSON Key |
|---|---|---|
| `generator` | `TaskGenerator` | `generators` |
| `server` | `TaskServer` | `servers` |
| `webresource` | `TaskWebResource` | `webresources` |
| `modelbuilder` | `TaskModelBuilder` | `modelbuilders` |
| `solution` | `TaskPacSolutionPackager` | `solutionpackagers` |
| `downloadreport` | `TaskDownloadReport` | `downloadreports` |
| `uploadreport` | `TaskUploadReport` | `uploadreports` |
| `downloadwebresource` | `TaskDownloadWebResource` | `downloadwebresources` |
| `datasource` | `TaskDataSource` | `datasources` |
| `mcp` | `McpServerHost` | — |

Deprecated: `plugin`, `workflow`, `dataprovider` → use `server`; `proxytype` → use `modelbuilder`; `legacy-solution` → use `solution`

### Auth (priority: CLI args > env vars > empty)

| CLI Arg | Env Var |
|---|---|
| `--conn` | `DEVKIT_CONNECTION` |
| `--auth` | `DEVKIT_AUTH_TYPE` |
| `--url` | `DEVKIT_URL` |
| `--clientid` / `--clientsecret` | `DEVKIT_CLIENT_ID` / `DEVKIT_CLIENT_SECRET` |
| `--pacprofile` | `DEVKIT_PAC_PROFILE` |
| `--username` / `--password` / `--domain` | `DEVKIT_USERNAME` / `DEVKIT_PASSWORD` / `DEVKIT_DOMAIN` |
| `--plain` | `NO_COLOR` |

Types: `Interactive`, `DeviceCode`, `ClientSecret`, `FromPac`, `OAuth` (legacy), `AD` (on-prem).

### Plain Mode

Add `--plain` for clean AI/CI output (no ANSI, colors, spinners). Priority: `--plain` > `NO_COLOR` env var > rich output.

### CLI Run Profile

Read `DynamicsCrm.DevKit.Cli\Properties\launchSettings.json` → `cd` to `workingDirectory` → run with `commandLineArgs`.

### MCP Tools (29)

`whoami`, `get_tables`, `get_messages`, `get_choices`, `manage_record`, `get_solution_components`, `execute_fetchxml`, `search_records`, `execute_webapi`, `publish_customizations`, `get_debugging`, `parse_record_url`, `manage_form`, `manage_view`, `get_roles`, `build_form_xml`, `get_audit_history`, `upsert_table`, `manage_sitemap`, `upsert_column`, `manage_environment_variable`, `get_business_rules`, `get_workflows`, `get_custom_apis`, `get_flows`, `get_business_process_flows`, `get_plugins`, `get_dataverse_commands`, `manage_webresource`

### MCP Resources (6)

| URI | Description |
|-----|-------------|
| `schema://formxml` | FormXml.xsd |
| `schema://layoutxml` | LayoutXml.xsd |
| `schema://fetchxml` | Fetch.xsd |
| `schema://sitemapxml` | SiteMap.xsd + rules |
| `docs://instructions_for_formxml` | FormXML manipulation rules |
| `docs://instructions_for_views` | View/LayoutXML manipulation rules |

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
| `ConnectionBuilder/` | 7 builders + Factory |
| `Logic/` | `CSharpLateBound`, `CSharpEarlyBound`, `JsForm`, `JsWebApi`, `JsDialog`, `JsTypeScriptDeclaration`, `TsForm`, `TsWebApi`, `TsDialog`, `TsOptionSet` |
| `Models/` | 42 model classes |

---

## Analyzers (21: DEVKIT1001-DEVKIT1021)

Target: .NET Standard 2.0. All inherit `BaseDiagnosticAnalyzer`. Core: `DiagnosticIdentifiers.cs`, `DiagnosticDescriptors.cs`, `AnalyzerHelper.cs`.

---

## Tests

Use `/unit-test` workflow (never `dotnet test`).

| Type | Framework | Target |
|---|---|---|
| Analyzer | xUnit | net48 |
| CLI | MSTest | net10.0 |

Integration: `DynamicsCrm.DevKit.Tests/` (TestNewCli, TestServerCode, TestClientCode, TestWebResource, TestSolutionPackager, TestReports, TestProxyTypes, etc.)

---

## Documentation Rules

| Working On | Save To |
|---|---|
| CLI | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Cli/` |
| VSIX | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit/` |
| Analyzers | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Analyzers/` |
| Tool | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Tool/` |
| Scripts | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Scripts/` |
| Tests | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Tests/` |
| Others | `DynamicsCrm.DevKit.Docs/Others/` |

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
| **Antigravity** | `.agent/rules/` | `.agent/workflows/` | `.agent/mcp.json` | `AGENTS.md` |
| **Claude Code** | `.claude/rules/*.md` | `.claude/commands/claude-*.md` | `.vscode/mcp.json` | `CLAUDE.md` (@AGENTS.md) |
| **Cursor** | `.cursor/rules/*.mdc` | `.cursor/commands/cursor-*.md` | `.cursor/mcp.json` | `AGENTS.md` |
| **Copilot** | `.github/copilot-instructions.md` | `.github/prompts/copilot-*.prompt.md` | `.vscode/mcp.json` | `AGENTS.md` |

Edit `.agent/` first, then run `Sync-AI-Config.ps1`. Antigravity: `// turbo` = auto-run next step, `// turbo-all` = auto-run all.

---

## Checklist

- [ ] Build succeeded (`devkit --version` shows today's date)
- [ ] All 4 packages in `Published/` (if full build)
- [ ] Docs saved to `DynamicsCrm.DevKit.Docs/`
- [ ] No git changes committed (unless requested)
