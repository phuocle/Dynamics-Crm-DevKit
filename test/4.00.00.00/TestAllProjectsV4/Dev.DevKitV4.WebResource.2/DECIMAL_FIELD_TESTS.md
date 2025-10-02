# Decimal Control Tests - v4_Decimal Field

## Overview
Comprehensive test suite for **Decimal number controls** in Dynamics 365. This document covers all 21 tests for the `v4_Decimal` field, demonstrating decimal number operations, precision control, and UI interactions.

**Control Type:** `DevKit.Controls.Decimal` (extends `IControlNumber`)
**Field Name:** `v4_Decimal`
**Form Location:** Body
**Value Type:** `number | null`
**Total Tests:** 21

---

## Test Summary

### 1. Get Decimal Value
**Purpose:** Retrieve the current decimal value from the field
**Method:** `decimalControl.Value`

**Expected Output:**
```
Test 1: Get Decimal Value
  ✓ Current Decimal Value: 123.45
  ℹ Type: number, Is null: false
```

**Notes:**
- Returns `number` if value exists
- Returns `null` if field is empty
- Precision depends on field configuration

---

### 2. Get Control and Attribute Names
**Purpose:** Retrieve unique identifiers for the control and attribute
**Methods:** `decimalControl.ControlName`, `decimalControl.AttributeName`

**Expected Output:**
```
Test 2: Get Control and Attribute Names
  ✓ Control Name: v4_Decimal
  ✓ Attribute Name: v4_decimal
```

**Notes:**
- ControlName: Used in form scripts
- AttributeName: Schema name (lowercase)

---

### 3. Get Precision (Decimal Places)
**Purpose:** Get the number of decimal places allowed
**Method:** `decimalControl.Precision`

**Expected Output:**
```
Test 3: Get Precision (Decimal Places)
  ✓ Decimal Precision: 2 decimal places
  ℹ This determines how many digits can appear after the decimal point
```

**Notes:**
- Common precisions: 0-10 decimal places
- Decimal type typically allows up to 10 precision
- Values are rounded to fit precision

---

### 4. Get Min and Max Values
**Purpose:** Retrieve the allowed value range
**Methods:** `decimalControl.Min`, `decimalControl.Max`

**Expected Output:**
```
Test 4: Get Min and Max Values
  ✓ Minimum Value: -100000000000
  ✓ Maximum Value: 100000000000
  ℹ Valid range: -100000000000 to 100000000000
```

**Notes:**
- Default range: -100,000,000,000 to 100,000,000,000
- Can be customized per field
- Validation occurs on save

---

### 5. Get Control Type
**Purpose:** Identify the control type
**Method:** `decimalControl.ControlType`

**Expected Output:**
```
Test 5: Get Control Type
  ✓ Control Type: standard
```

**Possible Values:**
- `"standard"` - Regular decimal input
- Can vary by customization

---

### 6. Get Attribute Type
**Purpose:** Get the underlying data type
**Method:** `decimalControl.AttributeType`

**Expected Output:**
```
Test 6: Get Attribute Type
  ✓ Attribute Type: decimal
```

**Notes:**
- Always returns `"decimal"` for decimal fields
- Different from "double" (float) type

---

### 7. Get Format
**Purpose:** Retrieve the display format
**Method:** `decimalControl.Format`

**Expected Output:**
```
Test 7: Get Format
  ✓ Format: none
```

**Possible Values:**
- `"none"` - No special formatting
- Format can be customized

---

### 8. Get IsDirty Status
**Purpose:** Check if field has unsaved changes
**Method:** `decimalControl.IsDirty`

**Expected Output:**
```
Test 8: Get IsDirty Status
  ✓ Is Dirty: false
  ℹ Indicates if the field value has been modified
```

**Notes:**
- `true` = Modified but not saved
- `false` = No changes or already saved
- Resets after form save

---

### 9. Get Visibility Status
**Purpose:** Check if control is visible
**Method:** `decimalControl.Visible`

**Expected Output:**
```
Test 9: Get Visibility Status
  ✓ Is Visible: true
```

