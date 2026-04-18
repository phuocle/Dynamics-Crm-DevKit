```text
  ____                              _           ____                  ____             _  ___ _      ____ _ _ 
 |  _ \ _   _ _ __   __ _ _ __ ___ (_) ___ ___ / ___|_ __ _ __ ___   |  _ \  _____   _| |/ (_) |_   / ___| (_)
 | | | | | | | '_ \ / _` | '_ ` _ \| |/ __/ __| |   | '__| '_ ` _ \  | | | |/ _ \ \ / / ' /| | __| | |   | | |
 | |_| | |_| | | | | (_| | | | | | | | (__\__ \ |___| |  | | | | | |_| |_| |  __/\ V /| . \| | |_ | |___| | |
 |____/ \__, |_| |_|\__,_|_| |_| |_|_|\___|___/\____|_|  |_| |_| |_(_)____/ \___| \_/ |_|\_\_|\__(_)____|_|_|
        |___/                          https://github.com/phuocle/Dynamics-Crm-DevKit x.xx.xx.xx Build: xxxx.yy.zz HH.mm.ss
```
# DynamicsCrm.DevKit.Cli

A comprehensive .NET global CLI tool for Dynamics 365/Dataverse deployment automation, code generation, and AI agent integration via MCP (Model Context Protocol).

## Installation

```powershell
dotnet tool install --global DynamicsCrm.DevKit.Cli
```

## Commands (15 Total)

| Command | Status | Description |
|---------|--------|-------------|
| `generator` | Active | Generate JS/TS/C# code from entity metadata |
| `server` | Active | Deploy plugins, workflows, packages to Dataverse |
| `plugin` | Deprecated | Use `devkit server` |
| `workflow` | Deprecated | Use `devkit server` |
| `dataprovider` | Deprecated | Use `devkit server` |
| `webresource` | Active | Deploy web resources |
| `modelbuilder` | Active | Generate early-bound using PAC ModelBuilder |
| `solution` | Active | Extract/Pack solutions using PAC CLI |
| `proxytype` | Deprecated | Auto-redirects to `devkit modelbuilder` |
| `legacy-solution` | Deprecated | Auto-redirects to `devkit solution` |
| `downloadreport` | Active | Download reports from a solution |
| `uploadreport` | Active | Upload reports to a solution |
| `downloadwebresource` | Active | Download web resources from a solution |
| `datasource` | Active | Create data source entities |
| `mcp` | **New** | Start MCP server for AI agent integration |

## Usage

### Basic Syntax
```powershell
devkit <command> --url "<environment-url>" --auth <auth-type> [auth-options] --json "<path-to-json>" --profile "<profile-name>"
```

### Quick Examples

```powershell
# Deploy with Interactive authentication (browser login with MFA)
devkit server --url "https://org.crm.dynamics.com" --auth Interactive --json "cli.json" --profile "DEBUG"

# Deploy with FromPac (reuse PAC CLI tokens - zero login!)
devkit server --auth FromPac --pacprofile "DEVKITV4" --json "cli.json" --profile "DEBUG"

# Generate early-bound entity classes
devkit modelbuilder --auth FromPac --pacprofile "DEV" --json "cli.json" --profile "ALL"

# Extract solution using PAC CLI
devkit solution --auth FromPac --json "cli.json" --profile "Extract-Both"

# Pack solution using PAC CLI
devkit solution --auth FromPac --json "cli.json" --profile "Pack-Both"

# Deploy with ClientSecret (for CI/CD pipelines)
devkit server --url "https://org.crm.dynamics.com" --auth ClientSecret --clientid "app-id" --clientsecret "secret" --json "cli.json" --profile "DEBUG"

# Start MCP server for AI agents (e.g. Cursor, VS Code Copilot)
devkit mcp --auth FromPac --pacprofile "DEV"
devkit mcp --auth ClientSecret --url "https://org.crm.dynamics.com" --clientid "app-id" --clientsecret "secret"
```

## Authentication Methods (6 Types)

| Auth Type | Best For | Recommended |
|-----------|----------|-------------|
| `FromPac` | Developers - Reuse PAC CLI tokens | Yes |
| `Interactive` | Developers with MFA | Yes |
| `DeviceCode` | Headless, SSH, CI containers | OK |
| `ClientSecret` | CI/CD pipelines, automation | Yes |
| `OAuth` | Legacy username/password | Legacy |
| `AD` | On-premise Active Directory | On-prem |

## Environment Variables

All connection arguments support **environment variable fallback**. If a CLI argument is not provided, the CLI automatically reads from `DEVKIT_*` environment variables.

**Priority**: CLI args > Environment variables > empty (validation error)

| CLI Argument | Environment Variable | Used By |
|---|---|---|
| `--conn` | `DEVKIT_CONNECTION` | Legacy connection string |
| `--auth` | `DEVKIT_AUTH_TYPE` | All auth types |
| `--url` | `DEVKIT_URL` | All (except FromPac) |
| `--clientid` | `DEVKIT_CLIENT_ID` | ClientSecret, Interactive, DeviceCode |
| `--clientsecret` | `DEVKIT_CLIENT_SECRET` | ClientSecret |
| `--pacprofile` | `DEVKIT_PAC_PROFILE` | FromPac |
| `--username` | `DEVKIT_USERNAME` | OAuth, AD |
| `--password` | `DEVKIT_PASSWORD` | OAuth, AD |
| `--domain` | `DEVKIT_DOMAIN` | AD |

### Setting Environment Variables (Windows)

```powershell
# Set persistent user-level environment variables (one-time setup)
[Environment]::SetEnvironmentVariable("DEVKIT_AUTH_TYPE", "ClientSecret", "User")
[Environment]::SetEnvironmentVariable("DEVKIT_URL", "https://org.crm.dynamics.com", "User")
[Environment]::SetEnvironmentVariable("DEVKIT_CLIENT_ID", "your-app-id", "User")
[Environment]::SetEnvironmentVariable("DEVKIT_CLIENT_SECRET", "your-secret", "User")

# Or for FromPac (simplest - no secrets needed)
[Environment]::SetEnvironmentVariable("DEVKIT_AUTH_TYPE", "FromPac", "User")
[Environment]::SetEnvironmentVariable("DEVKIT_PAC_PROFILE", "dev", "User")
```

### Before vs After

```powershell
# Before: verbose command with all connection args
devkit server --auth ClientSecret --url "https://org.crm.dynamics.com" --clientid "app-id" --clientsecret "secret" --json "cli.json" --profile "DEBUG"

# After: set env vars once, then just specify project args
devkit server --json "cli.json" --profile "DEBUG"
```

### Override

CLI args always take precedence. To temporarily connect to a different environment:

```powershell
# Env vars point to DEV, but this command connects to UAT
devkit server --url "https://uat.crm.dynamics.com" --json "cli.json" --profile "DEBUG"
```

## MCP Server (Model Context Protocol)

The `mcp` command starts a stdio-based MCP server that exposes Dataverse tools to AI agents (Cursor, VS Code Copilot, Claude Desktop, etc.).

### Starting the MCP Server

```powershell
# Using PAC CLI cached tokens (recommended for development)
devkit mcp --auth FromPac --pacprofile "DEV"

# Using ClientSecret (recommended for CI/CD or shared environments)
devkit mcp --auth ClientSecret --url "https://org.crm.dynamics.com" --clientid "app-id" --clientsecret "secret"

# Using Interactive authentication
devkit mcp --auth Interactive --url "https://org.crm.dynamics.com"
```

### IDE Configuration

If you have `DEVKIT_*` environment variables set (see [Environment Variables](#environment-variables)), the MCP config is minimal — just `devkit mcp` with no args.

#### Cursor

Add to `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "devkit": {
      "command": "devkit",
      "args": ["mcp"]
    }
  }
}
```

#### VS Code (GitHub Copilot)

Add to `.vscode/mcp.json`:

```json
{
  "servers": {
    "devkit": {
      "type": "stdio",
      "command": "devkit",
      "args": ["mcp"]
    }
  }
}
```

#### Claude Desktop

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "devkit": {
      "command": "devkit",
      "args": ["mcp"]
    }
  }
}
```

