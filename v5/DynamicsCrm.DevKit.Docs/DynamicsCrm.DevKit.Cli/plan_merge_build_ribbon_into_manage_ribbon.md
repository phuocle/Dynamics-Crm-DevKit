# Plan: Merge `build_ribbon_xml` into `manage_ribbon`

> **Prerequisite:** PRE-task phải hoàn thành trước.
> File `PRE-plan_merge_build_ribbon_into_manage_ribbon.md` đã tách toàn bộ logic của
> `BuildRibbonXmlTool.cs` (2409 dòng) ra thành 5 helper file trong
> `DynamicsCrm.DevKit.Cli/Mcp/Tools/Ribbon/`:
> - `RibbonXmlHelpers.cs` (~150 dòng, static helpers thuần XML)
> - `RibbonValidation.cs` (~150 dòng, entity/webresource check + XSD)
> - `RibbonSolutionFetcher.cs` (~80 dòng, fetch RibbonDiffXml từ solution)
> - `RibbonButtonOperations.cs` (~550 dòng, 4 operations: add/update/hide/show button)
> - `RibbonFlyoutOperations.cs` (~700 dòng, 6 operations: add/update split+flyout, hide/show item)
>
> Sau PRE-task, `BuildRibbonXmlTool.cs` còn **≤ 120 dòng** (shell entry point).
> Folder `Ribbon/` và 5 file helper **KHÔNG bị xóa** — `ManageRibbonTool` sẽ dùng chúng.

---

## Mục tiêu

Xóa hoàn toàn tool `build_ribbon_xml` (MCP-exposed), tích hợp toàn bộ logic vào `manage_ribbon`.
Tool count: **36 → 35**.

---

## Vấn đề hiện tại

| Bước | Tool | Tác dụng |
|------|------|----------|
| 1 | `build_ribbon_xml` | Build RibbonDiffXml, lưu ra file temp `.devkit/modified_ribbons/` |
| 2 | `manage_ribbon(action='update', ribbonxml=<path>)` | Đọc file đó, import vào Dataverse |

→ 2 tool call + 1 file tạm → lãng phí token, phức tạp không cần thiết.

---

## Giải pháp

Gộp thành **1 tool call duy nhất**:

```
manage_ribbon(action='update', entity_name='account', operations=[...])
```

`manage_ribbon` tự build XML nội bộ rồi import luôn — không cần file tạm, không cần tool call trung gian. Các helper từ `Ribbon/` được gọi từ bên trong `ManageRibbonTool`.

---

## Thay đổi cần thực hiện

### 1. `ManageRibbonTool.cs` — thêm `operations` param và routing mới

#### 1a. Thêm `using`

```csharp
using DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon;
```

#### 1b. Thêm parameter `operations` vào method signature

```csharp
public CallToolResult manage_ribbon(
    [Description("'list', 'buttons', 'detail', 'update', or 'undo'.")] string action,
    [Description("Entity logical name (e.g., 'account'). Required for detail/update/undo.")] string entity_name = "",
    [Description(
        "JSON array of ribbon operations for action='update'. " +
        "10 operations: add_button, update_button, hide_button, show_button, " +
        "add_split_button, update_split_button, add_flyout_static, update_flyout_static, " +
        "hide_flyout_item, show_flyout_item. " +
        "See tool description for required/optional fields per operation.")] string operations = "",
    [Description("For 'undo': backup file path from .devkit/backups/ribbons/.")] string ribbonxml = "",
    [Description("Publish after changes (default: true). Set false when batching.")] bool auto_publish = true,
    [Description("Backup current ribbon before overwriting (default: true). Backup failure blocks update.")] bool backup = true)
```

> **Lưu ý về `ribbonxml`:** Vẫn giữ param này nhưng **chỉ dành cho `undo`**. Xóa khỏi description của `action='update'`.

#### 1c. Cập nhật Description attribute của tool

