# devkit new

> Scaffold DynamicsCrm.DevKit project/item templates cross-platform (CLI port of the VSIX wizards).
> Version: 4.44.44.44 — this file is the detailed reference for both humans and AI agents.

## Quick discovery (cho AI agent)

```bash
devkit new --help          # flags + examples
devkit new list            # all 30 templates + Ready column (yes = scaffold được ngay)
devkit new list --plain    # plain text, machine-readable (AI/CI; hoặc set DEVKIT_NO_COLOR=1)
```

Rule of thumb cho AI: **chỉ scaffold type có `Ready=yes`**; type khác báo "not implemented yet" (exit 1). Danh sách Ready thay đổi theo từng bản release — luôn đọc lại `devkit new list` thay vì memorize.

## Synopsis

```
devkit new --kind project --type Shared  --name Contoso.Shared  [--out DIR] [--force] [--offline]
devkit new --kind project --type Console --name Contoso.Console [--out DIR] [--force] [--offline]
devkit new --kind item    --type LateBound --entity Account [--out DIR] ...
devkit new list
```

Không flag trong terminal tương tác → wizard hỏi–đáp (kind → type → name, name có default `{SolutionName}.{Type}`).
Shell không tương tác (AI/CI) thiếu flag → lỗi validation exit 1.

## Options chính

| Flag | Ý nghĩa |
|---|---|
| `--kind` | `project`, `item` hoặc `list` |
| `--type` | Template id — xem `devkit new list` (vd `Shared`, `Console`, `LateBound`, `Plugin`…) |
| `--name` | Tên project (project templates) / class-dialog-report name |
| `--entity` | Entity schema name cho item templates theo entity (LateBound, JsForm…) |
| `--out` | Thư mục đích (default: current directory; engine tự tìm `.sln/.slnx` lên phía trên) |
| `--force` | Ghi đè file user đã sửa (mặc định KHÔNG bao giờ đè) |
| `--offline` | Không kết nối Dataverse (template nào cần metadata sẽ báo) |
| `-i/--interactive` | Ép wizard hỏi–đáp |

Các flag khác (`--message`, `--stage`, `--execution`, `--order`, `--template`, `--datasource`, `--language`, `--namespace`) dành cho item templates cụ thể — xem help từng loại.

## Hiện trạng templates (2026-10-27)

