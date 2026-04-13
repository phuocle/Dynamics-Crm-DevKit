# DynamicsCrm.DevKit MCP Server — Tool Reference

**Document Type:** AI-Optimized Tool Reference
**Component:** DynamicsCrm.DevKit CLI — MCP Server (`devkit mcp`)
**Total Tools:** 32
**Total Resources:** 6
**Protocol:** Model Context Protocol (MCP) via stdio transport
**Last Updated:** 2026-04-13

---

## Overview

The DynamicsCrm.DevKit MCP Server exposes **32 Dataverse tools** and **6 schema/documentation resources** to AI agents. It connects to a live Dataverse environment via `ServiceClient` and provides full lifecycle operations: metadata discovery, data querying, form/view customization, schema creation, security management, and debugging.

### Architecture

| Layer | Component | Purpose |
|-------|-----------|---------|
| Entry | `McpServerHost.cs` | Server orchestration, tool filtering, DI setup |
| Tools | `Mcp/Tools/*.cs` | 32 individual tool implementations |
| Resources | `Mcp/Resources/*.cs` | 6 XSD schemas and instruction docs |
| Helpers | `Mcp/Helper/*.cs` | Formatting, parsing, validation utilities |
| Services | `MetadataService` | Metadata caching and operations |

### Tool Categories (Cumulative Access)

| Category | Tools | Cumulative Total | Use Case |
|----------|-------|------------------|----------|
| **basic** | 7 | 7 | Discovery, data ops, search |
| **standard** | 20 | 27 | Forms, views, workflows, debugging |
| **advanced** | 5 | 32 | Schema creation, raw Web API |

Request `"basic"` → 7 tools. Request `"standard"` → 27 tools. Request `"advanced"` or `"all"` → 32 tools.

### DryRun Mode

Pass `--dryrun` to block all mutating operations. Read-only tools work normally. Server instructions show `DRY-RUN MODE ACTIVE` when enabled.

---

## Quick Reference — All 32 Tools

| # | Tool | Category | Read-Only | Purpose |
|---|------|----------|-----------|---------|
| 1 | `whoami` | basic | ✓ | Current user identity and environment info |
| 2 | `get_tables` | basic | ✓ | Table/entity metadata, attributes, relationships |
| 3 | `manage_choice` | basic | — | Global option sets (list, create, update) |
| 4 | `manage_record` | basic | — | CRUD operations on records |
| 5 | `execute_fetchxml` | basic | ✓ | Execute FetchXML queries with pagination |
| 6 | `search_records` | basic | ✓ | Relevance Search (full-text) across entities |
| 7 | `parse_record_url` | basic | ✓ | Extract entity name and GUID from URLs |
| 8 | `publish_customizations` | standard | — | Publish metadata changes |
| 9 | `manage_form` | standard | — | Form definitions (list, detail, update, undo) |
| 10 | `manage_view` | standard | — | View definitions (list, detail, create, update, undo) |
| 11 | `manage_role` | standard | — | Security roles (list, assign, copy, delete) |
| 12 | `get_messages` | standard | ✓ | SDK messages and Custom Actions |
| 13 | `manage_environment_variable` | standard | — | Environment variables (CRUD + clear) |
| 14 | `get_workflows` | standard | ✓ | Classic workflows (background and real-time) |
| 15 | `get_flows` | standard | ✓ | Power Automate cloud flows and run history |
| 16 | `get_business_process_flows` | standard | ✓ | BPFs and their stages |
| 17 | `get_business_rules` | standard | ✓ | Client-side business rules (XAML-parsed) |
| 18 | `get_custom_apis` | standard | ✓ | Custom API definitions and parameters |
| 19 | `get_audit_history` | standard | ✓ | Audit history with old/new field values |
| 20 | `get_solution_components` | standard | ✓ | Solution contents and active layer audit |
| 21 | `get_plugin_trace_logs` | standard | ✓ | Plugin trace logs for debugging |
| 22 | `get_system_jobs` | standard | ✓ | Async operation jobs (failures, imports) |
| 23 | `get_plugins` | standard | ✓ | Plugin registrations and processing steps |
| 24 | `get_dataverse_commands` | standard | ✓ | Modern command bar buttons (appaction) |
| 25 | `build_form_xml` | standard | ✓ | Build FormXML modifications (read-only builder) |
| 26 | `build_sitemap_xml` | standard | ✓ | Build SiteMap XML modifications (read-only builder) |
| 27 | `manage_webresource` | standard | — | Web resources (JS, CSS, HTML, images) |
| 28 | `manage_sitemap` | advanced | — | App sitemap with XSD validation and publishing |
| 29 | `upsert_table` | advanced | — | Create or update Dataverse tables |
| 30 | `upsert_column` | advanced | — | Create or update table columns |
| 31 | `upsert_relationship` | advanced | — | Create or update relationships (1:N, N:N) |
| 32 | `execute_webapi` | advanced | — | Raw Dataverse Web API requests |

---

## BASIC Tools (7)

### 1. `whoami`

Get the identity of the currently authenticated user, environment info, and access token.

**Returns:** User (ID, name, email, roles), Org (ID, URL, version, friendly name), tenant/environment IDs, base language, currency, fiscal settings, audit status.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `include_token` | bool | `false` | Include OAuth access token in response (~400 extra tokens) |

