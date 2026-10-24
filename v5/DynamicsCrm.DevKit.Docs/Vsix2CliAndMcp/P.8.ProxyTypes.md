# P.8 — ProxyTypes Project Template (early-bound types)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.8.ProxyTypes.md`
> **Điều kiện tiên quyết:** `0.md`.
> **Trạng thái:** ☐ Chưa làm
> **Liên hệ CLI sẵn có:** lệnh `devkit modelbuilder` (`Tasks/TaskModelBuilder.cs`) chính là công cụ mà template này bao bọc.

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/ProxyTypes.cs` |
| Payload | `ProjectTemplates/CSharp/08.ProxyTypesProjectTemplate/` — `ProjectTemplate.csproj.template`, `run.bat`, `GeneratedCode.cs`, `ProxyTypesAssembly.cs`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpProxyTypesProjectTemplate.vstemplate` |
| Token | `Replacement.cs` — `$run.bat$` ← resource `bat.proxytypes.run.bat` |

## 2. Template tạo ra gì

Project **ProxyTypes** (net462): csproj trống sẵn slot + `GeneratedCode.cs` + **`run.bat`** gọi `devkit modelbuilder` sinh early-bound types (nhúng `$CliConnectionArgs$`). `$ProjectProxyTypes$` = `{Solution}.ProxyTypes` là token chung mà template khác (Test/Shared) tham chiếu.

## 3. Logic wizard hiện tại

Đọc `ProxyTypes.cs` khi làm. Pattern chuẩn; snk: kiểm tra wizard có gọi SigningHelper không (payload folder không có `key.snk`).

## 4. Thiết kế source of truth

- Handler `ProxyTypesProjectTemplateHandler`; manifest id `ProxyTypes`, order 8.
- **Mở rộng đa nền tảng:** `run.sh` tương đương gọi `devkit modelbuilder` (lệnh CLI đã chạy cross-platform).

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest + embed payload.
- [ ] `run.sh` + token bat resource `bat.proxytypes.run.bat`.
- [ ] In hint sau khi scaffold: "chạy run.bat/run.sh hoặc `devkit modelbuilder` để sinh types".

## 6. CLI surface

```
devkit new --kind project --type ProxyTypes --name Contoso.ProxyTypes --out <dir>
```
Hỏi–đáp: project name → connection (cho run.bat; `--offline` được).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` `projectType="ProxyTypes"`.

## 8. Test & nghiệm thu

- [ ] Unit test: đủ file, run.bat/run.sh đúng args, token thay hết.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `P.9.Test.md`.
