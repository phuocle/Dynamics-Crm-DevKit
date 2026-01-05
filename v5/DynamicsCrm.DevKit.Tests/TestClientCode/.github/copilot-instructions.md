# GitHub Copilot Instructions

## Context cho Dynamics CRM DevKit Project

**LƯU Ý QUAN TRỌNG:** Đọc file [TestDevKitTs/AIContext.md](../TestDevKitTs/AIContext.md) để hiểu đầy đủ context của dự án này.

### Tóm tắt nhanh:

1. **TestDevKitJs** = Source of Truth cho JavaScript (`devkit.js`)
2. **TestDevKitTs** = Source of Truth cho TypeScript (`devkit.ts`)
3. **TestWebResource** = Target để deploy JavaScript files
4. **TestWebResourceTs** = Target để deploy TypeScript files

### Khi code:
- Đề cập đến `js` hoặc `devkit.js` → tham khảo **TestDevKitJs**
- Đề cập đến `ts` hoặc `devkit.ts` → tham khảo **TestDevKitTs**
- Không edit trực tiếp files ở TestWebResource/TestWebResourceTs (chỉ copy vào)

### Deployment:
- JavaScript: Dùng `TestDevKitJs/deploy.devkitjs.bat`
- TypeScript: Dùng `TestDevKitTs/deploy.devkitts.bat`

**Chi tiết đầy đủ trong: [TestDevKitTs/AIContext.md](../TestDevKitTs/AIContext.md)**
