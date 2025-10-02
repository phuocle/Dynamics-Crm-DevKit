# Integer Control Tests - NumberOfEmployees Field

## Overview
Comprehensive test suite for Dynamics 365 Integer (Whole Number) controls using the **NumberOfEmployees** field on the Account entity.

## Test Coverage
**Field:** `NumberOfEmployees` (Whole Number)
**Form Location:** Header
**Control Type:** Integer
**Total Tests:** 15

---

## Test Descriptions

### Test 1: Get Integer Value
**Purpose:** Retrieve the current value of the integer field

**Expected Output:**
```
📋 Test 1: Get Integer Value
─────────────────────────────────────────────────────────
✓ Current Value: 250
  Type: number
  Is Number: true
  Is Integer: true
```

**What it tests:**
- Reading the current value using `intControl.Value`
- Checking the value type (should be `number`)
- Verifying it's a proper integer using `Number.isInteger()`

---

### Test 2: Get Control and Attribute Names
**Purpose:** Verify control and attribute identifiers

**Expected Output:**
```
📋 Test 2: Get Control and Attribute Names
─────────────────────────────────────────────────────────
✓ Control Name: numberofemployees
✓ Attribute Name: numberofemployees
  (Both should be: 'numberofemployees')
```

**What it tests:**
- `ControlName` property
- `AttributeName` property
- Both should match for standard controls

---

### Test 3: Get Attribute Properties
**Purpose:** Display all metadata properties of the integer control

**Expected Output:**
```
📋 Test 3: Get Attribute Properties
─────────────────────────────────────────────────────────
✓ Attribute Name: numberofemployees
  Attribute Type: integer
  Control Type: standard
  Required Level: none
  Submit Mode: dirty
  Is Valid: true
  Is Dirty: false
  Format: none
  Min Value: 0
  Max Value: 1000000000
  Precision: 0
```

**What it tests:**
- `AttributeName` - Logical name
- `AttributeType` - Data type (integer)
- `ControlType` - UI control type
- `RequiredLevel` - Validation requirement
- `SubmitMode` - When to submit (always/never/dirty)
- `IsValid` - Validation status
- `IsDirty` - Whether value has changed
- `Format` - Field format (none/duration/timezone/language)
- `MinValue` - Minimum allowed value ⭐ Integer-specific
- `MaxValue` - Maximum allowed value ⭐ Integer-specific
- `Precision` - Decimal places (should be 0 for integers) ⭐ Integer-specific

---

### Test 4: Get Control Visibility
**Purpose:** Check if the control is visible on the form

**Expected Output:**
```
📋 Test 4: Get Control Visibility
─────────────────────────────────────────────────────────
✓ Visible: true
```

**What it tests:**
- `Visible` property - whether control is displayed

---

### Test 5: Get Control Disabled State
**Purpose:** Check if the control is enabled or disabled

**Expected Output:**
```
📋 Test 5: Get Control Disabled State
─────────────────────────────────────────────────────────
✓ Disabled: false
```

**What it tests:**
- `Disabled` property - whether control can be edited

---

### Test 6: Get Control Label
**Purpose:** Retrieve the display label of the control

**Expected Output:**
```
📋 Test 6: Get Control Label
─────────────────────────────────────────────────────────
✓ Label: "No. of Employees"
```

**What it tests:**
- `Label` property - control's display label

---

### Test 7: Set Integer Value (and restore)
**Purpose:** Programmatically change the field value and restore it

**Expected Output:**
```
📋 Test 7: Set Integer Value (and restore)
─────────────────────────────────────────────────────────
  Original Value: 250
✓ New Value Set: 350

... 2 seconds later ...
  ↩ Original value restored: 250
```

**What it tests:**
- Setting value using `intControl.Value = newValue`
- Adding 100 to current value (or setting to 100 if null)
- Value changes are immediately reflected in the UI
- Restoring original value

---

### Test 8: Test Min/Max Validation
**Purpose:** Display and validate min/max value constraints

