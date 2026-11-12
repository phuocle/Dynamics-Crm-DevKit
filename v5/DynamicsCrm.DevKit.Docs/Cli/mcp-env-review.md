# Review `mcp-env.md` và các thay đổi triển khai `--env`

Ngày review: 2026-11-12. Phạm vi: diff chưa commit của CLI/MCP, helper Shared, các unit test liên quan, `mcp-env.md` và Wiki `cli-mcp.md`.

## Cập nhật triển khai bản sửa — 2026-11-12

Đã xử lý F1–F4 trong CLI, regression tests, help, `mcp-env.md` và Wiki. Các phần review bên dưới giữ lại bằng chứng và yêu cầu bàn giao tại thời điểm review, trước bản sửa này.

- **F4:** `ResolveConnectionSettings` xử lý nhánh `Env == null` trước completeness, luôn merge `DEVKIT_*` theo semantics cũ. Resolver default bỏ hai guard ưu tiên mới; chỉ resolver nhóm đánh số giữ guard `--conn`/`--auth`. Không thay parser, connection builder hoặc quy trình của command khác.
- **F1:** FromPac không cần profile explicit; AD không cần domain riêng. Selector với args đủ bỏ qua file/nhóm thiếu theo đúng hợp đồng builder.
- **F2:** sửa mô tả exit code: selector/file/nhóm không hợp lệ trả `2`; thiếu URL/credentials bắt buộc qua exception trả `1`. Giữ hành vi runtime hiện có.
- **F3:** tài liệu phân biệt parser `--help` với `--tools`/`--setup-guide`; thêm regression test `--env 0 --help` và `--env help --help` đều thành công.

Kiểm chứng đã thực hiện:

1. `dotnet build DynamicsCrm.DevKit.Cli/DynamicsCrm.DevKit.Cli.csproj`: thành công, 0 warning/error.
2. Focused net10.0 tests: **224/224 pass**. Bao gồm 24 cấu hình default đối chiếu expected properties theo source baseline `5160d4c7`, username explicit và fallback cho Interactive/DeviceCode, toàn bộ optional fields, auth/conn merge, aliases ClientSecret, JSON search directory, không có `.env`, nhóm thiếu và hợp đồng builder FromPac/AD. Test mới ở `McpConnectionResolutionTests`; TRX: `DynamicsCrm.DevKit.Cli.UnitTests/TestResults/mcp-env-fixes.trx` (output local, không commit).
3. Chạy `Release.DynamicsCrm.DevKit.Cli.ps1`: build/pack/install CLI thành công. `devkit --version`: **4.44.44.44 Build: 12.11.2026 15:12:23**. Nupkg và installed assembly khớp SHA trong manifest mới dưới `Published/4.44.44.44/`; source version và placeholder `xxxx.yy.zz HH.mm.ss` được giữ.
4. Kiểm tra output CLI đã cài: root help có định dạng qua terminal, MCP plain help và setup guide; xác nhận nội dung phân biệt default/selector, prefix và ví dụ. Fixture giả tái hiện thiếu secret trả `1`, thiếu nhóm trả `2`, `--env 0 --tools` trả `2`; `--env 0 --help` in help và trả `0`.
5. Khởi chạy một process MCP mới từ installed assembly qua stdio, chế độ `--dry-run --category readonly`, rồi gọi `whoami` thật. PID **16984**, start **2026-11-12T15:14:35.2576386+07:00**, org **82131d86-1aa7-f011-8706-00224806e819**. Version/build/path khớp manifest; assembly SHA256 **471BB5399036234F66A59FE49445E7900AFEF239686C64D528840D4546765B7E**. Process kiểm chứng đã kết thúc sau phép thử; đây là bằng chứng của client stdio kiểm chứng, không phải bằng chứng connector ứng dụng đã reconnect.

Giới hạn: connector `devkit-codex` đang gắn trong ứng dụng trả `Transport closed` sau khi script dừng process cũ; đã yêu cầu người dùng nạp lại để có thể kiểm chứng qua connector đó. Skill computer-use không cho tự điều khiển giao diện ChatGPT. Chưa đăng nhập mạng bằng Interactive/DeviceCode/AD/FromPac; các nhánh này được kiểm chứng resolver/builder bằng fixture. Không chạy full release, full suite hoặc coverage; không stage/commit/push.

## Nội dung review trước bản sửa

