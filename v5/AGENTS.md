# DynamicsCrm.DevKit - AI Agent Instructions

> **Purpose**: This file provides instructions for AI coding agents (GitHub Copilot, OpenCode, Cursor, Antigravity, etc.) working with this codebase.

## Response Format (Vietnamese)

- **Start with**: `"[emoji] Xin chào buổi [sáng/trưa/chiều/tối] anh Phước [emoji]"` (based on current time)
- **End with**: `"[emoji] Tôi đã là xong rồi anh Phước, hãy kiểm tra lại những gì tôi làm nhé [emoji]"`

---

## Project Overview

**DynamicsCrm.DevKit** is a development toolkit for Microsoft Dynamics 365 / Power Platform / Dataverse.

### Solution Files (.slnx)

| Solution File | Purpose | Contains |
|---|---|---|
| `DynamicsCrm.DevKit.AllInOne.slnx` | **Main development** | VSIX + CLI + Tool + Shared + Analyzers + UnitTests + all Templates |
| `DynamicsCrm.DevKit.slnx` | VSIX only | VSIX + Shared + Project/Item Templates |
| `DynamicsCrm.DevKit.Cli.slnx` | CLI only | CLI + Shared |
| `DynamicsCrm.DevKit.Analyzers.slnx` | Analyzers only | Analyzers + Analyzers.Test (legacy) |

### Components

| Component | Path | Framework | Description |
|---|---|---|---|
| **VSIX** | `DynamicsCrm.DevKit/` | .NET Framework 4.8 | Visual Studio 2026 extension (13 project templates, 15 item templates) |
| **CLI** | `DynamicsCrm.DevKit.Cli/` | .NET 10.0 | Global tool (`devkit`) for CI/CD automation (15 commands + MCP server) |
| **Analyzers** | `DynamicsCrm.DevKit.Analyzers/` | .NET Standard 2.0 | 21 Roslyn analyzers (DEVKIT1001-1021) |
| **Shared** | `DynamicsCrm.DevKit.Shared/` | Shared Project | Common logic, models, resources, connection builders (referenced by VSIX, CLI, Tool) |
| **Tool** | `DynamicsCrm.DevKit.Tool/` | .NET Framework 4.8 | Utility package (NUglify, DocumentGenerator, Decrypt, Coverage) |
| **UnitTests** | `DynamicsCrm.DevKit.UnitTests/` | net48 + net10.0 | Unit tests (Analyzer tests via xUnit, CLI tests via MSTest) |
| **Tests** | `DynamicsCrm.DevKit.Tests/` | Various | Integration test projects (15+ test scenarios) |
| **Docs** | `DynamicsCrm.DevKit.Docs/` | — | Documentation files for all components |
| **Scripts** | `DynamicsCrm.DevKit.Scripts/` | — | PowerShell scripts for build, release, migration |
| **Wiki** | `DynamicsCrm.DevKit.Wiki/` | — | Wiki pages |
| **ProjectTemplates** | `ProjectTemplates/CSharp/` | .NET Framework 4.6.2 | 13 VS project templates |
| **ItemTemplates** | `ItemTemplates/CSharp/` | .NET Framework 4.6.2 | 15 VS item templates |

---

## Critical Constraints

> [!IMPORTANT]
> AI agents MUST use **DEBUG mode** for all builds. Release mode is for human operators only.

| Rule | Detail |
|---|---|
| **No Git Operations** | Never commit, push, or perform any git operations unless explicitly requested |
| **DEBUG Mode Only** | Always use DEBUG configuration for builds |
| **MSBuild for VSIX** | Use MSBuild (NOT `dotnet build`) for VSIX project |
| **MSBuild Path** | `C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe` |

### Target Frameworks

| Framework | Used By |
|---|---|
| .NET Framework 4.6.2 | Project Templates, Item Templates |
| .NET Framework 4.8 | VSIX, Tool, UnitTests (Analyzer) |
| .NET Standard 2.0 | Analyzers |
| .NET 10.0 | CLI, UnitTests (CLI) |

### Naming Conventions

| Type | Variable Name |
|---|---|
| `ServiceClient` | `serviceClient` |
| `IOrganizationService` | `crmService` |

---

## Build Workflows (Slash Commands)

