```text
  ____                              _           ____                  ____             _  ___ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__|
        |___/ https://github.com/phuocle/Dynamics-Crm-DevKit x.xx.xx.xx Build: xxxx.yy.zz HH.mm.ss
```
# DynamicsCrm.DevKit

A comprehensive development toolkit for **Microsoft Dynamics 365 / Power Platform / Dataverse** that accelerates CRM development with Visual Studio extensions, CLI tools, and Roslyn analyzers.

[![Visual Studio Marketplace](https://img.shields.io/visual-studio-marketplace/v/phuocle.DynamicsCrmDevKit?label=VS%20Marketplace&logo=visualstudio)](https://marketplace.visualstudio.com/items?itemName=phuocle.DynamicsCrmDevKit)
[![NuGet](https://img.shields.io/nuget/v/DynamicsCrm.DevKit.Cli?logo=nuget&label=CLI)](https://www.nuget.org/packages/DynamicsCrm.DevKit.Cli)
[![NuGet](https://img.shields.io/nuget/v/DynamicsCrm.DevKit.Analyzers?logo=nuget&label=Analyzers)](https://www.nuget.org/packages/DynamicsCrm.DevKit.Analyzers)

---

## 🚀 Features

### Visual Studio Extension (VSIX)

- **13 Project Templates**: Shared, Console, ConsoleCore, Server (Plugin/Workflow/CustomAction/DataProvider), Package, WebResource (JS), SharedTest, ProxyTypes, Test, TestUi, SolutionPackager, Report, WebResource (TS)
- **17 Item Templates**: LateBound, JsForm, JsWebApi, Plugin, CustomAction, CustomApi, Workflow, DataProvider, Test, UiTest, ResourceString, JsDevkit, BatFile, TsForm, TsWebApi, TsDialog, JsDialog
- **Integrated Wizards**: Step-by-step project and item creation with Dataverse connection

### CLI Tool (`devkit`)

A .NET global tool for CI/CD automation with **15 commands**:

| Command | Status | Description |
|---------|--------|-------------|
| `devkit generator` | ✅ Active | Generate TypeScript/JavaScript form and WebApi code |
| `devkit server` | ✅ Active | Deploy plugins, workflows, dataproviders (auto-detect) |
| `devkit plugin` | ⚠️ Deprecated | Use `devkit server` instead |
| `devkit workflow` | ⚠️ Deprecated | Use `devkit server` instead |
| `devkit dataprovider` | ⚠️ Deprecated | Use `devkit server` instead |
| `devkit webresource` | ✅ Active | Deploy web resources (JS/TS/HTML/CSS/images) |
| `devkit modelbuilder` | ✅ Active | Generate early-bound entity classes using PAC ModelBuilder |
| `devkit proxytype` | ⚠️ Deprecated | Use `devkit modelbuilder` instead |
| `devkit solution` | ✅ Active | Extract or pack solutions using PAC CLI |
| `devkit legacy-solution` | ⚠️ Deprecated | Auto-redirects to `devkit solution` |
| `devkit downloadreport` | ✅ Active | Download reports from Dataverse |
| `devkit uploadreport` | ✅ Active | Upload reports to Dataverse |
| `devkit downloadwebresource` | ✅ Active | Download web resources from a solution |
| `devkit datasource` | ✅ Active | Create virtual table data sources |
| `devkit mcp` | ✅ Active | Start MCP server for AI agent integration |

### Authentication Methods

| Auth Type | Description | MFA | Use Case |
|-----------|-------------|:---:|----------|
| `Interactive` | Browser-based OAuth login | ✅ | Development, debugging |
| `DeviceCode` | Device code flow | ✅ | Headless/SSH environments |
| `ClientSecret` | Service Principal with secret | ➖ | CI/CD pipelines |
| `FromPac` | PAC CLI cached tokens | ✅ | Use existing PAC auth |
| `OAuth` | Username/Password (Legacy) | ❌ | Legacy support |
| `AD` | Active Directory | ➖ | On-premises only |

### Roslyn Analyzers (21 Rules)

Static code analysis for Dataverse development best practices:

| Rule ID | Severity | Description |
|---------|:--------:|-------------|
| DEVKIT1001 | ❌ Error | Create/Update message should have filtering attributes |
| DEVKIT1002 | ⚠️ Warning | Don't use `ColumnSet(true)` |
| DEVKIT1003 | ❌ Error | Plugin image validation |
| DEVKIT1004 | ℹ️ Info | Use of deprecated SDK messages |
| DEVKIT1005 | ⚠️ Warning | EntityReference maybe null |
| DEVKIT1006 | ⚠️ Warning | Avoid batch requests in plugins |
| DEVKIT1007 | ❌ Error | IPlugin implementations should be stateless |
| DEVKIT1008 | ❌ Error | Avoid parallel execution in plugins |
| DEVKIT1009 | ⚠️ Warning | Set KeepAlive to false for HTTP calls |
| DEVKIT1010 | ⚠️ Warning | Set Timeout for HTTP calls |
| DEVKIT1011 | ⚠️ Warning | Use InvalidPluginExecutionException |
| DEVKIT1012 | ℹ️ Info | Use ITracingService in plugins |
| DEVKIT1013 | ℹ️ Info | Avoid Retrieve/RetrieveMultiple plugins |
| DEVKIT1014 | ❌ Error | Avoid AppDomain events in plugins |
| DEVKIT1015 | ℹ️ Info | Avoid blocking async patterns |
| DEVKIT1016 | ℹ️ Info | Avoid RetrieveAsIfPublished |
| DEVKIT1017 | ℹ️ Info | Avoid Console output in plugins |
| DEVKIT1018 | ❌ Error | Avoid File/IO operations in plugins |
| DEVKIT1019 | ⚠️ Warning | Check context.Depth for infinite loops |
| DEVKIT1020 | ❌ Error | DataProvider must have DataSource |
| DEVKIT1021 | ⚠️ Warning | Use ITracingService in catch blocks |

📚 [Full Analyzer Documentation](DynamicsCrm.DevKit.Analyzers/README.md)

### MCP Server (AI Agent Integration)

The `devkit mcp` command starts a Model Context Protocol server, enabling AI agents (GitHub Copilot, Cursor, Claude, etc.) to interact with Dataverse directly.

#### MCP Tools (34)

**Schema & Metadata**
| Tool | Description |
|------|-------------|
| `whoami` | Get current user identity, roles, and environment info |
| `get_tables` | Inspect table metadata, columns, and relationships |
| `get_messages` | List SDK messages and custom actions |
| `get_solution_components` | List all components inside a solution |

**Data Operations**
| Tool | Description |
|------|-------------|
| `manage_record` | CRUD on a single Dataverse record |
| `execute_fetchxml` | Run a FetchXML query with auto-paging |
| `search_records` | Dataverse Relevance Search by keyword |
| `execute_webapi` | Execute a raw Web API request |
| `manage_choice` | Manage global option sets (choices) |
| `manage_environment_variable` | Manage environment variables |

**Forms, Views & SiteMaps**
| Tool | Description |
|------|-------------|
| `manage_form` | Manage entity forms |
| `build_form_xml` | Build FormXML with fields, sections, tabs, and events |
| `manage_view` | Manage entity views |
| `manage_sitemap` | Manage app site map |
| `build_sitemap_xml` | Build SiteMap XML with areas, groups, and subareas |
| `build_ribbon_xml` | Build RibbonDiffXml for entity ribbon customizations |

**Schema Management**
| Tool | Description |
|------|-------------|
| `upsert_table` | Create or update a Dataverse table |
| `upsert_column` | Create or update a table column |
| `upsert_relationship` | Create, update, or delete relationships |

**Server-Side Logic**
| Tool | Description |
|------|-------------|
| `get_plugins` | List plugin registrations and steps |
| `get_plugin_trace_logs` | List and inspect plugin trace logs |
| `get_workflows` | List classic workflows |
| `get_flows` | List Power Automate cloud flows and run history |
| `get_business_rules` | List business rules for an entity |
| `get_business_process_flows` | List business process flows and stages |
| `get_custom_apis` | List custom API definitions |
| `get_system_jobs` | List and inspect system jobs |

**Security & Utilities**
| Tool | Description |
|------|-------------|
| `manage_role` | Manage security roles |
| `manage_webresource` | Manage web resources |
| `manage_command` | Manage modern command bar buttons in model-driven apps |
| `manage_ribbon` | Manage classic ribbon (RibbonDiffXml) for entities |
| `get_audit_history` | Get record audit history |
| `parse_record_url` | Parse a Dynamics 365 URL to entity and record ID |
| `publish_customizations` | Publish customizations to make changes visible |

#### MCP Resources (9)

| URI | Description |
|-----|-------------|
| `schema://formxml` | FormXml.xsd |
| `schema://layoutxml` | LayoutXml.xsd |
| `schema://fetchxml` | Fetch.xsd |
| `schema://sitemapxml` | SiteMap.xsd + rules |
| `docs://instructions_for_formxml` | FormXML manipulation rules |
| `docs://instructions_for_views` | View/LayoutXML manipulation rules |
| `docs://schema_tools_guide` | Schema tools guide |
| `docs://data_operations_guide` | Data operations guide |
| `docs://server_logic_guide` | Server logic guide |

📚 [MCP Server Documentation](DynamicsCrm.DevKit.Cli/README.md#mcp-server-model-context-protocol)

### Client-Side Libraries

- **devkit.js / devkit.d.ts**: JavaScript runtime with full TypeScript definitions
- **devkit.ts**: TypeScript runtime for form scripts
- **build.js**: esbuild configuration for TypeScript projects

---

## 📦 Installation

### VSIX Extension

1. Download from [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=phuocle.DynamicsCrmDevKit)
2. Or build from source (see [Building](#-building))

### CLI Tool

```powershell
# Install globally
dotnet tool install -g DynamicsCrm.DevKit.Cli

# Verify installation
devkit --version
```

### Analyzers Package

```powershell
# Via dotnet CLI
dotnet add package DynamicsCrm.DevKit.Analyzers
```

Or add to your `.csproj`:

```xml
<PackageReference Include="DynamicsCrm.DevKit.Analyzers" Version="*" PrivateAssets="all" />
```

---

## 🔧 Configuration

Create `DynamicsCrm.DevKit.Cli.json` in your project root:

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
  "webresources": [...],
  "servers": [...]
}
```

---

## 🏗️ Building

### Prerequisites

- Visual Studio 2026 with VSIX workload
- .NET Framework 4.6.2, 4.8, and .NET Standard 2.0 SDKs
- .NET 10.0 SDK (for CLI)
- MSBuild (via Visual Studio)

### Build Commands

```powershell
# Release build dynamically injected with the current timestamp
.\DynamicsCrm.DevKit.Scripts\Release-DynamicsCrm-DevKit-CurrentDate.ps1

# Or manual build with MSBuild
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
& $msbuild "DynamicsCrm.DevKit.AllInOne.slnx" /t:Build /p:Configuration=Release /v:m
```

---

## 📁 Project Structure

```
v5/
├── DynamicsCrm.DevKit/              # VSIX Extension (VS2026)
│   ├── Wizard/                      # Project/Item wizards
│   ├── Commands/                    # VS commands
│   └── Lib/                         # Core libraries
├── DynamicsCrm.DevKit.Cli/          # CLI Tool (.NET 10.0)
│   ├── Commands/                    # Spectre.Console commands
│   └── Tasks/                       # Task implementations
├── DynamicsCrm.DevKit.Analyzers/    # Roslyn Analyzers (netstandard2.0)
│   └── CrmAnalyzers/                # 21 analyzer rules
├── DynamicsCrm.DevKit.Shared/       # Common Logic
│   ├── Resources/                   # JS/TS templates
│   ├── Models/                      # JSON configuration models
│   └── XrmHelper.cs                 # Dataverse operations
├── DynamicsCrm.DevKit.Tool/         # Utility package
├── ProjectTemplates/                # 13 VS project templates
├── ItemTemplates/                   # 17 VS item templates
├── DynamicsCrm.DevKit.Tests/        # Integration tests
├── DynamicsCrm.DevKit.UnitTests/    # Unit tests (analyzers, CLI, shared lib)
│   ├── Analyzers/                   # Analyzer unit tests (net48, xUnit)
│   ├── Cli/                         # CLI unit tests (net10.0, MSTest)
│   └── Lib/                         # Shared lib tests
├── DynamicsCrm.DevKit.Docs/         # Documentation
└── DynamicsCrm.DevKit.Scripts/      # Build & release scripts
```

---

## 🧪 Testing

### Unit Tests (Analyzers + CLI)

```powershell
cd DynamicsCrm.DevKit.UnitTests
dotnet test
```

### Integration Tests

```powershell
cd DynamicsCrm.DevKit.Tests
dotnet test
```

---

## 📝 License

MIT License - See [LICENSE](LICENSE) for details.

---

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guidelines](CONTRIBUTING.md) before submitting PRs.

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
