# Impersonation Support for MCP Server

> **Status:** Design proposal + audit completed. Ready for implementation.
> **Date:** 2026-08-10
> **Source:** [Impersonate another user (Microsoft Dataverse) — Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/impersonate-another-user)

---

## 1. Mục tiêu

Thêm khả năng impersonate (thực thi thay mặt) một user khác cho toàn bộ MCP server session. AI client không được tự quyết định impersonate ai — impersonation là **session policy** do con người cấu hình lúc khởi động, cùng pattern với `--dry-run`.

---

## 2. Cơ chế impersonation trong Dataverse

| Layer                          | Cách thực hiện                                                                                                                                                              |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **SDK .NET** (`ServiceClient`) | Set `serviceClient.CallerId = <systemuserid GUID>`. Mọi lời gọi `Execute`, `Retrieve`, `RetrieveMultiple`, `ExecuteWebRequest` sau đó tự động mang header `CallerObjectId`. |
| **Web API** (HTTP)             | Thêm header `CallerObjectId: <Entra Object ID>`. `ServiceClient.ExecuteWebRequest` tự thêm header này khi `CallerId` được set.                                              |
| **Privilege yêu cầu**          | `prvActOnBehalfOfAnotherUser` (có trong role **Delegate**). **Phải gán trực tiếp** cho user, không kế thừa qua Team.                                                        |
| **Quyền thực tế**              | Intersection (giao) của quyền impersonator ∩ impersonated user.                                                                                                             |

---

## 3. Audit kết quả — mọi HTTP call đã đi qua ServiceClient

### 3.1. Kết luận

**Tất cả Dataverse calls trong MCP tools đều đi qua `ServiceClient`.** Không còn `HttpClient` raw nào.

| Cơ chế gọi                                     | Số file        | Đi qua `ServiceClient`?                                    |
| ---------------------------------------------- | -------------- | ---------------------------------------------------------- |
| `_serviceClient.Execute(...)`                  | 18 files       | ✅ Có — `CallerId` tự áp dụng                              |
| `_serviceClient.Retrieve(...)`                 | 12 files       | ✅ Có                                                      |
| `_serviceClient.RetrieveMultiple(...)`         | 15 files       | ✅ Có                                                      |
| `_serviceClient.ExecuteWebRequest(...)`        | 5 files        | ✅ Có — tự thêm `CallerObjectId` header                    |
| `DataverseMutationExecutor.Execute(...)`       | 8 files        | ✅ Có — delegate sang `serviceClient.Execute/ExecuteAsync` |
| `DataverseWebApiMutationExecutor.Execute(...)` | 4 files        | ✅ Có — delegate sang `serviceClient.ExecuteWebRequest`    |
| `new HttpClient()` raw                         | **0** (đã xóa) | ❌ Đã loại bỏ                                              |

### 3.2. Đã sửa: `ExecuteWebApiTool.cs` — loại bỏ `HttpClient` raw

**Trước:** Đoạn `$metadata` GET dùng `new HttpClient()` thủ công, tự gắn `Authorization: Bearer` header. Bypass `CallerId` → impersonation không hoạt động cho `$metadata`.

```csharp
// ❌ ĐÃ XÓA — bypass CallerId, không impersonate được
using var httpClient = new HttpClient();
var apiUrl = $"{orgUri.Scheme}://{orgUri.Host}/api/data/v{version}/{trimmedUrl}";
var request = new HttpRequestMessage(httpMethod, apiUrl);
request.Headers.Add("Authorization", $"Bearer {_serviceClient.CurrentAccessToken}");
request.Headers.Add("Accept", "application/xml");
response = httpClient.SendAsync(request).GetAwaiter().GetResult();
```

**Sau:** Tất cả GET (kể cả `$metadata`) đi qua `ExecuteWebRequest`, chỉ đổi `contentType` (`application/xml` vs `application/json`):

```csharp
// ✅ Đi qua ServiceClient — CallerId, auth, base URL đều tự áp dụng
var accept = trimmedUrl.StartsWith("$metadata", StringComparison.OrdinalIgnoreCase)
    ? "application/xml"
    : "application/json";
response = _serviceClient.ExecuteWebRequest(httpMethod, trimmedUrl, requestBody, customHeaders, accept);
```

### 3.3. Files đã audit (không còn `HttpClient` raw)

