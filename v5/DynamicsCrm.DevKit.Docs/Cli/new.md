# devkit new / new-project / new-item

> Scaffold DynamicsCrm.DevKit project/item templates cross-platform (CLI port of the VSIX wizards).
> Version: 4.44.44.44 — this file is the detailed reference for both humans and AI agents.
> **Refactor 2026-10-28 (aP):** một lệnh `devkit new` gộp chung project+item là SAI (hai bộ args, không own được requirement) → tách thành **`devkit new-project`** + **`devkit new-item`**, mỗi lệnh có list riêng (`devkit new-project list` / `devkit new-item list`); **`devkit new` đã XOÁ** (script cũ → lỗi chỉ đường)

## Quick discovery (cho AI agent)

```bash
devkit new-project list             # 13 project templates + Ready column (yes = scaffold được ngay)
devkit new-item list                # 17 item templates + Ready column
devkit new-project list --plain     # plain text, machine-readable (AI/CI; hoặc set DEVKIT_NO_COLOR=1)
devkit new-project --help / devkit new-item --help   # flags + examples từng lệnh
```

Rule of thumb cho AI: **chỉ scaffold type có `Ready=yes`**; type khác báo "not implemented yet" (exit 1). Danh sách Ready thay đổi theo từng bản release — luôn đọc lại `devkit new-project list` / `devkit new-item list` thay vì memorize.

## Synopsis

```
devkit new-project --type Shared  --name Contoso.Shared --solution MySolution.slnx [--out DIR]
devkit new-project --type Console --name Contoso.Console --solution MySolution.slnx [--out DIR]
devkit new-item    --type LateBound --entity Account --project Contoso.Shared [--out DIR] ...
devkit new-item    --type Plugin --entity Account --message Update --stage PreOperation --name PreAccountUpdate --project Contoso.Server
devkit new-project list / devkit new-item list   # catalog per kind
```

Terminal tương tác thiếu giá trị (ngoài `--solution`/`--project` required) → wizard tự hỏi–đáp theo thứ tự dialog VSIX (vd Plugin: Entity → Message → Stage → Execution → Class → Template; KHÔNG hỏi order).
Shell không tương tác (AI/CI) thiếu flag → lỗi validation exit 1. Lệnh cũ `devkit new ...` → lỗi chỉ đường rõ ràng sang `new-project`/`new-item` (lệnh đã xoá).

## Options — devkit new-project

| Flag | Ý nghĩa |
|---|---|
| `--type` | Template id project — xem `devkit new-project list` (vd `Shared`, `Console`, `Server`…) |
| `--name` | Tên project (default suggestion `{SolutionName}.{Type}`) |
| `--solution` | Bắt buộc: file `.sln`/`.slnx` project được đăng ký vào (ruling aP 2026-10-28 — đảo ruling cũ opt-in). Thiếu → gate keeper báo MỘT lỗi liệt kê đủ; file không tồn tại → lỗi |
| `--out` | Thư mục đích (default: current directory) |

KHÔNG có `--force` trên new-project (ruling aP 2026-10-29): project templates là **create-once** — project tồn tại → **ERROR** ("--name 'X': project already exists"), không regenerate (khác new-item vẫn giữ idempotency + `--force`).

KHÔNG có `--offline` trên new-project (ruling aP 2026-10-29): connection là **optional như dialog VSIX** — prompt hiện lựa chọn **"(skip — configure later via the project .env)"** đứng đầu (khi `.env` không gợi ý AuthType); skip/bỏ qua → bake marker, file dùng project `.env` lúc runtime. NuGet lookup tự fallback version an toàn khi không gọi được nuget.org.

## Options — devkit new-item

| Flag | Ý nghĩa |
|---|---|
| `--type` | Template id item — xem `devkit new-item list` (vd `LateBound`, `JsForm`, `Plugin`…) |
| `--project` | Bắt buộc cho MỌI item templates (ruling aP 2026-10-28): tên project item scaffold vào; sai tên → lỗi; `--out` bỏ trống → output = thư mục project đó; namespace (`$rootnamespace$`) đọc từ file project đó (RootNamespace element / tên file) |
| `--name` | Class-dialog-report name |
| `--entity` | Entity schema name cho item templates theo entity (LateBound, JsForm…) |
| `--out` | Thư mục đích (default: thư mục `--project`) |
| `--force` | Ghi đè file user đã sửa (mặc định KHÔNG bao giờ đè) |

Các flag khác (`--message`, `--stage`, `--execution`, `--order`, `--template`, `--t4`, `--datasource`, `--language`, `--namespace`) dành cho item templates cụ thể — xem help từng loại.

**Gate keeper (ruling aP 2026-10-29):** không dùng attribute (Spectre.Console.Cli 0.55 không có `[Required]` — compile-proved), không rải text REQUIRED trong help. Mọi required args được kiểm MỘT LẦN ở đầu mỗi Task: non-TTY thiếu → **MỘT lỗi liệt kê đủ** `required arguments missing: --type <template-id>, --project <project-name>, ...` (AI/human đọc 1 lần sửa liền); TTY thiếu → wizard tự hỏi từng bước như dialog VSIX. Bộ required: new-project = `--type, --name, --solution`; new-item = `--type, --project` + theo type (Plugin: `--entity, --message, --stage, --name`; CustomAction: `--entity <schema-name|none>, --message <custom-action>, --stage, --name`; CustomApi: `--entity <schema-name|none>, --message <custom-api>, --name` — KHÔNG `--stage`/`--execution` vì dialog ẩn 2 combo đó; Workflow: `--name` — dialog ẨN HẾT 4 combo org, class name là input duy nhất; LateBound/JsForm/JsWebApi: `--entity`).