| Workflow | Description |
|---|---|
| `/build-debug` | Full build - Build all projects + install CLI locally |
| `/build-cli` | CLI only - Build and install CLI tool |
| `/build-vsix` | VSIX only - Build Visual Studio extension |
| `/build-analyzer` | Analyzers - Build + run analyzer unit tests |
| `/build-tool` | Tool only - Build Tool package |
| `/build-release` | Release - **Human only** |
| `/unit-test` | Run all unit tests + code coverage report |
| `/clean-all` | Clean all build artifacts |
| `/create-new-analyzer` | Create a new Roslyn analyzer |
| `/client-code-clean` | Clean all 6 TestClientCode folders |
| `/client-code-install` | Install NPM packages for all TestClientCode folders |
| `/client-code-generate` | Generate entity files via CLI |
| `/client-code-sync` | Sync source-of-truth files to TestClientCode folders |
| `/client-code-test` | Run checks, builds, and tests for TestClientCode |
| `/run-cli` | Run a specific CLI profile (JS-FORM, JS-WEBAPI, TS-FORM, TS-WEBAPI) |

---

## CLI Run Profile

When running a CLI profile:

1. Read profile from `DynamicsCrm.DevKit.Cli\Properties\launchSettings.json`
2. Extract `workingDirectory` and `commandLineArgs`
3. `cd` to `workingDirectory`
4. Run CLI exe with `commandLineArgs`

---

## CLI Commands (15 total)

The CLI (`devkit`) is a .NET 10 global tool. Entry point: `DynamicsCrm.DevKit.Cli/Program.cs`.

### Command → Task → JSON Mapping

| Command | Status | Command Class | Task Class | JSON Section |
|---|---|---|---|---|
| `generator` | ✅ Active | `GeneratorCommand` | `TaskGenerator.cs` | `generators` |
| `server` | ✅ Active | `ServerCommand` | `TaskServer.cs` | `servers` |
| `plugin` | ⚠️ Deprecated | `PluginCommand` | `TaskServer.cs` | `plugins` |
| `workflow` | ⚠️ Deprecated | `WorkflowCommand` | `TaskServer.cs` | `workflows` |
| `dataprovider` | ⚠️ Deprecated | `DataProviderCommand` | `TaskServer.cs` | `dataproviders` |
| `webresource` | ✅ Active | `WebResourceCommand` | `TaskWebResource.cs` | `webresources` |
| `modelbuilder` | ✅ Active | `ModelBuilderCommand` | `TaskModelBuilder.cs` | `modelbuilders` |
| `proxytype` | ⚠️ Deprecated (auto-redirects to `modelbuilder`) | `ProxyTypeCommand` | — | `proxytypes` |
| `solution` | ✅ Active | `PacSolutionPackagerCommand` | `TaskPacSolutionPackager.cs` | `solutionpackagers` |
| `legacy-solution` | ⚠️ Deprecated | `SolutionPackagerCommand` | `TaskSolutionPackager.cs` | `solutionpackagers` |
| `downloadreport` | ✅ Active | `DownloadReportCommand` | `TaskDownloadReport.cs` | `downloadreports` |
| `uploadreport` | ✅ Active | `UploadReportCommand` | `TaskUploadReport.cs` | `uploadreports` |
| `downloadwebresource` | ✅ Active | `DownloadWebResourceCommand` | `TaskDownloadWebResource.cs` | `downloadwebresources` |
| `datasource` | ✅ Active | `DataSourceCommand` | `TaskDataSource.cs` | `datasources` |
| `mcp` | ✅ Active | `McpCommand` | `McpServerHost.cs` | — |

### CLI Architecture

```
Program.cs → Spectre.Console.Cli
  ├── Commands/  → DevKitCommand<T> base class (handles connection, validation, error)
  ├── Models/    → DevKitCommandArgs (base) → specific args per command
  ├── Tasks/     → ITask interface → TaskXxx implementations
  ├── Services/  → LegacyArgConverter, UpdateChecker, DeploymentValidator
  ├── Logging/   → SpectreLog (ASCII art logo + colored output)
  ├── Mcp/       → MCP server (11 tools for Dataverse operations)
  └── Exceptions/→ DevKitExceptions
```

### MCP Server Tools (devkit mcp)

