# Plan: Merge `build_form_xml` into `manage_form`

## Mục tiêu

Xóa hoàn toàn tool `build_form_xml` (MCP-exposed), tích hợp toàn bộ logic vào `manage_form`.
Tool count: **36 → 35**.

> **Điều kiện tiên quyết:** PRE-plan (`PRE-plan_merge_build_form_xml_into_manage_form.md`) phải đã chạy xong thành công.
> Sau PRE-plan, các helper class nằm trong `Mcp/Tools/Form/` (namespace `DynamicsCrm.DevKit.Cli.Mcp.Tools.Form`):
> - `FormXmlHelpers` (static helpers)
> - `FormFieldMetadata` (metadata + validation)
> - `FormXmlBuilder` (build section/cell XML)
> - `FormTabSectionOperations` (tab + section executors)
> - `FormFieldEventOperations` (field + library + event executors)
> - `FormXmlOperationsRunner` (optional runner — wrap dispatch loop, xem bên dưới)

---

## Vấn đề hiện tại

| Bước | Tool | Tác dụng |
|------|------|----------|
| 1 | `build_form_xml` | Retrieve current FormXML, apply ops, save ra file temp `.devkit/modified_forms/{entity}_{formId}.formxml` |
| 2 | `manage_form(action='update', formxml=<path>)` | Đọc file đó, validate XSD, backup, import vào Dataverse, publish |

→ **2 tool calls + 1 file tạm** → lãng phí token, tăng độ phức tạp, AI agent dễ "quên" gọi bước 2.

Ngoài ra `build_form_xml` chỉ là **sub-tool** — không bao giờ được dùng độc lập, luôn phải call kèm `manage_form(action='update')`.

---

## Giải pháp

Gộp thành **1 tool call duy nhất**:

```
manage_form(action='update', entity_name='account', form_id='<guid>', operations=[...])
```

Tool `manage_form` sẽ:
1. Retrieve current FormXML từ Dataverse
2. Validate field names
3. Apply operations (gọi các helper class trong `Mcp/Tools/Form/`)
4. Backup → Validate XSD → Update → Publish

**Không** cần file tạm, **không** cần tool call trung gian.

---

## Thay đổi cần thực hiện

### 1. `Mcp/Tools/Form/FormXmlOperationsRunner.cs` (tạo mới ~100 dòng)

**Path:** `DynamicsCrm.DevKit.Cli/Mcp/Tools/Form/FormXmlOperationsRunner.cs`

Lớp này đóng gói toàn bộ dispatch loop + load metadata + validate fields vào 1 method `Run()`.
Cả `BuildFormXMLTool` (còn lại sau PRE) và `ManageFormTool` đều gọi qua đây — tránh duplicate dispatch loop.

