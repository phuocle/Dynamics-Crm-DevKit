```text
╔══════════════════════════════════════════════════════════════════════════════════╗
║                                                                                  ║
║     ____              _  __ _ _     __  __                         _             ║
║    |  _ \  _____   __| |/ /(_) |_  |  \/  | __ _ _ __  _   _  __ _| |            ║
║    | | | |/ _ \ \ / /| ' / | | __| | |\/| |/ _` | '_ \| | | |/ `_ | |            ║
║    | |_| |  __/\ V / | . \ | | |_  | |  | | (_| | | | | |_| | (_| | |            ║
║    |____/ \___| \_/  |_|\_\|_|\__| |_|  |_|\__,_|_| |_|\__,_|\__,_|_|            ║
║                                                                                  ║
║              _____ _____ ____ _____   ____ _   _ _____ ____ _  __                ║
║             |_   _| ____/ ___|_   _| / ___| | | | ____/ ___| |/ /                ║
║               | | |  _| \___ \ | |  | |   | |_| |  _|| |   | ' /                 ║
║               | | | |___ ___) || |  | |___|  _  | |__| |___| . \                 ║
║               |_| |_____|____/ |_|   \____|_| |_|_____\____|_|\_\                ║
║                                                                                  ║
║          HUMAN MANUAL TESTING - All 4 Packages Must Pass Before Release          ║
║                                                                                  ║
╚══════════════════════════════════════════════════════════════════════════════════╝
```

# DynamicsCrm.DevKit - Manual Test Checklist

> **Version**: `4.99.99.99`
> **Tester**: _______________
> **Date**: _______________
> **Environment**: _______________

### Status Emoji (copy & paste to update)


| Emoji | Meaning                  |
| ----- | ------------------------ |
| ⬜     | Not tested yet           |
| ✅     | Passed                   |
| ❌     | Failed                   |
| ⏭️    | Skipped / Not applicable |


### Overall Progress


| Section          | Status |
| ---------------- | ------ |
| **1. VSIX**      | ⬜      |
| **2. CLI**       | ⬜      |
| **3. Analyzers** | ⬜      |
| **4. Tool**      | ⬜      |


---

## Section 1: VSIX (Visual Studio Extension)

### 1.1 Installation

- ✅ Install VSIX from `Published/4.99.99.99/DynamicsCrm.DevKit.4.99.99.99.vsix`
- ✅ Verify extension appears in VS2026 Extensions → Manage Extensions
- ✅ Verify version number matches `4.99.99.99`

### 1.2 Connections

- ⬜ **Interactive** - Browser sign-in (MFA supported)
- ⬜ **ClientSecret** - Service principal (plain text)
- ✅ **ClientSecret** - Service principal (encrypted)
- ⬜ **OAuth** - Username/Password (legacy)
- ⬜ **DeviceCode** - Device code flow
- ⬜ **FromPac** - PAC CLI default profile
- ⬜ **FromPac** - Named profile (`--pacprofile`)
- ⬜ **FromPac** - By index (`--pacindex`)
- ⬜ **AD** - Active Directory (on-premises)

### 1.3 Project Templates (13)


| #   | Template                       | Status                                                                   |
| --- | ------------------------------ | ------------------------------------------------------------------------ |
| 01  | Shared Project                 | ✅ Create new project from template                                       |
| 02  | Console Project                | ✅ Create → Build → Run (connect to Dataverse)                            |
| 03  | Console Core Project           | ✅ Create → Build → Run (connect to Dataverse)                            |
| 04  | Server Project                 | ⬜ Create → Add Plugin/Workflow/CustomAction/CustomApi/DataProvider items |
| 05  | Package Project                | ✅ Create → Add Plugin/CustomAction/CustomApi/DataProvider items          |
| 06  | WebResource Project (JS)       | ⬜ Create → Add Form/WebApi items → Deploy                                |
| 07  | Shared Test Project            | ⬜ Create → Verify FakeXrmEasy references                                 |
| 08  | ProxyTypes Project             | ⬜ Create → Generate early-bound classes                                  |
| 09  | Test Project                   | ⬜ Create → Add test items → Run tests                                    |
| 10  | Ui Test Project                | ⬜ Create → Add UI test items                                             |
| 11  | Solution Packager Project      | ⬜ Create → Extract/Pack solution                                         |
| 12  | Report Project                 | ⬜ Create → Add report items                                              |
| 13  | WebResource TypeScript Project | ⬜ Create → Add Form/WebApi items → Build → Deploy                        |


### 1.4 Item Templates (15)


| #   | Template             | Status                                              |
| --- | -------------------- | --------------------------------------------------- |
| 01  | Late Bound Class     | ⬜ Add item → Verify generated code                  |
| 02  | JavaScript Form      | ⬜ Add item → Verify .js + .d.ts + .form.js          |
| 03  | JavaScript WebApi    | ⬜ Add item → Verify .webapi.js                      |
| 04  | Plugin Class         | ✅ Add item → Verify CrmPluginRegistration attribute |
| 05  | Custom Action Class  | ✅ Add item → Verify PluginType.CustomAction         |
| 06  | Custom Api Class     | ✅ Add item → Verify PluginType.CustomApi            |
| 07  | Workflow Class       | ⬜ Add item → Verify CodeActivity inheritance        |
| 08  | Data Provider Class  | ✅ Add item → Verify CRUD events                     |
| 09  | Test Class           | ⬜ Add item → Verify FakeXrmEasy test structure      |
| 10  | Ui Test Class        | ⬜ Add item → Verify EasyRepro structure             |
| 11  | Resource String      | ⬜ Add item → Verify .resx file                      |
| 12  | JavaScript devkit.js | ⬜ Add item → Verify devkit.js + devkit.d.ts         |
| 13  | Bat File             | ⬜ Add item → Verify CLI .bat scripts                |
| 14  | TypeScript Form      | ⬜ Add item → Verify .form.ts                        |
| 15  | TypeScript WebApi    | ⬜ Add item → Verify .webapi.ts                      |


### 1.5 VSIX Commands (Right-click Context Menu)

- ⬜ **Add Crm Plugin Registration** - Right-click on Plugin class → Register
- ⬜ **Update Crm Plugin Registration** - Right-click on existing Plugin → Update
- ⬜ **Deploy WebResource** - Right-click on .js/.css/.html → Deploy
- ⬜ **Deploy WebResource (Debug)** - Deploy with debug mode
- ⬜ **Deploy New WebResource** - Right-click → Deploy as new web resource
- ⬜ **Deploy TypeScript Release** - Right-click on .ts → Build + Deploy
- ⬜ **Deploy New TypeScript Release** - Deploy as new TypeScript web resource

### 1.6 T4 Template Customization

- ✅ **Plugin.tt** - Customize → Add item → Verify generated code uses custom template
- ⬜ **CustomAction.tt** - Customize → Verify generated code
- ⬜ **CustomApi.tt** - Customize → Verify generated code
- ⬜ **Workflow.tt** - Customize → Verify generated code
- ⬜ **DataProvider.tt** - Customize → Verify generated code
- ⬜ **Test.tt** - Customize → Verify generated code
- ⬜ **UiTest.tt** - Customize → Verify generated code
- ⬜ **Context properties** - Verify `<#= Context.EntityLogicalName #>`, `<#= Context.ClassWithOrder #>`, etc.

---

## Section 2: CLI (Command-Line Interface)

### 2.1 Installation & Version

- ✅ Install CLI: `dotnet tool install -g DynamicsCrm.DevKit.Cli --version 4.99.99.99`
- ✅ Verify: `devkit --version` shows correct version and build date
- ✅ Verify: `devkit --help` shows all commands

### 2.2 Server Command (Plugin/Workflow/CustomAction/CustomApi/DataProvider)

#### 2.2.1 Legacy exe mode (`DynamicsCrm.DevKit.Cli.exe /conn:... /type:... /profile:...`)

- ⬜ Deploy Server (Plugin) - Profile `07-DEVKITV4.Server`
- ⬜ Deploy Server OnlyUpdateAssembly - Profile `08-DEVKITV4.Server.OnlyUpdateAssembly`
- ⬜ Deploy Package - Profile `09-DEVKITV4.Server.Package`
- ⬜ Deploy Package OnlyUpdateAssembly - Profile `10-DEVKITV4.Server.Package.OnlyUpdateAssembly`

#### 2.2.2 Migration mode (`devkit /conn:... /type:... /profile:...`)

- ⬜ Deploy Server (Plugin) - Same args as legacy, but `devkit` exe
- ⬜ Deploy Server OnlyUpdateAssembly
- ⬜ Deploy Package
- ⬜ Deploy Package OnlyUpdateAssembly

#### 2.2.3 Dotnet tool mode (`devkit server --conn ... --profile ...`)

- ⬜ Deploy Server (Plugin) - Profile `07-DEVKITV4.Server`
- ⬜ Deploy Server OnlyUpdateAssembly - Profile `08-DEVKITV4.Server.OnlyUpdateAssembly`
- ✅ Deploy Package
- ✅ Deploy Package OnlyUpdateAssembly
- ⬜ Deploy Server ManagedIdentity - Profile `11-DEVKITV4.Server.ManagedIdentity`
- ⬜ Deploy Server MI OnlyUpdateAssembly - Profile `12-DEVKITV4.Server.ManagedIdentity.OnlyUpdateAssembly`
- ⬜ Deploy Package ManagedIdentity - Profile `13-DEVKITV4.Package.ManagedIdentity`
- ⬜ Deploy Package MI OnlyUpdateAssembly - Profile `14-DEVKITV4.Package.ManagedIdentity.OnlyUpdateAssembly`
- ✅ Deploy DataSource

### 2.3 Generator Command

#### 2.3.1 Legacy exe mode

- ⬜ Generate JS Form
- ⬜ Generate JS WebApi

#### 2.3.2 Migration mode

- ⬜ Generate JS Form
- ⬜ Generate JS WebApi

#### 2.3.3 Dotnet tool mode

- ⬜ Generate JS Form - Profile `02-TestClientCode-JS-FORM`
- ⬜ Generate JS WebApi - Profile `03-TestClientCode-JS-WEBAPI`
- ⬜ Generate TS Form - Profile `04-TestClientCode-TS-FORM`
- ⬜ Generate TS WebApi - Profile `05-TestClientCode-TS-WEBAPI`

### 2.4 WebResource Command

#### 2.4.1 Legacy exe mode

- ⬜ Deploy JavaScript web resources

#### 2.4.2 Migration mode

- ⬜ Deploy JavaScript web resources

#### 2.4.3 Dotnet tool mode

- ⬜ Deploy JavaScript web resources - Profile `15.TestWebResource-JS`

### 2.5 Solution Packager Command

#### 2.5.1 Legacy exe mode (`legacy-solution`)

- ⬜ Extract solution
- ⬜ Pack solution

#### 2.5.2 Migration mode

- ⬜ Extract solution
- ⬜ Pack solution

#### 2.5.3 Dotnet tool mode (`solution` - PAC)

- ⬜ Extract solution - Profile `18.TestSolutionPackager-Extract`
- ⬜ Pack solution - Profile `19.TestSolutionPackager-Pack`

### 2.6 Report Commands

#### 2.6.1 Legacy exe mode

- ⬜ Download reports
- ⬜ Upload reports

#### 2.6.2 Migration mode

- ⬜ Download reports
- ⬜ Upload reports

#### 2.6.3 Dotnet tool mode

- ⬜ Download reports - Profile `20.TestReports-Download`
- ⬜ Upload reports - Profile `21.TestReports-Upload`

### 2.7 Download WebResource Command

#### 2.7.1 Legacy exe mode

- ⬜ Download web resources

#### 2.7.2 Migration mode

- ⬜ Download web resources

#### 2.7.3 Dotnet tool mode

- ⬜ Download web resources - Profile `22.DownloadWebResources`

### 2.8 ProxyType / ModelBuilder Command

#### 2.8.1 Legacy exe mode (`proxytype`)

- ⬜ Generate proxy types via CrmSvcUtil

#### 2.8.2 Migration mode

- ⬜ Generate proxy types via CrmSvcUtil

#### 2.8.3 Dotnet tool mode (`modelbuilder`)

- ⬜ Generate early-bound via PAC ModelBuilder

### 2.9 DataSource Command

- ⬜ Create data source entities - Profile `23-DEVKITV4.DataSource`

### 2.10 Connection Types (via CLI)

- ⬜ **Interactive** - Profile `24-DEVKITV4.Interactive`
- ⬜ **DeviceCode** - Profile `25-DEVKITV4.DeviceCode`
- ⬜ **ClientCertificate** - Profile `26-DEVKITV4.ClientCertificate`
- ⬜ **ManagedIdentity** - Profile `27-DEVKITV4.ManagedIdentity`
- ⬜ **DefaultAzureCredential** - Profile `28-DEVKITV4.DefaultAzureCredential`
- ⬜ **ClientSecret (PlainText)** - Profile `29-DEVKITV4.ClientSecret.PlainText`
- ⬜ **ClientSecret (Encrypted)** - Profile `30-DEVKITV4.ClientSecret.Encrypted`
- ⬜ **OAuth** - Profile `31-DEVKITV4.OAuth`
- ⬜ **AD** - Profile `32-DEVKITV4.AD`
- ⬜ **FromPac (Default)** - Profile `33-DEVKITV4.FromPac`
- ⬜ **FromPac (Named Profile)** - Profile `34-DEVKITV4.FromPac.NamedProfile`
- ⬜ **FromPac (Index)** - Profile `35-DEVKITV4.FromPac.Index`

### 2.11 MCP Server

- ⬜ Start MCP server: `devkit mcp --conn "..."`
- ⬜ Test `ListTablesTool` - List Dataverse tables
- ⬜ Test `GetEntityMetadataTool` - Get entity metadata
- ⬜ Test `GetEntityMessagesTool` - Get SDK messages for entity
- ⬜ Test `GetGlobalOptionSetTool` - Get global option sets
- ⬜ Test `GetEnvironmentInfoTool` - Get environment info
- ⬜ Test `ExecuteFetchXmlTool` - Execute FetchXML query

### 2.12 Deprecated Commands (Backward Compatibility)

- ⬜ `devkit plugin` → redirects to `devkit server`
- ⬜ `devkit workflow` → redirects to `devkit server`
- ⬜ `devkit dataprovider` → redirects to `devkit server`
- ⬜ `devkit proxytype` → still works (deprecated)
- ⬜ `devkit legacy-solution` → still works (deprecated)

---

## Section 3: Analyzers (Roslyn)

### 3.1 Installation

- ⬜ Install NuGet: `DynamicsCrm.DevKit.Analyzers` version `4.99.99.99`
- ⬜ Verify analyzers appear in VS Error List
- ⬜ Verify `.editorconfig` severity settings are respected

### 3.2 Analyzer Tests (21 analyzers)


| ID         | Analyzer                                        | Severity      | Status                                             |
| ---------- | ----------------------------------------------- | ------------- | -------------------------------------------------- |
| DEVKIT1001 | Update message should have filtering attributes | Warning/Error | ⬜ Create → Warning; Update → Error                 |
| DEVKIT1002 | Don't use ColumnSet(true)                       | Warning       | ⬜ `new ColumnSet(true)` → Warning squiggle         |
| DEVKIT1003 | Plugin image errors                             | Error         | ⬜ Pre Create with PreImage → Error                 |
| DEVKIT1004 | Deprecated SDK requests                         | Info          | ⬜ Use deprecated request → Info                    |
| DEVKIT1005 | Entity Reference maybe null                     | Warning       | ⬜ EntityReference without null check → Warning     |
| DEVKIT1006 | Batch request in plugin                         | Warning       | ⬜ ExecuteMultipleRequest → Warning                 |
| DEVKIT1007 | Stateless plugin (instance fields)              | Error         | ⬜ Assign instance field in Execute → Error         |
| DEVKIT1008 | Parallel execution in plugin                    | Error         | ⬜ Parallel.ForEach → Error                         |
| DEVKIT1009 | Set KeepAlive to false                          | Warning       | ⬜ HttpWebRequest without KeepAlive=false → Warning |
| DEVKIT1010 | Set HTTP Timeout                                | Warning       | ⬜ HttpClient without Timeout → Warning             |
| DEVKIT1011 | Use InvalidPluginExecutionException             | Warning       | ⬜ Throw generic Exception → Warning                |
| DEVKIT1012 | Use ITracingService                             | Info          | ⬜ Plugin without ITracingService → Info            |
| DEVKIT1013 | Avoid Retrieve/RetrieveMultiple plugins         | Info          | ⬜ Register on RetrieveMultiple → Info              |
| DEVKIT1014 | Avoid AppDomain events                          | Error         | ⬜ AppDomain.CurrentDomain event → Error            |
| DEVKIT1015 | Avoid GetAwaiter().GetResult()                  | Info          | ⬜ .GetAwaiter().GetResult() → Info                 |
| DEVKIT1016 | Avoid RetrieveAsIfPublished                     | Info          | ⬜ RetrieveAsIfPublished = true → Info              |
| DEVKIT1017 | Avoid Console output                            | Info          | ⬜ Console.WriteLine → Info                         |
| DEVKIT1018 | Avoid File I/O                                  | Error         | ⬜ File.ReadAllText → Error                         |
| DEVKIT1019 | Check plugin Depth                              | Warning       | ⬜ Plugin without Depth check → Warning             |
| DEVKIT1020 | DataProvider must have DataSource               | Error         | ⬜ DataProvider without DataSource → Error          |
| DEVKIT1021 | Use ITracingService in catch                    | Warning       | ⬜ Catch block without tracing → Warning            |


### 3.3 Integration Test Files

- ⬜ All 21 files exist: `DEVKIT1001.cs` → `DEVKIT1021.cs` in `TestAnalyzers/`
- ⬜ Open `TestAnalyzers` project in VS → Verify squiggles appear correctly
- ⬜ Verify severity levels match (Error = red, Warning = yellow/green, Info = blue)

### 3.4 Unit Tests

- ⬜ Run: `dotnet test` on `DynamicsCrm.DevKit.UnitTests` (net48 target)
- ⬜ All analyzer unit tests pass (781 tests)

---

## Section 4: Tool (devkit-tool)

### 4.1 Installation & Version

- ⬜ Install Tool: `dotnet tool install -g DynamicsCrm.DevKit.Tool --version 4.99.99.99`
- ⬜ Verify: `devkit-tool --version` shows correct version
- ⬜ Verify: `devkit-tool --help` shows all 6 commands

### 4.2 NUglify Command

- ⬜ Minify JavaScript: `devkit-tool nuglify --source input.js --destination output.min.js`
- ⬜ Minify CSS: `devkit-tool nuglify --source input.css --destination output.min.css`
- ⬜ Verify output is minified and valid

### 4.3 Document Generator Command

- ⬜ Generate entity docs: `devkit-tool documentgenerator --conn "..." --folder ./output --solution devkitv4`
- ⬜ Verify markdown files generated per entity
- ⬜ Verify sections: Settings, Columns, ERD, Relationships, Forms, Views, Business Rules, Server-side Code

### 4.4 Document Code Generator Command

- ⬜ Generate code docs: `devkit-tool documentcodegenerator --folder ./dlls --output ./docs`
- ⬜ With DevOps: `--devops GitHub --org myorg`
- ⬜ Verify markdown output with class/method documentation

### 4.5 Decrypt Command

- ⬜ Decrypt password: `devkit-tool decrypt --password "encrypted_string"`
- ⬜ Verify decrypted output matches original

### 4.6 Coverage To XML Command

- ⬜ Convert coverage: `devkit-tool coveragetoxml --coverage file.coverage --xml output.xml --dlls "a.dll;b.dll"`
- ⬜ Verify XML output is valid

### 4.7 Create Entity Command

- ⬜ Create UserOwned entity: `devkit-tool createentity --conn "..." --solution devkitv4 --entity "My Entity" --type UserOwned`
- ⬜ Create OrganizationOwned entity: `--type OrganizationOwned`
- ⬜ Create Activity entity: `--type Activity`
- ⬜ Create Elastic UserOwned entity: `--type Elastic_UserOwned`
- ⬜ Create Elastic OrganizationOwned entity: `--type Elastic_OrganizationOwned`
- ⬜ Verify entity created in Dataverse with correct forms (Main, Quick View, Card)

---

## Final Summary


| Section          | Total | ✅ Passed | ❌ Failed | ⏭️ Skipped | Status |
| ---------------- | ----- | -------- | -------- | ---------- | ------ |
| **1. VSIX**      | ___   | ___      | ___      | ___        | ⬜      |
| **2. CLI**       | ___   | ___      | ___      | ___        | ⬜      |
| **3. Analyzers** | ___   | ___      | ___      | ___        | ⬜      |
| **4. Tool**      | ___   | ___      | ___      | ___        | ⬜      |
| **TOTAL**        | ___   | ___      | ___      | ___        | ⬜      |


**Release Decision**: ⬜ APPROVED / ⬜ BLOCKED

**Approved By**: _______________
**Date**: _______________

---

## Notes

> Write any additional notes, observations, or issues found during testing here.

