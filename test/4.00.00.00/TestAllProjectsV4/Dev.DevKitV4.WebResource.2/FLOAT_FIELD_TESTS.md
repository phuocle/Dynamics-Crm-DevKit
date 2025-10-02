# Float (Double) Control Tests - v4_Float Field

## Overview
Comprehensive test suite for **Float (Double) number controls** in Dynamics 365. This document covers all 23 tests for the `v4_Float` field, demonstrating floating-point number operations, scientific notation, and high-precision calculations.

**Control Type:** `DevKit.Controls.Double` (extends `IControlNumber`)
**Field Name:** `v4_Float`
**Form Location:** Body
**Value Type:** `number | null`
**Total Tests:** 23

---

## Test Summary

### 1. Get Float Value
**Purpose:** Retrieve the current float value from the field
**Method:** `floatControl.Value`

**Expected Output:**
```
Test 1: Get Float Value
  ✓ Current Float Value: 3.14159
  ℹ Type: number, Is null: false
```

**Notes:**
- Returns `number` if value exists
- Returns `null` if field is empty
- Supports up to 5 decimal places precision

---

### 2. Get Control and Attribute Names
**Purpose:** Retrieve unique identifiers for the control and attribute
**Methods:** `floatControl.ControlName`, `floatControl.AttributeName`

**Expected Output:**
```
Test 2: Get Control and Attribute Names
  ✓ Control Name: v4_Float
  ✓ Attribute Name: v4_float
```

**Notes:**
- ControlName: Used in form scripts
- AttributeName: Schema name (lowercase)

---

### 3. Get Precision (Decimal Places)
**Purpose:** Get the number of decimal places allowed
**Method:** `floatControl.Precision`

**Expected Output:**
```
Test 3: Get Precision (Decimal Places)
  ✓ Float Precision: 5 decimal places
  ℹ Float/Double typically allows up to 5 decimal places
```

**Notes:**
- Float/Double precision: 0-5 decimal places
- Lower than Decimal (max 10)
- Sufficient for most scientific calculations

---

### 4. Get Min and Max Values
**Purpose:** Retrieve the allowed value range
**Methods:** `floatControl.Min`, `floatControl.Max`

**Expected Output:**
```
Test 4: Get Min and Max Values
  ✓ Minimum Value: -100000000000
  ✓ Maximum Value: 100000000000
  ℹ Valid range: -100000000000 to 100000000000
```

**Notes:**
- Default range: -100 billion to +100 billion
- Can be customized per field
- Validation occurs on save

---

### 5. Get Control Type
**Purpose:** Identify the control type
**Method:** `floatControl.ControlType`

**Expected Output:**
```
Test 5: Get Control Type
  ✓ Control Type: standard
```

**Possible Values:**
- `"standard"` - Regular float input
- Can vary by customization

---

### 6. Get Attribute Type
**Purpose:** Get the underlying data type
**Method:** `floatControl.AttributeType`

**Expected Output:**
```
Test 6: Get Attribute Type
  ✓ Attribute Type: double
```

**Notes:**
- Returns `"double"` for float fields
- Different from "decimal" type
- Double-precision floating-point

---

### 7. Get Format
**Purpose:** Retrieve the display format
**Method:** `floatControl.Format`

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
**Method:** `floatControl.IsDirty`

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
**Method:** `floatControl.Visible`

**Expected Output:**
```
Test 9: Get Visibility Status
  ✓ Is Visible: true
```

---

### 10. Get Disabled Status
**Purpose:** Check if control is disabled
**Method:** `floatControl.Disabled`

**Expected Output:**
```
Test 10: Get Disabled Status
  ✓ Is Disabled: false
```

---

### 11. Get Label
**Purpose:** Retrieve the field label
**Method:** `floatControl.Label`

**Expected Output:**
```
Test 11: Get Label
  ✓ Label: "v4_Float"
```

**Notes:**
- Can be customized in form editor
- Supports localization

---

### 12. Set Float Value with High Precision
**Purpose:** Set a high-precision float value (Pi)
**Method:** `floatControl.Value = 3.14159265358979`

**Expected Output:**
```
Test 12: Set Float Value with High Precision
  ℹ Original value: null
  ✓ Set float value to: 3.14159265358979 (Pi)
  ⚡ Stored value: 3.14159
  ℹ Note: Float maintains precision up to 5 decimal places
```

**Notes:**
- Values truncated/rounded to 5 decimal places
- No rounding for values within precision
- Ideal for mathematical constants

---

### 13. Set Scientific Notation Value
**Purpose:** Test scientific notation input
**Method:** `floatControl.Value = 1.23e-4`

