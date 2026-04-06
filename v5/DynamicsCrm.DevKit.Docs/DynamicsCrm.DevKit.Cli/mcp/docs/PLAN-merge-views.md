# PLAN: Merge get_views + upsert_view => manage_view

**Date:** 2026-04-06
**Status:** Ready to implement
**Impact:** Tool count -1 (get_views + upsert_view => manage_view)

---

## Overview

Merge `GetViewsTool.cs` + `UpsertViewTool.cs` into a single `ManageViewTool.cs` with `manage_view` tool name (singular).

### Files to CREATE

| # | File | Description |
|---|------|-------------|
| 1 | `Mcp/Tools/ManageViewTool.cs` | New merged tool |

### Files to DELETE after done

| # | File |
|---|------|
| 1 | `Mcp/Tools/GetViewsTool.cs` |
| 2 | `Mcp/Tools/UpsertViewTool.cs` |

### Files to KEEP (no changes)

| # | File | Reason |
|---|------|--------|
| 1 | `Mcp/Tools/Helper/ViewBackupHelper.cs` | Already extracted |
| 2 | `Mcp/Tools/Helper/ViewXmlHelper.cs` | Already extracted |
| 3 | `Mcp/Tools/Models/StructuredResults.cs` | `UpsertViewResult` class already exists, reuse as-is |

### Files to UPDATE after done

| # | File | Change |
|---|------|--------|
| 1 | `AGENTS.md` | Update tool list: remove `get_views`, `upsert_view`, add `manage_view`. Update tool count from 32 to 31 |

---

## Implementation Steps (5 steps, do ONE at a time)

### STEP 1: Create ManageViewTool.cs — Part A (skeleton + dispatch + list + detail)

Create file `DynamicsCrm.DevKit.Cli\Mcp\Tools\ManageViewTool.cs`.

**Class structure:**

```
[McpServerToolType]
public class ManageViewTool
{
    private readonly ServiceClient _serviceClient;
    constructor(ServiceClient)

    [McpServerTool] manage_view method (action dispatch)

    // READ actions
    private CallToolResult HandleList(...)
    private CallToolResult HandleDetail(...)

    // Helpers for list/detail
    private DataCollection<Entity> GetSystemViews(...)
    private DataCollection<Entity> GetPersonalViews(...)
    private Entity TryGetSystemView(Guid)
    private Entity TryGetPersonalView(Guid)
    private static void AppendViewXml(...)
    private static string MapQueryType(int)
    private static string EscapeTab(string)
    private static CallToolResult ErrorResult(string)
}
```

**MCP Tool Attribute:**

```csharp
[McpServerTool(Name = "manage_view", Title = "List, inspect, create, update, rename, or undo a Dataverse view",
    Destructive = true, ReadOnly = false, Idempotent = false,
    UseStructuredContent = true, OutputSchemaType = typeof(UpsertViewResult)),
Description(
    "Retrieve view (saved query) definitions for a Dataverse entity.\n\n" +

    "SIX ACTIONS:\n" +
    "- action='list': List all active views with name, type, status. Optional: query_type, include_fetchxml, include_personal\n" +
    "- action='detail': Full FetchXML, LayoutXML, and metadata for one view. Requires view_id\n" +
    "- action='create': New Public view. Requires view_name + entity_name + layoutxml\n" +
    "- action='update': Modify LayoutXML/FetchXML. Requires view_id + layoutxml\n" +
    "- action='rename': Change display name. Requires view_id + view_name\n" +
    "- action='undo': Restore from backup files. Requires view_id + layoutxml (= backup path)\n\n" +

    "WORKFLOW: manage_view(list) → modify XMLs (follow docs://instructions_for_views) → manage_view(update)\n" +
    "Tool auto-handles: backup → validate XSD → sync-check → update → publish. Undo path in every response.\n\n" +

    "SYNC RULE: Every <attribute> in FetchXML MUST have a matching <cell> in LayoutXML and vice versa. Tool validates and blocks if out of sync.\n\n" +

    "SAFETY: auto-backup before changes, sync+XSD validation blocks invalid XML, backup failure blocks update.\n\n" +

    "TIPS:\n" +
    "- querytype: 0=Public (user sees), 4=QuickFind (search columns), 64=SubGrid\n" +
    "- view_name: if exactly 1 match, returns detail automatically\n" +
    "- Read docs://instructions_for_views for sync rules. Read schema://layoutxml + schema://fetchxml for XSD\n" +
    "- Set auto_publish=false when batching, then call publish_customizations once")]
```

