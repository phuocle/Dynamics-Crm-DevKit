# MCP Tool Category Filtering — Load Tools by Category

## Problem

The DevKit MCP server currently loads all **28 tools** at once via `WithToolsFromAssembly()`. This is too many for LLMs — it increases prompt token usage and can confuse the AI. Users should be able to configure their `mcp.json` to load only the tools they need by category.

## Current State

### Current Categories (from `McpCommand.GetCategory()`)
The current categorization uses a hardcoded name-based approach with only **4 categories**:

| Category | Logic | Tools |
|---|---|---|
| **Metadata Discovery** | `ReadOnly=true` + name in hardcoded set | 6 tools |
| **Query & Read** | `ReadOnly=true` + NOT in metadata set | ~10 tools |
| **Data Operations** | `ReadOnly=false` + NOT advanced names | ~10 tools |
| **Advanced** | `execute_webapi` or `publish_customizations` | 2 tools |

### Current Registration
```csharp
// McpServerHost.cs — loads ALL tools
.WithToolsFromAssembly()
```

### Current `--tools` Output
`devkit mcp --tools` lists tools grouped by these 4 categories.

---

## Proposed Changes

### New `--category` CLI Argument

Add a `--category` option to `McpCommandArgs` that controls which tools are loaded:

```
devkit mcp --category read          # Read-only tools
devkit mcp --category write         # Write/mutation tools
devkit mcp --category all           # All tools (default)
devkit mcp                          # No arg = all (same as --category all)
```

### New Category System (3 categories)

| Category | Slug | Description | Tool Count |
|---|---|---|---|
| **Read** | `read` | All read-only, non-destructive tools — metadata discovery, querying, searching | 17 |
| **Write** | `write` | All tools that create, update, or delete data/metadata | 11 |
| **All** | `all` | Everything (default) | 28 |

#### `read` — 17 tools (ReadOnly=true)

| # | Tool | Purpose |
|---|---|---|
| 1 | `whoami` | Get current user & environment info |
| 2 | `get_entities_metadata` | List all tables in environment |
| 3 | `get_entity_metadata` | Get detailed metadata for one table |
| 4 | `get_global_optionsets` | Get global choices/optionsets |
| 5 | `get_messages` | Discover SDK messages & APIs |
| 6 | `get_solution_components` | List solution components |
| 7 | `get_record` | Retrieve a single record by ID |
| 8 | `execute_fetchxml` | Query data using FetchXML |
| 9 | `search` | Dataverse Relevance Search |
| 10 | `parse_record_url` | Parse a Dynamics 365 URL |
| 11 | `get_forms` | Get form definitions |
| 12 | `get_views` | Get view definitions |
| 13 | `get_security_roles` | List security roles & privileges |
| 14 | `get_plugin_trace_logs` | Query plugin trace logs |
| 15 | `get_audit_histories` | Retrieve audit history |
| 16 | `get_business_rules` | List business rules |
| 17 | `build_form_xml` | Build FormXML (read-only builder) |

#### `write` — 11 tools (ReadOnly=false)

| # | Tool | Purpose |
|---|---|---|
| 1 | `upsert_record` | Create, update, or upsert a record |
| 2 | `delete_record` | Delete a record |
| 3 | `create_entity` | Create a new custom table |
| 4 | `create_attribute` | Add a new column to a table |
| 5 | `update_attribute` | Update column properties |
| 6 | `update_form` | Update, rename, or undo a form |
| 7 | `update_view` | Update, create, rename, or undo a view |
| 8 | `update_sitemap` | Update app SiteMap |
| 9 | `publish_customizations` | Publish metadata changes |
| 10 | `execute_webapi` | Execute any Dataverse Web API request |
| 11 | `manage_environment_variables` | List/get/set environment variables |

---

## Implementation Details

### [MODIFY] McpCommandArgs.cs

Add `--category` CLI option:

```csharp
[CommandOption("--category")]
[Description("Tool category to load: read, write, all (default: all)")]
[DefaultValue("all")]
public string Category { get; set; } = "all";
```

### [MODIFY] McpServerHost.cs

- Accept `category` parameter
- Replace `WithToolsFromAssembly()` with selective `WithTools<T>()` calls based on category
- Use reflection to match tools to categories

### [MODIFY] McpCommand.cs

- Pass the `category` to `McpServerHost`
- Update `PrintTools()` to use new 3-category system
- Update `GetCategory()` to use `read`/`write` instead of old 4 categories
- Update `PrintSetupGuide()` to document `--category` option

---

## How Users Configure `mcp.json` for Category Filtering

### VS Code / Cursor — Read-Only (safe for analysis):
```json
{
  "servers": {
    "devkit": {
      "type": "stdio",
      "command": "devkit",
      "args": ["mcp", "--category", "read"],
      "env": { ... }
    }
  }
}
```

### Antigravity — Full Power (all tools):
```json
{
  "mcpServers": {
    "devkit-v4": {
      "command": "devkit",
      "args": ["mcp"],
      "env": { ... }
    }
  }
}
```

### Multi-Server Setup — Separate read/write:
```json
{
  "mcpServers": {
    "devkit-read": {
      "command": "devkit",
      "args": ["mcp", "--category", "read"],
      "env": { ... }
    },
    "devkit-write": {
      "command": "devkit",
      "args": ["mcp", "--category", "write"],
      "env": { ... }
    }
  }
}
```

---

## Open Questions

1. **Category count**: 3 categories (`read`/`write`/`all`) or 4 categories (`metadata`/`query`/`write`/`all`)?
2. **`--tools` with `--category`**: Should `devkit mcp --tools --category read` filter the tools listing too?
3. **Server name suffix**: When using `--category read`, should the MCP server identify itself as `DynamicsCrm.DevKit (read)` so the AI can distinguish multiple devkit connections?
