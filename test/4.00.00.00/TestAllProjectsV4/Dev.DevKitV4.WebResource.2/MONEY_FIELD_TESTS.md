# Money Control Tests - Revenue Field

## Overview
Comprehensive test suite for Dynamics 365 Money (Currency) controls using the **Revenue** field on the Account entity.

## Test Coverage
**Field:** `Revenue` (Currency/Money)
**Form Location:** Header
**Control Type:** Money
**Total Tests:** 16

---

## Test Descriptions

### Test 1: Get Money Value
**Purpose:** Retrieve the current value of the money field with currency formatting

**Expected Output:**
```
📋 Test 1: Get Money Value
─────────────────────────────────────────────────────────
✓ Current Value: 5000000
  Type: number
  Is Number: true
  Formatted: $5,000,000.00
```

**What it tests:**
- Reading the current value using `moneyControl.Value`
- Checking the value type (should be `number`)
- Formatting the value with currency symbols and thousand separators

---

### Test 2: Get Control and Attribute Names
**Purpose:** Verify control and attribute identifiers

**Expected Output:**
```
📋 Test 2: Get Control and Attribute Names
─────────────────────────────────────────────────────────
✓ Control Name: revenue
✓ Attribute Name: revenue
  (Both should be: 'revenue')
```

**What it tests:**
- `ControlName` property
- `AttributeName` property
- Both should match for standard controls

---

### Test 3: Get Attribute Properties
**Purpose:** Display all metadata properties of the money control

**Expected Output:**
```
📋 Test 3: Get Attribute Properties
─────────────────────────────────────────────────────────
✓ Attribute Name: revenue
  Attribute Type: money
  Control Type: standard
  Required Level: none
  Submit Mode: dirty
  Is Valid: true
  Is Dirty: false
  Format: none
  Min Value: -100000000000
  Max Value: 100000000000
  Precision: 2
```

**What it tests:**
- `AttributeName` - Logical name
- `AttributeType` - Data type (money)
- `ControlType` - UI control type
- `RequiredLevel` - Validation requirement
- `SubmitMode` - When to submit (always/never/dirty)
- `IsValid` - Validation status
- `IsDirty` - Whether value has changed
- `Format` - Field format (none for money)
- `Min` - Minimum allowed value ⭐ Money-specific
- `Max` - Maximum allowed value ⭐ Money-specific
- `Precision` - Decimal places (typically 2 for currency) ⭐ Money-specific

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
**Purpose:** Check if the control is disabled (read-only)

**Expected Output:**
```
📋 Test 5: Get Control Disabled State
─────────────────────────────────────────────────────────
✓ Disabled: false
```

**What it tests:**
- `Disabled` property - whether control is editable

---

### Test 6: Get Control Label
**Purpose:** Retrieve the field label displayed to users

**Expected Output:**
```
📋 Test 6: Get Control Label
─────────────────────────────────────────────────────────
✓ Label: "Annual Revenue"
```

**What it tests:**
- `Label` property - display name of the field

---

### Test 7: Set Money Value (and restore)
**Purpose:** Programmatically change the money value and restore it

**Expected Output:**
```
📋 Test 7: Set Money Value (and restore)
─────────────────────────────────────────────────────────
  Original Value: $5,000,000.00
✓ New Value Set: $5,050,000.00
  ↩ Original value restored: $5,000,000.00
```

**What it tests:**
- Setting a new value using `moneyControl.Value = newValue`
- Value persists until changed or form is refreshed
- Visual feedback shows the field updating
- Automatic restoration after 2 seconds

**Visual Effect:**
- Revenue field value increases by $50,000
- Field highlights briefly to show change
- After 2 seconds, value returns to original

---

### Test 8: Test Min/Max Validation
**Purpose:** Display the allowed range for money values

**Expected Output:**
```
📋 Test 8: Test Min/Max Validation
─────────────────────────────────────────────────────────
✓ Min Value: -$100,000,000,000.00
✓ Max Value: $100,000,000,000.00
  ℹ Values below -$100,000,000,000.00 will be rejected
  ℹ Values above $100,000,000,000.00 will be rejected
```

