# Báo cáo Bảo mật & Hướng dẫn Khắc phục (Nhánh v5)

Dưới đây là báo cáo về các vấn đề bảo mật được tìm thấy trong thư mục/nhánh `v5` và hướng dẫn khắc phục.

## 1. Tóm tắt
Qua quá trình quét và phân tích mã nguồn, không tìm thấy mật khẩu thực tế (hardcoded password) nào bị lộ trong các tệp tin. Tuy nhiên, kiến trúc của các **Project Templates** đang khuyến khích việc lưu trữ mật khẩu dưới dạng văn bản thuần (clear text) trong các tệp cấu hình, đây là một rủi ro bảo mật lớn. Ngoài ra, một số khóa (key) và ID ứng dụng được gắn cứng (hardcoded) trong mã nguồn.

## 2. Chi tiết các vấn đề

### A. Lưu trữ thông tin xác thực trong tệp cấu hình (Rủi ro cao)
Các tệp template sau đây định nghĩa các trường để lưu `UserName` và `Password`:
- `v5/ProjectTemplates/CSharp/02.ConsoleProjectTemplate/App.config`
- `v5/ProjectTemplates/CSharp/03.ConsoleCoreProjectTemplate/AppSettings.json`
- `v5/ProjectTemplates/CSharp/02.ConsoleProjectTemplate/App.cs` (Logic xử lý chuỗi kết nối)

**Vấn đề:** Mặc dù hiện tại chúng đang chứa các giá trị placeholder (ví dụ: `$PasswordValue$`), nhưng cấu trúc này hướng dẫn lập trình viên điền mật khẩu thật vào các tệp này. Các tệp `App.config` và `AppSettings.json` thường xuyên được commit lên Source Control (Git), dẫn đến việc lộ mật khẩu.

### B. Hardcoded Client ID và Redirect URI (Rủi ro trung bình)
Trong tệp `v5/ProjectTemplates/CSharp/02.ConsoleProjectTemplate/App.cs`:
- **AppId:** `51f81489-12ee-4a9e-aaae-a2591f45987d`
- **RedirectUri:** `app://58145B91-0C36-4500-8554-080854F2AC97`

**Vấn đề:** Việc gắn cứng các giá trị này có nghĩa là mọi dự án được tạo ra từ template này sẽ chia sẻ cùng một định danh ứng dụng. Nếu ứng dụng này bị thu hồi quyền truy cập hoặc cần thay đổi cấu hình, tất cả các dự án con sẽ bị ảnh hưởng.

### C. Khóa Strong Name Key công khai (Rủi ro trung bình)
- Tệp: `v5/ProjectTemplates/CSharp/04.ServerProjectTemplate/key.snk`

**Vấn đề:** Tệp khóa riêng tư (`.snk`) này được phân phối công khai cùng với mã nguồn. Bất kỳ ai cũng có thể sử dụng nó để ký một assembly độc hại và giả mạo danh tính của các assembly được tạo ra bởi bộ công cụ này. Strong Naming trong trường hợp này không còn giá trị bảo mật.

## 3. Hướng dẫn Khắc phục

### Cách 1: Sử dụng Environment Variables (Biến môi trường)
Thay vì lưu mật khẩu trong `App.config` hoặc `AppSettings.json`, hãy đọc chúng từ biến môi trường của hệ thống.

**Sửa đổi code (ví dụ trong `App.cs`):**
```csharp
// Thay vì đọc từ ConfigurationManager
// private static string Password { get { return ConfigurationManager.AppSettings["Password"]; } }

// Hãy đọc từ Environment Variable
private static string Password {
    get {
        var pass = Environment.GetEnvironmentVariable("DEVKIT_PASSWORD");
        if (string.IsNullOrEmpty(pass)) {
             // Fallback hoặc throw error
             throw new Exception("Vui lòng thiết lập biến môi trường DEVKIT_PASSWORD");
        }
        return pass;
    }
}
```

### Cách 2: Sử dụng .NET User Secrets (Cho môi trường phát triển)
Với các dự án .NET Core (như ConsoleCoreProjectTemplate), hãy sử dụng công cụ **Secret Manager**.

1. **Khởi tạo:** Chạy lệnh `dotnet user-secrets init` trong thư mục dự án.
2. **Lưu mật khẩu:** Chạy `dotnet user-secrets set "Dataverse:Password" "MatKhauCuaBan"`
3. **Đọc trong code:**
```csharp
var builder = new ConfigurationBuilder()
    .AddJsonFile("appsettings.json")
    .AddUserSecrets<Program>(); // Tự động nạp secret từ kho lưu trữ an toàn trên máy local
var configuration = builder.Build();
var password = configuration["Dataverse:Password"];
```
*Lưu ý: User Secrets không được lưu vào Git.*

### Cách 3: Azure Key Vault (Cho môi trường sản xuất)
Đối với các ứng dụng chạy trên Azure hoặc môi trường doanh nghiệp, hãy sử dụng Azure Key Vault để quản lý chuỗi kết nối và mật khẩu, thay vì lưu trong file config.

### Khắc phục vấn đề Hardcoded ID
- Chuyển `AppId` và `RedirectUri` ra file cấu hình hoặc cho phép người dùng nhập vào lúc khởi chạy (runtime) thay vì để mặc định trong code `App.cs`.

### Khắc phục vấn đề Strong Name Key
- Loại bỏ tệp `key.snk` khỏi template hoặc tài liệu hóa rõ ràng rằng người dùng **PHẢI** tạo khóa mới (`sn -k key.snk`) ngay sau khi tạo dự án mới và không sử dụng khóa mặc định.