## Hiện trạng templates (2026-10-29)

- **Project `Shared` (Ready)**: scaffold `.shproj` + 11 payload files vào `{--out}/{Name}/`, add vào `.sln`/`.slnx` đúng format VS **khi có `--solution`**, tạo `DynamicsCrm.DevKit.Cli.json` + `DynamicsCrm.DevKit.json` (connections store cho VSIX, connection sinh từ `.env`) ở `--out`. Windows sinh `Entities/generator.bat`, macOS/Linux sinh `Entities/generator.sh` (executable).
- **Project `Console` (Ready)**: scaffold console **net462** (7 payload files: csproj SDK-style, `App.cs`, `App.config`, `Program.cs`, `Lib/Helper.cs`, `Lib/TracingServiceFake.cs`, `README.md`) + add csproj vào `.sln`/`.slnx` kèm consumer line `SharedItemsImports = 5` của Shared project **khi có `--solution`**. **`App.cs`/`App.config` đổi theo connection type** (`Interactive`, `ClientSecret`, `OAuth`, `AD` — net462 không hỗ trợ `DeviceCode`/`FromPac`, dùng Console Core): interactive terminal hỏi AuthType + URL/ClientId/Secret/Username/Password (default gợi ý từ `.env`) — **chọn "(skip)" để bỏ qua** (giống bấm OK chưa connect trong dialog VSIX: bake marker, file dùng project `.env` lúc runtime); non-interactive tự bake marker `.env` (`DEVKIT_AUTH_TYPE`) hoặc placeholder `ClientSecret`.
- **Project `ConsoleCore` (Ready)**: scaffold console **net10.0** đa nền tảng (7 payload files: csproj SDK-style, `App.cs`, `AppSettings.json`, `Program.cs`, `Lib/Helper.cs`, `Lib/TracingServiceFake.cs`, `README.md`) + add csproj vào `.sln`/`.slnx` kèm consumer line `SharedItemsImports = 5` **khi có `--solution`**. **`App.cs`/`AppSettings.json` đổi theo connection type** (`Interactive`, `DeviceCode`, `ClientSecret`, `FromPac`, `OAuth` — net10 không hỗ trợ `AD` vì WCF/ServiceModel, dùng Console net462). Project sinh ra là template duy nhất **`dotnet build` được thật trên Linux/macOS**. Prompt/fallback connection giống Console.
- **Project `Server` (Ready)**: scaffold plugin assembly **net462** (csproj SDK-style `SignAssembly` + `AssemblyOriginatorKeyFile`, `README.md`, 2 deploy scripts) + **sinh strong-name key mới `{Name}.snk`** (RSA 2048, cross-platform — không dùng mẫu) + add csproj vào `.sln`/`.slnx` kèm consumer line `SharedItemsImports = 5` **khi có `--solution`**. **Bắt buộc có Shared project trước** (thiếu → lỗi kèm hint scaffold Shared; interactive sẽ hỏi scaffold luôn); project là create-once — tồn tại → lỗi (aP 2026-10-29), không rerun. Deploy scripts: Windows `deploy.debug(.only).bat`, macOS/Linux `deploy.debug(.only).sh` (executable) — nhúng CLI connection args khi connection explicit, rỗng khi dựa `.env`. Hỗ trợ đủ 6 AuthType (payload không đổi theo connection type).
- **Project `Package` (Ready)**: scaffold Package Deployer **net462** (csproj SDK-style với `Microsoft.PowerApps.MSBuild.Plugin` build definitions + `GeneratePackageOnBuild`, `README.md`, 2 deploy scripts của bộ plugin — package deploy qua `devkit server`) + add csproj vào `.sln`/`.slnx` **khi có `--solution`**. **Không sinh `.snk` và không yêu cầu Shared** (csproj import `.projitems` với `Condition Exists` — consumer line chỉ thêm khi workspace có Shared). Deploy scripts/platform + fallback connection giống `Server`; hỗ trợ đủ 6 AuthType.
- **Project `WebResource` (Ready)**: scaffold web resource **JavaScript net462** (csproj SDK-style với duy nhất `DynamicsCrm.DevKit.Analyzers`, `README.md`, `deploy.debug.bat/.sh`, `package.json`, `jsconfig.json`, `entities/devkit.d.ts` (giữ BOM như payload), `lib/devkit.js`, `entities/generator.form.bat/.sh`, `entities/generator.webapi.bat/.sh` — nội dung js/ts/json lấy từ resource dùng chung với VSIX) + tạo sẵn 7 thư mục rỗng của vstemplate (`lib`, `entities`, `images`, `resources`, `html`, `css`, `js`) + add csproj vào `.sln`/`.slnx` **khi có `--solution`** (entry thường — csproj không import `.projitems`, không có consumer line). **Không sinh `.snk` và không yêu cầu Shared.** Scripts: Windows bat / macOS/Linux sh (executable), `deploy.debug` chạy `devkit webresource` profile `DEBUG`, generators chạy `devkit generator` profile `JS-FORM`/`JS-WEBAPI`; nhúng CLI connection args khi connection explicit, rỗng khi dựa `.env`. Hỗ trợ đủ 6 AuthType.
- **Project `SharedTest` (Ready)**: scaffold shared test project **.shproj** (12 payload files: `.shproj`/`.projitems` pair + `README.md`, 7 helper `Lib/*.cs` (Guids, Extension, FakerHelper/Bogus, TestHelper, TestTracingService, PluginContextBuilder, TestDataLoader), `FakeXrmEasyTestBase.cs` (root, `using {Solution}.ProxyTypes`), `Executor/CalculateRollupFieldRequestExecutor.cs`) — hạ tầng test dùng chung cho Test project (P.9). Add vào `.sln`/`.slnx` đúng format VS (entry shproj + `SharedItemsImports = 13`) **khi có `--solution`**; tạo `DynamicsCrm.DevKit.Cli.json` + `DynamicsCrm.DevKit.json` ở `--out` (wizard gọi AddDynamicsCrmDevKitCliJsonAsync như Shared). **Không sinh `.snk`, không yêu cầu Shared, không hỏi connection** (payload không có file nào phụ thuộc connection).
- **Project `ProxyTypes` (Ready)**: scaffold early-bound types project **net462** (csproj SDK-style `PlatformTarget x64` với duy nhất `Microsoft.CrmSdk.CoreAssemblies`, `README.md`, `run.bat`/`run.sh`, 2 placeholder `GeneratedCode.cs` + `ProxyTypesAssembly.cs` giữ BOM như payload) + add csproj vào `.sln`/`.slnx` **khi có `--solution`** (entry thường — csproj không import `.projitems`, không có consumer line). **Không sinh `.snk`, không yêu cầu Shared, không tạo Cli.json/DevKit.json** (wizard ProxyTypes không gọi AddDynamicsCrmDevKitCliJsonAsync). Runner script: Windows `run.bat` / macOS/Linux `run.sh` (executable, lean — aP lean hóa toàn bộ bat resources 2026-10-25, không còn block check `where devkit` ở bất kỳ bat nào) — chạy `devkit modelbuilder --json "DynamicsCrm.DevKit.Cli.json" --profile "ALL"`; nhúng CLI connection args khi connection explicit, rỗng khi dựa `.env`. Hỗ trợ đủ 6 AuthType. Sau scaffold CLI in hint chạy `run.bat`/`run.sh` hoặc `devkit modelbuilder` để sinh types.
- **Project `Test` (Ready)**: scaffold unit test project **net462** MSTest + FakeXrmEasy (đúng 2 payload files của vstemplate: csproj SDK-style `PlatformTarget x64` `IsTestProject` + `README.md` — không script, không `.snk`, không Cli.json/DevKit.json, không hỏi connection) + add csproj vào `.sln`/`.slnx` **khi có `--solution`** kèm **2 consumer line `SharedItemsImports = 5`** (một cho **Shared**, một cho **SharedTest** — csproj import CẢ HAI `.projitems`, VS ghi 1 dòng consumer cho mỗi import, cùng GUID entry Test). **3 điều kiện blocking theo đúng thứ tự wizard gốc**: thiếu Shared → lỗi kèm hint scaffold Shared; thiếu ProxyTypes (csproj `ProjectReference`) → lỗi kèm hint; thiếu SharedTest → lỗi kèm hint — mỗi lỗi abort trước khi tạo file nào. csproj trỏ `ProjectReference ..\{Sol}.ProxyTypes\` + import `..\{Sol}.Shared\.projitems` + `..\{Sol}.Shared.Test\.projitems` theo token workspace; FakeXrmEasy.* giữ floating `"2.*"` như VSIX emit. Project Test sinh ra **`dotnet build` được ngay** (import Shared .projitems đưa `DevKitJson`/`CrmPluginRegistrationAttribute`/`StageEnum` vào cùng assembly — fix bug aP report 2026-10-25: trước đây template chỉ import SharedTest).
- **Project `WebResourceTs` (Ready)**: scaffold web resource **TypeScript net462** (csproj SDK-style với duy nhất `DynamicsCrm.DevKit.Analyzers` + `TypeScriptCompileBlocked`, `README.md` + `.eslintrc.json` copy verbatim (ReplaceParameters=false), `package.json` + `tsconfig.json`, `build.js`, `lib/devkit.ts` + `lib/devkit.d.ts`, 2 deploy scripts `deploy.debug`/`deploy.release`, 2 generators `entities/generator.form`/`generator.webapi` — build.js/devkit.ts/devkit.d.ts lấy từ resource `ts.*` dùng chung với VSIX) + tạo sẵn 7 thư mục rỗng của vstemplate (`lib`, `entities`, `build`, `images`, `resources`, `html`, `css`) + add csproj vào `.sln`/`.slnx` **khi có `--solution`** (entry thường — csproj không import `.projitems`, không có consumer line). **Không sinh `.snk` và không yêu cầu Shared.** Scripts: Windows bat / macOS/Linux sh (executable), `deploy.debug`/`deploy.release` build TS qua npm rồi chạy `devkit webresource` profile `DEBUGTS` (profile TS duy nhất của Cli.json — bat release gốc VSIX cũng dùng DEBUGTS), generators chạy `devkit generator` profile `TS-FORM`/`TS-WEBAPI`; nhúng CLI connection args khi connection explicit, rỗng khi dựa `.env`. Hỗ trợ đủ 6 AuthType. Sau scaffold CLI in hint chạy `npm install` trước khi build (deploy scripts tự `npm install` khi thiếu `node_modules`).
- **Project `UiTest` (Ready)**: scaffold UI automation test project **net462** EasyRepro (đúng 6 payload files của vstemplate: csproj SDK-style `IsTestProject`, `README.md` copy verbatim (ReplaceParameters=false), `TestSettings.cs`, `{Name}.runsettings` (retarget từ `UiTest.runsettings` qua token trong target name), `App.cs`, `App.config` — không folder rỗng, không script, không `.snk`, không Cli.json/DevKit.json) + add csproj vào `.sln`/`.slnx` **khi có `--solution`** (entry thường — csproj không import `.projitems`, không có consumer line). **Chỉ nhận connection `OAuth`** (EasyRepro login qua browser bằng username/password — connection khác → lỗi như FormProject, interactive prompt chỉ hiện OAuth); connection values (`Url`/`UserName`/`Password` giải mã) bake vào `App.config` — marker `.env`/không connection → placeholder rỗng (App.cs đọc `DEVKIT_URL/USERNAME/PASSWORD` lúc runtime). Golden: project sinh ra `dotnet build` được (Selenium 4.51.0 + UIAutomation 9.2.21084.148 + MSTest 4.5.1 + ChromeDriver 156.0.8078.4700 từ NuGet cache).
- **Project `SolutionPackager` (Ready)**: scaffold solution packager project **net462** (đúng 5 payload files của vstemplate: csproj SDK-style x64 **không PackageReference nào**, `README.md` + `mapping.xml` copy verbatim (ReplaceParameters=false — mapping.xml giữ BOM của payload), `Extract-Both`/`Pack-Both` scripts gọi `devkit solution` qua profile `Extract-Both`/`Pack-Both` của `DynamicsCrm.DevKit.Cli.json` — extract/pack cả managed lẫn unmanaged) + add csproj vào `.sln`/`.slnx` **khi có `--solution`** (entry thường — csproj không import `.projitems`, không có consumer line). **Không sinh `.snk` và không yêu cầu Shared, không hỏi folder rỗng.** Scripts: Windows bat / macOS/Linux sh (executable); nhúng CLI connection args khi connection explicit, rỗng khi dựa `.env`. Hỗ trợ đủ 6 AuthType. Golden: project sinh ra `dotnet build` được (empty library).
- **Project `Report` (Ready)**: scaffold SSRS report project (3 payload files của vstemplate: `README.md` (ReplaceParameters=true — project template duy nhất trong catalog), `download.reports`/`upload.reports` scripts gọi `devkit downloadreport`/`uploadreport` profile `DEBUG`) **+ handler tự viết `{Name}.rptproj`** từ resource dùng chung `ReportProjectTemplate.rptproj` (stamp `$DevKitVersion$` → `Const.VersionBuild`) qua `FileHelper.ForceWriteAllTextAsync` → **file CÓ BOM** đúng output wizard VSIX. **`.rptproj` CHÍNH LÀ project**: bootstrap csproj của vstemplate chỉ là wizard-artifact (VS xóa sau khi Reporting Services project factory load được `.rptproj`) → CLI KHÔNG sinh csproj nào (ruling aP P.12 ROUND 2). `--solution` đăng ký **entry `.rptproj`** đúng format VS: `.slnx` = `<Project Path="…rptproj"><Deploy /></Project>` (không Id), `.sln` = type GUID Reporting Services `{F14B399A-7131-4C87-9E4B-1186C45EF12D}` + config `Debug`/`Release` kèm `Deploy.0`. Project là create-once — tồn tại → lỗi (aP 2026-10-29). **Không sinh `.snk` và không yêu cầu Shared.** Scripts: Windows bat / macOS/Linux sh (executable); nhúng CLI connection args khi connection explicit, rỗng khi dựa `.env`. Hỗ trợ đủ 6 AuthType.
- **Item `LateBound` (Ready — item template đầu tiên, I.1)**: sinh **2 file từ entity metadata thật** vào `--out` (thư mục đích trong project — thường `Entities/` của Shared project): `{Entity}.cs` (class partial user chỉnh sửa) + `{Entity}.generated.cs` (late-bound class đầy đủ: struct `Fields`, properties, OptionSets, static `Read_Record` trong `{Entity}.cs`). **Bắt buộc kết nối Dataverse** — generated class sinh từ attributes của entity. Interactive terminal chọn entity bằng list **searchable** đọc từ org; non-interactive truyền `--entity` (nhận cả logical name `account` lẫn schema name `Account` — file/class luôn đặt theo SchemaName, VD `Account.cs`). `$rootnamespace$` = namespace project + folder đích (VD `Dev.AllInOne.Shared.Entities` — đúng cách VS compose). Idempotency đúng wizard VSIX: `{Entity}.cs` **không bao giờ đè** trừ `--force` (chạy lại chuẩn hóa `public partial` cũ → `internal partial`), `{Entity}.generated.cs` **luôn update khi nội dung thật đổi** (so sánh từ dòng 6 — header có stamp ngày sinh nên so nguyên file sẽ luôn thấy khác). Target nằm trong Shared project → tự thêm 2 `<Compile>` entries vào `.projitems` (giống VS khi add item); SDK-style csproj tự glob không cần đụng.
- **Item `JsForm` (Ready — I.2)**: sinh **3 file từ form metadata của entity** vào `--out` (thư mục đích trong WebResource project — thường `entities/`): `{Entity}.js` (stub user: reference `.d.ts` + khung form events comment-out), `{Entity}.form.js` (form events sinh từ FormXml — body/tabs/sections/header/navigation/BPF, kèm `OptionSet.{Entity}`), `{Entity}.d.ts` (typing devkit: namespace Form*, interface Body/Header/Tab, enum OptionSet). **Bắt buộc kết nối Dataverse** (codegen đọc forms + BPF processes qua cache lazy). Interactive terminal chọn entity searchable như LateBound; `--entity` nhận cả logical lẫn schema name — file luôn đặt theo SchemaName. **Tự nhận biết `{Entity}.webapi.js`** tồn tại trong thư mục đích → bật section `{Entity}Api` trong `.d.ts` (phối hợp item JsWebApi I.3). Idempotency đúng wizard VSIX: `{Entity}.js` **không bao giờ đè** trừ `--force`; `{Entity}.form.js`/`{Entity}.d.ts` **luôn update khi nội dung thật đổi** (so full content — không có timestamp header nên không cần so-từ-dòng-N). Entity **không có form Main/QuickCreate** → chỉ sinh stub `.js` (fallback webapi-style), `.form.js`/`.d.ts` bị skip kèm warning "(no forms)" (tiền lệ `devkit generator`).
- **Item `JsWebApi` (Ready — I.3)**: sinh **3 file từ attribute metadata của entity** vào `--out` (thư mục đích trong WebResource project — thường `entities/`): `{Entity}.js` (stub user 2 dòng: `//@ts-check` + reference `.d.ts`), `{Entity}.webapi.js` (webapi CRUD sinh từ attributes — field config theo từng nhánh kiểu: plain/DateTime suffix/picklist `g:'Integer'`/lookup OData navigation `b`+`_x_value`+`@odata.bind`, kèm `OptionSet.{Entity}`), `{Entity}.d.ts` (typing: **section `{Entity}Api` luôn bật** + section Form khi `{Entity}.form.js` tồn tại + enum OptionSet). **Bắt buộc kết nối Dataverse** (codegen đọc attributes + metadata của mọi lookup target qua cache lazy; khi `{Entity}.form.js` tồn tại cần cả forms + BPF processes cho section Form). `--entity` nhận cả logical lẫn schema name — file luôn đặt theo SchemaName. Idempotency đúng wizard VSIX: `{Entity}.js` **không bao giờ đè** trừ `--force`; `{Entity}.webapi.js`/`{Entity}.d.ts` **luôn update khi nội dung thật đổi** (so full content — không có timestamp header).
- **Item `Plugin` (Ready — I.4, item T4 đầu tiên, COMPARE CHỐT 2/2 BYTE-IDENTICAL với wizard VSIX)**: render **T4 thật** (`Plugin.tt` built-in) qua `MonoTextTransformer` rồi ghi **1 file `{Class}{Order}.cs`** vào project Server (`--out`; suffix `{Order}` biến mất khi order=1 — đúng hợp đồng vstemplate `$Class$$PluginOrder$.cs`). Nội dung: class `IPlugin` đầy đủ `[CrmPluginRegistration]` (stage/execution/message/entity/order + Image1/2 theo message) + comment block **tự đọc từ org** (InputParameters/OutputParameters của message qua `GetPluginCommentAsync` — như wizard). **`MonoTextTransformer` mirror behavior VS T4 host: sắp xếp lại block `using` đầu file theo tên namespace alphabetically, prefix-first** (`Microsoft.Xrm.Sdk` trước `Microsoft.Xrm.Sdk.Extensions` — I.4 wizard compare phát hiện, byte-identical sau mirror). Chuỗi prompt **đúng thứ tự field của FormPlugin**: entity (searchable từ org) → message (radio từ sdk messages **của entity đó**, `GetSdkMessagesAsync` — chỉ message chuẩn; custom action/api thuộc item khác) → stage (PreValidation/PreOperation/PostOperation) → execution (**PreValidation/PreOperation khóa `Synchronous`** — `Asynchronous` chỉ ở PostOperation, vi phạm → lỗi) → class name (gợi ý `{Stage}{Schema}{Message}{Execution}`, `PreOperation`/`PostOperation` rút còn `Pre`/`Post`) → custom template (Default + titles từ Cli.json khi có). **KHÔNG prompt order** (form wizard không có field order) — order lấy từ `--order` (default 1). **`--project` bắt buộc như mọi item** (xem bảng options — gate ở engine, áp cho TẤT CẢ I*). **Offline ĐƯỢC PHÉP** (khác I.1–I.3): gõ tay toàn bộ, không validate metadata, kèm warning. Custom T4: `--template <title>` từ `DynamicsCrm.DevKit.Cli.json` (custom title → render qua context ĐẦY ĐỦ như wizard) hoặc `--t4 <đường-dẫn-.tt>` trỏ thẳng file (ghi đè `--template`; cả hai cùng cung cấp → lỗi). Idempotency: file plugin là **user file** — không bao giờ đè trừ `--force`.
- **Item `CustomAction` (Ready — I.5, item T4 thứ 2)**: cùng pipeline T4 của Plugin (render `CustomAction.tt` built-in qua `MonoTextTransformer`, ghi **1 file `{Class}{Order}.cs`** user-file vào project Server, comment block **tự đọc từ org** qua `GetPluginCommentAsync`, custom T4 `--template`/`--t4` như Plugin). Khác biệt so với Plugin đúng như dialog FormPlugin với `ItemType.CustomAction`: **entity combo chèn "None" lên đầu** — `--entity none` (bất kỳ casing) = đăng ký custom action **unbound**, registration render logical name `"none"`; gợi ý class khi None vẫn nhúng schema `"None"` (vd `PreNoneArchiveSynchronous` — kỳ quặc nhưng đúng wizard `UpdateClassName`). **Message combo = custom operations**: connected validate `--message` qua `GetCustomActionsAsync` (unbound khi None, bound theo entity logical name khi có entity) — message lạ → lỗi rõ ràng; KHÔNG hỏi/prompt execution khác Plugin (PreValidation/PreOperation vẫn khóa `Synchronous`, `Asynchronous` chỉ ở PostOperation — khi đó attribute kèm `DeleteAsyncOperation = true`). Attribute registration luôn `PluginType = PluginType.CustomAction`.
- **Item `CustomApi` (Ready — I.6, item T4 thứ 3)**: cùng pipeline T4 của Plugin/CustomAction (render `CustomApi.tt` built-in qua `MonoTextTransformer`, ghi **1 file `{Class}{Order}.cs`** user-file vào project Server, comment block **tự đọc từ org** qua `GetPluginCommentAsync`, custom T4 `--template`/`--t4`). Khác biệt đúng như dialog FormPlugin với `ItemType.CustomApi`: **entity combo chèn "None" lên đầu** — `--entity none` (bất kỳ casing) = custom api **unbound**, registration KHÔNG có attribute `EntityLogicalName` và KHÔNG có guard `PrimaryEntityName`; entity thật → registration kèm `EntityLogicalName = "<logical>"` + guard. **Message combo = custom api đã đăng ký**: connected validate `--message` qua `GetCustomApisAsync` (bảng `customapi` statecode=0 theo `boundentitylogicalname` — `none` → điều kiện null; MỘT call cho cả 2 nhánh như form) — message lạ → lỗi rõ ràng. **KHÔNG stage/execution**: dialog ẩn cả 2 combo (custom api step không có stage/execution) — giá trị `--stage`/`--execution` đưa vào bị bỏ qua, attribute registration luôn `PluginType.CustomApi` (không StageEnum/ExecutionModeEnum/DeleteAsyncOperation). **Gợi ý class = `{message}Request`** (`UpdateClassName` nhánh CustomApi — không nhúng stage/schema). Registration param đầu = tên class trần (`ClassWithOrder` — khác Plugin dùng FullClassName).
- **Item `Workflow` (Ready — I.7, item T4 thứ 4)**: cùng pipeline T4 của Plugin/CustomAction/CustomApi (render `Workflow.tt` built-in qua `MonoTextTransformer`, ghi **1 file `{Class}{Order}.cs`** user-file vào project Server, custom T4 `--template`/`--t4`). Khác biệt đúng như dialog FormPlugin với `ItemType.Workflow`: **dialog ẨN HẾT 4 combo org** (entity/message/stage/execution — `WorkflowItem` collapse cả 4) → **class name là input duy nhất**, KHÔNG gợi ý class (không combo nào chạy `UpdateClassName`), và **KHÔNG đọc gì từ org** (`FormPlugin.Connection_Connected` không có nhánh Workflow) — connected và offline render **GIỐNG HẾT NHAU, không có offline warning** (vẫn bắt buộc connect như mọi item theo ruling 2026-10-29 — VSIX-parity). **Comment luôn rỗng**: Default render qua context class-only (`T4Helper.BuildClassContextAsync` — chỉ namespace/order/class/shared-ns, comment không bao giờ lọt); custom title render qua context đầy đủ như mọi item T4 nhưng `Context.PluginComment` của workflow là `GetPluginCommentAsync("", "")` = rỗng — custom template tham chiếu comment sẽ render rỗng, KHÔNG fallback Name. Registration = `[CrmPluginRegistration("{Class}", "{Class}", "", "{Namespace}", IsolationModeEnum.Sandbox, PluginType = PluginType.Workflow)]` — param đầu `ClassWithOrder` trần (như CustomApi), param 4 = namespace đầy đủ **kèm suffix folder đích** (vd `Dev.Contoso.Server.steps`), KHÔNG entity/message/stage. File sinh là `CodeActivity` với comment mẫu hướng dẫn thêm **InArgument/OutArgument** (input/output parameters — wizard cũng KHÔNG prompt, tự viết tay). KHÔNG prompt order — `--order` (default 1, suffix file biến mất khi order 1).
- **Item templates còn lại (I.8..I.18)**: theo lộ trình `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.*.md` — cột Ready sẽ chuyển `yes` dần từng bản.

