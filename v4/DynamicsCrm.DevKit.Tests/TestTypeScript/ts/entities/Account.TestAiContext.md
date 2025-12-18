# AI Context: TypeScript Control Testing Framework

## Mục đích
File này dùng để AI nắm bắt ngữ cảnh khi tiếp tục công việc test TypeScript controls cho Dynamics 365/Dataverse.

---

## Cấu trúc Project

```
ts/
├── entities/
│   ├── Account.ts                    # Main form - gọi các Test functions
│   ├── Account.TestControl.ts        # Test 0: IControl interface (base)
│   ├── Account.TestLookup.ts         # Test 1: Lookup control
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

export function Test{ControlType}(form: AccountForm.Form): void {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const startTime = new Date().toLocaleTimeString();

    // Test properties và methods...

    // Output
    console.group(`🎯 TEST X: {ControlType} [${startTime}]`);
    console.log("%c📋 Properties", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);
    console.log("%c⚡ Methods", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);
    
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    console.log(`%c✅ Summary: ${passed}/${allResults.length} passed`, 
        "font-weight: bold; color: #4CAF50; font-size: 14px;");
    console.groupEnd();
}
```

### Bước 2: Import và gọi trong Account.ts
```typescript
import { TestControl } from './Account.TestControl';
import { TestLookup } from './Account.TestLookup';
import { Test{NewControl} } from './Account.Test{NewControl}';

setTimeout(() => {
    console.clear();
    debugger;
    
    TestControl(form);   // Test 0
    TestLookup(form);    // Test 1
    Test{NewControl}(form); // Test 2...
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
File sẽ được copy vào: `D:\...\TestAllInOne\Dev.DevKit.WebResource\entitiests`

---

## Đã Test (Completed)

| # | File | Control/Interface | Items |
|---|------|-------------------|-------|
| 0 | `Account.TestControl.ts` | IControl (base) | 24 items: 8 readonly props, 6 setter props, 10 methods |
| 1 | `Account.TestLookup.ts` | Lookup | 25 items: 16 props, 9 methods |

---

## Chưa Test (TODO)

Xem `devkit.d.ts` namespace `DevKit.Controls` để tìm interfaces:

| # | Interface | Sample Field | Ghi chú |
|---|-----------|--------------|---------|
| 2 | String | `form.Body.Name` | MaxLength |
| 3 | Integer | `form.Header.NumberOfEmployees` | Min, Max, Precision |
| 4 | Money | `form.Body.Revenue` | Min, Max, Precision |
| 5 | Decimal | | Min, Max, Precision |
| 6 | Double | | Min, Max, Precision |
| 7 | Boolean | `form.Body.CreditOnHold` | InitialValue |
| 8 | DateTime | | ShowTime |
| 9 | OptionSet | `form.Body.IndustryCode` | Options, SelectedOption, AddOption, RemoveOption, ClearOptions |
| 10 | MultiOptionSet | `form.Body.v4_Categories` | Same as OptionSet but arrays |
| 11 | Memo | | MaxLength (multiline text) |
| 12 | ITab | `form.Tabs.SUMMARY` | AddTabStateChange, DisplayState |
| 13 | ISection | | Visibility |
| 14 | IFrame | | Src, InitialUrl |
| 15 | WebResource | | |
| 16 | Grid/Subgrid | | |
| 17 | NavigationItem | | |

---

## Reference Files

- **Interface definitions**: `ts/lib/devkit.d.ts`
  - `DevKit.Controls.IControl` (base)
  - `DevKit.Controls.String`, `Integer`, `Money`, etc.
  - `DevKit.Controls.Lookup`
  - `DevKit.Controls.ITab`, `DevKit.Controls.ISection`
  
- **Implementation**: `ts/lib/devkit.ts`
  - Function `loadField()` implements all control properties/methods

- **Backup reference**: `ts/entities/Account.backup.ref`
  - Contains older JS test code for reference

---

## Lưu ý quan trọng

1. **Test order**: Test 0 (IControl) → Test 1 (Lookup) → Test 2, 3...
2. **console.clear()**: Chỉ gọi 1 lần ở Account.ts, KHÔNG gọi trong các file Test riêng
3. **setTimeout 10s**: Chờ form load xong mới run tests
4. **deploy.bat**: Có biến `ENTITIES` để config copy nhiều entity files
5. **debugger statement**: Giữ lại để debug trong F12 DevTools

---

*Last updated: 2024-12-18*
