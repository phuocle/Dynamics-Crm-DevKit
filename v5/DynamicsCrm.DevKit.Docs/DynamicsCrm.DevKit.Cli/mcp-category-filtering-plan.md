# MCP Tool Category Filtering — Load Tools by Category

## Problem

The DevKit MCP server currently loads all **27 tools** at once via `WithToolsFromAssembly()`. This is too many for LLMs — it increases prompt token usage and can confuse the AI. Users should be able to configure their `mcp.json` to load only the tools they need by category.

## Current State (as of 2026-04-03)

### Tool Inventory — 27 tools

| # | Tool Name | Class | ReadOnly | Destructive | Idempotent |
|---|---|---|---|---|---|
| 1 | `whoami` | WhoAmITool | true | false | true |
| 2 | `get_metadata_entities` | GetMetadataEntitiesTool | true | false | true |
| 3 | `get_global_optionsets` | GetGlobalOptionSetsTool | true | false | true |
| 4 | `get_messages` | GetMessagesTool | true | false | true |
| 5 | `get_components` | GetComponentsTool | true | false | true |
| 6 | `get_record` | GetRecordTool | true | false | true |
| 7 | `execute_fetchxml` | ExecuteFetchXmlTool | true | false | true |
| 8 | `search` | SearchTool | true | false | true |
| 9 | `parse_record_url` | ParseRecordUrlTool | true | false | true |
| 10 | `get_forms` | GetFormsTool | true | false | true |
| 11 | `get_views` | GetViewsTool | true | false | true |
| 12 | `get_roles` | GetRolesTool | true | false | true |
| 13 | `get_logs` | GetLogsTool | true | false | true |
| 14 | `get_histories` | GetHistoriesTool | true | false | true |
| 15 | `get_rules` | GetRulesTool | true | false | true |
| 16 | `get_variables` | GetVariablesTool | true | false | true |
| 17 | `build_formxml` | BuildFormxmlTool | true | false | true |
| 18 | `upsert_record` | UpsertRecordTool | false | true | false |
| 19 | `delete_record` | DeleteRecordTool | false | true | false |
| 20 | `upsert_entity` | UpsertEntityTool | false | true | false |
| 21 | `upsert_attribute` | UpsertAttributeTool | false | false | false |
| 22 | `upsert_form` | UpsertFormTool | false | true | true |
| 23 | `upsert_view` | UpsertViewTool | false | true | true |
| 24 | `manage_sitemap` | ManageSiteMapTool | false | true | true |
| 25 | `publish` | PublishTool | false | false | true |
| 26 | `upsert_variable` | UpsertVariableTool | false | false | false |
| 27 | `execute_webapi` | ExecuteWebApiTool | false | true | false |

### Current Registration

```csharp
// McpServerHost.cs — loads ALL tools
.WithToolsFromAssembly()
```

---

## Proposed Category System (3 categories + `all`)

### Design Principle

Categories are derived from MCP tool annotations (`ReadOnly`, `Destructive`, `Idempotent`) rather than hardcoded name lists. This makes the system self-maintaining when tools are added or removed.

| Category | Slug | Rule | Description |
|---|---|---|---|
| **Read** | `read` | `ReadOnly = true` | All read-only tools — metadata discovery, querying, searching, auditing |
| **Write** | `write` | `ReadOnly = false` AND NOT `execute_webapi` | Tools that create, update, delete data or metadata. Most have safety nets (backup, validation). |
| **Advance** | `advance` | `execute_webapi` only | The generic Web API tool — can do ANY HTTP method. Hard-blocks form/view/sitemap writes but allows everything else. |
| **All** | `all` | Everything | Default — all 27 tools |

---

## Complete Category Assignment

### `read` — 17 tools (`ReadOnly = true`)

| # | Tool Name | Idempotent | Modes | Purpose |
|---|---|---|---|---|
| 1 | `whoami` | true | Single | Get current user & environment info |
| 2 | `get_metadata_entities` | true | List / Detail | List all tables or detail one table's metadata |
| 3 | `get_global_optionsets` | true | List / Detail | List all or get one global optionset |
| 4 | `get_messages` | true | Single | Discover SDK messages & APIs for an entity |
| 5 | `get_components` | true | Single | List all components inside a solution |
| 6 | `get_record` | true | Single | Retrieve a single record by ID |
| 7 | `execute_fetchxml` | true | Single | Query data using FetchXML |
| 8 | `search` | true | Single | Dataverse Relevance Search |
| 9 | `parse_record_url` | true | Single | Parse a Dynamics 365 URL |
| 10 | `get_forms` | true | List / Detail | List all forms or get one form's FormXML |
| 11 | `get_views` | true | List / Detail | List all views or get one view's XML |
| 12 | `get_roles` | true | List / User / Detail | List roles, check user roles, or role detail |
| 13 | `get_logs` | true | List / Detail | Query plugin trace logs |
| 14 | `get_histories` | true | Browse / Detail | Browse audit entries or detail for one record |
| 15 | `get_rules` | true | List / Detail | List business rules or get one rule's XAML |
| 16 | `get_variables` | true | List / Detail | List or get environment variables |
| 17 | `build_formxml` | true | Single | Build modified FormXML (read-only builder, returns XML) |

