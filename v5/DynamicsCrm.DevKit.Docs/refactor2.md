# Refactor MCP tools — docs 2

## 1. Rules — không được quên

> Giữ nguyên tinh thần [refactor.md](refactor.md), bổ sung rule mới phát sinh từ docs 1.

1. **Bỏ qua hết unit test**, làm sau. Khi build dùng `DynamicsCrm.DevKit.Scripts/Release.DynamicsCrm.DevKit.Cli.ps1` (xem [build-cli.md](../.codex/workflows/build-cli.md)) — script này kill MCP process hiện tại, MCP tự restart với build mới.
2. **Toàn bộ class chỉ có 1 try-catch ở hàm main của tool.** Không try-catch trong helper (để exception bubble lên main → `ThrowException(ex)`).
3. **Catch chỉ dùng `base.ThrowException(ex)`** — KHÔNG tự build error text, KHÔNG catch riêng `FaultException<>` rồi `Error()`. Phân biệt rõ:
   - Validation / business rule fail → `Error(msg, hint)` (expected, do tool raise).
   - Unhandled exception (network, Dataverse fault không lường trước, bug trong code) → `ThrowException(ex)` (unexpected, do main catch raise).
4. **Không dùng wrapper method.** Gọi trực tiếp `Success(summary, structured)` / `Error(msg, hint?, details?)` / `ThrowException(ex)` / `DryRun(msg)` từ `McpToolBase`. Bỏ hẳn `ExecuteXxx` indirection nếu nó chỉ wrap kết quả. Helper nội bộ (parse, format, build DTO) vẫn OK.
5. **`structuredContent` DTO: property null → KHÔNG return cho client** để tiết kiệm token. Mọi `string?` phải dùng `[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]`. Với `List<T>` rỗng → cân nhắc `null` thay vì `[]` để ẩn hẳn.
6. **`Content` chỉ 1 dòng duy nhất**, ngắn gọn, có prefix `[Success]` / `[Error]` / `[DRY-RUN]`. Ví dụ:
   - `[Success] account (last 24h): 5 entries.`
   - `[Success] account 71f939f8-…: 3 entries (last 7d).`
   - `[Error] entity_name is required when record_id is provided.`
   - KHÔNG trả bảng tab-separated, KHÔNG trả hướng dẫn dài trong Content — đẩy hết vào `structuredContent` + test call.
7. **Tối ưu tool description** để giảm token, **không lặp** với `[Description]` của parameter. Description chỉ chứa:
   - 1 câu tóm tắt tool làm gì + 2 mode chính (nếu có).
   - Bullet list WHEN TO USE / RELATED TOOLS.
   - KHÔNG liệt kê parameter — client đọc schema.
8. **Mỗi tool build xong phải có 1 file test call mẫu** tại `DynamicsCrm.DevKit.Docs/testcall/{N}.{tool_name}.md` (N là số thứ tự từ `devkit mcp --tools`) gồm 4 section H1:
   - **(1) Tool description AI đọc được** — block code dump `Name/Title/Idempotent/Destructive/ReadOnly/Description/Parameters`.
   - **(2) Input tool call** — JSON + callout giải thích input.
   - **(3) Output tool call** — `Content` 1 dòng + `Structured content` JSON + `IsError`.
   - **(4) Kết quả AI tổng hợp lại** — bullet `Trạng thái` + giải thích từng trường + `Token tiết kiệm` + `Cách dùng tiếp theo`.
   - Thêm ≥ 3 ví dụ phụ: 1 happy-path khác (filter/mode khác) + 2-3 validation error paths.
   - Có thể xem bất kỳ ví dụ nào ở folder Docs\testcall

## 2. Rule bổ sung docs 2

9. **Lookup audit (1 entry = 1 event, KHÔNG phải 1 field):** Khi tool trả về danh sách event, mỗi entry phải có cấu trúc:
   ```
   { timestamp, user, action, changes[]: [{ logicalName, displayName, oldValue, newValue }] }
   ```
   KHÔNG flat thành `entries[i].field = X, entries[i].oldValue = Y` — vì 1 save có thể đụng nhiều field → entries trùng timestamp/user.
