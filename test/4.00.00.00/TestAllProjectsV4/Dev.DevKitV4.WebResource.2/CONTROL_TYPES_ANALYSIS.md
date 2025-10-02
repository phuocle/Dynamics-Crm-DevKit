# Dynamics 365 Control Types Analysis Report
## Account Form Control Gap Analysis

**Date**: 2025
**Scope**: Account Form Only (comparing Account.d.ts with devkit.d.ts)
**Purpose**: Identify untested control types to plan Phase 2 testing

---

## Executive Summary

### Phase 1 Complete ✅
- **11 Basic Field Types Tested**: 208 comprehensive tests
- **Test Coverage**: 100% of basic field type controls
- **Status**: All basic field controls fully tested

### Phase 2 Planning 🎯
- **5 Control Types Available on Account Form - NOT TESTED**
- **10+ Additional Control Types Available in devkit.d.ts** (not on form yet)

---

## 1. TESTED CONTROLS ✅ (Phase 1 Complete)

All basic field type controls have been comprehensively tested:

| Control Type | Field/Control Name | Tests | Status |
|--------------|-------------------|-------|--------|
| **Lookup** | PrimaryContactId | 15 | ✅ Complete |
| **String** | Name | 12 | ✅ Complete |
| **Integer** | NumberOfEmployees | 15 | ✅ Complete |
| **Money** | Revenue | 16 | ✅ Complete |
| **OptionSet** | AccountCategoryCode | 19 | ✅ Complete |
| **MultiOptionSet** | devkit_CategoryCode | 19 | ✅ Complete |
| **Decimal** | v4_Decimal | 21 | ✅ Complete |
| **Float** | v4_Float | 23 | ✅ Complete |
| **DateTime** | CreatedOn | 27 | ✅ Complete |
| **Boolean** | CreditOnHold | 20 | ✅ Complete |
| **Memo** | Description | 21 | ✅ Complete |

**Total Tested**: 11 control types, 208 tests

---

## 2. UNTESTED CONTROLS ON ACCOUNT FORM ⚠️ (Phase 2 Priority)

These controls are already present on the Account form but have NOT been tested yet:

### 2.1 ActionCards Control

**Location in Account Form**: `formContext.ui.controls.get("ActionCards")`

**Interface** (devkit.d.ts line 1049):
```typescript
interface ActionCards {
    // Empty interface - inherits basic IControl methods
}
```

**Available Methods** (from IControl base):
- `.AddNotification()`
- `.ClearNotification()`
- `.SetNotification()`
- `.Focus()`
- `.Label` (get/set)
- `.Visible` (get/set)
- `.Disabled` (get/set)

**Testing Priority**: Medium
**Estimated Tests**: 5-8 tests

---

### 2.2 Map Control

**Location in Account Form**: `formContext.ui.controls.get("mapcontrol")`

**Interface** (devkit.d.ts line 1047):
```typescript
interface Map {
    // Empty interface - inherits basic IControl methods
}
```

**Available Methods** (from IControl base):
- `.AddNotification()`
- `.ClearNotification()`
- `.SetNotification()`
- `.Focus()`
- `.Label` (get/set)
- `.Visible` (get/set)
- `.Disabled` (get/set)

**Testing Priority**: Medium
**Estimated Tests**: 5-8 tests

---

### 2.3 Note Control (Timeline/Notes)

**Location in Account Form**: `formContext.ui.controls.get("notescontrol")`

**Interface** (devkit.d.ts lines 1036-1041):
```typescript
interface Note extends IControl {
    /**
     * Refreshes the notes/timeline control
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/refresh
     */
    Refresh(): void;
}
```

**Available Methods**:
- `.Refresh()` - **Unique to Note control**
- `.AddNotification()`
- `.ClearNotification()`
- `.SetNotification()`
- `.Focus()`
- `.Label` (get/set)
- `.Visible` (get/set)
- `.Disabled` (get/set)

