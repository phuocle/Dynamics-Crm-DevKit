# devkit report — family `--type dataset | upload | download` (gộp + port Manage Datasets)

> **Work-unit spec cho AI implement** — tự chứa (không cần đọc file plan khác).
> Phân tích tổng quát (human): `DynamicsCrm.DevKit.Docs/Cli/report.html` (cùng folder).
> Status: **✅ IMPLEMENTED 2026-11-08 (uncommitted — chờ APhước review rồi commit qua skill devkit-skill-commit)** — spec 2026-11-07.
> Branch: **v5.5** (không branch mới).
>
> **Kết quả verification (2026-11-08):**
> - `dotnet build DynamicsCrm.DevKit.Cli.csproj` → **0 error 0 warning**.
> - VSIX build bằng **VS MSBuild 18\Enterprise** (skill devkit-skill-build-vsix) → PASS, `bin/Debug/DynamicsCrm.DevKit.vsix` sinh ra — move 6 file + projitems compile sạch cả hai phía.
> - `dotnet test` Cli.UnitTests → **5212/5212 PASS** (29 test mới: ReportCommandCoverageTests 6 + ReportDatasetServiceFakeSdkCoverageTests 13 + converter/report-type 10; + cập nhật expectations 6 template tests + 3 case converter tests cho shape `report --type …`).
> - Live smoke từ TestAllInOne2 (.env DEVKITV4): `report` không args → exit 1; `--type graph` → exit 1; `--type upload --name X` → exit 1 "--name: not valid for --type upload"; validate cả 2 nguồn fetchxml → exit 1 "use only one"; `--action list` → 0 org call; `--action validate --name Account` → connect + metadata + probe + pre-filter ON `CRM_FilteredAccount`; `--action validate --fetchxml-file` → companion `primarycontactidValue` (Guid) + `primarycontactidEntityName` (String) sinh đúng; shim `devkit uploadreport --file …` → notice [DEPRECATED]/[INFO] ×2 rồi chạy tiếp flow cũ.
>
> **Deviation khỏi spec khi implement:** (1) `TaskReportDataset.ResolveFetchXmlSourceAsync` ban đầu chặn validate thiếu fetchxml TRƯỚC fallback `--name` — đã sửa: validate không nguồn → dùng CommandText của `--name` (bug bóc được trong live smoke); (2) fixtures bats/sh là **15 file** (không phải ~11) — TestAllInOne2/TestAllInOneCli cũng có Report bats; (3) thêm sửa hint code `ReportItemTemplateHandler.cs:148` (warning I.18 "Use 'devkit uploadreport'…" → "devkit report --type upload") — sweep code tìm thấy sau khi spec viết.
>
> **Pending help-panel grouped headings — RESOLVED 2026-11-08, aP chốt phương án B (đọc lại mockup rồi đổi ý từ A):** `SpectreLog.WriteHelp` CẢ HAI bản (plain `helpContent` + panel markup) chuyển thành 3 nhóm — `Commands (Codegen):` generator/modelbuilder/new-project/new-item · `Commands (Deploy):` server/webresource/solution/downloadwebresource/datasource/report/mcp · `Commands (Deprecated, auto-redirect):` 7 lệnh (bỏ prefix `(DEPRECATED)` inline — heading nhóm đã nói). Heading dùng ASCII (không em-dash — tránh mojibake console). Build 0/0 + SpectreLogTests 12/12 + verify `devkit --help` panel lẫn plain đều grouped.

## Mục tiêu (3 việc + 1 deprecation)

1. **`devkit report --type dataset`** — port "Manage Datasets" từ VSIX (dialog
   `FormReportDatasets` + service `ReportDatasetService.cs` 1.257 dòng pure logic) sang CLI.
2. **`devkit report --type upload`** — **move** toàn bộ logic `devkit uploadreport` vào đây; lệnh cũ
   thành **DEPRECATED auto-redirect** (không xóa class).
3. **`devkit report --type download`** — **move** toàn bộ logic `devkit downloadreport` vào đây; lệnh cũ
   thành **DEPRECATED auto-redirect** (đối xứng — ruling aP 2026-11-07).
4. Deprecation = pattern `ProxyTypeCommand` (notice + chạy tiếp) — bats/CI cũ trong user projects
   (gọi thẳng `devkit uploadreport`/`downloadreport`) **chạy tiếp bình thường**.

