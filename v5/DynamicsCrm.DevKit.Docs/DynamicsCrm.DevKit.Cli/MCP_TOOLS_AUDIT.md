# MCP Tools Optimization — Detailed Implementation Guide

> **Date**: 2026-04-12
> **Scope**: 31 tools — keep all 31, no merge
> **Goal**: Reduce AI token consumption via (1) shorter descriptions, (2) examples moved to MCP resources, (3) error-guided resource reading
> **Audience**: An AI agent implementing this optimization. Every tool has step-by-step instructions.

---

## Table of Contents

1. [Strategy Overview](#1-strategy-overview)
2. [Token Count — Before & After](#2-token-count--before--after)
3. [Error-Guided Resource Pattern](#3-error-guided-resource-pattern)
4. [Resources — Existing & New](#4-resources--existing--new)
5. [Per-Tool Optimization Instructions](#5-per-tool-optimization-instructions)
   - [Tool 01: whoami](#tool-01-whoami)
   - [Tool 02: get_tables](#tool-02-get_tables)
   - [Tool 03: get_messages](#tool-03-get_messages)
   - [Tool 04: manage_choice](#tool-04-manage_choice)
   - [Tool 05: manage_record](#tool-05-manage_record)
   - [Tool 06: get_solution_components](#tool-06-get_solution_components)
   - [Tool 07: execute_fetchxml](#tool-07-execute_fetchxml)
   - [Tool 08: search_records](#tool-08-search_records)
   - [Tool 09: execute_webapi](#tool-09-execute_webapi)
   - [Tool 10: publish_customizations](#tool-10-publish_customizations)
   - [Tool 11: get_debugging](#tool-11-get_debugging)
   - [Tool 12: parse_record_url](#tool-12-parse_record_url)
   - [Tool 13: manage_form](#tool-13-manage_form)
   - [Tool 14: manage_view](#tool-14-manage_view)
   - [Tool 15: manage_role](#tool-15-manage_role)
   - [Tool 16: build_form_xml](#tool-16-build_form_xml)
   - [Tool 17: build_sitemap_xml](#tool-17-build_sitemap_xml)
   - [Tool 18: get_audit_history](#tool-18-get_audit_history)
   - [Tool 19: upsert_table](#tool-19-upsert_table)
   - [Tool 20: upsert_relationship](#tool-20-upsert_relationship)
   - [Tool 21: manage_sitemap](#tool-21-manage_sitemap)
   - [Tool 22: upsert_column](#tool-22-upsert_column)
   - [Tool 23: manage_environment_variable](#tool-23-manage_environment_variable)
   - [Tool 24: get_business_rules](#tool-24-get_business_rules)
   - [Tool 25: get_workflows](#tool-25-get_workflows)
   - [Tool 26: get_custom_apis](#tool-26-get_custom_apis)
   - [Tool 27: get_flows](#tool-27-get_flows)
   - [Tool 28: get_business_process_flows](#tool-28-get_business_process_flows)
   - [Tool 29: get_plugins](#tool-29-get_plugins)
   - [Tool 30: get_dataverse_commands](#tool-30-get_dataverse_commands)
   - [Tool 31: manage_webresource](#tool-31-manage_webresource)
6. [Implementation Checklist](#6-implementation-checklist)

---

## 1. Strategy Overview

### Three Pillars of Optimization

| Pillar | What | Why |
|--------|------|-----|
| **Shorter Descriptions** | Remove examples, inline docs, field-type lists from `[Description("...")]` | Less tokens sent to AI on EVERY tool listing (~11K → ~6K) |
| **Move to Resources** | Examples, format docs, advanced rules → MCP `docs://` resources | AI reads them only when needed (on error or complex task) |
| **Error-Guided Reading** | Error messages guide AI to read the correct resource on mistake | Works with ALL AI models (fast, mini, opus) — 100% self-correcting |

### Design Philosophy

```
HAPPY PATH (80% of calls):
  AI reads short description → correct params → succeeds → done ✅
  Token cost: LOW (only short description)

ERROR PATH (20% of calls):
  AI reads short description → wrong params → receives error with:
    1. What went wrong (clear error message)
    2. Valid values (immediate fix - no resource needed)
    3. Resource link (deep help if #2 is not enough)
  → AI retries correctly → done ✅
  Token cost: MEDIUM (short desc + error + optional resource read)
```

### What NOT to Do

> [!CAUTION]
> - Do **NOT** put `"Read docs://... for examples"` in tool descriptions. Fast AI models skip reading resources proactively.
> - Do **NOT** merge any tools. Keep all 31 tools as-is.
> - Do **NOT** change tool names, parameter names, or parameter types.
> - Do **NOT** change tool logic or functionality — only modify `[Description("...")]` strings and error messages.

---

## 2. Token Count — Before & After

Token estimates based on `[Description("...")]` text for the tool + all parameters, sent to AI on every MCP request (~4 chars/token for English text).

| # | Tool Name | Current Tokens | Optimized Tokens | Saved | % Reduced |
|---|-----------|---------------|-----------------|-------|-----------|
| 1 | `whoami` | ~160 | ~130 | ~30 | 19% |
| 2 | `get_tables` | ~240 | ~170 | ~70 | 29% |
| 3 | `get_messages` | ~215 | ~160 | ~55 | 26% |
| 4 | `manage_choice` | ~460 | ~280 | ~180 | 39% |
| 5 | `manage_record` | ~390 | ~250 | ~140 | 36% |
| 6 | `get_solution_components` | ~280 | ~220 | ~60 | 21% |
| 7 | `execute_fetchxml` | ~280 | ~200 | ~80 | 29% |
| 8 | `search_records` | ~370 | ~220 | ~150 | 41% |
| 9 | `execute_webapi` | ~360 | ~220 | ~140 | 39% |
| 10 | `publish_customizations` | ~210 | ~180 | ~30 | 14% |
| 11 | `get_debugging` | ~400 | ~250 | ~150 | 38% |
| 12 | `parse_record_url` | ~170 | ~140 | ~30 | 18% |
| 13 | `manage_form` | ~450 | ~300 | ~150 | 33% |
| 14 | `manage_view` | ~480 | ~300 | ~180 | 38% |
| 15 | `manage_role` | ~450 | ~300 | ~150 | 33% |
| 16 | `build_form_xml` | ~680 | ~300 | ~380 | 56% |
| 17 | `build_sitemap_xml` | ~420 | ~250 | ~170 | 40% |
| 18 | `get_audit_history` | ~290 | ~180 | ~110 | 38% |
| 19 | `upsert_table` | ~610 | ~350 | ~260 | 43% |
| 20 | `upsert_relationship` | ~640 | ~350 | ~290 | 45% |
| 21 | `manage_sitemap` | ~300 | ~220 | ~80 | 27% |
| 22 | `upsert_column` | ~650 | ~350 | ~300 | 46% |
| 23 | `manage_environment_variable` | ~340 | ~200 | ~140 | 41% |
| 24 | `get_business_rules` | ~230 | ~170 | ~60 | 26% |
| 25 | `get_workflows` | ~370 | ~220 | ~150 | 41% |
| 26 | `get_custom_apis` | ~210 | ~160 | ~50 | 24% |
| 27 | `get_flows` | ~290 | ~200 | ~90 | 31% |
| 28 | `get_business_process_flows` | ~210 | ~160 | ~50 | 24% |
| 29 | `get_plugins` | ~320 | ~220 | ~100 | 31% |
| 30 | `get_dataverse_commands` | ~240 | ~180 | ~60 | 25% |
| 31 | `manage_webresource` | ~420 | ~250 | ~170 | 40% |

### Summary

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| **Total tokens (31 tools)** | **~10,950** | **~6,730** | **−4,220 (−39%)** |
| **Average per tool** | ~353 | ~217 | −136 |
| **Highest token tool** | `build_form_xml` (680) | `upsert_table` (350) | — |
| **Lowest token tool** | `whoami` (160) | `whoami` (130) | — |

---

## 3. Error-Guided Resource Pattern

### Three-Layer Error Message Structure

Every error message in every tool MUST follow this structure:

```csharp
return ErrorResult(
    $"Error: [what went wrong].\n" +             // Layer 1: Clear error
    $"Valid values: [list valid options].\n" +     // Layer 2: Immediate fix
    $"Read [resource URI] for details."           // Layer 3: Deep help (only for complex cases)
);
```

**Layer 1** — Always present. AI understands WHAT failed.
**Layer 2** — Always present for validation errors. AI can fix immediately WITHOUT reading resource.
**Layer 3** — Only for complex format/syntax errors. AI reads the resource only when Layer 2 is insufficient.

### When to Include Layer 3 (Resource Link)

| Error Type | Layer 3 Needed? | Example |
|-----------|----------------|---------|
| Missing required param | ❌ No | `"Error: entity_name is required."` |
| Invalid action value | ✅ Yes (if many valid values) | `"...Valid: list, detail, create, update.\nRead docs://... for action-specific params."` |
| Invalid JSON/XML format | ✅ Yes | `"...Read docs://instructions_for_formxml for JSON format."` |
| Invalid enum value | ⚠️ Maybe (if few values, #2 is enough) | `"...Valid: 'User' or 'Organization'."` |
| GUID parse error | ❌ No | `"Error: '{value}' is not a valid GUID."` |

---

## 4. Resources — Existing & New

### Existing MCP Resources (6)

| Resource URI | Content | Used By (Error-Guided) |
|-------------|---------|----------------------|
| `docs://instructions_for_formxml` | FormXML rules, structure, examples | `build_form_xml`, `manage_form` |
| `docs://instructions_for_views` | View/LayoutXML rules, sync rules | `manage_view` |
| `schema://formxml` | FormXml.xsd | `manage_form` |
| `schema://layoutxml` | LayoutXml.xsd | `manage_view` |
| `schema://fetchxml` | Fetch.xsd | `execute_fetchxml` |
| `schema://sitemapxml` | SiteMap.xsd + rules | `build_sitemap_xml`, `manage_sitemap` |

### New Resources to Create (3)

These resources ARE NOT yet implemented. They must be created in `DynamicsCrm.DevKit.Cli/Mcp/Resources/InstructionResources.cs` as new `[McpServerResource]` methods.

| Resource URI | Error-Guided By |
|-------------|----------------|
| `docs://schema_tools_guide` | `upsert_table`, `upsert_column`, `upsert_relationship` |
| `docs://data_operations_guide` | `manage_record`, `execute_fetchxml`, `search_records` |
| `docs://server_logic_guide` | `get_plugins`, `get_workflows`, `get_custom_apis`, `get_flows`, `get_business_process_flows`, `get_business_rules` |

> [!IMPORTANT]
> Create these 3 resources BEFORE trimming tool descriptions. The error messages need valid resource URIs to point to.

---

### Resource 1: `docs://schema_tools_guide`

**C# Method Signature:**
```csharp
[McpServerResource(
    MimeType = "text/markdown",
    Name = "schema_tools_guide",
    Title = "Guide for Dataverse schema tools (upsert_table, upsert_column, upsert_relationship)",
    UriTemplate = "docs://schema_tools_guide"),
Description(
    "Rules, type matrices, and immutable property lists for schema tools. " +
    "Read this when upsert_table, upsert_column, or upsert_relationship returns an error.")]
public static string SchemaToolsGuide() => @"...";
```

**Full Resource Content (what the method returns):**

````markdown
# Schema Tools Guide

Reference for `upsert_table`, `upsert_column`, and `upsert_relationship`.

## upsert_table

### Create Mode
- display_name, display_collection_name, solution_name are REQUIRED
- entity_name MUST include publisher prefix (e.g., 'new_project')
- If no prefix (no underscore), prefix auto-resolved from solution_name's publisher
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
- Only entity_name required to identify the entity
- Only provided params are updated; omitted ones keep current values
- Immutable properties are IGNORED with warnings if passed during update

### Irreversible Options (Manage via Power Apps UI Only)
Activities, Feedback, Change Tracking, Business Process Flows, Connections, Queues, Sending Email.
These CANNOT be turned off once enabled.

### Post-Create Workflow
1. `upsert_table` — create entity
2. `upsert_column` — add columns
3. `build_form_xml` + `manage_form` — customize the form
4. `publish_customizations` — publish (if auto_publish=false)

---

## upsert_column

### Attribute Type Matrix

| Type | Required Params (Create) | Optional Params | Defaults |
|------|-------------------------|-----------------|----------|
| string | entity_name, attribute_name, attribute_type, display_name | max_length, format, required_level | max_length=100, format='Text' |
| memo | same | max_length, format | max_length=2000 |
| integer | same | min_value, max_value, format | format='None' |
| bigint | same | — | No range limits |
| decimal | same | min_value, max_value, precision | precision=2 (max 10) |
| money | same | min_value, max_value, precision, precision_source | precision=2 (max 4), source=0 (Attribute) |
| float | same | min_value, max_value, precision | precision=2 (max 10) |
| boolean | same | true_label, false_label | 'Yes'/'No' |
| datetime | same | format, behavior | format='DateAndTime', behavior='UserLocal' |
| lookup | same + lookup_target | lookup_relationship_name | Auto-creates 1:N relationship |
| customer | same | — | Polymorphic: account + contact |
| picklist | same + options OR global_optionset_name | — | Local or global option set |
| multipicklist | same + options OR global_optionset_name | — | Multi-select version of picklist |
| image | same | — | — |
| file | same | max_length | max_length=32768 (KB) |

### Format Values by Type

| Type | Valid Formats |
|------|-------------|
| string | Text (default), Email, Url, Phone, TextArea, RichText |
| memo | Text (default), Email, TextArea, RichText |
| integer | None (default), Duration, TimeZone, Language, Locale |
| datetime format | DateOnly, DateAndTime (default) |
| datetime behavior | UserLocal (default), DateOnly, TimeZoneIndependent |

### Money Precision Source
| Value | Meaning |
|-------|---------|
| 0 | Attribute (use column's precision setting) |
| 1 | Organization (use org-level pricing precision) |
| 2 | Currency (use currency record's precision) |

### Picklist Options Format (Create)
```json
[{"label": "Low", "value": 100000000}, {"label": "Medium", "value": 100000001}, {"label": "High", "value": 100000002}]
```

### Picklist Options (Update)
- add_options: JSON array of options to add (same format as create)
- update_options: JSON array of options to rename: `[{"value": 100000000, "label": "Very Low"}]`
- delete_options: JSON array of integer values to remove: `[100000002]`

### Create-Only Properties (Cannot Change After Creation)
- attribute_type — type is permanently set
- lookup_target — target entity fixed
- global_optionset_name — option set binding fixed

---

## upsert_relationship

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

### Polymorphic Lookup Notes
- add_target: Creates a new 1:N relationship pointing existing lookup to a new target entity
- remove_target: Deletes the relationship AND ALL DATA stored in that lookup target
- Only polymorphic lookups support add_target/remove_target — regular lookups will error
````

---

### Resource 2: `docs://data_operations_guide`

**C# Method Signature:**
```csharp
[McpServerResource(
    MimeType = "text/markdown",
    Name = "data_operations_guide",
    Title = "Guide for Dataverse data operations (manage_record, execute_fetchxml, search_records)",
    UriTemplate = "docs://data_operations_guide"),
Description(
    "Field type formats, FetchXML relationship joins, and search syntax. " +
    "Read this when manage_record, execute_fetchxml, or search_records returns an error.")]
public static string DataOperationsGuide() => @"...";
```

**Full Resource Content (what the method returns):**

````markdown
# Data Operations Guide

Reference for `manage_record`, `execute_fetchxml`, and `search_records`.

## manage_record — Field Type Formats

### fields_json Format by Type

| Field Type | JSON Value Format | Example |
|-----------|------------------|---------|
| String/Memo | `"value"` | `{"name": "Contoso Ltd"}` |
| Integer | `42` | `{"numberofemployees": 250}` |
| Decimal/Money | `99.50` | `{"revenue": 1000000.00}` |
| Boolean | `true` or `false` | `{"isprimary": true}` |
| DateTime | `"YYYY-MM-DD"` or `"YYYY-MM-DDTHH:mm:ssZ"` | `{"createdon": "2025-01-15"}` |
| Lookup | GUID string | `{"primarycontactid": "a1b2c3d4-..."}` |
| Picklist/Status | integer value | `{"statuscode": 1}` |
| MultiSelect | `[int, int, ...]` | `{"preferences": [100000001, 100000002]}` |
| Clear a field | `null` | `{"fax": null}` |

### Polymorphic Lookup Syntax
For fields that can point to multiple entity types (e.g., `customerid` → Account or Contact):

```json
{
  "customerid@account": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

Key format: `"fieldname@targetentity"`. The `@` separator tells the system which entity type the GUID belongs to.

Common polymorphic lookups:
- `customerid` → account, contact
- `regardingobjectid` → multiple entities (context-dependent)
- `ownerid` → systemuser, team

### Delete Considerations
- Some records fail to delete due to dependencies (child records, required lookups)
- Deleting a parent record may cascade-delete child records depending on relationship cascade config
- Use `get_tables` with entity_name to check relationships before deleting parent records

---

## execute_fetchxml — Curated Reference

### Basic Structure
```xml
<fetch [distinct='true'] [aggregate='true']>
  <entity name='account'>
    <attribute name='name' />
    <attribute name='accountid' />
    <filter type='and'>
      <condition attribute='statecode' operator='eq' value='0' />
    </filter>
    <order attribute='name' descending='false' />
  </entity>
</fetch>
```

### Common Operators
| Operator | Meaning | Example |
|----------|---------|---------|
| eq | Equals | `value='0'` |
| ne | Not equals | `value='1'` |
| gt, ge, lt, le | Greater/less than | `value='2025-01-01'` |
| like | Wildcard match | `value='%contoso%'` |
| null | Is null | (no value attr) |
| not-null | Is not null | (no value attr) |
| in | In list | `<value>1</value><value>2</value>` |
| between | Range | `<value>1</value><value>100</value>` |
| today | Today's date | (no value attr) |
| last-x-days | Last N days | `value='30'` |

### Relationship Joins (link-entity)
```xml
<!-- N:1 (Many-to-One): child → parent -->
<link-entity name='contact' from='contactid' to='primarycontactid' link-type='inner' alias='c'>
  <attribute name='fullname' />
</link-entity>

<!-- 1:N (One-to-Many): parent → children -->
<link-entity name='contact' from='parentcustomerid' to='accountid' link-type='inner' alias='c'>
  <attribute name='fullname' />
</link-entity>

<!-- N:N (Many-to-Many): through intersect entity -->
<link-entity name='accountleads' from='accountid' to='accountid' link-type='inner'>
  <link-entity name='lead' from='leadid' to='leadid' link-type='inner' alias='l'>
    <attribute name='fullname' />
  </link-entity>
</link-entity>
```

### Aggregation
```xml
<fetch aggregate='true'>
  <entity name='opportunity'>
    <attribute name='estimatedvalue' alias='total_value' aggregate='sum' />
    <attribute name='statuscode' alias='status' groupby='true' />
  </entity>
</fetch>
```
Functions: count, sum, avg, min, max. Use `groupby='true'` for grouping.

### Rules
- Use lowercase logical names for everything
- Use `get_tables` to discover entity/attribute names if unsure
- DO NOT use top/count/page in `<fetch>` — use the `max_records` parameter instead
- For advanced syntax, read `schema://fetchxml`

---

## search_records — Search Syntax

### Search Operators
| Operator | Meaning | Example |
|----------|---------|---------|
| (default) | OR between words | `john smith` → john OR smith |
| `+` | AND | `hotel+wifi` → both required |
| `\|` | OR (explicit) | `wifi\|luxury` |
| `-` | NOT | `-pool` → exclude pool |
| `*` | Trailing wildcard | `Alp*` → Alpine, Alpha, etc. |
| `""` | Exact phrase | `"Contoso Ltd"` |
| `()` | Grouping | `hotel+(wifi\|luxury)` |

### Prerequisite
Relevance Search must be enabled in Power Platform admin center:
1. Go to https://admin.powerplatform.microsoft.com
2. Select environment → Settings → Product → Features
3. Under 'Dataverse Search', select 'On'
4. Save and wait for indexing to complete

### Limitations
- Max 100 results per query
- For larger datasets or precise filtering, use `execute_fetchxml`
- Only searches fields indexed by Relevance Search (use `action='status'` to check)

### OData Filter Syntax
Use the `filter` parameter for pre-filtering:
- `statecode eq 0` — active records only
- `createdon gt 2024-01-01` — created after date
- Operators: eq, ne, gt, ge, lt, le, and, or, not
````

---

### Resource 3: `docs://server_logic_guide`

**C# Method Signature:**
```csharp
[McpServerResource(
    MimeType = "text/markdown",
    Name = "server_logic_guide",
    Title = "Guide for server-side logic tools (plugins, workflows, flows, BPFs, business rules, custom APIs)",
    UriTemplate = "docs://server_logic_guide"),
Description(
    "Filtering patterns, list/detail modes, and entity scoping for server-logic tools. " +
    "Read this when get_plugins, get_workflows, get_flows, etc. returns an error.")]
public static string ServerLogicGuide() => @"...";
```

**Full Resource Content (what the method returns):**

````markdown
# Server-Side Logic Guide

Reference for all 6 server-logic inspection tools.

## Tool Overview

| Tool | What It Inspects | Dataverse Entity | Category Filter |
|------|-----------------|------------------|-----------------|
| get_plugins | Plugin assemblies, types, steps, images | pluginassembly, plugintype, sdkmessageprocessingstep | N/A |
| get_workflows | Classic workflows (background + realtime) | workflow | category=0 |
| get_custom_apis | Custom API definitions | customapi | N/A |
| get_flows | Power Automate cloud flows + run history | workflow + flowsession | category=5 |
| get_business_process_flows | BPF definitions + stages | workflow | category=4 |
| get_business_rules | Business rules | workflow | category=2 |

## Common Pattern: List vs Detail

All 6 tools share a list/detail pattern:

| Mode | When | What You Get |
|------|------|-------------|
| **List** | No ID provided | Summary table of all matching items |
| **Detail** | ID provided | Full detail for a single item |

For `get_plugins`: detail mode triggers when `assembly_name` matches exactly 1 assembly.
For `get_workflows`: detail mode also triggers when `name_filter` matches exactly 1 workflow.

## get_plugins

### Three Modes
1. **No filters**: List all plugin assemblies with type counts
2. **assembly_name**: Assembly detail with all types + steps + images
3. **entity_name**: All plugin steps on that entity across all assemblies

### Filter Parameters
| Parameter | Description | List Mode | Detail Mode |
|-----------|------------|-----------|-------------|
| assembly_name | Assembly name (contains) | ✅ | ✅ |
| entity_name | Entity logical name | ❌ | ✅ (shows all steps) |
| message_name | SDK message (Create, Update, Delete) | ❌ | ✅ |
| type_name | Plugin type name (contains) | ❌ | ✅ |
| stage | prevalidation, preoperation, postoperation, mainoperation | ❌ | ✅ |
| mode | sync or async | ❌ | ✅ |
| active_only | Only active steps (default: true) | ❌ | ✅ |

### Stage Values
| Stage | Value | When |
|-------|-------|------|
| PreValidation | 10 | Before validation, can cancel |
| PreOperation | 20 | Before DB write, can modify values |
| MainOperation | 30 | Custom API / DataProvider only |
| PostOperation | 40 | After DB write, most common |

### Image Types
| Type | Value | Content |
|------|-------|---------|
| PreImage | 0 | Record state BEFORE the operation |
| PostImage | 1 | Record state AFTER the operation |
| Both | 2 | Both pre and post states |

## get_workflows

### Filter Parameters
| Parameter | Description |
|-----------|------------|
| entity_name | Entity logical name (e.g., 'account') |
| mode | 'background' (async) or 'realtime' (sync) |
| active_only | Only activated workflows (default: true) |
| trigger_field | Filter by update trigger field (contains, e.g., 'statecode') |
| name_filter | Filter by workflow name (contains). 1 match → auto-detail |

### Key Concepts
- **mode**: Background=async (always PostOperation), Realtime=sync (Pre or Post)
- **scope**: 1=User, 2=BusinessUnit, 3=Parent:ChildBU, 4=Organization
- **runas**: 0=Owner (of workflow), 1=Caller (triggering user)
- **triggeronupdateattributelist**: comma-separated field names that trigger on Update

## get_custom_apis

### Filter Parameters
| Parameter | Description |
|-----------|------------|
| api_name | Unique name or display name (contains) |
| entity_name | Bound entity logical name |
| active_only | Only active APIs (default: true) |

### Key Fields Returned
- unique_name, display_name, binding_type (Global, Entity, EntityCollection)
- is_private, allowed_custom_processing_step_type
- request_parameters, response_properties (with type, is_optional)
- plugin_type (backing implementation)

## get_flows

### Three Modes
1. **flow_id EMPTY + action='list'**: List all cloud flows
2. **flow_id PROVIDED + action='list'**: Flow detail + last 5 runs
3. **flow_id PROVIDED + action='runs'**: Extended run history

### Filter Parameters
| Parameter | List Mode | Runs Mode |
|-----------|-----------|-----------|
| name_filter | ✅ (contains) | ❌ |
| owner_filter | ✅ (contains) | ❌ |
| status | active/draft/suspended/all | ❌ |
| status_filter | ❌ | succeeded/failed/running/cancelled/waiting/paused/skipped/suspended |
| minutes_ago | ❌ | Last N minutes (default 1440 = 24h) |

### Run Status Values
NotSpecified(0), Paused(1), Running(2), Waiting(3), Succeeded(4), Skipped(5), Suspended(6), Cancelled(7), Failed(8)

## get_business_process_flows

### Filter Parameters
| Parameter | Description |
|-----------|------------|
| bpf_id | GUID for detail mode |
| entity_name | Primary entity logical name |
| active_only | Only active BPFs (default: true) |

### Detail Includes
- Stages (ordered), required fields per stage
- Primary entity, related entities
- Status (Active/Draft), owner

## get_business_rules

### Filter Parameters
| Parameter | Description |
|-----------|------------|
| entity_name | Entity logical name (REQUIRED) |
| rule_id | GUID for detail (shows conditions + actions + XAML) |
| active_only | Only active rules (default: true) |

### Notes
- Business rules are entity-specific (no global list without entity_name)
- Detail mode returns the full XAML definition which can be complex
- Business rules execute client-side (form) or server-side depending on scope
````

---

## 5. Per-Tool Optimization Instructions

### How to Read Each Tool Section

Each tool section below contains:

1. **File**: Source file location
2. **Current Description**: The full text currently in `[Description("...")]`
3. **Optimized Description**: The new shorter text to replace it
4. **What Was Removed**: Content that was moved to resources or dropped
5. **Error Messages to Update**: Specific error messages in the tool's code that need resource links added
6. **Parameter Descriptions**: Any param `[Description("...")]` changes (most stay the same)

---

### Tool 01: whoami

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/WhoAmITool.cs`

**Category**: Identity — Simple, low-token tool. Minimal optimization needed.

#### Current Description (lines 30-38)

```csharp
Description(
    "Get the identity of the currently authenticated user, environment info, and access token.\n\n" +
    "Returns: user (ID, name, email, roles), org (ID, URL, version, friendly name), " +
    "tenant/environment IDs, base language, currency, fiscal settings, audit status.\n\n" +
    "WHEN TO USE:\n" +
    "- Confirm which user and environment you are connected to\n" +
    "- Check security roles when troubleshooting permission errors\n" +
    "- Get current user's ID for FetchXML filters (e.g. records owned by me)")
```

#### Optimized Description

```csharp
Description(
    "Get current user identity, environment info, and security roles.\n\n" +
    "Returns: user (ID, name, email, roles), org (ID, URL, version), tenant/environment IDs.\n\n" +
    "WHEN TO USE:\n" +
    "- Confirm which user/environment you are connected to\n" +
    "- Get user ID for FetchXML filters (records owned by me)\n" +
    "- Check security roles for permission troubleshooting")
```

#### What Was Removed
- "fiscal settings, audit status" from Returns — too granular
- "access token" from first sentence — parameter description already says this

#### Error Messages to Update
- **None**. This tool has only one catch-all error: `"Error: Failed to execute WhoAmI: {ex.Message}"` — no resource needed.

#### Parameter Descriptions
- **No changes needed**. The `include_token` param description is already concise.

---

### Tool 02: get_tables

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetTablesTool.cs`

**Category**: Metadata — Important discovery tool. Remove FetchXML link-entity examples from description.

#### Current Description (lines 24-41)

```csharp
Description(
    "Retrieve Dataverse entity/table metadata.\n\n" +
    "TWO MODES:\n" +
    "- entity_name EMPTY: summary table of all entities (filter by keyword or custom_only)\n" +
    "- entity_name PROVIDED: full detail — attributes (type, options, required), relationships (1:N, N:1, N:N), alternate keys\n\n" +
    "RELATIONSHIPS IN FETCHXML:\n" +
    "- N:1: <link-entity name='[parent]' from='[parentPK]' to='[lookupField]'>\n" +
    "- 1:N: <link-entity name='[child]' from='[childLookup]' to='[thisPK]'>\n" +
    "- N:N: chain two link-entity through intersectEntity\n\n" +
    "COMMON NAMES: Account=account, Contact=contact, Lead=lead, Opportunity=opportunity, " +
    "Case=incident, User=systemuser, Team=team, Note=annotation\n\n" +
    "WHEN TO USE:\n" +
    "- Discover entity/attribute names before building FetchXML\n" +
    "- Find join columns, picklist options, required fields, or primary key")
```

#### Optimized Description

```csharp
Description(
    "Retrieve Dataverse entity/table metadata.\n\n" +
    "TWO MODES:\n" +
    "- entity_name EMPTY: summary of all entities (filter by keyword or custom_only)\n" +
    "- entity_name PROVIDED: full detail — attributes, relationships, alternate keys\n\n" +
    "COMMON NAMES: Account=account, Contact=contact, Case=incident, User=systemuser\n\n" +
    "WHEN TO USE:\n" +
    "- Discover entity/attribute names before FetchXML or manage_record\n" +
    "- Find join columns, picklist options, required fields")
```

#### What Was Removed
- **RELATIONSHIPS IN FETCHXML** block (3 lines of FetchXML join syntax) → move to `docs://data_operations_guide`
- Expanded "COMMON NAMES" list → kept only 4 most common
- "or primary key" — implied

#### Error Messages to Update
- **None**. Single catch-all error: `"Error: Failed to load {target}: {ex.Message}"` — no resource needed.

#### Parameter Descriptions
- **No changes needed**.

---

### Tool 03: get_messages

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetMessagesTool.cs`

**Category**: Metadata — List SDK messages and custom actions.

#### Current Description (lines 66-84)

```csharp
Description(
    "Discover SDK messages and Custom Actions available for a Dataverse entity.\n\n" +
    "TWO MODES:\n" +
    "- message_name EMPTY: list all SDK messages + Custom Action names for an entity or globally\n" +
    "- message_name PROVIDED: detail for a specific message or Custom Action (parameters, supported entities, plugin steps)\n\n" +
    "SCOPING:\n" +
    "- Entity-bound: provide entity_name to get messages for that entity\n" +
    "- Global: use 'none' or empty for unbound messages (WhoAmI, global Custom Actions)\n\n" +
    "WHEN TO USE:\n" +
    "- Discover which SDK messages are available for plugin registration\n" +
    "- Find Custom Actions registered for an entity\n" +
    "- Get input/output parameters of a Custom Action (workflow category=3)\n\n" +
    "TIPS:\n" +
    "- For Custom API detail (modern replacement), use get_custom_apis\n" +
    "- This tool covers legacy Custom Actions (workflow-based) that get_custom_apis does NOT cover")
```

#### Optimized Description

```csharp
Description(
    "Discover SDK messages and Custom Actions for a Dataverse entity.\n\n" +
    "TWO MODES:\n" +
    "- message_name EMPTY: list all SDK messages + Custom Action names\n" +
    "- message_name PROVIDED: detail (parameters, supported entities, plugin steps)\n\n" +
    "SCOPING: entity_name for entity-bound, 'none'/empty for global messages.\n\n" +
    "WHEN TO USE:\n" +
    "- Discover SDK messages for plugin registration\n" +
    "- Get Custom Action input/output parameters\n" +
    "- For Custom API (modern), use get_custom_apis instead")
```

#### What Was Removed
- "SCOPING" expanded bullets → compressed to 1 line
- TIPS section → compressed into WHEN TO USE
- "workflow category=3" detail → too granular

#### Error Messages to Update
- Line 110: `ErrorResult($"Error: Failed to load messages: {ex.Message}")` — **No change needed** (generic)
- Lines 171-173: `ErrorResult($"Error: Message or Custom Action '{messageName}' not found. Use get_messages (list mode) to discover available messages.")` — **Already good** (has Layer 2 guidance)

#### Parameter Descriptions
- **No changes needed**.

---

### Tool 04: manage_choice

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageChoiceTool.cs`

**Category**: Metadata — CRUD for global option sets. Has format examples that should go to resource.

#### Current Description (lines 32-53)

The current description contains **options format examples** inline:
- `'100000000:Active;100000001:Inactive'`
- `add_options`, `update_options`, `remove_option_values` format examples

#### Optimized Description

```csharp
Description(
    "List, inspect, create, or update global option sets (choices/picklists).\n\n" +
    "FOUR ACTIONS:\n" +
    "- action='list': List all global option sets\n" +
    "- action='detail': Show value/label pairs. Requires optionset_name\n" +
    "- action='create': Create new. Requires optionset_name + display_name + options\n" +
    "- action='update': Add/update/remove options. Requires optionset_name + at least one change param\n\n" +
    "WHEN TO USE:\n" +
    "- Get valid integer values for FetchXML filters on picklist fields\n" +
    "- Create/modify global choices for use in upsert_column picklist columns\n\n" +
    "TIPS:\n" +
    "- GLOBAL option sets only. For entity-specific (local) picklists, use get_tables\n" +
    "- After create/update, call publish_customizations")
```

#### What Was Removed
- `options` format example (`'100000000:Active;100000001:Inactive'`) → keep in param description (already there)
- `add_options`, `update_options`, `remove_option_values` format examples → keep in param descriptions (already there)
- "Map integer values in query results to display labels" → redundant with first bullet
- "Related: upsert_column..." → too verbose

#### Error Messages to Update

These error messages **already have Layer 2** (valid values). Add Layer 3 resource link where format is complex:

1. **Line 92**: `"Error: action is required. Valid values: 'list', 'detail', 'create', 'update'."` → **No change**
2. **Line 104**: `"Error: Invalid action '{action}'. Valid values: 'list', 'detail', 'create', 'update'."` → **No change**
3. **Lines 162-164** (invalid options format):
   ```csharp
   // BEFORE:
   return ErrorResult("Error: Invalid options format. " +
       "Expected 'value:label;value:label' (e.g., '100000000:Active;100000001:Inactive'). " +
       "Values must be integers ≥ 0.");
   // AFTER — No change needed, Layer 2 is sufficient (format is simple)
   ```

#### Parameter Descriptions
- **No changes needed**. Format examples already in param descriptions.

---

### Tool 05: manage_record

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRecordTool.cs`

**Category**: Data CRUD — Biggest optimization target. Move FIELD TYPES section to resource.

#### Current Description (lines 34-53)

Contains a **FIELD TYPES** block with format examples for every type (String, DateTime, Lookup, Polymorphic, MultiSelect, etc.)

#### Optimized Description

```csharp
Description(
    "Perform CRUD on a single Dataverse record.\n\n" +
    "FOUR ACTIONS:\n" +
    "- action='create': New record. Requires entity_name + fields_json. Returns GUID\n" +
    "- action='read': Retrieve by ID. Requires entity_name + record_id\n" +
    "- action='update': Update existing. Requires entity_name + record_id + fields_json\n" +
    "- action='delete': Permanently delete. Requires entity_name + record_id. Cannot undo\n\n" +
    "TIPS:\n" +
    "- Use get_tables for field names/types before create/update\n" +
    "- Partial update supported — only include fields you want to set\n" +
    "- Polymorphic lookups: use 'field@entity' key (e.g., 'customerid@account')")
```

#### What Was Removed
- **FIELD TYPES** block (4 lines) → move to `docs://data_operations_guide`:
  - String, Integer, Decimal/Money, Boolean formats
  - DateTime ISO format
  - Picklist integer value
  - MultiSelect array format
  - `null` to clear a field
- "Internally uses UpsertRequest for robustness" → implementation detail
- "Some records may fail to delete due to dependencies" → move to resource
- "Deleting a parent record may cascade-delete child records" → move to resource

#### Error Messages to Update

1. **Line 88** (invalid action):
   ```csharp
   // ALREADY GOOD:
   ErrorResult($"Error: Invalid action '{action}'. Valid values: 'create', 'read', 'update', 'delete'.")
   ```

2. **Line 126** (create failed):
   ```csharp
   // BEFORE:
   ErrorResult($"Error: Create failed for {entityName}\nMessage: {ex.Message}\nHint: Use get_tables to verify field names and types.")
   // AFTER:
   ErrorResult(
       $"Error: Create failed for {entityName}.\n" +
       $"Message: {ex.Message}\n" +
       $"Hint: Use get_tables to verify field names and types.\n" +
       $"Read docs://data_operations_guide for field type formats and polymorphic lookup syntax.")
   ```

3. **Line 203** (update failed):
   ```csharp
   // BEFORE:
   ErrorResult($"Error: Update failed for {entityName} {recordId}\nMessage: {ex.Message}\nHint: Use get_tables to verify field names and types.")
   // AFTER:
   ErrorResult(
       $"Error: Update failed for {entityName} {recordId}.\n" +
       $"Message: {ex.Message}\n" +
       $"Hint: Use get_tables to verify field names and types.\n" +
       $"Read docs://data_operations_guide for field type formats and polymorphic lookup syntax.")
   ```

#### Parameter Descriptions
- **No changes needed**.

---

### Tool 06: get_solution_components

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetSolutionComponentsTool.cs`

**Category**: Solution — Read-only, list/detail pattern. Moderately optimizable.

#### Optimized Description

Trim "WHEN TO USE" and long explanations. Keep the core 2-mode pattern.

#### What to Remove
- Any inline examples of component type codes → leave in param descriptions or move to resource
- Verbose tips about filtering

#### Error Messages to Update
- **None significant**. This tool has simple error messages.

#### Parameter Descriptions
- **No changes needed**.

---

### Tool 07: execute_fetchxml

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/ExecuteFetchXmlTool.cs`

**Category**: Data Query — Core query tool. Small file (5.4 KB), already compact.

#### Optimized Description

Keep the description mostly as-is. This is a critical tool and the description is already efficient.

#### What to Remove
- Any inline FetchXML syntax examples → move to `docs://data_operations_guide`

#### Error Messages to Update

Add resource link for FetchXML parse errors:

```csharp
// When FetchXML is invalid:
ErrorResult(
    $"Error: Invalid FetchXML syntax.\n" +
    $"Message: {ex.Message}\n" +
    $"Read schema://fetchxml for valid FetchXML structure.")
```

#### Parameter Descriptions
- **No changes needed**.

---

### Tool 08: search_records

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/SearchRecordsTool.cs`

**Category**: Data Query — Relevance Search. Contains substantial inline docs.

#### Optimized Description

```csharp
Description(
    "Search Dataverse records using Relevance Search (Dataverse Search API).\n\n" +
    "WHEN TO USE:\n" +
    "- Full-text search across ALL searchable tables (no entity_name needed)\n" +
    "- Keyword search — faster and more natural than FetchXML for text search\n\n" +
    "PREREQUISITE: Relevance Search must be enabled in Power Platform admin center.\n\n" +
    "TIPS:\n" +
    "- Use entity_name to scope results to a specific table\n" +
    "- Results include entity name, record ID, and matched fields with highlights")
```

#### What Was Removed
- Detailed search syntax examples → `docs://data_operations_guide`
- API parameter mapping details → resource
- Result format descriptions → resource

#### Error Messages to Update

For "Relevance Search not enabled" error:
```csharp
ErrorResult(
    "Error: Relevance Search is not enabled for this environment.\n" +
    "Enable it in Power Platform admin center > Settings > Features > Dataverse Search.\n" +
    "Use execute_fetchxml as an alternative for structured queries.")
```

#### Parameter Descriptions
- **No changes needed**.

---

### Tool 09: execute_webapi

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/ExecuteWebApiTool.cs`

**Category**: Data/API — Raw Web API. Contains allowlist docs inline.

#### Optimized Description

```csharp
Description(
    "Execute a raw Dataverse Web API request. Restricted to safe operations.\n\n" +
    "ALLOWED METHODS: GET, POST (bound actions/functions only), PATCH, DELETE.\n" +
    "BLOCKED: POST to entity sets (use manage_record), batch requests, $bulk.\n\n" +
    "WHEN TO USE:\n" +
    "- Call bound/unbound functions or actions not covered by other tools\n" +
    "- Advanced queries with $expand, $apply, or aggregation\n" +
    "- Direct HTTP access when no dedicated tool exists\n\n" +
    "TIPS:\n" +
    "- URL should be relative (e.g., '/api/data/v9.2/accounts')\n" +
    "- Use GET for queries, PATCH for updates, POST for actions")
```

#### What Was Removed
- Detailed allowlist explanation → resource or keep in error messages
- HTTP method examples → resource

#### Error Messages to Update

Blocked request errors **already have good Layer 2 messages**. No changes needed.

#### Parameter Descriptions
- **No changes needed**.

---

### Tool 10: publish_customizations

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/PublishCustomizationsTool.cs`

**Category**: Admin — Simple tool. Already compact. Minimal optimization.

#### Optimized Description

Keep mostly as-is. This tool is already concise.

#### Error Messages to Update
- **None**. Simple error messages.

---

### Tool 11: get_debugging

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetDebuggingTool.cs`

**Category**: Debugging — Plugin trace logs + system jobs. Moderate optimization.

#### Optimized Description

```csharp
Description(
    "Retrieve plugin trace logs and system jobs for debugging Dataverse issues.\n\n" +
    "TWO MODES:\n" +
    "- mode='traces': Plugin execution trace logs (errors, duration, depth)\n" +
    "- mode='jobs': Async system job status (workflows, imports, bulk operations)\n\n" +
    "WHEN TO USE:\n" +
    "- Debug plugin failures after save/update operations\n" +
    "- Check async job status (imports, workflow runs)\n" +
    "- Find correlation_id for support escalation")
```

#### What Was Removed
- Detailed filter parameter explanation → keep in param descriptions
- Output format descriptions → implied by the tool response
- "trace_id for detail" pattern explanation → keep in param description

#### Error Messages to Update
- **None significant**.

---

### Tool 12: parse_record_url

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/ParseRecordUrlTool.cs`

**Category**: Utility — Simple URL parser. Already compact. Minimal optimization.

#### Optimized Description

Keep mostly as-is. Already very concise (~170 tokens).

#### Error Messages to Update
- **None**. Simple error messages.

---

### Tool 13: manage_form

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageFormTool.cs`

**Category**: UI/Form — Critical tool. Contains workflow instructions that need trimming.

#### Current Description (lines 43-66)

Contains "WORKFLOW" and "IMPORTANT" sections with detailed build_form_xml instructions.

#### Optimized Description

```csharp
Description(
    "Retrieve and modify form definitions for a Dataverse entity.\n\n" +
    "FIVE ACTIONS:\n" +
    "- action='list': List forms. Optional: form_type, include_formxml\n" +
    "- action='detail': Full FormXML for one form. Requires form_id\n" +
    "- action='update': Update FormXML. Requires form_id + formxml\n" +
    "- action='rename': Change name. Requires form_id + form_name\n" +
    "- action='undo': Restore backup. Requires form_id + formxml (backup path)\n\n" +
    "WORKFLOW: Use build_form_xml first → then manage_form(action='update').\n" +
    "SAFETY: auto-backup → XSD validation → update → publish.\n\n" +
    "TIPS:\n" +
    "- Do NOT manually craft FormXML — always use build_form_xml\n" +
    "- form_type=2 for main forms only\n" +
    "- Set auto_publish=false when batching")
```

#### What Was Removed
- "build_form_xml auto-resolves classid GUIDs, validates field names, and generates correct XML" → move to `docs://instructions_for_formxml`
- "FormXML: tabs > columns > sections > rows > cells > controls" → already in resource
- "form_name: if exactly 1 match, returns detail automatically" → implementation detail
- "Read schema://formxml for XSD. Read docs://instructions_for_formxml for rules" → error-guided instead

#### Error Messages to Update

1. **Line 90** (invalid action):
   ```csharp
   // BEFORE:
   ErrorResult("Error: action is required. Valid values: 'list', 'detail', 'update', 'rename', 'undo'.")
   // AFTER — No change (Layer 2 sufficient)
   ```

2. **Line 107** (unknown action):
   ```csharp
   // BEFORE:
   ErrorResult($"Error: '{action}' is not a valid action. Valid actions: list, detail, update, rename, undo.")
   // AFTER:
   ErrorResult(
       $"Error: '{action}' is not a valid action.\n" +
       $"Valid actions: list, detail, update, rename, undo.\n" +
       $"Read docs://instructions_for_formxml for workflow and FormXML rules.")
   ```

3. **Lines 391-407** (XSD validation failed):
   ```csharp
   // ADD to the existing tip line:
   sb.AppendLine($"Tip: Fix the FormXML errors above and retry. Read schema://formxml for valid structure. Read docs://instructions_for_formxml for manipulation rules.");
   ```

#### Parameter Descriptions
- **No changes needed**.

---

### Tool 14: manage_view

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageViewTool.cs`

**Category**: UI/View — Large tool (73.5 KB). Significant optimization needed.

#### Optimized Description

```csharp
Description(
    "Manage entity views — list, create, update FetchXML + LayoutXML.\n\n" +
    "ACTIONS:\n" +
    "- action='list': List views. Optional: view_type, include_xml\n" +
    "- action='detail': Full FetchXML + LayoutXML. Requires view_id\n" +
    "- action='create': Create view. Requires entity_name + view_name + fetchxml + layoutxml\n" +
    "- action='update': Update view. Requires view_id + fetchxml/layoutxml\n" +
    "- action='rename': Rename. Requires view_id + view_name\n" +
    "- action='undo': Restore from backup. Requires view_id + backup paths\n\n" +
    "SAFETY: auto-backup → FetchXML↔LayoutXML sync check → XSD validation → update → publish.\n\n" +
    "TIPS:\n" +
    "- Every <attribute> in FetchXML MUST have a matching <cell> in LayoutXML\n" +
    "- Use get_tables to verify field names before adding columns")
```

#### What Was Removed
- FetchXML/LayoutXML structure examples → `docs://instructions_for_views`
- Quick Find view documentation → `docs://instructions_for_views`
- Column width recommendations → `docs://instructions_for_views`
- Hidden column (ishidden) documentation → `docs://instructions_for_views`

#### Error Messages to Update

For FetchXML↔LayoutXML sync error:
```csharp
// AFTER:
ErrorResult(
    $"Error: FetchXML and LayoutXML are out of sync.\n" +
    $"FetchXML attributes: [{fetchAttributes}]. LayoutXML cells: [{layoutCells}].\n" +
    $"Missing in LayoutXML: {missingCells}. Every <attribute> must have a matching <cell>.\n" +
    $"Read docs://instructions_for_views for sync rules and examples.")
```

#### Parameter Descriptions
- **No changes needed**.

---

### Tool 15: manage_role

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageRoleTool.cs`

**Category**: Security — Role CRUD and privilege management.

#### Optimized Description

```csharp
Description(
    "Manage security roles — list, inspect, create, update privileges.\n\n" +
    "ACTIONS:\n" +
    "- action='list': List security roles\n" +
    "- action='detail': Show all privileges for a role. Requires role_id\n" +
    "- action='create': Create new role. Requires role_name\n" +
    "- action='update': Update privileges. Requires role_id + privileges_json\n\n" +
    "WHEN TO USE:\n" +
    "- Inspect what permissions a role has\n" +
    "- Create or modify security roles programmatically\n" +
    "- Grant/revoke entity and miscellaneous privileges")
```

#### What Was Removed
- Privilege depth explanation (None/User/BU/Parent:ChildBU/Org) → keep in param descriptions or error messages
- Privilege level mapping tables → move to error messages
- Example privileges_json format → error-guided only

#### Error Messages to Update

For invalid privileges_json:
```csharp
ErrorResult(
    "Error: Invalid privileges_json format.\n" +
    "Expected JSON array: [{\"name\":\"prvReadAccount\",\"depth\":\"Organization\"}].\n" +
    "Valid depths: None, User, BusinessUnit, ParentChildBusinessUnit, Organization.")
```

#### Parameter Descriptions
- **No changes needed**.

---

### Tool 16: build_form_xml

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/BuildFormXmlTool.cs`

**Category**: UI/Form — LARGEST tool (100.3 KB). **HIGHEST optimization target (680 → ~300 tokens)**.

#### Current Description (lines 36-75)

Contains **massive inline JSON examples** in the `operations` parameter description — 18 lines of JSON examples for every action/manage_action combination.

#### Optimized Description

```csharp
Description(
    "Build modified FormXML for an existing Dataverse form. READ-ONLY builder — use manage_form to apply.\n\n" +
    "5 ACTIONS (each requires 'manage_action' sub-field):\n" +
    "- manage_tab:     manage_action = add | remove | move | update\n" +
    "- manage_section: manage_action = add | remove | move | update\n" +
    "- manage_fields:  manage_action = add | remove | update | add_header | remove_header | update_header\n" +
    "- manage_library: manage_action = add | remove\n" +
    "- manage_event:   manage_action = add | remove\n\n" +
    "TIPS:\n" +
    "- Fields: strings (\"createdon\") or objects ({\"field\":\"createdon\",\"label\":\"Date\"})\n" +
    "- Saves FormXML to temp file. Pass path to manage_form(action='update')")
```

#### Optimized `operations` Parameter Description

```csharp
[Description(
    "JSON array of operations. Each requires 'action' + 'manage_action'.\n" +
    "Example: [{\"action\":\"manage_tab\",\"manage_action\":\"add\",\"label\":\"Audit\",\"sections\":[{\"label\":\"Dates\",\"fields\":[\"createdon\"]}]}]"
)]
```

#### What Was Removed (MOVED TO `docs://instructions_for_formxml`)
- **16 lines of JSON examples** for manage_tab (add/move/update/remove), manage_section, manage_fields, manage_library, manage_event
- "Auto-resolves classid GUIDs, validates field names against metadata" → keep in resource
- "SECTION COLUMNS: 1 (default), 2, 3. TAB COLUMNS: 1 (100%), 2 (50%/50%), 3 (33%/34%/33%)" → move to resource
- "visible, show_label, hide_on_phone, disabled" property list → resource

#### Error Messages to Update

1. **Line 258** (unknown action):
   ```csharp
   // BEFORE:
   ErrorResult($"Error: Unknown action '{action}'. Valid actions: manage_tab, manage_section, manage_fields, manage_library, manage_event. Each requires a 'manage_action' sub-field.")
   // AFTER:
   ErrorResult(
       $"Error: Unknown action '{action}'.\n" +
       $"Valid actions: manage_tab, manage_section, manage_fields, manage_library, manage_event.\n" +
       $"Each action requires a 'manage_action' sub-field.\n" +
       $"Read docs://instructions_for_formxml for JSON format examples.")
   ```

2. **Lines 211-213** (unknown manage_action for manage_tab):
   ```csharp
   // BEFORE:
   throw new InvalidOperationException(
       $"Unknown manage_action '{manageAction}' for manage_tab. Valid: add, remove, move, update")
   // AFTER:
   throw new InvalidOperationException(
       $"Unknown manage_action '{manageAction}' for manage_tab. Valid: add, remove, move, update.\n" +
       $"Read docs://instructions_for_formxml for JSON format examples.")
   ```

3. **Repeat for all `throw new InvalidOperationException(...)` in manage_section, manage_fields, manage_library, manage_event** (lines 222, 235, 244, 253) — add the same resource link.

4. **Line 98** (invalid JSON):
   ```csharp
   // BEFORE:
   ErrorResult($"Error: Invalid operations JSON: {ex.Message}")
   // AFTER:
   ErrorResult(
       $"Error: Invalid operations JSON: {ex.Message}\n" +
       $"Expected: JSON array of objects with 'action' and 'manage_action' fields.\n" +
       $"Read docs://instructions_for_formxml for valid JSON format and examples.")
   ```

#### Parameter Descriptions

**`operations` parameter** — this is the biggest change:

```csharp
// BEFORE (16 lines of examples):
[Description(
    "JSON array of operations. Each requires 'action' + 'manage_action' sub-field.\n" +
    "manage_tab:     [{\"action\":\"manage_tab\",\"manage_action\":\"add\",\"label\":\"Audit\",...}]\n" +
    // ... 14 more lines of examples ...
)]

// AFTER (2 lines):
[Description(
    "JSON array of operations. Each requires 'action' + 'manage_action'.\n" +
    "Example: [{\"action\":\"manage_tab\",\"manage_action\":\"add\",\"label\":\"Audit\",\"sections\":[{\"label\":\"Dates\",\"fields\":[\"createdon\"]}]}]"
)]
```

---

### Tool 17: build_sitemap_xml

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/BuildSiteMapXmlTool.cs`

**Category**: UI/SiteMap — Builder tool. Contains inline JSON format examples.

#### Optimized Description

```csharp
Description(
    "Build modified SiteMap XML for an app module. READ-ONLY builder — use manage_sitemap to apply.\n\n" +
    "OPERATIONS:\n" +
    "- add_area, add_group, add_subarea: Add navigation items\n" +
    "- remove_area, remove_group, remove_subarea: Remove items\n" +
    "- update_area, update_group, update_subarea: Modify labels/properties\n" +
    "- move_area, move_group, move_subarea: Reorder items\n\n" +
    "TIPS:\n" +
    "- Each Area/Group/SubArea needs unique Id (area_, group_, sa_ prefix)\n" +
    "- Saves SiteMap to temp file. Pass path to manage_sitemap(action='update')")
```

#### What Was Removed
- Inline JSON examples for each operation type → `schema://sitemapxml` resource already has these
- SubArea type documentation (Entity, WebResource, Url, Dashboard, Page) → `schema://sitemapxml`

#### Error Messages to Update

For invalid operations JSON:
```csharp
ErrorResult(
    $"Error: Invalid operations JSON: {ex.Message}\n" +
    $"Read schema://sitemapxml for valid operations format and examples.")
```

For unknown operation:
```csharp
ErrorResult(
    $"Error: Unknown operation '{operation}'.\n" +
    $"Valid: add_area, add_group, add_subarea, remove_area, remove_group, remove_subarea, " +
    $"update_area, update_group, update_subarea, move_area, move_group, move_subarea.\n" +
    $"Read schema://sitemapxml for operation JSON format.")
```

#### Parameter Descriptions
- Trim `operations` parameter description similarly to `build_form_xml` — remove inline examples, keep 1 minimal example.

---

### Tool 18: get_audit_history

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetAuditHistoryTool.cs`

**Category**: Auditing — Record change history. Moderate optimization.

#### Optimized Description

```csharp
Description(
    "Retrieve audit history (change log) for a Dataverse record.\n\n" +
    "Shows who changed what, when, and old/new values for each field.\n\n" +
    "WHEN TO USE:\n" +
    "- Investigate who changed a specific record/field\n" +
    "- Track field value changes over time\n\n" +
    "PREREQUISITE: Auditing must be enabled on entity + field level.")
```

#### What Was Removed
- Detailed output format description → implied by response
- Filter parameter explanations → keep in param descriptions

#### Error Messages to Update
- **None significant**.

---

### Tool 19: upsert_table

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertTableTool.cs`

**Category**: Schema — Create/update entities. Large description with immutable properties info.

#### Optimized Description

```csharp
Description(
    "Create or update a Dataverse table. Auto-detects create vs update.\n\n" +
    "CREATE: Requires entity_name + display_name + display_collection_name + solution_name.\n" +
    "UPDATE: Requires entity_name only. Omitted params keep current values.\n\n" +
    "Entity name MUST include publisher prefix (e.g., 'new_project').\n" +
    "Or provide just the name with solution_name — prefix auto-resolved from publisher.\n\n" +
    "TIPS:\n" +
    "- ownership_type, table_type, is_activity, has_notes are CREATE-ONLY (immutable)\n" +
    "- Use get_tables to inspect existing entity metadata before updating")
```

#### What Was Removed
- **CREATE MODE** detailed explanation (6 lines) → `docs://schema_tools_guide`
- **UPDATE MODE** detailed explanation (3 lines) → `docs://schema_tools_guide`
- **IRREVERSIBLE OPTIONS** block (3 lines about Activities, Feedback, etc.) → `docs://schema_tools_guide`
- "Auto-creates primary name attribute on create" → keep in resource
- "For activity entities: set is_activity=true..." detail → keep in param description (already there)

#### Error Messages to Update

1. **Lines 252-255** (invalid ownership_type):
   ```csharp
   // BEFORE:
   ErrorResult(
       $"[Error] Invalid ownership_type: '{ownership_type}'\n" +
       $"Valid values: 'User' (default, supports sharing/assigning) or 'Organization' (no row-level security)\n" +
       $"Tip: Ownership cannot be changed after entity creation.");
   // AFTER — Add Layer 3:
   ErrorResult(
       $"[Error] Invalid ownership_type: '{ownership_type}'.\n" +
       $"Valid values: 'User' (default) or 'Organization'.\n" +
       $"Tip: Ownership cannot be changed after entity creation.\n" +
       $"Read docs://schema_tools_guide for create-only vs updatable properties.");
   ```

2. **Lines 261-263** (invalid table_type) — same pattern, add `Read docs://schema_tools_guide...`

3. **Line 142-144** (no prefix error) — already good, just add resource link at end.

#### Parameter Descriptions
- **No changes needed**. All params already have concise descriptions.

---

### Tool 20: upsert_relationship

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertRelationshipTool.cs`

**Category**: Schema — Create/update/delete relationships. Many cascade parameters.

#### Optimized Description

```csharp
Description(
    "Create, update, or delete Dataverse relationships (1:N, N:N, polymorphic).\n\n" +
    "ACTIONS:\n" +
    "- action='create_1n': Create 1:N. Requires referenced_entity + referencing_entity\n" +
    "- action='create_nn': Create N:N. Requires entity1 + entity2\n" +
    "- action='update': Update cascade/menu. Requires relationship_name\n" +
    "- action='delete': Delete relationship. Requires relationship_name\n" +
    "- action='add_target': Add target to polymorphic lookup\n" +
    "- action='remove_target': Remove target from polymorphic lookup\n\n" +
    "TIPS:\n" +
    "- cascade_preset: 'Parental', 'Referential' (default), 'ReferentialRestrictDelete'\n" +
    "- Use get_tables to inspect existing relationships")
```

#### What Was Removed
- Detailed cascade behavior descriptions → `docs://schema_tools_guide`
- Menu behavior/group options → keep in param descriptions (already there)
- Polymorphic lookup usage detail → `docs://schema_tools_guide`

#### Error Messages to Update

For invalid action:
```csharp
ErrorResult(
    $"Error: Invalid action '{action}'.\n" +
    $"Valid actions: create_1n, create_nn, update, delete, add_target, remove_target.\n" +
    $"Read docs://schema_tools_guide for action-specific required parameters.")
```

For invalid cascade value:
```csharp
ErrorResult(
    $"Error: Invalid cascade value '{value}'.\n" +
    $"Valid: Cascade, Active, UserOwned, NoCascade, RemoveLink, Restrict.\n" +
    $"Read docs://schema_tools_guide for cascade behavior details.")
```

#### Parameter Descriptions
- **No changes needed**.

---

### Tool 21: manage_sitemap

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageSiteMapTool.cs`

**Category**: UI/SiteMap — Apply SiteMap XML to app module.

#### Optimized Description

```csharp
Description(
    "Manage app site map — list, inspect, update navigation structure.\n\n" +
    "ACTIONS:\n" +
    "- action='list': List model-driven apps and their site maps\n" +
    "- action='detail': Show current SiteMap XML for an app. Requires app_id\n" +
    "- action='update': Apply SiteMap XML. Requires app_id + sitemapxml\n" +
    "- action='undo': Restore from backup. Requires app_id + sitemapxml (backup path)\n\n" +
    "WORKFLOW: build_sitemap_xml (builder) → manage_sitemap(action='update').\n" +
    "SAFETY: auto-backup → validate → update → publish.")
```

#### What Was Removed
- Detailed SiteMap structure docs → `schema://sitemapxml`
- SubArea type examples → `schema://sitemapxml`

#### Error Messages to Update

For invalid SiteMap XML:
```csharp
ErrorResult(
    $"Error: Invalid SiteMap XML.\n" +
    $"Message: {ex.Message}\n" +
    $"Read schema://sitemapxml for valid structure and rules.")
```

---

### Tool 22: upsert_column

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertColumnTool.cs`

**Category**: Schema — **SECOND LARGEST tool (91.1 KB)**. High optimization potential.

#### Optimized Description

```csharp
Description(
    "Create or update a column (attribute) on a Dataverse table. Auto-detects create vs update.\n\n" +
    "TYPES: string, memo, integer, bigint, decimal, money, float, boolean, datetime, " +
    "lookup, customer, picklist, multipicklist, image, file.\n\n" +
    "CREATE: entity_name + attribute_name + attribute_type + display_name required.\n" +
    "UPDATE: entity_name + attribute_name + attribute_type required. Only changed params sent.\n\n" +
    "TIPS:\n" +
    "- attribute_name MUST include publisher prefix (e.g., 'new_priority')\n" +
    "- Use get_tables to inspect existing columns before updating")
```

#### What Was Removed
- Type-specific parameter documentation (which params apply to which types) → `docs://schema_tools_guide`
- Immutable property warnings → `docs://schema_tools_guide`
- "float" alias "double" → keep in param description (already there)

#### Error Messages to Update

For invalid attribute_type:
```csharp
ErrorResult(
    $"Error: Invalid attribute_type '{attribute_type}'.\n" +
    $"Valid types: string, memo, integer, bigint, decimal, money, float, boolean, datetime, " +
    $"lookup, customer, picklist, multipicklist, image, file.\n" +
    $"Read docs://schema_tools_guide for type-specific parameters and create/update rules.")
```

For type-specific validation errors (e.g., missing global_optionset_name for picklist):
```csharp
ErrorResult(
    $"Error: picklist type requires 'global_optionset_name' or inline options.\n" +
    $"Read docs://schema_tools_guide for picklist-specific parameters.")
```

#### Parameter Descriptions
- **No changes needed**. Params already have concise 1-line descriptions.

---

### Tool 23: manage_environment_variable

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageEnvironmentVariableTool.cs`

**Category**: Config — Environment variable CRUD.

#### Optimized Description

```csharp
Description(
    "Manage environment variables — list, inspect, create, update, delete.\n\n" +
    "ACTIONS:\n" +
    "- action='list': List all environment variables\n" +
    "- action='detail': Show definition + current value. Requires variable_name\n" +
    "- action='create': Create new. Requires variable_name + display_name + type + default_value\n" +
    "- action='update': Update value. Requires variable_name + value\n" +
    "- action='delete': Delete variable. Requires variable_name\n\n" +
    "TYPES: String, Number, Boolean, JSON, DataSource.\n\n" +
    "TIPS:\n" +
    "- Values are stored in environmentvariablevalue entity (separate from definition)\n" +
    "- Use solution_name to scope to a specific solution")
```

#### What Was Removed
- Detailed type-specific format examples → error-guided
- DataSource connection reference details → error-guided

#### Error Messages to Update
- For invalid type: add valid values list in error
- For format errors: add specific guidance

---

### Tool 24: get_business_rules

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetBusinessRulesTool.cs`

**Category**: Server Logic — Business rules query. Small tool.

#### Optimized Description

```csharp
Description(
    "List business rules for a Dataverse entity.\n\n" +
    "TWO MODES:\n" +
    "- entity_name only: list all business rules for the entity\n" +
    "- rule_id provided: show rule details (conditions, actions, XAML)\n\n" +
    "WHEN TO USE:\n" +
    "- Discover which business rules exist on an entity\n" +
    "- Debug form behavior caused by business rules")
```

#### What Was Removed
- Internal implementation details (workflow category=2) → not relevant to AI caller

#### Error Messages to Update
- **None significant**.

---

### Tool 25: get_workflows

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetWorkflowsTool.cs`

**Category**: Server Logic — Classic workflows.

#### Optimized Description

```csharp
Description(
    "List classic workflows (background and realtime) for a Dataverse entity.\n\n" +
    "TWO MODES:\n" +
    "- entity_name only: list all workflows\n" +
    "- workflow_id provided: show workflow details (triggers, steps, status)\n\n" +
    "WHEN TO USE:\n" +
    "- Discover which workflows trigger on entity events\n" +
    "- Debug unexpected record changes caused by workflows\n" +
    "- Check workflow status (Active/Draft)")
```

#### What Was Removed
- "category=0" detail → not relevant to AI caller
- Detailed scope/trigger explanations → implied by response

#### Error Messages to Update
- **None significant**.

---

### Tool 26: get_custom_apis

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetCustomApisTool.cs`

**Category**: Server Logic — Modern Custom API definitions.

#### Optimized Description

```csharp
Description(
    "List Custom API definitions registered in Dataverse.\n\n" +
    "TWO MODES:\n" +
    "- No api_name: list all Custom APIs\n" +
    "- api_name provided: show API details (parameters, binding, plugin type)\n\n" +
    "WHEN TO USE:\n" +
    "- Discover available Custom APIs and their parameters\n" +
    "- For legacy Custom Actions (workflow-based), use get_messages instead")
```

#### What Was Removed
- Detailed parameter list → implied by response

#### Error Messages to Update
- **None significant**.

---

### Tool 27: get_flows

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetFlowsTool.cs`

**Category**: Server Logic — Power Automate cloud flows.

#### Optimized Description

```csharp
Description(
    "List Power Automate cloud flows and their run history.\n\n" +
    "TWO MODES:\n" +
    "- No flow_id: list all cloud flows (status, trigger type, owner)\n" +
    "- flow_id provided: show flow details + recent run history with status\n\n" +
    "WHEN TO USE:\n" +
    "- Discover which flows are active in the environment\n" +
    "- Debug flow failures by checking run history\n" +
    "- Find flows triggered by specific entity events")
```

#### What Was Removed
- "workflow category=5" detail → implementation detail
- Run history format details → implied by response

#### Error Messages to Update
- **None significant**.

---

### Tool 28: get_business_process_flows

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetBusinessProcessFlowsTool.cs`

**Category**: Server Logic — BPF definitions and stages.

#### Optimized Description

```csharp
Description(
    "List business process flows and their stages.\n\n" +
    "TWO MODES:\n" +
    "- No bpf_id: list all BPFs (entity, status, stage count)\n" +
    "- bpf_id provided: show BPF details (stages, order, required fields)\n\n" +
    "WHEN TO USE:\n" +
    "- Discover which BPFs exist for an entity\n" +
    "- Get stage names and order for BPF manipulation")
```

#### What Was Removed
- "workflow category=4" detail → implementation detail

#### Error Messages to Update
- **None significant**.

---

### Tool 29: get_plugins

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetPluginsTool.cs`

**Category**: Server Logic — Plugin assemblies, types, steps, images.

#### Optimized Description

```csharp
Description(
    "List plugin registrations — assemblies, types, processing steps, and images.\n\n" +
    "THREE MODES:\n" +
    "- No filters: list all plugin assemblies\n" +
    "- assembly_id: show types + steps for an assembly\n" +
    "- step_id: show step details + images\n\n" +
    "WHEN TO USE:\n" +
    "- Discover which plugins are registered on entity messages\n" +
    "- Debug plugin execution order (stage, rank, filtering attributes)\n" +
    "- Find which images (Pre/Post) a step uses")
```

#### What Was Removed
- Stage/mode mapping details → error-guided or in response
- Image type explanations → implied by response

#### Error Messages to Update
- **None significant**.

---

### Tool 30: get_dataverse_commands

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/GetDataverseCommandsTool.cs`

**Category**: UI/Commands — Command bar buttons.

#### Optimized Description

```csharp
Description(
    "List command bar buttons registered in model-driven apps.\n\n" +
    "TWO MODES:\n" +
    "- entity_name only: list all command definitions\n" +
    "- command_id provided: show command details (JavaScript, visibility rules)\n\n" +
    "WHEN TO USE:\n" +
    "- Discover custom command bar buttons on entity forms/grids\n" +
    "- Debug button visibility or click behavior")
```

#### What Was Removed
- Detailed command component explanations → implied by response

#### Error Messages to Update
- **None significant**.

---

### Tool 31: manage_webresource

**File**: `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageWebResourceTool.cs`

**Category**: Web Resource — CRUD for web resources (JS, CSS, HTML, images).

#### Optimized Description

```csharp
Description(
    "Manage web resources — list, read, create, update, delete.\n\n" +
    "ACTIONS:\n" +
    "- action='list': List web resources. Optional: filter, type\n" +
    "- action='read': Read content. Requires name\n" +
    "- action='create': Create new. Requires name + display_name + type + content/file_path\n" +
    "- action='update': Update content. Requires name + content/file_path\n" +
    "- action='delete': Delete. Requires name\n\n" +
    "TYPES: 1=HTML, 2=CSS, 3=JavaScript, 4=XML, 5=PNG, 6=JPG, 7=GIF, 8=XAP, 9=XSL, 10=ICO, 11=SVG, 12=RESX\n\n" +
    "TIPS:\n" +
    "- name must include publisher prefix path (e.g., 'new_/js/account.js')\n" +
    "- content can be raw text or base64-encoded for binary types")
```

#### What Was Removed
- Detailed type mapping descriptions → compressed into TYPES line
- File path handling details → error-guided

#### Error Messages to Update

For invalid type:
```csharp
ErrorResult(
    $"Error: Invalid web resource type '{type}'.\n" +
    $"Valid: 1=HTML, 2=CSS, 3=JavaScript, 4=XML, 5=PNG, 6=JPG, 7=GIF, 8=XAP, 9=XSL, 10=ICO, 11=SVG, 12=RESX.")
```

---

## 6. Implementation Checklist

### Phase 1: Create New Resources (MUST DO FIRST)

- [ ] Create `docs://schema_tools_guide` resource in `InstructionResources.cs`
  - Content: upsert_table/column/relationship type-specific rules, immutable properties, cascade details, format examples
- [ ] Create `docs://data_operations_guide` resource in `InstructionResources.cs`
  - Content: manage_record field type formats, polymorphic lookups, FetchXML relationship joins, search syntax
- [ ] Create `docs://server_logic_guide` resource in `InstructionResources.cs`
  - Content: Filtering patterns for all 6 server-logic tools, entity_name usage, list/detail modes

### Phase 2: Update Tool Descriptions (Description Attribute)

For each tool, replace the `[Description("...")]` string with the optimized version from this document:

- [ ] Tool 01: `whoami` — trim Returns line
- [ ] Tool 02: `get_tables` — remove RELATIONSHIPS IN FETCHXML block
- [ ] Tool 03: `get_messages` — compress SCOPING and TIPS
- [ ] Tool 04: `manage_choice` — remove format examples from tool description (keep in params)
- [ ] Tool 05: `manage_record` — **remove FIELD TYPES block** (biggest save)
- [ ] Tool 06: `get_solution_components` — minor trim
- [ ] Tool 07: `execute_fetchxml` — minor trim
- [ ] Tool 08: `search_records` — remove detailed search syntax
- [ ] Tool 09: `execute_webapi` — remove detailed allowlist
- [ ] Tool 10: `publish_customizations` — no change
- [ ] Tool 11: `get_debugging` — remove output format descriptions
- [ ] Tool 12: `parse_record_url` — no change
- [ ] Tool 13: `manage_form` — remove IMPORTANT block, compress WORKFLOW
- [ ] Tool 14: `manage_view` — remove FetchXML/LayoutXML structure examples
- [ ] Tool 15: `manage_role` — remove privilege depth details
- [ ] Tool 16: `build_form_xml` — **remove 16 lines of JSON examples** (biggest save)
- [ ] Tool 17: `build_sitemap_xml` — remove inline JSON examples
- [ ] Tool 18: `get_audit_history` — remove output format
- [ ] Tool 19: `upsert_table` — **remove CREATE/UPDATE MODE + IRREVERSIBLE OPTIONS blocks**
- [ ] Tool 20: `upsert_relationship` — remove cascade details
- [ ] Tool 21: `manage_sitemap` — remove SiteMap structure docs
- [ ] Tool 22: `upsert_column` — **remove type-specific params** (biggest save by %)
- [ ] Tool 23: `manage_environment_variable` — remove type format examples
- [ ] Tool 24: `get_business_rules` — remove category detail
- [ ] Tool 25: `get_workflows` — remove category/scope details
- [ ] Tool 26: `get_custom_apis` — remove parameter list
- [ ] Tool 27: `get_flows` — remove run history format
- [ ] Tool 28: `get_business_process_flows` — remove category detail
- [ ] Tool 29: `get_plugins` — remove stage/mode mappings
- [ ] Tool 30: `get_dataverse_commands` — remove component details
- [ ] Tool 31: `manage_webresource` — compress type mapping

### Phase 3: Update Error Messages

For each tool, update error messages to include the 3-layer structure:

- [ ] Tool 05: `manage_record` — add `docs://data_operations_guide` to create/update errors
- [ ] Tool 07: `execute_fetchxml` — add `schema://fetchxml` to parse errors
- [ ] Tool 08: `search_records` — add guidance for disabled search error
- [ ] Tool 13: `manage_form` — add `docs://instructions_for_formxml` to unknown action + validation errors
- [ ] Tool 14: `manage_view` — add `docs://instructions_for_views` to sync errors
- [ ] Tool 16: `build_form_xml` — **add resource links to ALL InvalidOperationException** messages
- [ ] Tool 17: `build_sitemap_xml` — add `schema://sitemapxml` to invalid JSON + unknown operation
- [ ] Tool 19: `upsert_table` — add `docs://schema_tools_guide` to validation errors
- [ ] Tool 20: `upsert_relationship` — add `docs://schema_tools_guide` to invalid action + cascade errors
- [ ] Tool 21: `manage_sitemap` — add `schema://sitemapxml` to invalid XML
- [ ] Tool 22: `upsert_column` — add `docs://schema_tools_guide` to invalid type + missing param errors
- [ ] Tool 31: `manage_webresource` — add valid types list to invalid type error

### Phase 4: Verify

- [ ] Build CLI using `/build-cli` workflow
- [ ] Test with `devkit mcp` — verify all 31 tools load correctly
- [ ] Verify all 9 resources (6 existing + 3 new) are accessible
- [ ] Spot-check 3-5 error scenarios to ensure resource links work

### Validation Rules

> [!WARNING]
> **After optimization, verify:**
> 1. No tool has `"Read docs://..."` in its `[Description]` attribute (only in error messages)
> 2. Every error message for format/validation errors has the 3-layer structure
> 3. Every resource URI referenced in error messages actually exists in `InstructionResources.cs` or `SchemaResources.cs`
> 4. No tool's functionality was changed — only strings were modified
> 5. All 31 tools still compile and run correctly
