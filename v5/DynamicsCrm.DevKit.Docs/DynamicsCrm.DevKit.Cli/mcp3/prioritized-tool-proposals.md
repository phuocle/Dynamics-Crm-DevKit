# DevKit MCP — Prioritized Tool Proposals (Inspired by codeurali Analysis)

> **Date**: 2026-04-01
> **Source**: Competitive analysis of codeurali/mcp-dataverse (73 tools)
> **Current DevKit MCP**: 28 tools, 6 resources

---

## Phase 1: Core Operations (Tools 29–33)

> Impact: HIGH — These are the most commonly needed tools that DevKit currently lacks.

### Tool #29: `execute_action` (Unbound Action)

- **Purpose**: Execute global Dataverse actions (WinOpportunity, SendEmail, custom process actions)
- **Priority**: 1
- **Impact**: HIGH
- **Effort**: MEDIUM
- **API**: `POST /{actionName}`
- **Parameters**: `action_name` (string), `parameters` (JSON object)
- **Why**: Currently must use `execute_webapi` which requires knowing exact URL and payload format

### Tool #30: `execute_bound_action` (Bound Action)

- **Purpose**: Execute actions bound to a specific record (QualifyLead, custom bound actions)
- **Priority**: 2
- **Impact**: HIGH
- **Effort**: MEDIUM
- **API**: `POST /{entitySetName}({id})/Microsoft.Dynamics.CRM.{actionName}`
- **Parameters**: `entity_name`, `record_id`, `action_name`, `parameters`
- **Why**: Essential for business process automation (qualify leads, win opportunities, etc.)

### Tool #31: `associate_records`

- **Purpose**: Create N:N relationship associations between records
- **Priority**: 3
- **Impact**: MEDIUM-HIGH
- **Effort**: LOW
- **API**: `POST /{entitySetName}({id})/{navigationProperty}/$ref`
- **Parameters**: `entity_name`, `record_id`, `relationship_name`, `related_entity_name`, `related_record_id`
- **Why**: N:N relationships (roles↔privileges, contacts↔campaigns) cannot be managed otherwise

### Tool #32: `disassociate_records`

- **Purpose**: Remove N:N relationship associations
- **Priority**: 4
- **Impact**: MEDIUM
- **Effort**: LOW
- **API**: `DELETE /{entitySetName}({id})/{navigationProperty}({relatedId})/$ref`
- **Parameters**: Same as associate + `confirm: true`
- **Why**: Natural complement to associate_records

### Tool #33: `batch_execute`

- **Purpose**: Execute multiple operations in a single HTTP $batch request
- **Priority**: 5
- **Impact**: HIGH
- **Effort**: HIGH
- **API**: `POST /$batch` with multipart/mixed MIME
- **Parameters**: `requests` (array of {method, url, body}), `use_changeset` (bool)
- **Why**: Performance: 1000 operations in one HTTP call, optional atomic changeset
- **Note**: Complex implementation — MIME multipart formatting, changeset handling

---

## Phase 2: Data Management (Tools 34–38)

> Impact: MEDIUM — Important for completeness, frequently requested.

### Tool #34: `get_annotations`

- **Purpose**: Read notes/annotations attached to a record
- **Priority**: 6
- **Impact**: MEDIUM
- **Effort**: LOW
- **API**: FetchXML on `annotation` entity filtered by `objectid`
- **Parameters**: `entity_name`, `record_id`, `include_document_body` (bool), `max_records`
- **Why**: Notes are a very common Dataverse pattern for attachments and comments

### Tool #35: `create_annotation`

- **Purpose**: Create a note (annotation) on a record, optionally with file attachment
- **Priority**: 7
- **Impact**: MEDIUM
- **Effort**: LOW
- **API**: `POST /annotations`
- **Parameters**: `entity_name`, `record_id`, `subject`, `note_text`, `file_name`, `file_content` (base64), `mime_type`

### Tool #36: `assign_record`

- **Purpose**: Change record ownership to a different user or team
- **Priority**: 8
- **Impact**: MEDIUM
- **Effort**: LOW
- **API**: `PATCH /{entitySetName}({id})` with `ownerid@odata.bind`
- **Parameters**: `entity_name`, `record_id`, `owner_type` (systemuser|team), `owner_id`
- **Why**: Common admin operation, currently requires knowing OData bind syntax via `upsert_record`