## Rulings đã chốt (KHÔNG hỏi lại)

**2026-11-04** (port reportdataset):
1. **MOVE** `ReportDatasetService` + 5 models từ Vsix sang `DynamicsCrm.DevKit.Shared/ReportDataset/` — giữ nguyên namespace, VSIX 0 churn.
2. **ALWAYS-CONNECT** — command luôn connect org; không đụng `DevKitCommand<T>`.
3. Làm trên **v5.5**.
4. FetchXML **inline `--fetchxml` HOẶC file `--fetchxml-file`** — đưa cả hai → exit 1 "use only one".

**2026-11-07** (shape mới):
5. Gộp thành **1 lệnh `devkit report` + `--type` discriminator** (`dataset` | `upload` | `download`) — decision aP sau khi hỏi "report --type dataset / --type upload có ok ko".
6. `uploadreport`/`downloadreport` **KHÔNG hard-remove** — thành deprecated auto-redirect (chọn "Deprecated auto-redirect", pattern `proxytype`→`modelbuilder`).
7. `downloadreport` xử lý **đối xứng** với uploadreport.

## Synopsis

```bat
devkit report --type dataset  --file Account.rdl --action list
devkit report --type dataset  --file Account.rdl --action validate --name Account --fetchxml "<fetch ...>...</fetch>"
devkit report --type dataset  --file Account.rdl --action add --name Dataset2 --fetchxml-file filter.xml --prefilter "account=on"
devkit report --type dataset  --file Account.rdl --action update --name Account --new-name AccountMain
devkit report --type dataset  --file Account.rdl --action delete --name Dataset2 --force
devkit report --type upload   --file Report1.rdl --report Revenue --language 1033          (fast deploy)
devkit report --type upload   --json "DynamicsCrm.DevKit.Cli.json" --profile DEBUG          (json profile — parity uploadreport cũ)
devkit report --type download --json "DynamicsCrm.DevKit.Cli.json" --profile DEBUG         (parity downloadreport cũ)
devkit uploadreport ...       → [DEPRECATED] tự chạy như `report --type upload`
devkit downloadreport ...     → [DEPRECATED] tự chạy như `report --type download`
```

## Options

| Option | Type dùng | Ý nghĩa |
|---|---|---|
| `--type\|-t` | ✅ tất cả | `dataset` \| `upload` \| `download`. Thiếu → exit 1 (`--type: required — dataset, upload, download`). Lạ → exit 1 kèm 3 giá trị. |
| `--file\|-f` | dataset + upload | File `.rdl`. dataset: file quản lý datasets (qua `ValidateFileForDatasetManagement`). upload: fast deploy (parity cũ). |
| `--action\|-a` | dataset | `list` (default) \| `validate` \| `add` \| `update` \| `delete`. |
| `--name\|-n` | dataset | Tên dataset (add/update/delete bắt buộc). |
| `--new-name` | dataset | Đổi tên dataset (update). |
| `--fetchxml` / `--fetchxml-file` | dataset | FetchXML inline / qua file. **Cả hai → exit 1 "use only one"** (ruling 4). update thiếu cả hai → dùng CommandText hiện tại. |
| `--prefilter\|-p` | dataset | `"account=on,ctry=off"` — key = path \| alias \| logical name; value `on`/`off`; key lạ → lỗi kèm danh sách path hợp lệ. |
| `--force` | dataset | Thay confirm Yes/No: update có field bị xóa; delete còn references. |
| `--report\|-r` | upload | Tên/filename/GUID report trên Dataverse (fast deploy). |
| `--language\|-l` | upload | Language name hoặc LCID (default 1033). |
| `--json` / `--profile` | upload + download | Json profile (`uploadreports`/`downloadreports` sections — **giữ nguyên key**, AGENTS.md). |

