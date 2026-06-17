```text
  ____                              _           ____                  ____             _  ___ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__|
        |___/ https://github.com/phuocle/Dynamics-Crm-DevKit 4.12.34.56 Build: xxxx.yy.zz HH.mm.ss
```
# DynamicsCrm.DevKit

A comprehensive development toolkit for **Microsoft Dynamics 365 / Power Platform / Dataverse** that accelerates CRM development with Visual Studio extensions, CLI tools, companion utilities, and Roslyn analyzers.

[![Visual Studio Marketplace](https://img.shields.io/visual-studio-marketplace/v/phuocle.DynamicsCrmDevKit?label=VS%20Marketplace&logo=visualstudio)](https://marketplace.visualstudio.com/items?itemName=phuocle.DynamicsCrmDevKit)
[![NuGet](https://img.shields.io/nuget/v/DynamicsCrm.DevKit.Cli?logo=nuget&label=CLI)](https://www.nuget.org/packages/DynamicsCrm.DevKit.Cli)
[![NuGet](https://img.shields.io/nuget/v/DynamicsCrm.DevKit.Analyzers?logo=nuget&label=Analyzers)](https://www.nuget.org/packages/DynamicsCrm.DevKit.Analyzers)

---

## 🚀 Features

### Visual Studio Extension (VSIX)

- **13 Project Templates**: Shared, Console, ConsoleCore, Server (Plugin/Workflow/CustomAction/DataProvider), Package, WebResource (JS), SharedTest, ProxyTypes, Test, TestUi, SolutionPackager, Report, WebResource (TS)
- **16 Item Templates**: LateBound, JsForm, JsWebApi, Plugin, CustomAction, CustomApi, Workflow, DataProvider, Test, UiTest, ResourceString, BatFile, TsForm, TsWebApi, TsDialog, JsDialog
- **Integrated Wizards**: Step-by-step project and item creation with Dataverse connection UI
- **Submenu Context Commands (5)**: Deploy WebResource, Deploy New WebResource, Add CrmPluginRegistration (in Code Editor), Deploy TypeScript (Release), Deploy New TypeScript (Release)

### CLI Tool (`devkit`)

A .NET 10.0 global tool for CI/CD automation and development integration with **15 commands**:

| Command | Status | Description |
|---------|--------|-------------|
| `devkit generator` | ✅ Active | Generate TypeScript/JavaScript form and WebApi code |
| `devkit server` | ✅ Active | Deploy plugins, custom actions, custom APIs, workflows, and dataproviders (auto-detect) |
| `devkit plugin` | ⚠️ Deprecated | Hidden command - redirects to `devkit server` |
| `devkit workflow` | ⚠️ Deprecated | Hidden command - redirects to `devkit server` |
| `devkit dataprovider` | ⚠️ Deprecated | Hidden command - redirects to `devkit server` |
| `devkit webresource` | ✅ Active | Deploy web resources (JS/TS/HTML/CSS/images) |
| `devkit modelbuilder` | ✅ Active | Generate early-bound entity classes using PAC ModelBuilder |
| `devkit proxytype` | ⚠️ Deprecated | Hidden command - redirects to `devkit modelbuilder` |
| `devkit solution` | ✅ Active | Extract or pack solutions using PAC CLI |
| `devkit legacy-solution` | ⚠️ Deprecated | Hidden command - redirects to `devkit solution` |
| `devkit downloadreport` | ✅ Active | Download reports from Dataverse |
| `devkit uploadreport` | ✅ Active | Upload reports to Dataverse |
| `devkit downloadwebresource` | ✅ Active | Download web resources from a solution |
| `devkit datasource` | ✅ Active | Create virtual table data sources |
| `devkit mcp` | ✅ Active | Start MCP server for AI agent integration (GitHub Copilot, Cursor, Windsurf, Claude Desktop, etc.) |

### Companion Tool (`devkit-tool`)

A secondary .NET 10.0 utility package supporting specialized utility workflows:

| Command | Description |
|---------|-------------|
| `devkit-tool documentgenerator` | Generate Dataverse entity markdown documentation |
| `devkit-tool documentcodegenerator` | Generate server-side code documentation from compiled assemblies |
| `devkit-tool coveragetoxml` | Convert Visual Studio `.coverage` files to standard XML format |
| `devkit-tool nuglify` | Minify HTML, CSS, and JavaScript files |
| `devkit-tool decrypt` | Decrypt encrypted password strings |
| `devkit-tool createentity` | Create Dataverse entity with pre-configured forms |
| `devkit-tool solutionlayer` | Check unmanaged active solution layers |

### Authentication Methods

Full auth pipeline supported by the `devkit` CLI and MCP command layers:

| Auth Type | Description | MFA | Use Case |
|-----------|-------------|:---:|----------|
| `Interactive` | Browser-based OAuth login | ✅ | Development, local debugging |
| `DeviceCode` | Device code flow | ✅ | Headless, containerized, or SSH environments |
| `ClientSecret` | Service Principal (ClientId + ClientSecret) | ➖ | CI/CD pipelines and automated scripts |
| `FromPac` | PAC CLI cached token retrieval | ✅ | Uses existing PAC CLI auth profile |
| `OAuth` | Username/Password (Legacy OAuth flow) | ❌ | Dev/test environments without MFA |
| `AD` | Active Directory (On-premises) | ➖ | On-premises / local Active Directory configurations |

### Roslyn Analyzers (21 Rules)

Static code analysis enforcing Power Platform / Dataverse development best practices:

| Rule ID | Severity | Title | Description |
|---------|:--------:|-------|-------------|
| DEVKIT1001 | ❌ Error / ⚠️ Warning | Filtering attributes for Create/Update messages | Create/Update/CreateMultiple/UpdateMultiple/OnExternalCreated/OnExternalUpdated messages must have filtering attributes. Update is Error, Create is Warning. Flags wildcards (`*`). |
| DEVKIT1002 | ⚠️ Warning | Should not use ColumnSet(true) | Avoid retrieving all columns. Explicitly declare required attributes to optimize performance. |
| DEVKIT1003 | ❌ Error | Plugin Image validation | Pre/Post images are validated against compatibility with message stage (e.g. Pre-create cannot have Pre/Post Image). |
| DEVKIT1004 | ℹ️ Info | Use the deprecated message | Flags execution of deprecated SDK request messages. |
| DEVKIT1005 | ⚠️ Warning | Entity Reference maybe null | Safely check target attributes and cast entities to avoid null reference exceptions. |
| DEVKIT1006 | ⚠️ Warning | Don't use batch request types in plugins | Batch request types (`ExecuteMultipleRequest`, `ExecuteTransactionRequest`, etc.) should not be executed inside sandboxed plugins. |
| DEVKIT1007 | ❌ Error | IPlugin implementations should be stateless | Avoid using instance fields/properties in plugin classes to prevent multi-threading concurrency issues. |
| DEVKIT1008 | ❌ Error | Don't use parallel execution in plugins | Multi-threading (`Task.Run`, `Parallel.ForEach`, `Thread`) is restricted or unsupported in sandbox. |
| DEVKIT1009 | ⚠️ Warning | Set KeepAlive to false for external HTTP calls | Configure HTTP client headers (`ConnectionClose = true` or `KeepAlive = false`) to prevent connection leaks. |
| DEVKIT1010 | ⚠️ Warning | Set Timeout for external HTTP calls | Set explicit HTTP timeouts to prevent long execution blocking that triggers platform execution limits. |
| DEVKIT1011 | ⚠️ Warning | Use InvalidPluginExecutionException | Throw `InvalidPluginExecutionException` to display clean user-facing error messages instead of generic crashes. |
| DEVKIT1012 | ℹ️ Info | Consider using ITracingService | Log diagnostics via `ITracingService` to facilitate monitoring and debug logs. |
| DEVKIT1013 | ℹ️ Info | Avoid plugins on Retrieve/RetrieveMultiple | These messages execute extremely frequently; plug-ins on them negatively impact platform performance. |
| DEVKIT1014 | ❌ Error | Avoid AppDomain event registration in plugins | Registering events in AppDomain causes memory leaks because plugin types are cached and reused. |
| DEVKIT1015 | ℹ️ Info | Avoid blocking async patterns in plugins | Avoid `.Result`, `.Wait()`, or `.GetAwaiter().GetResult()` which can deadlock the execution thread. |
| DEVKIT1016 | ℹ️ Info | Avoid retrieving unpublished metadata | Setting `RetrieveAsIfPublished = true` should be avoided in runtime transactions to improve performance. |
| DEVKIT1017 | ℹ️ Info | Avoid Console output in plugins | `Console.Write` has no effect in the sandbox environment; use `ITracingService` instead. |
| DEVKIT1018 | ❌ Error | Avoid File/IO operations in plugins | Standard disk file/folder operations are blocked in sandbox and throw `SecurityException` at runtime. |
| DEVKIT1019 | ⚠️ Warning | Consider checking context.Depth | Inspect execution depth to prevent infinite loops from recursive plugin triggers. |
| DEVKIT1020 | ❌ Error | DataProvider must have DataSource | DataProvider plugin registrations must contain a non-empty DataSource parameter. |
| DEVKIT1021 | ⚠️ Warning | Use ITracingService in catch blocks | Exception details must be traced using `ITracingService` inside catch blocks. |

📚 [Full Analyzer Documentation](DynamicsCrm.DevKit.Analyzers/README.md)

### MCP Server (AI Agent Integration)

Starting the MCP server (`devkit mcp`) enables AI Coding Assistants (GitHub Copilot, Cursor, Windsurf, Claude Desktop, etc.) to query and mutate your Dataverse environments directly.

#### Active MCP Tools (32)

**Schema & Metadata**
| Tool | Tier | Description |
|------|:----:|-------------|
| `whoami` | Basic | Get current user identity, organization information, environment IDs, and connection status |
| `get_tables` | Basic | Inspect entity/table metadata, columns, alternate keys, and relationships |
| `get_messages` | Standard | List SDK messages and custom actions configured for a specific entity |
| `get_solution_components` | Standard | List and summarize all components packaged within a solution |

**Data Operations**
| Tool | Tier | Description |
|------|:----:|-------------|
| `manage_record` | Basic | Perform CRUD operations (create, read, update, delete) on a single Dataverse record |
| `create_records` | Basic | Create multiple records in parallel (up to 5,000) for fast data seeding |
| `generate_demo_data` | Basic | Generate realistic mock/demo data for an entity in JSON using Bogus |
| `execute_fetchxml` | Basic | Execute a FetchXML query with support for auto-paging and markdown output |
| `search_records` | Standard | Perform Relevance Search using keywords across entities |
| `execute_webapi` | Advanced | Execute a raw Dataverse Web API request (GET, POST, PATCH, PUT, DELETE) |
| `manage_choice` | Basic | Manage global option sets (choices/picklists) |
| `manage_environment_variable` | Standard | Manage environment variables (list, detail, create, update, delete) |

**Forms, Views & App Navigation**
| Tool | Tier | Description |
|------|:----:|-------------|
| `manage_form` | Standard | Retrieve and modify form layouts, fields, tabs, sections, subgrids, and events |
| `manage_view` | Standard | Retrieve and update entity view queries (savedquery/userquery) and column layouts |
| `manage_app` | Advanced | Create, retrieve, validate, update, or edit navigation structure of model-driven apps |
| `manage_role` | Standard | List, assign, unassign, copy, or manage security roles and privileges |
| `manage_ribbon` | Advanced | List and modify classic RibbonDiffXml command bar customizations |

**Schema Management**
| Tool | Tier | Description |
|------|:----:|-------------|
| `upsert_table` | Advanced | Create or update a Dataverse table (auto-detects table existence) |
| `upsert_column` | Advanced | Create or update table columns of various types (Lookup, Choice, DateTime, Money, etc.) |
| `upsert_relationship` | Advanced | Create, update, or delete entity relationships (1:N, N:N, Polymorphic) |

**Server-Side Logic**
| Tool | Tier | Description |
|------|:----:|-------------|
| `get_plugins` | Standard | List plugin assemblies, registered types, and processing steps |
| `get_plugin_trace_logs` | Standard | List and query plugin trace logs for debugging |
| `get_workflows` | Standard | Query classic workflows (realtime or background) |
| `get_flows` | Standard | List Power Automate cloud flows and retrieve run history |
| `get_business_rules` | Standard | Query business rules and parse conditions/actions from underlying XAML |
| `get_business_process_flows` | Standard | List and query Business Process Flows (BPF) stages and paths |
| `get_custom_apis` | Standard | List Custom API definitions and input/output parameters |
| `get_system_jobs` | Standard | Inspect system job statuses (asyncoperation) |

**Security & Utilities**
| Tool | Tier | Description |
|------|:----:|-------------|
| `get_audit_history` | Standard | Get audit history (old/new values, operations, users) for a record |
| `parse_record_url` | Basic | Parse entity name and GUID from a Dynamics 365 / Power Platform URL |
| `publish_customizations` | Standard | Publish customizations to make metadata modifications live |
| `manage_webresource` | Standard | Create, read, update, or delete web resources in Dataverse |

*Note: The modern command bar management tool `manage_command` is disabled.*

#### MCP Resources (10)

| URI | Description |
|-----|-------------|
| `schema://formxml` | FormXml.xsd schema definition |
| `schema://layoutxml` | LayoutXml.xsd schema definition |
| `schema://fetchxml` | Fetch.xsd schema definition |
| `schema://sitemapxml` | SiteMap.xsd schema + navigation generation rules |
| `docs://instructions_for_manage_app` | Instruction guide for model-driven apps and app navigation |
| `docs://instructions_for_formxml` | Guide on XML manipulation rules for entity forms |
| `docs://instructions_for_views` | XML manipulation rules for layouts and views |
| `docs://schema_tools_guide` | Reference documentation for table and column schema operations |
| `docs://data_operations_guide` | Reference formatting and guidelines for CRUD and FetchXML queries |
| `docs://server_logic_guide` | Guidelines and reference for querying server-side custom code and plugins |

📚 [MCP Server Documentation](DynamicsCrm.DevKit.Cli/README.md#mcp-server-model-context-protocol)

### Client-Side Libraries

- **devkit.js / devkit.d.ts**: JavaScript runtime with full TypeScript definitions
- **devkit.ts**: TypeScript runtime helper for form scripting
- **build.js**: esbuild compilation script for TypeScript projects

---

## 📦 Installation

### VSIX Extension

1. Download from [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=phuocle.DynamicsCrmDevKit)
2. Or build from source (see [Building](#-building))

### CLI Tools

```powershell
# Install the main CLI globally
dotnet tool install -g DynamicsCrm.DevKit.Cli

# Install the companion tool globally
dotnet tool install -g DynamicsCrm.DevKit.Tool

# Verify installations
devkit --version
devkit-tool --version
```

### Analyzers Package

```powershell
# Via dotnet CLI
dotnet add package DynamicsCrm.DevKit.Analyzers
```

Or add to your `.csproj` / Directory.Build.props:

```xml
<PackageReference Include="DynamicsCrm.DevKit.Analyzers" Version="*" PrivateAssets="all" />
```

---

## 🔧 Configuration

Create `DynamicsCrm.DevKit.Cli.json` in your project root to control generation and deployment profiles:

```json
{
  "generators": [
    {
      "profile": "TS-FORM",
      "entities": ["account", "contact"],
      "type": "form"
    }
  ],
  "modelbuilders": [
    {
      "profile": "ALL",
      "namespace": "YourNamespace.ProxyTypes",
      "output": "GeneratedCode.cs",
      "entities": "*"
    }
  ],
  "solutions": [
    {
      "profile": "Extract-Both",
      "solution": "YourSolution",
      "solutiontype": "Both",
      "folder": "Solutions",
      "type": "Extract"
    }
  ],
  "webresources": [],
  "servers": []
}
```

---

## 🏗️ Building

### Prerequisites

- Visual Studio 2022–2026 with VSIX workload installed
- .NET Framework 4.8 and .NET Standard 2.0 SDKs
- .NET 10.0 SDK (for CLI and companion tools)
- MSBuild (via Visual Studio)

### Build Commands

We supply automation scripts to build the toolkit:

```powershell
# Release build dynamically injected with the current timestamp
.\DynamicsCrm.DevKit.Scripts\Release-DynamicsCrm-DevKit-CurrentDate.ps1

# Or manual build using MSBuild
$msbuild = "C:\Program Files\Microsoft Visual Studio\2022\Professional\MSBuild\Current\Bin\MSBuild.exe"
& $msbuild "DynamicsCrm.DevKit.AllInOne.slnx" /t:Build /p:Configuration=Release /v:m
```

---

## 📁 Project Structure

```
v5/
├── DynamicsCrm.DevKit/              # VSIX Extension (VS2026)
│   ├── Wizard/                      # Project/Item templates wizards
│   ├── Commands/                    # VS commands
│   └── Lib/                         # WPF forms and helper libraries
├── DynamicsCrm.DevKit.Cli/          # CLI Tool (.NET 10.0)
│   ├── Commands/                    # Spectre.Console commands
│   └── Tasks/                       # Core tasks (Generator, Server, Webresource, etc.)
├── DynamicsCrm.DevKit.Analyzers/    # Roslyn Analyzers (.NET Standard 2.0)
│   └── CrmAnalyzers/                # 21 analyzer rule classes
├── DynamicsCrm.DevKit.Shared/       # Common Logic (Shared Project)
│   ├── Resources/                   # Scaffolding templates (.js, .ts, .tt, .bat, .xsd)
│   └── XrmHelper.cs                 # XRM metadata/deployment operations
├── DynamicsCrm.DevKit.Tool/         # Companion Utility Package (.NET 10.0)
├── ProjectTemplates/                # 13 Visual Studio project template zip sources
├── ItemTemplates/                   # 16 Visual Studio item template zip sources
├── DynamicsCrm.DevKit.Tests/        # Manual integration test projects (AD, ClientSecret, etc.)
├── DynamicsCrm.DevKit.UnitTests/    # Unit tests (xUnit net48 / MSTest net10.0)
│   ├── Analyzers/                   # Analyzer unit tests (xUnit)
│   ├── Cli/                         # CLI and MCP tool tests (MSTest)
│   └── Lib/                         # Shared library tests
├── DynamicsCrm.DevKit.Docs/         # Documentation
└── DynamicsCrm.DevKit.Scripts/      # Build, packaging, and release scripts
```

---

## 🧪 Testing

### Unit Tests (Analyzers, CLI, & MCP Tools)

```powershell
cd DynamicsCrm.DevKit.UnitTests
dotnet test
```

### Coverage Reports

```powershell
# Run tests and generate local HTML coverage reports
.\DynamicsCrm.DevKit.Scripts\Run-Analyzer-Coverage.ps1
```

---

## 📝 License

MIT License - See [LICENSE](LICENSE) for details.

---

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guidelines](CONTRIBUTING.md) before submitting pull requests.

---

## 📚 Documentation

- [Wiki](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki)
- [Analyzer Documentation](DynamicsCrm.DevKit.Analyzers/README.md)
- [CLI Documentation](DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Cli/)
- [Migration Guide v4 → v5](DynamicsCrm.DevKit.Docs/DynamicsCrm.DevKit.Cli/CLI-Migration-Guide-v4-to-v5.md)

---

## 👤 Author

**Phuoc Le** - Senior Dynamics 365 Architect with 20+ years of experience in Power Platform development.

- GitHub: [@phuocle](https://github.com/phuocle)
- YouTube: [DynamicsCrm.DevKit Channel](https://www.youtube.com/@DynamicsCrmDevKit)

---

*Built with ❤️ for the Dynamics 365 community*
