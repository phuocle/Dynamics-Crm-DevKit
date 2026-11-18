# W0 — Baseline & spike (P0) · MCP 40→10 consolidation

> Work file thực thi cho [Mcp-Tool-Consolidation.md](../Mcp-Tool-Consolidation.md) — spec là nguồn sự thật; file này là mệnh lệnh công việc của MỘT session, không copy spec vào đây.
>
> **Trạng thái: CHƯA BẮT ĐẦU** · Phase P0 · Chưa thay đổi bất kỳ default/hành vi runtime nào.

## Đọc trước khi làm (theo thứ tự)

1. `AGENTS.md` (repo root) — toàn bộ.
2. Spec: §1–§2 (bằng chứng và giới hạn), §5 (contract compact), §6 (kiến trúc, cả 6.1), §8 P0, §9 (danh mục test cũ — chỉ đọc, chưa đụng), §10.5 (cách đo baseline), §12 (nguồn).
3. Branch làm việc: `dev-small-tool` (đã có, không push).

## Mục tiêu

Chốt baseline đo được và verdict spike quyết định thiết kế W1.

## Bất biến phải giữ (trích spec — vi phạm là fail)

- Không gọi mutation tool trong toàn bộ work này (spec §2.1).
- Không sửa bất kỳ file test nào (spec §9).
- Không sửa manifest release, không rebuild artifact Published khi chưa đến W3 (spec §2.1).
- Giữ nguyên trạng "4 artifact Published modified" nếu gặp khi bắt đầu (spec §2.1 ghi đây là trạng thái đầu tác vụ).
- Phân biệt số đã đo với ước lượng; không dùng tỷ lệ ký tự/4 như token thực (spec §2.3).

## Các bước

1. **Ghi mốc khởi điểm:** `git branch --show-current`, `git status --porcelain`, HEAD full SHA, `devkit --version` (version + Build + SHA256 assembly cài). Ghi vào State.
2. **Manifest hash test cũ:** hash SHA256 toàn bộ file dưới mọi thư mục `*.UnitTests` (mẫu §13 đã làm 527 file tracked). Lưu manifest (đường dẫn + SHA từng file) ra thư mục ngoài tree track — kiểm tra `.gitignore` trước; nếu `.devkit/` bị ignore thì dùng `.devkit/w0/`, không thì `%TEMP%\w0\`. Ghi tổng số file.
3. **Baseline suite Cli (nguyên trạng, unfiltered):** `dotnet test DynamicsCrm.DevKit.Cli.UnitTests/DynamicsCrm.DevKit.Cli.UnitTests.csproj --logger "trx;LogFileName=w0-baseline.trx"`. Ghi discovered/executed/passed/failed/skipped + thời gian + điều kiện máy (W2 sẽ chạy lại cùng điều kiện này). Nếu suite fail ngay từ baseline — ghi nguyên trạng, không sửa gì.
4. **Capture tools/list legacy:** theo §10.5. Mở `devkit mcp <name>` với project `.env` đã cấu hình, gửi initialize (protocol `2025-11-25`), notifications/initialized, tools/list và resources/list. Đọc hết nextCursor. Lưu raw JSON ngoài tree track và ghi số đo theo §2.2.
5. **Spike router chỉ đọc:** dựng prototype `query_data` router + contract provider cho ít nhất một `contract://execute_fetchxml`, net10.0, trong working tree — KHÔNG commit. Yêu cầu: không gắn `[McpServerToolType]` (không lọt scan legacy); router hai tham số `operation`/`arguments` (§5.1); trả nguyên CallToolResult của handler (§5.3); tái dùng handler `ExecuteFetchXmlTool` hiện có.
6. **Verdict spike** phải trả lời đủ, kèm bằng chứng (file/đo/trial):
   - (a) SDK ModelContextProtocol 2.4.0 có API nào cho phép đăng ký tool programmatically và invoke handler nội bộ mà giữ service injection, McpServer, cancellation, default/null? Đọc source SDK trong NuGet cache (`%USERPROFILE%\.nuget\packages\modelcontextprotocol*`), không đoán tên API.
   - (b) Object `arguments` có bị SDK bung thành union lớn hay giữ nguyên object không?
   - (c) Generic `arguments`/outputSchema có bị client từ chối không — thử ít nhất một client có resources và một client chỉ có tools.
   - (d) Đo schema/output serialize thực của spike; so với projection catalog compact.
7. **Định nghĩa benchmark workflow:** chuyển 12 nhóm workflow §9 thành kịch bản đo cụ thể (fixture, bước, cái gì được ghi) — lưu vào State hoặc file kế bên work file. Chưa chạy mutation integration — chỉ định nghĩa.
8. **Chốt State:** điền mục State cuối file này. Prototype giữ lại làm mầm W1 hay xóa sạch — theo quyết định aP ở cổng dừng.

## Bằng chứng / DoD

- [ ] TRX baseline đầy đủ số liệu (đường dẫn TRX ghi trong State).
- [ ] Manifest SHA256 test cũ: tổng số file + từng SHA, lưu được để W1/W2 đối chiếu.
- [ ] Có raw JSON cho catalog legacy và resources, kèm số đo chuẩn hóa và chênh lệch với snapshot tại §2.2.
- [ ] Verdict (a)–(d) đủ, có bằng chứng.
- [ ] Sau spike: hash test cũ vẫn khớp manifest bước 2.
- [ ] Kế hoạch benchmark được định nghĩa.

## Cổng dừng — báo cáo cho aP

- Verdict spike → aP chốt thiết kế W1: dùng SDK binder hay typed adapter.
- Nếu (c) thất bại: báo giới hạn, giữ legacy theo spec §8 P0 — không tự bó chiếu thiết kế.

## Handoff prompt cuối session phải chứa

Mốc (HEAD/version/SHA), TRX path + số liệu, manifest path, capture paths, verdict (a)–(d), kế hoạch benchmark, danh sách file prototype đã tạo, việc còn dở.

## State (session thực thi điền)

- Trạng thái:
- HEAD khi bắt đầu:
- Kết quả:
- Lệch so với kế hoạch:
- Bài học:
