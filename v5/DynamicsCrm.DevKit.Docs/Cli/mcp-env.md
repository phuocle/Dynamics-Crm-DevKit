# ✅ Đề xuất: chọn bộ key `.env` cho nhiều DevKit MCP instance

Ngày: 2026-11-12. Trạng thái: ✅ Đã triển khai và kiểm chứng `--env <id>` (build `4.44.44.44 (12.11.2026 08:58:52)`, 150/150 unit tests pass, kiểm chứng thực tế nhiều process MCP song song).

Cập nhật theo review F1–F4: khi không truyền `--env`, giữ toàn bộ resolver trước tính năng tại commit `5160d4c7`, luôn bổ sung property trống từ `DEVKIT_*` kể cả args đã đủ. Chỉ nhánh có `--env <id>` áp dụng cơ chế bỏ qua fallback khi args đủ. Số test/build/PID ghi ở trên và mục 7 là bằng chứng lịch sử của lần triển khai đầu; kết quả kiểm chứng bản sửa được ghi riêng trong `mcp-env-review.md`.

Component chính: CLI (`DynamicsCrm.DevKit.Cli`, .NET 10), command `mcp`. Thiết kế sử dụng parser `.env` trong Shared (`ProjectEnvironment`).

## 1. ✅ Yêu cầu đã thống nhất

1. ✅ Bộ key mặc định giữ tên hiện tại: `DEVKIT_AUTH_TYPE`, `DEVKIT_URL`, `DEVKIT_CLIENT_ID`, `DEVKIT_CLIENT_SECRET`, ...
2. ✅ Có thể thêm các bộ key đánh số trong cùng file: `DEVKIT_1_AUTH_TYPE`, `DEVKIT_1_URL`, ...; tiếp theo là `DEVKIT_2_*`, `DEVKIT_3_*`, ...
3. ✅ Process chọn bộ key bằng `devkit mcp --env 1 [name] [options]`.
4. ✅ **Không có `--env`: giữ nguyên logic kết nối cũ.** Các property explicit giữ giá trị; property trống vẫn được bổ sung từ `DEVKIT_*`, kể cả các trường tùy chọn khi args đã đủ. Có `--env`: args đủ thì dùng trực tiếp; args thiếu thì chỉ bổ sung từ nhóm được chọn. Cả hai nhánh vẫn dùng được args đầy đủ khi không có `.env`.
5. ✅ Khi cần lấy giá trị còn thiếu từ `.env`, `--env 1` chỉ chọn bộ `DEVKIT_1_*`. Không tìm thấy bộ được chọn thì báo lỗi; không tự chuyển sang bộ mặc định hoặc bộ khác.
6. ✅ Không giới hạn số lượng bộ key trong `.env`; bỏ giới hạn tối đa 3 môi trường của đề xuất trước.
7. ✅ Mỗi MCP instance giữ một kết nối Dataverse riêng trong suốt vòng đời process. MCP client có thể khởi chạy nhiều instance cùng lúc.

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

## 2. ✅ Phạm vi và convention đặt key

Cú pháp mới:

```text
devkit mcp [name] [--env <id>] [connection options] [MCP options]
```

| Cách gọi | Bộ key fallback | Trạng thái |
|---|---|---|
| Không có `--env` | `DEVKIT_<FIELD>` | ✅ |
| `--env 1` | `DEVKIT_1_<FIELD>` | ✅ |
| `--env 2` | `DEVKIT_2_<FIELD>` | ✅ |
| `--env 10` | `DEVKIT_10_<FIELD>` | ✅ |
| `--env 100` | `DEVKIT_100_<FIELD>` | ✅ |

Các nhóm không cần liên tiếp. Có nhóm `1` và `100` mà không có nhóm `2` vẫn hợp lệ. Không cần danh sách `DEVKIT_ENVIRONMENTS`, số lượng nhóm, hoặc cấu hình đăng ký nhóm riêng.

✅ Quy ước bổ sung cho `<id>`: dùng chuỗi chữ số nguyên dương dạng chuẩn (`ProjectEnvironment.IsValidGroupId`), như `1`, `2`, `10`; không nhận `0`, số âm, số thập phân, tên chữ hoặc số có số 0 đứng đầu. Giữ ID dưới dạng chuỗi để việc chọn prefix không phụ thuộc giới hạn `Int32`.

