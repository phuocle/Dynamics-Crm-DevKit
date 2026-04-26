# PRE-TASK: Refactor `BuildFormXMLTool.cs` trước khi merge vào `manage_form`

## Mục đích

File `BuildFormXMLTool.cs` hiện có **2093 dòng**. Nếu merge thẳng logic vào
`ManageFormTool.cs` (1211 dòng), file kết quả sẽ **~3300+ dòng** — vượt quá
giới hạn context window đáng tin cậy của AI và gây ra lỗi copy/paste.

**Phải chạy task này TRƯỚC khi chạy `plan_merge_build_form_xml_into_manage_form.md`.**

> Tham chiếu tổ chức: `Mcp/Tools/Ribbon/` (theo `PRE-plan_merge_build_ribbon_into_manage_ribbon.md`) — split tool to thành nhiều helper theo domain. Plan này áp dụng cùng pattern cho Form.

---

## Chiến lược tách file

Tách toàn bộ logic trong `BuildFormXMLTool.cs` thành **5 file helper nội bộ** trong folder mới `Mcp/Tools/Form/` (KHÔNG `[McpServerToolType]`, KHÔNG expose MCP tool mới). Sau đó `BuildFormXMLTool.cs` thu gọn còn ~250 dòng (chỉ MCP shell + dispatch loop).

```
DynamicsCrm.DevKit.Cli/Mcp/Tools/Form/
    FormXmlHelpers.cs              (~250 dòng)
    FormFieldMetadata.cs           (~150 dòng)
    FormXmlBuilder.cs              (~120 dòng)
    FormTabSectionOperations.cs    (~600 dòng)
    FormFieldEventOperations.cs    (~900 dòng)
```

| File | Trước | Sau |
|---|---|---|
| `BuildFormXMLTool.cs` | 2093 dòng | ~250 dòng |
| `ManageFormTool.cs` | 1211 dòng | 1211 dòng (KHÔNG đụng ở PRE) |
| `Form/FormXmlHelpers.cs` | (mới) | ~250 dòng |
| `Form/FormFieldMetadata.cs` | (mới) | ~150 dòng |
| `Form/FormXmlBuilder.cs` | (mới) | ~120 dòng |
| `Form/FormTabSectionOperations.cs` | (mới) | ~600 dòng |
| `Form/FormFieldEventOperations.cs` | (mới) | ~900 dòng |

Tổng: **~2270 dòng** phân bố vào **6 file nhỏ** thay vì **1 file 2093 dòng**.

---

## File cần tạo

### File 1: `FormXmlHelpers.cs` (~250 dòng)

**Path:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/Form/FormXmlHelpers.cs`

**Nội dung:** Tất cả static helpers thuần XML / navigation / naming / JSON / classid — KHÔNG phụ thuộc `ServiceClient`.

| Method | Dòng hiện tại trong `BuildFormXMLTool.cs` |
|---|---|
| `ResolveClassId(AttributeMetadata)` | 1742 |
| `CollectExistingControlIds(XDocument)` | 1691 |
| `DeduplicateControlId(string, HashSet<string>)` | 1707 |
| `CreateSpacerCell()` | 1682 |
| `BuildRows(List<XElement>, int)` | 1724 |
| `FindEvent(XElement, string, string)` | 1580 |
| `FindTab(XDocument, string)` | 1783 |
| `FindSection(XElement, string)` | 1801 |
| `FindRowByFieldName(XElement, string)` | 1836 |
| `GetTabNames(XDocument)` | 1818 |
| `GetSectionNames(XElement)` | 1825 |
| `InsertElement(XElement, XElement, string, string, string)` | 1910 |
| `InsertFieldRows(XElement, List<XElement>, string)` | 1847 |
| `CorrectFieldName(string, AttributeMetadata)` | 2009 |
| `AutoTabName(string)` | 2028 |
| `AutoSectionName(string, string)` | 2031 |
| `Sanitize(string)` | 2038 |
| `NewGuid()` | 2041 |
| `GetTabColumnWidths(int)` | 2044 |
| `GetStringProp(JsonElement, string)` | 2053 |
| `GetIntProp(JsonElement, string, int)` | 2060 |
| `GetBoolProp(JsonElement, string, bool)` | 2067 |
| `LevenshteinClose(string, string)` | 2075 |

**Khai báo class:**
```csharp
namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Form
{
    internal static class FormXmlHelpers
    {
        // tất cả method ở trên — internal static
    }
}
```

---

### File 2: `FormFieldMetadata.cs` (~150 dòng)

**Path:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/Form/FormFieldMetadata.cs`