```csharp
namespace DynamicsCrm.DevKit.Cli.Mcp.Tools.Form
{
    internal sealed class FormXmlOperationsRunner
    {
        private readonly ServiceClient _serviceClient;

        public FormXmlOperationsRunner(ServiceClient serviceClient)
        {
            _serviceClient = serviceClient;
        }

        /// <summary>
        /// Applies a list of JSON operations to the given FormXML string.
        /// Returns modified FormXML + per-operation summaries + classId map.
        /// Throws FormXmlOperationsException for field validation errors.
        /// Throws InvalidOperationException for unknown actions.
        /// </summary>
        public (string ModifiedFormXml, List<string> OperationSummaries, Dictionary<string, string> ClassIdMap)
            Run(string currentFormXml, string entityName, List<JsonElement> ops)
        {
            // 1. Collect field names + load metadata + validate (steps 4–5 của build_form_xml)
            var referencedFields = FormFieldMetadata.CollectFieldNames(ops);

            var fieldMeta = new FormFieldMetadata(_serviceClient);
            var attrMap = fieldMeta.LoadEntityAttributeMap(entityName);
            FormFieldMetadata.ValidateFieldsExist(entityName, referencedFields, attrMap);

            // 2. Parse FormXML
            XDocument formDoc;
            try { formDoc = XDocument.Parse(currentFormXml); }
            catch (Exception ex)
            {
                throw new InvalidOperationException($"Failed to parse current FormXML: {ex.Message}", ex);
            }

            // 3. Init operation helpers
            var builder  = new FormXmlBuilder(_serviceClient);
            var tabSec   = new FormTabSectionOperations(_serviceClient, builder);
            var fieldEvt = new FormFieldEventOperations(_serviceClient, builder);
            var classIdMap  = new Dictionary<string, string>();
            var opSummaries = new List<string>();

            // 4. Dispatch loop
            foreach (var op in ops)
            {
                if (!op.TryGetProperty("action", out var actionProp))
                    throw new InvalidOperationException(
                        "Each operation must have an 'action' field.\n" +
                        "Valid actions: manage_tab, manage_section, manage_fields, manage_library, manage_event.\n" +
                        "Read docs://instructions_for_formxml for operation format and examples.");

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
                            _ => throw new InvalidOperationException(
                                $"Unknown manage_action '{manageAction}' for manage_tab. Valid: add, remove, move, update")
                        });
                        break;
                    case "manage_section":
                        opSummaries.Add(manageAction switch {
                            "add"    => tabSec.ExecuteAddSection(formDoc, op, attrMap, classIdMap),
                            "update" => tabSec.ExecuteUpdateSection(formDoc, op),
                            "move"   => FormTabSectionOperations.ExecuteMoveSection(formDoc, op),
                            "remove" => FormTabSectionOperations.ExecuteRemoveSection(formDoc, op),
                            _ => throw new InvalidOperationException(
                                $"Unknown manage_action '{manageAction}' for manage_section. Valid: add, remove, move, update")
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
                            _ => throw new InvalidOperationException(
                                $"Unknown manage_action '{manageAction}' for manage_fields. Valid: add, remove, update, add_header, remove_header, update_header")
                        });
                        break;
                    case "manage_library":
                        opSummaries.Add(manageAction switch {
                            "add"    => FormFieldEventOperations.ExecuteAddLibrary(formDoc, op),
                            "remove" => FormFieldEventOperations.ExecuteRemoveLibrary(formDoc, op),
                            _ => throw new InvalidOperationException(
                                $"Unknown manage_action '{manageAction}' for manage_library. Valid: add, remove")
                        });
                        break;
                    case "manage_event":
                        opSummaries.Add(manageAction switch {
                            "add"    => FormFieldEventOperations.ExecuteAddEvent(formDoc, op),
                            "remove" => FormFieldEventOperations.ExecuteRemoveEvent(formDoc, op),
                            _ => throw new InvalidOperationException(
                                $"Unknown manage_action '{manageAction}' for manage_event. Valid: add, remove")
                        });
                        break;
                    default:
                        throw new InvalidOperationException(
                            $"Unknown action '{action}'.\n" +
                            $"Valid: manage_tab | manage_section | manage_fields | manage_library | manage_event (each requires 'manage_action').\n" +
                            $"Read docs://instructions_for_formxml for operation format and examples.");
                }
            }

            var modifiedFormXml = formDoc.ToString(SaveOptions.None);
            return (modifiedFormXml, opSummaries, classIdMap);
        }
    }
}
```

> **Không** có `[McpServerToolType]` trên class này.

---

### 2. `ManageFormTool.cs`

**Thêm parameter `operations`** vào tool signature:

```csharp
[Description(
    "For 'update' with operations (recommended): JSON array of form operations (auto-builds + imports). " +
    "Read docs://instructions_for_formxml for format.")]
string operations = "",
```

**Thêm `using DynamicsCrm.DevKit.Cli.Mcp.Tools.Form;`** ở đầu file.

**Cập nhật `[Description]` của tool** để phản ánh flow mới:

```
ACTIONS:
- action='list': List active forms. Optional: form_type, include_formxml
- action='detail': Full FormXML + metadata. Required: form_id (or form_name for auto-resolve)
- action='update' (recommended): Build + import in one call. Required: form_id + operations.
- action='update' (advanced): Provide raw FormXML directly. Required: form_id + formxml.
- action='rename': Change display name. Required: form_id + form_name
- action='undo': Restore from backup. Required: form_id + formxml (= backup file path)

WORKFLOW (recommended):
manage_form(action='update', entity_name=..., form_id=..., operations=[...])
→ auto-builds FormXML + backup + validate + import + publish

OPERATIONS (5 action groups, each with manage_action):
- manage_tab: add | update | move | remove
- manage_section: add | update | move | remove
- manage_fields: add | update | remove | add_header | update_header | remove_header
- manage_library: add | remove
- manage_event: add | remove

SAFETY: auto-backup before update/rename, XSD validates before write, backup failure blocks update.
TIPS:
- form_type=2 for main forms only
- form_name with 1 match auto-returns detail
- Read schema://formxml for XSD. Read docs://instructions_for_formxml for rules
- Set auto_publish=false when batching, then call publish_customizations once
```

**Bỏ dòng:** `"WORKFLOW: build_form_xml → manage_form(action='update', formxml=<result>)\n"` và `"ALWAYS use build_form_xml to construct FormXML — never write it manually.\n\n"`.

**Cập nhật `HandleUpdate`** — thêm nhánh `operations`:

Có 2 chế độ (mutually exclusive):

| Input | Hành động |
|-------|-----------|
| `operations` (JSON array) | Build FormXML inline → backup → validate → update → publish |
| `formxml` (raw XML hoặc backup file path `.formxml`) | Giữ nguyên flow cũ — dùng cho `undo` hoặc advanced |
| Cả hai empty | Báo lỗi: `"Provide 'operations' (recommended) or 'formxml'."` |
| Cả hai có giá trị | Báo lỗi: `"Provide either 'operations' or 'formxml', not both."` |

**Logic mới khi `operations` có giá trị:**

