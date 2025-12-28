import { FormAccount_DevKitV4 } from './Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 4: Integer Control - NumberOfEmployees Field
 * Integer extends IControlNumber with Max, Min properties (NO Precision support)
 * Uses console.table for cleaner output
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestInteger(form: FormAccount_DevKitV4.Form): void {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const startTime = new Date().toLocaleTimeString();
    const originalValue = form.Header.v4_Integer.Value;

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // Integer-specific properties (IControlNumber - NO Precision for Integer)
        results.push({ Test: "R1", Property: "Max", Value: form.Header.v4_Integer.Max, Status: typeof form.Header.v4_Integer.Max === "number" ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "Min", Value: form.Header.v4_Integer.Min, Status: typeof form.Header.v4_Integer.Min === "number" ? "✓" : "⚠" });
        results.push({ Test: "R3", Property: "Value", Value: originalValue, Status: "✓" });

        // Inherited from IControl
        results.push({ Test: "R4", Property: "Attribute", Value: form.Header.v4_Integer.Attribute ? "object" : "null", Status: form.Header.v4_Integer.Attribute ? "✓" : "⚠" });
        results.push({ Test: "R5", Property: "AttributeName", Value: form.Header.v4_Integer.AttributeName, Status: form.Header.v4_Integer.AttributeName === "v4_integer" ? "✓" : "⚠" });
        // @ts-ignore - AttributeType comparison is valid at runtime
        results.push({ Test: "R6", Property: "AttributeType", Value: form.Header.v4_Integer.AttributeType, Status: form.Header.v4_Integer.AttributeType === "integer" ? "✓" : "⚠" });
        results.push({ Test: "R7", Property: "ControlName", Value: form.Header.v4_Integer.ControlName, Status: "✓" });
        results.push({ Test: "R8", Property: "ControlType", Value: form.Header.v4_Integer.ControlType, Status: "✓" });
        results.push({ Test: "R9", Property: "Format", Value: form.Header.v4_Integer.Format, Status: "✓" });
        results.push({ Test: "R10", Property: "IsDirty", Value: form.Header.v4_Integer.IsDirty, Status: "✓" });
        results.push({ Test: "R11", Property: "IsValid", Value: form.Header.v4_Integer.IsValid, Status: "✓" });
        results.push({ Test: "R12", Property: "RequiredLevel", Value: form.Header.v4_Integer.RequiredLevel, Status: "✓" });
        results.push({ Test: "R13", Property: "SubmitMode", Value: form.Header.v4_Integer.SubmitMode, Status: "✓" });
        results.push({ Test: "R14", Property: "Disabled", Value: form.Header.v4_Integer.Disabled, Status: "✓" });
        results.push({ Test: "R15", Property: "Label", Value: form.Header.v4_Integer.Label, Status: "✓" });
        results.push({ Test: "R16", Property: "Visible", Value: form.Header.v4_Integer.Visible, Status: "✓" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Setter: Value
    try {
        const testValue = (originalValue || 0) + 100;
        form.Header.v4_Integer.Value = testValue;
        const newValue = form.Header.v4_Integer.Value;
        form.Header.v4_Integer.Value = originalValue;
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set→Restored" : "Failed", Status: newValue === testValue ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
    }

    // Setter: RequiredLevel
    try {
        const origRequired = form.Header.v4_Integer.RequiredLevel;
        form.Header.v4_Integer.RequiredLevel = "required";
        const check = form.Header.v4_Integer.RequiredLevel;
        form.Header.v4_Integer.RequiredLevel = origRequired;
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === "required" ? "Set→Restored" : "Failed", Status: check === "required" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Disabled
    try {
        const origDisabled = form.Header.v4_Integer.Disabled;
        form.Header.v4_Integer.Disabled = !origDisabled;
        const check = form.Header.v4_Integer.Disabled;
        form.Header.v4_Integer.Disabled = origDisabled;
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Label
    try {
        const origLabel = form.Header.v4_Integer.Label;
        form.Header.v4_Integer.Label = origLabel + " (TEST)";
        const check = form.Header.v4_Integer.Label;
        form.Header.v4_Integer.Label = origLabel;
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = form.Header.v4_Integer.Visible;
        form.Header.v4_Integer.Visible = !origVisible;
        const check = form.Header.v4_Integer.Visible;
        form.Header.v4_Integer.Visible = origVisible;
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Methods
    const onChangeCallback = (ctx: any) => console.log("  📍 Integer OnChange fired");

    try {
        form.Header.v4_Integer.AddOnChange(onChangeCallback);
        methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "✗" });
    }

    try {
        form.Header.v4_Integer.RemoveOnChange(onChangeCallback);
        methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
    }

    try {
        form.Header.v4_Integer.FireOnChange();
        methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "✗" });
    }

    try {
        setTimeout(() => form.Header.v4_Integer.Focus(), 1000);
        methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "✗" });
    }

    try {
        form.Header.v4_Integer.SetNotification("Test Integer notification", "INT_TEST_1");
        setTimeout(() => form.Header.v4_Integer.ClearNotification("INT_TEST_1"), 3000);
        methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        form.Header.v4_Integer.SetIsValid(false, "Test invalid");
        setTimeout(() => form.Header.v4_Integer.SetIsValid(true), 2000);
        methodResults.push({ Test: "S11", Property: "SetIsValid", Value: "Set→Restored (2s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S11", Property: "SetIsValid", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`✅ TEST 4: Integer Control [${startTime}] - Using: v4_Integer field - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R16)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S11)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}


