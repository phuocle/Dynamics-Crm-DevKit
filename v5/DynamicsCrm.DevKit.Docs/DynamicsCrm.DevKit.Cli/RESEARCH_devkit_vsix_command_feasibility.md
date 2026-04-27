# Research: Convert VSIX workflows to CLI command group `devkit vsix ...`

Date: 2026-04-27

Scope: nghien cuu kha nang doc hieu cac workflow trong project VSIX `DynamicsCrm.DevKit` va convert sang command CLI dang `devkit vsix xxxxx`.

## Ket luan ngan

Co kha thi, nhung khong nen convert bang cach de CLI reference truc tiep project VSIX.

Huong dung la:

1. Tao command group moi trong CLI: `devkit vsix ...`.
2. Tach phan core logic dang nam trong VSIX helper / wizard sang service dung chung, khong phu thuoc Visual Studio UI.
3. De VSIX va CLI cung goi chung service do.
4. Nhung phan dang dua vao Visual Studio state nhu active document, selected item, EnvDTE, FileCodeModel, WPF form phai duoc thay bang CLI arguments ro rang.

Neu lam theo huong nay thi `devkit vsix ...` nen duoc xem la "compatibility / bridge command group" cho cac workflow quen thuoc cua VSIX, khong phai la mot ban clone 100% cua Visual Studio extension.

## Source da doc

### VSIX package va commands

- `DynamicsCrm.DevKit/DevKitPackage.cs`
- `DynamicsCrm.DevKit/Commands/CommandWebResource.cs`
- `DynamicsCrm.DevKit/Commands/CommandNewWebResource.cs`
- `DynamicsCrm.DevKit/Commands/CommandTypeScriptRelease.cs`
- `DynamicsCrm.DevKit/Commands/CommandNewTypeScriptRelease.cs`
- `DynamicsCrm.DevKit/Commands/CommandAddCrmPluginRegistration.cs`

### VSIX helpers / UI

- `DynamicsCrm.DevKit/Lib/CacheHelper.cs`
- `DynamicsCrm.DevKit/Lib/Replacement.cs`
- `DynamicsCrm.DevKit/Lib/SigningHelper.cs`
- `DynamicsCrm.DevKit/Lib/T4Helper.cs`
- `DynamicsCrm.DevKit/Lib/TypeScriptBuildHelper.cs`
- `DynamicsCrm.DevKit/Lib/VsixHelper.cs`
- `DynamicsCrm.DevKit/FormWebResource.cs`
- `DynamicsCrm.DevKit/FormPlugin.cs`
- `DynamicsCrm.DevKit/FormProject.cs`

### VSIX templates / wizards

- `DynamicsCrm.DevKit/Wizard/ProjectTemplates/**`
- `DynamicsCrm.DevKit/Wizard/ItemTemplates/**`
- `DynamicsCrm.DevKit/ProjectTemplates/**`
- `DynamicsCrm.DevKit/ItemTemplates/**`

### CLI

- `DynamicsCrm.DevKit.Cli/Program.cs`
- `DynamicsCrm.DevKit.Cli/Commands/**`
- `DynamicsCrm.DevKit.Cli/Models/**`
- `DynamicsCrm.DevKit.Cli/Tasks/**`

### Shared services

- `DynamicsCrm.DevKit.Shared/CliArgsBuilder.cs`
- `DynamicsCrm.DevKit.Shared/Services/DeploymentService.cs`
- `DynamicsCrm.DevKit.Shared/Services/CodeGenService.cs`
- `DynamicsCrm.DevKit.Shared/FileHelper.cs`
- `DynamicsCrm.DevKit.Shared/Helper.cs`
- `DynamicsCrm.DevKit.Shared/Resources/**`

## Hien trang kien truc

### CLI hien tai

CLI dang dung `Spectre.Console.Cli`, entry point o `DynamicsCrm.DevKit.Cli/Program.cs`.

Command hien co:

| Command | Task / Handler | Ghi chu |
|---|---|---|
| `generator` | `TaskGenerator` | Generate server/client code |
| `server` | `TaskServer` | Build/deploy plugin/workflow/dataprovider style server logic |
| `plugin` | `TaskServer` | Deprecated alias |
| `workflow` | `TaskServer` | Deprecated alias |
| `dataprovider` | `TaskServer` | Deprecated alias |
| `webresource` | `TaskWebResource` | Deploy webresource |
| `modelbuilder` | `TaskModelBuilder` | Model builder |
| `proxytype` | `TaskModelBuilder` | Deprecated alias |
| `solution` | `TaskPacSolutionPackager` | Solution packager |
| `legacy-solution` | `TaskSolutionPackager` | Deprecated alias |
| `downloadreport` | `TaskDownloadReport` | Report download |
| `uploadreport` | `TaskUploadReport` | Report upload |
| `downloadwebresource` | `TaskDownloadWebResource` | Download webresource |
| `datasource` | `TaskDataSource` | Data source |
| `mcp` | `McpServerHost` | MCP server |

CLI da co base args trong `DevKitCommandArgs`:

- `--conn`
- `--json`
- `--profile`
- `--url`
- `--auth`
- `--clientid`
- `--clientsecret`
- `--pacprofile`
- `--username`
- `--password`
- `--domain`
- `--sdk-login`
- `--plain`

Rieng `webresource` da co:

- `--file`, `-f`
- `--webresource`, `-w`

Dieu quan trong: `TaskWebResource` da co nhanh xu ly truc tiep khi co `--file` va `--webresource`. Nghia la mot phan workflow VSIX deploy webresource da co san o CLI, khong can viet lai tu dau.

### VSIX hien tai

VSIX chia thanh 3 nhom logic lon:

1. Menu commands trong Visual Studio.
2. Project / item template wizards.
3. Shared helper / service goi Dataverse, generate file, update config.

VSIX phu thuoc nhieu vao:

- Visual Studio selected item.
- Active document.
- EnvDTE project model.
- FileCodeModel / CodeClass.
- WPF forms de user chon option.
- Visual Studio output window / status bar.
- Template wizard replacement dictionary.

Nhung nhieu logic nghiep vu that su da nam o `DynamicsCrm.DevKit.Shared`, dac biet la `DeploymentService`, `CodeGenService`, `CliArgsBuilder`, `Helper`, `FileHelper`. Day la diem tot de port sang CLI.

## Y nghia cua "convert VSIX sang CLI"

Khong nen hieu la CLI se goi truc tiep code trong VSIX.

Nen hieu la:

| Trong VSIX | Khi sang CLI |
|---|---|
| User right-click file | User truyen `--file` |
| VSIX doc selected item | CLI doc duong dan file |
| VSIX mo form chon webresource | CLI nhan `--webresource`, hoac query va in danh sach |
| VSIX mo form chon solution | CLI nhan `--solution`, hoac query va in danh sach |
| VSIX doc active class | CLI nhan `--file` + `--class`, hoac dung Roslyn scan |
| VSIX dung EnvDTE sua code | CLI dung Roslyn / text transform co kiem soat |
| VSIX template wizard | CLI scaffold tu template folder + args |
| VSIX save config | CLI ghi config rieng hoac reuse format chung |

Noi cach khac: convert thanh CLI la convert "workflow intent" va "business operation", khong convert Visual Studio UI.

## De xuat command shape

Nen tao branch command:

```text
devkit vsix <area> <action> [args]
```

Trong `Spectre.Console.Cli`, co the them branch:

```csharp
config.AddBranch("vsix", vsix =>
{
    vsix.AddBranch("webresource", webresource =>
    {
        webresource.AddCommand<VsixWebResourceDeployCommand>("deploy");
        webresource.AddCommand<VsixWebResourceResolveCommand>("resolve");
    });

    vsix.AddBranch("scaffold", scaffold =>
    {
        scaffold.AddCommand<VsixScaffoldProjectCommand>("project");
        scaffold.AddCommand<VsixScaffoldItemCommand>("item");
    });

    vsix.AddBranch("plugin-registration", pluginRegistration =>
    {
        pluginRegistration.AddCommand<VsixPluginRegistrationAddCommand>("add");
    });
});
```

### Webresource deploy

```powershell
devkit vsix webresource deploy `
  --file ".\WebResources\account.ts" `
  --webresource "devkit_/account.js" `
  --conn "dev"
