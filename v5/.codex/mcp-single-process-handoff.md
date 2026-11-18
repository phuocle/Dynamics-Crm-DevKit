# Tiếp tục sau khi người dùng restart app

## Hiện tại: Release 12:35:50 đã build — CHỜ USER RESTART APP

- User yêu cầu chạy `devkit-skill-build-release-only`, rồi commit **hết tất cả file và push**. Đã chạy script current-date, configuration Release: **exit code 0**, **53,31 giây**. Không chạy unit tests hoặc code coverage cho lượt này; 6.360 tests/live proof bên dưới thuộc lượt rev 5 trước đó.
- Cả bốn artifact Analyzer/CLI/Tool/VSIX dưới `Published/4.44.44.44/` đã tạo mới, version `4.44.44.44`, build **`18.11.2026 12:35:50`**. Đã kiểm tra manifest version và build trong README của cả bốn artifact, gồm đủ 13 template README trong VSIX; package không chứa local config/token cache.
- `devkit --version` và `devkit-tool --help` thành công cùng version/build. Assembly CLI/Tool đã cài có SHA khớp DLL trong package tương ứng. Manifest CLI đã refresh sang Release mới, package hash khớp.
- CLI assembly SHA256 mới: **`0AF4DEB9BF393AF735DACF745403308537FA6E00486012598ECB5E77339FA309`**. Manifest: `Published/4.44.44.44/DynamicsCrm.DevKit.Cli.4.44.44.44.build-manifest.json`; thời điểm hoàn tất install `2026-11-18T12:36:44.2329041+07:00`. Không dùng SHA Debug D20FA7... bên dưới để xác minh bản Release mới.
- Đủ 21 file dateReplacement đã khôi phục byte-for-byte; stable source version/placeholder giữ nguyên. Logs/artifact hashes/baseline nằm trong `.devkit/verification/release-only-2026-11-18/` (ignored).
- Script đã dừng MCP để cài lại global tools. **Chưa gọi MCP sau release**, chưa có live runtime proof cho Release 12:35:50. Không tự restart connector hoặc chạy MCP process thay thế.
- Sau user restart: đọc manifest mới; gọi connection_list trước (UAT còn lazy), rồi whoami mcp-uat lần đầu, numeric env 1 và mcp-dev. Đối chiếu version thật, env/policy/organization đúng, cùng PID/start/path/SHA và đúng build mới; process phải bắt đầu sau install. Lưu raw output local, không sửa capture lịch sử hoặc chạy mutation thật.
- User đã ủy quyền commit/push toàn bộ artifact, manifest và note này; `.env`, config local và verification ignored không force-add. Tra git log để lấy hash commit của lượt release này.

## Lịch sử: rev 5 .env mode đã xác minh live trên Debug 11:25:29

- User hiện đã yêu cầu chạy skill commit **hết tất cả file và push**. Yêu cầu này thay thế ràng buộc chưa commit của các lượt trước. Đã fetch và xác nhận hai commit release/handoff `951ac861c` / `df3699203` đã nằm trên origin/v5.5; lượt này ghi code/tests, docs/guidance/note và package/manifest của rev 5. Tra git log để lấy các hash được tạo sau trạng thái trong note này.

