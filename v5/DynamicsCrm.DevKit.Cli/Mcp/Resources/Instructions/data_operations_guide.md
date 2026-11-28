> **Consolidated MCP Routing:** Single-record CRUD/associations/solutions → manage_data(resource='record', action=..., entity_name=..., record_id=..., solution_name=..., payload={fields_json, columns, related_entity_name, related_record_id, relationship_name, component_type}). Bulk upsert → manage_data(resource='bulk', entity_name=..., payload={records_json, max_parallelism, bypass_custom_logic, key_fields}). Files/images → manage_data(resource='file', ...). Deleted records → manage_data(resource='deleted', ...). Demo data → manage_data(resource='demo', ...). Read-only queries → query_data(mode='fetchxml'|'sql'|'search'|'search_status', ...).


# Data Operations Guide

Reference for `manage_data(resource='bulk')`, `manage_data(resource='record')`, `query_data(mode='fetchxml')`, and `query_data(mode='search')`.

## manage_data(resource='bulk') -- Batch create and upsert
- Input is an inline JSON array, a `.json` file, or a `.csv` file (max 5000 records). A batch can partially succeed; successful records are not rolled back.
- Per-record execution mode:
  - Without primary key (`<entity>id`) and without `key_fields`: runs `CreateRequest` (Dataverse generates the GUID and stamps the shared `importSequenceNumber`).
  - With primary key (`<entity>id` as a GUID string): runs `UpsertRequest` with `Entity(logicalName, id)` to create with that exact GUID or update if the record already exists. Duplicate primary keys in one batch are rejected per item.
  - With `key_fields` (comma-separated field names or JSON array of strings): runs `UpsertRequest` using `KeyAttributeCollection`. Each record must include all specified alternate key fields.
- Supply `statecode` and `statuscode` as integers or labels from the destination table (in JSON or CSV). For example, `{"accountid":"b2235a9f-2f65-49b2-9f84-548344f98c6a","name":"Contoso","statecode":"Inactive"}` upserts the account with its GUID and applies the Inactive state in step 2. The tool uses the state's default status reason when only a state is supplied; if only an inactive status reason is supplied, the tool uses its associated state.
- Records that require a non-active state or status change are updated in a follow-up parallel `ExecuteMultiple` `UpdateRequest` batch using the same `max_parallelism` and `bypass_custom_logic`. Check `items[].stateUpdate.status`, `items[].stateUpdate.error`, and top-level `stateUpdated` for the outcome. If step 2 fails, the step 1 record stays committed and the batch reports `partial`.
- Activity party fields use arrays of `{ "id": "<guid>", "type": "<entity>" }`; a single object is wrapped automatically. Do not supply `participationtypemask`.
- Pure-create records are stamped with the batch `importsequencenumber`, calculated as `max(999990, maxInTable+1)` and returned as `importSequenceNumber`. A value explicitly provided for a record wins without duplicate checking. Use the returned value to find the batch.
- `bypass_custom_logic=true` bypasses custom sync and async plugins/workflows (`CustomSync,CustomAsync`), requires System Administrator, and is false by default.
- Structured result includes `created`, `updated` (from `UpsertResponse.RecordCreated`), `succeeded`, `failed`, `stateUpdated`, `durationSeconds`, and per-row `items`.

## manage_data(resource='record') -- Field Type Formats

With `action='create'`, set `solution_name` to the display or unique name of an unmanaged solution to include a supported component record. Examples include `connectionreference`, `workflow` (cloud flow), and `role`. Supply the record fields in `fields_json` as usual.

With `action='add_to_solution'`, pass `entity_name` (`connectionreference`, `workflow`, or `role`), the existing `record_id`, and the unmanaged `solution_name`. Dry run previews the component and destination. The action adds the specified record with automatic dependency inclusion disabled.

With `action='remove_from_solution'`, pass the same three arguments to remove the record's membership in that unmanaged solution. The record remains in Dataverse. Dry run previews the component and solution.

With `action='list_solutions'`, pass `entity_name` and `record_id` to see the record's managed and unmanaged solution memberships. This read-only action returns the `solutions` array in normal and dry-run mode.

With `action='add_solution_component'`, pass the component's GUID or metadata ID in `record_id`, its name or integer `typeId` in `component_type`, and a custom unmanaged `solution_name`. Omit `entity_name`. Use `workflow` or `29` for a cloud flow, `role` or `20` for a security role, and `connectionreference` or the current environment's dynamic type ID for a connection reference. The action validates the component and solution, excludes automatic inclusion of dependencies and subcomponents, and supports dry-run.

### fields_json Format by Type