✅ Tính năng được giới hạn ở `devkit mcp`. Không tự mở rộng option sang `generator`, `server`, VSIX hoặc thay ý nghĩa `--profile` hiện tại.

### 2.1. ✅ Mapping toàn bộ connection keys

| Args tương ứng | Bộ mặc định | Bộ `--env 1` | Trạng thái |
|---|---|---|---|
| `--auth` | `DEVKIT_AUTH_TYPE` | `DEVKIT_1_AUTH_TYPE` | ✅ |
| `--url` | `DEVKIT_URL` | `DEVKIT_1_URL` | ✅ |
| `--clientid` | `DEVKIT_CLIENT_ID` | `DEVKIT_1_CLIENT_ID` | ✅ |
| `--clientsecret` | `DEVKIT_CLIENT_SECRET` | `DEVKIT_1_CLIENT_SECRET` | ✅ |
| `--pacprofile` | `DEVKIT_PAC_PROFILE` | `DEVKIT_1_PAC_PROFILE` | ✅ |
| `--username` | `DEVKIT_USERNAME` | `DEVKIT_1_USERNAME` | ✅ |
| `--password` | `DEVKIT_PASSWORD` | `DEVKIT_1_PASSWORD` | ✅ |
| `--domain` | `DEVKIT_DOMAIN` | `DEVKIT_1_DOMAIN` | ✅ |
| `--conn` | `DEVKIT_CONNECTION` | `DEVKIT_1_CONNECTION` | ✅ |

✅ Ánh xạ tổng quát (`ProjectEnvironment.GetGroupKey`): chèn `<id>_` ngay sau `DEVKIT_` của một connection key đã được hỗ trợ. Không tạo danh sách hard-code cho nhóm 1, 2, 3.

✅ Chỉ áp dụng mapping cho connection keys. `DEVKIT_NO_COLOR` tiếp tục là thiết lập output hiện có; `--env` không tự tạo convention `DEVKIT_1_NO_COLOR`. Các option `--category`, `--dry-run`, `--as-user`, `--transport` vẫn là option của instance.

### 2.2. ✅ Ví dụ `.env`

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

## 3. ✅ Nhánh mặc định tương thích cũ; nhánh selector dùng args-first

### 3.1. ✅ Thứ tự xử lý

1. ✅ Parse arguments, bao gồm tên instance, connection args và `--env`.
2. ✅ Parser help (`--help`, hoặc trailing `help` được rewrite) in hướng dẫn mà không chạy validation selector trong command: `devkit mcp --env 0 --help` vẫn trả `0`. `--tools` và `--setup-guide` chạy qua validation selector trước, nhưng không yêu cầu file/nhóm tồn tại và không kết nối Dataverse.
3. ✅ **Không truyền `--env`:** luôn chạy resolver mặc định cũ. Tìm `.env` từ resolved `--json` hoặc working directory; lấy file gần nhất và chỉ đọc `DEVKIT_*`. Bổ sung mọi property trống theo semantics cũ, kể cả username/password/domain/profile khi args đã đủ. Không bắt buộc file hoặc nhóm default phải tồn tại.
4. ✅ Nhánh mặc định giữ cả quy tắc điền `Connection` và `AuthType` độc lập: `--conn` explicit vẫn có thể được ghép thêm `DEVKIT_AUTH_TYPE`; `--auth` explicit vẫn có thể được ghép thêm `DEVKIT_CONNECTION`. Auth không rỗng chọn modern builder như trước. Với ClientSecret, ClientId/ClientSecret chuẩn sau khi ghép vẫn ưu tiên hơn aliases username/password. Không áp các guard ưu tiên mới vào nhánh này.
5. ✅ **Có `--env <id>` hợp lệ:** kiểm tra `HasCompleteExplicitConnectionArgs`. Nếu args đã đủ theo builder hiện có, dùng trực tiếp và không tìm/đọc `.env`; không yêu cầu file/nhóm tồn tại. FromPac không bắt buộc profile (dùng active PAC profile), AD không bắt buộc domain riêng.
6. ✅ Với selector khi args còn thiếu: chỉ tìm file `.env` gần nhất, kiểm tra nhóm được chọn, rồi bổ sung property trống từ `DEVKIT_<id>_*`. Không chạy resolver default trước. Giữ guard ưu tiên: `--conn` explicit không nhận auth từ nhóm; `--auth` explicit không nhận connection string từ nhóm.
7. ✅ Cả hai nhánh validate/chọn builder/kết nối theo auth hiệu lực, rồi khởi động host với một `ServiceClient`. Không thử nhóm khác sau lỗi auth/network. Các auth defaults và `ConnectionFromProjectEnvironment` của nhánh default được giữ như baseline.

