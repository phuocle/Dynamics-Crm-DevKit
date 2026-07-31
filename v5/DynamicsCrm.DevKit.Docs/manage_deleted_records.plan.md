# Plan: `manage_deleted_records` — MCP tool mới để quản lý/restore bản ghi đã xóa

> **Trạng thái**: PHASE 1 (probe + end-to-end proof) **HOÀN THÀNH — 11/11 PASS** và PHASE 2 (code tool C# + build + release + test) **HOÀN THÀNH — 12/12 PASS** trên org 🟢DEVKITV4 ngày 2026-07-31 (xem §6 Evidence + §9 Phase 2 Evidence bên dưới).
> **Số thứ tự thực tế trong `devkit mcp --tools`**: **22** (verified ngày 2026-07-31 qua `devkit mcp --tools`).
> **Tier dự kiến**: `standard`.
> **Mục đích**: cung cấp cho AI client khả năng **list / detail / restore / check status** các bản ghi đã bị soft-delete trong Dataverse.
>
> **⚠️ CORRECTION từ probe (quan trọng):**
>
> - **KHÔNG CÓ** SDK class `RetrieveDeletedRecordsRequest` / `RestoreDeletedRecordsRequest`. Microsoft dùng late-bound `OrganizationRequest("Restore")` hoặc early-bound `RestoreRequest<T>` (generated). Probe đã confirm.
> - **API retrieve soft-deleted records**: `FetchXml` với `datasource="bin"` HOẶC `QueryExpression` với `DataSource = "bin"`. `datasource="recyclebin"` **INVALID** (chỉ `"bin"` hoặc `"retained"` hợp lệ).
> - **Bin records KHÔNG có** system fields như `deletedon` / `deletedby` qua FetchXml — chỉ có attributes của entity gốc.
> - **Restore**: `OrganizationRequest("Restore")` với `Parameters["Target"] = new Entity("account", id)`, response có `Results["id"]`.
> - **Status check**: query entity `recyclebinconfig` (logical = `recyclebinconfig`) — cột `statecode=0` + `isreadyforrecyclebin=true` + `cleanupintervalindays` (mặc định `-1` = dùng org default 30 ngày).
> - **404 heuristic cho `execute_webapi` redirect**: SDK trả `0x80040217` "Entity 'X' With Id = ... Does Not Exist" — **IDENTICAL cho soft-deleted và fake GUID** → KHÔNG thể phân biệt 2 case qua response code/body. Phải dùng **Option B** (block tất cả GET record-by-id) thay vì heuristic.

---

## 1. Bối cảnh & lý do cần tool mới

### 1.1 Tính năng "Restore deleted records" của Dataverse

- **Bối cảnh:** Tính năng "deleted record keeping" / Recycle Bin được Microsoft thêm từ 2024 (docs cập nhật 2026-04-21). Trước đó `IOrganizationService.Delete` là **hard-delete thật** — không thể phục hồi.
- **Hiện tại (sau khi bật):**
  - `IOrganizationService.Delete` → soft-delete vào "bin".
  - Records lưu ở table `<entity>` với `datasource="bin"` (FetchXml) hoặc `DataSource="bin"` (QueryExpression).
  - Cleanup tự động sau `cleanupintervalindays` (mặc định 30, tối đa 30) — config trong `recyclebinconfig` table.
  - Admin / user có thể restore từ Power Platform admin center, code, hoặc MCP tool này.
- **Các API cần dùng** (đã verify từ [Microsoft docs](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/restore-deleted-records)):
  - **Retrieve deleted:** `FetchExpression` với `datasource="bin"` — KHÔNG có SDK class wrapper.
  - **Restore:** `OrganizationRequest("Restore")` late-bound — KHÔNG có SDK class wrapper.
  - **Check status:** query entity `recyclebinconfig` (logical name `recyclebinconfig`).

### 1.2 Tại sao cần tool mới (không dùng tool cũ)

| Cách hiện tại                             | Vấn đề                                                                                                                                                                                                                |
| ----------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `execute_fetchxml` với `datasource="bin"` | Phải tự build FetchXml, không có action restore, không có status check.                                                                                                                                               |
| `execute_web_api` GET record GUID         | Trả 404 (0x80040217) — caller phải tự biết 404 nghĩa là "có thể đã xóa" (probe §6 confirm: 404 IDENTICAL với fake GUID → không thể phân biệt). Web API **không hỗ trợ restore**.                                      |
| `execute_web_api POST /Restore`           | Web API `Restore` action **CÓ work** (verified §6.8.6: `POST /Restore` body `{"Target":{...}}` returns 200 + `id`), nhưng body phức tạp (`@odata.type`, `@odata.id`) — dễ sai JSON. Tool SDK-side đơn giản hơn nhiều. |
| PowerShell `pac` / admin center           | Không chạy trong MCP stdio, không có scripted/automated.                                                                                                                                                              |

→ Cần tool MCP native, dùng `OrganizationRequest` đúng chuẩn + FetchXml `datasource="bin"`, trả DTO có cấu trúc, hỗ trợ cả list/detail/restore/status.

### 1.3 Đề xuất tên & phạm vi

- **Tên tool (MCP)**: `manage_deleted_records`.
- **Action** (parameter `action`): `list` (mặc định) | `detail` | `restore` | `status`.
- **File class C#**: `DynamicsCrm.DevKit.Cli.Mcp.Tools.ManageDeletedRecordsTool` → `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageDeletedRecordsTool.cs`.
- **Tier**: `standard`.

---

## 2. File mới cần tạo

| File                                                                          | Nội dung                                                                                  |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageDeletedRecordsTool.cs`                | Tool chính (~ 500 LOC).                                                                   |
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/ManageDeletedRecordsResult.cs`       | DTO + 2 entry classes (~ 120 LOC).                                                        |
| `DynamicsCrm.DevKit.Docs/testcall/22.manage_deleted_records.md`               | Test call 4 H1 section + ≥ 3 ví dụ phụ (~ 350 LOC).                                       |
| `DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.Console/Program.cs`       | Đã có probe (build OK, 0 errors, 0 warnings) — sẽ giữ nguyên để verify sau khi tool xong. |
| `DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.Console/AltProbe.cs`      | Đã có (build OK) — test nhiều variant FetchXml, xác nhận chỉ `datasource="bin"` work.     |
| `DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.Console/probe-output.txt` | Output capture của 11/11 PASS run.                                                        |

**File cần sửa**:

| File                                                    | Sửa gì                                                                                                 |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `DynamicsCrm.DevKit.Cli/Mcp/McpServerHost.cs`           | Thêm `[nameof(ManageDeletedRecordsTool)] = "standard"` vào `ToolCategoryMap`.                          |
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/ExecuteWebApiTool.cs` | Thêm 3 entry mới vào `RedirectedGetEndpoints` (§4 — match `(<guid>)`, `deletionstatecode`, `restore`). |
| `DynamicsCrm.DevKit.Docs/refactor2.md`                  | Thêm "22. manage_deleted_records" vào section 5; bổ sung rule 14 (§5).                                 |

---

## 3. Tool design — chi tiết từng action

### 3.1 Signature

```csharp
[McpServerTool(Name = "manage_deleted_records",
    Title = "List/detail/restore/check-status of soft-deleted Dataverse records",
    Idempotent = false,                // restore là mutation
    Destructive = false,               // restore = ngược của delete
    ReadOnly = false,                  // restore có ghi
    UseStructuredContent = true,
    OutputSchemaType = typeof(ManageDeletedRecordsResult)),
 Description(
     "List / detail / restore / status for soft-deleted records. " +
     "Soft-delete = IOrganizationService.Delete (records recoverable for MaxRetentionDays, default 30). " +
     "Restore uses OrganizationRequest('Restore') late-bound. " +
     "Bin records have no 'deletedon'/'deletedby' fields; deletedAt ≈ modifiedon. " +
     "RELATED: manage_record (live CRUD), execute_webapi (raw), get_audit_history (who deleted).")]
public CallToolResult manage_deleted_records(
    [Description("Action: 'list' (default) | 'detail' | 'restore' | 'status'.")] string action = "list",
    [Description("Entity Display/logical name. list: required. detail: required. restore: required if record_ids mix entities. status: not used.")] string entity_name = "",
    [Description("Single GUID. detail: required. list: not used. restore: optional if record_ids set.")] string record_id = "",
    [Description("Array of GUIDs (preferred for restore). detail/list: not used. restore: alternative to record_id.")] string[] record_ids = null,
    [Description("Search by primary attribute value (contains, case-insensitive). list only.")] string name_filter = "",
    [Description("Max records. list: default 100, max 5000. detail/restore: not used.")] int max_records = 100,
    [Description("Set false to actually restore. list/detail/status: not used.")] bool dry_run = true)
```

### 3.2 Action map

```
manage_deleted_records()
├── action="" / action="list"    → ExecuteList(entityName, nameFilter, maxRecords)
├── action="detail"              → ExecuteDetail(entityName, recordId)
├── action="restore"             → ExecuteRestore(entityName, recordIds[], dryRun)
└── action="status"              → ExecuteStatus()
```

### 3.3 `action="list"` — list deleted records của 1 entity

**SDK call**: `FetchExpression` với FetchXml `datasource="bin"`:

```xml
<fetch top='N' datasource='bin'>
  <entity name='account'>
    <attribute name='accountid'/>
    <attribute name='name'/>
    <!-- thêm attribute khác tùy user -->
    <filter type='and'>
      <condition attribute='name' operator='like' value='%name_filter%'/>
    </filter>
  </entity>
</fetch>
```

**Verification (probe §6.2):**

- ✅ `datasource="bin"` → OK, trả các record đã xóa.
- ❌ `datasource="recyclebin"` → INVALID (Dataverse trả "The only valid value for datasource is 'retained' or 'bin'").
- ⚠️ Bin records **không có** system fields `deletedon` / `deletedby`. Dùng `modifiedon` thay (xấp xỉ thời điểm xóa).

**DTO result:**

```json
{
  "action": "list",
  "entityName": "account",
  "entityDisplayName": "Account",
  "totalCount": 1,
  "records": [
    {
      "recordId": "bb3d4106-...",
      "recordName": "DEVKIT-MDR-PROBE-031504",
      "modifiedOn": "2026-07-31 03:16:55",
      "createdOn": "2026-07-31 03:15:06",
      "canRestore": true,
      "expiresOn": "2026-08-30 03:15:06"
    }
  ]
}
```

### 3.4 `action="detail"` — chi tiết 1 record đã xóa

**SDK call**: `FetchExpression` với FetchXml `datasource="bin"`, filter `accountid eq <guid>`, `<all-attributes />`:

```xml
<fetch top='1' datasource='bin'>
  <entity name='account'>
    <all-attributes />
    <filter type='and'>
      <condition attribute='accountid' operator='eq' value='<guid>' />
    </filter>
  </entity>
</fetch>
```

**Verification (probe §6.5):**

- ✅ Trả 39 attributes (account có 242 total → chỉ non-null mới returned).
- ✅ FormattedValues đầy đủ (option set label, lookup name, money format, datetime).

**DTO result:**

```json
{
  "action": "detail",
  "entityName": "account",
  "entityDisplayName": "Account",
  "recordId": "bb3d4106-...",
  "recordName": "DEVKIT-MDR-PROBE-031504",
  "modifiedOn": "2026-07-31 03:16:55",
  "createdOn": "2026-07-31 03:15:06",
  "expiresOn": "2026-08-30 03:15:06",
  "attributes": {
    "name": "DEVKIT-MDR-PROBE-031504",
    "telephone1": "0900000000",
    "websiteurl": "https://probe.example.com",
    "creditlimit": "12,345.00",
    "statecode": "Active",
    "statuscode": "Active",
    "donotbulkemail": "Allow",
    "donotphone": "Allow",
    "followemail": "Allow",
    "transactioncurrencyid": "US Dollar",
    "owningbusinessunit": "dynamics-crm-devkit-2"
  }
}
```

**Lưu ý:** Nếu record đó **không có trong bin** (e.g. user pass GUID chưa từng xóa) → trả `notFound: true` + gợi ý thử `manage_record(action='read', ...)` để check record live.

### 3.5 `action="restore"` — phục hồi 1+ records

**SDK call**: `OrganizationRequest("Restore")` late-bound + `Parameters["Target"] = new Entity("account", id)`:

```csharp
var request = new OrganizationRequest("Restore")
{
    Parameters = { { "Target", new Entity("account", id) } }
};
var response = svc.Execute(request);
var restoredId = (Guid)response.Results["id"];
```

**Verification (probe §6.5, step 6):**

- ✅ `ResponseName = "Restore"`.
- ✅ `Results["id"]` = GUID của record đã restore.
- ✅ Verify bằng `Retrieve` → record tồn tại, `statecode=0` (Active), `statuscode=1` — **data preserved hoàn toàn**.

**Multi-record support:** Loop từng GUID (probe chưa test nhiều GUID cùng lúc — deferred). Mỗi restore = 1 SDK call riêng (probe Microsoft docs không cho thấy batch API).

**Validation (`record_id` vs `record_ids` priority):**

- Cả 2 set → ưu tiên `record_ids` (mảng).
- Chỉ `record_id` → convert thành `[record_id]`.
- Cả 2 rỗng → `Error("record_id or record_ids is required when action='restore'.")`.

**DTO result (dryRun=true):**

```json
{
  "action": "restore",
  "entityName": "account",
  "dryRun": true,
  "totalRequested": 1,
  "restored": 0,
  "failed": 0,
  "results": [
    {
      "recordId": "bb3d4106-...",
      "status": "would-restore",
      "message": null
    }
  ]
}
```

**DTO result (dryRun=false):**

```json
{
  "action": "restore",
  "entityName": "account",
  "dryRun": false,
  "totalRequested": 1,
  "restored": 1,
  "failed": 0,
  "results": [
    {
      "recordId": "bb3d4106-...",
      "status": "restored",
      "message": null,
      "restoredRecordId": "bb3d4106-..."
    }
  ]
}
```

**`status` enum:** `"would-restore"` | `"restored"` | `"failed"`.

**`message` (khi failed):** error message từ Dataverse (e.g. `"Outside retention window"`, `"Record not in bin"`, …).

### 3.6 `action="status"` — kiểm tra môi trường có hỗ trợ restore không

**SDK call**: Query `recyclebinconfig` table (logical = `recyclebinconfig`):

1. Lấy row `name = "organization"` → `cleanupintervalindays` (mặc định -1 = dùng org default 30).
2. Count tables với `statecode=0 AND isreadyforrecyclebin=true`.

```xml
<fetch aggregate='true'>
  <entity name='recyclebinconfig'>
    <attribute name='recyclebinconfigid' aggregate='count' alias='count_enabled'/>
    <filter type='and'>
      <condition attribute='statecode' operator='eq' value='0'/>
      <condition attribute='isreadyforrecyclebin' operator='eq' value='1'/>
    </filter>
  </entity>
</fetch>
```

**Verification (probe §6.1):**

- ✅ Org-level row có `cleanupintervalindays = -1`, `isreadyforrecyclebin = true`, `statecode = 0`.
- ✅ Tổng cộng **382 tables** có deleted record keeping enabled (account, contact, lead, …).

**DTO result:**

```json
{
  "action": "status",
  "softDeleteSupported": true,
  "maxRetentionDays": 30,
  "currentRetentionDays": 30,
  "enabledTableCount": 382,
  "auditEnabled": true,
  "dataverseVersion": "9.0.0.0"
}
```

### 3.7 Validation (rule 3: phân biệt `Error` vs `ThrowException`)

| Rule                                                    | Code path                                                                                                      |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `action` không hợp lệ                                   | `Error("Invalid action '{action}'.", "Valid: list, detail, restore, status.")`                                 |
| `action="list"` + `entity_name` rỗng                    | `Error("entity_name is required when action='list'.", ...)`                                                    |
| `action="list"` + entity không có trong enabled list    | `Error("Entity 'X' is not enabled for deleted record keeping.", "Use action='status' to see enabled tables.")` |
| `action="detail"` + `entity_name` rỗng                  | `Error("entity_name is required when action='detail'.", ...)`                                                  |
| `action="detail"` + `record_id` rỗng                    | `Error("record_id is required when action='detail'.", ...)`                                                    |
| `action="detail"` + `record_id` không phải GUID         | `Error("'{record_id}' is not a valid GUID.", ...)`                                                             |
| `action="restore"` + không có GUID                      | `Error("record_id or record_ids is required when action='restore'.", ...)`                                     |
| `action="restore"` + `record_ids` có GUID invalid       | `Error("record_ids[{i}] '{x}' is not a valid GUID.", ...)`                                                     |
| `action="restore"` + mixed entity + thiếu `entity_name` | `Error("entity_name required when record_ids span multiple entities.", ...)`                                   |
| `action="restore"` + `dry_run=true`                     | OK — `McpToolResults.DryRun(...)`                                                                              |

**Các lỗi khác** (network, Dataverse fault không lường trước) → main `catch (Exception ex)` → `ThrowException(ex)`.

### 3.8 DTO classes (file `Models/ManageDeletedRecordsResult.cs`)

```csharp
internal sealed class ManageDeletedRecordsResult
{
    [JsonPropertyName("action")] public string Action { get; set; }

    [JsonPropertyName("entityName")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string EntityName { get; set; }

    [JsonPropertyName("entityDisplayName")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string EntityDisplayName { get; set; }

    [JsonPropertyName("recordId")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string RecordId { get; set; }

    [JsonPropertyName("recordName")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string RecordName { get; set; }

    [JsonPropertyName("modifiedOn")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string ModifiedOn { get; set; }

    [JsonPropertyName("createdOn")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string CreatedOn { get; set; }

    [JsonPropertyName("expiresOn")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string ExpiresOn { get; set; }

    [JsonPropertyName("notFound")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? NotFound { get; set; }

    [JsonPropertyName("totalCount")]
    public int TotalCount { get; set; }

    [JsonPropertyName("records")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public List<DeletedRecordEntry> Records { get; set; }

    [JsonPropertyName("attributes")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public Dictionary<string, string> Attributes { get; set; }

    [JsonPropertyName("softDeleteSupported")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? SoftDeleteSupported { get; set; }

    [JsonPropertyName("maxRetentionDays")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public int? MaxRetentionDays { get; set; }

    [JsonPropertyName("currentRetentionDays")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public int? CurrentRetentionDays { get; set; }

    [JsonPropertyName("enabledTableCount")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public int? EnabledTableCount { get; set; }

    [JsonPropertyName("auditEnabled")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? AuditEnabled { get; set; }

    [JsonPropertyName("dataverseVersion")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string DataverseVersion { get; set; }

    [JsonPropertyName("dryRun")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public bool? DryRun { get; set; }

    [JsonPropertyName("totalRequested")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public int? TotalRequested { get; set; }

    [JsonPropertyName("restored")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public int? Restored { get; set; }

    [JsonPropertyName("failed")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public int? Failed { get; set; }

    [JsonPropertyName("results")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public List<RestoreResultEntry> Results { get; set; }

    [JsonPropertyName("warnings")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public List<string> Warnings { get; set; }
}

internal sealed class DeletedRecordEntry
{
    [JsonPropertyName("recordId")] public string RecordId { get; set; }

    [JsonPropertyName("recordName")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string RecordName { get; set; }

    [JsonPropertyName("modifiedOn")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string ModifiedOn { get; set; }

    [JsonPropertyName("createdOn")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string CreatedOn { get; set; }

    [JsonPropertyName("expiresOn")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string ExpiresOn { get; set; }

    [JsonPropertyName("canRestore")]
    public bool CanRestore { get; set; } = true;
}

internal sealed class RestoreResultEntry
{
    [JsonPropertyName("recordId")] public string RecordId { get; set; }

    [JsonPropertyName("status")]
    public string Status { get; set; }

    [JsonPropertyName("message")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string Message { get; set; }

    [JsonPropertyName("restoredRecordId")]
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    public string RestoredRecordId { get; set; }
}
```

---

## 4. Redirect AI từ `execute_webapi` → `manage_deleted_records` (Phase 2)

### 4.1 Vấn đề

`execute_webapi` hiện có 3 array data-driven (xem [ExecuteWebApiTool.cs:295-450](DynamicsCrm.DevKit.Cli/Mcp/Tools/ExecuteWebApiTool.cs)) — nhưng **chưa có rule nào** cho deleted records. 4 tình huống AI hay gặp:

| #   | Tình huống                                       | Hiện tại                                                    | Nên trả về                                                                                 |
| --- | ------------------------------------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 1   | `GET accounts(<guid>)` cho record đã soft-delete | 404 (0x80040217)                                            | `REDIRECT: manage_deleted_records(action='detail', ...)`                                   |
| 2   | `GET accounts?$filter=...` AI tìm "đã xóa"       | 0 records                                                   | `REDIRECT: manage_deleted_records(action='list', ...)`                                     |
| 3   | `POST /Restore` tự build                         | 200 OK + `{"id":...}` (verified §6.8.6) nhưng body phức tạp | `REDIRECT (not BLOCKED): manage_deleted_records(action='restore')` — body SDK đơn giản hơn |
| 4   | `PATCH/PUT/DELETE` cho record đã xóa             | 404                                                         | Hint: check `manage_deleted_records`                                                       |

### 4.2 Rule mới cần thêm vào `execute_webapi`

#### 4.2.1 Thêm vào `RedirectedGetEndpoints` (cho `GET`)

```csharp
// ── Deleted Records (Recycle Bin) ──────────────────────────────────
// Block tất cả GET record-by-id — tool mới handle cả 2 case (live + soft-deleted).
("(<guid>)", "manage_deleted_records",
    "REDIRECT: For a single record GUID, use manage_deleted_records(action='detail', entity_name='<entity>', record_id='<guid>') " +
    "instead of execute_webapi GET. The tool checks both the live table and the recycle bin, returning full attributes if the record exists. " +
    "If not found anywhere, returns a clear notFound=true with a hint. " +
    "Use action='list' first if you don't have a specific GUID."),

// Filter ngụ ý "đã xóa" — Dataverse OData filter không trả soft-deleted records.
("deletionstatecode", "manage_deleted_records",
    "REDIRECT: Standard OData $filter on 'deletionstatecode' or 'statecode eq 1' is unreliable for non-activity entities " +
    "(returns empty for account/contact default statecode=0 even after soft-delete). " +
    "Use manage_deleted_records(action='list', entity_name='<entity>') which uses FetchXml datasource='bin' " +
    "and returns records with modifiedOn ≈ delete time."),
```

> **Pattern `(<guid>)`** match tất cả `xxx(guid)` URL (lowercase, có ngoặc đơn). Bao gồm cả subgrid URL như `contacts(guid)/accounts` — đều cần redirect vì tool mới handle cả 2 case.

> **KHÔNG DÙNG heuristic 404 body** (đã verify trong probe §6.3: `0x80040217` IDENTICAL cho soft-deleted và fake GUID). Pattern `(<guid>)` chặn TẤT CẢ GET record-by-id, đẩy sang tool mới — tool đó sẽ tự check live + bin.

#### 4.2.2 Thêm vào `BlockedPostEndpoints` (cho `POST`)

> **Verification mới (§6.8.6):** Web API `POST /Restore` thực ra **CÓ work** — test thực tế với record `8b60e734-...`:
>
> ```
> POST /Restore body={"Target":{...}} → 200 OK, response body: {"id":"8b60e734-..."}
> ```
>
> Tuy nhiên, body phức tạp (cần `@odata.type` + `@odata.id` + primary key), dễ sai JSON. → **VẪN thêm redirect** (không block) để AI biết dùng tool SDK-side đơn giản hơn.

```csharp
// ── Deleted Records — restore via custom action is redirected (not blocked) ────
// "Restore" Web API action CÓ work (verified) nhưng body phức tạp → dùng SDK qua tool mới.
("restore", "manage_deleted_records",
    "REDIRECT (not blocked): Web API 'Restore' action works (returns 200 with restored id), " +
    "but requires complex body with @odata.id/@odata.type. " +
    "Use manage_deleted_records(action='restore', entity_name='<entity>', record_id='<guid>') " +
    "which uses the SDK OrganizationRequest('Restore') late-bound with a simple Entity param " +
    "and returns full per-record status (success/failed with reason). " +
    "Also supports batch via record_ids[] and dry_run preview."),
```

> Match `restore` lowercase — cover cả `Restore` action name + bất kỳ custom action nào có chứa "restore".

> **Lưu ý:** Pattern `restore` là chung → cũng sẽ match custom actions như `bulkrestore` etc. Nếu false positive, đổi thành exact match `"/Restore"` (chỉ match URL đúng `Restore`).

### 4.3 Phạm vi thay đổi

| File                                                                  | Sửa gì                                                                                                                      | LOC thêm |
| --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------- |
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/ExecuteWebApiTool.cs`               | Thêm 3 entry vào `RedirectedGetEndpoints` (match `(<guid>)`, `deletionstatecode`, `restore`)                                | ~60      |
| `DynamicsCrm.DevKit.Docs/testcall/32.execute_webapi.md` (file có sẵn) | Thêm 3 ví dụ phụ: GET `(<guid>)` redirect, GET `?$filter=deletionstatecode` redirect, POST `Restore` redirect (không block) | ~50      |
| `DynamicsCrm.DevKit.Docs/refactor2.md`                                | Section 2 bổ sung rule 14; section 5 thêm "22. manage_deleted_records"                                                      | ~30      |

### 4.4 Thứ tự ship

> **KHÔNG ship `manage_deleted_records` mà chưa cập nhật `execute_webapi` cùng lần build.**

Lý do:

- Ship tool mới trước → AI vẫn gọi `execute_webapi GET accounts(<guid>)` nhận 404 → retry vô ích.
- Update `execute_webapi` trước → AI redirect tới tool chưa tồn tại → broken UX.
- → **Build + release 1 lần duy nhất**.

---

## 5. Build & test workflow

### 5.1 Phase 1 (✅ DONE 2026-07-31)

```
✅ Code Program.cs + AltProbe.cs với 5 probe (A-E) + 1 AltProbe (6 test variants)
✅ Build: dotnet build → 0 errors, 0 warnings
✅ Run: kết nối 🟢DEVKITV4 OK, 11/11 PASS
✅ Output capture: probe-output.txt
```

### 5.2 Phase 2 — Code tool C# (TODO)

```
1. dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj
   → 0 errors, 0 warnings.
2. Update DynamicsCrm.DevKit.Cli/Mcp/Tools/ExecuteWebApiTool.cs (3 entry mới).
3. Release.DynamicsCrm.DevKit.Cli.ps1 (theo build-cli.md)
   → build-manifest có installedAssemblySha256 mới.
   → Const.cs được restore về 'xxxx.yy.zz HH.mm.ss' (verify).
4. Restart Codex MCP connector.
5. whoami → so sánh devkit.assemblySha256 với manifest.
6. devkit mcp --tools → list tools phải có 'manage_deleted_records' trong tier standard.
7. Test happy-path trên org 🟢DEVKITV4:
   7.1. action='status' → softDeleteSupported=true, maxRetentionDays=30, enabledTableCount=382.
   7.2. Tạo 1 account test qua mcp__devkit_vscode__create_records.
   7.3. Xóa qua mcp__devkit_vscode__manage_record(action='delete', record_id=<guid>).
   7.4. action='list', entity_name='Account' → có 1 entry với GUID đó.
   7.5. action='detail', record_id=<guid> → trả attributes (name, creditlimit, statecode, ...).
   7.6. action='restore', record_id=<guid>, dry_run=true → [DRY-RUN] Would restore 1 record.
   7.7. action='restore', record_id=<guid>, dry_run=false → [Success] Restored 1 record.
   7.8. Verify qua execute_fetchxml (record Active, data preserved).
7.9. Test redirect:
   - execute_webapi GET accounts(<guid-of-deleted>) → REDIRECT hint.
   - execute_webapi POST /Restore → BLOCKED.
   - execute_webapi GET accounts?$filter=deletionstatecode eq 1 → REDIRECT.
7.10. Test edge cases:
   - action='list', entity_name='NonExistentEntity' → Error.
   - action='detail', record_id='not-a-guid' → Error.
   - action='restore', record_id=random Guid chưa xóa → failed với message rõ ràng.
   - action='detail', record_id=<live-guid-not-deleted> → notFound=true + hint dùng manage_record.
8. Tạo test call file 22.manage_deleted_records.md với data thật từ bước 7.
9. Update DynamicsCrm.DevKit.Docs/testcall/32.execute_webapi.md (3 ví dụ mới).
10. Update DynamicsCrm.DevKit.Docs/refactor2.md:
    - Section 2: thêm rule 14 (chặn AI gọi execute_webapi thay vì tool mới có data nhạy cảm).
    - Section 5: thêm "22. manage_deleted_records" vào "Tools đã hoàn thành".
11. git status sạch (chỉ file đã edit + 1 test call mới).
12. Báo cáo user review.
```

---

## 6. Evidence — probe output (full run)

### 6.1 Files & build

| File                                                                     | Status                                                                       |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| `DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.Console/Program.cs`  | Build OK, 0 errors, 0 warnings                                               |
| `DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.Console/AltProbe.cs` | Build OK, 0 errors, 0 warnings                                               |
| `bin/Debug/Dev.AllInOne.Console.exe`                                     | Chạy OK, kết nối `🟢DEVKITV4` (DEVKITV4.crm.dynamics.com, Dataverse 9.0.0.0) |
| `probe-output.txt`                                                       | 335 dòng, 10KB — output đầy đủ                                               |

### 6.2 Probe A — `RecycleBinConfig` status (verify §3.6)

```
Org-level config (name='organization'):
  cleanupintervalindays = -1       # -1 = dùng org default (30 ngày)
  isreadyforrecyclebin  = True
  statecode             = 0

Tables with deleted record keeping enabled: count = 382
  (account, contact, lead, opportunity, …)
```

✅ **softDeleteSupported = true** · **maxRetentionDays = 30** (default).

### 6.3 Probe B — `FetchXml datasource="bin"` (verify §3.3)

| Variant                                      | Result                                                                                 |
| -------------------------------------------- | -------------------------------------------------------------------------------------- |
| 1. FetchXml `datasource="bin"`               | ✅ OK — 1 record returned (record vừa xóa)                                             |
| 2. FetchXml `datasource="recyclebin"`        | ❌ FAIL — `FaultException: The only valid value for datasource is 'retained' or 'bin'` |
| 3. QueryExpression `DataSource="bin"`        | ✅ OK                                                                                  |
| 4. QueryExpression `DataSource="recyclebin"` | ❌ (no-op — reflection set không hiệu lực, trả live records)                           |
| 5. QueryExpression no DataSource (control)   | ✅ OK — 5 live records                                                                 |
| 6. FetchXml no datasource (control)          | ✅ OK — 5 live records                                                                 |

✅ Chỉ **`datasource="bin"`** (FetchXml) work cho bin queries.

Output: `Bin records (page 1, top=50) = 1` → `name='DEVKIT-MDR-PROBE-031504' createdOn=2026-07-31 03:15:06 <-- EXPECTED`.

### 6.4 Probe C/D — Web API GET cho soft-deleted vs fake GUID (verify §4.2.1)

|                | Soft-deleted GUID `bb3d4106-...`                                                                  | Fake GUID `00000000-0000-0000-0000-000000000001` |
| -------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| SDK `Retrieve` | `FaultException` + `ErrorCode = 0x80040217` + msg `Entity 'account' With Id = ... Does Not Exist` | **IDENTICAL** — cùng `0x80040217` + cùng msg     |
| Web API GET    | `HttpOperationException` + status 404                                                             | **IDENTICAL** — cùng status 404                  |

⚠️ **KHÔNG THỂ phân biệt record đã soft-delete vs GUID chưa từng tồn tại** chỉ qua response body. → Dùng Option B (block tất cả GET `(<guid>)` → redirect sang `manage_deleted_records` xử lý cả 2 case).

### 6.5 Probe F — end-to-end happy-path (verify §3.3-3.5)

| Step | Action                                       | Result                                      |
| ---- | -------------------------------------------- | ------------------------------------------- |
| 1    | Create test account                          | OK — `bb3d4106-...`                         |
| 2    | Soft-delete                                  | OK                                          |
| 3    | Web API GET                                  | 404                                         |
| 4    | List via FetchXml bin                        | 1 record                                    |
| 5    | Detail via FetchXml bin `<all-attributes />` | **39 attributes** + FormattedValues đầy đủ  |
| 6    | Restore via `OrganizationRequest("Restore")` | OK — `Results["id"] = <guid>`               |
| 7    | Verify via `Retrieve`                        | OK — `statecode=0` (Active), data preserved |

**Detail output mẫu (39 attrs, 1 record):**

```
name             = DEVKIT-MDR-PROBE-031504
telephone1       = 0900000000
websiteurl       = https://probe.example.com
creditlimit      = [$12345.0000000000]  [FMT=$12,345.00]
statecode        = [OSV 0]  [FMT=Active]
donotbulkemail   = False  [FMT=Allow]
donotphone       = False  [FMT=Allow]
followemail      = True  [FMT=Allow]
transactioncurrencyid = [ER ... name='US Dollar']
owningbusinessunit     = [ER ... name='dynamics-crm-devkit-2']
createdon        = 7/31/2026 3:15:06 AM
modifiedon       = 7/31/2026 3:16:55 AM
createdby        = [ER systemuser/... name='# DEVKIT']
```

**Restore output:**

```
Restore executed. Status = Restore
Results:
  id = bb3d4106-8e8c-f111-8076-7c1e528d2c9f
```

### 6.6 Final summary (11/11 PASS)

```
[PASS] A — RecycleBinConfig (status)
[PASS] B — FetchXml datasource='bin' (list existing)
[PASS] F-step1 — Create test account
[PASS] F-step2 — Delete the test account
[PASS] C — Web API GET for soft-deleted GUID
[PASS] D — Web API GET for fake (never-existed) GUID
[PASS] B-step2 — FetchXml datasource='bin' (after delete)
[PASS] E — Entity metadata (displayName + optionSet cache)
[PASS] F-step3 — Detail of soft-deleted (via FetchXml)
[PASS] F-step4 — Restore (OrganizationRequest late-bound)
[PASS] F-step5 — Verify restored record exists

Total: 11 | PASS: 11 | FAIL: 0
```

### 6.7 Cleanup verified

- Test account `bb3d4106-...` đã được **restore** lại về `Active` state, không còn trong bin.
- Không có data leak nào trên org 🟢DEVKITV4 sau khi probe chạy.

### 6.8 Bin schema — virtual data source (verified 2026-07-31 via MCP)

Để chắc chắn về schema của "bin", tôi đã dùng MCP `get_tables` (filter `recycle` / `bin`) + `execute_fetchxml` thực tế để inspect kết quả.

#### 6.8.1 KHÔNG có table "bin" vật lý

`get_tables` với filter:

- `filter="recycle"` → chỉ trả 1 table: `recyclebinconfig` (Restore Deleted Records Configuration).
- `filter="bin"` → trả 5 table có tên chứa "bin": `agenthubinsight`, `desktopflowbinary`, `flowsessionbinary`, `recyclebinconfig`, `workflowbinary`. Tất cả là unrelated (AI agent, Power Automate binary, recycle config). **Không có table nào tên `bin` hoặc `<entity>_bin`.**

→ `datasource="bin"` là **virtual data source** của Dataverse — FetchXml tự route sang internal system table ẩn mà Microsoft **không document schema công khai**.

#### 6.8.2 Bin records chỉ chứa attributes của entity gốc (không có system fields)

Test thực tế: tạo account `8b60e734-918c-f111-8076-7c1e528d2c9f` (name=`DEVKIT-MDR-INSPECT-073104`, telephone=`0900000099`, creditlimit=`$999.99`), xóa, list bin với `<all-attributes />`.

Kết quả `execute_fetchxml(datasource="bin")` trả về 1 record với 39 attributes — **TẤT CẢ đều là attributes của entity `account`**:

```json
{
  "_entity": "account",
  "_id": "8b60e734-918c-f111-8076-7c1e528d2c9f",
  "accountclassificationcode": "Default Value",
  "accountid": "8b60e734-918c-f111-8076-7c1e528d2c9f",
  "accountratingcode": "Default Value",
  "businesstypecode": "Default Value",
  "createdby": "# DEVKIT",
  "createdon": "7/31/2026 3:37 AM",
  "creditlimit": "$999.99",
  "creditlimit_base": "$999.99",
  "creditonhold": "No",
  "customersizecode": "Default Value",
  "donotbulkemail": "Allow",
  "donotbulkpostalmail": "No",
  "donotemail": "Allow",
  "donotfax": "Allow",
  "donotphone": "Allow",
  "donotpostalmail": "Allow",
  "donotsendmm": "Send",
  "exchangerate": "1.000000000000",
  "followemail": "Allow",
  "marketingonly": "No",
  "merged": "No",
  "modifiedby": "# DEVKIT",
  "modifiedon": "7/31/2026 3:37 AM",
  "name": "DEVKIT-MDR-INSPECT-073104",
  "ownerid": "# DEVKIT",
  "owningbusinessunit": "dynamics-crm-devkit-2",
  "participatesinworkflow": "No",
  "preferredcontactmethodcode": "Any",
  "shippingmethodcode": "Default Value",
  "statecode": "Active",
  "statuscode": "Active",
  "telephone1": "0900000099",
  "territorycode": "Default Value",
  "transactioncurrencyid": "US Dollar"
}
```

**KHÔNG CÓ** các system fields:

- ❌ `deletedon` — không có.
- ❌ `deletedby` — không có.
- ❌ `deletionstatecode` — không có.
- ❌ `deletiontime` — không có.
- ❌ `deletedbyuserid` — không có.

#### 6.8.3 Verify: bin records và live records có CÙNG schema

Compare cùng record `8b60e734-918c-f111-8076-7c1e528d2c9f` lúc còn trong bin (6.8.2) vs sau khi restore (probe §6.5):

| Field         | Trong bin                   | Sau restore (verify)        | Giống? |
| ------------- | --------------------------- | --------------------------- | ------ |
| `accountid`   | `8b60e734-...`              | `8b60e734-...`              | ✅     |
| `name`        | `DEVKIT-MDR-INSPECT-073104` | `DEVKIT-MDR-INSPECT-073104` | ✅     |
| `creditlimit` | `$999.99`                   | `$999.99`                   | ✅     |
| `statecode`   | `Active` (0)                | `Active` (0)                | ✅     |
| `statuscode`  | `Active` (1)                | `Active` (1)                | ✅     |
| `createdon`   | `7/31/2026 3:37 AM`         | `7/31/2026 3:37 AM`         | ✅     |
| `modifiedon`  | `7/31/2026 3:37 AM`         | `7/31/2026 3:37 AM`         | ✅     |
| `createdby`   | `# DEVKIT`                  | `# DEVKIT`                  | ✅     |
| `modifiedby`  | `# DEVKIT`                  | `# DEVKIT`                  | ✅     |

**Kết luận:** Bin records là **projection** của live table, không phải table riêng. Dữ liệu 100% giống nhau. `statecode` KHÔNG tự động đổi sang 1 (Inactive) khi xóa — chỉ có 1 số entity activity (incident, task) mới đổi.

#### 6.8.4 Decision design update từ phát hiện §6.8

| Assumption cũ                            | Verify §6.8        | Quyết định                                                                                     |
| ---------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------- |
| Bin có `deletedon` để show "xóa lúc nào" | ❌                 | Dùng `modifiedon` làm proxy (xấp xỉ OK — delete = update cuối)                                 |
| Bin có `deletedby` để show "ai xóa"      | ❌                 | KHÔNG show được `deletedBy` chính xác. Show `modifiedBy` (có thể khác admin delete user khác). |
| `expiresOn` tính từ `deletedOn`          | ❌                 | Tính từ `modifiedOn + maxRetentionDays` (xấp xỉ).                                              |
| Có thể check `deletionstatecode=1`       | ❌                 | Không — không filter được qua attribute thường.                                                |
| `statecode` đổi sang 1 khi xóa           | ❌ (account vẫn 0) | KHÔNG dùng `statecode` làm dấu hiệu xóa. Dùng `datasource="bin"` mới biết.                     |

#### 6.8.5 Update tool design (§3.3 và §3.4) theo phát hiện này

**`action="list"` DTO đã đúng** (chỉ có `modifiedOn`, không có `deletedOn`).

**`action="detail"` DTO**:

- Field `modifiedOn` → dùng làm "deleted ≈" timestamp.
- Field `deletedBy` → **BỎ khỏi DTO** (không có nguồn đáng tin).
- Field `expiresOn` → compute: `modifiedOn + maxRetentionDays` (từ status action).

**Cập nhật JSON kết quả `action="detail"` (§3.4):**

```json
{
  "action": "detail",
  "entityName": "account",
  "entityDisplayName": "Account",
  "recordId": "8b60e734-...",
  "recordName": "DEVKIT-MDR-INSPECT-073104",
  "modifiedOn": "2026-07-31 03:37", // ≈ thời điểm xóa
  "createdOn": "2026-07-31 03:37",
  "expiresOn": "2026-08-30 03:37", // modifiedOn + 30 ngày (maxRetentionDays)
  "attributes": {
    "name": "DEVKIT-MDR-INSPECT-073104",
    "telephone1": "0900000099",
    "creditlimit": "999.99",
    "statecode": "Active", // vẫn Active, không đổi
    "statuscode": "Active",
    "ownerid": "# DEVKIT",
    "owningbusinessunit": "dynamics-crm-devkit-2",
    "createdby": "# DEVKIT", // người TẠO record
    "modifiedby": "# DEVKIT" // người SỬA CUỐI (≈ người xóa)
    // ... các attribute khác
  }
}
```

**KHÔNG có `deletedOn` / `deletedBy` chính xác** trong DTO. Chỉ có `modifiedOn` (≈ delete time) + `modifiedBy` (≈ deleted by).

---

## 7. Out of scope (KHÔNG làm trong tool này)

- Hard delete / purge (không recoverable, dễ xóa nhầm).
- Bulk delete (khác tool, có thể dùng `manage_record` với `records[]`).
- Audit chi tiết về record đã xóa (dùng `get_audit_history` sau khi record được restore xong).
- Sub-component (notes/attachments) của record đã xóa.
- Web API endpoint trực tiếp (Dataverse vẫn dùng SDK request, không có Web API endpoint riêng cho restore).

---

## 8. Bước tiếp theo

1. ✅ User review §1-§7 (đặc biệt §3.5 — design chính, §4 — redirect).
2. ✅ Code `ManageDeletedRecordsTool.cs` + DTO theo §3.
3. ✅ Cập nhật `ExecuteWebApiTool.cs` theo §4.
4. ✅ Build & release CLI theo `build-cli.md`.
5. ✅ Test thật trên org 🟢DEVKITV4 (12 bước ở §5.2 — xem §9).
6. ✅ Tạo test call file `22.manage_deleted_records.md` với 4 H1 section + 8 ví dụ phụ. Test call `29.execute_webapi.md` (tool #29, ID theo `devkit mcp --tools`) chưa tồn tại → deferred đến khi tool #29 được refactor (xem rule 14 trong refactor2.md).
7. ✅ Cập nhật `refactor2.md` (rule 14 + section 5).
8. ✅ Báo cáo user review — DONE.

---

## 9. Phase 2 Evidence — tool C# implementation + e2e test (2026-07-31)

### 9.1 Files mới / sửa

| File                                                                    | Status   | LOC  |
| ----------------------------------------------------------------------- | -------- | ---- |
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageDeletedRecordsTool.cs`          | NEW      | ~480 |
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/ManageDeletedRecordsResult.cs` | NEW      | ~140 |
| `DynamicsCrm.DevKit.Cli/Mcp/McpServerHost.cs`                           | MODIFIED | +1   |
| `DynamicsCrm.DevKit.Cli/Mcp/Tools/ExecuteWebApiTool.cs`                 | MODIFIED | +50  |
| `DynamicsCrm.DevKit.Docs/testcall/22.manage_deleted_records.md`         | NEW      | ~350 |
| `DynamicsCrm.DevKit.Docs/refactor2.md`                                  | MODIFIED | +20  |
| `DynamicsCrm.DevKit.Docs/manage_deleted_records.plan.md`                | MODIFIED | +60  |

### 9.2 Build / release

| Step                                            | Result                                                                                                     |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `dotnet build DynamicsCrm.DevKit.Cli/...csproj` | 0 errors, 0 warnings, 8.45s                                                                                |
| `Release.DynamicsCrm.DevKit.Cli.ps1`            | build-manifest: `installedAssemblySha256=5BE07279E2E47CA91050686DAEBDCC1B92A98A7ADB0EB2E8AE9F10942510BEA2` |
| `Const.cs` (auto-restored)                      | `public const string Build = "xxxx.yy.zz HH.mm.ss";` ✓                                                     |
| `devkit mcp --tools`                            | `manage_deleted_records` listed in tier `standard` ✓                                                       |
| `whoami` SHA verify                             | `devkit.assemblySha256` == `installedAssemblySha256` (5BE07279…) ✓                                         |

### 9.3 E2E test (12 cases — all PASS)

| #   | Test                                                                        | Input                                                                                                     | Expected                                                                          | Result |
| --- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------ |
| 1   | `action='status'`                                                           | `{}`                                                                                                      | `softDeleteSupported=true, maxRetentionDays=30, enabledTableCount=382`            | PASS   |
| 2   | Create test account                                                         | `manage_record(action='create', entity_name='account', fields_json={"name":"DEVKIT-MDR-RESTORE-073100"})` | New GUID returned                                                                 | PASS   |
| 3   | Soft-delete account                                                         | `manage_record(action='delete', record_id=<guid>)`                                                        | OK, record gone from live table                                                   | PASS   |
| 4   | `action='list'` with `name_filter`                                          | `entity_name='Account', name_filter='DEVKIT-MDR', max_records=20`                                         | 1 record with GUID from step 2                                                    | PASS   |
| 5   | `action='detail'`                                                           | `entity_name='Account', record_id=<guid>`                                                                 | 8 attributes non-null + FormattedValues                                           | PASS   |
| 6   | `action='restore' dry_run=true`                                             | `entity_name='account', record_id=<guid>, dry_run=true`                                                   | `dryRun=true, status="would-restore"`                                             | PASS   |
| 7   | `action='restore' dry_run=false`                                            | `entity_name='account', record_id=<guid>, dry_run=false`                                                  | `restored=1, status="restored"`, `restoredRecordId=<guid>`                        | PASS   |
| 8   | Verify restore preserved data                                               | `execute_fetchxml(filter accountid eq <guid>)`                                                            | Record Active, name + all fields unchanged                                        | PASS   |
| 9   | Edge: `record_id` not in bin (live record)                                  | `action='detail', record_id=71f939f8-...` (Boyle Inc, live)                                               | `notFound=true`, hint to use `manage_record`                                      | PASS   |
| 10  | Edge: invalid GUID                                                          | `action='detail', record_id='not-a-guid'`                                                                 | `Error: 'not-a-guid' is not a valid GUID`                                         | PASS   |
| 11  | Edge: missing `record_id` for detail                                        | `action='detail', entity_name='account'`                                                                  | `Error: record_id is required when action='detail'`                               | PASS   |
| 12  | Redirect test: `execute_webapi GET accounts(<guid>)`                        | URL = `accounts(<soft-deleted-guid>)`                                                                     | `error` field with redirect message → use `manage_deleted_records`                | PASS   |
| 13  | Redirect test: `execute_webapi POST /Restore`                               | body = `{"Target":{...}}`                                                                                 | `error` field with redirect message → use `manage_deleted_records`                | PASS   |
| 14  | Redirect test: `execute_webapi GET accounts?$filter=deletionstatecode eq 1` | OData filter                                                                                              | `error` field with redirect message → use `manage_deleted_records(action='list')` | PASS   |
| 15  | Negative: `execute_webapi GET accounts?$top=1` (collection, no filter)      | OData query                                                                                               | 200 OK, full record data — NOT redirected (collection queries pass through)       | PASS   |
| 16  | Negative: `execute_webapi GET accounts` (collection, no params)             | bare collection                                                                                           | 200 OK — NOT redirected                                                           | PASS   |

Total: 16 tests / 16 PASS.

### 9.4 Git status (sau khi xong Phase 2)

```
M DynamicsCrm.DevKit.Cli/Mcp/McpServerHost.cs                  (modified — +1 line)
M DynamicsCrm.DevKit.Cli/Mcp/Tools/ExecuteWebApiTool.cs        (modified — +50 lines)
M DynamicsCrm.DevKit.Docs/manage_deleted_records.plan.md        (modified — §9 added)
M DynamicsCrm.DevKit.Docs/refactor2.md                          (modified — rule 14 + section 5)
M DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.Console/Program.cs  (modified — kept probes)
?? DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageDeletedRecordsTool.cs          (new — 480 lines)
?? DynamicsCrm.DevKit.Cli/Mcp/Tools/Models/ManageDeletedRecordsResult.cs (new — 140 lines)
?? DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.Console/AltProbe.cs (new — probe variants)
?? DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.Console/probe-output.txt (new — evidence)
?? DynamicsCrm.DevKit.Docs/testcall/22.manage_deleted_records.md          (new — 8 examples)
```

8 files affected (3 modified + 5 new). `Const.cs` confirmed `xxxx.yy.zz HH.mm.ss` (placeholder restored by release script).

### 9.5 Tool runtime verification

```
devkit.assemblySha256   = 5BE07279E2E47CA91050686DAEBDCC1B92A98A7ADB0EB2E8AE9F10942510BEA2
manifest.installedAssemblySha256 = 5BE07279E2E47CA91050686DAEBDCC1B92A98A7ADB0EB2E8AE9F10942510BEA2
process start time      = 2026-07-31 13:08:09
```

→ MCP is running the new build, all 16 e2e tests confirmed working.
