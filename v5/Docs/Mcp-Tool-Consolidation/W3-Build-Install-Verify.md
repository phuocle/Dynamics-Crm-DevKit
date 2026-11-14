# W3 — Build / install / runtime verify (P3) · MCP 40→10 consolidation

> Work file thực thi cho [Mcp-Tool-Consolidation.md](../Mcp-Tool-Consolidation.md).
>
> **Trạng thái: CHƯA BẮT ĐẦU** · Phase P3 · Điều kiện vào: W2 DONE (aP nghiệm thu parity + benchmark).

## Đọc trước khi làm (theo thứ tự)

1. `AGENTS.md` — đặc biệt sections "Verification" và "MCP" (quy trình bắt buộc sau khi sửa `Mcp/**`).
2. Skill `devkit-skill-build-cli` — đọc trọn `SKILL.md` trước khi chạy script.
3. Spec: §8 P3; State W0–W2.

## Mục tiêu

Cài bản compact lên máy thật và chứng minh runtime đúng: whoami khớp manifest, 4 combination surface/category đúng số, tree sạch, placeholder phục hồi.

## Bất biến phải giữ (trích spec — vi phạm là fail)

- Build nhỏ nhất; không full release/coverage toàn repo nếu aP không yêu cầu (AGENTS.md, spec §8 P3).
- Không stage/commit/push nếu không được yêu cầu (AGENTS.md).
- Không restore file thiếu/deleted — coi là trạng thái chủ đích (AGENTS.md).
- Source version giữ 4.44.44.44; build script chỉ được thay `xxxx.yy.zz HH.mm.ss`; verify placeholder được phục hồi sau build dù script có restore trong `finally` (AGENTS.md).
- Default compact KHÔNG bật — chỉ chuyển sau nghiệm thu, là quyết định migration riêng của aP (§6.1, §8 P3).

## Các bước

1. **Build gate cuối:** `dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj` + chạy test net10.0 (Cli).
2. **Cài qua skill:** chạy `devkit-skill-build-cli` (script `Release.DynamicsCrm.DevKit.Cli.ps1`) — làm theo SKILL.md từng bước, không tự chế cách cài.
3. **Restart connector** MCP đang dùng; gọi `whoami`; đối chiếu version, build timestamp, process start time, assembly SHA với manifest `Published/<version>/` vừa tạo. Nếu cả hai connector DevKit đều dùng bản mới — verify TỪNG connector (AGENTS.md MCP bước 2–3).
4. **Capture 4 combination** tools/list thật từ artifact vừa cài: legacy+all = 40, legacy+readonly = 18, compact+all = 10, compact+readonly = 6; xác nhận không surface nào quảng bá cả legacy lẫn compact (§8 P3).
5. **Gọi thử qua connector thật:** vài operation chỉ đọc qua router compact + một `contract://` read; xác nhận hành vi khớp capture stdio của W1/W2.
6. **Inspect working tree:** `git status` — chỉ còn thay đổi dự kiến; xác nhận placeholder `xxxx.yy.zz HH.mm.ss` đã phục hồi (mắt thường, dù script restore trong `finally`); source version 4.44.44.44.
7. **Báo kết quả + giới hạn** còn lại; đề xuất nhưng KHÔNG tự chuyển default compact; KHÔNG commit (chờ aP lệnh — khi được lệnh thì qua skill `devkit-skill-commit`).

## Bằng chứng / DoD

- [ ] whoami: version/build/SHA khớp manifest vừa tạo (paste output thật).
- [ ] 4 capture: 40/18/10/6 đúng, raw JSON lưu được.
- [ ] Tree sạch ngoài phần dự kiến; placeholder phục hồi; version 4.44.44.44.
- [ ] Không file test cũ bị đụng (hash khớp manifest W0 lần cuối).

## Cổng dừng — báo cáo cho aP

- Nghiệm thu runtime. Sau đó aP quyết định: default compact, commit/push, và (nếu yêu cầu) full release/coverage.

## Handoff prompt cuối session phải chứa

Manifest + whoami output, 4 capture paths, git status cuối, các việc còn dở, các quyết định chờ aP.

## State (session thực thi điền)

- Trạng thái:
- HEAD khi bắt đầu:
- Kết quả:
- Lệch so với kế hoạch:
- Bài học:
