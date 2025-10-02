# OptionSet Control Tests - AccountCategoryCode (Category)

## Overview
This document describes the comprehensive test suite for **OptionSet (Single-Select Picklist)** controls in Dynamics 365, implemented in the `testOptionSet()` function within `Account.js`. The tests use the **AccountCategoryCode** field (Category) on the Account entity form.

## Test Field Information
- **Field Name:** `AccountCategoryCode`
- **Display Name:** Category
- **Control Type:** OptionSet (Single-Select Picklist)
- **Form Location:** Body section
- **Data Type:** Number (returns single integer value)
- **Available Options:**
  - `1` - Preferred Customer
  - `2` - Standard

## What is an OptionSet?

An OptionSet (also called a "Picklist" or "Choice") is a dropdown control that allows users to select **one option** from a predefined list of choices. Each option has:
- A **numeric value** (stored in the database)
- A **text label** (displayed to users)

### Key Characteristics:
- ✅ **Single Selection** - Only one value can be selected at a time
- ✅ **Predefined Options** - Limited to configured choices
- ✅ **Numeric Storage** - Values stored as integers in the database
- ✅ **Display Text** - Shows user-friendly labels in the UI
- ✅ **Nullable** - Can be cleared (set to null/blank)

---

## Test Suite Structure

### Total Tests: 19
**Execution Time:** ~19-21 seconds

### Test Categories:
1. **Value Operations** (Tests 1-4) - Reading values and text
2. **Options Inspection** (Tests 5-8) - Examining available choices
3. **Metadata Access** (Tests 9-12) - Control properties
4. **Value Manipulation** (Tests 13-14) - Setting and clearing values
5. **UI Interactions** (Tests 15-19) - Notifications, focus, visibility, disabled state, labels

---

## Detailed Test Descriptions

### Test 1: Get OptionSet Value
**Purpose:** Retrieve the current numeric value of the selected option

**Code:**
```javascript
const value = optionSetControl.Value;
console.log(`✓ Current Value (numeric): ${value}`);
console.log(`  Type: ${typeof value}`);
```

**Expected Output:**
```
⚡ Test 1: Get OptionSet Value
✓ Current Value (numeric): 1
  Type: number
```

**What to Observe:**
- Value is a number (1, 2, or null)
- Type is "number" when selected, "object" (null) when blank
- Reflects the currently selected option

---

### Test 2: Get Control and Attribute Names
**Purpose:** Verify control identifiers and type

**Code:**
```javascript
console.log(`✓ Control Name: ${optionSetControl.ControlName}`);
console.log(`✓ Attribute Name: ${optionSetControl.AttributeName}`);
console.log(`✓ Control Type: ${optionSetControl.ControlType}`);
```

**Expected Output:**
```
⚡ Test 2: Get Control and Attribute Names
✓ Control Name: AccountCategoryCode
✓ Attribute Name: accountcategorycode
✓ Control Type: optionset
```

**What to Observe:**
- Control name matches the form control
- Attribute name is lowercase
- Control type is "optionset"

---

### Test 3: Get Selected Option Details
**Purpose:** Retrieve both text and value of the selected option

**Code:**
```javascript
const selectedOption = optionSetControl.SelectedOption;
if (selectedOption) {
    console.log(`✓ Selected Option:`);
    console.log(`  Text: "${selectedOption.text}"`);
    console.log(`  Value: ${selectedOption.value}`);
}
```

**Expected Output:**
```
⚡ Test 3: Get Selected Option Details
✓ Selected Option:
  Text: "Preferred Customer"
  Value: 1
```

**What to Observe:**
- Returns an object with `text` and `value` properties
- Returns null if no option is selected
- Text shows the display label
- Value shows the numeric code

---

### Test 4: Get Text of Selected Option
**Purpose:** Get only the display text (label) of the selected option

**Code:**
```javascript
const text = optionSetControl.Text;
console.log(`✓ Selected Option Text: "${text}"`);
```

**Expected Output:**
```
⚡ Test 4: Get Text of Selected Option
✓ Selected Option Text: "Preferred Customer"
```

**What to Observe:**
- Returns the display label as a string
- Returns empty string if nothing selected
- Useful for displaying user-friendly text

---

### Test 5: Get All Available Options
**Purpose:** List all options available in the field definition

