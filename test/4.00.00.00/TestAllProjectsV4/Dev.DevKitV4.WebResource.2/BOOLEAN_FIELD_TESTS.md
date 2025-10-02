# Boolean Control Tests - Complete Documentation

## Overview

This document provides comprehensive documentation for testing the **Boolean control** (Two-Option field) in Dynamics 365 using the Client API. The tests are implemented for the `CreditOnHold` field, which indicates whether an account's credit is on hold.

**Test Function:** `testBoolean()`
**Field Name:** `CreditOnHold`
**Control Location:** `form.Body.CreditOnHold`
**Total Tests:** 20
**Execution Time:** ~10 seconds

---

## Field Information

### CreditOnHold Field Specifications

| Property | Value |
|----------|-------|
| **Logical Name** | `creditonhold` |
| **Display Name** | Credit On Hold |
| **Field Type** | Boolean (Two-Option) |
| **Data Type** | Boolean primitive (true/false) |
| **Nullable** | Yes (can be null) |
| **Default Options** | No / Yes |
| **Value Mapping** | 0 = false (No), 1 = true (Yes) |
| **Purpose** | Indicates if account's credit is on hold to prevent new orders |

### Boolean Control Interface

```typescript
interface Boolean extends IControlSelectBase {
    /**
     * Get/Set the data value for an attribute
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
     */
    Value: boolean;
}

interface IControlSelectBase extends IControl {
    /**
     * Returns a value that represents the value set for a Boolean, OptionSet or MultiOptionSet attribute when the form is opened
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getinitialvalue
     */
    readonly InitialValue: number;
}
```

---

## Test Categories

The 20 tests are organized into the following categories:

1. **Read Operations (Tests 1-11):** Basic property retrieval
2. **Value Manipulation (Tests 12-14):** Toggle true/false/null
3. **UI Operations (Tests 15-20):** Notifications, focus, visibility, labels

---

## Detailed Test Descriptions

### Category 1: Read Operations

#### Test 1: Get Boolean Value
**Purpose:** Retrieve the current Boolean value
**Method:** `booleanControl.Value`

**Expected Output:**
```
📋 Test 1: Get Boolean Value
  ✓ Current Boolean value: false
  ℹ Type: boolean
  ℹ Credit is NOT on hold (false)
```

**Possible Values:**
- `true` - Credit is on hold
- `false` - Credit is not on hold
- `null` - Value not set (for new records or optional fields)

**Key Points:**
- Returns a JavaScript boolean primitive
- Can be `null` for optional Boolean fields
- UI typically shows as checkbox, toggle, or radio buttons

---

#### Test 2: Get Control Name
**Purpose:** Get the control's unique identifier
**Method:** `booleanControl.ControlName`

**Expected Output:**
```
📋 Test 2: Get Control Name
  ✓ Control Name: CreditOnHold
```

---

#### Test 3: Get Attribute Name
**Purpose:** Get the logical name of the underlying attribute
**Method:** `booleanControl.Attribute.Name`

**Expected Output:**
```
📋 Test 3: Get Attribute Name
  ✓ Attribute Name: creditonhold
```

**Note:** Attribute names are always lowercase in Dynamics 365.

---

#### Test 4: Get Initial Value
**Purpose:** Get the value when the form was first loaded
**Method:** `booleanControl.InitialValue`

**Expected Output:**
```
📋 Test 4: Get Initial Value
  ✓ Initial Value: 0
  ℹ This is the value when the form was loaded
  ℹ Initial state: false (Not On Hold)
```

**Value Mapping:**
- `1` = true (Yes, On Hold)
- `0` = false (No, Not On Hold)
- `null` = Not set

**Use Cases:**
- Detect if user changed the value
- Reset to original state
- Track modifications for audit
- Implement "cancel changes" functionality

**Example:**
```javascript
const initialValue = booleanControl.InitialValue;
const currentValue = booleanControl.Value ? 1 : 0;

if (initialValue !== currentValue) {
    console.log("Value has been changed since form load");
}
```

---

#### Test 5: Get Control Type
**Purpose:** Identify the control type
**Method:** `booleanControl.ControlType`

**Expected Output:**
```
📋 Test 5: Get Control Type
  ✓ Control Type: standard
  ℹ Expected: 'standard' for Boolean control
```

---

#### Test 6: Get Attribute Type
**Purpose:** Identify the field's data type
**Method:** `booleanControl.Attribute.Type`

**Expected Output:**
```
📋 Test 6: Get Attribute Type
  ✓ Attribute Type: boolean
  ℹ Expected: 'boolean' for two-option fields
```

