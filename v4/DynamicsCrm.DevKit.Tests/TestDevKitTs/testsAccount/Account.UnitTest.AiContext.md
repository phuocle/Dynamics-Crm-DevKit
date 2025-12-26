# AI Context: Account Unit Test Framework

## Mục đích

File này dùng để AI nắm bắt ngữ cảnh khi tiếp tục công việc tăng code coverage cho unit tests.

---

## ⚠️ CURRENT COVERAGE STATUS

| File | Statements | Branches | Functions | Lines |
|------|------------|----------|-----------|-------|
| `entities/Account.form.ts` | 100% | 100% | 100% | 100% |
| `entities/Account.webapi.ts` | 100% | 100% | 100% | 100% |
| `lib/devkit.ts` | 42.13% | 33.77% | 14.69% | 57.14% |
| **entities/Account.ts** | N/A | N/A | N/A | N/A |

**Note:** `entities/Account.ts` không được include trong coverage vì chỉ là entry point gọi test functions.

---

## Cấu trúc Project

```
TestDevKitTs/
├── testsAccount/                              # Unit tests folder (NEW)
│   ├── Account.Test00.devkit.test.ts         # devkit.ts core functions
│   ├── Account.Test01.form.test.ts           # Account.form.ts Form class
│   ├── Account.Test02.webapi.test.ts         # Account.webapi.ts WebApi class
│   └── Account.UnitTest.AiContext.md         # File này
├── jest.account.config.js                     # Jest config for account-test
├── package.json                               # npm scripts
├── lib/
│   ├── devkit.ts                              # DevKit core (target: 100%)
│   └── devkit.d.ts                            # Type definitions
└── entities/
    ├── Account.form.ts                        # Form types (100% covered)
    └── Account.webapi.ts                      # WebApi types (100% covered)
```

---

## Command chạy tests

```powershell
cd c:\src\github\Dynamics-Crm-DevKit\v4\DynamicsCrm.DevKit.Tests\TestDevKitTs
npm run account-test
```

---

## devkit.ts - Uncovered Functions (Priority Order)

### High Priority - Core Form Loading

| Line Range | Function | Description |
|------------|----------|-------------|
| 5-11 | `getXrm()` | Get Xrm global object |
| 58-59, 70-71, 78-80, 92-94 | `loadField()` branches | Field loading edge cases |
| 114-123 | `findControlFromAttribute()` | Find control from attribute |
| 209-216 | `loadTabs()` branches | Tab loading |

### Medium Priority - Form Operations

| Line Range | Function | Description |
|------------|----------|-------------|
| 266-339 | `loadNavigations()` | Navigation item loading |
| 392-450 | `loadQuickForms()` | Quick view form loading |
| 457-575 | `loadGrids()` | Grid/subgrid loading |
| 651-697 | `loadProcess()` | BPF loading |

### Low Priority - Utility Functions

| Line Range | Function | Description |
|------------|----------|-------------|
| 739-805 | `loadUtility()` | Utility API |
| 821-874 | `loadSidePanes()` | Side panes loading |
| 882-920 | `loadCopilot()` | Copilot API |
| 924-1027 | Utility helpers | Various utility methods |

---

## Workflow để tăng Coverage

### Bước 1: Chọn function cần test

Xem danh sách Uncovered Functions ở trên, chọn theo priority order.

### Bước 2: Tạo test file mới

```typescript
// testsAccount/Account.Test03.xxx.test.ts
import { XrmMockGenerator } from 'xrm-mock';
import { FormBase } from '../lib/devkit';

describe('devkit.ts - [Function Name]', () => {
    beforeEach(() => {
        // Setup Xrm mock
        XrmMockGenerator.initialise();
        // ... additional setup
    });

    test('should [expected behavior]', () => {
        // Arrange
        // Act
        // Assert
    });
});
```

### Bước 3: Chạy test và kiểm tra coverage

```powershell
npm run account-test
```

### Bước 4: Xem HTML report chi tiết

Mở file: `coverage/lcov-report/index.html`

---

## Mock Setup Template

```typescript
// Đầy đủ mock cho Xrm global context
let mockGlobalContext: any;

beforeEach(() => {
    (global as any).window = (global as any).window || {};
    XrmMockGenerator.initialise();
    (global as any).window.Xrm = (global as any).Xrm;

    mockGlobalContext = {
        client: { 
            getClient: () => 'Web', 
            getClientState: () => 'Online', 
            getFormFactor: () => 1, 
            isNetworkAvailable: () => true, 
            isOffline: () => false 
        },
        organizationSettings: { 
            organizationId: 'org-guid', 
            uniqueName: 'TestOrg',
            languageId: 1033,
            isAutoSaveEnabled: true
        },
        userSettings: { 
            userId: 'user-guid', 
            userName: 'testuser',
            languageId: 1033
        },
        getClientUrl: () => 'https://test.crm.dynamics.com',
        getVersion: () => '9.2.0.0'
    };
    (Xrm.Utility as any).getGlobalContext = () => mockGlobalContext;
    
    // Add other Xrm mocks as needed
    (Xrm as any).App = { sidePanes: { ... } };
    (Xrm as any).Navigation = { ... };
    (Xrm as any).Copilot = { ... };
});
```

---

## FormContext Mock Template

```typescript
function createFormContext(options = {}) {
    const {
        entityId = 'entity-guid',
        entityName = 'account',
        formType = 2, // Update form
        bodyFields = [],
        headerFields = [],
        tabs = []
    } = options;

    return {
        data: {
            getIsDirty: () => false,
            isValid: () => true,
            entity: {
                getId: () => entityId,
                getEntityName: () => entityName,
                attributes: { 
                    get: (name) => attributesMap.get(name),
                    forEach: (cb) => attributesMap.forEach(cb)
                }
                // ... more entity methods
            }
        },
        ui: {
            getFormType: () => formType,
            controls: { ... },
            tabs: { ... },
            formSelector: { ... }
        }
    };
}
```

---

## Test Naming Convention

| Pattern | Example | Description |
|---------|---------|-------------|
| `Account.Test[XX].[category].test.ts` | `Account.Test03.tabs.test.ts` | Test file |
| `describe('[module] - [feature]')` | `'devkit.ts - Tab Loading'` | Test suite |
| `test('should [behavior]')` | `'should load tab sections'` | Test case |

---

## Important Notes

1. **Coverage folder**: Đã có trong `.gitignore`, không cần lo
2. **Existing tests**: Đã có 50 tests pass, coverage cơ bản đã setup
3. **Target**: 100% coverage cho cả 4 files
4. **Generated files**: `Account.form.ts` và `Account.webapi.ts` đã đạt 100%
5. **Focus**: Tập trung vào `devkit.ts` - còn ~42% coverage

---

*Last updated: 2025-12-26*

