# DynamicsCrm.DevKit - AI Agent Instructions

> Respond in English. Start: `"[emoji] Good [morning/afternoon/evening] Phuoc [emoji]"` End: `"[emoji] I'm done, Phuoc â€” please review my work [emoji]"`

## Project Overview

**DynamicsCrm.DevKit** â€” Development toolkit for Dynamics 365 / Power Platform / Dataverse. Includes VS 2026 VSIX, .NET CLI (`devkit`), 21 Roslyn analyzers, and MCP server.

### Solutions

| Solution | Purpose |
|---|---|
| `DynamicsCrm.DevKit.AllInOne.slnx` | **Main** â€” all components |
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
| **Naming** | `ServiceClient` â†’ `serviceClient`, `IOrganizationService` â†’ `crmService` |
| **Docs location** | `DynamicsCrm.DevKit.Docs/{ComponentName}/` |
| **Security** | Never commit credentials. Use env vars or Azure Key Vault |

### Build After Editing

After editing files in these projects, run the corresponding build command:

| Project Folder | Build Command |
|---|---|
| `DynamicsCrm.DevKit.Analyzers\**` | `/build-analyzer` |
| `DynamicsCrm.DevKit.Cli\**` | `/build-cli` |
| `DynamicsCrm.DevKit.Tool\**` | `/build-tool` |
| `DynamicsCrm.DevKit\**` | `/build-vsix` |

### Git â€” Only via `/commit` workflow

> [!CAUTION]
> **NEVER** `git add` / `git commit` / `git push` directly â€” only via the IDE's commit workflow.

```powershell
git add "file1" 2>$null   # 2>$null suppresses CRLF warning
git commit -m "title" -m "body"   # separate commands, no &&
```

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

## CLI (`devkit`)

Entry: `DynamicsCrm.DevKit.Cli/Program.cs` (Spectre.Console.Cli)

```
Commands/ â†’ DevKitCommand<T> base (connection, validation)
Models/   â†’ DevKitCommandArgs â†’ specific args
Tasks/    â†’ ITask â†’ TaskXxx implementations
Mcp/      â†’ MCP server (31 Dataverse tools)
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
| `mcp` | `McpServerHost` | â€” |

Deprecated: `plugin`, `workflow`, `dataprovider` â†’ use `server`; `proxytype` â†’ use `modelbuilder`; `legacy-solution` â†’ use `solution`

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

Read `DynamicsCrm.DevKit.Cli\Properties\launchSettings.json` â†’ `cd` to `workingDirectory` â†’ run with `commandLineArgs`.

### MCP Tools (32)

`whoami`, `get_tables`, `get_messages`, `manage_choice`, `manage_record`, `get_solution_components`, `execute_fetchxml`, `search_records`, `execute_webapi`, `publish_customizations`, `get_plugin_trace_logs`, `get_system_jobs`, `parse_record_url`, `manage_form`, `manage_view`, `manage_role`, `build_form_xml`, `build_sitemap_xml`, `get_audit_history`, `upsert_table`, `upsert_relationship`, `manage_sitemap`, `upsert_column`, `manage_environment_variable`, `get_business_rules`, `get_workflows`, `get_custom_apis`, `get_flows`, `get_business_process_flows`, `get_plugins`, `get_dataverse_commands`, `manage_webresource`

### MCP Resources (9)

| URI | Description |
|-----|-------------|
| `schema://formxml` | FormXml.xsd |
| `schema://layoutxml` | LayoutXml.xsd |
| `schema://fetchxml` | Fetch.xsd |
| `schema://sitemapxml` | SiteMap.xsd + rules |
| `docs://instructions_for_formxml` | FormXML manipulation rules |
| `docs://instructions_for_views` | View/LayoutXML manipulation rules |
| `docs://schema_tools_guide` | Schema tools: type matrices, immutable properties, cascade |
| `docs://data_operations_guide` | Data ops: field type formats, FetchXML joins, search syntax |
| `docs://server_logic_guide` | Server logic: list/detail modes, filtering, entity scoping |

### MCP Server Restart

> [!IMPORTANT]
> After editing any file in `DynamicsCrm.DevKit.Cli\Mcp\*.*`:
> 1. Run `/build-cli` to rebuild
> 2. Kill the current MCP process so the system auto-restarts it:
> ```powershell
> Get-Process | Where-Object { $_.CommandLine -like "*devkit*mcp*" } | Stop-Process -Force
> ```

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

---

## Scripts (`DynamicsCrm.DevKit.Scripts/`)

| Script | Purpose |
|---|---|
| `Release-DynamicsCrm-DevKit-CurrentDate.ps1` | Release with current date |
| `Release-DynamicsCrm-DevKit.ps1` | Full release |
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

Each IDE reads this file (`AGENTS.md`) as source of truth. IDE-specific overrides (command prefixes, forbidden commands) go in the rules folder:

| IDE | Entry Point | Rules (IDE-specific only) | Commands/Workflows |
|---|---|---|---|
| **Claude Code** | `CLAUDE.md` â†’ `@AGENTS.md` | `.claude/rules/core-rule.md` | `.claude/commands/claude-*.md` |
| **Copilot** | `AGENTS.md` (direct) | `.github/copilot-instructions.md` | `.github/prompts/copilot-*.prompt.md` |
| **Antigravity** | `AGENTS.md` (direct) | `.agent/rules/core-rule.md` | `.agent/workflows/anti-*.md` |

### What goes WHERE

| Content | Location | Reason |
|---|---|---|
| Project knowledge, architecture, constraints | **This file** (`AGENTS.md`) | Shared across all IDEs |
| Command prefix (`/claude-*` vs `/anti-*`) | `{ide}/rules/core-rule.md` | IDE-specific |
| Forbidden commands list | `{ide}/rules/core-rule.md` | IDE-specific |
| PowerShell, docs, git, MCP | **This file** | Shared â€” no IDE dependency |

---

## Checklist

- [ ] Build succeeded (`devkit --version` shows today's date)
- [ ] All 4 packages in `Published/` (if full build)
- [ ] Docs saved to `DynamicsCrm.DevKit.Docs/`
- [ ] No git changes committed (unless requested)