## Hành vi quan trọng

- **Interactive tự trigger (không có flag ép)**: wizard hỏi–đáp tự chạy khi terminal TTY và giá trị bắt buộc còn thiếu — giống dialog VSIX (vd item `Plugin`: chọn entity xong tự hỏi message → stage → execution → class → template). Redirected/plain (AI/CI) không bao giờ prompt: thiếu giá trị bắt buộc → lỗi rõ ràng exit 1.
- **Required + gate keeper (refactor aP 2026-10-28, ruling 2026-10-29)**: `devkit new-project` → `--solution` bắt buộc (đảo ruling "opt-in" trước đây 2026-10-26 — project template giờ LUÔN đăng ký vào solution); `devkit new-item` → `--project` bắt buộc cho MỌI item; `devkit new` ĐÃ XOÁ (script cũ → lỗi chỉ đường). **Kiểm MỘT LẦN ở gate keeper đầu mỗi Task**: non-TTY thiếu → MỘT lỗi liệt kê đủ (`required arguments missing: ...`); TTY thiếu → wizard hỏi từng bước. Engine (`ScaffoldingEngine`) giữ fallback nearest-project cho caller lập trình (MCP/tests).
- **Create-once cho project templates (ruling aP 2026-10-29)**: project tồn tại → **ERROR** ("--name 'X': project already exists") — KHÔNG regenerate, KHÔNG có `--force` trên new-project (engine giữ Force cho tests/MCP). new-item giữ idempotency: chạy lại không đè file user (skipped), `--force` để ghi đè; kết quả liệt kê Created/Updated/Skipped/Unchanged từng file.
- **Connection**: không bắt buộc cho scaffold; generator scripts dựa vào `.env` fallback (`DEVKIT_*`, tìm từ thư mục hiện hành lên trên); prompt connection của new-project **skip được** (chọn "(skip)" — bake marker như OK-chưa-connect của dialog VSIX, ruling aP 2026-10-29 bỏ `--offline`). Riêng `Console`/`ConsoleCore` dùng connection để chọn biến thể `App.cs`/`App.config` hoặc `App.cs`/`AppSettings.json`, `Server`/`Package`/`WebResource`/`ProxyTypes`/`WebResourceTs`/`SolutionPackager`/`Report` dùng connection để nhúng args vào deploy/generator/run scripts, và `UiTest` bake giá trị OAuth vào `App.config` (chỉ nhận `OAuth` — EasyRepro browser login; xem trên). Riêng item `LateBound` **bắt buộc kết nối** để đọc entity metadata, item `JsForm` **bắt buộc kết nối** để đọc entity metadata + form xml, item `JsWebApi` **bắt buộc kết nối** để đọc entity metadata (+ form xml/BPF khi `{Entity}.form.js` tồn tại). **MỌI item template bắt buộc kết nối Dataverse** (ruling aP 2026-10-29 — VSIX-parity: connect trước khi mở dialog item, `new-item list` là ngoại lệ duy nhất không cần connection): flag `--offline` **ĐÃ BỎ khỏi `devkit new-item`** — truyền vào bị Spectre bỏ qua âm thầm rồi vẫn connect (folder không `.env`/args → lỗi `--conn or --auth: required (or a project .env) — adding an item always connects to Dataverse.`); engine giữ Offline cho tests/MCP.