- User đã restart app. Đã gọi connection_list trước UAT: default/mcp-dev connected true, env 1/mcp-uat connected false; source đều là project .env, policy DEV false / UAT true.
- whoami mcp-uat lần đầu trả đúng Dataverse **9.2.26104.146**, canonical env 1 và dryRun true. Numeric ID 1 trả cùng identity/version; mcp-dev trả Dataverse **9.2.26112.137**, canonical default và dryRun false.
- Cả ba identity dùng **PID 14484**, parent 5408, start **2026-11-18T12:26:27.2400687+07:00**, cùng path/version/build/SHA. Runtime build **18.11.2026 11:25:29**, SHA **D20FA760D21374E694E54DCB57910401C0851AA07B24692D1E0DAA9841D92E41** khớp manifest/assembly đã cài; package hash cũng khớp. Process start sau install; OS inventory có đúng một process devkit-codex, chạy args `["mcp", "devkit-codex"]`.
- Sau khi gọi, cả hai group connected true, policy/source không đổi. Text và structured summary khớp cho mọi kết quả. Không chạy mutation thật.
- Raw output trước/sau, first UAT, numeric UAT, DEV, inventory và verification.json: `.devkit/verification/mcp-exclusive-2026-11-18/live/` (ignored). Spec rev 5 đã ghi live proof; không thay các output lịch sử.
- Không sửa code/build/cấu hình ở lượt kiểm tra live này, không stage/commit/push. Args-only vẫn được kiểm tra bằng offline/parser tests; không tuyên bố đã chạy live args-only process. Chỉ kiểm tra thêm nếu user yêu cầu; nếu cần đổi config/chạy lại MCP phải dừng báo user restart app.

### Lịch sử chuẩn bị rev 5 (đã hoàn tất bước restart/.env live bên trên)

- User đã chốt và yêu cầu sửa code/spec/tests: chỉ tên instance, hoặc tên instance + --env, mới đọc .env; bất kỳ configuration option nào khác (kể cả empty/default, --plain, --dry-run, --category, --as-user) chọn args-only. --env + configuration options là lỗi. Args-only có một org, không tìm/đọc .env cho connection, alias, policy hoặc màu; thiếu cấu hình dừng. Multiple org chỉ trong .env. Chưa commit; không tự restart MCP.
- Đã thêm McpStartupConfiguration, nối vào McpCommand; Program không đọc .env màu trước MCP và truyền dấu --plain đã tiêu thụ qua CommandContext.Data. Giữ built-in auth defaults; --conn + --auth bị từ chối, kể cả option rỗng. Cập nhật CLI descriptions/help/setup examples, spec rev 5 và guidance MCP trong AGENTS.md. Các CLI command khác giữ fallback cũ.
- 164 focused tests đã pass; full CLI sau các case bổ sung: **6.360 pass, 0 fail, 0 skip**, test execution khoảng 71 giây, tổng lệnh 78,01 giây. Có parser subprocess tests với .env bị khóa, options rỗng/default, env + flags, source selection chính xác; không mở connection Dataverse thật. TRX: `TestResults/McpExclusiveConfiguration/focused.trx`, `cli.trx`.
- Đã build/pack/install CLI theo skill: **4.44.44.44, Debug, build `18.11.2026 11:25:29`**, 0 warning/error. Manifest `Published/4.44.44.44/DynamicsCrm.DevKit.Cli.4.44.44.44.build-manifest.json`; assembly SHA256 **`D20FA760D21374E694E54DCB57910401C0851AA07B24692D1E0DAA9841D92E41`**. Installed assembly và package hash khớp manifest; đủ 21 dateReplacement files giữ nguyên byte, source version/placeholder không đổi.
- Script cài đã dừng PID 15048. **Chưa gọi MCP connector sau cài**, chưa có live proof cho rev 5. Không dùng SHA/build Release 18:16:45 hoặc Debug 17:50:32 bên dưới để xác minh bản mới.
- Cấu hình project hiện vẫn chỉ có active args `["mcp", "devkit-codex"]`, nên sau restart sẽ là .env mode với mcp-dev/mcp-uat. Không sửa .env hay config local.
- Sau user restart: đọc guidance/manifest mới, connection_list trước UAT (kỳ vọng default/mcp-dev connected true dryRun false; 1/mcp-uat connected false dryRun true), gọi whoami mcp-uat lần đầu rồi env 1 và mcp-dev. Kiểm tra version thật, đúng organization/canonical env/policy, cùng PID/start/path/SHA và đúng build mới. Giữ raw capture tại `.devkit/verification/mcp-exclusive-2026-11-18/` (ignored). Không chạy mutation thật, không sửa output lịch sử thành output mới.
- Tests đã kiểm tra args-only bằng fixture và parser âm tính; nếu cần live args-only process, phải cùng user đổi cấu hình rồi user restart app. Không tự chạy process MCP thay thế để kiểm tra.
- HEAD vẫn `df3699203`, hai commit release/handoff cũ chưa push. Yêu cầu hiện tại là sửa rev 5 **chưa commit**; không tự commit/push. Spec/tests/code và CLI package/manifest mới đang ở working tree.