**Kết luận sau khi review lại luồng xử lý: cách dùng `.env` mặc định và ClientSecret thông thường vẫn giữ kết quả resolve như cũ; nhưng không thể khẳng định mọi cách gọi không có `--env` đều giữ nguyên hành vi.** Có một thay đổi tương thích đáng chú ý với Interactive/DeviceCode: args có auth và URL sẽ làm mất username vốn được lấy từ `.env`, có thể đổi tài khoản được chọn từ cache. Chi tiết F4 bên dưới là trọng tâm của lượt review bổ sung.

Tổng cộng có 4 phát hiện; F1–F3 của lượt đầu được giữ để tham khảo. Đây chỉ là báo cáo review; reviewer không sửa source, test, tài liệu gốc hoặc release artifact.

**Yêu cầu đã chốt của người dùng cho F4: không truyền `--env` thì phải giữ nguyên logic xử lý kết nối trước tính năng này.** Không chỉ giữ các cách dùng phổ biến hoặc bổ sung lại riêng username. Logic chọn nhóm và các thay đổi ưu tiên mới chỉ áp dụng khi người dùng truyền `--env <id>`. Phần hướng sửa bên dưới là yêu cầu bàn giao cho AI triển khai; chưa có sửa code nào được thực hiện bởi reviewer.

| Mã | Mức độ | Nội dung |
|---|---|---|
| F4 | P2 | Nhánh không truyền `--env` phải giữ toàn bộ logic fallback và ưu tiên kết nối cũ; hiện có khác biệt về username và credentials. |
| F1 | P2 | Điều kiện “args đã đủ” bắt buộc tham số mà connection builder đang cho phép bỏ qua: PAC profile và AD domain. |
| F2 | P2 | Tài liệu ghi lỗi thiếu trường bắt buộc trả exit code `2`, nhưng runtime và test hiện tại dùng `1`. |
| F3 | P3 | Tài liệu nói selector luôn được validate trước help; `--help` thực tế vẫn thành công với selector không hợp lệ. |

P2: cần xử lý vì ảnh hưởng hành vi hoặc hợp đồng được công bố. P3: cần sửa mô tả để tránh hiểu sai.

**Review bổ sung: không dùng `--env` có giữ hành vi cũ không?**

Đã chạy 24 phép đối chiếu thông tin kết nối hiệu lực trước/sau, đều không truyền `--env`. Kết quả: 20 trường hợp giống nhau, 4 trường hợp khác. Đây là kiểm tra logic resolve, không phải tỷ lệ unit test pass và không phải 24 lần đăng nhập Dataverse.

| Cấu hình kiểm tra | Số trường hợp | Kết quả trước/sau |
|---|---:|---|
| Chỉ lấy kết nối từ `DEVKIT_*`: ClientSecret, Interactive, DeviceCode, OAuth, AD, FromPac, legacy connection | 7 | Giống nhau |
| ClientSecret: override URL, ClientId, secret, hoặc truyền auth/URL/ClientId rồi lấy secret từ `.env` | 4 | Giống nhau |
| ClientSecret: đủ args chuẩn, có hoặc không có bộ mặc định trong `.env` | 2 | Giống nhau |
| FromPac: lấy profile từ `.env`, truyền profile bằng args, hoặc dùng active profile khi không có bộ mặc định | 3 | Giống nhau |
| Interactive chỉ truyền auth, OAuth truyền auth/URL, AD lấy domain còn thiếu từ `.env` | 3 | Giống nhau |
| `.env` chỉ có nhóm đánh số, không có `DEVKIT_*` | 1 | Giống nhau: không tự lấy nhóm đánh số làm bộ mặc định |
| Interactive/DeviceCode có auth/URL trên args, username nằm trong `.env` | 2 | Khác: username bị bỏ qua, xem F4 |
| `--conn` explicit trong khi `.env` có auth hiện đại | 1 | Khác: bản mới ưu tiên `--conn` explicit |
| ClientSecret dùng aliases `--username`/`--password`, `.env` có ClientId/secret chuẩn | 1 | Khác: bản mới ưu tiên bộ credentials explicit |

Vì vậy, với cách dùng `devkit mcp devkit-codex` và kết nối cấu hình đầy đủ bằng `DEVKIT_*`, kết quả chọn auth, URL và credentials vẫn như trước trong các trường hợp đã kiểm tra. Thêm `DEVKIT_1_*` cùng file không làm bộ mặc định đổi sang nhóm 1. Các lần so sánh đều đặt thêm một nhóm 1 có giá trị khác để kiểm tra điều này.