```

Voi TypeScript release:

```powershell
devkit vsix webresource deploy `
  --file ".\WebResources\account.ts" `
  --webresource "devkit_/account.js" `
  --release `
  --conn "dev"
```

Voi tao webresource moi:

```powershell
devkit vsix webresource deploy `
  --new `
  --file ".\WebResources\account.js" `
  --webresource "devkit_/account.js" `
  --solution "MySolution" `
  --conn "dev"
```

### Webresource resolve

Dung khi user muon biet mot local file map voi webresource nao tren Dataverse:

```powershell
devkit vsix webresource resolve `
  --file ".\WebResources\account.js" `
  --conn "dev"
```

Output nen la plain/json tuy theo `--plain` / `--json`.

### Scaffold project

```powershell
devkit vsix scaffold project `
  --type "server" `
  --name "Contoso.Plugins" `
  --namespace "Contoso.Plugins" `
  --output ".\src\Contoso.Plugins"
```

Vi du type co the ho tro:

- `server`
- `shared`
- `console`
- `webresource`
- `webresource-ts`
- `custom-api`
- `data-provider`

### Scaffold item

```powershell
devkit vsix scaffold item `
  --type "plugin" `
  --name "AccountPreCreate" `
  --namespace "Contoso.Plugins" `
  --output ".\src\Contoso.Plugins"
```

Vi du item type:

- `plugin`
- `workflow`
- `custom-action`
- `custom-api`
- `data-provider`
- `js-form`
- `js-ribbon`
- `ts-form`
- `ts-ribbon`
- `webresource`

### Plugin registration attribute

```powershell
devkit vsix plugin-registration add `
  --file ".\src\Plugins\AccountPlugin.cs" `
  --class "AccountPlugin" `
  --message "Create" `
  --entity "account" `
  --stage "PreOperation" `
  --mode "Synchronous" `
  --conn "dev"
```

Neu muon query registration tu Dataverse de sync vao code:

```powershell
devkit vsix plugin-registration add `
  --file ".\src\Plugins\AccountPlugin.cs" `
  --class "AccountPlugin" `
  --from-dataverse `
  --conn "dev"