## Lịch sử: release-only 18:16:45 đã build

- User yêu cầu chạy `devkit-skill-build-release-only` và commit hết tất cả file. Đã chạy đúng script current-date, configuration Release: exit code 0, 37,77 giây. Không chạy unit tests hay code coverage cho lượt release-only này.
- Cả bốn artifact Analyzer/CLI/Tool/VSIX dưới `Published/4.44.44.44/` đã tạo mới, metadata version `4.44.44.44`, README build `17.11.2026 18:16:45` (VSIX kiểm tra đủ 13 template README).
- `devkit --version` và `devkit-tool --help` thành công, cùng version/build. Assembly CLI/Tool đã cài có SHA khớp assembly trong package tương ứng.
- Manifest CLI đã cập nhật sang Release build **`17.11.2026 18:16:45`**, installed assembly SHA256 **`94495BFC19D2DD72E0FF70DF84089FC8A94B19C46EBA32149CA4746C734CDD12`**. Script full-release không tự ghi manifest này nên đã refresh bằng output/package/assembly thực tế, không dùng manifest Debug cũ.
- Đủ 21 file dateReplacement giống byte-for-byte với trạng thái trước build; stable version và placeholder giữ nguyên. Logs/verification local: `.devkit/verification/release-only-2026-11-17/` (ignored).
- Script release đã dừng process MCP. Chưa gọi connector sau build; chưa có live proof cho timestamp/SHA mới. Người dùng cần restart app trước khi kiểm tra MCP tiếp. Không tự chạy MCP thay thế hoặc restart connector.
- Khi user restart: đọc manifest hiện tại; gọi connection_list trước (UAT phải còn lazy), whoami mcp-uat lần đầu rồi numeric ID 1 và mcp-dev; so sánh version thật, canonical env, dryRun và cùng PID/start/path/SHA với manifest mới. Bằng chứng 17:50:32 bên dưới là lịch sử đã đạt, không được coi là live proof của Release 18:16:45.
- Note này không có credentials hoặc giá trị local config bí mật. Theo yêu cầu commit tất cả file, đưa note bàn giao vào commit cùng lượt; `.env`, config local và verification ignored không force-add.
- Bốn artifact cùng manifest CLI đã ghi tại commit `951ac861c`; note này được ghi ở commit kế tiếp để hoàn tất toàn bộ file thay đổi. Lượt này user yêu cầu local commit, không có yêu cầu push mới.

## Lịch sử: ĐÃ XÁC MINH — whoami version lần đầu trên build 17:50:32

- Sau khi user restart: UAT trước call connected=false; whoami mcp-uat lần đầu trả `9.2.26104.146`, numeric ID trả cùng version. DEV trả `9.2.26112.137`. Policy UAT true / DEV false; canonical env đúng.
- Cả ba identity dùng PID 10308, start `2026-11-17T17:53:21.1926574+07:00`, parent 9288; version/build/path/SHA đúng manifest build `17:50:32` bên dưới. OS chỉ một MCP process tương ứng.
- Raw captures + inventory + live schema metadata: `.devkit/verification/whoami-first-version-2026-11-17-175032/`. whoami đã thêm Tests 9–11, error cũ thành 12; output lịch sử giữ nguyên. 41 description/param sets khớp live catalog; source order/defaults khớp. Spec đã cập nhật bằng chứng.
- Theo yêu cầu mới của user, đã commit/push lên `origin/v5.5`: `020109c61` code/tests, `c58bc381d` docs/captures, `47fb50e33` CLI package/manifest. Note/config local và ba Published artifacts cũ ngoài CLI không đưa vào commit, giữ nguyên trên disk.
- Markdown capture parse thành HTML thành công; kiểm tra trực quan UI không thực hiện được (VS Code thiếu geometry và browser từ chối file URL). Không workaround policy. Giới hạn này đã ghi trong commit docs và báo user; runtime/schema/capture raw đều đạt.

