# Kế hoạch triển khai VSIX 2026: Manage Datasets cho RDL FetchXML

## 1. Mục tiêu và các quyết định đã khóa

Tài liệu này là đặc tả triển khai hoàn chỉnh cho một AI khác. AI thực thi phải làm theo thứ tự trong tài liệu, không tự quay lại thiết kế cũ của MCP và không tự thêm giới hạn FetchXML vì thấy implementation MCP hiện tại đơn giản hơn.

Mục tiêu là thêm lệnh context menu cho file `.rdl` trong project chính `DynamicsCrm.DevKit.Vsix` (Visual Studio 2026), mở WPF dialog để người dùng xem, thêm, sửa và xóa dataset FetchXML trong RDL local. Feature này thay thế phần **Add Dataset/Refresh Fields** mà Microsoft Dynamics 365 Report Authoring Extension hiện chỉ còn dùng được trong môi trường Visual Studio 2019 cũ.

Các quyết định đã chốt:

- Tên context menu: **`Manage Datasets...`**.
- Title dialog: **`Manage Report Datasets`**.
- **Chỉ hỗ trợ người dùng nhập/chỉnh FetchXML trực tiếp.** Bỏ hoàn toàn System View mode của kế hoạch cũ.
- Target là **FetchXML report**; không hỗ trợ SQL report hoặc RDL không có dataset FetchXML.
- Không cấm aggregate, group-by, `<all-attributes/>`, nhiều `link-entity`, nested link, các link type mới hoặc FetchXML nâng cao chỉ vì MCP hiện chưa xử lý được.
- Mọi `link-entity` phải có alias do user chỉ định; thiếu alias thì fail fast, không tự sinh alias ngẫu nhiên như Microsoft extension cũ.
- Fields phải được suy ra từ FetchXML projection và Dataverse metadata, **không suy ra từ record trả về**.
- Pre-filter là tùy chọn, mặc định tắt. User quyết định entity/link nào được pre-filter.
- Chỉ ghi RDL khi user bấm `Save`; trước đó mọi CRUD nằm trong working copy.

## 2. Phạm vi bắt buộc

### 2.1. Trong phạm vi

- Chỉ sửa code feature trong `DynamicsCrm.DevKit.Vsix/` (.NET Framework 4.8, VSIX chính cho VS 2026).
- Command chỉ visible/enabled khi selection hiện tại là đúng một file `.rdl`, không phân biệt hoa thường.
- Dialog kế thừa `BaseDialogWindow`, merge style chung và có wiki link thật.
- CRUD dataset local:
  - Create: thêm dataset mới từ FetchXML.
  - Read: liệt kê và xem toàn bộ dataset hiện có.
  - Update: chỉnh FetchXML, regenerate fields, query parameters và pre-filter artifacts.
  - Delete: xóa có dependency guard.
- Validate cấu trúc XML, entity/attribute/alias/output shape bằng metadata và kiểm tra query với organization hiện tại.
- Hỗ trợ đầy đủ projection ở root entity, mọi cấp nested `link-entity`, aggregate/group-by và `<all-attributes/>` trong giới hạn thực tế của Dataverse/MSCRMFETCH.
- Nhận diện report parameter trong FetchXML như `@para1` mà không cần giá trị thật để refresh fields.
- Tạo backup, kiểm tra concurrent modification và ghi file an toàn.

### 2.2. Ngoài phạm vi — không được làm

- Không sửa `DynamicsCrm.DevKit.Vsix.2019/` hoặc test project 2019.
- Không thêm command này vào VSIX 2019.
- Không sửa `DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageReportTool.cs`; chỉ dùng nó để đối chiếu phần RDL/prefilter hiện có.
- Không tham chiếu DLL CLI/MCP từ VSIX.
- Không refactor hoặc thêm code vào `DynamicsCrm.DevKit.Shared/` trong task này.
- Không upload report lên Dataverse. `Manage Datasets...` chỉ sửa `.rdl`; deploy tiếp tục dùng `Deploy Report`/`Deploy New Report`.
- Không hỗ trợ DataSource CRUD, report layout designer hoặc tự rewrite biểu thức report khi rename/delete.
- Không hỗ trợ rename dataset trong phiên bản đầu.
- Không thêm package dependency mới nếu .NET Framework/CRM SDK/WPF/System.Xml.Linq hiện có đã đủ.
- Không chạy hoặc thêm unit test. Unit test broken không phải blocker theo yêu cầu task.
- Không chạy full debug/release packaging.
- Không stage, commit hoặc push.
- Không đổi public command/tool/JSON key hiện có.
- Giữ source version `4.44.44.44`; nếu build script thay tạm `xxxx.yy.zz HH.mm.ss` thì phải phục hồi placeholder.

## 3. Kết luận nghiên cứu FetchXML và XSD

### 3.1. Có thể dùng XSD không?

**Có thể dùng về mặt kỹ thuật, nhưng không được dùng XSD hiện có làm hard gate cho “full support FetchXML”.**

Repo đã có `DynamicsCrm.DevKit.Shared/Resources/xsd/Fetch.xsd`, và file này đã được embed qua `DynamicsCrm.DevKit.Shared.projitems`. VSIX có thể đọc embedded resource mà không cần sửa Shared. Tuy nhiên kiểm tra thực tế cho thấy:

- file vật lý có timestamp năm 2017;
- thiếu nhiều cú pháp hiện đại như `latematerialize`, `datasource`, `options`, `valueof`, `useraworderby`, `filter hint`, các link type `exists`, `in`, `not any`, `matchfirstrowusingcrossapply`, v.v.;
- schema cũ tự giới hạn một số occurrence của nested link;
- tài liệu FetchXML hiện tại của Microsoft nói rõ reference chung không bao gồm toàn bộ element/attribute dành riêng cho view và report.

Microsoft xác nhận Report Authoring Extension có validate FetchXML nội bộ bằng FetchXML schema, nhưng đó là schema đi cùng extension, không chứng minh `Fetch.xsd` 2017 trong repo còn đầy đủ cho Dataverse hiện tại: [Create a new report using SQL Server Data Tools](https://learn.microsoft.com/en-us/dynamics365/customerengagement/on-premises/analytics/create-a-new-report-using-sql-server-data-tools?view=op-9-1), [FetchXML reference](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/fetchxml/reference/).

Quyết định triển khai:

1. Luôn parse well-formed XML bằng `XDocument`.
2. Dùng metadata + rule output/alias riêng của feature làm validation chính.
3. Dùng organization hiện tại để thực thi validation query khi có thể.
4. `Fetch.xsd` cũ chỉ được phép chạy như **advisory diagnostic**:
   - warning không chặn Add/Update;
   - UI phải ghi rõ `Legacy XSD warning`;
   - không hiển thị warning nếu nguyên nhân chỉ là syntax mới schema chưa biết;
   - phiên bản đầu có thể bỏ hẳn bước XSD advisory nếu không phân loại false-positive chắc chắn.
5. Không sửa/nới `Fetch.xsd` bằng cách đoán schema mới trong task này.

Nói ngắn gọn: XSD hữu ích để lint syntax cũ, nhưng **well-formed XML + metadata traversal + server validation** mới là đường chính. Nếu dùng XSD làm bắt buộc, feature sẽ tự mâu thuẫn với mục tiêu full FetchXML.

### 3.2. Những gì tài liệu Microsoft xác nhận

- FetchXML hỗ trợ aggregate/grouping và các aggregate column bắt buộc có alias: [Aggregate data using FetchXML](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/fetchxml/aggregate-data).
- `link-entity` có thể nested và có nhiều link type; Microsoft có thể tự sinh alias nếu thiếu, nhưng alias tự sinh không ổn định cho RDL field contract: [link-entity element](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/fetchxml/reference/link-entity), [Join tables using FetchXML](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/fetchxml/join-tables).
- Dataverse SDK/Web API không trả key cho column có giá trị null. Vì vậy tuyệt đối không thể lấy field list từ `Entity.Attributes` của một record top 1: [Query data using the SDK for .NET](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/org-service/entity-operations-query-data), [Use FetchXML to retrieve data](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/fetchxml/retrieve-data).
- Fetch report cho phép pre-filter root hoặc linked entity; mỗi dataset có một FetchXML query và prefilter cần đồng bộ QueryParameter/ReportParameter: [Use data filtering in Dynamics 365](https://learn.microsoft.com/en-us/dynamics365/customerengagement/on-premises/analytics/improve-report-performance-by-using-filters?view=op-9-1).
- Report parameters và query parameters là hai lớp khác nhau; hidden parameter dùng prefix `CRM_`: [Use report parameters](https://learn.microsoft.com/en-us/dynamics365/customerengagement/on-premises/analytics/use-parameters-in-reports?view=op-9-1).
- Report Authoring Extension tạo thêm field `{field}Value` cho number/date/lookup/optionset: [Create a new report using SQL Server Data Tools](https://learn.microsoft.com/en-us/dynamics365/customerengagement/on-premises/analytics/create-a-new-report-using-sql-server-data-tools?view=op-9-1).

## 4. Kết quả decompile Microsoft Report Authoring Extension

Máy phân tích có sẵn Report Authoring Extension v9 trong:

`C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\IDE\CommonExtensions\Microsoft\SSRS\`

Assembly có giá trị nhất:

`Microsoft.Crm.Reporting.DataExtension.Common.Fetch.dll` (file version 9.0.37.1101)

Các type đã kiểm tra bằng `ilspycmd`:

- `Microsoft.Crm.Reporting.DataExtension.Common.Fetch.Utility.FetchProcessor`
- `...Utility.AttributeExpression`
- `...Utility.EntityExpression`
- `...Utility.PropertyExpressionFactory`
- `...Utility.MetadataBoundFieldExpression`
- `...FetchDataExtensionDataReaderBase`

Hành vi quan sát được, chỉ dùng làm behavioral reference:

1. `FetchProcessor` đi recursively từ root entity qua mọi direct child `link-entity`; không giới hạn một link hoặc một cấp.
2. Fields được khởi tạo từ FetchXML projection và entity metadata trước khi query trả data.
3. `<all-attributes/>` được expand từ toàn bộ metadata, bỏ child attribute (`IsChildAttribute`).
4. Nếu link thiếu alias, Microsoft tự sinh alias ngẫu nhiên dựa trên entity/GUID hash. Feature mới **không làm vậy**, mà fail fast theo yêu cầu để RDL field names deterministic.
5. Attribute của linked entity không có alias riêng sẽ trở thành `{linkAlias}.{attribute}` trước khi normalize field name.
6. Field name được normalize bằng cách thay mọi ký tự ngoài `[A-Za-z0-9_]` thành `_`; vì vậy dấu `.` của linked output trở thành `_` trong RDL Field name.
7. Duplicate report field name được Microsoft tự thêm hậu tố số. Feature mới fail fast và yêu cầu user sửa alias để output contract rõ ràng.
8. Aggregate `count`/`countcolumn` trả integer; date `groupby` trả integer theo behavior của extension cũ; các aggregate khác lấy type dựa trên metadata.
9. Extension nhận parameter khi `condition/@value` hoặc `condition/value` bắt đầu bằng `@`.
10. Extension hỗ trợ prefilter trên root và mọi linked entity.
11. Data reader có schema/field count từ `FetchProcessor.Fields`, không phụ thuộc record đầu tiên có null hay không.

Kết luận: **decompile là hữu ích và đã đủ để chốt thuật toán field discovery**. AI triển khai không cần tiếp tục decompile để bắt đầu. Nếu gặp mismatch thực tế, chỉ decompile thêm đúng type liên quan; không copy source Microsoft, không redistribute DLL và không reference DLL 2019 từ VSIX 2026. Implementation phải là clean-room dựa trên hành vi quan sát được và SDK public.

## 5. Đối chiếu MCP `manage_report`

`DynamicsCrm.DevKit.Cli/Mcp/Tools/ManageReportTool.cs` hiện có `add_dataset`, `update_dataset`, `delete_dataset`. Các phần nên tái sử dụng về mặt hành vi:

- validate `.rdl` và report namespace;
- giữ nguyên `DataSourceName` theo dataset hiện có; không hard-code tên datasource;
- dataset name rule;
- tạo Query/Fields;
- field property mapping cơ bản;
- prefilter parameter/layout/ReportFilter;
- backup trước ghi.

Các phần MCP **không được port nguyên trạng**:

- System View input;
- giới hạn aggregate/group-by;
- giới hạn một link, một cấp;
- cấm `<all-attributes/>`;
- chỉ đọc root và một linked entity;
- dùng record `top=1` như một phần validation có thể bị filter/parameter/null chi phối;
- giữ dấu `.` trong linked field name thay vì normalize giống Microsoft extension;
- xóa dataset không dependency guard;
- không cleanup prefilter cũ;
- serialize lại toàn file dễ gây diff lớn.

Không gọi MCP process từ VSIX và không tham chiếu assembly CLI.

## 6. UX dialog bắt buộc

Chỉ dùng **một dialog master-detail** `FormReportDatasets`, có thể resize.

### 6.1. Header

- Title: `Manage Report Datasets`.
- Wiki header nền xanh theo pattern hiện có:
  - text `WIKI: Manage Report Datasets`;
  - URL `https://github.com/phuocle/Dynamics-Crm-DevKit/wiki/Manage-Report-Datasets`.
- File path read-only.
- Badge `FetchXML report` để user hiểu scope.

### 6.2. Danh sách bên trái — Read

Hiển thị các cột:

- `Name`
- `Root entity`
- `Fields`
- `Parameters`
- `Pre-filter`
- `Referenced`

Buttons: `Add`, `Delete`, `Reload`.

Dataset query phức tạp hoặc parse lỗi vẫn phải hiện để user xem raw text hoặc delete; không được làm cả dialog fail chỉ vì một dataset lỗi.

### 6.3. Editor bên phải

Controls:

- `Dataset name`: editable lúc Add, read-only lúc Update.
- `Data source`: read-only reference hiện có trong dataset; không hard-code tên datasource.
- FetchXML multiline editor, monospace, word-wrap off, đủ scrollbars.
- `Format XML` chỉ format text trong editor khi user chủ động bấm; không tự format lúc load.
- `Validate & Refresh Fields`.
- Tab/section `Fields` hiển thị `Name`, `DataField`, `TypeName`, `Source path`.
- Tab/section `Parameters` hiển thị parameter được phát hiện và mapping sang report parameter.
- Section `Pre-filter` mô tả ở mục 6.4.
- Status/error panel không đóng dialog khi lỗi.
- Buttons cuối: `Add Dataset`/`Update Dataset`, `Save`, `Cancel`.

Không có System View radio, ComboBox hoặc service nào.

### 6.4. Pre-filter UI

Pre-filtering belongs to the selected dataset only. Use:

- checkbox tổng `Enable pre-filtering`, mặc định **unchecked** khi Add;
- bên dưới là danh sách readonly các entity/link path lấy từ FetchXML;
- mỗi root/link entity chỉ hiển thị:
  - entity logical name;
  - link alias/path;
  - parameter name readonly.

Khi bật checkbox tổng:

- mặc định chỉ tick root entity;
- tên mặc định root: `CRM_Filtered{PascalLogicalName}`;
- tên mặc định linked entity: `CRM_Filtered{PascalAlias}` để tránh trùng khi cùng entity xuất hiện nhiều lần;
- checkbox tổng là nơi duy nhất để bật/tắt pre-filtering của dataset;
- khi bật mà query chưa có selection, hệ thống mặc định chọn root entity;
- mọi parameter name vẫn phải bắt đầu `CRM_` và unique không phân biệt hoa thường.

Khi Update, đọc `enableprefiltering`/`prefilterparametername` hiện có để restore chính xác selection. Nếu query hiện có không bật prefilter, checkbox tổng tắt.

Nếu user tắt pre-filter, FetchXML được giữ nguyên ngoại trừ chỉ các attribute prefilter mà DevKit/user đã bỏ chọn; cleanup RDL artifacts phải bảo thủ theo mục 13.

## 7. Luồng command

Tạo `DynamicsCrm.DevKit.Vsix/Commands/CommandManageReportDatasets.cs` theo pattern `CommandUploadReport` và `CommandNewReport`.

### `BeforeQueryStatus`

1. Set `Command.Visible = false`, `Command.Enabled = false` ngay lập tức.
2. Dùng `ThreadHelper.JoinableTaskFactory.Run(...)` lấy extension.
3. Chỉ bật khi `.rdl`, `OrdinalIgnoreCase`.
4. Exception trong query-status chỉ giữ command ẩn, không popup.

### `ExecuteAsync`

1. `await VsixHelper.SaveSelectedItemAsync()`.
2. Lấy full path và guard lại `.rdl` + `File.Exists`.
3. Parse RDL local trước khi connect.
4. Mở `FormReportDatasets` bằng `ShowModal()`.
5. Truyền lazy connection factory dùng `CacheHelper.GetServiceClientAsync()`; không connect khi chỉ Read/Delete.
6. Dialog/service lo mutation, backup và save.
7. Không dùng Deploy animation và không upload Dataverse.
8. Catch toàn bộ lỗi, message prefix `Manage report datasets failed:`.

## 8. Cấu trúc file triển khai

### File mới trong VSIX

1. `DynamicsCrm.DevKit.Vsix/Commands/CommandManageReportDatasets.cs`
2. `DynamicsCrm.DevKit.Vsix/Lib/ReportDatasetService.cs`
3. `DynamicsCrm.DevKit.Vsix/Lib/Models/ReportDatasetInfo.cs`
4. `DynamicsCrm.DevKit.Vsix/Lib/Models/ReportDatasetFieldInfo.cs`
5. `DynamicsCrm.DevKit.Vsix/Lib/Models/ReportDatasetParameterInfo.cs`
6. `DynamicsCrm.DevKit.Vsix/Lib/Models/ReportDatasetValidationResult.cs`
7. `DynamicsCrm.DevKit.Vsix/Lib/Models/ReportFetchEntityInfo.cs`
8. `DynamicsCrm.DevKit.Vsix/Lib/Forms/FormReportDatasets.xaml`
9. `DynamicsCrm.DevKit.Vsix/Lib/Forms/FormReportDatasets.xaml.cs`

### Wiki bắt buộc vì dialog có link

1. Tạo `DynamicsCrm.DevKit.Wiki/vsix-commands/Manage-Report-Datasets.md`.
2. Sửa `DynamicsCrm.DevKit.Wiki/VSIX-Commands.md`.
3. Sửa `DynamicsCrm.DevKit.Wiki/Wiki-Map.md`.

### File wiring phải sửa

1. `DynamicsCrm.DevKit.Vsix/DevKitPackageVsct.vsct`
2. `DynamicsCrm.DevKit.Vsix/DevKitPackageVsct.cs`
3. `DynamicsCrm.DevKit.Vsix/DynamicsCrm.DevKit.Vsix.csproj`

Không thêm file vào CLI, MCP, Shared hoặc VSIX 2019.

## 9. Kiến trúc và model

`ReportDatasetService` không phụ thuộc WPF control. Code-behind chỉ binding, selection, busy/error/dirty state và gọi service.

`ReportDatasetInfo` tối thiểu:

```csharp
internal sealed class ReportDatasetInfo
{
    public string Name { get; set; }
    public string DataSourceName { get; set; }
    public string CommandText { get; set; }
    public string RootEntityName { get; set; }
    public List<ReportDatasetFieldInfo> Fields { get; set; }
    public List<ReportDatasetParameterInfo> Parameters { get; set; }
    public List<ReportFetchEntityInfo> FetchEntities { get; set; }
    public int ReferenceCount { get; set; }
    public List<string> ReferencePaths { get; set; }
    public List<string> Warnings { get; set; }
}
```

`ReportDatasetFieldInfo`: `Name`, `DataField`, `TypeName`, `SourceEntityPath`, `SourceAttribute`, `IsGeneratedCompanion`.

`ReportDatasetParameterInfo`: `FetchToken` (ví dụ `@para1`), `QueryParameterName`, `ReportParameterName`, `ValueExpression`, `DataType`, `IsMultiValue`, `ExistsInReport`.

`ReportFetchEntityInfo`: `Path`, `LogicalName`, `Alias`, `IsRoot`, `IsPreFiltered`, `PrefilterParameterName`.

`ReportDatasetValidationResult`: `IsSuccess`, `Errors`, `Warnings`, normalized original FetchXML, probe FetchXML, projected fields, discovered parameters và entity tree.

Tất cả type là `internal`; không tạo public API.

## 10. Parse RDL và transaction

### 10.1. Parse file

1. Đọc raw bytes, phát hiện encoding/BOM/XML declaration và newline (`CRLF`/`LF`).
2. Tính SHA-256 `originalHash`.
3. Parse `XDocument` với `PreserveWhitespace | SetLineInfo`.
4. Root `LocalName` phải là `Report`.
5. Dùng namespace lấy từ root, không hard-code RDL version.
6. Không kiểm tra tên hoặc provider của datasource; dialog được gọi trong scope đã xác định là FetchXML report.
7. Đọc và giữ nguyên `DataSourceName` hiện có khi update; khi create, dùng reference datasource đầu tiên của report nếu cần.
8. `DataSets` có thể chưa tồn tại; Read trả danh sách rỗng, Create chèn container ở vị trí hợp lệ sau `DataSources`.

### 10.2. Working copy

- Dialog giữ clone `XDocument`.
- Add/Update/Delete chỉ mutate clone sau validation thành công.
- `Cancel` không ghi file.
- `Save` ghi một lần và tạo một backup cho phiên làm việc.
- Đóng dialog khi dirty phải hỏi `Discard unsaved dataset changes?`.

## 11. Full FetchXML validation pipeline

Không dùng từ “full support” để che lỗi. Pipeline phải tách rõ các lớp sau.

### 11.1. Layer 1 — XML và shape cơ bản

- FetchXML phải là well-formed XML.
- Root local name phải là `fetch`.
- Có đúng một direct root `entity` và entity có `name`.
- Không tự xóa/sửa syntax của original FetchXML.
- Legacy XSD nếu dùng chỉ tạo warning như mục 3.1.

### 11.2. Layer 2 — recursive entity graph

Đi recursively qua **mọi** `link-entity` ở mọi cấp.

Mỗi node giữ path deterministic, ví dụ:

- `account`
- `account/contact[primary]`
- `account/contact[primary]/systemuser[owner]`

Rules:

- root entity không cần alias;
- mọi `link-entity` bắt buộc có non-empty `alias`, kể cả link chỉ dùng để filter;
- alias phải unique trong toàn FetchXML, `OrdinalIgnoreCase`;
- thiếu/trùng alias: fail fast, highlight line nếu có `IXmlLineInfo`;
- không tự sinh alias;
- không giới hạn số link hoặc độ sâu.

Microsoft có thể tự sinh alias khi thiếu, nhưng alias đó không deterministic. Feature mới cố ý strict hơn để field contract trong RDL ổn định.

### 11.3. Layer 3 — metadata

- Lazy-connect organization qua `ServiceClient`.
- Thu thập logical name unique từ root + toàn bộ links.
- Retrieve metadata một lần cho mỗi logical name và cache trong vòng đời dialog.
- Xác nhận entity tồn tại.
- Xác nhận mọi projected attribute và mọi attribute được tham chiếu bởi aggregate/group/order/filter tồn tại trên đúng entity/alias khi có thể resolve.
- Xác nhận `from`/`to` của link tồn tại; để Dataverse server quyết định compatibility cuối cùng.
- Không dùng entity display name trong CommandText; chỉ logical name.

### 11.4. Layer 4 — output contract và alias

Xây projected columns từ XML + metadata, không query data.

- Root non-aggregate attribute:
  - alias nếu có;
  - nếu không có alias, field base name là attribute logical name.
- Linked attribute:
  - alias của attribute nếu có;
  - nếu không, field base name là `{linkAlias}.{attributeName}`.
- Normalize RDL field name giống Microsoft data extension: thay mọi ký tự ngoài `[A-Za-z0-9_]` bằng `_`.
- Aggregate/group-by query:
  - mọi projected `<attribute>` bắt buộc có alias;
  - thiếu alias: fail fast;
  - `count`/`countcolumn` có effective type Integer;
  - DateTime có `groupby` + `dategrouping` có effective type Integer theo extension cũ;
  - aggregate còn lại dùng metadata type, sau đó áp property mapping.
- Nested linked attributes dùng alias của **link chứa trực tiếp attribute**, không ghép cả ancestor path vào field name.
- Nếu normalize hoặc companion generation tạo duplicate field name, fail fast và liệt kê các source path xung đột; không tự thêm hậu tố.

`<all-attributes/>`:

- Được hỗ trợ ở root và mọi link.
- Expand từ metadata của entity tương ứng.
- Bỏ child/derived backing attribute tương đương `IsChildAttribute` của Microsoft extension.
- Chỉ include attribute đọc được (`IsValidForRead != false`).
- Nếu cùng entity node vừa có explicit `<attribute>` vừa có `<all-attributes/>`, mirror Microsoft extension cũ: explicit list thắng, không expand all.
- Sau expand vẫn chạy duplicate detection.

Nếu fetch có `page` hoặc `count`, thêm non-metadata fields `PagingCookie` và `MoreRecords` tương đương Microsoft extension, với đúng type thực tế sau khi xác minh trên RDL mẫu/decompiled property types.

### 11.5. Layer 5 — query parameters

Discover parameter token recursively từ:

- `condition/@value` bắt đầu bằng `@`;
- direct child `condition/value` có text bắt đầu bằng `@`;
- `fetch/@page`, `fetch/@count`, `fetch/@paging-cookie` nếu giá trị bắt đầu bằng `@`.

Không nhầm `condition/@valueof` với report parameter.

Với token `@para1`:

- `QueryParameter Name="@para1"`;
- value expression mặc định `=Parameters!para1.Value` (bỏ `@` khi tham chiếu report parameter);
- reuse mapping đang tồn tại khi Update;
- nếu report parameter `para1` chưa tồn tại, hiển thị trong Parameters grid để user xác nhận type/multi-value trước Add/Update;
- suy ra DataType từ metadata của condition attribute khi có thể;
- operator `in`, `not-in`, `between`, `not-between` hoặc nhiều `<value>` gợi ý `MultiValue=true`, nhưng user phải nhìn thấy và có thể sửa;
- không xóa report parameter dùng chung bởi dataset khác.

Validation không được bắt user nhập giá trị thật của `@para1` chỉ để refresh fields.

### 11.6. Layer 6 — server validation và validation probe

Mục đích server call là xác nhận organization nhận query, **không dùng response để khám phá fields**.

Tạo hai bản clone; original text không đổi:

1. `executionCandidate`:
   - nếu không có parameter token chưa bind, thử execute original query với `top=1` sau khi bỏ các paging attribute xung đột;
   - query trả 0 record vẫn là validation thành công;
   - null/missing attribute trong response hoàn toàn không ảnh hưởng field list.
2. `fieldProbe` dành cho query có parameter hoặc filter chắc chắn làm validation khó:
   - remove toàn bộ `filter` subtree trên clone;
   - remove `page`, `count`, `paging-cookie`, `returntotalrecordcount`;
   - set `top=1` nếu Dataverse cho phép với dạng query đó;
   - với aggregate form không chấp nhận `top`, bỏ `top` và dùng form tối thiểu server chấp nhận;
   - giữ nguyên entity/link/projection/aggregate/group/order để server còn kiểm tra shape chính;
   - remove/neutralize report-only prefilter attributes trên probe nếu SDK endpoint không nhận chúng.

Nếu `fieldProbe` fail:

- báo lỗi server nguyên bản thân thiện;
- không mutate RDL;
- không tự downgrade query hoặc xóa link/aggregate.

Nếu probe thành công nhưng original chứa parameter chưa có runtime value, status phải nói rõ: `Projection validated; parameterized filters were excluded from the validation probe.` Không tuyên bố toàn bộ runtime filter đã được thực thi.

Quan trọng: ví dụ FetchXML chọn `name`, `firstname`, `lastname`, `middlename` nhưng filter không có record phù hợp vẫn phải sinh đủ fields từ projection/metadata. Không được loop `Entity.Attributes` để quyết định field tồn tại. Điều này giải quyết cả filter `a = b`, `@para1` và column null.

## 12. Field generation tương đương MSCRMFETCH

Mỗi projected attribute tạo base field là formatted value `System.String`, sau đó thêm companion theo effective metadata type:

| Effective Dataverse type | Base field | Companion |
|---|---|---|
| String, Memo | `System.String` | Không |
| Uniqueidentifier | `System.String` theo extension cũ | Không |
| Boolean | `System.String` | `{name}Value : System.Boolean` |
| DateTime | `System.String` | `{name}Value : System.DateTime` |
| Decimal, Money | `System.String` | `{name}Value : System.Decimal` |
| Double | `System.String` | `{name}Value : System.Double` |
| Integer, Picklist, State, Status | `System.String` | `{name}Value : System.Int32` |
| BigInt | `System.String` | `{name}Value : System.Int64` |
| Lookup, Customer, Owner | `System.String` | `{name}Value : System.Guid` và `{name}EntityName : System.String` |
| EntityName | value field theo behavior extension | Không formatted companion |
| Aggregate count/countcolumn | `System.String` | `{name}Value : System.Int32` |
| Date group-by part | `System.String` | `{name}Value : System.Int32` |

Đừng giả định bảng trên hoàn hảo cho type Dataverse mới. Với type metadata mà MSCRMFETCH không có property mapping:

- fail fast với tên attribute, entity và `AttributeTypeName`;
- không âm thầm ép sang string;
- không loại cả FetchXML feature chỉ vì một type; user sửa projection rồi validate lại.

Đặc biệt kiểm tra `MultiSelectPicklist`, `File`, `Image`: MCP hiện reject và assembly v9 không có mapping rõ ràng. Giữ fail-fast trừ khi có bằng chứng runtime MSCRMFETCH của target organization hỗ trợ và tạo field schema xác định. “Full FetchXML” nghĩa là không giới hạn cấu trúc query tùy tiện, không có nghĩa là giả lập support cho column type mà data extension không đọc được.

RDL Field XML:

```xml
<Field Name="normalizedName">
  <DataField>normalizedName</DataField>
  <rd:TypeName>System.String</rd:TypeName>
</Field>
```

Dùng report namespace hiện tại cho `Field`/`DataField`; dùng designer namespace `http://schemas.microsoft.com/SQLServer/reporting/reportdesigner` cho `rd:TypeName`, reuse prefix hiện có nếu có.

## 13. Pre-filter algorithm

Pre-filter là option độc lập với field refresh.

Với mỗi entity node user chọn:

1. Set `enableprefiltering="1"`.
2. Set `prefilterparametername` đúng tên đã chọn.
3. Thêm/reuse dataset `QueryParameter` cùng tên, value `=Parameters!{name}.Value`.
4. Thêm/reuse hidden `ReportParameter` kiểu String, default FetchXML `<all-attributes/>` cho entity đó.
5. Thêm/reuse `ReportParametersLayout/CellDefinition`.
6. Thêm/reuse `CustomProperties/Custom/Value/mscrm:MSCRM/ReportFilter/ReportEntity` nếu format RDL hiện tại dùng block này.

Không hard-code chỉ root entity. Microsoft documentation cho phép pre-filter linked entity với parameter riêng.

Khi user bỏ chọn hoặc tắt checkbox tổng:

- remove `enableprefiltering` và `prefilterparametername` khỏi entity node tương ứng trong working FetchXML;
- chỉ cleanup QueryParameter/ReportParameter/layout/ReportFilter entry nếu không dataset/expression nào khác tham chiếu;
- nếu không chứng minh an toàn, giữ artifact và show warning.

Phân biệt hai loại parameter:

- automatic prefilter parameter thường không có `@` trong Fetch condition;
- user query parameter xuất hiện như `@para1` trong condition.

Không merge hoặc đổi tên hai loại này.

## 14. Create/Update/Delete XML

### Create

- Validate dataset name.
- Tên bắt đầu letter hoặc `_`, còn lại letter/digit/`_`.
- Fail nếu trùng `OrdinalIgnoreCase`.
- Validate FetchXML hoàn chỉnh theo mục 11.
- Tạo `DataSet/Query/DataSourceName/CommandText/QueryParameters/Fields`.
- DataSourceName giữ theo reference datasource hiện có; không hard-code tên.
- Apply prefilter artifacts theo selection.
- Thêm dataset cuối `DataSets`.

### Update

- Dataset name read-only, phải tồn tại.
- Validate editor FetchXML trước mutation.
- Thay `Query` và `Fields`, nhưng giữ child dataset khác mà feature không sở hữu.
- Rebuild QueryParameters từ discovered parameters + prefilter, đồng thời reuse mapping hợp lệ hiện có.
- Nếu projection bỏ field đang được expression dùng, hiển thị removed-field warning và yêu cầu confirm trước mutation.
- Cleanup parameter/prefilter cũ bảo thủ.

### Delete

Tìm reference ở ngoài node dataset, ít nhất:

- element `DataSetName` bằng dataset name;
- element `DataSet` dùng như dataset reference bằng dataset name;
- report parameter ValidValues/DefaultValue dataset reference;
- các schema location khác có exact dataset name và rõ ràng là reference.

Nếu có reference:

- liệt kê path;
- warning file có thể không chạy;
- default button `Cancel`;
- chỉ xóa khi user chọn `Delete Anyway`.

Không tự xóa tablix/chart/report item hoặc rewrite expression. Sau delete, cleanup parameter/prefilter chỉ khi không còn reference.

## 15. Backup, concurrency và file write

Khi `Save`:

1. Hash lại file đích.
2. Nếu khác `originalHash`, chặn overwrite; cho `Reload` hoặc `Cancel`, không có `Overwrite Anyway` trong v1.
3. Resolve solution folder bằng `VsixHelper.GetSolutionFolderAsync()`.
4. Backup vào `{solutionFolder}/.devkit/manage_report/backups/`; fallback `{rdlDirectory}/.devkit/manage_report/backups/`.
5. Tên `{rdlBaseName}_{yyyyMMddHHmmssfff}.rdl`, không overwrite.
6. Serialize ra temp file cùng directory.
7. Giữ XML declaration, encoding/BOM và newline ban đầu tối đa có thể.
8. Atomic replace file đích.
9. Nếu lỗi, giữ backup, cleanup temp an toàn và không để file nửa ghi.
10. Parse lại file vừa save; nếu không parse được, restore backup và báo lỗi.
11. Update hash, clear dirty, show backup path.

Không serialize/format toàn document chỉ vì user xem dataset. Chỉ nodes thật sự thay đổi mới nên có formatting churn.

## 16. VSCT, project và wiki wiring

### VSCT

Trong `DevKitPackageVsct.vsct`:

- Button ID `CommandManageReportDatasets = 0x1008`.
- Button priority `0x0008`.
- Icon `guidImages/bmpPic`.
- Flags `DynamicVisibility`, `DefaultInvisible`.
- Text `Manage Datasets...`.
- Placement trong `GroupDeployCommands`, sau `CommandNewReport`, priority `0x0007`.
- Thêm `IDSymbol` tương ứng.

Đồng bộ `DevKitPackageVsct.cs`:

```csharp
public const int CommandManageReportDatasets = 0x1008;
```

Không đổi GUID/ID hiện có.

### Old-style csproj

Thêm `<Compile Include>` tường minh cho command, service, models, XAML code-behind; code-behind có `DependentUpon`. Thêm `<Page Include="Lib\Forms\FormReportDatasets.xaml">` với `MSBuild:Compile` và `Designer`.

### Dialog inheritance

Root XAML:

```xml
<forms:BaseDialogWindow
    xmlns:forms="clr-namespace:DynamicsCrm.DevKit.Lib.Forms"
    ...>
```

Code-behind:

```csharp
public partial class FormReportDatasets : BaseDialogWindow
```

Merge `StyleResourceDictionary.xaml`; wiki dùng `ExternalBrowserHyperlink` hiện có.

### Wiki

Page tiếng Anh phải mô tả:

- FetchXML report scope;
- direct FetchXML only;
- recursive link/aggregate/all-attributes support;
- alias rule;
- metadata-based field refresh và null behavior;
- report parameters;
- optional multi-entity prefilter;
- backup/delete warning;
- deploy là bước riêng.

Thêm link vào `VSIX-Commands.md` và `Wiki-Map.md`; không để dead link.

## 17. Trình tự triển khai bắt buộc

1. Đọc `AGENTS.md` và toàn bộ `DynamicsCrm.DevKit.AI/workflows/build-vsix.md`.
2. Kiểm tra `git status --short`, bảo toàn thay đổi của user.
3. Đọc các pattern hiện có: hai report command, VSCT, csproj, `BaseDialogWindow`, `FormReportMapping`.
4. Implement models.
5. Implement RDL parser + working document transaction.
6. Implement recursive Fetch entity graph và alias validation.
7. Implement metadata cache và projection-based field generator, gồm all-attributes, nested links, aggregate và companions.
8. Implement parameter discovery/mapping.
9. Implement validation probe không phụ thuộc filters/parameters/returned row/null.
10. Implement optional multi-entity prefilter và conservative cleanup.
11. Implement dependency scan, backup, concurrency guard và atomic save.
12. Tạo dialog direct-FetchXML-only.
13. Tạo command và lazy connection.
14. Wiring VSCT/generated constants/csproj.
15. Tạo wiki page + indexes.
16. Dùng `rg` xác nhận không thêm System View UI/service và không có arbitrary one-link/one-level/aggregate restriction.
17. Dùng `rg` xác nhận không sửa VSIX 2019, CLI/MCP, Shared.
18. Không chạy unit test.
19. Chạy build VSIX theo mục 18.
20. Chạy `git diff --check`, review `git diff --name-only`.
21. Xác nhận version `4.44.44.44` và build-date placeholder còn nguyên.
22. Báo build/artifact; không stage/commit/push.

## 18. Verification và điều kiện thành công

### Không chạy unit test

Không chạy `dotnet test`, `vstest.console`, `Run-Coverage.ps1` hoặc analyzer coverage. Unit test không phải acceptance gate.

### Build bắt buộc

Chạy đúng `DynamicsCrm.DevKit.AI/workflows/build-vsix.md`, dùng VS 2026 MSBuild, không dùng `dotnet build`:

```powershell
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
& $msbuild "DynamicsCrm.DevKit.Vsix\DynamicsCrm.DevKit.Vsix.csproj" /t:Build /p:Configuration=Debug /p:DeployExtension=false /v:m
```

Thành công khi:

- exit code `0`;
- không build error;
- `DynamicsCrm.DevKit.Vsix/bin/Debug/DynamicsCrm.DevKit.vsix` tồn tại.

Đây là acceptance gate automation duy nhất theo yêu cầu. Manual smoke test bên dưới được khuyến nghị nhưng không thay đổi quy tắc này.

### Manual smoke test khuyến nghị

1. Menu chỉ hiện trên `.rdl`/`.RDL` trong VSIX chính.
2. Dialog mở offline và Read/Delete được dataset.
3. System View UI hoàn toàn không tồn tại.
4. Direct FetchXML root attributes sinh đủ fields dù query trả 0 row hoặc các column đều null.
5. Literal filters không làm thiếu field.
6. `@para1`/multi-value parameters được discover; validation probe không yêu cầu runtime value.
7. Nhiều sibling links và nested links sinh đủ fields.
8. Link thiếu alias fail fast; không tự thêm alias.
9. Duplicate alias/normalized field collision fail fast.
10. Aggregate/group-by sinh đúng alias/type.
11. `<all-attributes/>` expand từ metadata, không dựa vào record.
12. Pre-filter mặc định off; root/link selection tạo đúng artifacts.
13. Tắt pre-filter cleanup bảo thủ, không xóa parameter đang dùng chung.
14. Delete dataset referenced hiển thị warning và default Cancel.
15. Cancel dialog giữ file/hash nguyên.
16. Save tạo backup và final RDL parse lại được.
17. Concurrent external edit làm Save bị chặn.
18. Nếu có VS2019 designer, so sánh field list của cùng FetchXML với Refresh Fields cũ; mismatch phải được ghi nhận cụ thể trước khi release.

## 19. Acceptance criteria chức năng

- Menu là `Manage Datasets...`, chỉ dành cho `.rdl`, chỉ trong VSIX chính.
- Dialog kế thừa `BaseDialogWindow`, dùng style chung và wiki link hợp lệ.
- Input duy nhất là FetchXML; không còn System View.
- Target là FetchXML report; datasource name/provider không phải điều kiện do dialog tự kiểm tra.
- Không có giới hạn tùy tiện với aggregate/link depth/link count/all-attributes.
- Mọi link thiếu alias fail fast, không auto-generate.
- Field discovery dựa trên projection + metadata, không dựa trên row data.
- Filter không match, report parameter chưa có value và null column không làm thiếu field.
- Recursive links, aggregate/grouping, all-attributes và companion fields được xử lý deterministic.
- Query/report parameters được discover/mapped mà không mutate FetchXML gốc.
- Pre-filter là option mặc định tắt và có thể chọn root/link entity.
- CRUD chạy trên working copy; Cancel không đổi file; Save có backup/concurrency/atomic-write.
- Không mutate Dataverse.
- Build VSIX thành công theo mục 18.

## 20. Ghi chú về “full support” và rủi ro còn lại

- Không có một XSD hiện hành, công khai và chắc chắn bao phủ mọi report-only FetchXML syntax để dùng làm nguồn chân lý duy nhất.
- Dataverse FetchXML thay đổi theo server; server validation vẫn là nguồn cuối cho syntax/query execution mà SDK chấp nhận.
- Report Authoring Extension v9 decompile là reference tốt cho field contract nhưng không đại diện tuyệt đối cho mọi Dataverse type mới.
- Feature phải fail rõ ở output type không biết thay vì sinh RDL field sai.
- Nếu cần độ tương thích tuyệt đối trước release, tạo bộ corpus `.rdl` thủ công gồm simple, nested link, aggregate, all-attributes, parameters và prefilter; so sánh output fields với VS2019 Refresh Fields. Đây là integration verification, không phải unit test.
- Refactor engine chung với MCP là task sau; không làm trong task này.

## 21. Giới hạn của lần phân tích hiện tại

Lần phân tích này chỉ cập nhật file Markdown này trong `DynamicsCrm.DevKit.Docs/Vsix/`. Không sửa production code, không chạy unit test và không chạy build VSIX. Các bước implementation/build ở trên dành cho AI thực thi feature sau này.
