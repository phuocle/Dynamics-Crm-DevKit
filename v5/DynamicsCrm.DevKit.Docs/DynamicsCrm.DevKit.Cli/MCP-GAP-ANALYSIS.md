# MCP Tools Gap Analysis Report

**Date:** 2026-03-29
**Author:** AI Agent (Claude Opus 4.6)
**Purpose:** Identify missing MCP tools for DevKit CLI and prioritize for implementation

---

## 1. Current State (13 Tools)

| # | Tool | Category | Capability |
|---|------|----------|------------|
| 1 | `whoami` | Identity | User, environment, roles, access token |
| 2 | `get_entities_metadata` | Metadata (Read) | List all tables with filter |
| 3 | `get_entity_metadata` | Metadata (Read) | Full metadata for single entity (attributes, relationships, keys) |
| 4 | `get_global_optionsets` | Metadata (Read) | List/detail global choice columns |
| 5 | `get_messages` | Metadata (Read) | SDK messages, Custom Actions, Custom APIs per entity |
| 6 | `get_solution_components` | Solution (Read) | List components in a solution (45+ component types resolved) |
| 7 | `execute_fetchxml` | Data (Read) | FetchXML queries with auto-paging (max 5000) |
| 8 | `search` | Data (Read) | Relevance Search (full-text, max 100) |
| 9 | `get_record` | Data (Read) | Single record by GUID |
| 10 | `create_record` | Data (Write) | Create record with type-safe field parsing |
| 11 | `update_record` | Data (Write) | Partial update record |
| 12 | `delete_record` | Data (Write) | Delete record by GUID |
| 13 | `execute_webapi` | Generic | Raw Web API requests (GET/POST/PUT/PATCH/DELETE) |

### What `execute_webapi` Already Covers (as fallback)

The generic `execute_webapi` tool can technically perform ANY Dataverse Web API operation. However, it requires the AI to know exact URLs, JSON structures, and Dataverse conventions. **Dedicated tools provide:**

- Better discoverability (AI knows the tool exists)
- Validated parameters (no typos in URLs)
- Formatted output (markdown tables vs raw JSON)
- Error handling (meaningful messages vs HTTP status codes)
- Token efficiency (compact output vs verbose JSON)

---

## 2. Competitive Landscape

### 2.1 All Known MCP Servers for Dataverse / Power Platform

