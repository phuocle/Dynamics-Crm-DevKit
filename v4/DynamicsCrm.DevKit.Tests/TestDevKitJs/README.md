> **IMPORTANT — Quy trình chạy (BẮT BUỘC, theo thứ tự)**

- Yêu cầu trước khi chạy:
  - Cài đặt `Node.js` và `npm` (phiên bản tương thích với môi trường của bạn).
  - Mở PowerShell với quyền cho phép chạy script hoặc tạm thời cho phép ExecutionPolicy.
  - Mở terminal ở thư mục `TestDevKitJs` (thư mục chứa `package.json`).

- Cách chạy từng bước (chạy theo thứ tự):

  1. Dọn sạch môi trường (xóa `node_modules`, `coverage`, `package-lock.json`, ...):

      ```powershell
      .\1.Clean.ps1
      ```

      - Kết quả mong đợi: các thư mục/ file cũ được xóa.

  2. Sao chép/chuẩn bị file `devkit` cho tests (chuyển sang ES module nếu cần):

      ```powershell
      .\2.CopyDevKitJs.ps1
      ```

      - Kết quả mong đợi: file `lib/devkit.mjs` được tạo/ghi đè từ nguồn chung.

  3. Cài đặt dependency và chạy tests:

      ```powershell
      .\3.Install.ps1
      ```

      - Kết quả mong đợi: `npm install` hoàn tất; tests chạy thành công.

  4. Chạy unit tests với coverage và mở báo cáo HTML (bắt buộc popup):

      ```powershell
      .\4.RunCodeCoverage.ps1
      ```

      - Kết quả mong đợi: Jest chạy với `--coverage`; script sẽ tìm file `.html` trong `coverage/` và mở báo cáo trong trình duyệt.

- Nếu bất kỳ bước nào lỗi, dừng lại, sửa lỗi (hoặc thông báo cho tôi) và sau khi sửa xong, chạy lại từ bước 1 cho tới khi bước 4 thành công và báo cáo coverage mở được.

---

# JavaScript Modules cho Dynamics 365 / Dataverse (TestDevKitJs)

## Tổng quan

Phiên bản này là bộ kiểm thử JavaScript cho `devkit` dưới dạng ES module. Mục tiêu:

- Chạy unit tests cho `lib/devkit.mjs` với `jest`.
- Sinh báo cáo coverage HTML và mở báo cáo cuối cùng.

## Cấu trúc project (TestDevKitJs)

```
TestDevKitJs/
├── lib/
│   └── devkit.mjs          # Core library (ES module)
├── test/
│   └── devkit.test.js      # Unit tests (Jest)
├── coverage/               # Coverage reports (generated)
├── 1.Clean.ps1
├── 2.CopyDevKitJs.ps1
├── 3.Install.ps1
├── 4.RunCodeCoverage.ps1
├── package.json
└── README.md
```

## NPM Scripts (xem `package.json`)

| Lệnh | Mô tả |
|------|-------|
| `npm test` | Chạy Jest tests |
| `npm run coverage` | Chạy Jest với coverage và sinh báo cáo HTML |

## Cách sử dụng nhanh

1. Dọn sạch môi trường:

```powershell
.\1.Clean.ps1
```

2. Chuẩn bị `devkit`:

```powershell
.\2.CopyDevKitJs.ps1
```

3. Cài dependencies và chạy tests:

```powershell
.\3.Install.ps1
```

4. Sinh coverage và mở báo cáo HTML:

```powershell
.\4.RunCodeCoverage.ps1
```

## Ghi chú

- File `coverage/` là kết quả sinh ra — đã thêm vào `.gitignore` để tránh commit.
- `4.RunCodeCoverage.ps1` sẽ cố gắng mở file HTML đầu tiên tìm thấy trong `coverage/`.

Nếu cần mình có thể cập nhật thêm phần hướng dẫn deploy file `lib/devkit.mjs` lên Dataverse.
