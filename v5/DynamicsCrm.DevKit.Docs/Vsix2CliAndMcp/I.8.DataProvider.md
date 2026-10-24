# I.8 — DataProvider Item Template (virtual entity data provider — 5 file)

> **Vị trí:** `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.8.DataProvider.md`
> **Điều kiện tiên quyết:** `0.md`, `I.4.Plugin.md` (pipeline T4).
> **Trạng thái:** ☐ Chưa làm
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

## 3. Logic wizard hiện tại

Đọc `DataProvider.cs` khi làm. Form chọn **DataSource** (khác các item khác — chọn entity thông thường); render 5 T4 với cùng context; token cho 5 target.

## 4. Thiết kế source of truth

- Handler `DataProviderItemTemplateHandler` — vòng lặp qua 5 template T4, context chung từ `T4ContextFactory.BuildDataProviderContext`.

## 5. Việc phải làm (CLI)

- [ ] Handler + manifest (id `DataProvider`, order I.8) + embed 5 payload.
- [ ] Prompt: chọn DataSource từ metadata → class name → namespace.

## 6. CLI surface

```
devkit new --kind item --type DataProvider --name MyProvider --datasource new_MyDataSource --out <dir> [--offline]
```

## 7. 🤖 MCP (Phase 2 — CHỈ ĐÁNH DẤU, CHƯA LÀM)

<!-- MCP-PHASE-2 -->
`scaffold_item` `itemType="DataProvider"`, `dataSource`.

## 8. Test & nghiệm thu

- [ ] Unit test: cả 5 `.tt` render compile được; đủ 5 file đích; tên đúng.
- [ ] Build CLI 0/0; test pass.

## 9. Bàn giao

- [ ] Báo cáo + user duyệt → qua `I.9.Test.md`.