```

## Mapping VSIX sang CLI

| VSIX workflow | CLI command de xuat | Kha thi | Ly do |
|---|---|---:|---|
| Deploy existing webresource | `devkit vsix webresource deploy --file --webresource` | Cao | `TaskWebResource` va `DeploymentService.DeployWebResourceAsync` da co san |
| Deploy new webresource | `devkit vsix webresource deploy --new --file --webresource --solution` | Cao / Trung binh | `DeploymentService.DeployNewWebResourceAsync`, `AddWebResourceToSolutionAsync`, `PublishWebResourceAsync` da co; can them args thay cho form |
| TypeScript deploy release | `devkit vsix webresource deploy --release` | Trung binh | VSIX co `TypeScriptBuildHelper`; can tach core build khoi VSIX UI |
| Resolve file to webresource | `devkit vsix webresource resolve --file` | Cao | `DeploymentService.GetWebResourcesAsync(fullFileName)` da co |
| Add CRM plugin registration attribute | `devkit vsix plugin-registration add --file --class ...` | Trung binh / Kho | VSIX dung EnvDTE/FileCodeModel; CLI nen dung Roslyn |
| Project templates | `devkit vsix scaffold project --type ...` | Trung binh | Template folder co san; can thay wizard UI bang args |
| Item templates | `devkit vsix scaffold item --type ...` | Trung binh | Template folder co san; can map replacement tokens |
| Connection UI / selected connection | Base CLI auth args, them optional config migration | Cao | CLI auth da day du; `CliArgsBuilder` la bang chung da co huong VSIX -> CLI args |
| Visual Studio selected item / active document | `--file`, `--project`, `--class` | Cao neu doi args ro | CLI khong co VS state |
| Visual Studio project mutation | Scaffold hoac explicit file edits | Kho | EnvDTE thao tac project khac voi CLI filesystem |

## Phan da gan san CLI nhat

### 1. Webresource deploy

VSIX `CommandWebResource` lam cac viec chinh:

1. Save current file trong Visual Studio.
2. Lay selected file.
3. Neu la TypeScript thi build sang file deploy.
4. Lay connection tu VSIX cache.
5. Resolve webresource tu cache hoac query Dataverse.
6. Deploy file len webresource.
7. Publish webresource.

CLI hien tai da co phan 4, 6, 7 qua `TaskWebResource` va `DeploymentService`.

Thieu trong CLI:

- `--release` cho TypeScript.
- `--new` va `--solution` cho tao webresource moi.
- `resolve` command de query webresource theo file.
- Cache mapping local file -> webresource neu muon giong VSIX.

Muc do nen lam truoc: cao.

### 2. New webresource

VSIX `CommandNewWebResource` va `CommandNewTypeScriptRelease` dung form de user nhap/chon:

- webresource name;
- solution;
- type/script build mode.

CLI chi can bien cac lua chon nay thanh args.

Core service da co:

- `DeploymentService.DeployNewWebResourceAsync`
- `DeploymentService.GetSolutionsAsync`
- `DeploymentService.AddWebResourceToSolutionAsync`
- `DeploymentService.PublishWebResourceAsync`

Nen port workflow nay som vi gia tri cao va rui ro thap.

### 3. CliArgsBuilder

`DynamicsCrm.DevKit.Shared/CliArgsBuilder.cs` da ton tai va convert `CrmConnection` sang CLI args. Day la bang chung rat manh rang project da co nhu cau "VSIX context -> CLI args".

Vi du ve y nghia:

- VSIX dang co connection object.
- Builder tao ra args tuong ung cho CLI.
- Co the dung de generate `.bat`, command preview, hoac migration guide.

Nen tiep tuc dua `devkit vsix ...` di theo huong nay.

## Phan can refactor truoc khi port

### 1. TypeScriptBuildHelper

`TypeScriptBuildHelper` hien nam trong VSIX project. No gan voi workflow deploy TypeScript tu Visual Studio.

Neu CLI can `--release`, khong nen reference `DynamicsCrm.DevKit` tu `DynamicsCrm.DevKit.Cli`, vi VSIX target .NET Framework 4.8 va co dependency Visual Studio SDK/WPF/EnvDTE.

Nen lam:

1. Tach core TypeScript build sang shared service khong phu thuoc VS UI.
2. VSIX helper chi con la wrapper: save file, lay selected item, hien UI/status.
3. CLI goi shared TypeScript build service bang `--file` va `--release`.

### 2. Template wizard

VSIX templates hien dung wizard va replacement dictionary cua Visual Studio.

CLI scaffold can service moi:

```text
TemplateScaffoldService
  - Load template manifest
  - Copy files
  - Apply token replacement
  - Rename files/folders
  - Optional run T4/codegen
  - Optional update csproj/sln khi duoc yeu cau ro
