# MultiOptionSet Control Tests - devkit_CategoryCode (Category Code)

## Overview
This document describes the comprehensive test suite for **MultiOptionSet (Multi-Select Picklist)** controls in Dynamics 365, implemented in the `testMultiOptionSet()` function within `Account.js`. The tests use the **devkit_CategoryCode** field (Category Code) on the Account entity form.

## Test Field Information
- **Field Name:** `devkit_CategoryCode`
- **Display Name:** Category Code
- **Control Type:** MultiOptionSet (Multi-Select Picklist)
- **Form Location:** Body section
- **Data Type:** Array of Numbers (returns array of integers)
- **Available Options:**
  - `1` - Business
  - `2` - Family
  - `3` - Social
  - `4` - Sales
  - `5` - Other
  - `1000` - Stakeholder
  - `1001` - Sales Team
  - `1002` - Service

## What is a MultiOptionSet?

A MultiOptionSet (also called a "Multi-Select Picklist" or "Multi-Select Choice") is a control that allows users to select **multiple options** from a predefined list of choices. Each option has:
- A **numeric value** (stored in the database)
- A **text label** (displayed to users)

### Key Characteristics:
- ✅ **Multiple Selections** - Can select zero, one, or many options
- ✅ **Array Storage** - Values stored as array of integers
- ✅ **Predefined Options** - Limited to configured choices
- ✅ **Display Text** - Shows user-friendly labels separated by semicolons
- ✅ **Nullable** - Can be cleared (set to empty array or null)

---

## Test Suite Structure

### Total Tests: 19
**Execution Time:** ~21-23 seconds

### Test Categories:
1. **Value Operations** (Tests 1-4) - Reading array values and text
2. **Options Inspection** (Tests 5-8) - Examining available choices
3. **Metadata Access** (Tests 9-11) - Control properties
4. **Value Manipulation** (Tests 12-14) - Setting single, multiple, and clearing values
5. **UI Interactions** (Tests 15-19) - Notifications, focus, visibility, disabled state, labels

---

## Detailed Test Descriptions

### Test 1: Get MultiOptionSet Value
**Purpose:** Retrieve the current array of selected option values

**Code:**
```javascript
const value = multiOptionSetControl.Value;
console.log(`✓ Current Value (array): [${value?.join(', ')}]`);
console.log(`  Type: ${Array.isArray(value) ? 'Array' : typeof value}`);
console.log(`  Length: ${value?.length || 0} selected`);
```

**Expected Output:**
```
⚡ Test 1: Get MultiOptionSet Value
✓ Current Value (array): [1, 3]
  Type: Array
  Length: 2 selected
```

**What to Observe:**
- Value is an array of numbers: `[1, 3]` or `[]`
- Empty array or null if nothing selected
- Length indicates number of selections

---

### Test 2: Get Control and Attribute Names
**Purpose:** Verify control identifiers and type

**Code:**
```javascript
console.log(`✓ Control Name: ${multiOptionSetControl.ControlName}`);
console.log(`✓ Attribute Name: ${multiOptionSetControl.AttributeName}`);
console.log(`✓ Control Type: ${multiOptionSetControl.ControlType}`);
```

**Expected Output:**
```
⚡ Test 2: Get Control and Attribute Names
✓ Control Name: devkit_CategoryCode
✓ Attribute Name: devkit_categorycode
✓ Control Type: multiselectoptionset
```

**What to Observe:**
- Control name matches the form control
- Attribute name is lowercase
- Control type is "multiselectoptionset"

---

### Test 3: Get Selected Options Details
**Purpose:** Retrieve array of objects with text and value for each selected option

**Code:**
```javascript
const selectedOptions = multiOptionSetControl.SelectedOption;
if (selectedOptions && selectedOptions.length > 0) {
    console.log(`✓ Selected Options (${selectedOptions.length}):`);
    for (const option of selectedOptions) {
        console.log(`  [${option.value}] "${option.text}"`);
    }
} else {
    console.log(`  ℹ No options selected (empty array)`);
}
```

**Expected Output:**
```
⚡ Test 3: Get Selected Options Details
✓ Selected Options (2):
  [1] "Business"
  [3] "Social"
```

**What to Observe:**
- Returns an array of objects (even if empty)
- Each object has `text` and `value` properties
- Empty array if nothing selected
- Shows display labels for all selections

---

### Test 4: Get Text of Selected Options
**Purpose:** Get concatenated display text of all selected options

**Code:**
```javascript
const text = multiOptionSetControl.Text;
console.log(`✓ Selected Options Text: "${text}"`);
console.log(`  ℹ Multiple selections are separated by semicolon`);
```

