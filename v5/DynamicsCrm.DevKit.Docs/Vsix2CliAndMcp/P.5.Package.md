# P.5 — Package Project Template (Dataverse Package Deployer)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.5.Package.md`
> **Điều kiện tiên quyết:** `0.md`; nên làm sau `P.4.Server.md` (pattern giống hệt).
> **Trạng thái:** ✅ Hoàn thành + user duyệt 2026-10-25 (aP OK cả code lẫn fixture)

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ProjectTemplates/Package.cs` |
| Payload | `ProjectTemplates/CSharp/05.PackageProjectTemplate/` — `ProjectTemplate.csproj.template`, `deploy.debug.bat`, `deploy.debug.only.bat`, `Properties/AssemblyInfo.cs`, `README.md` |
| Manifest VS | `CSharpPackageProjectTemplate.vstemplate` |

## 2. Template tạo ra gì

Project **Package Deployer** (net462): csproj dùng **`Microsoft.PowerApps.MSBuild.Plugin` 2.14.1** (build definitions, `PrivateAssets="All"` — **đính chính 2026-10-26 sau review: bản duyệt lúc đó còn 2.8.1, bump theo latest nuget.org trong commit `bb288b4f9` tối 25.10; payload/test/fixture nhất quán 2.14.1**) + `Microsoft.NETFramework.ReferenceAssemblies` 1.0.* (hardcode trong template, không phải token) + 2 token NuGet (`DynamicsCrm.DevKit.Analyzers`, `Microsoft.CrmSdk.CoreAssemblies`) + 2 import PowerApps props/targets `Condition Exists`. **Không có `Microsoft.CrmSdk.XrmTooling.PackageDeployment`** như ghi chú ban đầu — csproj.template là nguồn sự thật. Deploy bat deploy package qua `devkit server` (cùng bộ plugin). Cấu trúc đơn giản nhất trong nhóm có bat — **không có snk** (`Package.cs` không gọi `SigningHelper`, vstemplate không copy key.snk, csproj không có `SignAssembly`).

## 3. Logic wizard hiện tại

`Package.cs`: `FormProject(ProjectType.Package)` → chỉ check trùng tên project → `Replacement.SetAsync` → copy payload + token. **KHÔNG** `SigningHelper`, **KHÔNG** `GetSharedProjectAsync`. `FormProject` không lọc AuthType nào cho Package (khác Console/ConsoleCore/UiTest) → `SupportedConnectionTypes` = đủ 6 như Server. Label mặc định `{SolutionName}.Package` (`GetDefaultProjectName` generic đã cover).

## 4. Thiết kế source of truth

- Handler `PackageProjectTemplateHandler` — tái dùng 100% hạ tầng P.4 (token bat, NuGet, SolutionMutator), chỉ khác manifest payload. Hybird: thân `ScaffoldAsync` theo Server (derive connection `.env` marker → ClientSecret fallback, re-run token khi connection null, mint `$year$`, MarkExecutable .sh) nhưng **không block Shared, không sinh .snk** (như Console).
- Manifest: id `Package`, order 5, 4 file — csproj (`$SafeProjectName$.csproj`, RP=true), README.md (RP=false), 2 deploy scripts OS-conditional (Windows = 2 bats theo vstemplate, Mac/Linux = 2 .sh). Không yêu cầu Shared.

## 5. Việc phải làm (CLI)

- [x] Handler + manifest + embed payload. `PackageProjectTemplateHandler.cs` (Shared, có entry `<Compile>` trong projitems — bài học P.1) + register trong `TemplateHandlers.RegisterAll` + `TaskNew` (nhóm prompt connection, branch `PackageProjectTemplateHandler.SupportedConnectionTypes`).
- [x] Sinh `.sh` deploy tương đương bat (như P.4): 2 stub **mới** `deploy.debug(.only).sh` trong `05.PackageProjectTemplate/` (LF, nội dung `$deploy.debug.sh$` — byte-identical với stub Server), embed vào projitems với LogicalName `Resources.templates.project.package.deploy.debug(.only).sh`; TokenEngine đã có sẵn 2 token từ P.4 (resource `sh.plugin.deploy.debug(.only).sh`, set-only-when-exists).
- [x] `PkgFolder`: **không tồn tại** trong vstemplate lẫn csproj.template → không cần xử lý gì (verify, không bỏ sót).
- [x] Thêm embed `README.md` (`Resources.templates.project.package.README.md`, RP=false). Payload 3 file cũ (2 bats + csproj.template) đã embed sẵn từ bước 0.
- [x] Stub .sh KHÔNG được thêm vào `05.PackageProjectTemplate.csproj` (packaging) → không lọt zip template VSIX (verify: obj copy của VSIX không có .sh, khớp precedent Server 04).

## 6. CLI surface

```
devkit new --kind project --type Package --name Contoso.Package --out <dir> [--solution <file>] [--offline] [--force]
```
Hỏi–đáp: project name → connection (cho token bat; cho phép `--offline`). Non-interactive/.env marker → bat không có conn args (`CliArgsBuilder.Build` trả rỗng với `UseProjectEnvironment=true`).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_project` `projectType="Package"`.

## 8. Test & nghiệm thu