✅ Không coi việc thiếu một tham số tùy chọn là lý do bắt buộc phải có `.env`. Những mặc định của auth hiện có, như AppId tích hợp cho Interactive/DeviceCode/OAuth, được giữ.

✅ Ví dụ các đường chạy trực tiếp đã được kiểm chứng: ClientSecret với đủ URL/AppId/secret; FromPac với profile được chỉ định; Interactive/DeviceCode với URL và các mặc định auth hợp lệ; legacy `--conn` đầy đủ.

### 3.2. ✅ Không tìm thấy nhóm chỉ gây lỗi khi cần fallback

| Tình huống | Kết quả yêu cầu | Trạng thái |
|---|---|---|
| Args đã đủ, không có `--env`, có `.env` | Vẫn bổ sung property trống từ `DEVKIT_*` theo logic cũ | ✅ |
| Args đã đủ, không có `.env` | Kết nối bằng args | ✅ |
| Args đã đủ, có `--env 99`, không có bộ 99 | Kết nối bằng args; không cần fallback nên không báo thiếu bộ 99 | ✅ |
| Args thiếu, không có `--env`, có bộ mặc định | Bổ sung từ `DEVKIT_*` | ✅ |
| Args thiếu, `--env 1`, có bộ 1 | Bổ sung từ `DEVKIT_1_*` | ✅ |
| Args thiếu, `--env 1`, chỉ có bộ mặc định | Báo không tìm thấy bộ 1 | ✅ |
| Args thiếu, `--env 1`, không tìm thấy `.env` | Báo không tìm thấy file để lấy bộ 1 | ✅ |
| Bộ 1 có nhưng vẫn thiếu trường bắt buộc sau khi ghép args | Báo thiếu thông tin của bộ 1 | ✅ |
| Args chứa giá trị sai hoặc kết nối bằng args thất bại | Báo lỗi tương ứng; không tự thử kết nối khác trong `.env` | ✅ |

Ví dụ override một trường:

```powershell
devkit mcp --env 1 devkit-codex-2 `
  --url https://override-org.crm.dynamics.com --dry-run
