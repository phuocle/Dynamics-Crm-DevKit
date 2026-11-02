# AllInOneCli — Manual Run Book (human test by aP)

> **Mục đích:** aP xóa toàn bộ `E:\src\github\Dynamics-Crm-DevKit\TestAllInOneCli` rồi tự chạy từng lệnh CLI bên dưới để tái tạo đúng 13 project + 22 item như AllInOne2 (source of truth VSIX), sau đó so sánh với `v5\DynamicsCrm.DevKit.Tests\TestAllInOne2`.
>
> **Điều kiện:** `devkit` 4.44.44.44 Build 31.12.2026 23.59.59 (release chứa BOM-fix Test/UiTest/ResourceString + per-field connection merge); AllInOne2 fixtures nguyên trạng.
>
> **Thứ tự bắt buộc (đã verify):**
> 1. Project **Server chạy SAU Shared** (Server template cần Shared .projitems tồn tại).
> 2. Tạo folder `Dev.AllInOne.WebResource\bat` TRƯỚC các lệnh BatFile (folder đích phải tồn tại — lesson I.14).
> 3. Thêm ProjectReference Server vào `Dev.AllInOne.Test\Dev.AllInOne.Test.csproj` TRƯỚC lệnh Test item (scan combo qua references — đúng bước aP làm tay trong VS).
> 4. **JsForm TRƯỚC JsWebApi** (d.ts có section Api — đúng thứ tự wizard).
>
> **Connection (per-field merge — ruling aP 2026-11-01):** `.env` copy vào solution root trước, mọi lệnh đọc connection từ đó qua walk-up. `--auth` chỉ chọn LOẠI authentication (arg win cho type), các GIÁ TRỊ (url/user/pass/clientid/secret) merge per-field — thiếu thì lấy từ `.env`; chỉ khi có GIÁ TRỊ dạng arg thì connection mới "explicit" (bake nhúng), còn `--auth` đơn thuần thì bake rỗng (project-environment) như wizard.

