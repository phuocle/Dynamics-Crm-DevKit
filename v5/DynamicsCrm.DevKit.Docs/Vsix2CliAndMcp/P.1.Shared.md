# P.1 — Shared Project Template (shproj — nền của mọi project DevKit)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.1.Shared.md`
> **Điều kiện tiên quyết:** `0.md` hoàn tất (engine + catalog + SolutionMutator sẵn sàng).
> **Trạng thái:** ☐ Chưa làm
> **Làm xong file này mới được qua:** `P.2.Console.md`

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/Shared.cs` |
| Payload | `ProjectTemplates/CSharp/01.SharedProjectTemplate/` — `Shared.shproj`, `Shared.projitems`, `Date.cs`, `DevKitJson.cs`, `DocumentMethodAttribute.cs`, `EntityBase.cs`, `Extension.cs`, `PluginCore.cs`, `PluginExecutionContext7Wrapper.cs`, `Properties/AssemblyInfo.cs`, `generator.bat`, `README.md` |
| Manifest VS | `ProjectTemplates/CSharp/01.SharedProjectTemplate/CSharpSharedProjectTemplate.vstemplate` |
| Form input | `DynamicsCrm.DevKit.Vsix/Lib/Forms/FormProject.xaml(.cs)` (với `ProjectType.Shared`) |
| Token | `DynamicsCrm.DevKit.Vsix/Lib/Replacement.cs` — `SetAsync(Dictionary, FormProject)` |
| Tiện ích DTE | `VsixHelper.AddDynamicsCrmDevKitCliJsonAsync()`, `FixProjectFolder()`, `GetSharedProjectAsync()` |

## 2. Template tạo ra gì (hiện tại)

Project **Shared** (.shproj — không sinh DLL, source được import vào các project khác): class nền cho toàn solution DevKit (`PluginCore`, `EntityBase`, `Extension`, `DevKitJson`…) + đảm bảo file cấu hình **`DynamicsCrm.DevKit.Cli.json`** tồn tại ở solution root (từ resource `DynamicsCrm.DevKit.Shared/Resources/DynamicsCrm.DevKit.Cli.json`).

Điểm đặc biệt so với các P khác:
- Đây là **shproj** nên VS cần `GlobalSection(SharedMSBuildProjectFiles)` trong `.sln` và các project phụ thuộc phải có `<Import ... .projitems Label="Shared" />`.
- `generator.bat` nhúng tham số kết nối CLI (`$CliConnectionArgs$`) — xem `Replacement.ApplyCliConnectionArgs`.
- Token dùng chính: `$ProjectName$`, `$SafeProjectName$`, `$NameSpace$` (= `Helper.SafeNamespace`), `$SharedNameSpace$`, `$SharedProject$`, `$CliConnectionArgs$`, `$DevKitVersion$`.

## 3. Logic wizard hiện tại (Shared.cs)

1. `RunStarted`: mở `FormProject(ProjectType.Shared)` — hỏi tên project + kết nối; hủy → `WizardCancelledException`.
2. Kiểm tra project trùng tên (`IsProjectExistAsync`) → lỗi nếu tồn tại.
3. `Replacement.SetAsync(dictionary, form)` điền token; `AddDynamicsCrmDevKitCliJsonAsync()` tạo Cli.json nếu chưa có.
4. `ProjectFinishedGenerating`: đổi tên project thành `ProjectName`; `RunFinished`: `FixProjectFolder`.

## 4. Thiết kế source of truth

- Handler **`SharedProjectTemplateHandler : IProjectTemplateHandler`** đặt trong `DynamicsCrm.DevKit.Shared/Templates/Handlers/` (mới — quy ước đặt tất cả handler ở đây).
- Manifest (mục 3.1 của `0.md`) cho `ProjectType.Shared`: mọi file payload trên, `ReplaceParameters=true` với `.projitems`, `generator.bat`, `README.md`; file `.shproj` gần như tĩnh.
- Việc shproj-đặc-thù nằm trong handler: gọi `SolutionMutator.AddSharedProjectToSolutionAsync` (chèn entry + GlobalSection, `dotnet sln add` không hỗ trợ shproj) và `EnsureDevKitCliJsonAsync` (port từ `VsixHelper`).
- **VSIX hội nhập (optional, sau):** `Wizard/ProjectTemplates/Shared.cs` thay phần tự làm bằng gọi handler; VS vẫn tự copy payload từ zip.

## 5. Việc phải làm (CLI)

- [ ] Viết `SharedProjectTemplateHandler` trong Shared (net48+net10 compile).
- [ ] Đăng ký vào `TemplateCatalog` (id `Shared`, order 1) + manifest payload + embed resource (mục 3.2 `0.md`).
- [ ] Đổi tên đích: `{ProjectName}.shproj`, `{ProjectName}.projitems` (pattern lấy từ `.vstemplate`); nội dung `.projitems` thay token đúng.
- [ ] `EnsureDevKitCliJsonAsync` trong `SolutionMutator` (tạo từ resource nếu thiếu).
- [ ] Cảnh báo nếu shproj đã tồn tại trong solution (tương đương `IsProjectExistAsync`) — không lỗi cứng, cho `--force` ghi đè phần quản lý (không đụng file user).

## 6. CLI surface

```
devkit new --kind project --type Shared --name Contoso.Shared --out <thư mục>
```
Hỏi–đáp khi thiếu flag (theo `FormProject`):
1. Project name (gợi ý mặc định `{SolutionName}.Shared` từ `WorkspaceScanner`).
2. (Connection chỉ cần cho token bat — cho phép bỏ qua / `--offline`; đọc `FormProject.xaml.cs` để giữ đúng tập câu hỏi).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
Tool `scaffold_project` với `projectType="Shared"` — chỉ map tham số, engine đã lo. Trả `ScaffoldResult` JSON (createdFiles, solutionUpdated, warnings).

## 8. Test & nghiệm thu

- [ ] Unit test trong `DynamicsCrm.DevKit.Cli.UnitTests/Templates/`: scaffold vào temp dir có sẵn `.sln` trống → đủ file payload (đã thay token), `.sln` có entry + GlobalSection đúng format VS, `DynamicsCrm.DevKit.Cli.json` tồn tại, không còn `$...$` nào sót trong file sinh ra.
- [ ] Test idempotency: chạy lần 2 → skipped, không đụng file user.
- [ ] `dotnet build` CLI 0 err/0 warn; test net10 pass.
- [ ] Smoke thật: scaffold `Contoso.Shared` vào folder có `.sln` → mở kiểm tra bằng mắt + `dotnet sln list` (nếu được).

## 9. Bàn giao

- [ ] Báo cáo file tạo/sửa + kết quả build/test + output smoke.
- [ ] User duyệt → mới qua `P.2.Console.md`.