**When to use:**
- Confirm which user and environment you are connected to
- Check security roles when troubleshooting permission errors
- Get current user's ID for FetchXML filters (e.g., records owned by me)

---

### 2. `get_tables`

Retrieve Dataverse entity/table metadata. Two modes: list all entities or full detail for one entity.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `entity_name` | string | `""` | Entity logical name for full detail. Empty = list all |
| `filter` | string | `""` | List: keyword filter. Detail: prefix filter for attributes/relationships |
| `custom_only` | bool | `false` | List only: show only custom entities |
| `include_intersect` | bool | `false` | List only: include N:N intersect entities |

**Modes:**
- **List** (`entity_name` empty): Summary table of all entities (filter by keyword or custom_only)
- **Detail** (`entity_name` provided): Full attributes (type, options, required), relationships (1:N, N:1, N:N), alternate keys

**Common entity names:** `account`, `contact`, `lead`, `opportunity`, `incident` (Case), `systemuser` (User), `team`, `annotation` (Note)

---

### 3. `manage_choice`

List, inspect, create, or update global option sets (choices/picklists) in Dataverse metadata.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `action` | string | **required** | `list`, `detail`, `create`, or `update` |
| `optionset_name` | string | `""` | Logical name. Required for detail/create/update |
| `display_name` | string | `""` | Display name. Required for create |
| `description` | string | `""` | Description. Optional for create/update |
| `options` | string | `""` | Create: `value:label` pairs separated by `;` (e.g., `100000000:Active;100000001:Inactive`) |
| `add_options` | string | `""` | Update: options to add (`value:label;...`) |
| `update_options` | string | `""` | Update: rename labels (`value:newLabel;...`) |
| `remove_option_values` | string | `""` | Update: comma-separated values to remove |
| `auto_publish` | bool | `true` | Publish after changes |

---

### 4. `manage_record`

Perform CRUD operations on a single Dataverse record.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `action` | string | **required** | `create`, `read`, `update`, or `delete` |
| `entity_name` | string | **required** | Entity logical name |
| `record_id` | string | `""` | Record GUID. Required for read/update/delete |
| `fields_json` | string | `""` | JSON object with field values. Required for create/update |
| `columns` | string | `""` | Read only: comma-separated column names. Empty = all |

**Field types in `fields_json`:**
- String: `"hello"`, Integer: `42`, Decimal/Money: `99.50`, Boolean: `true/false`
- DateTime: `"2025-01-15"` (ISO), Lookup: GUID string, Picklist: integer value
- Polymorphic Lookup: use `"fieldname@targetentity"` as key (e.g., `"customerid@account"`)
- MultiSelect: `[100000001, 100000002]`, `null` to clear a field

---

### 5. `execute_fetchxml`

Execute a FetchXML query against Dataverse. Returns markdown table. Max 5000 records with auto-paging.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `fetchxml` | string | **required** | FetchXML query starting with `<fetch>` |
| `max_records` | int | `5000` | Maximum records (capped at 5000) |
| `get_all` | bool | `false` | Auto-page through all results up to max_records |

**FetchXML structure:** `<fetch>` → `<entity name='...'>` → `<attribute>`, `<filter>`, `<order>`, `<link-entity>`

**Key operators:** `eq`, `ne`, `gt`, `ge`, `lt`, `le`, `like` (%), `null`, `not-null`, `in`, `between`, `today`, `last-x-days`

---

### 6. `search_records`

Perform Dataverse Relevance Search (full-text search) across entities. Two actions: `search` or `status`.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `action` | string | `"search"` | `search` (full-text) or `status` (check config) |
| `search_term` | string | `""` | Text to search (1-100 chars). Required for `search` |
| `entities` | string | `""` | Comma-separated entity names to limit scope |
| `filter` | string | `""` | OData filter (e.g., `statecode eq 0`) |
| `top` | int | `50` | Max results (max 100) |

**Search syntax:** `+` (AND), `|` (OR), `-` (NOT), trailing wildcard `*`, exact phrases `"quoted"`, parentheses for grouping.

---

### 7. `parse_record_url`

Parse a Dynamics 365 / Power Platform URL or string to extract entity logical name and record ID (GUID).

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `input` | string | **required** | URL, GUID, or text to parse |

**Supports:** Model-driven app URLs (`main.aspx` with `etn/etc`), Web API URLs, Power Apps/Automate maker URLs, workflow/report/solution editor URLs, `rundialog` URLs, raw GUIDs.

**Returns:** EntityName, RecordId, Source type, EnvironmentId (if present).

---

## STANDARD Tools (20)

### 8. `publish_customizations`

Publish Dataverse customizations to make metadata changes visible to users. Required after creating/updating entities, attributes, forms, views, option sets, or relationships.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `entities` | string | `""` | Comma-separated entity names (e.g., `account,contact`). Empty = publish ALL |
| `include_global_optionset` | bool | `false` | Also publish global option sets (only when entities specified) |
| `include_sitemap` | bool | `false` | Also publish sitemap (only when entities specified) |

**Tips:** Publish specific entities when possible (faster). PublishAll can take 30+ seconds. Idempotent — safe to repeat.

---