Theo yêu cầu giữ nguyên logic cũ vừa được người dùng chốt, hai thay đổi ưu tiên ở cuối bảng cũng phải được xử lý trong F4 cho nhánh **không truyền `--env`**, dù chúng phù hợp với thiết kế args-first mới:

- Trước đây `--conn` explicit có thể bị `DEVKIT_AUTH_TYPE` chuyển sang nhánh modern auth; bản mới giữ kết nối explicit. Tài liệu triển khai đã mô tả việc sửa này.
- Trước đây args ClientSecret dùng `--username`/`--password` vẫn có thể bị ClientId/secret chuẩn từ `.env` chiếm ưu tiên trong builder. Bản mới, khi bộ args này đủ, dùng chúng trực tiếp.

Đối với nhánh không truyền `--env`, không tự giữ lại các thay đổi này dưới danh nghĩa sửa lỗi cũ hoặc cải thiện ưu tiên. Muốn đổi hành vi đó cần một yêu cầu riêng sau này. Đối với nhánh có `--env`, tiếp tục áp dụng thiết kế args-first của tính năng mới.

Về logic chọn nhóm, source và các kiểm tra hiện có cho thấy: `--env` chỉ chọn prefix khi cần fallback; không trộn nhóm; nhóm không tồn tại không tự chuyển về bộ mặc định; lựa chọn diễn ra lúc startup. Không thấy vấn đề cốt lõi ở cơ chế mapping/chọn nhóm. Quyết định cho F4 đã rõ: việc bỏ qua toàn bộ `.env` khi args đã đủ không được áp dụng vào nhánh không truyền `--env`.

**F4 — Hướng sửa bắt buộc: giữ nguyên logic cũ khi không dùng `--env`**

Vị trí: [McpCommand.cs](E:/src/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Commands/McpCommand.cs:123), dòng 123–130, kết hợp [DevKitCommandArgs.cs](E:/src/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Models/DevKitCommandArgs.cs:199), dòng 199.

Bản cũ luôn bổ sung các trường trống từ `.env` trước khi kết nối. Bản mới trả về ngay khi `HasCompleteExplicitConnectionArgs()` là `true`, kể cả `settings.Env == null`. Với Interactive/DeviceCode, chỉ cần có auth và URL là được xem là đủ. Hệ quả là `DEVKIT_USERNAME` không còn được lấy từ `.env` trong cấu hình hợp lệ sau:

```dotenv
DEVKIT_AUTH_TYPE=Interactive
DEVKIT_URL=https://default.example.invalid
DEVKIT_USERNAME=intended@example.invalid
```

```powershell
devkit mcp devkit-codex --auth Interactive --url https://override.example.invalid
```

Đối chiếu resolver thực tế:

```text
Trước: Auth=Interactive, URL=https://override.example.invalid, Username=intended@example.invalid
Sau:   Auth=Interactive, URL=https://override.example.invalid, Username=""
```

DeviceCode cho cùng sự khác biệt. Đây không phải tình huống người dùng nhập sai tham số. Username là tùy chọn nhưng có ý nghĩa: [InteractiveConnectionBuilder.cs](E:/src/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Shared/ConnectionBuilder/InteractiveConnectionBuilder.cs:69), dòng 69–72, và [DeviceCodeConnectionBuilder.cs](E:/src/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Shared/ConnectionBuilder/DeviceCodeConnectionBuilder.cs:79), dòng 79–82, dùng username để chọn tài khoản khớp trong cache; khi username rỗng thì lấy tài khoản đầu tiên.

Ảnh hưởng: nếu cache có tài khoản khác với `DEVKIT_USERNAME`, lệnh có thể thử đăng nhập bằng tài khoản khác, hoặc thay đổi việc phải đăng nhập lại. Bằng chứng runtime xác nhận username bị mất; ảnh hưởng chọn tài khoản được truy vết từ source builder, chưa thực hiện đăng nhập mạng để kiểm chứng.

Hướng triển khai cho AI sửa code:

1. **Tách nhánh không có selector trước khi kiểm tra completeness.** Trong `McpCommand.ResolveConnectionSettings()`, xử lý trường hợp người dùng không truyền `--env` trước khi gọi hoặc dùng kết quả của `HasCompleteExplicitConnectionArgs()`. Nhánh này luôn chạy quy trình resolve mặc định cũ, rồi tiếp tục kết nối/validate như trước. Không dùng điều kiện “args đã đủ” để bỏ qua `.env`. Giữ validation selector hiện có: `--env ""`, `--env 0`, v.v. vẫn là selector không hợp lệ, không được biến thành cách gọi không có selector.

2. **Bảo toàn cả resolver cũ, không chỉ đổi thứ tự `if`.** Hiện `ResolveProjectEnvironmentDefaults()` không tham số đã chuyển tiếp đến resolver mới, và `ResolveDefaults()` đã thêm hai điều kiện `!hadExplicitAuthType` / `!hadExplicitConnection` tại [DevKitCommandArgs.cs](E:/src/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Models/DevKitCommandArgs.cs:259), dòng 259–263. Vì vậy chỉ gọi lại method không tham số ở đầu command vẫn chưa đủ để giữ logic cũ. Đường mặc định phải khôi phục đúng semantics trước tính năng: khi `Connection` trống thì bổ sung `DEVKIT_CONNECTION`; khi `AuthType` trống thì bổ sung `DEVKIT_AUTH_TYPE`, không thêm hai guard mới này. Các thay đổi ưu tiên dành cho selector phải nằm trong đường xử lý có `--env`, không áp dụng chung vào resolver mặc định.

3. **Giữ toàn bộ quy tắc cũ của nhánh mặc định.** Bao gồm tìm file từ resolved `--json` hoặc working directory như source trước thay đổi, dùng file `.env` gần nhất, chỉ lấy `DEVKIT_*`, không đọc connection values từ OS environment, giữ args theo từng property và các auth defaults hiện có. Tiếp tục bổ sung username/password/domain/profile còn trống, kể cả bộ args đã đủ trường bắt buộc. Giữ giá trị `ConnectionFromProjectEnvironment` và cách chọn builder/validate như trước. Không yêu cầu nhóm mặc định phải tồn tại bằng một validation mới; thiếu `.env` vẫn được xử lý theo luồng cũ. Không chỉnh parser, builder hoặc các command khác chỉ để làm đơn giản hóa F4.

4. **Giữ đường selector độc lập.** Khi có `--env <id>` hợp lệ, mới áp dụng kiểm tra args đầy đủ và bỏ qua fallback nếu đủ; nếu thiếu thì chỉ đọc `DEVKIT_<id>_*`, kiểm tra thiếu file/nhóm, ghép args và validate. Không chạy resolver mặc định trước rồi mới override bằng nhóm đánh số, vì credentials mặc định đã được ghép vào có thể làm lẫn nhóm. Không dùng bản sửa F4 để thay đổi các yêu cầu riêng của F1.

5. **Giới hạn ảnh hưởng của helper dùng chung.** `DevKitCommandArgs` còn được các CLI command khác sử dụng. Giữ semantics cũ cho entry point mặc định/không có group của helper; tách rõ phần ưu tiên mới dùng cho nhóm đánh số bằng helper hoặc nhánh nội bộ phù hợp. Không đổi public command, option hoặc JSON key. Các metadata/log về nguồn connection có thể tiếp tục tồn tại nhưng không được thay đổi dữ liệu kết nối hoặc ép thêm validation vào nhánh cũ.

Luồng đích để đối chiếu khi review implementation:

```text
Không truyền --env
  -> Resolve DEVKIT_* bằng logic cũ, luôn bổ sung trường trống theo quy tắc cũ
  -> Validate/chọn builder/kết nối theo logic cũ

Có --env <id> hợp lệ
  -> Args đủ: dùng args, không yêu cầu file hoặc nhóm
  -> Args thiếu: chỉ resolve DEVKIT_<id>_* rồi validate/kết nối
```

**Tiêu chí nghiệm thu F4 cho AI triển khai:**

