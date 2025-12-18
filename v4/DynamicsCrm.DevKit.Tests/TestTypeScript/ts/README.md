# TypeScript Modules cho Dynamics 365 / Dataverse

## Tổng quan

Đây là phiên bản TypeScript của các file JavaScript cho Dynamics 365 WebResources. Sử dụng TypeScript modules giúp:

1. **IntelliSense đầy đủ** - Có `@types/xrm` và typed form modules
2. **Type safety** - Phát hiện lỗi tại compile time
3. **Tự động bundle** - Không cần setup dependencies trong Dataverse
4. **Dễ bảo trì** - Code rõ ràng, có type
5. **Unit testing** - Jest + xrm-mock với 99% coverage

## Cấu trúc project

```
ts/
├── entities/               # Entity files
│   ├── Account.ts          # Developer code (viết tay)
│   ├── Contact.ts          # Developer code (viết tay)
│   └── generator/          # Generated form files
│       └── Account.form.ts # Generated form cho Account
│
├── lib/                    # Core library
│   ├── devkit.ts           # Implementation (LoadFormV2, LoadWebApi, etc.)
│   └── devkit.d.ts         # Type definitions (DevKit namespace)
│
├── test/                   # Unit tests
│   ├── devkit.test.ts      # Tests cho devkit.ts (99% coverage)
│   └── Account.form.test.ts# Tests cho entity forms
│
├── build/                  # Output folder
│   └── Account.js          # Deploy file này lên Dataverse
│
├── build.js                # Build script (all entities)
├── build-single.js         # Build single entity
├── jest.config.js          # Jest configuration
├── package.json            # NPM scripts & dependencies
├── tsconfig.json           # TypeScript config
└── README.md               # File này
```

## Dependencies

```json
{
  "devDependencies": {
    "@types/xrm": "^9.0.88",     // IntelliSense cho Xrm object
    "@types/jest": "^30.0.0",    // Jest type definitions
    "esbuild": "^0.24.2",        // Bundler
    "jest": "^30.2.0",           // Testing framework
    "ts-jest": "^29.4.6",        // TypeScript Jest transformer
    "typescript": "^5.7.2",      // TypeScript compiler
    "xrm-mock": "^3.6.2"         // Mock Xrm API for testing
  }
}
```

## NPM Scripts

| Lệnh | Mô tả |
|------|-------|
| `npm run debug` | Build tất cả entity files với source map (cho development) |
| `npm run release` | Build tất cả entity files, minified (cho production) |
| `npm run check` | Chỉ chạy TypeScript type check, không tạo file |
| `npm run devkit-test` | Chạy unit tests với coverage report |

## Cách sử dụng

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Tạo entity file mới (ví dụ: Lead.ts)

```typescript
// entities/Lead.ts
import { LeadForm, OptionSet } from './generator/Lead.form';

const formLead = (function () {
    "use strict";
    
    let form: LeadForm;

    async function onLoad(executionContext: any): Promise<void> {
        form = new LeadForm(executionContext);
        // Business logic here
    }

    return {
        OnLoad: onLoad
    };
})();

export default formLead;
```

### 3. Build

```bash
# Development (có source map để debug)
npm run debug

# Production (minified)
npm run release
```

### 4. Deploy

Upload file `build/Lead.js` lên Dataverse như Web Resource.

Trong form event handler, set:
- **Library**: `dev_/entities/Lead.js` (hoặc path của bạn)
- **Function**: `formLead.OnLoad`

## DevKit Library

File `lib/devkit.ts` cung cấp các functions chính:

| Function | Mô tả |
|----------|-------|
| `LoadFormV2` | Load form với typed Body, Header, Tab, Grid, Navigation, QuickForm, Process |
| `LoadWebApi` | WebApi wrapper (CreateRecord, DeleteRecord, RetrieveRecord, RetrieveRecords, etc.) |
| `LoadUtility` | Utility functions (Navigation, Dialogs, Global Context, etc.) |
| `LoadSidePanes` | Side Panes API wrapper |
| `LoadCopilot` | Copilot API wrapper (ExecuteEvent, ExecutePrompt) |
| `LoadProcess` | Business Process Flow wrapper |
| `FormBase` | Base class cho entity forms |

### Type Definitions

File `lib/devkit.d.ts` định nghĩa namespace `DevKit` với các interfaces:

- `DevKit.IExecutionContext` - Execution context interface
- `DevKit.IWebApi` - WebApi interface
- `DevKit.IUtility` - Utility interface
- `DevKit.ISidePanes` - Side panes interface
- `DevKit.ICopilot` - Copilot interface
- `DevKit.Controls.*` - Field control interfaces

## Ví dụ code với IntelliSense