```csharp
[McpServerTool(Name = "manage_ribbon", ...),
Description(
    "Retrieve and modify RibbonDiffXml for Dataverse entities via solution import.\n\n" +

    "TOOL SELECTION — READ BEFORE CHOOSING:\n" +
    "CLASSIC/LEGACY ribbon (RibbonDiffXml). DEFAULT FALLBACK for all button requests.\n" +
    "Use when: 'ribbon', 'legacy', 'classic', 'button', 'nút', 'custom button', 'action button', " +
    "'UI button', 'JavaScript button', 'sub_grid button', 'homepage grid button', or any generic button request.\n" +
    "Use manage_command ONLY for: 'modern', 'Power Fx', 'appaction', 'new UI', " +
    "'Model-Driven App command bar', 'command designer'.\n" +
    "When in doubt → always use manage_ribbon, never manage_command.\n\n" +

    "ACTIONS: list, buttons, detail, update, undo\n" +
    "- list: entities with ribbon customizations in solution 'devkit-ribbon'\n" +
    "- buttons: all ribbon buttons (OOB+custom) across form/main_grid/sub_grid. Required: entity_name\n" +
    "- detail: show current RibbonDiffXml. Required: entity_name\n" +
    "- update: build + apply ribbon changes. Required: entity_name + operations. " +
    "Auto: validate → fetch existing → apply operations → validate XSD → backup → import → publish\n" +
    "- undo: restore from backup file. Required: entity_name + ribbonxml (backup path)\n\n" +

    "SUPPORTED OPERATIONS (10): add_button, update_button, hide_button, show_button, " +
    "add_split_button, update_split_button, add_flyout_static, update_flyout_static, " +
    "hide_flyout_item, show_flyout_item\n\n" +

    "add_button REQUIRED: surface, label, library, function, enable_library, enable_function. OPTIONAL: modern_image, tooltip_title, tooltip_description, sequence (default 85)\n" +
    "update_button REQUIRED: button_id OR label. OPTIONAL: label, library, function, enable_library, enable_function, modern_image, tooltip_title, tooltip_description, sequence. NOTE: only works on custom buttons\n" +
    "hide_button REQUIRED: button_id. Supports OOB and custom\n" +
    "show_button REQUIRED: button_id. Supports OOB and custom\n" +
    "add_split_button REQUIRED: surface, label, library, function, enable_library, enable_function, items[](label,library,function,enable_library,enable_function). OPTIONAL: modern_image, tooltip_title, tooltip_description, sequence (default 85)\n" +
    "update_split_button REQUIRED: split_button_id OR label. items[]: item_label REQUIRED\n" +
    "add_flyout_static REQUIRED: surface, label, items[](label,library,function,enable_library,enable_function). OPTIONAL: modern_image, tooltip_title, tooltip_description, sequence (default 85)\n" +
    "update_flyout_static REQUIRED: flyout_id OR label. items[]: item_label REQUIRED\n" +
    "hide_flyout_item REQUIRED: flyout_label OR flyout_id + item_label\n" +
    "show_flyout_item REQUIRED: flyout_label OR flyout_id + item_label\n\n" +

    "WORKFLOW: manage_ribbon(action='update', entity_name=..., operations=[...]) [auto-publishes all by default]\n" +
    "Auto-backup before update; backup failure blocks update.\n" +
    "NOTE: Ribbon requires PublishAll (not entity-scoped publish). auto_publish=true (default) runs PublishAll synchronously. Set false when batching, then call publish_customizations once.")]
```

#### 1d. Cập nhật `case "update"` trong switch

```csharp
case "update":
    if (string.IsNullOrWhiteSpace(entity_name))
        return ErrorResult("Error: entity_name is required for action='update'.");

    if (!string.IsNullOrWhiteSpace(operations))
        return UpdateRibbonFromOperations(
            entity_name.Trim().ToLowerInvariant(),
            operations.Trim(),
            backup,
            auto_publish);

    if (!string.IsNullOrWhiteSpace(ribbonxml))
        return UpdateRibbon(
            entity_name.Trim().ToLowerInvariant(),
            ribbonxml.Trim(),
            backup,
            auto_publish);

    return ErrorResult(
        "Error: 'operations' is required for action='update'.\n" +
        "Provide a JSON array of ribbon operations, e.g. " +
        "[{\"action\":\"add_button\",\"surface\":\"form\",\"label\":\"My Button\",...}]");
```

#### 1e. Thêm private method `UpdateRibbonFromOperations`

Method này thay thế flow 2-bước cũ (build_ribbon_xml → manage_ribbon).
Được đặt ngay sau `UpdateRibbon(...)` hiện có trong file:

```csharp
private CallToolResult UpdateRibbonFromOperations(string entityName, string operationsJson, bool doBackup, bool autoPublish)
{
    // Step 1: Validate entity
    var validation = new RibbonValidation(_serviceClient);
    var entityError = validation.ValidateEntityExists(entityName);
    if (entityError != null)
        return ErrorResult(entityError);

    // Step 2: Parse operations JSON
    List<JsonElement> ops;
    try
    {
        ops = JsonSerializer.Deserialize<List<JsonElement>>(operationsJson);
        if (ops == null || ops.Count == 0)
            return ErrorResult("Error: operations must be a non-empty JSON array.");
    }
    catch (JsonException ex)
    {
        return ErrorResult($"Error: Invalid operations JSON: {ex.Message}");
    }

    // Step 3: Fetch existing RibbonDiffXml from devkit-ribbon solution
    var fetcher = new RibbonSolutionFetcher(_serviceClient);
    var existingXml = fetcher.FetchExistingRibbonDiffXml(entityName);

    // Step 4: Parse existing XML
    XDocument ribbonDoc;
    try
    {
        ribbonDoc = XDocument.Parse(existingXml);
    }
    catch (Exception ex)
    {
        return ErrorResult($"Error: Failed to parse existing RibbonDiffXml: {ex.Message}");
    }

    // Step 5: Execute operations via helper classes
    var lcid = McpHelper.GetBaseLanguageCode(_serviceClient);
    var btnOps = new RibbonButtonOperations(validation, lcid);
    var flyoutOps = new RibbonFlyoutOperations(validation, lcid);

    var summaries = new List<string>();
    var existingButtonCount = RibbonXmlHelpers.CountExistingButtons(ribbonDoc);

    foreach (var op in ops)
    {
        if (!op.TryGetProperty("action", out var actionProp))
            return ErrorResult("Error: Each operation must have an 'action' field.");

        var opAction = actionProp.GetString()?.Trim().ToLowerInvariant();
        (string error, string summary) result = opAction switch
        {
            "add_button"           => btnOps.ExecuteAddButton(ribbonDoc, entityName, op),
            "update_button"        => btnOps.ExecuteUpdateButton(ribbonDoc, entityName, op),
            "hide_button"          => btnOps.ExecuteHideButton(ribbonDoc, entityName, op),
            "show_button"          => btnOps.ExecuteShowButton(ribbonDoc, entityName, op),
            "add_split_button"     => flyoutOps.ExecuteAddSplitButton(ribbonDoc, entityName, op),
            "update_split_button"  => flyoutOps.ExecuteUpdateSplitButton(ribbonDoc, entityName, op),
            "add_flyout_static"    => flyoutOps.ExecuteAddFlyoutStatic(ribbonDoc, entityName, op),
            "update_flyout_static" => flyoutOps.ExecuteUpdateFlyoutStatic(ribbonDoc, entityName, op),
            "hide_flyout_item"     => flyoutOps.ExecuteHideFlyoutItem(ribbonDoc, entityName, op),
            "show_flyout_item"     => flyoutOps.ExecuteShowFlyoutItem(ribbonDoc, entityName, op),
            _ => ($"Error: Unknown action '{opAction}'.\n" +
                  "Valid: add_button, update_button, hide_button, show_button, " +
                  "add_split_button, update_split_button, add_flyout_static, " +
                  "update_flyout_static, hide_flyout_item, show_flyout_item", null)
        };

        if (result.error != null) return ErrorResult(result.error);
        summaries.Add(result.summary);
    }

    // Step 6: Sort CommandDefinitions, DisplayRules, EnableRules by Id
    RibbonXmlHelpers.SortChildrenById(ribbonDoc.Root?.Element("CommandDefinitions"), "CommandDefinition");
    var ruleDefsSortEl = ribbonDoc.Root?.Element("RuleDefinitions");
    RibbonXmlHelpers.SortChildrenById(ruleDefsSortEl?.Element("DisplayRules"), "DisplayRule");
    RibbonXmlHelpers.SortChildrenById(ruleDefsSortEl?.Element("EnableRules"), "EnableRule");

    // Step 7: Validate output XML against Ribbon XSD
    var xmlString = ribbonDoc.ToString(SaveOptions.None);
    var (xsdErrors, xsdWarnings) = RibbonValidation.ValidateRibbonXml(xmlString);
    if (xsdErrors.Count > 0)
        return ErrorResult($"Error: Generated XML failed Ribbon XSD validation:\n{string.Join("\n", xsdErrors)}");

    // Step 8: Backup current ribbon (before applying changes)
    string backupPath = null;
    if (doBackup)
    {
        try
        {
            backupPath = BackupCurrentRibbon(entityName);
        }
        catch (Exception ex)
        {
            if (SolutionExists())
                return ErrorResult(
                    $"[Error] Backup failed — update BLOCKED (fail-safe)\n" +
                    $"Entity: {entityName}\n" +
                    $"Message: {ex.Message}\n" +
                    "Tip: Fix the issue or set backup=false (not recommended).");
        }
    }

    if (_options.DryRun)
        return DryRunResult($"Would UPDATE ribbon for entity '{entityName}' with {ops.Count} operations.");

    // Step 9: Build solution ZIP + import
    var solutionZip = BuildSolutionZip(entityName, xmlString);
    _serviceClient.Execute(new ImportSolutionRequest
    {
        CustomizationFile = solutionZip,
        OverwriteUnmanagedCustomizations = true,
        PublishWorkflows = true
    });
    CleanupOtherEntities(entityName);

    // Step 10: Publish
    var published = TryPublish(autoPublish, entityName);

    // Step 11: Build result
    var newButtonCount = RibbonXmlHelpers.CountExistingButtons(ribbonDoc);
    var sb = new StringBuilder();
    sb.AppendLine($"[ManageRibbon] update — {entityName}");
    sb.AppendLine($"Solution: {SOLUTION_NAME}");
    sb.AppendLine($"Operations: {ops.Count}");
    foreach (var s in summaries)
        sb.AppendLine($"  ✓ {s}");
    if (xsdWarnings.Count > 0)
    {
        sb.AppendLine($"XSD Warnings ({xsdWarnings.Count}):");
        foreach (var w in xsdWarnings)
            sb.AppendLine($"  ⚠ {w}");
    }
    sb.AppendLine($"Existing buttons preserved: {existingButtonCount}");
    sb.AppendLine($"Total buttons after: {newButtonCount}");
    sb.AppendLine($"Status: Updated successfully");
    sb.AppendLine($"Backup: {backupPath ?? "skipped"}");
    sb.AppendLine($"Published: {(published ? "yes" : "no — run publish_customizations manually")}");
    sb.AppendLine();
    if (backupPath != null)
        sb.AppendLine($"To rollback: manage_ribbon(action='undo', entity_name='{entityName}', ribbonxml='{backupPath}')");

    return new CallToolResult
    {
        Content = [new TextContentBlock { Text = sb.ToString() }],
        StructuredContent = JsonSerializer.SerializeToElement(new ManageRibbonResult
        {
            Action = "update",
            EntityName = entityName,
            Status = published || !autoPublish ? "updated" : "updated_publish_failed",
            BackupPath = backupPath,
            Published = published
        })
    };
}
```

