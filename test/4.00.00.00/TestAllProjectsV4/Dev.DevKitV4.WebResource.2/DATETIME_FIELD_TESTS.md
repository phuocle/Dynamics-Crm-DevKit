# DateTime Control Tests - Complete Documentation

## Overview

This document provides comprehensive documentation for testing the **DateTime control** in Dynamics 365 using the Client API. The tests are implemented for the `CreatedOn` field, which is a read-only system field that stores the date and time when a record was created.

**Test Function:** `testDateTime()`
**Field Name:** `CreatedOn`
**Control Location:** `form.Body.CreatedOn`
**Total Tests:** 27
**Execution Time:** ~10 seconds

---

## Field Information

### CreatedOn Field Specifications

| Property | Value |
|----------|-------|
| **Logical Name** | `createdon` |
| **Display Name** | Created On |
| **Field Type** | DateTime |
| **Format** | Date and Time |
| **Behavior** | User Local (timezone adjusted) |
| **Access** | Read-only (System field) |
| **Purpose** | Stores the UTC date/time when the record was created |
| **Value Type** | JavaScript `Date` object or `null` |

### DateTime Control Interface

```typescript
interface DateTime extends IControl {
    /**
     * Get/Set whether a date control shows the time portion of the date
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getshowtime
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setshowtime
     */
    ShowTime: boolean;

    /**
     * Get/Set the data value for an attribute
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
     * @link https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
     */
    Value: Date | null;
}
```

---

## Test Categories

The 27 tests are organized into the following categories:

1. **Read Operations (Tests 1-7):** Basic property retrieval
2. **Date Component Extraction (Tests 8-12):** Extract year, month, day, time components
3. **Metadata Properties (Tests 13-18):** Required level, read-only state, visibility
4. **Time Calculations (Test 19):** Calculate time since creation
5. **ShowTime Property (Tests 20-21):** Toggle time portion display
6. **UI Operations (Tests 22-27):** Notifications, focus, visibility, labels

---

## Detailed Test Descriptions

### Category 1: Read Operations

#### Test 1: Get DateTime Value
**Purpose:** Retrieve the current DateTime value
**Method:** `dateTimeControl.Value`

**Expected Output:**
```
📋 Test 1: Get DateTime Value
  ✓ Current DateTime value: Wed Oct 02 2024 14:30:15 GMT-0700 (Pacific Daylight Time)
  ℹ Type: object
  ℹ Is Date object: true
  ℹ ISO String: 2024-10-02T21:30:15.000Z
  ℹ UTC String: Wed, 02 Oct 2024 21:30:15 GMT
  ℹ Local String: Wed Oct 02 2024 14:30:15 GMT-0700 (Pacific Daylight Time)
```

**Key Points:**
- Returns a JavaScript `Date` object
- Value is stored in UTC on the server
- Local time is calculated based on browser's time zone
- Can be `null` for new records not yet saved

---

#### Test 2: Get Control Name
**Purpose:** Get the control's unique identifier
**Method:** `dateTimeControl.ControlName`

**Expected Output:**
```
📋 Test 2: Get Control Name
  ✓ Control Name: CreatedOn
```

---

#### Test 3: Get Attribute Name
**Purpose:** Get the logical name of the underlying attribute
**Method:** `dateTimeControl.Attribute.Name`

**Expected Output:**
```
📋 Test 3: Get Attribute Name
  ✓ Attribute Name: createdon
```

**Note:** Attribute names are lowercase, while display names are mixed case.

---

#### Test 4: Get ShowTime Property
**Purpose:** Check if time portion is displayed
**Method:** `dateTimeControl.ShowTime`

**Expected Output:**
```
📋 Test 4: Get ShowTime Property
  ✓ ShowTime: true
  ℹ If true: displays date and time
  ℹ If false: displays date only
```

**Key Points:**
- `true`: Control displays both date and time (e.g., "10/2/2024 2:30 PM")
- `false`: Control displays only date (e.g., "10/2/2024")
- Can be changed dynamically using `dateTimeControl.ShowTime = false`
- Only affects UI display, not the stored value

---

#### Test 5: Get Control Type
**Purpose:** Identify the control type
**Method:** `dateTimeControl.ControlType`

**Expected Output:**
```
📋 Test 5: Get Control Type
  ✓ Control Type: standard
  ℹ Expected: 'standard' for DateTime control
```

---

#### Test 6: Get Attribute Type
**Purpose:** Identify the field's data type
**Method:** `dateTimeControl.Attribute.Type`

**Expected Output:**
```
📋 Test 6: Get Attribute Type
  ✓ Attribute Type: datetime
  ℹ Expected: 'datetime' for DateTime fields
```

---

#### Test 7: Get Format
**Purpose:** Get the date/time format setting
**Method:** `dateTimeControl.Attribute.Format`

**Expected Output:**
```
📋 Test 7: Get Format
  ✓ Format: datetime
  ℹ Possible values: 'date' (date only) or 'datetime' (date and time)
```

**Format Types:**
- `datetime`: Stores both date and time components
- `date`: Stores only date (time is always 00:00:00)

---

### Category 2: Date Component Extraction

#### Test 8: Extract Date Components (UTC)
**Purpose:** Extract year, month, day, day of week using UTC methods
**Methods:** `getUTCFullYear()`, `getUTCMonth()`, `getUTCDate()`, `getUTCDay()`

**Expected Output:**
```
📋 Test 8: Extract Date Components (UTC)
  ✓ UTC Year: 2024
  ✓ UTC Month: 10
  ✓ UTC Day: 2
  ✓ UTC Day of Week: 3 (Wednesday)
```

**Important Notes:**
- **Use UTC methods for "User Local" fields** (like CreatedOn)
- `getUTCMonth()` returns 0-11, so add 1 for human-readable month
- `getUTCDay()` returns 0=Sunday through 6=Saturday
- UTC time is the time stored on the server

**When to Use UTC Methods:**
According to Microsoft documentation, for **User Local** behavior DateTime fields:
> "Use `Date.getUTCDate()`, `Date.getUTCHours()`, etc. to work with it. To get what the user sees, apply getTimeZoneOffsetMinutes. Do not use `Date.getDate()`, `Date.getHours()`, etc. because these will show the value in the browser's time zone."

---

#### Test 9: Extract Time Components (UTC)
**Purpose:** Extract hours, minutes, seconds, milliseconds using UTC methods
**Methods:** `getUTCHours()`, `getUTCMinutes()`, `getUTCSeconds()`, `getUTCMilliseconds()`

**Expected Output:**
```
📋 Test 9: Extract Time Components (UTC)
  ✓ UTC Hours: 21
  ✓ UTC Minutes: 30
  ✓ UTC Seconds: 15
  ✓ UTC Milliseconds: 234
  ℹ Formatted time: 21:30:15
```

**Time Formatting Example:**
```javascript
const hours = currentValue.getUTCHours().toString().padStart(2, '0');
const minutes = currentValue.getUTCMinutes().toString().padStart(2, '0');
const seconds = currentValue.getUTCSeconds().toString().padStart(2, '0');
console.log(`${hours}:${minutes}:${seconds}`); // Output: 21:30:15
```

---

#### Test 10: Extract Date Components (Local Time Zone)
**Purpose:** Extract date components using local time zone methods
**Methods:** `getFullYear()`, `getMonth()`, `getDate()`, `getDay()`

**Expected Output:**
```
📋 Test 10: Extract Date Components (Local Time Zone)
  ✓ Local Year: 2024
  ✓ Local Month: 10
  ✓ Local Day: 2
  ✓ Local Day of Week: 3 (Wednesday)
```

**When to Use Local Methods:**
For **Time zone independent** and **Date only** behavior fields:
> "Use `Date.getDate()`, `Date.getHours()`, etc. to work with it. Don't use `Date.getUTCDate()`, `Date.getUTCHours()`, and so on because you don't have to adjust for any time zones."

---

#### Test 11: Extract Time Components (Local Time Zone)
**Purpose:** Extract time components using local time zone methods
**Methods:** `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`

**Expected Output:**
```
📋 Test 11: Extract Time Components (Local Time Zone)
  ✓ Local Hours: 14
  ✓ Local Minutes: 30
  ✓ Local Seconds: 15
  ✓ Local Milliseconds: 234
  ℹ Formatted time: 14:30:15
```

**Example Conversion:**
- UTC Time: 21:30:15 (9:30 PM UTC)
- Local Time: 14:30:15 (2:30 PM Pacific Time, UTC-7)
- Difference: 7 hours behind UTC

---

#### Test 12: Get Time Zone Offset
**Purpose:** Calculate the difference between local time and UTC
**Method:** `getTimezoneOffset()`

**Expected Output:**
```
📋 Test 12: Get Time Zone Offset
  ✓ Time Zone Offset (minutes): 420
  ℹ UTC-07:00
  ℹ Positive offset means local time is behind UTC
  ℹ Negative offset means local time is ahead of UTC
```

**Understanding Time Zone Offset:**
- Returns minutes difference between local time and UTC
- Positive value: Local time is BEHIND UTC (e.g., Pacific Time is UTC-7)
- Negative value: Local time is AHEAD of UTC (e.g., Tokyo is UTC+9)
- Formula: `UTC = Local Time + Offset`

**Example Offsets:**
- Pacific Time (PDT): +420 minutes = UTC-07:00
- Eastern Time (EDT): +240 minutes = UTC-04:00
- London (BST): -60 minutes = UTC+01:00
- Tokyo (JST): -540 minutes = UTC+09:00

---

### Category 3: Metadata Properties

#### Test 13: Check Required Level
**Purpose:** Determine if the field is required, recommended, or optional
**Method:** `dateTimeControl.Attribute.RequiredLevel`

**Expected Output:**
```
📋 Test 13: Check Required Level
  ✓ Required Level: none
  ℹ 'none' = optional, 'required' = mandatory, 'recommended' = suggested
```

**Possible Values:**
- `none`: Field is optional
- `required`: Field must have a value before saving
- `recommended`: System suggests filling this field (shows blue indicator)

---

#### Test 14: Check Read-Only State
**Purpose:** Check if the field can be edited
**Method:** `dateTimeControl.Attribute.IsReadOnly`

**Expected Output:**
```
📋 Test 14: Check Read-Only State
  ✓ Is Read-Only: true
  ℹ CreatedOn is typically read-only (system field)
```

**System Fields (Usually Read-Only):**
- `createdon`: Record creation date/time
- `modifiedon`: Last modification date/time
- `createdby`: User who created the record
- `modifiedby`: User who last modified the record

---

#### Test 15: Get isDirty Status
**Purpose:** Check if the field value has been modified since form load
**Method:** `dateTimeControl.Attribute.IsDirty`

**Expected Output:**
```
📋 Test 15: Get isDirty Status
  ✓ Is Dirty: false
  ℹ Indicates if value has been modified since form load
```

**Use Cases:**
- Detect unsaved changes
- Trigger validation only on modified fields
- Optimize save operations (submit only dirty fields)

---

#### Test 16: Get Visibility State
**Purpose:** Check if the control is visible on the form
**Method:** `dateTimeControl.Visible`

**Expected Output:**
```
📋 Test 16: Get Visibility State
  ✓ Is Visible: true
```

---

#### Test 17: Get Disabled State
**Purpose:** Check if the control is disabled
**Method:** `dateTimeControl.Disabled`

**Expected Output:**
```
📋 Test 17: Get Disabled State
  ✓ Is Disabled: false
```

---

#### Test 18: Get Label
**Purpose:** Get the display label for the control
**Method:** `dateTimeControl.Label`

**Expected Output:**
```
📋 Test 18: Get Label
  ✓ Label: Created On
```

---

### Category 4: Time Calculations

#### Test 19: Calculate Time Since Creation
**Purpose:** Calculate elapsed time since record creation
**Methods:** `Date.getTime()`, arithmetic calculations

**Expected Output:**
```
📋 Test 19: Calculate Time Since Creation
  ✓ Time since creation:
    ℹ 45 days, 8 hours, 23 minutes, 42 seconds
    ℹ Total milliseconds: 3920622000
```

**Calculation Example:**
```javascript
const now = new Date();
const created = dateTimeControl.Value;
const diffMs = now.getTime() - created.getTime();

const diffSeconds = Math.floor(diffMs / 1000);
const diffMinutes = Math.floor(diffSeconds / 60);
const diffHours = Math.floor(diffMinutes / 60);
const diffDays = Math.floor(diffHours / 24);

console.log(`${diffDays} days, ${diffHours % 24} hours, ${diffMinutes % 60} minutes, ${diffSeconds % 60} seconds`);
```

**Use Cases:**
- Calculate record age
- Measure time between events
- Implement time-based business logic
- Display "created 2 hours ago" style timestamps

---

### Category 5: ShowTime Property Tests

#### Test 20: Set ShowTime to False (Show Date Only)
**Purpose:** Hide the time portion in the UI
**Method:** `dateTimeControl.ShowTime = false`

**Expected Output:**
```
⚡ Test 20: Set ShowTime to False (Show Date Only)
  ℹ This will hide the time portion in the UI
  ✓ ShowTime set to: false
  ℹ Control now displays date only (time hidden)
```

**Visual Effect:**
- Before: "10/2/2024 2:30 PM"
- After: "10/2/2024"

**Important Notes:**
- Only affects UI display
- Stored value still contains time
- User can still see time in other views
- Only works for fields with "Date and Time" format

**Microsoft Documentation:**
> "This method will show or hide the time component of a date control where the attribute uses the **DateAndTime** format. This method will have no effect when the **DateOnly** format is used."

---

#### Test 21: Set ShowTime to True (Show Date and Time)
**Purpose:** Show both date and time in the UI
**Method:** `dateTimeControl.ShowTime = true`

**Expected Output:**
```
⚡ Test 21: Set ShowTime to True (Show Date and Time)
  ℹ Restoring ShowTime to original state
  ✓ ShowTime set to: true
  ℹ Control now displays both date and time
```

**Visual Effect:**
- Before: "10/2/2024"
- After: "10/2/2024 2:30 PM"

---

### Category 6: UI Operations

#### Test 22: Add Notification
**Purpose:** Display an informational notification on the control
**Method:** `dateTimeControl.AddNotification(notification)`

**Expected Output:**
```
⚡ Test 22: Add Notification
  ✓ Notification added with ID: dateTimeNotification_1696274231234
  ℹ Check the form UI to see the notification
```

**Notification Interface:**
```javascript
dateTimeControl.AddNotification({
    uniqueId: "dateTimeNotification_" + Date.now(),
    messages: ["This is a read-only system field that stores the record creation date/time"],
    notificationLevel: OptionSet.FieldNotificationLevel.Recommendation
});
```

**Notification Levels:**
- `OptionSet.FieldNotificationLevel.Error`: Red "X" icon, critical errors
- `OptionSet.FieldNotificationLevel.Recommendation`: Blue "i" icon, suggestions

**Visual Appearance:**
- Icon appears next to the field
- Clicking the icon displays the message
- Multiple notifications can be added with different IDs

---

#### Test 23: Clear Notification
**Purpose:** Remove a previously added notification
**Method:** `dateTimeControl.ClearNotification(uniqueId)`

**Expected Output:**
```
⚡ Test 23: Clear Notification
  ✓ Notification cleared
```

**Usage:**
```javascript
// Add notification
const notificationId = "myNotification_" + Date.now();
dateTimeControl.AddNotification({
    uniqueId: notificationId,
    messages: ["Important message"],
    notificationLevel: OptionSet.FieldNotificationLevel.Error
});

// Clear specific notification
dateTimeControl.ClearNotification(notificationId);
```

---

#### Test 24: Set Focus to Control
**Purpose:** Move keyboard focus to the DateTime control
**Method:** `dateTimeControl.Focus()`

**Expected Output:**
```
⚡ Test 24: Set Focus to Control
  ✓ Focus set to DateTime control
  ℹ Check the form UI - cursor should be in this field
```

**Use Cases:**
- Guide user attention to important fields
- Implement tab order customization
- Direct user to required fields with errors
- Improve form navigation in business process flows

---

#### Test 25: Toggle Visibility (Hide then Show)
**Purpose:** Dynamically show/hide the control
**Method:** `dateTimeControl.Visible = false/true`

**Expected Output:**
```
⚡ Test 25: Toggle Visibility (Hide then Show)
  ✓ Control hidden
  ✓ Control shown again
```

**Use Cases:**
- Conditional field visibility based on business logic
- Hide system fields from regular users
- Show/hide fields based on other field values
- Implement progressive disclosure in forms

**Example:**
```javascript
// Hide control
dateTimeControl.Visible = false;

// Show control after 2 seconds
setTimeout(() => {
    dateTimeControl.Visible = true;
}, 2000);
```

---

#### Test 26: Change Label
**Purpose:** Dynamically update the field label
**Method:** `dateTimeControl.Label = "New Label"`

**Expected Output:**
```
⚡ Test 26: Change Label
  ✓ Label changed to: 'Record Created (Test Label)'
  ℹ Original label: Created On
```

**Use Cases:**
- Localization and translation
- Context-specific labeling
- Clarify field purpose based on form state
- Improve user experience with dynamic hints

---

#### Test 27: Restore Original Label
**Purpose:** Restore the default field label
**Method:** `dateTimeControl.Label = "Created On"`

**Expected Output:**
```
⚡ Test 27: Restore Original Label
  ✓ Label restored to: 'Created On'
```

---

## Time Zone Handling

### Understanding DateTime Behavior Types

Dynamics 365 supports three DateTime behavior types:

#### 1. User Local (Default)
**Used by:** `CreatedOn`, `ModifiedOn`, most user-facing date/time fields

- **Storage:** UTC on server
- **Display:** Adjusted to user's time zone
- **Client API:** Returns UTC date that must be interpreted as UTC
- **Methods to Use:** `getUTCDate()`, `getUTCHours()`, etc.

**Example:**
```javascript
// User in Pacific Time (UTC-7) creates record at 2:30 PM local
// Server stores: 2024-10-02T21:30:00Z (UTC)
// Display shows: 10/2/2024 2:30 PM (user's local time)
// Client API returns: Date object with UTC value

const value = dateTimeControl.Value;
value.getUTCHours();  // 21 (correct - UTC time)
value.getHours();     // 14 (incorrect for User Local - browser time)
```

#### 2. Time Zone Independent
- **Storage:** No time zone conversion
- **Display:** Same value everywhere
- **Client API:** Returns date in browser's time zone
- **Methods to Use:** `getDate()`, `getHours()`, etc.

**Use Cases:** Birthdays, anniversaries, events that occur at same time everywhere

#### 3. Date Only
- **Storage:** Date with time = 00:00:00
- **Display:** Date only (no time)
- **Client API:** Returns date with 00:00:00 time
- **Methods to Use:** `getDate()`, `getMonth()`, `getFullYear()` (local methods)

**Use Cases:** Birthdays, expiration dates, deadlines without specific time

---

### Common Time Zone Pitfalls

#### Pitfall 1: Using Wrong Methods for User Local Fields
```javascript
// ❌ WRONG - Uses browser's time zone
const hours = dateTimeControl.Value.getHours();

// ✅ CORRECT - Uses UTC time as intended
const hours = dateTimeControl.Value.getUTCHours();
```

