# Client API Comparison: Microsoft Docs vs DevKit

Last Updated: 2025-12-18

> [!TIP]
> ✅ **HOÀN TẤT** - Cả devkit.js và devkit.ts đều có **100% coverage** với Microsoft Client API.

---

## Summary

| Category | devkit.js | devkit.ts | Status |
|----------|-----------|-----------|--------|
| Attributes (26 APIs) | ✅ | ✅ | 100% |
| Controls (45+ APIs) | ✅ | ✅ | 100% |
| formContext.data/entity/ui | ✅ | ✅ | 100% |
| Business Process Flow (35+ APIs) | ✅ | ✅ | 100% |
| Xrm.WebApi (incl. Online/Offline) | ✅ | ✅ | 100%+ |
| Xrm.Navigation (8 APIs) | ✅ | ✅ | 100% |
| Xrm.Utility (12 APIs) | ✅ | ✅ | 100% |
| Xrm.Device (6 APIs) | ✅ | ✅ | 100% |
| Xrm.Encoding (5 APIs) | ✅ | ✅ | 100% |
| Xrm.App + SidePanes (7 APIs) | ✅ | ✅ | 100% |
| Xrm.Copilot (2 APIs) | ✅ | ✅ | 100% |
| ExecutionContext (12 APIs) | ✅ | ✅ | 100% |
| GlobalContext (30+ APIs) | ✅ | ✅ | 100% |

---

## Changes Made (2025-12-18)

### devkit.ts - Added 7 APIs:

| # | API | Purpose |
|---|-----|---------|
| 1 | `WebApi.Online` object | Lazy getter for online operations |
| 2 | `WebApi.Online.Execute` | Execute request explicitly online |
| 3 | `WebApi.Online.ExecuteMultiple` | Execute multiple requests online |
| 4 | `WebApi.Offline` object | Lazy getter for offline operations |
| 5 | `WebApi.Offline.IsAvailable` | Check entity offline availability |
| 6 | `RetrieveRecords<T>` | Typed helper - wrap entities in constructor |
| 7 | `RetrieveRecord<T>` (typed) | Typed helper - wrap entity in constructor |

### devkit.d.ts - Added Types:

| Type | Purpose |
|------|---------|
| `IWebApiOnline` | Interface for Online.Execute/ExecuteMultiple |
| `IWebApiOffline` | Interface for Offline.IsAvailable |
| `RetrieveRecords<T>` | Generic typed method overloads |
| `RetrieveRecord<T>` | Generic typed method overloads |

---

## Files Modified

- `ts/lib/devkit.ts` - Lines 677-870 (LoadWebApi function)
- `ts/lib/devkit.d.ts` - Lines 2194-2356 (IWebApi + new interfaces)

---

*Generated: 2025-12-18*