### 9. `manage_form`

Retrieve and modify form definitions for a Dataverse entity.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `action` | string | **required** | `list`, `detail`, `update`, `rename`, or `undo` |
| `entity_name` | string | **required** | Entity logical name |
| `form_id` | string | `""` | Form GUID. Required for detail/update/rename/undo |
| `form_name` | string | `""` | Filter by name. 1 match = auto-detail |
| `form_type` | int | `0` | Filter: 2=Main, 5=Mobile, 6=QuickView, 7=QuickCreate. 0=all |
| `formxml` | string | `""` | For update: FormXML string or file path. For undo: backup path |
| `include_formxml` | bool | `false` | Include FormXML in list mode |
| `auto_publish` | bool | `true` | Publish after changes |
| `validate` | bool | `true` | Validate against XSD before writing |
| `backup` | bool | `true` | Auto-backup before overwriting |

**Workflow:** `build_form_xml` → `manage_form(action='update')`. Never manually construct FormXML.

**Safety:** Auto-backup before changes, XSD validation blocks invalid XML, backup failure blocks update.

---

### 10. `manage_view`

Retrieve and modify view (saved query) definitions for a Dataverse entity.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `action` | string | **required** | `list`, `detail`, `create`, `update`, `rename`, or `undo` |
| `entity_name` | string | **required** | Entity logical name |
| `view_id` | string | `""` | View GUID. Required for detail/update/rename/undo |
| `view_name` | string | `""` | Filter by name. 1 match = auto-detail |
| `query_type` | int | `-1` | 0=Public, 1=Lookup, 4=QuickFind, 64=SubGrid. -1=all |
| `layoutxml` | string | `""` | For update/create: LayoutXML. For undo: backup path |
| `fetchxml` | string | `""` | For update/create: FetchXML. For undo: backup path |
| `include_fetchxml` | bool | `false` | Include FetchXML/LayoutXML in list mode |
| `include_personal` | bool | `false` | Include personal views (userquery) |
| `auto_publish` | bool | `true` | Publish after changes |
| `validate` | bool | `true` | Validate XMLs and check FetchXML↔LayoutXML sync |
| `backup` | bool | `true` | Auto-backup before overwriting |

**Sync rule:** Every `<attribute>` in FetchXML MUST have a matching `<cell>` in LayoutXML and vice versa.

---

### 11. `manage_role`

List, inspect, create, update, delete, copy security roles, and assign/unassign roles to users.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `action` | string | **required** | `list`, `detail`, `user`, `assign`, `unassign`, `create`, `update`, `delete`, or `copy` |
| `role_id` | string | `""` | Role GUID. Required for detail/assign/unassign/update/delete/copy |
| `role_name` | string | `""` | Filter (list) or new name (create/update/copy) |
| `user_id` | string | `""` | Email or GUID. Required for user/assign/unassign |
| `entity_name` | string | `""` | Filter privileges to entity (detail/user modes) |
| `business_unit_id` | string | `""` | Filter by BU (list) or target BU (create) |
| `max_records` | int | `50` | Max roles in list (max 250) |

**Depth levels:** User < BU < Parent:ChildBU < Org

**Debug access denied:** Use `action='user'` with user email + `entity_name` to see effective privileges.

---

### 12. `get_messages`

Discover SDK messages and Custom Actions available for a Dataverse entity.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `entity_name` | string | `"none"` | Entity logical name. `none` or empty = global messages |
| `message_name` | string | `""` | Specific message name for detail mode. Empty = list all |
| `include_custom_actions` | bool | `true` | Include Custom Actions in list |

**Modes:**
- **List** (`message_name` empty): All SDK messages + Custom Action names for an entity
- **Detail** (`message_name` provided): Parameters, supported entities, plugin steps

---

### 13. `manage_environment_variable`

List, get, create, update, delete, or clear Dataverse environment variables.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `action` | string | **required** | `list`, `detail`, `create`, `update`, `delete`, or `clear` |
| `variable_name` | string | `""` | Schema name with prefix (e.g., `new_ApiEndpoint`). Required except list |
| `display_name` | string | `""` | Display name. Required for create |
| `type` | string | `""` | `string`, `number`, `boolean`, `json`, `datasource`, `secret`. Required for create |
| `default_value` | string | `""` | Default value for definition |
| `value` | string | `""` | Current value override |
| `description` | string | `""` | Variable description |
| `solution_name` | string | `""` | Filter by solution (list) or add to solution (create) |
| `max_records` | int | `50` | Max variables in list |
| `auto_publish` | bool | `false` | Publish after changes |

**Tips:** Current value overrides default. Type cannot be changed after creation. `clear` deletes the value record (reverts to default).

---

### 14. `get_workflows`

List and inspect classic workflows (background and real-time) for a Dataverse entity.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `entity_name` | string | `""` | Entity logical name. Empty = all entities |
| `workflow_id` | string | `""` | Workflow GUID for detail mode |
| `name_filter` | string | `""` | Filter by name. 1 match = auto-detail |
| `mode` | string | `""` | `background` (async) or `realtime` (sync). Empty = both |
| `trigger_field` | string | `""` | Filter by update trigger field (e.g., `revenue`, `statecode`) |
| `active_only` | bool | `true` | Only activated workflows |
| `max_records` | int | `50` | Max records (max 250) |