> **Note on `get_variables`**: Previously in `advance` because it had a `set` action. That action was removed — it is now pure read-only (`ReadOnly = true`). Moved to `read`.

### `write` — 9 tools (`ReadOnly = false`, excludes `execute_webapi`)

| # | Tool Name | Destructive | Idempotent | Safety Nets | Purpose |
|---|---|---|---|---|---|
| 1 | `upsert_record` | true | false | — | Create, update, or upsert a data record |
| 2 | `delete_record` | true | false | — | Delete a data record (permanent) |
| 3 | `upsert_entity` | true | false | — | Create a new custom table |
| 4 | `upsert_attribute` | false | false | — | Create or update a column on a table |
| 5 | `upsert_form` | true | true | Auto-backup + XSD validation | Update, rename, or undo a form |
| 6 | `upsert_view` | true | true | Auto-backup + sync validation | Update, create, rename, or undo a view |
| 7 | `manage_sitemap` | true | true | Auto-backup + XSD validation | Create, update, or undo app SiteMap |
| 8 | `publish` | false | true | Idempotent (safe to repeat) | Publish metadata changes |
| 9 | `upsert_variable` | false | false | — | Create or update environment variable |

> **Note on `publish`**: Previously in `advance`. It's now categorized as `write` because:
> - It is a natural final step after any write operation (upsert_form → publish)
> - `Destructive = false, Idempotent = true` — it's the safest write tool
> - Excluding it from `write` would force users to also load `advance` just to publish
> - Separating it into `advance` created unnecessary friction for the most common workflow

### `advance` — 1 tool (generic, unbounded power)

| # | Tool Name | Destructive | Idempotent | Why `advance`? |
|---|---|---|---|---|
| 1 | `execute_webapi` | true | false | Generic Web API — can do ANY HTTP method (GET/POST/PUT/PATCH/DELETE). Hard-blocks systemforms/savedqueries/sitemaps writes but allows everything else. This is the "escape hatch" tool. |

> **Why only 1 tool?** The `advance` category exists for tools that bypass the structured safety of specialized tools. `execute_webapi` is the only tool that fits: it's a raw HTTP client that can do anything. All other write tools have specific parameters, validation, and backup mechanisms.

---

## Changes from Previous Plan

| What Changed | Old | New | Reason |
|---|---|---|---|
| Tool count | 28 | 27 | `get_entities_metadata` + `get_entity_metadata` merged into `get_metadata_entities`; `create_entity` renamed to `upsert_entity`; `create_record` + `update_record` merged into `upsert_record`; `upsert_variable` added |
| `get_variables` category | `advance` | `read` | `set` action was removed — now pure read-only |
| `publish` category | `advance` | `write` | Natural final step of write workflows; safest write tool (idempotent, non-destructive) |
| `advance` count | 3 | 1 | Only `execute_webapi` remains — the true "anything goes" tool |
| Tool names | `create_entity`, `update_form`, `update_view`, `create_record`, `update_record` | `upsert_entity`, `upsert_form`, `upsert_view`, `upsert_record` | Renamed/merged in recent refactors |
| `Idempotent` annotations | Missing on 6 tools | All 27 tools annotated | Added in commit `2e7f21071` |

---

## `--category` CLI Argument

```
devkit mcp --category read          # Read-only tools (17)
devkit mcp --category write         # Write/mutation tools (9)
devkit mcp --category advance       # Advanced tool (1)
devkit mcp --category all           # All tools (default, 27)
devkit mcp                          # No arg = all
```

Multiple categories with comma:

```
devkit mcp --category read,write    # 26 tools (excludes execute_webapi)
devkit mcp --category read,advance  # 18 tools (read + execute_webapi)
devkit mcp --category write,advance # 10 tools (write + execute_webapi)
```

---

## Category Selection Matrix

