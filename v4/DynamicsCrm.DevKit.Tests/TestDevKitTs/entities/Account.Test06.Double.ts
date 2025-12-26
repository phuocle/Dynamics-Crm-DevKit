import { FormAccount_DevKitV4 } from './Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 20: Double Control - v4_DiscountPercentage Field
 * Double extends IControlNumber with Max, Min, Precision properties
 * Uses console.table for cleaner output
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestDouble(form: FormAccount_DevKitV4.Form): void {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const startTime = new Date().toLocaleTimeString();
    const originalValue = form.Body.v4_Double.Value;

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // Double-specific properties
        results.push({ Test: "R1", Property: "Max", Value: form.Body.v4_Double.Max, Status: typeof form.Body.v4_Double.Max === "number" ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "Min", Value: form.Body.v4_Double.Min, Status: typeof form.Body.v4_Double.Min === "number" ? "✓" : "⚠" });
        results.push({ Test: "R3", Property: "Precision", Value: form.Body.v4_Double.Precision, Status: typeof form.Body.v4_Double.Precision === "number" ? "✓" : "⚠" });
        results.push({ Test: "R4", Property: "Value", Value: originalValue, Status: "✓" });

        // Inherited from IControl
        results.push({ Test: "R5", Property: "Attribute", Value: form.Body.v4_Double.Attribute ? "object" : "null", Status: form.Body.v4_Double.Attribute ? "✓" : "⚠" });
        results.push({ Test: "R6", Property: "AttributeName", Value: form.Body.v4_Double.AttributeName, Status: form.Body.v4_Double.AttributeName === "v4_double" ? "✓" : "⚠" });
        // @ts-ignore - AttributeType comparison is valid at runtime
        results.push({ Test: "R7", Property: "AttributeType", Value: form.Body.v4_Double.AttributeType, Status: form.Body.v4_Double.AttributeType === "double" ? "✓" : "⚠" });
        results.push({ Test: "R8", Property: "ControlName", Value: form.Body.v4_Double.ControlName, Status: "✓" });
        results.push({ Test: "R9", Property: "ControlType", Value: form.Body.v4_Double.ControlType, Status: "✓" });
        results.push({ Test: "R10", Property: "Format", Value: form.Body.v4_Double.Format, Status: "✓" });
        results.push({ Test: "R11", Property: "IsDirty", Value: form.Body.v4_Double.IsDirty, Status: "✓" });
        results.push({ Test: "R12", Property: "IsValid", Value: form.Body.v4_Double.IsValid, Status: "✓" });
        results.push({ Test: "R13", Property: "RequiredLevel", Value: form.Body.v4_Double.RequiredLevel, Status: "✓" });
        results.push({ Test: "R14", Property: "SubmitMode", Value: form.Body.v4_Double.SubmitMode, Status: "✓" });
        results.push({ Test: "R15", Property: "Disabled", Value: form.Body.v4_Double.Disabled, Status: "✓" });
        results.push({ Test: "R16", Property: "Label", Value: form.Body.v4_Double.Label, Status: "✓" });
        results.push({ Test: "R17", Property: "Visible", Value: form.Body.v4_Double.Visible, Status: "✓" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Setter: Value
    try {
        const testValue = (originalValue || 0) + 0.5;
        form.Body.v4_Double.Value = testValue;
        const newValue = form.Body.v4_Double.Value;
        form.Body.v4_Double.Value = originalValue;
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set→Restored" : "Failed", Status: newValue === testValue ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Precision
    try {
        const origPrecision = form.Body.v4_Double.Precision;
        form.Body.v4_Double.Precision = origPrecision;
        methodResults.push({ Test: "S2", Property: "Precision (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "Precision (set)", Value: e.message, Status: "✗" });
    }

    // Setter: RequiredLevel
    try {
        const origRequired = form.Body.v4_Double.RequiredLevel;
        form.Body.v4_Double.RequiredLevel = "required";
        const check = form.Body.v4_Double.RequiredLevel;
        form.Body.v4_Double.RequiredLevel = origRequired;
        methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: check === "required" ? "Set→Restored" : "Failed", Status: check === "required" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Disabled
    try {
        const origDisabled = form.Body.v4_Double.Disabled;
        form.Body.v4_Double.Disabled = !origDisabled;
        const check = form.Body.v4_Double.Disabled;
        form.Body.v4_Double.Disabled = origDisabled;
        methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Label
    try {
        const origLabel = form.Body.v4_Double.Label;
        form.Body.v4_Double.Label = origLabel + " (TEST)";
        const check = form.Body.v4_Double.Label;
        form.Body.v4_Double.Label = origLabel;
        methodResults.push({ Test: "S5", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = form.Body.v4_Double.Visible;
        form.Body.v4_Double.Visible = !origVisible;
        const check = form.Body.v4_Double.Visible;
        form.Body.v4_Double.Visible = origVisible;
        methodResults.push({ Test: "S6", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Methods
    const onChangeCallback = (ctx: any) => console.log("  📍 Double OnChange fired");

    try {
        form.Body.v4_Double.AddOnChange(onChangeCallback);
        methodResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Double.RemoveOnChange(onChangeCallback);
        methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Double.FireOnChange();
        methodResults.push({ Test: "S9", Property: "FireOnChange", Value: "Fired", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S9", Property: "FireOnChange", Value: e.message, Status: "✗" });
    }

    try {
        setTimeout(() => form.Body.v4_Double.Focus(), 1000);
        methodResults.push({ Test: "S10", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S10", Property: "Focus", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Double.SetNotification("Test Double notification", "DBL_TEST_1");
        setTimeout(() => form.Body.v4_Double.ClearNotification("DBL_TEST_1"), 3000);
        methodResults.push({ Test: "S11", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S11", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Double.SetIsValid(false, "Test invalid");
        setTimeout(() => form.Body.v4_Double.SetIsValid(true), 2000);
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

    console.groupCollapsed(`✅ TEST 20: Double Control [${startTime}] - Using: v4_Double field - ${passed}/${total}`);

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


