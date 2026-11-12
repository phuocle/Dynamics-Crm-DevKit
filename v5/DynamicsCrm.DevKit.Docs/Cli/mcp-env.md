# Đề xuất: chọn bộ key `.env` cho nhiều DevKit MCP instance

Ngày: 2026-11-12. Trạng thái: tài liệu thiết kế, chưa triển khai `--env`.

Component chính: CLI (`DynamicsCrm.DevKit.Cli`, .NET 10), command `mcp`. Thiết kế sử dụng parser `.env` hiện có trong Shared. Các ví dụ có `--env` bên dưới mô tả hành vi cần triển khai, chưa phải lệnh được phiên bản hiện tại hỗ trợ.

## 1. Yêu cầu đã thống nhất

1. Bộ key mặc định giữ tên hiện tại: `DEVKIT_AUTH_TYPE`, `DEVKIT_URL`, `DEVKIT_CLIENT_ID`, `DEVKIT_CLIENT_SECRET`, ...
2. Có thể thêm các bộ key đánh số trong cùng file: `DEVKIT_1_AUTH_TYPE`, `DEVKIT_1_URL`, ...; tiếp theo là `DEVKIT_2_*`, `DEVKIT_3_*`, ...
3. Process chọn bộ key bằng `devkit mcp --env 1 [name] [options]`.
4. **Args kết nối trực tiếp luôn được ưu tiên.** Những lệnh đang truyền đủ connection args tiếp tục kết nối bình thường, kể cả khi không có `.env`.
5. Khi cần lấy giá trị còn thiếu từ `.env`, `--env 1` chỉ chọn bộ `DEVKIT_1_*`. Không tìm thấy bộ được chọn thì báo lỗi; không tự chuyển sang bộ mặc định hoặc bộ khác.
6. Không giới hạn số lượng bộ key trong `.env`; bỏ giới hạn tối đa 3 môi trường của đề xuất trước.
7. Mỗi MCP instance giữ một kết nối Dataverse riêng trong suốt vòng đời process. MCP client có thể khởi chạy nhiều instance cùng lúc.

Ví dụ:

```powershell
# Thiếu connection args: lấy bộ key mặc định DEVKIT_*.
devkit mcp devkit-codex

# Thiếu connection args: lấy bộ key DEVKIT_1_*.
devkit mcp --env 1 devkit-codex-2 --dry-run

# Instance khác lấy bộ key DEVKIT_2_*.
devkit mcp --env 2 devkit-uat --category readonly

# Có đủ connection args: tiếp tục dùng args, không cần .env.
# Các giá trị APP_ID và SECRET ở đây chỉ là placeholder minh họa.
devkit mcp explicit-instance --auth ClientSecret `
  --url https://explicit-org.crm.dynamics.com `
  --clientid APP_ID --clientsecret SECRET
