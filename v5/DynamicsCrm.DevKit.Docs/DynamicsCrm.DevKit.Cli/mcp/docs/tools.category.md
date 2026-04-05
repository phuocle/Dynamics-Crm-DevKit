# MCP Tool Categories — Filter by `--category`

**Date**: 2026-04-05
**Status**: Proposal
**Purpose**: Let users load only a subset of 34 tools via `devkit mcp --category <name>`

---

## Problem

Loading 34 tools into an AI context costs ~8,500 tokens just for descriptions. Most users only need a subset. By filtering tools at startup, users see fewer tools on the MCP UI and the AI gets a smaller, more focused toolset.

---

## 3 Categories + All

| Category | Slug | Description | Count |
|----------|------|-------------|-------|
| **Basic** | `basic` | Core essentials — query data, read metadata, CRUD. Enough for 80% of daily work. | 9 |
| **Standard** | `standard` | Basic + inspection tools — forms, views, roles, workflows, flows, plugins, commands, auditing, publish. Full read + safe writes. | 29 |
| **Advanced** | `advanced` | Standard + schema changes + raw Web API. Creates entities, attributes, modifies forms/views/sitemaps. | 35 |
| **All** | `all` | Alias for `advanced`. Loads all 35 tools. **This is the default when no `--category` is specified.** | 35 |

**Key design**: Each level **includes all tools from the previous level** (cumulative, not exclusive). Default is `all` — no category filter means load everything.

---

## Tool Assignment

### `basic` — 9 tools

> Everyday Dataverse operations: identify, query, read/write data.

| # | Tool | Class | Purpose |
|---|------|-------|---------|
| 1 | `whoami` | `WhoAmITool` | Identity + environment info |
| 2 | `get_metadata_entities` | `GetMetadataEntitiesTool` | List/detail entity metadata (attributes, relationships) |
| 3 | `get_global_optionsets` | `GetGlobalOptionSetsTool` | List/detail global choice columns |
| 4 | `get_record` | `GetRecordTool` | Retrieve a single record by ID |
| 5 | `upsert_record` | `UpsertRecordTool` | Create/update/upsert a data record |
| 6 | `delete_record` | `DeleteRecordTool` | Delete a record by ID |
| 7 | `execute_fetchxml` | `ExecuteFetchXmlTool` | FetchXML queries (filters, joins, aggregation) |
| 8 | `relevance_search` | `RelevanceSearchTool` | Full-text search across entities |
| 9 | `parse_record_url` | `ParseRecordUrlTool` | Extract entity + ID from Dynamics 365 URLs |

### `standard` — 29 tools (basic + 20 more)

> Adds: publish, inspection tools, process discovery, security, auditing, debugging, solution management, commands.

| # | Tool | Class | Purpose |
|---|------|-------|---------|
| 10 | `publish_customizations` | `PublishCustomizationsTool` | Publish metadata changes |
| 11 | `get_forms` | `GetFormsTool` | List/detail form definitions (FormXML) |
| 12 | `get_views` | `GetViewsTool` | List/detail view definitions (FetchXML + LayoutXML) |
| 13 | `get_roles` | `GetRolesTool` | Security roles, privileges, user role assignments |
| 14 | `get_sdk_messages` | `GetSdkMessagesTool` | SDK messages + Custom Actions for an entity |
| 15 | `get_variables` | `GetVariablesTool` | Environment variables (read-only) |
| 16 | `get_classic_workflows` | `GetClassicWorkflowsTool` | Classic workflows (category=0) |
| 17 | `get_cloud_flows` | `GetCloudFlowsTool` | Power Automate cloud flows (category=5) + run history |
| 18 | `get_bpfs` | `GetBpfsTool` | Business Process Flows (category=4) + stages |
| 19 | `get_business_rules` | `GetBusinessRulesTool` | Business rules (category=2, client-side logic) |
| 20 | `get_custom_apis` | `GetCustomApisTool` | Custom API definitions + parameters |
| 21 | `get_audit_history` | `GetAuditHistoryTool` | Audit trail — who changed what, when |
| 22 | `get_solution_components` | `GetSolutionComponentsTool` | Components inside a solution + active layers |
| 23 | `get_plugin_trace_logs` | `GetPluginTraceLogsTool` | Plugin trace log output + exceptions |
| 24 | `get_jobs` | `GetJobsTool` | System jobs — async plugin/workflow failures |
| 25 | `get_plugins` | `GetPluginsTool` | Plugin assemblies, types, steps, images |
| 26 | `get_commands` | `GetCommandsTool` | List/inspect modern command bar buttons (appaction) |
| 27 | `upsert_variable` | `UpsertVariableTool` | Create/update environment variables |
| 28 | `build_formxml` | `BuildFormxmlTool` | Build FormXML (read-only builder, returns XML) |
| 29 | `get_webresources` | `GetWebResourcesTool` | List/inspect web resources (JS, CSS, HTML, images, RESX) |

