# codeurali/mcp-dataverse — Source Code Architecture Analysis

> **Date**: 2026-04-01
> **Source**: Minified bundle analysis from `index.js`
> **Version**: v0.5 (73 tools)

---

## 1. Architecture Overview

### Tech Stack

| Component | Technology |
|-----------|-----------|
| Runtime | Node.js 20+ |
| Language | TypeScript (compiled to ESM) |
| MCP SDK | `@modelcontextprotocol/sdk` (official) |
| Transport | stdio (default) + HTTP/SSE |
| Validation | Zod schemas |
| Build | Bundled as single `index.js` (~2600 lines minified) |

### Entry Flow

```
index.js (main)
  → parse CLI args (--transport, --port)
  → create DataverseClient (HTTP wrapper)
  → create MCP Server (Wn = Server class)
  → register tool handlers by category
  → start transport (stdio or HTTP)
```

### Code Organization (from bundle analysis)

| Module | Export Function | Tools |
|--------|----------------|-------|
| `auth-tools` | `Ne()` | `dataverse_whoami` |
| `metadata-tools` | `De()` | `list_tables`, `get_table_metadata`, `get_relationships`, `list_global_option_sets`, `get_option_set`, `get_entity_key`, `get_attribute_option_set`, `resolve_entity_name`, `update_entity` |
| `query-tools` | `Le()` | `query`, `execute_fetchxml`, `retrieve_multiple_with_paging` |
| `crud-tools` | `qe()` | `get`, `create`, `update`, `delete`, `upsert`, `assign` |
| `relation-tools` | `$e()` | `associate`, `associate_bulk`, `disassociate`, `query_associations` |
| `action-tools` | `We()` | `execute_action`, `execute_function`, `execute_bound_action`, `execute_bound_function`, `list_dependencies`, `retrieve_dependencies_for_delete` |
| `batch-tools` | `Fe()` | `batch_execute` |
| `change-tracking` | `Ge()` | `change_detection` |
| `solution-tools` | `Ve()` | `publish` |
| `impersonate-tool` | `Ke()` | `impersonate` |
| `customization-tools` | `Qe()` | `list_custom_actions`, `list_plugin_steps`, `set_workflow_state`, `list_connection_references` |
| `environment-tools` | `Je()` | `get/set/create_environment_variable`, `environment_capabilities` |
| `trace-tools` | `et()` | `get_plugin_trace_logs`, `get_workflow_trace_logs` |
| `search-tools` | `at()` | `search` |
| `audit-tools` | `rt()` | `get_audit_log` |
| `duplicate-tools` | `st()` | `detect_duplicates` |
| `note-tools` | (not in snippet) | `get_annotations`, `create_annotation` |
| `user-tools` | (not in snippet) | `list_users`, `get_user_roles` |
| `rbac-tools` | `yt()` | `list_roles`, `get/add/replace_role_privileges`, `assign/remove_role_to_user`, `assign_role_to_team` |
| `view-tools` | `ht()` | `list_views` |
| `file-tools` | `Nt()` | `upload_file_column`, `download_file_column` |
| `org-tools` | `_t()` | `list_business_units`, `list_teams` |
| `workflow-tools` | `Ut()` | `list_workflows`, `get_workflow`, `list_guides`, `get_guide` |
| `router-tools` | `xt()` | `suggest_tools`, `list_tool_tags` |
| `attribute-tools` | `Wt()` | `create_attribute`, `update_attribute`, `delete_attribute`, `create_lookup_attribute` |
| `sitemap-tools` | (in snippet) | `create_sitemap` |

---

## 2. Response Structure

All tools return via helper functions:

```typescript
// Success
function u(summary, data, suggestions, warnings?) → CallToolResult
// List
function H(label, items, suggestions) → CallToolResult
// Error
function te(summary, errorCategory, suggestions) → CallToolResult
// Prerequisite block
function X(prerequisite) → CallToolResult
```

**Standard response envelope**:
```json
{
  "summary": "5 records returned from accounts",
  "data": { ... },
  "suggestions": ["Use dataverse_get for full record details"],
  "warnings": ["[WARNING] NO_SELECT: No $select specified"]
}
```

**Error categories**: `ENV_LIMITATION`, `PERMISSIONS`, `SCHEMA_MISMATCH`, `UNKNOWN`

---

## 3. Key Implementation Patterns

### 3.1 Formatted Values

codeurali uses OData `@OData.Community.Display.V1.FormattedValue` annotations to return human-readable labels alongside raw values:

```typescript
{ value: 1, label: "Active" }  // instead of just: 1
```