---

#### Test 7: Get Required Level
**Purpose:** Determine if the field is required, recommended, or optional
**Method:** `booleanControl.Attribute.RequiredLevel`

**Expected Output:**
```
📋 Test 7: Get Required Level
  ✓ Required Level: none
  ℹ 'none' = optional, 'required' = mandatory, 'recommended' = suggested
```

**Possible Values:**
- `none`: Field is optional
- `required`: Field must have a value before saving (typically defaults to false if not set)
- `recommended`: System suggests filling this field (shows blue indicator)

---

#### Test 8: Get isDirty Status
**Purpose:** Check if the field value has been modified since form load
**Method:** `booleanControl.Attribute.IsDirty`

**Expected Output:**
```
📋 Test 8: Get isDirty Status
  ✓ Is Dirty: false
  ℹ Indicates if value has been modified since form load
```

**Use Cases:**
- Detect unsaved changes
- Trigger validation only on modified fields
- Optimize save operations
- Warn user about unsaved changes

---

#### Test 9: Get Visibility Status
**Purpose:** Check if the control is visible on the form
**Method:** `booleanControl.Visible`

**Expected Output:**
```
📋 Test 9: Get Visibility Status
  ✓ Is Visible: true
```

---

#### Test 10: Get Disabled Status
**Purpose:** Check if the control is disabled
**Method:** `booleanControl.Disabled`

**Expected Output:**
```
📋 Test 10: Get Disabled Status
  ✓ Is Disabled: false
```

---

#### Test 11: Get Label
**Purpose:** Get the display label for the control
**Method:** `booleanControl.Label`

**Expected Output:**
```
📋 Test 11: Get Label
  ✓ Label: Credit On Hold
```

---

### Category 2: Value Manipulation

#### Test 12: Set Boolean to True
**Purpose:** Set the Boolean value to true
**Method:** `booleanControl.Value = true`

**Expected Output:**
```
⚡ Test 12: Set Boolean to True (Credit On Hold)
  ✓ Boolean value set to: true
  ℹ Credit should now be marked as ON HOLD
  ℹ Check the form UI - field should show 'Yes' or checked state
```

**Visual Effect:**
- **Checkbox:** Checked/ticked
- **Toggle:** Switch to "On" position
- **Radio Buttons:** "Yes" option selected
- **Dropdown:** "Yes" or "True" selected

**Business Logic Example:**
```javascript
// Set credit on hold when overdue balance exceeds limit
const overdueBalance = form.Body.OverdueBalance.Value;
const creditLimit = form.Body.CreditLimit.Value;

if (overdueBalance > creditLimit) {
    form.Body.CreditOnHold.Value = true;
    form.Body.CreditOnHold.AddNotification({
        uniqueId: "creditHoldWarning",
        messages: ["Credit automatically placed on hold due to overdue balance exceeding limit"],
        notificationLevel: OptionSet.FieldNotificationLevel.Error
    });
}
```

---

#### Test 13: Set Boolean to False
**Purpose:** Set the Boolean value to false
**Method:** `booleanControl.Value = false`

**Expected Output:**
```
⚡ Test 13: Set Boolean to False (Credit Not On Hold)
  ✓ Boolean value set to: false
  ℹ Credit should now be marked as NOT on hold
  ℹ Check the form UI - field should show 'No' or unchecked state
```

**Visual Effect:**
- **Checkbox:** Unchecked/empty
- **Toggle:** Switch to "Off" position
- **Radio Buttons:** "No" option selected
- **Dropdown:** "No" or "False" selected

**Business Logic Example:**
```javascript
// Release credit hold after payment received
function releaseCredit hold() {
    form.Body.CreditOnHold.Value = false;

    // Clear any related notifications
    form.Body.CreditOnHold.ClearNotification("creditHoldWarning");

    // Log the change
    console.log("Credit hold released at:", new Date().toLocaleString());
}
```

---

#### Test 14: Set Boolean to Null (Clear Value)
**Purpose:** Clear the Boolean value
**Method:** `booleanControl.Value = null`

**Expected Output:**
```
⚡ Test 14: Set Boolean to Null (Clear Value)
  ✓ Boolean value set to: null
  ℹ Field should now be cleared (no selection)
  ℹ Note: Some boolean fields don't allow null values
```

**Important Notes:**
- Not all Boolean fields support null values
- Required Boolean fields will typically default to false if cleared
- Null is useful for "undecided" or "not applicable" states
- Some UI controls (like checkboxes) may not visually show null state