| Tool | Description |
|---|---|
| `ListTablesTool` | List Dataverse tables |
| `GetEntityMetadataTool` | Get entity metadata |
| `GetEntityMessagesTool` | Get SDK messages for entity |
| `GetGlobalOptionSetTool` | Get global option sets |
| `CreatePluginTool` | Create plugin registration |
| `GetEnvironmentInfoTool` | Get environment info |
| `GetRecordTool` | Get a record |
| `CreateRecordTool` | Create a record |
| `UpdateRecordTool` | Update a record |
| `DeleteRecordTool` | Delete a record |
| `QueryFetchXmlTool` | Query with FetchXML |

### Authentication Types

| Type | Constant | Description |
|---|---|---|
| `Interactive` | `ConnectionType.Interactive` | Browser-based OAuth |
| `DeviceCode` | `ConnectionType.DeviceCode` | Device code flow (headless) |
| `ClientSecret` | `ConnectionType.ClientSecret` | Service principal |
| `FromPac` | `ConnectionType.FromPac` | PAC CLI profile integration |
| `OAuth` | `ConnectionType.OAuth` | Username/Password (legacy) |
| `AD` | `ConnectionType.AD` | Active Directory (on-premises) |

---

## VSIX Extension

Entry point: `DynamicsCrm.DevKit/DevKitPackage.cs` (inherits `ToolkitPackage`).

### Structure

| Folder | Contents |
|---|---|
| `Commands/` | `CommandAddCrmPluginRegistration`, `CommandNewTypeScriptRelease`, `CommandNewWebResource`, `CommandTypeScriptRelease`, `CommandWebResource` |
| `Lib/` | `CacheHelper`, `Replacement`, `SigningHelper`, `T4Callback`, `T4Helper`, `VsixHelper`, `TypeScriptBuildHelper` |
| `Lib/Forms/` | WPF dialog forms |
| `Lib/WpfControls/` | Custom WPF controls |
| `Wizard/ProjectTemplates/` | 13 project template wizards (`ProjectTemplateBase` base class) |
| `Wizard/ItemTemplates/` | 15 item template wizards (`ItemTemplateBase` base class) |

### Project Templates (13)

| # | Template | Description |
|---|---|---|
| 01 | SharedProject | Shared project for common code |
| 02 | Console | .NET Framework console app |
| 03 | ConsoleCore | .NET Core console app |
| 04 | Server | Plugin/Workflow/CustomAction/CustomApi/DataProvider |
| 05 | Package | Plugin package |
| 06 | WebResource | JavaScript web resources |
| 07 | SharedTest | Shared test project |
| 08 | ProxyTypes | Early-bound proxy types |
| 09 | Test | Unit test project |
| 10 | TestUi | UI test project |
| 11 | SolutionPackager | Solution packager project |
| 12 | Report | SSRS report project |
| 13 | WebResourceTs | TypeScript web resources |

### Item Templates (15)

| # | Template | Description |
|---|---|---|
| 01 | LateBound | Late-bound entity class |
| 02 | JsForm | JavaScript form script |
| 03 | JsWebApi | JavaScript WebAPI script |
| 04 | Plugin | Plugin class |
| 05 | CustomAction | Custom action class |
| 06 | CustomApi | Custom API class |
| 07 | Workflow | Workflow activity class |
| 08 | DataProvider | Data provider class |
| 09 | Test | Unit test class |
| 10 | UiTest | UI test class |
| 11 | ResourceString | Resource string file |
| 12 | JsDevkit | DevKit JavaScript helper |
| 13 | BatFile | Batch file for CLI commands |
| 14 | JsFormTs | TypeScript form script |
| 15 | TsWebApi | TypeScript WebAPI script |

---

## Shared Project

`DynamicsCrm.DevKit.Shared/` is a shared project (.shproj) referenced by VSIX, CLI, and Tool.

### Structure

| Folder / File | Description |
|---|---|
| `Const.cs` | Version constants, config file names, web resource extensions |
| `Enum.cs` | Enumerations (ItemType, etc.) |
| `Extensions.cs` | Extension methods |
| `Helper.cs` | Code generation utilities (~926 lines) |
| `XrmHelper.cs` | Dataverse operations (metadata, forms, plugin images) |
| `FileHelper.cs` | File system utilities |
| `JsonHelper.cs` | JSON serialization helpers |
| `NuGetHelper.cs` | NuGet package operations |
| `RetryHelper.cs` | Retry logic |
| `CliArgsBuilder.cs` | CLI argument building |
| `ConnectionBuilder/` | 7 connection builders: `Interactive`, `DeviceCode`, `ClientSecret`, `FromPac`, `OAuth`, `AD`, `Legacy` + `ConnectionBuilderFactory`, `ConnectionTypeRegistry`, `PacProfileHelper` |
| `Logic/` | Code generation logic: `CSharpLateBound`, `JsForm`, `TsForm`, `TsOptionSet`, `JsTypeScriptDeclaration`, `JsWebApi`, `TsWebApi` |
| `Models/` | 41 model classes (JSON configs, CRM entities, plugin attributes, etc.) |
| `Services/` | `MetadataService`, `DeploymentService`, `CodeGenService` |
| `Resources/` | Embedded resources: bat scripts, C# templates, JS/TS helpers, T4 templates, Managed Identity scripts |