### Tool #37: `delete_attribute`

- **Purpose**: Delete a column and all its data from a table
- **Priority**: 9
- **Impact**: MEDIUM
- **Effort**: LOW
- **API**: `DELETE EntityDefinitions(LogicalName='{entity}')/Attributes(LogicalName='{attr}')`
- **Parameters**: `entity_name`, `attribute_name`, `auto_publish`
- **Why**: Completes the schema lifecycle (create → update → delete)

### Tool #38: `create_lookup_attribute`

- **Purpose**: Create a Lookup column via OneToMany relationship definition
- **Priority**: 10
- **Impact**: MEDIUM
- **Effort**: MEDIUM
- **API**: `POST RelationshipDefinitions` with `Microsoft.Dynamics.CRM.OneToManyRelationshipMetadata`
- **Parameters**: `entity_name`, `attribute_name`, `display_name`, `target_entity`, `cascade_config`, `auto_publish`
- **Why**: Lookups can't be created via `create_attribute` — requires relationship API

---

## Phase 3: Advanced Operations (Tools 39–43)

> Impact: MEDIUM — Nice to have, broadens functionality.

### Tool #39: `impersonate`

- **Purpose**: Execute a tool call on behalf of another user (MSCRMCallerID header)
- **Priority**: 11
- **Impact**: MEDIUM
- **Effort**: MEDIUM
- **Parameters**: `user_id` (GUID), `tool_name`, `tool_args`
- **Why**: Compliance/audit: create records attributed to specific users

### Tool #40: `change_detection`

- **Purpose**: Delta sync using Dataverse change tracking tokens
- **Priority**: 12
- **Impact**: MEDIUM
- **Effort**: MEDIUM
- **API**: OData with `odata.track-changes` prefer header
- **Parameters**: `entity_name`, `delta_token` (null for initial), `select`
- **Why**: Incremental sync for integration scenarios

### Tool #41: `upload_file_column`

- **Purpose**: Upload file content to a file/image type column
- **Priority**: 13
- **Impact**: MEDIUM
- **Effort**: MEDIUM
- **API**: `PATCH /{entitySetName}({id})/{columnName}` with octet-stream
- **Parameters**: `entity_name`, `record_id`, `column_name`, `file_content` (base64), `file_name`

### Tool #42: `download_file_column`

- **Purpose**: Download file content from a file/image type column
- **Priority**: 14
- **Impact**: MEDIUM
- **Effort**: MEDIUM
- **API**: `GET /{entitySetName}({id})/{columnName}/$value`
- **Parameters**: `entity_name`, `record_id`, `column_name`
- **Returns**: base64-encoded content + filename + size

### Tool #43: `execute_fetchxml_all_pages`

- **Purpose**: Auto-paginate FetchXML across all pages (up to 50K records)
- **Priority**: 15
- **Impact**: MEDIUM
- **Effort**: MEDIUM
- **Enhancement**: Add `get_all` parameter to existing `execute_fetchxml` tool
- **Why**: Current `execute_fetchxml` returns first page only (5000 records max)

---

## Phase 4: Admin & RBAC (Tools 44–48)

> Impact: LOW — Admin tools, useful but not frequently needed.

### Tool #44: `list_users`

- **Purpose**: List system users with roles and status
- **Priority**: 16
- **Effort**: LOW

### Tool #45: `list_teams`

- **Purpose**: List Dataverse teams
- **Priority**: 17
- **Effort**: LOW

### Tool #46: `list_business_units`

- **Purpose**: List business unit hierarchy
- **Priority**: 18
- **Effort**: LOW

### Tool #47: `assign_role_to_user`

- **Purpose**: Assign/remove security role to/from user
- **Priority**: 19
- **Effort**: LOW

### Tool #48: `list_workflows`

- **Purpose**: List workflows, flows, business rules
- **Priority**: 20
- **Effort**: LOW

---

## Summary: Tool Count Projection

| Phase | Tools | Running Total |
|-------|-------|---------------|
| Current | 28 | 28 |
| Phase 1 (Core) | 5 | 33 |
| Phase 2 (Data) | 5 | 38 |
| Phase 3 (Advanced) | 5 | 43 |
| Phase 4 (Admin) | 5 | 48 |

With 48 tools + 6 resources + form/view/sitemap lifecycle, DevKit would match codeurali's breadth while maintaining unique advantages in UI customization safety.