**When to Use Null:**
- Optional preference fields (e.g., email opt-in not yet decided)
- Approval fields where no decision made yet
- Feature flags that can be "not set"

**TypeScript Note:**
The type definition shows `Value: boolean` but Dynamics 365 allows `null`. Use `@ts-ignore` to suppress TypeScript errors:
```javascript
// @ts-ignore - null is valid for boolean fields in Dynamics 365
booleanControl.Value = null;
```

---

### Category 3: UI Operations

#### Test 15: Add Notification
**Purpose:** Display an informational notification on the control
**Method:** `booleanControl.AddNotification(notification)`

**Expected Output:**
```
⚡ Test 15: Add Notification
  ✓ Notification added with ID: booleanNotification_1696274231234
  ℹ Check the form UI to see the notification icon
```

**Notification Structure:**
```javascript
booleanControl.AddNotification({
    uniqueId: "booleanNotification_" + Date.now(),
    messages: ["This field indicates whether the account's credit is on hold. Set to 'Yes' to prevent new orders."],
    notificationLevel: OptionSet.FieldNotificationLevel.Recommendation
});
```

**Notification Levels:**
- `OptionSet.FieldNotificationLevel.Error` (0): Red "X" icon, critical errors
- `OptionSet.FieldNotificationLevel.Recommendation` (1): Blue "i" icon, suggestions

**Use Cases:**
- Provide context-sensitive help
- Warn about business rule violations
- Guide users through data entry
- Display validation messages

**Example - Conditional Notification:**
```javascript
function checkCreditStatus() {
    const creditOnHold = form.Body.CreditOnHold.Value;
    const openOrders = form.Body.OpenOrderCount.Value;

    if (creditOnHold && openOrders > 0) {
        form.Body.CreditOnHold.AddNotification({
            uniqueId: "openOrdersWarning",
            messages: [
                "Warning: Credit is on hold but there are " + openOrders + " open orders.",
                "Please review and cancel or fulfill existing orders."
            ],
            notificationLevel: OptionSet.FieldNotificationLevel.Error
        });
    }
}
```

---

#### Test 16: Clear Notification
**Purpose:** Remove a previously added notification
**Method:** `booleanControl.ClearNotification(uniqueId)`

**Expected Output:**
```
⚡ Test 16: Clear Notification
  ✓ Notification cleared
```

**Important:** Must use the same `uniqueId` that was used when adding the notification.

---

#### Test 17: Set Focus to Control
**Purpose:** Move keyboard focus to the Boolean control
**Method:** `booleanControl.Focus()`

**Expected Output:**
```
⚡ Test 17: Set Focus to Control
  ✓ Focus set to Boolean control
  ℹ Check the form UI - cursor should be in this field
```

**Use Cases:**
- Guide user attention to required fields
- Implement custom tab order
- Direct user to fields with errors
- Improve form navigation in business process flows

**Example - Focus on Error:**
```javascript
function validateCreditHold() {
    const creditOnHold = form.Body.CreditOnHold.Value;
    const overdueBalance = form.Body.OverdueBalance.Value;

    if (overdueBalance > 10000 && !creditOnHold) {
        // Add error notification
        form.Body.CreditOnHold.AddNotification({
            uniqueId: "creditHoldRequired",
            messages: ["Credit must be placed on hold for overdue balances over $10,000"],
            notificationLevel: OptionSet.FieldNotificationLevel.Error
        });

        // Set focus to draw attention
        form.Body.CreditOnHold.Focus();

        return false;
    }
    return true;
}
```

---

#### Test 18: Toggle Visibility (Hide then Show)
**Purpose:** Dynamically show/hide the control
**Method:** `booleanControl.Visible = false/true`

**Expected Output:**
```
⚡ Test 18: Toggle Visibility (Hide then Show)
  ✓ Control hidden
  ✓ Control shown again
```

**Use Cases:**
- Conditional field visibility based on business logic
- Hide fields from users without specific permissions
- Show/hide fields based on other field values
- Implement progressive disclosure in complex forms

**Example - Conditional Visibility:**
```javascript
function updateCreditHoldVisibility() {
    const accountType = form.Body.AccountType.Value;
    const creditLimit = form.Body.CreditLimit.Value;

    // Only show credit hold for accounts with credit limits
    if (creditLimit && creditLimit > 0) {
        form.Body.CreditOnHold.Visible = true;
    } else {
        form.Body.CreditOnHold.Visible = false;
        // Clear the value when hidden
        form.Body.CreditOnHold.Value = false;
    }
}
```

---

#### Test 19: Change Label
**Purpose:** Dynamically update the field label
**Method:** `booleanControl.Label = "New Label"`