**Nội dung:** Field collection + entity metadata fetch + validation. Phụ thuộc `ServiceClient` cho `RetrieveEntityRequest`.

| Method | Dòng hiện tại |
|---|---|
| `CollectFieldNames(List<JsonElement>)` | 1982 |
| `CollectFieldsFromArray(JsonElement, string, HashSet<string>)` | 2014 |
| `ParseFieldSpec(JsonElement)` | gần 1976 (xem tham chiếu trong `BuildSectionElement`) |
| `LoadEntityAttributeMap(...)` (mới — extract từ step 4 + 4a của `build_form_xml`) | 130–159 |
| `ValidateFieldsExist(...)` (mới — extract từ step 5) | 161–179 |

**Khai báo class:**
```csharp
namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Form
{
    internal sealed class FormFieldMetadata
    {
        private readonly ServiceClient _serviceClient;
        public FormFieldMetadata(ServiceClient serviceClient) { _serviceClient = serviceClient; }

        public Dictionary<string, AttributeMetadata> LoadEntityAttributeMap(string entityName);
        // -> RetrieveEntityRequest + auto-correct image backing fields (step 4 + 4a)

        public static HashSet<string> CollectFieldNames(List<JsonElement> ops);
        public static (string fieldName, string label, bool disabled, bool visible,
                       int colspan, int rowspan, bool showlabel, bool hideOnPhone)
            ParseFieldSpec(JsonElement fieldEl);

        /// <summary>Throws FormXmlOperationsException with "Field(s) not found" + "Similar:" when missing fields exist.</summary>
        public static void ValidateFieldsExist(string entityName,
            HashSet<string> referencedFields, Dictionary<string, AttributeMetadata> attrMap);
    }

    internal sealed class FormXmlOperationsException : Exception
    {
        public FormXmlOperationsException(string message) : base(message) { }
    }
}
```

> **Bắt buộc:** Text lỗi "Field(s) not found in entity '…' metadata.", "Similar: …", "Tip: Use get_tables('…') to list all available fields." → **copy nguyên xi** từ line 165–177.

---

### File 3: `FormXmlBuilder.cs` (~120 dòng)

**Path:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/Form/FormXmlBuilder.cs`

**Nội dung:** Build section/cell XML — phụ thuộc `ServiceClient` cho `McpHelper.GetBaseLanguageCode`.

| Method | Dòng hiện tại |
|---|---|
| `BuildSectionElement(...)` | 1598 |
| `BuildCellElement(...)` | 1648 |

**Khai báo class:**
```csharp
namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Form
{
    internal sealed class FormXmlBuilder
    {
        private readonly ServiceClient _serviceClient;
        public FormXmlBuilder(ServiceClient serviceClient) { _serviceClient = serviceClient; }

        public XElement BuildSectionElement(string name, string label, int sectionColumns,
            List<JsonElement> fields, Dictionary<string, AttributeMetadata> attrMap,
            Dictionary<string, string> classIdMap, bool showLabel, bool visible,
            bool hideOnPhone, HashSet<string> existingControlIds);

        public XElement BuildCellElement(string controlId, string fieldName, string label, string classid,
            bool disabled, bool visible, int colspan, int rowspan, bool showlabel, bool hideOnPhone);
    }
}
```

> **Lưu ý:** Bên trong `BuildSectionElement` đang gọi `ParseFieldSpec`, `CorrectFieldName`, `ResolveClassId`, `DeduplicateControlId`, `BuildRows`, `BuildCellElement`, `NewGuid` — chuyển sang gọi `FormXmlHelpers.*` và `FormFieldMetadata.ParseFieldSpec`. Logic giữ nguyên.

---

### File 4: `FormTabSectionOperations.cs` (~600 dòng)

**Path:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/Form/FormTabSectionOperations.cs`

**Nội dung:** 8 operations cho Tab + Section. Phụ thuộc `FormXmlBuilder` (cho add) + `ServiceClient` (cho language code trong `ExecuteUpdateTab`/`ExecuteUpdateSection`).

