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