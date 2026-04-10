# execute_webapi Security Hardening — Implementation Guide

> **Purpose**: Restrict `execute_webapi` MCP tool mutation scope to prevent AI from bypassing specialized tools for dangerous metadata/system modifications.
> **File**: `DynamicsCrm.DevKit.Cli\Mcp\Tools\ExecuteWebApiTool.cs`
> **Tests**: `DynamicsCrm.DevKit.UnitTests\Cli\Mcp\ExecuteWebApiToolTests.cs`

---

## Problem Statement

The `execute_webapi` tool uses a **blocklist** of only 6 endpoint patterns + 2 POST patterns. AI can bypass specialized tools by directly hitting:

```
PUT EntityDefinitions(guid)         → turn on Change Tracking (IRREVERSIBLE!)
PATCH GlobalOptionSetDefinitions    → modify global choices
PATCH roles(guid)                   → modify security roles  
PATCH webresources(guid)            → modify web resources
DELETE RelationshipDefinitions      → drop relationships
POST/DELETE solutions               → manipulate solutions
PATCH pluginassemblies(guid)        → modify plugin registration
```

## Solution: Expand Blocklist

Expand `BlockedEndpoints` from 6 → **24 patterns** and `BlockedPostEndpoints` from 2 → **7+ patterns**.

### Why NOT allowlist?

1. Data entity set names are unpredictable (custom entities like `new_mytable`)
2. Custom action POST endpoints (e.g., `new_MyCustomAction`) must remain allowed
3. Metadata endpoints follow a **well-known, finite set** of naming patterns from Microsoft
4. We can block **categories** for future-proofing

---

## Current Code (BEFORE)

### BlockedEndpoints (lines 191-205)

```csharp
private static readonly (string UrlPattern, string RedirectTool, string Reason)[] BlockedEndpoints =
[
    ("systemforms(", "manage_form", "..."),
    ("savedqueries(", "manage_view", "..."),
    ("userqueries(", "manage_view", "..."),
    ("sitemaps(", "manage_sitemap", "..."),
    ("environmentvariabledefinitions(", "manage_environment_variable", "..."),
    ("environmentvariablevalues(", "manage_environment_variable", "...")
];
```

### BlockedPostEndpoints (lines 207-213)

```csharp
private static readonly (string UrlPattern, string RedirectTool, string Reason)[] BlockedPostEndpoints =
[
    ("publishxml", "publish_customizations", "..."),
    ("publishallxml", "publish_customizations", "...")
];
```

### GetBlockedReason (lines 215-254)

```csharp
private static string GetBlockedReason(HttpMethod method, string url)
{
    var urlLower = url.ToLowerInvariant();
    // POST check → only publishxml/publishallxml
    // GET passthrough
    // PATCH/PUT/DELETE → only 6 patterns
    return null;
}
```

---

## Required Changes (AFTER)

### 1. Update Tool Description (lines 28-48)

Replace description to reflect new scope:

```csharp
[McpServerTool(Name = "execute_webapi", Title = "Execute a raw Web API request",
    Destructive = true, ReadOnly = false, Idempotent = false,
    UseStructuredContent = true, OutputSchemaType = typeof(WebApiResult)),
Description(
    "Execute Dataverse Web API requests for data queries and custom actions.\n\n" +

    "ALLOWED:\n" +
    "- GET on any endpoint (read-only, always safe)\n" +
    "- POST/PATCH/PUT/DELETE on standard data records (accounts, contacts, custom entities)\n" +
    "- POST custom actions/functions (WhoAmI, new_MyCustomAction, etc.)\n\n" +

    "BLOCKED (use specialized tools instead):\n" +
    "- EntityDefinitions / Attributes → upsert_table, upsert_column\n" +
    "- RelationshipDefinitions → upsert_relationship\n" +
    "- GlobalOptionSetDefinitions → manage_choice\n" +
    "- systemforms → manage_form / build_form_xml\n" +
    "- savedqueries / userqueries → manage_view\n" +
    "- sitemaps → manage_sitemap\n" +
    "- environmentvariable* → manage_environment_variable\n" +
    "- webresources → manage_webresource\n" +
    "- roles → manage_role\n" +
    "- PublishXml / PublishAllXml → publish_customizations\n" +
    "- solutions, plugins, workflows, apps → manage via Power Apps UI or CLI\n\n" +

    "URL: relative path only (SDK handles base URL). " +
    "PUT/PATCH/DELETE are destructive — confirm with user first.")]
```

### 2. Expand BlockedEndpoints (PATCH/PUT/DELETE)

