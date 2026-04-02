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
devkit mcp --category advance       # Advanced/specialist tools
devkit mcp --category all           # All tools (default)
devkit mcp                          # No arg = all (same as --category all)
```

Multiple categories can be combined with comma:
```
devkit mcp --category read,write    # Read + Write tools (excludes advance)
devkit mcp --category read,advance  # Read + Advance tools (excludes normal write)
```

### New Category System (3 categories + `all`)

| Category | Slug | Description | Tool Count |
|---|---|---|---|
| **Read** | `read` | All read-only, non-destructive tools — metadata discovery, querying, searching | 17 |
| **Write** | `write` | Tools that create, update, or delete data/metadata with safety nets | 8 |
| **Advance** | `advance` | Powerful/dangerous tools that bypass safety nets or have mixed R/W behavior | 3 |
| **All** | `all` | Everything (default) | 28 |

---

## Complete Tool Audit (28 tools)

### Category Assignment — Source of Truth

#### `read` — 17 tools (`ReadOnly=true, Destructive=false`)

| # | Tool Name | ReadOnly | Destructive | Modes | Purpose |
|---|---|---|---|---|---|
| 1 | `whoami` | ✅ true | ❌ false | Single | Get current user & environment info |
| 2 | `get_entities_metadata` | ✅ true | ❌ false | Single | List all tables in environment |
| 3 | `get_entity_metadata` | ✅ true | ❌ false | Single | Get detailed metadata for one table |
| 4 | `get_global_optionsets` | ✅ true | ❌ false | List / Detail | List all or get one global optionset |
| 5 | `get_messages` | ✅ true | ❌ false | Single | Discover SDK messages & APIs for an entity |
| 6 | `get_components` | ✅ true | ❌ false | Single | List all components inside a solution |
| 7 | `get_record` | ✅ true | ❌ false | Single | Retrieve a single record by ID |
| 8 | `execute_fetchxml` | ✅ true | ❌ false | Single | Query data using FetchXML |
| 9 | `search` | ✅ true | ❌ false | Single | Dataverse Relevance Search |
| 10 | `parse_record_url` | ✅ true | ❌ false | Single | Parse a Dynamics 365 URL |
| 11 | `get_forms` | ✅ true | ❌ false | List / Detail | List all forms or get one form's FormXML |
| 12 | `get_views` | ✅ true | ❌ false | List / Detail | List all views or get one view's XML |
| 13 | `get_roles` | ✅ true | ❌ false | List / User / Detail | List roles, check user roles, or role detail |
| 14 | `get_logs` | ✅ true | ❌ false | List / Detail | Query plugin trace logs (compact list or full detail) |
| 15 | `get_histories` | ✅ true | ❌ false | Browse / Detail | Browse audit entries or detail for one record |
| 16 | `get_rules` | ✅ true | ❌ false | List / Detail | List business rules or get one rule's XAML |
| 17 | `build_form_xml` | ✅ true | ❌ false | Single | Build modified FormXML (read-only builder, returns XML) |

#### `write` — 8 tools (`ReadOnly=false`, safe/targeted operations)

| # | Tool Name | ReadOnly | Destructive | Purpose |
|---|---|---|---|---|
| 1 | `upsert_record` | ❌ false | ❌ false | Create, update, or upsert a data record |
| 2 | `delete_record` | ❌ false | ✅ true | Delete a data record |
| 3 | `create_entity` | ❌ false | ❌ false | Create a new custom table |
| 4 | `create_attribute` | ❌ false | ❌ false | Add a new column to a table |
| 5 | `update_attribute` | ❌ false | ❌ false | Update column properties |
| 6 | `update_form` | ❌ false | ✅ true | Update, rename, or undo a form (has backup+XSD validation) |
| 7 | `update_view` | ❌ false | ✅ true | Update, create, rename, or undo a view (has backup+sync validation) |
| 8 | `update_sitemap` | ❌ false | ✅ true | Update app SiteMap (has backup+XSD validation) |

#### `advance` — 3 tools (powerful/mixed behavior, bypass safety nets)

| # | Tool Name | ReadOnly | Destructive | Why `advance`? |
|---|---|---|---|---|
| 1 | `execute_webapi` | ❌ false | ❌ false | Generic Web API — can do ANY HTTP method (GET/POST/PUT/PATCH/DELETE). Hard-blocks systemforms/savedqueries/sitemaps writes but allows everything else. Most powerful and dangerous. |
| 2 | `publish_customizations` | ❌ false | ❌ false | Not a data mutation but a **system-wide side-effect**. Publishing affects ALL users immediately. Misuse can break production UI. |
| 3 | `get_variables` | ❌ false | ❌ false | **Mixed R/W** — `action=list|get` is read-only, `action=set` is write. Config changes affect all users and integrations. |

---

## Tool Naming Convention Audit (Singular / Plural / List vs Detail)

### Convention Rules (Desired)

| Pattern | Naming | Examples |
|---|---|---|
| **Returns a list (plural)** | Use plural noun | `get_forms`, `get_views`, `get_roles` |
| **Returns single detail (singular)** | Same tool, differentiated by parameter | `get_forms` + `form_id` → single form detail |
| **Tools with dual mode** | Same tool name handles both list and detail | `get_histories` (browse mode vs detail mode via `record_id`) |
| **Action tools** | Verb + noun | `create_entity`, `delete_record`, `update_form` |
| **Query tools** | Verb + noun | `execute_fetchxml`, `search` |

### Dual-Mode Tools Analysis (List vs Detail within one tool)

These tools implement a **List/Detail pattern** where the same tool handles both modes, controlled by a parameter:

| # | Tool | List Mode (no ID) | Detail Mode (with ID) | Switch Parameter | ✅ Follows Convention? |
|---|---|---|---|---|---|
| 1 | `get_forms` | Lists all forms: ID, name, type, status | Returns full FormXML for one form | `form_id` | ✅ Yes — plural name, param switches mode |
| 2 | `get_views` | Lists all views: ID, name, type, status | Returns full FetchXML+LayoutXML for one view | `view_id` | ✅ Yes — plural name, param switches mode |
| 3 | `get_roles` | Lists all root security roles | Shows all privileges for one role | `role_id` or `user_id` | ✅ Yes — plural name, 3-mode switch |
| 4 | `get_logs` | Compact list: metadata only (no trace output) | Returns FULL trace output + exception | `record_id` | ✅ Yes — plural name, param switches mode |
| 5 | `get_histories` | Browse: summary across records/entities | Detail: field-level old/new values for one record | `record_id` | ✅ Yes — plural name, param switches mode |
| 6 | `get_rules` | Lists all rules: name, scope, status | Returns full XAML conditions+actions | `rule_id` | ✅ Yes — plural name, param switches mode |
| 7 | `get_global_optionsets` | Summary table of all global optionsets | Detailed options for one specific optionset | `optionset_name` | ✅ Yes — plural name, param switches mode |

### Non-Dual-Mode Tools (always single behavior)

| # | Tool | Always Returns | ✅ Naming OK? |
|---|---|---|---|
| 1 | `whoami` | Single user/environment info | ✅ Special name (convention: `whoami`) |
| 2 | `get_entities_metadata` | Always a list of entities | ✅ Plural — always returns list |
| 3 | `get_entity_metadata` | Always detail for one entity | ✅ Singular — always returns one entity's metadata |
| 4 | `get_messages` | Always a list of messages | ✅ Plural — always returns list |
| 5 | `get_components` | Always a list of components | ✅ Plural — always returns list |
| 6 | `get_record` | Always detail for one record | ✅ Singular — always returns one record |
| 7 | `execute_fetchxml` | Query results (variable) | ✅ Verb pattern — not a get tool |
| 8 | `search` | Search results (variable) | ✅ Verb pattern — not a get tool |
| 9 | `parse_record_url` | Always parses one URL | ✅ Singular — always one URL |
| 10 | `build_form_xml` | Always returns modified XML | ✅ Verb pattern — builder tool |

### Mixed-Mode Tools (Read + Write in same tool)

These tools have **both read and write actions** within a single tool, controlled by an `action` parameter:

| # | Tool | Read Actions | Write Actions | Category | Notes |
|---|---|---|---|---|---|
| 1 | `get_variables` | `list`, `get` | `set` | **advance** | Mixed R/W. `list`/`get` are pure read, `set` changes config for all users. |
| 2 | `update_view` | — | `update`, `create`, `rename`, `undo` | **write** | All actions are write operations. `create` is also in this tool (creates new view). |
| 3 | `update_form` | — | `update`, `rename`, `undo` | **write** | All actions are write operations. |
| 4 | `update_sitemap` | — | `update`, `undo` | **write** | All actions are write operations. |
| 5 | `execute_webapi` | `GET` | `POST`, `PUT`, `PATCH`, `DELETE` | **advance** | Generic HTTP — all methods in one tool. Has hard-blocking for systemforms/savedqueries/sitemaps. |

### Naming Convention Verdict

> **✅ All 28 tools follow the naming convention correctly.** No renaming needed.
>
> The plural/singular pattern is consistent:
> - Plural names (`get_forms`, `get_views`, etc.) → can return list OR detail depending on parameters
> - Singular names (`get_record`, `get_entity_metadata`) → always return one item
> - Action names (`create_entity`, `update_form`) → verb + target noun
> - Query names (`execute_fetchxml`, `search`) → verb pattern

---

## Implementation Details

### [MODIFY] McpCommandArgs.cs

Add `--category` CLI option:

```csharp
[CommandOption("--category")]
[Description("Tool category to load: read, write, advance, all (default: all). Combine with comma: read,write")]
[DefaultValue("all")]
public string Category { get; set; } = "all";
```

### [MODIFY] McpServerHost.cs

- Accept `category` parameter
- Replace `WithToolsFromAssembly()` with selective `WithTools<T>()` calls based on category
- Use a static dictionary mapping tool class → category for explicit control

```csharp
// Category registry — explicit assignment for each tool class
private static readonly Dictionary<Type, string> ToolCategories = new()
{
    // read (17)
    { typeof(WhoAmITool), "read" },
    { typeof(GetEntitiesMetadataTool), "read" },
    { typeof(GetEntityMetadataTool), "read" },
    { typeof(GetGlobalOptionSetsTool), "read" },
    { typeof(GetMessagesTool), "read" },
    { typeof(GetComponentsTool), "read" },
    { typeof(GetRecordTool), "read" },
    { typeof(ExecuteFetchXmlTool), "read" },
    { typeof(SearchTool), "read" },
    { typeof(ParseRecordUrlTool), "read" },
    { typeof(GetFormsTool), "read" },
    { typeof(GetViewsTool), "read" },
    { typeof(GetRolesTool), "read" },
    { typeof(GetLogsTool), "read" },
    { typeof(GetHistoriesTool), "read" },
    { typeof(GetRulesTool), "read" },
    { typeof(BuildFormXmlTool), "read" },

    // write (8)
    { typeof(UpsertRecordTool), "write" },
    { typeof(DeleteRecordTool), "write" },
    { typeof(CreateEntityTool), "write" },
    { typeof(CreateAttributeTool), "write" },
    { typeof(UpdateAttributeTool), "write" },
    { typeof(UpdateFormTool), "write" },
    { typeof(UpdateViewTool), "write" },
    { typeof(UpdateSiteMapTool), "write" },

    // advance (3)
    { typeof(ExecuteWebApiTool), "advance" },
    { typeof(PublishCustomizationsTool), "advance" },
    { typeof(GetVariablesTool), "advance" },
};
```

### [MODIFY] McpCommand.cs

- Pass the `category` to `McpServerHost`
- Update `PrintTools()` to use new 3-category system
- Update `GetCategory()` to use `read`/`write`/`advance` from the registry
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
      "args": ["mcp", "--category", "write,advance"],
      "env": { ... }
    }
  }
}
```