**Key fields:** `triggeronupdateattributelist` (trigger fields), `mode` (0=Background, 1=Realtime), `scope` (1=User, 2=BU, 3=Parent:ChildBU, 4=Org)

---

### 15. `get_flows`

List and inspect Power Automate cloud flows and their run history.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `action` | string | `"list"` | `list` or `runs`. `runs` requires flow_id |
| `flow_id` | string | `""` | Flow GUID. Empty = list. With list: detail + runs. With runs: history |
| `name_filter` | string | `""` | Filter by name (list mode) |
| `owner_filter` | string | `""` | Filter by owner name (list mode) |
| `status` | string | `"active"` | `active`, `draft`, `suspended`, or `all` |
| `status_filter` | string | `""` | For runs: `succeeded`, `failed`, `running`, `cancelled`, etc. |
| `minutes_ago` | int | `1440` | For runs: last N minutes (max 43200) |
| `max_records` | int | `50` | Max results (max 250) |

---

### 16. `get_business_process_flows`

List and inspect Business Process Flows (BPFs) and their stages.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `bpf_id` | string | `""` | BPF GUID for detail. Empty = list |
| `bpf_name` | string | `""` | Filter by name. 1 match = auto-detail |
| `entity_name` | string | `""` | Filter by primary entity |
| `status` | string | `"active"` | `active`, `draft`, or `all` |
| `include_stages` | bool | `false` | Include stages in list mode (always in detail) |
| `max_records` | int | `50` | Max BPFs (max 250) |

**Tips:** BPFs can span multiple entities (e.g., Lead → Opportunity). Each stage has its own `primaryEntity`. The `uniqueName` is also the logical name of the BPF's auto-created entity.

---

### 17. `get_business_rules`

List business rules (client-side logic) for a Dataverse entity.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `entity_name` | string | **required** | Entity logical name |
| `rule_id` | string | `""` | Rule GUID for detail (with conditions and actions parsed from XAML) |
| `status` | string | `""` | `active`, `draft`, or empty (all) |
| `max_records` | int | `50` | Max rules (max 200) |

**Tips:** Business rules run client-side BEFORE JavaScript form events. Scope `Entity` means the rule runs on ALL forms. Stored as workflow records with `category=2`.

---

### 18. `get_custom_apis`

Retrieve Custom API definitions from Dataverse. Modern replacement for Custom Actions with richer metadata.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `api_name` | string | `""` | Unique name for detail. Empty = list all |
| `entity_name` | string | `""` | Filter by bound entity |
| `status` | string | `"active"` | `active`, `inactive`, or `all` |
| `include_microsoft` | bool | `false` | Include managed APIs (Microsoft/third-party) |
| `max_records` | int | `100` | Max results (max 500) |

**Tips:** `isFunction=true` → GET (no side effects); `isFunction=false` → POST Action. Managed APIs excluded by default.

---

### 19. `get_audit_history`

Retrieve audit history for Dataverse records. Shows who changed what, when, with old/new values.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `entity_name` | string | `""` | Entity logical name. Required with record_id |
| `record_id` | string | `""` | Record GUID for detail mode (field-level changes). Empty = browse mode |
| `attribute_name` | string | `""` | Detail mode: filter to one field |
| `user_filter` | string | `""` | Filter by user name or email |
| `operation` | string | `""` | `Create`, `Update`, `Delete`, `Activate`, `Deactivate`, `Assign`, `Merge`, `SetState` |
| `minutes_ago` | int | `1440` | Last N minutes (max 43200). Ignored with from_date |
| `from_date` | string | `""` | ISO 8601 start date (e.g., `2026-03-01`). Overrides minutes_ago |
| `to_date` | string | `""` | ISO 8601 end date. Default: now |
| `max_records` | int | `50` | Max entries (max 500) |

**Modes:**
- **Detail** (`record_id` provided): Field-level old/new values for one record
- **Browse** (`record_id` empty): Summary list across records/entities

---

### 20. `get_solution_components`

List all components inside a Dataverse solution. Fuzzy name matching supported.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `solution_name` | string | **required** | Solution unique name or display name (partial match) |
| `include_active_layers` | bool | `false` | Check for unmanaged customizations (adds API calls) |
| `active_layers_only` | bool | `false` | Show ONLY components with active layers (cleanup audit) |

**Returns:** Solution info + component summary (count per type) + full detail table (componentType, objectId, name).

**Tips:** 1 match → show components; multiple → list for disambiguation. Use for audit before packaging or deploying.

---

### 21. `get_plugin_trace_logs`

List and inspect plugin trace logs for debugging plugin and custom action execution.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `record_id` | string | `""` | Trace log GUID for detail (full messageblock). Empty = list |
| `type_name` | string | `""` | Filter by plugin type name (contains) |
| `message_name` | string | `""` | Filter by SDK message: `Create`, `Update`, `Delete`, etc. |
| `correlation_id` | string | `""` | Filter by correlation ID (exact GUID) |
| `mode` | string | `""` | `sync` or `async`. Empty = both |
| `minutes_ago` | int | `0` | Last N minutes (default 60, max 1440) |
| `max_records` | int | `50` | Max entries (max 200) |

**Tips:** Plugin Trace Log must be enabled at org level. Combine with `get_system_jobs` for async plugin failures.

---

### 22. `get_system_jobs`

List and inspect system jobs (asyncoperation) for debugging async failures, workflow errors, bulk operations, imports, and solution operations.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `record_id` | string | `""` | Job GUID for detail (full error + stack trace). Empty = list |
| `entity_name` | string | `""` | Filter by entity |
| `name_filter` | string | `""` | Filter by name |
| `operation_type` | string | `""` | `plugin`, `workflow`, `bulk_delete`, `import`, `goal_rollup`, `solution`, `all` |
| `status` | string | `"failed"` | `failed`, `succeeded`, `waiting`, `in_progress`, `canceled`, `all` |
| `correlation_id` | string | `""` | Filter by correlation ID |
| `minutes_ago` | int | `0` | Last N minutes (default 1440, max 43200) |
| `max_records` | int | `50` | Max results (max 500) |

---

### 23. `get_plugins`

List and inspect plugin assembly registrations, plugin types, and processing steps.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `assembly_name` | string | `""` | Filter by assembly name. 1 match = detail with all types + steps |
| `entity_name` | string | `""` | All plugin steps on this entity across all assemblies |
| `type_name` | string | `""` | Filter by plugin type name |
| `message_name` | string | `""` | Filter by SDK message (e.g., `Create`, `Update`) |
| `stage` | string | `""` | `prevalidation`, `preoperation`, `postoperation`, `mainoperation` |
| `mode` | string | `""` | `sync` or `async`. Empty = both |
| `active_only` | bool | `true` | Only activated steps |
| `include_images` | bool | `true` | Include pre/post images |
| `include_config` | bool | `false` | Include config values (security: default false) |
| `max_records` | int | `100` | Max steps (max 500) |

**Modes:**
- No filters (or assembly_name): List plugin assemblies with type counts
- `assembly_name` (single match): Assembly detail with all types + steps + images
- `entity_name`: All plugin steps on that entity

---

### 24. `get_dataverse_commands`

List and inspect modern command bar buttons (appaction entity) in Model-Driven Apps.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `command_id` | string | `""` | Appaction GUID for detail. All filters ignored |
| `entity_name` | string | `""` | Filter by entity |
| `location` | string | `""` | `form`, `main_grid`, `sub_grid`, `associated_grid`, `quick_form`, `global_header`, `dashboard` |
| `app_name` | string | `""` | Filter by app name |
| `name_filter` | string | `""` | Filter by command name |
| `origin` | string | `""` | `default` (custom), `migrated`, `enhanced_migrated`, `all` |
| `action_type` | string | `""` | `javascript`, `formula` (Power Fx), `none` |
| `include_rules` | bool | `false` | Include appactionrule records |
| `include_children` | bool | `false` | Include child commands (dropdown items) |
| `max_records` | int | `50` | Max commands (max 500) |

**Tips:** Use `origin='default'` to filter out hundreds of auto-migrated system commands. Commands are app-scoped.

---

### 25. `build_form_xml`

Build modified FormXML for an existing Dataverse form. **Read-only builder** — use `manage_form` to apply.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `entity_name` | string | **required** | Entity logical name |
| `form_id` | string | **required** | Form GUID |
| `operations` | string | **required** | JSON array of operations |

**5 operation types** (each requires `manage_action` sub-field):

| Operation | Actions | Example |
|-----------|---------|---------|
| `manage_tab` | `add`, `remove`, `move`, `update` | Add tab with sections and fields |
| `manage_section` | `add`, `remove`, `move`, `update` | Add section to a tab |
| `manage_fields` | `add`, `remove`, `update`, `add_header`, `remove_header`, `update_header` | Add fields to section |
| `manage_library` | `add`, `remove` | Add JS library to form |
| `manage_event` | `add`, `remove` | Add onload/onchange event handlers |

**Features:** Auto-resolves classid GUIDs, validates field names against metadata. Section columns: 1, 2, or 3. Tab columns: 1, 2, or 3.

**Output:** Saves FormXML to temp file. Pass `formXmlPath` to `manage_form(action='update')` to apply.

---

### 26. `build_sitemap_xml`

Build modified SiteMap XML for Model-Driven App navigation. **Read-only builder** — use `manage_sitemap` to apply.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `app` | string | **required** | App name or GUID (fuzzy match) |
| `operations` | string | **required** | JSON array of operations |

**12 operations:** `add_area`, `add_group`, `add_subarea`, `remove_area`, `remove_group`, `remove_subarea`, `update_area`, `update_group`, `update_subarea`, `move_area`, `move_group`, `move_subarea`

**Features:** Auto-generates IDs (`area_`, `group_`, `sa_` prefixes), supports fuzzy element finding by ID or label.

---

### 27. `manage_webresource`

