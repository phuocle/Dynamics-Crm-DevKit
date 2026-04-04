# MCP Tool Categories — Filter by `--category`

**Date**: 2026-04-04
**Status**: Proposal
**Purpose**: Let users load only a subset of 34 tools via `devkit mcp --category <name>`

---

## Problem

Loading 34 tools into an AI context costs ~8,500 tokens just for descriptions. Most users only need a subset. By filtering tools at startup, users see fewer tools on the MCP UI and the AI gets a smaller, more focused toolset.

---

## 3 Categories + All

| Category | Slug | Description | Count |
|----------|------|-------------|-------|
| **Basic** | `basic` | Core essentials — query data, read metadata, CRUD. Enough for 80% of daily work. | 10 |
| **Standard** | `standard` | Basic + inspection tools — forms, views, roles, workflows, flows, plugins, commands, auditing. Full read + safe writes. | 28 |
| **Advanced** | `advanced` | Standard + schema changes + raw Web API. Creates entities, attributes, modifies forms/views/sitemaps. | 34 |
| **All** | `all` | Alias for `advanced`. Default when no `--category` specified. | 34 |

**Key design**: Each level **includes all tools from the previous level** (cumulative, not exclusive).

---

## Tool Assignment

### `basic` — 10 tools

> Everyday Dataverse operations: identify, query, read/write data, publish.

| # | Tool | Purpose |
|---|------|---------|
| 1 | `whoami` | Identity + environment info |
| 2 | `get_metadata_entities` | List/detail entity metadata (attributes, relationships) |
| 3 | `get_global_optionsets` | List/detail global choice columns |
| 4 | `get_record` | Retrieve a single record by ID |
| 5 | `upsert_record` | Create/update/upsert a data record |
| 6 | `delete_record` | Delete a record by ID |
| 7 | `execute_fetchxml` | FetchXML queries (filters, joins, aggregation) |
| 8 | `relevance_search` | Full-text search across entities |
| 9 | `parse_record_url` | Extract entity + ID from Dynamics 365 URLs |
| 10 | `publish_customizations` | Publish metadata changes |

### `standard` — 28 tools (basic + 18 more)

> Adds: inspection tools, process discovery, security, auditing, debugging, solution management, commands.

| # | Tool | Purpose |
|---|------|---------|
| 11 | `get_forms` | List/detail form definitions (FormXML) |
| 12 | `get_views` | List/detail view definitions (FetchXML + LayoutXML) |
| 13 | `get_roles` | Security roles, privileges, user role assignments |
| 14 | `get_sdk_messages` | SDK messages + Custom Actions for an entity |
| 15 | `get_variables` | Environment variables (read-only) |
| 16 | `get_classic_workflows` | Classic workflows (category=0) |
| 17 | `get_cloud_flows` | Power Automate cloud flows (category=5) + run history |
| 18 | `get_bpfs` | Business Process Flows (category=4) + stages |
| 19 | `get_business_rules` | Business rules (category=2, client-side logic) |
| 20 | `get_custom_apis` | Custom API definitions + parameters |
| 21 | `get_audit_history` | Audit trail — who changed what, when |
| 22 | `get_solution_components` | Components inside a solution + active layers |
| 23 | `get_plugin_trace_logs` | Plugin trace log output + exceptions |
| 24 | `get_jobs` | System jobs — async plugin/workflow failures |
| 25 | `get_plugins` | Plugin assemblies, types, steps, images |
| 26 | `get_commands` | List/inspect modern command bar buttons (appaction) |
| 27 | `upsert_variable` | Create/update environment variables |
| 28 | `build_formxml` | Build FormXML (read-only builder, returns XML) |

### `advanced` — 34 tools (standard + 6 more)

> Adds: schema changes (entities, attributes), UI modification (forms, views, sitemaps), raw Web API.

| # | Tool | Purpose |
|---|------|---------|
| 29 | `upsert_form` | Update/rename/undo forms (with backup + validation) |
| 30 | `upsert_view` | Create/update/rename/undo views (with backup + sync check) |
| 31 | `upsert_sitemap` | Create/update/undo app sitemaps (with backup + XSD) |
| 32 | `upsert_entity` | Create a new custom entity/table |
| 33 | `upsert_attribute` | Create/update columns on entities |
| 34 | `execute_webapi` | Raw Web API — any HTTP method (the "escape hatch") |

---

## Token Impact