```csharp
private CallToolResult HandleUpdate(string entityName, string formId,
    string formxml, string operations, bool validate, bool backup, bool auto_publish)
{
    if (string.IsNullOrWhiteSpace(formId))
        return ErrorResult("Error: form_id is required for 'update' action.");
    if (!Guid.TryParse(formId.Trim(), out var id))
        return ErrorResult($"Error: '{formId}' is not a valid GUID.");

    var hasOperations = !string.IsNullOrWhiteSpace(operations);
    var hasFormxml    = !string.IsNullOrWhiteSpace(formxml);

    if (!hasOperations && !hasFormxml)
        return ErrorResult(
            "Error: Provide 'operations' (recommended) or 'formxml' for 'update' action.\n" +
            "- operations: JSON array of form operations (auto-builds + imports)\n" +
            "- formxml: raw FormXML string or file path from a previous export\n" +
            "Read docs://instructions_for_formxml for format and examples.");

    if (hasOperations && hasFormxml)
        return ErrorResult(
            "Error: Provide either 'operations' or 'formxml', not both.\n" +
            "- Use 'operations' for recommended inline build+import flow.\n" +
            "- Use 'formxml' for advanced/undo scenarios only.");

    if (hasOperations)
        return HandleUpdateWithOperations(entityName, id, operations, validate, backup, auto_publish);

    // existing formxml path (unchanged)
    return HandleUpdateWithFormXml(entityName, id, formxml, validate, backup, auto_publish);
}

private CallToolResult HandleUpdateWithOperations(string entityName, Guid id,
    string operations, bool validate, bool backup, bool auto_publish)
{
    // 1. Parse operations JSON
    List<JsonElement> ops;
    try
    {
        ops = JsonSerializer.Deserialize<List<JsonElement>>(operations);
        if (ops == null || ops.Count == 0)
            return ErrorResult(
                "Error: operations must be a non-empty JSON array.\n" +
                "Read docs://instructions_for_formxml for format and examples.");
    }
    catch (JsonException ex)
    {
        return ErrorResult(
            $"Error: Invalid operations JSON: {ex.Message}\n" +
            $"Read docs://instructions_for_formxml for format and examples.");
    }

    // 2. Retrieve current form
    var currentForm = RetrieveForm(id);
    if (currentForm == null)
        return ErrorResult(
            $"[Error] Form not found\n" +
            $"FormId: {id}\n" +
            $"Tip: Use manage_form with action='list' and entity_name='{entityName}' to find valid form IDs");

    var currentFormXml = currentForm.GetAttributeValue<string>("formxml") ?? "";
    var formName       = currentForm.GetAttributeValue<string>("name") ?? "";
    var objectTypeCode = currentForm.GetAttributeValue<string>("objecttypecode") ?? entityName;

    // 3. Verify entity match
    if (!string.Equals(entityName, objectTypeCode, StringComparison.OrdinalIgnoreCase))
        return ErrorResult(
            $"[Error] Entity mismatch\n" +
            $"FormId: {id}\nFormEntity: {objectTypeCode}\nProvidedEntity: {entityName}\n" +
            $"Tip: This form belongs to '{objectTypeCode}', not '{entityName}'");

    if (string.IsNullOrWhiteSpace(currentFormXml))
        return ErrorResult($"Error: Form '{id}' has empty FormXML.");

    // 4. Apply operations via runner
    string modifiedFormXml;
    List<string> opSummaries;
    Dictionary<string, string> classIdMap;
    try
    {
        var runner = new FormXmlOperationsRunner(_serviceClient);
        (modifiedFormXml, opSummaries, classIdMap) = runner.Run(currentFormXml, entityName, ops);
    }
    catch (FormXmlOperationsException fex)
    {
        return ErrorResult(fex.Message);
    }
    catch (InvalidOperationException iex)
    {
        return ErrorResult($"Error: {iex.Message}");
    }
    catch (Exception ex)
    {
        return ErrorResult($"Error: Failed to apply operations: {ex.Message}");
    }

    // 5. Backup
    string backupPath = null;
    if (backup)
    {
        try { backupPath = SaveBackup(entityName, id, formName, currentFormXml); }
        catch (Exception ex)
        {
            return ErrorResult(
                $"[Error] Backup failed — update BLOCKED (fail-safe)\n" +
                $"FormId: {id}\nMessage: {ex.Message}\n" +
                $"Tip: Fix backup directory permissions or set backup=false (not recommended)");
        }
    }

    // 6. Validate XSD
    List<string> validationWarnings = null;
    if (validate)
    {
        var (errors, warnings) = ValidateFormXml(modifiedFormXml);
        validationWarnings = warnings.Count > 0 ? warnings : null;
        if (errors.Count > 0)
        {
            // (same error block as existing HandleUpdate — copy nguyên xi)
            // ...return blocked result with UpsertFormResult{Status="blocked_validation"}
        }
    }

    // 7. Update + Publish
    // ... (giống HandleUpdateWithFormXml từ đây — copy flow cũ)

    // 8. Build success response — thêm ops summary + classIdMap vào text
    var sb = BuildSuccessText(entityName, id, formName, backupPath, validate, published);
    sb.AppendLine($"OperationsCount: {ops.Count}");
    sb.AppendLine("Operations performed:");
    for (var i = 0; i < opSummaries.Count; i++)
        sb.AppendLine($"  {i + 1}. {opSummaries[i]}");
    if (classIdMap.Count > 0)
    {
        sb.AppendLine("ClassIds resolved:");
        var maxNameLen = classIdMap.Keys.Max(k => k.Length);
        foreach (var kv in classIdMap.OrderBy(k => k.Key))
            sb.AppendLine($"  {kv.Key.PadRight(maxNameLen)} -> {kv.Value}");
    }
    sb.AppendLine();
    AppendRollbackInfo(sb, backupPath, id);

    var structured = new UpsertFormResult
    {
        Action = "updated", Entity = entityName, FormId = id.ToString(), FormName = formName,
        Status = "updated", Validated = validate, ValidationWarnings = validationWarnings,
        BackupPath = backupPath, Published = published,
        OperationsCount = ops.Count, FieldsResolved = classIdMap.Count   // ← new fields
    };
    return new CallToolResult
    {
        Content = [new TextContentBlock { Text = sb.ToString() }],
        StructuredContent = JsonSerializer.SerializeToElement(structured)
    };
}
```