| Trường hợp | Kết quả bắt buộc |
|---|---|
| Toàn bộ 24 cấu hình không dùng `--env` trong bảng đối chiếu | Kết quả kết nối hiệu lực khớp baseline cũ; 4 khác biệt hiện tại phải được loại bỏ cho nhánh này. |
| Interactive/DeviceCode có auth/URL trên args, username nằm trong `.env` | Giữ `DEVKIT_USERNAME` như trước; username explicit vẫn ưu tiên. Test cả hai auth mode. |
| Args đầy đủ và `.env` có các giá trị tùy chọn liên quan | Vẫn bổ sung các property trống theo resolver cũ; không chỉ vá riêng username. |
| `--conn` explicit và `.env` có `DEVKIT_AUTH_TYPE` | Giữ kết quả resolve/chọn builder theo baseline cũ khi không truyền `--env`; không áp guard ưu tiên mới. |
| `--auth` explicit và `.env` có `DEVKIT_CONNECTION` | Giữ cả kết quả điền property và lựa chọn builder theo baseline cũ. |
| ClientSecret dùng `--username`/`--password`, `.env` có ClientId/secret chuẩn | Giữ ưu tiên builder sau khi ghép dữ liệu như baseline cũ khi không truyền `--env`. |
| Không có `.env`, args đầy đủ | Không phát sinh yêu cầu file/nhóm mới. |
| `.env` chứa default và các nhóm đánh số khác nhau | Không có selector chỉ đọc default; selector chỉ đọc nhóm được chọn khi cần fallback. |
| `--env 99`, args đầy đủ, không có file/nhóm 99 | Tiếp tục bỏ qua fallback theo thiết kế selector. |
| `--env 1`, args thiếu, nhóm thiếu trường/file/nhóm | Vẫn báo lỗi đúng nhánh; không lấy giá trị từ default hoặc nhóm khác. |

Baseline để đối chiếu là source trước tính năng tại commit `5160d4c7a89c4829bada026ff86c591c43c5153e`, đặc biệt `v5/DynamicsCrm.DevKit.Cli/Models/DevKitCommandArgs.cs` và `v5/DynamicsCrm.DevKit.Cli/Commands/McpCommand.cs`. Đọc bằng `git show` khi cần; không checkout/reset/ghi đè toàn bộ file vì working tree còn các thay đổi cần giữ. Viết regression test dựa trên hành vi baseline, không dùng các assertion hiện đang khẳng định ưu tiên mới của đường mặc định làm tiêu chí đúng.

Sau khi AI khác triển khai: chạy build CLI và focused tests phù hợp; vì có sửa `McpCommand` và có thể phần MCP, tuân thủ quy trình build/install CLI và kiểm chứng runtime theo [AGENTS.md](E:/src/github/Dynamics-Crm-DevKit/v5/AGENTS.md) cùng [devkit-skill-build-cli](E:/src/github/Dynamics-Crm-DevKit/v5/.agents/skills/devkit-skill-build-cli/SKILL.md). Đối chiếu runtime với manifest mới; không thực hiện full release nếu chưa được yêu cầu. Cập nhật tài liệu/help để phân biệt rõ nhánh mặc định giữ logic cũ với nhánh selector. Các bước này là việc cần làm khi triển khai, chưa được thực hiện trong lần cập nhật báo cáo này.

Phương pháp đối chiếu bổ sung: lấy nguyên `DevKitCommandArgs` từ Git HEAD `5160d4c7a89c4829bada026ff86c591c43c5153e`, chỉ đổi tên class và biên dịch/nạp trong bộ nhớ; so sánh với `McpCommand.ResolveConnectionSettings()` của assembly đã cài. Dùng fixture `.env` và JSON tạm với giá trị giả, không gọi `CreateServiceClientAsync()`, không đọc cache PAC/MSAL. Các file fixture đã được xóa sau kiểm tra. Các trường không được auth tương ứng sử dụng không được tính là thay đổi kết nối hiệu lực.

Khi tiếp tục review, bản CLI đã cài là `4.44.44.44 Build: 12.11.2026 11:37:47`, SHA256 `07F1604FA7FB0BE98692A43D865A0E924F6E71CF3F99ACAD70E2F4CD3F01D065`; khác bản của lượt review đầu. Source liên quan vẫn giữ nguyên hash. Không dùng manifest cũ để khẳng định binary hiện tại khớp manifest, và reviewer không thực hiện build/cài đặt này.

**F1 — Đồng bộ điều kiện “args đã đủ” với các connection builder hiện có**

Vị trí chính: [DevKitCommandArgs.cs](E:/src/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Models/DevKitCommandArgs.cs:198), dòng 198 và 203–206. Nhánh áp dụng kết quả: [McpCommand.cs](E:/src/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Commands/McpCommand.cs:118), dòng 118–149.

