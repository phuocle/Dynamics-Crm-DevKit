
# Schema Tools Guide

Reference for `manage_table`, `manage_column`, and `manage_relationship`.

## manage_table

### Three-Field Name Model
- **display_name** / **display_collection_name** -- human labels (required for CREATE; mutable on UPDATE)
- **logical_name** -- lowercase logical name with publisher prefix; identifies an existing table for UPDATE; optional CREATE override (must be the lowercase form of schema_name)
- **schema_name** -- PascalCase schema name with publisher prefix; optional CREATE-only override of SchemaName (ignored on UPDATE)
- If schema_name/logical_name are omitted on CREATE, SchemaName is auto-derived from display_name via DataverseNamer and the logical name derives from it.
- Publisher prefix comes from solution_name (required for CREATE). There is NO entity_name parameter.

### Create Mode
- display_name, display_collection_name, solution_name are REQUIRED
- Optional schema_name and/or logical_name override the auto-derived names (must start with the publisher prefix)
- Auto-creates primary name attribute (default: 'Name', max 100 chars)

### Create-Only Properties (Immutable After Creation)
| Property | Default | Notes |
|----------|---------|-------|
| ownership_type | 'User' | 'User' (supports sharing/assigning) or 'Organization' (no row-level security) |
| table_type | 'Standard' | 'Standard' or 'Elastic' (Cosmos DB, limited charting) |
| is_activity | false | When true: auto-sets User ownership, enables notes, uses 'Subject' as primary attr |
| has_notes | false | Cannot be disabled once enabled |
| primary_attribute_name | auto-derived | From display_name |
| primary_attribute_display_name | 'Name' | Display name of primary field |

### Update Mode
- Pass logical_name to identify the existing table
- Only provided params are updated; omitted ones keep current values
- Immutable properties are IGNORED with warnings if passed during update

### Irreversible Options (Manage via Power Apps UI Only)
Activities, Feedback, Change Tracking, Business Process Flows, Connections, Queues, Sending Email.
These CANNOT be turned off once enabled.

### Post-Create Workflow
1. `manage_table` -- create entity
2. `manage_column` -- add columns
3. `manage_form(action='update', operations=<JSON array serialized as a string>)` -- customize the form; see `docs://instructions_for_formxml`
4. Check each tool's published status; use `publish_customizations` when publishing is still needed.

---

## manage_column

### Three-Field Name Model (same convention as manage_table)
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

### Formula column cloning
- `formula_definition` is create-only: copy the `formulaDefinition` reference returned by `get_tables` unchanged, as `source_table_logical_name:source_column_logical_name`. Do not pass raw formula content.
- The server retrieves the source formula and its kind, then rewrites entity, column, and relationship references for the target. Supported underlying types: string, memo, integer, decimal, money, float, boolean, datetime.
- To create an empty formula column, omit `formula_definition` and set `formula_source_type` to `powerfx`, `calculated`, or `rollup`. Formula clone parameters on update return an error.

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
- Create: manage_column(entity_name='devkit_ticket', attribute_type='string', display_name='Ticket Number', solution_name='all_in_one', auto_number_format='TKT-{SEQNUM:5}-{RANDSTRING:3}', auto_number_seed=10000)
- Convert an existing Text column: manage_column(entity_name='devkit_ticket', logical_name='devkit_code', auto_number_format='CODE-{SEQNUM:6}')
- get_tables shows the current pattern in `autoNumberFormat`.

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
`statuscode` is a system attribute of type StatusType. Use `manage_column` with
`logical_name='statuscode'` and `add_options`/`update_options`/`delete_options`.

Each option in `add_options` can include a `"state"` field (integer) that links the
status to a `statecode` value (0=Active, 1=Inactive by default). Defaults to 0 if omitted.

add_options:    [{"label":"Under Review","value":100000001,"state":0}]
update_options: [{"label":"Renamed Status","value":100000001}]
delete_options: [100000001]

`state` is required to control which statecode the new status appears under.
`statecode` column itself is read-only and cannot be managed via `manage_column`.

---

## manage_chart

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
1. Call `manage_chart(action='create', entity_name=..., chart_name=..., ...)` with `confirmed=false` (default).
2. Tool returns `status=needs_confirmation` + full proposed plan (including defaults) — for Pie, and for **any** create with `measures` or `filter`. **Do not create yet.**
3. Show the plan to the user. If they want different category/legend, re-call with updated fields and `confirmed=false` again.
4. After user approves, re-call the same create with `confirmed=true`.
5. Tool builds entity-based aggregate FetchXML, presentation XML, creates chart, adds to solution when `solution_name` is non-empty, and publishes.

### Actions
- `list`: List system charts for an entity (`entity_name`).
- `detail`: Get full chart definition by `chart_id` or `chart_name`.
- `create`: Create a system chart (`entity_name`, `chart_name`, optional `chart_type`/`group_by_column`/`aggregate_column`/`aggregate_type`/`measures`/`filter`/`solution_name`, `confirmed` for pie or any create with `measures`/`filter`).
- `update`: Update chart type/data fields/description by `chart_id` or `chart_name` (also accepts `measures`/`filter` to rebuild the datadescription).
- `rename`: Change chart display name.
- `set_default`: Set a system chart as the default chart for an entity.
- `undo`: Rollback chart state from a `.chart.json` backup file path.

---

## manage_relationship

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