#### Pitfall 2: Displaying Time Without Timezone Context
```javascript
// ❌ WRONG - Confusing to users
console.log(dateTimeControl.Value.toString());
// Output: "Wed Oct 02 2024 14:30:15 GMT-0700"

// ✅ CORRECT - Clear about time zone
console.log(dateTimeControl.Value.toISOString());
// Output: "2024-10-02T21:30:00.000Z" (explicitly UTC)

// ✅ CORRECT - Formatted for user's locale
console.log(dateTimeControl.Value.toLocaleString());
// Output: "10/2/2024, 2:30:15 PM" (user's format)
```

#### Pitfall 3: Date Comparison Issues
```javascript
// ❌ WRONG - Compares object references
if (dateTimeControl.Value === new Date("2024-10-02")) { }

// ✅ CORRECT - Compares timestamps
if (dateTimeControl.Value.getTime() === new Date("2024-10-02").getTime()) { }
```

---

## Date Formatting Examples

### ISO 8601 Format (Recommended for APIs)
```javascript
const isoString = dateTimeControl.Value.toISOString();
// Output: "2024-10-02T21:30:15.234Z"
```

**Advantages:**
- Unambiguous (always UTC)
- Sortable
- Internationally standardized
- Parsable by most systems

### Locale-Specific Formatting
```javascript
// User's default locale format
const localString = dateTimeControl.Value.toLocaleString();
// Output: "10/2/2024, 2:30:15 PM" (US)
// Output: "02/10/2024, 14:30:15" (UK)

// Custom locale
const ukFormat = dateTimeControl.Value.toLocaleString('en-GB');
// Output: "02/10/2024, 14:30:15"

// Long date format
const longDate = dateTimeControl.Value.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
// Output: "Wednesday, October 2, 2024"
```

### Custom Formatting
```javascript
const year = dateTimeControl.Value.getUTCFullYear();
const month = (dateTimeControl.Value.getUTCMonth() + 1).toString().padStart(2, '0');
const day = dateTimeControl.Value.getUTCDate().toString().padStart(2, '0');
const formatted = `${year}-${month}-${day}`;
// Output: "2024-10-02"
```

---

## Business Logic Examples

### Example 1: Show Warning for Old Records
```javascript
function checkRecordAge() {
    const createdOn = form.Body.CreatedOn.Value;
    if (createdOn) {
        const now = new Date();
        const ageInDays = Math.floor((now.getTime() - createdOn.getTime()) / (1000 * 60 * 60 * 24));

        if (ageInDays > 365) {
            form.Body.CreatedOn.AddNotification({
                uniqueId: "oldRecordWarning",
                messages: [`This record is ${ageInDays} days old. Consider archiving or updating it.`],
                notificationLevel: OptionSet.FieldNotificationLevel.Recommendation
            });
        }
    }
}
```

### Example 2: Conditional Field Visibility Based on Creation Date
```javascript
function showFieldsForNewRecords() {
    const createdOn = form.Body.CreatedOn.Value;

    if (createdOn) {
        const ageInHours = (new Date().getTime() - createdOn.getTime()) / (1000 * 60 * 60);

        // Show special fields only for records created in last 24 hours
        const isNewRecord = ageInHours <= 24;
        form.Body.SomeField.Visible = isNewRecord;

        if (isNewRecord) {
            form.Body.SomeField.Label = "New Record Setup";
        }
    }
}
```

### Example 3: Display "Time Ago" Format
```javascript
function formatTimeAgo(dateValue) {
    const now = new Date();
    const diffMs = now.getTime() - dateValue.getTime();
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMinutes < 60) {
        return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
    } else if (diffHours < 24) {
        return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else {
        return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    }
}

// Usage
const createdOn = form.Body.CreatedOn.Value;
if (createdOn) {
    console.log(`Created ${formatTimeAgo(createdOn)}`);
    // Output: "Created 45 days ago"
}
```