| `--category` value | Tools loaded | Count | Use case |
|---|---|---|---|
| _(none)_ / `all` | read + write + advance | 27 | Full power for trusted AI agents |
| `read` | read only | 17 | Safe analysis, metadata discovery, querying |
| `write` | write only | 9 | Mutations + publish (most common write workflow) |
| `advance` | advance only | 1 | Specialist — only `execute_webapi` |
| `read,write` | read + write | 26 | **Recommended** — excludes only `execute_webapi` |
| `read,advance` | read + advance | 18 | Analysis + raw Web API access |
| `write,advance` | write + advance | 10 | All write operations including raw Web API |

---

## Implementation Details

### [MODIFY] McpCommandArgs.cs

```csharp
[CommandOption("--category")]
[Description("Tool category to load: read, write, advance, all (default: all). Combine with comma: read,write")]
[DefaultValue("all")]
public string Category { get; set; } = "all";
```

### [MODIFY] McpServerHost.cs

Replace `WithToolsFromAssembly()` with selective `WithTools<T>()` based on category.

Category assignment uses annotation-based rules, not a hardcoded dictionary:

```csharp
private static string GetToolCategory(Type toolType)
{
    var attr = toolType.GetMethods()
        .SelectMany(m => m.GetCustomAttributes<McpServerToolAttribute>())
        .FirstOrDefault();

    if (attr == null) return "read"; // safe default

    // execute_webapi is always "advance"
    if (attr.Name == "execute_webapi") return "advance";

    // ReadOnly = true → "read"
    if (attr.ReadOnly) return "read";

    // Everything else → "write"
    return "write";
}
```

### [MODIFY] McpCommand.cs

- Pass `category` to `McpServerHost`
- Update `PrintTools()` to use 3-category grouping
- Update `PrintSetupGuide()` to document `--category` option
- Server name suffix: `DynamicsCrm.DevKit (read)` when filtered

---

## User Configuration Examples

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

### Recommended — Read + Write (excludes raw Web API):

```json
{
  "servers": {
    "devkit": {
      "type": "stdio",
      "command": "devkit",
      "args": ["mcp", "--category", "read,write"],
      "env": { ... }
    }
  }
}
```

### Full Power (all tools, default):

```json
{
  "servers": {
    "devkit": {
      "type": "stdio",
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
      "args": ["mcp", "--category", "write,advance"],
      "env": { ... }
    }
  }
}
```

---

## Tool Naming Convention Audit

### Convention Rules

| Pattern | Naming | Examples |
|---|---|---|
| Dual-mode (list + detail) | Plural noun, param switches mode | `get_forms` + `form_id` → detail |
| Always returns list | Plural noun | `get_messages`, `get_components` |
| Always returns one item | Singular noun | `get_record` |
| Create/modify operations | `upsert_` prefix | `upsert_record`, `upsert_form`, `upsert_entity` |
| Delete operations | `delete_` prefix | `delete_record` |
| Query/action tools | Verb pattern | `execute_fetchxml`, `search`, `publish` |
| Builder tools | `build_` prefix | `build_formxml` |
| Utility tools | Descriptive name | `whoami`, `parse_record_url` |

### Dual-Mode Tools (List vs Detail)

| # | Tool | List Mode | Detail Mode | Switch Parameter |
|---|---|---|---|---|
| 1 | `get_metadata_entities` | List all tables | Detail for one table | `entity_name` |
| 2 | `get_global_optionsets` | Summary of all optionsets | Options for one optionset | `optionset_name` |
| 3 | `get_forms` | Lists forms: ID, name, type | Full FormXML for one form | `form_id` |
| 4 | `get_views` | Lists views: ID, name, type | Full FetchXML+LayoutXML | `view_id` |
| 5 | `get_roles` | Lists root security roles | Privileges for one role | `role_id` or `user_id` |
| 6 | `get_logs` | Compact metadata list | Full trace output + exception | `record_id` |
| 7 | `get_histories` | Browse summary | Field-level old/new values | `record_id` |
| 8 | `get_rules` | Lists rules: name, scope | Full XAML conditions+actions | `rule_id` |
| 9 | `get_variables` | Lists all variables | Detail for one variable | `variable_name` |

### Non-Dual-Mode Tools

| # | Tool | Always Returns |
|---|---|---|
| 1 | `whoami` | Single user/environment info |
| 2 | `get_messages` | List of messages for an entity |
| 3 | `get_components` | List of components in a solution |
| 4 | `get_record` | Detail for one record |
| 5 | `execute_fetchxml` | Query results |
| 6 | `search` | Search results |
| 7 | `parse_record_url` | Parsed URL info |
| 8 | `build_formxml` | Modified FormXML string |

> **All 27 tools follow the naming convention correctly.** No renaming needed.