**Code:**
```javascript
const options = optionSetControl.Options;
console.log(`✓ Available Options (${options.length} total):`);
for (const option of options) {
    console.log(`  [${option.value}] "${option.text}"`);
}
```

**Expected Output:**
```
⚡ Test 5: Get All Available Options
✓ Available Options (2 total):
  [1] "Preferred Customer"
  [2] "Standard"
```

**What to Observe:**
- Returns array of all defined options
- Each option has `text` and `value` properties
- Does NOT include blank/null option
- Shows metadata from entity definition

---

### Test 6: Get Control Options
**Purpose:** List all options available in the UI control (includes blank option)

**Code:**
```javascript
const controlOptions = optionSetControl.ControlOptions;
console.log(`✓ Control Options (${controlOptions.length} total, includes blank):`);
for (const option of controlOptions) {
    if (option.value === null || option.value === undefined) {
        console.log(`  [null] "(Blank)"`);
    } else {
        console.log(`  [${option.value}] "${option.text}"`);
    }
}
```

**Expected Output:**
```
⚡ Test 6: Get Control Options
✓ Control Options (3 total, includes blank):
  [null] "(Blank)"
  [1] "Preferred Customer"
  [2] "Standard"
```

**What to Observe:**
- Includes a blank/null option for clearing the field
- Shows what user sees in the dropdown
- May exclude options removed via `RemoveOption()`

---

### Test 7: Get Specific Option by Value
**Purpose:** Retrieve option details using numeric value

**Code:**
```javascript
const preferredCustomer = optionSetControl.Option(1);
const standard = optionSetControl.Option(2);
console.log(`✓ Option by Value (1): "${preferredCustomer?.text}" = ${preferredCustomer?.value}`);
console.log(`✓ Option by Value (2): "${standard?.text}" = ${standard?.value}`);
```

**Expected Output:**
```
⚡ Test 7: Get Specific Option by Value
✓ Option by Value (1): "Preferred Customer" = 1
✓ Option by Value (2): "Standard" = 2
```

**What to Observe:**
- `Option(value)` method retrieves by numeric code
- Returns option object or null if not found
- Useful for validating option existence

---

### Test 8: Get Specific Option by Text
**Purpose:** Retrieve option details using display text

**Code:**
```javascript
const option = optionSetControl.Option("Preferred Customer");
if (option) {
    console.log(`✓ Option by Text: "${option.text}" = ${option.value}`);
} else {
    console.log(`  ℹ Option not found or text doesn't match exactly`);
}
```

**Expected Output:**
```
⚡ Test 8: Get Specific Option by Text
✓ Option by Text: "Preferred Customer" = 1
```

**What to Observe:**
- `Option(text)` method retrieves by label
- Text match must be exact (case-sensitive)
- Returns null if text doesn't match

---

### Test 9: Get Initial Value
**Purpose:** Retrieve the value when the form was first loaded

**Code:**
```javascript
const initialValue = optionSetControl.InitialValue;
console.log(`✓ Initial Value: ${initialValue}`);
console.log(`  ℹ This is the value when the form was loaded`);
```

**Expected Output:**
```
⚡ Test 9: Get Initial Value
✓ Initial Value: 2
  ℹ This is the value when the form was loaded
```

**What to Observe:**
- Shows the original value from the database
- Remains unchanged even if value is modified
- Useful for detecting changes (dirty state)

---

### Test 10: Get Visibility Status
**Purpose:** Check if the control is currently visible

**Code:**
```javascript
const visible = optionSetControl.Visible;
console.log(`✓ Is Visible: ${visible}`);
```

**Expected Output:**
```
⚡ Test 10: Get Visibility Status
✓ Is Visible: true
```

**What to Observe:**
- Returns `true` if control is visible
- Returns `false` if hidden
- Controls form field visibility

---

### Test 11: Get Disabled Status
**Purpose:** Check if the control is read-only

**Code:**
```javascript
const disabled = optionSetControl.Disabled;
console.log(`✓ Is Disabled: ${disabled}`);
```

**Expected Output:**
```
⚡ Test 11: Get Disabled Status
✓ Is Disabled: false
```

**What to Observe:**
- Returns `true` if control is disabled (read-only)
- Returns `false` if enabled (editable)
- Affects user's ability to change value

---

### Test 12: Get Label
**Purpose:** Retrieve the field label text

**Code:**
```javascript
const label = optionSetControl.Label;
console.log(`✓ Label: "${label}"`);
```

**Expected Output:**
```
⚡ Test 12: Get Label
✓ Label: "Category"
```

**What to Observe:**
- Returns the display label shown next to the field
- Can be modified dynamically
- Useful for form customization

---

### Test 13: Set Value to 'Preferred Customer' (1)
**Purpose:** Change the selected option programmatically

**Timeline:** After 2 seconds delay

**Code:**
```javascript
const originalValue = optionSetControl.Value;
console.log(`  📋 Original Value: ${originalValue}`);

