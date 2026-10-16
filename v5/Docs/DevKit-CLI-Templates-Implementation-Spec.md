# DynamicsCrm.DevKit CLI — Cross-Platform Project & Item Templates Implementation Specification

> **Document Purpose:** This is an actionable, step-by-step technical specification designed for an AI Coding Agent to implement **VSIX Project Templates (13)** and **Item Templates (17)** directly inside **`DynamicsCrm.DevKit.Cli`** (.NET 10) so they run natively on **Windows, macOS, and Linux** via both CLI commands (`devkit new`) and CLI MCP / Tool invocations (`devkit mcp` / `devkit tool call`).

---

## 0. Mandatory Repository Rules (Read Before Editing Any Code)

Before writing or modifying any file, you **MUST** obey all rules in [`AGENTS.md`](../AGENTS.md):

1. **Preserve unrelated working-tree changes:** Never stage, commit, or push unless explicitly requested; never use `git add .` or `git add -A`.
2. **Keep source version `4.44.44.44`:** Never hardcode another version in source files.
3. **Preserve existing public command names, tool names, and JSON keys:** All new functionality is **additive**. Do not break existing `generator`, `server`, `webresource`, `modelbuilder`, `solution`, `datasource`, `downloadreport`, `uploadreport`, `downloadwebresource`, or `mcp` commands.
4. **Naming conventions:**
   - Name `ServiceClient` variables `serviceClient`
   - Name `IOrganizationService` variables `orgService` (field `_orgService`)
   - Name `IOrganizationServiceAsync2` variables `orgServiceAsync` (field `_orgServiceAsync`)
5. **Cross-platform paths & OS compatibility:**
   - Always use `Path.Combine` or normalize separators (`/`) in generated MSBuild files.
   - Never assume Windows-only APIs (`EnvDTE`, `PresentationFramework`, `STextTemplating`, `sn.exe`, `cmd.exe`, or Windows DPAPI) without a cross-platform `.NET 10` implementation or fallback.
6. **Build & Test Verification:**
   - Build CLI with: `dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj`
   - Run CLI & Tool unit tests on `net10.0`:
     - `dotnet test DynamicsCrm.DevKit.Cli.UnitTests/DynamicsCrm.DevKit.Cli.UnitTests.csproj`
     - `dotnet test DynamicsCrm.DevKit.Tool.UnitTests/DynamicsCrm.DevKit.Tool.UnitTests.csproj`
   - If MCP tools are added/modified, follow the MCP registration rules in `McpServerHost.cs` (`DisabledToolSet`, `ToolResourceMap`, `CategoryLevel` using `nameof()`).

---

## 1. Objective & Scope

Currently, DynamicsCrm.DevKit's **13 Project Templates** and **17 Item Templates** are locked inside `DynamicsCrm.DevKit.Vsix` (.NET Framework 4.8, Visual Studio 2026+, Windows-only) because they rely on:
- WPF dialogs (`DynamicsCrm.DevKit.Vsix/Lib/Forms/*`)
- Visual Studio `IWizard` & `EnvDTE` (`DynamicsCrm.DevKit.Vsix/Wizard/*`)
- Visual Studio COM T4 service (`STextTemplating` in `DynamicsCrm.DevKit.Vsix/Lib/T4Helper.cs`)
- Token replacement tightly coupled to VSIX forms (`DynamicsCrm.DevKit.Vsix/Lib/Replacement.cs`)

### Target Goal
Implement a cross-platform **Template Scaffolding Engine** inside `DynamicsCrm.DevKit.Shared` and `DynamicsCrm.DevKit.Cli` (.NET 10) that:
1. Exposes a first-class CLI command: **`devkit new`** (supporting both **Interactive Wizard mode** via `Spectre.Console` and **Non-Interactive Flag mode** for scripts/automation).
2. Exposes MCP Tools in `DynamicsCrm.DevKit.Cli/Mcp/Tools/` so AI Agents (`devkit mcp`) and CLI JSON tool callers (`devkit tool call`) can list and scaffold any DevKit Project or Item Template on **macOS, Linux, and Windows**.
3. Achieves functional parity with the VSIX wizards while remaining 100% independent of Visual Studio and Windows.

---

## 2. Codebase Reference Map (Where Everything Lives Today)

Before implementing each step, inspect these existing files to reuse logic and preserve exact output behavior:

### A. VSIX Wizards & Helpers (Source of Truth for Behavior)
- **Project Template Wizards (13):** `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/`
  - `Shared.cs`, `Console.cs`, `ConsoleCore.cs`, `Server.cs`, `Package.cs`, `WebResource.cs`, `SharedTest.cs`, `ProxyTypes.cs`, `Test.cs`, `UiTest.cs`, `SolutionPackager.cs`, `Report.cs`, `WebResourceTs.cs`