### Lịch sử chuẩn bị bản sửa (đã hoàn tất)

- User yêu cầu sửa `whoami` trên connection lazy để lần đầu đã trả đúng Dataverse version; chưa commit. Khi cần restart app phải dừng báo user, không tự restart connector hoặc chạy MCP process thay thế.
- Source sửa tại `Mcp/Tools/WhoAmITool.cs`: dùng `RetrieveVersionRequest` trên chính `_orgService` đã được router chọn, thay vì lấy `ConnectedOrgVersion` từ cache SDK. Cả text và structured version dùng response này. Thêm một read request mỗi lần whoami; lỗi retrieve đi qua friendly error hiện có, không fallback sang placeholder.
- Đã chứng minh 3 ca regression thất bại trước khi sửa; sau sửa, focused WhoAmI/multi-connection: 207 pass. Full CLI: 6.337 pass, 0 fail, 0 skipped; test execution 45 giây, tổng lệnh 47,03 giây. TRX: `TestResults/WhoAmILazyVersion/focused.trx` và `cli.trx`.
- Đã build/pack/install CLI, 0 warning/error: version `4.44.44.44`, build **`17.11.2026 17:50:32`**. Manifest: `Published/4.44.44.44/DynamicsCrm.DevKit.Cli.4.44.44.44.build-manifest.json`.
- Installed assembly SHA256: **`59C616B3DEC36C3506C4C6F88E69E61417702CD683ADB3CF9F447E8270F81944`**. Đọc lại manifest khi tiếp tục; không dùng SHA/build cũ ở phần lịch sử bên dưới.
- Script cài đã dừng PID 13056. Chưa gọi MCP sau cài; chưa có live proof cho fix. Source `Const.cs` đã khôi phục placeholder. Không commit/stage/push.

### Việc cần làm NGAY sau khi user restart

1. Đọc guidance và manifest mới, không build/cài lại nếu không sửa code. Dùng connector `mcp__devkit_codex` do app vừa nạp.
2. Gọi `connection_list` trước, xác nhận UAT `env=1`, alias `mcp-uat`, dryRun true, **connected false**. Nếu UAT đã connected thì không được coi kết quả tiếp theo là first-lazy-call proof; báo lại tình trạng, không tự reset process.
3. Gọi **`whoami {"env":"mcp-uat"}` đầu tiên trên UAT**; lưu nguyên raw output ngay. Kỳ vọng version thật (lượt cũ là `9.2.26104.146`, có thể thay đổi phía server), không phải placeholder `9.0.0.0`; text/structured phải khớp. Env canonical `1`, dryRun true và đúng UAT organizationId/URL bên dưới.
4. Gọi `whoami {"env":"1"}` và `whoami {"env":"mcp-dev"}`; đối chiếu first/repeat UAT version, cùng PID/start/path/SHA cho cả hai env, version/build/SHA đúng manifest mới, process start sau install. DEV dryRun false và đúng DEV organization. Kiểm tra OS inventory một process `devkit-codex`.
5. Capture mới vào thư mục `.devkit/verification/` ignored; cập nhật spec và whoami capture theo format-template bằng output thật. Giữ các capture build cũ làm lịch sử; không sửa `9.0.0.0` trong output cũ thành số mới. Không tự thêm dấu duyệt, không chạy mutation thật. Không cần lặp lại capture dry-run đã đạt nếu không có nghi vấn mới.
6. Báo kết quả bằng tiếng Việt; chưa commit. Nếu cần thêm restart, dừng và báo user.

## Lịch sử: single-process đã xác minh trước bản sửa version

