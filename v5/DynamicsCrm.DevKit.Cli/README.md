```text
  ____                              _           ____                  ____             _  ___ _     ____ _ _
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_  / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __|| |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/            https://github.com/phuocle/Dynamics-Crm-DevKit 4.44.44.44 Build: xxxx.yy.zz HH.mm.ss
```
# ⚙️ DynamicsCrm.DevKit CLI

DynamicsCrm.DevKit CLI is the `devkit` .NET global tool for Dataverse deployment automation, code generation, solution packaging, web resource operations, report operations, and MCP hosting for AI-assisted Dataverse work.

[![NuGet](https://img.shields.io/nuget/v/DynamicsCrm.DevKit.Cli?label=NuGet)](https://www.nuget.org/packages/DynamicsCrm.DevKit.Cli)
[![NuGet Downloads](https://img.shields.io/nuget/dt/DynamicsCrm.DevKit.Cli)](https://www.nuget.org/packages/DynamicsCrm.DevKit.Cli)

## ✨ Highlights

- One command-line surface for server deployments, web resources, reports, generated code, modelbuilder output, and solution packaging.
- Modern Spectre.Console CLI with `devkit <command> --option value` syntax and compatibility with legacy `/option:value` arguments.
- Connection support through `--conn`, explicit auth options, project `.env`, PAC profiles, client secrets, SDK login, and MCP `DEVKIT_*` environment variables.
- MCP server built into the CLI, exposing 36 Dataverse tools across `readonly` and `all` categories.
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

Normal command connection values can be supplied by command-line options or project `.env`. Resolution order is explicit CLI arguments, then project `.env`, then validation error. The `mcp` command is the exception: it resolves explicit CLI arguments, then OS `DEVKIT_*` environment variables, then validation error.

| Option | `.env` / MCP environment key | Purpose |
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

For normal CLI commands, DevKit searches for a project `.env` file from the command directory upward. VSIX-created projects also create `.env.example` beside `.env`; commit `.env.example`, but keep `.env` local because it can contain secrets. When DevKit creates `.env`, it adds the absolute `.env` path to the nearest `.gitignore` if one exists.

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
devkit mcp --auth FromPac --pacprofile DEV --category readonly
devkit mcp "DynamicsCrm.DevKit" --auth FromPac --pacprofile DEV --category readonly
```

Use `readonly` as the default onboarding mode for AI agents. It gives the agent full read/debugging capability to understand the environment while exposing zero mutating tools. Move to `all` only when the agent is intentionally allowed to change data, schema, app navigation, command bar, ribbon, or raw Web API behavior — optionally combined with `--dry-run` to block mutations at execution time.

`FromPac` is supported by the MCP command through `FromPacConnectionBuilder`. It requires an existing PAC CLI auth profile name and does not require `--url`; the environment URL is resolved from `%LOCALAPPDATA%\Microsoft\PowerAppsCLI\authprofiles_v2.json`.

### 🧠 AI Agent Bootstrap

When an AI agent reads this repository and needs to configure MCP, use this sequence:

1. Install or update the CLI with `dotnet tool install --global DynamicsCrm.DevKit.Cli` or `dotnet tool update --global DynamicsCrm.DevKit.Cli`.
2. Choose an auth mode. `FromPac` is the simplest local developer setup when a PAC CLI profile already exists and has an active Dataverse environment; `ClientSecret` is the best unattended setup for a service principal.
3. Add the MCP client entry with `command: "devkit"` and `args: ["mcp", "DynamicsCrm.DevKit", "--category", "readonly"]`.
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
      "args": ["mcp", "DynamicsCrm.DevKit", "--category", "readonly"],
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
      "args": ["mcp", "DynamicsCrm.DevKit", "--category", "readonly"],
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
      "args": ["mcp", "DynamicsCrm.DevKit", "--category", "all"],
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

MCP resolves connection values from explicit command-line arguments first, then OS `DEVKIT_*` environment variables. MCP does not read project `.env` by default.

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
devkit mcp "DynamicsCrm.DevKit" --auth FromPac --pacprofile DEV --category readonly
devkit mcp "DynamicsCrm.DevKit" --auth ClientSecret --url "https://org.crm.dynamics.com" --clientid "<app-id>" --clientsecret "<secret>" --category all
devkit mcp "DynamicsCrm.DevKit" --conn "AuthType=OAuth;..." --category readonly
```

### 🧰 Tool Categories

Tool categories derive from each tool's `ReadOnly` flag and are cumulative: `all` includes every `readonly` tool. The old `basic`/`standard`/`advanced` categories were removed — use `readonly` or `all`.

| Category | Tools | Use when |
|---|---:|---|
| `readonly` | 16 | The agent only needs to inspect the environment: metadata lookup, queries, FetchXML, search, logs, audit, and URL parsing. Nothing can be changed. |
| `all` | 36 | The agent is allowed to create, update, delete, and publish — records, schema, forms, views, apps, ribbon, command bar, or raw Web API endpoints. Combine with `--dry-run` to block mutations at execution time. |

ReadOnly tools:

```text
whoami, get_tables, get_messages, get_workflows, get_flows,
get_business_process_flows, get_business_rules, get_custom_apis,
get_audit_history, get_solution_components, get_plugin_trace_logs,
get_system_jobs, get_plugins, execute_fetchxml, search_records,
parse_record_url
```

Mutation tools (added by `all`):

```text
manage_record, create_records, manage_deleted_records, generate_demo_data,
manage_record_file, manage_choice, manage_environment_variable,
manage_webresource, publish_customizations, manage_form, manage_view,
manage_chart, manage_role, manage_app, manage_table, manage_column,
manage_relationship, manage_ribbon, manage_command, execute_webapi
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
| `--category`| readonly/all, limits the toolset loaded into the MCP server. Default is `all`. |
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
| The agent needs to edit schema or app metadata | Switch from `readonly` to `all`, remove `--dry-run` only after review, and prefer the typed tools over `execute_webapi`. |

## 🔗 Links

- [Repository README](../../README.md)
- [NuGet package](https://www.nuget.org/packages/DynamicsCrm.DevKit.Cli)
- [Visual Studio extension](../DynamicsCrm.DevKit/README.md)
- [Companion tool](../DynamicsCrm.DevKit.Tool/README.md)
- [Issues](https://github.com/phuocle/Dynamics-Crm-DevKit/issues)