**Testing Priority**: High
**Estimated Tests**: 8-10 tests

---

### 2.4 IFrame Control

**Location in Account Form**: `formContext.ui.controls.get("IFRAME_PHUOCLE")`

**Interface** (devkit.d.ts lines 765-789):
```typescript
interface IFrame extends IControl {
    /**
     * Returns the content window that represents an IFRAME or web resource.
     * @param successCallback A function to call when operation is executed successfully
     * @param errorCallback A function to call when the operation fails
     */
    ContentWindow(successCallback?: (contentWindow: any) => void, errorCallback?: (error: DevKit.Error) => void): void;

    /**
     * Returns the default URL that an IFRAME control is configured to display
     **/
    readonly InitialUrl: string;

    /**
     * Returns the object in the form that represents an IFRAME or web resource
     */
    readonly Object: any;

    /**
     * Get/Set the current URL being displayed in an IFRAME or web resource
     */
    Src: string;
}
```

**Available Methods**:
- `.ContentWindow(successCallback, errorCallback)` - **Unique to IFrame**
- `.InitialUrl` (readonly) - **Unique to IFrame**
- `.Object` (readonly) - **Unique to IFrame**
- `.Src` (get/set) - **Unique to IFrame**
- `.AddNotification()`
- `.ClearNotification()`
- `.SetNotification()`
- `.Focus()`
- `.Label` (get/set)
- `.Visible` (get/set)
- `.Disabled` (get/set)

**Testing Priority**: High
**Estimated Tests**: 12-15 tests

---

### 2.5 NavigationItem Controls

**Locations in Account Form** (18 navigation items):
```typescript
// Examples:
formContext.ui.navigation.items.get("account_adx_inviteredemptions")
formContext.ui.navigation.items.get("Account_Appointments")
formContext.ui.navigation.items.get("Account_Email_EmailSender")
formContext.ui.navigation.items.get("Account_Phonecalls")
formContext.ui.navigation.items.get("Account_Tasks")
formContext.ui.navigation.items.get("contact_customer_accounts")
// ... and 12 more navigation items
```

**Interface** (devkit.d.ts lines 843-868):
```typescript
interface NavigationItem {
    /**
     * Sets the focus on the item
     */
    Focus(): void;

    /**
     * Returns the name of the item
     */
    readonly Id: string;

    /**
     * Get/Set the label for the item
     */
    Label: string;

    /**
     * Get/Set a value that indicates whether the item is currently visible
     */
    Visible: boolean;
}
```

**Available Methods**:
- `.Focus()` - **Unique to NavigationItem**
- `.Id` (readonly) - **Unique to NavigationItem**
- `.Label` (get/set)
- `.Visible` (get/set)

**Testing Priority**: High (represents form navigation/tabs)
**Estimated Tests**: 8-10 tests (test one representative NavigationItem)

---

## 3. ADDITIONAL CONTROLS IN DEVKIT.D.TS (Not on Account Form Yet)

These control types are available in Dynamics 365 but NOT currently present on the Account form. Consider adding them to expand test coverage:

### 3.1 Grid/SubGrid Control

**Interface** (devkit.d.ts lines 893-993):
```typescript
interface Grid {
    AddOnLoad(callback: (executionContext: any) => void): void;
    readonly Url: string;
    Refresh(): void;
    RefreshRibbon(): void;
    OpenRelatedGrid(): void;
    RemoveOnLoad(callback: (executionContext: any) => void): void;
    readonly EntityName: string;
    readonly FetchXml: string;
    readonly GridType: number;
    readonly Relationship: any;
    readonly ViewSelector: ViewSelector;
    readonly Rows: Array<GridRow>;
    readonly SelectedRows: Array<GridRow>;
    readonly TotalRecordCount: number;
    Visible: boolean;
}
```

**Key Features**:
- Comprehensive grid functionality
- Row selection and management
- View selector integration
- Relationship navigation
- ~15 methods/properties to test