```json
{
  "cwd": "E:\\src\\github\\Dynamics-Crm-DevKit\\TestAllInOneCli",
  "prerequisites": [
    "devkit --version  =>  4.44.44.44 Build: 31.12.2026 23.59.59",
    "AllInOne2 fixtures: v5\\DynamicsCrm.DevKit.Tests\\TestAllInOne2 (source of truth)",
    "Folder TestAllInOneCli phải TRỐNG trước khi bắt đầu"
  ],
  "steps": [
    { "step": 1,  "phase": "setup",       "command": "copy \"E:\\src\\github\\Dynamics-Crm-DevKit\\v5\\DynamicsCrm.DevKit.Tests\\TestAllInOne2\\.env\" .", "expect": ".env (554 bytes) — connection cho mọi lệnh sau qua walk-up" },
    { "step": 2,  "phase": "setup",       "command": "dotnet new sln -n Dev.AllInOne --format slnx", "expect": "Dev.AllInOne.slnx (shell trống)" },
    { "step": 3,  "phase": "project",     "command": "devkit new-project --type Console --name Dev.AllInOne.Console --solution Dev.AllInOne.slnx", "expect": "7 created" },
    { "step": 4,  "phase": "project",     "command": "devkit new-project --type ConsoleCore --name Dev.AllInOne.ConsoleCore --solution Dev.AllInOne.slnx", "expect": "7 created" },
    { "step": 5,  "phase": "project",     "command": "devkit new-project --type Package --name Dev.AllInOne.Package --solution Dev.AllInOne.slnx", "expect": "4 created" },
    { "step": 6,  "phase": "project",     "command": "devkit new-project --type ProxyTypes --name Dev.AllInOne.ProxyTypes --solution Dev.AllInOne.slnx", "expect": "5 created" },
    { "step": 7,  "phase": "project",     "command": "devkit new-project --type Report --name Dev.AllInOne.Report --solution Dev.AllInOne.slnx", "expect": "4 created" },
    { "step": 8,  "phase": "project",     "command": "devkit new-project --type SharedTest --name Dev.AllInOne.Shared.Test --solution Dev.AllInOne.slnx", "expect": "14 created" },
    { "step": 9,  "phase": "project",     "command": "devkit new-project --type Shared --name Dev.AllInOne.Shared --solution Dev.AllInOne.slnx", "expect": "11 created" },
    { "step": 10, "phase": "project",     "command": "devkit new-project --type Server --name Dev.AllInOne.Server --solution Dev.AllInOne.slnx", "expect": "5 created", "note": "Phải sau Shared — nếu chạy trước sẽ lỗi 'requires the Shared project'" },
    { "step": 11, "phase": "project",     "command": "devkit new-project --type SolutionPackager --name Dev.AllInOne.SolutionPackager --solution Dev.AllInOne.slnx", "expect": "5 created" },
    { "step": 12, "phase": "project",     "command": "devkit new-project --type Test --name Dev.AllInOne.Test --solution Dev.AllInOne.slnx", "expect": "2 created" },
    { "step": 13, "phase": "project",     "command": "devkit new-project --type UiTest --name Dev.AllInOne.UiTest --solution Dev.AllInOne.slnx --auth OAuth", "expect": "6 created", "note": "--auth OAuth = type selector (per-field merge) — App.config bake rỗng đúng wizard; không cần dời .env hay --json/--profile" },
    { "step": 14, "phase": "project",     "command": "devkit new-project --type WebResource --name Dev.AllInOne.WebResource --solution Dev.AllInOne.slnx", "expect": "9 created" },
    { "step": 15, "phase": "project",     "command": "devkit new-project --type WebResourceTs --name Dev.AllInOne.WebResourceTs --solution Dev.AllInOne.slnx", "expect": "12 created" },
    { "step": 16, "phase": "setup",       "command": "md Dev.AllInOne.WebResource\\bat", "expect": "Folder bat tồn tại", "note": "Folder đích của BatFile phải tồn tại trước" },
    { "step": 17, "phase": "item",        "command": "devkit new-item --type LateBound --entity Account --project Dev.AllInOne.Shared --out Dev.AllInOne.Shared\\Entities", "expect": "2 created (Account.cs + Account.generated.cs)" },
    { "step": 18, "phase": "item",        "command": "devkit new-item --type JsForm --entity Account --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource\\entities", "expect": "3 created (Account.js + Account.form.js + Account.d.ts)" },
    { "step": 19, "phase": "item",        "command": "devkit new-item --type JsWebApi --entity Account --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource\\entities", "expect": "1 created + d.ts update-if-changed", "note": "Phải sau JsForm" },
    { "step": 20, "phase": "item",        "command": "devkit new-item --type JsDialog --name \"Dataverse Dialog Builder Demo\" --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource\\entities", "expect": "3 created (.js + .dialog.js + .dialog.d.ts từ UniqueName)" },
    { "step": 21, "phase": "item",        "command": "devkit new-item --type ResourceString --name Resource --language 1033 --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource\\resources", "expect": "1 created (Resource.1033.resx — CÓ BOM sau BOM-fix)" },
    { "step": 22, "phase": "item",        "command": "devkit new-item --type BatFile --name download.reports.bat --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource\\bat", "expect": "1 created" },
    { "step": 23, "phase": "item",        "command": "devkit new-item --type BatFile --name upload.reports.bat --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource\\bat", "expect": "1 created" },
    { "step": 24, "phase": "item",        "command": "devkit new-item --type BatFile --name download.webresources.bat --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource\\bat", "expect": "1 created" },
    { "step": 25, "phase": "item",        "command": "devkit new-item --type BatFile --name deploy.datasource.bat --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource\\bat", "expect": "1 created" },
    { "step": 26, "phase": "item",        "command": "devkit new-item --type BatFile --name devkit.js --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource\\bat", "expect": "2 created (devkit.js + devkit.d.ts)" },
    { "step": 27, "phase": "item",        "command": "devkit new-item --type BatFile --name Plugin-Managed-Identity.ps1 --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource\\bat", "expect": "3 created (ps1 + config json + md)" },
    { "step": 28, "phase": "item",        "command": "devkit new-item --type Plugin --entity Account --message Create --stage PostOperation --execution Asynchronous --name PostAccountCreateAsynchronous --project Dev.AllInOne.Server", "expect": "1 created (PostAccountCreateAsynchronous.cs, Image1 PostImage *)" },
    { "step": 29, "phase": "item",        "command": "devkit new-item --type CustomAction --entity none --message v4_CustomAction --stage PostOperation --execution Synchronous --name PostNonev4_CustomActionSynchronous --project Dev.AllInOne.Server", "expect": "1 created" },
    { "step": 30, "phase": "item",        "command": "devkit new-item --type CustomApi --entity none --message v4_CustomApi --name v4_CustomApiRequest --project Dev.AllInOne.Server", "expect": "1 created (bare registration, không EntityLogicalName)" },
    { "step": 31, "phase": "item",        "command": "devkit new-item --type Workflow --name SendEmailToTeam --project Dev.AllInOne.Server", "expect": "1 created" },
    { "step": 32, "phase": "item",        "command": "devkit new-item --type DataProvider --datasource all_serversql --project Dev.AllInOne.Server", "expect": "5 created (Create/Update/Delete/Retrieve/RetrieveMultiple.cs — tên cứng)" },
    { "step": 33, "phase": "manualEdit",  "command": "(sửa tay) Dev.AllInOne.Test\\Dev.AllInOne.Test.csproj — thêm dòng bên dưới vào ItemGroup chứa ProxyTypes reference", "expect": "Test project reference Server", "note": "Giống bước aP làm tay trong VS trước khi tạo Test item", "insertAfter": "<ProjectReference Include=\"..\\Dev.AllInOne.ProxyTypes\\Dev.AllInOne.ProxyTypes.csproj\" />", "insertLine": "<ProjectReference Include=\"..\\Dev.AllInOne.Server\\Dev.AllInOne.Server.csproj\" />" },
    { "step": 34, "phase": "item",        "command": "devkit new-item --type Test --test-target Dev.AllInOne.Server.PostAccountCreateAsynchronous --project Dev.AllInOne.Test", "expect": "1 created (PostAccountCreateAsynchronousTest.cs — CÓ BOM sau BOM-fix; --name tự default từ candidate)" },
    { "step": 35, "phase": "item",        "command": "devkit new-item --type UiTest --name Login --project Dev.AllInOne.UiTest", "expect": "1 created (LoginTest.cs — CÓ BOM sau BOM-fix)" },
    { "step": 36, "phase": "item",        "command": "devkit new-item --type TsForm --entity Account --project Dev.AllInOne.WebResourceTs --out Dev.AllInOne.WebResourceTs\\entities", "expect": "3 created (Account.ts + Account.form.ts + OptionSet.ts CÓ BOM)" },
    { "step": 37, "phase": "item",        "command": "devkit new-item --type TsWebApi --entity Account --project Dev.AllInOne.WebResourceTs --out Dev.AllInOne.WebResourceTs\\entities", "expect": "1 created (Account.webapi.ts) + OptionSet.ts refresh" },
    { "step": 38, "phase": "item",        "command": "devkit new-item --type TsDialog --name \"Dataverse Dialog Builder Demo\" --project Dev.AllInOne.WebResourceTs --out Dev.AllInOne.WebResourceTs\\entities", "expect": "2 created (.ts + .dialog.ts)" },
    { "step": 39, "phase": "verify",      "command": "dotnet build Dev.AllInOne.slnx --no-incremental", "expect": "0 Warning(s) / 0 Error(s)" },
    { "step": 40, "phase": "compare",     "command": "so sánh từng file với v5\\DynamicsCrm.DevKit.Tests\\TestAllInOne2 (md5/cmp)", "expect": "114/131 byte-identical; 17 file lệch thuộc các family đã biết (xem báo cáo compare): snk random, slnx/projitems/shproj GUID + thứ tự, wizard csproj housekeeping (Folder/DependentUpon), VS style-normalize (usings sort + case-lines) trên payload copy" }
  ]
}
```

## Kết quả tham chiếu của lần chạy tự động (2026-11-01)

- 34/34 lệnh exit=0 (thứ tự đúng như trên; Server sau Shared; UiTest = `--auth OAuth` thuần với `.env` hiện diện — per-field merge fix).
- Build solution: **0 Warning(s) / 0 Error(s)**.
- So sánh: **114/131 file byte-identical**; 17 file lệch thuộc các family: `.snk` random (non-deterministic by design), slnx/projitems/shproj (GUID random + thứ tự đăng ký), wizard csproj housekeeping (VS xóa `<Folder>` + thêm `<DependentUpon>` — family I.1#3 đã phê), VS style-normalize trên payload copy (usings sort + tách `case` lines — chờ ruling), 4 file whitespace-only (I.1 family).