`HasCompleteExplicitConnectionArgs()` trả `false` trong hai trường hợp:

- `AuthType = FromPac`, không truyền `--pacprofile`. Trong khi đó, [FromPacConnectionBuilder.cs](E:/src/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Shared/ConnectionBuilder/FromPacConnectionBuilder.cs:74), dòng 74–77, chọn `Current["UNIVERSAL"]` khi profile trống. Builder đã hỗ trợ dùng profile PAC hiện hành.
- `AuthType = AD`, có URL/username/password nhưng không có `--domain` hoặc dấu `\` trong username. Trong khi đó, [ADConnectionBuilder.cs](E:/src/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Shared/ConnectionBuilder/ADConnectionBuilder.cs:80), dòng 80–94, không yêu cầu domain. `BuildConnectionString()` cũng hỗ trợ username không có domain riêng.

Vì kết quả là `false`, MCP bắt buộc tìm nhóm `.env` trước khi đến validator/builder. Nếu nhóm không tồn tại, lệnh dừng với exit code `2`, dù theo hợp đồng builder hiện tại không thiếu trường bắt buộc. Điều này mâu thuẫn với [mcp-env.md](E:/src/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Docs/Cli/mcp-env.md:118), dòng 118: không lấy việc thiếu tham số tùy chọn làm lý do bắt buộc phải có `.env`.

Tái hiện trên CLI đã cài, trong thư mục có `.env` chỉ chứa nhóm 1 và không có nhóm 99:

```powershell
devkit mcp --auth FromPac --env 99 --dry-run --plain

devkit mcp --auth AD --url https://review.example.invalid `
  --username user@example.invalid --password review-placeholder `
  --env 99 --dry-run --plain
```

Cả hai lệnh thực tế đều trả:

```text
[DevKit MCP ERROR] Environment group '99' was not found in the selected .env file (expected DEVKIT_99_* connection keys).
EXIT_CODE=2
```

Đối chứng bằng các method của chính assembly đã cài, chỉ xử lý trong bộ nhớ:

```text
HasCompleteExplicitConnectionArgs(FromPac, no profile) = false
FromPac.BuildConnectionString(no profile) = AuthType=FromPac;Profile=(active);

HasCompleteExplicitConnectionArgs(AD, URL + UPN + password, no domain) = false
AD.ValidateAsync(same values) = (true, null)
```

Các test mới trong [DevKitCommandArgsProjectEnvironmentTests.cs](E:/src/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli.UnitTests/Cli/DevKitCommandArgsProjectEnvironmentTests.cs:151), dòng 161 và 169, đang khẳng định kết quả `false`, nên việc những test này pass không phát hiện được sự lệch với builder. Test sẵn có `AD_BuildConnectionString_NoDomain` trong [ConnectionBuilderCoverageTests.cs](E:/src/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli.UnitTests/Cli/ConnectionBuilderCoverageTests.cs:122) còn mô tả nhánh AD không có domain.

Đề nghị: đối chiếu lại điều kiện completeness với builder và mặc định xác thực hiện có; bổ sung test cho FromPac dùng active profile và AD không có domain riêng khi `--env` trỏ nhóm không tồn tại. Nếu muốn cố ý thu hẹp các auth mode này thì cần quyết định thay đổi hợp đồng rõ ràng, thay vì đánh dấu là đã giữ nguyên mặc định. Review chưa xác nhận kết nối mạng thành công cho hai auth mode này; bằng chứng ở đây là việc bị chặn sai tầng trước builder.

**F2 — Sửa khẳng định exit code trong tài liệu**

Vị trí: [mcp-env.md](E:/src/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Docs/Cli/mcp-env.md:162), dòng 162.

Tài liệu khẳng định các lỗi mẫu phía trên đều kết thúc với exit code `2`. Tuy nhiên, lỗi nhóm thiếu `CLIENT_SECRET`, `CLIENT_ID`, URL hoặc credentials OAuth/AD được ném bằng exception; `ExecuteAsync()` bắt exception và trả `1` tại [McpCommand.cs](E:/src/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli/Commands/McpCommand.cs:109), dòng 109–114. Lỗi thiếu secret cụ thể phát sinh ở dòng 297–298.

Tái hiện với `.env` mẫu, không có secret:

```dotenv
DEVKIT_1_AUTH_TYPE=ClientSecret
DEVKIT_1_URL=https://review.example.invalid
DEVKIT_1_CLIENT_ID=00000000-0000-0000-0000-000000000001
```