- **Item Template Wizards (17):** `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/`
  - `LateBound.cs`, `JsForm.cs`, `JsWebApi.cs`, `Plugin.cs`, `CustomAction.cs`, `CustomApi.cs`, `Workflow.cs`, `DataProvider.cs`, `Test.cs`, `UiTest.cs`, `ResourceString.cs`, `BatFile.cs`, `TsForm.cs`, `TsWebApi.cs`, `TsDialog.cs`, `JsDialog.cs`, `ReportItemWizard.cs`
- **Replacement & T4 Logic:**
  - `DynamicsCrm.DevKit.Vsix/Lib/Replacement.cs` (Token dictionary population, NuGet versions, embedded resources, connection placeholders)
  - `DynamicsCrm.DevKit.Vsix/Lib/T4Helper.cs` (Builds `T4Context` and processes `.tt` templates)
  - `DynamicsCrm.DevKit.Shared/Models/T4Context.cs` (Model passed into T4 templates)

### B. Raw Template Payloads in Repository
- **Project Template Payloads:** `ProjectTemplates/CSharp/`
  - `01.SharedProjectTemplate` through `13.WebResourceTsProjectTemplate`
- **Item Template Payloads:** `ItemTemplates/CSharp/`
  - `01.LateBoundItemTemplate` through `18.ReportItemTemplate`
- **Shared Embedded Resources:** `DynamicsCrm.DevKit.Shared/Resources/`
  - `Resources/tt/*.tt` (11 T4 templates: `Plugin.tt`, `Plugin.pac.tt`, `Workflow.tt`, `CustomAction.tt`, `CustomApi.tt`, `DataProviderCreate.tt`, `DataProviderUpdate.tt`, `DataProviderDelete.tt`, `DataProviderRetrieve.tt`, `DataProviderRetrieveMultiple.tt`, `Test.tt`, `UiTest.tt`)
  - `Resources/bat/*`, `Resources/js/*`, `Resources/ts/*`, `Resources/cs/*`, `Resources/ManagedIdentity/*`

### C. Shared Code Generation & Metadata Services (Already Cross-Platform)
- `DynamicsCrm.DevKit.Shared/Services/MetadataService.cs`
- `DynamicsCrm.DevKit.Shared/Services/CodeGenService.cs`
- `DynamicsCrm.DevKit.Shared/Logic/CSharpLateBound.cs`
- `DynamicsCrm.DevKit.Shared/Logic/JsForm.cs`, `JsWebApi.cs`, `TsForm.cs`, `TsWebApi.cs`, `TsDialog.cs`
- `DynamicsCrm.DevKit.Shared/Helper.cs`, `XrmHelper.cs`, `NuGetHelper.cs`, `CliArgsBuilder.cs`

---

## 3. Step-by-Step Implementation Plan

Follow **Steps 1 through 7** in exact sequential order. Verify compilation after each step before moving to the next.

---

### STEP 1: Implement Cross-Platform T4 Engine (`CrossPlatformT4Service`)

#### Problem
`DynamicsCrm.DevKit.Vsix/Lib/T4Helper.cs` uses `Microsoft.VisualStudio.TextTemplating.STextTemplating` (Visual Studio COM service). However, `DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj` **already references `Mono.TextTemplating`**.

#### Action
Create `DynamicsCrm.DevKit.Cli/Services/TemplateEngine/CrossPlatformT4Service.cs` (or in `DynamicsCrm.DevKit.Shared` if conditionally compiled for `NET10_0_OR_GREATER`):

1. **Support `T4Context` session parameter:**
   - All `.tt` files in `DynamicsCrm.DevKit.Shared/Resources/tt/*.tt` expect:
     ```t4
     <#@ parameter type="DynamicsCrm.DevKit.Shared.Models.T4Context" name="Context"#>
     ```
   - Configure `Mono.TextTemplating.TemplateGenerator`:
     - Add assembly reference to `typeof(T4Context).Assembly.Location` and core `.NET` runtime assemblies (`System.Runtime`, `netstandard`, `System.Private.CoreLib`).
     - Add namespace import `DynamicsCrm.DevKit.Shared.Models`.
     - Create an `ITextTemplatingSession` via `generator.GetOrCreateSession()`, set `session["Context"] = context;`, and prepend `<#@ parameter type="DynamicsCrm.DevKit.Shared.Models.T4Context" name="Context"#>` if not already present (matching `T4Helper.ProcessTemplateAsync` in `Vsix/Lib/T4Helper.cs` line 40).
     - Call `await generator.ProcessTemplateAsync(...)` and return the generated C# code string (or throw a descriptive `DevKitValidationException` if `generator.Errors.HasErrors` is true).
2. **Support Default & Custom T4 Templates:**
   - Port `T4Helper.GetT4CodeAsync(ItemType itemType, string templateTitle, string subType = null)` without `VsixHelper`:
     - When `templateTitle` is `"Default"` (or null/empty), load the embedded `.tt` resource from `DynamicsCrm.DevKit.Shared/Resources/tt/`.
     - When `templateTitle` specifies a custom template title, read `DynamicsCrm.DevKit.Cli.json` in the solution/workspace root, locate `customTemplates` matching `type == itemType.ToString() && title == templateTitle`, and decompress `found.Body` via `Helper.Decompress(found.Body)`.
