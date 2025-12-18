# Client API Comparison: Microsoft Docs vs DevKit

So sánh giữa Microsoft Client API Documentation với implementation trong devkit.js và devkit.ts.

> [!TIP]
> **Last Updated: 2025-12-18** - Đã bổ sung 7 APIs thiếu vào devkit.ts. Hiện tại cả hai files đều có **100% coverage**.

---

## Summary

| Category | MS APIs | devkit.js | devkit.ts | Status |
|----------|---------|-----------|-----------|--------|
| Attributes | 26 | ✅ 26 | ✅ 26 | ✅ 100% |
| Controls | 45+ | ✅ 45+ | ✅ 45+ | ✅ 100% |
| formContext.data | 6 | ✅ 6 | ✅ 6 | ✅ 100% |
| formContext.data.entity | 12 | ✅ 12 | ✅ 12 | ✅ 100% |
| formContext.ui | 18 | ✅ 18 | ✅ 18 | ✅ 100% |
| BPF (process) | 35+ | ✅ 35+ | ✅ 35+ | ✅ 100% |
| Xrm.WebApi | 10 | ✅ 14 | ✅ 14 | ✅ 100%+ |
| Xrm.Navigation | 8 | ✅ 8 | ✅ 8 | ✅ 100% |
| Xrm.Utility | 12 | ✅ 12 | ✅ 12 | ✅ 100% |
| Xrm.Device | 6 | ✅ 6 | ✅ 6 | ✅ 100% |
| Xrm.Encoding | 5 | ✅ 5 | ✅ 5 | ✅ 100% |
| Xrm.App | 7 | ✅ 7 | ✅ 7 | ✅ 100% |
| Xrm.Copilot | 2 | ✅ 2 | ✅ 2 | ✅ 100% |
| ExecutionContext | 12 | ✅ 12 | ✅ 12 | ✅ 100% |
| GlobalContext | 30+ | ✅ 30+ | ✅ 30+ | ✅ 100% |
| Xrm.Panel | 1 | ✅ 1 | ✅ 1 | ✅ 100% |

---

## ✅ Fixed Issues (2025-12-18)

| # | API | Location in devkit.ts | Status |
|---|-----|-----------------------|--------|
| 1 | `WebApi.Online` object | Line 854-870 | ✅ Added |
| 2 | `WebApi.Online.Execute` | Line 855 | ✅ Added |
| 3 | `WebApi.Online.ExecuteMultiple` | Line 862 | ✅ Added |
| 4 | `WebApi.Offline` object | Line 863-868 | ✅ Added |
| 5 | `WebApi.Offline.IsAvailable` | Line 866 | ✅ Added |
| 6 | `RetrieveRecords` (typed helper) | Line 758-803 | ✅ Added |
| 7 | `RetrieveRecord` (typed helper) | Line 806-823 | ✅ Added |

---

## Key WebApi Methods

| Microsoft API | devkit.js | devkit.ts | Notes |
|--------------|-----------|-----------|-------|
| createRecord | ✅ `CreateRecord` | ✅ | |
| deleteRecord | ✅ `DeleteRecord` | ✅ | |
| retrieveRecord | ✅ `RetrieveRecord` | ✅ | |
| retrieveMultipleRecords | ✅ `RetrieveMultipleRecords` | ✅ | |
| updateRecord | ✅ `UpdateRecord` | ✅ | |
| execute | ✅ `Execute` | ✅ | Uses WebApi directly |
| executeMultiple | ✅ `ExecuteMultiple` | ✅ | Uses WebApi directly |
| online | ✅ `Online` | ✅ | Lazy getter |
| online.execute | ✅ `Online.Execute` | ✅ | |
| online.executeMultiple | ✅ `Online.ExecuteMultiple` | ✅ | |
| offline | ✅ `Offline` | ✅ | Lazy getter |
| isAvailableOffline | ✅ `Offline.IsAvailable` | ✅ | |
| **Custom Helpers** | | | |
| RetrieveRecords (typed) | ✅ | ✅ | Wraps entities in constructor/factory |
| RetrieveRecord (typed) | ✅ | ✅ | Wraps entity in constructor/factory |

---

## Detailed Coverage

### Attributes (All 26 APIs covered)
`addOnChange`, `fireOnChange`, `getAttributeType`, `getFormat`, `getIsDirty`, `getInitialValue`, `getIsPartyList`, `getMax`, `getMaxLength`, `getMin`, `getName`, `getOption`, `getOptions`, `getParent`, `getPrecision`, `getRequiredLevel`, `getSelectedOption`, `getSubmitMode`, `getText`, `getUserPrivilege`, `getValue`, `isValid`, `removeOnChange`, `setIsValid`, `setPrecision`, `setRequiredLevel`, `setSubmitMode`, `setValue`

### Controls (All 45+ APIs covered)
Standard, IFRAME, KBSearch, Lookup, Choice, Timer, WebResource, QuickForm, SubGrid - all methods implemented.

### Process/BPF (All 35+ APIs covered)
Event handlers, Active Process, Process methods, Instance methods, Stage methods, Step methods, Navigation methods, UI methods - all implemented.

### Xrm Namespaces (All covered)
- **Xrm.Navigation**: 8/8 methods
- **Xrm.Utility**: 12/12 methods
- **Xrm.Device**: 6/6 methods
- **Xrm.Encoding**: 5/5 methods
- **Xrm.App**: 7/7 methods (including sidePanes)
- **Xrm.Copilot**: 2/2 methods
- **Xrm.Panel**: 1/1 method

---

*Generated: 2025-12-18*