### `advanced` — 35 tools (standard + 6 more)

> Adds: schema changes (entities, attributes), UI modification (forms, views, sitemaps), raw Web API.

| # | Tool | Class | Purpose |
|---|------|-------|---------|
| 30 | `upsert_form` | `UpsertFormTool` | Update/rename/undo forms (with backup + validation) |
| 31 | `upsert_view` | `UpsertViewTool` | Create/update/rename/undo views (with backup + sync check) |
| 32 | `upsert_sitemap` | `UpsertSiteMapTool` | Create/update/undo app sitemaps (with backup + XSD) |
| 33 | `upsert_entity` | `UpsertEntityTool` | Create a new custom entity/table |
| 34 | `upsert_attribute` | `UpsertAttributeTool` | Create/update columns on entities |
| 35 | `execute_webapi` | `ExecuteWebApiTool` | Raw Web API — any HTTP method (the "escape hatch") |

---

## Token Impact

| Category | Tools | Est. tokens | vs All |
|----------|-------|-------------|--------|
| `basic` | 9 | ~2,350 | -72% |
| `standard` | 29 | ~7,200 | -16% |
| `advanced` / `all` | 35 | ~8,700 | baseline |

---

## User Configuration

### MCP Config (`mcp.json`)

```json
{
  "servers": {
    "devkit": {
      "type": "stdio",
      "command": "devkit",
      "args": ["mcp", "--category", "basic"],
      "env": {
        "DEVKIT_AUTH_TYPE": "ClientSecret",
        "DEVKIT_URL": "https://org.crm.dynamics.com",
        "DEVKIT_CLIENT_ID": "your-client-id",
        "DEVKIT_CLIENT_SECRET": "your-client-secret"
      }
    }
  }
}
```

What the user sees on the MCP UI:

| `--category` | Tools visible | Use case |
|---|---|---|
| `basic` | 9 tools | Daily data work, queries, simple CRUD |
| `standard` | 29 tools | Full inspection + debugging + safe writes + commands + web resources |
| `advanced` | 35 tools | Schema changes + raw Web API |
| _(none)_ | 35 tools | Same as `all` — **loads everything** (default) |

### Multi-Server Setup (split by role)

```json
{
  "servers": {
    "devkit-reader": {
      "command": "devkit",
      "args": ["mcp", "--category", "basic"],
      "env": { "..." : "..." }
    },
    "devkit-admin": {
      "command": "devkit",
      "args": ["mcp", "--category", "advanced"],
      "env": { "..." : "..." }
    }
  }
}
```

---

## Implementation

### Step 1: Add `--category` to `McpCommandArgs.cs`

```csharp
[CommandOption("--category")]
[Description("Tool category: basic (9), standard (28), advanced (34). Default: all (loads everything).")]
[DefaultValue("all")]
public string Category { get; set; } = "all";
```

### Step 2: Define category map in `McpServerHost.cs`

```csharp
// Tool category assignment — cumulative levels
// Uses nameof() to reference tool classes for compile-time safety
private static readonly Dictionary<string, string> ToolCategoryMap = new()
{
    // basic (9 tools)
    [nameof(WhoAmITool)] = "basic",
    [nameof(GetMetadataEntitiesTool)] = "basic",
    [nameof(GetGlobalOptionSetsTool)] = "basic",
    [nameof(GetRecordTool)] = "basic",
    [nameof(UpsertRecordTool)] = "basic",
    [nameof(DeleteRecordTool)] = "basic",
    [nameof(ExecuteFetchXmlTool)] = "basic",
    [nameof(RelevanceSearchTool)] = "basic",
    [nameof(ParseRecordUrlTool)] = "basic",

    // standard (19 additional tools)
    [nameof(PublishCustomizationsTool)] = "standard",
    [nameof(GetFormsTool)] = "standard",
    [nameof(GetViewsTool)] = "standard",
    [nameof(GetRolesTool)] = "standard",
    [nameof(GetSdkMessagesTool)] = "standard",
    [nameof(GetVariablesTool)] = "standard",
    [nameof(GetClassicWorkflowsTool)] = "standard",
    [nameof(GetCloudFlowsTool)] = "standard",
    [nameof(GetBpfsTool)] = "standard",
    [nameof(GetBusinessRulesTool)] = "standard",
    [nameof(GetCustomApisTool)] = "standard",
    [nameof(GetAuditHistoryTool)] = "standard",
    [nameof(GetSolutionComponentsTool)] = "standard",
    [nameof(GetPluginTraceLogsTool)] = "standard",
    [nameof(GetJobsTool)] = "standard",
    [nameof(GetPluginsTool)] = "standard",
    [nameof(GetCommandsTool)] = "standard",
    [nameof(UpsertVariableTool)] = "standard",
    [nameof(BuildFormxmlTool)] = "standard",

    // advanced (6 additional tools)
    [nameof(UpsertFormTool)] = "advanced",
    [nameof(UpsertViewTool)] = "advanced",
    [nameof(UpsertSiteMapTool)] = "advanced",
    [nameof(UpsertEntityTool)] = "advanced",
    [nameof(UpsertAttributeTool)] = "advanced",
    [nameof(ExecuteWebApiTool)] = "advanced",
};

private static readonly Dictionary<string, int> CategoryLevel = new()
{
    ["basic"] = 1,
    ["standard"] = 2,
    ["advanced"] = 3,
    ["all"] = 3,  // all = load everything = same as advanced
};
```