List, inspect, create, update, or delete web resources (JavaScript, CSS, HTML, images, RESX) in Dataverse.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `action` | string | **required** | `list`, `detail`, `create`, `update`, or `delete` |
| `web_resource_id` | string | `""` | GUID. Required for detail/update/delete |
| `name` | string | `""` | Unique name (e.g., `v4_/js/account.js`). Required for create. For list: filter |
| `type` | string | `""` | For create: `js`, `html`, `css`, `xml`, `png`, `jpg`, `gif`, `svg`, `ico`, `resx`, `xsl`, `xap` |
| `type_filter` | string | `""` | Filter by type in list mode |
| `content` | string | `""` | Base64 encoded file content. Required for create |
| `display_name` | string | `""` | Display name |
| `description` | string | `""` | Description |
| `solution_name` | string | `""` | Filter by solution (list) or add to solution (create) |
| `max_records` | int | `50` | Max results (max 500) |
| `auto_publish` | bool | `true` | Publish after changes |

**Tips:** Call this tool first to find `library_name` needed for `build_form_xml` add_event/add_library.

---

## ADVANCED Tools (5)

### 28. `manage_sitemap`

List, inspect, create, update, or undo a Model-Driven App's SiteMap XML with auto-backup, XSD validation, and publishing.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `action` | string | `"update"` | `list`, `detail`, `update`, `create`, or `undo` |
| `app` | string | `""` | App display name or GUID. Required for detail/update/create/undo |
| `app_name` | string | `""` | Filter apps by name (list mode only) |
| `sitemapxml` | string | `""` | For update/create: SiteMap XML or file path. For undo: backup path |
| `auto_publish` | bool | `true` | Publish after changes |
| `validate` | bool | `true` | Validate against XSD |
| `backup` | bool | `true` | Auto-backup before overwriting |

**Workflow:** `build_sitemap_xml` → `manage_sitemap(action='update')`. Safety: auto-backup, XSD validation, backup failure blocks update.

---

### 29. `upsert_table`

Create a new custom Dataverse entity (table) or update an existing one. Auto-detects create vs update.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `entity_name` | string | **required** | Logical name with prefix (e.g., `new_project`) or just name + `solution_name` |
| `display_name` | string | `""` | Singular name (e.g., `Project`). **Required for create** |
| `display_collection_name` | string | `""` | Plural name (e.g., `Projects`). **Required for create** |
| `solution_name` | string | `""` | Solution unique name. **Required for create** |
| `description` | string | `""` | Entity description |
| `ownership_type` | string | `"User"` | `User` or `Organization`. **Create only** — immutable |
| `table_type` | string | `"Standard"` | `Standard` or `Elastic` (Cosmos DB). **Create only** — immutable |
| `is_activity` | bool | `false` | Activity entity. **Create only** — immutable |
| `has_notes` | bool | `false` | Enable notes. **Create only** — immutable |
| `primary_attribute_display_name` | string | `"Name"` | Primary attribute label. Create only |
| `primary_attribute_name` | string | `""` | Primary attribute logical name. Auto-derived |
| `primary_attribute_max_length` | int | `100` | Max length (1-850). Create only |
| `entity_color` | string | `""` | Hex color (e.g., `#4A90D9`) |
| `is_quick_create_enabled` | bool | null | Enable quick create form |
| `is_duplicate_detection_enabled` | bool | null | Enable duplicate detection |
| `is_audit_enabled` | bool | null | Enable/disable auditing (update only) |
| `auto_publish` | bool | `true` | Publish after operation |

**After creation:** Use `upsert_column` to add columns, `build_form_xml` + `manage_form` to customize forms.

---

### 30. `upsert_column`

Create a new column or update an existing column (attribute) on a Dataverse entity. Auto-detects create vs update.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `entity_name` | string | **required** | Entity logical name |
| `attribute_name` | string | **required** | Column logical name with prefix (e.g., `new_priority`) |
| `attribute_type` | string | **required** | Column type (see table below). Required for create, ignored on update |
| `display_name` | string | **required** | Display name. Required for create |
| `description` | string | `""` | Column description |
| `required_level` | string | `""` | `None`, `Recommended`, or `Required` |
| `format` | string | `""` | String: `Text`, `Email`, `Url`, `Phone`, `TextArea`, `RichText`. DateTime: `DateOnly`, `DateAndTime` |
| `max_length` | int | `0` | String (1-4000), memo (1-1048576), file (KB) |
| `min_value` / `max_value` | number | null | For numeric types |
| `precision` | int | `-1` | Decimal places (0-10; money max 4) |
| `precision_source` | int | `-1` | Money: 0=Attribute, 1=Org, 2=Currency |
| `behavior` | string | `""` | DateTime: `UserLocal`, `DateOnly`, `TimeZoneIndependent` |
| `true_label` / `false_label` | string | `""` | Boolean labels (default: Yes/No) |
| `options` | string | `""` | Picklist create: JSON array `[{"label":"Low","value":100000000}]` |
| `global_optionset_name` | string | `""` | Picklist create: reference existing global option set |
| `add_options` / `update_options` / `delete_options` | string | `""` | Picklist update operations |
| `lookup_target` | string | `""` | Lookup create: target entity. Comma-separated for polymorphic |
| `lookup_relationship_name` | string | `""` | Lookup: relationship name. Auto-generated if omitted |
| `solution_name` | string | `""` | Solution unique name |
| `is_audit_enabled` | bool | null | Enable auditing (update only) |
| `is_valid_for_advanced_find` | bool | null | Show in Advanced Find (update only) |
| `auto_publish` | bool | `true` | Publish after operation |

**Supported column types:**

