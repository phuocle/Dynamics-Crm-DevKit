# P.9 — Test Project Template (unit test cho Server)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.9.Test.md`
> **Điều kiện tiên quyết:** `0.md`; liên quan chặt `P.4.Server` + `P.7.SharedTest` (references).
> **Trạng thái:** ✅ HOÀN THÀNH 2026-10-25 — aP duyệt (compare 2/2 file, csproj khác 1 dòng Analyzers live-vs-local class đã biết) + commit toàn bộ; các rounds: ROUND 1 golden-fail finding → ROUND 2 fix payload Import Shared (bug aP thật trên VSIX) → ROUND 3 fix warning `--force` 9 handlers. Next theo thứ tự aP chọn: **P.13.WebResourceTs TRƯỚC**, rồi P.10/P.11/P.12.

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/Test.cs` |
| Payload | `ProjectTemplates/CSharp/09.TestProjectTemplate/` — `ProjectTemplate.csproj.template`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpTestProjectTemplate.vstemplate` |

## 2. Template tạo ra gì

Project **Test** (net462, MSTest + FakeXrmEasy + NSubstitute + Bogus): csproj template references `Microsoft.CrmSdk.CoreAssemblies`, MSTest, project references tới Shared/SharedTest/Server theo token (`$SharedProject$`, `$SharedTestProject$`…), assembly info. Payload tối giản — phần lớn nội dung nằm trong `ProjectTemplate.csproj.template` (thay token nhiều).

## 3. Logic wizard hiện tại

Đọc `Test.cs` khi làm. Pattern chuẩn + có thể validate Shared/SharedTest tồn tại + snk (kiểm tra).

**Kết quả đọc:** wizard Test.cs có **3 validate blocking theo đúng thứ tự** — thiếu `{sol}.Shared` → "Please add DynamicsCrm.DevKit Shared project."; thiếu `{sol}.ProxyTypes` → "…ProxyTypes project."; thiếu `{sol}.Shared.Test` → "…Shared Test project." (mỗi cái abort trước khi mở form). **KHÔNG** SigningHelper (payload không key.snk), **KHÔNG** AddDynamicsCrmDevKitCliJsonAsync, **KHÔNG** validate connection (FormProject Test không filter AuthType, payload không tiêu thụ connection). FormProject case Test: default name `{solutionName}.Test`, textbox **editable** (không khóa như ProxyTypes).

## 4. Thiết kế source of truth

- Handler `TestProjectTemplateHandler`; manifest id `Test`, order 9.
- Token liên project lấy từ `WorkspaceContext` (SharedProjectName, SharedTestProjectName) — không được hardcode.

## 5. Việc phải làm (CLI)

- [x] Handler + manifest + embed payload.
- [x] Kiểm tra project references trong csproj template trỏ đúng các project có thật trong solution (nếu thiếu → warning trong `ScaffoldResult`, vẫn tạo file).
  - **Lệch thiết kế (theo briefing P.9):** không dùng warning-vẫn-tạo-file — implement **3 validate blocking kiểu Server** (error + hint scaffold command, abort trước khi tạo file nào) đúng wizard parity. Line cũ của work file (warning + vẫn tạo) bị briefing ghi đè.

## 5.1 Đã làm (2026-10-25)

