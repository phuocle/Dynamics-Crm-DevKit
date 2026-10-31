# I.18 — Report Item Template (file .rdl cho SSRS — item ĐẶC BIỆT)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.18.Report.md`
> **Điều kiện tiên quyết:** `0.md`; liên quan `P.12.Report` (project Report) và lệnh CLI `devkit downloadreport`/`uploadreport`.
> **Trạng thái:** ☑ ĐÓNG+COMMITTED 2026-10-31 — aP duyệt sau COMPARE CHỐT **BYTE-IDENTICAL NGAY lần đầu**
> (wizard aP `TestAllInOne2/Dev.AllInOne.Report/Report1.rdl` = CLI `TestAllInOneCli/Dev.AllInOne.Report/Report1.rdl`,
> 17.167 bytes cả 2, md5 khớp sau normalize `rd:DataSourceID` — GUID `Guid.NewGuid` mỗi lần chạy là
> non-deterministic DUY NHẤT; BOM `EF BB BF` cả 2). 5 commits feat/test/fixtures/docs/build
> (c1 worktree-verified), NOT pushed (chờ lệnh push aP).

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/ReportItemWizard.cs` (tự chứa, `IDTWizard`, KHÔNG kế thừa ItemTemplateBase) |
| Builder render | `DynamicsCrm.DevKit.Vsix/Lib/ReportTemplateBuilder.cs` (LINQ-to-XML, 11 bước mutation — đã port 1:1 vào handler) |
| "Payload" | `ItemTemplates/CSharp/18.ReportItemTemplate/` — chỉ `DevKitReport.ico`, `DevKitReport.vsz`, `DevKitReportItems.vsdir` (VSZ gọi GUID wizard, VSDIR default tên file `Report.rdl`) |
| Resource | `Shared/Resources/ReportTemplate.rdl` (khung .rdl 2016, BOM, đã embed sẵn trong CLI — `ReadSharedResourceAsync`) |

## 2. Template tạo ra gì (VERIFIED)

File **`{Name}.rdl`** (SSRS report definition) dựng từ `ReportTemplate.rdl` với dataset FetchXml
**prefiltered trên 1 entity do user chọn** (attributes: primary name aliased + primary id) — sau đó
report được upload bằng `devkit uploadreport`. KHÔNG có "dán FetchXml", KHÔNG chọn saved view,
KHÔNG map cột — toàn bộ phần đó của work file gốc là ĐOÁN SAI (xem §3).

## 3. Logic wizard hiện tại (VERIFIED — work file §3 SAI lần thứ 3 liên tiếp)

Luồng thật (`ReportItemWizard.GenerateAsync`): `FormItem(ItemType.Report)` (dialog connect-first,
combo entities fill `ReadEntitiesMetadataAsync(EntityFilters.Entity)`) → resolve `EntityMetadata`
theo SchemaName → `ReportTemplateBuilder.BuildAsync(template, ServiceClient, entityMetadata)` →
`NormalizeFileName(itemName)` (Path.GetFileName, rỗng/./.. → `Report.rdl`, nối `.rdl`) → ghi
`ForceWriteAllTextAsync` (**UTF-8 BOM**) → `AddFromFile` + mở SSRS designer. File tồn tại → wizard FAIL.

**Org reads duy nhất**: entities metadata (FormItem) + `GetLanguageCodeAsync` (fallback 1033) +
`ServiceClient.ConnectedUrl()`/`ConnectedOrgUniqueName`. **Hai form `FormReportDatasets`/
`FormReportMapping` KHÔNG thuộc wizard item** — chúng thuộc manage-datasets/new-upload report
(đúng như tên work file §1 gợi ý nhưng sai về vai trò — gotcha recon lần 3: "RECON = DỰ ĐOÁN").

## 4. Thiết kế source of truth (đã hiện thực)

- Handler `ReportItemTemplateHandler` trong `DynamicsCrm.DevKit.Shared/Templates/Handlers/`
  (đăng ký sau JsDialog trong `TemplateHandlers.cs` + 1 dòng `<Compile>` trong `.projitems`).
  Port 1:1 `ReportTemplateBuilder` — cùng 11 mutation cùng thứ tự: ConnectString/DataSourceID →
  Language → CRM_UILanguageId → CRM_URL → DataSet Name (`SanitizeIdentifier(SchemaName)`) →
  QueryParameters rebuild → CommandText FetchXml (entity + prefilter + attributes name→id) →
  Fields rebuild → CRM_Filtered* parameter (rename + Prompt = DisplayCollectionName + default
  filter fetch) → ParameterName layout cells → CustomProperty MSCRM ReportFilter
  (paramname/displayname/entity/condition). ValidateResult re-parse cuối cùng như VSIX.
- Serialize `SaveOptions.DisableFormatting` trên cây `Parse(PreserveWhitespace)` → **layout của
  template GIỮ NGUYÊN, element thêm vào serialize compact kề nhau** (KHÔNG phải single-line —
  suy luận recon ban đầu sai; byte-compare với wizard xác nhận). Ghi `ForceWriteAllTextAsync` (BOM).
- 2 seam test được (ServiceClient là concrete class): `ResolveEntityAsync` (cache XrmHelper
  trước — schema/l_logical case-insensitive — fill 1 lần `ReadEntitiesMetadataAsync(EntityFilters.Entity)`
  khi có service) + `ResolveOrgInfoAsync` (language + ConnectedUrl/UniqueName; không service → lỗi
  connection rõ).

## 5. Việc phải làm (CLI) — ĐÃ LÀM

- [x] Handler + manifest (1 file `$ReportName$.rdl`, `ReplaceParameters=false`, `IsGenerated=true`,
  resource `ReportTemplate.rdl`); id `Report` Kind=Item order 18 (row ĐÃ CÓ SẴN trong catalog từ trước,
  RequiresConnection=true) — trùng id với project P.12 không vấn đề: registry kind-scoped `"Item:Report"`.
- [x] Gate `--entity` (input duy nhất của dialog); `--name` TÙY CHỌN — default `Report.rdl` của
  .vsdir, normalize như wizard (strip directory, nối `.rdl`); interactive prompt tên file default `Report.rdl`.
- [x] Hint `devkit uploadreport` sau khi sinh (Warning trong result).
- [x] **Engine + TaskNewItem resolve thêm `.rptproj`** (named/solution-scan/walk-up + prompt default) —
  phát hiện demo: đích tự nhiên của item là Reporting Services project P.12, trước đây chỉ resolve
  csproj/shproj → `--project Dev.AllInOne.Report` fail "project not found".

## 6. CLI surface

```
devkit new-item --type Report --entity Account --name Report1 --project Dev.AllInOne.Report
```
`--name` bỏ trống → `Report.rdl` (interactive prompt default; non-interactive cũng vậy). `--offline`
KHÔNG TỒN TẠI (ruling 2026-10-29 — always-connect; mục `[--offline]` của work file gốc stale).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="Report"` (`entity` required, `name` optional). Tool schema cần phân biệt
`scaffold_project projectType="Report"` (P.12) — kind-scoped từ phía engine sẵn.