| Field Type | JSON Value Format | Example |
|-----------|------------------|---------|
| String/Memo | "value" | {"name": "Contoso Ltd"} |
| Integer | 42 | {"numberofemployees": 250} |
| Decimal/Money | 99.50 | {"revenue": 1000000.00} |
| Boolean | true or false | {"isprimary": true} |
| DateTime | "YYYY-MM-DD" or "YYYY-MM-DDTHH:mm:ssZ" | {"createdon": "2025-01-15"} |
| Lookup | GUID string | {"primarycontactid": "a1b2c3d4-..."} |
| Picklist/Status | integer value | {"statuscode": 1} |
| MultiSelect | [int, int, ...] | {"preferences": [100000001, 100000002]} |
| Clear a field | null | {"fax": null} |

### Polymorphic Lookup Syntax
For fields that can point to multiple entity types (e.g., customerid -> Account or Contact):

Key format: "fieldname@targetentity". Example: "customerid@account": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"

The @ separator tells the system which entity type the GUID belongs to.

Common polymorphic lookups:
- customerid -> account, contact
- regardingobjectid -> multiple entities (context-dependent)
- ownerid -> systemuser, team

### Delete Considerations
- Some records fail to delete due to dependencies (child records, required lookups)
- Deleting a parent record may cascade-delete child records depending on relationship cascade config
- Use inspect_metadata(resource='tables') with entity_name to check relationships before deleting parent records

---

## query_data(mode='fetchxml') -- Curated Reference

### Basic Structure
```xml
<fetch>
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

For distinct results or aggregates, add the appropriate `distinct='true'` or `aggregate='true'` attribute to `<fetch>`.

### Common Operators
| Operator | Meaning | Example |
|----------|---------|---------|
| eq | Equals | value='0' |
| ne | Not equals | value='1' |
| gt, ge, lt, le | Greater/less than | value='2025-01-01' |
| like | Wildcard match | value='%contoso%' |
| null | Is null | (no value attr) |
| not-null | Is not null | (no value attr) |
| in | In list | <value>1</value><value>2</value> |
| between | Range | <value>1</value><value>100</value> |
| today | Today's date | (no value attr) |
| last-x-days | Last N days | value='30' |

### Relationship Joins (link-entity)

N:1 (Many-to-One): child -> parent
<link-entity name='contact' from='contactid' to='primarycontactid' link-type='inner' alias='c'>
  <attribute name='fullname' />
</link-entity>

1:N (One-to-Many): parent -> children
<link-entity name='contact' from='parentcustomerid' to='accountid' link-type='inner' alias='c'>
  <attribute name='fullname' />
</link-entity>

N:N (Many-to-Many): through intersect entity
<link-entity name='accountleads' from='accountid' to='accountid' link-type='inner'>
  <link-entity name='lead' from='leadid' to='leadid' link-type='inner' alias='l'>
    <attribute name='fullname' />
  </link-entity>
</link-entity>

### Aggregation
<fetch aggregate='true'>
  <entity name='opportunity'>
    <attribute name='estimatedvalue' alias='total_value' aggregate='sum' />
    <attribute name='statuscode' alias='status' groupby='true' />
  </entity>
</fetch>

Functions: count, sum, avg, min, max. Use groupby='true' for grouping.

### Rules
- Use lowercase logical names for everything
- Use inspect_metadata(resource='tables') to discover entity/attribute names if unsure
- DO NOT use top/count/page/paging-cookie in <fetch> -- use the max_records parameter instead (the tool rejects these fetch attributes)
- For advanced syntax, read schema://fetchxml

---

## query_data(mode='search') -- Search Syntax

### Search Operators
| Operator | Meaning | Example |
|----------|---------|---------|
| (default) | OR between words | john smith -> john OR smith |
| + | AND | hotel+wifi -> both required |
| `\|` | OR (explicit) | `wifi\|luxury` |
| - | NOT | -pool -> exclude pool |
| * | Trailing wildcard | Alp* -> Alpine, Alpha, etc. |
| (quotes) | Exact phrase | use double quotes around phrase |
| () | Grouping | hotel+(wifi|luxury) |

### Prerequisite
Relevance Search must be enabled in Power Platform admin center:
1. Go to https://admin.powerplatform.microsoft.com
2. Select environment -> Settings -> Product -> Features
3. Under 'Dataverse Search', select 'On'
4. Save and wait for indexing to complete

### Limitations
- Max 100 results per query
- For larger datasets or precise filtering, use query_data(mode='fetchxml')
- Only searches fields indexed by Relevance Search (use action='status' to check)

### OData Filter Syntax
Use the `filter` parameter to pass an OData filter to the search request:
- statecode eq 0 -- active records only
- createdon gt 2024-01-01 -- created after date
- Operators: eq, ne, gt, ge, lt, le, and, or, not
