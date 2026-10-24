# P.3 — ConsoleCore Project Template (net10 — console đa nền tảng)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.3.ConsoleCore.md`
> **Điều kiện tiên quyết:** `0.md`, `P.2.Console.md` (cùng family, tái dùng token resource ConsoleCore).
> **Trạng thái:** ☐ Chưa làm

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/ConsoleCore.cs` |
| Payload | `ProjectTemplates/CSharp/03.ConsoleCoreProjectTemplate/` — `ProjectTemplate.csproj.template`, `App.cs`, `AppSettings.json`, `Helper.cs`, `Program.cs`, `TracingServiceFake.cs`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpConsoleCoreProjectTemplate.vstemplate` |
| Token | `Replacement.cs` — nhánh ConsoleCore của `SetEmbeddedResourceAsync` |

## 2. Template tạo ra gì

Project console **net10.0** — bản "hiện đại" của P.2, thay `App.config` bằng **`AppSettings.json`**:
- `$AppCore.cs$` ← resource `cs.consolecore.App.{connectionType}.cs`.
- `$AppSettings.json$` ← resource `cs.consolecore.AppSettings.{connectionType}.json`.
- Cùng bộ token connection/NuGet như P.2.

**Đặc quyền của template này trong bối cảnh đa nền tảng:** project sinh ra là net10 + SDK-style → là project **build được thật sự trên Linux/macOS** bằng `dotnet build`. Nó là nơi chứng minh end-to-end rõ nhất của toàn bộ nỗ lực CLI hoá (scaffold bằng `devkit` xong build bằng `dotnet` luôn trên máy không Windows).

## 3. Logic wizard hiện tại

Giống P.2 (`FormProject(ProjectType.ConsoleCore)`), chỉ khác nhánh resource. Đọc `ConsoleCore.cs` trước khi làm.

## 4. Thiết kế source of truth

- Handler `ConsoleCoreProjectTemplateHandler` trong Shared; tái dùng toàn bộ hạ tầng token của P.2 (chỉ khác prefix resource `cs.consolecore.*`).
- Manifest: id `ConsoleCore`, order 3.

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest + embed payload.
- [ ] `TokenEngine` nhánh ConsoleCore (`$AppCore.cs$`, `$AppSettings.json$`).
- [ ] Sinh `.snk` nếu wizard hiện tại có (đọc `ConsoleCore.cs` — nếu có `SigningHelper.GenerateKey` thì dùng `SigningService` của core).
- [ ] Smoke đa nền tảng: scaffold + `dotnet build` project sinh ra (bắt buộc pass trên Windows CI; nếu làm trên Linux/macOS càng tốt).

## 6. CLI surface

```
devkit new --kind project --type ConsoleCore --name Contoso.ConsoleCore --out <dir>
```
Hỏi–đáp: như P.2 (project name → AuthType → chi tiết kết nối).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` với `projectType="ConsoleCore"`. Như P.2.

## 8. Test & nghiệm thu

- [ ] Unit test từng AuthType (parameterized) như P.2.
- [ ] **Kiểm chứng vàng:** scaffold ConsoleCore vào temp → `dotnet build` project sinh ra → 0 error (trên máy dev Windows; net10 SDK có sẵn).
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `P.4.Server.md`.