#### Alternative: Pass credentials via `env` property

If you prefer not to set system-wide environment variables, use the `env` property in the MCP config:

```json
{
  "mcpServers": {
    "devkit": {
      "command": "devkit",
      "args": ["mcp"],
      "env": {
        "DEVKIT_AUTH_TYPE": "ClientSecret",
        "DEVKIT_URL": "https://org.crm.dynamics.com",
        "DEVKIT_CLIENT_ID": "your-app-id",
        "DEVKIT_CLIENT_SECRET": "your-secret"
      }
    }
  }
}
```

#### Alternative: Pass credentials via CLI args

```json
{
  "mcpServers": {
    "devkit": {
      "command": "devkit",
      "args": ["mcp", "--auth", "FromPac", "--pacprofile", "DEV"]
    }
  }
}
```

### Available MCP Tools (32)

**Schema & Metadata**: `whoami`, `get_tables`, `get_messages`, `get_solution_components`

**Data Operations**: `manage_record`, `execute_fetchxml`, `search_records`, `execute_webapi`, `manage_choice`, `manage_environment_variable`

**Forms, Views & SiteMaps**: `manage_form`, `build_form_xml`, `manage_view`, `manage_sitemap`, `build_sitemap_xml`

**Schema Management**: `upsert_table`, `upsert_column`, `upsert_relationship`

