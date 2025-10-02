# String Control Tests - Name Field

## Overview
Comprehensive test suite for Dynamics 365 String (Single Line Text) controls using the **Name** field on the Account entity.

## Test Coverage
**Field:** `Name` (Single Line Text)
**Control Type:** String
**Total Tests:** 12

---

## Test Descriptions

### Test 1: Get String Value
**Purpose:** Retrieve the current value of the string field

**Expected Output:**
```
📋 Test 1: Get String Value
─────────────────────────────────────────────────────────
✓ Current Value: "Contoso Ltd."
  Type: string
  Length: 12 characters
```

**What it tests:**
- Reading the current value using `stringControl.Value`
- Checking the value type (should be `string`)
- Calculating string length

---

### Test 2: Get Control and Attribute Names
**Purpose:** Verify control and attribute identifiers

**Expected Output:**
```
📋 Test 2: Get Control and Attribute Names
─────────────────────────────────────────────────────────
✓ Control Name: name
✓ Attribute Name: name
  (Both should be: 'name')
```

**What it tests:**
- `ControlName` property
- `AttributeName` property
- Both should match for standard controls

---

### Test 3: Get Attribute Properties
**Purpose:** Display all metadata properties of the string control

**Expected Output:**
```
📋 Test 3: Get Attribute Properties
─────────────────────────────────────────────────────────
✓ Attribute Name: name
  Attribute Type: string
  Control Type: standard
  Required Level: required
  Submit Mode: dirty
  Is Valid: true
  Is Dirty: false
  Format: text
  Max Length: 160
```

**What it tests:**
- `AttributeName` - Logical name
- `AttributeType` - Data type (string)
- `ControlType` - UI control type
- `RequiredLevel` - Validation requirement (none/required/recommended)
- `SubmitMode` - When to submit (always/never/dirty)
- `IsValid` - Validation status
- `IsDirty` - Whether value has changed
- `Format` - Field format (text/email/phone/url/etc.)
- `MaxLength` - Maximum character limit

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
✓ Label: "Account Name"
```

**What it tests:**
- `Label` property - control's display label

---

### Test 7: Set String Value (and restore)
**Purpose:** Programmatically change the field value and restore it

**Expected Output:**
```
📋 Test 7: Set String Value (and restore)
─────────────────────────────────────────────────────────
  Original Value: "Contoso Ltd."
✓ New Value Set: "Contoso Ltd. (MODIFIED)"

... 2 seconds later ...
  ↩ Original value restored: "Contoso Ltd."
```

**What it tests:**
- Setting value using `stringControl.Value = newValue`
- Value changes are immediately reflected in the UI
- Restoring original value

---

### Test 8: Test Notification Methods
**Purpose:** Show and clear error notifications on the control

**Expected Output:**
```
📋 Test 8: Test Notification Methods
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

### Test 9: Test SetFocus Method
**Purpose:** Programmatically set focus to the field

**Expected Output:**
```
📋 Test 9: Test SetFocus Method
─────────────────────────────────────────────────────────
ℹ Will set focus in 4 seconds...

... 4 seconds later ...
✓ Focus set to Name field
```

**What it tests:**
- `Focus()` method - Sets cursor to the field
- Cursor should appear in the Name textbox

---

### Test 10: Test Visibility Toggle
**Purpose:** Dynamically hide and show the control

**Expected Output:**
```
📋 Test 10: Test Visibility Toggle
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

### Test 11: Test Disabled Toggle
**Purpose:** Dynamically enable and disable the control

**Expected Output:**
```
📋 Test 11: Test Disabled Toggle
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

### Test 12: Test Label Change
**Purpose:** Dynamically change the control's label text

**Expected Output:**
```
📋 Test 12: Test Label Change
─────────────────────────────────────────────────────────
  Original Label: "Account Name"
✓ Label changed to: "Account Name (TEST)"

... 2 seconds later ...
  ↩ Label restored: "Account Name"
```

**What it tests:**
- Setting `Label = newText` - Label changes on the form
- Label restoration

---

## Complete Test Sequence Timeline

```
Start
├─ Tests 1-6: Read Properties (immediate)
│  └─ Get Value, Names, Properties, Visibility, Disabled, Label
│
├─ Test 7: Modify Value (2 second restore)
│
├─ Test 8: Notification (3 second clear)
│
├─ Test 9: Focus (4 second delay)
│
├─ Test 10: Visibility Toggle (2 second restore)
│
├─ Test 11: Disabled Toggle (2 second restore)
│
└─ Test 12: Label Change (2 second restore)

Total Duration: ~10-12 seconds
```

---

## Deployment Instructions

### 1. Update the Test Code
The test function `testString()` is already implemented in `Account.js`. Enable it by uncommenting:

```javascript
async function UiAddLoaded(executionContext) {
    //await testRetrieveRecord();
    //await testRetrieveRecords();
    //await testLookup();
    await testString();  // ✅ This line
}
```

### 2. Upload to CRM
1. Navigate to **Settings** → **Customizations** → **Customize the System**
2. Expand **Entities** → **Account** → **Forms**
3. Open the **Account** main form
4. Go to **Form Properties** → **Form Libraries**
5. Find the **Account.js** web resource
6. Update it with the new code
7. Click **Publish All Customizations**

### 3. Test in Browser
1. Open any Account record (or create a new one)
2. Press **F12** to open Developer Tools
3. Click the **Console** tab
4. Watch the test output appear

---

## Expected Complete Output

```
╔════════════════════════════════════════════════════════════════╗
║          TESTING STRING CONTROL: Name Field                    ║
╚════════════════════════════════════════════════════════════════╝

📋 Test 1: Get String Value
─────────────────────────────────────────────────────────
✓ Current Value: "Contoso Ltd."
  Type: string
  Length: 12 characters

📋 Test 2: Get Control and Attribute Names
─────────────────────────────────────────────────────────
✓ Control Name: name
✓ Attribute Name: name
  (Both should be: 'name')

📋 Test 3: Get Attribute Properties
─────────────────────────────────────────────────────────
✓ Attribute Name: name
  Attribute Type: string
  Control Type: standard
  Required Level: required
  Submit Mode: dirty
  Is Valid: true
  Is Dirty: false
  Format: text
  Max Length: 160

📋 Test 4: Get Control Visibility
─────────────────────────────────────────────────────────
✓ Visible: true

📋 Test 5: Get Control Disabled State
─────────────────────────────────────────────────────────
✓ Disabled: false

📋 Test 6: Get Control Label
─────────────────────────────────────────────────────────
✓ Label: "Account Name"

📋 Test 7: Set String Value (and restore)
─────────────────────────────────────────────────────────
  Original Value: "Contoso Ltd."
✓ New Value Set: "Contoso Ltd. (MODIFIED)"

📋 Test 8: Test Notification Methods
─────────────────────────────────────────────────────────
✓ Error notification set

📋 Test 9: Test SetFocus Method
─────────────────────────────────────────────────────────
ℹ Will set focus in 4 seconds...

📋 Test 10: Test Visibility Toggle
─────────────────────────────────────────────────────────
  Original Visibility: true
✓ Control hidden

📋 Test 11: Test Disabled Toggle
─────────────────────────────────────────────────────────
  Original Disabled State: false
✓ Control disabled

📋 Test 12: Test Label Change
─────────────────────────────────────────────────────────
  Original Label: "Account Name"
✓ Label changed to: "Account Name (TEST)"

╔════════════════════════════════════════════════════════════════╗
║           STRING CONTROL TESTS COMPLETED                       ║
╚════════════════════════════════════════════════════════════════╝
```

---

## Visual Effects to Observe

### During Test Execution:
1. **Test 7 (2 seconds):** Name field value changes, then reverts
2. **Test 8 (3 seconds):** Red error icon appears below Name field, then disappears
3. **Test 9 (4 seconds):** Cursor jumps to Name field
4. **Test 10 (2 seconds):** Name field disappears, then reappears
5. **Test 11 (2 seconds):** Name field becomes grayed out (read-only), then editable again
6. **Test 12 (2 seconds):** Label "Account Name" changes to "Account Name (TEST)", then reverts

---

## Troubleshooting

### Test Output Not Appearing
- **Check:** Browser console is open (F12 → Console tab)
- **Check:** Form has loaded completely
- **Check:** No JavaScript errors in console

### "stringControl is null" or "undefined"
- **Cause:** Name field is not on the form
- **Solution:** Add the Name field to the Account form

### Tests Run But No Visual Changes
- **Cause:** Tests execute too fast to see changes
- **Solution:** Watch carefully during the 10-12 second execution window

### Value Not Changing in Test 7
- **Cause:** Field might be read-only or disabled
- **Check:** Field security settings
- **Check:** Form is not in read-only mode

### Notification Not Appearing in Test 8
- **Cause:** Notification UI might be collapsed
- **Solution:** Look for red icon below the Name field
- **Alternative:** Check if there are multiple Name controls on the form

---

## String Control API Reference

### Properties (IControl Interface)

| Property | Type | Description |
|----------|------|-------------|
| `Value` | `string` | Current field value (read/write) |
| `AttributeName` | `string` | Logical name of the attribute |
| `AttributeType` | `string` | "string" |
| `ControlName` | `string` | Name of the control |
| `ControlType` | `string` | "standard" or other UI type |
| `RequiredLevel` | `string` | "none", "required", or "recommended" |
| `SubmitMode` | `string` | "always", "never", or "dirty" |
| `IsValid` | `boolean` | Whether value passes validation |
| `IsDirty` | `boolean` | Whether value has been modified |
| `Format` | `string` | "text", "email", "phone", "url", etc. |
| `MaxLength` | `number` | Maximum character limit |
| `Visible` | `boolean` | Whether control is visible (read/write) |
| `Disabled` | `boolean` | Whether control is disabled (read/write) |
| `Label` | `string` | Control label text (read/write) |

### Methods (IControl Interface)

| Method | Parameters | Description |
|--------|------------|-------------|
| `Focus()` | None | Sets focus to the control |
| `SetNotification(message, uniqueId)` | `string, string` | Shows error notification |
| `ClearNotification(uniqueId)` | `string` | Removes error notification |

---

## String Format Values

The `Format` property can have these values:

| Format | Description | Example |
|--------|-------------|---------|
| `text` | Plain text | "Contoso Ltd." |
| `email` | Email address | "contact@contoso.com" |
| `phone` | Phone number | "+1 (555) 123-4567" |
| `url` | Website URL | "https://contoso.com" |
| `tickersymbol` | Stock ticker | "MSFT" |
| `textarea` | Multi-line text | "Line 1\nLine 2" |

---

## Next Steps

### Other Field Types to Test:
1. ✅ **Lookup** - PrimaryContactId (Completed - 15 tests)
2. ✅ **String** - Name (Completed - 12 tests)
3. ⏳ **Integer** - NumberOfEmployees (Pending)
4. ⏳ **Decimal** - Revenue (Pending)
5. ⏳ **OptionSet** - AccountCategoryCode (Pending)
6. ⏳ **Boolean** - CreditOnHold (Pending)
7. ⏳ **DateTime** - CreatedOn (Pending)
8. ⏳ **Memo** - Description (Pending)
9. ⏳ **Money** - CreditLimit (Pending)

---

## Additional Notes

### String vs Memo (Multi-line Text)
- **String:** Single line, limited length (e.g., 160 chars for Name)
- **Memo:** Multi-line, much longer (e.g., 100,000 chars for Description)
- Both use similar APIs but Memo has additional properties

### MaxLength Property
- The `MaxLength` property reflects the field's maximum character limit
- For Account Name, this is typically **160 characters**
- This is enforced by Dynamics 365 at both UI and API levels

### Format-Specific Behavior
- **Email:** Clicking opens default email client
- **Phone:** Clicking initiates call (mobile devices)
- **URL:** Clicking opens website in new tab
- **Text:** No special behavior

---

## Summary

The String control test suite provides comprehensive coverage of:
- ✅ Reading current values
- ✅ Property introspection
- ✅ Value manipulation
- ✅ UI control (visibility, enabled state)
- ✅ User interaction (focus, notifications)
- ✅ Label customization

All tests include automatic restoration of original state, ensuring no permanent changes to the record.

**Ready for deployment and verification in CRM!** 🚀
