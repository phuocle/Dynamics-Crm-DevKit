# AllInOneCli — CLI Runbook and VSIX Comparison

> **Mục đích:** chạy `devkit new-project` và `devkit new-item` trên Windows hoặc Ubuntu, tạo 13 project và các item tương ứng với `DynamicsCrm.DevKit.Tests/AllInOneVsix` (source of truth), sau đó so sánh hai cây file.
>
> **Điều kiện:** `devkit` phiên bản 4.44.44.44 trở lên, có hỗ trợ `Report` item; folder đích có sẵn `.env` và `DynamicsCrm.DevKit.json`. Đây là hai file đầu vào, không xóa.
>
> **Thứ tự bắt buộc (đã verify):**
> 1. Project **Server chạy SAU Shared** (Server template cần Shared .projitems tồn tại).
> 2. Tạo folder `Dev.AllInOne.WebResource\bat` TRƯỚC các lệnh BatFile (folder đích phải tồn tại).
> 3. Thêm ProjectReference Server vào `Dev.AllInOne.Test\Dev.AllInOne.Test.csproj` TRƯỚC lệnh Test item (scan combo qua references — đúng bước aP làm tay trong VS).
> 4. **JsForm TRƯỚC JsWebApi** (d.ts có section Api — đúng thứ tự wizard).
>
> **Connection:** `.env` đã nằm ở solution root trước khi chạy lệnh; CLI đọc connection qua walk-up. `--auth` chỉ chọn loại authentication; các giá trị url/user/pass/clientid/secret được merge riêng từng trường, thiếu thì lấy từ `.env`. Chỉ giá trị connection truyền trực tiếp mới được bake vào file; chỉ truyền `--auth` thì file dùng project environment.

## Ubuntu manual run

Phần này dành cho folder `DynamicsCrm.DevKit.Tests/AllInOneCli-Ubuntu`. Bắt đầu trong folder sạch, chỉ có `.env` và `DynamicsCrm.DevKit.json`; nếu chạy lại, dọn output sinh trước đó nhưng giữ hai file đầu vào. Dùng .NET SDK hỗ trợ `dotnet new sln --format slnx` và cài `devkit`.

### 1. Vào folder và tạo solution

```bash
cd /path/to/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Tests/AllInOneCli-Ubuntu
test -f .env && test -f DynamicsCrm.DevKit.json
devkit --version
dotnet new sln -n Dev.AllInOne --format slnx
```

### 2. Tạo 13 project

Chạy lần lượt theo thứ tự này. Server phải được tạo sau Shared.

```bash
devkit new-project --type Console --name Dev.AllInOne.Console --solution Dev.AllInOne.slnx
devkit new-project --type ConsoleCore --name Dev.AllInOne.ConsoleCore --solution Dev.AllInOne.slnx
devkit new-project --type Package --name Dev.AllInOne.Package --solution Dev.AllInOne.slnx
devkit new-project --type ProxyTypes --name Dev.AllInOne.ProxyTypes --solution Dev.AllInOne.slnx
devkit new-project --type Report --name Dev.AllInOne.Report --solution Dev.AllInOne.slnx
devkit new-project --type SharedTest --name Dev.AllInOne.Shared.Test --solution Dev.AllInOne.slnx
devkit new-project --type Shared --name Dev.AllInOne.Shared --solution Dev.AllInOne.slnx
devkit new-project --type Server --name Dev.AllInOne.Server --solution Dev.AllInOne.slnx
devkit new-project --type SolutionPackager --name Dev.AllInOne.SolutionPackager --solution Dev.AllInOne.slnx
devkit new-project --type Test --name Dev.AllInOne.Test --solution Dev.AllInOne.slnx
devkit new-project --type UiTest --name Dev.AllInOne.UiTest --solution Dev.AllInOne.slnx --auth OAuth
devkit new-project --type WebResource --name Dev.AllInOne.WebResource --solution Dev.AllInOne.slnx
devkit new-project --type WebResourceTs --name Dev.AllInOne.WebResourceTs --solution Dev.AllInOne.slnx
```

Project templates select Linux shell scripts on Ubuntu. Create the BatFile output folder before adding those items:

```bash
mkdir -p Dev.AllInOne.WebResource/bat
```

### 3. Tạo items

Use `/` in Linux output paths. For BatFile, keep the `.bat` names shown below as the CLI's utility choices; on Ubuntu the generated script files use `.sh`.

