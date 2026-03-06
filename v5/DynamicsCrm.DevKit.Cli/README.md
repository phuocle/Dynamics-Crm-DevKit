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
| `proxytype` | Deprecated | Use `devkit modelbuilder` |
| `legacy-solution` | Deprecated | Use `devkit solution` |
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

## Authentication Methods (9 Types)

| Auth Type | Best For | Recommended |
|-----------|----------|-------------|
| `FromPac` | Developers - Reuse PAC CLI tokens | Yes |
| `Interactive` | Developers with MFA | Yes |
| `DeviceCode` | Headless, SSH, CI containers | OK |
| `ClientSecret` | CI/CD pipelines, automation | Yes |
| `ClientCertificate` | High-security production | OK |
| `ManagedIdentity` | Azure VMs, App Services, Functions | Yes |
| `DefaultAzureCredential` | Flexible Azure SDK chain | OK |
| `OAuth` | Legacy username/password | Legacy |
| `AD` | On-premise Active Directory | On-prem |

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

#### Cursor

Add to `.cursor/mcp.json`:

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

#### VS Code (GitHub Copilot)

Add to `.vscode/mcp.json`:

```json
{
  "servers": {
    "devkit": {
      "type": "stdio",
      "command": "devkit",
      "args": ["mcp", "--auth", "FromPac", "--pacprofile", "DEV"]
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
      "args": ["mcp", "--auth", "ClientSecret", "--url", "https://org.crm.dynamics.com", "--clientid", "app-id", "--clientsecret", "secret"]
    }
  }
}
```

### Available MCP Tools

| Tool | Description |
|------|-------------|
| `query_fetchxml` | Execute FetchXML queries against Dataverse, return results as markdown |
| `get_entity_metadata` | Retrieve full metadata for an entity (attributes, relationships, keys) |
| `get_environment_info` | Get connected environment info (org, version, user, installed solutions) |
| `list_tables` | List all tables/entities with optional filter by prefix or keyword |
| `get_entity_messages` | Get available SDK messages for plugin registration on an entity |
| `get_global_optionset` | Retrieve global option set definitions or list all option sets |
| `get_record` | Retrieve a single record by entity name and GUID |
| `create_record` | Create a new record with JSON attributes |
| `update_record` | Update an existing record with JSON attributes |
| `delete_record` | Delete a record by entity name and GUID |
| `create_plugin` | Generate a plugin C# file from a T4 template |

### MCP Tool Examples

Once connected, AI agents can use these tools naturally:

- *"Show me all custom tables in this environment"* - uses `list_tables`
- *"What fields does the account entity have?"* - uses `get_entity_metadata`
- *"Query all active contacts created this month"* - uses `query_fetchxml`
- *"Create a new account named Contoso"* - uses `create_record`
- *"What SDK messages are available for the contact entity?"* - uses `get_entity_messages`
- *"Generate a plugin for account Create in PostOperation"* - uses `create_plugin`

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
- Full CRUD operations on Dataverse records
- Entity metadata and schema exploration
- FetchXML query execution
- Plugin code generation from T4 templates
- Compatible with any MCP-enabled AI agent

## Support

- GitHub: https://github.com/phuocle/Dynamics-Crm-DevKit
- Issues: https://github.com/phuocle/Dynamics-Crm-DevKit/issues