- `DynamicsCrm.DevKit.Shared/Templates/Handlers/TestProjectTemplateHandler.cs` — mới: `ITemplateHandler`, `TemplateId=Test`, manifest 2 file (`$SafeProjectName$.csproj` RP=true + `README.md` RP=false) mirror `CSharpTestProjectTemplate.vstemplate`; mint `$year$`; không snk / Cli.json / DevKit.json / script / connection / warning sau scaffold (wizard gốc không có step sau).
- 3 validate blocking mirror wizard theo thứ tự Shared → ProxyTypes → SharedTest, error text kiểu Server kèm hint `devkit new --kind project --type {X} --name {Sol}.{X}` (no-solution: hint tên không prefix `Shared` / `ProxyTypes` / `Shared.Test`).
- `WorkspaceContext` +2 property: `SharedTestProjectFile`, `ProxyTypesProjectFile`; `WorkspaceScanner` +`FindNamedProjectFile` (exact-name `{Sol}.Shared.Test` .shproj / `{Sol}.ProxyTypes` .csproj dưới solution dir, lọc bin/obj, **không fallback** — khác FindSharedProjectFile, vì wizard check exact name). Tên `SharedTestProjectName`/`ProxyTypesProjectName` giữ nguyên semantics convention (consumer duy nhất là tests — đã verify).
- `DynamicsCrm.DevKit.Shared.projitems`: +`<Compile>` TestProjectTemplateHandler.cs (bẫy P.1/P.5/P.6) + **embed `Resources.templates.project.test.README.md`** (bẫy thiếu embed lần 4 — payload 09 trước đó chỉ embed csproj.template).
- `TemplateHandlers.RegisterAll`: +Test (sau ProxyTypes) → `devkit new list` Test order 9 chuyển Ready=yes (descriptor đã có sẵn, RequiresConnection=false).
- TaskNew: **KHÔNG đổi** — Test không vào nhóm prompt connection (payload không tiêu thụ, pattern SharedTest); **KHÔNG offer scaffold chain** (quyết: Server precedent chỉ-offer-1-prerequisite; 3 prerequisite chain quá mạnh cho một Confirm — error text của handler đã mang sẵn lệnh scaffold từng cái; aP muốn offer chain thì làm follow-up).
- `--solution`: `AddProjectToSolutionAsync(sln, csproj, workspace.SharedTestProjectFile)` → .sln nhận csproj entry + config entries + consumer line `Contoso.Shared.Test\Contoso.Shared.Test.projitems*{guid-Test-lowercase}*SharedItemsImports = 5` (GUID của entry Test — cùng cơ chế v4 evidence P.4; owner line `= 13` do SharedTest scaffold viết từ P.7). .slnx: chỉ `<Project Path="…" />` (format .slnx không có section SharedMSBuildProjectFiles — đúng như P.4/P.8).

## 5.2 Hai câu hỏi thiết kế trong briefing — kết quả

