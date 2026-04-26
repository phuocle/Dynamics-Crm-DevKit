# Review: 3 PRE plan files for merging build tools into manage tools

Ngay xem: 2026-04-26

Scope:
- `PRE-plan_merge_build_form_xml_into_manage_form.md`
- `PRE-plan_merge_build_ribbon_into_manage_ribbon.md`
- `PRE-plan_merge_build_sitemap_xml_into_manage_sitemap.md`

Ket luan nhanh: **chua OK de giao agent chay truc tiep**. Huong tach helper la hop ly, nhung ba file chua dat muc consistency/convention can thiet. File Form gan OK nhat, Ribbon can bo sung acceptance/risk va chot thiet ke, SiteMap can chinh nhieu nhat vi dang lech style, folder casing, namespace convention, va lech voi merge plan chinh.

## P1 - PRE plans khong dong bo voi merge plans chinh

Ba PRE files deu noi "chay tiep `plan_merge_*`", nhung paired merge plans hien tai van mo ta cach lam cu. Neu agent lam dung PRE roi chay merge plan chinh, agent se nhan instruction mau thuan.

Evidence:
- Form PRE line 565-570 noi buoc merge se khoi tao cac helper trong `Form/`, hoac tao `Form/FormXmlOperationsRunner.cs`. Nhung `plan_merge_build_form_xml_into_manage_form.md` line 225-226 van yeu cau tao `FormXmlOperationsHelper.cs` trong `Mcp/Tools/Helper/`.
- Ribbon PRE line 235-238 va 284-288 noi `ManageRibbonTool.cs` se dung helper classes tu `Ribbon/`. Nhung `plan_merge_build_ribbon_into_manage_ribbon.md` line 49-55 van yeu cau chuyen private methods vao `ManageRibbonTool`.
- SiteMap PRE line 64-66 va 372-380 noi helper nam trong `Mcp/Tools/Sitemap/`. Nhung `plan_merge_build_sitemap_xml_into_manage_sitemap.md` line 230-231 van yeu cau tao `SiteMapXmlOperationsHelper.cs` trong `Mcp/Tools/Helper/`.

Recommendation:
- Update ca 3 `plan_merge_*` files de reflect PRE architecture moi; hoac
- Trong PRE files, them section ro rang: "Sau PRE, paired merge plan phai duoc update truoc khi chay".

## P1 - Hard-code `/claude-build-cli` trong shared docs

Theo `AGENTS.md`, shared workflow la `/build-cli`; IDE-specific prefix nam trong rules folder (`/claude-*`, `/copilot-*`, `/anti-*`). Ba docs nay nam trong `DynamicsCrm.DevKit.Docs`, khong nam trong `.claude/commands`, nen hard-code `/claude-build-cli` lam lech convention shared-doc.

Evidence:
- Form PRE line 525, 538, 578.
- Ribbon PRE line 262, 277.
- SiteMap PRE line 35, 387, 398.

Recommendation:
- Neu docs nay dung chung: ghi `/build-cli` hoac "current IDE build-cli workflow".
- Neu docs nay chi cho Claude: doi vi tri/ten document de the hien ro day la Claude-specific, hoac dung `/claude-build-cli` nhung ghi ro exception.

## P2 - SiteMap folder/namespace/casing khong consistent

SiteMap PRE de xuat folder `Mcp/Tools/Sitemap/`, nhung class/file hien tai la `BuildSiteMapXmlTool.cs`, `ManageSiteMapTool.cs`, `SiteMapXmlOperationsHelper.cs`. Existing code va C# identifier dung `SiteMap`, khong phai `Sitemap`.

Ngoai ra, SiteMap PRE line 55-56 giu namespace `DynamicsCrm.DevKit.Cli.Mcp.Tools` du file nam trong subfolder. Existing subfolder `Mcp/Tools/Helper` dung namespace `DynamicsCrm.DevKit.Cli.Mcp.Tools.Helper`; Form/Ribbon PRE cung dung subnamespace `Tools.Form` va `Tools.Ribbon`.

Recommendation:
- Chon mot convention va apply nhat quan:
  - Option A: folder `Mcp/Tools/SiteMap/`, namespace `DynamicsCrm.DevKit.Cli.Mcp.Tools.SiteMap`, va update `McpServerHost.cs` using/qualification neu can.
  - Option B: giu namespace `Tools` de tranh touch `McpServerHost.cs`, nhung ghi day la deliberate exception va doi folder casing thanh `SiteMap/`.

## P2 - Ribbon PRE de mo quyet dinh quan trong ve `UpsertLocLabel`

Ribbon PRE line 247-249 noi `UpsertLocLabel` co the nhan `ServiceClient` hoac nhan `languageCode` int. Day la core design decision, khong nen de agent tu chon trong plan refactor vi se anh huong dependency graph cua `RibbonXmlHelpers`, `RibbonButtonOperations`, va `RibbonFlyoutOperations`.