> **Refactor tip:** Đổi tên `HandleUpdate` cũ thành `HandleUpdateWithFormXml` để tách rõ 2 nhánh. Không thay đổi logic của nhánh `formxml`.

---

### 3. `StructuredResults.cs`

**Xóa class `BuildFormXMLResult`** — không còn dùng.

**Bổ sung 2 fields vào `UpsertFormResult`:**

```csharp
[JsonPropertyName("operationsCount")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public int? OperationsCount { get; set; }

[JsonPropertyName("fieldsResolved")]
[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
public int? FieldsResolved { get; set; }
```

---

### 4. `BuildFormXMLTool.cs`

**Cập nhật** (sau khi PRE-plan đã shrink xuống ~250 dòng) để gọi `FormXmlOperationsRunner`:

```csharp
// Trong build_form_xml, thay dispatch loop cũ bằng:
var runner = new FormXmlOperationsRunner(_serviceClient);
(var modifiedFormXml, var opSummaries, var classIdMap) =
    runner.Run(currentFormXml, entityName, ops);
```

Xóa block load metadata + validate fields + dispatch loop cũ khỏi `BuildFormXMLTool.cs` (chúng đã chuyển vào `FormXmlOperationsRunner.Run`).

Sau đó **xóa hoàn toàn** file `BuildFormXMLTool.cs` khi merge xong và đã verify `ManageFormTool` hoạt động.

---

### 5. `McpServerHost.cs`

**Xóa entry** `[nameof(BuildFormXMLTool)] = "standard"`.

Tool count tự động giảm: 36 → 35.

---

### 6. `InstructionResources.cs` (FormXML instructions)

Cập nhật `docs://instructions_for_formxml`:

- Thay `build_form_xml + manage_form` → `manage_form(action='update', operations=[...])`
- Cập nhật phần "Post-Create Workflow":
  - **Cũ:** `3. build_form_xml + manage_form -- customize the form`
  - **Mới:** `3. manage_form(action='update', operations=[...]) -- customize the form`
- Cập nhật examples để dùng `operations` thay vì 2 bước riêng

---

### 7. `README.md` (CLI)

Tìm và update tất cả mention của `build_form_xml`:
- Tools count: 36 → 35
- Tool list: bỏ `build_form_xml`
- Examples / workflows: dùng `manage_form` 1 bước

---

### 8. `AGENTS.md` / `CLAUDE.md` (root)

Bỏ `build_form_xml` khỏi danh sách MCP tools. Tools count 36 → 35.

---

## Lợi ích

| Trước | Sau |
|-------|-----|
| 2 tool calls + 1 file tạm | 1 tool call |
| ~3000+ tokens cho mỗi update | ~1500 tokens |
| AI agent đôi khi quên gọi `manage_form` sau `build_form_xml` | Không thể quên |
| Tool count: 36 | Tool count: 35 |
| Tool surface phức tạp (sub-tool ẩn) | Tool surface đơn giản, mỗi tool đứng độc lập |

**Backward-compat:** giữ nguyên flow `formxml=<path>` cho `undo` và advanced scenarios.

---

## Migration / Rollout

- **Breaking change** với AI agents đang dùng `build_form_xml`. Vì đây là MCP tool (chạy local), không có user nào "phụ thuộc" trực tiếp — chỉ là LLM call pattern.
- Sau khi build & restart MCP server, AI tự nhiên sẽ thấy tool list mới (không có `build_form_xml`) và dùng `operations` parameter của `manage_form`.
- Không cần "deprecation period" — xóa thẳng.

---

## Tasks

