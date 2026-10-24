# P.2 — Console Project Template (net462)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.2.Console.md`
> **Điều kiện tiên quyết:** `0.md` + `P.1.Shared.md` (dùng `$SharedProject$`, `$SharedNameSpace$`…).
> **Trạng thái:** ☐ Chưa làm

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/Console.cs` |
| Payload | `ProjectTemplates/CSharp/02.ConsoleProjectTemplate/` — `ProjectTemplate.csproj.template`, `App.cs`, `App.config.template`, `Helper.cs`, `Program.cs`, `TracingServiceFake.cs`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpConsoleProjectTemplate.vstemplate` |
| Form input | `Lib/Forms/FormProject.xaml(.cs)` (`ProjectType.Console` — hỏi thêm loại kết nối) |
| Token | `Replacement.cs` — `SetEmbeddedResourceAsync` (nhánh Console) |

## 2. Template tạo ra gì

Project console **net462** (SDK-style csproj từ `ProjectTemplate.csproj.template`) kết nối Dataverse: `Program.cs`/`App.cs`/`Helper.cs` + `App.config`. Điểm quan trọng nhất: **nội dung `App.cs` + `App.config` phụ thuộc loại kết nối** (Interactive/ClientSecret/OAuth/AD/FromPac…):

- `$App.cs$` ← resource `cs.console.App.{connectionType}.cs` (đã áp token lồng — `ApplyReplacements`).
- `$App.config$` ← resource `cs.console.App.config.{connectionType}`.
- Token connection (`$AuthTypeValue$`, `$UrlValue$`, `$ClientIdValue$`… + 5 token comment `.env` `$UrlConfigComment$`…) điền giá trị thật từ form.
- NuGet versions (18 package trong `AddNuGetAsync`).
- Không sinh `.snk` (kiểm tra lại `Console.cs` — nếu có thì theo P.4).

Tất cả nằm trong `DynamicsCrm.DevKit.Shared/Resources/cs/` — **đã sẵn Shared, không cần di chuyển**.

## 3. Logic wizard hiện tại

Mở `FormProject(ProjectType.Console)` (chọn AuthType + URL + credential…) → check trùng tên project → `Replacement.SetAsync` (điền token + resource theo connectionType) → VS copy payload + thay token → `ProjectFinishedGenerating` đổi tên project. Chi tiết: đọc `Console.cs` trước khi làm.

## 4. Thiết kế source of truth

- Handler `ConsoleProjectTemplateHandler : IProjectTemplateHandler` trong `Shared/Templates/Handlers/`.
- Input DTO: `ProjectTemplateInput` + trường `CrmConnection` (type/url/username/password/clientid/secret/pacprofile/UseProjectEnvironment) — map 1-1 từ `CrmConnection` model sẵn có trong Shared.
- Token resource theo connectionType: đưa nguyên nhánh Console của `SetEmbeddedResourceAsync` vào `TokenEngine` (nhận DTO thay form) — **chung cho VSIX sau này**.

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest (id `Console`, order 2) + embed payload.
- [ ] `TokenEngine` hỗ trợ nhánh resource Console (App.cs/App.config theo AuthType + token lồng).
- [ ] Sinh `App.config` đúng theo connectionType; sinh bản `.sh` tương đương nếu có script (Console payload gốc không có bat — kiểm tra lại).
- [ ] Câu hỏi connection trong CLI: dùng lại danh sách AuthType chuẩn của `devkit` (`Interactive`, `DeviceCode`, `ClientSecret`, `FromPac`, `OAuth`, `AD`).

## 6. CLI surface

```
devkit new --kind project --type Console --name Contoso.Console --out <dir> [--offline]
```
Hỏi–đáp: project name → AuthType (SelectionPrompt) → các câu hỏi theo AuthType (URL/ClientId/Secret/…) — mô phỏng `FormConnection`.

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` với `projectType="Console"` + object `connection` (type/url/…). Password/secret không log ra kết quả.

## 8. Test & nghiệm thu

- [ ] Unit test: scaffold với từng AuthType (parameterized) → `App.cs`/`App.config` đúng resource tương ứng, token đã thay, không `$token$` sót.
- [ ] Test offline fallback NuGet (không network → version mặc định an toàn).
- [ ] `dotnet build` CLI 0/0; test pass. (Project sinh ra là net462 — chỉ build được trên máy có net462 targeting pack; trên Linux/mac chấp nhận "tạo file đúng", không bắt buộc build project sinh ra.)

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `P.3.ConsoleCore.md`.
