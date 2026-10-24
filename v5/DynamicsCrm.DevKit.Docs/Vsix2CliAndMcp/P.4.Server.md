# P.4 — Server Project Template (plugin assembly — template quan trọng nhất)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.4.Server.md`
> **Điều kiện tiên quyết:** `0.md` + `P.1.Shared.md` (Server bắt buộc có Shared project trước).
> **Trạng thái:** ☐ Chưa làm
> **Ghi chú:** đây là wizard tôi đã đọc nguyên văn — các file P khác mô phỏng pattern này.

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/Server.cs` (75 dòng) |
| Payload | `ProjectTemplates/CSharp/04.ServerProjectTemplate/` — `ProjectTemplate.csproj.template`, `deploy.debug.bat`, `deploy.debug.only.bat`, `key.snk`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpServerProjectTemplate.vstemplate` — `<ProjectItem ReplaceParameters="false" TargetFileName="$ProjectName$.snk">key.snk</ProjectItem>`… |
| Sinh snk | `Lib/SigningHelper.cs` (P/Invoke `mscoree StrongNameKeyGen` — Windows-only) |
| Token bat | `Replacement.cs` — `$deploy.debug.bat$`, `$deploy.debug.only.bat$` (đã áp `$CliConnectionArgs$`) |

## 2. Template tạo ra gì

Project **net462 plugin/workflow/custom action/custom api/data provider** — nơi sinh sống của mọi item template nhóm I.4–I.9. Gồm: csproj (sign assembly + references CrmSdk + Shared import), `deploy.debug(.only).bat` (gọi `devkit server` deploy — nhúng tham số kết nối), `{ProjectName}.snk`, assembly info, README.

## 3. Logic wizard hiện tại (Server.cs)

1. Lấy `sharedProjectName = GetSharedProjectAsync()`; **nếu Shared chưa tồn tại → lỗi "Please add Shared project" + hủy wizard**.
2. `FormProject(ProjectType.Server)` → check trùng tên project → `Replacement.SetAsync(dictionary, form)`.
3. `ProjectFinishedGenerating`: đổi tên project + **`SigningHelper.GenerateKey(project, dir, $"{ProjectName}.snk")`** (P/Invoke; set `SignAssembly=true`, `AssemblyOriginatorKeyFile` qua DTE).
4. `RunFinished`: `FixProjectFolder`.

## 4. Thiết kế source of truth

- Handler `ServerProjectTemplateHandler` trong Shared:
  - Validate Shared tồn tại (qua `WorkspaceScanner`; nếu thiếu → **gợi ý chạy P.1 trước** hoặc tự scaffold tùy `--force`, mặc định: báo lỗi kèm hint).
  - Sinh `.snk` bằng `SigningService` (RSA thuần — xem 3.5 `0.md`), **thay hoàn toàn** SigningHelper P/Invoke.
  - Token bat `$deploy.debug.bat$`/`$deploy.debug.only.bat$` từ resource `bat.plugin.deploy.debug(.only).bat` + `ApplyCliConnectionArgs`.
- Csproj sinh ra phải có `<Import Project="..\{Shared}\{Shared}.projitems" Label="Shared" />` (SolutionMutator đảm bảo).
- **Mở rộng đa nền tảng (không có trong VSIX):** sinh thêm `deploy.debug.sh` / `deploy.debug.only.sh` (`#!/usr/bin/env bash`) với lệnh `devkit` tương đương — chọn sinh theo OS hoặc luôn sinh cả hai (quyết định khi implement, ghi rõ vào báo cáo).

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest (id `Server`, order 4) + embed payload (`key.snk` nhúng làm binary resource; CLI **luôn sinh snk mới** bằng SigningService thay vì copy `key.snk` mẫu — giữ an toàn khóa).
- [ ] Csproj template: set `SignAssembly`, `AssemblyOriginatorKeyFile`, NuGet versions.
- [ ] Sinh `.sh` deploy tương đương.
- [ ] Cập nhật `TemplateCatalog`: `RequiresConnection=false` (scaffold offline được), nhưng cảnh báo nếu thiếu Shared.

## 6. CLI surface

```
devkit new --kind project --type Server --name Contoso.Plugin --out <dir>
```
Hỏi–đáp: project name → (nếu không tìm thấy Shared) prompt "Không tìm thấy Shared project. Scaffold Shared luôn? (y/n)" — nếu y: gọi handler P.1 trước rồi mới tiếp tục.

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` `projectType="Server"` + `generateShellScripts` (default true). Trả `projectFilePath`, `solutionUpdated`.

## 8. Test & nghiệm thu

- [ ] Unit test: scaffold trong temp (đã có Shared từ P.1) → đủ file; `.snk` đúng header `RSA2` (0x…52 53 41 32); `dotnet build` project sinh ra pass (net462 targeting pack có trên máy dev).
- [ ] Thiếu Shared → lỗi có hint, không tạo file rác.
- [ ] Bat/sh deploy chứa đúng `--conn` args hoặc empty string nếu offline.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `P.5.Package.md`.
