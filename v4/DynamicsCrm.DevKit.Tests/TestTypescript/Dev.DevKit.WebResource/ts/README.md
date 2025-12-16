# TypeScript Modules cho Dynamics 365 / Dataverse

## Tổng quan

Đây là phiên bản TypeScript của các file JavaScript cho Dynamics 365 WebResources. Sử dụng TypeScript modules giúp:

1. **IntelliSense đầy đủ** - Có `@types/xrm` và typed form modules
2. **Type safety** - Phát hiện lỗi tại compile time
3. **Tự động bundle** - Không cần setup dependencies trong Dataverse
4. **Dễ bảo trì** - Code rõ ràng, có type

## Cấu trúc project

```
ts/
├── Account.ts              # Developer code (viết tay)
├── Contact.ts              # Developer code (viết tay)
├── [Entity].ts             # Thêm entity khác ở đây...
│
├── generator/              # Folder chứa generated files
│   ├── devkit.ts           # Base library (LoadFormV2)
│   ├── Account.form.ts     # Generated form cho Account
│   └── Contact.form.ts     # Generated form cho Contact
│
├── build/                  # Output folder
│   ├── Account.js          # Deploy file này lên Dataverse
│   └── Contact.js          # Deploy file này lên Dataverse
│
├── build.js                # Build script
├── package.json            # NPM scripts & dependencies
├── tsconfig.json           # TypeScript config
└── README.md               # File này
```

## Dependencies

```json
{
  "devDependencies": {
    "@types/xrm": "^9.x",    // IntelliSense cho Xrm object
    "esbuild": "^0.24.x",    // Bundler
    "typescript": "^5.x"     // TypeScript compiler
  }
}
```

## NPM Scripts

| Lệnh | Mô tả |
|------|-------|
| `npm run debug` | Build tất cả entity files với source map (cho development) |
| `npm run release` | Build tất cả entity files, minified (cho production) |
| `npm run check` | Chỉ chạy TypeScript type check, không tạo file |

## Cách sử dụng

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Tạo entity file mới (ví dụ: Lead.ts)

```typescript
// Lead.ts
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

## Ví dụ code với IntelliSense

```typescript
import { AccountForm, OptionSet } from './generator/Account.form';

let form: AccountForm;

function onLoad(executionContext: any) {
    form = new AccountForm(executionContext);
    
    // Lấy giá trị - TypeScript biết kiểu tự động
    const name = form.Body.Name.Value;           // string | null
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
    
    // Lookup value
    const primaryContact = form.Body.PrimaryContactId.Value;
    if (primaryContact && primaryContact.length > 0) {
        console.log('Contact:', primaryContact[0].name);
    }
}
```

## Convention

### File naming

| File | Mô tả |
|------|-------|
| `[Entity].ts` | Developer code - đặt ở root của `ts/` |
| `generator/[Entity].form.ts` | Generated form module |
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

## Notes

- File `generator/devkit.ts` tập trung vào `LoadFormV2` cho form scripting
- Các tính năng khác (WebApi, Utility...) có thể gọi trực tiếp: `Xrm.WebApi.createRecord(...)`
- File `.form.ts` trong tương lai sẽ được tool tự động generate từ Dataverse metadata