```

Nếu các connection args khác còn thiếu, chúng được bổ sung từ bộ 1. URL hiệu lực là URL trên args. `--env 1` không phải một ràng buộc cấm override URL; `whoami` phải dùng để kiểm tra môi trường thực tế.

Ví dụ cần báo lỗi: bộ mặc định có `DEVKIT_CLIENT_SECRET`, bộ 1 thiếu `DEVKIT_1_CLIENT_SECRET`, command cũng không có `--clientsecret`. Nếu auth hiệu lực là ClientSecret thì không được lấy secret mặc định để hoàn thiện bộ 1.

### 3.3. ✅ Định nghĩa nhóm tồn tại và cách tìm file

- ✅ Một nhóm tồn tại (`ProjectEnvironment.HasGroup`) khi file chứa ít nhất một connection key được nhận diện của nhóm đó. Key lạ như `DEVKIT_1_NOTE` không đủ để xác định một nhóm connection.
- ✅ Có key nhưng giá trị rỗng nghĩa là nhóm tồn tại nhưng có thể chưa đủ thông tin. Validate theo kết nối hiệu lực sau khi áp dụng args và mặc định auth.
- ✅ Chỉ dùng file `.env` đã được resolver chọn. Nếu file gần nhất thiếu bộ 1, không tiếp tục tìm bộ 1 ở file cha hoặc ghép nhiều file với nhau.
- ✅ Giữ cách parse hiện tại: key không phân biệt hoa thường, bỏ comment/dòng trống, bỏ cặp nháy bao ngoài giá trị. Không thêm biến connection từ OS environment.
- ✅ Lỗi mới nêu số nhóm, prefix và trường còn thiếu; không in secret, password hay nguyên connection string.

Thông báo lỗi đã triển khai:

```text
Environment group '1' was not found in the selected .env file (expected DEVKIT_1_* connection keys).
Cannot resolve environment group '1': no project .env file was found.
Environment group '1': DEVKIT_1_CLIENT_SECRET or --clientsecret is required for ClientSecret authentication.
```

✅ Các lỗi đều xảy ra trước khi MCP server nhận tool calls. Selector sai, thiếu file hoặc thiếu nhóm trả exit code `2`; nhóm đã tồn tại nhưng thiếu URL/credentials bắt buộc như ví dụ thiếu secret ở trên phát sinh exception và trả `1`. Không cam kết mọi lỗi validation đều trả `2`. Các thông báo lỗi hiện có của đường chạy mặc định được giữ nguyên.

## 4. ✅ Nhiều instance chạy đồng thời

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

## 5. ✅ Help và tài liệu discoverability cho người dùng và AI

Việc cập nhật các bề mặt bên dưới là một phần của phạm vi triển khai `--env`, không chỉ là thêm một option vào parser. Nội dung nhất quán về args-first, prefix, lỗi fallback và nhiều instance.

### 5.1. ✅ `devkit help`, `devkit --help`

Root help đã bổ sung đoạn ngắn trong phần MCP và project `.env`:

```text
MCP connection fallback:
  Without --env, the original DEVKIT_* per-property merge is preserved.
  Optional fields, auth/conn merging, and credential alias priority stay as before.
  With --env <id>, complete args skip .env; missing values use DEVKIT_<id>_*.
  A missing selected group is an error when fallback is needed.
  Multiple MCP instances can select different groups; no fixed group limit.

  devkit mcp devkit-codex
  devkit mcp --env 1 devkit-codex-2 --dry-run
  devkit mcp --setup-guide
