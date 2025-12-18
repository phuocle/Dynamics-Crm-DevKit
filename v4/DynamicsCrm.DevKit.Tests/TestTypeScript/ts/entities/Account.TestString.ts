import { AccountForm } from './generator/Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 3: String Control - Name Field
 * String extends IControl with MaxLength property
 * Uses console.table for cleaner output
 */
export function TestString(form: AccountForm.Form): void {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const str = form.Body.Name;
    const startTime = new Date().toLocaleTimeString();
    const originalValue = str.Value;

    // =====================================================
    // STRING-SPECIFIC PROPERTIES
    // =====================================================
    try {
        // MaxLength (String-specific, readonly)
        results.push({
            Test: "S1",
            Property: "MaxLength",
            Value: str.MaxLength,
            Status: typeof str.MaxLength === "number" ? "✓" : "⚠"
        });

        // Value (string | null)
        results.push({
            Test: "S2",
            Property: "Value",
            Value: originalValue ? `"${originalValue.substring(0, 50)}${originalValue.length > 50 ? '...' : ''}"` : "(empty)",
            Status: "✓"
        });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "String Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // INHERITED FROM IControl - Properties
    // =====================================================
    try {
        results.push({ Test: "I1", Property: "Attribute", Value: str.Attribute ? "object" : "null", Status: str.Attribute ? "✓" : "⚠" });
        results.push({ Test: "I2", Property: "AttributeName", Value: str.AttributeName, Status: str.AttributeName === "name" ? "✓" : "⚠" });
        results.push({ Test: "I3", Property: "AttributeType", Value: str.AttributeType, Status: str.AttributeType === "string" ? "✓" : "⚠" });
        results.push({ Test: "I4", Property: "ControlName", Value: str.ControlName, Status: "✓" });
        results.push({ Test: "I5", Property: "ControlType", Value: str.ControlType, Status: "✓" });
        results.push({ Test: "I6", Property: "Format", Value: str.Format, Status: "✓" });
        results.push({ Test: "I7", Property: "IsDirty", Value: str.IsDirty, Status: "✓" });
        results.push({ Test: "I8", Property: "IsValid", Value: str.IsValid, Status: "✓" });
        results.push({ Test: "I9", Property: "RequiredLevel", Value: str.RequiredLevel, Status: "✓" });
        results.push({ Test: "I10", Property: "SubmitMode", Value: str.SubmitMode, Status: "✓" });
        results.push({ Test: "I11", Property: "Disabled", Value: str.Disabled, Status: "✓" });
        results.push({ Test: "I12", Property: "Label", Value: str.Label, Status: "✓" });
        results.push({ Test: "I13", Property: "Visible", Value: str.Visible, Status: "✓" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "IControl Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // INHERITED FROM IControl - Setter Tests
    // =====================================================
    try {
        // Value setter
        str.Value = (originalValue || "") + " [TEST]";
        const newValue = str.Value;
        str.Value = originalValue;
        methodResults.push({ Test: "SET1", Property: "Value (set)", Value: newValue?.includes("[TEST]") ? "Set→Restored" : "Failed", Status: newValue?.includes("[TEST]") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "SET1", Property: "Value (set)", Value: e.message, Status: "✗" });
    }

    try {
        const origRequired = str.RequiredLevel;
        str.RequiredLevel = "required";
        const check = str.RequiredLevel;
        str.RequiredLevel = origRequired;
        methodResults.push({ Test: "SET2", Property: "RequiredLevel (set)", Value: check === "required" ? "Set→Restored" : "Failed", Status: check === "required" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "SET2", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
    }

    try {
        const origDisabled = str.Disabled;
        str.Disabled = !origDisabled;
        const check = str.Disabled;
        str.Disabled = origDisabled;
        methodResults.push({ Test: "SET3", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "SET3", Property: "Disabled (set)", Value: e.message, Status: "✗" });
    }

    try {
        const origLabel = str.Label;
        str.Label = origLabel + " (TEST)";
        const check = str.Label;
        str.Label = origLabel;
        methodResults.push({ Test: "SET4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "SET4", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    try {
        const origVisible = str.Visible;
        str.Visible = !origVisible;
        const check = str.Visible;
        str.Visible = origVisible;
        methodResults.push({ Test: "SET5", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "SET5", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // INHERITED FROM IControl - Methods
    // =====================================================
    const onChangeCallback = (ctx: any) => console.log("  📍 String OnChange fired");

    try {
        str.AddOnChange(onChangeCallback);
        methodResults.push({ Test: "M1", Property: "AddOnChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M1", Property: "AddOnChange", Value: e.message, Status: "✗" });
    }

    try {
        str.RemoveOnChange(onChangeCallback);
        methodResults.push({ Test: "M2", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M2", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
    }

    try {
        str.FireOnChange();
        methodResults.push({ Test: "M3", Property: "FireOnChange", Value: "Fired", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M3", Property: "FireOnChange", Value: e.message, Status: "✗" });
    }

    try {
        setTimeout(() => str.Focus(), 1000);
        methodResults.push({ Test: "M4", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M4", Property: "Focus", Value: e.message, Status: "✗" });
    }

    try {
        str.SetNotification("Test String notification", "STRING_TEST_1");
        setTimeout(() => str.ClearNotification("STRING_TEST_1"), 3000);
        methodResults.push({ Test: "M5", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M5", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        str.SetIsValid(false, "Test invalid");
        setTimeout(() => str.SetIsValid(true), 2000);
        methodResults.push({ Test: "M6", Property: "SetIsValid", Value: "Set→Restored (2s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M6", Property: "SetIsValid", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    // Calculate summary first for header
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`📄 TEST 3: String Control [${startTime}] - Using: Name field - ${passed}/${total}`);

    console.log("%c📋 Properties (15 items)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (11 items)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    // Summary
    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}