**What it tests:**
- `Min` property - minimum allowed value
- `Max` property - maximum allowed value
- Currency formatting for large numbers
- Validation boundaries

---

### Test 9: Test Decimal Precision
**Purpose:** Test how money fields handle decimal places

**Expected Output:**
```
📋 Test 9: Test Decimal Precision
─────────────────────────────────────────────────────────
  Current Precision: 2 decimal places
  ℹ Attempting to set value with high precision: 123456.789
✓ Actual Value Set: $123,456.79
  ℹ Value rounded to 2 decimal places
  ↩ Original value restored: $5,000,000.00
```

**What it tests:**
- `Precision` property - number of decimal places
- Automatic rounding to currency precision
- Typically 2 decimal places for most currencies
- Value persistence after precision rounding

**Visual Effect:**
- Revenue field briefly shows $123,456.79
- After 2 seconds, original value restored

---

### Test 10: Test Notification Methods
**Purpose:** Display error/warning messages on the field

**Expected Output:**
```
📋 Test 10: Test Notification Methods
─────────────────────────────────────────────────────────
✓ Error notification set
  ↩ Notification cleared
```

**What it tests:**
- `SetNotification()` - adds error message below field
- `ClearNotification()` - removes the message
- Notification appears for 3 seconds

**Visual Effect:**
- Red error icon appears next to Revenue field
- Error message displays below the field
- After 3 seconds, notification disappears

---

### Test 11: Test SetFocus Method
**Purpose:** Programmatically move cursor to the money field

**Expected Output:**
```
📋 Test 11: Test SetFocus Method
─────────────────────────────────────────────────────────
ℹ Will set focus in 4 seconds...
✓ Focus set to Revenue field
```

**What it tests:**
- `Focus()` method - sets keyboard focus to the field
- Delayed execution (4 seconds after other tests)

**Visual Effect:**
- After 4 seconds, cursor moves to Revenue field
- Field becomes active and ready for input
- User can immediately type a new value

---

### Test 12: Test Visibility Toggle
**Purpose:** Hide and show the control dynamically

**Expected Output:**
```
📋 Test 12: Test Visibility Toggle
─────────────────────────────────────────────────────────
  Original Visibility: true
✓ Control hidden
  ↩ Visibility restored: true
```

**What it tests:**
- Setting `Visible = false` hides the field
- Setting `Visible = true` shows the field
- Automatic restoration after 2 seconds

**Visual Effect:**
- Revenue field disappears from header
- After 2 seconds, field reappears

---

### Test 13: Test Disabled Toggle
**Purpose:** Enable and disable the control dynamically

**Expected Output:**
```
📋 Test 13: Test Disabled Toggle
─────────────────────────────────────────────────────────
  Original Disabled State: false
✓ Control disabled
  ↩ Disabled state restored: false
```

**What it tests:**
- Setting `Disabled = true` makes field read-only
- Setting `Disabled = false` makes field editable
- Automatic restoration after 2 seconds

**Visual Effect:**
- Revenue field becomes grayed out
- User cannot edit the value
- After 2 seconds, field becomes editable again

---

### Test 14: Test Label Change
**Purpose:** Change the field label dynamically

**Expected Output:**
```
📋 Test 14: Test Label Change
─────────────────────────────────────────────────────────
  Original Label: "Annual Revenue"
✓ Label changed to: "Annual Revenue (TEST)"
  ↩ Label restored: "Annual Revenue"
```

**What it tests:**
- Setting `Label` property changes display name
- Automatic restoration after 2 seconds

**Visual Effect:**
- Field label changes to include "(TEST)"
- After 2 seconds, label returns to original

---

### Test 15: Test Null/Zero Handling
**Purpose:** Test clearing the field vs setting to zero