---

### 10. Get Disabled Status
**Purpose:** Check if control is disabled
**Method:** `decimalControl.Disabled`

**Expected Output:**
```
Test 10: Get Disabled Status
  ✓ Is Disabled: false
```

---

### 11. Get Label
**Purpose:** Retrieve the field label
**Method:** `decimalControl.Label`

**Expected Output:**
```
Test 11: Get Label
  ✓ Label: "v4_Decimal"
```

**Notes:**
- Can be customized in form editor
- Supports localization

---

### 12. Set Decimal Value with Precision
**Purpose:** Set a decimal value and observe precision rounding
**Method:** `decimalControl.Value = 123.456789`

**Expected Output:**
```
Test 12: Set Decimal Value with Precision
  ℹ Original value: null
  ✓ Set decimal value to: 123.456789
  ⚡ Stored value (after precision applied): 123.46
  ℹ Note: Value is rounded based on field precision
```

**Notes:**
- Value is automatically rounded to field precision
- If precision = 2, value 123.456789 becomes 123.46
- Rounding follows standard mathematical rules

---

### 13. Set Negative Decimal Value
**Purpose:** Test negative number handling
**Method:** `decimalControl.Value = -99.99`

**Expected Output:**
```
Test 13: Set Negative Decimal Value
  ✓ Set negative decimal value to: -99.99
  ⚡ Current value: -99.99
```

**Notes:**
- Negative values allowed by default
- Can be restricted via Min value setting
- Common for debts, losses, temperature

---

### 14. Set Zero Value
**Purpose:** Test zero value assignment
**Method:** `decimalControl.Value = 0`

**Expected Output:**
```
Test 14: Set Zero Value
  ✓ Set decimal value to: 0
  ⚡ Current value: 0
```

**Notes:**
- Zero is a valid decimal value
- Different from null (empty)
- Useful for resetting counters

---

### 15. Clear Value (Set to Null)
**Purpose:** Clear the field value
**Method:** `decimalControl.Value = null`

**Expected Output:**
```
Test 15: Clear Value (Set to Null)
  ✓ Cleared decimal value (set to null)
  ⚡ Current value: null
```

**Notes:**
- Sets field to empty/blank state
- Different from zero
- May trigger validation if field is required

---

### 16. Set Precision (Dynamic Change)
**Purpose:** Demonstrate dynamic precision changes
**Methods:** `decimalControl.Precision = 2`, `decimalControl.Precision = 4`

**Expected Output:**
```
Test 16: Set Precision (Dynamic Change)
  ℹ Original precision: 2
  ℹ Set value to: 123.456789
  ✓ Changed precision to: 2 decimal places
  ⚡ Value with 2 decimals: 123.46
  ✓ Changed precision to: 4 decimal places
  ⚡ Value with 4 decimals: 123.4568
  ↩ Precision restored to: 2
```

**Notes:**
- Precision can be changed dynamically at runtime
- Existing values are rounded to new precision
- Use cases: Conditional precision based on business rules

---

### 17. Add Notification
**Purpose:** Display error/warning notification on the field
**Method:** `decimalControl.AddNotification()`

**Expected Output:**
```
Test 17: Add Notification
  ✓ Error notification added to decimal field
  ℹ Check the UI for red 'X' icon next to the field
  ↩ Notification cleared (after 3 seconds)
```

**Notification Object:**
```javascript
{
    messages: ["Please enter a valid decimal number"],
    notificationLevel: OptionSet.FieldNotificationLevel.Error,
    uniqueId: "decimal_error_notification"
}
```

**Notes:**
- Red 'X' icon for errors
- 'i' icon for recommendations
- Use `ClearNotification(uniqueId)` to remove

---

### 18. Set Focus
**Purpose:** Programmatically focus on the decimal field
**Method:** `decimalControl.Focus()`

**Expected Output:**
```
Test 18: Set Focus
  ✓ Focus set on decimal field
  ℹ The decimal field should be highlighted/active
```

**Notes:**
- Moves cursor to the field
- Useful for guiding user input
- Executed after 3.5 second delay