### Key Model Classes (Models/)

| Category | Classes |
|---|---|
| **JSON Config** | `Json`, `JsonBase`, `ConfigJson`, `JsonGenerator`, `JsonServer`, `JsonPlugin`, `JsonWorkflow`, `JsonDataProvider`, `JsonWebResource`, `JsonModelBuilder`, `JsonProxyType`, `JsonSolutionPackager`, `JsonUploadReport`, `JsonDownloadReport`, `JsonDownloadWebResource`, `JsonDataSource` |
| **CRM Entities** | `XrmEntity`, `SystemForm`, `ProcessForm`, `CrmConnection`, `DevKitConnections` |
| **Plugin** | `CrmPluginRegistrationAttribute`, `DynamicsCrmDevKitPluginAssemblyAttribute`, `DynamicsCrmDevKitPluginManagedIdentityAssemblyAttribute`, `PluginInputOutputParameter`, `ReadSdkMessageProcessingStep`, `DataProviderEvent` |
| **Code Gen** | `CommentTypeScriptDeclaration`, `OldCommentTypeScriptDeclaration`, `CustomTemplate`, `T4Context`, `ControlClassId` |
| **Common** | `IdName`, `NameValue`, `NameValueGuid`, `NameValueGuidExtend`, `CliAction`, `DeployWebResource`, `DownloadFile`, `WebResourceFile`, `Dependency` |

---

## Analyzers (21 total)

Target: .NET Standard 2.0. Package: `Microsoft.CodeAnalysis.CSharp` 4.14.0.

### Core Files

| File | Purpose |
|---|---|
| `DiagnosticIdentifiers.cs` | All 21 analyzer IDs (DEVKIT1001-DEVKIT1021) |
| `DiagnosticDescriptors.cs` | Descriptors with ID, title, message, severity, description |
| `DiagnosticCategories.cs` | Category constants (`DynamicsCrm.DevKit`) |
| `BaseDiagnosticAnalyzer.cs` | Base class all analyzers inherit from |
| `AnalyzerHelper.cs` | Utilities: `IsPluginOrWorkflowClass`, `IsInsidePluginOrWorkflow`, deprecated/batch request lists |
| `DiagnosticHelpers.cs` | `ReportDiagnostic()` overloads |
| `ExtensionMethods.cs` | Extension methods for Roslyn syntax |

### Analyzer List

| ID | Analyzer Class | Severity | Description |
|---|---|---|---|
| DEVKIT1001 | `UpdateMessageShouldHaveFilteringAttributesAnalyzer` | Warning/Error | Filtering attributes for Create/Update messages |
| DEVKIT1002 | `NotUseColumnSetTrueAnalyzer` | Warning | Avoid `new ColumnSet(true)` |
| DEVKIT1003 | `PluginImageAnalyzer` | Error | Invalid plugin image configurations |
| DEVKIT1004 | `DeprecatedAnalyzer` | Info | Deprecated SDK requests |
| DEVKIT1005 | `EntityReferenceMaybeNullAnalyzer` | Warning | EntityReference null check |
| DEVKIT1006 | `BatchRequestInPluginAnalyzer` | Warning | Batch requests in plugin context |
| DEVKIT1007 | `StatelessPluginAnalyzer` | Error | Instance fields in plugins |
| DEVKIT1008 | `ParallelExecutionInPluginAnalyzer` | Error | Parallel execution in plugins |
| DEVKIT1009 | `KeepAliveFalseAnalyzer` | Warning | KeepAlive=false for HTTP |
| DEVKIT1010 | `HttpTimeoutAnalyzer` | Warning | HTTP timeout configuration |
| DEVKIT1011 | `InvalidPluginExecutionExceptionAnalyzer` | Warning | Use InvalidPluginExecutionException |
| DEVKIT1012 | `TracingServiceAnalyzer` | Info | Use tracing service |
| DEVKIT1013 | `RetrieveMultiplePluginAnalyzer` | Info | RetrieveMultiple best practices |
| DEVKIT1014 | `AppDomainEventAnalyzer` | Error | Avoid AppDomain events |
| DEVKIT1015 | `GetAwaiterGetResultAnalyzer` | Info | Avoid GetAwaiter().GetResult() |
| DEVKIT1016 | `RetrieveAsIfPublishedAnalyzer` | Info | Avoid AsIfPublished parameter |
| DEVKIT1017 | `ConsoleOutputAnalyzer` | Info | Avoid Console.Write in plugins |
| DEVKIT1018 | `FileIOAnalyzer` | Error | Avoid file I/O in plugins |
| DEVKIT1019 | `PluginDepthAnalyzer` | Warning | Check plugin execution depth |
| DEVKIT1020 | `DataProviderDataSourceAnalyzer` | Error | DataProvider DataSource validation |
| DEVKIT1021 | `TracingServiceInCatchAnalyzer` | Warning | Use tracing service in catch blocks |