| Category | Tools | Est. tokens | vs All |
|----------|-------|-------------|--------|
| `basic` | 10 | ~2,600 | -69% |
| `standard` | 28 | ~7,000 | -18% |
| `advanced` / `all` | 34 | ~8,500 | baseline |

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
| `basic` | 10 tools | Daily data work, queries, simple CRUD |
| `standard` | 28 tools | Full inspection + debugging + safe writes + commands |
| `advanced` | 34 tools | Schema changes + raw Web API |
| _(none)_ | 34 tools | Same as `advanced` (default) |

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
[Description("Tool category: basic (10), standard (28), advanced (34, default). Controls which tools load.")]
[DefaultValue("advanced")]
public string Category { get; set; } = "advanced";
```

### Step 2: Define category map in `McpServerHost.cs`

```csharp
// Tool category assignment — cumulative levels
private static readonly Dictionary<string, string> ToolCategoryMap = new()
{
    // basic (10 tools)
    ["whoami"] = "basic",
    ["get_metadata_entities"] = "basic",
    ["get_global_optionsets"] = "basic",
    ["get_record"] = "basic",
    ["upsert_record"] = "basic",
    ["delete_record"] = "basic",
    ["execute_fetchxml"] = "basic",
    ["relevance_search"] = "basic",
    ["parse_record_url"] = "basic",
    ["publish_customizations"] = "basic",

    // standard (18 additional tools)
    ["get_forms"] = "standard",
    ["get_views"] = "standard",
    ["get_roles"] = "standard",
    ["get_sdk_messages"] = "standard",
    ["get_variables"] = "standard",
    ["get_classic_workflows"] = "standard",
    ["get_cloud_flows"] = "standard",
    ["get_bpfs"] = "standard",
    ["get_business_rules"] = "standard",
    ["get_custom_apis"] = "standard",
    ["get_audit_history"] = "standard",
    ["get_solution_components"] = "standard",
    ["get_plugin_trace_logs"] = "standard",
    ["get_jobs"] = "standard",
    ["get_plugins"] = "standard",
    ["get_commands"] = "standard",
    ["upsert_variable"] = "standard",
    ["build_formxml"] = "standard",

    // advanced (6 additional tools)
    ["upsert_form"] = "advanced",
    ["upsert_view"] = "advanced",
    ["upsert_sitemap"] = "advanced",
    ["upsert_entity"] = "advanced",
    ["upsert_attribute"] = "advanced",
    ["execute_webapi"] = "advanced",
};

private static readonly Dictionary<string, int> CategoryLevel = new()
{
    ["basic"] = 1,
    ["standard"] = 2,
    ["advanced"] = 3,
    ["all"] = 3,
};
```

### Step 3: Replace `WithToolsFromAssembly()` in `McpServerHost.cs`

```csharp
public async Task RunAsync(string category = "advanced")
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
    var mcpBuilder = builder.Services.BuildServiceProvider()
        .GetRequiredService<IMcpServerBuilder>(); // pseudo — see actual API below

    // ACTUAL approach: use WithTools<T>() for each matching tool type
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
        // Check if any method in this tool type matches the requested category
        var shouldInclude = toolType.GetMethods()
            .Where(m => m.GetCustomAttribute<McpServerToolAttribute>() != null)
            .Any(m =>
            {
                var toolName = m.GetCustomAttribute<McpServerToolAttribute>()?.Name ?? m.Name;
                if (!ToolCategoryMap.TryGetValue(toolName, out var toolCategory))
                    return true; // unknown tools default to included
                var toolLevel = CategoryLevel.TryGetValue(toolCategory, out var tl) ? tl : 3;
                return toolLevel <= requestedLevel;
            });

        if (shouldInclude)
        {
            // Use reflection to call WithTools<T>() for this type
            // McpServerBuilderExtensions.WithTools<T>(builder) is generic
            var method = typeof(McpServerBuilderExtensions)
                .GetMethods()
                .First(m => m.Name == "WithTools" && m.IsGenericMethod);
            // ... invoke with toolType
        }
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
private static string GetCategory(string name, bool readOnly, bool destructive)
{
    if (McpServerHost.ToolCategoryMap.TryGetValue(name, out var category))
    {
        return category switch
        {
            "basic" => "Basic",
            "standard" => "Standard",
            "advanced" => "Advanced",
            _ => "Advanced"
        };
    }
    return readOnly ? "Standard" : "Advanced";
}
```

---

## Relationship to Existing Plan

The existing `mcp-category-filtering-plan.md` proposed `read`/`write`/`advance` based on `ReadOnly`/`Destructive` attributes. This new proposal replaces it with a **user-centric tier model**:

| Old (attribute-based) | New (tier-based) | Why change |
|---|---|---|
| `read` (17 tools) | `basic` (10) + `standard` (28) | Users don't think "read vs write" — they think "I need basics" vs "I need everything" |
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
