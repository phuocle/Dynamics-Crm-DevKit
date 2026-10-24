# P.6 — WebResource Project Template (JavaScript)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.6.WebResource.md`
> **Điều kiện tiên quyết:** `0.md`.
> **Trạng thái:** ☐ Chưa làm

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/WebResource.cs` |
| Payload | `ProjectTemplates/CSharp/06.WebResourceProjectTemplate/` — `ProjectTemplate.csproj.template`, `package.json`, `jsconfig.json`, `devkit.js`, `DevKit.d.ts`, `generator.form.bat`, `generator.webapi.bat`, `deploy.debug.bat`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpWebResourceProjectTemplate.vstemplate` |
| Token resource | `Replacement.cs` — `$devkit.js$`, `$devkit.d.ts$`, `$package.json$`, `$jsconfig.json$`, `$generator.form.bat$`, `$generator.webapi.bat$`, `$webresource.deploy.debug.bat$` |

## 2. Template tạo ra gì

Project webresource **JavaScript**: thư mục `entities/`, thư viện `lib/devkit.js` + `devkit.d.ts` (typing cho form/webapi), `package.json` + `jsconfig.json`, bat deploy (`devkit webresource` qua `devkit webresource`… xem resource `bat.webresource.deploy.debug.bat`) và bat generator (`devkit generator` sinh code form/webapi — đúng family với item I.2/I.3).

## 3. Logic wizard hiện tại

Đọc `WebResource.cs` khi làm. Pattern chuẩn + chọn connection dùng cho các bat. `FormWebResource.xaml` có thể có câu hỏi riêng (kiểm tra; nếu wizard dùng `FormProject` thì theo chuẩn).

## 4. Thiết kế source of truth

- Handler `WebResourceProjectTemplateHandler`. Toàn bộ nội dung động lấy từ resource `Resources/js/` (đã trong Shared).
- Manifest: id `WebResource`, order 6.
- **Mở rộng đa nền tảng:** sinh bản `.sh` cho deploy/generator; giữ nguyên bat cho Windows.

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest + embed payload (cả resource js/ts cần nhúng — payload folder có sẵn `devkit.js`/`DevKit.d.ts` nhưng resource trong Shared mới là nguồn cho token; **chọn 1**: ưu tiên token resource như VSIX đang làm để không tạo nguồn kép).
- [ ] Thư mục `entities/` (tạo rỗng + `.gitkeep` nếu cần — xem payload gốc có chưa).
- [ ] `.sh` cho deploy + generator.

## 6. CLI surface

```
devkit new --kind project --type WebResource --name Contoso.WebResource --out <dir>
```
Hỏi–đáp: project name → connection (cho bat; `--offline` bỏ qua).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` `projectType="WebResource"`.

## 8. Test & nghiệm thu

- [ ] Unit test: đủ file + token; `lib/devkit.js` đúng resource; bat/sh đúng args.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `P.7.SharedTest.md`.