```

`--env` chọn nguồn fallback cho connection. Tên `[name]` chỉ định danh instance; đổi tên instance không tự đổi bộ key hoặc môi trường Dataverse.

## 2. Phạm vi và convention đặt key

Cú pháp mới:

```text
devkit mcp [name] [--env <id>] [connection options] [MCP options]
```

| Cách gọi | Bộ key fallback |
|---|---|
| Không có `--env` | `DEVKIT_<FIELD>` |
| `--env 1` | `DEVKIT_1_<FIELD>` |
| `--env 2` | `DEVKIT_2_<FIELD>` |
| `--env 10` | `DEVKIT_10_<FIELD>` |
| `--env 100` | `DEVKIT_100_<FIELD>` |

Các nhóm không cần liên tiếp. Có nhóm `1` và `100` mà không có nhóm `2` vẫn hợp lệ. Không cần danh sách `DEVKIT_ENVIRONMENTS`, số lượng nhóm, hoặc cấu hình đăng ký nhóm riêng.

Quy ước bổ sung đề xuất cho `<id>`: dùng chuỗi chữ số nguyên dương dạng chuẩn, như `1`, `2`, `10`; không nhận `0`, số âm, số thập phân, tên chữ hoặc số có số 0 đứng đầu. Giữ ID dưới dạng chuỗi để việc chọn prefix không phụ thuộc giới hạn `Int32`. Đây là quy ước cú pháp đề xuất; yêu cầu cốt lõi là không đặt giới hạn cứng về số lượng nhóm.

Tính năng được giới hạn ở `devkit mcp`. Không tự mở rộng option sang `generator`, `server`, VSIX hoặc thay ý nghĩa `--profile` hiện tại.

### 2.1. Mapping toàn bộ connection keys

| Args tương ứng | Bộ mặc định | Bộ `--env 1` |
|---|---|---|
| `--auth` | `DEVKIT_AUTH_TYPE` | `DEVKIT_1_AUTH_TYPE` |
| `--url` | `DEVKIT_URL` | `DEVKIT_1_URL` |
| `--clientid` | `DEVKIT_CLIENT_ID` | `DEVKIT_1_CLIENT_ID` |
| `--clientsecret` | `DEVKIT_CLIENT_SECRET` | `DEVKIT_1_CLIENT_SECRET` |
| `--pacprofile` | `DEVKIT_PAC_PROFILE` | `DEVKIT_1_PAC_PROFILE` |
| `--username` | `DEVKIT_USERNAME` | `DEVKIT_1_USERNAME` |
| `--password` | `DEVKIT_PASSWORD` | `DEVKIT_1_PASSWORD` |
| `--domain` | `DEVKIT_DOMAIN` | `DEVKIT_1_DOMAIN` |
| `--conn` | `DEVKIT_CONNECTION` | `DEVKIT_1_CONNECTION` |

Ánh xạ tổng quát: chèn `<id>_` ngay sau `DEVKIT_` của một connection key đã được hỗ trợ. Không tạo danh sách hard-code cho nhóm 1, 2, 3.

Chỉ áp dụng mapping cho connection keys. `DEVKIT_NO_COLOR` tiếp tục là thiết lập output hiện có; `--env` không tự tạo convention `DEVKIT_1_NO_COLOR`. Các option `--category`, `--dry-run`, `--as-user`, `--transport` vẫn là option của instance.

### 2.2. Ví dụ `.env`

```dotenv
# Bộ mặc định
DEVKIT_AUTH_TYPE=ClientSecret
DEVKIT_URL=https://default-org.crm.dynamics.com
DEVKIT_CLIENT_ID=<default-app-id>
DEVKIT_CLIENT_SECRET=<default-secret>

# Bộ 1
DEVKIT_1_AUTH_TYPE=ClientSecret
DEVKIT_1_URL=https://org-one.crm.dynamics.com
DEVKIT_1_CLIENT_ID=<app-id-one>
DEVKIT_1_CLIENT_SECRET=<secret-one>

# Bộ 2: auth có thể khác bộ mặc định
DEVKIT_2_AUTH_TYPE=FromPac
DEVKIT_2_PAC_PROFILE=UAT

