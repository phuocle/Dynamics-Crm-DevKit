# I.8 — DataProvider Item Template (virtual entity data provider — 5 file)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.8.DataProvider.md`
> **Điều kiện tiên quyết:** `0.md`, `I.4.Plugin.md` (pipeline T4).
> **Trạng thái:** ✅ ĐÓNG 2026-10-30 — aP duyệt sau COMPARE **5/5 BYTE-IDENTICAL** (sạch nhất track)
> **Khối lượng lớn nhất nhóm T4:** sinh **5 file** từ 5 template `.tt`.

## 1. Nguồn sự thật hiện tại (bắt buộc đọc trước khi làm)

| Vai trò | File |
|---|---|
| Wizard VSIX | `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/DataProvider.cs` |
| Payload | `ItemTemplates/CSharp/08.DataProviderItemTemplate/` — `Create.cs`, `Update.cs`, `Delete.cs`, `Retrieve.cs`, `RetrieveMultiple.cs` |
| T4 | `Shared/Resources/tt/DataProvider{Create,Update,Delete,Retrieve,RetrieveMultiple}.tt` |
| Context | `T4Helper.BuildDataProviderContextAsync` (DataSource, Class, PluginSharedNameSpace, PluginOrder=1) |

## 2. Template tạo ra gì

5 class CRUD cho **virtual entity data source** user chọn (từ metadata `DataSource` — entity `dataverse_datasource`/custom): `{Class}.Create.cs`, `.Update.cs`, `.Delete.cs`, `.Retrieve.cs`, `.RetrieveMultiple.cs`.

**Sửa khi làm:** tên file/class là **CỨNG theo operation** — `Retrieve.cs`, `RetrieveMultiple.cs`, `Create.cs`, `Update.cs`, `Delete.cs` (vstemplate TargetFileName không tham số; 5 class hard-code trong `.tt`, `Context.Class` không bao giờ được đọc). `{Class}` ở trên là sai bản chất — đã phê theo wizard thật.

## 3. Logic wizard hiện tại (đã verify khi làm)

1 vstemplate duy nhất (`CSharpDataProviderItemTemplate.vstemplate`), 5 `ProjectItem` `ReplaceParameters` với TargetFileName cứng; wizard render cả 5 T4 **trước khi** VS ghi file nào (token `$DataProvider{SubType}$` chèn vào payload stub chỉ chứa token đó, BOM). `FormPlugin.DataProviderItem` (FormPlugin.xaml.cs line 214): ẨN LabelExecution+ComboBoxExecution, LabelStage+ComboBoxStage, LabelMessage+ComboBoxMessage, **LabelClass+TextboxClass**; LabelEntity.Content = "Data Source"; **TemplatePanel ẨN**. Combo fill từ `Metadata.GetAllDataSourceAsync()` (entities có `DataProviderId` = `B2112A7E-B26C-42F7-9B63-9A809A9D716F` — DevKit data provider; `DisplayMemberPath = LogicalName`); `DataSource => PluginLogicalName` = logical name lựa chọn. `IsValid` chỉ bắt chọn Data Source (class ẩn → không validate). **Không có nhánh DataProvider trong `ComboBoxEntity_SelectionChanged`** → TextboxClass.Text null → `form.Class` rỗng (không sao — tt không dùng). Wizard render **luôn built-in**: `VsixHelper.GetDefaultCustomTemplateBodyAsync(ItemType.DataProvider, subType)` — không Cli.json, không form.PluginTemplate ⇒ **DataProvider KHÔNG hỗ trợ custom T4**.

## 4. Thiết kế source of truth

- Handler `DataProviderItemTemplateHandler` — render 5 T4 built-in qua subType loop (`T4TemplateResolver.GetDefaultTemplateBodyAsync(ItemType.DataProvider, subType)`), context chung `T4ContextFactory.BuildDataProviderContext`, **render hết 5 trước khi ghi file nào** (VSIX-faithful); idempotency **từng file**: thiếu → Created, có → Skipped, `--force` → Updated (rerun khôi phục file bị xoá).