Replace the `BlockedEndpoints` array with these **24 patterns** (organized by category):

```csharp
private static readonly (string UrlPattern, string RedirectTool, string Reason)[] BlockedEndpoints =
[
    // ── UI / Forms / Views / SiteMaps (existing) ──
    ("systemforms(", "manage_form or build_form_xml",
        "FormXML defines the UI layout for ALL users. A malformed FormXML breaks the entire entity form with no undo."),
    ("savedqueries(", "manage_view",
        "SavedQuery defines view columns and query for ALL users. A FetchXML/LayoutXML mismatch hides all data or crashes the grid."),
    ("userqueries(", "manage_view",
        "UserQuery defines personal views. A malformed FetchXML/LayoutXML breaks the view with no undo."),
    ("sitemaps(", "manage_sitemap",
        "SiteMap defines app navigation for ALL users. A malformed SiteMap breaks navigation for the entire app."),

    // ── Environment Variables (existing) ──
    ("environmentvariabledefinitions(", "manage_environment_variable",
        "Environment variable definitions have linked value records. The manage_environment_variable tool handles definition+value atomically with solution awareness."),
    ("environmentvariablevalues(", "manage_environment_variable",
        "Environment variable values are linked to definitions. The manage_environment_variable tool handles create/update/clear correctly with definition lookup."),

    // ── Schema / Metadata (NEW) ──
    ("EntityDefinitions", "upsert_table or upsert_column",
        "Entity metadata contains IRREVERSIBLE flags (ChangeTracking, Activities, BPF, Feedback, Connections, Queues). These cannot be turned off once enabled. Use upsert_table for entity-level changes, upsert_column for attribute-level changes."),
    ("RelationshipDefinitions", "upsert_relationship",
        "Relationship metadata controls cascading behavior and referential integrity. Incorrect changes can cause data loss. Use upsert_relationship for safe relationship management."),
    ("ManagedPropertyDefinitions", "upsert_table",
        "Managed properties control solution layering behavior. Incorrect changes affect solution export/import."),

    // ── Choice / OptionSet (NEW) ──
    ("GlobalOptionSetDefinitions", "manage_choice",
        "Global option sets are shared across multiple entities. Use manage_choice to list, create, update, add/remove options safely."),
    ("OptionSetDefinitions", "manage_choice or upsert_column",
        "Option set definitions should be managed via manage_choice (global) or upsert_column (local picklist)."),

    // ── Web Resources (NEW) ──
    ("webresources(", "manage_webresource",
        "Web resources require base64 content encoding and proper type codes. manage_webresource handles encoding, validation, publish, and solution assignment."),

    // ── Security (NEW) ──
    ("roles(", "manage_role",
        "Security roles control access for ALL users in a business unit. manage_role provides safe CRUD, privilege copying, and user assignment."),

    // ── Solution Management (NEW) ──
    ("solutions(", null,
        "Solution manipulation can corrupt customizations and break deployments. Manage solutions via Power Apps UI, PAC CLI, or the DevKit solution command."),
    ("solutioncomponents(", null,
        "Adding/removing solution components incorrectly can break solution exports. Manage via Power Apps UI or PAC CLI."),

    // ── Plugin / Server-side (NEW) ──
    ("pluginassemblies(", null,
        "Plugin assemblies contain server-side business logic. Register/update plugins via the DevKit server command or Plugin Registration Tool."),
    ("plugintypes(", null,
        "Plugin type registrations link assemblies to message processing. Manage via DevKit server command or Plugin Registration Tool."),
    ("sdkmessageprocessingsteps(", null,
        "SDK message processing steps control plugin execution pipeline. Incorrect step registration can break all CRUD operations. Manage via DevKit server command."),
    ("serviceendpoints(", null,
        "Service endpoints configure Azure integration. Manage via Plugin Registration Tool or Power Apps UI."),
    ("pluginpackages(", null,
        "Plugin packages (dependent assemblies) must be managed together with their plugin assemblies. Use DevKit server command."),

    // ── Workflows / Processes (NEW) ──
    ("workflows(", null,
        "Workflows contain business process definitions. Modifying workflow XAML incorrectly breaks automation. Manage via Power Apps UI or Power Automate."),
    ("processes(", null,
        "Process definitions control business logic flows. Manage via Power Apps UI."),

    // ── Apps (NEW) ──
    ("canvasapps(", null,
        "Canvas apps have complex internal structure. Manage via Power Apps Studio."),
    ("appmodules(", null,
        "Model-driven app definitions control app structure and navigation. Manage via Power Apps UI."),

    // ── Connections (NEW) ──
    ("connectionreferences(", null,
        "Connection references link flows/apps to external services. Manage via Power Apps UI or solution import.")
];
```