```

Khong nen goi wizard classes truc tiep.

Ly do:

- Wizard phu thuoc Visual Studio automation model.
- CLI can deterministic output.
- CLI nen chay duoc trong CI/headless.

### 3. Plugin registration attribute

`CommandAddCrmPluginRegistration` la phan kho nhat.

VSIX dang dua vao:

- active document;
- current cursor position;
- `FileCodeModel`;
- `CodeClass`;
- `CodeClass.AddAttribute`;
- helpers de detect implemented plugin/workflow;
- WPF UI de user chon registration;
- FetchXML de doc registration hien co tu Dataverse.

CLI khong co active document/cursor nen phai doi thanh:

- `--file`
- `--class`
- `--message`
- `--entity`
- `--stage`
- `--mode`
- hoac `--from-dataverse`

De sua code C# trong CLI, nen dung Roslyn thay cho string replace thuan tuy. Roslyn giup:

- tim dung class;
- them attribute vao dung syntax node;
- tranh duplicate attribute;
- format lai code an toan hon.

Muc do kha thi: co, nhung nen lam sau webresource/scaffold.

## Phan khong nen port 1:1

Khong nen co gang copy cac behavior nay sang CLI:

| VSIX behavior | Ly do khong nen port 1:1 |
|---|---|
| Detect selected item trong Solution Explorer | CLI khong co UI state; dung `--file` |
| Detect active document/cursor | CLI khong co editor state; dung `--file` + `--class` |
| Hien WPF form de chon option | CLI nen nhan args, optional prompt chi khi interactive |
| EnvDTE project mutation ngam | CLI nen explicit, deterministic |
| Visual Studio output window/status bar | CLI dung console/plain/json output |
| Direct reference VSIX project tu CLI | Sai huong target framework/dependency |

## Thiet ke service de dung chung

Nen them cac service khong phu thuoc Visual Studio vao shared layer.

### WebResourceFileDeploymentService

Trach nhiem:

- normalize local file path;
- build TypeScript neu can;
- resolve webresource;
- deploy existing/new webresource;
- add to solution;
- publish;
- return structured result.

VSIX wrapper:

- lay selected item;
- mo form neu thieu args;
- hien status.

CLI wrapper:

- parse args;
- goi service;
- in result.

### TypeScriptBuildService

Trach nhiem:

- nhan source `.ts`;
- build/minify/release theo convention hien co;
- tra ve output file can deploy;
- khong dung Visual Studio API.

### TemplateScaffoldService

Trach nhiem:

- copy project/item template;
- apply replacement tokens;
- rename file/folder;
- optional T4 generation;
- optional update `.csproj`/`.slnx` khi co args ro.

### PluginRegistrationAttributeService

Trach nhiem:

- query registration tu Dataverse neu `--from-dataverse`;
- tao model attribute;
- dung Roslyn them/update attribute vao class;
- bao cao diff/changes.

## De xuat args chi tiet

### Base args

Moi `devkit vsix ...` command nen ke thua `DevKitCommandArgs` de reuse:

- connection args;
- auth args;
- `--plain`;
- `--json`;
- `--profile`.

### `devkit vsix webresource deploy`

| Arg | Bat buoc | Ghi chu |
|---|---:|---|
| `--file`, `-f` | Yes | Local file path |
| `--webresource`, `-w` | Yes neu khong resolve duoc | Dataverse webresource name |
| `--new` | No | Tao webresource moi |
| `--solution` | Khi `--new` | Solution unique name |
| `--release` | No | Build TypeScript release/minify neu file la `.ts` |
| `--publish` | No, default true | Co the cho `--no-publish` neu can |
| `--dry-run` | No | In ra viec se lam, khong deploy |

### `devkit vsix webresource resolve`

| Arg | Bat buoc | Ghi chu |
|---|---:|---|
| `--file`, `-f` | Yes | Local file path |
| `--json` | No | Output machine-readable |

### `devkit vsix scaffold project`

| Arg | Bat buoc | Ghi chu |
|---|---:|---|
| `--type` | Yes | Template type |
| `--name` | Yes | Project name |
| `--namespace` | No | Default tu name |
| `--output` | Yes | Folder output |
| `--force` | No | Overwrite neu folder/file ton tai |
| `--dry-run` | No | Xem file se tao |

### `devkit vsix scaffold item`

| Arg | Bat buoc | Ghi chu |
|---|---:|---|
| `--type` | Yes | Item template type |
| `--name` | Yes | Item name |
| `--namespace` | No | Namespace |
| `--output` | Yes | Folder output |
| `--class` | No | Neu template can class name rieng |
| `--entity` | No | Cho plugin/form template |
| `--force` | No | Overwrite neu ton tai |

### `devkit vsix plugin-registration add`

| Arg | Bat buoc | Ghi chu |
|---|---:|---|
| `--file` | Yes | C# file |
| `--class` | No neu auto detect duoc | Class can add attribute |
| `--from-dataverse` | No | Query registration hien co |
| `--message` | Khi manual | Create/Update/Delete/... |
| `--entity` | Khi manual | Logical name |
| `--stage` | Khi manual | PreValidation/PreOperation/PostOperation |
| `--mode` | Khi manual | Sync/Async |
| `--dry-run` | No | Chi in diff |
| `--write` | No / default true tuy policy | Ghi file |

## Roadmap de lam an toan

### Phase 1: Webresource bridge

Muc tieu:

- Tao `devkit vsix webresource deploy`.
- Reuse `TaskWebResource` / `DeploymentService`.
- Them `resolve`.
- Them `--new`, `--solution` neu scope cho phep.

Gia tri:

- Gan voi workflow VSIX dang dung nhat.
- It phu thuoc Visual Studio.
- Da co nhieu service san.

Rui ro:

- Mapping cache local file -> webresource co the khac VSIX.
- Can output ro rang de user biet file nao deploy vao webresource nao.

### Phase 2: Scaffold project/item

Muc tieu:

- Tao `TemplateScaffoldService`.
- Map project/item templates sang `--type`.
- Ho tro `--dry-run`.

Gia tri:

- Bien template VSIX thanh headless generator.
- Co the dung trong CI.

Rui ro:

- Visual Studio wizard replacement dictionary co nhieu implicit token.
- Can test voi tung template.

### Phase 3: TypeScript release build

Muc tieu:

- Tach `TypeScriptBuildHelper` thanh shared service.
- CLI support `--release`.

Gia tri:

- Dua workflow `CommandTypeScriptRelease` sang CLI.

Rui ro:

- Neu helper hien co dung Visual Studio services, can bo tach ky.

### Phase 4: Plugin registration attribute

Muc tieu:

- Tao Roslyn-based attribute updater.
- Ho tro manual args va `--from-dataverse`.

Gia tri:

- Port duoc workflow VSIX kho nhat.

Rui ro:

- Sua code C# co blast radius cao.
- Can test nhieu case class/namespace/partial class/existing attributes.

### Phase 5: Config migration / command preview

Muc tieu:

- Dung `CliArgsBuilder` de tao command CLI tu VSIX connection/config.
- Co the them:

```powershell
devkit vsix config export-cli-args --connection "dev"
```

Gia tri:

- User dang dung VSIX co duong chuyen sang CLI de hon.

## Convention / consistency voi codebase hien tai

Neu implement that, nen giu cac convention sau:

1. Command class dat trong `DynamicsCrm.DevKit.Cli/Commands`.
2. Args model dat trong `DynamicsCrm.DevKit.Cli/Models`.
3. Business execution dat trong `DynamicsCrm.DevKit.Cli/Tasks` hoac shared service neu VSIX cung can dung.
4. Dataverse / deployment logic uu tien reuse `DynamicsCrm.DevKit.Shared/Services`.
5. Tat ca command moi nen support `--plain` va `--json` neu output can cho AI/CI.
6. Khong tao dependency tu CLI sang VSIX project.
7. Neu can dung logic VSIX hien co, tach logic do sang Shared truoc.
8. Khong lam hidden behavior dua vao current folder qua nhieu; moi file/project/class quan trong nen co args ro.

## De xuat ten command

User dang muon `devkit vsix xxxxx`, nen co the dung namespace `vsix`.

Tuy nhien ve semantic, `vsix` co the gay hieu lam la command build/install VSIX package. Nen trong help text can ghi ro:

```text
devkit vsix
  Run CLI equivalents of selected Visual Studio extension workflows.
```

Neu muon ten dung nghia hon trong tuong lai:

- `devkit ide ...`
- `devkit scaffold ...`
- `devkit bridge ...`

Nhung de migration tu VSIX, `devkit vsix ...` van chap nhan duoc.

## Verdict

Kha thi.

Muc do kha thi theo tung nhom:

| Nhom | Verdict |
|---|---|
| Webresource deploy existing | Nen lam dau tien |
| Webresource create/new | Nen lam dau tien hoac ngay sau existing deploy |
| Resolve webresource theo file | Nen lam dau tien |
| TypeScript release deploy | Lam duoc sau khi tach helper |
| Scaffold project/item tu VSIX templates | Lam duoc, can service rieng |
| Add plugin registration attribute | Lam duoc, nhung can Roslyn va test ky |
| Port Visual Studio UI/state 1:1 | Khong nen |

Ket luan cuoi cung:

`devkit vsix ...` nen la mot command group gom cac CLI equivalents cua VSIX workflows. Nen implement theo huong extract core service sang shared layer, khong reference VSIX project truc tiep. Cac workflow webresource la candidate tot nhat de lam truoc vi codebase da co `TaskWebResource`, `DeploymentService`, va `CliArgsBuilder` lam nen tang.
