# Source Audit Improvement Plan

Date: 2026-04-24

Scope: toàn bộ repo `DynamicsCrm.DevKit` gồm VSIX, CLI, MCP server, analyzers, shared project, tests, templates và scripts.

Mục tiêu của tài liệu này là chia việc thành các step nhỏ, có thể làm tuần tự và verify sau mỗi lần thay đổi. Không chạy `dotnet build` hoặc `dotnet test` trực tiếp; chỉ dùng workflow của repo như `/build-cli`, `/build-vsix`, `/build-analyzer`, `/build-tool`, `/unit-test`.

## Nguyên Tắc Làm Việc

- Làm từng step nhỏ, verify xong mới qua step tiếp theo.
- Không commit bằng terminal. Không dùng `git add`, `git commit`, `git push`.
- Không đưa secret thật vào docs, tests, launch profile hoặc template.
- Khi sửa shared project, chọn workflow verify theo consumer bị ảnh hưởng: CLI, VSIX, Tool hoặc Analyzers.
- Mỗi step nên có một thay đổi chính, một nhóm test/verify chính, và một ghi chú kết quả.

## Priority Map

| Priority | Area | Lý do |
|---|---|---|
| P0 | Secret hygiene | Có credential/cert/test fixture nhạy cảm dạng tracked hoặc thật-giống |
| P0 | CLI option drift | Help, launch profile, template và actual args đang lệch nhau |
| P1 | Broken solution reference | Analyzer solution trỏ tới project không tồn tại |
| P1 | FromPac generated args | Batch generated có khả năng thiếu `--auth FromPac` |
| P1 | MCP/docs count drift | Tool counts và command docs dễ gây sai hướng dẫn |
| P2 | Dependency pinning | Wildcard package version làm build khó tái lập |
| P2 | Silent catches | Lỗi runtime có thể bị nuốt |
| P3 | Large-file refactor | Giảm chi phí bảo trì dài hạn |

## Step 0 - Baseline Và Inventory

Mục tiêu: chốt trạng thái trước khi sửa để dễ so sánh.

Thay đổi đề xuất: không sửa code.

Verify:

```powershell
git status --short
rg -n --glob '!bin/**' --glob '!obj/**' --glob '!Coverage/**' --glob '!Published/**' "webresources-t|--sdk-login|--secret|--user|--pass|Version=\"\*\"|catch\s*\{\s*\}" .
```

Done khi:

- Worktree sạch hoặc đã biết rõ file nào đang thay đổi.
- Có danh sách issue ban đầu để đối chiếu sau từng step.

## Step 1 - Secret Và Credential Hygiene

Mục tiêu: loại bỏ secret thật hoặc thật-giống khỏi repo, đồng thời làm rõ cơ chế lưu secret.

File/area cần xem:

- `DynamicsCrm.DevKit.Cli/Properties/launchSettings.json`
- `DynamicsCrm.DevKit.Tests/**/*.json`
- `DynamicsCrm.DevKit.Tests/**/*.config`
- `DynamicsCrm.DevKit.Tests/**/*.bat`
- `DynamicsCrm.DevKit.Shared/Helper.cs`
- Các file `.pfx`, `.snk`, `.cer` tracked trong template/test fixture

Thay đổi đề xuất:

- Thay URL/client id/client secret/password trong fixture bằng placeholder như `https://contoso.crm.dynamics.com`, `00000000-0000-0000-0000-000000000000`, `__DEVKIT_CLIENT_SECRET__`.
- Đưa hướng dẫn dùng env var vào docs hoặc comments test setup, không hardcode secret.
- Rotate bất kỳ app secret/cert nào có khả năng từng dùng thật.
- Với `Helper.EncryptString`/`DecryptString`, đổi wording/docs thành "obfuscation" nếu chưa thể thay ngay bằng DPAPI/Windows Credential Manager.
- Audit `.pfx`/`.snk`/`.cer`: giữ lại chỉ khi là fixture disposable, không dùng production, và tên/comment thể hiện rõ điều đó.

Verify:

```powershell
rg -n --glob '!bin/**' --glob '!obj/**' --glob '!Coverage/**' --glob '!Published/**' "clientsecret|client secret|password|tenant|crm[0-9]?\.dynamics\.com|\.pfx|\.snk|\.cer" .
```

Workflow gợi ý:

- Nếu chỉ sửa docs/test fixture text: chưa cần build.
- Nếu sửa shared code: chạy `/build-cli`; nếu VSIX dùng phần đó thì chạy thêm `/build-vsix`.

Done khi:

- Không còn secret thật hoặc thật-giống trong tracked text files.
- Các binary key/cert còn lại đều được xác nhận là fixture disposable.
- Không còn tài liệu nào mô tả hardcoded encryption như bảo mật thật.

## Step 2 - Đồng Bộ CLI Args, Help Và Launch Profiles

Mục tiêu: option mà user nhìn thấy phải khớp option thật mà CLI nhận.

File/area cần xem:

- `DynamicsCrm.DevKit.Cli/Models/DevKitCommandArgs.cs`
- `DynamicsCrm.DevKit.Cli/Logging/SpectreLog.cs`
- `DynamicsCrm.DevKit.Cli/Commands/LegacyArgConverter.cs`
- `DynamicsCrm.DevKit.Cli/Properties/launchSettings.json`
- `ProjectTemplates/**/deploy*.bat`
- `ItemTemplates/**/deploy*.bat`

Thay đổi đề xuất:

- Quyết định compatibility policy:
  - hoặc thêm alias cho `--secret`, `--user`, `--pass` nếu muốn giữ scripts cũ;
  - hoặc sửa toàn bộ docs/profile/template sang `--clientsecret`, `--username`, `--password`.
- Xử lý `--sdk-login`: nếu chưa support thì remove khỏi help/converter/profile; nếu cần support thì thêm option thật và test.
- Loại bỏ hoặc đánh dấu future-only các profile auth chưa có builder thật.
- Đảm bảo `--plain` và env var fallback được document nhất quán.

Verify:

```powershell
rg -n "--secret|--sdk-login|--user|--pass|--clientsecret|--username|--password" DynamicsCrm.DevKit.Cli ProjectTemplates ItemTemplates
```

Workflow gợi ý:

- `/build-cli`
- `/unit-test` nếu có sửa parser/converter/tests

Done khi:

- Không còn option stale trong help/profile/template.
- Unit test có case cho aliases hoặc có test chứng minh stale option đã bị loại.

## Step 3 - Fix FromPac Generated Arguments

Mục tiêu: batch/script generated cho PAC profile chạy đúng command contract.

File/area cần xem:

- `DynamicsCrm.DevKit.Shared/CliArgsBuilder.cs`
- Unit tests liên quan trong `DynamicsCrm.DevKit.UnitTests`
- Template `.bat` dùng `$CliConnectionArgs$`

Thay đổi đề xuất:

- Sửa `BuildFromPacArgs()` để output gồm `--auth FromPac --pacprofile "profile-name"`.
- Thêm unit tests cho `CliArgsBuilder` với các auth chính: ClientSecret, FromPac, Interactive/DeviceCode, OAuth/AD nếu còn support.
- Test escaping quote/path cho profile name có space.

Verify:

```powershell
rg -n "CliArgsBuilder|BuildFromPacArgs|pacprofile|FromPac" DynamicsCrm.DevKit.Shared DynamicsCrm.DevKit.UnitTests
```

Workflow gợi ý:

- `/build-cli`
- `/build-vsix` nếu VSIX template replacement dùng cùng builder
- `/unit-test`

Done khi:

- FromPac generated command có đủ `--auth FromPac`.
- Có unit test fail trước, pass sau cho FromPac.

## Step 4 - Sửa Stale Commands, Template Drift Và MCP Tool Counts

Mục tiêu: command names và số lượng MCP tools nhất quán giữa code, help, docs và generated files.

File/area cần xem:

- `DynamicsCrm.DevKit.Cli/Program.cs`
- `DynamicsCrm.DevKit.Cli/Mcp/McpServerHost.cs`
- `DynamicsCrm.DevKit.Cli/Commands/McpCommand.cs`
- `DynamicsCrm.DevKit.Cli/Logging/SpectreLog.cs`
- `README.md` nếu có nhắc MCP count
- `DynamicsCrm.DevKit.Tests/**/deploy*.bat`

Thay đổi đề xuất:

- Thay `devkit webresources-t` thành command hợp lệ `devkit webresource`, hoặc thêm alias nếu thật sự cần backward compatibility.
- Tự động hóa MCP count trong help nếu hợp lý, tránh hardcode `32`, `34`, `35`, `36` ở nhiều nơi.
- Thêm test nhỏ đảm bảo mọi `[McpServerToolType]` có category mapping và docs count không stale nếu có helper chung.

Verify:

```powershell
rg -n "webresources-t|32 tools|34 tools|35 tools|36 tools|MCP tools|mcp tools" .
```

Workflow gợi ý:

- `/build-cli`
- `/unit-test`

Done khi:

- Không còn command stale trong generated/test files.
- Tool count xuất ra từ một source of truth hoặc đã được đồng bộ rõ ràng.

## Step 5 - Sửa Analyzer Solution Và Analyzer Config

Mục tiêu: analyzer solution build được và analyzer initialization không mâu thuẫn.

File/area cần xem:

- `DynamicsCrm.DevKit.Analyzers.slnx`
- `DynamicsCrm.DevKit.Analyzers/Core/BaseDiagnosticAnalyzer.cs`
- `DynamicsCrm.DevKit.Analyzers/CrmAnalyzers/*.cs`
- `DynamicsCrm.DevKit.UnitTests/Analyzers/**`

Thay đổi đề xuất:

- Xóa reference tới project test không tồn tại, hoặc trỏ đúng sang `DynamicsCrm.DevKit.UnitTests` nếu workflow analyzer cần chạy test.
- Chọn một policy duy nhất cho generated code analysis:
  - nếu không analyze generated code: để base class cấu hình `None`, analyzer con không gọi lại;
  - nếu cần analyze generated code: đổi base policy và test rõ ràng.
- Thêm/giữ test cho các analyzer quan trọng sau khi chỉnh initialization.

Verify:

```powershell
Test-Path .\DynamicsCrm.DevKit.Analyzers.Test\DynamicsCrm.DevKit.Analyzers.Test.csproj
rg -n "ConfigureGeneratedCodeAnalysis" DynamicsCrm.DevKit.Analyzers
```

Workflow gợi ý:

- `/build-analyzer`
- `/unit-test`

Done khi:

- `.slnx` không trỏ tới project mất tích.
- Analyzer generated-code policy chỉ có một nơi quyết định.

## Step 6 - Dependency Pinning Và Warning Suppression Audit

Mục tiêu: build tái lập tốt hơn, ít phụ thuộc floating package.

File/area cần xem:

- `DynamicsCrm.DevKit/DynamicsCrm.DevKit.csproj`
- `DynamicsCrm.DevKit.Tool/DynamicsCrm.DevKit.Tool.csproj`
- `DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj`
- `NuGet.config`
- Các `packages.config`

Thay đổi đề xuất:

- Thay `Version="*"` bằng version cụ thể đã được verify.
- Cân nhắc `Directory.Packages.props` sau khi pin xong, nhưng không làm chung nếu muốn giảm blast radius.
- Audit từng `NoWarn`: giữ cái có lý do, bỏ cái không còn cần.
- Kiểm tra local NuGet source `Published\...`: nếu chỉ dùng release local thì document rõ, tránh làm người mới restore nhầm.

Verify:

```powershell
rg -n "Version=\"\*\"|NoWarn|Published\\\\" *.csproj */*.csproj NuGet.config
```

Workflow gợi ý:

- `/build-cli`
- `/build-vsix`
- `/build-tool`
- `/build-analyzer` nếu analyzer/package refs thay đổi

Done khi:

- Không còn wildcard package version trong production projects.
- Mỗi warning suppression còn lại có lý do rõ hoặc issue theo dõi.

