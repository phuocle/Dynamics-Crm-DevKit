# Nghiên cứu và kế hoạch triển khai item template `DevKit Report` cho `.rptproj`

Ngày nghiên cứu: 2026-09-11
Phạm vi: VSIX Visual Studio 2026, Microsoft Reporting Services Projects 4.0.0
Trạng thái: user đã xác nhận catalog legacy hoạt động end-to-end trong `.rptproj`: tile/icon đúng, dialog entity mở, report được add và placeholder được thay runtime. Bug còn lại là payload modern cũng làm `DevKit Report` xuất hiện sai trong C# Add New Item. Đã xóa hoàn toàn project/payload modern, giữ duy nhất ba asset legacy, loại archive 18 khỏi C# packaging và build thành công; chờ user AP xác nhận tile đã biến mất khỏi C# project.

## 1. Yêu cầu đã chốt

Giữ report catalog thứ 18 tại:

`ItemTemplates/CSharp/18.ReportItemTemplate`

Đây là folder asset legacy cho VSIX, không phải một MSBuild item-template project và không tạo archive `.vstemplate` cho C#.

Khi người dùng mở một Report Project (`.rptproj`), right-click project hoặc node `Reports`, chọn **Add > New Item...**, hộp thoại chuẩn của Visual Studio phải hiển thị category **DynamicsCrm.DevKit** và trong đó chỉ có một tile **DevKit Report**. Các item native Report, Data Source và Dataset tiếp tục nằm trong category **Report Project** của SSRS.

Đây là tiêu chí bắt buộc. Một command riêng mang tên `DevKit Report...` nằm trong menu Add nhưng không xuất hiện thành tile trong hộp thoại trên **không được xem là hoàn thành yêu cầu**.

Sau khi người dùng chọn tile `DevKit Report`, nhập tên file và bấm Add:

1. Mở dialog tương tự item template `01. C# Late Bound Class`.
2. Cho phép chọn/kết nối Dynamics 365/Dataverse và chọn một entity.
3. Đọc `DynamicsCrm.DevKit.Shared/Resources/ReportTemplate.rdl`.
4. Thay các giá trị môi trường và entity bằng cách sửa XML có cấu trúc.
5. Tạo đúng một file `.rdl` trong Report Project, thêm nó vào `.rptproj`, rồi mở Report Designer.
6. Nếu Cancel hoặc có lỗi thì không để lại file/item dở dang.

Tên file phải lấy từ ô **Name** của Add New Item (ví dụ `Report2.rdl` trong ảnh yêu cầu), không tự đổi thành SchemaName của entity. Entity chỉ quyết định nội dung RDL.

## 2. Kết luận ngắn

Yêu cầu khả thi, nhưng đây không phải item-template catalog C# thông thường.

Nguyên nhân các thử nghiệm trước dễ thất bại là `.rptproj` do Microsoft Reporting Services Projects cung cấp, có project type GUID và catalog Add New Item riêng. Việc chỉ thêm project 18 vào `ItemTemplates/CSharp`, manifest VSIX và đặt `<ProjectType>CSharp</ProjectType>` chỉ làm template đi vào catalog C#; Report Project không tự đọc catalog này.

Hướng triển khai theo kết quả runtime:

1. Đường modern `.vstemplate`/`IWizard` đã được thử nhưng user phản hồi thực tế cho thấy SSRS tạo thêm một category `Report Project` và đọc ba file thô (`DevKitReportItemTemplate`, `icon`, `Report`), các item không chạy wizard.
2. **Đường hiện tại:** dùng thư mục catalog riêng có `.vsdir` + `.vsz` + `IDTWizard`, đăng ký category `DynamicsCrm.DevKit` cho đúng project GUID của `.rptproj`. Catalog này chỉ mô tả một entry `DevKit Report`.
3. Không mô phỏng COM registration bằng custom key. `DevKitPackage` dùng `ProvideObject` để Visual Studio sinh registration cho `ILocalRegistry`; `.vsz` gọi trực tiếp CLSID của `ReportItemWizard`.
4. User đã xác nhận legacy runtime hoạt động. Vòng cuối chỉ loại payload khỏi C# catalog; user AP kiểm tra C# negative scope và smoke-test lại `.rptproj` để phát hiện regression.

Không sửa/copy file vào `Program Files\...\Microsoft\SSRS`. Cách đó cần quyền admin, bị ghi đè khi update extension, và làm DevKit phụ thuộc vào layout cài đặt của extension khác.

## 3. Bằng chứng trong repository

### 3.1. Hạ tầng item template hiện tại

Các C# item-template project hiện có nằm tại `ItemTemplates/CSharp`, số thứ tự `01` đến `11`, sau đó `13` đến `17`; không có `12`. Có 16 archive `.vstemplate` thực tế. Folder `18.ReportItemTemplate` chỉ giữ report catalog legacy và không được tính là C# item-template project/archive.

Mỗi template hiện tại là một project template kiểu cũ, target .NET Framework 4.8, build ra `.zip`, được VSIX tham chiếu với:

```xml
<VSIXSubPath>ItemTemplates</VSIXSubPath>
<ReferenceOutputAssembly>false</ReferenceOutputAssembly>
<IncludeOutputGroupsInVSIX>TemplateProjectOutputGroup%3b</IncludeOutputGroupsInVSIX>
```

VSIX còn có target `IncludeTemplateArchivesInVsix`, quét:

`..\ItemTemplates\CSharp\*\bin\$(Configuration)\ItemTemplates\**\*.zip`

và đóng gói vào catalog C#. Target phải `Exclude` folder `18.ReportItemTemplate` để stale `bin` cũ cũng không thể làm tile report xuất hiện lại trong C#:

`ItemTemplates\CSharp\DynamicsCrm.DevKit\1033`

Wiring đúng của report catalog:

- Hai solution không chứa project `18.ReportItemTemplate.csproj`.
- `DynamicsCrm.DevKit.Vsix/DynamicsCrm.DevKit.Vsix.csproj` include trực tiếp `.vsdir`, `.vsz`, `.ico`; không có project reference 18.
- `DynamicsCrm.DevKit.Vsix/source.extension.vsixmanifest` không khai báo `Microsoft.VisualStudio.ItemTemplate` cho project 18.
- `DynamicsCrm.DevKit.Scripts/Release-DynamicsCrm-DevKit.ps1` giữ expected C# item-template count là 16 và kiểm tra riêng đủ ba file report catalog legacy.

### 3.2. Wizard Late Bound có thể tái sử dụng

`DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/LateBound.cs` đã có flow phù hợp:

- implement `Microsoft.VisualStudio.TemplateWizard.IWizard`;
- mở `new FormItem(ItemType.LateBound)` trong `RunStarted`;
- dùng connection và metadata đã tải bởi dialog;
- thêm replacement values;
- ném wizard-cancel exception khi người dùng Cancel;
- dùng `ItemTemplateBase` để theo dõi item sinh ra và ngăn overwrite.

`DynamicsCrm.DevKit.Vsix/Lib/Forms/FormItem.xaml(.cs)` đã có connection UI và entity picker. Entity list được lấy bằng `MetadataService.ReadEntitiesMetadataAsync(EntityFilters.Entity)` và hiển thị từ `XrmHelper.EntitiesMetadata`. Không cần tạo dialog mới từ đầu.

Đã thêm `ItemType.Report` ở cuối enum, không đổi giá trị các enum hiện có, cùng nhánh `ReportItem()` trong `FormItem`. UI entity picker dùng lại flow Late Bound; chỉ đổi title, description/help text phù hợp report.

### 3.3. RDL mẫu đã là embedded resource

`DynamicsCrm.DevKit.Shared/DynamicsCrm.DevKit.Shared.projitems` đã embed:

- `Resources/ReportProjectTemplate.rptproj`
- `Resources/ReportTemplate.rdl`

`ProjectTemplates/CSharp/12.ReportProjectTemplate/ReportTemplate.rdl` chỉ chứa token `$report$`, và wizard project template dùng `Replacement.SetEmbeddedResourceAsync` để thay token này bằng toàn bộ embedded RDL. Điều này chứng minh codebase hiện tại đã có tiền lệ đưa nguyên nội dung RDL vào template.

### 3.4. Logic chuẩn hóa môi trường đã tồn tại

`DynamicsCrm.DevKit.Cli/Tasks/ManageReportTool.cs`, method `PrepareEmbeddedReportTemplate`, đã thực hiện các bước đáng tái sử dụng về mặt hành vi:

- parse `XDocument` với `LoadOptions.PreserveWhitespace`;
- đổi data-source `ConnectString` thành `{environmentBaseUrl}/;{organizationUniqueName}`;
- lấy organization language code;
- đổi default `CRM_UILanguageId`;
- đổi default `CRM_URL` thành base URL;
- đổi `Report/Language` theo culture tương ứng.

Không nên copy-paste nguyên method phụ thuộc CLI. Nên tách hoặc viết một pure helper dùng chung, nhận một DTO context rõ ràng và trả về chuỗi RDL.

### 3.5. Dataset/prefilter logic đã có trong VSIX

`DynamicsCrm.DevKit.Vsix/Lib/ReportDatasetService.cs` đã có code parse/update RDL, validate FetchXML, cập nhật fields và automatic-prefilter artifacts. Tài liệu chi tiết liên quan đã có tại:

`DynamicsCrm.DevKit.Docs/Vsix/manage-rdl-datasets-implementation-plan.md`

Report template implementation nên tái sử dụng hoặc trích pure XML helpers từ logic này, tránh tạo một phiên bản prefilter thứ hai có quy tắc khác.

## 4. Bằng chứng từ Microsoft Reporting Services Projects trên máy nghiên cứu

Extension đang cài:

- Tên: Microsoft Reporting Services Projects
- VSIX identity: `c908b653-e610-447e-9f48-fda740e2b498`
- Version: `4.0.0`
- Folder: `C:\Program Files\Microsoft Visual Studio\18\Professional\Common7\IDE\CommonExtensions\Microsoft\SSRS`

Project type của `.rptproj`:

`{F14B399A-7131-4C87-9E4B-1186C45EF12D}`

GUID này cũng xuất hiện trong solution mẫu của repository.

`ssdtrs.pkgdef` đăng ký:

```text
Projects\{F14B399A-7131-4C87-9E4B-1186C45EF12D}
  ItemTemplatesDir = $PackageFolder$\ProjectItems\ReportProject
  Package          = {6BBD50AA-0367-46BD-BCC3-F79E4F7F17E0}

Projects\{F14B399A-7131-4C87-9E4B-1186C45EF12D}\AddItemTemplates\TemplateDirs\{6BBD...}\1
  @            = #5001       // Report Project
  SortPriority = 1
  TemplatesDir = $PackageFolder$\ProjectItems\ReportProject
```

Folder đó chứa `ReportProjectItems.vsdir`. Bốn dòng khai báo hiện tại là Report Wizard, Report, Data Source và Dataset; tile Report Wizard không xuất hiện trong ảnh nhưng ba item còn lại trùng chính xác với ảnh.

Decompile local `Microsoft.ReportingServices.Designer.dll` cho thấy `ReportProjectManager.PromptAddItemToReport` gọi service chuẩn `IVsAddProjectItemDlg` và truyền `FileProjectHierarchy.ProjectGuid`. Nó không tự hard-code danh sách ba item. Vì vậy Visual Studio có cơ sở để hợp nhất một `TemplateDirs` khác đăng ký cho cùng project GUID.

Decompile cũng cho thấy `AddBlankReportToProject()` tạo file `.rdl`, gọi `ProjectItems.AddFromFile(path)`, rồi `Open(...).Activate()`. Như vậy việc thêm một RDL do DevKit sinh vào project là hành vi project system hỗ trợ.

## 5. Kiến trúc đề xuất

```text
Right-click .rptproj / Reports
        |
        v
Add > New Item...
        |
        v
Visual Studio đọc AddItemTemplates của project GUID F14B...
        |
        v
Category "DynamicsCrm.DevKit" với tile duy nhất "DevKit Report"
        |
        v
Wizard DevKit -> FormItem(ItemType.Report)
        |
        +--> connection + selected EntityMetadata
        +--> tên file từ ô Name của Add New Item
        |
        v
ReportTemplateBuilder (pure XML transform)
        |
        v
<NameFromDialog>.rdl -> ProjectItems -> Report Designer
```

Tách trách nhiệm:

| Thành phần | Trách nhiệm |
|---|---|
| Folder `18.ReportItemTemplate` | Chứa trực tiếp ba asset catalog legacy `.vsdir`, `.vsz`, `.ico`; không có `.csproj`/`.vstemplate` hoặc subfolder `ReportProject` trong source |
| Report-template registration | Đưa thư mục catalog legacy vào GUID `.rptproj` và category `DynamicsCrm.DevKit` |
| `Wizard.ItemTemplates.ReportItemWizard` | `IDTWizard` điều phối UI, cancellation, tên file, gọi builder và add/open RDL |
| `FormItem(ItemType.Report)` | Connection + entity picker |
| `ReportTemplateBuilder` | Biến `ReportTemplate.rdl` + context thành RDL hoàn chỉnh, không phụ thuộc DTE/WPF |