await new Promise(resolve => setTimeout(resolve, 2000));
optionSetControl.Value = 1; // Preferred_Customer
console.log(`✓ Value set to: 1 (Preferred Customer)`);
console.log(`  Current Text: "${optionSetControl.Text}"`);

// Restore after 2 seconds
setTimeout(function() {
    optionSetControl.Value = originalValue;
    console.log(`  ↩ Original value restored: ${originalValue}`);
}, 2000);
```

**Expected Output:**
```
⚡ Test 13: Set Value to 'Preferred Customer' (1)
  📋 Original Value: 2
✓ Value set to: 1 (Preferred Customer)
  Current Text: "Preferred Customer"
  ↩ Original value restored: 2
```

**Visual Effects:**
- Dropdown changes to "Preferred Customer"
- Selection is visible in the UI
- Value automatically restored after 2 seconds

---

### Test 14: Clear Value (set to null)
**Purpose:** Remove the selected option (set to blank)

**Timeline:** After 4 seconds delay

**Code:**
```javascript
const originalValue = optionSetControl.Value;

await new Promise(resolve => setTimeout(resolve, 4000));
optionSetControl.Value = null;
console.log(`✓ Value cleared (set to null)`);
console.log(`  Current Value: ${optionSetControl.Value}`);
console.log(`  Current Text: "${optionSetControl.Text}"`);

// Restore after 2 seconds
setTimeout(function() {
    optionSetControl.Value = originalValue;
    console.log(`  ↩ Original value restored: ${originalValue}`);
}, 2000);
```

**Expected Output:**
```
⚡ Test 14: Clear Value (set to null)
✓ Value cleared (set to null)
  Current Value: null
  Current Text: ""
  ↩ Original value restored: 2
```

**Visual Effects:**
- Dropdown shows blank/no selection
- Value becomes null
- Text becomes empty string
- Original value restored after 2 seconds

---

### Test 15: Add Notification
**Purpose:** Display an error notification on the control

**Timeline:** After 6 seconds delay

**Code:**
```javascript
await new Promise(resolve => setTimeout(resolve, 6000));
optionSetControl.AddNotification({
    messages: ["This is a test notification for Category field"],
    notificationLevel: OptionSet.FieldNotificationLevel.Error,
    uniqueId: "TEST_OPTIONSET_NOTIF"
});
console.log(`✓ Notification added with ID: TEST_OPTIONSET_NOTIF`);

// Clear notification after 3 seconds
setTimeout(function() {
    optionSetControl.ClearNotification("TEST_OPTIONSET_NOTIF");
    console.log(`  ↩ Notification cleared`);
}, 3000);
```

**Expected Output:**
```
⚡ Test 15: Add Notification
✓ Notification added with ID: TEST_OPTIONSET_NOTIF
  Message: "This is a test notification for Category field"
  ↩ Notification cleared
```

**Visual Effects:**
- Red "X" icon appears next to the field
- Error message displays when hovering
- Notification cleared after 3 seconds

---

### Test 16: Set Focus
**Purpose:** Move keyboard focus to the control

**Timeline:** After 9 seconds delay

**Code:**
```javascript
await new Promise(resolve => setTimeout(resolve, 9000));
optionSetControl.Focus();
console.log(`✓ Focus set to AccountCategoryCode control`);
console.log(`  ⚡ The control should now be highlighted and focused`);
```

**Expected Output:**
```
⚡ Test 16: Set Focus to Control
✓ Focus set to AccountCategoryCode control
  ⚡ The control should now be highlighted and focused