```

✅ Đã cập nhật cả output plain text và output Spectre có định dạng của `SpectreLog.WriteHelp()`.

### 5.2. ✅ `devkit mcp help`, `devkit mcp --help`

Source hiện có `LegacyArgConverter.RewriteTrailingHelp()` đổi từ `help` cuối command thành `--help`, ngoại trừ khi nó là giá trị của một option. Do đó cả hai cú pháp trên tiếp tục trả cùng hướng dẫn MCP.

MCP help đã có:

- ✅ Option `--env <id>` với mô tả đây là bộ key fallback, mặc định dùng `DEVKIT_*`.
- ✅ Ví dụ default, `--env 1`, nhóm có số lớn như `--env 100`, kết hợp `--dry-run`/`--category readonly`, và một ví dụ đủ connection args.
- ✅ Phân biệt `[name]` với `--env` và với `--profile`.
- ✅ Không có selector giữ resolver cũ, gồm các trường tùy chọn và ưu tiên auth/conn/aliases. Có selector mới dùng args-first; không có nhóm chỉ gây lỗi khi cần đọc fallback; không dùng bộ mặc định thay nhóm đã chọn.
- ✅ Dẫn người đọc đến `devkit mcp --setup-guide` để cấu hình nhiều process trong client.

✅ Không dùng `--env help` như alias help: ở vị trí đó `help` là giá trị option và được xử lý theo validation của `<id>` (trả mã lỗi `2`).

### 5.3. ✅ `devkit mcp --tools`

Giữ catalog tool hiện có và cách phân loại theo metadata. Đã thêm đoạn gợi ý ngắn ở cuối output:

```text
This catalog describes one DevKit MCP instance.
Use --env <id> to select DEVKIT_<id>_* fallback connection keys.
Explicit connection args still take priority.
Without --env, the original DEVKIT_* per-property merge is preserved,
including optional fields, auth/conn merging, and credential alias priority.
Different MCP client entries can run separate instances with the same tool names.
Example: devkit mcp --env 1 devkit-codex-2 --dry-run
Run 'devkit mcp --setup-guide' for multi-instance configuration.
```

✅ Không nhân catalog lên theo số bộ key hoặc đổi tên tool bằng cách thêm số môi trường. Số lượng tool tiếp tục được tính từ metadata.

### 5.4. ✅ `devkit mcp --setup-guide`

Hướng dẫn đầy đủ cho human và AI đã được cập nhật:

1. ✅ Phần CONNECTION: phân biệt default giữ resolver cũ với selector args-first; bộ mặc định, bộ đánh số, ví dụ `.env` nhiều nhóm và quy tắc không trộn nhóm. Profile PAC và domain AD là tùy chọn theo builder.
2. ✅ Bảng connection options: thêm `--env <id>` và giải thích việc thiếu `.env` không làm hỏng lệnh đã đủ connection args.
3. ✅ Phần đặt tên instance: khuyến nghị tên client/server rõ ràng; số trong tên instance độc lập với ID của bộ key.
4. ✅ Ví dụ cấu hình từng client hiện có trong setup guide (Claude Code, Codex, VS Code Copilot, Antigravity, ZCode): thể hiện hai entry riêng, một default và một `--env 1`; tên entry duy nhất.
5. ✅ Giữ quy ước path, scope, timeout và cấu trúc cấu hình của từng client; args trong ví dụ nhiều instance chỉ chứa tên và selector, không chứa credentials thật.
6. ✅ Giải thích `cwd`, cách tìm `.env`, thời điểm cần reload/restart client, và cách chứng minh hai process đang hoạt động bằng `whoami`/PID.
7. ✅ Ví dụ `--dry-run` cho instance thứ hai; phân biệt với `--category readonly` (giới hạn catalog tool).
8. ✅ Nêu không có giới hạn cố định số bộ key và không cần khai báo danh sách nhóm.

✅ Các chế độ help/`--tools`/`--setup-guide` hoạt động khi không có credentials. Với option hợp lệ như `--env 999`, các chế độ thông tin vẫn in hướng dẫn dù nhóm 999 không tồn tại.

### 5.5. ✅ Thông tin AI nhận khi instance chạy

Đã bổ sung vào server instructions của `McpServerHost` (`BuildServerInstructions`): tên instance, bộ fallback được chọn, nguồn connection thực sự dùng (args, `.env`, hoặc kết hợp), cùng URL/tổ chức đã kết nối.

Ví dụ output thực tế: `Instance: devkit-codex-2. Fallback group: 1 (DEVKIT_1_*). Connection source: project .env (DEVKIT_1_*). Connected to Dataverse environment: https://org2f3915a3.crm5.dynamics.com/ (🟢DEVKITV4).`

✅ Khi có selector và args đã đủ thì hướng dẫn runtime nói rõ fallback không được sử dụng (`Fallback group: 1 (DEVKIT_1_*, not used)` và `Connection source: command-line arguments`). Không có selector vẫn chạy merge mặc định; metadata nguồn không thay đổi dữ liệu kết nối.

✅ Giữ nguyên tên tool và JSON keys hiện có của `whoami`.

Ví dụ yêu cầu của người dùng:

```text
Dùng devkit-codex-2 gọi whoami để xác nhận môi trường.
So sánh bảng configuration giữa devkit-codex và devkit-uat, ghép theo configuration code.
```

## 6. ✅ Điểm chạm source và các vấn đề cần giữ rõ

| Thành phần | Công việc khi triển khai | Trạng thái |
|---|---|---|
| `Cli/Models/McpCommandArgs.cs` | Thêm selector `--env`; không đổi ý nghĩa `[name]` | ✅ |
| `Cli/Models/DevKitCommandArgs.cs` | Tái sử dụng logic args override theo từng trường và auth defaults; cung cấp đường fallback nhận bộ key đã chọn | ✅ |
| `Shared/ProjectEnvironment.cs` | Tái sử dụng parser và `ConnectionKeys`; thêm helper ánh xạ prefix (`GetValue`, `IsValidGroupId`, `GetGroupPrefix`, `GetGroupKey`, `HasGroup`) tương thích với VSIX/Tool | ✅ |
| `Cli/Commands/McpCommand.cs` | Chọn connection từ args trước; chỉ resolve nhóm khi cần fallback; bổ sung ngữ cảnh lỗi và startup log | ✅ |
| `Cli/Program.cs`, `Cli/Logging/SpectreLog.cs` | Cập nhật examples và cả hai dạng root help | ✅ |
| `Cli/Commands/McpCommand.cs` (`PrintTools`, `PrintSetupGuide`) | Cập nhật discoverability và ví dụ nhiều instance | ✅ |
| `Cli/Mcp/McpServerHost.cs` | Truyền thông tin instance/connection source vào server instructions | ✅ |
| `DynamicsCrm.DevKit.Wiki/cli/cli-mcp.md` | Đồng bộ hướng dẫn command khi tính năng đã được triển khai và kiểm chứng | ✅ |