DevKit returns formatted values in get_entity_metadata but not in query results.

### 3.2 Progress Reporting

Uses MCP progress notifications during long operations:

```typescript
class J {  // Progress reporter
  async report(current, total) {
    await this.server.notification({
      method: "notifications/progress",
      params: { progressToken, progress: current, total }
    })
  }
}
```

DevKit does not implement MCP progress notifications.

### 3.3 Query Guardrails

Automatically generates warnings for common query issues:

```typescript
function ce(params) {
  let warnings = [];
  if (params.top > 5000) warnings.push("LARGE_RESULT_SET");
  if (!params.select?.length) warnings.push("NO_SELECT");
  if (!params.filter) warnings.push("NO_FILTER");
  return warnings;
}
```

DevKit does not have query guardrails.

### 3.4 Prerequisite Checks

When a feature is disabled, returns a structured "how to fix" response:

```typescript
return X({
  type: "feature_disabled",
  feature: "Dataverse Search (Relevance Search)",
  cannotProceedBecause: "Relevance Search is not enabled...",
  adminPortal: "Power Platform Admin Center",
  steps: ["Open admin center", "Select environment...", "Toggle On"]
});
```

DevKit returns plain error text.

### 3.5 Impersonation Safety

Blocks impersonation of System Administrators:

```typescript
// Check if target user has System Administrator role
const roles = await query(`systemusers(${callerId})/systemuserroles_association`, {
  filter: "name eq 'System Administrator'"
});
if (roles.value?.length > 0)
  throw new Error("Security policy: impersonation of System Administrator prohibited");
```

### 3.6 Tool Tagging System

Each tool is tagged for discovery/routing:

```typescript
const ee = {
  dataverse_query: ["query", "read", "odata"],
  dataverse_create: ["write", "crud", "create"],
  dataverse_delete: ["write", "crud", "delete", "destructive"],
  // ...
};
```

Used by `suggest_tools` to match natural language intents to tools.

---

## 4. Attribute Management (v0.4+)

### create_attribute

- Supports: String, Memo, Integer, Decimal, Money, DateTime, Boolean, Picklist, MultiSelectPicklist, AutoNumber, Image
- Uses `@odata.type` annotations for typed metadata
- Builder pattern: `Ht()` generates full OData metadata payload
- Includes `confirm: true` safety gate

### update_attribute

- Updates: displayName, description, requiredLevel, maxLength, isSearchable
- Uses `MSCRM.MergeLabels: true` header (fixed in v0.4.0)
- Cannot change: type, logicalName, DateTimeFormat

### delete_attribute

- Checks for managed solution restrictions (0x80048405)
- Checks for dependencies before deletion
- Returns structured error with suggestions

### create_lookup_attribute

- Creates via `POST RelationshipDefinitions` (not attribute API)
- Handles timeout gracefully (verifies column exists even if request timed out)
- Supports Referential and Parental cascade configs

---

## 5. Features DevKit Should Study/Adopt

| Feature | Implementation | Benefit |
|---------|---------------|---------|
| **Suggestions array** | Every response includes next-step hints | AI knows what to do next |
| **Error categories** | Typed errors (`PERMISSIONS`, `SCHEMA_MISMATCH`) | AI can take different recovery actions |
| **Query guardrails** | Auto-warn on missing select/filter | Prevents inefficient queries |
| **Prerequisite blocks** | "Feature disabled" → admin steps to fix | User knows exactly how to resolve |
| **Progress notifications** | MCP progress protocol during long ops | Client shows progress bar |
| **Tool tagging** | Tags for discovery/routing | AI finds right tool faster |
| **Formatted values** | OData annotations → `{value, label}` | AI understands picklist values |

---

## 6. Weaknesses in codeurali (DevKit Advantages)

| Weakness | Impact |
|----------|--------|
| **No form management** | Cannot inspect, edit, or validate FormXML |
| **No view editing** | Can only list views, not modify FetchXML/LayoutXML |
| **No sitemap editing** | Can create but not update or undo |
| **No XSD validation** | XML written without schema validation |
| **No backup/undo** | No safety net for customization changes |
| **No URL parsing** | Cannot extract entity+GUID from D365 URLs |
| **No solution component inspection** | Cannot see what's inside a solution |
| **No entity creation** | Planned for v0.7 (DevKit has it now) |
| **No SDK message discovery** | Cannot find available messages per entity |
| **JS-only** | Requires Node.js 20+; DevKit's .NET runs anywhere with .NET SDK |
| **Minified/obfuscated** | Single bundle, hard to debug/extend |