**Expected Output:**
```
⚡ Test 4: Get Text of Selected Options
✓ Selected Options Text: "Business; Social"
  ℹ Multiple selections are separated by semicolon
```

**What to Observe:**
- Multiple selections joined by semicolon and space: `"; "`
- Returns empty string if nothing selected
- Useful for displaying user-friendly text

---

### Test 5: Get All Available Options
**Purpose:** List all options available in the field definition

**Code:**
```javascript
const options = multiOptionSetControl.Options;
console.log(`✓ Available Options (${options.length} total):`);
for (const option of options) {
    console.log(`  [${option.value}] "${option.text}"`);
}
```

**Expected Output:**
```
⚡ Test 5: Get All Available Options
✓ Available Options (8 total):
  [1] "Business"
  [2] "Family"
  [3] "Social"
  [4] "Sales"
  [5] "Other"
  [1000] "Stakeholder"
  [1001] "Sales Team"
  [1002] "Service"
```

**What to Observe:**
- Returns array of all defined options
- Each option has `text` and `value` properties
- Shows metadata from entity definition
- All 8 options available for selection

---

### Test 6: Get Control Options
**Purpose:** List all options available in the UI control

**Code:**
```javascript
const controlOptions = multiOptionSetControl.ControlOptions;
console.log(`✓ Control Options (${controlOptions.length} total):`);
for (const option of controlOptions) {
    console.log(`  [${option.value}] "${option.text}"`);
}
```

**Expected Output:**
```
⚡ Test 6: Get Control Options
✓ Control Options (8 total):
  [1] "Business"
  [2] "Family"
  [3] "Social"
  [4] "Sales"
  [5] "Other"
  [1000] "Stakeholder"
  [1001] "Sales Team"
  [1002] "Service"
```

**What to Observe:**
- Shows what user sees in the UI
- May exclude options removed via `RemoveOption()`
- Unlike OptionSet, no blank option needed (empty array = no selections)

---

### Test 7: Get Specific Option by Value
**Purpose:** Retrieve option details using numeric values

**Code:**
```javascript
const business = multiOptionSetControl.Option(1);
const family = multiOptionSetControl.Option(2);
const social = multiOptionSetControl.Option(3);
console.log(`✓ Option by Value (1): "${business?.text}" = ${business?.value}`);
console.log(`✓ Option by Value (2): "${family?.text}" = ${family?.value}`);
console.log(`✓ Option by Value (3): "${social?.text}" = ${social?.value}`);
```

**Expected Output:**
```
⚡ Test 7: Get Specific Option by Value
✓ Option by Value (1): "Business" = 1
✓ Option by Value (2): "Family" = 2
✓ Option by Value (3): "Social" = 3
```

**What to Observe:**
- `Option(value)` method retrieves by numeric code
- Returns option object or null if not found
- Useful for validating option existence

---

### Test 8: Get Initial Value
**Purpose:** Retrieve the value when the form was first loaded

**Code:**
```javascript
const initialValue = multiOptionSetControl.InitialValue;
console.log(`✓ Initial Value: ${initialValue}`);
console.log(`  ℹ This is the value when the form was loaded`);
```

**Expected Output:**
```
⚡ Test 8: Get Initial Value
✓ Initial Value: 0
  ℹ This is the value when the form was loaded
```

**What to Observe:**
- Shows the original value from the database
- Remains unchanged even if value is modified
- Useful for detecting changes (dirty state)
- Note: May return 0 for empty multi-select fields

---

### Test 9: Get Visibility Status
**Purpose:** Check if the control is currently visible

**Code:**
```javascript
const visible = multiOptionSetControl.Visible;
console.log(`✓ Is Visible: ${visible}`);
```

**Expected Output:**
```
⚡ Test 9: Get Visibility Status
✓ Is Visible: true
```

**What to Observe:**
- Returns `true` if control is visible
- Returns `false` if hidden

---

### Test 10: Get Disabled Status
**Purpose:** Check if the control is read-only

**Code:**
```javascript
const disabled = multiOptionSetControl.Disabled;
console.log(`✓ Is Disabled: ${disabled}`);
```

**Expected Output:**
```
⚡ Test 10: Get Disabled Status
✓ Is Disabled: false
```

**What to Observe:**
- Returns `true` if control is disabled (read-only)
- Returns `false` if enabled (editable)

---

### Test 11: Get Label
**Purpose:** Retrieve the field label text

**Code:**
```javascript
const label = multiOptionSetControl.Label;
console.log(`✓ Label: "${label}"`);
```

**Expected Output:**
```
⚡ Test 11: Get Label
✓ Label: "Category Code"
```

**What to Observe:**
- Returns the display label shown next to the field
- Can be modified dynamically

---

### Test 12: Set Single Value
**Purpose:** Set the field to select only one option

**Timeline:** After 2 seconds delay

**Code:**
```javascript
const originalValue = multiOptionSetControl.Value;
console.log(`  📋 Original Value: [${originalValue?.join(', ')}]`);

await new Promise(resolve => setTimeout(resolve, 2000));
multiOptionSetControl.Value = [1]; // Business only
console.log(`✓ Value set to: [1] (Business)`);
console.log(`  Current Text: "${multiOptionSetControl.Text}"`);

// Restore after 2 seconds
setTimeout(function() {
    multiOptionSetControl.Value = originalValue;
    console.log(`  ↩ Original value restored: [${originalValue?.join(', ')}]`);
}, 2000);
```

**Expected Output:**
```
⚡ Test 12: Set Single Value [1] (Business)
  📋 Original Value: [1, 3]
✓ Value set to: [1] (Business)
  Current Text: "Business"
  ↩ Original value restored: [1, 3]
```

**Visual Effects:**
- Only "Business" is selected in the UI
- Other selections are cleared
- Original selections restored after 2 seconds

---

### Test 13: Set Multiple Values
**Purpose:** Set the field to select multiple options

**Timeline:** After 4 seconds delay

**Code:**
```javascript
const originalValue = multiOptionSetControl.Value;

await new Promise(resolve => setTimeout(resolve, 4000));
multiOptionSetControl.Value = [1, 2, 3]; // Business, Family, Social
console.log(`✓ Value set to: [1, 2, 3]`);
console.log(`  Current Text: "${multiOptionSetControl.Text}"`);
console.log(`  ℹ Multiple selections visible in UI`);

// Restore after 2 seconds
setTimeout(function() {
    multiOptionSetControl.Value = originalValue;
    console.log(`  ↩ Original value restored: [${originalValue?.join(', ')}]`);
}, 2000);
```

**Expected Output:**
```
⚡ Test 13: Set Multiple Values [1, 2, 3] (Business, Family, Social)
✓ Value set to: [1, 2, 3]
  Current Text: "Business; Family; Social"
  ℹ Multiple selections visible in UI
  ↩ Original value restored: [1, 3]
```

**Visual Effects:**
- Three checkboxes/items selected in the UI
- Text shows all three labels separated by semicolons
- Original selections restored after 2 seconds

---

### Test 14: Clear All Values
**Purpose:** Remove all selections (set to empty array)

**Timeline:** After 6 seconds delay

**Code:**
```javascript
const originalValue = multiOptionSetControl.Value;

await new Promise(resolve => setTimeout(resolve, 6000));
multiOptionSetControl.Value = [];
console.log(`✓ All values cleared (empty array)`);
console.log(`  Current Value: [${multiOptionSetControl.Value?.join(', ')}]`);
console.log(`  Current Text: "${multiOptionSetControl.Text}"`);

// Restore after 2 seconds
setTimeout(function() {
    multiOptionSetControl.Value = originalValue;
    console.log(`  ↩ Original value restored: [${originalValue?.join(', ')}]`);
}, 2000);
```

**Expected Output:**
```
⚡ Test 14: Clear All Values
✓ All values cleared (empty array)
  Current Value: []
  Current Text: ""
  ↩ Original value restored: [1, 3]
```

**Visual Effects:**
- All selections cleared in the UI
- No checkboxes/items selected
- Text becomes empty
- Original selections restored after 2 seconds

---

### Test 15: Add Notification
**Purpose:** Display an error notification on the control

**Timeline:** After 8 seconds delay

**Code:**
```javascript
await new Promise(resolve => setTimeout(resolve, 8000));
multiOptionSetControl.AddNotification({
    messages: ["This is a test notification for Category Code field"],
    notificationLevel: OptionSet.FieldNotificationLevel.Error,
    uniqueId: "TEST_MULTIOPTION_NOTIF"
});
console.log(`✓ Notification added with ID: TEST_MULTIOPTION_NOTIF`);

// Clear notification after 3 seconds
setTimeout(function() {
    multiOptionSetControl.ClearNotification("TEST_MULTIOPTION_NOTIF");
    console.log(`  ↩ Notification cleared`);
}, 3000);
```