| Type | Notes |
|------|-------|
| `string` | Max 4000 chars. Formats: Text, Email, Url, Phone, TextArea, RichText |
| `memo` | Multi-line text. Max 1048576 chars |
| `integer` | Formats: None, Duration, TimeZone, Language, Locale |
| `bigint` | Large integer |
| `decimal` | Precision 0-10 (default 2) |
| `money` | Precision 0-4. PrecisionSource controls runtime precision |
| `float` / `double` | Floating-point. Precision 0-10 |
| `boolean` | Two-option with custom labels |
| `datetime` | DateOnly or DateAndTime. Behaviors: UserLocal, DateOnly, TimeZoneIndependent |
| `lookup` | Auto-creates 1:N relationship |
| `customer` | Polymorphic lookup (account + contact) |
| `picklist` | Single-select choice. Local or global option set |
| `multipicklist` | Multi-select choice |
| `image` | Image column |
| `file` | File attachment. Max size in KB |

---

### 31. `upsert_relationship`

Create, update, or delete Dataverse relationships (1:N, N:N) and manage polymorphic lookup targets.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `action` | string | **required** | `create_1n`, `create_nn`, `update`, `delete`, `add_target`, `remove_target` |
| `referenced_entity` | string | `""` | Parent entity (1:N create, add/remove target) |
| `referencing_entity` | string | `""` | Child entity (1:N create) |
| `entity1` / `entity2` | string | `""` | Entities for N:N relationship |
| `relationship_name` | string | `""` | Schema name. Required for update/delete. Auto-generated for create |
| `entity_name` | string | `""` | Entity with polymorphic lookup (add/remove target) |
| `attribute_name` | string | `""` | Polymorphic lookup logical name |
| `lookup_display_name` | string | `""` | Display name for lookup column (1:N create) |
| `intersect_entity_name` | string | `""` | Intersect entity for N:N. Auto-generated if empty |
| `cascade_preset` | string | `""` | `Parental`, `Referential` (default), `ReferentialRestrictDelete` |
| `cascade_assign` | string | `""` | Override: Cascade, Active, UserOwned, NoCascade, RemoveLink, Restrict |
| `cascade_delete` | string | `""` | Override cascade Delete |
| `cascade_merge` | string | `""` | Override cascade Merge |
| `cascade_reparent` | string | `""` | Override cascade Reparent |
| `cascade_share` | string | `""` | Override cascade Share |
| `cascade_unshare` | string | `""` | Override cascade Unshare |
| `menu_behavior` | string | `""` | `UseCollectionName`, `UseLabel`, `DoNotDisplay` |
| `menu_group` | string | `""` | `Details`, `Sales`, `Service`, `Marketing` |
| `menu_order` | int | `10000` | Associated menu order |
| `solution_name` | string | `""` | Solution unique name |
| `auto_publish` | bool | `true` | Publish after changes |

**Cascade presets:**

| Preset | Assign | Delete | Merge | Reparent | Share | Unshare |
|--------|--------|--------|-------|----------|-------|---------|
| Parental | Cascade | Cascade | Cascade | Cascade | Cascade | Cascade |
| Referential | NoCascade | RemoveLink | NoCascade | NoCascade | NoCascade | NoCascade |
| ReferentialRestrictDelete | NoCascade | Restrict | NoCascade | NoCascade | NoCascade | NoCascade |

---

### 32. `execute_webapi`

Execute Dataverse Web API requests for data queries and custom actions. Low-level access with safety filters.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `method` | string | **required** | `GET`, `POST`, `PUT`, `PATCH`, or `DELETE` |
| `url` | string | **required** | Relative URL path (SDK handles base URL) |
| `body` | string | `""` | JSON body for POST/PUT/PATCH |
| `headers` | string | `""` | Extra headers as JSON |
| `include_headers` | bool | `false` | Include response headers in output |
| `max_response_lines` | int | `200` | Max response body lines (truncates if exceeded) |

**Allowed:** GET on any endpoint; POST/PATCH/PUT/DELETE on standard data records; POST custom actions/functions.

**Blocked (use specialized tools instead):**

| Blocked Endpoint | Use Instead |
|------------------|-------------|
| EntityDefinitions / Attributes | `upsert_table`, `upsert_column` |
| RelationshipDefinitions | `upsert_relationship` |
| GlobalOptionSetDefinitions | `manage_choice` |
| systemforms | `manage_form` / `build_form_xml` |
| savedqueries / userqueries | `manage_view` |
| sitemaps | `manage_sitemap` |
| environmentvariable* | `manage_environment_variable` |
| webresources | `manage_webresource` |
| roles | `manage_role` |
| PublishXml / PublishAllXml | `publish_customizations` |

---

## MCP Resources (6)

The MCP server exposes 6 resources — 4 XSD schemas for XML validation and 2 instruction documents for safe manipulation workflows.

### Schema Resources