- **Project `Shared` (Ready)**: scaffold `.shproj` + 11 payload files vào `{--out}/{Name}/`, add vào `.sln`/`.slnx` đúng format VS **khi có `--solution`**, tạo `DynamicsCrm.DevKit.Cli.json` + `DynamicsCrm.DevKit.json` (connections store cho VSIX, connection sinh từ `.env`) ở `--out`. Windows sinh `Entities/generator.bat`, macOS/Linux sinh `Entities/generator.sh` (executable).
- **Project `Console` (Ready)**: scaffold console **net462** (7 payload files: csproj SDK-style, `App.cs`, `App.config`, `Program.cs`, `Lib/Helper.cs`, `Lib/TracingServiceFake.cs`, `README.md`) + add csproj vào `.sln`/`.slnx` kèm consumer line `SharedItemsImports = 5` của Shared project **khi có `--solution`**. **`App.cs`/`App.config` đổi theo connection type** (`Interactive`, `ClientSecret`, `OAuth`, `AD` — net462 không hỗ trợ `DeviceCode`/`FromPac`, dùng Console Core): interactive terminal sẽ hỏi AuthType + URL/ClientId/Secret/Username/Password (default gợi ý từ `.env`); non-interactive/`--offline` lấy marker từ `.env` (`DEVKIT_AUTH_TYPE`) hoặc bake placeholder `ClientSecret`.
- **Project `ConsoleCore` (Ready)**: scaffold console **net10.0** đa nền tảng (7 payload files: csproj SDK-style, `App.cs`, `AppSettings.json`, `Program.cs`, `Lib/Helper.cs`, `Lib/TracingServiceFake.cs`, `README.md`) + add csproj vào `.sln`/`.slnx` kèm consumer line `SharedItemsImports = 5` **khi có `--solution`**. **`App.cs`/`AppSettings.json` đổi theo connection type** (`Interactive`, `DeviceCode`, `ClientSecret`, `FromPac`, `OAuth` — net10 không hỗ trợ `AD` vì WCF/ServiceModel, dùng Console net462). Project sinh ra là template duy nhất **`dotnet build` được thật trên Linux/macOS**. Prompt/fallback connection giống Console.
- **Project `Server` (Ready)**: scaffold plugin assembly **net462** (csproj SDK-style `SignAssembly` + `AssemblyOriginatorKeyFile`, `README.md`, 2 deploy scripts) + **sinh strong-name key mới `{Name}.snk`** (RSA 2048, cross-platform — không dùng mẫu) + add csproj vào `.sln`/`.slnx` kèm consumer line `SharedItemsImports = 5` **khi có `--solution`**. **Bắt buộc có Shared project trước** (thiếu → lỗi kèm hint scaffold Shared; interactive sẽ hỏi scaffold luôn); rerun giữ nguyên key cũ (`--force` để sinh lại). Deploy scripts: Windows `deploy.debug(.only).bat`, macOS/Linux `deploy.debug(.only).sh` (executable) — nhúng CLI connection args khi connection explicit, rỗng khi dựa `.env`. Hỗ trợ đủ 6 AuthType (payload không đổi theo connection type).
- **Project `Package` (Ready)**: scaffold Package Deployer **net462** (csproj SDK-style với `Microsoft.PowerApps.MSBuild.Plugin` build definitions + `GeneratePackageOnBuild`, `README.md`, 2 deploy scripts của bộ plugin — package deploy qua `devkit server`) + add csproj vào `.sln`/`.slnx` **khi có `--solution`**. **Không sinh `.snk` và không yêu cầu Shared** (csproj import `.projitems` với `Condition Exists` — consumer line chỉ thêm khi workspace có Shared). Deploy scripts/platform + fallback connection giống `Server`; hỗ trợ đủ 6 AuthType.
- **Project `WebResource` (Ready)**: scaffold web resource **JavaScript net462** (csproj SDK-style với duy nhất `DynamicsCrm.DevKit.Analyzers`, `README.md`, `deploy.debug.bat/.sh`, `package.json`, `jsconfig.json`, `entities/devkit.d.ts` (giữ BOM như payload), `lib/devkit.js`, `entities/generator.form.bat/.sh`, `entities/generator.webapi.bat/.sh` — nội dung js/ts/json lấy từ resource dùng chung với VSIX) + tạo sẵn 7 thư mục rỗng của vstemplate (`lib`, `entities`, `images`, `resources`, `html`, `css`, `js`) + add csproj vào `.sln`/`.slnx` **khi có `--solution`** (entry thường — csproj không import `.projitems`, không có consumer line). **Không sinh `.snk` và không yêu cầu Shared.** Scripts: Windows bat / macOS/Linux sh (executable), `deploy.debug` chạy `devkit webresource` profile `DEBUG`, generators chạy `devkit generator` profile `JS-FORM`/`JS-WEBAPI`; nhúng CLI connection args khi connection explicit, rỗng khi dựa `.env`. Hỗ trợ đủ 6 AuthType.
- **Project `SharedTest` (Ready)**: scaffold shared test project **.shproj** (12 payload files: `.shproj`/`.projitems` pair + `README.md`, 7 helper `Lib/*.cs` (Guids, Extension, FakerHelper/Bogus, TestHelper, TestTracingService, PluginContextBuilder, TestDataLoader), `FakeXrmEasyTestBase.cs` (root, `using {Solution}.ProxyTypes`), `Executor/CalculateRollupFieldRequestExecutor.cs`) — hạ tầng test dùng chung cho Test project (P.9). Add vào `.sln`/`.slnx` đúng format VS (entry shproj + `SharedItemsImports = 13`) **khi có `--solution`**; tạo `DynamicsCrm.DevKit.Cli.json` + `DynamicsCrm.DevKit.json` ở `--out` (wizard gọi AddDynamicsCrmDevKitCliJsonAsync như Shared). **Không sinh `.snk`, không yêu cầu Shared, không hỏi connection** (payload không có file nào phụ thuộc connection).
- **Project `ProxyTypes` (Ready)**: scaffold early-bound types project **net462** (csproj SDK-style `PlatformTarget x64` với duy nhất `Microsoft.CrmSdk.CoreAssemblies`, `README.md`, `run.bat`/`run.sh`, 2 placeholder `GeneratedCode.cs` + `ProxyTypesAssembly.cs` giữ BOM như payload) + add csproj vào `.sln`/`.slnx` **khi có `--solution`** (entry thường — csproj không import `.projitems`, không có consumer line). **Không sinh `.snk`, không yêu cầu Shared, không tạo Cli.json/DevKit.json** (wizard ProxyTypes không gọi AddDynamicsCrmDevKitCliJsonAsync). Runner script: Windows `run.bat` / macOS/Linux `run.sh` (executable, lean — aP lean hóa toàn bộ bat resources 2026-10-25, không còn block check `where devkit` ở bất kỳ bat nào) — chạy `devkit modelbuilder --json "DynamicsCrm.DevKit.Cli.json" --profile "ALL"`; nhúng CLI connection args khi connection explicit, rỗng khi dựa `.env`. Hỗ trợ đủ 6 AuthType. Sau scaffold CLI in hint chạy `run.bat`/`run.sh` hoặc `devkit modelbuilder` để sinh types.
- **Project `Test` (Ready)**: scaffold unit test project **net462** MSTest + FakeXrmEasy (đúng 2 payload files của vstemplate: csproj SDK-style `PlatformTarget x64` `IsTestProject` + `README.md` — không script, không `.snk`, không Cli.json/DevKit.json, không hỏi connection) + add csproj vào `.sln`/`.slnx` **khi có `--solution`** kèm **2 consumer line `SharedItemsImports = 5`** (một cho **Shared**, một cho **SharedTest** — csproj import CẢ HAI `.projitems`, VS ghi 1 dòng consumer cho mỗi import, cùng GUID entry Test). **3 điều kiện blocking theo đúng thứ tự wizard gốc**: thiếu Shared → lỗi kèm hint scaffold Shared; thiếu ProxyTypes (csproj `ProjectReference`) → lỗi kèm hint; thiếu SharedTest → lỗi kèm hint — mỗi lỗi abort trước khi tạo file nào. csproj trỏ `ProjectReference ..\{Sol}.ProxyTypes\` + import `..\{Sol}.Shared\.projitems` + `..\{Sol}.Shared.Test\.projitems` theo token workspace; FakeXrmEasy.* giữ floating `"2.*"` như VSIX emit. Project Test sinh ra **`dotnet build` được ngay** (import Shared .projitems đưa `DevKitJson`/`CrmPluginRegistrationAttribute`/`StageEnum` vào cùng assembly — fix bug aP report 2026-10-25: trước đây template chỉ import SharedTest).
- **Project `WebResourceTs` (Ready)**: scaffold web resource **TypeScript net462** (csproj SDK-style với duy nhất `DynamicsCrm.DevKit.Analyzers` + `TypeScriptCompileBlocked`, `README.md` + `.eslintrc.json` copy verbatim (ReplaceParameters=false), `package.json` + `tsconfig.json`, `build.js`, `lib/devkit.ts` + `lib/devkit.d.ts`, 2 deploy scripts `deploy.debug`/`deploy.release`, 2 generators `entities/generator.form`/`generator.webapi` — build.js/devkit.ts/devkit.d.ts lấy từ resource `ts.*` dùng chung với VSIX) + tạo sẵn 7 thư mục rỗng của vstemplate (`lib`, `entities`, `build`, `images`, `resources`, `html`, `css`) + add csproj vào `.sln`/`.slnx` **khi có `--solution`** (entry thường — csproj không import `.projitems`, không có consumer line). **Không sinh `.snk` và không yêu cầu Shared.** Scripts: Windows bat / macOS/Linux sh (executable), `deploy.debug`/`deploy.release` build TS qua npm rồi chạy `devkit webresource` profile `DEBUGTS` (profile TS duy nhất của Cli.json — bat release gốc VSIX cũng dùng DEBUGTS), generators chạy `devkit generator` profile `TS-FORM`/`TS-WEBAPI`; nhúng CLI connection args khi connection explicit, rỗng khi dựa `.env`. Hỗ trợ đủ 6 AuthType. Sau scaffold CLI in hint chạy `npm install` trước khi build (deploy scripts tự `npm install` khi thiếu `node_modules`).
- **Project `UiTest` (Ready)**: scaffold UI automation test project **net462** EasyRepro (đúng 6 payload files của vstemplate: csproj SDK-style `IsTestProject`, `README.md` copy verbatim (ReplaceParameters=false), `TestSettings.cs`, `{Name}.runsettings` (retarget từ `UiTest.runsettings` qua token trong target name), `App.cs`, `App.config` — không folder rỗng, không script, không `.snk`, không Cli.json/DevKit.json) + add csproj vào `.sln`/`.slnx` **khi có `--solution`** (entry thường — csproj không import `.projitems`, không có consumer line). **Chỉ nhận connection `OAuth`** (EasyRepro login qua browser bằng username/password — connection khác → lỗi như FormProject, interactive prompt chỉ hiện OAuth); connection values (`Url`/`UserName`/`Password` giải mã) bake vào `App.config` — marker `.env`/không connection → placeholder rỗng (App.cs đọc `DEVKIT_URL/USERNAME/PASSWORD` lúc runtime). Golden: project sinh ra `dotnet build` được (Selenium 4.51.0 + UIAutomation 9.2.21084.148 + MSTest 4.5.1 + ChromeDriver 156.0.8078.4700 từ NuGet cache).
- **Project `SolutionPackager` (Ready)**: scaffold solution packager project **net462** (đúng 5 payload files của vstemplate: csproj SDK-style x64 **không PackageReference nào**, `README.md` + `mapping.xml` copy verbatim (ReplaceParameters=false — mapping.xml giữ BOM của payload), `Extract-Both`/`Pack-Both` scripts gọi `devkit solution` qua profile `Extract-Both`/`Pack-Both` của `DynamicsCrm.DevKit.Cli.json` — extract/pack cả managed lẫn unmanaged) + add csproj vào `.sln`/`.slnx` **khi có `--solution`** (entry thường — csproj không import `.projitems`, không có consumer line). **Không sinh `.snk` và không yêu cầu Shared, không hỏi folder rỗng.** Scripts: Windows bat / macOS/Linux sh (executable); nhúng CLI connection args khi connection explicit, rỗng khi dựa `.env`. Hỗ trợ đủ 6 AuthType. Golden: project sinh ra `dotnet build` được (empty library).
- **Project `Report` (Ready)**: scaffold SSRS report project (3 payload files của vstemplate: `README.md` (ReplaceParameters=true — project template duy nhất trong catalog), `download.reports`/`upload.reports` scripts gọi `devkit downloadreport`/`uploadreport` profile `DEBUG`) **+ handler tự viết `{Name}.rptproj`** từ resource dùng chung `ReportProjectTemplate.rptproj` (stamp `$DevKitVersion$` → `Const.VersionBuild`) qua `FileHelper.ForceWriteAllTextAsync` → **file CÓ BOM** đúng output wizard VSIX. **`.rptproj` CHÍNH LÀ project**: bootstrap csproj của vstemplate chỉ là wizard-artifact (VS xóa sau khi Reporting Services project factory load được `.rptproj`) → CLI KHÔNG sinh csproj nào (ruling aP P.12 ROUND 2). `--solution` đăng ký **entry `.rptproj`** đúng format VS: `.slnx` = `<Project Path="…rptproj"><Deploy /></Project>` (không Id), `.sln` = type GUID Reporting Services `{F14B399A-7131-4C87-9E4B-1186C45EF12D}` + config `Debug`/`Release` kèm `Deploy.0`. Rerun KHÔNG đè `.rptproj` user đã sửa (Skipped — reports/datasets/datasources đăng ký trong đó; `--force` để sinh lại). **Không sinh `.snk` và không yêu cầu Shared.** Scripts: Windows bat / macOS/Linux sh (executable); nhúng CLI connection args khi connection explicit, rỗng khi dựa `.env`. Hỗ trợ đủ 6 AuthType.
- **Item `LateBound` (Ready — item template đầu tiên, I.1)**: sinh **2 file từ entity metadata thật** vào `--out` (thư mục đích trong project — thường `Entities/` của Shared project): `{Entity}.cs` (class partial user chỉnh sửa) + `{Entity}.generated.cs` (late-bound class đầy đủ: struct `Fields`, properties, OptionSets, static `Read_Record` trong `{Entity}.cs`). **Bắt buộc kết nối Dataverse** — generated class sinh từ attributes của entity, `--offline` bị chặn với lỗi rõ ràng. Interactive terminal chọn entity bằng list **searchable** đọc từ org; non-interactive truyền `--entity` (nhận cả logical name `account` lẫn schema name `Account` — file/class luôn đặt theo SchemaName, VD `Account.cs`). `$rootnamespace$` = namespace project + folder đích (VD `Dev.AllInOne.Shared.Entities` — đúng cách VS compose). Idempotency đúng wizard VSIX: `{Entity}.cs` **không bao giờ đè** trừ `--force` (chạy lại chuẩn hóa `public partial` cũ → `internal partial`), `{Entity}.generated.cs` **luôn update khi nội dung thật đổi** (so sánh từ dòng 6 — header có stamp ngày sinh nên so nguyên file sẽ luôn thấy khác). Target nằm trong Shared project → tự thêm 2 `<Compile>` entries vào `.projitems` (giống VS khi add item); SDK-style csproj tự glob không cần đụng.
- **Item `JsForm` (Ready — I.2)**: sinh **3 file từ form metadata của entity** vào `--out` (thư mục đích trong WebResource project — thường `entities/`): `{Entity}.js` (stub user: reference `.d.ts` + khung form events comment-out), `{Entity}.form.js` (form events sinh từ FormXml — body/tabs/sections/header/navigation/BPF, kèm `OptionSet.{Entity}`), `{Entity}.d.ts` (typing devkit: namespace Form*, interface Body/Header/Tab, enum OptionSet). **Bắt buộc kết nối Dataverse** (codegen đọc forms + BPF processes qua cache lazy — `--offline` bị chặn). Interactive terminal chọn entity searchable như LateBound; `--entity` nhận cả logical lẫn schema name — file luôn đặt theo SchemaName. **Tự nhận biết `{Entity}.webapi.js`** tồn tại trong thư mục đích → bật section `{Entity}Api` trong `.d.ts` (phối hợp item JsWebApi I.3). Idempotency đúng wizard VSIX: `{Entity}.js` **không bao giờ đè** trừ `--force`; `{Entity}.form.js`/`{Entity}.d.ts` **luôn update khi nội dung thật đổi** (so full content — không có timestamp header nên không cần so-từ-dòng-N). Entity **không có form Main/QuickCreate** → chỉ sinh stub `.js` (fallback webapi-style), `.form.js`/`.d.ts` bị skip kèm warning "(no forms)" (tiền lệ `devkit generator`).
- **Item `JsWebApi` (Ready — I.3)**: sinh **3 file từ attribute metadata của entity** vào `--out` (thư mục đích trong WebResource project — thường `entities/`): `{Entity}.js` (stub user 2 dòng: `//@ts-check` + reference `.d.ts`), `{Entity}.webapi.js` (webapi CRUD sinh từ attributes — field config theo từng nhánh kiểu: plain/DateTime suffix/picklist `g:'Integer'`/lookup OData navigation `b`+`_x_value`+`@odata.bind`, kèm `OptionSet.{Entity}`), `{Entity}.d.ts` (typing: **section `{Entity}Api` luôn bật** + section Form khi `{Entity}.form.js` tồn tại + enum OptionSet). **Bắt buộc kết nối Dataverse** (codegen đọc attributes + metadata của mọi lookup target qua cache lazy — `--offline` bị chặn; khi `{Entity}.form.js` tồn tại cần cả forms + BPF processes cho section Form). `--entity` nhận cả logical lẫn schema name — file luôn đặt theo SchemaName. Idempotency đúng wizard VSIX: `{Entity}.js` **không bao giờ đè** trừ `--force`; `{Entity}.webapi.js`/`{Entity}.d.ts` **luôn update khi nội dung thật đổi** (so full content — không có timestamp header).
- **Item templates còn lại (I.4..I.18)**: theo lộ trình `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/I.*.md` — cột Ready sẽ chuyển `yes` dần từng bản.

## Hành vi quan trọng

- **Idempotent**: chạy lại không đè file user (skipped); `--force` để ghi đè; kết quả liệt kê Created/Updated/Skipped/Unchanged từng file.
- **Solution là opt-in (`--solution`)**: CLI chỉ insert project vào `.sln`/`.slnx` khi được chỉ định tường minh `--solution <file>` (file phải tồn tại — sai → lỗi trước khi tạo file nào). Không có `--solution` → **chỉ tạo project** dưới `--out`, không đụng solution nào (1 folder có thể có nhiều solution — CLI không tự đoán; VSIX thì luôn add vào solution đang mở vì nó biết chắc). `--solution` cũng là anchor cho việc tìm Shared project và tên mặc định `{SolutionName}.{Type}`.
- **Connection**: không bắt buộc cho scaffold; generator scripts dựa vào `.env` fallback (`DEVKIT_*`, tìm từ thư mục hiện hành lên trên). Riêng `Console`/`ConsoleCore` dùng connection để chọn biến thể `App.cs`/`App.config` hoặc `App.cs`/`AppSettings.json`, `Server`/`Package`/`WebResource`/`ProxyTypes`/`WebResourceTs`/`SolutionPackager`/`Report` dùng connection để nhúng args vào deploy/generator/run scripts, và `UiTest` bake giá trị OAuth vào `App.config` (chỉ nhận `OAuth` — EasyRepro browser login; xem trên). Riêng item `LateBound` **bắt buộc kết nối** để đọc entity metadata, item `JsForm` **bắt buộc kết nối** để đọc entity metadata + form xml (`--offline` bị chặn), item `JsWebApi` **bắt buộc kết nối** để đọc entity metadata (+ form xml/BPF khi `{Entity}.form.js` tồn tại) (`--offline` bị chặn).