## 6. Lộ trình xử lý compatibility

Đây là phần rủi ro cao nhất vì `.rptproj` thuộc extension Microsoft. Vòng modern đã được user test và thất bại đúng như ảnh; vòng hiện tại chuyển sang layout legacy để SSRS đọc `.vsdir`/`.vsz` và gọi `IDTWizard`.

### 6.1. Kết quả runtime đã quan sát ở vòng modern

User đã xác nhận:

1. Xuất hiện hai category cùng tên `Report Project`.
2. Category phụ hiển thị ba file thô `DevKitReportItemTemplate`, `icon`, `Report` thay vì một tile.
3. Chọn các item không gọi wizard/không có action.

Kết luận: `TemplatesDir` trỏ thẳng vào thư mục payload `.vstemplate` không tương thích với catalog Add New Item của SSRS.

### 6.1.1. Kết quả runtime ở vòng legacy gần nhất

User đã xác nhận giao diện hiện đúng yêu cầu: category `DynamicsCrm.DevKit` chỉ có một tile `DevKit Report`, không còn ba file thô và icon DevKit đã hiển thị. Tuy nhiên cả vòng dùng CLSID với custom registration và vòng đổi sang ProgID vẫn báo `Invalid at the top level of the document` trước khi dialog entity mở.

Các lớp lỗi đã được tách riêng:

1. `ReportTemplateBuilder.ValidateResult` trước đây tìm `<entity>` như một node trực tiếp của RDL. Trong RDL của SSRS, FetchXML nằm dưới dạng text đã escape ở `<CommandText>`, nên validation luôn thất bại trước khi ghi file. Validation hiện parse lại giá trị `<CommandText>` thành FetchXML rồi kiểm tra entity/prefilter.
2. Kết quả `XDocument.ToString(...)` không tự ghi XML declaration. Builder hiện serialize lại declaration `<?xml version="1.0" encoding="utf-8"?>` trước khi ghi RDL để tương thích với parser của Report Designer.

3. DLL cài trong Experimental Instance đã được đối chiếu SHA-256 và trùng tuyệt đối với DLL build gần nhất; `.vsz` cài đặt cũng đúng nội dung. Vì vậy lỗi không phải do VS đang chạy bản VSIX cũ.
4. `IDTWizard.Execute` chưa được gọi khi lỗi trên xuất hiện. Điểm lỗi nằm ở bước Visual Studio resolve/create OLE wizard từ dòng `Wizard=` của `.vsz`, trước logic RDL và trước dialog.
5. Microsoft mô tả `ProvideObjectAttribute` là cơ chế để VSPackage công bố một managed object có thể được tạo từ `ILocalRegistry`, đồng thời yêu cầu dùng cơ chế này thay cho đăng ký COM global. Custom registration trước đã cố mô phỏng COM/RegAsm, thêm `RuntimeVersion`, managed category, versioned `InprocServer32` và ProgID mapping nhưng không tạo được object trong đường gọi legacy `.vsz` của SSRS.
6. Sửa triệt để ở vòng này là bỏ toàn bộ CLSID/ProgID registration tự viết. `DevKitPackage` gắn `[ProvideObject(typeof(ReportItemWizard), RegisterUsing = RegistrationMethod.CodeBase)]`. SDK sinh đúng một key CLSID với `InprocServer32`, `Class`, `CodeBase` và `ThreadingModel`; `.vsz` gọi trực tiếp `{D9C4B6D7-59A6-4B1F-9D93-6BBF0E0F1D18}` nên không còn phụ thuộc ProgID mapping.

Sau build, kiểm tra độc lập bằng Windows PowerShell/.NET Framework x64 đã tạo được `ReportItemWizard`, xác nhận class `ComVisible`, GUID đúng và object implement `EnvDTE.IDTWizard`. User sau đó đã xác nhận runtime trong SSRS hoạt động end-to-end, gồm add report và thay placeholder.

Icon của entry `.vsz` hiện dùng sidecar `DevKitReport.ico` cùng thư mục catalog legacy. Đây là convention mà SSRS dùng cho các wizard `DataSource.vsz`/`DataSet.vsz`; các field icon resource của `.vsdir` vẫn để `0` vì icon không nằm trong DLL satellite của Microsoft.

### 6.2. Registry/pkgdef cần sinh

Nên tạo một custom `RegistrationAttribute` trong VSIX thay vì sửa file `.pkgdef` generated bằng tay. Attribute phải tạo/xóa key tương đương:

```text
[$RootKey$\Projects\{F14B399A-7131-4C87-9E4B-1186C45EF12D}\AddItemTemplates\TemplateDirs\{525190A4-9C61-4AA5-8319-7C5FB75DAE58}\1]
@="DynamicsCrm.DevKit"
"SortPriority"=dword:00000001
"TemplatesDir"="$PackageFolder$\ItemTemplates\CSharp\DynamicsCrm.DevKit\1033\ReportProject"
```

Trong đó `{525190A4-9C61-4AA5-8319-7C5FB75DAE58}` là package GUID hiện tại của DevKit.

Lưu ý quan trọng:

- Chuỗi default hiện dùng là `DynamicsCrm.DevKit` theo phản hồi của user; category này chỉ chứa một tile report của DevKit.
- Không đăng ký đè `ItemTemplatesDir` của SSRS.
- Không dùng package GUID của Microsoft cho ownership của DevKit.
- `TemplatesDir` phải trỏ tới directory thực tế trong VSIX đã cài, không đoán từ source tree.
- Sau build phải unzip VSIX và đối chiếu đường dẫn; sau install phải đối chiếu generated `DynamicsCrm.DevKit.pkgdef`.

Custom `RegistrationAttribute` chỉ còn trách nhiệm tạo/xóa `Projects\{F14B...}\AddItemTemplates\TemplateDirs`. Registration của wizard thuộc `ProvideObjectAttribute` chính thức, gắn riêng trên `DevKitPackage`; không trộn hai ownership này.

Pkgdef mong đợi cho wizard:

```text
[$RootKey$\CLSID\{d9c4b6d7-59a6-4b1f-9d93-6bbf0e0f1d18}]
@="DynamicsCrm.DevKit.Wizard.ItemTemplates.ReportItemWizard"
"InprocServer32"="$WinDir$\SYSTEM32\MSCOREE.DLL"
"Class"="DynamicsCrm.DevKit.Wizard.ItemTemplates.ReportItemWizard"
"CodeBase"="$PackageFolder$\DynamicsCrm.DevKit.dll"
"ThreadingModel"="Both"
```

### 6.3. Hai layout triển khai theo thứ tự phản hồi

#### A. Modern `.vstemplate` + `IWizard` — đã thử và đã xóa

Vòng đầu từng có `18.ReportItemTemplate.csproj`, `DevKitReportItemTemplate.vstemplate`, `Report.rdl`, `icon.png`, `Properties/AssemblyInfo.cs` và `Wizard.ItemTemplates.Report`. Runtime cho thấy SSRS enumerate payload thành file thô; sau khi chuyển sang legacy, archive modern lại làm tile `DevKit Report` xuất hiện sai trong C# Add New Item.

Kết luận cuối cùng: không giữ bất kỳ project, manifest asset, project reference, `.vstemplate`, payload RDL/icon hoặc `IWizard` class nào của đường modern. Folder số 18 chứa trực tiếp ba file catalog legacy. Target gom C# archive còn `Exclude` folder 18 để chống stale build output.

#### B. Legacy `.vsdir` + `.vsz` + `IDTWizard` — đang dùng

SSRS 4.0.0 dùng trực tiếp `.vsdir`, do đó folder source `18.ReportItemTemplate` hiện chỉ có:

```text
DevKitReportItems.vsdir
DevKitReport.vsz
DevKitReport.ico
```

Source được làm phẳng theo yêu cầu tổ chức repository. Khi đóng gói, ba file này vẫn được đặt riêng dưới `ItemTemplates/CSharp/DynamicsCrm.DevKit/1033/ReportProject` trong VSIX. Thư mục output riêng là cần thiết để catalog `.rptproj` không quét lẫn 16 archive item template C# nằm ở cấp `1033`; registration `TemplatesDir` vì vậy vẫn trỏ tới `...\1033\ReportProject`.

`.vsdir` cần một dòng tương đương:

```text
DevKitReport.vsz|{525190A4-9C61-4AA5-8319-7C5FB75DAE58}|DevKit Report|270|Creates a Dynamics 365 report from the selected Dataverse entity.|0|0|0|Report.rdl
```

Cú pháp resource/name/icon thực tế phải được kiểm tra theo schema `.vsdir`; không sao chép resource IDs `#205/#206` của Microsoft vì chúng thuộc satellite DLL của package Microsoft.

`.vsz` gọi trực tiếp CLSID `{D9C4B6D7-59A6-4B1F-9D93-6BBF0E0F1D18}` của COM-visible class `DynamicsCrm.DevKit.Wizard.ItemTemplates.ReportItemWizard` implement `EnvDTE.IDTWizard`, không phải `Microsoft.VisualStudio.TemplateWizard.IWizard`. Không dùng ProgID vì `ProvideObjectAttribute` công bố object theo CLSID trong Visual Studio local registry. Adapter nhận context Add New Item, lấy `ProjectItems` và `ItemName`, mở cùng `FormItem(ItemType.Report)`, gọi builder, ghi file, rồi add/open item.

Hai file catalog legacy `.vsz` và `.vsdir` được giữ ở ASCII/CRLF giống file native của SSRS 4.0.0. Nội dung `.vsz` chỉ có header `VSWIZARD 7.0` và dòng `Wizard={CLSID}`; không thêm parameter hoặc XML payload.

Đây là compatibility adapter, không phải nơi chứa business logic; `IDTWizard` gọi `ReportTemplateBuilder` dùng chung.

Đăng ký CLSID adapter bằng `[ProvideObject(..., RegisterUsing = RegistrationMethod.CodeBase)]` trên `DevKitPackage`; không tự tạo CLSID/ProgID keys. Không dùng wizard engine hoặc CLSID của SSRS (`{66085AC0-...}`), vì đó là implementation private của extension Microsoft.

## 7. Wizard và dialog

### 7.1. Class đang dùng

`DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/ReportItemWizard.cs`

Flow `IDTWizard.Execute`:

1. Nhận `ProjectItems` ở context index 2 và `ItemName` ở index 4.
2. Hiện `FormItem(ItemType.Report)`; Cancel trả `wizardResultCancel` trước khi ghi file.
3. Lấy `EntityMetadata` đã chọn và đọc embedded `ReportTemplate.rdl`.
4. Gọi `ReportTemplateBuilder.BuildAsync` để tạo RDL hoàn chỉnh.
5. Normalize tên từ ô Name thành đúng một extension `.rdl` và resolve đúng folder của selected container.
6. Kiểm tra duplicate, ghi file, gọi `ProjectItems.AddFromFile`, mở Report Designer.
7. Nếu Add/Open thất bại, xóa file vừa tạo và trả failure; không chạm file có trước.

Không còn `Wizard.ItemTemplates.Report : IWizard`; class đó thuộc payload modern đã bị xóa.

### 7.2. Thay đổi FormItem

Thêm `Report` ở cuối `ItemType` trong `DynamicsCrm.DevKit.Shared/Enum.cs` để không làm xê dịch numeric values cũ.

Trong `FormItem`:

- title: `DevKit Report`;
- giữ connection controls;
- load entity metadata giống Late Bound;
- label/help text nói rõ entity sẽ dùng cho FetchXML và CRM prefilter;
- OK chỉ enabled khi connection hợp lệ và đã chọn entity;
- expose selected `EntityMetadata` hoặc `XrmEntity`, tránh wizard lookup lại bằng string nếu có thể.

Không thêm report-name textbox thứ hai vào FormItem. Tên report đã có ở ô Name của dialog Add New Item chuẩn.

## 8. `ReportTemplateBuilder`: dữ liệu phải thay

Đã tạo pure helper tại:

`DynamicsCrm.DevKit.Vsix/Lib/ReportTemplateBuilder.cs`

Helper không phụ thuộc WPF hay DTE; phần adapter async nhận `ServiceClient` để đọc language/org context và chuyển sang DTO context:

```text
ReportTemplateContext
  EnvironmentBaseUrl
  OrganizationUniqueName
  LanguageCode
  CultureName
  EntityLogicalName
  EntitySchemaName
  EntityDisplayCollectionName
  PrimaryIdAttribute
  PrimaryNameAttribute (nullable)
```

### 8.1. Mapping môi trường

