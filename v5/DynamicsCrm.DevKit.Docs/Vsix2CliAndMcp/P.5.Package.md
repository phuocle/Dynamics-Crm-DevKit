# P.5 — Package Project Template (Dataverse Package Deployer)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.5.Package.md`
> **Điều kiện tiên quyết:** `0.md`; nên làm sau `P.4.Server.md` (pattern giống hệt).
> **Trạng thái:** ☐ Chưa làm

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/Package.cs` |
| Payload | `ProjectTemplates/CSharp/05.PackageProjectTemplate/` — `ProjectTemplate.csproj.template`, `deploy.debug.bat`, `deploy.debug.only.bat`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpPackageProjectTemplate.vstemplate` |

## 2. Template tạo ra gì

Project **Package Deployer** (net462): csproj tham chiếu `Microsoft.CrmSdk.XrmTooling.PackageDeployment` + deploy bat. Cấu trúc đơn giản nhất trong nhóm có bat — **không cần snk theo payload folder** (kiểm tra lại `Package.cs` khi làm; nếu có `SigningHelper` thì xử lý như P.4).

## 3. Logic wizard hiện tại

Đọc `Package.cs` khi làm. Theo pattern chuẩn: `FormProject(ProjectType.Package)` → check trùng tên → `Replacement.SetAsync` → copy payload + token; deploy bat lấy từ resource `bat.plugin.deploy.debug(.only).bat` (cùng bộ với Server — vì Package cũng deploy assembly qua `devkit server`).

## 4. Thiết kế source of truth

- Handler `PackageProjectTemplateHandler` — tái dùng 100% hạ tầng P.4 (token bat, NuGet, SolutionMutator), chỉ khác manifest payload.
- Manifest: id `Package`, order 5. **Không yêu cầu Shared tồn tại** (xác nhận lại khi đọc wizard).

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest + embed payload.
- [ ] Sinh `.sh` deploy tương đương bat (như P.4).
- [ ] Đảm bảo thư mục `PkgFolder` (nếu template có — kiểm tra csproj.template) được tạo đúng.

## 6. CLI surface

```
devkit new --kind project --type Package --name Contoso.Package --out <dir>
```
Hỏi–đáp: project name → connection (cho token bat; cho phép `--offline`).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` `projectType="Package"`.

## 8. Test & nghiệm thu

- [ ] Unit test: đủ file, token thay, không `$token$` sót, bat/sh đúng args.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `P.6.WebResource.md`.