| URI | Source File | Size | MIME | Purpose |
|-----|------------|------|------|---------|
| `schema://formxml` | `Shared/Resources/xsd/FormXml.xsd` | 51 KB | `application/xml` | Form structure: `form > tabs > tab > columns > column > sections > section > rows > row > cell > control` |
| `schema://layoutxml` | `Shared/Resources/xsd/LayoutXml.xsd` | 2.9 KB | `application/xml` | View column layout: `grid > row > cell` with width, display, sorting attributes |
| `schema://fetchxml` | `Shared/Resources/xsd/Fetch.xsd` | 23 KB | `application/xml` | Query language: 100+ operators, aggregation, grouping, joins (1:N, N:1, N:N) |
| `schema://sitemapxml` | `Shared/Resources/xsd/SiteMap.xsd` + `SiteMapType.xsd` | 26 KB | `text/markdown` | App navigation: Area, Group, SubArea hierarchy with instructions |

### Instruction Resources

| URI | Purpose | Key Content |
|-----|---------|-------------|
| `docs://instructions_for_formxml` | FormXML manipulation rules | Backup procedures, field name verification, naming conventions, placement rules, common ClassIds, post-modification workflow |
| `docs://instructions_for_views` | View/LayoutXML manipulation rules | Two-part structure (FetchXML + LayoutXML), sync rules, Quick Find handling, hidden columns, backup/rollback procedures |

**When to read resources:**
- Before using `build_form_xml` → read `schema://formxml` and `docs://instructions_for_formxml`
- Before using `manage_view` → read `schema://layoutxml`, `schema://fetchxml`, and `docs://instructions_for_views`
- Before using `build_sitemap_xml` → read `schema://sitemapxml`

---

## Common Workflows

### Discovery Workflow

```
whoami → get_tables → execute_fetchxml → parse_record_url
```

1. `whoami` — Confirm user and environment
2. `get_tables` — Discover entity/attribute names
3. `execute_fetchxml` — Query data with discovered metadata
4. `parse_record_url` — Extract entity/ID from URLs shared by users

### Form Customization Workflow

```
get_tables → manage_form(list) → build_form_xml → manage_form(update) → publish_customizations
```

1. `get_tables(entity_name='account')` — Get field names and types
2. `manage_form(action='list')` — Find the form ID
3. `build_form_xml(operations=[...])` — Build modifications (returns temp file)
4. `manage_form(action='update', formxml=tempFilePath)` — Apply changes
5. `publish_customizations(entities='account')` — Make visible

### View Customization Workflow

```
get_tables → manage_view(list) → manage_view(detail) → manage_view(update) → publish_customizations
```

### Schema Creation Workflow

```
upsert_table → upsert_column → upsert_relationship → build_form_xml → manage_form(update) → publish_customizations
```

1. `upsert_table` — Create the table
2. `upsert_column` — Add columns (repeated)
3. `upsert_relationship` — Add relationships
4. `build_form_xml` → `manage_form(update)` — Customize the form
5. `publish_customizations` — Make all changes visible

### Debugging Workflow

```
get_audit_history → get_system_jobs → get_plugin_trace_logs → get_business_rules
```

1. `get_audit_history` — Who changed what, when
2. `get_system_jobs(status='failed')` — Find async failures
3. `get_plugin_trace_logs` — Plugin execution traces
4. `get_business_rules` — Client-side logic that may affect behavior

### Security Audit Workflow

```
manage_role(action='user') → manage_role(action='detail') → manage_role(action='assign')
```

1. `manage_role(action='user', user_id='email@domain.com', entity_name='account')` — Check effective privileges
2. `manage_role(action='detail', role_id='...')` — Inspect role privileges
3. `manage_role(action='assign')` — Grant access if needed

### App Navigation Workflow

```
manage_sitemap(action='list') → build_sitemap_xml → manage_sitemap(action='update')
```

---

## Tool Selection Guide

| Task | Tool(s) |
|------|---------|
| "Who am I?" / "What environment?" | `whoami` |
| "What tables exist?" / "What fields does account have?" | `get_tables` |
| "Query records" / "Show me all active accounts" | `execute_fetchxml` |
| "Find records by keyword" | `search_records` |
| "Create/Read/Update/Delete a record" | `manage_record` |
| "Extract entity from this URL" | `parse_record_url` |
| "Add a field to a form" | `build_form_xml` → `manage_form` |
| "Add a column to a view" | `manage_view` |
| "Create a new table" | `upsert_table` |
| "Add a column to a table" | `upsert_column` |
| "Create a relationship" | `upsert_relationship` |
| "Create/update a choice (picklist)" | `manage_choice` |
| "Manage security roles" / "Why access denied?" | `manage_role` |
| "Upload/download web resources" | `manage_webresource` |
| "Edit app navigation (sitemap)" | `build_sitemap_xml` → `manage_sitemap` |
| "Manage environment variables" | `manage_environment_variable` |
| "Publish changes" | `publish_customizations` |
| "Debug plugin failures" | `get_plugin_trace_logs` + `get_system_jobs` |
| "Audit who changed a field" | `get_audit_history` |
| "List plugins on an entity" | `get_plugins` |
| "List workflows/flows" | `get_workflows` / `get_flows` |
| "List business rules" | `get_business_rules` |
| "List BPFs" | `get_business_process_flows` |
| "List Custom APIs" | `get_custom_apis` |
| "List SDK messages" | `get_messages` |
| "List command bar buttons" | `get_dataverse_commands` |
| "Inspect solution contents" | `get_solution_components` |
| "Raw Web API call" | `execute_webapi` |