```bash
devkit new-item --type LateBound --entity Account --project Dev.AllInOne.Shared --out Dev.AllInOne.Shared/Entities
devkit new-item --type JsForm --entity Account --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource/entities
devkit new-item --type JsWebApi --entity Account --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource/entities
devkit new-item --type JsDialog --name "Dataverse Dialog Builder Demo" --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource/entities
devkit new-item --type ResourceString --name Resource --language 1033 --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource/resources
devkit new-item --type BatFile --name download.reports.bat --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource/bat
devkit new-item --type BatFile --name upload.reports.bat --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource/bat
devkit new-item --type BatFile --name download.webresources.bat --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource/bat
devkit new-item --type BatFile --name deploy.datasource.bat --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource/bat
devkit new-item --type BatFile --name devkit.js --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource/bat
devkit new-item --type BatFile --name Plugin-Managed-Identity.ps1 --project Dev.AllInOne.WebResource --out Dev.AllInOne.WebResource/bat
devkit new-item --type Plugin --entity Account --message Create --stage PostOperation --execution Asynchronous --name PostAccountCreateAsynchronous --project Dev.AllInOne.Server
devkit new-item --type CustomAction --entity none --message v4_CustomAction --stage PostOperation --execution Synchronous --name PostNonev4_CustomActionSynchronous --project Dev.AllInOne.Server
devkit new-item --type CustomApi --entity none --message v4_CustomApi --name v4_CustomApiRequest --project Dev.AllInOne.Server
devkit new-item --type Workflow --name SendEmailByQueue --project Dev.AllInOne.Server
devkit new-item --type DataProvider --datasource all_serversql --project Dev.AllInOne.Server
devkit new-item --type CustomAction --entity account --message v4_AccountCustomAction --stage PostOperation --execution Synchronous --name PostAccountv4_AccountCustomActionSynchronous --project Dev.AllInOne.Server
devkit new-item --type CustomApi --entity account --message v4_AccountCustomApi --name v4_AccountCustomApiRequest --project Dev.AllInOne.Server
devkit new-item --type Report --name Report1 --entity Account --project Dev.AllInOne.Report
```

Before creating Test items, edit `Dev.AllInOne.Test/Dev.AllInOne.Test.csproj`. In the `ItemGroup` containing the ProxyTypes reference, add this sibling reference:

```xml
<ProjectReference Include="../Dev.AllInOne.Server/Dev.AllInOne.Server.csproj" />
```

Then create the tests and remaining items:

```bash
devkit new-item --type Test --test-target Dev.AllInOne.Server.PostAccountCreateAsynchronous --project Dev.AllInOne.Test
devkit new-item --type Test --test-target Dev.AllInOne.Server.Create --project Dev.AllInOne.Test
devkit new-item --type Test --test-target Dev.AllInOne.Server.Delete --project Dev.AllInOne.Test
devkit new-item --type Test --test-target Dev.AllInOne.Server.Retrieve --project Dev.AllInOne.Test
devkit new-item --type Test --test-target Dev.AllInOne.Server.RetrieveMultiple --project Dev.AllInOne.Test
devkit new-item --type Test --test-target Dev.AllInOne.Server.Update --project Dev.AllInOne.Test
devkit new-item --type Test --test-target Dev.AllInOne.Server.PostAccountv4_AccountCustomActionSynchronous --project Dev.AllInOne.Test
devkit new-item --type Test --test-target Dev.AllInOne.Server.PostNonev4_CustomActionSynchronous --project Dev.AllInOne.Test
devkit new-item --type Test --test-target Dev.AllInOne.Server.SendEmailByQueue --project Dev.AllInOne.Test
devkit new-item --type Test --test-target Dev.AllInOne.Server.v4_AccountCustomApiRequest --project Dev.AllInOne.Test
devkit new-item --type Test --test-target Dev.AllInOne.Server.v4_CustomApiRequest --project Dev.AllInOne.Test
devkit new-item --type UiTest --name Login --project Dev.AllInOne.UiTest
devkit new-item --type TsForm --entity Account --project Dev.AllInOne.WebResourceTs --out Dev.AllInOne.WebResourceTs/entities
devkit new-item --type TsWebApi --entity Account --project Dev.AllInOne.WebResourceTs --out Dev.AllInOne.WebResourceTs/entities
devkit new-item --type TsDialog --name "Dataverse Dialog Builder Demo" --project Dev.AllInOne.WebResourceTs --out Dev.AllInOne.WebResourceTs/entities
```

### 4. Verify and compare on Ubuntu

```bash
dotnet build Dev.AllInOne.slnx --no-incremental
```

Compare file paths with `.sh` normalized to the corresponding VSIX `.bat` path. The following script prints path parity and SHA-256 results without displaying file contents:

```bash
python3 - <<'PY'
from hashlib import sha256
from pathlib import Path

source_root = Path("../AllInOneVsix")
cli_root = Path(".")
ignored = {".vs", "bin", "obj", "node_modules"}

def files(root):
    result = {}
    for path in root.rglob("*"):
        if not path.is_file() or ignored.intersection(path.relative_to(root).parts):
            continue
        relative = path.relative_to(root)
        if relative.suffix.lower() == ".sh":
            relative = relative.with_suffix(".bat")
        result[relative.as_posix()] = sha256(path.read_bytes()).hexdigest()
    return result

source = files(source_root)
cli = files(cli_root)
common = source.keys() & cli.keys()
same = sorted(path for path in common if source[path] == cli[path])
different = sorted(common - set(same))
source_only = sorted(source.keys() - cli.keys())
cli_only = sorted(cli.keys() - source.keys())

print(f"source={len(source)} cli={len(cli)} byte-identical={len(same)} "
      f"same-path-different-content={len(different)} "
      f"source-only={len(source_only)} cli-only={len(cli_only)}")
for label, paths in (("Different content", different),
                      ("Only in VSIX", source_only),
                      ("Only in Ubuntu CLI", cli_only)):
    print(f"\n{label}:")
    for path in paths:
        print(f"  {path}")
PY
```

The `.bat`/`.sh` counterparts are expected to have different contents because batch and Bash use different syntax. Investigate other content differences separately.

The JSON command list below is the Windows run. Use the Ubuntu commands above when working in `AllInOneCli-Ubuntu`.