#### 1f. Cập nhật text trong ListEntitiesWithRibbon và DetailRibbon

Xóa các reference đến `build_ribbon_xml` trong Tip messages:

| Vị trí | Cũ | Mới |
|--------|-----|------|
| `ListEntitiesWithRibbon()` line ~159 | `"Tip: Use build_ribbon_xml + manage_ribbon(action='update') to add your first ribbon button."` | `"Tip: Use manage_ribbon(action='update', entity_name=..., operations=[...]) to add your first ribbon button."` |
| `DetailRibbon()` line ~492 | `"Tip: Use build_ribbon_xml to create ribbon buttons."` | `"Tip: Use manage_ribbon(action='update', entity_name='{entityName}', operations=[...]) to create ribbon buttons."` |

---

### 2. `BuildRibbonXmlTool.cs` — XÓA file

File này (sau PRE-task chỉ còn ~120 dòng shell) không còn expose MCP tool nữa.
Xóa hoàn toàn:

```
DynamicsCrm.DevKit.Cli/Mcp/Tools/BuildRibbonXmlTool.cs
```

> **Không xóa** folder `Ribbon/` và 5 helper file — chúng được giữ và dùng bởi `ManageRibbonTool`.

---

### 3. `StructuredResults.cs` — xóa `BuildRibbonXmlResult`