# Bộ 100: không cần khai báo các nhóm ở giữa
DEVKIT_100_AUTH_TYPE=ClientSecret
DEVKIT_100_URL=https://org-hundred.crm.dynamics.com
DEVKIT_100_CLIENT_ID=<app-id-hundred>
DEVKIT_100_CLIENT_SECRET=<secret-hundred>
```

Không bắt buộc có bộ mặc định nếu chỉ sử dụng các instance có `--env`. Mỗi nhóm có thể trỏ tới một Dataverse khác hoặc cùng Dataverse với thông tin xác thực khác. File mẫu chỉ chứa placeholder; credentials thật nằm trong `.env` local.

## 3. Args trước, `.env` là fallback

### 3.1. Thứ tự xử lý

1. Parse arguments, bao gồm tên instance, connection args và `--env`.
2. Xử lý các chế độ thông tin: help, `--tools`, `--setup-guide`. Các chế độ này không kết nối Dataverse và không yêu cầu bộ key tồn tại.
3. Kiểm tra connection args. Nếu đã đủ để chọn và tạo kết nối theo auth hiện có, dùng chúng trực tiếp; không yêu cầu tìm thấy `.env` hoặc nhóm `--env`.
4. Nếu cần fallback cho connection còn thiếu, tìm `.env` bằng cơ chế tìm file hiện có, rồi chọn bộ key mặc định hoặc `DEVKIT_<id>_*`.
5. Chỉ bổ sung các giá trị connection còn thiếu từ bộ đã chọn. Mọi giá trị được truyền trực tiếp bằng args giữ quyền ưu tiên.
6. Validate kết nối hiệu lực theo auth tương ứng. Nếu vẫn thiếu thông tin bắt buộc, báo lỗi; không vay mượn giá trị từ nhóm khác.
7. Tạo một `ServiceClient`, sau đó khởi động MCP host của instance đó.

Không coi việc thiếu một tham số tùy chọn là lý do bắt buộc phải có `.env`. Những mặc định của auth hiện có, như AppId tích hợp cho Interactive/DeviceCode/OAuth, phải được giữ. Cần đối chiếu resolver và validator hiện tại khi xác định bộ args đã đủ; không tạo một bảng yêu cầu auth mới mâu thuẫn với các connection builder.

Ví dụ các đường chạy trực tiếp cần tiếp tục hoạt động: ClientSecret với đủ URL/AppId/secret; FromPac với profile được chỉ định; Interactive/DeviceCode với URL và các mặc định auth hợp lệ; legacy `--conn` đầy đủ.

### 3.2. Không tìm thấy nhóm chỉ gây lỗi khi cần fallback

| Tình huống | Kết quả yêu cầu |
|---|---|
| Args đã đủ, không có `.env` | Kết nối bằng args |
| Args đã đủ, có `--env 99`, không có bộ 99 | Kết nối bằng args; không cần fallback nên không báo thiếu bộ 99 |
| Args thiếu, không có `--env`, có bộ mặc định | Bổ sung từ `DEVKIT_*` |
| Args thiếu, `--env 1`, có bộ 1 | Bổ sung từ `DEVKIT_1_*` |
| Args thiếu, `--env 1`, chỉ có bộ mặc định | Báo không tìm thấy bộ 1 |
| Args thiếu, `--env 1`, không tìm thấy `.env` | Báo không tìm thấy file để lấy bộ 1 |
| Bộ 1 có nhưng vẫn thiếu trường bắt buộc sau khi ghép args | Báo thiếu thông tin của bộ 1 |
| Args chứa giá trị sai hoặc kết nối bằng args thất bại | Báo lỗi tương ứng; không tự thử kết nối khác trong `.env` |

Ví dụ override một trường:

```powershell
devkit mcp --env 1 devkit-codex-2 `
  --url https://override-org.crm.dynamics.com --dry-run
```

Nếu các connection args khác còn thiếu, chúng được bổ sung từ bộ 1. URL hiệu lực là URL trên args. `--env 1` không phải một ràng buộc cấm override URL; `whoami` phải dùng để kiểm tra môi trường thực tế.

Ví dụ cần báo lỗi: bộ mặc định có `DEVKIT_CLIENT_SECRET`, bộ 1 thiếu `DEVKIT_1_CLIENT_SECRET`, command cũng không có `--clientsecret`. Nếu auth hiệu lực là ClientSecret thì không được lấy secret mặc định để hoàn thiện bộ 1.

### 3.3. Định nghĩa nhóm tồn tại và cách tìm file

- Một nhóm tồn tại khi file chứa ít nhất một connection key được nhận diện của nhóm đó. Key lạ như `DEVKIT_1_NOTE` không đủ để xác định một nhóm connection.
- Có key nhưng giá trị rỗng nghĩa là nhóm tồn tại nhưng có thể chưa đủ thông tin. Validate theo kết nối hiệu lực sau khi áp dụng args và mặc định auth.
- Chỉ dùng file `.env` đã được resolver chọn. Nếu file gần nhất thiếu bộ 1, không tiếp tục tìm bộ 1 ở file cha hoặc ghép nhiều file với nhau.
- Giữ cách parse hiện tại: key không phân biệt hoa thường, bỏ comment/dòng trống, bỏ cặp nháy bao ngoài giá trị. Không thêm biến connection từ OS environment.
- Lỗi mới nên nêu số nhóm, prefix và trường còn thiếu; không in secret, password hay nguyên connection string.

Thông báo mới gợi ý:

```text
Environment group '1' was not found in the selected .env file (expected DEVKIT_1_* connection keys).
Cannot resolve environment group '1': no project .env file was found.
Environment group '1': DEVKIT_1_CLIENT_SECRET or --clientsecret is required for ClientSecret authentication.
```

Những lỗi này phải kết thúc process với exit code khác 0, trước khi MCP server nhận tool calls. Giữ nguyên các thông báo lỗi hiện có của đường chạy mặc định nếu tính năng mới không thay đổi nguyên nhân lỗi.

## 4. Nhiều instance chạy đồng thời

Mỗi entry trong MCP client khởi chạy một process `devkit mcp` riêng. `--env` được chọn lúc startup; process không đổi nhóm giữa các tool calls. Một process không tự kết nối tất cả các nhóm chỉ vì chúng có mặt trong `.env`.

