
# Data Operations Guide

Reference for `create_records`, `update_records`, `manage_record`, `execute_fetchxml`, and `search_records`.

## create_records -- Batch creation
- Input is an inline JSON array, a `.json` file, or a `.csv` file. A batch can partially succeed; successful records are not rolled back.
- Supply the primary key as a GUID string to preserve the source ID. Other Uniqueidentifier fields also accept GUID strings.
- Supply `statecode` and `statuscode` as integers or labels from the destination table. For example, `{"accountid":"b2235a9f-2f65-49b2-9f84-548344f98c6a","name":"Contoso","statecode":"Inactive"}` creates an inactive account with its source GUID. The tool uses the state's default status reason when only a state is supplied. If only a non-active status reason is supplied, the tool uses its associated state.
- Records that require a state or status change are updated after creation with the same `max_parallelism` and `bypass_custom_logic`. Check `items[].stateUpdate.status` and `items[].stateUpdate.error` for the outcome. The item's `id` and `created` status describe the Create step. If the follow-up fails, the batch is `partial` and the record ID can be passed to `update_records`.
- Activity party fields use arrays of `{ "id": "<guid>", "type": "<entity>" }`; a single object is wrapped automatically. Do not supply `participationtypemask`.
- The tool stamps records with the batch `importsequencenumber`, calculated as `max(999990, maxInTable+1)` and returned as `importSequenceNumber`. A value explicitly provided for a record wins without duplicate checking. Use the returned value to find the batch.
- `bypass_custom_logic=true` bypasses custom sync and async plugins/workflows (`CustomSync,CustomAsync`), requires System Administrator, and is false by default.

## update_records -- Batch update

- Updates up to 5000 existing records per call through ExecuteMultiple. It accepts the same input formats and concurrency and bypass settings as `create_records`.
- Include the table's primary key (such as `accountid`) as a GUID string and the fields to change. A repeated primary key is reported as a per-item error after its first valid occurrence.
- Supply an explicit `statecode` to change state. When changing only `statuscode`, use a reason valid for the record's current state. Dataverse applies the target table's transition rules.

## manage_record -- Field Type Formats

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
- Use get_tables with entity_name to check relationships before deleting parent records

---

## execute_fetchxml -- Curated Reference

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
- Use get_tables to discover entity/attribute names if unsure
- DO NOT use top/count/page/paging-cookie in <fetch> -- use the max_records parameter instead (the tool rejects these fetch attributes)
- For advanced syntax, read schema://fetchxml

---

## search_records -- Search Syntax

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
- For larger datasets or precise filtering, use execute_fetchxml
- Only searches fields indexed by Relevance Search (use action='status' to check)

### OData Filter Syntax
Use the `filter` parameter to pass an OData filter to the search request:
- statecode eq 0 -- active records only
- createdon gt 2024-01-01 -- created after date
- Operators: eq, ne, gt, ge, lt, le, and, or, not