Trạng thái của lượt trước: ĐÃ KIỂM TRA THÀNH CÔNG sau khi người dùng restart app ngày 2026-11-17. Không commit. Các kết quả/SHA/PID bên dưới thuộc build cũ `15:26:39`, không thay thế bước chờ restart ở trên.

## Kết quả đã xác minh

- Chỉ một connector `devkit-codex`, một process `devkit.exe`: PID **13056**, parent PID **6488**, start `2026-11-17T17:34:36.8912520+07:00`. Process inventory không có `devkit-codex-2`.
- Omitted env, `mcp-dev`, `default`, `mcp-uat`, và `1` đều trả cùng PID/start time/assembly path/SHA/version/build.
- DEV: canonical `default`, alias `mcp-dev`, dryRun false, URL `https://dynamics-crm-devkit-v4.crm.dynamics.com`, organizationId `82131d86-1aa7-f011-8706-00224806e819`.
- UAT: canonical `1`, alias `mcp-uat`, dryRun true, URL `https://dynamics-crm-devkit.crm5.dynamics.com`, organizationId `29c6e552-e16f-ef11-a66b-6045bd1e7d8b`.
- `connection_list` trước UAT: DEV connected true, UAT false. Sau khi đọc UAT: cả hai true, policy vẫn độc lập false/true.
- Preview create trên `mcp-uat`: `[DryRun] Would CREATE a 'account' record with 1 field(s). | env mcp-uat`, status `not_executed`, không có ID record mới. Không ghi/xóa dữ liệu thật.
- Version/build/SHA khớp manifest: `4.44.44.44`, `17.11.2026 15:26:39`, `22AF07F8A1D54B0FB14AA96B7A60727AB48BD5CC1BF1163215FC26D372C83B38`.
- Đã thêm capture thực tế: `1.connection_list.md` Test 4–5, `19.whoami.md` Test 5–8 (error cũ đổi thành Test 9), `32.manage_record.md` Test 26.
- Bằng chứng raw và inventory nằm trong `.devkit/verification/single-process-2026-11-17-173436/` (ignored). Spec đã cập nhật phần single-process verification.
- Hiện tượng SDK warmup vẫn tái hiện: UAT alias lần đầu báo Dataverse `9.0.0.0`; numeric/repeat alias báo `9.2.26104.146`. Đã lưu nguyên cả hai kết quả, không sửa source.
- Không có bước kiểm tra nào còn chờ restart cho yêu cầu này. Chỉ restart tiếp nếu người dùng yêu cầu hoặc có thay đổi source/cấu hình mới cần nạp lại.

## Mục tiêu

Xác minh một MCP server process `devkit-codex` phục vụ được hai môi trường, chọn theo ID hoặc alias; policy độc lập theo connection.

## Cấu hình đã sửa

- `.codex/config.toml`: comment nguyên dòng 1–11 (hai entry cũ). Chỉ còn một entry active `[mcp_servers.devkit-codex]`, chạy `devkit mcp devkit-codex`, timeout startup 20 giây và tool 600 giây. Không truyền `--env` hoặc `--dry-run` lúc startup.
- Project `.env`: `DEVKIT_ALIAS=mcp-dev`, `DEVKIT_DRY_RUN=false`, `DEVKIT_1_ALIAS=mcp-uat`, `DEVKIT_1_DRY_RUN=true`.
- Các dòng khác trong `.env`, bao gồm thông tin kết nối, đã được giữ nguyên. Không đưa credentials vào note, output hoặc Git.
- Alias nằm trong `.env`, không phải tên MCP server mới. Các tool sau restart dùng cùng namespace `mcp__devkit_codex__*`.

## Kế hoạch sau restart đã thực hiện