```

**Visual Effects:**
- Field becomes highlighted/focused
- Keyboard input directed to this control
- User's attention drawn to the field

---

### Test 17: Toggle Visibility
**Purpose:** Hide and then show the control

**Timeline:** After 13 seconds delay

**Code:**
```javascript
await new Promise(resolve => setTimeout(resolve, 13000));
const originalVisible = optionSetControl.Visible;
optionSetControl.Visible = false;
console.log(`✓ Visibility set to: false (control hidden)`);

// Restore after 2 seconds
setTimeout(function() {
    optionSetControl.Visible = originalVisible;
    console.log(`  ↩ Visibility restored to: ${originalVisible}`);
}, 2000);
```

**Expected Output:**
```
⚡ Test 17: Toggle Visibility
✓ Visibility set to: false (control hidden)
  ↩ Visibility restored to: true
```

**Visual Effects:**
- Control disappears from the form
- Control reappears after 2 seconds

---

### Test 18: Toggle Disabled State
**Purpose:** Make the control read-only and then editable again

**Timeline:** After 15 seconds delay

**Code:**
```javascript
await new Promise(resolve => setTimeout(resolve, 15000));
const originalDisabled = optionSetControl.Disabled;
optionSetControl.Disabled = true;
console.log(`✓ Disabled set to: true (control is read-only)`);

// Restore after 2 seconds
setTimeout(function() {
    optionSetControl.Disabled = originalDisabled;
    console.log(`  ↩ Disabled restored to: ${originalDisabled}`);
}, 2000);
```

**Expected Output:**
```
⚡ Test 18: Toggle Disabled State
✓ Disabled set to: true (control is read-only)
  ↩ Disabled restored to: false
```

**Visual Effects:**
- Control becomes grayed out/non-editable
- User cannot change the value
- Control becomes editable again after 2 seconds

---

### Test 19: Change Label
**Purpose:** Dynamically update the field label

**Timeline:** After 17 seconds delay

**Code:**
```javascript
await new Promise(resolve => setTimeout(resolve, 17000));
const originalLabel = optionSetControl.Label;
optionSetControl.Label = "TEST: Modified Category Label";
console.log(`✓ Label changed from "${originalLabel}" to "TEST: Modified Category Label"`);

// Restore after 2 seconds
setTimeout(function() {
    optionSetControl.Label = originalLabel;
    console.log(`  ↩ Label restored to: "${originalLabel}"`);
}, 2000);
```

**Expected Output:**
```
⚡ Test 19: Change Label Text
✓ Label changed from "Category" to "TEST: Modified Category Label"
  ↩ Label restored to: "Category"