**Strict per-type validation (BẮT BUỘC):** Spectre relaxed parsing **âm thầm bỏ qua** option lạ (gotcha
đã biết) → `ReportCommand` tự validate: mỗi `--type` có tập option hợp lệ (bảng trên); option ngoài tập
→ **exit 1** tường minh, vd `devkit report --type upload --name X` →
`Error: --name is not valid for --type upload (valid: --file, --report, --language, --json, --profile)`.
Đây là lần lặp thứ 2 của anti-pattern `devkit new` (ruling aP 2026-10-28 "hai bộ args, không own được
requirement") — đã được aP cân nhắc và chọn gộp; strict validation là biện pháp giảm rủi ro bắt buộc.

## Thứ tự làm (11 bước)

### Bước 1 — Move 6 file service sang Shared (như plan cũ)

| Từ (Vsix) | Đến (Shared) |
|---|---|
| `Lib/ReportDatasetService.cs` | `ReportDataset/ReportDatasetService.cs` |
| `Lib/Models/ReportDatasetInfo.cs` | `ReportDataset/Models/ReportDatasetInfo.cs` |
| `Lib/Models/ReportDatasetFieldInfo.cs` | `ReportDataset/Models/ReportDatasetFieldInfo.cs` |
| `Lib/Models/ReportDatasetParameterInfo.cs` | `ReportDataset/Models/ReportDatasetParameterInfo.cs` |
| `Lib/Models/ReportDatasetValidationResult.cs` | `ReportDataset/Models/ReportDatasetValidationResult.cs` |
| `Lib/Models/ReportFetchEntityInfo.cs` | `ReportDataset/Models/ReportFetchEntityInfo.cs` |

Giữ nguyên namespace `DynamicsCrm.DevKit.Lib[.Models]` + `internal sealed`. Kèm:
1. `DynamicsCrm.DevKit.Shared/DynamicsCrm.DevKit.Shared.projitems` — **thêm 6 `<Compile Include>`** (không globbing — P.1).
2. `DynamicsCrm.DevKit.Vsix/DynamicsCrm.DevKit.Vsix.csproj:85-90` — **xóa đúng 6 entry** (quên → CS0101).
   VSIX import `.projitems` sẵn (csproj:519) → 0 churn code.

### Bước 2 — CLI: `ReportCommandArgs` + `ReportCommand`

**Tạo `DynamicsCrm.DevKit.Cli/Models/ReportCommandArgs.cs`** (namespace `DynamicsCrm.DevKit.Shared.Models`):

```csharp
public class ReportCommandArgs : DevKitCommandArgs
{
    [CommandOption("--type|-t")]      [Description("dataset | upload | download")]
    public string Type { get; set; }
    [CommandOption("--file|-f")]      [Description(".rdl file (dataset: manage datasets; upload: fast deploy)")]
    public string File { get; set; }
    [CommandOption("--action|-a")]    [Description("dataset: list | validate | add | update | delete (default: list)")]
    public string Action { get; set; }
    [CommandOption("--name|-n")]      [Description("dataset: dataset name")]
    public string Name { get; set; }
    [CommandOption("--new-name")]     [Description("dataset: new dataset name (rename on update)")]
    public string NewName { get; set; }
    [CommandOption("--fetchxml")]     [Description("dataset: FetchXML inline (either --fetchxml or --fetchxml-file, not both)")]
    public string FetchXml { get; set; }
    [CommandOption("--fetchxml-file")][Description("dataset: path of a file containing FetchXML")]
    public string FetchXmlFile { get; set; }
    [CommandOption("--prefilter|-p")] [Description("dataset: pre-filter toggles, e.g. \"account=on,ctry=off\"")]
    public string PreFilter { get; set; }
    [CommandOption("--force")]        [Description("dataset: skip confirmations (removed fields, references)")]
    public bool Force { get; set; }
    [CommandOption("--report|-r")]    [Description("upload: name, filename, or GUID of the report")]
    public string Report { get; set; }
    [CommandOption("--language|-l")]  [Description("upload: language name or LCID (default: 1033)")]
    public string Language { get; set; }
}
```

**Tạo `DynamicsCrm.DevKit.Cli/Commands/ReportCommand.cs`** — `DevKitCommand<ReportCommandArgs>`:

- `IsProfileRequired(settings)` / `IsJsonRequired(settings)` theo type:
  `dataset` → false/false; `upload` → `string.IsNullOrEmpty(settings.File)` (pattern `UploadReportCommand.cs:53-60`);
  `download` → true/true.
- `BuildArgRows`: in các option KHÔNG rỗng theo type; `--fetchxml` inline in `"(inline, N chars)"` — không in raw.
- Body `RunTaskAsync` = expose `internal Task RunReportAsync(ReportCommandArgs settings)` (RunTaskAsync gọi nó —
  để 2 deprecated shims tái sử dụng, cùng assembly nên internal đủ):
  1. Normalize `Type` (trim + lower). Thiếu → `DevKitValidationException("--type: required — dataset, upload, download.")`.
      Lạ → `DevKitValidationException($"--type '{type}': unknown — valid: dataset, upload, download.")`.
  2. **Strict per-type validation** theo bảng Options (mỗi type 1 danh sách option hợp lệ; vi phạm → exit 1 như trên).
  3. Dispatch:
     - `dataset` → build `CommandLineArgs { Connection, Json, Profile, Type = "reportdatasets", ServiceClient, File }`
       + `ReportDatasetRequest { Action, Name, NewName, FetchXml, FetchXmlFile, PreFilter, Force }`
       → `new TaskReportDataset(args, request).RunAsync()`.
     - `upload` → **move verbatim** body `UploadReportCommand.RunTaskAsync` (`UploadReportCommand.cs:17-52`):
       json section `uploadreports` + dummy profile cho fast `--file` + `CommandLineArgs { Type = "uploadreports", ... }`
       → `new TaskUploadReport(args, profile).RunAsync()`. Giữ nguyên output shape + json keys.
     - `download` → **move verbatim** body `DownloadReportCommand.RunTaskAsync` (`DownloadReportCommand.cs:15-43`):
       section `downloadreports`, `Type = "downloadreports"` → `new TaskDownloadReport(args, profile).RunAsync()`.

### Bước 3 — CLI: `TaskReportDataset` (dataset engine)

**Tạo `DynamicsCrm.DevKit.Cli/Tasks/TaskReportDataset.cs`** — `ITask`, primary ctor
`(CommandLineArgs arg, ReportDatasetRequest request)` (pattern `TaskUploadReport.cs:13`):

- Members: `Arg`, `CurrentDirectory`, `OrgServiceAsync = arg.ServiceClient`, `IsOk`,
  `TaskType => $"[{nameof(CliType.reportdatasets).ToUpper()}]"` → `[REPORTDATASETS]`.
- `ReportDatasetRequest` — record nhỏ (CLI Models): `Action, Name, NewName, FetchXml, FetchXmlFile, PreFilter, Force`.

```
RunAsync: START → WriteLine
1. file = Path.GetFullPath(Arg.File); File.Exists + .rdl → else DevKitValidationException (exit 1)
2. service = new ReportDatasetService(file)  // parse + contract check (FetchXML report gate)
   catch → DevKitValidationException(message gốc, vd "The selected RDL contains no datasets...")
3. switch Action:
   list     → service.List() → bảng Name/Root Entity/Fields/Parameters/Pre-filter/References/Warnings (thuần file, 0 org call)
   validate → fetchXml = ResolveFetchXmlSource(); nếu null và --name có → CommandText của Get(name)
              → service.ValidateAsync(Arg.ServiceClient, fetchXml, selections, request.Name)
              → !IsSuccess → in từng error + DevKitValidationException($"validation failed with {n} error(s).")
              → in bảng Fields (đánh dấu companion) / Parameters / Pre-filter / warnings / probe
   add      → --name + fetchXml bắt buộc → validate (existingName: null) → service.Add(name, validation)
              → SaveAsync(null) → in CREATED + backup path + field count
   update   → --name bắt buộc → fetchXml (null → CommandText hiện tại) → validate (existingName: name)
              → removed-fields check (so service.Get(name).Fields vs validation.Fields; còn removed mà !Force
                → in danh sách + hint "--force" → exit 1) → service.Update(name, NewName ?? name, validation)
              → SaveAsync(null) → in UPDATED + backup path
   delete   → --name bắt buộc → refs = service.FindReferences(name); còn refs mà !Force
              → in từng ReferencePath + hint "--force" → exit 1 → service.Delete(name) → SaveAsync(null) → in DELETED
WriteRequestCounts → WriteLine → END
```

- `ResolveFetchXmlSource()`: cả 2 nguồn → `DevKitValidationException("use only one: pass either --fetchxml or --fetchxml-file, not both.")`;
  inline nguyên văn; file → `FileHelper.ReadAllTextAsync` + `Trim()`; validate/add thiếu → exit 1; update thiếu → null.
- `ParsePrefilterSelections(spec, entities)`: trả `IDictionary<string,bool>` key=Path (shape `Selections()`
  của dialog `FormReportDatasets.xaml.cs:408-417`); value `on`/`off`; resolve key: exact path → alias →
  logical name (ambiguity → lỗi); không thấy → lỗi + `string.Join(", ", paths)`; spec rỗng → null.
- **Luôn `SaveAsync(null)`** sau add/update/delete (backup cạnh .rdl trong `.devkit/manage_report/backups/` —
  conflict detection + atomic + encoding/BOM/newline đã có trong service). In `Saved: <backupPath>` khi non-null.
- Exit: ném `DevKitValidationException` cho mọi validation lỗi (pattern `TaskNewItem.cs:199`) — base in
  `Error: {msg}` 1 lần → exit 1; connection do base lo (exit 2).

### Bước 4 — Deprecated shims (không xóa lệnh cũ)

**`Commands/UploadReportCommand.cs`** — GIỮ class + registration, đổi:
- `Program.cs` description → `"[red]DEPRECATED[/] Auto-redirects to: devkit report --type upload"`.
- Body `RunTaskAsync`: in 3 dòng notice (pattern `ProxyTypeCommand.cs:23-25`):
  `[DEPRECATED] 'devkit uploadreport' is deprecated and now auto-redirects to 'devkit report --type upload'.`
  + `[INFO] Please update your scripts/CI to use 'devkit report --type upload' directly.`
  + `[INFO] In DynamicsCrm.DevKit.Cli.json, the 'uploadreports' section is unchanged.`
  rồi build `ReportCommandArgs { Type = "upload", File, Report, Language, Connection/Json/Profile/Auth/... }`
  → `await new ReportCommand().RunReportAsync(...)`.
- **Tương tự `DownloadReportCommand.cs`** → `Type = "download"`, notice `devkit report --type download`,
  `[INFO] In DynamicsCrm.DevKit.Cli.json, the 'downloadreports' section is unchanged.`
- Giữ 2 Args class (`UploadReportCommandArgs`/`DownloadReportCommandArgs`) cho shim (tests đang probe chúng).

### Bước 5 — Bats/sh NGUỒN (duy nhất 4 file Shared Resources — đã verify chỉ có 1 nguồn thật)

Nội dung thật duy nhất nằm ở `DynamicsCrm.DevKit.Shared/Resources/bat|sh/*.reports.*` (projitems:185-188,
EmbeddedResource LogicalName `bat.*.reports.*` / `sh.*.reports.*`). Cả wizard lẫn CLI đều resolve token
từ ĐÚNG các file này: VSIX `Replacement.cs:58-59` + `Wizard/ItemTemplates/BatFile.cs:60-65`; CLI
`TokenEngine.cs:313-325` (resolve `$upload.reports.bat$` ← `bat.upload.reports.bat`, tương tự sh) +
`BatFileItemTemplateHandler` + `ReportProjectTemplateHandler.cs:72-78`.

**KHÔNG đụng** `ProjectTemplates/CSharp/12.ReportProjectTemplate/*.reports.{bat,sh}` (repo root, embed tại
`DynamicsCrm.DevKit.Vsix.csproj:418-422`) — đó là **placeholder 1 dòng `$token$`** (đã diff: nội dung chỉ là
`$upload.reports.bat$`), token được resolve runtime từ nguồn Shared ở trên.

Byte shape đã verify bằng `xxd` (fixtures byte-compare sẽ bóc nếu lệch):
- `.bat`: `@echo off` + **CRLF** + dòng lệnh, **KHÔNG trailing newline**, không BOM.
- `.sh`: `#!/usr/bin/env bash` + **LF** + dòng lệnh + **CÓ trailing newline**, không BOM.

Nội dung mới (`$CliConnectionArgs$` giữ nguyên token):

```bat
@echo off
devkit report --type upload $CliConnectionArgs$ --json "DynamicsCrm.DevKit.Cli.json" --profile "DEBUG"
```

```sh
#!/usr/bin/env bash
devkit report --type download $CliConnectionArgs$ --json "DynamicsCrm.DevKit.Cli.json" --profile "DEBUG"
```

(4 file: `bat/upload.reports.bat`, `bat/download.reports.bat`, `sh/upload.reports.sh`, `sh/download.reports.sh`
— mỗi cặp bat/sh dùng `--type upload`/`--type download` tương ứng tên file.)

### Bước 6 — Fixtures bats/sh sinh ra (stale khi đổi nguồn)

Quét lại khi làm: `grep -rln "uploadreport\|downloadreport" --include="*.bat" --include="*.sh" DynamicsCrm.DevKit.Tests/`
(hiện **15 file** — `TestAllInOneWindow`, `TestAllInOne`, `TestAllInOne2`, `TestAllInOneCli` đều có bats Report + WebResource/bat
kèm README fixture nhắc lệnh).
Hand-update cùng commit (1 dòng, deterministic — không GUID) với **đúng byte shape của Bước 5**
(`.bat` CRLF + không trailing newline; `.sh` LF + trailing newline) — wizard/CLI COMPARE protocol của aP
xác nhận sau.

### Bước 7 — `LegacyArgConverter` (legacy `/type:uploadreports`)

Hiện trạng đã verify: `Services/LegacyArgConverter.cs:19-30` map `/type:uploadreports` → command
`uploadreport`, và loop remap **re-emit** `/type` thành `--type uploadreports` (ArgMapping `"type"→"--type"`,
cs:135 + `result.Add(newArgName); result.Add(argValue);`). Hôm nay vô hại vì `DevKitCommandArgs` KHÔNG có
property `Type` (237 dòng — Spectre relaxed parsing âm thầm drop). Với `ReportCommand`, `--type` là option
khai báo → `--type uploadreports` sẽ được parse và **bị từ chối** (không phải giá trị hợp lệ).

Đổi như sau:
1. `TypeToCommand`: `{ "uploadreports", "report" }`, `{ "downloadreports", "report" }` (các mapping khác giữ nguyên).
2. Thêm dict `ReportTypeArg = { "uploadreports" → "upload", "downloadreports" → "download" }`; sau khi resolve
   command = `report` → inject `["--type", ReportTypeArg[value]]` ngay sau `report` trong result.
3. Trong loop remap: khi `/type` value map sang `report` → **SKIP re-emit** `--type <giá trị gốc>` (tránh
   duplicate option với giá trị invalid); các `/type` khác giữ nguyên hành vi re-emit hiện tại.
(Không sửa thì script legacy `/type:uploadreports` → `devkit uploadreport` — vẫn chạy nhờ shim, nhưng
đổi luôn cho đúng đích.)

### Bước 8 — launchSettings.json (dev profiles)

`DynamicsCrm.DevKit.Cli/Properties/launchSettings.json:103,108,228,233` — `downloadreport` →
`report --type download`, `uploadreport` → `report --type upload` (giữ nguyên flags còn lại).

### Bước 9 — Wire-up

1. `DynamicsCrm.DevKit.Shared/Enum.cs` — thêm member `reportdatasets` vào `enum CliType` (:11-27)
   (giữ `uploadreports`/`downloadreports` — TaskType output `[UPLOADREPORTS]`/`[DOWNLOADREPORTS]` parity).
2. `DynamicsCrm.DevKit.Cli/Program.cs` —
   `config.AddCommand<ReportCommand>("report").WithDescription("Report operations (--type dataset | upload | download)")`
   + `.WithExample(...)` ×3 (dataset list / dataset add / upload fast / download profile);
   2 dòng `uploadreport`/`downloadreport` đổi description thành `[red]DEPRECATED[/] Auto-redirects...`.
3. `DynamicsCrm.DevKit.Cli/Logging/SpectreLog.cs` — **CẢ HAI NƠI** `WriteHelp` (:80 plain, :153 panel):
   thêm dòng `report` + đánh dấu 2 lệnh cũ DEPRECATED (xem cách các lệnh deprecated đang hiển thị).
   *(CHỜ aP chốt: in grouped theo heading Codegen/Deploy/Deprecated — xem report.html §9.)*
4. Docs: `DynamicsCrm.DevKit.Cli/README.md` (bảng lệnh), `AGENTS.md` (bảng CLI + deprecated list),
   `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/CliCommands.md`, `DynamicsCrm.DevKit.Docs/Cli/new.md`
   (P.12/I.13/I.18 nhắc `downloadreport`/`uploadreport`), Wiki: `DynamicsCrm.DevKit.Wiki/CLI-Commands.md`,
   `DynamicsCrm.DevKit.Cli.md`, `DynamicsCrm.DevKit.Cli.json.md`,
   `DynamicsCrm.DevKit.2019-Report-Upload-VSIX.md` (chỉ nơi nhắc CLI command; VSIX menu không đổi),
   fixture README `DynamicsCrm.DevKit.Tests/TestAllInOne/Dev.AllInOne.Report/README.md`.

**KHÔNG đụng:** `DevKitCommand.cs`, `Mcp/**` (0 refs — đã quét), `.vsct` (menu VSIX-native không đổi),
`Tasks/TaskUploadReport.cs` + `TaskDownloadReport.cs` (tái sử dụng nguyên vẹn),
json sections `uploadreports`/`downloadreports` (giữ key).

### Bước 10 — Tests (MSTest 4: `Assert.HasCount`, `ThrowsExactlyAsync`, `StringAssert.Contains`)

1. `DynamicsCrm.DevKit.Cli.UnitTests/Cli/ReportCommandCoverageTests.cs`:
   - per-type strict validation: `--type upload --name X` → lỗi; `--type dataset --report Y` → lỗi;
     thiếu `--type` → lỗi; `--type lạ` → lỗi kèm 3 giá trị.
   - `IsProfileRequired`/`IsJsonRequired` theo type (dataset false/false; upload theo `--file`;
     download true/true) — probe pattern `CommandSurfaceCoverageTests.cs:62-66`.
   - dataset combos: thiếu file; action lạ; add thiếu name/nguồn; **cả `--fetchxml` + `--fetchxml-file`
     → "use only one"**; delete thiếu name; prefilter value/key lạ; update/delete không `--force`.
2. `DynamicsCrm.DevKit.Cli.UnitTests/Shared/ReportDatasetServiceFakeSdkCoverageTests.cs` — service-level,
   Harmony detours (`OnExecute` `RetrieveEntityRequest`, `OnRetrieveMultiple` probe); fixture: copy
   `DynamicsCrm.DevKit.Tests/AllInOneWindow/Dev.AllInOne.Report/Account.rdl` làm test resource.
   Cases: List/Get; Validate happy path (fields + companions + parameters); ValidateSyntax lỗi graph
   (missing/duplicate alias kèm line suffix); Add (artifacts); Update rename (references được rename);
   Update tắt prefilter (warning "retained conservatively"); Delete; SaveAsync backup + restore;
   save-conflict ("The RDL changed outside this dialog."); Add trùng tên; SafeName; unsupported attribute
   (File/Image/MultiSelectPicklist).
3. Update hiện hữu: `CommandSurfaceCoverageTests.cs:26-66` (UploadReportCommandProbe vẫn hợp — shim giữ
   IsProfileRequired/IsJsonRequired; thêm ReportCommand probe), `LegacyArgConverterDeepCoverageTests.cs:71-72`
   (case `uploadreports`→`report`+`--type upload`, `downloadreports`→`report`+`--type download`).
   `NonMcpTaskValidationCoverageTests.cs`/`TaskDownloadCoverageTests.cs` giữ nguyên (task không đổi).

### Bước 11 — Verification

1. `dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj --configuration Debug` → **0 error 0 warning**.
2. **VSIX build bằng VS MSBuild** (KHÔNG `dotnet build`) — move file + đổi resources (skill `devkit-skill-build-vsix`).
3. `dotnet test` Cli.UnitTests — suite mới + cũ không regress.
4. Live smoke (DEVKITV4): `report --type dataset --file ... --action list` (0 org call) →
   `--action validate --fetchxml-file ...` (metadata + probe) → cả hai nguồn cùng lúc → exit 1 →
   `report --type upload --file <file vừa upload>` (DO_NOTHING path, không đổi data) →
   `report --type download --json ... --profile DEBUG` → `devkit uploadreport ...` shim in notice + chạy.
5. Bats smoke: chạy 1 `upload.reports.bat` fixture (gọi devkit đã cài — DO_NOTHING) + 1 bats cũ GIỮ
   lệnh `devkit uploadreport` (nếu còn trong thư mục test) → phải chạy qua shim không lỗi.
6. Commit khi aP ra lệnh — skill `devkit-skill-commit`, split feat/test/docs/build.

## Gotchas

- **Strict per-type validation bắt buộc** — Spectre relaxed parsing âm thầm drop option lạ; không validate
  thì `report --type upload --name X` chạy im lặng thiếu dữ liệu.
- **`--type` trùng tên** với `new-item/new-project --type` (template id) — khác scope, chấp nhận (aP chỉ định shape này).
- projitems KHÔNG globbing (P.1); VSIX csproj explicit (:85-90) phải xóa entry.
- Namespace giữ `DynamicsCrm.DevKit.Lib[.Models]`; `internal sealed` giữ (Cli.UnitTests thấy nhờ
  `InternalsVisibleTo` — Cli.csproj:51).
- Service chỉ phụ thuộc Dataverse client + System.Xml — sạch cả net48 + net10.
- `SaveAsync(null)` → backup cạnh .rdl; tên backup có `DateTime.Now` — non-deterministic, không byte-compare.
- Removed-fields / delete-references confirm là logic dialog-side — task tự so + `FindReferences` trước mutate.
- Mọi đọc/ghi file qua service (DetectTextFormat giữ encoding/BOM/newline) — không `File.WriteAllText` tay.
- Bats/sh chỉ có **1 nguồn thật** (`Shared/Resources/bat|sh/*.reports.*`); file
  `ProjectTemplates/CSharp/12.ReportProjectTemplate/*.reports.*` là placeholder `$token$` (TokenEngine
  resolve runtime) — KHÔNG đụng. Giữ byte shape khi sửa: `.bat` CRLF + KHÔNG trailing newline; `.sh` LF +
  CÓ trailing newline; cả hai không BOM — wizard vs CLI COMPARE và fixture compare sẽ bóc nếu lệch.
- `list`/`delete` không org call nhưng connection vẫn được thiết lập bởi base (ALWAYS-CONNECT — ruling 2).
- Deprecated shims KHÔNG đổi behavior cũ — chỉ thêm notice; bats cũ chạy tiếp không lỗi.
- MCP `manage_report` add_dataset/update_dataset logic RIÊNG — không đụng MCP trong work-unit này (follow-up align).
- Backup/atomic/conflict luôn bật; không thêm json section mới cho dataset (direct-file).

## Nguồn tham khảo (file:line, verify 2026-11-07 trên v5.5)

- VSIX service: `DynamicsCrm.DevKit.Vsix/Lib/ReportDatasetService.cs` (1.257 dòng) — Validate cs:292-341,
  ApplyPrefilterAndParameters cs:613-691, SaveAsync cs:248-290, contract check cs:1162-1208.
- Dialog: `DynamicsCrm.DevKit.Vsix/Lib/Forms/FormReportDatasets.xaml.cs` — removed-fields confirm cs:233-271,
  pre-filter toggle cs:311-354, Selections() cs:408-417.
- Command VSIX: `DynamicsCrm.DevKit.Vsix/Commands/CommandManageReportDatasets.cs` (menu 0x1008 "Manage Datasets...").
- CLI hiện hữu: `Commands/UploadReportCommand.cs` (move verbatim + override), `Commands/DownloadReportCommand.cs`,
  `Commands/ProxyTypeCommand.cs` (deprecated redirect pattern), `Commands/DevKitCommand.cs`
  (exit codes 0/1/2), `Tasks/TaskUploadReport.cs:13`, `Tasks/TaskNewItem.cs:199` (DevKitValidationException),
  `Services/LegacyArgConverter.cs:19-30`, `Logging/SpectreLog.cs:80,153`.
- Bats nguồn duy nhất: `DynamicsCrm.DevKit.Shared/Resources/bat|sh/*.reports.*` (projitems:185-188);
  placeholder `ProjectTemplates/CSharp/12.ReportProjectTemplate/*.reports.*` (repo root, embed
  `DynamicsCrm.DevKit.Vsix.csproj:418-422`) KHÔNG sửa.
- Resolve token: CLI `DynamicsCrm.DevKit.Shared/Templates/TokenEngine.cs:313-325`; VSIX
  `Lib/Replacement.cs:58-59` + `Wizard/ItemTemplates/BatFile.cs:60-65`.