```powershell
devkit mcp --env 1 --dry-run --plain
```

Kết quả thực tế:

```text
[DevKit MCP ERROR] Environment group '1': DEVKIT_1_CLIENT_SECRET or --clientsecret is required for ClientSecret authentication.
EXIT_CODE=1
```

Test `ExecuteAsync_EnvGroup_DoesNotBorrowSecretFromDefaultGroup` cũng cố ý assert `1` tại [McpCommandCoverageTests.cs](E:/src/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Cli.UnitTests/Cli/Mcp/Infrastructure/McpCommandCoverageTests.cs:202). Do đó đây là sự lệch giữa tài liệu với cả implementation lẫn test, không phải chỉ thiếu test.

Đề nghị: mô tả đúng các mã thoát hiện tại hoặc chỉ cam kết “khác 0” như tài liệu thiết kế trước thay đổi. Nếu muốn thống nhất mọi lỗi validation về `2`, đó là thay đổi hành vi cần được quyết định riêng và cập nhật test tương ứng. Khẳng định hiện tại có thể khiến script/client phân loại sai nguyên nhân startup thất bại.

**F3 — Phân biệt `--help` với các chế độ thông tin chạy qua `ExecuteAsync()`**

Vị trí: [mcp-env.md](E:/src/github/Dynamics-Crm-DevKit/v5/DynamicsCrm.DevKit.Docs/Cli/mcp-env.md:111), dòng 111.

Đoạn này gộp help, `--tools` và `--setup-guide`, rồi nói cú pháp `--env` vẫn được kiểm tra trước để từ chối ID không hợp lệ. Thực tế, validation mới nằm trong `McpCommand.ExecuteAsync()`, dòng 33–37; help của parser không chạy qua nhánh đó.

Lệnh đã kiểm tra:

```powershell
devkit mcp --env 0 --help --plain
```

Kết quả: exit code `0`, in đầy đủ MCP help, không in lỗi `Invalid --env value`. Trái lại, `--tools` và `--setup-guide` đi qua validation của command.

Đề nghị: sửa mô tả để nêu ngoại lệ của `--help` và thêm test nếu muốn cố định hành vi này. Không cần tự đổi hành vi help chỉ để làm đúng câu mô tả hiện tại. Trường hợp `devkit mcp --env help` không có `--help` là một tình huống khác và không chứng minh validation chạy trước help.

**Bằng chứng kiểm tra và giới hạn**

- Đã đọc diff, source và test liên quan; đối chiếu cả Wiki đang thay đổi.
- Ở lượt review đầu, CLI đã cài là `4.44.44.44 Build: 12.11.2026 08:58:52`. SHA256 assembly: `585561686D1D92E386604A615273FE940C52D0ED8EB50C73ED8A58927D632734`, khớp manifest dưới `Published/4.44.44.44/` và bằng chứng trong tài liệu tại thời điểm đó. Binary dùng cho review bổ sung được ghi riêng phía trên.
- Đã tái hiện các hành vi nêu trên bằng executable/assembly đã cài. Fixture chỉ dùng URL `.invalid` và giá trị giả; các lệnh dừng trước kết nối Dataverse. Không đọc PAC token cache hoặc thay đổi MCP connector đang chạy.
- Đã kiểm tra trong bộ nhớ: nhóm 1 giữ URL từ args, không lấy secret của nhóm mặc định; nhóm 100 không liên tiếp resolve đúng. Đây là các điểm hoạt động đúng trong phạm vi đã kiểm tra.
- Đã kiểm tra output plain text: `--tools` và `--setup-guide` với `--env 999` vẫn trả `0` khi nhóm không tồn tại. Các link source trong `mcp-env.md` đều trỏ tới file tồn tại.
- Source version vẫn là `4.44.44.44`; placeholder build date vẫn là `xxxx.yy.zz HH.mm.ss`.
- Không build, pack, reinstall, chạy lại bộ 150 unit tests hoặc kiểm chứng lại hai process Dataverse sống đồng thời. Số lượng test pass và runtime PID ghi trong tài liệu là bằng chứng do lần triển khai trước cung cấp, không phải kết quả được xác nhận lại trong review này.
- Không sửa source/test/tài liệu gốc, không stage/commit/push. File Markdown này là đầu ra duy nhất được thêm vào repository bởi reviewer.