**Expected Output:**
```
⚡ Test 19: Change Label
  ✓ Label changed to: 'Credit Status (Test Label)'
  ℹ Original label: Credit On Hold
```

**Use Cases:**
- Localization and translation
- Context-specific labeling
- Clarify field purpose based on form state
- Add dynamic hints or instructions

**Example - Dynamic Labeling:**
```javascript
function updateCreditHoldLabel() {
    const creditOnHold = form.Body.CreditOnHold.Value;

    if (creditOnHold) {
        form.Body.CreditOnHold.Label = "Credit On Hold ⚠️";
    } else {
        form.Body.CreditOnHold.Label = "Credit Status ✓";
    }
}
```

---

#### Test 20: Restore Original Values
**Purpose:** Restore original field value and label
**Method:** Set `Value` and `Label` back to original values

**Expected Output:**
```
⚡ Test 20: Restore Original Values
  ✓ Original value restored: false
  ✓ Original label restored: Credit On Hold
  ↩ All changes reverted
```

**Pattern:**
```javascript
// Store original values at start
const originalValue = booleanControl.Value;
const originalLabel = booleanControl.Label;

// ... perform tests ...

// Restore at end
booleanControl.Value = originalValue;
booleanControl.Label = originalLabel;
```

---

## Boolean Field Configuration

### Option Labels

Two-option fields can have customized labels for true/false values:

**Common Label Patterns:**
- **Yes / No** - Default for most Boolean fields
- **True / False** - Technical/development contexts
- **On / Off** - Feature toggles and switches
- **Active / Inactive** - Status indicators
- **Enabled / Disabled** - Feature enablement
- **Approved / Rejected** - Approval workflows
- **Allow / Do Not Allow** - Permission settings

**Example in Dynamics 365:**
```
True Option: Yes (Value: 1)
False Option: No (Value: 0)
Default Value: No
```

### UI Control Types

Boolean fields can be displayed using different control types:

#### 1. Checkbox (Most Common)
- ☐ Unchecked = false
- ☑ Checked = true
- Visual and intuitive
- Best for single on/off choices

#### 2. Toggle Switch
- ○ Off position = false
- ● On position = true
- Modern UI appearance
- Good for enable/disable scenarios

#### 3. Radio Buttons
- ( ) No  (●) Yes = true
- (●) No  ( ) Yes = false
- Explicit choice display
- Good when null is not allowed

#### 4. Dropdown
- Select: No ▼ = false
- Select: Yes ▼ = true
- Consistent with other fields
- Good for mobile/touch interfaces

---

## Common Business Logic Patterns

### Pattern 1: Automatic Credit Hold Based on Conditions
```javascript
function checkCreditLimits() {
    const revenue = form.Body.Revenue.Value || 0;
    const creditLimit = form.Body.CreditLimit.Value || 0;
    const overdueBalance = form.Body.OverdueBalance.Value || 0;

    // Automatically place on hold if overdue exceeds 30% of limit
    const holdThreshold = creditLimit * 0.30;

    if (overdueBalance > holdThreshold) {
        form.Body.CreditOnHold.Value = true;

        form.Body.CreditOnHold.AddNotification({
            uniqueId: "autoHold",
            messages: [
                "Credit automatically placed on hold.",
                `Overdue balance ($${overdueBalance.toFixed(2)}) exceeds 30% of credit limit.`
            ],
            notificationLevel: OptionSet.FieldNotificationLevel.Error
        });
    }
}
```

### Pattern 2: Prevent Changes Based on Business Rules
```javascript
function preventCreditHoldRemoval() {
    const creditOnHold = form.Body.CreditOnHold.Value;
    const overdueBalance = form.Body.OverdueBalance.Value || 0;

    // Don't allow removing hold if overdue balance exists
    if (!creditOnHold && overdueBalance > 0) {
        form.Body.CreditOnHold.Value = true;

        form.Body.CreditOnHold.AddNotification({
            uniqueId: "holdRequired",
            messages: [
                "Cannot remove credit hold while overdue balance exists.",
                "Please clear overdue amount first."
            ],
            notificationLevel: OptionSet.FieldNotificationLevel.Error
        });

        return false; // Prevent save if called from OnSave
    }
    return true;
}
```