```

**Visual Effects:**
- Field label changes to "TEST: Modified Category Label"
- Original label restored after 2 seconds

---

## Test Timeline

```
0s    → Test 1-12: Instant (read operations)
2s    → Test 13: Set Value to Preferred Customer
4s    → (Value restored)
4s    → Test 14: Clear Value
6s    → (Value restored)
6s    → Test 15: Add Notification
9s    → (Notification cleared)
9s    → Test 16: Set Focus
13s   → Test 17: Toggle Visibility
15s   → (Visibility restored)
15s   → Test 18: Toggle Disabled
17s   → (Disabled restored)
17s   → Test 19: Change Label
19s   → (Label restored)
19-21s → Tests Complete
```

---

## API Reference

### IControlSelect Interface (OptionSet extends this)

#### Properties

| Property | Type | Access | Description |
|----------|------|--------|-------------|
| `Value` | `number \| null` | Read/Write | Currently selected option value (numeric) |
| `Text` | `string` | Read-only | Display text of selected option |
| `SelectedOption` | `TextValueNumber \| null` | Read-only | Object with `text` and `value` properties |
| `Options` | `Array<TextValueNumber>` | Read-only | All available options from entity metadata |
| `ControlOptions` | `Array<TextValueNumber>` | Read-only | Options in UI control (includes blank) |
| `InitialValue` | `number` | Read-only | Value when form loaded |
| `Visible` | `boolean` | Read/Write | Control visibility |
| `Disabled` | `boolean` | Read/Write | Control disabled state |
| `Label` | `string` | Read/Write | Field label text |
| `ControlName` | `string` | Read-only | Control identifier |
| `AttributeName` | `string` | Read-only | Attribute logical name |
| `ControlType` | `string` | Read-only | Control type ("optionset") |

#### Methods

| Method | Parameters | Returns | Description |
|--------|-----------|---------|-------------|
| `Option()` | `value: number` | `TextValueNumber \| null` | Get option by numeric value |
| `Option()` | `label: string` | `TextValueNumber \| null` | Get option by display text |
| `AddOption()` | `text: string, value: number, index?: number` | `void` | Add new option to control |
| `RemoveOption()` | `value: number` | `void` | Remove option from control |
| `ClearOptions()` | none | `void` | Remove all options from control |
| `AddNotification()` | `notification: FieldNotification` | `void` | Display notification |
| `ClearNotification()` | `uniqueId: string` | `boolean` | Clear notification |
| `SetNotification()` | `message: string, uniqueId?: string` | `boolean` | Set error notification (simpler) |
| `Focus()` | none | `void` | Set focus to control |

### TextValueNumber Interface

```typescript
interface TextValueNumber {
    text: string;  // Display label
    value: number; // Numeric code
}
```

---

## OptionSet vs MultiOptionSet

| Feature | OptionSet | MultiOptionSet |
|---------|-----------|----------------|
| **Selection Mode** | Single selection | Multiple selections |
| **Value Type** | `number \| null` | `Array<number> \| null` |
| **SelectedOption Type** | `TextValueNumber \| null` | `Array<TextValueNumber>` |
| **Text Format** | Single label | Semicolon-separated labels |
| **UI Control** | Dropdown | Multi-select list |
| **Clear Value** | Set to `null` | Set to `[]` or `null` |
| **Use Cases** | Status, Category, Type | Tags, Skills, Features |

---

## Common Use Cases

### 1. Conditional Logic Based on Selection
```javascript
if (form.Body.AccountCategoryCode.Value === 1) {
    // Preferred Customer selected
    form.Body.CreditLimit.Visible = true;
} else {
    form.Body.CreditLimit.Visible = false;
}
```

### 2. Validate Selection
```javascript
if (form.Body.AccountCategoryCode.Value === null) {
    form.Body.AccountCategoryCode.AddNotification({
        messages: ["Category is required"],
        notificationLevel: OptionSet.FieldNotificationLevel.Error,
        uniqueId: "CATEGORY_REQUIRED"
    });
}
```

### 3. Get Display Text for Logging
```javascript
const categoryText = form.Body.AccountCategoryCode.Text;
console.log(`Account category: ${categoryText}`);
```

### 4. Filter Options Dynamically
```javascript
// Remove "Standard" option if certain condition
if (someCondition) {
    form.Body.AccountCategoryCode.RemoveOption(2);
}
```

---

## Deployment Instructions

### Prerequisites:
- Account entity with AccountCategoryCode field
- Field must be on the form (Body section)
- Form library: `Account.js` attached to Account form
- OnLoad event handler configured

### Steps:
1. Upload `Account.js` to Dynamics 365 as a web resource
2. Open Account form in Form Editor
3. Add `Account.js` to Form Libraries
4. Configure OnLoad event to call `onLoad` function
5. Publish all customizations
6. Open any Account record
7. Press F12 to open browser Developer Tools
8. View Console tab for test output

### Verification:
- All 19 tests execute successfully
- No errors in console
- Visual changes observable (value changes, visibility, etc.)
- Original values restored after each test

---

## Troubleshooting

### Issue: "Cannot read property 'Value' of undefined"
**Solution:** Ensure AccountCategoryCode field is on the form in the Body section

### Issue: No visual changes when value is set
**Solution:** Check that the field is visible and not disabled by security rules

### Issue: Option() returns null
**Solution:** Verify the option value/text exists and text matches exactly (case-sensitive)

### Issue: AddNotification doesn't show
**Solution:** Check notification object format and that notificationLevel is a valid enum value

---

## Summary

The OptionSet test suite provides **19 comprehensive tests** covering all aspects of single-select picklist controls:

✅ **Value Operations** - Get/set numeric values
✅ **Text Access** - Retrieve display labels
✅ **Options Management** - List and find options
✅ **Metadata** - Control properties and identifiers
✅ **UI Manipulation** - Visibility, disabled, labels
✅ **User Interaction** - Focus, notifications
✅ **State Management** - Initial values, change detection

**Next Steps:** Implement MultiOptionSet tests for multi-select scenarios!