## Examples

```bash
# Shared project — --solution bat buoc (gate keeper bao 1 loi du danh sach)
devkit new-project --type Shared --name Contoso.Shared --solution MySolution.slnx --out .

# Console project (net462) — hỏi connection type + fields khi tương tác
devkit new-project --type Console --name Contoso.Console --solution MySolution.slnx --out .

# Console Core project (net10 đa nền tảng, dotnet build được luôn)
devkit new-project --type ConsoleCore --name Contoso.ConsoleCore --solution MySolution.slnx --out .

# Server project (plugin assembly net462 — cần Shared project trước, sinh .snk mới)
devkit new-project --type Server --name Contoso.Server --solution MySolution.slnx --out .

# Package Deployer project (net462, không cần .snk, không cần Shared)
devkit new-project --type Package --name Contoso.Package --solution MySolution.slnx --out .

# WebResource project (JavaScript net462, không cần .snk, không cần Shared)
devkit new-project --type WebResource --name Contoso.WebResource --solution MySolution.slnx --out .

# WebResourceTs project (TypeScript net462 — chạy 'npm install' trong project trước khi build)
devkit new-project --type WebResourceTs --name Contoso.WebResourceTs --solution MySolution.slnx --out .

# UiTest project (net462 EasyRepro — chỉ nhận connection OAuth, bake giá trị vào App.config)
devkit new-project --type UiTest --name Contoso.UiTest --solution MySolution.slnx --out .

# SolutionPackager project (extract/pack solution — bat gọi 'devkit solution' profile Extract-Both/Pack-Both)
devkit new-project --type SolutionPackager --name Contoso.SolutionPackager --solution MySolution.slnx --out .

# Report project (SSRS — project là {Name}.rptproj CÓ BOM, KHÔNG sinh csproj)
devkit new-project --type Report --name Contoso.Report --solution MySolution.slnx --out .

# SharedTest project (.shproj hạ tầng test FakeXrmEasy, không cần .snk/connection)
devkit new-project --type SharedTest --name Contoso.Shared.Test --solution MySolution.slnx --out .

# ProxyTypes project (early-bound types net462 — sau đó chạy run.bat hoặc 'devkit modelbuilder' để sinh types)
devkit new-project --type ProxyTypes --name Contoso.ProxyTypes --solution MySolution.slnx --out .

# Test project (MSTest + FakeXrmEasy net462 — cần Shared + ProxyTypes + SharedTest trước)
devkit new-project --type Test --name Contoso.Test --solution MySolution.slnx --out .

# LateBound item — --project bat buoc cho moi item template (2 file {Entity}.cs + {Entity}.generated.cs
# sinh từ entity metadata — bắt buộc kết nối; interactive hiện list entity searchable, --entity nhận cả logical lẫn schema name)
devkit new-item --type LateBound --entity account --project Contoso.Shared --out Contoso.Shared/Entities

# JsForm item (3 file {Entity}.js + {Entity}.form.js + {Entity}.d.ts sinh từ form metadata — bắt buộc kết nối)
devkit new-item --type JsForm --entity account --project Contoso.WebResource --out Contoso.WebResource/entities

# JsWebApi item (3 file {Entity}.js + {Entity}.webapi.js + {Entity}.d.ts sinh từ attribute metadata — bắt buộc kết nối)
devkit new-item --type JsWebApi --entity account --project Contoso.WebResource --out Contoso.WebResource/entities

# Plugin item (T4 render {Class}.cs vào project Server — comment block tự đọc từ org;
# PreValidation/PreOperation luôn Synchronous, Asynchronous chỉ ở PostOperation;
# interactive thiếu gì tự hỏi theo thứ tự form wizard: Entity→Message→Stage→Execution→Class→Template, KHÔNG hỏi order)
devkit new-item --type Plugin --entity account --message Update --stage PreOperation --execution Synchronous --order 1 --name PreAccountUpdateSynchronous --project Contoso.Server --out Contoso.Server

# Plugin item với custom T4 từ file .tt
devkit new-item --type Plugin --entity account --message Create --stage PostOperation --execution Asynchronous --name PostAccountCreate --project Contoso.Server --out Contoso.Server --t4 C:/templates/MyPlugin.tt

# CustomAction item (cùng pipeline T4 của Plugin; message = custom action name trong org;
# --entity none = custom action unbound — registration logical name "none")
devkit new-item --type CustomAction --entity account --message v4_AccountCustomAction --stage PreOperation --name PreAccountv4_AccountCustomActionSynchronous --project Contoso.Server --out Contoso.Server

# CustomAction unbound + Asynchronous (attribute kèm DeleteAsyncOperation = true)
devkit new-item --type CustomAction --entity none --message Archive --stage PostOperation --execution Asynchronous --name PostNoneArchiveAsynchronous --project Contoso.Server --out Contoso.Server

# CustomApi item (cùng pipeline T4; message = custom api đã đăng ký trong org; KHÔNG stage/execution;
# gợi ý class {message}Request; --entity none = custom api unbound — registration không có EntityLogicalName)
devkit new-item --type CustomApi --entity account --message v4_AccountCustomApi --name v4_AccountCustomApiRequest --project Contoso.Server --out Contoso.Server

# CustomApi unbound (registration chỉ PluginType.CustomApi, không guard PrimaryEntityName)
devkit new-item --type CustomApi --entity none --message v4_CustomApi --name v4_CustomApiRequest --project Contoso.Server --out Contoso.Server

# Workflow item (cùng pipeline T4; class name là input DUY NHẤT — dialog ẩn hết 4 combo org,
# KHÔNG đọc gì từ org, không gợi ý class; registration PluginType.Workflow với namespace đầy đủ;
# file CodeActivity kèm comment mẫu InArgument/OutArgument — input/output tự viết tay)
devkit new-item --type Workflow --name v4_WorkflowActivity --project Contoso.Server --out Contoso.Server

# Workflow item order 2 (file + class suffix {Name}2 — suffix biến mất khi order 1)
devkit new-item --type Workflow --name MyWorkflow --order 2 --project Contoso.Server --out Contoso.Server

# Scaffold vào folder solution khác
devkit new-project --type Shared --name Dev.AllInOne.Shared --solution /path/to/solution/Dev.AllInOne.slnx --out /path/to/solution

# List toàn bộ template (mỗi kind một list — `devkit new` đã xoá)
devkit new-project list
devkit new-item list
```