| Method | Dòng hiện tại |
|---|---|
| `ExecuteAddTab(XDocument, JsonElement, …)` | 332 |
| `ExecuteUpdateTab(XDocument, JsonElement)` | 1229 |
| `ExecuteMoveTab(XDocument, JsonElement)` | 842 |
| `ExecuteRemoveTab(XDocument, JsonElement)` | 954 |
| `ExecuteAddSection(XDocument, JsonElement, …)` | 433 |
| `ExecuteUpdateSection(XDocument, JsonElement)` | 1281 |
| `ExecuteMoveSection(XDocument, JsonElement)` | 867 |
| `ExecuteRemoveSection(XDocument, JsonElement)` | 968 |

**Khai báo class:**
```csharp
namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Form
{
    internal sealed class FormTabSectionOperations
    {
        private readonly ServiceClient _serviceClient;
        private readonly FormXmlBuilder _builder;

        public FormTabSectionOperations(ServiceClient serviceClient, FormXmlBuilder builder)
        {
            _serviceClient = serviceClient;
            _builder = builder;
        }

        public string ExecuteAddTab(XDocument formDoc, JsonElement op,
            Dictionary<string, AttributeMetadata> attrMap, Dictionary<string, string> classIdMap);
        public string ExecuteUpdateTab(XDocument formDoc, JsonElement op);
        public static string ExecuteMoveTab(XDocument formDoc, JsonElement op);
        public static string ExecuteRemoveTab(XDocument formDoc, JsonElement op);

        public string ExecuteAddSection(XDocument formDoc, JsonElement op,
            Dictionary<string, AttributeMetadata> attrMap, Dictionary<string, string> classIdMap);
        public string ExecuteUpdateSection(XDocument formDoc, JsonElement op);
        public static string ExecuteMoveSection(XDocument formDoc, JsonElement op);
        public static string ExecuteRemoveSection(XDocument formDoc, JsonElement op);
    }
}
```

---

### File 5: `FormFieldEventOperations.cs` (~900 dòng)

**Path:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/Form/FormFieldEventOperations.cs`

**Nội dung:** 10 operations cho Fields (body) + Header + Library + Event. Phụ thuộc `FormXmlBuilder` (cho add fields/header — gọi `BuildCellElement`) + `ServiceClient`.

| Method | Dòng hiện tại |
|---|---|
| `ExecuteAddFields(XDocument, JsonElement, …)` | 481 |
| `ExecuteUpdateFields(XDocument, JsonElement, …)` | 1331 |
| `ExecuteRemoveFields(XDocument, JsonElement)` | 989 |
| `ExecuteAddHeaderFields(XDocument, JsonElement, …)` | 551 |
| `ExecuteUpdateHeaderFields(XDocument, JsonElement, …)` | 1431 |
| `ExecuteRemoveHeaderFields(XDocument, JsonElement)` | 643 |
| `ExecuteAddLibrary(XDocument, JsonElement)` | 703 |
| `ExecuteRemoveLibrary(XDocument, JsonElement)` | 1076 |
| `ExecuteAddEvent(XDocument, JsonElement)` | 719 |
| `ExecuteRemoveEvent(XDocument, JsonElement)` | 1134 |

**Khai báo class:**
```csharp
namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Form
{
    internal sealed class FormFieldEventOperations
    {
        private readonly ServiceClient _serviceClient;
        private readonly FormXmlBuilder _builder;

        public FormFieldEventOperations(ServiceClient serviceClient, FormXmlBuilder builder)
        {
            _serviceClient = serviceClient;
            _builder = builder;
        }

        // Fields (body)
        public string ExecuteAddFields(XDocument formDoc, JsonElement op,
            Dictionary<string, AttributeMetadata> attrMap, Dictionary<string, string> classIdMap);
        public string ExecuteUpdateFields(XDocument formDoc, JsonElement op,
            Dictionary<string, AttributeMetadata> attrMap, Dictionary<string, string> classIdMap);
        public static string ExecuteRemoveFields(XDocument formDoc, JsonElement op);

        // Header
        public string ExecuteAddHeaderFields(XDocument formDoc, JsonElement op,
            Dictionary<string, AttributeMetadata> attrMap, Dictionary<string, string> classIdMap);
        public string ExecuteUpdateHeaderFields(XDocument formDoc, JsonElement op,
            Dictionary<string, AttributeMetadata> attrMap, Dictionary<string, string> classIdMap);
        public static string ExecuteRemoveHeaderFields(XDocument formDoc, JsonElement op);

        // Library
        public static string ExecuteAddLibrary(XDocument formDoc, JsonElement op);
        public static string ExecuteRemoveLibrary(XDocument formDoc, JsonElement op);

        // Event
        public static string ExecuteAddEvent(XDocument formDoc, JsonElement op);
        public static string ExecuteRemoveEvent(XDocument formDoc, JsonElement op);
    }
}
```

---

## Cập nhật `BuildFormXMLTool.cs` sau khi tách (~250 dòng)

Sau khi tách xong, `BuildFormXMLTool.cs` chỉ chứa:

1. `[McpServerToolType]` class với constructor nhận `ServiceClient`
2. Method `build_form_xml(entity_name, form_id, operations)` — MCP entry point
3. Khởi tạo các helper, dispatch loop theo `(action, manage_action)`, save temp file, build response

```csharp
using Microsoft.PowerPlatform.Dataverse.Client;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Form;
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Xml.Linq;