### 3. Expand BlockedPostEndpoints

Replace with **7+ patterns**:

```csharp
private static readonly (string UrlPattern, string RedirectTool, string Reason)[] BlockedPostEndpoints =
[
    // ── Publish (existing) ──
    ("publishxml", "publish_customizations",
        "PublishXml requires correctly formatted ParameterXml. The publish_customizations tool handles entity-specific vs all publishing with proper XML generation."),
    ("publishallxml", "publish_customizations",
        "PublishAllXml publishes ALL customizations. The publish_customizations tool provides a simpler interface with proper status reporting."),

    // ── Metadata Actions (NEW) ──
    ("createoptionset", "manage_choice",
        "Creating option sets requires proper metadata structure. Use manage_choice for global option sets or upsert_column for local picklists."),
    ("updateoptionset", "manage_choice",
        "Updating option set metadata requires proper label handling. Use manage_choice for safe updates."),
    ("insertoptionvalue", "manage_choice or upsert_column",
        "Inserting option values requires correct value/label pairs. Use manage_choice (global) or upsert_column (local) for safe option management."),
    ("updateoptionvalue", "manage_choice or upsert_column",
        "Updating option value labels requires merge label handling. Use manage_choice (global) or upsert_column (local)."),
    ("deleteoptionvalue", "manage_choice or upsert_column",
        "Deleting option values is irreversible. Use manage_choice (global) or upsert_column (local) for safe deletion."),

    // ── Data endpoints that have dedicated tools (NEW) ──
    ("webresources", "manage_webresource",
        "Creating web resources requires base64 encoding and type codes. Use manage_webresource for safe creation with solution assignment."),
    ("roles", "manage_role",
        "Creating security roles requires proper business unit assignment. Use manage_role for safe role management.")
];
```

### 4. Refactor GetBlockedReason

The method structure stays the same — 3 phases:

```csharp
private static string GetBlockedReason(HttpMethod method, string url)
{
    var urlLower = url.ToLowerInvariant();

    // Phase 1: Block POST on specific patterns
    if (method == HttpMethod.Post)
    {
        foreach (var (pattern, tool, reason) in BlockedPostEndpoints)
        {
            if (urlLower.Contains(pattern))
            {
                var toolHint = tool != null
                    ? $"USE INSTEAD: {tool}"
                    : "Manage via Power Apps UI, PAC CLI, or DevKit CLI commands.";
                return $"BLOCKED: Direct POST to {pattern} is not allowed via execute_webapi.\n\n" +
                       $"REASON: {reason}\n\n{toolHint}";
            }
        }
    }

    // Phase 2: GET is always safe
    if (method == HttpMethod.Get || method == HttpMethod.Post)
        return null;

    // Phase 3: Block PATCH/PUT/DELETE on metadata/system endpoints
    foreach (var (pattern, tool, reason) in BlockedEndpoints)
    {
        if (urlLower.Contains(pattern.ToLowerInvariant()))
        {
            var toolHint = tool != null
                ? $"USE INSTEAD: {tool}"
                : "Manage via Power Apps UI, PAC CLI, or DevKit CLI commands.";
            return $"BLOCKED: Direct {method.Method} on {pattern.TrimEnd('(')} is not allowed via execute_webapi.\n\n" +
                   $"REASON: {reason}\n\n{toolHint}";
        }
    }

    return null;
}
```

### 5. IMPORTANT: `BlockedEndpoints` pattern matching note

Some patterns like `EntityDefinitions` do NOT have `(` suffix — this is intentional to catch ALL URL shapes:
- `EntityDefinitions(guid)` — update entity
- `EntityDefinitions(guid)/Attributes` — list attributes  
- `EntityDefinitions(guid)/Attributes(guid)` — update attribute

The `Contains()` check catches all these variants.

But patterns like `webresources(`, `roles(` DO have `(` to avoid false positives with data records that contain those words (unlikely but safe).

---

## Unit Tests to Add

### Schema/Metadata blocks (PATCH/PUT/DELETE)

```csharp
[TestMethod] PATCH_EntityDefinitions_Blocked()          // → mentions upsert_table
[TestMethod] PUT_EntityDefinitions_Blocked()            // → blocked
[TestMethod] DELETE_EntityDefinitions_Blocked()          // → blocked
[TestMethod] PATCH_EntityDefinitions_Attributes_Blocked() // → mentions upsert_column
[TestMethod] DELETE_RelationshipDefinitions_Blocked()    // → mentions upsert_relationship
```

