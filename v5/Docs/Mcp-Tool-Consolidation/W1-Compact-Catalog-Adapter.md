# W1 — Compact catalog & adapter (P1) · MCP 40→10 consolidation

> Work file thực thi cho [Mcp-Tool-Consolidation.md](../Mcp-Tool-Consolidation.md).
>
> **Trạng thái: CHƯA BẮT ĐẦU** · Phase P1 · Điều kiện vào: W0 DONE (verdict spike được aP chốt).

## Đọc trước khi làm (theo thứ tự)

1. `AGENTS.md` — toàn bộ.
2. Spec: §4 (catalog 10 tool), §5 (cả 5.1–5.3), §6 (cả 6.1 — surface legacy/compact), §7 (ma trận đủ 40), §8 P1, §9 (quy tắc test mới + bảng điều kiện đạt), §11 (snapshot tham số/default).
3. State W0 + verdict spike đã chốt + các file prototype W0 còn giữ.

## Mục tiêu

Đăng ký compact surface hoạt động end-to-end qua stdio probe: 8 router + OperationCatalog + binder + contract provider — không đụng 40 handler và không làm scan legacy thấy thêm tool.

## Bất biến phải giữ (trích spec — vi phạm là fail)

- Giữ nguyên 40 tool legacy: attributes, signatures, metadata, payload — không sửa DescriptionAttribute/parameter metadata legacy để giảm catalog (§6.1).
- Compact KHÔNG gắn `[McpServerToolType]` vào scan legacy; đăng ký tường minh qua factory từ allowlist (§4, §6.1).
- Không đăng ký 48 tool cùng lúc; không dùng hidden/unlisted alias làm tương thích (§6.1).
- Router đúng hai tham số model nhập `operation`/`arguments` (§5.1); không dispatch ngoài allowlist, không route sang operation bị disable kể cả khi client gửi tên ngoài enum (§4).
- Tính `ReadOnly` của facade từ `[McpServerTool(ReadOnly=...)]` của method legacy (§4).
- Không đưa dry_run/dry-run/--dry-run/dryrun vào descriptions/parameters/schema/resource/server instructions (§6 điểm 7 — invariant DryRunGatewayContractTests).
- Handler mutable state (`ManageFunctionTool._resolvedApi`, `ManageAppTool._workspaceFolder`) không cache vào registry singleton (§6 điểm 5).
- Giữ .devkit paths, root resolution, backup/undo semantics, role/admin checks, publish timing, partial success (§6 điểm 8).
- Không dùng execute_webapi thay specialized handler (§6 điểm 9).
- **Chỉ thêm file test mới** dưới `DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/`; không sửa/xóa/rename/tham số hóa test cũ; không thêm method vào file test cũ; reuse helper/fixture cũ bằng cách tham chiếu (§9).
- Source version giữ 4.44.44.44; không đụng placeholder build date.

## Các bước

1. Xác nhận State W0: verdict thiết kế (SDK binder hay typed adapter) + mầm prototype còn lại. Thiếu → dừng, quay lại W0.
2. **OperationCatalog** bất biến: mỗi entry gồm operation name, owner type/method, facade, flags từ attribute, SDK-generated schema, defaults, guide refs, invoker. `nameof()` cho type references (§6 điểm 1–2). Entry classes giữ namespace `DynamicsCrm.DevKit.Cli.Mcp.Tools`; catalog/helper vào subnamespace.
3. **Compact factory:** 8 router đăng ký programmatically. Annotation tổng hợp: router mixed ReadOnly=false, Destructive=true, Idempotent=false; router read ReadOnly=true, Destructive=false, Idempotent=true; utility flags giữ hiện có (§4).
4. **Binder/validation** theo contract thật từng operation: giữ omitted/null/empty string/0/false/nullable Int64/`record_ids` array; McpServer/cancellation/IOrganizationService/DI là tham số hệ thống — không xuất schema, không lấy từ arguments (§5.1, §6 điểm 4). Lỗi route/binder phân biệt "chưa dispatch" với lỗi handler (§5.3).
5. **Compact contract provider:** `name="operations"` trả catalog ngắn operation → facade; `name="contract://{operation}"` trả một contract (inputSchema, outputSchema, defaults, required-if, constraints, side effects/local paths, ví dụ, guide URI); resource template cùng provider; reuse envelope `ReadInstructionResult`; remap referencedBy về tên facade; không trả toàn bộ 40 schema khi gọi catalog (§5.2). Legacy `ReadInstructionTool` + 13 resource giữ nguyên; hai surface không đăng ký trùng tên; dùng nội dung resource legacy làm nguồn (§6.1).
6. **Option `--tool-surface legacy|compact`** mặc định legacy. `--tools`, setup guide và số lượng tool lấy từ catalog của surface được chọn. Dùng `GetToolCatalog` cho legacy và kiểm tra `DisabledToolSet` cùng tài nguyên dùng chung trong `ToolResourceMap` (§6.1).
7. **Thêm file test mới** theo §9: `CompactCatalogTests.cs`, `CompactRoutingParityTests.cs`, `CompactContractProviderTests.cs`, `CompactPolicyTests.cs`, `CompactStdioIntegrationTests.cs` dưới `DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/`. `[DoNotParallelize]` cho class dùng shared mutable state; giữ `WaitScalePercent` khi thêm đường đợi metadata chậm (AGENTS.md).
8. **Build gate:** `dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj` — 0 error 0 warning (quy tắc repo). Chạy test mới; chạy lại Cli suite nguyên trạng xác nhận không vỡ gì.
9. **Hash lại** mọi thư mục `*.UnitTests` so manifest W0 — phải khớp 100%.
10. **Stdio probe compact:** kiểm tra `--tool-surface compact` trả catalog theo ma trận, rồi gọi vài operation chỉ đọc qua router. Xác nhận scan `[McpServerToolType]` trả đúng catalog legacy tại W0.

## Bằng chứng / DoD

- [ ] Build 0/0; test mới pass; Cli suite nguyên trạng pass.
- [ ] Hash test cũ = manifest W0 (bằng chứng: lệnh so sánh + kết quả).
- [ ] Mỗi surface công bố đúng catalog theo baseline W0 và ma trận compact.
- [ ] Compact không lọt scan legacy.
- [ ] Stdio probe compact trả đúng catalog; route chặn operation ngoài nhóm và operation bị disable.
- [ ] Contract provider: `contract://` trả đủ inputSchema/defaults cho ít nhất một operation; catalog không trả toàn bộ schema.

## Cổng dừng — báo cáo cho aP

- Demo compact surface qua stdio probe + số liệu; chờ nghiệm thu trước W2.
- Báo mọi điểm spec/code bất đồng ghi nhận được — không tự suy behavior change.

## Handoff prompt cuối session phải chứa

Danh sách file thêm/sửa (production + test), verdict thiết kế dùng thực tế, build/test kết quả, hash comparison kết quả, capture compact, việc còn dở.

## State (session thực thi điền)

- Trạng thái:
- HEAD khi bắt đầu:
- Kết quả:
- Lệch so với kế hoạch:
- Bài học:
