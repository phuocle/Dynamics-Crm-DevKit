# Plan: Add `add_event` and `add_library` Operations to `build_form_xml`

## Goal

Enhance the `build_form_xml` MCP tool to support adding form event handlers (onload, onsave, onchange) and library references to FormXML. This eliminates the need for AI agents to manually edit raw FormXML for event operations.

## Target File

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/BuildFormXmlTool.cs`

## XSD Reference (FormXml.xsd)

The XSD already fully supports events and libraries:

```xml
<!-- Form level: <form><formLibraries> and <form><events> -->
<xs:element name="events" type="FormXmlEventsType" />        <!-- line 384 -->
<xs:element name="formLibraries" type="FormXmlLibraryType" /> <!-- line 385 -->
```

### Key Types

| XSD Type | Elements | Attributes |
|---|---|---|
| `FormXmlLibraryType` | `<Library>` (max 50) | `name` (required), `libraryUniqueId` (required) |
| `FormXmlEventsType` | `<event>` (unbounded) | `name`, `eventType`, `active`, `application`, `attribute`, `control` |
| `FormXmlHandlerType` | Inside `<Handlers>` (max 50) | `functionName` (required), `libraryName` (required), `handlerUniqueId` (required), `enabled`, `passExecutionContext`, `parameters` |
| `CrmEventType` | enum | `DataEvent`, `ControlEvent` |

---

## Operation 1: `add_library`

### Purpose

Add a web resource library reference to `<form><formLibraries>`.

### JSON Schema

```json
{
  "action": "add_library",
  "library_name": "new_/js/account.js"
}
```

### Parameters

| Parameter | Required | Default | Description |
|---|---|---|---|
| `library_name` | Yes | - | Web resource name (e.g., `new_/js/account.js`) |

### Logic

1. Find or create `<formLibraries>` under `<form>`
2. Check if library already exists (by `name` attribute) -- **skip if duplicate**
3. Generate new GUID for `libraryUniqueId`
4. Add `<Library name="new_/js/account.js" libraryUniqueId="{guid}" />`

### Generated XML

```xml
<formLibraries>
  <!-- existing libraries... -->
  <Library name="new_/js/account.js" libraryUniqueId="{b1c2d3e4-...}" />
</formLibraries>
```

### Validation

- `library_name` must not be empty
- No Dataverse query needed (tool is read-only builder)
- Duplicate detection by `name` attribute

---

## Operation 2: `add_event`

### Purpose

Add an event handler (onload, onsave, onchange, etc.) to the form.

### JSON Schema

```json
{
  "action": "add_event",
  "event_name": "onload",
  "function_name": "accOnload",
  "library_name": "new_/js/account.js",
  "pass_execution_context": false,
  "parameters": "",
  "enabled": true,
  "target": "form"
}
```

### Parameters

| Parameter | Required | Default | Description |
|---|---|---|---|
| `event_name` | Yes | - | Event name: `onload`, `onsave`, `onchange`, `onrecordselect`, `ontabstatechange` |
| `function_name` | Yes | - | JavaScript function name to call |
| `library_name` | Yes | - | Web resource containing the function |
| `pass_execution_context` | No | `false` | Pass execution context to handler |
| `parameters` | No | `""` | Additional parameters string |
| `enabled` | No | `true` | Whether handler is enabled |
| `target` | No | `"form"` | Where to attach: `"form"`, `"tab:{tab_name}"`, `"field:{field_name}"` |

### Logic

1. **Auto-add library**: If `library_name` is not in `<formLibraries>`, add it automatically (same as `add_library`)
2. Determine target scope:
   - `"form"` -> `<form><events>`
   - `"tab:{name}"` -> `<tab name="..."><events>`
   - `"field:{name}"` -> find the cell containing the field control, add `<events>` to the cell
3. Find or create `<events>` element at target scope
4. Find or create `<event>` with matching `name` attribute
5. Determine `eventType`:
   - `onchange` on a field -> `DataEvent`, set `attribute` attribute
   - `onload`, `onsave` -> `ControlEvent`
   - `ontabstatechange` on tab -> `ControlEvent`
6. Find or create `<Handlers>` inside the event
7. Check for duplicate handler (same `functionName` + `libraryName`) -- **skip if duplicate**
8. Generate new GUID for `handlerUniqueId`
9. Add `<Handler>` element
10. Add library dependency inside handler

### Generated XML (form-level onload)

```xml
<!-- Auto-added to formLibraries if not present -->
<formLibraries>
  <Library name="new_/js/account.js" libraryUniqueId="{lib-guid}" />
</formLibraries>

<!-- Added to form events -->
<events>
  <event name="onload" application="false" active="true" eventType="ControlEvent">
    <Handlers>
      <Handler functionName="accOnload" libraryName="new_/js/account.js"
               handlerUniqueId="{handler-guid}" enabled="true"
               passExecutionContext="false" parameters="">
        <dependencies>
          <dependency id="{lib-guid}" />
        </dependencies>
      </Handler>
    </Handlers>
  </event>