### Pattern 3: Cascade Boolean Changes to Related Fields
```javascript
function cascadeCreditHoldChanges() {
    const creditOnHold = form.Body.CreditOnHold.Value;

    if (creditOnHold) {
        // When credit is on hold, disable certain features
        form.Body.AllowNewOrders.Value = false;
        form.Body.AllowCreditIncrease.Value = false;
        form.Body.AllowNewOrders.Disabled = true;
        form.Body.AllowCreditIncrease.Disabled = true;

        console.log("Credit hold enabled - related features disabled");
    } else {
        // When credit hold removed, re-enable features
        form.Body.AllowNewOrders.Disabled = false;
        form.Body.AllowCreditIncrease.Disabled = false;

        console.log("Credit hold removed - related features enabled");
    }
}
```

### Pattern 4: Conditional Visibility Based on Boolean
```javascript
function updateFormBasedOnCreditHold() {
    const creditOnHold = form.Body.CreditOnHold.Value;

    // Show/hide sections based on credit hold status
    if (creditOnHold) {
        // Show credit hold details section
        form.Ui.Tabs.get("tab_general").sections.get("section_credithold").Visible = true;

        // Hide order section
        form.Ui.Tabs.get("tab_orders").Visible = false;

        // Change form color/theme
        form.Ui.HeaderSection.BodyColor = "#FFF4E5"; // Light orange warning
    } else {
        // Hide credit hold details
        form.Ui.Tabs.get("tab_general").sections.get("section_credithold").Visible = false;

        // Show order section
        form.Ui.Tabs.get("tab_orders").Visible = true;

        // Reset form color
        form.Ui.HeaderSection.BodyColor = null;
    }
}
```

### Pattern 5: OnChange Event Handler
```javascript
// Add this to registerEvents() function
form.Body.CreditOnHold.Attribute.AddOnChange(onCreditHoldChange);

function onCreditHoldChange(executionContext) {
    const formContext = executionContext.getFormContext();
    const creditOnHold = formContext.getControl("creditonhold").getValue();

    if (creditOnHold) {
        // Credit just placed on hold
        console.log("Credit hold activated at:", new Date().toLocaleString());

        // Add timestamp to a custom field
        formContext.getControl("creditholdate").setValue(new Date());

        // Notify related teams
        notifyCreditTeam(formContext);
    } else {
        // Credit hold removed
        console.log("Credit hold removed at:", new Date().toLocaleString());

        // Clear credit hold date
        formContext.getControl("creditholdate").setValue(null);
    }

    // Update dependent fields
    cascadeCreditHoldChanges();
    updateFormBasedOnCreditHold();
}
```

---

## Microsoft Documentation References

### Official Client API Documentation
- [Boolean Attribute](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes)
- [getValue Method](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue)
- [setValue Method](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue)
- [getInitialValue Method](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getinitialvalue)
- [Control Objects](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls)

### Two-Option Field Configuration
- [Create and Edit Two-Option Fields](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/types-of-fields#two-options)
- [Two-Option Field Properties](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/entity-attribute-metadata#two-option-fields)

---

## Summary

### Key Takeaways

1. **Simple Data Type**
   - Boolean primitive values: true/false/null
   - Mapped to integers: 1 = true, 0 = false
   - Straightforward to work with in JavaScript

2. **InitialValue Property**
   - Unique to Boolean, OptionSet, and MultiOptionSet
   - Tracks value when form was loaded
   - Returns numeric value (1/0/null)
   - Useful for detecting changes

3. **Value States**
   - `true`: Positive state (Yes, On, Active, Enabled)
   - `false`: Negative state (No, Off, Inactive, Disabled)
   - `null`: Not set (optional fields only)

4. **UI Flexibility**
   - Can be displayed as checkbox, toggle, radio buttons, or dropdown
   - Option labels are customizable (Yes/No, True/False, On/Off, etc.)
   - Different controls suited for different scenarios

5. **Business Logic Integration**
   - Perfect for binary choices and status flags
   - Easy to cascade changes to related fields
   - Conditional visibility and business rules
   - OnChange events for automatic processing

### Test Coverage Summary

| Category | Tests | Coverage |
|----------|-------|----------|
| Read Operations | 11 | Value, names, types, properties, initial value |
| Value Manipulation | 3 | Set true, false, null |
| UI Operations | 6 | Notifications, focus, visibility, labels |
| **Total** | **20** | **Comprehensive Boolean control testing** |

---

## Next Steps

After implementing Boolean tests, the only remaining field type is:

1. **Memo Control** (`Description`) - Multi-line text fields (FINAL FIELD TYPE!)

---

**Document Version:** 1.0
**Last Updated:** October 2, 2025
**Test Function:** `testBoolean()`
**Field:** `CreditOnHold`
**Total Tests:** 20
**Status:** ✅ Complete and Production-Ready