Các đường dẫn `Cli/...` và `Shared/...` trong bảng tương ứng với `DynamicsCrm.DevKit.Cli/...` và `DynamicsCrm.DevKit.Shared/...`. Công việc chính thuộc CLI; helper Shared giữ tương thích 100% với VSIX và Tool.

✅ `McpCommand.ResolveConnectionSettings` xử lý `settings.Env == null` bằng resolver cũ trước khi xét completeness. Với selector, không gọi resolver mặc định trước rồi mới ghi đè bằng bộ đánh số: chỉ kiểm tra `HasCompleteExplicitConnectionArgs` và resolve trực tiếp nhóm được chọn khi cần.

✅ Hai điểm đã được xử lý và kiểm chứng:

- ✅ Cơ chế tìm file `.env`: giữ nguyên `ResolveProjectEnvironmentSearchDirectory()` và phản ánh rõ trong help/setup guide.
- ✅ Đường `--conn` đầy đủ **khi có selector**: `HasCompleteExplicitConnectionArgs()` nhận diện `--conn` explicit khi không truyền `--auth`; resolver nhóm không nạp auth đè lên `--conn` explicit (hoặc connection khi `--auth` đã được chỉ định). Không có selector giữ merge cả hai property như baseline cũ.

### 6.1. Lưu ý về trạng thái dùng chung giữa các process

- Token cache Interactive/DeviceCode dùng `connection.Name`; MCP hiện đặt tên connection là `mcp`. Khi kiểm chứng nhiều instance với các auth này, phải kiểm tra khóa cache và truy cập file đồng thời. Không khẳng định cache đã tách chỉ vì các PID khác nhau.
- Một số backup, ví dụ `ViewBackupHelper`, dùng workspace/entity/id/timestamp mà chưa có tổ chức trong đường dẫn. Chọn đúng connection không tự tách các file này. Bất kỳ thay đổi đường dẫn/format backup nào cần được thiết kế và ghi nhận riêng theo quy tắc tương thích của repository.
- Khả năng chọn nhiều connection không đồng nghĩa đã có một tool compare dữ liệu xuyên môi trường. Client/AI gọi tool từng server rồi đối chiếu kết quả; phải kiểm tra business key, bộ lọc và kết quả có bị giới hạn bản ghi hay không.

## 7. ✅ Bằng chứng nghiệm thu lần triển khai đầu (trước review)

Danh sách bên dưới ghi lại kết quả lần triển khai đầu (150/150 tests pass), build `4.44.44.44 (12.11.2026 08:58:52)`, SHA256 `585561686D1D92E386604A615273FE940C52D0ED8EB50C73ED8A58927D632734`. Review sau đó phát hiện F1–F4; bảng lịch sử này không thay thế kết quả kiểm chứng bản sửa trong `mcp-env-review.md`.