---

## Unit Tests

Project: `DynamicsCrm.DevKit.UnitTests/` (multi-target: net48 + net10.0).

| Test Type | Framework | Target | Location |
|---|---|---|---|
| **Analyzer tests** | xUnit + Roslyn Test Framework | net48 | `Analyzers/Tests/*.cs` (21 test files) |
| **Analyzer verifier** | — | net48 | `Analyzers/Verifier/CSharpAnalyzerVerifier.cs` |
| **CLI tests** | MSTest + FakeXrmEasy | net10.0 | `Cli/*.cs` |
| **CLI Generator tests** | MSTest | net10.0 | `Cli/Generator/*.cs` |
| **Lib tests** | xUnit | net48 | `Lib/*.cs` (DevKitJsonTest, DateTest) |

Run all tests:

```powershell
cd DynamicsCrm.DevKit.UnitTests
dotnet test
```

### Integration Tests

Test files are in `DynamicsCrm.DevKit.Tests/` with 15+ test scenarios:

| Folder | Tests |
|---|---|
| `TestAnalyzers/` | `DEVKIT1001.cs` → `DEVKIT1021.cs` (21 files, one per analyzer) |
| `TestNewCli/` | OAuth, ClientSecret, DeviceCode, Interactive, AD, FromPac connections |
| `TestServerCode/` | PluginServer, PluginPackage, DataSource, ManagedIdentity |
| `TestClientCode/` | DevKitJs, DevKitTs, AICode, Vsix |
| `TestGenerator/` | Generator integration tests |
| `TestWebResource/` | JavaScript, DownloadWebResources |
| `TestSolutionPackager/` | Solution extract/pack |
| `TestReports/` | Report operations |
| `TestProxyTypes/` | Proxy type generation |
| `TestConnections/` | Connection scenarios |
| `TestProjectsItems/` | Project and item template tests |
| `TestSdkProjects/` | SDK project tests |
| `TestLegacyProjects/` | Legacy (.NET Framework) project tests |
| `TestAllInOne/` | All-in-one integration |
| `TestAddCrmPluginRegistration/` | Plugin registration tests |

---

## Tool Project

`DynamicsCrm.DevKit.Tool/` - .NET Framework 4.8 utility package.

| Command | Task | Description |
|---|---|---|
| `nuglify` | `TaskNUglify` | Minify JS/CSS files |
| `documentgenerator` | `TaskDocumentGenerator` | Generate documentation from code |
| `documentcodegenerator` | `TaskDocumentCodeGenerator` | Generate code documentation |
| `decrypt` | `TaskDecrypt` | Decrypt connection strings |
| `coveragetoxml` | `TaskCoverageToXml` | Convert VS coverage to XML |

---

## Scripts

`DynamicsCrm.DevKit.Scripts/` contains PowerShell scripts:

| Script | Purpose |
|---|---|
| `Debug-DynamicsCrm-DevKit.ps1` | Debug build automation |
| `Release-DynamicsCrm-DevKit.ps1` | Release build automation |
| `Release-DynamicsCrm-DevKit-CurrentDate.ps1` | Release with current date |
| `Sync-AI-Config.ps1` | Sync `.agent/` → `.cursor/`, `.github/` |
| `Clean-Repository.ps1` | Clean all build artifacts |
| `Migrate-DevKit-V4-to-V5.ps1` | Migration from v4 to v5 |
| `RestoreReplacedFiles.ps1` | Restore replaced files |
| `CheckLinksDevKitTypes.ps1` | Check DevKit type links |
| `DevKit.ReleaseConfig.json` | Release configuration |

---

## Configuration Files

| File | Location | Purpose |
|---|---|---|
| `DynamicsCrm.DevKit.Cli.json` | Solution root | CLI configuration (profiles for each command) |
| `DynamicsCrm.DevKit.Config.json` | Solution root | VSIX configuration |
| `DevKit.ReleaseConfig.json` | `DynamicsCrm.DevKit.Scripts/` | Build/release configuration |
| `Const.cs` | `DynamicsCrm.DevKit.Shared/` | Version and build info (replaced at release) |

---

## File Patterns

| Search Term | Look For |
|-------------|----------|
| `helper` | `*Helper.cs` (XrmHelper, FileHelper, JsonHelper) |
| `config` | `DynamicsCrm.DevKit.json`, `DynamicsCrm.DevKit.Cli.json` |
| `task` | `Tasks/*.cs` in CLI project |
| `wizard` | `Wizard/*.cs` in VSIX project |
| `analyzer` | `CrmAnalyzers/*.cs` in Analyzers project |

---

## Release Scripts

| Script | Mode | PFX Required | Use Case |
|--------|------|--------------|----------|
| `Release-DynamicsCrm-DevKit-Debug.ps1` | DEBUG | No | AI Agent sessions |
| `Release-DynamicsCrm-DevKit-CurrentDate.ps1` | RELEASE | Yes | Human testing |
| `Release-DynamicsCrm-DevKit.ps1` | RELEASE | Yes | Official release |

---

## Key Files Quick Reference

| What You Need | Where To Find It |
|---|---|
| Version info | `DynamicsCrm.DevKit.Shared/Const.cs` |
| CLI entry point | `DynamicsCrm.DevKit.Cli/Program.cs` |
| CLI commands | `DynamicsCrm.DevKit.Cli/Commands/*.cs` |
| CLI tasks | `DynamicsCrm.DevKit.Cli/Tasks/*.cs` |
| CLI command args | `DynamicsCrm.DevKit.Cli/Models/*.cs` |
| CLI MCP server | `DynamicsCrm.DevKit.Cli/Mcp/` |
| VSIX entry point | `DynamicsCrm.DevKit/DevKitPackage.cs` |
| VSIX commands | `DynamicsCrm.DevKit/Commands/*.cs` |
| VSIX wizards | `DynamicsCrm.DevKit/Wizard/` |
| Dataverse operations | `DynamicsCrm.DevKit.Shared/XrmHelper.cs` |
| Code generation logic | `DynamicsCrm.DevKit.Shared/Helper.cs` + `Logic/` |
| Connection builders | `DynamicsCrm.DevKit.Shared/ConnectionBuilder/` |
| JSON models | `DynamicsCrm.DevKit.Shared/Models/` |
| Embedded resources | `DynamicsCrm.DevKit.Shared/Resources/` |
| Analyzer implementations | `DynamicsCrm.DevKit.Analyzers/CrmAnalyzers/` |
| Analyzer core files | `DynamicsCrm.DevKit.Analyzers/DiagnosticIdentifiers.cs`, `DiagnosticDescriptors.cs` |
| Analyzer unit tests | `DynamicsCrm.DevKit.UnitTests/Analyzers/Tests/` |
| CLI unit tests | `DynamicsCrm.DevKit.UnitTests/Cli/` |
| Integration tests | `DynamicsCrm.DevKit.Tests/` |
| Documentation | `DynamicsCrm.DevKit.Docs/` |
| Build scripts | `DynamicsCrm.DevKit.Scripts/` |
| AI agent rules | `.agent/rules/` (source of truth) |
| AI agent workflows | `.agent/workflows/` (source of truth) |

---

## AI Agent Configuration

The `.agent/` folder is the **source of truth** for all AI agent configuration. Other IDE-specific folders are synced from `.agent/`.

### Rules

