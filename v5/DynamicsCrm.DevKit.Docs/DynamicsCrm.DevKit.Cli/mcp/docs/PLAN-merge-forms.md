# PLAN: Merge get_forms + upsert_form => manage_form

**Date:** 2026-04-06
**Status:** Ready to implement
**Impact:** Tool count -1 (get_forms + upsert_form => manage_form)

---

## Overview

Merge `GetFormsTool.cs` + `UpsertFormTool.cs` into a single `ManageFormTool.cs` with `manage_form` tool name (singular).

**Key requirement:** The tool description must guide AI to use `build_form_xml` first to build correct FormXML before calling `manage_form(action='update')`.

### Files to CREATE

| # | File | Description |
|---|------|-------------|
| 1 | `Mcp/Tools/ManageFormTool.cs` | New merged tool |

### Files to DELETE after done

| # | File |
|---|------|
| 1 | `Mcp/Tools/GetFormsTool.cs` |
| 2 | `Mcp/Tools/UpsertFormTool.cs` |

### Files to KEEP (no changes)

| # | File | Reason |
|---|------|--------|
| 1 | `Mcp/Tools/Models/StructuredResults.cs` | `UpsertFormResult` class already exists, reuse as-is |

### Files to UPDATE after done

| # | File | Change |
|---|------|--------|
| 1 | `Mcp/McpServerHost.cs` | Remove `GetFormsTool` + `UpsertFormTool`, add `ManageFormTool` = "standard" |
| 2 | `Mcp/Tools/BuildFormXMLTool.cs` | 6 refs: `upsert_form` → `manage_form`, `get_forms` → `manage_form` |
| 3 | `Mcp/Tools/ExecuteWebApiTool.cs` | 2 refs: `upsert_form` → `manage_form` |
| 4 | `Mcp/Resources/InstructionResources.cs` | 4 refs: `get_forms` → `manage_form`, `upsert_form` → `manage_form` |
| 5 | `Mcp/Tools/GetDataverseCommandsTool.cs` | 1 ref: `get_forms` → `manage_form` |
| 6 | `Mcp/Tools/ManageWebResourceTool.cs` | 1 ref: `get_forms` → `manage_form` |
| 7 | `Mcp/Tools/UpsertTableTool.cs` | 1 ref: `upsert_form` → `manage_form` |
| 8 | `AGENTS.md` | Update tool list: remove `get_forms`, `upsert_form`, add `manage_form`. Update tool count 30 → 29 |

---

## Implementation Steps (5 steps, do ONE at a time)

### STEP 1: Create ManageFormTool.cs — Part A (skeleton + dispatch + list + detail)

Create file `DynamicsCrm.DevKit.Cli\Mcp\Tools\ManageFormTool.cs`.

**Class structure:**

```
[McpServerToolType]
public class ManageFormTool
{
    private readonly ServiceClient _serviceClient;
    private static XmlSchemaSet _cachedSchemaSet;
    private static readonly object _schemaLock = new();
    constructor(ServiceClient)

    [McpServerTool] manage_form method (action dispatch)

    // READ actions
    private CallToolResult HandleList(...)
    private CallToolResult FindFormsByName(...)
    private CallToolResult HandleDetail(...)
    private string GetFormDetail(Guid)

    // List/Detail helpers
    private static readonly int[] ValidFormTypes
    private static QueryExpression BuildListQuery(...)
    private static string FormatFormList(...)
    private static string MapFormType(int)
    private static string PrettyPrintXml(string)
    private static string EscapeTab(string)
    private static CallToolResult TextResult(string)
    private static CallToolResult ErrorResult(string)
}
```

**MCP Tool Attribute:**

```csharp
[McpServerTool(Name = "manage_form", Title = "List, inspect, update, rename, or undo a Dataverse form",
    Destructive = true, ReadOnly = false, Idempotent = false,
    UseStructuredContent = true, OutputSchemaType = typeof(UpsertFormResult)),
Description(
    "Retrieve and modify form definitions for a Dataverse entity.\n\n" +

    "FIVE ACTIONS:\n" +
    "- action='list': List all active forms with name, type, status. Optional: form_type, include_formxml\n" +
    "- action='detail': Full FormXML and metadata for one form. Requires form_id\n" +
    "- action='update': Modify FormXML. Requires form_id + formxml\n" +
    "- action='rename': Change display name. Requires form_id + form_name\n" +
    "- action='undo': Restore from backup. Requires form_id + formxml (= backup file path)\n\n" +

    "WORKFLOW: build_form_xml (build correct FormXML) → manage_form(action='update', formxml=<result>)\n" +
    "Tool auto-handles: backup → validate XSD → update → publish. Undo path in every response.\n\n" +

    "IMPORTANT: To add fields/sections/tabs/events to a form, ALWAYS use build_form_xml first.\n" +
    "build_form_xml auto-resolves classid GUIDs, validates field names, and generates correct XML.\n" +
    "Do NOT manually construct FormXML — use build_form_xml, then pass its output to manage_form(action='update').\n\n" +

    "SAFETY: auto-backup before changes, XSD blocks invalid XML, backup failure blocks update.\n\n" +

    "TIPS:\n" +
    "- form_type=2 for main forms only. FormXML: tabs > columns > sections > rows > cells > controls\n" +
    "- form_name: if exactly 1 match, returns detail automatically\n" +
    "- Read schema://formxml for XSD. Read docs://instructions_for_formxml for rules\n" +
    "- Set auto_publish=false when batching, then call publish_customizations once")]
```