</events>
```

### Generated XML (field-level onchange)

```json
{
  "action": "add_event",
  "event_name": "onchange",
  "function_name": "onNameChange",
  "library_name": "new_/js/account.js",
  "target": "field:name"
}
```

```xml
<event name="onchange" application="false" active="true"
       eventType="DataEvent" attribute="name">
  <Handlers>
    <Handler functionName="onNameChange" libraryName="new_/js/account.js"
             handlerUniqueId="{handler-guid}" enabled="true"
             passExecutionContext="false" />
  </Handlers>
</event>
```

### Validation

- `event_name` must be a valid event name
- `function_name` must not be empty
- `library_name` must not be empty
- For `target: "field:xxx"` -- field must exist in the form
- For `target: "tab:xxx"` -- tab must exist in the form
- Duplicate handler detection (same function + library on same event)

---

## Implementation Steps

### Step 1: Update Description and Switch Statement

In `BuildFormXmlTool.cs`:

1. Update the `Description` string to document `add_library` and `add_event` operations
2. Add two new cases in the switch statement (line 215-231):

```csharp
case "add_library":
    var libSummary = ExecuteAddLibrary(formDoc, op);
    opSummaries.Add(libSummary);
    break;
case "add_event":
    var eventSummary = ExecuteAddEvent(formDoc, op);
    opSummaries.Add(eventSummary);
    break;
```

### Step 2: Implement `ExecuteAddLibrary`

New method (~30 lines):
- Parse `library_name` from operation
- Find or create `<formLibraries>` element
- Check duplicate by `name` attribute
- Generate GUID, add `<Library>` element
- Return summary string

### Step 3: Implement `ExecuteAddEvent`

New method (~80-100 lines):
- Parse all parameters from operation
- Auto-call `ExecuteAddLibrary` logic if library not present
- Determine target scope (form/tab/field)
- Find or create `<events>` at target
- Find or create `<event>` with matching name
- Set correct `eventType` and attributes
- Check duplicate handler
- Generate GUID, add `<Handler>` element with dependencies
- Return summary string

### Step 4: Add Helper Methods

- `EnsureLibrary(formDoc, libraryName)` -- shared logic between add_library and add_event
- `FindOrCreateEvents(XElement parent)` -- find or create events element
- `FindOrCreateEvent(XElement events, string eventName, string eventType, string attribute)` -- find or create specific event

### Step 5: Update `CollectFieldNames`

The existing `CollectFieldNames` method collects field names from operations for metadata validation. For `add_event` with `target: "field:xxx"`, we need to collect that field name too (optional -- only if we want to validate the field exists on the entity).

### Step 6: Update Tool Description

Update the McpServerTool Description to include:
- `add_library` and `add_event` in the operations list
- Example JSON for both operations
- Tips for event handling workflow

### Step 7: Update Documentation

Update `mcp-done/07.build_form_xml.md` to document the new operations.

---

## Example: Full Workflow

```
AI receives: "Add onload event to account form, function accOnload, file c:\path\to\account.js"

Step 1: AI reads local file, greps for "accOnload" -> confirmed exists
Step 2: AI calls manage_web_resources(action="list", name_filter="account", type_filter="js")
        -> Returns: name="new_/js/account.js"
Step 3: AI calls get_forms(entity="account", form_type=2)
        -> Returns: form_id="xxx-yyy"
Step 4: AI calls build_form_xml(entity="account", form_id="xxx-yyy", operations=[
          {"action": "add_library", "library_name": "new_/js/account.js"},
          {"action": "add_event", "event_name": "onload",
           "function_name": "accOnload", "library_name": "new_/js/account.js"}
        ])
        -> Returns: complete modified FormXML
Step 5: AI calls update_form(formxml=...) -> XSD validate -> backup -> write -> publish
```

---

## Event Types Quick Reference

| Event | eventType | Where | attribute |
|---|---|---|---|
| `onload` | `ControlEvent` | form, tab | - |
| `onsave` | `ControlEvent` | form | - |
| `onchange` | `DataEvent` | form (with attribute) | field logical name |
| `ontabstatechange` | `ControlEvent` | tab | - |
| `onrecordselect` | `ControlEvent` | subgrid cell | - |

---

## Risk Assessment

| Risk | Mitigation |
|---|---|
| Malformed event XML | XSD validation in `update_form` catches errors before write |
| Duplicate library/handler | Explicit duplicate detection -- skip if already exists |
| Wrong eventType | Auto-determine based on event_name and target |
| Missing library reference | `add_event` auto-adds library if not present |
| Field not on form (onchange) | Validate field exists in current FormXML |

## Estimated Effort

| Component | Lines | Complexity |
|---|---|---|
| `ExecuteAddLibrary` | ~30 | Low |
| `ExecuteAddEvent` | ~80-100 | Medium |
| Helper methods | ~40 | Low |
| Description update | ~20 | Low |
| Error messages | ~15 | Low |
| **Total** | **~185-205** | **Medium** |