| File | Purpose |
|---|---|
| `.agent/rules/core-rule.md` | Core rules for AI agents |
| `.agent/rules/devkit-analyzer.md` | Analyzer development rules |
| `.agent/rules/client-code.md` | TestClientCode source-of-truth, sync rules, CLI profiles |
| `.agent/rules/test-cli-profiles.md` | CLI profiles for integration test scenarios (server, webresource, proxy types, solution packager, reports) |

### Workflows

| File | Slash Command |
|---|---|
| `.agent/workflows/build-debug.md` | `/build-debug` |
| `.agent/workflows/build-cli.md` | `/build-cli` |
| `.agent/workflows/build-vsix.md` | `/build-vsix` |
| `.agent/workflows/build-analyzer.md` | `/build-analyzer` |
| `.agent/workflows/build-tool.md` | `/build-tool` |
| `.agent/workflows/build-release.md` | `/build-release` |
| `.agent/workflows/unit-test.md` | `/unit-test` |
| `.agent/workflows/clean-all.md` | `/clean-all` |
| `.agent/workflows/create-new-analyzer.md` | `/create-new-analyzer` |
| `.agent/workflows/client-code-clean.md` | `/client-code-clean` |
| `.agent/workflows/client-code-install.md` | `/client-code-install` |
| `.agent/workflows/client-code-generate.md` | `/client-code-generate` |
| `.agent/workflows/client-code-sync.md` | `/client-code-sync` |
| `.agent/workflows/client-code-test.md` | `/client-code-test` |
| `.agent/workflows/run-cli.md` | `/run-cli` |

### Skills

| File | Purpose |
|---|---|
| `.agent/skills/devkit-analyzer/SKILL.md` | Analyzer development guidance |
| `.agent/skills/markdown-management/SKILL.md` | Markdown management |
| `.agent/skills/powershell-windows/SKILL.md` | PowerShell operations |

### IDE Sync

| IDE | Rules | Workflows/Commands | Entry File |
|---|---|---|---|
| **Antigravity** | `.agent/rules/*.md` (4 files) | `.agent/workflows/*.md` (15 files) | `GEMINI.md` |
| **Cursor** | `.cursor/rules/*.mdc` (4 files) | `.cursor/commands/*.md` (15 files) | `AGENTS.md` |
| **VS Code (Copilot)** | `.github/copilot-instructions.md` | Read `.agent/workflows/*.md` | `AGENTS.md` |
| **VS 2026 (Copilot)** | `.github/copilot-instructions.md` | Read `.agent/workflows/*.md` | `AGENTS.md` |

> [!NOTE]
> When updating rules or workflows, edit `.agent/` files first, then run `DynamicsCrm.DevKit.Scripts\Sync-AI-Config.ps1` to propagate changes to `.cursor/` and `.github/`.

---

## Documentation Rules

When creating documentation files (`.md`):

| Working On | Save To |
|---|---|
| CLI | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Cli/` |
| VSIX | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit/` |
| Analyzers | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Analyzers/` |
| Tool | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Tool/` |
| Scripts | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Scripts/` |
| Tests | `DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Tests/` |
| Others / Misc | `DynamicsCrm.DevKit.Docs/Others/` |

---

## Security

> [!CAUTION]
> Never commit connection strings or credentials. Use environment variables or Azure Key Vault.

- Connection strings should use OAuth/MFA when possible

---

## Troubleshooting

| Issue | Solution |
|---|---|
| VSIX won't build | Ensure "VSIX development workload" is installed in VS 2026 |
| Analyzers silent | Check `.editorconfig` severity settings |
| Templates missing | Reinstall VSIX in experimental instance |
| Assembly not found | Check VSIX assembly loading in `DevKitPackage.cs` |
| CLI not found | Run `dotnet tool list -g` to verify installation |
| Unit tests fail (net48) | Ensure .NET Framework 4.8 targeting pack is installed |
| Unit tests fail (net10.0) | Ensure .NET 10 SDK is installed |

---

## Checklist Before Completing Work

- [ ] Ran appropriate build workflow (`/build-debug` or component-specific)
- [ ] Verified build succeeded (`devkit --version` shows today's date)
- [ ] All 4 packages exist in `Published/` folder (if full build)
- [ ] Saved documentation to correct `DynamicsCrm.DevKit.Docs/` subfolder
- [ ] Did NOT commit or push any git changes (unless requested)

---

## Git Policy

> [!WARNING]
> AI agents should NOT commit or push any git changes unless explicitly requested by the user.
