> **Consolidated MCP Routing:** All schema writes go through manage_schema(resource='table'|'column'|'relationship'|'choice', action=..., entity_name=..., name=..., solution_name=..., payload={...}). Read-only metadata inspection → inspect_metadata(resource='tables'|'solution_components'|'custom_controls', ...). Publish changes → manage_admin(resource='publish', ...).


# Schema Tools Guide

Reference for `manage_schema(resource='table')`, `manage_schema(resource='column')`, and `manage_schema(resource='relationship')`.

## manage_schema(resource='table')

### Three-Field Name Model
- **display_name** / **display_collection_name** -- human labels (required for CREATE; mutable on UPDATE)
- **logical_name** -- lowercase logical name with publisher prefix; identifies an existing table for UPDATE; optional CREATE override (must be the lowercase form of schema_name)
- **schema_name** -- PascalCase schema name with publisher prefix; optional CREATE-only override of SchemaName (ignored on UPDATE)
- If schema_name/logical_name are omitted on CREATE, SchemaName is auto-derived from display_name via DataverseNamer and the logical name derives from it.
- Publisher prefix comes from solution_name (required for CREATE). There is NO entity_name parameter.

### Create Mode
- display_name, display_collection_name, solution_name are REQUIRED
- Optional schema_name and/or logical_name override the auto-derived names (must start with the publisher prefix)
- With all required create inputs, only an exact logical name (case-insensitive) matches an existing table. An explicit match selects Update. A matching derived name is reported as a collision. Similar names do not prevent creation.
- Auto-creates the primary name column. Standard and elastic tables default to `Name`. Activity tables use `Subject`.
- `is_duplicate_detection_enabled` maps to the table's `IsDuplicateDetectionEnabled` property and defaults to `false`.
- New tables start with Dataverse Search disabled. Omit `is_search_enabled` or pass `false` when creating a table.

### Create-Only Properties (Immutable After Creation)
| Property | Default | Notes |
|----------|---------|-------|
| ownership_type | 'User' | 'User' (supports sharing/assigning) or 'Organization' (no row-level security) |
| table_type | 'Standard' | 'Standard', 'Elastic' (Cosmos DB, limited charting), or 'Activity' (custom activity table) |
| primary_attribute_name | auto-derived | From display_name |
| primary_attribute_display_name | 'Name' | Display name of primary field |

Use `table_type="Activity"` to create a custom activity table. It uses `User` ownership and the `Subject` primary column. Dataverse requires offline availability and a Notes relationship for a new activity table. Creation leaves the separate Activities relationship disabled and keeps mail merge disabled.

### Update Mode
- Pass logical_name to identify the existing table
- An exact logical name takes precedence. If a required create input is absent, lookup can fall back to a display name or partial match. Ambiguous matches require an exact logical name.
- Only provided params are updated; omitted ones keep current values
- Set `is_duplicate_detection_enabled` to `true` or `false` to toggle Duplicate Detection. Omit it or pass `null` to keep the current value.
- Set `is_search_enabled` to `true` to enable Dataverse Search on a table with Change Tracking already enabled in published metadata and `CanEnableSyncToExternalSearchIndex` set to `true`. Pass `false` to disable Search regardless of Change Tracking. Omit it or pass `null` to keep the current Search setting.
- Set `icon_vector_name` to the name of an existing SVG web resource, such as `ab_/images/svg/ab_bank.svg`. Omit it or pass an empty string to keep the current icon.
- Pass `solution_name` to associate the update with an unmanaged solution. The tool publishes the table after applying changes.
- Omit create-only inputs on update. The tool can warn about explicit inputs that it ignores.

### Table options

Optional booleans accept `true` or `false`. On update, omit an option or pass `null` to preserve its current value. Omitted settings on create use Dataverse defaults, subject to the requirements of the selected table type.