| Node RDL | Giá trị mới |
|---|---|
| `DataSource/ConnectionProperties/ConnectString` | `{EnvironmentBaseUrl}/;{OrganizationUniqueName}` |
| report parameter `CRM_URL` default | `EnvironmentBaseUrl` |
| report parameter `CRM_UILanguageId` default | organization language code, fallback 1033 |
| `Report/Language` | culture name tương ứng language code, fallback `en-US` |
| `DataSourceID` | GUID mới cho mỗi report, định dạng D để tránh clone designer identity |

Base URL phải là organization URL không chứa `.api.` và không có trailing slash, theo helper/behavior hiện có của DevKit.

Implementation AI phải xác minh property lấy organization unique name trên version `Microsoft.PowerPlatform.Dataverse.Client` đang reference. Không hard-code organization name từ URL.

### 8.2. Mapping entity

RDL mẫu hiện hard-code `account`/`Account` tại dataset, FetchXML, fields, report parameter và custom report filter.

Đề xuất output:

| Thành phần | Giá trị |
|---|---|
| Dataset name | `EntitySchemaName`, đã sanitize thành XML/RDL identifier hợp lệ nếu cần |
| QueryParameter name | `CRM_Filtered{EntitySchemaName}` |
| Fetch entity `name` | `EntityLogicalName` |
| Fetch prefilter parameter | cùng QueryParameter name |
| Fetch fields | primary-name nếu có, và primary-id; không duplicate |
| RDL Fields | tên/alias của hai attributes trên, type `System.String` cho starter template |
| ReportParameter name | cùng QueryParameter name |
| ReportParameter prompt | localized entity display collection name, fallback SchemaName |
| Default prefilter FetchXML | selected entity + primary-id condition `not-null` |
| Layout expression | tham chiếu parameter name mới |
| `CustomProperties/CustomProperty[Name=Custom]/Value` | inner MSCRM ReportFilter cập nhật entity, parameter, display name và primary-id |

Nếu entity không có `PrimaryNameAttribute`, chỉ tạo primary-id field và tablix cell tương ứng phải tham chiếu field tồn tại. Không để expression `Fields!name.Value` còn sót lại.

### 8.3. Automatic prefilter contract

FetchXML chính phải giữ:

```xml
<entity name="logicalname"
        enableprefiltering="1"
        prefilterparametername="CRM_FilteredSchemaName">
```

Và phải có đồng bộ:

- `QueryParameter Name="CRM_FilteredSchemaName"`;
- `ReportParameter Name="CRM_FilteredSchemaName"`;
- layout expression tham chiếu parameter đó;
- custom MSCRM ReportFilter cùng `paramname`.

Nếu rename một trong các artifact nhưng không rename các artifact còn lại, report sẽ mở được nhưng prefilter Dynamics sẽ hỏng.

### 8.4. Transform XML an toàn

Không dùng global `string.Replace("account", ...)` hoặc `Replace("name", ...)`. `name` đặc biệt nguy hiểm vì xuất hiện trong tên element/attribute và text không liên quan.

Thuật toán:

1. `XDocument.Parse(template, LoadOptions.PreserveWhitespace)`.
2. Lấy namespace RDL từ `document.Root.Name.Namespace`; không hard-code version namespace nếu không cần.
3. Tìm đúng element theo local structure/name attributes.
4. Parse `CommandText` FetchXML thành một `XDocument` riêng, sửa entity/attribute/prefilter, serialize trở lại.
5. Parse default FetchXML của report parameter tương tự.
6. Giá trị `CustomProperties/.../Value` đang chứa XML encode nhiều lớp; decode/parse từng lớp, sửa `ReportEntity`, rồi encode/serialize đúng tầng. Không regex trực tiếp.
7. Validate tất cả required nodes; nếu thiếu/nhân đôi thì fail với thông báo rõ, không tạo RDL nửa đúng.
8. Parse lại output và chạy invariant assertions trước khi trả về.

Nên tách thành các method nhỏ để logic dễ đọc và dễ kiểm tra:

- `SetEnvironmentValues`
- `ReplaceDataset`
- `ReplaceAutomaticPrefilterArtifacts`
- `ReplaceCustomReportFilter`
- `ValidateResult`

## 9. Quản lý tên file và transaction

### 9.1. Tên file

- Default trong Add New Item: `Report.rdl` và để Visual Studio tự tăng `Report1.rdl`, `Report2.rdl` như built-in.
- User nhập gì ở ô Name thì giữ tên đó, sau khi project system normalize/validate.
- Chỉ chấp nhận extension `.rdl`; không sinh `.rdl.rdl`.
- Không dùng SchemaName làm file name ngầm định sau khi dialog đã hiển thị Name.

### 9.2. Không overwrite và rollback

- Trước khi generate, tính absolute target path dưới selected `ProjectItems` container.
- Nếu file đã tồn tại, legacy adapter trả failure và tuyệt đối không overwrite.
- Nếu builder/connection/metadata lỗi, không ghi file.
- Legacy adapter validate metadata/builder trước khi ghi. Sau khi xác nhận target chưa tồn tại, adapter ghi file rồi gọi `ProjectItems.AddFromFile`; nếu Add/Open thất bại, chỉ xóa file vừa tạo, không xóa file có trước.
- Cancel ở FormItem phải trả kết quả cancel cho Add New Item, không tạo project entry rỗng.

## 10. Danh sách file của implementation cuối

### Code và wiring

- `DynamicsCrm.DevKit.Vsix/Lib/Forms/FormItem.xaml.cs` — thêm Report mode
- `DynamicsCrm.DevKit.Shared/Enum.cs` — thêm `ItemType.Report` cuối enum
- `DynamicsCrm.DevKit.Vsix/Lib/ReportTemplateBuilder.cs`
- `DynamicsCrm.DevKit.Vsix/DevKitPackage.cs` — gắn registration attribute
- `DynamicsCrm.DevKit.Vsix/Registration/ReportProjectItemTemplateRegistrationAttribute.cs`
- `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/ReportItemWizard.cs`
- `DynamicsCrm.DevKit.Vsix/DynamicsCrm.DevKit.Vsix.csproj` — include trực tiếp legacy assets và exclude archive folder 18
- `DynamicsCrm.DevKit.Scripts/Release-DynamicsCrm-DevKit.ps1` — expected 16 C# item templates + ba legacy report files

### Compatibility path legacy đã triển khai