**Testing Priority**: Very High (if added to form)
**Estimated Tests**: 20-25 tests

---

### 3.2 WebResource Control

**Interface** (devkit.d.ts lines 733-765):
```typescript
interface WebResource extends IControl {
    ContentWindow(successCallback: (contentWindow: any) => void, errorCallback?: (error: DevKit.Error) => void): void;
    ContentWindow(): Promise<any>;
    readonly Object: any;
    Data: string;
    Src: string;
}
```

**Key Features**:
- Similar to IFrame but with Data property
- Promise-based ContentWindow
- Used for HTML web resources

**Testing Priority**: High (if added to form)
**Estimated Tests**: 12-15 tests

---

### 3.3 QuickView Control

**Interface** (devkit.d.ts lines 1062-1067):
```typescript
interface QuickView {
    readonly Value: any;
    Visible: boolean;
    Label: string;
}
```

**Key Features**:
- Read-only form data from related records
- Quick view forms embedded in main form

**Testing Priority**: Medium (if added to form)
**Estimated Tests**: 6-8 tests

---

### 3.4 Timer Control

**Interface** (devkit.d.ts lines 790-801):
```typescript
interface Timer extends IControl {
    Refresh(): void;
    readonly State: number;
}
```

**Key Features**:
- SLA timer control
- State monitoring

**Testing Priority**: Medium (if added to form)
**Estimated Tests**: 8-10 tests

---

### 3.5 TimelineWall Control

**Interface** (devkit.d.ts lines 802-808):
```typescript
interface TimelineWall extends IControl {
    Refresh(): void;
}
```

**Key Features**:
- Timeline visualization
- Activity stream

**Testing Priority**: Medium (if added to form)
**Estimated Tests**: 6-8 tests

---

### 3.6 Knowledge Control

**Interface** (devkit.d.ts lines 672-732):
```typescript
interface Knowledge extends IControl {
    AddPostSearch(callback: (executionContext: any) => void): void;
    AddResultOpened(callback: (executionContext: any) => void): void;
    AddSelection(callback: (executionContext: any) => void): void;
    OpenSearchResult(resultNumber: number, mode: string): void;
    RemovePostSearch(callback: (executionContext: any) => void): void;
    RemoveResultOpened(callback: (executionContext: any) => void): void;
    RemoveSelection(callback: (executionContext: any) => void): void;
    readonly ContextObjectId: DevKit.Guid;
    readonly SearchQuery: string;
    readonly SelectedResults: Array<number>;
    readonly TotalResults: number;
}
```

**Key Features**:
- Knowledge base search integration
- Event handlers for search/selection
- Result management

**Testing Priority**: Low-Medium (specialized use case)
**Estimated Tests**: 12-15 tests

---

### 3.7 Additional Controls (Lower Priority)

These controls have empty interfaces or specialized use cases:

| Control Type | Status | Priority |
|--------------|--------|----------|
| **File** | Basic interface | Low |
| **Image** | Empty interface | Low |
| **PowerBi** | Empty interface | Low |
| **AciWidget** | Empty interface | Low |
| **EmailEngagement** | Empty interface | Very Low |
| **EmailRecipient** | Empty interface | Very Low |

---

## 4. PHASE 2 TESTING RECOMMENDATIONS

### Immediate Priority (Controls Already on Account Form)

1. **IFrame Control** (IFRAME_PHUOCLE)
   - Test: Src, InitialUrl, ContentWindow, Object
   - Estimated: 12-15 tests

2. **Note Control** (notescontrol)
   - Test: Refresh(), Visible, Disabled, Label, Notifications
   - Estimated: 8-10 tests

3. **NavigationItem** (18 items available)
   - Test: Focus(), Id, Label, Visible
   - Estimated: 8-10 tests

4. **Map Control** (mapcontrol)
   - Test: Visible, Disabled, Label, Notifications
   - Estimated: 5-8 tests