**Expected Output:**
```
📋 Test 15: Test Null/Zero Handling
─────────────────────────────────────────────────────────
  Original Value: $5,000,000.00
✓ Value set to: $0.00
  Current Value: $0.00
✓ Value set to: null (cleared)
  Current Value: null
  ↩ Original value restored: $5,000,000.00
```

**What it tests:**
- Setting value to `0` - explicitly zero revenue
- Setting value to `null` - clears/empties the field
- Important distinction for money fields
- Three-state value: null (no value), 0 (zero amount), positive/negative

**Visual Effect:**
- First 2 seconds: Field shows $0.00
- Next 2 seconds: Field is empty
- Final: Original value restored

---

### Test 16: Test Negative Values
**Purpose:** Test if the field accepts negative amounts

**Expected Output:**
```
📋 Test 16: Test Negative Values
─────────────────────────────────────────────────────────
✓ Negative value set: -$25,000.00
  Current Value: -$25,000.00
  ℹ Some money fields may allow negative values (debts, losses)
  ↩ Original value restored: $5,000,000.00
```

**What it tests:**
- Setting negative values for money fields
- Useful for fields representing debts, losses, or refunds
- Validation may reject negatives depending on Min value
- Currency formatting for negative amounts

**Visual Effect:**
- Revenue field briefly shows -$25,000.00
- Value may appear in red (depending on form theme)
- After 2 seconds, original value restored

---

## Deployment Instructions

### 1. Update Account.js Code
Ensure the `testMoney()` function is called in `UiAddLoaded`:

```javascript
async function UiAddLoaded(executionContext) {
    //await testRetrieveRecord();
    //await testRetrieveRecords();
    //await testLookup();         // ✅ Complete - 15 tests
    //await testString();         // ✅ Complete - 12 tests
    //await testInteger();        // ✅ Complete - 15 tests
    await testMoney();            // ✅ Complete - 16 tests (ACTIVE)
}
```

### 2. Ensure Field is on Form
**Important:** The `Revenue` field must be in the **Header** section of the Account form:
1. Go to **Settings** → **Customizations** → **Entities** → **Account** → **Forms**
2. Open the **Account** main form
3. If `Revenue` is not visible in the Header, add it from the field explorer to the **Header** section
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
║        TESTING MONEY CONTROL: Revenue                          ║
║        (Located in Header section)                             ║
╚════════════════════════════════════════════════════════════════╝

📋 Test 1: Get Money Value
─────────────────────────────────────────────────────────
✓ Current Value: 5000000
  Type: number
  Is Number: true
  Formatted: $5,000,000.00

📋 Test 2: Get Control and Attribute Names
─────────────────────────────────────────────────────────
✓ Control Name: revenue
✓ Attribute Name: revenue
  (Both should be: 'revenue')

📋 Test 3: Get Attribute Properties
─────────────────────────────────────────────────────────
✓ Attribute Name: revenue
  Attribute Type: money
  Control Type: standard
  Required Level: none
  Submit Mode: dirty
  Is Valid: true
  Is Dirty: false
  Format: none
  Min Value: -100000000000
  Max Value: 100000000000
  Precision: 2

📋 Test 4: Get Control Visibility
─────────────────────────────────────────────────────────
✓ Visible: true

📋 Test 5: Get Control Disabled State
─────────────────────────────────────────────────────────
✓ Disabled: false

📋 Test 6: Get Control Label
─────────────────────────────────────────────────────────
✓ Label: "Annual Revenue"

📋 Test 7: Set Money Value (and restore)
─────────────────────────────────────────────────────────
  Original Value: $5,000,000.00
✓ New Value Set: $5,050,000.00
  ↩ Original value restored: $5,000,000.00

📋 Test 8: Test Min/Max Validation
─────────────────────────────────────────────────────────
✓ Min Value: -$100,000,000,000.00
✓ Max Value: $100,000,000,000.00
  ℹ Values below -$100,000,000,000.00 will be rejected
  ℹ Values above $100,000,000,000.00 will be rejected