- [ ] **[Điều kiện]** PRE-plan đã chạy xong: `Mcp/Tools/Form/` có đủ 5 file, `BuildFormXMLTool.cs` ≤ 250 LOC, build pass
- [ ] Tạo `Mcp/Tools/Form/FormXmlOperationsRunner.cs` (~100 dòng) với method `Run()`
- [ ] Cập nhật `BuildFormXMLTool.cs` để gọi `FormXmlOperationsRunner.Run()` thay vì dispatch loop inline
- [ ] Cập nhật `ManageFormTool.cs`:
  - Thêm `using DynamicsCrm.DevKit.Cli.Mcp.Tools.Form;`
  - Thêm param `operations`
  - Đổi tên `HandleUpdate` → `HandleUpdateWithFormXml`; thêm `HandleUpdateWithOperations`
  - Branching: operations vs formxml vs both-empty/both-set
  - Khi `operations` có giá trị → gọi `FormXmlOperationsRunner(_serviceClient).Run(...)` → tiếp tục flow update
  - Cập nhật `[Description]` của tool và params
- [ ] Cập nhật `StructuredResults.cs`:
  - Xóa `BuildFormXMLResult`
  - Thêm `OperationsCount`, `FieldsResolved` (nullable) vào `UpsertFormResult`
- [ ] Xóa file `BuildFormXMLTool.cs`
- [ ] Xóa entry trong `McpServerHost.cs`
- [ ] Cập nhật `InstructionResources.cs` (`docs://instructions_for_formxml`)
- [ ] Cập nhật `README.md` (CLI)
- [ ] Cập nhật `AGENTS.md` / `CLAUDE.md` (tool list 36 → 35, bỏ `build_form_xml`)
- [ ] Run `/claude-build-cli` để rebuild
- [ ] Restart MCP process: `Get-Process | Where-Object { $_.CommandLine -like "*devkit*mcp*" } | Stop-Process -Force`
- [ ] Smoke test: gọi `manage_form(action='update', operations=[...])` trên 1 form thật

---

## Risks

| Risk | Mức | Mitigation |
|------|-----|------------|
| `ManageFormTool.cs` quá dài sau khi merge | Thấp | `FormXmlOperationsRunner` giữ dispatch loop; `HandleUpdateWithOperations` chỉ ~60 dòng |
| Breaking AI agents đang dùng `build_form_xml` | Thấp | MCP tool list refresh tự động sau restart; AI sẽ thấy schema mới |
| Backup không tương thích sau merge | Thấp | Flow `undo` vẫn dùng `formxml=<backup_path>`, không thay đổi |
| Validation field names không hoạt động sau merge | Trung bình | `FormXmlOperationsRunner.Run()` gọi `ValidateFieldsExist` TRƯỚC khi backup, fail-fast không tạo backup vô ích |
| Performance: 1 thêm `RetrieveEntityRequest` cho metadata | Rất thấp | Trước đây đã có 1 call này trong `build_form_xml` rồi — không tệ hơn |
| `FormXmlOperationsRunner` duplicate code với `BuildFormXMLTool` | Không còn | Sau khi Runner tạo xong, `BuildFormXMLTool` cũng gọi Runner — không có duplicate |

---

## Acceptance Criteria

- [ ] Tool `build_form_xml` không còn xuất hiện trong tool list khi connect MCP
- [ ] Tool count khi `category=all` là **35** (không phải 36)
- [ ] `manage_form(action='update', operations=[...])` hoạt động end-to-end: build + backup + validate + import + publish
- [ ] `manage_form(action='update', formxml=<path>)` vẫn hoạt động (backward-compat)
- [ ] `manage_form(action='undo', formxml=<backup_path>)` vẫn hoạt động
- [ ] Field validation báo lỗi rõ ràng khi field không tồn tại (giống behavior cũ)
- [ ] Error messages không còn nhắc tới `build_form_xml`
- [ ] Build pass: `/claude-build-cli`
- [ ] Smoke test pass trên 1 form thật của entity bất kỳ
