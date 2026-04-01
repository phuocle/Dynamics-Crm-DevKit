# Competitive Analysis: codeurali/mcp-dataverse vs DevKit CLI MCP

> **Date**: 2026-04-01
> **Competitor**: [codeurali/mcp-dataverse](https://github.com/codeurali/mcp-dataverse) (v0.5)
> **DevKit**: DynamicsCrm.DevKit CLI MCP (28 tools, 6 resources)
> **Author**: Ali Taggaz (MIT License, Node.js/TypeScript)

---

## 1. Overview Comparison

| Dimension | codeurali/mcp-dataverse | DevKit CLI MCP |
|-----------|----------------------|----------------|
| **Total Tools** | 73 | 28 |
| **Resources** | 4 | 6 |
| **Guided Workflows** | 10 | 0 |
| **Language** | TypeScript/Node.js 20+ | C# / .NET 10.0 |
| **Distribution** | npm (`npx mcp-dataverse`) | dotnet tool (`devkit mcp`) |
| **Auth Methods** | Device Code, Client Credentials, Managed Identity | Interactive, DeviceCode, ClientSecret, FromPac, OAuth, AD |
| **Transport** | stdio + HTTP/SSE | stdio only |
| **License** | MIT | Proprietary |
| **Client Support** | VS Code, Claude, Cursor, Windsurf, Gemini, Codex CLI | VS Code, Claude, Cursor, Antigravity |
| **Output Format** | `{summary, data, suggestions, errorCategory}` | Markdown text + structured JSON |

---

## 2. Tool-by-Tool Comparison

### 2.1 Tools DevKit HAS but codeurali DOES NOT

| # | DevKit Tool | Gap in codeurali | Impact |
|---|------------|------------------|--------|
| 1 | `get_forms` | No form inspection | HIGH — forms are critical for UI customization |
| 2 | `update_form` | No form editing | HIGH — auto-backup, XSD validation, undo |
| 3 | `build_form_xml` | No form builder | HIGH — auto-resolves classid, generates FormXML |
| 4 | `get_views` (with FetchXML/LayoutXML) | `list_views` only returns names | MEDIUM — no view content inspection |
| 5 | `update_view` | No view editing | HIGH — auto-backup, sync validation |
| 6 | `update_sitemap` | `create_sitemap` only (no update/undo) | MEDIUM — no edit or rollback |
| 7 | `get_security_roles` (user-centric) | Separate `list_roles` + `get_user_roles` | LOW — different API design |
| 8 | `get_audit_history` (record-centric) | `get_audit_log` (broader) | LOW — different granularity |
| 9 | `parse_record_url` | Not available | MEDIUM — essential for URL-driven workflows |

**Key Advantage**: DevKit's form/view/sitemap lifecycle (read → edit → backup → validate → publish → undo) is a **major differentiator** that codeurali completely lacks.

### 2.2 Tools codeurali HAS but DevKit DOES NOT

| # | codeurali Tool | Category | Impact | Recommendation |
|---|---------------|----------|--------|----------------|
| 1 | `dataverse_create` | CRUD | HIGH | DevKit uses `upsert_record` for both create and update — covers this |
| 2 | `dataverse_update` | CRUD | HIGH | Same as above — covered by `upsert_record` |
| 3 | `dataverse_get` | CRUD | HIGH | DevKit has `get_record` — **covered** |
| 4 | `dataverse_assign` | CRUD | MEDIUM | **MISSING** — assign record ownership to user/team |
| 5 | `dataverse_upsert` (alternate key) | CRUD | MEDIUM | **MISSING** — upsert by alternate key (not GUID) |
| 6 | `dataverse_associate` | Relations | MEDIUM | **MISSING** — N:N relationship management |
| 7 | `dataverse_associate_bulk` | Relations | MEDIUM | **MISSING** — bulk N:N association |
| 8 | `dataverse_disassociate` | Relations | MEDIUM | **MISSING** — remove N:N link |
| 9 | `dataverse_query_associations` | Relations | LOW | **MISSING** — query through navigation property |
| 10 | `dataverse_query` (OData) | Query | HIGH | **MISSING** — OData query (DevKit uses FetchXML only) |
| 11 | `dataverse_retrieve_multiple_with_paging` | Query | MEDIUM | **MISSING** — auto-paging for large datasets |
| 12 | `dataverse_execute_action` | Actions | HIGH | **MISSING** — execute unbound Dataverse actions |
| 13 | `dataverse_execute_function` | Actions | MEDIUM | **MISSING** — execute unbound functions |
| 14 | `dataverse_execute_bound_action` | Actions | HIGH | **MISSING** — execute bound actions (e.g., QualifyLead) |
| 15 | `dataverse_execute_bound_function` | Actions | MEDIUM | **MISSING** — execute bound functions |
| 16 | `dataverse_batch_execute` | Batch | HIGH | **MISSING** — batch up to 1000 ops in one HTTP call |
| 17 | `dataverse_impersonate` | Security | MEDIUM | **MISSING** — execute as another user |
| 18 | `dataverse_change_detection` | Sync | MEDIUM | **MISSING** — delta sync with change tracking tokens |
| 19 | `dataverse_detect_duplicates` | Quality | LOW | **MISSING** — duplicate detection before create |
| 20 | `dataverse_get_annotations` | Notes | MEDIUM | **MISSING** — read notes/annotations on records |
| 21 | `dataverse_create_annotation` | Notes | MEDIUM | **MISSING** — create notes with attachments |
| 22 | `dataverse_upload_file_column` | Files | MEDIUM | **MISSING** — upload to file/image columns |
| 23 | `dataverse_download_file_column` | Files | MEDIUM | **MISSING** — download from file/image columns |
| 24 | `dataverse_list_users` | Admin | LOW | **MISSING** — list system users |
| 25 | `dataverse_get_user_roles` | Admin | LOW | DevKit has `get_security_roles` with user_id param — **partially covered** |
| 26 | `dataverse_list_roles` | Admin | LOW | DevKit has `get_security_roles` — **covered** |
| 27 | `dataverse_assign_role_to_user` | RBAC | MEDIUM | **MISSING** — assign security role to user |
| 28 | `dataverse_remove_role_from_user` | RBAC | MEDIUM | **MISSING** — remove security role from user |
| 29 | `dataverse_get_role_privileges` | RBAC | LOW | DevKit has `get_security_roles` with role_id — **partially covered** |
| 30 | `dataverse_add_role_privileges` | RBAC | LOW | **MISSING** — add privileges to role with depth |
| 31 | `dataverse_replace_role_privileges` | RBAC | LOW | **MISSING** — atomically replace all role privileges |
| 32 | `dataverse_assign_role_to_team` | RBAC | LOW | **MISSING** |
| 33 | `dataverse_list_teams` | Admin | LOW | **MISSING** — list Dataverse teams |
| 34 | `dataverse_list_business_units` | Admin | LOW | **MISSING** |
| 35 | `dataverse_list_custom_actions` | Customization | LOW | DevKit has `get_messages` — **covered** |
| 36 | `dataverse_list_plugin_steps` | Customization | LOW | **MISSING** — list registered plugin steps |
| 37 | `dataverse_set_workflow_state` | Customization | LOW | **MISSING** — activate/deactivate workflows |
| 38 | `dataverse_list_connection_references` | Customization | LOW | **MISSING** |
| 39 | `dataverse_list_workflows` | Workflows | LOW | **MISSING** — list workflows/flows |
| 40 | `dataverse_get_workflow` | Workflows | LOW | **MISSING** — get workflow definition |
| 41 | `dataverse_resolve_entity_name` | Metadata | LOW | DevKit has `get_entities_metadata` — **covered** |
| 42 | `dataverse_get_entity_key` | Metadata | LOW | DevKit's `get_entity_metadata` returns alternate keys — **covered** |
| 43 | `dataverse_get_attribute_option_set` | Metadata | LOW | DevKit's `get_entity_metadata` returns options — **covered** |
| 44 | `dataverse_update_entity` | Metadata | LOW | **MISSING** — update entity flags (HasNotes, ChangeTracking, Audit) |
| 45 | `dataverse_delete_attribute` | Schema | MEDIUM | **MISSING** — delete column from table |
| 46 | `dataverse_create_lookup_attribute` | Schema | MEDIUM | **MISSING** — create lookup via relationship |
| 47 | `dataverse_create_sitemap` | Solutions | MEDIUM | DevKit has `update_sitemap` but no create |
| 48 | `dataverse_environment_capabilities` | Admin | LOW | DevKit has `whoami` — **partially covered** |
| 49 | `dataverse_suggest_tools` | Assistance | LOW | Not needed — AI clients have their own routing |
| 50 | `dataverse_list_tool_tags` | Assistance | LOW | Not needed |
| 51 | `dataverse_list_guides` | Workflows | LOW | Not needed — can be done via MCP resources |
| 52 | `dataverse_get_guide` | Workflows | LOW | Not needed |

### 2.3 Both Have (Equivalent Coverage)

| Capability | codeurali Tool | DevKit Tool |
|-----------|---------------|-------------|
| Who Am I | `dataverse_whoami` | `whoami` |
| List Tables | `dataverse_list_tables` | `get_entities_metadata` |
| Table Metadata | `dataverse_get_table_metadata` | `get_entity_metadata` |
| Relationships | `dataverse_get_relationships` | `get_entity_metadata` (includes relationships) |
| Global Option Sets | `dataverse_list_global_option_sets` + `get_option_set` | `get_global_optionsets` |
| FetchXML Query | `dataverse_execute_fetchxml` | `execute_fetchxml` |
| Relevance Search | `dataverse_search` | `search` |
| Get Record | `dataverse_get` | `get_record` |
| Create/Update Record | `dataverse_create` + `dataverse_update` | `upsert_record` |
| Delete Record | `dataverse_delete` | `delete_record` |
| Web API | (via `execute_action`/`execute_function`) | `execute_webapi` |
| Publish | `dataverse_publish_customizations` | `publish_customizations` |
| Plugin Trace Logs | `dataverse_get_plugin_trace_logs` | `get_plugin_trace_logs` |
| Audit | `dataverse_get_audit_log` | `get_audit_history` |
| Security Roles | `dataverse_list_roles` + `get_role_privileges` | `get_security_roles` |
| URL Parsing | — | `parse_record_url` |
| Schema Management | `create_attribute` + `update_attribute` | `create_attribute` + `update_attribute` |
| Environment Variables | `get/set/create_environment_variable` | `manage_environment_variables` |
| Create Entity | — | `create_entity` |
| Solution Components | — | `get_solution_components` |
| SDK Messages | — | `get_messages` |

---

## 3. Resources Comparison

| codeurali Resource | DevKit Resource | Notes |
|-------------------|----------------|-------|
| `dataverse://tables` | — | DevKit uses `get_entities_metadata` tool instead |
| `dataverse://tables/{name}/schema` | — | DevKit uses `get_entity_metadata` tool |
| `dataverse://tables/{name}/relationships` | — | DevKit uses `get_entity_metadata` tool |
| `dataverse://server/instructions` | `docs://instructions_for_formxml` | Different scope |
| — | `schema://formxml` | **DevKit-only** — FormXml.xsd schema |
| — | `schema://layoutxml` | **DevKit-only** — LayoutXml.xsd schema |
| — | `schema://fetchxml` | **DevKit-only** — Fetch.xsd schema |
| — | `schema://sitemapxml` | **DevKit-only** — SiteMap XSD + rules |
| — | `docs://instructions_for_formxml` | **DevKit-only** — FormXML manipulation rules |
| — | `docs://instructions_for_views` | **DevKit-only** — View/LayoutXML rules |

**Key Advantage**: DevKit's XSD schema resources enable AI to validate XML before writing — codeurali has no equivalent.

---

## 4. Architecture & Design Comparison

### 4.1 Response Format

| Aspect | codeurali | DevKit |
|--------|----------|-------|
| Structure | `{summary, data, suggestions, warnings?, errorCategory?}` | Markdown text + `StructuredContent` JSON |
| Error Types | `ENV_LIMITATION`, `PERMISSIONS`, `SCHEMA_MISMATCH` | Free-form error text |
| Suggestions | Array of next-step hints | — |
| Query Warnings | Auto-warns on missing `$select`, `$filter`, large `$top` | — |

**Analysis**: codeurali's structured output with suggestions and warnings is more AI-friendly. DevKit's dual output (text + structured JSON) is good but lacks the suggestion/warning layer.

### 4.2 Safety Features

| Feature | codeurali | DevKit |
|---------|----------|-------|
| Destructive confirmation | `confirm: true` parameter | — |
| Auto-backup before write | — | Yes (forms, views, sitemaps) |
| XSD validation | — | Yes (FormXML, LayoutXML, SiteMap) |
| Undo/rollback | — | Yes (forms, views, sitemaps) |
| Query guardrails | Warns on missing select/filter | — |
| Impersonation guard | Blocks System Admin impersonation | — |
| Token encryption | AES-256-GCM | Handled by .NET auth stack |

**Analysis**: Different safety philosophies — codeurali focuses on pre-operation confirmation, DevKit focuses on post-operation recovery (backup → validate → undo).

### 4.3 Transport

| Transport | codeurali | DevKit |
|-----------|----------|-------|
| stdio | Yes | Yes |
| HTTP/SSE | Yes (multi-client) | No |

**Analysis**: codeurali's HTTP transport enables shared server deployment for teams. DevKit is single-client only.

### 4.4 Diagnostics

| Feature | codeurali | DevKit |
|---------|----------|-------|
| `npx mcp-dataverse doctor` | Yes — checks Node, config, auth, API | — |
| Health endpoint | `GET /health` (HTTP mode) | — |
| Retry logic | 401 retry once; 429/503/504 exponential backoff | — |

---

## 5. Gap Analysis: What DevKit Should Prioritize

### Priority 1: HIGH — Core Missing Operations

These are frequently used operations that AI agents will need:

| # | Tool | Why Critical | Effort |
|---|------|-------------|--------|
| 1 | **OData Query** (`query`) | Most common query method; FetchXML-only is limiting | HIGH |
| 2 | **Execute Action** (bound + unbound) | QualifyLead, WinOpportunity, SendEmail, custom actions | MEDIUM |
| 3 | **Batch Execute** | Performance: up to 1000 ops in one HTTP call | HIGH |
| 4 | **Associate/Disassociate** | N:N relationship CRUD (roles, teams, campaigns) | MEDIUM |
| 5 | **Assign Record** | Change record ownership (user/team) | LOW |

### Priority 2: MEDIUM — Important for Completeness

| # | Tool | Why Important | Effort |
|---|------|-------------|--------|
| 6 | **Notes/Annotations** (get + create) | Common Dataverse pattern for attachments | LOW |
| 7 | **File Column** (upload + download) | File/image column operations | MEDIUM |
| 8 | **Delete Attribute** | Schema lifecycle: create → update → delete | LOW |
| 9 | **Create Lookup Attribute** | Relationship creation via OneToMany definition | MEDIUM |
| 10 | **Impersonate** | Run operations as another user (audit compliance) | MEDIUM |
| 11 | **Change Detection** (delta sync) | Incremental sync with change tracking tokens | MEDIUM |
| 12 | **Auto-Paging Query** | Retrieve all pages automatically (up to 50K records) | MEDIUM |

### Priority 3: LOW — Nice to Have

| # | Tool | Why | Effort |
|---|------|-----|--------|
| 13 | **List Users** | Admin: find system users | LOW |
| 14 | **List Teams** | Admin: find teams | LOW |
| 15 | **List Business Units** | Admin: org hierarchy | LOW |
| 16 | **List Plugin Steps** | Debug: see registered plugin steps | LOW |
| 17 | **Set Workflow State** | Activate/deactivate workflows | LOW |
| 18 | **List Workflows** | Discover workflows/flows | LOW |
| 19 | **Role-to-User Assignment** | RBAC: assign/remove roles | LOW |
| 20 | **Duplicate Detection** | Quality: check before create | LOW |
| 21 | **Update Entity Flags** | Enable HasNotes, ChangeTracking, Audit | LOW |
| 22 | **Create SiteMap** | Create new (not just update existing) | LOW |
| 23 | **List Connection References** | Audit flow connections | LOW |
| 24 | **Environment Capabilities** | Snapshot of environment config | LOW |

### Priority 4: NOT NEEDED

| Tool | Why Skip |
|------|----------|
| `suggest_tools` / `list_tool_tags` | AI clients do their own tool selection |
| `list_guides` / `get_guide` | Can be done via MCP resources/prompts |
| `resolve_entity_name` | DevKit's `get_entities_metadata` already covers this |
| `get_entity_key` | DevKit's `get_entity_metadata` already returns keys |

---

## 6. DevKit Unique Advantages (Keep & Strengthen)

codeurali has **ZERO** equivalent for these DevKit capabilities:

| Capability | DevKit Tools | Why It Matters |
|-----------|-------------|---------------|
| **Form Lifecycle** | `get_forms` → `build_form_xml` → `update_form` (with backup/validate/undo) | The #1 customization task in Dynamics 365 |
| **View Lifecycle** | `get_views` → `update_view` (with backup/sync-check/undo) | Critical for data presentation |
| **SiteMap Lifecycle** | `update_sitemap` (with backup/validate/undo) | App navigation management |
| **XSD Schema Resources** | `schema://formxml`, `schema://layoutxml`, `schema://fetchxml`, `schema://sitemapxml` | AI can validate XML before writing |
| **Manipulation Rules** | `docs://instructions_for_formxml`, `docs://instructions_for_views` | AI follows correct XML patterns |
| **URL Parsing** | `parse_record_url` | Convert D365 URLs to entity + GUID |
| **Solution Components** | `get_solution_components` | Inspect what's in a solution |
| **Create Entity** | `create_entity` | Full table creation (codeurali has this in v0.7 roadmap) |
| **SDK Messages** | `get_messages` | Discover available messages per entity |

---

## 7. Summary Scorecard

| Category | codeurali | DevKit | Winner |
|----------|----------|--------|--------|
| **Tool Count** | 73 | 28 | codeurali |
| **CRUD Completeness** | Full (create, read, update, delete, upsert, assign) | Partial (upsert covers create+update) | codeurali |
| **Query Flexibility** | OData + FetchXML + auto-paging + search | FetchXML + search | codeurali |
| **Form/View/SiteMap Management** | None | Full lifecycle with backup/validate/undo | **DevKit** |
| **Schema Resources (XSD)** | None | 4 XSD schemas + 2 doc resources | **DevKit** |
| **Relationship Management** | Full (associate, disassociate, bulk, query) | None | codeurali |
| **Actions/Functions** | Full (bound + unbound, actions + functions) | `execute_webapi` (raw, manual) | codeurali |
| **Batch Operations** | 1000 ops per batch | None | codeurali |
| **Security/RBAC** | Full (roles, privileges, users, teams) | Read-only (`get_security_roles`) | codeurali |
| **File/Image Columns** | Upload + download | None | codeurali |
| **Notes/Annotations** | Get + create | None | codeurali |
| **Change Tracking** | Delta sync with tokens | None | codeurali |
| **Auth Methods** | 3 (Device, ClientCred, ManagedIdentity) | 6 (Interactive, DeviceCode, ClientSecret, FromPac, OAuth, AD) | **DevKit** |
| **Transport** | stdio + HTTP/SSE | stdio only | codeurali |
| **Safety (Pre-op)** | Confirm parameter | None | codeurali |
| **Safety (Post-op)** | None | Backup, validate, undo | **DevKit** |
| **Solution Management** | Publish only | Create entity + components + publish | **DevKit** |
| **URL Parsing** | None | `parse_record_url` | **DevKit** |
| **Multi-IDE Support** | 8 clients | 4 clients | codeurali |
| **Diagnostics** | `doctor` CLI command | None | codeurali |

---

## 8. Strategic Recommendations

### Immediate (Next 5 tools)

1. **OData Query tool** — Most common query method, FetchXML-only is a limitation
2. **Execute Action tool** (unbound) — QualifyLead, WinOpportunity, custom actions
3. **Execute Bound Action tool** — Record-scoped actions
4. **Associate/Disassociate tools** — N:N relationship management
5. **Batch Execute tool** — Performance critical for bulk operations

### Short-term (Next 5 after)

6. **Annotations** (get + create) — Notes with attachments
7. **File Column** (upload + download) — File/image column operations
8. **Assign Record** — Change record ownership
9. **Delete Attribute** — Complete schema lifecycle
10. **Create Lookup Attribute** — Relationship creation

### Maintain Advantage

- Keep investing in **form/view/sitemap lifecycle** — this is DevKit's killer feature
- Keep XSD schema resources — unique differentiator
- Keep `parse_record_url` — very useful for URL-driven AI workflows
- Keep `create_entity` — codeurali doesn't have this until v0.7

### Consider Adding

- **HTTP/SSE transport** for multi-client scenarios
- **Structured suggestions** in tool responses (like codeurali's `suggestions` array)
- **Query guardrails** — warn on missing $select, missing $filter, large result sets
- **`doctor`/health check** command for diagnostics
