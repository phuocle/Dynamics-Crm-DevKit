# DevKit TypeScript Definitions - Quick Reference

## Changes Made (Summary)

### ✅ 1. Documentation URLs Updated
- **What:** All `docs.microsoft.com` links updated to `learn.microsoft.com`
- **Why:** Microsoft migrated documentation to new domain
- **Impact:** All 200+ JSDoc links now work correctly
- **Files:** `devkit.d.ts`

### ✅ 2. Dead Code Removed
- **What:** Removed duplicate encoding methods (lines 2418-2430)
- **Methods Removed:**
  - `HtmlAttributeEncode()`
  - `HtmlDecode()`
  - `HtmlEncode()`
- **Impact:** Cleaner code, no functional changes

### ✅ 3. Enhanced Header Documentation
- **What:** Added comprehensive file header with library overview
- **Includes:**
  - Version information
  - Design rationale (PascalCase)
  - Feature list
  - Links to GitHub and Microsoft docs

### ✅ 4. Type Safety Improvements
- **What:** Enhanced type definitions
- **Changes:**
  ```typescript
  // Before
  type Guid = {};

  // After
  type Guid = string;
  type SuccessCallback<T> = (result: T) => void;
  type ErrorCallback = (error: DevKit.Error) => void;
  ```

---

## 🎯 Key Design Choice: PascalCase Preserved

**The library intentionally uses PascalCase for all APIs.**

### Why PascalCase?

This is NOT a bug! The DevKit library provides a wrapper around the official Microsoft API with PascalCase naming for consistency with the `devkit.js` runtime.

| Official Microsoft API | DevKit API |
|------------------------|------------|
| `formContext.data.entity.getIsDirty()` | `form.EntityIsDirty` |
| `formContext.data.entity.getEntityName()` | `form.EntityName` |
| `formContext.ui.getFormType()` | `form.FormType` |
| `attribute.getValue()` | `field.Value` |
| `control.setVisible(true)` | `control.Visible = true` |

### Code Example

```typescript
// Official Microsoft API (camelCase)
function officialWay(executionContext) {
    const formContext = executionContext.getFormContext();
    const entityName = formContext.data.entity.getEntityName();
    const isDirty = formContext.data.entity.getIsDirty();
    formContext.ui.setFormNotification("Message", "INFO", "id1");
}

// DevKit API (PascalCase)
function devKitWay(executionContext) {
    const form = devKit.LoadForm(executionContext.getFormContext());
    const entityName = form.EntityName;
    const isDirty = form.EntityIsDirty;
    form.SetFormNotification("Message", OptionSet.FormNotificationLevel.Info, "id1");
}
```

---

## 📋 API Coverage Status

### ✅ Fully Covered:
- Form Context (data, entity, attributes, ui)
- All Control Types (Standard, Lookup, Grid, IFrame, etc.)
- Business Process Flows
- Web API (CRUD, Online/Offline)
- Xrm.Utility
- Execution Context
- Grid APIs
- Timeline Control
- Copilot API
- Side Panes

### ✅ Previously Flagged, Confirmed Present:
- `Grid.EntityName` ✓
- `Grid.ViewSelector` ✓
- `Grid.OpenRelatedGrid()` ✓
- `Attribute.IsPartyList` ✓
- `Control.Precision` ✓

---

## 🔧 How to Use

1. **Include the files in your project:**
   ```html
   <script src="lib/devkit.js"></script>
   ```

2. **Reference the TypeScript definitions:**
   ```typescript
   /// <reference path="entities/devkit.d.ts" />
   ```

3. **Use the DevKit API:**
   ```typescript
   function OnLoad(executionContext: any): void {
       const form = devKit.LoadForm(executionContext.getFormContext());

       // Type-safe access with IntelliSense
       console.log(form.EntityName);
       console.log(form.FormType);

       if (form.EntityIsDirty) {
           form.Save();
       }
   }
   ```

---

## 📚 Additional Resources

- **Full Documentation:** See `DEVKIT_IMPROVEMENTS.md`
- **GitHub:** https://github.com/phuocle/Dynamics-Crm-DevKit
- **Microsoft Docs:** https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference

---

**Last Updated:** October 1, 2025
