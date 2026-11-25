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
- MCP server built into the CLI, exposing 41 tools for Dataverse and server discovery.
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
| `server` | Active | Deploy server assemblies, plugin packages, workflows, custom APIs, custom actions, and data providers; create data source entities (`--type datasources`). |
| `webresource` | Active | Deploy web resources (default `--type upload`) or download them from a solution (`--type download`). |
| `modelbuilder` | Active | Generate early-bound classes using PAC ModelBuilder. |
| `solution` | Active | Extract and pack Dataverse solutions using Power Platform CLI. |
| `report` | Active | Report operations selected by `--type`: `dataset` (manage FetchXML datasets in a .rdl), `upload`, `download`. |
| `new-project` | Active | Create a DevKit project in an existing solution. Use `new-project list` to see template IDs. |
| `new-item` | Active | Create a DevKit item in an existing project. Use `new-item list` to see template IDs. |
| `downloadreport` | Compatibility | Redirects to `report --type download`. |
| `uploadreport` | Compatibility | Redirects to `report --type upload`. |
| `downloadwebresource` | Compatibility | Redirects to `webresource --type download`. |
| `datasource` | Compatibility | Redirects to `server --type datasources`. |
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

### Dataverse server tests

Run these commands from a solution containing a DevKit Server project, its Shared project, and ProxyTypes. The example assumes `Contoso.Server.OnUpdate` is a server class in that solution.

```powershell
devkit new-project --type DataverseTest --name Contoso.Tests --solution Contoso.slnx
devkit new-item --type DataverseTest --project Contoso.Tests --test-target Contoso.Server.OnUpdate
dotnet test .\Contoso.Tests\Contoso.Tests.csproj
```

The CLI uses the normal Dataverse connection settings when scaffolding. The generated MSTest project runs in memory on Windows x64 with .NET Framework 4.6.2 and DataverseFakes.Community. It imports production Shared code and includes its own `Framework/` helpers. You can add it alongside an existing `Test` and `SharedTest` pair.

If the solution has several Server projects, use `--server-project` with an absolute `.csproj` path or a path relative to the solution. The generated `_01` method is marked inconclusive until you supply test data and an assertion. [Dataverse Test Project](https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Dataverse-Test-Project-Template)

## 🤖 MCP Server

The `mcp` command turns `devkit` into a stdio MCP server for AI agents that need to inspect, operate, and safely customize Dataverse environments. The server writes operational logs to `stderr` and reserves `stdout` for the MCP protocol, which is the expected behavior for stdio MCP clients.

```powershell
devkit mcp --auth FromPac --pacprofile DEV
devkit mcp "DynamicsCrm.DevKit" --auth FromPac --pacprofile DEV
```

MCP exposes the full tool catalog. Use `--dry-run` in args-only mode or the connection group's `DRY_RUN=true` key in project `.env` to block mutations at execution time.

`FromPac` is supported by the MCP command through `FromPacConnectionBuilder`. It requires an existing PAC CLI auth profile name and does not require `--url`; the environment URL is resolved from `%LOCALAPPDATA%\Microsoft\PowerAppsCLI\authprofiles_v2.json`.

### 🧠 AI Agent Bootstrap

When an AI agent reads this repository and needs to configure MCP, use this sequence:

1. Install or update the CLI with `dotnet tool install --global DynamicsCrm.DevKit.Cli` or `dotnet tool update --global DynamicsCrm.DevKit.Cli`.
2. Choose an auth mode. `FromPac` is the simplest local developer setup when a PAC CLI profile already exists and has an active Dataverse environment; `ClientSecret` is the best unattended setup for a service principal.
3. Configure the connection in the project `.env`. Add the MCP client entry with `command: "devkit"` and `args: ["mcp", "DynamicsCrm.DevKit"]` and launch it from the project directory.
4. Start the client and call `whoami` first to confirm the connected Dataverse organization.
5. Read MCP resources such as `schema://fetchxml`, `schema://formxml`, `docs://data_operations_guide`, `docs://schema_tools_guide`, `docs://instructions_for_formxml`, `docs://instructions_for_views`, and `docs://instructions_for_manage_app` before editing Dataverse metadata.

Quick checks that do not connect to Dataverse:

```powershell
devkit mcp --setup-guide
devkit mcp --tools
```

### 🔌 MCP Client Config

Most MCP clients use one of these JSON shapes. Launch the server from the project directory and keep connection secrets in the Git-ignored project `.env`. For example, `FromPac` uses `DEVKIT_AUTH_TYPE=FromPac` and `DEVKIT_PAC_PROFILE=DEV` in `.env` and resolves the URL from the PAC CLI profile.

`mcpServers` style:

```json
{
  "mcpServers": {
    "dynamicscrm-devkit": {
      "command": "devkit",
      "args": ["mcp", "DynamicsCrm.DevKit"]
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
      "args": ["mcp", "DynamicsCrm.DevKit"]
    }
  }
}
```

Service-principal settings in project `.env`:

```dotenv
DEVKIT_AUTH_TYPE=ClientSecret
DEVKIT_URL=https://org.crm.dynamics.com
DEVKIT_CLIENT_ID=00000000-0000-0000-0000-000000000000
DEVKIT_CLIENT_SECRET=client-secret
```

### 🔐 MCP Authentication

An instance name with optional `--env <id|alias|default>` reads its connection from the project `.env`. Other configuration options require complete connection arguments on the command line.

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
devkit mcp "DynamicsCrm.DevKit" --auth FromPac --pacprofile DEV
devkit mcp "DynamicsCrm.DevKit" --auth ClientSecret --url "https://org.crm.dynamics.com" --clientid "<app-id>" --clientsecret "<secret>"
devkit mcp "DynamicsCrm.DevKit" --conn "AuthType=OAuth;..."
```

### 🧰 Tool Catalog

Run `devkit mcp --tools` to list the enabled tools and their titles without opening a Dataverse connection.

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
| `--dry-run` | Blocks mutating MCP operations while keeping read operations available. Recommended for initial AI access. |
| `--as-user` | Impersonate a user (systemuserid GUID or email) for the whole session. The connecting user must be System Administrator. |
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

## 🔗 Links

- [Repository README](../../README.md)
- [NuGet package](https://www.nuget.org/packages/DynamicsCrm.DevKit.Cli)
- [Visual Studio extension](../DynamicsCrm.DevKit.Vsix/README.md)
- [Companion tool](../DynamicsCrm.DevKit.Tool/README.md)
- [Issues](https://github.com/phuocle/Dynamics-Crm-DevKit/issues)
