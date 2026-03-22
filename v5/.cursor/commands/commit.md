# commit

Quy trình chuẩn bị và commit code an toàn cho dự án DynamicsCrm.DevKit.

> [!IMPORTANT]  
> Dự án này sử dụng PowerShell trên Windows. Không dùng script Bash (`&&` hoặc `<<EOF`).

## Workflow Steps

```powershell
# Bước 1: Kiểm tra trạng thái các biến động
git status

# Bước 2: Chỉ thị cẩn thận đối với file thay đổi
# (Tránh dùng `git add .` để ngăn rò rỉ file config nhạy cảm)
git add "duong/dan/den/file1.cs" "duong/dan/den/file2.cs"

# Bước 3: Đóng gói commit bằng PowerShell
# (Sử dụng 2 cờ -m để tách biệt Tiêu đề và Nội dung)
git commit -m "Tiêu đề ngắn gọn gọn (khoảng 50 ký tự)" -m "Mô tả chi tiết những gì đã thay đổi và lý do đưa ra thiết kế này."
```

## Lưu ý sống còn (Critical Check)

> [!CAUTION]
> **⚠ Cảnh báo về tệp `Const.cs`**  
> Trước khi `git add`, hãy chắc chắn file `DynamicsCrm.DevKit.Shared\Const.cs` đang ở dạng Placeholder gốc:
> - Version: `x.xx.xx.xx`
> - Date: `xxxx.yy.zz HH.mm.ss`
> 
> Nếu trong file hiển thị số version thật (ví dụ: `4.12.34.56`), tuyệt đối **KHÔNG** được commit file này. Hãy revert/restore nó lại.