**Expected Output:**
```
📋 Test 8: Test Min/Max Validation
─────────────────────────────────────────────────────────
✓ Min Value: 0
✓ Max Value: 1000000000
  ℹ Values below 0 will be rejected
  ℹ Values above 1000000000 will be rejected
```

**What it tests:**
- `MinValue` property - Minimum allowed value
- `MaxValue` property - Maximum allowed value
- Informational messages about constraints
- **Note:** Actual min/max depend on field configuration

---

### Test 9: Test Decimal Value Handling
**Purpose:** Test how integer controls handle decimal values

**Expected Output:**
```
📋 Test 9: Test Decimal Value Handling
─────────────────────────────────────────────────────────
  ℹ Attempting to set decimal value: 123.45
✓ Actual Value Set: 123
  Is Integer: true
  ℹ Dynamics 365 may round or truncate decimal values

... 2 seconds later ...
  ↩ Original value restored: 250
```

**What it tests:**
- Attempting to set a decimal value (123.45)
- Dynamics 365 automatically rounds/truncates to integer (123)
- Value remains an integer
- Original value restoration

**Important:** Integer fields reject or round decimal values automatically.

---

### Test 10: Test Notification Methods
**Purpose:** Show and clear error notifications on the control

**Expected Output:**
```
📋 Test 10: Test Notification Methods
─────────────────────────────────────────────────────────
✓ Error notification set

... 3 seconds later ...
  ↩ Notification cleared
```

**What it tests:**
- `SetNotification(message, uniqueId)` - Display error message
- `ClearNotification(uniqueId)` - Remove error message
- Red error indicator appears below the field

---

### Test 11: Test SetFocus Method
**Purpose:** Programmatically set focus to the field

**Expected Output:**
```
📋 Test 11: Test SetFocus Method
─────────────────────────────────────────────────────────
ℹ Will set focus in 4 seconds...

... 4 seconds later ...
✓ Focus set to NumberOfEmployees field
```

**What it tests:**
- `Focus()` method - Sets cursor to the field
- Cursor should appear in the NumberOfEmployees textbox

---

### Test 12: Test Visibility Toggle
**Purpose:** Dynamically hide and show the control

**Expected Output:**
```
📋 Test 12: Test Visibility Toggle
─────────────────────────────────────────────────────────
  Original Visibility: true
✓ Control hidden

... 2 seconds later ...
  ↩ Visibility restored: true
```

**What it tests:**
- Setting `Visible = false` - Control disappears from form
- Setting `Visible = true` - Control reappears
- Visual confirmation of show/hide behavior

---

### Test 13: Test Disabled Toggle
**Purpose:** Dynamically enable and disable the control

**Expected Output:**
```
📋 Test 13: Test Disabled Toggle
─────────────────────────────────────────────────────────
  Original Disabled State: false
✓ Control disabled

... 2 seconds later ...
  ↩ Disabled state restored: false
```

**What it tests:**
- Setting `Disabled = true` - Control becomes read-only (grayed out)
- Setting `Disabled = false` - Control becomes editable
- Visual confirmation of enable/disable behavior

---

### Test 14: Test Label Change
**Purpose:** Dynamically change the control's label text

**Expected Output:**
```
📋 Test 14: Test Label Change
─────────────────────────────────────────────────────────
  Original Label: "No. of Employees"
✓ Label changed to: "No. of Employees (TEST)"

... 2 seconds later ...
  ↩ Label restored: "No. of Employees"
```

**What it tests:**
- Setting `Label = newText` - Label changes on the form
- Label restoration

---

### Test 15: Test Null/Zero Handling
**Purpose:** Test setting values to zero and null (clearing the field)

**Expected Output:**
```
📋 Test 15: Test Null/Zero Handling
─────────────────────────────────────────────────────────
  Original Value: 250
✓ Value set to: 0
  Current Value: 0

... 2 seconds later ...
✓ Value set to: null (cleared)
  Current Value: null

... 2 more seconds ...
  ↩ Original value restored: 250
```

**What it tests:**
- Setting value to `0` (valid integer)
- Setting value to `null` (clears the field)
- Difference between 0 and null
- Original value restoration

**Important:** `0` and `null` are different - `0` is a valid value, `null` means "no value".

---

## Complete Test Sequence Timeline

```
Start
├─ Tests 1-6: Read Properties (immediate)
│  └─ Get Value, Names, Properties, Visibility, Disabled, Label
│
├─ Test 7: Modify Value (2 second restore)
│
├─ Test 8: Show Min/Max (immediate)
│
├─ Test 9: Decimal Handling (2 second restore)
│
├─ Test 10: Notification (3 second clear)
│
├─ Test 11: Focus (4 second delay)
│
├─ Test 12: Visibility Toggle (2 second restore)
│
├─ Test 13: Disabled Toggle (2 second restore)
│
├─ Test 14: Label Change (2 second restore)
│
└─ Test 15: Null/Zero Handling (2 seconds to null, 2 seconds to restore)

Total Duration: ~15-18 seconds
```

---

## Deployment Instructions

### 1. Update the Test Code
The test function `testInteger()` is already implemented in `Account.js`. Enable it by uncommenting:

```javascript
async function UiAddLoaded(executionContext) {
    //await testRetrieveRecord();
    //await testRetrieveRecords();
    //await testLookup();         // ✅ Complete - 15 tests
    //await testString();         // ✅ Complete - 12 tests
    await testInteger();          // ✅ Complete - 15 tests (ACTIVE)
}
```

### 2. Ensure Field is on Form
**Important:** The `NumberOfEmployees` field must be in the **Header** section of the Account form:
1. Go to **Settings** → **Customizations** → **Entities** → **Account** → **Forms**
2. Open the **Account** main form
3. If `NumberOfEmployees` is not visible in the Header, add it from the field explorer to the **Header** section
4. The field should appear at the top of the form in the header area
5. Save and publish

### 3. Upload to CRM
1. Navigate to **Settings** → **Customizations** → **Customize the System**
2. Expand **Entities** → **Account** → **Forms**
3. Open the **Account** main form
4. Go to **Form Properties** → **Form Libraries**
5. Find the **Account.js** web resource
6. Update it with the new code
7. Click **Publish All Customizations**

### 4. Test in Browser
1. Open any Account record (or create a new one)
2. Press **F12** to open Developer Tools
3. Click the **Console** tab
4. Watch the test output appear

---

## Expected Complete Output

```
╔════════════════════════════════════════════════════════════════╗
║      TESTING INTEGER CONTROL: NumberOfEmployees                ║
║      (Located in Header section)                               ║
╚════════════════════════════════════════════════════════════════╝

📋 Test 1: Get Integer Value
─────────────────────────────────────────────────────────
✓ Current Value: 250
  Type: number
  Is Number: true
  Is Integer: true

📋 Test 2: Get Control and Attribute Names
─────────────────────────────────────────────────────────
✓ Control Name: numberofemployees
✓ Attribute Name: numberofemployees
  (Both should be: 'numberofemployees')

📋 Test 3: Get Attribute Properties
─────────────────────────────────────────────────────────
✓ Attribute Name: numberofemployees
  Attribute Type: integer
  Control Type: standard
  Required Level: none
  Submit Mode: dirty
  Is Valid: true
  Is Dirty: false
  Format: none
  Min Value: 0
  Max Value: 1000000000
  Precision: 0

📋 Test 4: Get Control Visibility
─────────────────────────────────────────────────────────
✓ Visible: true

📋 Test 5: Get Control Disabled State
─────────────────────────────────────────────────────────
✓ Disabled: false

📋 Test 6: Get Control Label
─────────────────────────────────────────────────────────
✓ Label: "No. of Employees"

📋 Test 7: Set Integer Value (and restore)
─────────────────────────────────────────────────────────
  Original Value: 250
✓ New Value Set: 350

📋 Test 8: Test Min/Max Validation
─────────────────────────────────────────────────────────
✓ Min Value: 0
✓ Max Value: 1000000000
  ℹ Values below 0 will be rejected
  ℹ Values above 1000000000 will be rejected

📋 Test 9: Test Decimal Value Handling
─────────────────────────────────────────────────────────
  ℹ Attempting to set decimal value: 123.45
✓ Actual Value Set: 123
  Is Integer: true
  ℹ Dynamics 365 may round or truncate decimal values

📋 Test 10: Test Notification Methods
─────────────────────────────────────────────────────────
✓ Error notification set

📋 Test 11: Test SetFocus Method
─────────────────────────────────────────────────────────
ℹ Will set focus in 4 seconds...

📋 Test 12: Test Visibility Toggle
─────────────────────────────────────────────────────────
  Original Visibility: true
✓ Control hidden

📋 Test 13: Test Disabled Toggle
─────────────────────────────────────────────────────────
  Original Disabled State: false
✓ Control disabled

📋 Test 14: Test Label Change
─────────────────────────────────────────────────────────
  Original Label: "No. of Employees"
✓ Label changed to: "No. of Employees (TEST)"

📋 Test 15: Test Null/Zero Handling
─────────────────────────────────────────────────────────
  Original Value: 250
✓ Value set to: 0
  Current Value: 0

╔════════════════════════════════════════════════════════════════╗
║         INTEGER CONTROL TESTS COMPLETED                        ║
╚════════════════════════════════════════════════════════════════╝
```

---

## Visual Effects to Observe

### During Test Execution:
1. **Test 7 (2 seconds):** NumberOfEmployees value increases by 100, then reverts
2. **Test 9 (2 seconds):** Value briefly shows 123 (from 123.45), then reverts
3. **Test 10 (3 seconds):** Red error icon appears below field, then disappears
4. **Test 11 (4 seconds):** Cursor jumps to NumberOfEmployees field
5. **Test 12 (2 seconds):** Field disappears, then reappears
6. **Test 13 (2 seconds):** Field becomes grayed out (read-only), then editable again
7. **Test 14 (2 seconds):** Label changes to include "(TEST)", then reverts
8. **Test 15 (4 seconds):** Value changes to 0, then null, then original value

---

## Troubleshooting

### Test Output Not Appearing
- **Check:** Browser console is open (F12 → Console tab)
- **Check:** Form has loaded completely
- **Check:** No JavaScript errors in console

### "intControl is null" or "undefined"
- **Cause:** NumberOfEmployees field is not in the Header section of the form
- **Solution:** Add the NumberOfEmployees field to the **Header** section of the Account form (not the Body)
- **Verify:** Field exists in the form designer

### Tests Run But No Visual Changes
- **Cause:** Tests execute too fast to see changes
- **Solution:** Watch carefully during the 15-18 second execution window
- **Tip:** Focus on one visual change at a time

### Value Not Changing in Test 7
- **Cause:** Field might be read-only or disabled
- **Check:** Field security settings
- **Check:** Form is not in read-only mode

### Decimal Value Shows as Decimal (Test 9)
- **Expected:** Dynamics 365 should round/truncate to integer
- **Possible:** Browser console shows decimal before server processing
- **Check:** Actual field value after a moment - should be integer

### Min/Max Values Show "No limit"
- **Cause:** Field configuration doesn't have min/max constraints
- **Status:** This is normal - not all integer fields have constraints
- **Info:** Default range is Int32: -2,147,483,648 to 2,147,483,647

---

## Integer Control API Reference

### Properties (IControl Interface)

