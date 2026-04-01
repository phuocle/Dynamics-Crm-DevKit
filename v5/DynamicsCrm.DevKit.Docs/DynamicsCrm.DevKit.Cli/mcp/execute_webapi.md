# Proposal: execute_webapi MCP Tool

## Gaps Found During RelationshipHandler Implementation

| Situation | Workaround Used |
|---|---|
| Check what `RelationshipDefinitions` endpoint returns | Spawned agent running PowerShell to get token + curl |
| Check `$metadata` CSDL schema of relationship types | Spawned agent running PowerShell |
| Get `DisplayCollectionName` of an entity | `get_entity_metadata` doesn't return this property |
| PUT update relationship metadata | No existing tool supports this |
| Create new web resource (had to use `create_record` + manual base64) | No dedicated tool |

## Proposed Tool: execute_webapi

### Purpose

Execute any Dataverse Web API request (GET/POST/PUT/PATCH/DELETE). This is an "escape hatch" tool when specialized tools (`execute_fetchxml`, `get_entity_metadata`, `create_record`, `update_record`...) don't cover a specific use case. Examples:
- Query metadata endpoints: `RelationshipDefinitions`, `EntityDefinitions` subpaths
- PUT/PATCH metadata (relationship, entity, attribute metadata)
- Call custom Actions/Functions
- Read `$metadata` CSDL schema

### Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| method | string | Yes | - | HTTP method: GET, POST, PUT, PATCH, DELETE |
| url | string | Yes | - | Relative URL path passed to `ServiceClient.ExecuteWebRequest()`. SDK automatically handles the base URL and API version. E.g., `RelationshipDefinitions/Microsoft.Dynamics.CRM.OneToManyRelationshipMetadata?$filter=ReferencedEntity eq 'account'`, `EntityDefinitions(LogicalName='account')?$select=LogicalName,DisplayCollectionName`, `$metadata` |
| body | string (JSON) | No | - | Request body for POST/PUT/PATCH. Must be valid JSON string. |
| headers | string (JSON) | No | - | Additional custom headers as JSON string. Standard headers (Authorization, OData-Version) are handled automatically by SDK. Only provide extra headers like `"{\"MSCRM.MergeLabels\": \"true\", \"If-Match\": \"*\"}"` |
| include_headers | bool | No | false | true: include response headers in output. Default false to save tokens — only set true when you need to inspect OData-EntityId, Location, or other response headers. |
| max_response_lines | int | No | 200 | Limit response body output lines. If response exceeds this, truncate and append `(truncated, showing first N lines of M total)`. Use smaller values (e.g. 50) for large responses like `$metadata`. |

### Response Format (Compact — NOT Markdown)

All output MUST use the Compact format for token optimization:

```
[WebAPI] {METHOD} {url}
Status: {statusCode} {statusText}

[Response Headers] (only when include_headers=true)
OData-EntityId: {value}
Location: {value}
...

[Response Body]
{JSON body, pretty-printed, truncated if needed}
```

- Single-value responses: Key-Value format (`Key: Value`)
- Error responses: `[Error] {statusCode} {statusText}` header, then error body
- Empty 204 responses: `[WebAPI] {METHOD} {url}\nStatus: 204 No Content`

### Safety Warning

> [!CAUTION]
> This tool can **modify and delete** Dataverse data and metadata.
> PUT/PATCH/DELETE operations are **destructive and irreversible**.
> AI agents MUST confirm with the user before executing write operations,
> especially on metadata endpoints (EntityDefinitions, RelationshipDefinitions, AttributeDefinitions).

### Usage Examples

**1. Query relationship metadata:**
```
method: "GET"
url: "RelationshipDefinitions/Microsoft.Dynamics.CRM.OneToManyRelationshipMetadata?$filter=ReferencedEntity eq 'account'&$top=2"
```

**2. Update relationship with @odata.type:**
```
method: "PUT"
url: "RelationshipDefinitions(guid-here)"
body: "{\"@odata.type\":\"Microsoft.Dynamics.CRM.OneToManyRelationshipMetadata\",\"SchemaName\":\"rel_name\",\"AssociatedMenuConfiguration\":{\"Behavior\":\"UseLabel\",\"Label\":{\"LocalizedLabels\":[{\"LanguageCode\":1033,\"Label\":\"My Label\"}]}}}"
headers: "{\"MSCRM.MergeLabels\": \"true\"}"
```

**3. Get entity DisplayCollectionName:**
```
method: "GET"
url: "EntityDefinitions(LogicalName='account')?$select=LogicalName,DisplayCollectionName,DisplayName"
```

**4. Call a custom action:**
```
method: "POST"
url: "PublishXml"
body: "{\"ParameterXml\":\"<importexportxml><entities><entity>account</entity></entities></importexportxml>\"}"
```

**5. Read $metadata CSDL schema (use small max_response_lines):**
```
method: "GET"
url: "$metadata"
max_response_lines: 50
```

### Example Prompts

> Natural-language prompts that would trigger this tool.

| # | Prompt |
|---|--------|
| 1 | "Get the relationship metadata for the account entity" |
| 2 | "Call the WinOpportunity action for opportunity abc-123" |
| 3 | "Query the $metadata schema to see entity definitions" |
| 4 | "Execute a custom action 'new_ApproveRequest' with parameter RequestId" |
| 5 | "Get the entity display names for account and contact" |
| 6 | "Check the OneToMany relationships on the opportunity entity" |
| 7 | "Execute a PUT request to update relationship metadata" |

### Implementation Notes

- Use `ServiceClient.ExecuteWebRequest()` — the SDK method that handles authentication, token refresh, and connection reuse automatically
  ```csharp
  HttpResponseMessage ExecuteWebRequest(
      HttpMethod method,
      string queryString,       // relative URL after api/data/v9.2/
      string body,
      Dictionary<string, List<string>> customHeaders,
      string contentType
  )
  ```
- **No manual token management** — ServiceClient handles Bearer token and auto-refresh internally
- Relative URL: pass directly to `queryString` parameter — SDK handles the base URL and API version automatically
- Default headers (Authorization, OData-Version, Content-Type) are handled by SDK — only pass additional/custom headers via `customHeaders` parameter
- Parse user-provided `headers` JSON string into `Dictionary<string, List<string>>` for the SDK method
- Default `contentType`: `application/json`
- Timeout: uses ServiceClient's default timeout (configurable via ServiceClient)
- Response body truncation: if > `max_response_lines`, truncate and append `(truncated, showing first N lines of M total)`
- For DELETE methods that return 204 No Content: return status only, no body
- Read `response.StatusCode`, `response.ReasonPhrase`, `response.Headers`, and `response.Content.ReadAsStringAsync()` for output

### Tool Description for AI

```
Execute any Dataverse Web API request. Use this as a fallback when specialized
tools (execute_fetchxml, get_entity_metadata, create_record, update_record)
don't cover your use case. Supports GET/POST/PUT/PATCH/DELETE with custom
headers and body. Pass relative URL only (e.g., 'RelationshipDefinitions',
'EntityDefinitions(LogicalName=\'account\')') — SDK handles base URL
automatically. Common uses: metadata operations, custom actions, relationship
updates, entity definition queries, $metadata schema inspection.

CAUTION: PUT/PATCH/DELETE operations are destructive. Always confirm with
the user before executing write operations on metadata endpoints.
```