File: `DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/StructuredResults.cs`

Xóa class `BuildRibbonXmlResult` (khoảng 25 dòng):

```csharp
// XÓA toàn bộ class này:
public sealed class BuildRibbonXmlResult
{
    [JsonPropertyName("entityName")] public string EntityName { get; set; }
    [JsonPropertyName("status")] public string Status { get; set; }
    [JsonPropertyName("operationsCount")] public int OperationsCount { get; set; }
    [JsonPropertyName("operationSummaries")] public List<string> OperationSummaries { get; set; }
    [JsonPropertyName("existingButtonsPreserved")] public int ExistingButtonsPreserved { get; set; }
    [JsonPropertyName("totalButtons")] public int TotalButtons { get; set; }
    [JsonPropertyName("ribbonXmlPath")] public string RibbonXmlPath { get; set; }
}
```

Giữ nguyên: `ManageRibbonResult`, `RibbonSurfaceButtons`, `RibbonButtonInfo`.

---

### 4. `McpServerHost.cs` — xóa registration của `BuildRibbonXmlTool`

File: `DynamicsCrm.DevKit.Cli/Mcp/McpServerHost.cs`

Tìm và xóa dòng đăng ký `BuildRibbonXmlTool`. Thông thường có dạng:

```csharp
.WithTools<BuildRibbonXmlTool>()
// hoặc
builder.Services.AddSingleton<BuildRibbonXmlTool>();
```

Giữ nguyên registration của `ManageRibbonTool`.

---

### 5. `AGENTS.md` — cập nhật danh sách MCP Tools

Tại section **MCP Tools (36)**:

- Xóa `build_ribbon_xml` khỏi danh sách
- Đổi comment header thành `### MCP Tools (35)`
- Cập nhật tương ứng trong `CLAUDE.md` (nếu có copy riêng)

---

### 6. Codex docs

File: `DynamicsCrm.DevKit.Docs/codex/35.manage_ribbon.md` (nếu tồn tại)

Cập nhật:
- Thêm `operations` vào danh sách parameters
- Xóa reference đến workflow `build_ribbon_xml → manage_ribbon`
- Mô tả flow mới: `manage_ribbon(action='update', operations=[...])` → auto build + import + publish

---

## Files thay đổi

| File | Loại thay đổi |
|------|--------------|
| `Cli/Mcp/Tools/ManageRibbonTool.cs` | **Sửa** — thêm `operations` param, routing `UpdateRibbonFromOperations`, cập nhật Description + Tip messages |
| `Cli/Mcp/Tools/BuildRibbonXmlTool.cs` | **Xóa** (shell ~120 dòng sau PRE-task) |
| `Cli/Mcp/Tools/Models/StructuredResults.cs` | **Sửa** — xóa `BuildRibbonXmlResult` |
| `Cli/Mcp/McpServerHost.cs` | **Sửa** — xóa registration `BuildRibbonXmlTool` |
| `AGENTS.md` | **Sửa** — 36 → 35, xóa `build_ribbon_xml` |
| `DynamicsCrm.DevKit.Docs/codex/35.manage_ribbon.md` | **Sửa** (nếu tồn tại) |

**Không thay đổi:**

| File/Folder | Lý do |
|-------------|-------|
| `Cli/Mcp/Tools/Ribbon/*.cs` (5 files) | Giữ nguyên — ManageRibbonTool dùng chúng |
| `action='undo'` logic trong ManageRibbonTool | Giữ nguyên — `ribbonxml` param vẫn dùng cho undo |
| `action='list'`, `action='buttons'`, `action='detail'` | Giữ nguyên |
| `BackupCurrentRibbon`, `BuildSolutionZip`, `CleanupOtherEntities` | Giữ nguyên — được gọi từ `UpdateRibbonFromOperations` |
| XSD validation logic | Đã ở `RibbonValidation.cs` (static method) |

---

## Flow sau khi merge

