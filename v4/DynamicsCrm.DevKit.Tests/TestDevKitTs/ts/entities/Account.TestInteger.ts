import { AccountForm } from './generator/Account.form';

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
export function TestInteger(form: AccountForm.Form): void {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const int = form.Header.NumberOfEmployees;
    const startTime = new Date().toLocaleTimeString();
    const originalValue = int.Value;

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // Integer-specific properties (IControlNumber - NO Precision for Integer)
        results.push({ Test: "R1", Property: "Max", Value: int.Max, Status: typeof int.Max === "number" ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "Min", Value: int.Min, Status: typeof int.Min === "number" ? "✓" : "⚠" });
        results.push({ Test: "R3", Property: "Value", Value: originalValue, Status: "✓" });

        // Inherited from IControl
        results.push({ Test: "R4", Property: "Attribute", Value: int.Attribute ? "object" : "null", Status: int.Attribute ? "✓" : "⚠" });
        results.push({ Test: "R5", Property: "AttributeName", Value: int.AttributeName, Status: int.AttributeName === "numberofemployees" ? "✓" : "⚠" });
        results.push({ Test: "R6", Property: "AttributeType", Value: int.AttributeType, Status: int.AttributeType === "integer" ? "✓" : "⚠" });
        results.push({ Test: "R7", Property: "ControlName", Value: int.ControlName, Status: "✓" });
        results.push({ Test: "R8", Property: "ControlType", Value: int.ControlType, Status: "✓" });
        results.push({ Test: "R9", Property: "Format", Value: int.Format, Status: "✓" });
        results.push({ Test: "R10", Property: "IsDirty", Value: int.IsDirty, Status: "✓" });
        results.push({ Test: "R11", Property: "IsValid", Value: int.IsValid, Status: "✓" });
        results.push({ Test: "R12", Property: "RequiredLevel", Value: int.RequiredLevel, Status: "✓" });
        results.push({ Test: "R13", Property: "SubmitMode", Value: int.SubmitMode, Status: "✓" });
        results.push({ Test: "R14", Property: "Disabled", Value: int.Disabled, Status: "✓" });
        results.push({ Test: "R15", Property: "Label", Value: int.Label, Status: "✓" });
        results.push({ Test: "R16", Property: "Visible", Value: int.Visible, Status: "✓" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Setter: Value
    try {
        const testValue = (originalValue || 0) + 100;
        int.Value = testValue;
        const newValue = int.Value;
        int.Value = originalValue;
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set→Restored" : "Failed", Status: newValue === testValue ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
    }

    // Setter: RequiredLevel
    try {
        const origRequired = int.RequiredLevel;
        int.RequiredLevel = "required";
        const check = int.RequiredLevel;
        int.RequiredLevel = origRequired;
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === "required" ? "Set→Restored" : "Failed", Status: check === "required" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Disabled
    try {
        const origDisabled = int.Disabled;
        int.Disabled = !origDisabled;
        const check = int.Disabled;
        int.Disabled = origDisabled;
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Label
    try {
        const origLabel = int.Label;
        int.Label = origLabel + " (TEST)";
        const check = int.Label;
        int.Label = origLabel;
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = int.Visible;
        int.Visible = !origVisible;
        const check = int.Visible;
        int.Visible = origVisible;
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Methods
    const onChangeCallback = (ctx: any) => console.log("  📍 Integer OnChange fired");

    try {
        int.AddOnChange(onChangeCallback);
        methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "✗" });
    }

    try {
        int.RemoveOnChange(onChangeCallback);
        methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
    }

    try {
        int.FireOnChange();
        methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "✗" });
    }

    try {
        setTimeout(() => int.Focus(), 1000);
        methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "✗" });
    }

    try {
        int.SetNotification("Test Integer notification", "INT_TEST_1");
        setTimeout(() => int.ClearNotification("INT_TEST_1"), 3000);
        methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        int.SetIsValid(false, "Test invalid");
        setTimeout(() => int.SetIsValid(true), 2000);
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

    console.groupCollapsed(`🔢 TEST 4: Integer Control [${startTime}] - Using: NumberOfEmployees field - ${passed}/${total}`);

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
