# P.13 — WebResourceTs Project Template (TypeScript)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.13.WebResourceTs.md`
> **Điều kiện tiên quyết:** `0.md`; cùng family với `P.6.WebResource`.
> **Trạng thái:** ☐ Chưa làm
> **Liên hệ CLI sẵn có:** `devkit webresource` (build TS qua `npm run build`/`node build.js` — đã có logic cross-platform trong `TaskWebResource.cs`).

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/WebResourceTs.cs` |
| Payload | `ProjectTemplates/CSharp/13.WebResourceTsProjectTemplate/` — `ProjectTemplate.csproj.template`, `package.json`, `tsconfig.json`, `.eslintrc.json`, `build.js`, `devkit.ts`, `devkitts.d.ts`, `generator.form.bat`, `generator.webapi.bat`, `deploy.debug.bat`, `deploy.release.bat`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpWebResourceTsProjectTemplate.vstemplate` |
| Token | `$devkit.ts$`, `$devkitts.d.ts$`, `$build.js$`, `$package.json$`, `$generator.form.ts.bat$`, `$generator.webapi.ts.bat$`, `$webresource.deploy.debug.ts.bat$`, `$webresource.deploy.release.ts.bat$` |

## 2. Template tạo ra gì

Project webresource **TypeScript** hoàn chỉnh: toolchain build (`build.js` + `tsconfig` + eslint + jest qua package.json), thư viện `lib/devkit.ts` + `devkit.d.ts`, bat generator (sinh form/webapi TS — family với I.14/I.15), bat deploy debug/release (`devkit webresource`).

## 3. Logic wizard hiện tại

Đọc `WebResourceTs.cs` khi làm. Pattern chuẩn như P.6.

## 4. Thiết kế source of truth

- Handler `WebResourceTsProjectTemplateHandler`; manifest id `WebResourceTs`, order 13.
- Resource `Resources/ts/*` (đã trong Shared) là nguồn token — không dùng bản copy trong payload folder (tránh nguồn kép, giống P.6).
- `.sh` cho deploy + generator; `build.js` chạy bằng node cross-platform sẵn.

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest + embed payload.
- [ ] Thư mục `src/` (kiểm tra payload gốc có sẵn chưa — nếu chưa, tạo).
- [ ] `.sh` tương đương 4 bat.
- [ ] Hint sau scaffold: `npm install` trước khi build.

## 6. CLI surface

```
devkit new --kind project --type WebResourceTs --name Contoso.WebResourceTs --out <dir>
```
Hỏi–đáp: project name → connection (cho bat).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` `projectType="WebResourceTs"`.

## 8. Test & nghiệm thu

- [ ] Unit test: đủ 13+ file, token resource đúng nguồn `Resources/ts/`, bat/sh đúng args.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → **hết nhóm P, chuyển sang nhóm I:** `I.1.LateBound.md`.