### Example 4: Business Hours Calculation
```javascript
function isWithinBusinessHours(dateValue) {
    const hours = dateValue.getUTCHours(); // Use UTC for User Local fields
    const dayOfWeek = dateValue.getUTCDay();

    // Check if weekday (1-5 = Mon-Fri) and between 9 AM - 5 PM UTC
    const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;
    const isDuringBusinessHours = hours >= 9 && hours < 17;

    return isWeekday && isDuringBusinessHours;
}

const createdOn = form.Body.CreatedOn.Value;
if (createdOn && !isWithinBusinessHours(createdOn)) {
    console.log("Record was created outside business hours");
}
```

---

## Microsoft Documentation References

### Official Client API Documentation
- [DateTime Control Reference](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls)
- [getShowTime Method](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/getshowtime)
- [setShowTime Method](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setshowtime)
- [getValue Method](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue)
- [setValue Method](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue)

### DateTime Behavior and Format
- [Behavior and Format of Date/Time Column](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/behavior-format-date-time-field)
- [Configure DateTime Behavior Using Code](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/behavior-format-date-time-attribute)
- [Troubleshoot DateTime Issues](https://learn.microsoft.com/en-us/troubleshoot/power-platform/power-apps/create-and-use-apps/troubleshoot-model-driven-app-date-time-issues)

### Time Zone Handling
- [Working with Time Zones](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/behavior-format-date-time-attribute#web-client-handles-time-zone-conversion-differently-from-unified-interface)
- [getTimeZoneOffsetMinutes Method](https://learn.microsoft.com/en-us/power-apps/developer/component-framework/reference/usersettings/gettimezoneoffsetminutes)

---

## Summary

### Key Takeaways

1. **DateTime Value Type**
   - Always a JavaScript `Date` object or `null`
   - Stored as UTC on server
   - Interpreted based on field's behavior setting

2. **ShowTime Property**
   - Controls UI display only (not stored value)
   - `true` = shows date and time
   - `false` = shows date only
   - Only works with "Date and Time" format

3. **Time Zone Awareness**
   - **User Local:** Use UTC methods (`getUTCDate()`, `getUTCHours()`)
   - **Time Zone Independent/Date Only:** Use local methods (`getDate()`, `getHours()`)
   - Always consider user's time zone when displaying dates

4. **Read-Only System Fields**
   - `CreatedOn` is read-only (cannot be modified via UI)
   - Can still use for calculations and display logic
   - Good for audit trails and record lifecycle tracking

5. **Date Component Extraction**
   - Month is 0-indexed (0-11), add 1 for display
   - Day of week: 0=Sunday, 6=Saturday
   - Use `padStart()` for zero-padding (e.g., "09" instead of "9")

### Test Coverage Summary

| Category | Tests | Coverage |
|----------|-------|----------|
| Read Operations | 7 | Basic properties, types, formats |
| Date/Time Extraction | 5 | Year, month, day, hour, minute, second, timezone |
| Metadata | 6 | Required, read-only, dirty state, visibility |
| Calculations | 1 | Time duration, elapsed time |
| ShowTime Property | 2 | Show/hide time portion |
| UI Operations | 6 | Notifications, focus, visibility, labels |
| **Total** | **27** | **Comprehensive DateTime control testing** |

---

## Next Steps

After implementing DateTime tests, consider testing:

1. **Boolean Control** (`CreditOnHold`) - Two-option fields
2. **Memo Control** (`Description`) - Multi-line text fields
3. **Custom DateTime Logic** - Business-specific date calculations
4. **Date Range Validation** - Ensure dates fall within acceptable ranges
5. **Integration Testing** - Test DateTime fields with workflows and plugins

---

**Document Version:** 1.0
**Last Updated:** October 2, 2025
**Test Function:** `testDateTime()`
**Field:** `CreatedOn`
**Total Tests:** 27
**Status:** ✅ Complete and Production-Ready