- `ItemTemplates/CSharp/18.ReportItemTemplate/DevKitReportItems.vsdir`
- `ItemTemplates/CSharp/18.ReportItemTemplate/DevKitReport.vsz`
- `ItemTemplates/CSharp/18.ReportItemTemplate/DevKitReport.ico` — sidecar icon cho wizard entry
- COM-visible `IDTWizard` adapter `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/ReportItemWizard.cs`
- `[ProvideObject]` trên `DevKitPackage` để SDK sinh CLSID/CodeBase canonical cho `ILocalRegistry`; `.vsz` gọi thẳng CLSID

Các file đã xóa vì thuộc đường modern không dùng: `18.ReportItemTemplate.csproj`, `DevKitReportItemTemplate.vstemplate`, payload `Report.rdl`, `icon.png`, `Properties/AssemblyInfo.cs`, và `Wizard/ItemTemplates/Report.cs`. Project 18 cũng đã bị bỏ khỏi hai solution, VSIX project reference và VSIX manifest asset.

Không chỉnh bất kỳ file nào trong folder cài đặt SSRS của Visual Studio.

## 11. Xác minh và bàn giao

### 11.1. Việc AI triển khai phải làm

Build đúng workflow repository:

```powershell
$msbuild = "C:\Program Files\Microsoft Visual Studio\18\Professional\MSBuild\Current\Bin\MSBuild.exe"
& $msbuild "DynamicsCrm.DevKit.Vsix\DynamicsCrm.DevKit.Vsix.csproj" /t:Build /p:Configuration=Debug /p:DeployExtension=false /v:m
```

Sau build:

- file `DynamicsCrm.DevKit.Vsix/bin/Debug/DynamicsCrm.DevKit.vsix` tồn tại;
- VSIX không chứa `DevKitReportItemTemplate.vstemplate`, payload RDL/icon modern hoặc bất kỳ generic C# item-template archive nào từ folder 18;
- VSIX chứa đúng ba legacy assets dưới `.../1033/ReportProject` và wizard assembly;
- tổng generic C# `.vstemplate` trong artifact vẫn là 16;
- generated pkgdef có key `Projects\{F14B...}\AddItemTemplates\TemplateDirs` category `DynamicsCrm.DevKit`, trỏ tới `...\1033\ReportProject` chứa `.vsdir` và `.vsz`;
- VSIX có CLSID `{D9C4B6D7-59A6-4B1F-9D93-6BBF0E0F1D18}` cho `ReportItemWizard`;
- generated pkgdef có đúng key `ProvideObject`: default class name, `InprocServer32`, `Class`, `CodeBase`, `ThreadingModel`; không còn managed COM category, `RuntimeVersion`, versioned `InprocServer32` hoặc ProgID mapping tự tạo;
- `.vsz` trong artifact dùng `Wizard={D9C4B6D7-59A6-4B1F-9D93-6BBF0E0F1D18}`;
- class wizard tạo được trên .NET Framework x64, `ComVisible=true`, GUID đúng và implement `EnvDTE.IDTWizard`;
- source version vẫn `4.44.44.44`;
- không có timestamp placeholder bị thay vĩnh viễn.

Nếu workflow build thành công và các artifact trên tồn tại, AI dừng tại đây, báo rõ file VSIX được tạo ở đâu và yêu cầu user test lại trong Visual Studio. AI không tự coi chức năng runtime đã đạt chỉ dựa trên kết quả build.

### 11.2. Checklist yêu cầu user test lại

Sau khi AI bàn giao build thành công, đề nghị user cài/test trên Visual Studio 2026 có Microsoft Reporting Services Projects 4.0.0:

1. Mở một C# project, Add New Item và xác nhận không còn tile/category `DevKit Report` do report payload tạo ra.
2. Mở `DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.Report.2/Dev.AllInOne.Report.2.rptproj` hoặc report project tương đương.
3. Right-click project -> Add -> New Item.
4. Xác nhận category bên trái là `DynamicsCrm.DevKit`.
5. Xác nhận category này chỉ có đúng một tile `DevKit Report`, tile có icon DevKit; không còn category phụ `Report Project` do DevKit và không còn các item thô `DevKitReportItemTemplate`, `icon`, `Report`.
6. Chọn tile, đặt Name `MyContactReport.rdl`, bấm Add.
7. Xác nhận FormItem mở và entity picker load.
8. Cancel: không có file và không có `<Report Include=...>` mới trong `.rptproj`.
9. Chạy lại, chọn Contact: đúng một file `MyContactReport.rdl` được tạo.
10. `.rptproj` chứa item report tương ứng; Report Designer mở file.
11. Mở XML và xác nhận declaration UTF-8, URL, org unique name, language, entity logical name, primary fields, QueryParameter, ReportParameter và custom MSCRM filter đúng.
12. Build/deploy report hoặc ít nhất Preview/Validate qua designer để phát hiện schema/expression lỗi.
13. Thử từ project node và node `Reports`; item phải vào đúng container.
14. Thử trùng tên; không overwrite file cũ.

User phản hồi kết quả cho AI. Nếu tile không xuất hiện hoặc wizard không chạy, AI tiếp tục vòng sửa sau dựa trên compatibility path ở mục 6; không tự đổi yêu cầu thành command-only.

### 11.3. Phạm vi compatibility cần user xác nhận khi phù hợp

- Visual Studio 2026 + Reporting Services Projects 4.0.0: bắt buộc.
- Nếu VSIX còn hỗ trợ VS 2022/Reporting Services Projects version khác: user kiểm tra lại catalog/tile vì layout và project-system implementation thuộc extension ngoài DevKit.
- Trường hợp extension Reporting Services không cài: DevKit VSIX vẫn load; registration key được phép tồn tại nhưng không được gây package-load failure.

## 12. Điều kiện bàn giao và xác nhận

AI triển khai được phép kết thúc lượt code và bàn giao khi:

- folder legacy report số 18 cùng toàn bộ wiring đã được triển khai, không có MSBuild project 18;
- chạy đúng `DynamicsCrm.DevKit.AI/workflows/build-vsix.md` thành công;
- file VSIX output tồn tại;
- source version vẫn `4.44.44.44` và không có timestamp placeholder bị thay vĩnh viễn;
- AI báo rõ vị trí VSIX và yêu cầu user test lại theo mục 11.2.

Các tiêu chí chức năng dưới đây do user xác nhận sau khi nhận build:

- `DevKit Report` là tile duy nhất trong category `DynamicsCrm.DevKit` của Add New Item `.rptproj`;
- tile chỉ được thấy khi Add New Item của `.rptproj`, không lộ vào C# project;
- bấm Add mở DevKit entity dialog;
- Name của Visual Studio quyết định tên `.rdl`;
- entity được chọn quyết định toàn bộ dataset/prefilter metadata;
- environment hiện tại quyết định connection URL, org unique name, CRM URL và language;
- RDL được tạo từ embedded `Resources/ReportTemplate.rdl`, không copy từ disk source path lúc runtime;
- XML transform không dùng global string replace;
- Cancel/error/duplicate không để lại artifact;
- Visual Studio Report Designer mở được file;
- VSIX giữ 16 generic C# item templates và kiểm tra riêng ba file legacy của DevKit Report;
- không chỉnh extension SSRS trong `Program Files`.

## 13. Rủi ro và quyết định không được bỏ qua

| Rủi ro | Mức | Cách xử lý |
|---|---:|---|
| `.rptproj` không enumerate modern `.vstemplate` từ additional TemplateDirs | Cao | Đã quan sát lỗi; dùng `.vsdir/.vsz/IDTWizard` và thư mục catalog riêng |
| Category bị tách thành node thứ hai cũng tên Report Project | Cao | Đã đổi category registration sang `DynamicsCrm.DevKit`, không đăng ký thêm `Report Project` |
| Payload modern làm tile `DevKit Report` lộ sang C# project | Cao | Đã xóa project/manifest/archive/class modern; target packaging còn exclude folder 18 để chống stale output |
| `$fileinputname$` tạo double extension | Trung bình | Normalize extension trong code và yêu cầu user xác nhận tên file thực tế |
| RDL inner XML encode sai | Cao | Parse/serialize từng tầng và validate output trước khi ghi file |
| Prefilter artifacts lệch tên | Cao | Một model tên duy nhất + invariant validation |
| FormItem chỉ expose string và metadata lookup sai | Trung bình | Expose selected metadata object hoặc stable logical/schema identity |
| Reporting Services Projects update đổi layout/private behavior | Trung bình | Chỉ dựa vào public registry/AddItem mechanisms; yêu cầu user xác nhận trên version đang dùng |
| `.vsz` không tạo được managed wizard và chỉ hiện `Invalid at the top level of the document` | Cao | Không tự mô phỏng RegAsm/ProgID; dùng `ProvideObject` + `RegistrationMethod.CodeBase`, gọi trực tiếp CLSID trong `.vsz`, kiểm tra generated pkgdef và construction contract |
| Sửa Program Files bị update ghi đè | Cao | Tuyệt đối không dùng cách này |

## 14. Những cách đã loại bỏ

### Chỉ thêm item project 18 như C# template

Không đủ. Catalog của report project được chọn theo project GUID khi SSRS gọi Add New Item.

### Gắn command vào `IDG_VS_CTXT_PROJECT_ADD_ITEMS`

Có thể tạo command trong menu Add, nhưng không tạo tile trong hộp thoại Add New Item như ảnh. Chỉ hữu ích để chẩn đoán wizard/builder độc lập, không đạt Definition of Done.

### Copy `ReportTemplate.rdl` vào folder SSRS trong Program Files

Có thể làm thủ công bằng cách sửa `ReportProjectItems.vsdir`, nhưng không phù hợp VSIX sản phẩm: cần quyền cao, sở hữu file của extension khác và bị update ghi đè.

### Global text replace trong RDL

Không an toàn vì các chuỗi `account` và đặc biệt `name` xuất hiện ở nhiều semantic context; custom MSCRM filter còn là XML encode nhiều lớp.

## 15. Checklist bàn giao cho AI triển khai

1. Đọc `AGENTS.md` và workflow `DynamicsCrm.DevKit.AI/workflows/build-vsix.md` đầy đủ.
2. Kiểm tra dirty working tree và giữ nguyên thay đổi không liên quan.
3. Triển khai catalog legacy `.vsdir/.vsz/IDTWizard` và `ReportTemplateBuilder` theo phản hồi runtime; không cần tự chạy UI/Experimental Instance.
4. Nối FormItem, cancellation và filename contract.
5. Bảo đảm không có project 18 trong solution/manifest; release validation giữ 16 C# items và kiểm tra legacy catalog riêng.
6. Chạy đúng `DynamicsCrm.DevKit.AI/workflows/build-vsix.md`; không dùng `dotnet build` cho VSIX.
7. Khi build thành công, kiểm tra version/timestamp và `git diff`, báo vị trí VSIX rồi yêu cầu user test lại theo mục 11.2.
8. User đã phản hồi layout modern không tạo đúng tile/wizard hook; vòng hiện tại dùng compatibility path legacy.
9. Không chuyển sang command-only dù user test vòng đầu thất bại.

## 16. Nguồn tham khảo

Nguồn Microsoft chính thức:

- [Registering Project and Item Templates](https://learn.microsoft.com/en-us/visualstudio/extensibility/internals/registering-project-and-item-templates?view=visualstudio)
- [Adding Items to the Add New Item Dialog Boxes](https://learn.microsoft.com/en-us/visualstudio/extensibility/internals/adding-items-to-the-add-new-item-dialog-boxes?view=visualstudio)
- [Contributing to the Add New Item Dialog Box](https://learn.microsoft.com/en-us/visualstudio/extensibility/internals/contributing-to-the-add-new-item-dialog-box?view=visualstudio)
- [RegistrationAttribute API](https://learn.microsoft.com/en-us/dotnet/api/microsoft.visualstudio.shell.registrationattribute?view=visualstudiosdk-2022)
- [`ProvideObjectAttribute` API](https://learn.microsoft.com/en-us/dotnet/api/microsoft.visualstudio.shell.provideobjectattribute?view=visualstudiosdk-2022)
- [Creating Project and Item Templates](https://learn.microsoft.com/en-us/visualstudio/extensibility/creating-custom-project-and-item-templates?view=visualstudio)
- [WizardExtension element and `IWizard`](https://learn.microsoft.com/en-us/visualstudio/extensibility/wizardextension-element-visual-studio-templates?view=visualstudio)
- [Template parameters](https://learn.microsoft.com/en-us/visualstudio/ide/template-parameters?view=visualstudio)
- [Multi-file item templates and `$fileinputname$`](https://learn.microsoft.com/en-us/visualstudio/ide/how-to-create-multi-file-item-templates?view=visualstudio)
- [Template Directory Description `.vsdir` files](https://learn.microsoft.com/en-us/visualstudio/extensibility/internals/template-directory-description-dot-vsdir-files?view=visualstudio)
- [Wizard `.vsz` files](https://learn.microsoft.com/en-us/visualstudio/extensibility/internals/wizard-dot-vsz-file?view=visualstudio)
- [`IDTWizard` interface](https://learn.microsoft.com/en-us/visualstudio/extensibility/internals/wizard-interface-idtwizard?view=visualstudio)
- [Context parameters for Add New Item](https://learn.microsoft.com/en-us/visualstudio/extensibility/internals/context-parameters?view=visualstudio)
- [Reporting Services in SSDT](https://learn.microsoft.com/en-us/sql/reporting-services/tools/reporting-services-in-sql-server-data-tools-ssdt?view=sql-server-ver17)
- [Add a report to a report project](https://learn.microsoft.com/en-us/sql/reporting-services/tools/add-a-new-or-existing-report-to-a-report-project-ssrs?view=sql-server-ver17)
- [Dynamics automatic prefiltering](https://learn.microsoft.com/en-us/dynamics365/customerengagement/on-premises/analytics/improve-report-performance-by-using-filters?view=op-9-1)
- [Microsoft Reporting Services Projects marketplace entry](https://marketplace.visualstudio.com/items?itemName=ProBITools.MicrosoftReportProjectsforVisualStudio2022)

Local evidence quan trọng nhất:

- `C:\Program Files\Microsoft Visual Studio\18\Professional\Common7\IDE\CommonExtensions\Microsoft\SSRS\ssdtrs.pkgdef`
- `C:\Program Files\Microsoft Visual Studio\18\Professional\Common7\IDE\CommonExtensions\Microsoft\SSRS\ProjectItems\ReportProject\ReportProjectItems.vsdir`
- decompile `Microsoft.ReportingServices.Designer.dll`, type `Microsoft.ReportDesigner.Project.ReportProjectManager`
- `DynamicsCrm.DevKit.Shared/Resources/ReportTemplate.rdl`
- `DynamicsCrm.DevKit.Vsix/Wizard/ItemTemplates/LateBound.cs`
- `DynamicsCrm.DevKit.Vsix/Lib/Forms/FormItem.xaml.cs`
- `DynamicsCrm.DevKit.Cli/Tasks/ManageReportTool.cs`
- `DynamicsCrm.DevKit.Vsix/Lib/ReportDatasetService.cs`

## 17. Trạng thái sau triển khai

Đã triển khai compatibility path legacy theo phản hồi runtime, sửa activation của wizard theo API chính thức và loại tile khỏi C# catalog:

- xóa hoàn toàn project/payload/class modern vì không còn được dùng và làm tile report lộ sang C# project;
- thêm `DevKitReportItems.vsdir` chỉ có một entry và `DevKitReport.vsz` trực tiếp trong folder source số 18;
- thêm COM-visible `ReportItemWizard` implement `IDTWizard`, dùng `FormItem(ItemType.Report)` và `ReportTemplateBuilder`;
- mở RDL bằng editor GUID của Report Designer (`{7651A702-06E5-11D1-8EBD-00A0C90F26EA}`) giống flow native của SSRS;
- sửa validation FetchXML trong `ReportTemplateBuilder` và giữ XML declaration khi serialize RDL;
- thêm sidecar `DevKitReport.ico` để tile không còn icon file mặc định;
- loại bỏ toàn bộ COM registration thủ công đã thất bại ở hai vòng runtime;
- gắn `[ProvideObject(typeof(ReportItemWizard), RegisterUsing = RegistrationMethod.CodeBase)]` trên `DevKitPackage` và đổi `.vsz` sang gọi thẳng CLSID;
- registration `Projects\{F14B399A-7131-4C87-9E4B-1186C45EF12D}\AddItemTemplates\TemplateDirs` dùng category `DynamicsCrm.DevKit` và path `...\1033\ReportProject`;
- bỏ project 18 khỏi hai solution, VSIX project reference và manifest asset; target archive exclude folder 18;
- release validation giữ 16 generic C# item templates và yêu cầu đủ ba file legacy report catalog;
- chạy thành công `DynamicsCrm.DevKit.AI/workflows/build-vsix.md`;
- VSIX output: `DynamicsCrm.DevKit.Vsix/bin/Debug/DynamicsCrm.DevKit.vsix`;
- artifact đã được kiểm tra có một `.vsdir`/`.vsz` report catalog, template 18, icon metadata và key CLSID canonical do `ProvideObject` sinh;
- output builder đã được kiểm tra bằng XML parser và `Microsoft.ReportingServices.RdlObjectModel.Serialization.RdlSerializer`.
- Windows PowerShell/.NET Framework x64 đã tạo thành công wizard class và xác nhận `ComVisible`, GUID, `IDTWizard` contract.
- build artifact vòng `ProvideObject` chứa đúng một catalog report (`.vsdir` + `.vsz` + `.ico`) và generated pkgdef canonical; không chạy unit test theo yêu cầu của user.
- `.vsz` và `.vsdir` trong source/artifact dùng line ending CRLF như catalog native của SSRS.
- user đã xác nhận `.rptproj` hoạt động end-to-end: add được report và placeholder được thay runtime.
- tổ chức source cuối: `ReportProjectItemTemplateRegistrationAttribute.cs` nằm trong `DynamicsCrm.DevKit.Vsix/Registration`; ba file catalog nằm trực tiếp trong `ItemTemplates/CSharp/18.ReportItemTemplate`, không còn subfolder source `ReportProject`.
- artifact sau khi tổ chức lại source: `DynamicsCrm.DevKit.Vsix/bin/Debug/DynamicsCrm.DevKit.vsix`, 11,792,569 bytes, SHA-256 `58BF654DE75DAC346E16E36A6970EBCBBF53D5E020B9C1C2D91D1EEF0BD11AB6`, assembly version `4.44.44.44`.
- kiểm tra artifact: `CSharpItemTemplateCount=16`, `ModernReportPayloadCount=0`, đủ `.vsdir/.vsz/.ico` legacy.
- kiểm tra assembly: modern `Wizard.ItemTemplates.Report` không còn; legacy `ReportItemWizard` vẫn tạo được và implement `EnvDTE.IDTWizard`.
- đã publish Wiki page `DevKit-Report-Item-Template`, thêm link vào `Item-Templates.md` và `Wiki-Map.md`, rồi sync submodule `DynamicsCrm.DevKit.Wiki` tới commit `ff7088f`.

User cần cài VSIX mới, đóng/mở lại Experimental Instance và xác nhận `DevKit Report` không còn xuất hiện trong Add New Item của C# project; đồng thời smoke-test lại `.rptproj` để bảo đảm legacy flow không regression. Không sửa file trong folder cài đặt SSRS.