### Choice/OptionSet blocks

```csharp
[TestMethod] PATCH_GlobalOptionSetDefinitions_Blocked()  // → mentions manage_choice
[TestMethod] DELETE_GlobalOptionSetDefinitions_Blocked()  // → blocked
[TestMethod] POST_CreateOptionSet_Blocked()              // → mentions manage_choice
[TestMethod] POST_InsertOptionValue_Blocked()            // → mentions manage_choice
```

### Web Resources / Security

```csharp
[TestMethod] PATCH_WebResources_Blocked()                // → mentions manage_webresource
[TestMethod] DELETE_WebResources_Blocked()               // → blocked
[TestMethod] POST_WebResources_Create_Blocked()          // → mentions manage_webresource
[TestMethod] PATCH_Roles_Blocked()                       // → mentions manage_role
[TestMethod] DELETE_Roles_Blocked()                      // → blocked
[TestMethod] POST_Roles_Create_Blocked()                 // → mentions manage_role
```

### Solution/Plugin/Apps

```csharp
[TestMethod] DELETE_Solutions_Blocked()                  // → blocked
[TestMethod] PATCH_PluginAssemblies_Blocked()            // → blocked
[TestMethod] PATCH_Workflows_Blocked()                   // → blocked
[TestMethod] DELETE_CanvasApps_Blocked()                 // → blocked
```

### Data record CRUD (must remain ALLOWED)

```csharp
[TestMethod] PATCH_Accounts_Allowed()                    // → null (allowed)
[TestMethod] DELETE_Accounts_Allowed()                   // → null
[TestMethod] PATCH_Contacts_Allowed()                    // → null
[TestMethod] POST_Accounts_Create_Allowed()              // → null
[TestMethod] PATCH_CustomEntity_Allowed()                // → null
```

### GET always allowed

```csharp
[TestMethod] GET_EntityDefinitions_Allowed()             // → null
[TestMethod] GET_GlobalOptionSetDefinitions_Allowed()    // → null
[TestMethod] GET_Roles_Allowed()                         // → null
[TestMethod] GET_WebResources_Allowed()                  // → null
```

### POST custom actions (must remain ALLOWED)

```csharp
[TestMethod] POST_CustomAction_Allowed()                 // → null (new_MyCustomAction)
[TestMethod] POST_WhoAmI_Allowed()                       // → null
```

---

## Verification

1. Run `/unit-test` workflow — ALL tests must pass
2. Manual MCP test: `PATCH EntityDefinitions(guid)` → BLOCKED  
3. Manual MCP test: `PATCH accounts(guid)` → ALLOWED (dry-run)
4. Manual MCP test: `GET EntityDefinitions` → ALLOWED
5. Manual MCP test: `POST WhoAmI` → ALLOWED

---

## Coverage Map: Blocked Endpoints → Specialized Tools

| Blocked Endpoint | Redirect Tool | Coverage |
|---|---|---|
| `EntityDefinitions` | `upsert_table` / `upsert_column` | Full CRUD + irreversible flag warnings |
| `RelationshipDefinitions` | `upsert_relationship` | Create/update 1:N, N:N |
| `GlobalOptionSetDefinitions` | `manage_choice` | List/detail/create/update + add/remove options |
| `OptionSetDefinitions` | `manage_choice` / `upsert_column` | Global via manage_choice, local via upsert_column |
| `systemforms` | `manage_form` / `build_form_xml` | Read/backup/restore + XSD validation |
| `savedqueries` / `userqueries` | `manage_view` | Read/backup/restore + XSD validation |
| `sitemaps` | `manage_sitemap` | Read/backup/restore + XSD validation |
| `environmentvariable*` | `manage_environment_variable` | Atomic def+value, solution-aware |
| `webresources` | `manage_webresource` | List/detail/create/update/delete + publish |
| `roles` | `manage_role` | List/detail/CRUD/copy/assign/unassign |
| `publishxml/publishallxml` | `publish_customizations` | Entity-specific or all |
| `solutions` / `solutioncomponents` | _(UI/PAC CLI)_ | No DevKit tool — by design |
| `pluginassemblies` / `plugintypes` / `sdkmessageprocessingsteps` | _(DevKit server cmd)_ | Managed by CLI server command |
| `workflows` / `processes` | _(UI)_ | Managed via Power Apps UI |
| `canvasapps` / `appmodules` | _(UI)_ | Managed via Power Apps Studio |
| `connectionreferences` | _(UI)_ | Managed via Power Apps UI |
