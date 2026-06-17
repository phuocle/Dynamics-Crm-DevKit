# ⚙️ DynamicsCrm.DevKit CLI

DynamicsCrm.DevKit CLI is the `devkit` .NET global tool for Dataverse deployment automation, code generation, solution packaging, web resource operations, report operations, and MCP hosting for AI-assisted Dataverse work.

[![NuGet](https://img.shields.io/nuget/v/DynamicsCrm.DevKit.Cli?label=NuGet)](https://www.nuget.org/packages/DynamicsCrm.DevKit.Cli)
[![NuGet Downloads](https://img.shields.io/nuget/dt/DynamicsCrm.DevKit.Cli)](https://www.nuget.org/packages/DynamicsCrm.DevKit.Cli)

## ✨ Highlights

- One command-line surface for server deployments, web resources, reports, generated code, modelbuilder output, and solution packaging.
- Modern Spectre.Console CLI with `devkit <command> --option value` syntax and compatibility with legacy `/option:value` arguments.
- Connection support through `--conn`, explicit auth options, PAC profiles, client secrets, SDK login, and `DEVKIT_*` environment variables.
- MCP server built into the CLI, exposing 33 Dataverse tools across `basic`, `standard`, and `advanced` categories.
- Single-file web resource deployment using `--file` and `--webresource`, including TypeScript release output deployment when project build scripts are present.

## 📦 Install

```powershell
dotnet tool install --global DynamicsCrm.DevKit.Cli
```

Update an existing installation:

```powershell
dotnet tool update --global DynamicsCrm.DevKit.Cli
```

## 🧭 Commands

| Command | Status | Purpose |
|---|---|---|
| `generator` | Active | Generate JavaScript, TypeScript, and C# code from Dataverse metadata. |
| `server` | Active | Deploy server assemblies, plugin packages, workflows, custom APIs, custom actions, and data providers. |
| `webresource` | Active | Deploy web resources from JSON profiles or single-file arguments. |
| `modelbuilder` | Active | Generate early-bound classes using PAC ModelBuilder. |
| `solution` | Active | Extract and pack Dataverse solutions using Power Platform CLI. |
| `downloadreport` | Active | Download reports from a Dataverse solution. |
| `uploadreport` | Active | Upload reports to a Dataverse solution. |
| `downloadwebresource` | Active | Download web resources from a Dataverse solution. |
| `datasource` | Active | Create data source entities. |
| `mcp` | Active | Start the MCP server for Dataverse-aware AI agents. |
| `plugin` | Compatibility | Redirects to server deployment behavior for plugin profiles. |
| `workflow` | Compatibility | Redirects to server deployment behavior for workflow profiles. |
| `dataprovider` | Compatibility | Redirects to server deployment behavior for data provider profiles. |
| `proxytype` | Compatibility | Redirects to `modelbuilder`. |
| `legacy-solution` | Compatibility | Redirects to `solution`. |

## 🔐 Authentication

Connection values can be supplied by command-line options or environment variables. Explicit CLI arguments take priority over environment variables.

| Option | Environment variable | Purpose |
|---|---|---|
| `--conn` | `DEVKIT_CONNECTION` | Dataverse connection string. |
| `--auth` | `DEVKIT_AUTH_TYPE` | `Interactive`, `DeviceCode`, `ClientSecret`, `FromPac`, `OAuth`, or `AD`. |
| `--url` | `DEVKIT_URL` | Dataverse environment URL. |
| `--clientid` | `DEVKIT_CLIENT_ID` | Azure AD application client ID. |
| `--clientsecret` | `DEVKIT_CLIENT_SECRET` | Azure AD client secret. |
| `--pacprofile` | `DEVKIT_PAC_PROFILE` | PAC CLI profile name for `FromPac` authentication. |
| `--username` | `DEVKIT_USERNAME` | Username for legacy auth flows. |
| `--password` | `DEVKIT_PASSWORD` | Password for legacy auth flows. |
| `--domain` | `DEVKIT_DOMAIN` | On-premises AD domain. |

## 🚀 Usage

```powershell
devkit server --conn "AuthType=OAuth;..." --json "DynamicsCrm.DevKit.Cli.json" --profile DEBUG
devkit webresource --conn "AuthType=OAuth;..." --file ".\js\account.js" --webresource "new_/js/account.js"
devkit generator --auth FromPac --pacprofile DEV --json "DynamicsCrm.DevKit.Cli.json" --profile Account
devkit modelbuilder --auth FromPac --pacprofile DEV --json "DynamicsCrm.DevKit.Cli.json" --profile ALL
devkit solution --auth FromPac --pacprofile DEV --json "DynamicsCrm.DevKit.Cli.json" --profile Extract-Both
```

## 🤖 MCP Server

The `mcp` command turns `devkit` into a stdio MCP server for AI agents that need to inspect, operate, and safely customize Dataverse environments. The server writes operational logs to `stderr` and reserves `stdout` for the MCP protocol, which is the expected behavior for stdio MCP clients.

```powershell
devkit mcp --auth FromPac --pacprofile DEV --category standard --dry-run
devkit mcp "DynamicsCrm.DevKit" --auth FromPac --pacprofile DEV --category standard --dry-run
```

Use `standard` with `--dry-run` as the default onboarding mode for AI agents. It gives the agent enough read/debugging capability to understand the environment while blocking mutating operations. Move to `advanced` only when the agent is intentionally allowed to change schema, app navigation, command bar, ribbon, or raw Web API behavior.

`FromPac` is supported by the MCP command through `FromPacConnectionBuilder`. It requires an existing PAC CLI auth profile name and does not require `--url`; the environment URL is resolved from `%LOCALAPPDATA%\Microsoft\PowerAppsCLI\authprofiles_v2.json`.

### 🧠 AI Agent Bootstrap

When an AI agent reads this repository and needs to configure MCP, use this sequence:

1. Install or update the CLI with `dotnet tool install --global DynamicsCrm.DevKit.Cli` or `dotnet tool update --global DynamicsCrm.DevKit.Cli`.
2. Choose an auth mode. `FromPac` is the simplest local developer setup when a PAC CLI profile already exists and has an active Dataverse environment; `ClientSecret` is the best unattended setup for a service principal.
3. Add the MCP client entry with `command: "devkit"` and `args: ["mcp", "DynamicsCrm.DevKit", "--category", "standard", "--dry-run"]`.
4. Start the client and call `whoami` first to confirm the connected Dataverse organization.
5. Read MCP resources such as `schema://fetchxml`, `schema://formxml`, `docs://data_operations_guide`, `docs://schema_tools_guide`, `docs://instructions_for_formxml`, `docs://instructions_for_views`, and `docs://instructions_for_manage_app` before editing Dataverse metadata.

Quick checks that do not connect to Dataverse:

```powershell
devkit mcp --setup-guide
devkit mcp --tools
```

### 🔌 MCP Client Config

Most MCP clients use one of these JSON shapes. Keep secrets in environment variables or your MCP client's secret store when possible. The `FromPac` examples intentionally omit `DEVKIT_URL` because MCP resolves the environment URL from the PAC CLI profile.

`mcpServers` style:

```json
{
  "mcpServers": {
    "dynamicscrm-devkit": {
      "command": "devkit",
      "args": ["mcp", "DynamicsCrm.DevKit", "--category", "standard", "--dry-run"],
      "env": {
        "DEVKIT_AUTH_TYPE": "FromPac",
        "DEVKIT_PAC_PROFILE": "DEV"
      }
    }
  }
}
```

`servers` style:

```json
{
  "servers": {
    "dynamicscrm-devkit": {
      "type": "stdio",
      "command": "devkit",
      "args": ["mcp", "DynamicsCrm.DevKit", "--category", "standard", "--dry-run"],
      "env": {
        "DEVKIT_AUTH_TYPE": "FromPac",
        "DEVKIT_PAC_PROFILE": "DEV"
      }
    }
  }
}
```

Service-principal configuration:

```json
{
  "mcpServers": {
    "dynamicscrm-devkit": {
      "command": "devkit",
      "args": ["mcp", "DynamicsCrm.DevKit", "--category", "advanced"],
      "env": {
        "DEVKIT_AUTH_TYPE": "ClientSecret",
        "DEVKIT_URL": "https://org.crm.dynamics.com",
        "DEVKIT_CLIENT_ID": "00000000-0000-0000-0000-000000000000",
        "DEVKIT_CLIENT_SECRET": "client-secret"
      }
    }
  }
}
```

### 🔐 MCP Authentication

MCP uses the same authentication model as the rest of the CLI. Explicit command-line arguments override `DEVKIT_*` environment variables.

| Mode | Required values | Best for |
|---|---|---|
| `FromPac` | `DEVKIT_AUTH_TYPE=FromPac`, `DEVKIT_PAC_PROFILE=DEV`; no `DEVKIT_URL` required | Local AI-assisted development using an existing PAC CLI profile with an active Dataverse environment. |
| `Interactive` | `DEVKIT_AUTH_TYPE=Interactive`, `DEVKIT_URL=https://org.crm.dynamics.com` | One-off local sessions where a browser login is acceptable. |
| `DeviceCode` | `DEVKIT_AUTH_TYPE=DeviceCode`, `DEVKIT_URL=https://org.crm.dynamics.com` | Headless local sessions where the user can complete device-code login. |
| `ClientSecret` | `DEVKIT_AUTH_TYPE=ClientSecret`, `DEVKIT_URL`, `DEVKIT_CLIENT_ID`, `DEVKIT_CLIENT_SECRET` | CI, shared AI agents, service accounts, and unattended hosts. |
| `OAuth` / `AD` | Legacy connection fields or `--conn` | Existing legacy deployments and on-premises environments. |

For `FromPac`, run `pac auth list` first and use the profile name shown there. If the selected profile does not contain a Dataverse environment URL, select an environment with PAC CLI before starting MCP.

Equivalent command-line form:

```powershell
devkit mcp "DynamicsCrm.DevKit" --auth FromPac --pacprofile DEV --category standard --dry-run
devkit mcp "DynamicsCrm.DevKit" --auth ClientSecret --url "https://org.crm.dynamics.com" --clientid "<app-id>" --clientsecret "<secret>" --category advanced
devkit mcp "DynamicsCrm.DevKit" --conn "AuthType=OAuth;..." --category basic
```

### 🧰 Tool Categories

Tool categories are cumulative. `standard` includes every `basic` tool, and `advanced` includes every `standard` tool.

| Category | Tools | Use when |
|---|---:|---|
| `basic` | 9 | The agent only needs environment discovery, metadata lookup, safe record operations, FetchXML, search, demo data, or URL parsing. |
| `standard` | 26 | The agent needs everyday Dataverse work: forms, views, roles, workflows, flows, BPFs, business rules, custom APIs, audit, solution components, plugins, logs, system jobs, and web resources. |
| `advanced` | 33 | The agent is allowed to change app metadata, tables, columns, relationships, command bar, classic ribbon, or call raw Web API endpoints. |
| `all` | 33 | Alias for loading the full advanced toolset. |

Basic tools:

```text
whoami, get_tables, manage_choice, manage_record, create_records,
generate_demo_data, execute_fetchxml, search_records, parse_record_url
```

Standard tools:

```text
publish_customizations, manage_form, manage_view, manage_role, get_messages,
manage_environment_variable, get_workflows, get_flows, get_business_process_flows,
get_business_rules, get_custom_apis, get_audit_history, get_solution_components,
get_plugin_trace_logs, get_system_jobs, get_plugins, manage_webresource
```

Advanced tools:

```text
manage_app, upsert_table, upsert_column, upsert_relationship, execute_webapi,
manage_ribbon, manage_command
```

### 📚 MCP Resources

MCP resources are bundled with the server so AI agents can read the exact schema and workflow rules before generating XML or calling mutating tools.

| Resource URI | Purpose |
|---|---|
| `schema://fetchxml` | FetchXML schema reference for `execute_fetchxml` and view FetchXML. |
| `schema://formxml` | FormXML schema reference for `manage_form`. |
| `schema://layoutxml` | LayoutXML schema reference for `manage_view`. |
| `schema://sitemapxml` | Sitemap XML reference for model-driven app navigation work. |
| `docs://data_operations_guide` | Record payloads, lookup syntax, polymorphic lookups, and FetchXML data patterns. |
| `docs://schema_tools_guide` | Table, column, relationship, solution prefix, and publish guidance. |
| `docs://server_logic_guide` | Plugins, workflows, flows, custom APIs, traces, and system job guidance. |
| `docs://instructions_for_formxml` | Safe form operation workflow and supported `manage_form` operations. |
| `docs://instructions_for_views` | View FetchXML/LayoutXML synchronization rules and update workflow. |
| `docs://instructions_for_manage_app` | Model-driven app and navigation operation workflow. |

### ⚙️ MCP Options

| Option | Purpose |
|---|---|
| `[name]` | Optional display name reported to MCP clients, for example `DynamicsCrm.DevKit`. |
| `--category`| basic/standard/advanced/all, limits the toolset loaded into the MCP server. Default is `all`. |
| `--dry-run` | Blocks mutating MCP operations while keeping read operations available. Recommended for initial AI access. |
| `--tools` | Lists available MCP tools without connecting to Dataverse. |
| `--setup-guide` | Prints the runtime setup guide without connecting to Dataverse. |

### 🛟 MCP Troubleshooting

| Symptom | Fix |
|---|---|
| `devkit` is not found by the MCP client | Install/update the global tool and make sure the .NET global tools folder is on `PATH`. |
| `--auth or --conn is required for MCP server` | Add `DEVKIT_AUTH_TYPE` and the matching auth values, or pass `--auth` / `--conn` in the MCP args. |
| `--url is required for modern authentication` | Add `DEVKIT_URL`, except when using `FromPac`. |
| `PAC CLI profile ... not found` | Run `pac auth list`, confirm the profile name, and set `DEVKIT_PAC_PROFILE`. |
| The MCP client shows protocol or JSON errors | Confirm the client starts `devkit mcp` through stdio and does not wrap the command in a shell that writes extra text to `stdout`. |
| The agent needs to edit schema or app metadata | Switch from `standard` to `advanced`, remove `--dry-run` only after review, and prefer the typed tools over `execute_webapi`. |

## 🔗 Links

- [Repository README](../../README.md)
- [NuGet package](https://www.nuget.org/packages/DynamicsCrm.DevKit.Cli)
- [Visual Studio extension](../DynamicsCrm.DevKit/README.md)
- [Companion tool](../DynamicsCrm.DevKit.Tool/README.md)
- [Issues](https://github.com/phuocle/Dynamics-Crm-DevKit/issues)
