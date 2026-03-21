# Kế Hoạch Triển Khai Tính Năng: Single File Web Resource Deployment cho DevKit CLI

**Tài liệu dành cho AI Agent tiếp theo để thực hiện mã hóa tính năng `devkit webresource -f <file> -w <name>`**.

## 1. Mục tiêu và Ý nghĩa
Bổ sung tham số (arguments) vào lệnh CLI hiện tại nhằm cho phép:
- Đẩy duy nhất 1 tệp tin (tốc độ cao) thay vì rà quét toàn bộ thư mục dự án.
- Ghi đè cấu hình `DynamicsCrm.DevKit.Cli.json` nếu truyền đủ cờ `--webresource` (hỗ trợ môi trường không có Solution chuẩn hoá).
- Tự động Build mã `TypeScript` thành tệp `JS` trước khi đẩy lên Server y hệt như extension VSIX.

## 2. Thay đổi về Parameters (Models & Arguments)

**Lớp `WebResourceCommandArgs.cs` và `CommandLineArgs.cs`:**
- Thêm thuộc tính `File` (alias: `--file` hoặc `-f`): Đường dẫn tương đối/tuyệt đối tệp tin cục bộ.
- Thêm thuộc tính `WebResource` (alias: `--webresource` hoặc `-w`): Unique Name của web resource trên môi trường Dataverse.

## 3. Khởi Tạo Lệnh (WebResourceCommand.cs)

**Bypass Validation Profile:**
- Mặc định CLI sẽ báo lỗi nếu không đọc được config (JSON) hay không lấy được `Solution`.
- **Cập nhật mới:** Nếu cả `-f` và `-w` được đẩy vào lúc gọi CLI, cho phép `profile` là tuỳ ý (`nullable` hoặc gán Dummy profile `solution = string.Empty`).
- Đưa 2 giá trị này xuyên thấu tới `CommandLineArgs` để chuyển vào `TaskWebResource.cs`.

## 4. Biên dịch TypeScript Ẩn Danh (TaskWebResource.cs)

Bởi vì Dataverse không hỗ trợ file `.ts`, mà chỉ hỗ trợ `.js`, ta áp dụng kiến trúc Biên Dịch lấy cảm hứng từ thư viện `TypeScriptBuildHelper.cs` của VSIX:
- Khi nhận `Arg.File` kết thúc bởi tên miền `.ts`:
  1. Dò ngược lên thư mục trên cùng (cha) chứa tệp `package.json`.
  2. Dùng thư viện `System.Diagnostics.Process` gọi ẩn lệnh CMD NPM: `cmd.exe /c chcp 65001 >nul && npm run debug [TênFileKhongDuoi]`. (Ở CLI, nếu có cờ `--release` thì gọi `run release`).
  3. Quản lý trực tiếp Event `OutputDataReceived` để in log Console thẳng ra `SpectreLog.ActionWithLevel3`.
  4. Nếu Build dính lỗi (`process.ExitCode != 0` hoặc stream dính chữ `error TS`), báo lỗi chặn tiến trình.
  5. Nếu Build thành công, **Auto-Redirect** (điều hướng) đường dẫn tệp `Arg.File` sang file Output ở folder chuẩn là `[ThuMucGoc]/build/[TênFile].js`. Và tiếp tục tiến trình cho file JS này như bình thường.

## 5. Rút Gọn Nghiệp Vụ Deploy Single File

Trong tiến trình `TaskWebResource.RunAsync` và `IsValidAsync`:
- Nếu `-f` vả `-w` khả dụng -> Hàm Validation bỏ qua bước check Solution và Check Profile Path.
- Hàm `GetDependenciesAsync()` chèn câu chặn ngay dòng đầu: `if (!string.IsNullOrEmpty(Arg.File)) return [];`.
  -> Vô hiệu hoá hoàn toàn bộ kiểm tra Dependency rắc rối, nâng tối đa tốc độ Deploy tệp độc lập.

## 6. Truy Vấn Dataverse (Fuzzy Search & Handle Match)

Bên trong hàm `DeployWebResourceFileAsync`:
- Tính toán FetchXML: Thay vì chỉ dùng toán tử `<condition operator='eq'... />`, chèn thêm `<condition operator='ends-with' value='{Arg.WebResource}'/>` và `<condition operator='like' value='%{Arg.WebResource.WithoutExtension}%'/>` (Nếu `-w` tồn tại).

- **Xử lý Tác vụ Match Results:**
  - **Match == 1:** Quá trình tìm kiếm khớp đúng duy nhất 1 thực thể. Lấy GUID, và Name chuẩn (`prefix_/tên_file.js`) từ `RetrieveMultipleAsync` đè lại local để tiếp tục Update Payload thay vì lấy Tên ảo do user nhập.
  - **Match > 1:** Quăng `SpectreLog.ActionError("Found multiple...")` kèm theo toàn bộ Name tìm thấy. Không tự ý chọn để tránh ghi đè lỗi Web Resource của Dev khác.
  - **Match == 0:** Ở mode có tham số `-w`, **TUYỆT ĐỐI KHÔNG TẠO MỚI (CREATE)**. Quăng `SpectreLog.ActionError` bảo người dùng rà lại Tên file.

## 7. Giải Phóng Ràng Buộc SolutionComponent

Tại hàm `DeployWebResourceFileAsync`, ở khối code Update thành công Content tệp, dòng gọi `await AddWebResourceToSolutionAsync` cần bọc bởi:
- `if (BypassCungCapKhongCoSolution == false)`
- Điều này loại bỏ exception do không tìm thấy thẻ Solution trong hàm lookup XML. Vì ở chế độ Single File (-f và -w) cập nhật đè trên Server, Web Resource đó bản chất đã và đang nằm trong các Solution trước đó, không cần (và không thể) Add lại.