### Combo — Read + Write (excludes advance):
```json
{
  "mcpServers": {
    "devkit-safe": {
      "command": "devkit",
      "args": ["mcp", "--category", "read,write"],
      "env": { ... }
    }
  }
}
```

---

## Category Selection Matrix

| `--category` value | Tools loaded | Count | Use case |
|---|---|---|---|
| _(none)_ / `all` | read + write + advance | 28 | Full power for trusted AI agents |
| `read` | read only | 17 | Safe analysis, metadata discovery, querying |
| `write` | write only | 8 | CI/CD pipelines that only need mutations |
| `advance` | advance only | 3 | Specialist/admin operations |
| `read,write` | read + write | 25 | Most common — excludes dangerous advance tools |
| `read,advance` | read + advance | 20 | Analysis + admin, no data mutations |
| `write,advance` | write + advance | 11 | Mutations + admin, no reading (rare) |

---

## Resolved Questions

1. **Category count** → **3 categories** (`read`, `write`, `advance`) + `all` as default. This provides clear semantic meaning.
2. **`--tools` with `--category`** → Yes, `devkit mcp --tools --category read` should filter the tools listing to show only read tools.
3. **Server name suffix** → Yes, when using `--category read`, the MCP server should identify itself as `DynamicsCrm.DevKit (read)` so the AI can distinguish multiple devkit connections.
4. **Tool naming** → All 28 tools already follow the convention correctly. No renaming needed.
5. **Mixed-mode tools** → `get_variables` and `execute_webapi` are categorized as `advance` due to their mixed R/W nature. The `write` category tools (`update_form`, `update_view`, `update_sitemap`) have multiple write actions but no read-only actions.