📋 Test 9: Test Decimal Precision
─────────────────────────────────────────────────────────
  Current Precision: 2 decimal places
  ℹ Attempting to set value with high precision: 123456.789
✓ Actual Value Set: $123,456.79
  ℹ Value rounded to 2 decimal places
  ↩ Original value restored: $5,000,000.00

📋 Test 10: Test Notification Methods
─────────────────────────────────────────────────────────
✓ Error notification set
  ↩ Notification cleared

📋 Test 11: Test SetFocus Method
─────────────────────────────────────────────────────────
ℹ Will set focus in 4 seconds...
✓ Focus set to Revenue field

📋 Test 12: Test Visibility Toggle
─────────────────────────────────────────────────────────
  Original Visibility: true
✓ Control hidden
  ↩ Visibility restored: true

📋 Test 13: Test Disabled Toggle
─────────────────────────────────────────────────────────
  Original Disabled State: false
✓ Control disabled
  ↩ Disabled state restored: false

📋 Test 14: Test Label Change
─────────────────────────────────────────────────────────
  Original Label: "Annual Revenue"
✓ Label changed to: "Annual Revenue (TEST)"
  ↩ Label restored: "Annual Revenue"

📋 Test 15: Test Null/Zero Handling
─────────────────────────────────────────────────────────
  Original Value: $5,000,000.00
✓ Value set to: $0.00
  Current Value: $0.00
✓ Value set to: null (cleared)
  Current Value: null
  ↩ Original value restored: $5,000,000.00

📋 Test 16: Test Negative Values
─────────────────────────────────────────────────────────
✓ Negative value set: -$25,000.00
  Current Value: -$25,000.00
  ℹ Some money fields may allow negative values (debts, losses)
  ↩ Original value restored: $5,000,000.00

╔════════════════════════════════════════════════════════════════╗
║           MONEY CONTROL TESTS COMPLETED                        ║
╚════════════════════════════════════════════════════════════════╝
```

---

## Test Timeline

The tests run sequentially with timed delays for visual effects:
- **0-2 seconds:** Tests 1-6 display immediately
- **2 seconds:** Test 7 value change, then restore
- **2-4 seconds:** Tests 8-9 complete
- **3 seconds:** Test 10 notification, then clear
- **4 seconds:** Test 11 focus set
- **4-6 seconds:** Test 12 visibility toggle
- **6-8 seconds:** Test 13 disabled toggle
- **8-10 seconds:** Test 14 label change
- **10-14 seconds:** Test 15 null/zero handling (4 seconds total)
- **14-16 seconds:** Test 16 negative values
- **Total Duration:** ~16-18 seconds

---

## Troubleshooting

### Issue: "Cannot read property 'Value' of undefined"
- **Cause:** Revenue field is not in the Header section of the form
- **Solution:** Add the Revenue field to the **Header** section of the Account form (not the Body)

### Issue: Tests run but values don't change visually
- **Cause:** Form may be in read-only mode or field is locked
- **Solution:** Ensure you're editing an existing record with edit permissions

### Issue: Precision test shows unexpected decimal places
- **Cause:** Currency settings may override default precision
- **Solution:** Check organization currency settings in **Settings** → **Business Management** → **Currencies**

### Issue: Min/Max values show "No limit"
- **Cause:** Field configuration doesn't have validation rules
- **Solution:** This is normal - not all fields have min/max constraints

---

## Money vs Integer vs Decimal Comparison

| Feature | Money | Integer | Decimal |
|---------|-------|---------|---------|
| **Data Type** | Currency | Whole Number | Floating Point |
| **Decimal Places** | 2 (typically) | 0 | 0-10 configurable |
| **Currency Symbol** | Yes ($, €, etc.) | No | No |
| **Formatting** | $1,234.56 | 1,234 | 1,234.5678 |
| **Negative Values** | Allowed | Allowed | Allowed |
| **Min/Max** | ±100 billion | Configurable | Configurable |
| **Use Cases** | Revenue, prices, salaries | Employee count, quantities | Percentages, ratios, measurements |
| **Precision** | 2 fixed | 0 fixed | Variable (0-10) |
| **Exchange Rates** | Yes (multi-currency) | No | No |

---

## Money-Specific Features

### 1. **Currency Formatting**
Money controls automatically format values with:
- Currency symbol ($, €, £, etc.)
- Thousand separators (commas)
- Fixed decimal places (typically 2)
- Negative amount indicators

### 2. **Multi-Currency Support**
If your organization uses multiple currencies:
- Money fields store value in base currency
- Display value in transaction currency
- Automatic exchange rate conversion
- `Revenue_Base` field shows base currency equivalent

### 3. **Precision Control**
- Money fields typically use 2 decimal places
- Cannot be changed (follows currency standards)
- Values automatically rounded to 2 decimals
- Different from Decimal fields with variable precision

### 4. **Value Ranges**
- Default: -100,000,000,000 to 100,000,000,000
- Can be customized via field properties
- Min value can be 0 to prevent negatives
- Useful for fields like "Credit Limit" (no negatives)

---

## API Reference

### Properties (IControlNumber Interface)

| Property | Type | Access | Description |
|----------|------|--------|-------------|
| `Value` | `number` | Get/Set | Current money value (raw number) |
| `Min` | `number` | Read | Minimum allowed value |
| `Max` | `number` | Read | Maximum allowed value |
| `Precision` | `number` | Get/Set | Decimal places (typically 2) |
| `AttributeName` | `string` | Read | Logical field name |
| `AttributeType` | `string` | Read | Returns "money" |
| `ControlName` | `string` | Read | Control identifier |
| `ControlType` | `string` | Read | Returns "standard" |
| `Disabled` | `boolean` | Get/Set | Read-only state |
| `Format` | `string` | Read | Format type (typically "none") |
| `IsValid` | `boolean` | Read | Validation status |
| `IsDirty` | `boolean` | Read | Modified state |
| `Label` | `string` | Get/Set | Display label |
| `RequiredLevel` | `string` | Get/Set | Required/optional/recommended |
| `SubmitMode` | `string` | Get/Set | When to submit changes |
| `Visible` | `boolean` | Get/Set | Visibility state |

### Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `Focus()` | None | Sets focus to the field |
| `SetNotification(message, id)` | `string`, `string` | Displays error message |
| `ClearNotification(id)` | `string` | Removes error message |

---

## Related Fields

### Other Money Fields on Account Entity:
1. ✅ **Revenue** - Annual revenue (Header) - Current test
2. **CreditLimit** - Credit limit amount
3. **MarketCap** - Market capitalization

### Field Type Progression:
1. ✅ **Lookup** - PrimaryContactId (Completed - 15 tests)
2. ✅ **String** - Name (Completed - 12 tests)
3. ✅ **Integer** - NumberOfEmployees (Completed - 15 tests)
4. ✅ **Money** - Revenue (Completed - 16 tests)
5. ⏳ **Decimal** - Pending
6. ⏳ **OptionSet** - Pending
7. ⏳ **Boolean** - Pending
8. ⏳ **DateTime** - Pending
9. ⏳ **Memo** - Pending

---

## Next Steps

After completing Money control tests, continue with:
1. **Decimal Control** - Test a decimal field (e.g., custom field)
2. **OptionSet Control** - Test dropdown fields
3. **Boolean Control** - Test yes/no fields
4. **DateTime Control** - Test date/time fields
5. **Memo Control** - Test multi-line text fields

---

## Summary

✅ **16 comprehensive tests** covering all Money control capabilities
✅ **Currency formatting** demonstrations with thousand separators
✅ **Precision handling** for decimal places
✅ **Min/Max validation** for value ranges
✅ **Negative values** support
✅ **Null vs Zero** distinction for empty vs zero amounts
✅ **Located in Header** section (top of form)
✅ **All tests use correct API** from IControlNumber interface
✅ **No TypeScript warnings** - proper types used

The Money control is perfect for currency fields like Revenue, Credit Limit, and Market Capitalization!