**Expected Output:**
```
⚡ Test 15: Add Notification
✓ Notification added with ID: TEST_MULTIOPTION_NOTIF
  Message: "This is a test notification for Category Code field"
  ↩ Notification cleared
```

**Visual Effects:**
- Red "X" icon appears next to the field
- Error message displays when hovering
- Notification cleared after 3 seconds

---

### Test 16: Set Focus
**Purpose:** Move keyboard focus to the control

**Timeline:** After 11 seconds delay

**Code:**
```javascript
await new Promise(resolve => setTimeout(resolve, 11000));
multiOptionSetControl.Focus();
console.log(`✓ Focus set to devkit_CategoryCode control`);
console.log(`  ⚡ The control should now be highlighted and focused`);
```

**Expected Output:**
```
⚡ Test 16: Set Focus to Control
✓ Focus set to devkit_CategoryCode control
  ⚡ The control should now be highlighted and focused
```

**Visual Effects:**
- Field becomes highlighted/focused
- Keyboard input directed to this control

---

### Test 17: Toggle Visibility
**Purpose:** Hide and then show the control

**Timeline:** After 15 seconds delay

**Code:**
```javascript
await new Promise(resolve => setTimeout(resolve, 15000));
const originalVisible = multiOptionSetControl.Visible;
multiOptionSetControl.Visible = false;
console.log(`✓ Visibility set to: false (control hidden)`);

// Restore after 2 seconds
setTimeout(function() {
    multiOptionSetControl.Visible = originalVisible;
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

**Timeline:** After 17 seconds delay

**Code:**
```javascript
await new Promise(resolve => setTimeout(resolve, 17000));
const originalDisabled = multiOptionSetControl.Disabled;
multiOptionSetControl.Disabled = true;
console.log(`✓ Disabled set to: true (control is read-only)`);

