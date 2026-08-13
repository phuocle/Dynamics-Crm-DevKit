# Refactor MCP tools — phase 3 (mutation tools)

> Phase 1–2 đã xong **16 readonly tools** — tinh thần gốc ở [refactor.md](refactor.md) / [refactor2.md](refactor2.md), ví dụ test-call chuẩn ở `testcall/` (xem `9.whoami.md`, `4.get_tables.md`). File này chỉ lo **19 tool còn lại (mutation/metadata/Web API)**. Rules bên dưới chính là checklist approve — không có checklist riêng.

## 0. Khi test REAL mcp (connected mcp với môi trường)

- Dùng solution ALl-IN-ONE (all_in_one)
- Không được action, touch, update, create với table: "All in One" (all_in_one), đây là rule, là luật, table này chứa nhiều thông tin để dùng cho các test case khác.
- Bạn hãy quên (forget) dry-run nhé, các task bạn làm và test KHÔNG bao giờ test được dry-run vì nó là setting khi mcp run mà, ko có cách nào truyền thông số cả.
- Mỗi lần bạn làm xong 1 TODO task do bạn tạo ra, bạn có sure là bạn có nhớ lại RULES của file này không ? nếu không hãy đọc lại.
- DOCS này yêu cầu bạn FULL TEST => ĐÚNG. Tuy nhiên khi bạn làm xong task, đến khi run @build-cli.md OK, bạn phải dừng lại (STOP) hỏi aP review trước khi real TEST.
- NHẮC LẠI 1 LẦN NỮA, LÀM TASK XONG THÌ KHÔNG REAL TEST MCP, DỪNG LẠI HỎI A PHƯỚC REVIEW TRƯỚC KHI REAL TEST MCP

## 1. Tools còn lại

**N là dữ liệu động** — lấy từ `devkit mcp --tools` sau mỗi build, runtime thắng mọi số ghi ở đây.

- **Basic:** `create_records`, `generate_demo_data`, `manage_choice`, `manage_record`
- **Standard:** `manage_chart`, `manage_deleted_records`, `manage_environment_variable`, `manage_form`, `manage_role`, `manage_view`, `manage_webresource`, `publish_customizations`
- **Advanced:** `manage_app`, `manage_command`, `manage_ribbon`, `manage_column`, `manage_relationship`, `manage_table`, **`execute_webapi` (làm cuối cùng)**

## 2. Rules kế thừa từ phase 1–2 (bắt buộc)

1. **Bỏ qua unit test.** Build/reinstall bằng `DynamicsCrm.DevKit.Scripts/Release.DynamicsCrm.DevKit.Cli.ps1` (kill MCP, MCP tự restart). Không stage/commit/push.
2. **1 try-catch duy nhất ở entry point của tool.** Catch chỉ `return ThrowException(ex)`. Validation/business fail → `Error(msg, hint?)`; unhandled fault → `ThrowException(ex)`. Không catch trong helper, không catch rỗng, không tự build error text.
3. **Không wrapper method** — gọi thẳng `Success`/`Error`/`ThrowException`/`DryRun`/`Partial`/`Failed` từ `McpToolBase`. Helper parse/format/build DTO/execute vẫn OK.
4. **DTO null-aware:** mọi property nullable có `[JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]`; list rỗng → `null`. Không đổi null thành `""`.
5. **`Content` đúng 1 dòng** `[Success]` / `[Error]` / `[DRY-RUN]`, ngắn. Chi tiết đẩy vào `structuredContent`.
6. **Description ngắn:** 1 câu tóm tắt + modes + `WHEN TO USE` / `RELATED TOOLS`. Không lặp param schema, không hứa capability thiếu code.
7. **Không đoán Dataverse.** Probe trước bằng MCP query / read tools đã có (logical name, option value, lookup type, order, paging) rồi mới code. Không lấy comment "đã probe" trong source làm evidence.
8. **Tool overlap endpoint Web API → cập nhật redirect/block trong `ExecuteWebApiTool` cùng build** (`RedirectedGetEndpoints`/`BlockedPostEndpoints`/`RedirectedPostEndpoints`, message dẫn sang tool dedicated).
9. **Preserve** tool name, JSON keys, error text, output shape — trừ khi bug contract bắt buộc đổi (đổi thì document migration). `ToolCategoryMap` (`Mcp/McpServerHost.cs`) dùng `nameof()`, count khớp source.

## 3. Rules mới cho mutation tool