## 5. Việc phải làm (CLI)

- [x] Handler + manifest (id `DataProvider`, 5 payload stub `Resources.templates.item.dataprovider.{SubType}.cs` — đã embed sẵn từ bước 0) + register sau Workflow + Compile entry projitems.
- [x] Prompt: data source duy nhất — connected chọn từ `GetAllDataSourceAsync` (org có 11 data source thật, demo dùng `all_serversql`); `--datasource` có sẵn được **validate qua cùng list** (lạ → lỗi "data source not found"); không prompt class/order/template.

## 6. CLI surface

```
devkit new-item --type DataProvider --datasource <data-source-logical-name> --project <project-name> [--out DIR]
```

Gate keeper: `--type, --project, --datasource`. KHÔNG `--offline` (ruling 2026-10-29 — luôn connect, `new-item list` ngoại lệ). KHÔNG `--template`/`--t4` (dialog ẩn TemplatePanel — truyền vào → lỗi `--template/--t4: not supported for template 'DataProvider'`). Catalog `SupportsCustomT4` sửa `true` → `false` cho đúng bản chất wizard (inert — không chỗ nào đọc).

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="DataProvider"`, `dataSource`.

## 8. Test & nghiệm thu

- [x] Unit test: **15 tests** `DynamicsCrm.DevKit.Cli.UnitTests/Templates/DataProviderItemTemplateHandlerTests.cs` (mirror Workflow 17 tests) — manifest 5 file, render 5 file + BOM + no-warning, DataSource vào cả 5 registration, name/order/entity/message/stage/execution bị bỏ qua, rerun Skipped/`--force` Updated/rerun hoàn thiện file thiếu, thiếu `--datasource` 2 tầng (engine gate + handler), custom T4 chặn, project gates, namespace suffix folder. Full 5 suites xanh: **Cli 5139 / Tool 253 / Vsix 571 / Analyzers 310 / Vsix.2019 48** (baseline mới sau I.8 = **5139**).
- [x] Build CLI 0/0.

## 9. Kết quả + bàn giao

- [x] Release (build-release-only 2026-10-30): 4 artifacts refresh `Published/4.44.44.44/` (05:40), `devkit --version` = `4.44.44.44 Build: 31.12.2026 23.59.59`, installed CLI dll SHA = Published nupkg dll SHA (`4732522f39bc088d`…), Const.cs placeholder restored, sweep sạch (21 file restore trong `finally`).
- [x] Demo live từ `TestAllInOne2` (`.env` còn hạn, org `dynamics-crm-devkit-v4`): gate keeper 1-lỗi-liệt-kê-đủ (`--datasource, --project`); thành công 5 **Created** vào `TestAllInOneCli/Dev.AllInOne.Server` (7 file demo cũ I.4–I.7 giữ nguyên); rerun 5 **Skipped**; `--datasource ghost_probe` → lỗi validate; folder không `.env` → lỗi `--conn or --auth: required (or a project .env) — adding an item always connects to Dataverse.`
- [x] `new.md`: bullet DataProvider + gate keeper + example + heading 2026-10-30.
- [x] **aP compare ĐÃ DUYỆT (2026-10-30)**: aP tạo DataProvider item bằng VSIX wizard vào `TestAllInOne2/Dev.AllInOne.Server` 05:57 (chọn cùng data source `all_serversql`) → `cmp` byte 5 cặp = **5/5 BYTE-IDENTICAL** — `Create.cs` `41acd2f9…` 2725B, `Update.cs` `c1f2312e…` 2653B, `Delete.cs` `3c858799…` 2375B, `Retrieve.cs` `279c30aa…` 2724B, `RetrieveMultiple.cs` `61aaa3e9…` 3054B; không cần fix, không lệch csproj (SDK-style — family I.4–I.8). Fixtures 10 file (5 × 2 bên) commit kèm work unit.
- [x] Đã commit theo `commit.md` (split feat/test/fixtures/docs/build, c1 worktree-verified, KHÔNG push). → `I.9.Test.md`.