```
AI → manage_ribbon(action='update', entity_name='account', operations=[...])
       ↓
       1. Validate entity (RibbonValidation.ValidateEntityExists)
       2. Parse operations JSON
       3. Fetch existing RibbonDiffXml (RibbonSolutionFetcher)
       4. Apply operations:
          - Button ops    → RibbonButtonOperations (add/update/hide/show)
          - Flyout/Split  → RibbonFlyoutOperations (add/update split+flyout, hide/show item)
       5. Sort by Id (RibbonXmlHelpers.SortChildrenById)
       6. Validate XSD (RibbonValidation.ValidateRibbonXml)
       7. Backup → .devkit/backups/ribbons/
       8. Build solution ZIP + ImportSolution
       9. CleanupOtherEntities
      10. PublishAll (nếu auto_publish=true)
       ↓
     ManageRibbonResult { Action, EntityName, Status, BackupPath, Published }
```

---

## Thứ tự thực hiện

```
Bước 1: Cập nhật ManageRibbonTool.cs
         - Thêm using DynamicsCrm.DevKit.Cli.Mcp.Tools.Ribbon
         - Thêm operations param vào method signature
         - Thêm routing case "update" mới
         - Thêm private method UpdateRibbonFromOperations
         - Cập nhật Description attribute
         - Cập nhật Tip messages trong ListEntitiesWithRibbon + DetailRibbon

Bước 2: Xóa BuildRibbonXmlTool.cs

Bước 3: Xóa BuildRibbonXmlResult trong StructuredResults.cs

Bước 4: Xóa registration BuildRibbonXmlTool trong McpServerHost.cs

Bước 5: Cập nhật AGENTS.md (36 → 35)

Bước 6: /claude-build-cli → 0 error, 0 warning mới

Bước 7: Restart MCP + smoke test
```

---

## Kiểm tra sau khi merge

- [ ] `manage_ribbon(action='update', entity_name='account', operations=[...])` → trả về `[ManageRibbon] update`, có `Operations:`, có `Status: Updated successfully`, có backup path
- [ ] `manage_ribbon(action='undo', ...)` vẫn hoạt động (ribbonxml param vẫn dùng được)
- [ ] `manage_ribbon(action='list')`, `action='buttons'`, `action='detail'` không thay đổi behavior
- [ ] Tool `build_ribbon_xml` **không còn tồn tại** khi list MCP tools
- [ ] Tool count = **35**
- [ ] `/claude-build-cli` pass: 0 error, không phát sinh warning mới
- [ ] Restart MCP process:
  ```powershell
  Get-Process | Where-Object { $_.CommandLine -like "*devkit*mcp*" } | Stop-Process -Force
  ```
- [ ] Smoke test:
  1. `manage_ribbon(action='buttons', entity_name='account')` → lấy 1 button id reference
  2. `manage_ribbon(action='update', entity_name='account', operations='[{"action":"add_button","surface":"form","label":"DevKit Test","library":"new_/test.js","function":"F.test","enable_library":"new_/test.js","enable_function":"F.isEnabled"}]')`
  3. Kiểm tra: response text chứa `[ManageRibbon] update`, `Operations: 1`, `✓ add_button:`, `Status: Updated successfully`, backup path
  4. `manage_ribbon(action='undo', entity_name='account', ribbonxml='<backup path>')` → kiểm tra rollback hoạt động
- [ ] `git diff --stat`: thấy đúng 4 file thay đổi (`ManageRibbonTool.cs`, `StructuredResults.cs`, `McpServerHost.cs`, `AGENTS.md`) + 1 file xóa (`BuildRibbonXmlTool.cs`). Không có file nào trong `Ribbon/` bị đụng.

---

## Risks

| Risk | Mitigation |
|------|------------|
| `RibbonXmlHelpers.CountExistingButtons` chưa là static public sau PRE | Kiểm tra trong PRE-task checklist: method phải là `internal static` |
| `RibbonValidation.ValidateRibbonXml` chưa là static public sau PRE | Kiểm tra: method phải là `public static` (không cần instance) |
| `RibbonButtonOperations` / `RibbonFlyoutOperations` chưa có public Execute* methods | Kiểm tra: tất cả Execute* phải `public` |
| Backup xảy ra trước khi import → nhưng import fail | Flow đúng: backup trước, import sau. Nếu import fail, backup đã có → rollback thủ công |
| `manage_ribbon(action='update', ribbonxml=<path>)` (old flow) bị break | Old flow vẫn hoạt động: routing check `operations` trước, nếu empty thì fall through sang `ribbonxml` |
| `_options.DryRun` check ở đâu | Giữ nguyên vị trí sau backup, trước import (giống `UpdateRibbon` hiện tại) |