5. **ActionCards** (ActionCards)
   - Test: Visible, Disabled, Label, Notifications
   - Estimated: 5-8 tests

**Total Estimated for Phase 2A**: 38-51 tests

---

### Secondary Priority (Add to Form Then Test)

6. **Grid/SubGrid Control** (NOT ON FORM)
   - Add related entity subgrid (e.g., Contacts, Opportunities)
   - Test: Refresh, Rows, SelectedRows, ViewSelector, etc.
   - Estimated: 20-25 tests

7. **WebResource Control** (NOT ON FORM)
   - Add HTML web resource to form
   - Test: Src, Data, ContentWindow (callback & promise)
   - Estimated: 12-15 tests

8. **QuickView Control** (NOT ON FORM)
   - Add quick view form (e.g., Primary Contact details)
   - Test: Value, Visible, Label
   - Estimated: 6-8 tests

**Total Estimated for Phase 2B**: 38-48 tests

---

### Tertiary Priority (Specialized Controls)

9. **Timer Control** (if SLA enabled)
10. **TimelineWall Control**
11. **Knowledge Control** (if Knowledge Management enabled)

**Total Estimated for Phase 2C**: 20-30 tests

---

## 5. IMPLEMENTATION PLAN

### Step 1: Test Existing Account Form Controls (Phase 2A)
1. Create `testIFrame()` function - test IFRAME_PHUOCLE control
2. Create `testNote()` function - test notescontrol
3. Create `testNavigationItem()` function - test navigation items
4. Create `testMap()` function - test mapcontrol
5. Create `testActionCards()` function - test ActionCards

**Total Phase 2A**: ~45 tests

---

### Step 2: Add New Controls to CRM Form (Phase 2B)
1. Add SubGrid control to Account form (related Contacts or Opportunities)
2. Add HTML WebResource control to Account form
3. Add QuickView control to Account form (Primary Contact quick view)
4. Create corresponding test functions

**Total Phase 2B**: ~45 tests

---

### Step 3: Advanced Controls (Phase 2C - Optional)
1. Enable SLA and add Timer control
2. Add TimelineWall control
3. Enable Knowledge Management and add Knowledge control

**Total Phase 2C**: ~25 tests

---

## 6. CONTROL TYPE SUMMARY TABLE

| Category | Control Type | On Account Form? | Tested? | Priority | Est. Tests |
|----------|--------------|------------------|---------|----------|------------|
| **Basic Fields** | String | ✅ Yes | ✅ Yes | - | 12 |
| **Basic Fields** | Integer | ✅ Yes | ✅ Yes | - | 15 |
| **Basic Fields** | Decimal | ✅ Yes | ✅ Yes | - | 21 |
| **Basic Fields** | Float/Double | ✅ Yes | ✅ Yes | - | 23 |
| **Basic Fields** | Money | ✅ Yes | ✅ Yes | - | 16 |
| **Basic Fields** | DateTime | ✅ Yes | ✅ Yes | - | 27 |
| **Basic Fields** | Boolean | ✅ Yes | ✅ Yes | - | 20 |
| **Basic Fields** | OptionSet | ✅ Yes | ✅ Yes | - | 19 |
| **Basic Fields** | MultiOptionSet | ✅ Yes | ✅ Yes | - | 19 |
| **Basic Fields** | Lookup | ✅ Yes | ✅ Yes | - | 15 |
| **Basic Fields** | Memo | ✅ Yes | ✅ Yes | - | 21 |
| **Advanced** | IFrame | ✅ Yes | ❌ No | 🔥 High | 12-15 |
| **Advanced** | Note | ✅ Yes | ❌ No | 🔥 High | 8-10 |
| **Advanced** | NavigationItem | ✅ Yes | ❌ No | 🔥 High | 8-10 |
| **Advanced** | Map | ✅ Yes | ❌ No | ⚠️ Medium | 5-8 |
| **Advanced** | ActionCards | ✅ Yes | ❌ No | ⚠️ Medium | 5-8 |
| **Container** | Grid/SubGrid | ❌ No | ❌ No | 🔥 High | 20-25 |
| **Advanced** | WebResource | ❌ No | ❌ No | 🔥 High | 12-15 |
| **Advanced** | QuickView | ❌ No | ❌ No | ⚠️ Medium | 6-8 |
| **Specialized** | Timer | ❌ No | ❌ No | 💡 Low | 8-10 |
| **Specialized** | TimelineWall | ❌ No | ❌ No | 💡 Low | 6-8 |
| **Specialized** | Knowledge | ❌ No | ❌ No | 💡 Low | 12-15 |
| **Other** | File | ❌ No | ❌ No | 💤 Very Low | 5-8 |
| **Other** | Image | ❌ No | ❌ No | 💤 Very Low | 5-8 |
| **Other** | PowerBi | ❌ No | ❌ No | 💤 Very Low | 5-8 |