| Parameter | Dataverse setting |
|---|---|
| `is_access_teams_enabled` | Access Teams (`AutoCreateAccessTeams`) |
| `is_document_management_enabled` | SharePoint document management (`IsDocumentManagementEnabled`) |
| `is_onenote_integration_enabled` | OneNote (`IsOneNoteIntegrationEnabled`). Requires document management. |
| `is_mail_merge_enabled` | Mail merge (`IsMailMergeEnabled`) |
| `is_custom_help_enabled`, `custom_help_url` | Enable table-specific help and configure its URL (`EntityHelpUrlEnabled`, `EntityHelpUrl`). |
| `is_mobile_offline_enabled` | Mobile offline (`IsOfflineInMobileClient`). Enabling requires published Change Tracking. |
| `is_available_offline` | Legacy offline availability (`IsAvailableOffline`). Enabling on an existing table requires published Change Tracking. Activity tables require offline availability. |
| `is_visible_in_mobile` | Visibility in Dynamics 365 for phones (`IsVisibleInMobile`) |
| `is_visible_in_mobile_client` | Visibility in the mobile client (`IsVisibleInMobileClient`) |
| `is_read_only_in_mobile_client` | Read-only mode in the mobile client (`IsReadOnlyInMobileClient`) |
| `is_retention_enabled` | Table eligibility for long-term retention (`IsRetentionEnabled`). Retention policies run separately. Data already retained cannot be made active by switching this setting off. |

### Irreversible Table Settings
The MCP server blocks enabling Change Tracking, Activities, Business Process Flows, Connections, Feedback, Notes, Queues, and Sending Email on existing tables. A new custom activity table receives the Notes relationship required by Dataverse. Updates to supported properties leave existing protected settings as configured.

`execute_webapi` allows writes to verified row CRUD endpoints only. Direct metadata writes, solution import and upgrade actions, other write actions, and `$batch` are blocked, including URL-encoded paths.

### Post-Create Workflow
1. `manage_schema(resource='table')` -- create entity
2. `manage_schema(resource='column')` -- add columns
3. `manage_ui(resource='form', action='update', operations=<JSON array serialized as a string>)` -- customize the form; see `docs://instructions_for_formxml`
4. Check each tool's published status; use `manage_admin(resource='publish')` when publishing is still needed.

---

## manage_schema(resource='column')

### Three-Field Name Model (same convention as manage_schema(resource='table'))
- **display_name** -- human label (required for CREATE; mutable on UPDATE)
- **logical_name** -- lowercase logical name with publisher prefix; identifies an existing attribute for UPDATE; optional CREATE override (must be the lowercase form of schema_name)
- **schema_name** -- PascalCase schema name with publisher prefix; optional CREATE-only override of SchemaName (ignored on UPDATE)
- If schema_name/logical_name are omitted on CREATE, SchemaName is auto-derived from display_name via DataverseNamer and the logical name derives from it.
- Publisher prefix comes from solution_name (required for CREATE); the column is added to that solution.
- There is NO attribute_name parameter. The column's technical names come ONLY from logical_name / schema_name (or are auto-derived from display_name).

### Attribute Type Matrix

| Type | Required Params (Create) | Optional Params | Defaults |
|------|-------------------------|-----------------|----------|
| string | entity_name, attribute_type, display_name, solution_name | logical_name, schema_name, max_length, format, required_level, auto_number_format, auto_number_seed | max_length=100, format='Text' |
| memo | same | max_length, format | max_length=2000 |
| integer | same | min_value, max_value, format | format='None' |
| bigint | same | -- | No range limits |
| decimal | same | min_value, max_value, precision | precision=2 (max 10) |
| money | same | min_value, max_value, precision, precision_source | precision=2 (max 4), source=0 (Attribute) |
| float | same | min_value, max_value, precision | precision=2 (max 10) |
| boolean | same | true_label, false_label | 'Yes'/'No' |
| datetime | same | format, behavior | format='DateAndTime', behavior='UserLocal' |
| lookup | same + lookup_target | lookup_relationship_name | Auto-creates 1:N relationship |
| customer | same | -- | Polymorphic: account + contact |
| picklist | same + options OR global_optionset_name | -- | Local or global option set |
| multipicklist | same + options OR global_optionset_name | -- | Multi-select version of picklist |
| image | same | -- | -- |
| file | same | max_length | max_length=32768 (KB) |

### Formula columns