- [x] Unit test `PackageProjectTemplateHandlerTests` (24 test, pattern `ServerProjectTemplateHandlerTests`, mọi `ProjectTemplateInput` đều `Offline = true`): manifest 4 file theo vstemplate + flag RP; create-only không cần Shared lẫn solution (csproj import degrade `..\Shared\Shared.projitems` không leading-dot); `--solution` missing → lỗi trước khi tạo file; invalid name; unknown connection type → `NotSupportedException` từ engine token pass; unknown AuthType qua `.env` → lỗi kèm list 6 type; đủ 6 AuthType scaffolds; null connection → `.env` marker; **không sinh .snk** (file + result + csproj không SignAssembly); bat nhúng CLI args (secret encrypt, lean không block `where devkit`); marker → rỗng args không double-space; sh resources + stub package; `--solution` có Shared → entry + consumer line `= 5` + owner `= 13`; `--solution` không Shared → chỉ entry, không `SharedItemsImports`; slnx plain entry; BOM state; rerun skip giữ file user; `--force` ghi đè; **golden: dotnet build net462 PASS**.
- [x] Build CLI 0 error/0 warning; test pass.
- [x] Full suite Cli.UnitTests: **4824/4824 Pass** (baseline 4800 + 24 mới), 32s.
- [x] VSIX build (VS MSBuild 18 Enterprise, Debug) — sạch (projitems Compile + 3 EmbeddedResource mới compile vào cả net48).
- [x] **Kiểm chứng vàng ngoài test**: scaffold thủ công `--out` temp bằng DLL CLI Debug → `dotnet build` net462 **0 error/0 warning trong 1.39s** (cache nóng; `Microsoft.PowerApps.MSBuild.Plugin` — 2.8.1 lúc đó, hiện 2.14.1 — không có dependency trong nuspec, cache có sẵn; `Microsoft.NETFramework.ReferenceAssemblies` 1.0.* resolve 1.0.3 từ cache) → sinh `Contoso.Package.dll` **+ `Contoso.Package.4.44.44.44.nupkg`** (`GeneratePackageOnBuild` chạy thật qua PowerApps targets). Token thay hết, không `$token$` sót.
- [x] Release fast (build-release-only.md): script chạy xong, `devkit --version` = 4.44.44.44 Build: 31.12.2026 23.59.59 (build date annual từ ReleaseConfig — đúng design, không phải bug), `devkit-tool --help` OK, đủ 4 artifacts `Published/4.44.44.44/`, `Const.cs` còn `xxxx.yy.zz HH.mm.ss`, git status sạch replacement.
- [x] Demo scaffold THẬT bằng global tool vào `TestAllInOneCli`: `devkit new --kind project --type Package --name Dev.AllInOne.Package --solution Dev.AllInOne.slnx` → 4 Created + 1 Updated (slnx), `.env` md5 giữ nguyên `52cfb0b7e647ae37d65ef6a501fec358`, bat marker không conn args, NuGet live-first Analyzers **4.12.34.56** (đúng — bảng DefaultVersions chỉ là fallback `--offline`). KHÔNG build trong fixture.

## 9. Bàn giao

- [x] Báo cáo + user duyệt (aP OK 2026-10-25 — "mọi thứ đã ok"; install VSIX release test wizard Package trước khi duyệt) → qua `P.6.WebResource.md`.

## 10. Kết quả thực hiện (2026-10-25)

- **Files mới (4):** `DynamicsCrm.DevKit.Shared/Templates/Handlers/PackageProjectTemplateHandler.cs`, `DynamicsCrm.DevKit.Cli.UnitTests/Templates/PackageProjectTemplateHandlerTests.cs`, `ProjectTemplates/CSharp/05.PackageProjectTemplate/deploy.debug.sh`, `.../deploy.debug.only.sh`.
- **Files sửa (4):** `DynamicsCrm.DevKit.Shared.projitems` (1 Compile + 3 EmbeddedResource), `TemplateHandlers.cs` (register), `TaskNew.cs` (prompt connection), `Docs/Cli/new.md` (row Package + example + ghi chú connection). Published artifacts được release script refresh.
- **Lệch so với work file:** (1) work file ghi csproj tham chiếu `Microsoft.CrmSdk.XrmTooling.PackageDeployment` — thực tế csproj.template dùng `Microsoft.PowerApps.MSBuild.Plugin` (2.8.1 lúc đó — hiện 2.14.1 sau bump `bb288b4f9`), không sửa payload (source of truth = csproj.template); (2) KHÔNG có thay đổi nào vào file payload cũ (csproj.template/bats/README dùng nguyên xi với VSIX) — chỉ thêm 2 stub .sh mới.
- **Bài học:** golden build Package nhanh hơn dự kiến (1.4s warm — library rỗng + cache đủ, không cần warn aP); PowerApps.MSBuild.Plugin tự chứa build definitions (nuspec không dependencies) nên offline build từ cache được; stub .sh ngoài vstemplate + packaging csproj là đủ để không lọt VSIX (Server 04 đã chứng minh); entry `<Compile>` trong projitems vẫn là điểm dính đầu tiên khi thêm .cs mới vào Shared.

## 11. Bài test so sánh VSIX vs CLI (cho user duyệt)

Compare protocol: aP tạo prj Package bằng VSIX vào `TestAllInOne2` (source of truth) → CLI đã scaffold sẵn `Dev.AllInOne.Package` vào `TestAllInOneCli` → so trực diện. Diff expected classes: VS-reformat, DevKitVersion, NuGet online-vs-offline, GUID; Package không có .snk nên không có class snk-diff như Server.