```json
{
  "cwd": "E:\\src\\github\\Dynamics-Crm-DevKit\\v5\\DynamicsCrm.DevKit.Tests\\AllInOneCli-Window",
  "prerequisites": [
    "devkit --version  =>  4.44.44.44 trở lên",
    "Source of truth: v5\\DynamicsCrm.DevKit.Tests\\AllInOneVsix",
    "Trước khi chạy lại, giữ .env và DynamicsCrm.DevKit.json; dọn các output generated của lần chạy trước trong AllInOneCli-Window"
  ],
  "steps": [
    { "step": 1,  "phase": "setup",       "command": "giữ nguyên .env và DynamicsCrm.DevKit.json đã có trong folder", "expect": ".env dùng cho connection qua walk-up" },
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
    { "step": 31, "phase": "item",        "command": "devkit new-item --type Workflow --name SendEmailByQueue --project Dev.AllInOne.Server", "expect": "1 created (SendEmailByQueue.cs; khớp AllInOneVsix)" },
    { "step": 32, "phase": "item",        "command": "devkit new-item --type DataProvider --datasource all_serversql --project Dev.AllInOne.Server", "expect": "5 created (Create/Update/Delete/Retrieve/RetrieveMultiple.cs — tên cứng)" },
    { "step": 33, "phase": "item",        "command": "devkit new-item --type CustomAction --entity account --message v4_AccountCustomAction --stage PostOperation --execution Synchronous --name PostAccountv4_AccountCustomActionSynchronous --project Dev.AllInOne.Server", "expect": "1 created; khớp item trong AllInOneVsix" },
    { "step": 34, "phase": "item",        "command": "devkit new-item --type CustomApi --entity account --message v4_AccountCustomApi --name v4_AccountCustomApiRequest --project Dev.AllInOne.Server", "expect": "1 created; khớp item trong AllInOneVsix" },
    { "step": 35, "phase": "item",        "command": "devkit new-item --type Report --name Report1 --entity Account --project Dev.AllInOne.Report", "expect": "1 created (Report1.rdl) + Dev.AllInOne.Report.rptproj updated", "note": "Report item bắt buộc có --entity; CLI lấy metadata từ Dataverse" },
    { "step": 36, "phase": "manualEdit",  "command": "(sửa tay) Dev.AllInOne.Test\\Dev.AllInOne.Test.csproj — thêm dòng bên dưới vào ItemGroup chứa ProxyTypes reference", "expect": "Test project reference Server", "note": "Thêm trước khi tạo bất kỳ Test item nào để CLI scan được target trong Server", "insertAfter": "<ProjectReference Include=\"..\\Dev.AllInOne.ProxyTypes\\Dev.AllInOne.ProxyTypes.csproj\" />", "insertLine": "<ProjectReference Include=\"..\\Dev.AllInOne.Server\\Dev.AllInOne.Server.csproj\" />" },
    { "step": 37, "phase": "item",        "command": "devkit new-item --type Test --test-target Dev.AllInOne.Server.PostAccountCreateAsynchronous --project Dev.AllInOne.Test", "expect": "1 created (PostAccountCreateAsynchronousTest.cs — --name tự default từ candidate)" },
    { "step": 38, "phase": "item",        "command": "devkit new-item --type Test --test-target Dev.AllInOne.Server.Create --project Dev.AllInOne.Test", "expect": "1 created (CreateTest.cs)" },
    { "step": 39, "phase": "item",        "command": "devkit new-item --type Test --test-target Dev.AllInOne.Server.Delete --project Dev.AllInOne.Test", "expect": "1 created (DeleteTest.cs)" },
    { "step": 40, "phase": "item",        "command": "devkit new-item --type Test --test-target Dev.AllInOne.Server.Retrieve --project Dev.AllInOne.Test", "expect": "1 created (RetrieveTest.cs)" },
    { "step": 41, "phase": "item",        "command": "devkit new-item --type Test --test-target Dev.AllInOne.Server.RetrieveMultiple --project Dev.AllInOne.Test", "expect": "1 created (RetrieveMultipleTest.cs)" },
    { "step": 42, "phase": "item",        "command": "devkit new-item --type Test --test-target Dev.AllInOne.Server.Update --project Dev.AllInOne.Test", "expect": "1 created (UpdateTest.cs)" },
    { "step": 43, "phase": "item",        "command": "devkit new-item --type Test --test-target Dev.AllInOne.Server.PostAccountv4_AccountCustomActionSynchronous --project Dev.AllInOne.Test", "expect": "1 created (PostAccountv4_AccountCustomActionSynchronousTest.cs)" },
    { "step": 44, "phase": "item",        "command": "devkit new-item --type Test --test-target Dev.AllInOne.Server.PostNonev4_CustomActionSynchronous --project Dev.AllInOne.Test", "expect": "1 created (PostNonev4_CustomActionSynchronousTest.cs)" },
    { "step": 45, "phase": "item",        "command": "devkit new-item --type Test --test-target Dev.AllInOne.Server.SendEmailByQueue --project Dev.AllInOne.Test", "expect": "1 created (SendEmailByQueueTest.cs)" },
    { "step": 46, "phase": "item",        "command": "devkit new-item --type Test --test-target Dev.AllInOne.Server.v4_AccountCustomApiRequest --project Dev.AllInOne.Test", "expect": "1 created (v4_AccountCustomApiRequestTest.cs)" },
    { "step": 47, "phase": "item",        "command": "devkit new-item --type Test --test-target Dev.AllInOne.Server.v4_CustomApiRequest --project Dev.AllInOne.Test", "expect": "1 created (v4_CustomApiRequestTest.cs)" },
    { "step": 48, "phase": "item",        "command": "devkit new-item --type UiTest --name Login --project Dev.AllInOne.UiTest", "expect": "1 created (LoginTest.cs)" },
    { "step": 49, "phase": "item",        "command": "devkit new-item --type TsForm --entity Account --project Dev.AllInOne.WebResourceTs --out Dev.AllInOne.WebResourceTs\\entities", "expect": "3 created (Account.ts + Account.form.ts + OptionSet.ts)" },
    { "step": 50, "phase": "item",        "command": "devkit new-item --type TsWebApi --entity Account --project Dev.AllInOne.WebResourceTs --out Dev.AllInOne.WebResourceTs\\entities", "expect": "1 created (Account.webapi.ts) + OptionSet.ts refresh" },
    { "step": 51, "phase": "item",        "command": "devkit new-item --type TsDialog --name \"Dataverse Dialog Builder Demo\" --project Dev.AllInOne.WebResourceTs --out Dev.AllInOne.WebResourceTs\\entities", "expect": "2 created (.ts + .dialog.ts)" },
    { "step": 52, "phase": "verify",      "command": "dotnet build Dev.AllInOne.slnx --no-incremental", "expect": "0 Warning(s) / 0 Error(s)" },
    { "step": 53, "phase": "compare",     "command": "so sánh path và SHA-256 từng file với v5\\DynamicsCrm.DevKit.Tests\\AllInOneVsix; bỏ qua .vs/bin/obj/node_modules", "expect": "báo cáo số file byte-identical, same-path-different-content, source-only và CLI-only; đánh giá từng nội dung khác biệt" }
  ]
}
```

## Windows verification (2026-11-11)

- 13/13 lệnh `new-project` và 34 lệnh `new-item` hoàn tất; Report được tạo bằng `--type Report --name Report1 --entity Account`; Workflow là `SendEmailByQueue`, khớp AllInOneVsix.
- Build solution: **0 Warning(s) / 0 Error(s)**.
- So sánh source files (không tính `.vs/bin/obj/node_modules`): **112/145 byte-identical**, 33 cùng path nhưng khác nội dung, không còn path chỉ có ở một phía. Khác biệt còn lại gồm `.snk`/GUID sinh ngẫu nhiên, metadata được VS cập nhật như `<DependentUpon>`, và payload do CLI/VSIX render.

Ubuntu commands above are prepared for manual execution; Ubuntu generation and comparison have not yet been run.