namespace DynamicsCrm.DevKit.Cli.Mcp.Tools
{
    [McpServerToolType]
    public class BuildFormXMLTool
    {
        private readonly ServiceClient _serviceClient;
        public BuildFormXMLTool(ServiceClient serviceClient) { _serviceClient = serviceClient; }

        [McpServerTool(Name = "build_form_xml", /* …giữ nguyên attributes + Description hiện có (line 33–56)… */)]
        public CallToolResult build_form_xml(
            [Description("…")] string entity_name,
            [Description("…")] string form_id,
            [Description("…")] string operations)
        {
            // 1. Validate parameters — copy nguyên error text từ line 69–83
            if (string.IsNullOrWhiteSpace(entity_name)) return ErrorResult("Error: entity_name is required.…");
            if (string.IsNullOrWhiteSpace(form_id))     return ErrorResult("Error: form_id is required.…");
            if (!Guid.TryParse(form_id.Trim(), out var formId)) return ErrorResult($"Error: '{form_id}' is not a valid GUID.");
            if (string.IsNullOrWhiteSpace(operations))  return ErrorResult("Error: operations is required.…");

            var entityName = entity_name.Trim().ToLowerInvariant();

            try
            {
                // 2. Parse operations JSON — copy nguyên error text từ line 89–104
                List<JsonElement> ops;
                try { ops = JsonSerializer.Deserialize<List<JsonElement>>(operations); }
                catch (JsonException ex) { return ErrorResult($"Error: Invalid operations JSON: {ex.Message}\nRead docs://instructions_for_formxml for format and examples."); }
                if (ops == null || ops.Count == 0) return ErrorResult("Error: operations must be a non-empty JSON array.\nRead docs://instructions_for_formxml for format and examples.");

                // 3. Retrieve current FormXML — copy nguyên error text từ line 107–125
                Entity formEntity;
                try { formEntity = _serviceClient.Retrieve("systemform", formId, new ColumnSet("formxml","name","objecttypecode","type")); }
                catch (Exception ex) { return ErrorResult($"Error: Form '{formId}' not found for entity '{entityName}'.\nMessage: {ex.Message}\nUse manage_form(action='list', entity_name='{entityName}') to find valid form IDs."); }
                var currentFormXml = formEntity.GetAttributeValue<string>("formxml") ?? "";
                var formName       = formEntity.GetAttributeValue<string>("name") ?? "";
                if (string.IsNullOrWhiteSpace(currentFormXml)) return ErrorResult($"Error: Form '{formId}' has empty FormXML.");

                // 4. Init helpers + load metadata + validate fields
                var fieldMeta = new FormFieldMetadata(_serviceClient);
                var builder   = new FormXmlBuilder(_serviceClient);
                var tabSec    = new FormTabSectionOperations(_serviceClient, builder);
                var fieldEvt  = new FormFieldEventOperations(_serviceClient, builder);

                var referencedFields = FormFieldMetadata.CollectFieldNames(ops);
                Dictionary<string, AttributeMetadata> attrMap;
                try { attrMap = fieldMeta.LoadEntityAttributeMap(entityName); }
                catch (Exception ex) { return ErrorResult($"Error: Failed to retrieve metadata for entity '{entityName}': {ex.Message}"); }
                try { FormFieldMetadata.ValidateFieldsExist(entityName, referencedFields, attrMap); }
                catch (FormXmlOperationsException fex) { return ErrorResult(fex.Message); }

                // 5. Parse FormXML
                XDocument formDoc;
                try { formDoc = XDocument.Parse(currentFormXml); }
                catch (Exception ex) { return ErrorResult($"Error: Failed to parse current FormXML: {ex.Message}"); }

                // 6. Dispatch loop — copy nguyên switch từ line 196–268
                var opSummaries = new List<string>();
                var classIdMap  = new Dictionary<string, string>();
                foreach (var op in ops)
                {
                    if (!op.TryGetProperty("action", out var actionProp))
                        return ErrorResult("Error: Each operation must have an 'action' field.\nValid actions: manage_tab, manage_section, manage_fields, manage_library, manage_event.\nRead docs://instructions_for_formxml for operation format and examples.");
                    var action       = actionProp.GetString()?.ToLowerInvariant();
                    var manageAction = FormXmlHelpers.GetStringProp(op, "manage_action")?.ToLowerInvariant() ?? "";

                    switch (action)
                    {
                        case "manage_tab":
                            opSummaries.Add(manageAction switch {
                                "add"    => tabSec.ExecuteAddTab(formDoc, op, attrMap, classIdMap),
                                "update" => tabSec.ExecuteUpdateTab(formDoc, op),
                                "move"   => FormTabSectionOperations.ExecuteMoveTab(formDoc, op),
                                "remove" => FormTabSectionOperations.ExecuteRemoveTab(formDoc, op),
                                _ => throw new InvalidOperationException($"Unknown manage_action '{manageAction}' for manage_tab. Valid: add, remove, move, update")
                            });
                            break;
                        case "manage_section":
                            opSummaries.Add(manageAction switch {
                                "add"    => tabSec.ExecuteAddSection(formDoc, op, attrMap, classIdMap),
                                "update" => tabSec.ExecuteUpdateSection(formDoc, op),
                                "move"   => FormTabSectionOperations.ExecuteMoveSection(formDoc, op),
                                "remove" => FormTabSectionOperations.ExecuteRemoveSection(formDoc, op),
                                _ => throw new InvalidOperationException($"Unknown manage_action '{manageAction}' for manage_section. Valid: add, remove, move, update")
                            });
                            break;
                        case "manage_fields":
                            opSummaries.Add(manageAction switch {
                                "add"           => fieldEvt.ExecuteAddFields(formDoc, op, attrMap, classIdMap),
                                "update"        => fieldEvt.ExecuteUpdateFields(formDoc, op, attrMap, classIdMap),
                                "remove"        => FormFieldEventOperations.ExecuteRemoveFields(formDoc, op),
                                "add_header"    => fieldEvt.ExecuteAddHeaderFields(formDoc, op, attrMap, classIdMap),
                                "update_header" => fieldEvt.ExecuteUpdateHeaderFields(formDoc, op, attrMap, classIdMap),
                                "remove_header" => FormFieldEventOperations.ExecuteRemoveHeaderFields(formDoc, op),
                                _ => throw new InvalidOperationException($"Unknown manage_action '{manageAction}' for manage_fields. Valid: add, remove, update, add_header, remove_header, update_header")
                            });
                            break;
                        case "manage_library":
                            opSummaries.Add(manageAction switch {
                                "add"    => FormFieldEventOperations.ExecuteAddLibrary(formDoc, op),
                                "remove" => FormFieldEventOperations.ExecuteRemoveLibrary(formDoc, op),
                                _ => throw new InvalidOperationException($"Unknown manage_action '{manageAction}' for manage_library. Valid: add, remove")
                            });
                            break;
                        case "manage_event":
                            opSummaries.Add(manageAction switch {
                                "add"    => FormFieldEventOperations.ExecuteAddEvent(formDoc, op),
                                "remove" => FormFieldEventOperations.ExecuteRemoveEvent(formDoc, op),
                                _ => throw new InvalidOperationException($"Unknown manage_action '{manageAction}' for manage_event. Valid: add, remove")
                            });
                            break;
                        default:
                            return ErrorResult($"Error: Unknown action '{action}'.\nValid: manage_tab | manage_section | manage_fields | manage_library | manage_event (each requires 'manage_action').\nRead docs://instructions_for_formxml for operation format and examples.");
                    }
                }

                // 7. Serialize + save temp file (copy nguyên line 270–278)
                var modifiedFormXml = formDoc.ToString(SaveOptions.None);
                var tempDir  = Path.Combine(Directory.GetCurrentDirectory(), ".devkit", "modified_forms");
                Directory.CreateDirectory(tempDir);
                var tempFile = Path.Combine(tempDir, $"{entityName}_{formId:N}.formxml");
                File.WriteAllText(tempFile, modifiedFormXml, Encoding.UTF8);

                // 8. Build response text (copy nguyên line 281–303)
                var sb = new StringBuilder(2048);
                sb.AppendLine($"[BuildFormXML] {entityName} -- {formName}");
                sb.AppendLine();
                sb.AppendLine("Operations performed:");
                for (var i = 0; i < opSummaries.Count; i++)
                    sb.AppendLine($"  {i + 1}. {opSummaries[i]}");
                sb.AppendLine();
                if (classIdMap.Count > 0)
                {
                    sb.AppendLine("ClassIds resolved:");
                    var maxNameLen = classIdMap.Keys.Max(k => k.Length);
                    foreach (var kv in classIdMap.OrderBy(k => k.Key))
                    {
                        var attrType = attrMap.TryGetValue(kv.Key, out var meta) ? meta.AttributeType?.ToString() ?? "?" : "?";
                        sb.AppendLine($"  {kv.Key.PadRight(maxNameLen)} -> {attrType.PadRight(12)} -> {{{kv.Value}}}");
                    }
                    sb.AppendLine();
                }
                sb.AppendLine($"FormXML saved to: {tempFile}");
                sb.AppendLine();
                sb.AppendLine($"Next step: manage_form(action='update', entity_name='{entityName}', form_id='{formId}', formxml='{tempFile}')");

                var structured = new BuildFormXMLResult {
                    Entity = entityName, FormId = formId.ToString(), FormName = formName, Status = "success",
                    OperationsCount = ops.Count, FieldsResolved = classIdMap.Count, FormXmlPath = tempFile
                };
                return new CallToolResult {
                    Content = [new TextContentBlock { Text = sb.ToString() }],
                    StructuredContent = JsonSerializer.SerializeToElement(structured)
                };
            }
            catch (Exception ex)
            {
                return ErrorResult($"Error: build_form_xml failed for entity '{entityName}', form '{formId}'.\nMessage: {ex.Message}");
            }
        }