3. **Port Context Builders:**
   - Port `BuildContextAsync`, `BuildClassContextAsync`, `BuildPluginContextAsync`, `BuildTestContextAsync`, and `BuildDataProviderContextAsync` from `Vsix/Lib/T4Helper.cs` so they accept a clean DTO (`ItemScaffoldRequest`) instead of WPF `FormPlugin`.

#### Step 1 Verification Check
- Write unit tests in `DynamicsCrm.DevKit.Cli.UnitTests` that render **all 11 `.tt` files** (`Plugin.tt`, `Workflow.tt`, `CustomAction.tt`, `CustomApi.tt`, `DataProviderCreate.tt`, `DataProviderUpdate.tt`, `DataProviderDelete.tt`, `DataProviderRetrieve.tt`, `DataProviderRetrieveMultiple.tt`, `Test.tt`, `UiTest.tt`) with a sample `T4Context` and verify zero T4 compilation errors and expected `[CrmPluginRegistration(...)]` attributes.

---

### STEP 2: Implement Cross-Platform Replacement, SNK Key Generation & Solution/Project Mutator

#### Problem
VSIX `Replacement.cs`, `SigningHelper.cs`, and `VsixHelper.cs` rely on `EnvDTE` to find the Solution name, Shared project name, generate `.snk` files, and add files/projects to `.sln` and `.shproj`.

#### Action
Create the following services under `DynamicsCrm.DevKit.Cli/Services/TemplateEngine/`:

1. **`WorkspaceDiscoveryService.cs`:**
   - Given a target directory or `--solution-dir`, walk upward to find the `.sln` or `.slnx` file and `DynamicsCrm.DevKit.Cli.json`.
   - Derive `SolutionName` from the `.sln`/`.slnx` filename (or directory name if no solution file exists yet).
   - Derive `SharedProjectName` (`{SolutionName}.Shared` or by scanning existing `*.shproj` in the solution directory).
   - Derive `RootNamespace` for Item Templates by inspecting the nearest `.csproj` (`<RootNamespace>` or `.csproj` filename + relative folder path) or `.shproj`.

2. **`CrossPlatformSigningService.cs`:**
   - Replace `SigningHelper.GenerateKey` with pure `.NET 10` `System.Security.Cryptography.RSA.Create(2048)` to export a valid Strong Name Key (`.snk` binary blob: CSP PUBLICKEYBLOB / PRIVATEKEYBLOB format with magic `0x32415352` `"RSA2"`) so `.snk` generation works 100% natively on **macOS, Linux, and Windows** without `sn.exe`.

3. **`TemplateReplacementService.cs`:**
   - Port `Replacement.cs` (`DynamicsCrm.DevKit.Vsix/Lib/Replacement.cs`) to populate the `Dictionary<string, string>` replacements without any WPF `FormProject` / `FormItem` dependency:
     - Populate common tokens (`$DevKitVersion$`, `$SharedNameSpace$`, `$SharedProject$`, `$SharedTestProject$`, `$ProjectProxyTypes$`, `$ProjectName$`, `$LogicalProjectName$`, `$SafeProjectName$`, `$NameSpace$`, `$SchemaName$`, `$rootnamespace$`, `$CliConnectionArgs$`).
     - Populate NuGet package versions via `NuGetHelper.SetReplacementAsync` (with offline fallback to safe default versions if NuGet API is unreachable).
     - Populate embedded resources (`$deploy.debug.bat$`, `$devkit.ts$`, `$devkit.d.ts$`, `$build.js$`, `$Helper.cs$`, `$Program.cs$`, `$TracingServiceFake.cs$`, `$App.cs$`, `$AppCore.cs$`, `$AppSettings.json$`, etc.).
     - **Cross-platform path fix:** Never use hardcoded `\\` when building `$destinationdirectory$` or file paths; always use `Path.Combine`.