## Step 7 - Giảm Silent Catch Và Tăng Observability

Mục tiêu: lỗi thật không bị nuốt âm thầm, đặc biệt trong deploy/schema/MCP operations.

File/area cần xem:

- `DynamicsCrm.DevKit.Cli/**`
- `DynamicsCrm.DevKit.Shared/**`
- `DynamicsCrm.DevKit.Tool/**`

Thay đổi đề xuất:

- Triage `catch { }` thành ba nhóm:
  - cleanup best-effort: giữ nhưng thêm comment rõ;
  - recoverable user-facing: log warning có context;
  - real failure: rethrow hoặc trả structured error.
- Ưu tiên các flow mutating: deploy server, manage command/ribbon/form/view, schema upsert.
- Không đổi behavior hàng loạt trong một PR; làm theo nhóm tool/task.

Verify:

```powershell
rg -n "catch\s*\{\s*\}|catch\s*\([^)]*\)\s*\{\s*//" DynamicsCrm.DevKit.Cli DynamicsCrm.DevKit.Shared DynamicsCrm.DevKit.Tool
```

Workflow gợi ý:

- `/build-cli` cho CLI/MCP changes
- `/build-tool` cho Tool changes
- `/build-vsix` nếu Shared ảnh hưởng VSIX
- `/unit-test` nếu có thêm tests

Done khi:

- Silent catch còn lại đều là best-effort có comment hợp lý.
- Các lỗi user-facing có log/message đủ actionable.

## Step 8 - Refactor MCP God Files Theo Lát Nhỏ

Mục tiêu: giảm độ phức tạp mà không đổi public MCP contract.

File/area ưu tiên:

- `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageCommandTool.cs`
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/BuildRibbonXmlTool.cs`
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/BuildFormXMLTool.cs`
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/UpsertColumnTool.cs`
- `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageViewTool.cs`

Thay đổi đề xuất:

- Không refactor tất cả một lần.
- Tách theo vai trò nội bộ:
  - request validation;
  - Dataverse metadata resolving;
  - XML build/merge;
  - execution/mutation;
  - structured result formatting.
- Giữ nguyên tool name, public method signature và JSON contract.
- Mỗi file tách ra cần có test hoặc golden output tương ứng.

Verify:

```powershell
Get-ChildItem .\DynamicsCrm.DevKit.Cli\Mcp\Tools -Filter *.cs | Sort-Object Length -Descending | Select-Object -First 10 Name,Length
```

Workflow gợi ý:

- `/build-cli`
- `/unit-test`

Done khi:

- File lớn nhất giảm dần, nhưng behavior/tool contract không đổi.
- Dry-run và mutating path đều có test tối thiểu.

## Step 9 - Fixture Hygiene Và Test Data Strategy

Mục tiêu: giữ test hữu ích nhưng giảm bloat, giảm dữ liệu live và giảm binary fixture không rõ nguồn.

File/area cần xem:

- `DynamicsCrm.DevKit.Tests/**`
- `DynamicsCrm.DevKit.UnitTests/**`
- `ProjectTemplates/**`
- `ItemTemplates/**`

Thay đổi đề xuất:

- Phân loại fixture:
  - golden source cần giữ;
  - generated output có thể tái tạo;
  - live org data cần sanitize;
  - binary fixture cần document hoặc thay bằng generator.
- Với fixture generated lớn, cân nhắc generator/test helper thay vì track toàn bộ nếu không cần diff review.
- Tách integration fixtures cần Dataverse thật khỏi unit fixtures.

Verify:

```powershell
Get-ChildItem .\DynamicsCrm.DevKit.Tests -Recurse -File | Group-Object Extension | Sort-Object Count -Descending | Select-Object -First 20 Count,Name
rg -n "crm[0-9]?\.dynamics\.com|clientsecret|password" DynamicsCrm.DevKit.Tests DynamicsCrm.DevKit.UnitTests
```

Workflow gợi ý:

- `/unit-test`
- Integration tests chỉ chạy khi có môi trường Dataverse phù hợp.

Done khi:

- Fixture live-looking đã sanitize.
- Binary fixture còn lại có lý do rõ.
- Unit tests không phụ thuộc secret/live org.

## Step 10 - Documentation Và Workflow Alignment

Mục tiêu: docs hướng dẫn đúng workflow repo và không tự mâu thuẫn.

File/area cần xem:

- `AGENTS.md`
- `.claude/**`
- `.github/**`
- `.agent/**`
- `DynamicsCrm.DevKit.Docs/**`
- `README.md`

Thay đổi đề xuất:

- Đồng bộ rule "không chạy dotnet build/test trực tiếp" trong docs/workflow prompt.
- Các IDE-specific prompt chỉ giữ phần thật sự IDE-specific.
- Command build/test trong docs nên dùng workflow `/build-cli`, `/build-vsix`, `/build-analyzer`, `/build-tool`, `/unit-test`.

Verify:

```powershell
rg -n "dotnet build|dotnet test|MSBuild|/build-cli|/unit-test" AGENTS.md .claude .github .agent DynamicsCrm.DevKit.Docs README.md
```

Workflow gợi ý:

- Không cần build nếu chỉ sửa docs.

Done khi:

- Không còn hướng dẫn trái rule chính.
- Docs mới nằm đúng `DynamicsCrm.DevKit.Docs/<component>/`.

## Step 11 - Final Verification Matrix

Mục tiêu: chạy lại verify tổng sau khi hoàn thành các nhóm chính.

Verify tổng:

```powershell
git status --short
rg -n "Version=\"\*\"|webresources-t|--sdk-login|--secret|--user|--pass|32 tools|34 tools|35 tools" .
rg -n "clientsecret|client secret|password|crm[0-9]?\.dynamics\.com" --glob '!bin/**' --glob '!obj/**' --glob '!Coverage/**' --glob '!Published/**' .
```

Workflow tổng gợi ý:

- `/build-cli`
- `/build-vsix`
- `/build-analyzer`
- `/build-tool`
- `/unit-test`

Done khi:

- Các workflow cần thiết pass.
- Không còn stale command/help/template đã biết.
- Không còn secret thật hoặc thật-giống trong tracked text files.
- Known residual risks được ghi lại trong docs hoặc issue tracker.

## Suggested Execution Order

1. Step 1 - Secret hygiene.
2. Step 2 - CLI args/help/profile alignment.
3. Step 3 - FromPac args.
4. Step 4 - Stale commands and MCP counts.
5. Step 5 - Analyzer solution/config.
6. Step 6 - Dependency pinning.
7. Step 7 - Silent catch triage.
8. Step 8 - MCP refactor, làm từng tool một.
9. Step 9 - Fixture hygiene.
10. Step 10 - Docs/workflow alignment.
11. Step 11 - Final verification matrix.

## Notes

- Step 1 nên làm trước vì nếu credential đã lộ trong history thì việc rotate cần ưu tiên hơn mọi refactor.
- Step 2-4 có thể làm trong các change nhỏ riêng biệt vì chúng đều là drift giữa command contract và docs/templates.
- Step 8 nên làm sau khi có test ổn hơn, vì refactor file lớn dễ gây regression nếu thiếu golden tests.

## Detailed Step Files

Các work order chi tiết đã được tách thành từng file trong `DynamicsCrm.DevKit.Docs/Others/Source-Audit-Steps/`:

- `00-Index.md`
- `00-Baseline-Inventory.md`
- `01-Secret-Credential-Hygiene.md`
- `02-CLI-Args-Help-Launch-Profiles.md`
- `03-FromPac-Generated-Arguments.md`
- `04-Stale-Commands-MCP-Tool-Counts.md`
- `05-Analyzer-Solution-Config.md`
- `06-Dependency-Pinning-Warning-Audit.md`
- `07-Silent-Catch-Observability.md`
- `08-MCP-God-File-Refactor.md`
- `09-Fixture-Hygiene-Test-Data-Strategy.md`
- `10-Documentation-Workflow-Alignment.md`
- `11-Final-Verification-Matrix.md`
