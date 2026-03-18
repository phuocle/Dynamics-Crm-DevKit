# Add `--setup-guide` Flag to `devkit mcp` Command

Add a `--setup-guide` flag that prints comprehensive setup instructions including installation, environment variables, mcp.json config examples for 3 IDEs, and available MCP tools — enabling AI agents to guide new users through MCP installation.

## Proposed Changes

### CLI Models

#### [MODIFY] [McpCommandArgs.cs](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Models/McpCommandArgs.cs)

Add `--setup-guide` boolean flag:
```csharp
[CommandOption("--setup-guide")]
[Description("Show comprehensive setup guide for configuring MCP in your IDE")]
[DefaultValue(false)]
public bool SetupGuide { get; set; }
```

---

### CLI Commands

#### [MODIFY] [McpCommand.cs](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Commands/McpCommand.cs)

Add early check in `ExecuteAsync`: if `settings.SetupGuide` is true, call `PrintSetupGuide()` and return 0 (skip connection).

Add `PrintSetupGuide()` method using `Console.WriteLine` to stderr that outputs:

1. **Installation**: `dotnet tool install -g DynamicsCrm.DevKit.Cli`
2. **Available Auth Types**: Interactive, DeviceCode, ClientSecret, FromPac, OAuth, AD
3. **Environment Variables**: `DEVKIT_AUTH_TYPE`, `DEVKIT_URL`, `DEVKIT_CLIENT_ID`, `DEVKIT_CLIENT_SECRET`, `DEVKIT_PAC_PROFILE`, etc.
4. **mcp.json examples** for VS Code, Cursor, and Antigravity (using env vars for ClientSecret auth)
5. **12 MCP Tools**: `get_entities_metadata`, `get_entity_metadata`, `get_global_optionsets`, `get_messages`, `get_environment_info`, `whoami`, `get_record`, `execute_fetchxml`, `search`, `create_record`, `update_record`, `delete_record`

---

### CLI Registration

#### [MODIFY] [Program.cs](file:///d:/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Program.cs#L96-L97)

Add `WithExample()` entries:
```csharp
config.AddCommand<McpCommand>("mcp")
      .WithDescription("Start MCP server for AI agent integration")
      .WithExample("mcp", "--setup-guide")
      .WithExample("mcp", "--auth", "ClientSecret", "--url", "https://org.crm.dynamics.com", "--clientid", "APP_ID", "--clientsecret", "SECRET")
      .WithExample("mcp", "--auth", "FromPac", "--pacprofile", "default")
      .WithExample("mcp", "--auth", "Interactive", "--url", "https://org.crm.dynamics.com");
```

---

## Verification Plan

### Automated

Build CLI using `/build-cli` workflow, then verify:

```powershell
# Should print setup guide and exit 0
devkit mcp --setup-guide

# Should show examples in help
devkit mcp --help
```

### Manual Checklist

1. `devkit mcp --setup-guide` prints installation instructions
2. `devkit mcp --setup-guide` prints environment variable table
3. `devkit mcp --setup-guide` prints mcp.json for VS Code, Cursor, Antigravity
4. `devkit mcp --setup-guide` prints all 12 MCP tools
5. `devkit mcp --help` shows `--setup-guide` option and examples