---

### 19. Toggle Visibility
**Purpose:** Show and hide the control dynamically
**Methods:** `decimalControl.Visible = false`, `decimalControl.Visible = true`

**Expected Output:**
```
Test 19: Toggle Visibility
  ✓ Decimal field hidden (after 4 seconds)
  ✓ Decimal field shown again (after 5 seconds)
```

**Notes:**
- Hidden fields don't submit values
- Use for conditional field display
- Affects form layout

---

### 20. Toggle Disabled State
**Purpose:** Enable and disable the control
**Methods:** `decimalControl.Disabled = true`, `decimalControl.Disabled = false`

**Expected Output:**
```
Test 20: Toggle Disabled State
  ✓ Decimal field disabled (after 5.5 seconds)
  ✓ Decimal field enabled again (after 6.5 seconds)
```

**Notes:**
- Disabled fields are visible but not editable
- Values are still submitted when disabled
- Common for read-only calculated fields

---

### 21. Change Label
**Purpose:** Dynamically update the field label
**Method:** `decimalControl.Label = "Modified Decimal Label"`

**Expected Output:**
```
Test 21: Change Label
  ℹ Original label: "v4_Decimal"
  ✓ Label changed to: "Modified Decimal Label" (after 7 seconds)
  ↩ Label restored to: "v4_Decimal" (after 8 seconds)
```

**Notes:**
- Label changes are client-side only
- Useful for dynamic forms
- Reset on page refresh

---

## API Reference

### IControlNumber Interface
```typescript
interface IControlNumber extends IControl {
    // Value Properties
    Value: number;                    // Get/Set the numeric value
    readonly Max: number;             // Maximum allowed value
    readonly Min: number;             // Minimum allowed value
    Precision: number;                // Decimal places (get/set)

    // Control Properties
    readonly ControlName: string;     // Control identifier
    readonly AttributeName: string;   // Attribute schema name
    readonly ControlType: string;     // Control type
    readonly AttributeType: string;   // Data type
    readonly Format: string;          // Display format
    readonly IsDirty: boolean;        // Has unsaved changes

    // UI Properties
    Visible: boolean;                 // Show/hide control
    Disabled: boolean;                // Enable/disable control
    Label: string;                    // Field label (get/set)

    // Methods
    Focus(): void;                    // Set focus
    AddNotification(notification: FieldNotification): void;
    ClearNotification(uniqueId: string): boolean;
    AddOnChange(callback: Function): void;
    RemoveOnChange(callback: Function): void;
}
```

---

## Decimal vs Integer vs Float Comparison

| Feature | Decimal | Integer | Float (Double) |
|---------|---------|---------|----------------|
| **Type** | Fixed-point | Whole number | Floating-point |
| **Precision** | 0-10 places | 0 (none) | 0-5 places |
| **Range** | ±100 billion | ±2.1 billion | ±100 billion |
| **Best For** | Financial calculations | Counts, IDs | Scientific values |
| **Accuracy** | Exact | Exact | Approximate |
| **Storage** | 8 bytes | 4 bytes | 8 bytes |
| **Example** | $123.45 | 42 items | 3.14159 (Pi) |

---

## Common Use Cases

### 1. Financial Amounts
```javascript
// Set product price with 2 decimal places
decimalControl.Precision = 2;
decimalControl.Value = 19.99;
```

### 2. Measurements
```javascript
// Store length in meters with 3 decimal places
decimalControl.Precision = 3;
decimalControl.Value = 12.456;
```

### 3. Percentages
```javascript
// Store interest rate with 4 decimal places
decimalControl.Precision = 4;
decimalControl.Value = 3.7500; // 3.75%
```

### 4. Conditional Precision
```javascript
// Adjust precision based on business rules
if (needHighPrecision) {
    decimalControl.Precision = 6;
} else {
    decimalControl.Precision = 2;
}
```

