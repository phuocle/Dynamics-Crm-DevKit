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
04.DevKitTs-AICode/
├── Dev.DevKit.WebResourceTs/
│   ├── entities/
│   │   ├── Account.ts                      # Main form - imports và gọi các Test functions
│   │   ├── Account.form.ts                 # Form implementation (generated)
│   │   ├── Account.webapi.ts               # WebAPI implementation (generated)
│   │   ├── Account.Test00.Control.ts       # Test file riêng biệt
│   │   ├── Account.Test01.String.ts        # Test file riêng biệt
│   │   ├── ...                             # Các test files khác
│   │   ├── OptionSet.ts                    # Global OptionSet enums
│   │   └── Account.AI.ts.md                # File này
│   ├── lib/
│   │   ├── devkit.ts                       # Core DevKit TypeScript library
│   │   └── devkit.d.ts                     # DevKit type definitions
│   ├── build/                              # Output folder (compiled JS)
│   └── build.js                            # Build script (esbuild)
└── package.json
```

---

## DevKit TS Architecture

> [!IMPORTANT]
> TypeScript DevKit sử dụng **module-based pattern** với ES6 imports và class `FormXXX.Form`.

### Pattern hiện tại (AICode):
```typescript
import { FormAccount_DevKitV4 } from './Account.form';
import { TestControl } from './Account.Test00.Control';
import { TestString } from './Account.Test01.String';
// ... more imports

const formAccount_DevKitV4 = (function () {
    "use strict";

    let form: FormAccount_DevKitV4.Form;

    async function onLoad(executionContext: any): Promise<void> {
        form = new FormAccount_DevKitV4.Form(executionContext);
        registerEvents();
        form.UiAddLoaded(UiAddLoaded);
    }

    function registerEvents(): void {
        if (form.ExecutionContext.IsInitialLoad()) {
            // Register events here
        }
    }

    async function UiAddLoaded(executionContext: any): Promise<void> {
        // Code chạy sau khi form đã load UI
    }

    return { OnLoad: onLoad };
})();