1. **Consumer line SharedTest (`= 5`):** đã implement theo evidence v4 (cơ chế `EnsureSharedMsBuildConsumerLine` dùng chung, GUID = GUID entry project consume). **Chờ verify ở compare:** aP tạo prj Test bằng VSIX vào TestAllInOne2 — lưu ý TestAllInOne2 dùng **.slnx** (không có section này) nên consumer line chỉ verify được trên solution .sln; nếu aP muốn verify .sln thật thì cần 1 solution .sln bên VSIX.
2. **Golden `dotnet build`: ROUND 1 KHÔNG đạt → ROUND 2 (bug aP) ĐÃ FIX — golden PASS.**
   - **ROUND 1 evidence (giữ để tham chiếu):** fresh chain build FAILED với `CS0246 StageEnum/ExecutionModeEnum` + `CS0246 CrmPluginRegistrationAttribute` + `CS0122 DevKitJson is inaccessible`. Thêm tay Server ProjectReference (như csproj Test thật v4) chỉ hết 2 lỗi đầu; `DevKitJson` (internal, namespace `Microsoft.Xrm.Sdk`, payload 01) chỉ thấy được khi Shared .projitems compile cùng assembly với Test.
   - **ROUND 2 — aP report bug thật 2026-10-25: "cài VSIX mới, tạo Test proj nhưng thiếu `<Import Project="..\Dev.AllInOne.Shared\...projitems" />` phải add tay"** — chính là option (a) của finding. Fix (đều dùng chung VSIX+CLI):
     - Payload `09.TestProjectTemplate/ProjectTemplate.csproj.template`: thêm `<Import Project="..\$SharedProject$\$SharedProject$.projitems" Label="Shared" Condition="Exists(...)" />` **trước** import SharedTest (token `$SharedProject$` có sẵn, prefer scanned name). Import Shared đưa `DevKitJson`/`PluginCore` (chứa `CrmPluginRegistrationAttribute` + `StageEnum`/`ExecutionModeEnum` — chúng nằm ở Shared payload, KHÔNG phải Server, KHÔNG cần modelbuilder như suy đoán ROUND 1) vào cùng compilation với Test → mọi lỗi compile biến mất.
     - `SolutionMutator.AddProjectToSolutionAsync`: `string sharedProjectFile = null` → `params string[] sharedProjectFiles` — csproj import nhiều shared project thì .sln nhận **1 consumer line `= 5` cho mỗi import** (cùng GUID entry Test), đúng hành vi VS. Call sites cũ (Console/ConsoleCore/Server/Package) không đổi (backward compatible).
     - Handler: truyền cả `workspace.SharedProjectFile` + `workspace.SharedTestProjectFile`; error text validate Shared đổi lý do thành "(the generated .csproj imports its .projitems)" — giờ đúng sự thật.
   - **Verify ROUND 2:** 15/15 test class (golden `ScaffoldAsync_GeneratedProject_BuildsNet462` quay lại, PASS); full suite **4901/4901**; CLI 0/0; VSIX pass; release lại 23:37 (annual date, checklist đạt); VSIX zip mới grep **2 Import** trong `ProjectTemplates/CSharp/DynamicsCrm.DevKit/1033/CSharpTestProjectTemplate/ProjectTemplate.csproj.template`; demo global tool: chain scaffold → csproj có cả 2 import → `dotnet build Contoso.Test.csproj` **0 Error** (17 warning DEVKIT1005 trên Shared sources — expected như P.3) → `Contoso.Test.dll`; .sln có đúng 2 consumer line `= 5` cùng GUID `{ab03fd2a-…}`.

## 5.3 ROUND 3 — fix warning `--force` in vô điều kiện (aP duyệt 2026-10-25 đêm)

- 9 handler project đều có block `if (File.Exists(csprojPath)) result.AddWarning("…existing files are skipped (use --force to overwrite).")` **không kiểm tra `input.Force`** — copy từ P.4 Server. Với `--force`, engine ghi lại file (Action `Updated`/`Unchanged`) nhưng warning vẫn bảo "files are skipped" → gây hiểu nhầm.
- Fix: guard `&& !input.Force` — rerun không force vẫn cảnh báo (báo files user được bảo vệ); có force thì thôi (cột Action + summary đã đủ thông tin).
- Phạm vi: Shared/Console/ConsoleCore/Server/Package/WebResource/SharedTest/ProxyTypes/Test × 1 dòng (perl byte-safe — git diff đúng 1 dòng/file, EOL không đổi).
- Verify: full suite **4901/4901** (8 test assert warning đều ở nhánh không-force — không đổi test); CLI 0/0; VSIX pass; re-release **23:51** (checklist đạt); demo global tool: `--force` → 0 lần "already exists", không force → 1 lần; fixture TestAllInOneCli Test `--force` rerun → 0 warning, slnx Unchanged, `.env` md5 `52cfb0b7…` nguyên.

## 6. CLI surface