### 5. Validation with Notifications
```javascript
const value = decimalControl.Value;
if (value !== null && value < 0) {
    decimalControl.AddNotification({
        messages: ["Value must be positive"],
        notificationLevel: OptionSet.FieldNotificationLevel.Error,
        uniqueId: "decimal_negative_error"
    });
}
```

---

## Key Differences: Decimal vs Float

| Aspect | Decimal | Float (Double) |
|--------|---------|----------------|
| **Precision Type** | Fixed-point | Floating-point |
| **Rounding** | Exact decimal rounding | Binary approximation |
| **Max Precision** | 10 decimal places | 5 decimal places |
| **Storage Format** | Base-10 | Base-2 (binary) |
| **Financial Use** | ✅ Recommended | ❌ Not recommended |
| **Scientific Use** | ✅ Acceptable | ✅ Preferred |
| **0.1 + 0.2** | Exactly 0.3 | ~0.30000000004 |

**When to use Decimal:**
- ✅ Money calculations
- ✅ Financial reporting
- ✅ Pricing
- ✅ Tax calculations
- ✅ When exact precision matters

**When to use Float:**
- ✅ Scientific measurements
- ✅ Physics calculations
- ✅ Geographic coordinates
- ✅ Statistical data
- ✅ When approximate values acceptable

---

## Test Execution Timeline

```
t=0s     : Tests 1-11 (Immediate)
t=3.0s   : Notification cleared
t=3.5s   : Focus set
t=4.0s   : Field hidden
t=5.0s   : Field shown
t=5.5s   : Field disabled
t=6.5s   : Field enabled
t=7.0s   : Label changed
t=8.0s   : Label restored
Total    : ~8 seconds
```

---

## Troubleshooting

### Issue: Value Not Rounded Correctly
**Problem:** Set value to 123.456 with precision 2, but shows 123.45 instead of expected rounding
**Solution:** Decimal uses banker's rounding (round half to even). This is correct behavior.

### Issue: Cannot Set Null Value
**Problem:** TypeScript error when setting value to null
**Solution:** Use type assertion: `decimalControl.Value = /** @type {any} */ (null);`

### Issue: Precision Change Not Reflected
**Problem:** Changed precision but existing value doesn't update
**Solution:** Re-set the value after changing precision:
```javascript
const currentValue = decimalControl.Value;
decimalControl.Precision = 4;
decimalControl.Value = currentValue; // Force re-evaluation
```

### Issue: Validation Not Working
**Problem:** Set value outside Min/Max range but no error
**Solution:** Client-side doesn't enforce Min/Max. Validation occurs on form save.

---

## Best Practices

1. **Use Decimal for Money:** Always use Decimal type for financial calculations
2. **Set Appropriate Precision:** Match precision to business requirements (usually 2 for currency)
3. **Validate Ranges:** Implement client-side validation for better UX
4. **Handle Null Values:** Check for null before calculations
5. **Clear Notifications:** Always clear notifications after resolution
6. **Document Precision:** Comment why specific precision is chosen

---

## Related Documentation

- [Integer Control Tests](INTEGER_FIELD_TESTS.md)
- [Money Control Tests](MONEY_FIELD_TESTS.md)
- [Float Control Tests](FLOAT_FIELD_TESTS.md)
- [Field Tests Progress](FIELD_TESTS_PROGRESS.md)

---

## Summary

The Decimal control provides **exact fixed-point arithmetic** ideal for financial and monetary calculations. With configurable precision (0-10 decimal places) and a wide value range, it ensures accurate representation of decimal values without floating-point approximation errors. The 21 comprehensive tests demonstrate all aspects of decimal number handling, from basic value operations to dynamic precision control and UI interactions.

**Key Takeaways:**
- ✅ Exact decimal arithmetic (no floating-point errors)
- ✅ Configurable precision (0-10 places)
- ✅ Wide range: ±100 billion
- ✅ Perfect for financial calculations
- ✅ Dynamic precision control at runtime

---

**Test Implementation:** `Account.js` (Lines ~1947-2235)
**Form Location:** Body section
**Total Tests:** 21
**Execution Time:** ~8 seconds
**Status:** ✅ Complete