| Nhóm | Trường hợp cần xác nhận | Trạng thái |
|---|---|---|
| Tương thích | Lệnh dùng args đầy đủ chạy không có `.env`; lệnh default tiếp tục đọc `DEVKIT_*` | ✅ |
| Chọn nhóm | `--env 1` và `--env 100` chọn đúng bộ, kể cả khi không có bộ mặc định | ✅ |
| Không giới hạn nhóm | File có nhiều hơn 3 nhóm và ID không liên tiếp vẫn resolve đúng; không có hằng số max-group | ✅ |
| Args-first | Args đủ + `--env` trỏ nhóm không tồn tại vẫn chạy; args từng trường ghi đè đúng selected group | ✅ |
| Không lẫn credentials | Nhóm 1 thiếu secret không lấy secret default; file gần nhất thiếu nhóm không lấy nhóm ở file cha | ✅ |
| Lỗi | Phân biệt thiếu file, thiếu nhóm, nhóm chưa đủ dữ liệu, selector sai; không có fallback sau lỗi auth/network | ✅ |
| Auth | ClientSecret, FromPac, Interactive, DeviceCode, OAuth, AD và legacy connection giữ cách validate/mặc định phù hợp | ✅ |
| Help | `devkit help`, `devkit --help`, `devkit mcp help`, `devkit mcp --help` thể hiện convention nhất quán | ✅ |
| Catalog/guide | `--tools`, `--setup-guide` giải thích nhiều instance; hoạt động khi không có `.env` và khi selected group không tồn tại | ✅ |
| Render output | Kiểm tra trực tiếp plain text, terminal có định dạng, line wrapping của prefix/ví dụ và các snippet config | ✅ |
| Runtime | Hai process MCP (`devkit mcp devkit-codex` và `devkit mcp --env 1 devkit-codex-2 --dry-run`) chạy đồng thời (PID `14556` & `15592`), trả `whoami` độc lập khớp manifest SHA và org `🟢DEVKITV4` (`82131d86-1aa7-f011-8706-00224806e819`) | ✅ |
| Chính sách instance | Instance thứ hai khởi động với `--dry-run`; read (`whoami`) hoạt động và execution policy chặn mutation (`publish_customizations` trả `[DryRun] Would PUBLISH ALL customizations.`) | ✅ |

✅ Các bộ unit test đã cập nhật và chạy pass: `ProjectEnvironmentCoverageTests`, `DevKitCommandArgsProjectEnvironmentTests`, `McpCommandCoverageTests`, `McpServerHostCoverageTests`, `LegacyArgConverterDeepCoverageTests`, `ProgramAndCommandCoverageTests`, và `ProgramMainExtraCoverageTests`.

## 8. ✅ Nguồn đối chiếu trong repository

- ✅ [McpCommandArgs](../../DynamicsCrm.DevKit.Cli/Models/McpCommandArgs.cs): option `--env <id>` và metadata trạng thái fallback.
- ✅ [DevKitCommandArgs](../../DynamicsCrm.DevKit.Cli/Models/DevKitCommandArgs.cs): `HasExplicitConnectionArgs`, `HasCompleteExplicitConnectionArgs`, và `ResolveProjectEnvironmentDefaults(envValues, groupId)`.
- ✅ [ProjectEnvironment](../../DynamicsCrm.DevKit.Shared/ProjectEnvironment.cs): key constants, tìm file, parser `.env` và các helper group (`IsValidGroupId`, `GetGroupPrefix`, `GetGroupKey`, `HasGroup`, `GetValue`).
- ✅ [McpCommand](../../DynamicsCrm.DevKit.Cli/Commands/McpCommand.cs): startup, validation `--env`, args-first connection resolution, setup guide và catalog.
- ✅ [Program](../../DynamicsCrm.DevKit.Cli/Program.cs), [SpectreLog](../../DynamicsCrm.DevKit.Cli/Logging/SpectreLog.cs), [LegacyArgConverter](../../DynamicsCrm.DevKit.Cli/Services/LegacyArgConverter.cs): command help và alias `help`.
- ✅ [McpServerHost](../../DynamicsCrm.DevKit.Cli/Mcp/McpServerHost.cs): mỗi host giữ một connection, `BuildServerInstructions` công bố instance/fallback group/connection source.
- ✅ [WhoAmITool](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/WhoAmITool.cs): identity và runtime evidence.
- ✅ [cli-mcp.md](../../DynamicsCrm.DevKit.Wiki/cli/cli-mcp.md): tài liệu Wiki đồng bộ cho `devkit mcp`.
- [SecureTokenCache](../../DynamicsCrm.DevKit.Shared/SecureTokenCache.cs), [ViewBackupHelper](../../DynamicsCrm.DevKit.Cli/Mcp/Tools/Helper/ViewBackupHelper.cs): các điểm lưu ý khi nhiều process cùng chạy.