**Expected Output:**
```
Test 13: Set Scientific Notation Value
  ✓ Set scientific notation value: 1.23e-4
  ⚡ Current value: 0.000123
  ℹ Equivalent to: 0.000123
```

**Notes:**
- Supports standard scientific notation
- `1.23e-4` = 1.23 × 10⁻⁴ = 0.000123
- Useful for very small/large numbers
- Common in scientific calculations

**More Examples:**
- `1e3` = 1000
- `5.67e-8` = 0.0000000567
- `9.8e1` = 98

---

### 14. Set Large Float Value
**Purpose:** Test handling of large numbers
**Method:** `floatControl.Value = 9999999.99999`

**Expected Output:**
```
Test 14: Set Large Float Value
  ✓ Set large float value to: 9999999.99999
  ⚡ Current value: 9999999.99999
```

**Notes:**
- Can handle millions/billions
- Maintains precision within 5 decimal places
- Watch for overflow at extreme values

---

### 15. Set Negative Float Value
**Purpose:** Test negative number handling
**Method:** `floatControl.Value = -273.15`

**Expected Output:**
```
Test 15: Set Negative Float Value
  ✓ Set negative float value to: -273.15 (absolute zero in Celsius)
  ⚡ Current value: -273.15
```

**Notes:**
- Negative values fully supported
- Can be restricted via Min value
- Common for temperatures, coordinates

---

### 16. Set Zero Value
**Purpose:** Test zero value assignment
**Method:** `floatControl.Value = 0.0`

**Expected Output:**
```
Test 16: Set Zero Value
  ✓ Set float value to: 0.0
  ⚡ Current value: 0
```

**Notes:**
- Zero is a valid float value
- Different from null (empty)
- `0.0` displays as `0`

---

### 17. Clear Value (Set to Null)
**Purpose:** Clear the field value
**Method:** `floatControl.Value = null`

**Expected Output:**
```
Test 17: Clear Value (Set to Null)
  ✓ Cleared float value (set to null)
  ⚡ Current value: null
```

**Notes:**
- Sets field to empty/blank state
- Different from zero
- May trigger validation if required

---

### 18. Set Precision (Dynamic Change)
**Purpose:** Demonstrate dynamic precision changes
**Methods:** `floatControl.Precision = 2`, `floatControl.Precision = 5`

**Expected Output:**
```
Test 18: Set Precision (Dynamic Change)
  ℹ Original precision: 5
  ℹ Set value to: 123.456789
  ✓ Changed precision to: 2 decimal places
  ⚡ Value with 2 decimals: 123.46
  ✓ Changed precision to: 5 decimal places
  ⚡ Value with 5 decimals: 123.45679
  ↩ Precision restored to: 5
```

**Notes:**
- Precision adjustable from 0-5
- Values rounded to new precision
- Use cases: Conditional display precision

---

### 19. Add Notification
**Purpose:** Display error/warning notification on the field
**Method:** `floatControl.AddNotification()`

**Expected Output:**
```
Test 19: Add Notification
  ✓ Error notification added to float field
  ℹ Check the UI for red 'X' icon next to the field
  ↩ Notification cleared (after 3 seconds)
```

**Notification Object:**
```javascript
{
    messages: ["Please enter a valid floating-point number"],
    notificationLevel: OptionSet.FieldNotificationLevel.Error,
    uniqueId: "float_error_notification"
}
```

**Notes:**
- Red 'X' icon for errors
- 'i' icon for recommendations
- Use `ClearNotification(uniqueId)` to remove

---

### 20. Set Focus
**Purpose:** Programmatically focus on the float field
**Method:** `floatControl.Focus()`

**Expected Output:**
```
Test 20: Set Focus
  ✓ Focus set on float field
  ℹ The float field should be highlighted/active
```

**Notes:**
- Moves cursor to the field
- Useful for guiding user input
- Executed after 3.5 second delay

---

### 21. Toggle Visibility
**Purpose:** Show and hide the control dynamically
**Methods:** `floatControl.Visible = false`, `floatControl.Visible = true`

**Expected Output:**
```
Test 21: Toggle Visibility
  ✓ Float field hidden (after 4 seconds)
  ✓ Float field shown again (after 5 seconds)
```

**Notes:**
- Hidden fields don't submit values
- Use for conditional field display
- Affects form layout

---

### 22. Toggle Disabled State
**Purpose:** Enable and disable the control
**Methods:** `floatControl.Disabled = true`, `floatControl.Disabled = false`

