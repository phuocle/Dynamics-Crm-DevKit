# W2 — Parity & benchmark (P2) · MCP 40→10 consolidation

> Work file thực thi cho [Mcp-Tool-Consolidation.md](../Mcp-Tool-Consolidation.md).
>
> **Trạng thái: CHƯA BẮT ĐẦU** · Phase P2 · Điều kiện vào: W1 DONE (aP nghiệm thu compact surface).

## Đọc trước khi làm (theo thứ tự)

1. `AGENTS.md` — toàn bộ.
2. Spec: §7 (ma trận 40 operation), §8 P2, §9 (bảng điều kiện đạt — bằng chứng (a)–(e)), §10 (cả 10.1–10.5), §11.
3. State W0 + W1; manifest W0; capture baseline W0; kế hoạch benchmark W0.

## Mục tiêu

Chứng minh compact không mất hành vi (parity trên cùng fixture), đo được hiệu quả thật (catalog + result, ba tầng), và nén descriptor compact mà không đụng legacy metadata.

## Bất biến phải giữ (trích spec — vi phạm là fail)

- Test cũ bất biến: chạy lại nguyên trạng; không sửa assert/fixture/snapshot/helper/project/runsettings/filter/timeout để suite pass; không giảm discovery/execution; không thêm skip (§9). Nếu baseline đã fail — báo đúng lỗi trước/sau, không claim all pass.
- Rút description/instructions CHỈ trên descriptor compact riêng; không chỉnh metadata/helper legacy đang được test (§8 P2).
- Không cắt text để đạt token target; không bỏ output fields để đạt benchmark; trả nguyên CallToolResult của handler (§5.3, §10.4).
- Không tự suy behavior change khi source/test/doc bất đồng — ghi nhận lại (§8 P2).
- Giảm catalog mà giấu hết descriptions rồi buộc model đọc 40 contract một lượt = không đạt mục tiêu (§10.5).
- Không dùng tỷ lệ ký tự/4 như token thực; tokenizer phải nêu tên/version; usage thật từ host ưu tiên hơn heuristic (§2.3, §10.5).
- Không tự động retry mutation/invoke khi timeout hay lỗi parse output (§5.3).

## Các bước

1. **Suite nguyên trạng:** chạy lại TOÀN BỘ Cli suite net10.0 unfiltered, cùng điều kiện baseline W0 (cùng máy, cùng lệnh, cùng trx logger); so TRX trước/sau: mọi test cũ vẫn discover + execute, không tăng skip. So hash mọi thư mục `*.UnitTests` với manifest W0.
2. **Parity từng operation** trên cùng fixture deterministic (§8 P2): args default/explicit/null; success/error; SDK calls; structured payload; output file bytes/path; publish/backup. 40 operation theo ma trận §7 — mỗi dòng một case; mutation dùng fake/test environment, giữ confirmation nghiệp vụ hiện có.
3. **Ghi bất đồng** source/test/doc vào State; không tự suy behavior change; manifest cũ (build 12/11/2026 15:28:59) là discrepancy đã biết, không sửa.
4. **Nén descriptor compact:** instructions mục tiêu 150–200 ký tự, giữ nhận diện instance/org và chỉ dẫn lấy contract (§3). Chuyển ví dụ dài sang contract. So sánh SHA của descriptor legacy trước và sau.
5. **Benchmark ba tầng** theo §10.5, ghi riêng từng tầng: (1) wire — tools/list chuẩn hóa catalog compact (target ≤60.054 ký tự = 35% baseline 171.583), initialize instructions, resource catalog; (2) host/model — tool definitions host thực đưa vào model; (3) workflow — input/cached input/output/tool results/help/retry toàn tác vụ. Giữ cố định model/client/config/instances/prompt corpus; đo cold + warm riêng. Chạy bộ workflow W0 đã định nghĩa.
6. **Đo result size** theo §10.5: kích thước Content/StructuredContent/phần trùng cho success nhỏ/lớn, Web API body, partial bulk fail, error details, metadata full, XML/RDL, log, contract help — dùng fixture không nhạy cảm; mutation trên fake/test env.
7. **Tổng hợp:** `Σ input_old − Σ input_new` và `Σ output_old − Σ output_new` trên workflow; cached input riêng; không cộng "tool output tokens" thêm lần nữa vào input đã chứa result (§10.5).
8. **Tài liệu migration** operation mapping (40 → facade; giữ link docs:// và schema:// cũ); product doc triển khai đặt `DynamicsCrm.DevKit.Docs/Cli/` theo AGENTS.md; hai file phân tích giữ ở Docs.

## Bằng chứng / DoD

- [ ] TRX sau: số liệu từng suite; mọi test cũ discover + execute, không tăng skip.
- [ ] Hash test cũ = manifest W0 (bằng chứng so sánh).
- [ ] Bảng parity 40 operation: mỗi dòng có kết quả old vs new + fixture dùng.
- [ ] Catalog compact đo được: số ký tự chuẩn hóa vs target ≤60.054; ghi rõ đây là wire measurement.
- [ ] Benchmark 3 tầng có số liệu; tokenizer nêu tên/version nếu ước lượng.
- [ ] Descriptor compact đã rút gọn; legacy descriptor byte-identical (hash so trước/sau).

## Cổng dừng — báo cáo cho aP

- Bảng parity + số liệu benchmark; aP nghiệm thu trước W3.
- Nếu parity phát hiện lệch — dừng, báo, không tự vá behavior.

## Handoff prompt cuối session phải chứa

Bảng parity (tóm tắt + path file đầy đủ), số liệu benchmark 3 tầng, kết quả suite trước/sau, hash evidence, việc còn dở.

## State (session thực thi điền)

- Trạng thái:
- HEAD khi bắt đầu:
- Kết quả:
- Lệch so với kế hoạch:
- Bài học:
