# Memo Control Tests - Description Field

## Overview
This document describes the comprehensive test suite for the **Memo** control type in Dynamics 365, specifically testing the **Description** field on the Account form. The tests validate multi-line text field functionality, character limits, text manipulation, and UI operations.

## Field Information
- **Field Name**: Description
- **Field Type**: Memo (Multi-line Text)
- **Control Location**: `form.Body.Description`
- **Interface**: `DevKit.Controls.String` (implements `IControlText`)
- **Attribute Type**: `memo`
- **Data Type**: `string | null`
- **Purpose**: Store multi-line descriptive text with character limit

## Test Structure
Total Tests: **21 comprehensive tests**
- Tests 1-12: Read operations and property access
- Tests 13-21: Value manipulation and UI interactions

## Detailed Test Descriptions

### Read-Only Property Tests (Tests 1-12)

#### Test 1: Get Memo Value
**Purpose**: Retrieve current multi-line text value from the Description field
**Operations**:
- Read `memoControl.Value`
- Check type (string or null)
- Calculate text metrics (length, lines, words)
- Display current content

**Business Logic**:
```javascript
const currentValue = memoControl.Value;
console.log("Current value:", currentValue || "(empty)");
console.log("Length:", currentValue.length, "characters");
const lines = currentValue.split('\n').length;
console.log("Lines:", lines);
const words = currentValue.trim().split(/\s+/).filter(w => w.length > 0).length;
console.log("Words:", words);
```

**Expected Results**: Returns string content with line breaks or null for empty field

**Microsoft Docs**: [Memo attributes (Microsoft Dataverse)](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/memo-attributes)

---

#### Test 2: Get Control Name
**Purpose**: Retrieve the unique identifier of the control
**Operations**: Read `memoControl.ControlName`
**Expected Results**: Returns "description" (logical name)

**Business Logic**: Used for programmatic control access and form scripting

---

#### Test 3: Get Attribute Name
**Purpose**: Retrieve the logical name of the underlying attribute
**Operations**: Read `memoControl.Attribute.Name`
**Expected Results**: Returns "description" (attribute logical name)

**Business Logic**: Essential for WebAPI queries and attribute-level operations

---

#### Test 4: Get MaxLength
**Purpose**: Retrieve the maximum allowed character limit
**Operations**: Read `memoControl.MaxLength`
**Expected Results**:
- Standard memo: 2,000 characters
- Extended memo: Up to 1,048,576 characters (1 MB)

**Business Logic**:
```javascript
const maxLength = memoControl.MaxLength;
if (maxLength === 2000) {
    console.log("Standard memo field");
} else if (maxLength > 2000) {
    console.log("Extended memo field");
}
```

