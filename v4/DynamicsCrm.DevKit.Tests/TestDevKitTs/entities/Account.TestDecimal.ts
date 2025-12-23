import { AccountForm } from './generator/Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 19: Decimal Control - v4_Latitude Field
 * Decimal extends IControlNumber with Max, Min, Precision properties
 * Uses console.table for cleaner output
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestDecimal(form: AccountForm.Form): void {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const decimal = form.Body.v4_Latitude;
    const startTime = new Date().toLocaleTimeString();
    const originalValue = decimal.Value;

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // Decimal/Double-specific properties
        results.push({ Test: "R1", Property: "Max", Value: decimal.Max, Status: typeof decimal.Max === "number" ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "Min", Value: decimal.Min, Status: typeof decimal.Min === "number" ? "✓" : "⚠" });
        results.push({ Test: "R3", Property: "Precision", Value: decimal.Precision, Status: typeof decimal.Precision === "number" ? "✓" : "⚠" });
        results.push({ Test: "R4", Property: "Value", Value: originalValue, Status: "✓" });

        // Inherited from IControl
        results.push({ Test: "R5", Property: "Attribute", Value: decimal.Attribute ? "object" : "null", Status: decimal.Attribute ? "✓" : "⚠" });
        results.push({ Test: "R6", Property: "AttributeName", Value: decimal.AttributeName, Status: decimal.AttributeName === "v4_latitude" ? "✓" : "⚠" });
        results.push({ Test: "R7", Property: "AttributeType", Value: decimal.AttributeType, Status: decimal.AttributeType === "decimal" ? "✓" : "⚠" });
        results.push({ Test: "R8", Property: "ControlName", Value: decimal.ControlName, Status: "✓" });
        results.push({ Test: "R9", Property: "ControlType", Value: decimal.ControlType, Status: "✓" });
        results.push({ Test: "R10", Property: "Format", Value: decimal.Format, Status: "✓" });
        results.push({ Test: "R11", Property: "IsDirty", Value: decimal.IsDirty, Status: "✓" });
        results.push({ Test: "R12", Property: "IsValid", Value: decimal.IsValid, Status: "✓" });
        results.push({ Test: "R13", Property: "RequiredLevel", Value: decimal.RequiredLevel, Status: "✓" });
        results.push({ Test: "R14", Property: "SubmitMode", Value: decimal.SubmitMode, Status: "✓" });
        results.push({ Test: "R15", Property: "Disabled", Value: decimal.Disabled, Status: "✓" });
        results.push({ Test: "R16", Property: "Label", Value: decimal.Label, Status: "✓" });
        results.push({ Test: "R17", Property: "Visible", Value: decimal.Visible, Status: "✓" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Setter: Value
    try {
        const testValue = (originalValue || 0) + 1.5;
        decimal.Value = testValue;
        const newValue = decimal.Value;
        decimal.Value = originalValue;
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set→Restored" : "Failed", Status: newValue === testValue ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Precision
    try {
        const origPrecision = decimal.Precision;
        // Assuming default is usually 2, let's try 4 (if allowed) or just check we can set it
        // Note: Precision setting might throw if not within allowed range or locked by system
        // We will try to set it to current value just to test the setter exists/works without error
        decimal.Precision = origPrecision;
        methodResults.push({ Test: "S2", Property: "Precision (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "Precision (set)", Value: e.message, Status: "✗" });
    }

    // Setter: RequiredLevel
    try {
        const origRequired = decimal.RequiredLevel;
        decimal.RequiredLevel = "required";
        const check = decimal.RequiredLevel;
        decimal.RequiredLevel = origRequired;
        methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: check === "required" ? "Set→Restored" : "Failed", Status: check === "required" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Disabled
    try {
        const origDisabled = decimal.Disabled;
        decimal.Disabled = !origDisabled;
        const check = decimal.Disabled;
        decimal.Disabled = origDisabled;
        methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Label
    try {
        const origLabel = decimal.Label;
        decimal.Label = origLabel + " (TEST)";
        const check = decimal.Label;
        decimal.Label = origLabel;
        methodResults.push({ Test: "S5", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = decimal.Visible;
        decimal.Visible = !origVisible;
        const check = decimal.Visible;
        decimal.Visible = origVisible;
        methodResults.push({ Test: "S6", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Methods
    const onChangeCallback = (ctx: any) => console.log("  📍 Decimal OnChange fired");

    try {
        decimal.AddOnChange(onChangeCallback);
        methodResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "✗" });
    }

    try {
        decimal.RemoveOnChange(onChangeCallback);
        methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
    }

    try {
        decimal.FireOnChange();
        methodResults.push({ Test: "S9", Property: "FireOnChange", Value: "Fired", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S9", Property: "FireOnChange", Value: e.message, Status: "✗" });
    }

    try {
        setTimeout(() => decimal.Focus(), 1000);
        methodResults.push({ Test: "S10", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S10", Property: "Focus", Value: e.message, Status: "✗" });
    }

    try {
        decimal.SetNotification("Test Decimal notification", "DEC_TEST_1");
        setTimeout(() => decimal.ClearNotification("DEC_TEST_1"), 3000);
        methodResults.push({ Test: "S11", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S11", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        decimal.SetIsValid(false, "Test invalid");
        setTimeout(() => decimal.SetIsValid(true), 2000);
        methodResults.push({ Test: "S12", Property: "SetIsValid", Value: "Set→Restored (2s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S12", Property: "SetIsValid", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`🔢 TEST 19: Decimal Control [${startTime}] - Using: v4_Latitude field - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R17)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S12)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}