## Examples

```bash
# Shared project vào solution hiện tại
devkit new --kind project --type Shared --name Contoso.Shared --out .

# Console project (net462) — hỏi connection type + fields khi tương tác
devkit new --kind project --type Console --name Contoso.Console --out .

# Console Core project (net10 đa nền tảng, dotnet build được luôn)
devkit new --kind project --type ConsoleCore --name Contoso.ConsoleCore --out .

# Server project (plugin assembly net462 — cần Shared project trước, sinh .snk mới)
devkit new --kind project --type Server --name Contoso.Server --out .

# Server project và add vào solution chỉ định (CLI không tự đoán solution)
devkit new --kind project --type Server --name Contoso.Server --out . --solution MySolution.slnx

# Package Deployer project (net462, không cần .snk, không cần Shared)
devkit new --kind project --type Package --name Contoso.Package --out .

# WebResource project (JavaScript net462, không cần .snk, không cần Shared)
devkit new --kind project --type WebResource --name Contoso.WebResource --out .

# WebResourceTs project (TypeScript net462 — chạy 'npm install' trong project trước khi build)
devkit new --kind project --type WebResourceTs --name Contoso.WebResourceTs --out .

# UiTest project (net462 EasyRepro — chỉ nhận connection OAuth, bake giá trị vào App.config)
devkit new --kind project --type UiTest --name Contoso.UiTest --out .

# SolutionPackager project (extract/pack solution — bat gọi 'devkit solution' profile Extract-Both/Pack-Both)
devkit new --kind project --type SolutionPackager --name Contoso.SolutionPackager --out .

# Report project (SSRS — project là {Name}.rptproj CÓ BOM, KHÔNG sinh csproj)
devkit new --kind project --type Report --name Contoso.Report --out .

# SharedTest project (.shproj hạ tầng test FakeXrmEasy, không cần .snk/connection)
devkit new --kind project --type SharedTest --name Contoso.Shared.Test --out .

# ProxyTypes project (early-bound types net462 — sau đó chạy run.bat hoặc 'devkit modelbuilder' để sinh types)
devkit new --kind project --type ProxyTypes --name Contoso.ProxyTypes --out .

# Test project (MSTest + FakeXrmEasy net462 — cần Shared + ProxyTypes + SharedTest trước)
devkit new --kind project --type Test --name Contoso.Test --out .

# LateBound item (2 file {Entity}.cs + {Entity}.generated.cs sinh từ entity metadata — bắt buộc kết nối;
# interactive sẽ hiện list entity searchable, --entity nhận cả logical name lẫn schema name)
devkit new --kind item --type LateBound --entity account --out Contoso.Shared/Entities

# JsForm item (3 file {Entity}.js + {Entity}.form.js + {Entity}.d.ts sinh từ form metadata — bắt buộc kết nối;
# thường trỏ vào folder entities/ của WebResource project)
devkit new --kind item --type JsForm --entity account --out Contoso.WebResource/entities

# JsWebApi item (3 file {Entity}.js + {Entity}.webapi.js + {Entity}.d.ts sinh từ attribute metadata — bắt buộc kết nối;
# thường trỏ vào folder entities/ của WebResource project)
devkit new --kind item --type JsWebApi --entity account --out Contoso.WebResource/entities

# Scaffold vào folder solution khác
devkit new --kind project --type Shared --name Dev.AllInOne.Shared --out /path/to/solution

# List toàn bộ template (plain cho AI)
devkit new list --plain
```