10. **`logicalName` (không phải `field`)** trong DTO: thống nhất convention với `get_tables` / `manage_record` / các tool khác. Field rename chỉ cần 1 chỗ.
11. **Display name + option-set label:** nếu tool trả field-level value mà Dataverse không echo sẵn label (audit, fetchxml không có FormattedValues cho picklist), thì fetch metadata 1 lần đầu và cache per-request:
    - `DisplayNames[logicalName] = userLocalizedLabel`
    - `OptionSetLabels[logicalName] = { valueInt → label }` (chỉ cho local picklist / state / status / boolean).
    - Global option set đã có sẵn trong `Entity.FormattedValues` → ưu tiên dùng (case 1) trước cache.
    - Nếu fetch fail → cache rỗng → `displayName` null (ẩn), picklist fallback int. Tool vẫn hoạt động bình thường.
12. **Test thật trước khi viết test call.** Dùng [Program.cs](..\DynamicsCrm.DevKit.Tests\TestAllInOne\Dev.AllInOne.Console\Program.cs) probe Dataverse (qua `App.Service` — không hard-code credentials) để xác nhận cấu trúc response trước. Probe giúp tránh assumption sai về response shape (ví dụ audit response không có display name sẵn, search `objectTypeCode` luôn = 0, v.v.).
13. **Đừng đoán metadata format.** Luôn probe trước, dump ra, đọc kỹ, rồi mới code. Áp dụng cho mọi tool cần dùng `RetrieveEntityRequest` / `RetrieveMultiple` / `ExecuteWebRequest` etc.
14. **Tool mới handle data nhạy cảm → PHẢI redirect `execute_webapi`.** Khi thêm tool mới truy cập recycle bin / audit / security / user permissions / bulk operations, đồng thời cập nhật `ExecuteWebApiTool.cs` để:
    - **Block/redirect** các URL/endpoint mà Web API có thể làm được nhưng tool SDK-side handle tốt hơn (vd `GET <entity>(<guid>)` → redirect về `manage_deleted_records` thay vì trả 404).
    - **Add vào `RedirectedGetEndpoints` / `BlockedPostEndpoints` / `RedirectedPostEndpoints`** với message dẫn user sang tool mới.
    - **KHÔNG ship tool mới mà chưa update `execute_webapi`** cùng build — AI sẽ quay lại dùng `execute_webapi` cũ → UX broken. Áp dụng lần đầu cho `manage_deleted_records` (3 redirect rules: `(<guid>)` GET, `deletionstatecode` GET, `restore` POST).
    - Khi `execute_webapi` chưa có test call file, **KHÔNG tạo mới** chỉ để document redirect — chỉ note redirect rule trong plan/tool description; tạo test call file khi `execute_webapi` được refactor (tool #32).

## 3. Checklist approve trước khi mark "xong"

Mỗi tool phải pass hết 13 item dưới trước khi add vào list "đã hoàn thành":

- [ ] **Code:** 1 try-catch ở main, dùng `ThrowException`; không wrapper; gọi thẳng `Success`/`Error`; structured DTO null-aware; Content 1 dòng.
- [ ] **Description:** tóm tắt 1 câu + WHEN TO USE + RELATED TOOLS, không lặp parameter.
- [ ] **Probe Dataverse** nếu response shape chưa rõ (đặc biệt: picklist, lookup, audit, FetchXML OOB, business rule, plugin trace, BPF).
- [ ] **Build:** `dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj` → 0 errors, 0 warnings.
- [ ] **Release:** `DynamicsCrm.DevKit.Scripts/Release.DynamicsCrm.DevKit.Cli.ps1` → build manifest có SHA mới, install OK, `Const.cs` được restore về `xxxx.yy.zz HH.mm.ss`.
- [ ] **Test thật trên org** `🟢DEVKITV4`: gọi tool với input hợp lệ + input invalid, verify Content 1 dòng + structured JSON đúng.
- [ ] **Test call file** tạo tại `DynamicsCrm.DevKit.Docs/testcall/{N}.{tool_name}.md` với 4 H1 section + ≥ 3 ví dụ phụ, dùng data thật (không fake).
- [ ] **Update `refactor2.md`:** thêm `{N}. {tool_name}` vào section "Tools đã hoàn thành".
- [ ] **Working tree sạch:** `git status` chỉ có file đã edit + test call mới, `Const.cs` chứa `xxxx.yy.zz HH.mm.ss`.
- [ ] **SHA verify:** `whoami` sau khi restart MCP trả `devkit.assemblySha256` == `Published/4.44.44.44/build-manifest.json`'s `installedAssemblySha256`.
- [ ] **Không commit** (trừ khi user yêu cầu) — chỉ edit + build + test.
- [ ] **Không để lại `using` thừa** (ví dụ `System.Text.Json` nếu không dùng `JsonSerializer`).
- [ ] **Naming:** `logicalName` (không `field`); `recordId` / `entityName` (camelCase JSON) phù hợp convention tool khác.

## 4. tools cần refactor

Số thứ tự theo `McpServerHost.ToolCategoryMap` (xem [McpServerHost.cs](..\DynamicsCrm.DevKit.Cli\Mcp\McpServerHost.cs)).

### Tier `standard` (17 tools)

| #   | Tool                          | Độ khó            | Note                                                         |
| --- | ----------------------------- | ----------------- | ------------------------------------------------------------ |
| 10  | `get_audit_history`           | ✅ done (phase 1) | Dùng làm chuẩn cho 11-33                                     |
| 11  | `publish_customizations`      | medium            | Cần probe: targeted vs PublishAll; ribbon cache quirk        |
| 12  | `manage_form`                 | high              | FormXML phức tạp; multi-operation; auto-backup               |
| 13  | `manage_view`                 | high              | LayoutXML/FetchXML sync rule; QuickFind special              |
| 14  | `manage_role`                 | medium            | `user` action trả privileges grouped by entity               |
| 15  | `get_messages`                | ✅ done           | SDK messages + custom actions list; XAML param parsing fixed |
| 16  | `manage_environment_variable` | medium            | create/update/delete/clear; type immutable                   |
| 17  | `get_workflows`               | medium            | Classic workflow; realtime vs background                     |
| 18  | `get_flows`                   | medium            | Power Automate cloud flows; run history                      |
| 19  | `get_business_process_flows`  | medium            | BPF + stages; auto-created entity                            |
| 20  | `get_business_rules`          | medium            | Client-side logic; XAML từ `manage_record`                   |
| 21  | `get_custom_apis`             | medium            | Modern API; isFunction flag                                  |
| 22  | `get_solution_components`     | low               | Solution audit; component type summary                       |
| 23  | `get_plugin_trace_logs`       | medium            | Plugin traces; sync/async; correlation_id                    |
| 24  | `get_system_jobs`             | medium            | Async failures; status/operation_type maps                   |
| 25  | `get_plugins`                 | high              | Assembly/types/steps; include_images flag                    |
| 26  | `manage_web_resource`         | medium            | prefix validation; create/update/delete                      |
| 27  | `manage_chart`                | high              | Pie create needs user confirmation                           |

### Tier `advanced` (7 tools)

| #   | Tool                  | Độ khó    | Note                                             |
| --- | --------------------- | --------- | ------------------------------------------------ |
| 28  | `manage_app`          | high      | App + sitemap navigation; backup/undo            |
| 29  | `upsert_table`        | high      | Auto-derive schemaName; mutation                 |
| 30  | `upsert_column`       | high      | Formula clone; picklist options; create flags    |
| 31  | `upsert_relationship` | high      | 1:N / N:N / polymorphic; cascade preset          |
| 32  | `execute_web_api`     | high      | Raw Web API; URL validator chặn metadata/system  |
| 33  | `manage_ribbon`       | very high | RibbonDiffXml; solution import; PublishAll async |
| 34  | `manage_command`      | high      | Modern appaction; Power Fx; visibility rules     |

> Tier advanced nên refactor sau cùng vì phức tạp, dễ phá vỡ behavior. Test kỹ trên dev org trước khi approve.

## 4. Tools đã hoàn thành và aP đã review

- 7. parse_record_url (phase 1)
- 8. search_records (phase 1)
- 9. whoami (phase 1)
- 10. get_audit_history (phase 1)

---

## 6. Quy trình làm việc chuẩn cho mỗi tool

```
1. User yêu cầu refactor tool {N}.{name}
2. Read file gốc + model + helper liên quan
3. (Nếu cần) Probe Dataverse qua Dev.AllInOne.Console để xác nhận response shape
4. Apply 13 rules trong file này
5. dotnet build → 0 errors
6. Release script → install MCP mới
7. Test thật trên org 🟢DEVKITV4
8. Tạo test call file N.name.md với 4 H1 section
9. Update refactor2.md (thêm vào section 5)
10. Verify git status sạch, Const.cs = xxxx.yy.zz
11. Báo cáo user review
```

Mỗi bước fail → quay lại bước trước. **Không skip probe** dù response shape có vẻ rõ — Dataverse hay surprise (audit không có display name, search `objectTypeCode` luôn = 0, ribbon không refresh với targeted publish, v.v.).

> File này là living document. Khi phát hiện rule mới từ review phase 2, cập nhật section 2 và checklist ở section 3. Khi phase 2 hoàn tất, archive lại thành `refactor3.md` cho phase 3 (nếu có).