- In `inspect_metadata(resource='tables')` with `detail_level="full"`, `formulaDefinition` is the `entity:attribute` clone reference. `rawFormulaDefinition` is the exact Dataverse formula text or XML, including whitespace. An empty string indicates an unset definition. Compact and standard details omit both fields.
- Use `formula_definition` on create or on update of an existing formula column. Copy the `formulaDefinition` reference from `inspect_metadata(resource='tables')` in the form `source_table_logical_name:source_column_logical_name`. The tool reads the source formula and rewrites references for the target. A Power Fx target requires a Power Fx source.
- To enter Power Fx directly, pass `entity_name`, the existing column's `logical_name`, and `formula_expression` (for example, `=Text(ab_union_fee_id.ab_date, "yyyy-mm-dd")`). Omit `formula_definition`, `formula_source_type`, and `raw_formula_definition`. The expression must be valid for the target column's existing data type.
- To set or update a Calculated or Rollup formula directly with raw XAML (`<Activity ...>`), pass `raw_formula_definition` as either a path to an existing XAML/XML file (or `.formula.json` backup file) or the inline `<Activity ...>` XML string (taken from `rawFormulaDefinition` in `inspect_metadata(resource='tables', detail_level="full")` and remapped for table/column/relationship names as needed). The XAML must be well-formed XML with an `<Activity ...>` root element. On UPDATE, target an existing Calculated (`SourceType = 1`) or Rollup (`SourceType = 2`) column by `logical_name`; on CREATE, pass `raw_formula_definition` with `formula_source_type="calculated"` or `"rollup"` (or let the tool infer the kind from the XAML). `raw_formula_definition` is mutually exclusive with `formula_definition` and `formula_expression`.
- **Mandatory backup on formula update**: Before executing `UpdateAttributeRequest` for any formula change (Power Fx, Calculated, or Rollup — via `formula_expression`, `formula_definition`, or `raw_formula_definition`), `manage_schema(resource='column')` saves a pre-change snapshot (`entityName`, `logicalName`, `sourceType`, `timestamp`, `formulaDefinition`) to `{workspaceFolder}/.devkit/manage_column/{entity_name}/{logical_name}_{yyyyMMddHHmmss}.formula.json` and returns `backupPath` in the structured result. To restore the previous formula, pass the saved `formulaDefinition` back via `formula_expression` (for Power Fx) or pass the backup file path / `formulaDefinition` via `raw_formula_definition` (for Calculated/Rollup).
- The tool checks the Power Fx formula in Dataverse metadata before publishing the table. The result includes the previous and saved formula under `changes.formulaDefinition`. Pass `solution_name` to add the column to an unmanaged solution.
- Microsoft documents the Power Apps editor as the supported way to edit column formulas. If Dataverse rejects the SDK update or the tool cannot verify the saved expression, use the editor. [Specialized columns using code](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/specialized-columns)
- To create an empty formula column, set `formula_source_type` to `powerfx`, `calculated`, or `rollup`.

### Format Values by Type

| Type | Valid Formats |
|------|-------------|
| string | Text (default), Email, Url, Phone, TextArea, TickerSymbol, RichText |
| memo | Text (default), RichText |
| integer | None (default), Duration, TimeZone, Language, Locale |
| datetime format | DateOnly, DateAndTime (default) |
| datetime behavior | UserLocal (default), DateOnly, TimeZoneIndependent |

