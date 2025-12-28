# AI Context - Dynamics CRM DevKit Testing Project

## Mục đích
File này hướng dẫn AI hiểu rõ context và cấu trúc của dự án để có thể hỗ trợ tốt hơn.

---

## 1. TestDevKitJs - Source of Truth cho JavaScript

**Khi prompt đề cập đến `js`, `devkit.js` hoặc JavaScript implementation:**
- Luôn tham khảo các files trong folder `TestDevKitJs`
- Đây là **"SOURCE OF TRUTH"** cho JavaScript DevKit
- Các files quan trọng:
  - `lib/devkit.js` - Core DevKit JavaScript library (source of truth)
  - `entities/devkit.d.ts` - TypeScript definitions
  - `entities/Account.js` - Entity implementation mẫu
  - `entities/Account.form.js` - Form implementation mẫu
  - `entities/Account.webapi.js` - WebAPI implementation mẫu
  - `test/devkit.test.js` - Unit tests

**Test command:** `npm test`

---

## 2. TestDevKitTs - Source of Truth cho TypeScript

**Khi prompt đề cập đến `ts`, `devkit.ts` hoặc TypeScript implementation:**
- Luôn tham khảo các files trong folder `TestDevKitTs`
- Đây là **"SOURCE OF TRUTH"** cho TypeScript DevKit
- Các files quan trọng:
  - `entities/*.ts` - TypeScript source files
  - `lib/devkit.ts` - Core DevKit TypeScript library
  - `build/*.js` - Compiled JavaScript files (từ TypeScript)
  - `test/devkit/*.test.ts` - Unit tests cho devkit.ts
  - `test/account/*.test.ts` - Unit tests cho Account entity

**Build command:**
- `npm run debug` (Build All - debug)
- `npm run debug Account` (Build Account - debug)
- `npm run release` (Build All - release)

**Test command:** `npm run devkit-test` (Test All - 100% coverage)

---

## 3. TestWebResource - Deployment Target cho JavaScript

**Mục đích:** Folder này được dùng để deploy DevKit JavaScript lên Dynamics CRM

**Cấu trúc:** `TestWebResource/Dev.DevKit.WebResource/`

**Files cần copy từ TestDevKitJs:**
1. `TestDevKitJs/lib/devkit.js` → `TestWebResource/Dev.DevKit.WebResource/lib/devkit.js`
2. `TestDevKitJs/entities/devkit.d.ts` → `TestWebResource/Dev.DevKit.WebResource/entities/devkit.d.ts`
3. `TestDevKitJs/entities/Account.js` → `TestWebResource/Dev.DevKit.WebResource/entities/Account.js`
4. `TestDevKitJs/entities/Account.form.js` → `TestWebResource/Dev.DevKit.WebResource/entities/Account.form.js`
5. `TestDevKitJs/entities/Account.webapi.js` → `TestWebResource/Dev.DevKit.WebResource/entities/Account.webapi.js`

**Quy trình deploy:**
1. Run unit tests trong TestDevKitJs
2. Copy các files trên vào đúng thư mục
3. Deploy lên CRM (sử dụng DevKit CLI hoặc manual deploy)

---

## 4. TestWebResourceTs - Deployment Target cho TypeScript

**Mục đích:** Folder này được dùng để deploy DevKit TypeScript lên Dynamics CRM

**Cấu trúc:** `TestWebResourceTs/Dev.DevKit.WebResourceTs/`

**Files cần copy từ TestDevKitTs:**

### TypeScript Files (*.ts):
1. `TestDevKitTs/entities/Account.ts` → `TestWebResourceTs/Dev.DevKit.WebResourceTs/entities/Account.ts`
2. `TestDevKitTs/entities/Account.form.ts` → `TestWebResourceTs/Dev.DevKit.WebResourceTs/entities/Account.form.ts`
3. `TestDevKitTs/entities/Account.webapi.ts` → `TestWebResourceTs/Dev.DevKit.WebResourceTs/entities/Account.webapi.ts`
4. `TestDevKitTs/lib/devkit.ts` → `TestWebResourceTs/Dev.DevKit.WebResourceTs/lib/devkit.ts`
5. `TestDevKitTs/lib/devkit.d.ts` → `TestWebResourceTs/Dev.DevKit.WebResourceTs/lib/devkit.d.ts`

### JavaScript Files (build output từ *.ts):
1. `TestDevKitTs/build/Account.js` → `TestWebResourceTs/build/Account.js`

**Quy trình deploy:**
1. Run unit tests trong TestDevKitTs
2. Run `npm run debug` để build TypeScript files thành JavaScript
3. Copy cả TypeScript source files và JavaScript build output vào đúng thư mục
4. Deploy lên CRM

---

## 5. Deployment Scripts

### `deploy.devkitjs.bat` (TestDevKitJs)
Thực hiện deploy JavaScript DevKit:
1. Run unit tests
2. Copy files sang TestWebResource
3. Thông báo hoàn thành

### `deploy.devkitts.bat` (TestDevKitTs)
Thực hiện deploy TypeScript DevKit:
1. Run `npm run devkit-test` (All tests with coverage)
2. Build TypeScript files (`npm run debug`)
3. Copy files sang TestWebResourceTs
4. Thông báo hoàn thành

---

## Lưu ý quan trọng

- **TestDevKitJs** và **TestDevKitTs** là nơi phát triển và testing - KHÔNG được thay đổi trực tiếp code ở TestWebResource/TestWebResourceTs
- Luôn chạy tests trước khi deploy
- Khi có thay đổi ở source (TestDevKitJs/TestDevKitTs), phải copy sang target (TestWebResource/TestWebResourceTs)
- Build mode `debug` để có sourcemap cho debugging
- Build mode `release` để minify code cho production

---

## Workflow phát triển

1. **Phát triển JavaScript:** Edit files trong `TestDevKitJs` → Test → Deploy bằng `deploy.devkitjs.bat`
2. **Phát triển TypeScript:** Edit files trong `TestDevKitTs` → Test → Build → Deploy bằng `deploy.devkitts.bat`
3. **Verify:** Kiểm tra files đã được copy đúng vào TestWebResource/TestWebResourceTs
4. **Deploy to CRM:** Sử dụng các tool deploy của project (DevKit CLI, deploy.debug.bat, etc.)

## DevKit TS vs JS Architecture

> [!IMPORTANT]
> There is a fundamental architectural difference between the JavaScript and TypeScript implementations of DevKit.

*   **TypeScript (`TestDevKitTs`)**:
    *   Uses **`loadFormV3`** (Generic).
    *   Returns a strongly typed **`FormBase`** class instance (`devkit.ts`).
    *   Designed for module-based imports and strict typing.
    *   Accesses global `Xrm` via a helper `getXrm()` for safety.

*   **JavaScript (`TestDevKitJs`)**:
    *   Uses **`loadFormV2`**.
    *   Returns a plain JavaScript object constructed via a factory pattern (`devkit.js`).
    *   Exposes a global `devKit` object (IIFE).
    *   Often accesses global `Xrm` directly.

**AI Instructions**: When working in `TestDevKitTs`, ALWAYS assume the `FormBase` class structure and `loadFormV3` pattern. Do NOT confuse it with the `loadFormV2` factory pattern from the legacy JS implementation.