---

## 7. ESTIMATED TOTAL TEST COUNT

| Phase | Description | Test Count |
|-------|-------------|------------|
| **Phase 1** (Complete) | Basic field types | 208 tests ✅ |
| **Phase 2A** (Priority) | Existing form controls | 38-51 tests |
| **Phase 2B** (Secondary) | Add new controls | 38-48 tests |
| **Phase 2C** (Optional) | Specialized controls | 20-30 tests |
| **TOTAL** | All control types | **304-337 tests** |

---

## 8. NEXT ACTIONS

### For User:
1. ✅ Review this report
2. ⚠️ **Add controls to CRM Account form** (recommended):
   - SubGrid (Contacts or Opportunities)
   - HTML WebResource
   - QuickView form (Primary Contact)
3. 🔥 **Prioritize Phase 2A** - Test 5 controls already on form
4. 🚀 Begin implementing test functions in Account.js

### For Development:
1. Start with `testIFrame()` - IFRAME_PHUOCLE control (highest complexity)
2. Continue with `testNote()` - notescontrol
3. Then `testNavigationItem()` - navigation items
4. Then `testMap()` and `testActionCards()`

---

## 9. CONTROL INTERFACE REFERENCE

### IControl Base Interface (All controls inherit these)

```typescript
interface IControl {
    AddNotification(notification: DevKit.Notification): boolean;
    ClearNotification(uniqueId: string): boolean;
    SetNotification(message: string, uniqueId: string): boolean;
    AddOnChange(callback: (executionContext: any) => void): void;
    RemoveOnChange(callback: (executionContext: any) => void): void;
    AddOnFocusOut(callback: (executionContext: any) => void): void;
    RemoveOnFocusOut(callback: (executionContext: any) => void): void;
    Focus(): void;
    Name: string;
    readonly Parent: any;
    Label: string;
    Visible: boolean;
    Disabled: boolean;
    readonly ControlType: string;
}
```

**All untested controls have access to these base methods**.

---

## Document Info

- **Created**: 2025
- **Scope**: Account Form Only (Account.d.ts vs devkit.d.ts)
- **Phase 1 Status**: ✅ Complete (11 types, 208 tests)
- **Phase 2 Status**: 📋 Planning (5 controls on form, 10+ available)
- **Total Potential Tests**: 304-337 tests

---

## Conclusion

**Phase 1 is complete** with comprehensive testing of all 11 basic field types (208 tests).

**Phase 2 should focus on**:
1. **5 controls already on Account form** (IFrame, Note, NavigationItem, Map, ActionCards) - ~45 tests
2. **3 high-value controls to add to form** (SubGrid, WebResource, QuickView) - ~45 tests
3. **Specialized controls** (Timer, TimelineWall, Knowledge) - ~25 tests (optional)

This approach will expand test coverage from **208 tests to 290-340 tests**, covering nearly all Dynamics 365 Client API control types available for the Account entity form.