## 8. Test & nghiệm thu

- [x] 13 unit tests `ReportItemTemplateHandlerTests` (Cli.UnitTests, mirror pattern I.17): manifest,
  list-ready + kind-scoped id (Item order 18 vs Project order 12), BOM + declaration + layout-giữ-nguyên,
  shape 11 bước (DataSet/CommandText/attributes/Fields/ConnectString/Language/CRM_UILanguageId/CRM_URL/
  CRM_Filtered* + Prompt/ParameterName cells/CustomProperty double-encoded parse 2 lần), default
  `Report.rdl`, normalize tên, rerun-Unchanged (normalize DataSourceID), edit→Updated, force→Updated,
  2 đường lỗi connection (không cache / cache-mà-không-service), entity lạ, case-insensitive.
- [x] Build CLI 0/0 sau mỗi lần sửa.
- [x] Full 5 suites (sau thay đổi engine cuối): **Cli 5269 / Tool 253 / Vsix 571 / Analyzers 310 /
  Vsix.2019 48** — 2019 qua `dotnet-coverage collect` + vstest TestPlatform (48/48).
- [x] build-release-only ×2 (vòng 2 sau fix `.rptproj`): 4 artifacts `Published/4.44.44.44/` (17:01),
  `devkit --version` = 4.44.44.44 Build: 31.12.2026 23.59.59, Const.cs placeholder restored,
  21 replacement files restored. Sweep `31.12.2026 23.59.59` 5 source trees = **1 hit duy nhất**
  `Vsix.2019/source.extension.cs` — content COMMITTED (description 2019 VSIX, `git diff HEAD` = 0),
  pre-existing, không phải leftover.
- [x] Demo live từ `TestAllInOneCli` (gitignored sandbox): `new-project --type Report` (4 created +
  slnx updated) → `new-item --type Report --entity Account --name Report1 --project Dev.AllInOne.Report`
  connected `https://dynamics-crm-devkit-v4.crm.dynamics.com` → Created + warning uploadreport.

## 9. Bàn giao — KẾT THÚC TOÀN DANH MỤC

- [x] Compare chốt wizard vs CLI: **BYTE-IDENTICAL lần đầu** (chỉ khác `rd:DataSourceID` —
  wizard `64208862-…`, CLI `d90f4aba-…`; normalize regex `<rd:DataSourceID>[^<]*</rd:DataSourceID>`)
  → aP duyệt 2026-10-31; commit theo `commit.md` (split feat/test/fixtures/docs/build; fixture wizard
  `Report1.rdl` + rptproj housekeeping vào fixtures commit; CLI fixture ở sandbox gitignored giữ nguyên đĩa).
- [x] Khi I.18 đóng: **cả catalog trọn — 13 P + 17 item templates** (work units I.1–I.18, không có
  I.12 — giữ số gốc VSIX) chạy được qua `devkit new-project`/`new-item`.
- [ ] Phase kế: 🤖 MCP Phase 2 (mục 6 `0.md`: `get_templates` + `scaffold_project` + `scaffold_item`
  trong `Mcp/Tools/ManageTemplateTool.cs`, đăng ký `McpServerHost.cs`) — CHỈ LÀM KHI aP RA LỆNH.

## 10. Lệch/khác biết (deviations so với work file gốc)

1. §2/§3/§4 gốc đoán sai cơ chế: wizard KHÔNG dùng FormReportDatasets/FormReportMapping, KHÔNG
   "dán FetchXml/saved view/map fields" — chỉ chọn entity (FormItem) và render khung (gotcha recon
   lần 3 liên tiếp: I.16, I.17, I.18).
2. §5 gốc "`.sh`/hint cho uploadreport" → hiện thực là **Warning** trong ScaffoldResult (không sinh
   file .sh thêm — Report không có script).
3. §6 gốc `--offline` stale — đã bỏ theo ruling 2026-10-29; `--entity` bắt buộc, `--name` tùy chọn
   (work file không nói gì về default tên file — wizard NormalizeFileName + .vsdir `Report.rdl`).
4. Suy luận recon ban đầu "output single-line DisableFormatting" SAI — `Parse(PreserveWhitespace)`
   giữ nguyên whitespace template (byte-compare xác nhận cả 2 bên cùng dạng).
5. Mới so với mọi item trước: engine/TaskNewItem resolve thêm `.rptproj` (cần cho đích tự nhiên).