**Expected Output:**
```
Test 22: Toggle Disabled State
  ✓ Float field disabled (after 5.5 seconds)
  ✓ Float field enabled again (after 6.5 seconds)
```

**Notes:**
- Disabled fields are visible but not editable
- Values are still submitted when disabled
- Common for calculated fields

---

### 23. Change Label
**Purpose:** Dynamically update the field label
**Method:** `floatControl.Label = "Modified Float Label"`

**Expected Output:**
```
Test 23: Change Label
  ℹ Original label: "v4_Float"
  ✓ Label changed to: "Modified Float Label" (after 7 seconds)
  ↩ Label restored to: "v4_Float" (after 8 seconds)
```

**Notes:**
- Label changes are client-side only
- Useful for dynamic forms
- Reset on page refresh

---

## API Reference

### IControlNumber Interface (Float/Double)
```typescript
interface Double extends IControlNumber {
    // Inherits all IControlNumber properties and methods
}

interface IControlNumber extends IControl {
    // Value Properties
    Value: number;                    // Get/Set the numeric value
    readonly Max: number;             // Maximum allowed value
    readonly Min: number;             // Minimum allowed value
    Precision: number;                // Decimal places (0-5 for Float)

    // Control Properties
    readonly ControlName: string;     // Control identifier
    readonly AttributeName: string;   // Attribute schema name
    readonly ControlType: string;     // Control type
    readonly AttributeType: string;   // Data type ("double")
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

## Float vs Decimal vs Integer Comparison

| Feature | Float (Double) | Decimal | Integer |
|---------|----------------|---------|---------|
| **Type** | Floating-point | Fixed-point | Whole number |
| **Precision** | 0-5 places | 0-10 places | 0 (none) |
| **Range** | ±100 billion | ±100 billion | ±2.1 billion |
| **Storage** | 8 bytes | 8 bytes | 4 bytes |
| **Accuracy** | Approximate (binary) | Exact (decimal) | Exact |
| **Best For** | Scientific values | Financial calculations | Counts, IDs |
| **0.1 + 0.2** | ~0.30000000004 | Exactly 0.3 | N/A |
| **Scientific Notation** | ✅ Yes | ❌ No | ❌ No |
| **Example** | 3.14159 (Pi) | $123.45 | 42 items |

---

## Scientific Notation Examples

Float controls support scientific notation for very large or small numbers:

```javascript
// Very Small Numbers
floatControl.Value = 1.23e-8;    // 0.0000000123
floatControl.Value = 9.11e-31;   // Electron mass (kg)
floatControl.Value = 6.626e-34;  // Planck constant

// Very Large Numbers
floatControl.Value = 6.022e23;   // Avogadro's number
floatControl.Value = 2.998e8;    // Speed of light (m/s)
floatControl.Value = 1.496e11;   // Earth-Sun distance (m)

// Standard Numbers
floatControl.Value = 1e3;        // 1000
floatControl.Value = 5e-2;       // 0.05
```

---

## Common Use Cases

### 1. Geographic Coordinates
```javascript
// Store latitude/longitude with 5 decimal precision
floatControl.Precision = 5;
floatControl.Value = 47.60621; // Seattle latitude
```

### 2. Scientific Measurements
```javascript
// Store acceleration due to gravity
floatControl.Value = 9.80665; // m/s²
```

### 3. Statistical Data
```javascript
// Store correlation coefficient
floatControl.Value = 0.85432; // r-value
```

### 4. Temperature Readings
```javascript
// Store temperature in Celsius
floatControl.Value = -40.5; // Extreme cold
floatControl.Value = 37.0;  // Body temperature
```

### 5. Mathematical Constants
```javascript
// Store common constants
floatControl.Value = 3.14159; // Pi
floatControl.Value = 2.71828; // Euler's number (e)
floatControl.Value = 1.61803; // Golden ratio (φ)
```

### 6. Physics Calculations
```javascript
// Store small scientific values
floatControl.Value = 1.602e-19; // Elementary charge (C)
floatControl.Value = 6.674e-11; // Gravitational constant
```

---

## Float vs Decimal: When to Use Which?

### ✅ Use Float (Double) When:
- Working with **scientific measurements**
- Need **scientific notation** support
- Dealing with **geographic coordinates**
- Storing **statistical data** (correlations, probabilities)
- Recording **sensor readings**
- Calculating **physics/chemistry** values
- **Approximate values** are acceptable
- Range of values is **very wide** (e.g., astronomy)

### ❌ Don't Use Float For:
- **Money/currency** calculations (use Decimal)
- **Financial reporting** (use Decimal)
- **Tax calculations** (use Decimal)
- **Inventory counts** (use Integer)
- When **exact precision** is legally required

---

## Floating-Point Precision Issues

### Understanding Floating-Point Arithmetic

Float uses **binary representation**, which can cause precision issues:

```javascript
// Example: 0.1 + 0.2 problem
0.1 + 0.2 = 0.30000000000000004 (in binary floating-point)

// In Dynamics 365 Float field (5 decimal precision):
floatControl.Value = 0.1 + 0.2;
console.log(floatControl.Value); // Displays: 0.3 (rounded for display)
```

### Why This Happens:
- Binary can't exactly represent all decimal fractions
- 0.1 in decimal = 0.0001100110011... (repeating) in binary
- Computer stores finite binary digits, causing approximation

### Mitigation Strategies:

1. **Use Decimal for Money:**
```javascript
// ❌ Bad - Float for money
floatControl.Value = 0.1 + 0.2; // May have precision issues

// ✅ Good - Decimal for money
decimalControl.Value = 0.1 + 0.2; // Exact: 0.3
```

2. **Round Display Values:**
```javascript
// Round to specific decimal places for display
const displayValue = Math.round(floatControl.Value * 100) / 100;
```

3. **Avoid Exact Equality Checks:**
```javascript
// ❌ Bad
if (floatControl.Value === 0.3) { }

// ✅ Good - Use epsilon comparison
const epsilon = 0.00001;
if (Math.abs(floatControl.Value - 0.3) < epsilon) { }
```

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

### Issue: Unexpected Precision Loss
**Problem:** Set value to 3.14159265, but stored as 3.14159
**Solution:** Float precision is limited to 5 decimal places. This is expected behavior.

### Issue: Scientific Notation Not Accepted
**Problem:** Cannot input 1e-5 in UI
**Solution:** Use JavaScript to set value: `floatControl.Value = 1e-5;`

### Issue: Floating-Point Arithmetic Errors
**Problem:** 0.1 + 0.2 doesn't exactly equal 0.3
**Solution:** This is inherent to binary floating-point. Use Decimal for exact arithmetic.

### Issue: Cannot Set Null Value
**Problem:** TypeScript error when setting value to null
**Solution:** Use type assertion: `floatControl.Value = /** @type {any} */ (null);`

### Issue: Very Large Number Displays in Scientific Notation
**Problem:** Entered 1000000000 but displays as 1e9
**Solution:** This is browser behavior for very large floats. It's correct but displayed differently.

---

## Best Practices

1. **Choose Right Type:**
   - Use Float for scientific/statistical data
   - Use Decimal for financial data
   - Use Integer for counts

2. **Set Appropriate Precision:**
   - Match precision to measurement accuracy
   - Don't over-specify (5 is maximum for Float)

3. **Handle Floating-Point Errors:**
   - Don't use exact equality checks
   - Round values for display
   - Use epsilon for comparisons

4. **Validate Ranges:**
   - Set Min/Max values appropriately
   - Implement client-side validation

5. **Document Scientific Notation:**
   - Comment when using scientific notation
   - Explain the meaning (e.g., "1.23e-8 = electron mass")

6. **Test Edge Cases:**
   - Very small numbers (near zero)
   - Very large numbers (near max)
   - Negative values
   - Scientific notation input

---

## Related Documentation

- [Decimal Control Tests](DECIMAL_FIELD_TESTS.md)
- [Integer Control Tests](INTEGER_FIELD_TESTS.md)
- [Money Control Tests](MONEY_FIELD_TESTS.md)
- [Field Tests Progress](FIELD_TESTS_PROGRESS.md)

---

## Summary

The Float (Double) control provides **floating-point arithmetic** ideal for scientific, statistical, and geographic data. With support for scientific notation, precision up to 5 decimal places, and a wide value range, it handles everything from subatomic particles to astronomical distances. The 23 comprehensive tests demonstrate all aspects of float handling, from basic operations to scientific notation and precision control.

**Key Takeaways:**
- ✅ Floating-point arithmetic (binary representation)
- ✅ Scientific notation support (1.23e-8)
- ✅ Precision: 0-5 decimal places
- ✅ Wide range: ±100 billion
- ✅ Perfect for scientific calculations
- ⚠️ Approximate values (not exact like Decimal)

**Use Float For:** Scientific data, coordinates, measurements, statistics
**Don't Use For:** Money, financial calculations (use Decimal instead)

---

**Test Implementation:** `Account.js` (Lines ~2236-2567)
**Form Location:** Body section
**Total Tests:** 23
**Execution Time:** ~8 seconds
**Status:** ✅ Complete
