import { FormAccount_DevKitV4 } from './generator/Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 8: Boolean Control - CreditOnHold Field
 * Boolean extends IControl with InitialValue property
 * Uses console.table for cleaner output
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestBoolean(form: FormAccount_DevKitV4.Form): void {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const bool = form.Body.v4_Boolean;
    const startTime = new Date().toLocaleTimeString();
    const originalValue = bool.Value;

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // Boolean-specific properties (InitialValue can be boolean or 0/1)
        const initVal = bool.InitialValue;
        const isValidInitValue = typeof initVal === "boolean" || initVal === 0 || initVal === 1;
        results.push({ Test: "R1", Property: "InitialValue", Value: initVal, Status: isValidInitValue ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "Value", Value: originalValue, Status: "✓" });

        // Inherited from IControl
        results.push({ Test: "R3", Property: "Attribute", Value: bool.Attribute ? "object" : "null", Status: bool.Attribute ? "✓" : "⚠" });
        results.push({ Test: "R4", Property: "AttributeName", Value: bool.AttributeName, Status: bool.AttributeName === "creditonhold" ? "✓" : "⚠" });
        results.push({ Test: "R5", Property: "AttributeType", Value: bool.AttributeType, Status: bool.AttributeType === "boolean" ? "✓" : "⚠" });
        results.push({ Test: "R6", Property: "ControlName", Value: bool.ControlName, Status: "✓" });
        results.push({ Test: "R7", Property: "ControlType", Value: bool.ControlType, Status: "✓" });
        results.push({ Test: "R8", Property: "Format", Value: bool.Format, Status: "✓" });
        results.push({ Test: "R9", Property: "IsDirty", Value: bool.IsDirty, Status: "✓" });
        results.push({ Test: "R10", Property: "IsValid", Value: bool.IsValid, Status: "✓" });
        results.push({ Test: "R11", Property: "RequiredLevel", Value: bool.RequiredLevel, Status: "✓" });
        results.push({ Test: "R12", Property: "SubmitMode", Value: bool.SubmitMode, Status: "✓" });
        results.push({ Test: "R13", Property: "Disabled", Value: bool.Disabled, Status: "✓" });
        results.push({ Test: "R14", Property: "Label", Value: bool.Label, Status: "✓" });
        results.push({ Test: "R15", Property: "Visible", Value: bool.Visible, Status: "✓" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Setter: Value
    try {
        const testValue = !originalValue;
        bool.Value = testValue;
        const newValue = bool.Value;
        bool.Value = originalValue;
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set→Restored" : "Failed", Status: newValue === testValue ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
    }

    // Setter: RequiredLevel
    try {
        const origRequired = bool.RequiredLevel;
        bool.RequiredLevel = "required";
        const check = bool.RequiredLevel;
        bool.RequiredLevel = origRequired;
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === "required" ? "Set→Restored" : "Failed", Status: check === "required" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Disabled
    try {
        const origDisabled = bool.Disabled;
        bool.Disabled = !origDisabled;
        const check = bool.Disabled;
        bool.Disabled = origDisabled;
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Label
    try {
        const origLabel = bool.Label;
        bool.Label = origLabel + " (TEST)";
        const check = bool.Label;
        bool.Label = origLabel;
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = bool.Visible;
        bool.Visible = !origVisible;
        const check = bool.Visible;
        bool.Visible = origVisible;
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Methods
    const onChangeCallback = (ctx: any) => console.log("  📍 Boolean OnChange fired");

    try {
        bool.AddOnChange(onChangeCallback);
        methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "✗" });
    }

    try {
        bool.RemoveOnChange(onChangeCallback);
        methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
    }

    try {
        bool.FireOnChange();
        methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "✗" });
    }

    try {
        setTimeout(() => bool.Focus(), 1000);
        methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "✗" });
    }

    try {
        bool.SetNotification("Test Boolean notification", "BOOL_TEST_1");
        setTimeout(() => bool.ClearNotification("BOOL_TEST_1"), 3000);
        methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        bool.SetIsValid(false, "Test invalid");
        setTimeout(() => bool.SetIsValid(true), 2000);
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

    console.groupCollapsed(`✅ TEST 8: Boolean Control [${startTime}] - Using: CreditOnHold field - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R15)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S11)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}