        private static CallToolResult ErrorResult(string message) => new()
        {
            Content = [new TextContentBlock { Text = message }],
            IsError = true
        };
    }
}
```

> **Bắt buộc copy nguyên xi (không sửa 1 ký tự):**
> - Toàn bộ `[Description(...)]` của tool và 3 param (line 33–66)
> - Mọi error text trả về `ErrorResult` (line 69–125, 199–202, 263–266)
> - Output text format `[BuildFormXML] …`, "Operations performed:", "ClassIds resolved:" (kèm padding với `maxNameLen`), "FormXML saved to: …", "Next step: …" (line 281–303)
> - `BuildFormXMLResult` struct populate đúng thứ tự field, đúng giá trị

---

## Cập nhật `ManageFormTool.cs`

**KHÔNG đụng** ở bước PRE này. File này chỉ thay đổi trong bước MERGE chính (xem `plan_merge_build_form_xml_into_manage_form.md`).

---

## Files KHÔNG đụng (đợi plan merge sau)

| File | Lý do |
|---|---|
| `Mcp/Tools/ManageFormTool.cs` | Chỉ merge ở plan sau |
| `Mcp/Tools/Models/StructuredResults.cs` | `BuildFormXMLResult` giữ nguyên; `UpsertFormResult` chưa thêm field |
| `Mcp/McpServerHost.cs` | `BuildFormXMLTool` vẫn đăng ký, vẫn `"standard"` |
| `Mcp/Resources/InstructionResources.cs` | `docs://instructions_for_formxml` chưa đổi |
| `DynamicsCrm.DevKit.Cli/README.md`, `AGENTS.md`, `CLAUDE.md`, `.claude/rules/core-rule.md` | Tool count vẫn 36 |

