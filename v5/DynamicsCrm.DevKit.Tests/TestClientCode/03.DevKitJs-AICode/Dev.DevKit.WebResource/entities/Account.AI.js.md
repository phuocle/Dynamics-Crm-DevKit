# AI Context: JavaScript Control Testing Framework

## Mục đích
File này dùng để AI nắm bắt ngữ cảnh khi tiếp tục công việc test JavaScript controls cho Dynamics 365/Dataverse.

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
03.DevKitJs-AICode/
├── Dev.DevKit.WebResource/
│   ├── entities/
│   │   ├── Account.js                  # Main form - gọi các Test functions
│   │   ├── Account.form.js             # Form implementation (generated)
│   │   ├── Account.webapi.js           # WebAPI implementation (generated)
│   │   ├── Account.d.ts                # TypeScript definitions
│   │   ├── devkit.d.ts                 # DevKit type definitions
│   │   └── Account.AI.js.md            # File này
│   └── lib/
│       └── devkit.js                   # Core DevKit JavaScript library
└── package.json
```

---

## DevKit JS Architecture

> [!IMPORTANT]
> JavaScript DevKit trong AICode sử dụng **class-based pattern** với `new DevKit.FormXXX(executionContext)`.

### Pattern hiện tại (AICode):
```javascript
var formAccount_DevKitV4 = (function () {
    "use strict";
    /** @type {DevKit.FormAccount_DevKitV4} */
    let form;
    
    /** @param {any} executionContext */
    async function onLoad(executionContext) {
        form = new DevKit.FormAccount_DevKitV4(executionContext);
        registerEvents();
        form.UiAddLoaded(UiAddLoaded);
    }
    
    function registerEvents() {
        if (form.ExecutionContext.IsInitialLoad()) {
            // Register events here
        }
    }
    
    /** @param {any} executionContext */
    async function UiAddLoaded(executionContext) {
        // Code chạy sau khi form đã load UI
    }
    
    return { onLoad: onLoad };
})();
```

### So sánh với các pattern khác:
| Pattern | Sử dụng | Project |
|---------|---------|---------|
| `new DevKit.FormXXX()` | Class-based | **DevKitJs-AICode** ✅ |
| `devKit.loadFormV2()` | Factory pattern | DevKitJs-UnitTest |
| `loadFormV3<T>()` | Generic class | DevKitTs |

**AI Instructions**: Khi làm việc trong `DevKitJs-AICode`, LUÔN sử dụng pattern `new DevKit.FormXXX(executionContext)`.

---

## Workflow tạo Test mới (JavaScript)

### Bước 1: Thêm Test function trong Account.js
Thêm function `Test{ControlType}()` theo template:

```javascript
function Test{ControlType}() {
    /** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
    const results = [];
    /** @type {Array<{Test: string, Property: string, Value: any, Status: string}>} */
    const methodResults = [];
    const startTime = new Date().toLocaleTimeString();
    const originalValue = form.Body.{field}.Value;

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        results.push({ Test: "R1", Property: "...", Value: ..., Status: "✓" });
        results.push({ Test: "R2", Property: "...", Value: ..., Status: "✓" });
        // ...
    } catch (/** @type {any} */ error) {
        results.push({ Test: "ERR", Property: "Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================
    try {
        methodResults.push({ Test: "S1", Property: "...", Value: ..., Status: "✓" });
        methodResults.push({ Test: "S2", Property: "...", Value: ..., Status: "✓" });
        // ...
    } catch (/** @type {any} */ e) {
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

    console.groupCollapsed(`🎯 [JS] TEST XX: {ControlType} [${startTime}] - Using: {field} field - ${passed}/${total}`);
    
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

### Bước 2: Gọi trong UiAddLoaded
```javascript
async function UiAddLoaded(executionContext) {
    setTimeout(async () => {
        console.clear();
        let passedSuites = 0;
        let totalSuites = 0;

        // Test 0: IControl Interface (base for all controls)
        if (TestControl()) passedSuites++; totalSuites++;

        // Test 1: String Control
        if (TestString()) passedSuites++; totalSuites++;

        // Test XX: {NewControl} Control
        if (Test{NewControl}()) passedSuites++; totalSuites++;

        console.log(`%cTESTS PASSED: ${passedSuites} / ${totalSuites}`, 
            "font-weight: bold; font-size: 20px; color: #E91E63;");
    }, 1000);  // 1 second delay
}
```

### Bước 3: Sync files từ Source of Truth
Chạy workflow `/sync` để đảm bảo files được sync từ source of truth.

---

## Đã Test (Completed)

| # | Function | Control | ReadOnly | Setters/Methods | Field |
|---|----------|---------|----------|-----------------|-------|
| 00 | `TestControl()` | IControl | R1-R8 | S1-S16 | v4_String |
| 01 | `TestString()` | String | R1-R15 | S1-S11 | v4_String |
| 02 | `TestMemo()` | Memo | R1-R15 | S1-S11 | v4_Memo |
| 03 | `TestBoolean()` | Boolean | R1-R15 | S1-S11 | v4_Boolean |
| 04 | `TestInteger()` | Integer | R1-R16 | S1-S11 | v4_Integer |
| 04A | `TestHeader()` | Header | R1-R16 | S1-S11 | v4_Integer1 |
| 05 | `TestDecimal()` | Decimal | R1-R17 | S1-S12 | v4_Decimal |
| 06 | `TestDouble()` | Double | R1-R17 | S1-S12 | v4_Double |
| 07 | `TestMoney()` | Money | R1-R17 | S1-S12 | Revenue |
| 08 | `TestLookup()` | Lookup | R1-R16 | S1-S9 | PrimaryContactId |
| 08A | `TestLookup1()` | Lookup Multi | R1-R16 | S1-S9 | OwnerId/OwnerId1 |
| 09 | `TestOptionSet()` | OptionSet | R1-R18 | S1-S16 | IndustryCode |
| 10 | `TestMultiOptionSet()` | MultiOptionSet | R1-R18 | S1-S12 | v4_Categories |
| 11 | `TestDateOnly()` | DateOnly | R1-R14 | S1-S11 | v4_Birthday |
| 12 | `TestDateTime()` | DateTime | R1-R15 | S1-S12 | v4_AppointmentTime |
| 13 | `TestGrid()` | Grid | R1-R12 | S1-S8 | Contacts |
| 14 | `TestQuickView()` | QuickView | R1-R5 | S1-S6 | contactquickform |
| 15 | `TestNavigationItem()` | NavigationItem | R1-R3 | S1-S3 | Account_Tasks |
| 16 | `TestExecutionContext()` | ExecutionContext | R1-R8 | S1-S6 | form.ExecutionContext |
| 17 | `TestSidePanes()` | SidePanes | R1-R8 | S1-S6 | form.SidePanes |
| 18 | `TestCopilot()` | Copilot | R1-R4 | S1-S4 | form.Copilot (Preview) |
| 19 | `TestProcess()` | Process | R1-R9 | S1-S9 | v4_AccountBPF |
| 20 | `TestIFrame()` | IFrame | R1-R7 | S1-S5 | v4_IFrameExternal |
| 21 | `TestUtility()` | Utility | R1-R40 | S1-S37 | Utility API |
| 22 | `TestTab()` | Tab + Section | R1-R10 | S1-S8 | DETAILS_TAB |
| 23 | `TestTimer()` | Timer | R1-R6 | S1-S4 | v4_TimerSLA |
| 24 | `TestKnowledge()` | Knowledge | R1-R5 | S1-S6 | v4_KnowledgeSearch |
| 25 | `TestWebApi()` | WebApi | R1-R5 | S1-S8 | AccountApi |
| 26 | `TestWebResource()` | WebResource | R1-R7 | S1-S6 | v4_WebResourceHelp |

---

## ⚠️ JavaScript Convention (QUAN TRỌNG)

Khi viết test, **KHÔNG** sử dụng shorthand variables:

```javascript
// ❌ KHÔNG DÙNG shorthand như này:
var control = form.Body.v4_String;
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
| `OptionSet.FieldAttributeType` | `Boolean`, `DateTime`, `Decimal`, `Double`, `Integer`, `Lookup`, `Memo`, `Money`, `MultiOptionSet`, `OptionSet`, `String` |

---

## ⚠️ JavaScript Lint Fixes

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

## Source of Truth Files

> [!IMPORTANT]
> Các files dưới đây là **Source of Truth**, KHÔNG được edit trực tiếp trong folder này.

| File | Source Location |
|------|-----------------|
| `devkit.js` | `DynamicsCrm.DevKit.Shared\Resources\js\devkit.js` |
| `devkit.d.ts` | `DynamicsCrm.DevKit.Shared\Resources\ts\devkit.d.ts` |
| `Account.form.js` | Generated by CLI profile `TestClientCode-JS-FORM` |
| `Account.webapi.js` | Generated by CLI profile `TestClientCode-JS-WEBAPI` |
| `Account.d.ts` | Generated by CLI profile `TestClientCode-JS-FORM` |

**Quy trình sync:**
1. Edit Source of Truth files
2. Run `/sync` workflow
3. Files sẽ được copy vào folder này tự động

---

## Lưu ý quan trọng

1. **Naming Convention**: 
   - `R-Index` cho ReadOnly (R1, R2, R3...)
   - `S-Index` cho Setters & Methods (S1, S2, S3...)
2. **Test order**: Test 00 → Test 01 → Test 02 → ...
3. **console.groupCollapsed**: Mặc định đóng, click để mở
4. **console.clear()**: Chỉ gọi 1 lần ở UiAddLoaded
5. **setTimeout 1s**: Chờ 1 giây sau khi UI load xong mới run tests
6. **Return boolean**: Mỗi test function phải return `true/false` để tracking passes
7. **[JS] prefix**: Console output có prefix `[JS]` để phân biệt với TypeScript

---

*Last updated: 2026-01-06*