```typescript
import { AccountForm, OptionSet } from './generator/Account.form';

let form: AccountForm;

function onLoad(executionContext: any) {
    form = new AccountForm(executionContext);
    
    // Lấy giá trị - TypeScript biết kiểu tự động
    const name = form.Body.Name.Value;            // string | null
    const revenue = form.Body.Revenue.Value;      // number | null
    const creditOnHold = form.Body.CreditOnHold.Value;  // boolean | null
    
    // Set giá trị
    form.Body.Name.Value = "New Account Name";
    
    // Control visibility
    form.Body.AccountNumber.Visible = false;
    form.Body.AccountNumber.Disabled = true;
    
    // Required level
    form.Body.Name.RequiredLevel = 'required';
    
    // Tab control
    form.Tab.DETAILS_TAB.Visible = false;
    form.Tab.DETAILS_TAB.DisplayState = 'collapsed';
    
    // Grid control
    form.Grid.Contacts.Refresh();
    
    // OptionSet comparison
    if (form.Body.IndustryCode.Value === OptionSet.Account.IndustryCode.Consulting) {
        console.log('This is a Consulting account');
    }
    
    // WebApi usage
    const record = await form.WebApi.CreateRecord('account', { name: 'Test' });
    
    // Utility functions
    form.Utility.OpenAlertDialog({ text: 'Hello!' });
}
```

## Unit Testing

Project sử dụng Jest với xrm-mock để test devkit.ts:

```bash
# Run tests với coverage
npm run devkit-test
```

### Coverage Report

| Metric | Coverage |
|--------|----------|
| Lines | 99.26% |
| Branches | 84.23% |
| Statements | 84.46% |
| Functions | 62.52% |

### Test Structure

```typescript
// test/devkit.test.ts
import { LoadFormV2, LoadWebApi, LoadUtility } from '../lib/devkit';
import { XrmMockGenerator } from 'xrm-mock';

describe('DevKit Module', () => {
    beforeEach(() => {
        XrmMockGenerator.initialise();
    });

    test('should load form correctly', () => {
        // ...
    });
});
```

## Convention

### File naming

| File | Mô tả |
|------|-------|
| `entities/[Entity].ts` | Developer code |
| `entities/generator/[Entity].form.ts` | Generated form module |
| `lib/devkit.ts` | Core library implementation |
| `lib/devkit.d.ts` | Type definitions |
| `build/[Entity].js` | Bundled output để deploy |

### IIFE naming

Build script tự động tạo IIFE wrapper với tên: `IIFE[EntityName]`

### Window assignment

Build script tự động assign `export default` vào `window.form[EntityName]`:
- `Account.ts` → `window.formAccount`
- `Contact.ts` → `window.formContact`

**Không cần viết `(window as any).formAccount = ...`** - chỉ cần `export default`.

## Debug trong browser

1. Chạy `npm run debug` để build với source map
2. Deploy file `.js` lên Dataverse
3. Mở form trong browser, vào DevTools → Sources
4. Tìm file `.ts` trong source map để debug

## So sánh với phương pháp cũ

### Phương pháp cũ (JavaScript + .d.ts)

```javascript
/// <reference path="Account.d.ts" />
var formAccount = (function () {
    /** @type {DevKit.FormAccount} */
    let form;
    function onLoad(executionContext) {
        form = new DevKit.FormAccount(executionContext);
    }
    return { OnLoad: onLoad };
})();
```

**Nhược điểm:**
- ❌ Cần duy trì 2 files: `.js` và `.d.ts`
- ❌ Dễ bị out of sync
- ❌ Phải setup dependencies trong Dataverse
- ❌ Không có unit tests

### Phương pháp mới (TypeScript Modules)

```typescript
import { AccountForm, OptionSet } from './generator/Account.form';

const formAccount = (function () {
    let form: AccountForm;
    async function onLoad(executionContext: any) {
        form = new AccountForm(executionContext);
    }
    return { OnLoad: onLoad };
})();

export default formAccount;
```

**Ưu điểm:**
- ✅ Một file nguồn duy nhất
- ✅ Types luôn sync với implementation
- ✅ Không cần setup dependencies trong Dataverse
- ✅ Better refactoring support
- ✅ Compile-time error checking
- ✅ Unit testing với 99% coverage

## Notes

- File `lib/devkit.ts` cung cấp đầy đủ API: `LoadFormV2`, `LoadWebApi`, `LoadUtility`, `LoadSidePanes`, `LoadCopilot`
- File `lib/devkit.d.ts` định nghĩa tất cả interfaces trong namespace `DevKit`
- Các tính năng khác có thể gọi trực tiếp: `Xrm.WebApi.createRecord(...)`
- File `.form.ts` trong tương lai sẽ được tool tự động generate từ Dataverse metadata