// Restore after 2 seconds
setTimeout(function() {
    multiOptionSetControl.Disabled = originalDisabled;
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
- User cannot change selections
- Control becomes editable again after 2 seconds

---

### Test 19: Change Label
**Purpose:** Dynamically update the field label

**Timeline:** After 19 seconds delay

**Code:**
```javascript
await new Promise(resolve => setTimeout(resolve, 19000));
const originalLabel = multiOptionSetControl.Label;
multiOptionSetControl.Label = "TEST: Modified Category Code Label";
console.log(`✓ Label changed from "${originalLabel}" to "TEST: Modified Category Code Label"`);

// Restore after 2 seconds
setTimeout(function() {
    multiOptionSetControl.Label = originalLabel;
    console.log(`  ↩ Label restored to: "${originalLabel}"`);
}, 2000);
```

**Expected Output:**
```
⚡ Test 19: Change Label Text
✓ Label changed from "Category Code" to "TEST: Modified Category Code Label"
  ↩ Label restored to: "Category Code"
```

**Visual Effects:**
- Field label changes to "TEST: Modified Category Code Label"
- Original label restored after 2 seconds

---

## Test Timeline

```
0s    → Test 1-11: Instant (read operations)
2s    → Test 12: Set Single Value [1]
4s    → (Value restored)
4s    → Test 13: Set Multiple Values [1,2,3]
6s    → (Values restored)
6s    → Test 14: Clear All Values
8s    → (Values restored)
8s    → Test 15: Add Notification
11s   → (Notification cleared)
11s   → Test 16: Set Focus
15s   → Test 17: Toggle Visibility
17s   → (Visibility restored)
17s   → Test 18: Toggle Disabled
19s   → (Disabled restored)
19s   → Test 19: Change Label
21s   → (Label restored)
21-23s → Tests Complete
```

---

## API Reference

### IControlSelect Interface (MultiOptionSet extends this)

#### Properties

| Property | Type | Access | Description |
|----------|------|--------|-------------|
| `Value` | `Array<number> \| null` | Read/Write | Array of selected option values |
| `Text` | `string` | Read-only | Display text of selected options (semicolon-separated) |
| `SelectedOption` | `Array<TextValueNumber>` | Read-only | Array of objects with `text` and `value` |
| `Options` | `Array<TextValueNumber>` | Read-only | All available options from entity metadata |
| `ControlOptions` | `Array<TextValueNumber>` | Read-only | Options in UI control |
| `InitialValue` | `number` | Read-only | Value when form loaded |
| `Visible` | `boolean` | Read/Write | Control visibility |
| `Disabled` | `boolean` | Read/Write | Control disabled state |
| `Label` | `string` | Read/Write | Field label text |
| `ControlName` | `string` | Read-only | Control identifier |
| `AttributeName` | `string` | Read-only | Attribute logical name |
| `ControlType` | `string` | Read-only | Control type ("multiselectoptionset") |

#### Methods

| Method | Parameters | Returns | Description |
|--------|-----------|---------|-------------|
| `Option()` | `value: number` | `TextValueNumber \| null` | Get option by numeric value |
| `AddOption()` | `text: string, value: number, index?: number` | `void` | Add new option to control |
| `RemoveOption()` | `value: number` | `void` | Remove option from control |
| `ClearOptions()` | none | `void` | Remove all options from control |
| `AddNotification()` | `notification: FieldNotification` | `void` | Display notification |
| `ClearNotification()` | `uniqueId: string` | `boolean` | Clear notification |
| `SetNotification()` | `message: string, uniqueId?: string` | `boolean` | Set error notification (simpler) |
| `Focus()` | none | `void` | Set focus to control |

---

## OptionSet vs MultiOptionSet Comparison

| Feature | OptionSet | MultiOptionSet |
|---------|-----------|----------------|
| **Selection Mode** | Single selection | Multiple selections |
| **Value Type** | `number \| null` | `Array<number> \| null` |
| **SelectedOption Type** | `TextValueNumber \| null` | `Array<TextValueNumber>` |
| **Text Format** | Single label: `"Business"` | Semicolon-separated: `"Business; Social"` |
| **UI Control** | Dropdown | Multi-select list/checkboxes |
| **Clear Value** | Set to `null` | Set to `[]` or `null` |
| **Empty State** | `null` or `undefined` | `[]` (empty array) |
| **Use Cases** | Status, Category, Type | Tags, Skills, Features, Roles |
| **Control Type** | "optionset" | "multiselectoptionset" |

---

## Common Use Cases

### 1. Check if Specific Option is Selected
```javascript
const value = form.Body.devkit_CategoryCode.Value || [];
if (value.includes(1)) {
    // "Business" is selected
    console.log("Account has Business category");
}
```

### 2. Add a Selection
```javascript
const currentValue = form.Body.devkit_CategoryCode.Value || [];
if (!currentValue.includes(4)) {
    // Add "Sales" if not already selected
    form.Body.devkit_CategoryCode.Value = [...currentValue, 4];
}
```

### 3. Remove a Selection
```javascript
const currentValue = form.Body.devkit_CategoryCode.Value || [];
// Remove "Social" (value 3)
form.Body.devkit_CategoryCode.Value = currentValue.filter(v => v !== 3);
```

### 4. Validate Minimum Selections
```javascript
const value = form.Body.devkit_CategoryCode.Value || [];
if (value.length === 0) {
    form.Body.devkit_CategoryCode.AddNotification({
        messages: ["At least one category must be selected"],
        notificationLevel: OptionSet.FieldNotificationLevel.Error,
        uniqueId: "CATEGORY_REQUIRED"
    });
}
```

### 5. Get Comma-Separated Text
```javascript
const selectedOptions = form.Body.devkit_CategoryCode.SelectedOption || [];
const text = selectedOptions.map(o => o.text).join(", ");
console.log(`Categories: ${text}`);
// Output: "Categories: Business, Social"
```

---

## Deployment Instructions

### Prerequisites:
- Account entity with devkit_CategoryCode field
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
- Visual changes observable (multiple selections, clearing, etc.)
- Original values restored after each test

---

## Troubleshooting

### Issue: "Cannot read property 'Value' of undefined"
**Solution:** Ensure devkit_CategoryCode field is on the form in the Body section

### Issue: No visual changes when values are set
**Solution:** Check that the field is visible and not disabled by security rules

### Issue: Value returns null instead of empty array
**Solution:** Use `value || []` to handle null case when field has never been populated

### Issue: Cannot set value to array
**Solution:** Ensure you're passing an array of numbers: `[1, 2, 3]` not individual values

---

## Summary

The MultiOptionSet test suite provides **19 comprehensive tests** covering all aspects of multi-select picklist controls:

✅ **Array Value Operations** - Get/set arrays of numeric values
✅ **Multiple Selections** - Handle 0, 1, or many selections
✅ **Text Access** - Retrieve semicolon-separated labels
✅ **Options Management** - List and find options
✅ **Metadata** - Control properties and identifiers
✅ **UI Manipulation** - Visibility, disabled, labels
✅ **User Interaction** - Focus, notifications
✅ **State Management** - Initial values, change detection

**Key Difference from OptionSet:** Values are **arrays** allowing multiple simultaneous selections!

**Next Steps:** Implement Boolean or DateTime tests to continue expanding test coverage!
