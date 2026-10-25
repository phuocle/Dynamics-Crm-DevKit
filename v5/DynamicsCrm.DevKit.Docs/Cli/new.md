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

## Hiện trạng templates (2026-10-25)

- **Project `Shared` (Ready)**: scaffold `.shproj` + 11 payload files vào `{SolutionDir}/{Name}/`, add vào `.sln`/`.slnx` đúng format VS, tạo `DynamicsCrm.DevKit.Cli.json` + `DynamicsCrm.DevKit.json` (connections store cho VSIX, connection sinh từ `.env`) ở solution root. Windows sinh `Entities/generator.bat`, macOS/Linux sinh `Entities/generator.sh` (executable).
- **Project `Console` (Ready)**: scaffold console **net462** (7 payload files: csproj SDK-style, `App.cs`, `App.config`, `Program.cs`, `Lib/Helper.cs`, `Lib/TracingServiceFake.cs`, `README.md`) + add csproj vào `.sln`/`.slnx` kèm consumer line `SharedItemsImports = 5` của Shared project. **`App.cs`/`App.config` đổi theo connection type** (`Interactive`, `ClientSecret`, `OAuth`, `AD` — net462 không hỗ trợ `DeviceCode`/`FromPac`, dùng Console Core): interactive terminal sẽ hỏi AuthType + URL/ClientId/Secret/Username/Password (default gợi ý từ `.env`); non-interactive/`--offline` lấy marker từ `.env` (`DEVKIT_AUTH_TYPE`) hoặc bake placeholder `ClientSecret`.
- **Project `ConsoleCore` (Ready)**: scaffold console **net10.0** đa nền tảng (7 payload files: csproj SDK-style, `App.cs`, `AppSettings.json`, `Program.cs`, `Lib/Helper.cs`, `Lib/TracingServiceFake.cs`, `README.md`) + add csproj vào `.sln`/`.slnx` kèm consumer line `SharedItemsImports = 5`. **`App.cs`/`AppSettings.json` đổi theo connection type** (`Interactive`, `DeviceCode`, `ClientSecret`, `FromPac`, `OAuth` — net10 không hỗ trợ `AD` vì WCF/ServiceModel, dùng Console net462). Project sinh ra là template duy nhất **`dotnet build` được thật trên Linux/macOS**. Prompt/fallback connection giống Console.
- Các type còn lại: theo lộ trình `DynamicsCrm.DevKit.Docs/Vsix2CliAndMcp/P.*.md` / `I.*.md` — cột Ready sẽ chuyển `yes` dần từng bản.

## Hành vi quan trọng

- **Idempotent**: chạy lại không đè file user (skipped); `--force` để ghi đè; kết quả liệt kê Created/Updated/Skipped/Unchanged từng file.
- **Yêu cầu solution**: project templates cần `.sln`/`.slnx` (tìm từ `--out` lên trên); thiếu → lỗi rõ ràng.
- **Connection**: không bắt buộc cho scaffold; generator scripts dựa vào `.env` fallback (`DEVKIT_*`, tìm từ thư mục hiện hành lên trên). Riêng `Console`/`ConsoleCore` dùng connection để chọn biến thể `App.cs`/`App.config` hoặc `App.cs`/`AppSettings.json` (xem trên).

## Examples

```bash
# Shared project vào solution hiện tại
devkit new --kind project --type Shared --name Contoso.Shared --out .

# Console project (net462) — hỏi connection type + fields khi tương tác
devkit new --kind project --type Console --name Contoso.Console --out .

# Console Core project (net10 đa nền tảng, dotnet build được luôn)
devkit new --kind project --type ConsoleCore --name Contoso.ConsoleCore --out .

# Scaffold vào folder solution khác
devkit new --kind project --type Shared --name Dev.AllInOne.Shared --out /path/to/solution

# List toàn bộ template (plain cho AI)
devkit new list --plain
```