| # | MCP Server | Stars | Tools | Language | Focus |
|---|------------|-------|-------|----------|-------|
| 1 | **[microsoft/Dataverse-MCP](https://github.com/microsoft/Dataverse-MCP)** (official) | 48 | TBD | N/A | Official MS labs -- Remote MCP server with local proxy. Released at Build. |
| 2 | **[microsoft/Dataverse-skills](https://github.com/microsoft/Dataverse-skills)** (official) | 8 | 5 skills | Python | Agent skills for Claude Code + Copilot (connection, metadata, solution, data, routing) |
| 3 | **[srikanth-paladugula/mcp-dynamics365-server](https://github.com/srikanth-paladugula/mcp-dynamics365-server)** | 18 | ? | ? | MCP Server for Microsoft Dynamics 365 |
| 4 | **[neronotte/Greg.Xrm.Mcp](https://github.com/neronotte/Greg.Xrm.Mcp)** (AppMaker) | 16 | ~20 | C# | **Form/View/AppModule/SiteMap** -- UNIQUE focus on UI customization |
| 5 | **[mwhesse/dataverse-mcp](https://github.com/mwhesse/dataverse-mcp)** | 16 | 90+ | ? | Schema management (create/update tables, columns, relationships, option sets) |
| 6 | **[rajyraman/mcp-dataverse](https://github.com/rajyraman/mcp-dataverse)** | 10 | ~5 | ? | SQL queries via Sql4Cds |
| 7 | **[Cliveo/Power-Platform-MCP](https://github.com/Cliveo/Power-Platform-MCP)** | 8 | ~15 | C# | Plugin traces + Power Automate monitoring |
| 8 | **[bonanip512/DataverseMCPServer](https://github.com/bonanip512/DataverseMCPServer)** | 7 | ~10 | TS | Metadata + OData + chatbot UI |
| 9 | **[nickmeron/Dataverse-MCP-Server](https://github.com/nickmeron/Dataverse-MCP-Server)** | 6 | ? | ? | Dataverse MCP Server |
| 10 | **[vignaesh01/DataverseDevToolsMcpServer](https://github.com/vignaesh01/DataverseDevToolsMcpServer)** | 3 | 44+ | ? | Security + dev tools (roles, teams, plugin traces, queues) |
| 11 | **[codeurali/mcp-dataverse](https://github.com/codeurali/mcp-dataverse)** | 3 | ? | ? | MCP server for Dataverse Web API for devs |
| 12 | **[adner/McpB-Pcf](https://github.com/adner/McpB-Pcf)** | 2 | ? | ? | PCF control for MCP-B Chrome extension (LLMs interact with model-driven apps) |
| 13 | **[noorsyyed/mcp-d365ce](https://github.com/noorsyyed/mcp-d365ce)** | 1 | ? | ? | MCP server for D365 CE metadata discovery |
| 14 | **[TALXIS/tools-cli](https://github.com/TALXIS/tools-cli)** | 1 | ? | C# | CLI + MCP for Power Platform developer workflows |
| 15 | **[markus-tobler/dataverse-metadata-mcp](https://github.com/markus-tobler/dataverse-metadata-mcp)** | 1 | ? | ? | Read and update Dataverse data model |

### 2.2 Deep Dive: Greg.Xrm.Mcp (AppMaker) -- KEY COMPETITOR

> **GitHub:** https://github.com/neronotte/Greg.Xrm.Mcp | **Stars:** 16 | **Language:** C# (.NET 9) | **Install:** `dotnet tool install --global Greg.Xrm.Mcp.AppMaker`

This is the **only MCP server** that focuses on UI customization (Forms, Views, AppModules, SiteMaps). It provides tools that NO other server has:

#### AppMaker Tools

| Category | Tool | Read/Write | Description |
|----------|------|------------|-------------|
| **Metadata** | List Tables | Read | Enumerate all tables in environment |
| **Metadata** | List Columns | Read | Display all columns for a table |
| **Forms** | Form Inventory | Read | List all forms for a table (text/JSON output) |
| **Forms** | Form Definition Retrieval | Read | Fetch FormXML or FormJSON with metadata |
| **Forms** | Form Updater | Write | AI-assisted form structure modifications |
| **Forms** | FormXML Validation | Read | Check FormXML structure integrity |
| **Views** | Saved Query Inventory | Read | List all views for a table |
| **Views** | Saved Query Definition Retrieval | Read | Get FetchXML and LayoutXML definitions |
| **Views** | Saved Query Updater | Write | AI-assisted view modifications |
| **Views** | Saved Query Maker | Write | Create new views with AI |
| **Views** | Saved Query Renamer | Write | Rename existing views |
| **AppModules** | App Module Inventory | Read | List model-driven apps with roles, versions |
| **AppModules** | Add/Remove App Components | Write | Manage table definitions within apps |
| **AppModules** | Create AppModules | Write | Create new apps with tables + sitemaps |
| **AppModules** | AppModule Validation | Read | Validate app structure |
| **SiteMaps** | Sitemap Definition Retrieval | Read | Get sitemap XML navigation |
| **SiteMaps** | Sitemap Updater | Write | AI-assisted sitemap modifications |

#### AppMaker MCP Resources (Schema Knowledge)

| Resource URI | Content |
|-------------|---------|
| `schema://formxml` | XML schema for form structures |
| `schema://layoutxml` | XML schema for view column layouts |
| `schema://fetchxml` | XML schema for view queries |
| `schema://sitemapxml` | XML schema + sitemap generation instructions |
| `docs://instructions_for_formxml` | FormXML manipulation guidelines |

> **Key insight:** AppMaker uses MCP **Resources** to provide XML schemas to the AI, so the AI understands FormXML/LayoutXML structure. This is a smart pattern DevKit should adopt.

### 2.3 Deep Dive: microsoft/Dataverse-MCP (Official)

> **GitHub:** https://github.com/microsoft/Dataverse-MCP | **Stars:** 48 | **Released at Build 2025**

- Remote MCP server hosted by Microsoft (not self-hosted)
- Requires a **local proxy** for authentication
- Labs-based -- tool list not publicly documented in repo (referenced in external User Guide)
- Significant because it's **Microsoft's official approach** to MCP for Dataverse

### 2.4 Deep Dive: microsoft/Dataverse-skills (Official)

> **GitHub:** https://github.com/microsoft/Dataverse-skills | **Stars:** 8 | **Language:** Python

- **5 skills**: Connection, Metadata Authoring, Solution Management, Python SDK Data Ops, Tool Routing
- Works with Claude Code (`/plugin install`) and GitHub Copilot CLI
- Uses Python SDK rather than .NET
- MIT licensed
- Focuses on **higher-level agent skills** rather than individual tools

---

## 3. Gap Analysis by Category

### 3.1 UI Customization (Forms & Views) -- BIGGEST GAP

**Only [Greg.Xrm.Mcp (AppMaker)](https://github.com/neronotte/Greg.Xrm.Mcp) has dedicated form/view/appmodule/sitemap tools.** DevKit should match and exceed this.

| Gap | What's Missing | Dataverse API | Impact |
|-----|----------------|---------------|--------|
| **Form Discovery** | Cannot list forms for an entity, get FormXML, understand form layout | `systemform` table: `GET /systemforms?$filter=objecttypecode eq 'account'` | HIGH -- AI cannot understand or modify UI |
| **Form Update** | Cannot modify FormXML (add/remove fields, sections, tabs) | `PATCH /systemforms({id})` with `formxml` | HIGH -- AI cannot customize forms |
| **View Discovery** | Cannot list system views, get FetchXML/LayoutXML | `savedquery` table: `GET /savedqueries?$filter=returnedtypecode eq 'account'` | HIGH -- AI cannot understand data presentation |
| **View Update** | Cannot modify view FetchXML or column layout | `PATCH /savedqueries({id})` with `fetchxml`, `layoutxml` | MEDIUM -- less common than form changes |
| **SiteMap** | Cannot read/modify app navigation | `sitemap` table | LOW -- rarely changed by AI |

### 3.2 Developer Troubleshooting

| Gap | What's Missing | Dataverse API | Impact |
|-----|----------------|---------------|--------|
| **Plugin Trace Logs** | Cannot query plugin execution logs for debugging | `plugintracelog` table | HIGH -- #1 troubleshooting need |
| **Async Job Status** | Cannot monitor background job status (imports, bulk deletes, workflows) | `asyncoperation` table | MEDIUM |

### 3.3 Plugin & Event Pipeline

| Gap | What's Missing | Dataverse API | Impact |
|-----|----------------|---------------|--------|
| **Plugin Registration Info** | Cannot query registered plugins, steps, images for an entity | `pluginassembly`, `plugintype`, `sdkmessageprocessingstep`, `sdkmessageprocessingstepimage` | HIGH -- AI needs this for plugin development |
| **Workflow/Business Rule Discovery** | Cannot list workflows, business rules, flows for an entity | `workflow` table (category: 0=Workflow, 2=BizRule, 5=Flow) | MEDIUM |

### 3.4 Security Model

| Gap | What's Missing | Dataverse API | Impact |
|-----|----------------|---------------|--------|
| **Security Roles** | Cannot list roles, their privileges, or compare roles | `role`, `privilege`, `roleprivilege` tables | MEDIUM |
| **User/Team Membership** | Cannot query team members or user's team assignments | `teammembership` N:N, `systemuser` | MEDIUM |
| **Field Security** | Cannot query field-level security profiles and permissions | `fieldsecurityprofile`, `fieldpermission` | LOW |
| **Access Check** | Cannot check if a user has access to a specific record | `RetrievePrincipalAccess` function | LOW |

### 3.5 Schema Management (Create/Modify Metadata)

| Gap | What's Missing | Dataverse API | Impact |
|-----|----------------|---------------|--------|
| **Create Table** | Cannot create custom entities | `POST /EntityDefinitions` | MEDIUM |
| **Create Column** | Cannot add columns to tables | `POST /EntityDefinitions(LogicalName='x')/Attributes` | MEDIUM |
| **Create Relationship** | Cannot create 1:N, N:N relationships | `POST /RelationshipDefinitions` | MEDIUM |
| **Manage Option Values** | Cannot add/remove/reorder option set values | `InsertOptionValue`, `UpdateOptionValue`, `DeleteOptionValue`, `OrderOption` | MEDIUM |
| **Publish Customizations** | Cannot publish after metadata changes | `PublishXml`, `PublishAllXml` | HIGH (required after ANY schema change) |

### 3.6 Solution Management (Write Operations)

| Gap | What's Missing | Dataverse API | Impact |
|-----|----------------|---------------|--------|
| **Add/Remove Components** | Cannot add entities, web resources, etc. to solutions | `AddSolutionComponent`, `RemoveSolutionComponent` | MEDIUM |
| **Export Solution** | Cannot export solution as ZIP | `ExportSolution`, `ExportSolutionAsync` | LOW |
| **Import Solution** | Cannot import solution ZIP | `ImportSolution`, `ImportSolutionAsync` | LOW |
| **Solution Dependencies** | Cannot check what blocks deletion/uninstall | `RetrieveDependenciesForDelete`, etc. | LOW |

### 3.7 Data Operations

| Gap | What's Missing | Dataverse API | Impact |
|-----|----------------|---------------|--------|
| **Upsert** | Cannot create-or-update using alternate keys | `PATCH` with `If-Match`/`If-None-Match` | MEDIUM |
| **Batch Operations** | Cannot send multiple operations in a single request | `POST /$batch` | MEDIUM |
| **Associate/Disassociate** | Cannot manage N:N relationships between records | `POST /{entity}({id})/{nav}/$ref` | LOW |
| **File/Image Upload** | Cannot upload files to file/image columns | `PATCH /{entity}({id})/{filecolumn}` | LOW |

### 3.8 Business Logic

| Gap | What's Missing | Dataverse API | Impact |
|-----|----------------|---------------|--------|
| **Execute Workflow** | Cannot trigger a workflow on a record | `ExecuteWorkflow` action | LOW |
| **BPF Management** | Cannot query/manage Business Process Flow instances | `RetrieveProcessInstances`, `RetrieveActivePath` | LOW |

### 3.9 Audit & History

| Gap | What's Missing | Dataverse API | Impact |
|-----|----------------|---------------|--------|
| **Audit History** | Cannot query change history for a record | `RetrieveRecordChangeHistory` | LOW |
| **Audit Details** | Cannot get detailed before/after values | `RetrieveAuditDetails` | LOW |

### 3.10 MCP Resources (Schema Knowledge for AI) -- CRITICAL GAP

AppMaker demonstrated that **MCP Resources** (XSD schemas + instruction docs) are essential for AI to correctly manipulate XML-based artifacts. DevKit has **zero MCP Resources**.

#### XSD Schema Files -- Official Microsoft Download

**Download URL:** https://download.microsoft.com/download/B/9/7/B97655A4-4E46-4E51-BA0A-C669106D563F/Schemas.zip

**Source:** [Microsoft Learn -- Customization solutions file schema](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/customization-solutions-file-schema)

This ZIP contains all official XSD schemas at `Schemas\9.0.0.2090\`:

| XSD File | Purpose | Used By | MCP Resource URI |
|----------|---------|---------|------------------|
| `FormXml.xsd` | Form structure (tabs, sections, controls) | Form tools | `schema://formxml` |
| `Fetch.xsd` | FetchXML query structure | View tools, execute_fetchxml | `schema://fetchxml` |
| `LayoutXml.xsd` | View column layout | View tools | `schema://layoutxml` |
| `SiteMap.xsd` | App navigation structure | AppModule/SiteMap tools | `schema://sitemapxml` |
| `SiteMapType.xsd` | SiteMap element types | AppModule/SiteMap tools | (combined with above) |
| `RibbonCore.xsd` | Ribbon/command bar structure | Ribbon tools | `schema://ribbonxml` |
| `RibbonTypes.xsd` | Ribbon element types | Ribbon tools | (combined with above) |
| `RibbonWSS.xsd` | Ribbon WSS elements | Ribbon tools | (combined with above) |
| `CustomizationsSolution.xsd` | Solution import/export structure | Solution tools | `schema://customizationxml` |
| `isv.config.xsd` | ISV configuration | Legacy | N/A |

**Microsoft Docs references:**
- [Form XML schema](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/form-xml-schema)
- [Ribbon core schema](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/ribbon-core-schema)
- [Ribbon types schema](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/ribbon-types-schema)
- [Ribbon WSS schema](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/ribbon-wss-schema)

#### Implementation Task: Download XSD and Store in Shared Resources

**IMPORTANT:** When implementing form/view/sitemap MCP tools:

1. **Download** latest `Schemas.zip` from Microsoft URL above
2. **Extract** XSD files to `DynamicsCrm.DevKit.Shared\Resources\xsd\`
3. **Embed** as assembly resources in the Shared project
4. **Expose** via MCP Resources in the MCP server

Target folder structure:
```
DynamicsCrm.DevKit.Shared\Resources\xsd\
├── FormXml.xsd
├── Fetch.xsd
├── LayoutXml.xsd
├── SiteMap.xsd
├── SiteMapType.xsd
├── RibbonCore.xsd
├── RibbonTypes.xsd
├── RibbonWSS.xsd
├── CustomizationsSolution.xsd
└── FilterXml.xsd (if available)
```

#### MCP Resources to Implement

| Resource URI | Type | Content |
|-------------|------|---------|
| `schema://formxml` | XSD | FormXml.xsd schema -- AI reads before modifying forms |
| `schema://fetchxml` | XSD | Fetch.xsd schema -- AI reads before building queries |
| `schema://layoutxml` | XSD | LayoutXml.xsd schema -- AI reads before modifying views |
| `schema://sitemapxml` | XSD + Instructions | SiteMap.xsd + SiteMapType.xsd + generation rules |
| `schema://ribbonxml` | XSD | RibbonCore.xsd + RibbonTypes.xsd + RibbonWSS.xsd |
| `docs://instructions_for_formxml` | Markdown | Rules for FormXML manipulation (backup, naming conventions, tab/section placement) |
| `docs://instructions_for_views` | Markdown | Rules for view creation/modification (LayoutXML structure, column widths) |

---

## 4. Prioritized Implementation Roadmap

### TIER 1: Must Have (High Impact, High Frequency)

These are operations AI agents need **almost every session** when working with Dynamics 365:

| # | Tool Name | Description | Complexity | Why Priority |
|---|-----------|-------------|------------|--------------|
| 1 | **`get_forms`** | List forms for an entity; return name, type, FormXML | Medium | AI MUST understand UI to help with customization. No competitor has this -- differentiator. |
| 2 | **`get_views`** | List system/personal views for an entity; return FetchXML, LayoutXML | Medium | Views are the #2 UI artifact. Essential for understanding data presentation. |
| 3 | **`get_plugin_trace_logs`** | Query plugin trace logs by plugin name, time range, or correlation ID | Easy | #1 developer troubleshooting need. 2 of 6 competitors have this. |
| 4 | **`publish_customizations`** | Publish specific entities or all customizations | Easy | Required after ANY metadata change. Without this, AI cannot complete schema modification workflows. |
| 5 | **`get_plugin_registrations`** | Query plugin assemblies, types, steps, images for an entity | Medium | Essential for plugin development workflow. AI needs to understand event pipeline. |

### TIER 2: Should Have (High Impact, Medium Frequency)

These are needed for **specific workflows** that come up regularly:

| # | Tool Name | Description | Complexity | Why Priority |
|---|-----------|-------------|------------|--------------|
| 6 | **`upsert_record`** | Create-or-update using alternate keys or GUID | Easy | Very common in data integration; simple extension of existing create/update |
| 7 | **`get_workflows`** | List workflows, business rules, flows for an entity | Easy | Understanding automation is key for AI troubleshooting |
| 8 | **`manage_solution_components`** | Add/remove components to/from a solution | Medium | Common ALM operation; currently solution tools are read-only |
| 9 | **`get_security_roles`** | List roles with privilege details; compare roles | Medium | Frequently needed for security troubleshooting |
| 10 | **`batch_operations`** | Execute multiple operations in a single request | Hard | Performance-critical for bulk data operations |

### TIER 3: Nice to Have (Medium Impact, Low Frequency)

These improve capabilities but `execute_webapi` can serve as fallback:

| # | Tool Name | Description | Complexity | Why Priority |
|---|-----------|-------------|------------|--------------|
| 11 | **`create_table`** | Create custom entity with primary field | Medium | Schema management; execute_webapi fallback exists |
| 12 | **`create_column`** | Add column to entity (all types) | Medium | Schema management; execute_webapi fallback exists |
| 13 | **`create_relationship`** | Create 1:N or N:N relationship | Medium | Schema management; execute_webapi fallback exists |
| 14 | **`manage_option_values`** | Add/remove/reorder option set values | Medium | Option set management; execute_webapi fallback exists |
| 15 | **`get_async_operations`** | Monitor background job status | Easy | Helpful for long-running operations |
| 16 | **`associate_records`** | Manage N:N relationships between records | Easy | Less common than CRUD |
| 17 | **`get_audit_history`** | Query change history for a record | Medium | Useful for troubleshooting data issues |
| 18 | **`get_web_resources`** | List web resources by type, solution, or pattern | Easy | Helpful but FetchXML on webresource table works |

### TIER 4: Future Consideration

| # | Tool Name | Description | Why Deferred |
|---|-----------|-------------|--------------|
| 19 | **`export_solution`** | Export solution as ZIP | Complex; binary file handling |
| 20 | **`import_solution`** | Import solution ZIP | Complex; binary file + async job monitoring |
| 21 | **`execute_sql`** | SQL query via TDS endpoint | Different paradigm; FetchXML is primary |
| 22 | **`generate_erd`** | Generate Mermaid entity diagrams | Nice for docs; not core functionality |
| 23 | **`manage_file_columns`** | Upload/download file/image columns | Complex; chunked upload handling |
| 24 | **`execute_workflow`** | Trigger workflow on a record | Niche use case |
| 25 | **`get_flow_runs`** | Monitor Power Automate runs | Power Platform integration; different API surface |

---

## 5. Implementation Effort Estimates

| Complexity | Estimated Effort | Examples |
|------------|------------------|----------|
| **Easy** | 1-2 hours | Single FetchXML query + formatting (plugin trace logs, workflows, upsert) |
| **Medium** | 2-4 hours | Multiple queries + XML parsing + formatting (forms, views, plugin registrations) |
| **Hard** | 4-8 hours | Complex logic + binary handling + async (batch operations, solution export/import) |

### Suggested Implementation Order (Sprint Plan)

| Sprint | Tools | Total Effort |
|--------|-------|--------------|
| **Sprint 1** | `get_plugin_trace_logs`, `publish_customizations`, `upsert_record` | ~4 hours |
| **Sprint 2** | `get_forms`, `get_views` | ~6 hours |
| **Sprint 3** | `get_plugin_registrations`, `get_workflows` | ~5 hours |
| **Sprint 4** | `manage_solution_components`, `get_security_roles` | ~6 hours |
| **Sprint 5** | `batch_operations`, schema tools (table/column/relationship) | ~10 hours |

---

## 6. Key Insights

1. **Greg.Xrm.Mcp (AppMaker) is the key competitor for UI tools** -- It is the ONLY MCP server with dedicated Form/View/AppModule/SiteMap tools. DevKit needs to match this and add its own advantages (compact output, validation, better formatting).

2. **AppMaker uses MCP Resources for XML schemas** -- This is a smart pattern: provide `schema://formxml`, `schema://layoutxml`, etc. as MCP Resources so the AI understands XML structure. DevKit should adopt this pattern.

3. **Plugin Trace Logs are universally expected** -- 2 of 15 competitor MCP servers include this. It's the #1 troubleshooting operation for Dynamics developers.

4. **`execute_webapi` is a strength** -- It covers ~80% of missing operations as a fallback. The question is which operations deserve dedicated tools for better AI UX.

5. **Schema creation tools have diminishing returns** -- The `execute_webapi` tool can handle `POST /EntityDefinitions` etc. Dedicated tools add discoverability but not new capability.

6. **Publish is a blocker** -- Without `publish_customizations`, AI cannot complete any metadata modification workflow end-to-end. This should be the easiest quick win.

7. **The AI should NEVER need to extract access tokens** -- Every operation should be handled through a tool, not by getting a token and making raw HTTP calls outside the MCP server.

8. **Microsoft has TWO official repos** -- `Dataverse-MCP` (remote MCP server with local proxy, released at Build) and `Dataverse-skills` (agent skills for Claude Code + Copilot). DevKit should monitor both for feature parity.

---

## 7. Comparison: DevKit vs Key Competitors

| Category | DevKit (13 tools) | AppMaker (~20 tools) | mwhesse (90+ tools) | DevKit Advantage |
|----------|-------------------|----------------------|---------------------|------------------|
| Data CRUD | 4 tools | 0 tools | ~5 tools | **DevKit wins** |
| Data Query | 3 tools (FetchXML, Search, GetRecord) | 0 tools | ~3 tools | **DevKit wins** |
| Metadata Read | 4 tools | 2 tools (tables, columns) | ~10 tools | DevKit is more compact |
| Metadata Write | 0 dedicated (execute_webapi) | 0 tools | ~30 tools | mwhesse wins |
| Forms | 0 tools | **4 tools (inventory, get, update, validate)** | 0 tools | **AppMaker wins** |
| Views | 0 tools | **5 tools (inventory, get, update, create, rename)** | 0 tools | **AppMaker wins** |
| AppModules | 0 tools | **5 tools (inventory, add/remove, create, validate, sitemap)** | 0 tools | **AppMaker wins** |
| MCP Resources | 0 resources | **5 resources (FormXML, LayoutXML, FetchXML, SiteMapXML schemas)** | 0 resources | **AppMaker wins** |
| Solution | 1 tool (read-only) | 0 tools | ~10 tools | mwhesse wins |
| Security | 0 tools | 0 tools | ~10 tools | mwhesse wins |
| Plugin/Dev | 0 tools | 0 tools | ~5 tools | mwhesse wins |
| Generic Fallback | `execute_webapi` (covers everything) | None | None | **DevKit wins** |
| Token Efficiency | Compact format (~44% savings) | Standard JSON | Standard JSON | **DevKit wins** |

**DevKit's strategy should be: Quality over quantity.** Don't aim for 90 tools. Add the 10-15 highest-impact tools that cover the gaps, with special focus on matching AppMaker's UI tools (forms, views, appmodules) while maintaining DevKit's strengths (compact output, execute_webapi fallback, token efficiency).