**Microsoft Docs**:
- [String attributes (Microsoft Dataverse)](https://learn.microsoft.com/en-us/power-apps/developer/data-platform/string-attributes)
- [Maximum length for memo fields](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/types-of-fields#memo)

**Important Notes**:
- MaxLength is **read-only** and cannot be changed at runtime
- Text exceeding MaxLength will be truncated
- Extended memo fields require special configuration

---

#### Test 5: Get Control Type
**Purpose**: Identify the control's type classification
**Operations**: Read `memoControl.ControlType`
**Expected Results**: Returns "standard" (standard form control)

**Business Logic**: Used for control type validation and conditional logic

---

#### Test 6: Get Attribute Type
**Purpose**: Identify the attribute's data type
**Operations**: Read `memoControl.Attribute.Type`
**Expected Results**: Returns "memo" (multi-line text field)

**Business Logic**:
```javascript
const attributeType = memoControl.Attribute.Type;
if (attributeType === "memo") {
    console.log("Multi-line text field confirmed");
}
```

**Difference from String Type**:
- **Memo**: Multi-line text area, larger default MaxLength
- **String**: Single-line text box, smaller MaxLength (typically 100-4000)

---

#### Test 7: Get Format
**Purpose**: Retrieve the text format specification
**Operations**: Read `memoControl.Attribute.Format`
**Expected Results**:
- "text" (plain text, most common)
- "email" (email address format)
- "textarea" (multi-line text area)
- "url" (URL format)

**Business Logic**:
```javascript
const format = memoControl.Attribute.Format;
if (format === "email") {
    // Validate email format
} else if (format === "url") {
    // Validate URL format
}
```

---

#### Test 8: Get Required Level
**Purpose**: Check if the field is mandatory
**Operations**: Read `memoControl.Attribute.RequiredLevel`
**Expected Results**:
- "none" (optional)
- "required" (mandatory)
- "recommended" (suggested)

**Business Logic**: Used for validation and form submission logic

---

#### Test 9: Get isDirty Status
**Purpose**: Check if value has been modified since form load
**Operations**: Read `memoControl.Attribute.IsDirty`
**Expected Results**: Boolean (true if modified, false if unchanged)

**Business Logic**: Used for change tracking and conditional save logic

---

#### Test 10: Get Visibility Status
**Purpose**: Check if control is visible on the form
**Operations**: Read `memoControl.Visible`
**Expected Results**: Boolean (true if visible, false if hidden)

---

#### Test 11: Get Disabled Status
**Purpose**: Check if control is read-only
**Operations**: Read `memoControl.Disabled`
**Expected Results**: Boolean (true if disabled, false if editable)

---

#### Test 12: Get Label
**Purpose**: Retrieve the display label for the control
**Operations**: Read `memoControl.Label`
**Expected Results**: Returns label text (e.g., "Description")

---

### Value Manipulation Tests (Tests 13-21)

#### Test 13: Set Multi-line Text
**Purpose**: Test setting multi-line text with line breaks
**Operations**: Set `memoControl.Value` with text containing `\n` characters

**Business Logic**:
```javascript
const testText = "This is a test description.\n\n" +
    "This field supports multiple lines of text.\n\n" +
    "Key features:\n" +
    "- Line 1: Supports line breaks\n" +
    "- Line 2: Can store long text\n" +
    "- Line 3: Used for detailed information";
memoControl.Value = testText;
```

**Expected Results**:
- Text displays with proper line breaks in UI
- Line count calculated correctly
- Form marks field as dirty

**Use Cases**:
- Meeting notes with structured content
- Detailed product descriptions with formatting
- Multi-paragraph account summaries
- Bullet-point lists of features

---

#### Test 14: Set Long Text (Test MaxLength)
**Purpose**: Validate character limit enforcement
**Operations**:
- Generate text longer than MaxLength
- Set value and verify truncation

**Business Logic**:
```javascript
const longText = "Lorem ipsum dolor sit amet... ".repeat(20);
memoControl.Value = longText;
const actualValue = memoControl.Value;
if (actualValue.length === memoControl.MaxLength) {
    console.warn("Text was truncated to MaxLength");
}
```

**Expected Results**:
- Text truncated at MaxLength characters
- No error thrown
- User should be warned about truncation

**Best Practice**: Always validate text length before setting:
```javascript
function setMemoValue(control, text) {
    const maxLength = control.MaxLength;
    if (text.length > maxLength) {
        console.warn(`Text exceeds MaxLength (${maxLength}). Will be truncated.`);
        text = text.substring(0, maxLength);
    }
    control.Value = text;
}
```

---

#### Test 15: Clear Value (Set to Empty String)
**Purpose**: Test clearing the field value
**Operations**: Set `memoControl.Value = ""`

**Business Logic**:
```javascript
memoControl.Value = ""; // Clear to empty string
// Alternative for nullable fields:
memoControl.Value = null;
```

**Expected Results**:
- Field becomes empty
- No validation errors
- Field marked as dirty

---

#### Test 16: Add Notification
**Purpose**: Display informational message on the control
**Operations**: Call `memoControl.AddNotification()`

**Business Logic**:
```javascript
const notificationId = "memoNotification_" + Date.now();
memoControl.AddNotification({
    uniqueId: notificationId,
    messages: [
        "This field supports multi-line text. Use line breaks to organize content. " +
        "Maximum " + memoControl.MaxLength + " characters."
    ],
    notificationLevel: OptionSet.FieldNotificationLevel.Recommendation
});
```

**Notification Levels**:
- **Error**: Red icon, prevents save
- **Warning**: Yellow icon, allows save with confirmation
- **Recommendation**: Blue icon, informational only

**Expected Results**: Blue info icon appears next to the control

**Microsoft Docs**: [addNotification (Client API reference)](https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addnotification)

---

#### Test 17: Clear Notification
**Purpose**: Remove previously added notification
**Operations**: Call `memoControl.ClearNotification(uniqueId)`
**Expected Results**: Notification icon disappears from control

**Business Logic**: Notifications should be cleared when no longer relevant

---

#### Test 18: Set Focus to Control
**Purpose**: Move cursor to the multi-line text area
**Operations**: Call `memoControl.Focus()`
**Expected Results**:
- Cursor appears in text area
- Control is scrolled into view
- User can immediately type

**Use Cases**:
- Guide user to required fields
- Continue data entry after validation
- Improve form navigation

---

#### Test 19: Toggle Visibility (Hide then Show)
**Purpose**: Test dynamic visibility control
**Operations**:
- Set `memoControl.Visible = false` (hide)
- Wait 1.5 seconds
- Set `memoControl.Visible = true` (show)

**Business Logic**:
```javascript
// Hide description for certain account types
if (accountType === "Competitor") {
    form.Body.Description.Visible = false;
} else {
    form.Body.Description.Visible = true;
}
```

**Expected Results**:
- Control disappears from form
- Control reappears after delay
- Value is preserved

---

#### Test 20: Change Label
**Purpose**: Test dynamic label modification
**Operations**: Set `memoControl.Label = "Account Notes (Test Label)"`
**Expected Results**: Label text updates in form UI

**Business Logic**:
```javascript
// Dynamic label based on context
if (accountType === "Customer") {
    form.Body.Description.Label = "Customer Notes";
} else if (accountType === "Prospect") {
    form.Body.Description.Label = "Prospect Details";
}
```

---

#### Test 21: Restore Original Values
**Purpose**: Revert all changes and restore original state
**Operations**:
- Restore original value
- Restore original label
- Return form to initial state

**Business Logic**:
```javascript
// Store original state
const originalValue = memoControl.Value;
const originalLabel = memoControl.Label;

// ... perform tests ...

// Restore
memoControl.Value = originalValue;
memoControl.Label = originalLabel;
```

**Expected Results**: All changes reverted, form returns to original state

---

## Key Differences: Memo vs String Controls

| Feature | Memo Control | String Control |
|---------|--------------|----------------|
| **UI Display** | Multi-line text area | Single-line text box |
| **Default MaxLength** | 2,000 chars (up to 1,048,576) | 100-4,000 chars |
| **Line Breaks** | Supported (`\n`) | Not applicable |
| **Use Cases** | Long descriptions, notes, comments | Names, titles, short text |
| **Interface** | Both extend `IControlText` | Both extend `IControlText` |
| **MaxLength Property** | Read-only, larger values | Read-only, smaller values |

## Common Business Scenarios

### 1. Meeting Notes
```javascript
function onMeetingComplete(executionContext) {
    const formContext = executionContext.getFormContext();
    const description = formContext.getControl("description");

    const meetingNotes =
        "Meeting Date: " + new Date().toLocaleDateString() + "\n\n" +
        "Attendees:\n" +
        "- John Doe (Sales Manager)\n" +
        "- Jane Smith (Customer)\n\n" +
        "Discussion Points:\n" +
        "1. Product demonstration completed\n" +
        "2. Pricing discussed\n" +
        "3. Next steps defined\n\n" +
        "Action Items:\n" +
        "- Send proposal by Friday\n" +
        "- Schedule follow-up call";

    description.Value = meetingNotes;
}
```

### 2. MaxLength Validation with User Warning
```javascript
function validateDescriptionLength(executionContext) {
    const formContext = executionContext.getFormContext();
    const description = formContext.getControl("description");
    const descriptionAttr = formContext.getAttribute("description");

    const currentValue = description.Value || "";
    const maxLength = description.MaxLength;
    const remainingChars = maxLength - currentValue.length;

    if (remainingChars < 100) {
        description.AddNotification({
            uniqueId: "lengthWarning",
            messages: [`Warning: Only ${remainingChars} characters remaining (${maxLength} max)`],
            notificationLevel: "WARNING"
        });
    } else {
        description.ClearNotification("lengthWarning");
    }
}
```

### 3. Required Field Based on Account Type
```javascript
function setDescriptionRequirement(executionContext) {
    const formContext = executionContext.getFormContext();
    const accountType = formContext.getAttribute("accountcategorycode").getValue();
    const description = formContext.getAttribute("description");

    // Make description required for VIP customers
    if (accountType === 1) { // Preferred Customer
        description.setRequiredLevel("required");
        formContext.getControl("description").AddNotification({
            uniqueId: "reqNotification",
            messages: ["Description is required for VIP accounts"],
            notificationLevel: "RECOMMENDATION"
        });
    } else {
        description.setRequiredLevel("none");
        formContext.getControl("description").ClearNotification("reqNotification");
    }
}
```

### 4. Auto-populate Description Template
```javascript
function populateDescriptionTemplate(executionContext) {
    const formContext = executionContext.getFormContext();
    const description = formContext.getControl("description");

    if (!description.Value || description.Value.trim() === "") {
        const template =
            "ACCOUNT OVERVIEW\n" +
            "================\n\n" +
            "Business Type: [Enter business type]\n" +
            "Industry: [Enter industry]\n" +
            "Key Contacts: [List key contacts]\n\n" +
            "BUSINESS NEEDS\n" +
            "==============\n" +
            "[Describe primary business needs]\n\n" +
            "OPPORTUNITIES\n" +
            "=============\n" +
            "[List potential opportunities]\n\n" +
            "NOTES\n" +
            "=====\n" +
            "[Additional notes]";

        description.Value = template;
    }
}
```

### 5. Text Analysis and Word Count
```javascript
function analyzeDescription(executionContext) {
    const formContext = executionContext.getFormContext();
    const description = formContext.getControl("description");
    const text = description.Value || "";

    const charCount = text.length;
    const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    const lineCount = text.split('\n').length;
    const paragraphCount = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;

    console.log("Text Analysis:");
    console.log("  Characters:", charCount);
    console.log("  Words:", wordCount);
    console.log("  Lines:", lineCount);
    console.log("  Paragraphs:", paragraphCount);

    // Show statistics to user
    Xrm.Navigation.openAlertDialog({
        text: `Description Statistics:\n\n` +
              `Characters: ${charCount} / ${description.MaxLength}\n` +
              `Words: ${wordCount}\n` +
              `Lines: ${lineCount}\n` +
              `Paragraphs: ${paragraphCount}`
    });
}
```

## Microsoft Documentation References

### Primary References
1. **Memo Attributes**: https://learn.microsoft.com/en-us/power-apps/developer/data-platform/memo-attributes
2. **String Attributes**: https://learn.microsoft.com/en-us/power-apps/developer/data-platform/string-attributes
3. **Controls Collection**: https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls
4. **Attributes**: https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes

### Control Methods
5. **getValue**: https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getvalue
6. **setValue**: https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/setvalue
7. **addNotification**: https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/addnotification
8. **clearNotification**: https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/clearnotification
9. **setFocus**: https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/controls/setfocus

### Attribute Properties
10. **getMaxLength**: https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getmaxlength
11. **getRequiredLevel**: https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getrequiredlevel
12. **getIsDirty**: https://learn.microsoft.com/en-us/power-apps/developer/model-driven-apps/clientapi/reference/attributes/getisdirty

## Execution Instructions

1. **Open Account Form**: Navigate to any Account record in Dynamics 365
2. **Open Browser Console**: Press F12 (Developer Tools)
3. **Find testMemo Function**: Uncomment `await testMemo();` in `UiAddLoaded` function
4. **Reload Form**: Press F5 to trigger OnLoad event
5. **Watch Console**: Tests execute automatically with detailed logging
6. **Observe UI**: Watch form changes (notifications, focus, visibility, labels)
7. **Execution Time**: Approximately 10 seconds (includes delays for UI validation)

## Best Practices

### 1. MaxLength Validation
Always validate text length before setting values to prevent truncation:
```javascript
function safeSetMemoValue(control, text) {
    if (text && text.length > control.MaxLength) {
        Xrm.Navigation.openAlertDialog({
            text: `Text exceeds maximum length of ${control.MaxLength} characters. ` +
                  `It will be truncated.`
        });
        text = text.substring(0, control.MaxLength);
    }
    control.Value = text;
}
```

### 2. Line Break Handling
Use `\n` for line breaks, which work cross-platform:
```javascript
// Good
const text = "Line 1\nLine 2\nLine 3";

// Avoid (platform-specific)
const text = "Line 1\r\nLine 2\r\nLine 3";
```

### 3. Performance with Large Text
For very large memo fields, avoid frequent getValue() calls:
```javascript
// Bad: Multiple reads
if (control.Value.includes("keyword1") || control.Value.includes("keyword2")) { }

// Good: Single read
const text = control.Value || "";
if (text.includes("keyword1") || text.includes("keyword2")) { }
```

### 4. Null Handling
Always check for null values:
```javascript
const text = control.Value || ""; // Default to empty string
const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;
```

### 5. User Feedback
Provide feedback when approaching MaxLength:
```javascript
function onDescriptionChange(executionContext) {
    const control = executionContext.getFormContext().getControl("description");
    const value = control.Value || "";
    const remaining = control.MaxLength - value.length;

    if (remaining < 100) {
        control.AddNotification({
            uniqueId: "lengthNotif",
            messages: [`${remaining} characters remaining`],
            notificationLevel: "RECOMMENDATION"
        });
    } else {
        control.ClearNotification("lengthNotif");
    }
}
```

## Test Coverage Summary
✅ **Value Operations**: Get, Set, Clear
✅ **Properties**: MaxLength, Format, Type, Name, Label
✅ **State Management**: Required, Dirty, Visible, Disabled
✅ **Multi-line Support**: Line breaks, paragraphs, formatting
✅ **Text Analysis**: Character count, word count, line count
✅ **Length Validation**: MaxLength enforcement, truncation
✅ **UI Operations**: Notifications, Focus, Visibility, Labels
✅ **State Restoration**: Original value recovery

## Related Test Suites
- **String Control Tests**: Single-line text functionality (Name field)
- **Lookup Control Tests**: Reference field functionality (PrimaryContactId field)
- **Integer Control Tests**: Whole number functionality (NumberOfEmployees field)
- **DateTime Control Tests**: Date/time functionality (CreatedOn field)

---

**Test Suite Version**: 1.0
**Last Updated**: 2024
**Dynamics 365 Version**: 9.0+
**Status**: ✅ Complete - All 11 Field Types Implemented (100%)