---

## Quy tắc khi di chuyển code

1. **Không thay đổi logic** — chỉ di chuyển, không refactor behavior. Mọi `if/else`, mọi message, mọi thứ tự thuộc tính XML giữ nguyên.
2. **Namespace:** `DynamicsCrm.DevKit.Cli.Mcp.Tools.Form` cho tất cả 5 file mới.
3. **`McpHelper.GetBaseLanguageCode(_serviceClient)`** đang gọi từ `BuildSectionElement`, `BuildCellElement`, `ExecuteUpdateTab`, `ExecuteUpdateSection`, `ExecuteAddTab`, `ExecuteAddSection`, `ExecuteAddHeaderFields`, `ExecuteUpdateHeaderFields`, `ExecuteUpdateFields` — chuyển sang gọi qua `_serviceClient` field của instance class tương ứng (`FormXmlBuilder`, `FormTabSectionOperations`, `FormFieldEventOperations`).
4. **Helpers gọi chéo:** Khi method ở `FormTabSectionOperations` / `FormFieldEventOperations` cần `NewGuid()`, `Sanitize()`, `FindTab()`, `FindSection()`, `InsertElement()`, … → gọi qua `FormXmlHelpers.*` (đã static).
5. **`ParseFieldSpec`** đang gần line 1976 trong file gốc, nằm trong block của `BuildSectionElement` — chuyển sang `FormFieldMetadata.ParseFieldSpec` (static).
6. **`CollectFieldNames` / `CollectFieldsFromArray`** chuyển sang `FormFieldMetadata` (static) vì có liên quan field metadata, dù không cần `ServiceClient`.
7. **KHÔNG thêm `[McpServerToolType]`** vào bất kỳ file nào trong folder `Form/`.
8. **Validation flow:** Step 4 (load metadata) + Step 4a (image backing) + Step 5 (validate exists) → đóng gói thành 2 method public `LoadEntityAttributeMap` và `ValidateFieldsExist` của `FormFieldMetadata`. Tool shell gọi 2 method này riêng lẻ — KHÔNG gộp vào 1 method (để dễ debug, dễ test).

