# I.11 — ResourceString Item Template (.resx resource)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.11.ResourceString.md`
> **Điều kiện tiên quyết:** `0.md`.
> **Trạng thái:** ☐ Chưa làm

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/ResourceString.cs` |
| Payload | `ItemTemplates/CSharp/11.ResourceStringItemTemplate/ResourceString.resx` |
| Manifest VS | `CSharpResourceStringItemTemplate.vstemplate` |

## 2. Template tạo ra gì

File resource `{Entity}.{LanguageCode}.resx` (ví dụ `account.1033.resx`) — chuỗi localized cho entity (dùng cho Ribbon/App trong Dataverse).

## 3. Logic wizard hiện tại

Đọc `ResourceString.cs` khi làm. Chọn entity + language code (LCID); copy payload resx (thay token nếu có) + đổi tên đích.

## 4. Thiết kế source of truth

- Handler `ResourceStringItemTemplateHandler` — resx là XML: đọc payload, ghi đích với tên đúng. Không cần connection (nếu wizard có query chuỗi hiện có thì tách thành bước optional — xác nhận khi đọc).

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest (id `ResourceString`, order I.11) + embed payload.
- [ ] Prompt: entity → language code (gợi ý 1033/1066/v.v. + gõ tay).

## 6. CLI surface

```
devkit new --kind item --type ResourceString --entity account --language 1033 --out <dir>
```

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="ResourceString"`, `languageCode`.

## 8. Test & nghiệm thu

- [ ] Unit test: file resx tạo đúng tên, XML well-formed (XDocument load được).
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `I.13.BatFile.md` (**lưu ý: không có I.12 — giữ số gốc của VSIX**).