```
Mcp/Tools/ExecuteWebApiTool.cs              ← đã sửa
Mcp/Tools/Helper/DataverseWebApiMutationExecutor.cs  ← chỉ có comment, code đi qua serviceClient.ExecuteWebRequest
Mcp/Tools/Helper/DataverseMutationExecutor.cs       ← delegate sang serviceClient.Execute/ExecuteAsync
Mcp/Tools/CreateRecordsTool.cs              ← dùng _serviceClient.Clone() (xem §5)
Mcp/Tools/ExecuteFetchXmlTool.cs            ← _serviceClient.RetrieveMultiple
Mcp/Tools/SearchRecordsTool.cs              ← _serviceClient.ExecuteWebRequest
Mcp/Tools/ManageRecordTool.cs               ← _serviceClient.Retrieve/Create/Update/Delete
Mcp/Tools/ManageViewTool.cs                 ← _serviceClient.ExecuteWebRequest + Execute
Mcp/Tools/ManageDeletedRecordsTool.cs       ← DataverseWebApiMutationExecutor
Mcp/Tools/WhoAmITool.cs                     ← _serviceClient.Execute
Mcp/Tools/GetAuditHistoryTool.cs            ← _serviceClient.RetrieveMultiple + Execute
Mcp/Tools/GetPluginsTool.cs                 ← _serviceClient.Execute + RetrieveMultiple
Mcp/Tools/GetTablesTool.cs                  ← _serviceClient.Execute
Mcp/Tools/UpsertColumnTool.cs               ← DataverseMutationExecutor + _serviceClient.Execute
Mcp/Tools/UpsertRelationshipTool.cs         ← DataverseMutationExecutor + _serviceClient.Execute
Mcp/Tools/UpsertTableTool.cs                ← _serviceClient.Execute
Mcp/Tools/ManageFormTool.cs                 ← _serviceClient.Retrieve + Execute
Mcp/Tools/ManageAppTool.cs                  ← _serviceClient.Execute + RetrieveMultiple
Mcp/Tools/ManageRibbonTool.cs               ← _serviceClient.RetrieveMultiple + Execute
Mcp/Tools/ManageCommandTool.cs              ← _serviceClient.Execute
Mcp/Tools/ManageChartTool.cs                ← _serviceClient.Execute
Mcp/Tools/ManageChoiceTool.cs               ← _serviceClient.Execute
Mcp/Tools/ManageEnvironmentVariableTool.cs  ← _serviceClient.Execute
Mcp/Tools/ManageRoleTool.cs                 ← _serviceClient.Retrieve + RetrieveMultiple
Mcp/Tools/ManageWebResourceTool.cs          ← _serviceClient.Execute
Mcp/Tools/PublishCustomizationsTool.cs      ← _serviceClient.Execute + RetrieveMultiple
Mcp/Tools/ParseRecordUrlTool.cs             ← _serviceClient.Execute
Mcp/Tools/GetBusinessProcessFlowsTool.cs    ← _serviceClient.RetrieveMultiple
Mcp/Tools/GetBusinessRulesTool.cs           ← _serviceClient.Execute
Mcp/Tools/GetCustomApisTool.cs              ← _serviceClient.RetrieveMultiple
Mcp/Tools/GetFlowsTool.cs                   ← _serviceClient.ExecuteWebRequest
Mcp/Tools/GetMessagesTool.cs                ← _serviceClient.RetrieveMultiple
Mcp/Tools/GetPluginTraceLogsTool.cs         ← _serviceClient.RetrieveMultiple
Mcp/Tools/GetSolutionComponentsTool.cs      ← _serviceClient.RetrieveMultiple
Mcp/Tools/GetSystemJobsTool.cs              ← _serviceClient.RetrieveMultiple
Mcp/Tools/GetWorkflowsTool.cs               ← _serviceClient.Execute + RetrieveMultiple
Mcp/Tools/GenerateDemoDataTool.cs           ← _serviceClient.Execute
Mcp/Tools/Form/FormFieldMetadata.cs         ← _serviceClient.Execute
Mcp/Tools/Form/FormSubgridOperations.cs     ← _serviceClient.RetrieveMultiple
Mcp/Tools/Form/FormXmlOperations.cs         ← _serviceClient.Retrieve
Mcp/Tools/Ribbon/RibbonSolutionFetcher.cs   ← _serviceClient.Execute
Mcp/Tools/SiteMap/SiteMapXmlOperations.cs   ← (XML processing, không call Dataverse trực tiếp)
Mcp/Tools/Helper/EntityParserHelper.cs      ← _serviceClient.Execute (RetrieveEntityRequest)
Mcp/Tools/Helper/DisplayNameFirstResolver.cs ← serviceClient.Execute (RetrieveAllEntitiesRequest)
Mcp/Tools/Helper/RoleGateHelper.cs          ← _serviceClient.RetrieveMultiple
```

---

## 4. Đề xuất thiết kế

### 4.1. Nguyên tắc

