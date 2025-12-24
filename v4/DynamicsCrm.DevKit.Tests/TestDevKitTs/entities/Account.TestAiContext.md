# AI Context: TypeScript Control Testing Framework

## Mục đích
File này dùng để AI nắm bắt ngữ cảnh khi tiếp tục công việc test TypeScript controls cho Dynamics 365/Dataverse.

---

## ⚠️ NAMING CONVENTION (QUAN TRỌNG)

| Prefix | Loại | Ví dụ |
|--------|------|-------|
| **R-Index** | ReadOnly properties | R1, R2, R3... |
| **S-Index** | Setters & Methods | S1, S2, S3... |

**KHÔNG sử dụng:**
- ❌ P1, P2, P3... (cũ)
- ❌ M1, M2, M3... (cũ)
- ❌ I1, I2, I3... (cũ)
- ❌ Số thuần: 1, 2, 3... (cũ)

---

## Cấu trúc Project

```
ts/
├── entities/
│   ├── Account.ts                    # Main form - gọi các Test functions
│   ├── Account.TestControl.ts        # Test 0: IControl interface (base)
│   ├── Account.TestLookup.ts         # Test 1: Lookup control
│   ├── Account.TestMemo.ts           # Test 2: Memo control
│   ├── Account.TestAiContext.md      # File này
│   └── generator/
│       └── Account.form.ts           # Generated form types
├── lib/
│   ├── devkit.ts                     # DevKit implementation
│   └── devkit.d.ts                   # DevKit type definitions
├── build/                            # Output folder (gitignored)
├── build.js                          # Build script (esbuild)
├── deploy.bat                        # Deploy to WebResource folder
└── package.json
```

---

## Workflow tạo Test mới

### Bước 1: Tạo file Test
Tạo file `Account.Test{ControlType}.ts` trong `ts/entities/`:

```typescript
import { AccountForm } from './generator/Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST X: {ControlType} Control - {Field} Field
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function Test{ControlType}(form: AccountForm.Form): void {
    const results: TestResult[] = [];         // ReadOnly (R-Index)
    const methodResults: TestResult[] = [];   // Setters & Methods (S-Index)
    const startTime = new Date().toLocaleTimeString();

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        results.push({ Test: "R1", Property: "...", Value: ..., Status: "✓" });
        results.push({ Test: "R2", Property: "...", Value: ..., Status: "✓" });
        // ...
    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================
    try {
        methodResults.push({ Test: "S1", Property: "...", Value: ..., Status: "✓" });
        methodResults.push({ Test: "S2", Property: "...", Value: ..., Status: "✓" });
        // ...
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "...", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const total = allResults.length;

    console.groupCollapsed(`🎯 TEST X: {ControlType} [${startTime}] - Using: {field} field - ${passed}/${total}`);
    
    console.log("%c📋 ReadOnly Properties (R1-RN)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    
    console.log("%c⚡ Setters & Methods (S1-SN)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    
    console.log(`%c✅ Summary: ${passed}/${total} passed`, 
        "font-weight: bold; color: #4CAF50; font-size: 14px;");
    console.groupEnd();
}
```

### Bước 2: Import và gọi trong Account.ts
```typescript
import { TestControl } from './Account.TestControl';
import { TestLookup } from './Account.TestLookup';
import { TestMemo } from './Account.TestMemo';
import { Test{NewControl} } from './Account.Test{NewControl}';

setTimeout(() => {
    console.clear();
    
    TestControl(form);      // Test 0
    TestLookup(form);       // Test 1
    TestMemo(form);         // Test 2
    Test{NewControl}(form); // Test 3...
}, 10000);
```

### Bước 3: Build
```bash
cd ts
npm run debug
```

### Bước 4: Deploy
```bash
.\deploy.bat
```

### Bước 5: (Nếu là TestDevKitJs) Copy file JS
```bash
Copy-Item -Path "d:\github\Dynamics-Crm-DevKit\v4\DynamicsCrm.DevKit.Tests\TestDevKitJs\entities\Account.js" -Destination "D:\github\Dynamics-Crm-DevKit\v4\DynamicsCrm.DevKit.Tests\TestWebResource\Dev.DevKit.WebResource\entities\" -Force
```


---

## Đã Test (Completed)