Recommendation:
- Chot mot huong cu the. Prefer: resolve LCID mot lan trong tool shell hoac validation/fetcher layer, pass `int languageCode` xuong operations/helper. Cach nay giu XML helper gan pure va de test hon.

## P2 - Ribbon PRE thieu Acceptance Criteria va Risks

Form PRE co `Risks` va `Acceptance Criteria`. SiteMap PRE co `Acceptance Criteria`, `Risks`, `Out of Scope`. Ribbon PRE khong co `Risks` va khong co `Acceptance Criteria` rieng, chi co "Kiem tra sau khi tach" va bang uoc tinh kich thuoc.

Recommendation:
- Them sections:
  - `## Risks`
  - `## Acceptance Criteria`
  - `## Files KHONG dung` hoac equivalent
  - Tool count van = 36
  - `git diff --stat` expected files only

## P2 - Form PRE reference type khong ton tai

Form PRE line 559 noi ve `FormXmlOperationsException`, nhung `BuildFormXMLTool.cs` hien tai khong co type nay. Neu day la type moi se tao trong PRE, plan can noi ro file nao tao type do. Neu khong, day la stale/invented reference.

Recommendation:
- Doi thanh exception type thuc te (`InvalidOperationException`) hoac them task tao `FormXmlOperationsException` ro rang.

## P3 - So LOC bi lech nhe

Khong phai blocker, nhung nen chinh de reviewer/agent tin line reference hon:
- `BuildRibbonXmlTool.cs`: doc ghi 2409 dong, thuc te 2408 dong.
- `BuildSiteMapXmlTool.cs`: doc ghi 818 dong, thuc te 817 dong.
- `BuildFormXMLTool.cs`: doc ghi 2093 dong, khop thuc te.

## P3 - Title/style cua SiteMap PRE lech voi Form/Ribbon

Form/Ribbon:
- `# PRE-TASK: Refactor ... trước khi merge vào ...`

SiteMap:
- `# PRE-Plan: Tổ chức lại SiteMap tools → ...`

Recommendation:
- Doi SiteMap title theo pattern chung, vi filename da theo `PRE-plan_merge_build_*_into_manage_*`.
- Vi du: `# PRE-TASK: Refactor BuildSiteMapXmlTool.cs trước khi merge vào manage_sitemap`.

## Per-file verdict

### `PRE-plan_merge_build_form_xml_into_manage_form.md`

Status: **Gan OK, can chinh truoc khi run**.

Tot:
- Scope PRE ro: khong dung `ManageFormTool.cs`, `McpServerHost.cs`, `StructuredResults.cs`.
- Helper split kha chi tiet, dependency graph du ro.
- Co smoke test, risks, acceptance criteria.

Can fix:
- Dong bo lai voi merge plan chinh.
- Thay `/claude-build-cli` neu document la shared.
- Xu ly `FormXmlOperationsException` reference.
- Sua typo nho line 11: "split tool to thanh" nen thanh "split tool lon thanh" hoac viet lai gon hon.

### `PRE-plan_merge_build_ribbon_into_manage_ribbon.md`

Status: **Chua OK, can bo sung**.

Tot:
- Huong tach `Ribbon/` helpers hop ly.
- Naming helper kha ro.
- Build tool sau PRE con nho, manage tool chua bi phinh.

Can fix:
- Dong bo voi merge plan chinh.
- Chot thiet ke `UpsertLocLabel`.
- Bo sung risks/acceptance criteria/files-not-touched/tool-count/git-diff expected.
- Thay `/claude-build-cli` neu document la shared.
- Chinh LOC 2409 -> 2408 neu muon exact.

### `PRE-plan_merge_build_sitemap_xml_into_manage_sitemap.md`

Status: **Can chinh nhieu nhat**.

Tot:
- Nhan dien dung van de LCID va pure XML helper.
- Acceptance criteria va risks co du cac diem can verify.
- Khong thay doi tool count trong PRE la dung muc tieu.

Can fix:
- Dong bo voi merge plan chinh.
- Chon casing `SiteMap` vs `Sitemap` va namespace convention.
- Lam ro viec "move file" vs "xoa file" de tranh merge plan sau do xoa nham.
- Title/style nen match Form/Ribbon.
- Thay `/claude-build-cli` neu document la shared.
- Bo dong "agent khac dang lam" khoi doc durable, vi day la context tam thoi.

## Recommended next action

Nen sua docs theo thu tu:
1. Chot convention chung: shared build workflow wording, folder casing `SiteMap`, namespace exception hay namespace theo folder.
2. Update 3 PRE files theo convention do.
3. Update 3 paired `plan_merge_*` files de khop voi PRE architecture moi.
4. Chi sau do moi giao agent implement.