export { formAccount_DevKitV4 };
```

### So sánh với các pattern khác:
| Pattern | Sử dụng | Project |
|---------|---------|---------|
| `FormXXX.Form` + ES6 imports | Module-based | **DevKitTs-AICode** ✅ |
| `loadFormV3<T>()` | Generic class | DevKitTs-UnitTest |
| `new DevKit.FormXXX()` | Class-based (IIFE) | DevKitJs-AICode |
| `devKit.loadFormV2()` | Factory pattern | DevKitJs-UnitTest |

**AI Instructions**: Khi làm việc trong `DevKitTs-AICode`, LUÔN sử dụng ES6 imports và pattern `new FormXXX.Form(executionContext)`.

---

## Workflow tạo Test mới (TypeScript)

### Bước 1: Tạo file Test riêng biệt
Tạo file `Account.TestXX.{ControlType}.ts` trong `entities/`:

```typescript
import { FormAccount_DevKitV4 } from './Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST XX: {ControlType} Control - {Field} Field
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function Test{ControlType}(form: FormAccount_DevKitV4.Form): boolean {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const startTime = new Date().toLocaleTimeString();
    const originalValue = form.Body.{field}.Value;

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
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`🎯 [TS] TEST XX: {ControlType} [${startTime}] - Using: {field} field - ${passed}/${total}`);
    
    console.log("%c📋 ReadOnly Properties (R1-RN)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    
    console.log("%c⚡ Setters & Methods (S1-SN)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    
    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
    return passed === total;  // Return boolean for suite tracking
}
```

### Bước 2: Import và gọi trong Account.ts
```typescript
import { Test{NewControl} } from './Account.TestXX.{NewControl}';

// Trong UiAddLoaded:
// Test XX: {NewControl} Control
if (Test{NewControl}(form)) passedSuites++; totalSuites++;
```

### Bước 3: Build
```bash
cd Dev.DevKit.WebResourceTs
npm run debug          # Build tất cả
npm run debug Account  # Build chỉ Account
```

### Bước 4: Sync files từ Source of Truth
Chạy workflow `/sync` để đảm bảo files được sync từ source of truth.

---

## Đã Test (Completed)

| # | File | Control | ReadOnly | Setters/Methods | Field |
|---|------|---------|----------|-----------------|-------|
| 00 | `Account.Test00.Control.ts` | IControl | R1-R8 | S1-S16 | v4_String |
| 01 | `Account.Test01.String.ts` | String | R1-R15 | S1-S11 | v4_String |
| 02 | `Account.Test02.Memo.ts` | Memo | R1-R15 | S1-S11 | v4_Memo |
| 03 | `Account.Test03.Boolean.ts` | Boolean | R1-R15 | S1-S11 | v4_Boolean |
| 04 | `Account.Test04.Integer.ts` | Integer | R1-R16 | S1-S11 | v4_Integer |
| 04A | `Account.Test04A.Header.ts` | Header | R1-R16 | S1-S11 | v4_Integer1 |
| 05 | `Account.Test05.Decimal.ts` | Decimal | R1-R17 | S1-S12 | v4_Decimal |
| 06 | `Account.Test06.Double.ts` | Double | R1-R17 | S1-S12 | v4_Double |
| 07 | `Account.Test07.Money.ts` | Money | R1-R17 | S1-S12 | Revenue |
| 08 | `Account.Test08.Lookup.ts` | Lookup | R1-R16 | S1-S9 | PrimaryContactId |
| 08A | `Account.Test08A.Lookup1.ts` | Lookup Multi | R1-R16 | S1-S9 | OwnerId/OwnerId1 |
| 09 | `Account.Test09.OptionSet.ts` | OptionSet | R1-R18 | S1-S16 | IndustryCode |
| 10 | `Account.Test10.MultiOptionSet.ts` | MultiOptionSet | R1-R18 | S1-S12 | v4_Categories |
| 11 | `Account.Test11.DateOnly.ts` | DateOnly | R1-R14 | S1-S11 | v4_Birthday |
| 12 | `Account.Test12.DateTime.ts` | DateTime | R1-R15 | S1-S12 | v4_AppointmentTime |
| 13 | `Account.Test13.Grid.ts` | Grid | R1-R12 | S1-S8 | Contacts |
| 14 | `Account.Test14.QuickView.ts` | QuickView | R1-R5 | S1-S6 | contactquickform |
| 15 | `Account.Test15.NavigationItem.ts` | NavigationItem | R1-R3 | S1-S3 | Account_Tasks |
| 16 | `Account.Test16.ExecutionContext.ts` | ExecutionContext | R1-R8 | S1-S6 | form.ExecutionContext |
| 17 | `Account.Test17.SidePanes.ts` | SidePanes | R1-R8 | S1-S6 | form.SidePanes |
| 18 | `Account.Test18.Copilot.ts` | Copilot | R1-R4 | S1-S4 | form.Copilot (Preview) |
| 19 | `Account.Test19.Process.ts` | Process | R1-R9 | S1-S9 | v4_AccountBPF |
| 20 | `Account.Test20.IFrame.ts` | IFrame | R1-R7 | S1-S5 | v4_IFrameExternal |
| 21 | `Account.Test21.Utility.ts` | Utility | R1-R40 | S1-S37 | Utility API |
| 22 | `Account.Test22.Tab.ts` | Tab + Section | R1-R10 | S1-S8 | DETAILS_TAB |
| 23 | `Account.Test23.Timer.ts` | Timer | R1-R6 | S1-S4 | v4_TimerSLA |
| 24 | `Account.Test24.Knowledge.ts` | Knowledge | R1-R5 | S1-S6 | v4_KnowledgeSearch |
| 25 | `Account.Test25.WebApi.ts` | WebApi | R1-R5 | S1-S8 | AccountApi |
| 26 | `Account.Test26.WebResource.ts` | WebResource | R1-R7 | S1-S6 | v4_WebResourceHelp |

---

## ⚠️ TypeScript Convention (QUAN TRỌNG)

Khi viết test, **KHÔNG** sử dụng shorthand variables:

```typescript
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

## ⚠️ Global OptionSet Convention

Khi viết test, **PHẢI** sử dụng Global OptionSet từ `OptionSet.ts`:

```typescript
import { OptionSet } from './OptionSet';

// ❌ KHÔNG DÙNG string literals:
form.Body.v4_String.RequiredLevel = "required";
form.Body.v4_String.SubmitMode = "always";

// ✅ PHẢI DÙNG OptionSet enums:
form.Body.v4_String.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
form.Body.v4_String.SubmitMode = OptionSet.FieldSubmitMode.Always;
```

**Các Global OptionSet available (từ OptionSet.ts):**
| OptionSet | Values |
|-----------|--------|
| `OptionSet.FieldRequiredLevel` | `None`, `Required`, `Recommended` |
| `OptionSet.FieldSubmitMode` | `Always`, `Never`, `Dirty` |
| `OptionSet.FieldNotificationLevel` | `Error`, `Recommendation` |
| `OptionSet.FieldAttributeType` | `Boolean`, `DateTime`, `Decimal`, `Double`, `Integer`, `Lookup`, `Memo`, `Money`, `MultiOptionSet`, `OptionSet`, `String` |

---

## TypeScript-Specific Notes

### Error handling:
```typescript
// TypeScript cần explicit type cho error
try {
    // ...
} catch (error: any) {
    console.log(error.message);
}
```

### Function signatures:
```typescript
// Test function PHẢI có form parameter và return boolean
export function TestXXX(form: FormAccount_DevKitV4.Form): boolean {
    // ...
    return passed === total;
}

// Async test (e.g., WebApi)
export async function TestWebApi(form: FormAccount_DevKitV4.Form): Promise<boolean> {
    // ...
    return passed === total;
}
```

---

## Source of Truth Files

> [!IMPORTANT]
> Các files dưới đây là **Source of Truth**, KHÔNG được edit trực tiếp trong folder này.

| File | Source Location |
|------|-----------------|
| `devkit.ts` | `DynamicsCrm.DevKit.Shared\Resources\ts\devkit.ts` |
| `devkit.d.ts` | `DynamicsCrm.DevKit.Shared\Resources\ts\devkit.d.ts` |
| `build.js` | `DynamicsCrm.DevKit.Shared\Resources\ts\build.js` |
| `Account.form.ts` | Generated by CLI profile `TestClientCode-TS-FORM` |
| `Account.webapi.ts` | Generated by CLI profile `TestClientCode-TS-WEBAPI` |
| `OptionSet.ts` | Generated by CLI profile `TestClientCode-TS-FORM` |

**Quy trình sync:**
1. Edit Source of Truth files
2. Run `/sync` workflow
3. Files sẽ được copy vào folder này tự động

---

## Lưu ý quan trọng

1. **Naming Convention**: 
   - `R-Index` cho ReadOnly (R1, R2, R3...)
   - `S-Index` cho Setters & Methods (S1, S2, S3...)
2. **Test file naming**: `Account.TestXX.{ControlType}.ts` (e.g., `Account.Test00.Control.ts`)
3. **Test order**: Test 00 → Test 01 → Test 02 → ...
4. **console.groupCollapsed**: Mặc định đóng, click để mở
5. **console.clear()**: Chỉ gọi 1 lần ở UiAddLoaded
6. **setTimeout 1s**: Chờ 1 giây sau khi UI load xong mới run tests
7. **Return boolean**: Mỗi test function phải return `true/false` để tracking passes
8. **[TS] prefix**: Console output có prefix `[TS]` để phân biệt với JavaScript
9. **ES6 imports**: LUÔN sử dụng ES6 import/export

---

*Last updated: 2026-01-06*
