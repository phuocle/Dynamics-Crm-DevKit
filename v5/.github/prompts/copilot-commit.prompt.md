---
description: "Prepare and commit code for DynamicsCrm.DevKit"
mode: agent
---

Quy trình chuẩn bị và commit code an toàn cho dự án DynamicsCrm.DevKit.

> [!IMPORTANT]  
> **AI AGENT INSTRUCTIONS (CRITICAL):**
> GỬI TỚI AI AGENT: Người dùng KHÔNG muốn bạn chỉ hướng dẫn hoặc liệt kê ra các bước. Bạn là một Agent, bạn PHẢI SỬ DỤNG TOOL để thực thi các lệnh `git` thay mặt người dùng. 
> Khi được yêu cầu chạy lệnh cắt nghĩa workflow này, bạn PHẢI NGAY LẬP TỨC dùng tool chạy `git status`, sau đó tự động phân tích, kiểm tra `Const.cs`, chọn file để add, tạo nội dung commit phù hợp và cuối cùng: ĐỀ XUẤT CÁC LỆNH ĐÓ CHO NGƯỜI DÙNG DUYỆT ĐỂ CHẠY. Đừng bắt người dùng phải chat lại thêm lần nào nếu không thực sự cần thiết.

> Dự án này sử dụng PowerShell trên Windows. Không dùng script Bash (`&&` hoặc `<<EOF`).

## Workflow Steps

**Bước 1: Kiểm tra trạng thái các biến động (TỰ ĐỘNG CHẠY)**

AI Agent sử dụng tool để chạy tự động lệnh này ngay từ đầu để xem file thay đổi:
```powershell
git status
```

**Bước 2: Cảnh báo sống còn (Critical Check)**

> [!CAUTION]
> **⚠ Cảnh báo về tệp `Const.cs`**  
> AI phải kiểm tra nếu `DynamicsCrm.DevKit.Shared\Const.cs` nằm trong danh sách thay đổi.
> Nếu có thay đổi, hãy dùng lệnh đọc file xem nó có đang chứa Placeholder gốc không:
> - Version: `x.xx.xx.xx`
> - Date: `xxxx.yy.zz HH.mm.ss`
> 
> Nếu trong file hiển thị số version thật (ví dụ: `4.12.34.56`), tuyệt đối **KHÔNG** được commit file này. AI phải tự động chạy lệnh `git restore "DynamicsCrm.DevKit.Shared\Const.cs"` hoặc dùng tool revert lại file trước khi chia stage file nào.

**Bước 3: Chỉ thị cẩn thận đối với file thay đổi**

AI đọc list file đã thay đổi, đề xuất lệnh `git add` CHỈ với các file thực sự cần.
(Tuyệt đối tránh dùng `git add .` hoặc `git add -A` để ngăn rò rỉ file config nhạy cảm)
```powershell
git add "duong/dan/den/file1.cs" "duong/dan/den/file2.cs"
```

**Bước 4: Đóng gói commit bằng PowerShell**

AI dựa vào hiểu biết từ file được add để tự hiểu ý định và làm gọn thành message hợp lý (bạn cũng có thể hỏi người dùng hoặc tự suy diễn nếu rõ ràng). Sau đó đề xuất chạy lệnh:
(Sử dụng 2 cờ -m để tách biệt Tiêu đề và Nội dung)
```powershell
git commit -m "Tiêu đề ngắn gọn gọn (khoảng 50 ký tự)" -m "Mô tả chi tiết những gì đã thay đổi và lý do đưa ra thiết kế này."
```