Ví dụ cấu hình Codex sau khi tính năng được triển khai:

```toml
[mcp_servers.devkit-codex]
command = "devkit"
args = ["mcp", "devkit-codex"]
cwd = "E:/path/to/project"
startup_timeout_sec = 20
tool_timeout_sec = 600

[mcp_servers.devkit-codex-2]
command = "devkit"
args = ["mcp", "--env", "1", "devkit-codex-2", "--dry-run"]
cwd = "E:/path/to/project"
startup_timeout_sec = 20
tool_timeout_sec = 600

[mcp_servers.devkit-uat]
command = "devkit"
args = ["mcp", "--env", "2", "devkit-uat", "--category", "readonly"]
cwd = "E:/path/to/project"
startup_timeout_sec = 20
tool_timeout_sec = 600
```

Thay `cwd` bằng thư mục dự án trên máy. Các ví dụ là mẫu tài liệu; cấu hình local tiếp tục tuân theo quy tắc Git của repository. Các client khác dùng cùng command/args nhưng giữ đúng cấu trúc cấu hình riêng của từng client.

| Khái niệm | Ví dụ | Ý nghĩa |
|---|---|---|
| Tên server trong client | `devkit-codex-2` | AI chọn kết nối/tool của server này |
| Tên instance `[name]` | `devkit-codex-2` | Tên hiển thị do DevKit công bố và ghi log |
| Bộ key fallback | `--env 1` | Đọc `DEVKIT_1_*` khi cần |
| Process ID | Giá trị runtime từ `whoami` | Phân biệt process thực sự đang chạy |
| Dataverse đích | URL/OrganizationId từ `whoami` | Xác nhận nơi thao tác thực tế |

Nên đặt tên entry client và tên instance giống nhau để người dùng dễ đối chiếu. Tên có số 2 không có nghĩa phải chọn `--env 2`; trong ví dụ trên, instance thứ hai dùng bộ 1 vì bộ mặc định là instance đầu tiên.

Sau khi sửa config client, phải nạp lại cấu hình MCP hoặc restart client nếu client yêu cầu. Chỉ xác nhận nhiều instance hoạt động khi gọi được `whoami` trên từng server và nhận các PID riêng đang sống đồng thời. Một lần chạy thử rồi kết thúc process chưa chứng minh client đang giữ nhiều instance.

Không giới hạn số nhóm ở tầng cấu hình. Số process có thể chạy thực tế vẫn phụ thuộc MCP client, tài nguyên máy và khả năng kết nối Dataverse.

## 5. Help và tài liệu discoverability cho người dùng và AI

Việc cập nhật các bề mặt bên dưới là một phần của phạm vi triển khai `--env`, không chỉ là thêm một option vào parser. Nội dung phải nhất quán về args-first, prefix, lỗi fallback và nhiều instance.

### 5.1. `devkit help`, `devkit --help`

Root help cần bổ sung một đoạn ngắn trong phần MCP và project `.env`:

```text
MCP connection fallback:
  Explicit connection args take priority.
  Missing connection values use DEVKIT_* from project .env.
  --env <id> selects DEVKIT_<id>_* for that fallback.
  A missing selected group is an error when fallback is needed.
  Multiple MCP instances can select different groups; no fixed group limit.

  devkit mcp devkit-codex
  devkit mcp --env 1 devkit-codex-2 --dry-run
  devkit mcp --setup-guide
```

Cập nhật cả output plain text và output Spectre có định dạng của `SpectreLog.WriteHelp()`. Không khiến người đọc hiểu rằng `--env` đã áp dụng cho mọi command CLI.

### 5.2. `devkit mcp help`, `devkit mcp --help`

Source hiện có `LegacyArgConverter.RewriteTrailingHelp()` đổi từ `help` cuối command thành `--help`, ngoại trừ khi nó là giá trị của một option. Do đó cả hai cú pháp trên cần tiếp tục trả cùng hướng dẫn MCP.

MCP help phải có:

- Option `--env <id>` với mô tả đây là bộ key fallback, mặc định dùng `DEVKIT_*`.
- Ví dụ default, `--env 1`, nhóm có số lớn như `--env 100`, kết hợp `--dry-run`/`--category readonly`, và một ví dụ đủ connection args.
- Phân biệt `[name]` với `--env` và với `--profile`.
- Quy tắc args-first; không có nhóm chỉ gây lỗi khi cần đọc fallback; không dùng bộ mặc định thay nhóm đã chọn.
- Dẫn người đọc đến `devkit mcp --setup-guide` để cấu hình nhiều process trong client.

Không dùng `--env help` như alias help: ở vị trí đó `help` là giá trị option và phải được xử lý theo validation của `<id>`.

### 5.3. `devkit mcp --tools`

Giữ catalog tool hiện có và cách phân loại theo metadata. Thêm một đoạn gợi ý ngắn ở cuối output:

```text
This catalog describes one DevKit MCP instance.
Use --env <id> to select DEVKIT_<id>_* fallback connection keys.
Explicit connection args still take priority.
Different MCP client entries can run separate instances with the same tool names.
Example: devkit mcp --env 1 devkit-codex-2 --dry-run
Run 'devkit mcp --setup-guide' for multi-instance configuration.
```

Không nhân catalog lên theo số bộ key hoặc đổi tên tool bằng cách thêm số môi trường. `--tools` chỉ in catalog; nó không xác nhận kết nối hoặc khởi động nhiều process. Số lượng tool phải tiếp tục được tính từ metadata, không hard-code trong đoạn hướng dẫn mới.

### 5.4. `devkit mcp --setup-guide`

Đây là hướng dẫn đầy đủ cho human và AI. Cần cập nhật:

1. Phần CONNECTION: args-first, bộ mặc định, bộ đánh số, ví dụ `.env` nhiều nhóm và quy tắc không trộn nhóm.
2. Bảng connection options: thêm `--env <id>` và giải thích việc thiếu `.env` không làm hỏng lệnh đã đủ connection args.
3. Phần đặt tên instance: khuyến nghị tên client/server rõ ràng; số trong tên instance độc lập với ID của bộ key.
4. Ví dụ cấu hình từng client hiện có trong setup guide: thể hiện ít nhất hai entry riêng, một default và một `--env 1`; tên entry phải duy nhất.
5. Giữ quy ước path, scope, timeout và cấu trúc cấu hình của từng client; args trong ví dụ nhiều instance chỉ chứa tên và selector, không chứa credentials thật.
6. Giải thích `cwd`, cách tìm `.env`, thời điểm cần reload/restart client, và cách chứng minh hai process đang hoạt động bằng `whoami`/PID.
7. Ví dụ `--dry-run` cho instance thứ hai; phân biệt với `--category readonly` (giới hạn catalog tool).
8. Nêu không có giới hạn cố định số bộ key và không cần khai báo danh sách nhóm.

Các chế độ help/`--tools`/`--setup-guide` phải sử dụng được khi không có credentials. Với option hợp lệ như `--env 999`, các chế độ thông tin vẫn in hướng dẫn dù nhóm 999 không tồn tại. Lỗi cú pháp option vẫn do parser xử lý.

### 5.5. Thông tin AI nhận khi instance chạy

AI có thể đọc CLI help khi cần cấu hình, nhưng một phiên MCP không tự chạy các lệnh help đó. Vì vậy đề xuất bổ sung vào server instructions hiện có: tên instance, bộ fallback được chọn, nguồn connection thực sự dùng (args, `.env`, hoặc kết hợp), cùng URL/tổ chức đã kết nối.

Ví dụ diễn đạt: `Instance: devkit-codex-2. Fallback group: 1 (DEVKIT_1_*). Connection source: project .env. Connected organization: ...`.

Nếu args đã đủ thì hướng dẫn runtime phải nói rõ fallback không được sử dụng. Không được gắn nhãn môi trường chỉ dựa vào `--env`, vì `--url` có thể ghi đè URL của nhóm.

Giữ nguyên tên tool và JSON keys hiện có. `whoami` hiện đủ để kiểm tra URL, OrganizationId và PID; việc thêm field mới cho instance/group vào JSON của `whoami` là một thay đổi contract riêng, không phải điều kiện để chọn được nhiều MCP server.

Ví dụ yêu cầu của người dùng:

```text
Dùng devkit-codex-2 gọi whoami để xác nhận môi trường.
So sánh bảng configuration giữa devkit-codex và devkit-uat, ghép theo configuration code.
```

## 6. Điểm chạm source và các vấn đề cần giữ rõ

| Thành phần | Công việc khi triển khai |
|---|---|
| `Cli/Models/McpCommandArgs.cs` | Thêm selector `--env`; không đổi ý nghĩa `[name]` |
| `Cli/Models/DevKitCommandArgs.cs` | Tái sử dụng logic args override theo từng trường và auth defaults; cung cấp đường fallback nhận bộ key đã chọn |
| `Shared/ProjectEnvironment.cs` | Tái sử dụng parser và `ConnectionKeys`; nếu cần helper ánh xạ prefix thì thêm API tương thích, không đổi nghĩa các constant mặc định |
| `Cli/Commands/McpCommand.cs` | Chọn connection từ args trước; chỉ resolve nhóm khi cần fallback; bổ sung ngữ cảnh lỗi và startup log |
| `Cli/Program.cs`, `Cli/Logging/SpectreLog.cs` | Cập nhật examples và cả hai dạng root help |
| `Cli/Commands/McpCommand.cs` (`PrintTools`, `PrintSetupGuide`) | Cập nhật discoverability và ví dụ nhiều instance |
| `Cli/Mcp/McpServerHost.cs` | Truyền thông tin instance/connection source vào server instructions nếu triển khai phần runtime guidance |
| `DynamicsCrm.DevKit.Wiki/cli/cli-mcp.md` | Đồng bộ hướng dẫn command khi tính năng đã được triển khai và kiểm chứng |

Các đường dẫn `Cli/...` và `Shared/...` trong bảng tương ứng với `DynamicsCrm.DevKit.Cli/...` và `DynamicsCrm.DevKit.Shared/...`. Công việc chính thuộc CLI; việc sửa helper Shared phải giữ tương thích với các consumer khác, gồm VSIX.

Không gọi resolver mặc định trước rồi mới cố ghi đè bằng bộ đánh số: các trường đã được điền từ default khi đó có thể bị hiểu nhầm là explicit args. Cần giữ thông tin provenance hoặc cung cấp một getter chỉ đọc bộ đã chọn ngay từ đầu.

Hai khác biệt giữa hướng dẫn và source hiện tại cần được ghi nhận khi triển khai:

- Hướng dẫn MCP nói tìm `.env` từ cwd. `McpCommand` đang gọi resolver của base args, vốn ưu tiên thư mục `JsonFile` nếu resolve được `--json`. Không tự thay cơ chế tìm file trong task chọn prefix; cần phản ánh và kiểm chứng hành vi này khi cập nhật help.
- AGENTS.md nói `--conn` được ưu tiên khi kết nối; `McpCommand.ConnectAsync()` hiện kiểm tra `AuthType` trước khi đi vào nhánh connection string. Các test đã đọc chưa xác lập hợp đồng cho cả hai cùng được cung cấp. Tài liệu này không tự chốt cách giải quyết xung đột đó. Đường `--conn` đầy đủ phải không bị các giá trị `.env` không cần thiết làm thay đổi đích kết nối; trường hợp cả `--conn` và `--auth` explicit cần được xử lý theo quyết định riêng, rõ ràng.

### 6.1. Lưu ý về trạng thái dùng chung giữa các process

- Token cache Interactive/DeviceCode dùng `connection.Name`; MCP hiện đặt tên connection là `mcp`. Khi kiểm chứng nhiều instance với các auth này, phải kiểm tra khóa cache và truy cập file đồng thời. Không khẳng định cache đã tách chỉ vì các PID khác nhau.
- Một số backup, ví dụ `ViewBackupHelper`, dùng workspace/entity/id/timestamp mà chưa có tổ chức trong đường dẫn. Chọn đúng connection không tự tách các file này. Bất kỳ thay đổi đường dẫn/format backup nào cần được thiết kế và ghi nhận riêng theo quy tắc tương thích của repository.
- Khả năng chọn nhiều connection không đồng nghĩa đã có một tool compare dữ liệu xuyên môi trường. Client/AI gọi tool từng server rồi đối chiếu kết quả; phải kiểm tra business key, bộ lọc và kết quả có bị giới hạn bản ghi hay không.

## 7. Tiêu chí nghiệm thu khi triển khai

Đây là danh sách kiểm chứng cho code sau này; việc tạo tài liệu này chưa thực hiện các kiểm chứng đó.