4. **`SolutionProjectMutatorService.cs`:**
   - **Adding a project to `.sln` / `.slnx`:**
     - For standard `.csproj` projects: run `dotnet sln <slnPath> add <csprojPath>` (or update `.sln`/`.slnx` directly).
     - For `Shared` / `SharedTest` (`.shproj`): because `dotnet sln add` does not support `.shproj`, insert the Shared Project entry and `GlobalSection(SharedMSBuildProjectFiles)` into `.sln` (matching Visual Studio's format) AND ensure dependent projects (`Server`, `Test`, etc.) contain `<Import Project="..\{SharedProjectName}\{SharedProjectName}.projitems" Label="Shared" />`.
   - **Adding items to `.projitems` (when target is a `.shproj` Shared Project):**
     - When scaffolding an Item Template inside a folder belonging to a `.shproj` / `.projitems`, add the `<Compile Include="$(MSBuildThisFileDirectory)..." />` entry to `.projitems` using `XDocument`.
   - **Ensuring `DynamicsCrm.DevKit.Cli.json` exists:**
     - Port `VsixHelper.AddDynamicsCrmDevKitCliJsonAsync()` so if `DynamicsCrm.DevKit.Cli.json` does not exist in the solution directory, it is created from the embedded template resource.

---

### STEP 3: Embed Project & Item Template Payloads and Build `ItemTemplateScaffolder` (All 17 Item Templates)

#### Action
Create `DynamicsCrm.DevKit.Cli/Services/TemplateEngine/ItemTemplateScaffolder.cs` to support all **17 Item Templates**:

| # | Template Type (`--type`) | Target Files Generated | Core Logic to Execute |
|---|---|---|---|
| 1 | `Plugin` | `{Class}.cs` | Query/validate Entity, Message, Stage, Execution, Order. Build `T4Context` (`BuildPluginContextAsync` or `BuildContextAsync` for custom T4) -> render `Plugin.tt` via `CrossPlatformT4Service`. |
| 2 | `Workflow` | `{Class}.cs` | Build `T4Context` -> render `Workflow.tt` via `CrossPlatformT4Service`. |
| 3 | `CustomAction` | `{Class}.cs` | Query/validate CustomAction message & Entity -> build `T4Context` -> render `CustomAction.tt`. |
| 4 | `CustomApi` | `{Class}.cs` | Query/validate CustomApi message & Entity -> build `T4Context` -> render `CustomApi.tt`. |
| 5 | `DataProvider` | `Create.cs`, `Update.cs`, `Delete.cs`, `Retrieve.cs`, `RetrieveMultiple.cs` | Query/validate DataSource -> build `T4Context` (`BuildDataProviderContextAsync`) -> render the 5 `DataProvider*.tt` templates. |
| 6 | `Test` | `{Class}Test.cs` | Build `T4Context` (`BuildTestContextAsync`) -> render `Test.tt`. |
| 7 | `UiTest` | `{Class}UiTest.cs` | Build `T4Context` (`BuildClassContextAsync`) -> render `UiTest.tt`. |
| 8 | `LateBound` | `{Entity}.cs` (if not exists) + `{Entity}.generated.cs` | Fetch `EntityMetadata` -> generate `{Entity}.cs` via `Helper.GetDefaultFileWithCs` (only if file doesn't exist, or normalize using statements like `LateBound.cs` in VSIX) + generate `{Entity}.generated.cs` via `CSharpLateBound.GetCsCode(...)`. |
| 9 | `JsForm` | `{Entity}.js` (if not exists) + `{Entity}.form.js` + `{Entity}.d.ts` | Fetch `EntityMetadata` -> `CodeGenService.GetDefaultJsFormFileAsync` (if `{Entity}.js` not exists) + `DynamicsCrm.DevKit.Shared.Logic.JsForm.GetJsFormCodeAsync` (checking if `{Entity}.webapi.js` exists). |
| 10 | `JsWebApi` | `{Entity}.js` (if not exists) + `{Entity}.webapi.js` + `{Entity}.d.ts` | Fetch `EntityMetadata` -> `CodeGenService.GetDefaultWebApiFileAsync` (if `{Entity}.js` not exists) + `DynamicsCrm.DevKit.Shared.Logic.JsWebApi.GetJsWebApiCodeAsync` (checking if `{Entity}.form.js` exists). |
| 11 | `JsDialog` | `{Name}.js` (if not exists) + `{Name}.dialog.js` + `{Name}.d.ts` | Generate JS dialog files matching `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/JsDialog.cs`. |
| 12 | `TsForm` | `{Entity}.ts` (if not exists) + `{Entity}.form.ts` | Fetch `EntityMetadata` -> `CodeGenService.GetDefaultTsFormFileAsync` (if `{Entity}.ts` not exists) + `DynamicsCrm.DevKit.Shared.Logic.TsForm.GetTsFormCodeAsync` (checking if `{Entity}.webapi.ts` exists). |
| 13 | `TsWebApi` | `{Entity}.ts` (if not exists) + `{Entity}.webapi.ts` | Fetch `EntityMetadata` -> `CodeGenService.GetDefaultTsWebApiFileAsync` (if `{Entity}.ts` not exists) + `DynamicsCrm.DevKit.Shared.Logic.TsWebApi.GetTsWebApiCodeAsync`. |
| 14 | `TsDialog` | `{Name}.ts` (if not exists) + `{Name}.dialog.ts` | Generate TS dialog files via `DynamicsCrm.DevKit.Shared.Logic.TsDialog.GetTsDialogCodeAsync` + `CodeGenService.GetDefaultTsDialogFileAsync`. |
| 15 | `ResourceString` | `{Entity}.{LanguageCode}.resx` | Generate `.resx` XML file from `ItemTemplates/CSharp/11.ResourceStringItemTemplate/ResourceString.resx`. |
| 16 | `BatFile` | Selected utility/script file(s) (`deploy.debug.bat`, `devkit.js`, `devkit.d.ts`, `Plugin-Managed-Identity.*`, plus optional `.sh` equivalent on macOS/Linux) | Port `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/BatFile.cs` and generate `.sh` shell scripts with `#!/usr/bin/env bash` when `--shell sh` or running on macOS/Linux. |
| 17 | `Report` | `{Name}.rdl` | Generate standard SSRS `.rdl` XML template (with optional FetchXml dataset) matching `ReportItemWizard.cs`. |

> **Important Idempotency Rule (from `ItemTemplateBase.cs`):**
> - User-authored files (`{Entity}.cs`, `{Entity}.js`, `{Entity}.ts`) **MUST NEVER BE OVERWRITTEN** if they already exist unless `--force` is explicitly passed.
> - Designer/generated files (`{Entity}.generated.cs`, `{Entity}.form.js`, `{Entity}.webapi.js`, `{Entity}.d.ts`, `{Entity}.form.ts`, `{Entity}.webapi.ts`) **SHOULD BE UPDATED** if their content changed (`WriteTargetFileIfChangedAsync`).

---

### STEP 4: Build `ProjectTemplateScaffolder` (All 13 Project Templates)

#### Action
Create `DynamicsCrm.DevKit.Cli/Services/TemplateEngine/ProjectTemplateScaffolder.cs` to scaffold all **13 Project Templates** from `ProjectTemplates/CSharp/01..13`:

1. **`Shared`** (`01.SharedProjectTemplate`):
   - Creates `{ProjectName}.shproj`, `{ProjectName}.projitems`, `Entities/`, `Lib/Extension.cs`, `Lib/SimpleJson.cs`, `PluginCore.cs`, and ensures `DynamicsCrm.DevKit.Cli.json` exists at solution root.
2. **`Console`** (`02.ConsoleProjectTemplate`):
   - Creates `net462` SDK-style `.csproj`, `App.cs`, `App.config`, `Helper.cs`, `Program.cs`, and `{ProjectName}.snk`.
3. **`ConsoleCore`** (`03.ConsoleCoreProjectTemplate`):
   - Creates `net10.0` SDK-style `.csproj`, `App.cs`, `AppSettings.json`, `Helper.cs`, `Program.cs`, and `{ProjectName}.snk`.
4. **`Server`** (`04.ServerProjectTemplate`):
   - Verifies Shared project exists (or auto-scaffolds/warns), creates `net462` SDK-style `.csproj`, `deploy.debug.bat` (and `deploy.debug.sh` on non-Windows), `Plugin.cs` / assembly info, and `{ProjectName}.snk`.
5. **`Package`** (`05.PackageProjectTemplate`):
   - Creates Dataverse Package Deployer project structure, `.csproj`, and `{ProjectName}.snk`.
6. **`WebResource`** (`06.WebResourceProjectTemplate`):
   - Creates JS WebResource project structure (`entities/`, `lib/devkit.js`, `lib/devkit.d.ts`, `package.json`, `jsconfig.json`, deploy & generator scripts).
7. **`SharedTest`** (`07.SharedTestProjectTemplate`):
   - Creates Shared Test project (`{ProjectName}.shproj`, `{ProjectName}.projitems`, `TracingServiceFake.cs`).
8. **`ProxyTypes`** (`08.ProxyTypesProjectTemplate`):
   - Creates ProxyTypes project (`net462` `.csproj`, `run.bat` / `run.sh`, `{ProjectName}.snk`).
9. **`Test`** (`09.TestProjectTemplate`):
   - Creates Server Unit Test project (`.csproj`, `{ProjectName}.snk`, test references).
10. **`UiTest`** (`10.TestUiProjectTemplate`):
    - Creates UI Automation Test project (`App.config`, `TestSettings.cs`, `.csproj`, `{ProjectName}.snk`).
11. **`SolutionPackager`** (`11.SolutionPackagerProjectTemplate`):
    - Creates Solution Packager project (`Extract-Both.bat`, `Pack-Both.bat`, plus `.sh` equivalents, `.csproj`).
12. **`Report`** (`12.ReportProjectTemplate`):
    - Creates Report project (`download.reports.bat`, `upload.reports.bat`, project files).
13. **`WebResourceTs`** (`13.WebResourceTsProjectTemplate`):
    - Creates TypeScript WebResource project (`src/`, `lib/devkit.ts`, `lib/devkit.d.ts`, `build.js`, `package.json`, `tsconfig.json`, `jest.config.js`, deploy & generator scripts).

---

### STEP 5: Add CLI Command `devkit new` (Interactive Spectre.Console Wizard + Non-Interactive Flags)

#### Action
1. Create `DynamicsCrm.DevKit.Cli/Models/NewCommandArgs.cs` deriving from `DevKitCommandArgs`:
   - `--kind` (`project` | `item` | `list`)
   - `--type` (Template name, e.g., `Server`, `WebResourceTs`, `ConsoleCore`, `Shared`, `Plugin`, `Workflow`, `CustomApi`, `CustomAction`, `DataProvider`, `LateBound`, `JsForm`, `TsForm`, `JsWebApi`, `TsWebApi`, `JsDialog`, `TsDialog`, `Test`, `UiTest`, `ResourceString`, `BatFile`, `Report`)
   - `--name` (Project name, Class name, Dialog name, or Report name)
   - `--entity` (Entity logical or schema name, e.g., `account` or `Account`)
   - `--message` (Dataverse message, e.g., `Create`, `Update`, `Delete`, or Custom API/Action name)
   - `--stage` (`PreValidation`, `PreOperation`, `PostOperation`)
   - `--execution` (`Synchronous`, `Asynchronous`)
   - `--order` (Execution order, default `1`)
   - `--template` (T4 template title, default `"Default"`)
   - `--datasource` (DataSource logical name for `DataProvider`)
   - `--language` (LCID for `ResourceString`, e.g., `1033`)
   - `--out` / `--output` (Target output directory; defaults to current directory)
   - `--namespace` (Optional explicit namespace override)
   - `--offline` (Skip live Dataverse connection for templates that can run offline or when entity/schema info is provided explicitly)
   - `--force` (Overwrite user files if they already exist)
   - `--interactive` / `-i` (Force interactive Spectre.Console wizard; also auto-activated when `devkit new` is run in an interactive terminal without required flags)

2. Create `DynamicsCrm.DevKit.Cli/Commands/NewCommand.cs` and `DynamicsCrm.DevKit.Cli/Tasks/TaskNew.cs`:
   - Override `IsProfileRequired` and `IsJsonRequired` in `NewCommand` to return `false` (because scaffolding a new project in an empty folder does not require an existing `DynamicsCrm.DevKit.Cli.json` profile!).
   - Override `IsValidAsync` so connection to Dataverse is only established when required by the selected template (or when `--offline` is not set).
   - **Interactive Mode (`Spectre.Console`):**
     - When `devkit new` is invoked without `--kind`/`--type` (and `!SpectreLog.IsPlain` and `!Console.IsInputRedirected`):
       1. Prompt with `AnsiConsole.Prompt(new SelectionPrompt<string>())` to choose `Project Template` vs `Item Template`.
       2. Prompt to select the specific template (`Plugin`, `TsForm`, `LateBound`, `WebResourceTs`, `Server`, etc.).
       3. If Dataverse metadata is needed, connect (using `--conn` / `--auth` / `.env` fallback) and present searchable `SelectionPrompt` lists for Entity, Message, Stage, Execution Mode, and T4 Template.
       4. Execute the scaffolder and print a summary table of created/updated files.

3. Register `NewCommand` in `DynamicsCrm.DevKit.Cli/Program.cs`:
   ```csharp
   config.AddCommand<NewCommand>("new")
         .WithDescription("Create DevKit project or item templates (cross-platform wizard & CLI)");
   ```
   Also document `devkit new` in `SpectreLog.WriteHelp()`.

---

### STEP 6: Expose MCP Tools (`devkit mcp` & `devkit tool`) for AI Agents and IDE Integrations

#### Action
Create `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageTemplateTool.cs` (or `GetTemplatesTool.cs` + `ScaffoldTemplateTool.cs`) in namespace `DynamicsCrm.DevKit.Cli.Mcp.Tools`:

1. **`list_templates` (or `get_templates`)** (`[McpServerTool(Name = "get_templates", ReadOnly = true, Idempotent = true)]`):
   - Returns structured metadata of all 13 Project Templates and 17 Item Templates, their required/optional parameters, and any custom T4 templates found in `DynamicsCrm.DevKit.Cli.json`.
2. **`scaffold_project`** (`[McpServerTool(Name = "scaffold_project", ReadOnly = false)]`):
   - Parameters: `projectType`, `projectName`, `outputDirectory`, `solutionPath` (optional), `generateShellScripts` (optional, default true on macOS/Linux).
   - Calls `ProjectTemplateScaffolder` and returns structured result (`createdFiles`, `projectFilePath`, `solutionUpdated`, `warnings`).
3. **`scaffold_item`** (`[McpServerTool(Name = "scaffold_item", ReadOnly = false)]`):
   - Parameters: `itemType`, `outputDirectory`, `entity` (optional), `name` (optional), `message` (optional), `stage` (optional), `execution` (optional), `order` (optional), `templateTitle` (optional), `dataSource` (optional), `languageCode` (optional), `rootNamespace` (optional), `force` (optional).
   - Uses `IMcpConnectionProvider` (when metadata is needed) + `ItemTemplateScaffolder` and returns structured result (`createdFiles`, `updatedFiles`, `skippedFiles`).
4. **Update `McpServerHost.cs`:**
   - Follow `AGENTS.md`: update `DisabledToolSet` (if applicable), `ToolResourceMap`, and `CategoryLevel` in `DynamicsCrm.DevKit.Cli/Mcp/McpServerHost.cs` using `nameof()`.

---

### STEP 7: Fix Existing Cross-Platform Path & Process Bugs in CLI Tasks

While auditing `DynamicsCrm.DevKit.Cli` for macOS/Linux template usage, verify and fix these cross-platform issues if still present:
1. **`DynamicsCrm.DevKit.Cli/Tasks/TaskGenerator.cs`:** Ensure directory path concatenation uses `Path.Combine` instead of hardcoded `\\`.
2. **`DynamicsCrm.DevKit.Cli/Tasks/TaskWebResource.cs`:** When running TypeScript build (`npm run build` / `node build.js`), ensure it does not hardcode `cmd.exe /c` on non-Windows (`OperatingSystem.IsWindows()` uses `cmd.exe /c`, while macOS/Linux uses `/bin/sh -c`).

---

## 4. Verification & Testing Plan (How to Verify Correctness)

The AI agent implementing this specification **MUST** execute all verification levels below before declaring the task complete.

### Level 1: Build Verification
Run:
```powershell
dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj --configuration Debug
```
- **Expected:** `0 Error(s)`, `0 Warning(s)` in newly added files.

### Level 2: Unit Test Suite (`DynamicsCrm.DevKit.Cli.UnitTests` & `DynamicsCrm.DevKit.Tool.UnitTests`)
Create dedicated test classes under `DynamicsCrm.DevKit.Cli.UnitTests/TemplateEngine/` (remembering to mark shared-state or filesystem-heavy test classes with `[DoNotParallelize]` as required by `AGENTS.md`):

1. **`CrossPlatformT4ServiceTests.cs`:**
   - Test rendering every built-in `.tt` template (`Plugin.tt`, `Plugin.pac.tt`, `Workflow.tt`, `CustomAction.tt`, `CustomApi.tt`, `DataProviderCreate.tt`, `DataProviderUpdate.tt`, `DataProviderDelete.tt`, `DataProviderRetrieve.tt`, `DataProviderRetrieveMultiple.tt`, `Test.tt`, `UiTest.tt`).
   - Verify generated C# code compiles with Roslyn (`CSharpSyntaxTree.ParseText`) with zero syntax errors.
   - Test custom compressed T4 template loading from a mock `DynamicsCrm.DevKit.Cli.json`.
2. **`CrossPlatformSigningServiceTests.cs`:**
   - Test generating a `.snk` file in a temp directory.
   - Verify the byte header (`0x07, 0x02, 0x00, 0x00, 0x00, 0x24, 0x00, 0x00, 0x52, 0x53, 0x41, 0x32` - `"RSA2"`) and verify `dotnet build` succeeds on a temporary `.csproj` with `<SignAssembly>true</SignAssembly>` and `<AssemblyOriginatorKeyFile>test.snk</AssemblyOriginatorKeyFile>`.
3. **`ProjectTemplateScaffolderTests.cs`:**
   - Parameterized `[DataTestMethod]` covering **all 13 Project Templates** (`Shared`, `Console`, `ConsoleCore`, `Server`, `Package`, `WebResource`, `SharedTest`, `ProxyTypes`, `Test`, `UiTest`, `SolutionPackager`, `Report`, `WebResourceTs`).
   - Verify all expected files are created in a temporary directory, no `$UnresolvedToken$` placeholders remain in generated `.csproj`/`.cs`/`.json` files, and `DynamicsCrm.DevKit.Cli.json` is created when scaffolding `Shared`.
4. **`ItemTemplateScaffolderTests.cs`:**
   - Parameterized tests covering **all 17 Item Templates** using mocked `IOrganizationServiceAsync2` / `EntityMetadata`:
     - Verify `LateBound` creates `{Entity}.cs` + `{Entity}.generated.cs`, and re-running does NOT overwrite custom changes in `{Entity}.cs` while updating `{Entity}.generated.cs`.
     - Verify `JsForm` and `TsForm` create both the user stub file and the `.form.js`/`.d.ts` or `.form.ts` files.
     - Verify `Plugin`, `Workflow`, `CustomAction`, `CustomApi`, `DataProvider`, `Test`, `UiTest`, `JsWebApi`, `TsWebApi`, `JsDialog`, `TsDialog`, `ResourceString`, `BatFile`, and `Report`.
5. **`NewCommandAndMcpToolTests.cs`:**
   - Verify `devkit tool list` includes `get_templates`, `scaffold_project`, `scaffold_item`.
   - Verify `devkit tool describe scaffold_item` and `devkit tool example scaffold_item` return valid schemas and deterministic examples.
   - Verify `NewCommand` CLI flag parsing and execution in a temp directory.

Run the test suites:
```powershell
dotnet test DynamicsCrm.DevKit.Cli.UnitTests/DynamicsCrm.DevKit.Cli.UnitTests.csproj
dotnet test DynamicsCrm.DevKit.Tool.UnitTests/DynamicsCrm.DevKit.Tool.UnitTests.csproj
```

### Level 3: End-to-End Smoke Test via CLI & Tool Invoker
Run actual CLI commands against a temporary folder (`$ tempDir`) to verify real process execution:
```powershell
# 1. Verify MCP tool discovery & schema validation
dotnet run --project DynamicsCrm.DevKit.Cli -- tool describe get_templates
dotnet run --project DynamicsCrm.DevKit.Cli -- tool call get_templates --input "{}"

# 2. Scaffold Shared + Server + WebResourceTs + ConsoleCore projects in temp folder
dotnet run --project DynamicsCrm.DevKit.Cli -- new --kind project --type Shared --name Contoso.Shared --out $tempDir --offline
dotnet run --project DynamicsCrm.DevKit.Cli -- new --kind project --type Server --name Contoso.Plugin --out $tempDir --offline
dotnet run --project DynamicsCrm.DevKit.Cli -- new --kind project --type WebResourceTs --name Contoso.WebResource --out $tempDir --offline
dotnet run --project DynamicsCrm.DevKit.Cli -- new --kind project --type ConsoleCore --name Contoso.ConsoleCore --out $tempDir --offline

# 3. Scaffold Plugin & Dialog items offline in temp folder
dotnet run --project DynamicsCrm.DevKit.Cli -- new --kind item --type Plugin --name PreOperationAccountUpdateSynchronous --entity account --message Update --stage PreOperation --execution Synchronous --out "$tempDir/Contoso.Plugin" --offline
dotnet run --project DynamicsCrm.DevKit.Cli -- new --kind item --type TsDialog --name ConfirmDialog --out "$tempDir/Contoso.WebResource/src" --offline

# 4. Verify the scaffolded Server and ConsoleCore projects actually compile with `dotnet build`!
dotnet build "$tempDir/Contoso.Plugin/Contoso.Plugin.csproj"
dotnet build "$tempDir/Contoso.ConsoleCore/Contoso.ConsoleCore.csproj"
```

---

## 5. Definition of Done (DoD) Checklist

The implementation is **ONLY** considered complete when **every single item below is checked and verified**:

- [ ] **1. Cross-Platform T4 Engine:** `CrossPlatformT4Service` renders all 11 `.tt` templates in `DynamicsCrm.DevKit.Shared/Resources/tt/` using `Mono.TextTemplating` with `T4Context` and zero Visual Studio dependencies.
- [ ] **2. All 13 Project Templates Supported:** `Shared`, `Console`, `ConsoleCore`, `Server`, `Package`, `WebResource`, `SharedTest`, `ProxyTypes`, `Test`, `UiTest`, `SolutionPackager`, `Report`, `WebResourceTs` can be scaffolded via `devkit new` and `scaffold_project`.
- [ ] **3. All 17 Item Templates Supported:** `Plugin`, `Workflow`, `CustomAction`, `CustomApi`, `DataProvider`, `Test`, `UiTest`, `LateBound`, `JsForm`, `JsWebApi`, `JsDialog`, `TsForm`, `TsWebApi`, `TsDialog`, `ResourceString`, `BatFile`, `Report` can be scaffolded via `devkit new` and `scaffold_item`.
- [ ] **4. Cross-Platform `.snk` Generation:** Strong-name key files (`.snk`) are generated in pure `.NET 10` without `sn.exe`, and scaffolded `Server` / `ConsoleCore` projects pass `dotnet build`.
- [ ] **5. Idempotent File Writing:** Existing user files (`{Entity}.cs`, `{Entity}.js`, `{Entity}.ts`) are preserved when re-scaffolding unless `--force` is specified, while `.generated.cs`, `.form.js`, `.d.ts`, `.form.ts`, `.webapi.ts` are updated cleanly.
- [ ] **6. CLI + Interactive + MCP Surfaces Wired Up:**
  - `devkit new` works in both non-interactive flag mode and `Spectre.Console` interactive wizard mode.
  - MCP tools (`get_templates`, `scaffold_project`, `scaffold_item`) are registered in `McpServerHost.cs` and work via both `devkit mcp` and `devkit tool call`.
- [ ] **7. Unit Tests & Build Green:**
  - `dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj` succeeds with 0 errors.
  - All existing and new tests in `DynamicsCrm.DevKit.Cli.UnitTests` and `DynamicsCrm.DevKit.Tool.UnitTests` pass 100%.
- [ ] **8. Clean Working Tree & Version Check:**
  - Temporary test directories are cleaned up.
  - Version placeholder `4.44.44.44` in `Const.cs` is untouched.
  - Unrelated files in the git working tree are preserved.