| # | File | Control | ReadOnly | Setters/Methods | Field |
|---|------|---------|----------|-----------------|-------|
| 0 | `Account.TestControl.ts` | IControl | R1-R8 | S1-S16 | Name |
| 1 | `Account.TestLookup.ts` | Lookup | R1-R16 | S1-S9 | PrimaryContactId |
| 2 | `Account.TestMemo.ts` | Memo | R1-R15 | S1-S11 | Description |
| 3 | `Account.TestString.ts` | String | R1-R15 | S1-S11 | Name |
| 4 | `Account.TestInteger.ts` | Integer | R1-R16 | S1-S11 | NumberOfEmployees |
| 5 | `Account.TestOptionSet.ts` | OptionSet | R1-R18 | S1-S16 | IndustryCode |
| 6 | `Account.TestWebApi.ts` | WebApi | R1-R5 | S1-S8 | AccountApi |
| 7 | `Account.TestMoney.ts` | Money | R1-R17 | S1-S12 | Revenue |
| 8 | `Account.TestBoolean.ts` | Boolean | R1-R15 | S1-S11 | CreditOnHold |
| 9 | `Account.TestDateTime.ts` | DateTime | R1-R15 | S1-S12 | v4_AppointmentTime |
| 10 | `Account.TestDateOnly.ts` | DateOnly | R1-R14 | S1-S11 | v4_Birthday |
| 11 | `Account.TestGrid.ts` | Grid | R1-R12 | S1-S8 | Contacts |
| 12 | `Account.TestUtility.ts` | Utility | R1-R40 | S1-S37 | Utility API |
| 13 | `Account.TestMultiOptionSet.ts` | MultiOptionSet | R1-R18 | S1-S12 | v4_Categories |
| 14 | `Account.TestTab.ts` | ITab + Section | R1-R10 | S1-S8 | DETAILS_TAB |
| 15 | `Account.TestNavigationItem.ts` | NavigationItem | R1-R3 | S1-S3 | Account_Tasks |
| 16 | `Account.TestExecutionContext.ts` | ExecutionContext | R1-R8 | S1-S6 | form.ExecutionContext |
| 17 | `Account.TestSidePanes.ts` | SidePanes | R1-R8 | S1-S6 | form.SidePanes |
| 18 | `Account.TestCopilot.ts` | Copilot | R1-R4 | S1-S4 | form.Copilot (Preview) |
| 19 | `Account.TestDecimal.ts` | Decimal | R1-R17 | S1-S12 | form.Body.v4_Latitude |
| 20 | `Account.TestDouble.ts` | Double | R1-R17 | S1-S12 | form.Body.v4_DiscountPercentage |
| 21 | `Account.TestIFrame.ts` | IFrame | R1-R7 | S1-S5 | form.Body.v4_IFrameExternal |
| 22 | `Account.TestWebResource.ts` | WebResource | R1-R7 | S1-S6 | form.Body.v4_WebResourceHelp |
| 23 | `Account.TestTimer.ts` | Timer | R1-R6 | S1-S4 | form.Body.v4_TimerSLA |
| 24 | `Account.TestKnowledge.ts` | Knowledge | R1-R5 | S1-S6 | form.Body.v4_KnowledgeSearch |
| 25 | `Account.TestQuickView.ts` | QuickView | R1-R5 | S1-S6 | form.QuickForm.contactquickform |
| 26 | `Account.TestProcess.ts` | Process | R1-R9 | S1-S9 | form.Process.v4_AccountBPF |

---

## Chưa Test (TODO)

| # | Interface | Sample Field | Ghi chú |
| # | Interface | Sample Field | Ghi chú |
|---|-----------|--------------|---------|
| - | - | - | All Planned Tests Implemented |

---

## ⚠️ JavaScript Convention (TestDevKitJs)

Khi viết test cho **TestDevKitJs** (JavaScript), **KHÔNG** sử dụng shorthand variables:

```javascript
// ❌ KHÔNG DÙNG shorthand như này:
const control = form.Body.v4_String;
control.PropertyA;
control.PropertyB;

// ✅ PHẢI DÙNG full path:
form.Body.v4_String.PropertyA;
form.Body.v4_String.PropertyB;
```

**Lý do:**
- Cho phép verify lint errors trực tiếp trên từng property
- TypeScript checker có thể validate đúng line number cho mỗi property access
- Dễ debug và identify vấn đề trong `.d.ts` file

---

## ⚠️ Global OptionSet Convention (TestDevKitJs)

Khi viết test, **PHẢI** sử dụng Global OptionSet thay vì string literals:

```javascript
// ❌ KHÔNG DÙNG string literals:
form.Body.v4_String.RequiredLevel = "required";
form.Body.v4_String.SubmitMode = "always";
notificationLevel: "RECOMMENDATION"

// ✅ PHẢI DÙNG OptionSet enums:
form.Body.v4_String.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
form.Body.v4_String.SubmitMode = OptionSet.FieldSubmitMode.Always;
notificationLevel: OptionSet.FieldNotificationLevel.Recommendation
```

**Các Global OptionSet available:**
| OptionSet | Values |
|-----------|--------|
| `OptionSet.FieldRequiredLevel` | `None`, `Required`, `Recommended` |
| `OptionSet.FieldSubmitMode` | `Always`, `Never`, `Dirty` |
| `OptionSet.FieldNotificationLevel` | `Error`, `Recommendation` |

**Lý do:**
- TypeScript checker sẽ báo lỗi nếu dùng string literals sai
- Đảm bảo type safety và auto-complete trong IDE
- Consistent với cách sử dụng trong CRM runtime

---

## ⚠️ TypeScript Lint Fixes (TestDevKitJs)

Để file JavaScript hiển thị **"GREEN"** (không có lint errors):

### 1. Catch blocks - sử dụng `/** @type {any} */`:
```javascript
// ❌ Lint error: 'e' is of type 'unknown'
} catch (e) {
    console.log(e.message);
}

// ✅ GREEN - không có lint error:
} catch (/** @type {any} */ e) {
    console.log(e.message);
}
```

### 2. Runtime comparison - sử dụng `// @ts-ignore`:
```javascript
// ❌ Lint error: types have no overlap
form.Body.v4_String.AttributeType === "string"

// ✅ GREEN - comment trước dòng cần ignore:
// @ts-ignore - AttributeType comparison is valid at runtime
form.Body.v4_String.AttributeType === "string"
```

---

## Lưu ý quan trọng

1. **Naming Convention**: 
   - `R-Index` cho ReadOnly (R1, R2, R3...)
   - `S-Index` cho Setters & Methods (S1, S2, S3...)
2. **Test order**: Test 0 → Test 1 → Test 2 → ...
3. **console.groupCollapsed**: Mặc định đóng, click để mở
4. **console.clear()**: Chỉ gọi 1 lần ở Account.ts
5. **setTimeout 10s**: Chờ form load xong mới run tests
6. **deploy.bat**: Copy output vào WebResource folder

---

*Last updated: 2025-12-24*
