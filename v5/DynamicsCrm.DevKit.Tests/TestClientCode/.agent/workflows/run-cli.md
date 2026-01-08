---
description: Run Cli
---

# HƯỚNG DẪN RUN 1 CLI CỤ THỂ #

## Workflow này hướng dẫn bạn chạy 1 trong 4 cli 'JS-FORM', 'JS-WEBAPI', 'TS-FORM', 'TS-WEBAPI'

## Khi run workflow này, nếu bạn không thấy 1 trong 4 CLI đề cập phía trên, thì hãy dừng lại và hỏi: "Anh Phước muốn run CLI nào?", chờ anh Phước trả lời tương ứng và mới tiếp tục workflow

## Tương ứng với từng loại, ta có 4 profiles CLI là: 
- TestClientCode-JS-FORM
- TestClientCode-JS-WEBAPI
- TestClientCode-TS-FORM
- TestClientCode-TS-WEBAPI

## Trước khi bắt đầu run CLI bạn sẽ
- BUILD CLI ở mode DEBUG
- Đọc hiểu profile CLI cần run và chuyển đúng folder workingdirectory để không bị lỗi khi run
- Run CLI với thông số args

## RUN CLI có chỉnh sửa cấu hình
- Ví dụ bạn nhận được câu nhắc: "/run-cli ts-form Account" thì bạn sẽ hiểu là cần run CLI cho entities "Account" mà thôi"
- Làm sao để run cho đúng 1 entity: từ profile, bạn xác định được folder có chứa file: DynamicsCrm.DevKit.Cli.json. Sau đó bạn tìm đúng proflie (1 trong 4 profile ở trên), sửa lại chỗ "entities" đúng với Acccount và save lại.
- Khi đó bạn sẽ run profile và sau khi run xong bạn phải UNDO lại giá trị đã sửa trước đó => làm cho file DynamicsCrm.DevKit.Cli.json NO GIT CHANGES

## KHÔNG LÀM
- Đây là run cli, chỉ cần run, không cần làm bất cứ điều gì khác

## CRITICAL: CÁCH RUN CLI ĐÚNG CÁCH (TRÁNH APP HANG) ##
> [!CAUTION]
> **KHÔNG BAO GIỜ** sử dụng `command_status` để theo dõi CLI command!

**Quy tắc bắt buộc:**
1. Chạy CLI với `WaitMsBeforeAsync=60000` (60 giây đủ để CLI hoàn thành)
2. **KHÔNG** sử dụng background command cho CLI
3. **KHÔNG** gọi `command_status` sau khi chạy CLI
4. Nếu CLI trả về `Background command ID:`, đó là dấu hiệu hang - KHÔNG gọi `command_status`
5. Sau khi run CLI, chờ output trực tiếp từ `run_command` - KHÔNG poll thêm

**VÍ DỤ ĐÚNG (CLI build):**
run_command: CommandLine: & "C:...\MSBuild.exe" DynamicsCrm.DevKit.Cli.csproj ... WaitMsBeforeAsync: 60000 SafeToAutoRun: true

**VÍ DỤ ĐÚNG (CLI run profile):**
run_command: CommandLine: D:...\DynamicsCrm.DevKit.Cli.exe /conn:... /json:... /type:... /profile:... Cwd: <workingDirectory từ launchSettings.json> WaitMsBeforeAsync: 60000 SafeToAutoRun: true


**VÍ DỤ SAI (gây hang):**
run_command -> trả về CommandId command_status(CommandId) -> HANG VÔ TẬN!


> [!IMPORTANT]
> Nếu CLI chạy quá 60 giây và bị timeout, tăng `WaitMsBeforeAsync` lên 120000 (2 phút) hoặc xem xét network/Dataverse connection issue.