---

## Thứ tự thực hiện

```
Bước 1: Tạo Mcp/Tools/Form/FormXmlHelpers.cs            (static, không dependency)
Bước 2: Tạo Mcp/Tools/Form/FormFieldMetadata.cs         (phụ thuộc ServiceClient)
Bước 3: Tạo Mcp/Tools/Form/FormXmlBuilder.cs            (phụ thuộc ServiceClient + FormXmlHelpers + FormFieldMetadata)
Bước 4: Tạo Mcp/Tools/Form/FormTabSectionOperations.cs  (phụ thuộc FormXmlBuilder + FormXmlHelpers)
Bước 5: Tạo Mcp/Tools/Form/FormFieldEventOperations.cs  (phụ thuộc FormXmlBuilder + FormXmlHelpers + FormFieldMetadata)
Bước 6: Thu gọn BuildFormXMLTool.cs (~250 dòng)
Bước 7: /claude-build-cli + restart MCP + smoke test
```

> Build sớm — fail nhanh sửa nhanh. Sau bước 1 có thể `/claude-build-cli` để chắc namespace + using OK trước khi đi tiếp.

---

## Kiểm tra sau khi tách

- [ ] `BuildFormXMLTool.cs` còn ≤ 250 dòng
- [ ] Tất cả 5 file helper trong `Mcp/Tools/Form/` đã có đủ nội dung, đúng namespace `DynamicsCrm.DevKit.Cli.Mcp.Tools.Form`
- [ ] Không có file nào trong `Mcp/Tools/Form/` mang `[McpServerToolType]`
- [ ] Tool count khi list MCP vẫn là **36**
- [ ] Build pass: `/claude-build-cli` (0 error)
- [ ] Restart MCP process:
  ```powershell
  Get-Process | Where-Object { $_.CommandLine -like "*devkit*mcp*" } | Stop-Process -Force
  ```
- [ ] Smoke test (manual — báo cáo command + output):
  1. `manage_form(action='list', entity_name='account')` → lấy 1 form id
  2. `build_form_xml(entity_name='account', form_id='<id>', operations='[{"action":"manage_tab","manage_action":"add","label":"DevKit Test Tab"}]')`
  3. Kiểm tra: response text bắt đầu `[BuildFormXML] account -- …`, có `Operations performed:`, có `FormXML saved to: …\.devkit\modified_forms\account_<guid>.formxml`, file tồn tại trên đĩa.
  4. **KHÔNG** gọi `manage_form(action='update', …)` — chỉ test build, không apply.