- **Session-level policy** (như `--dry-run`), không phải per-call parameter.
- AI **không thể** tự set `CallerId` — tránh prompt injection → privilege escalation.
- Set `CallerId` **một lần** ở tầng host → tự áp dụng cho toàn bộ 33 tools, không cần sửa từng tool.

### 4.2. Tham số CLI mới

```
devkit mcp --auth Interactive --as-user <guid-or-email>
```

`McpCommandArgs` thêm property:

```csharp
[Description("Impersonate this user (systemuserid GUID or email). Requires prvActOnBehalfOfAnotherUser.")]
[CommandOption("--as-user")]
public string AsUser { get; set; }
```

### 4.3. Yêu cầu quyền — System Administrator

`--as-user` là tính năng nhạy cảm. User kết nối MCP (impersonator) **phải là System Administrator**:

| Yêu cầu                       | Lý do                                                                                                                                                                                                                                                                      |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Role **System Administrator** | Có `prvActOnBehalfOfAnotherUser` + toàn bộ quyền trên mọi entity → có thể impersonate bất kỳ user nào.                                                                                                                                                                     |
| `prvActOnBehalfOfAnotherUser` | Privilege bắt buộc để impersonate. Có trong role **Delegate**, nhưng Delegate một mình không đủ — impersonator chỉ có quyền = intersection impersonator ∩ impersonated user. Nếu impersonator chỉ có Delegate, intersection có thể rỗng → mọi thao tác bị "access denied". |
| Không kế thừa qua Team        | Privilege này **phải gán trực tiếp** cho user, không inherit qua Team membership.                                                                                                                                                                                          |

**Vì sao yêu cầu System Administrator thay vì chỉ Delegate?**

- MCP server có 33 tools thao tác trên **toàn bộ entity** (schema, forms, views, ribbons, plugins, security roles, solutions...).
- Nếu impersonator chỉ có Delegate role, intersection quyền với impersonated user có thể thiếu quyền trên nhiều entity → tools fail ngẫu nhiên với "access denied" mà AI không hiểu nguyên nhân.
- System Administrator đảm bảo intersection luôn = quyền của impersonated user (vì impersonator có mọi quyền) → behavior nhất quán, dễ debug.

**Privilege check logic (chạy trước khi start server):**

```
1. RoleGateHelper.IsSystemAdministrator(serviceClient)
   → WhoAmI → query systemuserroles → role → check "System Administrator"
2. Nếu KHÔNG → IGNORE --as-user, log warning (kèm roles hiện tại), server start bình thường:
   "WARNING: --as-user '<value>' was ignored. The connecting user is not a
    System Administrator (roles: ...). MCP server will run as the connecting user."
   → Server vẫn chạy, không fail. AI sẽ thấy whoami trả về connecting user.
3. Nếu CÓ → tiếp tục resolve --as-user target
```

**Vì sao chỉ check System Administrator?**

System Administrator có tất cả privileges, bao gồm `prvActOnBehalfOfAnotherUser`. Không cần check riêng.

**Vì sao ignore thay vì fail-fast?**

- MCP server thường chạy như một long-running process được AI client spawn.
- Nếu fail-fast, AI client nhận exit code 1 nhưng không hiểu nguyên nhân → retry loop vô tận.
- Ignore + log warning an toàn hơn: server chạy bình thường, `whoami` cho AI thấy impersonation không active, AI tự điều chỉnh.

Tái sử dụng `RoleGateHelper.IsSystemAdministrator()` (đã có sẵn, dùng join `systemuserroles` → `role`).

### 4.4. Flow thực hiện

```
McpCommand.ExecuteAsync
  ├── RoleGateHelper.IsSystemAdministrator(serviceClient)
  │     ├── CÓ  → tiếp tục resolve
  │     └── KHÔNG → IGNORE --as-user, log warning (kèm roles), impersonatedUserId = null
  ├── ResolveAsUser(settings.AsUser)      // email → systemuserid GUID
  ├── ValidateTargetUser(targetId)        // user tồn tại? đang active?
  ├── serviceClient.CallerId = impersonatedUserId
  ├── new McpServerHost(serviceClient, impersonatedUserId, display)
  └── McpServerHost.RunAsync
        ├── ServerInstructions += "Impersonating: <name>" (nếu active)
        └── DI inject ServiceClient (CallerId đã set) vào 33 tools
              └── Mọi Execute/Retrieve/ExecuteWebRequest tự mang CallerObjectId
```

### 4.4. Phạm vi thay đổi