**Server-Side Logic**: `get_plugins`, `get_plugin_trace_logs`, `get_workflows`, `get_flows`, `get_business_rules`, `get_business_process_flows`, `get_custom_apis`, `get_system_jobs`

**Security & Utilities**: `manage_role`, `manage_webresource`, `get_dataverse_commands`, `get_audit_history`, `parse_record_url`, `publish_customizations`

### Available MCP Resources (9)

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

### MCP Tool Examples

Once connected, AI agents can use these tools naturally:

- *"Show me all custom tables in this environment"* — uses `get_tables`
- *"What fields does the account entity have?"* — uses `get_tables` with entity_name
- *"Query all active contacts created this month"* — uses `execute_fetchxml`
- *"Create a new account named Contoso"* — uses `manage_record` with action='create'
- *"What SDK messages are available for the contact entity?"* — uses `get_messages`
- *"Add a new text column to the account table"* — uses `upsert_column`
- *"Show me failed system jobs in the last hour"* — uses `get_system_jobs`
- *"What security roles does the current user have?"* — uses `manage_role` with action='user'

## Configuration File

Create `DynamicsCrm.DevKit.Cli.json` in your project:

```json
{
  "servers": [
    {
      "profile": "DEBUG",
      "solution": "YourSolution",
      "folder": "bin\\Debug",
      "includefiles": ["*.dll"],
      "excludefiles": []
    }
  ],
  "generators": [
    {
      "profile": "Account",
      "type": "JsForm",
      "rootfolder": "WebResources",
      "rootnamespace": "YourNamespace",
      "entities": "Account,Contact"
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
  "pacsolutionpackagers": [
    {
      "profile": "Extract-Both",
      "solution": "YourSolution",
      "solutiontype": "Both",
      "folder": "Solutions",
      "type": "Extract"
    },
    {
      "profile": "Pack-Both",
      "solution": "YourSolution",
      "solutiontype": "Both",
      "folder": "Solutions",
      "type": "Pack"
    }
  ],
  "webresources": [
    {
      "profile": "DEBUG",
      "solution": "YourSolution",
      "rootfolder": "WebResources",
      "includefiles": ["**/*.js", "**/*.css"],
      "excludefiles": ["**/*.ts"]
    }
  ]
}
```

## Key Features

### Server Deployment
- 4 Pre/Post Images support
- Managed Identity support with auto-signing
- Custom API registration
- Package Deployment (.nupkg)
- Step ID tracking for idempotent deployments
- `--onlyupdateassembly` for faster deployment

### Code Generation
- JsForm, JsWebApi, TsForm, TsWebApi, CSharp late-bound

### ModelBuilder
- Uses **PAC ModelBuilder** (modern replacement for CrmSvcUtil)
- Entity filtering with `entities` parameter
- Generates early-bound proxy classes

### PAC Solution Packager
- Uses **PAC CLI** (modern replacement for SolutionPackager.exe)
- Extract/Pack solutions to source control
- Supports Managed, Unmanaged, and Both

### Web Resources
- Pattern-based deployment with include/exclude filters
- Dependency management
- Auto-publish after deployment

### MCP Server
- Stdio transport for seamless IDE integration
- 32 tools for full Dataverse operations (CRUD, schema, forms, views, sitemaps, security, plugins, workflows, flows)
- 9 resources (XSD schemas + instruction guides for error-guided AI usage)
- FetchXML query execution with auto-paging
- Compatible with any MCP-enabled AI agent (Cursor, VS Code Copilot, Claude Desktop)

## Support

- GitHub: https://github.com/phuocle/Dynamics-Crm-DevKit
- Issues: https://github.com/phuocle/Dynamics-Crm-DevKit/issues
