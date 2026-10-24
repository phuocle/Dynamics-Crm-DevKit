# I.13 — BatFile Item Template (file tiện ích: deploy bat, devkit.js/.d.ts, Managed Identity…)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.13.BatFile.md`
> **Điều kiện tiên quyết:** `0.md`.
> **Trạng thái:** ☐ Chưa làm
> **Lưu ý đánh số:** không có I.12 — folder gốc của VSIX nhảy từ 11 sang 13; giữ nguyên số 13 cho khớp VSIX.

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/BatFile.cs` |
| Payload | `ItemTemplates/CSharp/13.BatFileItemTemplate/` — `batfile.bat`, `devkit.js`, `devkit.d.ts`, `Plugin-Managed-Identity-Config.json`, `Plugin-Managed-Identity.md` |
| Resource | `Shared/Resources/bat/*`, `Resources/js/*`, `Resources/ts/*`, `Resources/ManagedIdentity/*` |
| Token | `Replacement.ApplyCliConnectionArgs` |

## 2. Template tạo ra gì

Menu chọn 1/nhiều file tiện ích thả vào project hiện tại: các bat deploy/generator (nhúng `$CliConnectionArgs$`), `devkit.js`/`devkit.d.ts` (thư viện webresource JS), bộ Managed Identity cho plugin (config + hướng dẫn).

## 3. Logic wizard hiện tại

Đọc `BatFile.cs` khi làm. Hình thức: FormCustom/FormInput dạng **danh sách chọn nhiều** file muốn thêm; nội dung lấy từ resource nhúng (không phải payload folder — payload chỉ là placeholder).

## 4. Thiết kế source of truth

- Handler `BatFileItemTemplateHandler` — danh sách file chọn lấy từ **manifest** (liệt kê resource khả dụng + nhãn hiển thị); nội dung đọc từ Shared Resources; bat qua `ApplyCliConnectionArgs`.
- **Mở rộng đa nền tảng:** mỗi bat chọn thêm sinh kèm bản `.sh` (tùy chọn prompt "Sinh cả bản .sh?" default theo OS).

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest (id `BatFile`, order I.13) + danh sách resource.
- [ ] Prompt: multi-select (Spectre `MultiSelectionPrompt`) các file → connection nếu có bat → xác nhận.
- [ ] Idempotency: file đã tồn tại → skipped (trừ `--force`).

## 6. CLI surface

```
devkit new --kind item --type BatFile --out <dir> [--offline]
```
(interactive chính là luồng chính của item này)

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="BatFile"` + `files: string[]` (tên resource từ `get_templates`).

## 8. Test & nghiệm thu

- [ ] Unit test: chọn từng loại resource → đúng nội dung resource; bat có args connection; `.sh` sinh kèm đúng cú pháp bash.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `I.14.JsFormTs.md`.