- [ ] `git diff --stat`: chỉ thấy 6 file thay đổi — `BuildFormXMLTool.cs` shrink + 5 file mới trong `Form/`. **Không** thay đổi ở `ManageFormTool.cs`, `McpServerHost.cs`, `StructuredResults.cs`, hay file `.md` nào.

---

## Risks

| Risk | Mitigation |
|---|---|
| Đổi behavior do quên copy 1 đoạn | Diff từng executor side-by-side; không thêm/sửa logic, chỉ di dời |
| Method non-static gọi `_serviceClient` mất context khi tách class | `FormXmlBuilder` / `FormTabSectionOperations` / `FormFieldEventOperations` đều giữ `ServiceClient` qua constructor; cross-class gọi nhau qua DI thủ công trong tool shell |
| Quên copy `using` → build fail | Khi tạo file mới, dán nguyên block `using` của `BuildFormXMLTool.cs` rồi mới trim — build sớm để fail nhanh |
| `FormXmlOperationsException` chưa được handle ở 1 chỗ nào đó → bubble lên `catch (Exception)` ngoài cùng | Tool shell chỉ bắt nó ở **1 nơi** (sau `ValidateFieldsExist`); mọi `throw` khác trong helper dùng `InvalidOperationException` cho lỗi logic và để bubble |
| Encoding/line-ending khác giữa file mới và file gốc | Save UTF-8 (no BOM), CRLF (Windows) — khớp `.editorconfig` |
| Circular dependency giữa các helper | Đồ thị: `Helpers` (lá) ← `FieldMetadata` (lá) ← `Builder` ← `TabSectionOps` ← shell; `FieldEventOps` ← `Builder` ← shell. Không có chu trình. |

---

## SAU KHI HOÀN THÀNH PRE-TASK

> **⚠️ Trước khi chạy merge plan:** `plan_merge_build_form_xml_into_manage_form.md` hiện vẫn mô tả cách làm cũ (tạo `FormXmlOperationsHelper.cs` trong `Mcp/Tools/Helper/`). File đó phải được update để reflect kiến trúc mới (helpers nằm trong `Mcp/Tools/Form/`, namespace `Tools.Form`) — trước khi giao agent chạy.

Chạy tiếp `plan_merge_build_form_xml_into_manage_form.md`. Khi đó:
- `ManageFormTool.HandleUpdate` thêm nhánh nhận `operations` (JSON array) → khởi tạo cùng 4 helper (`FormFieldMetadata`, `FormXmlBuilder`, `FormTabSectionOperations`, `FormFieldEventOperations`) → chạy cùng dispatch loop → lấy `modifiedFormXml` → tiếp tục flow update hiện có (backup → validate XSD → import → publish).
- Có thể tiến thêm 1 bước: tạo `Form/FormXmlOperationsRunner.cs` (~100 dòng) gói gọn dispatch loop + load metadata + validate fields, để cả `BuildFormXMLTool` và `ManageFormTool` đều gọi 1 method `Run(currentFormXml, entityName, ops)` thay vì duplicate dispatch loop. Đây là việc của plan merge, KHÔNG làm ở PRE.
- `BuildFormXMLTool.cs` → xoá file. `BuildFormXMLResult` → xoá. `McpServerHost.cs` line 56 → xoá entry. Tool count 36 → 35.

---

## Acceptance Criteria

- [ ] Folder `Mcp/Tools/Form/` tồn tại, chứa đủ 5 file helper với đúng namespace
- [ ] `BuildFormXMLTool.cs` ≤ 250 LOC (gốc 2093)
- [ ] `/claude-build-cli` pass, 0 error, không phát sinh warning mới
- [ ] `build_form_xml` smoke test trả output cùng cấu trúc text + đúng đường dẫn temp file
- [ ] Tool count vẫn = 36
- [ ] `git diff --stat` chỉ thấy 6 file (`BuildFormXMLTool.cs` shrink + 5 file mới); KHÔNG đụng `ManageFormTool.cs` hay file `.md` nào