### Step 3: Replace `WithToolsFromAssembly()` in `McpServerHost.cs`

```csharp
public async Task RunAsync(string category = "all")
{
    var builder = Host.CreateApplicationBuilder();
    // ... logging, services ...

    var requestedLevel = CategoryLevel.TryGetValue(
        category.Trim().ToLowerInvariant(), out var lvl) ? lvl : 3;

    builder.Services
        .AddMcpServer(options =>
        {
            options.ServerInfo = new()
            {
                Name = $"DynamicsCrm.DevKit ({category})",
                Version = Shared.Const.Version
            };
            options.ServerInstructions = $"Connected to: {_serviceClient.ConnectedOrgUriActual} | " +
                $"Org: {_serviceClient.ConnectedOrgFriendlyName} | " +
                $"Category: {category} ({GetToolCount(requestedLevel)} tools)";
        })
        .WithStdioServerTransport()
        .WithResourcesFromAssembly();

    // Register only tools matching the requested level
    RegisterFilteredTools(builder.Services, requestedLevel);

    await builder.Build().RunAsync();
}

private void RegisterFilteredTools(IServiceCollection services, int requestedLevel)
{
    var assembly = Assembly.GetExecutingAssembly();
    var toolTypes = assembly.GetTypes()
        .Where(t => t.GetCustomAttribute<McpServerToolTypeAttribute>() != null);

    foreach (var toolType in toolTypes)
    {
        var typeName = toolType.Name;
        if (!ToolCategoryMap.TryGetValue(typeName, out var toolCategory))
            continue; // unknown tools are excluded — all tools must be in the map

        var toolLevel = CategoryLevel.TryGetValue(toolCategory, out var tl) ? tl : 3;
        if (toolLevel > requestedLevel)
            continue; // skip tools above the requested level

        // Use reflection to call WithTools<T>() for this type
        var method = typeof(McpServerBuilderExtensions)
            .GetMethods()
            .First(m => m.Name == "WithTools" && m.IsGenericMethod);
        // ... invoke with toolType
    }
}
```

### Step 4: Update `McpCommand.cs`

Pass category from args to `McpServerHost`:

```csharp
// In ExecuteAsync:
var host = new Mcp.McpServerHost(serviceClient);
await host.RunAsync(settings.Category);  // pass --category value
```

Update `GetCategory()` and `PrintTools()` to use the new 3-tier system.

### Step 5: Update `McpCommand.cs` — `GetCategory()`

```csharp
private static string GetCategory(string typeName)
{
    if (McpServerHost.ToolCategoryMap.TryGetValue(typeName, out var category))
    {
        return category switch
        {
            "basic" => "Basic",
            "standard" => "Standard",
            "advanced" => "Advanced",
            _ => "Advanced"
        };
    }
    return "Advanced"; // unknown tools default to advanced
}
```

---

## Relationship to Existing Plan

The existing `mcp-category-filtering-plan.md` proposed `read`/`write`/`advance` based on `ReadOnly`/`Destructive` attributes. This new proposal replaces it with a **user-centric tier model**:

| Old (attribute-based) | New (tier-based) | Why change |
|---|---|---|
| `read` (17 tools) | `basic` (9) + `standard` (28) | Users don't think "read vs write" — they think "I need basics" vs "I need everything" |
| `write` (9 tools) | Distributed across `basic` and `advanced` | `upsert_record` is basic; `upsert_form` is advanced |
| `advance` (1 tool) | Part of `advanced` (6 tools) | Group all risky/powerful tools together |

The `ReadOnly`/`Destructive` attributes remain on tools — they still serve MCP protocol purposes. The `--category` filter is an independent, additive layer.

---

## Cross-Reference

| Document | Location |
|----------|----------|
| Token optimization plan | `docs/mcp/PLAN-token-optimization.md` |
| Old category plan (superseded) | `mcp-category-filtering-plan.md` |
| Prompt validation files | `docs/mcp/prompts/` |