**Parameters:**

```csharp
public CallToolResult manage_form(
    [Description("The action to perform: 'list', 'detail', 'update', 'rename', or 'undo'.")] string action,
    [Description("Entity logical name (e.g., 'account'). Use get_tables if unsure.")] string entity_name,
    [Description("GUID of a form. Required for detail/update/rename/undo. Empty for list.")] string form_id = "",
    [Description("Filter by name (contains match). 1 match = auto-detail. Ignored if form_id set.")] string form_name = "",
    [Description("Filter by type: 2=Main, 5=Mobile, 6=QuickView, 7=QuickCreate. 0 = all.")] int form_type = 0,
    [Description("Include FormXML in list mode (default: false). Detail mode always includes it.")] bool include_formxml = false,
    [Description("For 'update': FormXML. For 'undo': backup file path. Ignored for list/detail/rename.")] string formxml = "",
    [Description("Validate against XSD before writing (default: true). Blocks if invalid.")] bool validate = true,
    [Description("Backup current FormXML before overwriting (default: true). Backup failure blocks update.")] bool backup = true,
    [Description("Publish after changes (default: true). Set false when batching.")] bool auto_publish = true)
```

**Action dispatch:**

```
1. Validate action not empty -> error with valid values list
2. Validate entity_name not empty -> error
3. Normalize: action.Trim().ToLowerInvariant(), entity_name.Trim().ToLowerInvariant()
4. try/catch wrapping switch:
   "list"   => HandleList(entityName, form_name, form_type, include_formxml)
   "detail" => HandleDetail(entityName, form_id, form_name)
   "update" => HandleUpdate(entityName, form_id, formxml, validate, backup, auto_publish)
   "rename" => HandleRename(entityName, form_id, form_name, backup, auto_publish)
   "undo"   => HandleUndo(entityName, form_id, formxml, validate, auto_publish)
   _        => ErrorResult with valid actions list
5. catch FaultException<OrganizationServiceFault> -> detailed error with ErrorCode
6. catch Exception -> generic error
```

**Source:** Copy HandleList, FindFormsByName, HandleDetail, GetFormDetail from current ManageFormTool.cs (already written). Copy helpers: ValidFormTypes, BuildListQuery, FormatFormList, MapFormType, PrettyPrintXml, EscapeTab, TextResult, ErrorResult.

---

### STEP 2: Add write actions — Part B (HandleUpdate)

Add `HandleUpdate` method after HandleDetail. Copy logic from `UpsertFormTool.UpdateFormXml` (lines 107-278).

**HandleUpdate logic:**
1. Validate form_id not empty, parse GUID
2. Validate formxml not empty
3. Retrieve current form
4. Validate entity matches
5. Strip XML declaration from input
6. Backup current FormXML (if backup=true, fail-safe)
7. Validate new FormXML against XSD (if validate=true)
8. Update form record in Dataverse
9. Publish entity (if auto_publish=true)
10. Return success with backup path and rollback info

**Key change in rollback info:** `upsert_form` → `manage_form with action='undo'`

---

### STEP 3: Add write actions — Part C (HandleRename + HandleUndo)

**HandleRename** — copy from `UpsertFormTool.RenameForm` (lines 282-403):
1. Validate form_name not empty
2. Retrieve current form, validate entity
3. Check for duplicate name
4. Backup (fail-safe)
5. Rename
6. Publish
7. Return success

**HandleUndo** — copy from `UpsertFormTool.UndoForm` (lines 407-582):
1. Read backup file (JSON)
2. Verify form exists, validate entity
3. Validate restored FormXML against XSD
4. Update form with restored FormXML (NO backup)
5. Publish
6. Return success

---

### STEP 4: Add shared helpers — Part D

Add these methods after HandleUndo. Copy from `UpsertFormTool.cs`:

- `RetrieveForm(Guid)` — retrieve form by ID
- `FindFormByName(string, string, int?, Guid?)` — find duplicate names
- `SaveBackup(string, Guid, string, string)` — save backup JSON
- `ValidateFormXml(string)` — XSD validation
- `GetSchemaSet()` — load cached XSD schemas
- `IsSchemaEvolutionError(string)` — detect evolution errors
- `BuildSuccessText(...)` — format success message
- `AppendRollbackInfo(...)` — append rollback instructions (**update refs**: `upsert_form` → `manage_form with action='undo'`)
- `StripXmlDeclaration(string)` — strip XML declaration
- `FormBackup` inner class — JSON serialization model

---

### STEP 5: Delete old files + Update references + Build

1. Delete `Mcp/Tools/GetFormsTool.cs`
2. Delete `Mcp/Tools/UpsertFormTool.cs`
3. Update `Mcp/McpServerHost.cs`:
   - Remove: `[nameof(GetFormsTool)] = "standard"` (line 39)
   - Remove: `[nameof(UpsertFormTool)] = "advanced"` (line 58)
   - Add: `[nameof(ManageFormTool)] = "standard"`
   - Update comments: basic count, standard count
4. Update string references in 6 files:
   - `BuildFormXMLTool.cs`: `upsert_form` → `manage_form`, `get_forms` → `manage_form`
   - `ExecuteWebApiTool.cs`: `upsert_form` → `manage_form`
   - `InstructionResources.cs`: `get_forms` → `manage_form`, `upsert_form` → `manage_form`
   - `GetDataverseCommandsTool.cs`: `get_forms` → `manage_form`
   - `ManageWebResourceTool.cs`: `get_forms` → `manage_form`
   - `UpsertTableTool.cs`: `upsert_form` → `manage_form`
5. Update `AGENTS.md`: tool list + tool count (30 → 29)
6. Build CLI using `/build-cli` workflow
7. Verify `devkit --version` works

---

## Key Differences from Original Tools

| Aspect | get_forms (old) | upsert_form (old) | manage_form (new) |
|--------|----------------|-------------------|-------------------|
| Return type | `string` | `CallToolResult` | `CallToolResult` for ALL actions |
| list/detail | Implicit via form_id | N/A | Explicit `action='list'` / `action='detail'` |
| form_name filter | Supported | Only for rename | Supported + auto-detail on 1 match |
| MCP annotations | ReadOnly=true | Destructive=true | Destructive=true (covers all actions) |
| Description refs | "use upsert_form" | "use get_forms" | Self-referencing + "use build_form_xml first" |
| AI guidance | None | None | Explicit: "ALWAYS use build_form_xml first" |

---

## String Reference Update Map

| File | Old String | New String |
|------|-----------|------------|
| `BuildFormXMLTool.cs:32` | `returns XML for upsert_form` | `returns XML for manage_form` |
| `BuildFormXMLTool.cs:37` | `Use upsert_form to write it` | `Use manage_form to write it` |
| `BuildFormXMLTool.cs:53` | `use upsert_form to apply` | `use manage_form(action='update') to apply` |
| `BuildFormXMLTool.cs:56` | `Use get_forms to find` | `Use manage_form with action='list' to find` |
| `BuildFormXMLTool.cs:105` | `Use get_forms with entity_name` | `Use manage_form with action='list' and entity_name` |
| `BuildFormXMLTool.cs:230` | `Pass this FormXML to upsert_form(entity_name=` | `Pass this FormXML to manage_form(action='update', entity_name=` |
| `ExecuteWebApiTool.cs:36` | `use upsert_form` | `use manage_form` |
| `ExecuteWebApiTool.cs:167` | `"upsert_form"` | `"manage_form"` |
| `InstructionResources.cs:21` | `using get_forms with` | `using manage_form with action='list' and` |
| `InstructionResources.cs:41` | `using get_forms with` | `using manage_form with action='detail' and` |
| `InstructionResources.cs:94` | `upsert_form tool` | `manage_form tool` |
| `InstructionResources.cs:95` | `upsert_form auto-handles` | `manage_form auto-handles` |
| `GetDataverseCommandsTool.cs:103` | `get_forms (form layout)` | `manage_form (form layout)` |
| `ManageWebResourceTool.cs:79` | `get_forms (inspect form structure)` | `manage_form (inspect form structure)` |
| `UpsertTableTool.cs:35` | `build_form_xml + upsert_form` | `build_form_xml + manage_form` |

---

## Checklist

- [ ] Step 1: ManageFormTool.cs Part A (skeleton + list + detail)
- [ ] Step 2: ManageFormTool.cs Part B (HandleUpdate)
- [ ] Step 3: ManageFormTool.cs Part C (HandleRename + HandleUndo)
- [ ] Step 4: ManageFormTool.cs Part D (shared helpers)
- [ ] Step 5: Delete old files + Update references + Build
- [ ] Build succeeds (`/build-cli`)
- [ ] `devkit --version` shows correct version