| Property | Type | Description |
|----------|------|-------------|
| `Value` | `number` | Current field value (read/write) |
| `AttributeName` | `string` | Logical name of the attribute |
| `AttributeType` | `string` | "integer" |
| `ControlName` | `string` | Name of the control |
| `ControlType` | `string` | "standard" or other UI type |
| `RequiredLevel` | `string` | "none", "required", or "recommended" |
| `SubmitMode` | `string` | "always", "never", or "dirty" |
| `IsValid` | `boolean` | Whether value passes validation |
| `IsDirty` | `boolean` | Whether value has been modified |
| `Format` | `string` | "none", "duration", "timezone", "language" |
| `MinValue` | `number` | Minimum allowed value (or null) ⭐ |
| `MaxValue` | `number` | Maximum allowed value (or null) ⭐ |
| `Precision` | `number` | Decimal places (0 for integers) ⭐ |
| `Visible` | `boolean` | Whether control is visible (read/write) |
| `Disabled` | `boolean` | Whether control is disabled (read/write) |
| `Label` | `string` | Control label text (read/write) |

⭐ = Integer-specific properties

### Methods (IControl Interface)

| Method | Parameters | Description |
|--------|------------|-------------|
| `Focus()` | None | Sets focus to the control |
| `SetNotification(message, uniqueId)` | `string, string` | Shows error notification |
| `ClearNotification(uniqueId)` | `string` | Removes error notification |

---

## Integer Format Values

The `Format` property can have these values:

| Format | Description | Example |
|--------|-------------|---------|
| `none` | Plain integer | 250 |
| `duration` | Time duration (minutes) | 150 (displayed as "2:30") |
| `timezone` | Time zone code | -480 (PST) |
| `language` | Language code | 1033 (English) |

---

## Integer Value Ranges

### Standard Int32 Range
- **Minimum:** -2,147,483,648
- **Maximum:** 2,147,483,647

### Custom Ranges (via MinValue/MaxValue)
Fields can have custom constraints:
- **Example:** Employee count might be 0 to 1,000,000
- **Example:** Age might be 0 to 150
- **Example:** Quantity might be 1 to 999999

---

## Key Differences: Integer vs String

| Feature | Integer | String |
|---------|---------|--------|
| Data Type | `number` | `string` |
| Decimal Values | Rejected/Rounded | Allowed |
| Mathematical Operations | Yes | No (concatenation only) |
| MaxLength Property | No | Yes |
| MinValue/MaxValue | Yes | No |
| Precision Property | Yes (should be 0) | No |

---

## Key Differences: Integer vs Decimal

| Feature | Integer | Decimal |
|---------|---------|---------|
| Decimal Values | Rejected/Rounded | Allowed |
| Precision | 0 | 1-10 (configurable) |
| Use Case | Counts, IDs, Whole numbers | Currency, measurements |
| Example Values | 0, 100, -5 | 0.5, 100.25, -5.75 |

---

## Next Steps

### Other Field Types to Test:
1. ✅ **Lookup** - PrimaryContactId (Completed - 15 tests)
2. ✅ **String** - Name (Completed - 12 tests)
3. ✅ **Integer** - NumberOfEmployees (Completed - 15 tests)
4. ⏳ **Decimal** - Revenue (Next - similar to Integer)
5. ⏳ **Money** - CreditLimit (Pending)
6. ⏳ **OptionSet** - AccountCategoryCode (Pending)
7. ⏳ **Boolean** - CreditOnHold (Pending)
8. ⏳ **DateTime** - CreatedOn (Pending)
9. ⏳ **Memo** - Description (Pending)

---

## Summary

The Integer control test suite provides comprehensive coverage of:
- ✅ Reading current values and checking type
- ✅ Property introspection (including Min/Max/Precision)
- ✅ Value manipulation (integers only)
- ✅ Decimal value handling (rejection/rounding)
- ✅ Null vs zero distinction
- ✅ UI control (visibility, enabled state)
- ✅ User interaction (focus, notifications)
- ✅ Label customization
- ✅ Min/Max validation information

All tests include automatic restoration of original state, ensuring no permanent changes to the record.

**Ready for deployment and verification in CRM!** 🚀