10. **Prefix/label do factory sở hữu (đã chuẩn hóa).** `McpToolResults` có constants `SuccessPrefix`/`ErrorPrefix`/`DryRunPrefix`/`UncaughtExceptionPrefix`/`HintLabel` — đổi 1 chỗ rebrand toàn bộ (vd `"LOI"`). Call site **KHÔNG tự viết** `[Success]`/`[Error]`/`Error: ` trong summary/message, KHÔNG viết `Hint:`/`Tip:` trong hint value. Factory tự strip legacy prefix nên tool chưa migrate vẫn ra output đúng — nhưng khi refactor từng mutation tool phải **xóa literal prefix khỏi source** và route mọi error result thủ công (vd `ManageWebResourceTool` PrefixMismatch ~L408, các `ErrorResult` local wrappers) qua base `Error()`.
11. **`dry_run` bắt buộc** KHÔNG LÀM TASK, ĐÃ LÀM XONG, ĐÂY CHỈ LÀ NOTED ĐỂ AI BIẾT cho mọi mutation: không ghi Dataverse, trả `DryRun(summary, structured)` mô tả exact action + target (entity, id, fields, count). Destructive action (delete/restore/publish) phải validate exact target trước khi preview.
12. **Role/security/publish/import → gate qua `Helper/RoleGateHelper.cs`** (`IsSystemAdministrator`, `GetCurrentRoleNames`); thiếu quyền → `Error` rõ lý do.
13. **Bulk mutation** (`create_records`, `generate_demo_data`): per-item status (id, status, error), giới hạn output, **không che partial failure** — `[Success] 18/20 created`, không phải `[Success] 20 created`.
14. **Metadata mutation** (`upsert_*`, `manage_form/view/chart/choice`): sau mutation gọi `Helper/MetadataOperationWaitHelper.cs` (`WaitAfterTableCreation`, …) để metadata propagate; add-to-solution qua `Helper/SolutionComponentCreateHelper.cs` (`AddExistingComponent`, `ApplySolutionUniqueName`), không tự build `AddSolutionComponent` request.
15. **Sensitive value không leak:** env var value, secure config, secret — không vào Content/structured/test-call trừ khi param explicit + policy cho phép.
16. **HTTP success ≠ tool success.** Payload có `error` / parse fail / structured mang error → `Error(...)` (`IsError=true`). Cấm `Success()` với Content bắt đầu `[Error]`.
17. **`execute_webapi` refactor cuối:** audit lại redirect/block cho toàn bộ mutation endpoint mà dedicated tool đã cover, đảm bảo AI không bypass safety của tool dedicated.

## 4. Helpers có sẵn — tái dụng, không viết lại

| Helper                                                               | Dùng khi                                                    |
| -------------------------------------------------------------------- | ----------------------------------------------------------- |
| `McpToolBase` (`Tools/McpToolBase.cs`)                               | `Success` / `Error` / `ThrowException` / `DryRun`           |
| `Helper/DataverseMutationExecutor.cs`                                | Create/Update/Delete/Associate/Disassociate/Execute qua SDK |
| `Helper/DataverseWebApiMutationExecutor.cs`                          | Mutation qua raw Web API                                    |
| `Helper/RoleGateHelper.cs`                                           | Gate destructive/security action theo role                  |
| `Helper/MetadataOperationWaitHelper.cs`                              | Wait propagation sau metadata mutation                      |
| `Helper/SolutionComponentCreateHelper.cs`                            | Add component vào solution                                  |
| `Helper/PublishHelper.cs`, `ViewXmlHelper.cs`, `ViewBackupHelper.cs` | publish / view / form XML                                   |

## 5. Quy trình mỗi tool (1 tool xong mới sang tool kế)

```
1. Read tool gốc + model + helper liên quan
2. Probe Dataverse xác nhận response shape + logical name (rule 7)
3. Apply rules §2 + §3
4. dotnet build DynamicsCrm.DevKit.Cli → 0 errors, 0 warnings
5. Release script → MCP mới; lấy N từ devkit mcp --tools
5a. Dừng lại, hỏi anh Phước verify mọi thứ bạn đã thay đổi, anh P đồng ý làm làm bước 6, aP có yêu cầu gì thêm thì làm theo yêu cầu. Làm xong yêu cầu thì đọc lại file này.
6. Test thật org 🟢DEVKITV4: happy + alternate mode + 2–3 error paths + dry-run
7. Test-call testcall/{N}.{tool_name}.md — 4 H1: Tool description / Input tool call /
   Output tool call / Kết quả AI tổng hợp; raw output đầy đủ, không "rút gọn", không secret
8. Cập nhật redirect/block execute_webapi nếu overlap (rule 8)
9. git status chỉ file tool + test-call; Const.cs = xxxx.yy.zz HH.mm.ss → báo user review
```

## 6. Done khi

Mọi tool PASSED rules §2+§3; numbering/`ToolCategoryMap`/test-call đồng bộ; không còn helper catch trong tool class; working tree sạch (không date replacement, credential, token).

## 7. Tools đã hoàn thành phase 3

- `5. manage_choice` — PASSED 16 test cases (list/detail/create/update/add/rename/remove/recolor/display_name/description + 5 error paths). Test-call: `testcall/5.manage_choice.md`
- `23. manage_environment_variable` — PASSED 14 test cases (list no-filter/solution-filter, create/detail/update/clear/delete lifecycle, add-to-solution verify + 5 error paths). Test-call: `testcall/23.manage_environment_variable.md`