| Nhóm | Trường hợp cần xác nhận |
|---|---|
| Tương thích | Lệnh dùng args đầy đủ chạy không có `.env`; lệnh default tiếp tục đọc `DEVKIT_*` |
| Chọn nhóm | `--env 1` và `--env 100` chọn đúng bộ, kể cả khi không có bộ mặc định |
| Không giới hạn nhóm | File có nhiều hơn 3 nhóm và ID không liên tiếp vẫn resolve đúng; không có hằng số max-group |
| Args-first | Args đủ + `--env` trỏ nhóm không tồn tại vẫn chạy; args từng trường ghi đè đúng selected group |
| Không lẫn credentials | Nhóm 1 thiếu secret không lấy secret default; file gần nhất thiếu nhóm không lấy nhóm ở file cha |
| Lỗi | Phân biệt thiếu file, thiếu nhóm, nhóm chưa đủ dữ liệu, selector sai; không có fallback sau lỗi auth/network |
| Auth | ClientSecret, FromPac, Interactive, DeviceCode, OAuth, AD và legacy connection giữ cách validate/mặc định phù hợp |
| Help | `devkit help`, `devkit --help`, `devkit mcp help`, `devkit mcp --help` thể hiện convention nhất quán |
| Catalog/guide | `--tools`, `--setup-guide` giải thích nhiều instance; hoạt động khi không có `.env` và khi selected group không tồn tại |
| Render output | Kiểm tra trực tiếp plain text, terminal có định dạng, line wrapping của prefix/ví dụ và các snippet config |
| Runtime | MCP client thật giữ ít nhất hai instance; gọi `whoami` qua từng server và ghi nhận PID, URL, OrganizationId |
| Chính sách instance | Instance thứ hai khởi động với `--dry-run`; read hoạt động và execution policy chặn mutation |

Các test sẵn có cần tham khảo và mở rộng: `ProjectEnvironmentCoverageTests`, `DevKitCommandArgsProjectEnvironmentTests`, `McpCommandCoverageTests`, `LegacyArgConverterDeepCoverageTests` và các test help trong `ProgramMainExtraCoverageTests`. Test thay đổi cwd/biến toàn cục phải dùng `[DoNotParallelize]`.

Khi thực sự sửa CLI: build component CLI và chạy các test liên quan. Nếu sửa `Cli/Mcp/**`, thực hiện build/reinstall theo skill CLI, restart connector, gọi `whoami`, rồi đối chiếu version/build/process start/assembly SHA với manifest theo AGENTS.md. Kiểm chứng process tạm thời phải được ghi rõ là smoke test; kiểm chứng nhiều instance cần các kết nối thật còn hoạt động trong client.

## 8. Nguồn đối chiếu trong repository

- [McpCommandArgs](../../DynamicsCrm.DevKit.Cli/Models/McpCommandArgs.cs): các option MCP hiện có; chưa có `--env` tại thời điểm lập tài liệu.
- [DevKitCommandArgs](../../DynamicsCrm.DevKit.Cli/Models/DevKitCommandArgs.cs): merge args/fallback và auth defaults.
- [ProjectEnvironment](../../DynamicsCrm.DevKit.Shared/ProjectEnvironment.cs): key constants, tìm file và parser `.env`.
- [McpCommand](../../DynamicsCrm.DevKit.Cli/Commands/McpCommand.cs): startup, connection, setup guide và catalog.
- [Program](../../DynamicsCrm.DevKit.Cli/Program.cs), [SpectreLog](../../DynamicsCrm.DevKit.Cli/Logging/SpectreLog.cs), [LegacyArgConverter](../../DynamicsCrm.DevKit.Cli/Services/LegacyArgConverter.cs): command help và alias `help`.
- [McpServerHost](../../DynamicsCrm.DevKit.Cli/Mcp/McpServerHost.cs): mỗi host giữ một connection, server info/instructions.
- [WhoAmITool](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/WhoAmITool.cs): identity và runtime evidence.
- [SecureTokenCache](../../DynamicsCrm.DevKit.Shared/SecureTokenCache.cs), [ViewBackupHelper](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/ViewBackupHelper.cs): các điểm cần kiểm tra khi nhiều process cùng chạy.

Tài liệu được lập từ source và các test hiện có, cùng kết quả đã quan sát trong phiên nghiên cứu: hai server `devkit_codex` và `devkit_codex_2` có thể được client nạp và trả `whoami` từ hai PID khác nhau. Thử nghiệm đó sử dụng `.env` mặc định và args trực tiếp; chưa kiểm chứng tính năng `--env` đang được đề xuất ở đây.