### Money Precision Source
| Value | Meaning |
|-------|---------|
| 0 | Attribute (use column's precision setting) |
| 1 | Organization (use org-level pricing precision) |
| 2 | Currency (use currency record's precision) |

### Autonumber (string)

An autonumber column is a plain `string` column with an `auto_number_format` pattern.
Only `string` supports it (not memo or any other type); `format` must stay `Text`
(Email/Phone/TextArea/... are rejected together with a pattern).

Placeholders (patterns are validated client-side — Dataverse itself only rejects a
bad pattern when the first record is saved):

| Placeholder | Rule |
|-------------|------|
| `{SEQNUM:n}` | n >= 1 — a MINIMUM zero-padded length; the number keeps growing beyond n |
| `{RANDSTRING:n}` | n must be 1-6 (7+ fails at record save time); may appear multiple times |
| `{DATETIMEUTC:format}` | any .NET date/time format string (e.g. `yyyyMMddhhmmss`) |

- Literal text around placeholders is allowed: `WID-{SEQNUM:5}-{RANDSTRING:6}-{DATETIMEUTC:yyyyMMddhhmmss}`.
- A pattern without `{SEQNUM:n}` is accepted with a warning (values may not be unique).
- `max_length` must exceed the pattern's minimum output length and leave room for the
  sequence to grow (the default 100 is usually fine).
- `auto_number_seed` (>= 1) sets the start value via `SetAutoNumberSeed` after the
  metadata create/update succeeds. The default sequence starts at 1000. The seed is
  environment-only: it is NOT carried in solutions and needs no publish.
- UPDATE: change the pattern with `auto_number_format`, remove it with
  `clear_auto_number=true` (back to plain text); a seed-only update is valid and sends
  no metadata update.
- In model-driven forms, set controls bound to autonumber columns read-only.

Examples:
- Create: manage_schema(resource='column', entity_name='devkit_ticket', attribute_type='string', display_name='Ticket Number', solution_name='all_in_one', auto_number_format='TKT-{SEQNUM:5}-{RANDSTRING:3}', auto_number_seed=10000)
- Convert an existing Text column: manage_schema(resource='column', entity_name='devkit_ticket', logical_name='devkit_code', auto_number_format='CODE-{SEQNUM:6}')
- inspect_metadata(resource='tables') shows the current pattern in `autoNumberFormat`.

### Picklist Options Format (Create)
JSON array: [{"label": "Low", "value": 100000000}, {"label": "Medium", "value": 100000001}, {"label": "High", "value": 100000002}]

### Picklist Options (Update)
- add_options: JSON array of options to add (same format as create)
- update_options: JSON array of options to rename: [{"value": 100000000, "label": "Very Low"}]
- delete_options: JSON array of integer values to remove: [100000002]

### Create-Only Properties (Cannot Change After Creation)
- attribute_type -- type is permanently set
- lookup_target -- target entity fixed
- global_optionset_name -- option set binding fixed

### StatusType (statuscode) Options
`statuscode` is a system attribute of type StatusType. Use `manage_schema(resource='column')` with
`logical_name='statuscode'` and `add_options`/`update_options`/`delete_options`.

Each option in `add_options` can include a `"state"` field (integer) that links the
status to a `statecode` value (0=Active, 1=Inactive by default). Defaults to 0 if omitted.

add_options:    [{"label":"Under Review","value":100000001,"state":0}]
update_options: [{"label":"Renamed Status","value":100000001}]
delete_options: [100000001]

`state` is required to control which statecode the new status appears under.
`statecode` column itself is read-only and cannot be managed via `manage_schema(resource='column')`.

---

## manage_ui(resource='chart')

Manage Dataverse System Charts (`savedqueryvisualization`).

### Overview
Charts are **not** bound to a View. FetchXML (`datadescription`) is built from the resolved entity logical name. No `view_name` parameter.

### Supported OOB Chart Types
Column, Bar, Line, Pie, Doughnut (Donut), Funnel, Area, Bubble, Radar.

### Defaults
- `chart_type` omitted → **Pie**
- Pie category (`group_by_column`) omitted → **statecode**
- Pie legend (`aggregate_column`) omitted → **importsequencenumber** + aggregate **count**

### User Interaction Pattern (Pie Chart Creation)
Required from user (error if missing):
1. `entity_name` (Display Name or logical name; resolved like other tools)
2. `chart_name`

Optional:
- `chart_type` (default Pie; defaults to **Column** when `measures` has 2+ entries and `chart_type` is omitted)
- `group_by_column` / category (default statecode)
- `aggregate_column` / legend (default importsequencenumber)
- `aggregate_type` (default count)
- `measures` (multi-series: `column:aggregate_type[:label]; ...`, e.g. `estimatedvalue:sum:Revenue; importsequencenumber:count`. Mutually exclusive with `aggregate_column`/`aggregate_type`. Optional label becomes the series legend name. Pie/Doughnut/Funnel reject 2+ measures.)
- `filter` (structured datadescription filter: `field op value; ...`; ops `=`, `!=`, `>`, `>=`, `<`, `<=`, `like`, `in` (comma list), `null`, `not-null`; e.g. `statecode=0; estimatedvalue>1000000`)
- `solution_name` (optional; null-check before add)

Workflow:
1. Call `manage_ui(resource='chart', action='create', entity_name=..., chart_name=..., ...)` with `confirmed=false` (default).
2. Tool returns `status=needs_confirmation` + full proposed plan (including defaults) — for Pie, and for **any** create with `measures` or `filter`. **Do not create yet.**
3. Show the plan to the user. If they want different category/legend, re-call with updated fields and `confirmed=false` again.
4. After user approves, re-call the same create with `confirmed=true`.
5. Tool builds entity-based aggregate FetchXML, presentation XML, creates chart, adds to solution when `solution_name` is non-empty, and publishes.

### Actions
- `list`: List system charts for an entity (`entity_name`).
- `detail`: Get the full chart definition by `chart_id` or `chart_name`. For `detail`, `update`, and `set_default`, supply `entity_name` to scope a name lookup. If multiple charts match, use `chart_id`.
- `create`: Create a system chart (`entity_name`, `chart_name`, optional `chart_type`/`group_by_column`/`aggregate_column`/`aggregate_type`/`measures`/`filter`/`solution_name`, `confirmed` for pie or any create with `measures`/`filter`).
- `update`: Update the chart type, data fields, or description by `chart_id` or `chart_name`. For a description-only edit, omit `aggregate_type` and the other chart configuration fields to preserve both XML definitions.
- `rename`: Change chart display name.
- `set_default`: Set a system chart as the default chart for an entity.
- `undo`: Pass the `.chart.json` backup path as `presentationdescription`. If you supply `chart_id`, it must match the ID in the backup. Undo restores both XML definitions and the saved description. Older backups without a description field leave the current description intact.

---

## manage_schema(resource='relationship')

### Actions

| Action | Required Params | Description |
|--------|----------------|-------------|
| create_1n | referenced_entity, referencing_entity | Create 1:N + lookup column |
| create_nn | entity1, entity2 | Create N:N + intersect entity |
| update | relationship_name | Update cascade/menu config |
| delete | relationship_name | Delete relationship |
| add_target | entity_name, attribute_name, referenced_entity | Add target to polymorphic lookup |
| remove_target | entity_name, attribute_name, referenced_entity | Remove target (DATA LOSS!) |

### Cascade Presets

| Preset | Assign | Delete | Merge | Reparent | Share | Unshare |
|--------|--------|--------|-------|----------|-------|---------|
| Parental | Cascade | Cascade | Cascade | Cascade | Cascade | Cascade |
| Referential (default) | NoCascade | RemoveLink | NoCascade | NoCascade | NoCascade | NoCascade |
| ReferentialRestrictDelete | NoCascade | Restrict | NoCascade | NoCascade | NoCascade | NoCascade |

### Cascade Types (Individual Overrides)
Cascade, Active, UserOwned, NoCascade, RemoveLink, Restrict

### Menu Configuration
- menu_behavior: 'UseCollectionName' (default), 'UseLabel', 'DoNotDisplay'
- menu_group: 'Details' (default), 'Sales', 'Service', 'Marketing'
- menu_order: integer (default 10000)

### Hierarchy Relationship
- is_hierarchical: bool (default false). Only valid for self-referential 1:N (referenced_entity == referencing_entity).
- Only ONE hierarchy relationship per entity is allowed at a time.
- Enabling hierarchy unlocks OOB features: Hierarchy visualization chart, rollup columns (Sum/Count/Min/Max/Avg over children), position hierarchy security.
- Works with create_1n (set at creation time) and update (enable on existing self-referential relationship).
- Example: account entity uses 'account_parent_account' as its OOB hierarchy relationship.

### Polymorphic Lookup Notes
- add_target: Creates a new 1:N relationship pointing existing lookup to a new target entity
- remove_target: Deletes the relationship AND ALL DATA stored in that lookup target
- Only polymorphic lookups support add_target/remove_target -- regular lookups will error