| File                             | Thay đổi                                                                              | Bắt buộc? |
| -------------------------------- | ------------------------------------------------------------------------------------- | --------- |
| `Commands/McpCommandArgs.cs`     | Thêm `--as-user` property                                                             | ✅        |
| `Commands/McpCommand.cs`         | Resolve email→GUID, check privilege, log, truyền vào host                             | ✅        |
| `Mcp/McpServerHost.cs`           | Nhận `impersonatedUserId`, set `_serviceClient.CallerId`, update `ServerInstructions` | ✅        |
| `Mcp/McpExecutionContext.cs`     | Thêm `ImpersonatedUser` (audit/log)                                                   | Tùy chọn  |
| `Mcp/Tools/WhoAmITool.cs`        | Hiển thị `ImpersonatedUser` trong output                                              | Tùy chọn  |
| `Mcp/Tools/CreateRecordsTool.cs` | Xử lý `Clone()` + `CallerId` (xem §5)                                                 | ✅        |

**Không cần sửa 33 tool files** — `CallerId` set ở connection level tự áp dụng.

### 4.5. Những gì KHÔNG nên làm

| ❌ Không nên                                                | Lý do                                                     |
| ----------------------------------------------------------- | --------------------------------------------------------- |
| Thêm param `impersonate_user_id` vào từng tool              | 33 tool phải sửa + AI tự mạo danh per-call = lỗ hổng      |
| Tạo `ServiceClient` mới per-call với `CallerId` khác        | Tốn connection pool, phá singleton DI                     |
| Để AI quyết định impersonate ai                             | Prompt injection → privilege escalation                   |
| Set `CallerObjectId` header thủ công trong `execute_webapi` | `ServiceClient.CallerId` đã tự thêm — không cần can thiệp |

---

## 5. Rủi ro đã phát hiện: `ServiceClient.Clone()` trong `CreateRecordsTool`

### Vấn đề

`CreateRecordsTool.cs:225` dùng `_serviceClient.Clone()` cho parallel batch create:

```csharp
using var worker = _serviceClient.Clone() ?? _serviceClient;
```

`Clone()` mở connection mới (OAuth-only). **Tài liệu Microsoft không xác nhận `Clone()` copy `CallerId`.** Nếu không copy, impersonation sẽ bị mất trên worker clone → batch create chạy dưới identity sai.

### Giải pháp

**Option A (khuyến nghị):** Set `CallerId` trên worker sau khi clone: (aP quyết định làm cách này)

```csharp
using var worker = _serviceClient.Clone() ?? _serviceClient;
worker.CallerId = _serviceClient.CallerId;  // propagate impersonation
```

**Option B:** Truyền `impersonatedUserId` qua `McpExecutionContext` và set trên worker:

```csharp
worker.CallerId = _context.ImpersonatedUserId ?? Guid.Empty;
```

**Cần verify thực tế:** Chạy `create_records` với `--as-user` và kiểm audit history xem record được tạo bởi ai.

---

## 6. Verify checklist (sau khi implement)

- [ ] `whoami` trả về `ImpersonatedUser` field khi `--as-user` được set
- [ ] `manage_record(action='create')` — audit history hiển thị impersonated user
- [ ] `create_records` (batch) — audit history hiển thị impersonated user (verify `Clone()` fix)
- [ ] `execute_webapi(method='GET', url='$metadata')` — trả về XML, không lỗi
- [ ] `execute_webapi(method='GET', url='accounts')` — trả về JSON, impersonation áp dụng
- [ ] `execute_fetchxml` — kết quả dưới impersonated user
- [ ] `search_records` — kết quả dưới impersonated user
- [ ] Server log hiển thị "Impersonating: <name> (<email>)"
- [ ] `ServerInstructions` hiển thị impersonation info cho AI
- [ ] **Ignore + warning** khi impersonator thiếu `prvActOnBehalfOfAnotherUser` (server vẫn start)
- [ ] **Ignore + warning** khi impersonator không phải System Administrator (và không có privilege direct-assigned)
- [ ] Warning log hiển thị roles hiện tại của impersonator để debug
- [ ] `whoami` không hiển thị `ImpersonatedUser` khi setting bị ignore
- [ ] Fail-fast (throw) khi `--as-user` không resolve được user
- [ ] Fail-fast (throw) khi target user bị disabled (`isdisabled = true`)

---

## 7. Tham khảo

- [Impersonate another user (Microsoft Dataverse) — Microsoft Learn](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/impersonate-another-user)
- [CrmServiceClient.CallerId Property — Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/api/microsoft.xrm.tooling.connector.crmserviceclient.callerid)
- [CrmServiceClient.Clone Method — Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/api/microsoft.xrm.tooling.connector.crmserviceclient.clone)
- `McpExecutionContext.cs` — pattern fail-closed cho session policy
- `DataverseMutationExecutor.cs` — gateway cho SDK mutations
- `DataverseWebApiMutationExecutor.cs` — gateway cho Web API mutations