1. Đọc lại `AGENTS.md`, `.codex/config.toml`, note này, và manifest `Published/4.44.44.44/DynamicsCrm.DevKit.Cli.4.44.44.44.build-manifest.json`. Không build/install lại nếu không sửa source.
2. Dùng connector vừa được app nạp lại. Gọi `connection_list` trước khi truy cập nhóm 1. Kỳ vọng hai row: `default` / alias `mcp-dev` / startup / connected true / dryRun false; `1` / alias `mcp-uat` / connected false / dryRun true. Listing không được tự connect nhóm 1.
3. Gọi `whoami {}`, `whoami {"env":"mcp-dev"}`, `whoami {"env":"mcp-uat"}`, và `whoami {"env":"1"}` bằng cùng connector. Thêm `whoami {"env":"default"}` để đối chiếu nhóm không đánh số.
4. So sánh `devkit.processId`, `processStartTime`, `assemblyPath`, `assemblySha256`, version và build giữa tất cả kết quả. Chúng phải cùng một process/runtime, khớp manifest. `env` phải canonical: `default` cho omitted/mcp-dev/default, `1` cho mcp-uat/1. DEV dryRun false; UAT dryRun true. Hai organizationId/URL phải khác nhau như cấu hình.
5. Kiểm tra nhãn output: startup alias `mcp-dev` không có suffix; nhóm UAT có ` | env mcp-uat` hoặc ` | env 1`; text và structured summary phải khớp.
6. Sau khi `whoami` xác nhận UAT dryRun true, gọi preview an toàn bằng cùng connector: `manage_record {"env":"mcp-uat","action":"create","entity_name":"account","fields_json":"{\"name\":\"DEVKIT-Test-Account-DryRun\"}"}`. Kỳ vọng `[DryRun]`, status `not_executed`, không có ID record mới và suffix ` | env mcp-uat`. Không chạy create trên DEV, không ghi/xóa dữ liệu thật.
7. Gọi lại `connection_list`: cả hai row connected true, policy và startup không đổi.
8. Đối chiếu process inventory local, chỉ xét các DevKit MCP thuộc app/session này. Không được còn instance `devkit-codex-2` do config project khởi động. Nếu có DevKit process của client khác, phân biệt bằng PID/parent/command line; không tự kill process khác. Bằng chứng chính là cùng PID trả về từ các alias trên cùng connector.
9. Capture output thực tế, cập nhật kiểm chứng và các ca alias phù hợp trong `DynamicsCrm.DevKit.Docs/Cli/mcp-multi-connection.md`, `TestAllMcpCall/1.connection_list.md`, `TestAllMcpCall/19.whoami.md`. Giữ format-template và output verbatim; không tự thêm dấu duyệt. D4 đã được đánh số 41 file ở lượt trước.
10. Báo kết quả bằng tiếng Việt: một PID, hai organization, alias/ID tương đương, DEV writable-policy/UAT dry-run, preview không tạo dữ liệu. Chưa commit.

## Bằng chứng từ lượt trước

- CLI 4.44.44.44, build `17.11.2026 15:26:39`, SHA256 `22AF07F8A1D54B0FB14AA96B7A60727AB48BD5CC1BF1163215FC26D372C83B38`; đọc manifest lại để kiểm tra, không mặc định bản cài vẫn giữ nguyên.
- 6.333 CLI unit tests đã đạt. Catalog 41 tool all / 19 readonly; 39 tool Dataverse có env optional. `connection_list` và `read_instruction` không có env.
- Lượt trước dùng hai connector/process cũ để kiểm tra bản cài và D4; lượt hiện tại đã chứng minh một connector/process với hai alias như kết quả ở trên.
- SDK có hiện tượng `whoami` đầu tiên trên connection lazy báo Dataverse version `9.0.0.0`, lần tiếp theo mới lên `9.2…`. Nếu gặp lại, lưu cả lần đầu và lần sau, không nhầm với DevKit runtime version và không che kết quả.

## Quy tắc restart của người dùng

Khi cần restart/chạy lại MCP do thay source hoặc cấu hình, dừng và báo người dùng restart app. Không tự restart connector hoặc dùng process MCP riêng để thay thế bước restart app.