```
devkit new --kind project --type Test --name Contoso.Plugin.Test --out <dir>
```
Hỏi–đáp: project name (gợi ý `{SolutionName}.Test` — default form editable; work file cũ ghi `{ServerName}.Test` là sai — wizard Test.cs không đụng Server project) → không có câu hỏi nào khác (không connection, không filter).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` `projectType="Test"`.

## 8. Test & nghiệm thu

- [x] Unit test: đủ file; csproj sinh ra chứa references với tên project thật; token thay hết. — `TestProjectTemplateHandlerTests.cs` **15 tests** (manifest 2 file; 3 prerequisite test riêng từng cái + error text + no-debris; --solution missing; invalid name; happy path content asserts gồm CẢ 2 import; connection bị payload bỏ qua; create-only; .sln entry + **2 consumer line `= 5`** + 2 owner `= 13`; .slnx; BOM-less cả 2 file; idempotency rerun/`--force`; **golden `dotnet build` PASS**; token quét sạch).
- [x] Build CLI 0/0; test pass. — CLI build 0 Warning 0 Error; **full suite 4901/4901** (baseline 4886 + 15); VSIX MSBuild 18 Enterprise build OK (Shared + payload đổi).
- Golden `dotnet build`: **PASS (sau bug fix ROUND 2 — xem 5.2.2)**.

## 9. Bài học P.9

- `--filter FullyQualifiedName~TestProjectTemplateHandlerTests` khớp cả `SharedTestProjectTemplateHandlerTests` (substring) — focused run "22" = 14 (Test) + 8 (SharedTest); số ĐÚNG phải đối chiếu full-suite math: 4886 + 14 = 4900 ✓ (filter chuẩn: FQN class ĐẦY ĐỦ + `~`).
- TestHelper/TestDataLoader của SharedTest payload dùng `DevKitJson` (internal, namespace `Microsoft.Xrm.Sdk`, payload 01) → project consume SharedTest .projitems mà không compile Shared .projitems vào cùng assembly sẽ CS0122 — đây chính là bug aP gặp ở VSIX thật (ROUND 2).
- `CrmPluginRegistrationAttribute`/`StageEnum`/`ExecutionModeEnum` nằm ở **Shared payload** (PluginCore.cs), KHÔNG phải Server hay modelbuilder output — suy đoán ROUND 1 về "cần modelbuilder" cho 2 enum là SAI; import Shared .projitems giải quyết tất cả.
- VS ghi **1 consumer line cho mỗi projitems được import** (cùng GUID project consume) — SolutionMutator giờ nhận `params string[]`.
- sed/PowerShell inline qua Git Bash dễ hỏng backtick/backslash khi sửa file — dùng Edit tool.

## 10. Bàn giao

- [x] Báo cáo + **user duyệt (aP 2026-10-25 — "run commit.md hết tất cả các files")** → P.13.WebResourceTs TRƯỚC (aP chọn), rồi P.10/P.11/P.12.
- **ROUND 2 (bug aP) đã re-release 23:37** — anh cần **cài lại VSIX** `Published/4.44.44.44/DynamicsCrm.DevKit.Vsix.4.44.44.44.vsix` rồi **tạo LẠI prj Test** bằng VSIX vào TestAllInOne2 (Test cũ có dòng import anh add tay — không trùng payload mới) → CLI scaffold `devkit new --kind project --type Test --name Dev.AllInOne.Test --solution Dev.AllInOne.slnx` vào TestAllInOneCli → diff trực diện. Expected diff classes: VS-reformat, NuGet online-vs-local-feed (Analyzers live 4.12.34.56 là ĐÚNG), GUID, using-sort, slnx thứ tự VS-alphabetical vs CLI-append. DevKitVersion KHÔNG còn là diff (annual stamp 31.12.2026).
- **COMPARE P.9 CHỐT (2026-10-25 đêm): TestAllInOneCli `devkit new --type Test --name Dev.AllInOne.Test --solution Dev.AllInOne.slnx` (online — Analyzers live) vs TestAllInOne2 (aP tạo bằng VSIX + add tay import Shared): cấu trúc IDENTICAL, README byte-same, csproj khác ĐÚNG 1 DÒNG = Analyzers 4.12.34.56 (CLI live nuget.org — ĐÚNG theo protocol) vs 4.44.44.44 (bên aP — local feed, cùng class anh update tay Package/Server/WebResource ở P.6).** KHÔNG hit GUID (template không mint), using-sort (không .cs), DevKitVersion (annual cả 2), VS-reformat. `.env` md5 `52cfb0b7…` nguyên. Quirk nit (pre-existing mọi handler): warning "use --force to overwrite" in kể cả khi đã --force (files thật ra bị ghi lại, Action=Unchanged khi content identical).