**Parameters for manage_view method:**

```csharp
public CallToolResult manage_view(
    [Description("The action to perform: 'list', 'detail', 'create', 'update', 'rename', or 'undo'."
    )] string action,
    [Description("Entity logical name (e.g., 'account'). Use get_metadata_entities if unsure."
    )] string entity_name,
    [Description("GUID of a view. Required for detail/update/rename/undo. Empty for list/create."
    )] string view_id = "",
    [Description("Filter by name (contains match). 1 match = auto-detail. Ignored if view_id set."
    )] string view_name = "",
    [Description("Filter by type: 0=Public, 1=Lookup, 4=QuickFind, 64=SubGrid. -1 = all."
    )] int query_type = -1,
    [Description("Include FetchXML/LayoutXML in list mode (default: false). Detail mode always includes."
    )] bool include_fetchxml = false,
    [Description("Include personal views (userquery) owned by current user. Default: false."
    )] bool include_personal = false,
    [Description("For 'update'/'create': LayoutXML. For 'undo': layout backup path. Ignored for list/detail/rename."
    )] string layoutxml = "",
    [Description("FetchXML. Empty = keep existing (update) or auto-generate (create). For 'undo': fetch backup path."
    )] string fetchxml = "",
    [Description("Validate XMLs and check FetchXML<>LayoutXML sync (default: true). Blocks if invalid."
    )] bool validate = true,
    [Description("Backup current XMLs before overwriting (default: true). Backup failure blocks update."
    )] bool backup = true,
    [Description("Publish after changes (default: true). Set false when batching."
    )] bool auto_publish = true)
```

**Action dispatch logic (in manage_view method body):**

```
1. Validate action not empty -> error with valid values list
2. Validate entity_name not empty -> error
3. Normalize: action.Trim().ToLowerInvariant(), entity_name.Trim().ToLowerInvariant()
4. try/catch wrapping switch:
   "list"   => HandleList(entityName, view_name, query_type, include_fetchxml, include_personal)
   "detail" => HandleDetail(entityName, view_id, view_name)
   "create" => HandleCreate(entityName, view_name, layoutxml, fetchxml, validate, auto_publish)
   "update" => HandleUpdate(entityName, view_id, layoutxml, fetchxml, validate, backup, auto_publish)
   "rename" => HandleRename(entityName, view_id, view_name, backup, auto_publish)
   "undo"   => HandleUndo(entityName, view_id, layoutxml, fetchxml, validate, auto_publish)
   _        => ErrorResult with valid actions list
5. catch FaultException<OrganizationServiceFault> -> detailed error
6. catch Exception -> generic error
```

**HandleList logic:**

- NEW: If `view_name` is not empty, search views by name (contains match):
  - 0 matches: return "no views found matching name"
  - 1 match: auto-switch to detail mode (call HandleDetail with that view's ID)
  - 2+ matches: show only the matching views (filter the list)
- Otherwise: same logic as current `ListViews` in GetViewsTool.cs
- Wrap the string result in `CallToolResult` with `TextContentBlock`

**HandleDetail logic:**

- If view_id empty AND view_name empty: return error "view_id or view_name required for detail"
- If view_id provided: parse GUID, get detail (same as current `GetViewDetail` in GetViewsTool.cs)
- If view_name provided (no view_id): search by name, 1 match = detail, 0/2+ = error
- Wrap the string result in `CallToolResult` with `TextContentBlock`

**Data helpers:** Copy exactly from GetViewsTool.cs:
- `GetSystemViews`, `GetPersonalViews`, `TryGetSystemView`, `TryGetPersonalView`
- `AppendViewXml`, `MapQueryType`, `EscapeTab`

**ErrorResult:** Same pattern as UpsertViewTool.cs:
```csharp
private static CallToolResult ErrorResult(string message) => new()
{
    Content = [new TextContentBlock { Text = message }],
    IsError = true
};
```

**Usings needed:**

```csharp
using Microsoft.Crm.Sdk.Messages;
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Xml.Linq;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
```

---

### STEP 2: Add write actions to ManageViewTool.cs — Part B (update + create)

Add these methods to ManageViewTool class (use Edit tool to append after HandleDetail):

**HandleUpdate** — copy logic from `UpsertViewTool.UpdateViewXml`, rename:
- Parameters: `(string entityName, string viewId, string layoutxml, string fetchxml, bool validate, bool backup, bool auto_publish)`
- Validate view_id not empty, parse GUID
- Validate layoutxml not empty
- Same logic as current `UpdateViewXml` in UpsertViewTool.cs

**HandleCreate** — copy logic from `UpsertViewTool.CreateView`, rename:
- Parameters: `(string entityName, string viewName, string layoutxml, string fetchxml, bool validate, bool auto_publish)`
- Same logic as current `CreateView` in UpsertViewTool.cs

---

### STEP 3: Add write actions to ManageViewTool.cs — Part C (rename + undo)

Add these methods to ManageViewTool class (use Edit tool to append after HandleCreate):

**HandleRename** — copy logic from `UpsertViewTool.RenameView`, rename:
- Parameters: `(string entityName, string viewId, string viewName, bool backup, bool auto_publish)`
- Validate view_id not empty, parse GUID
- Same logic as current `RenameView` in UpsertViewTool.cs

**HandleUndo** — copy logic from `UpsertViewTool.UndoView`, rename:
- Parameters: `(string entityName, string viewId, string layoutBackupPath, string fetchBackupPath, bool validate, bool auto_publish)`
- Validate view_id not empty, parse GUID
- Validate layoutxml not empty
- Same logic as current `UndoView` in UpsertViewTool.cs

---

### STEP 4: Add shared helpers to ManageViewTool.cs — Part D

Add these methods to ManageViewTool class (use Edit tool to append after HandleUndo):

Copy from UpsertViewTool.cs:
- `ValidationResult` struct
- `RunValidation` static method
- `BuildValidationBlockedResult` static method
- `BuildServerValidationBlockedResult` static method
- `ValidateFetchXmlExpression` instance method
- `TryPublish` instance method
- `FindViewByName` instance method
- `RetrieveView` instance method (for update/rename/undo operations)

---

### STEP 5: Delete old files + Update AGENTS.md

1. Delete `DynamicsCrm.DevKit.Cli\Mcp\Tools\GetViewsTool.cs`
2. Delete `DynamicsCrm.DevKit.Cli\Mcp\Tools\UpsertViewTool.cs`
3. Update `AGENTS.md`:
   - Tool list: remove `get_views`, `upsert_view`, add `manage_view`
   - Tool count: 32 -> 31
   - MCP Resources: update cross-references if any mention `get_views` or `upsert_view`
4. Build CLI using `/build-cli` workflow
5. Verify `devkit --version` works

---

## Key Differences from Original Tools

| Aspect | get_views (old) | upsert_view (old) | manage_view (new) |
|--------|----------------|-------------------|-------------------|
| Return type | `string` | `CallToolResult` | `CallToolResult` for ALL actions |
| list/detail | Implicit via view_id | N/A | Explicit `action='list'` / `action='detail'` |
| view_name filter | Not supported | Only for create/rename | NEW: contains filter + auto-detail on 1 match |
| MCP annotations | ReadOnly=true | Destructive=true | Destructive=true (covers all actions) |
| Description refs | "use upsert_view" | "use get_views" | Self-referencing: "use manage_view(list)" |

---

## view_name Auto-Detail Logic (NEW feature)

```
HandleList called with view_name="Active Accounts":
  1. Query system views WHERE name LIKE '%Active Accounts%'
  2. If 0 matches → return "No views found matching 'Active Accounts'"
  3. If 1 match → auto-call HandleDetail with that view's GUID (return detail instead of list)
  4. If 2+ matches → return filtered list (only matching views)

HandleDetail called with view_name="Active Accounts" (no view_id):
  1. Query system views WHERE name LIKE '%Active Accounts%'
  2. If 0 matches → error "No view found matching name"
  3. If 1 match → return detail
  4. If 2+ matches → error "Multiple views match, provide view_id" + list the matches
```

---

## Description Cross-References to Update

In the merged tool description, update these references:
- "use get_views" → "use manage_view with action='list'"
- "use upsert_view" → "use manage_view with action='update'"
- "prepare for upsert_view" → removed (self-contained now)

In ViewBackupHelper.cs line 77: `"Call upsert_view with..."` → update to `"Call manage_view with action='undo'..."`

---

## Checklist

- [ ] Step 1: ManageViewTool.cs Part A (skeleton + list + detail)
- [ ] Step 2: ManageViewTool.cs Part B (update + create)
- [ ] Step 3: ManageViewTool.cs Part C (rename + undo)
- [ ] Step 4: ManageViewTool.cs Part D (shared helpers)
- [ ] Step 5: Delete old files + Update AGENTS.md
- [ ] Build succeeds (`/build-cli`)
- [ ] `devkit --version` shows correct version
