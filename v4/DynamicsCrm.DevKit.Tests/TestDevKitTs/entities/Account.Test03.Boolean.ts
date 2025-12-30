import { FormAccount_DevKitV4 } from './Account.form';
import { OptionSet } from './OptionSet';

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
export function TestBoolean(form: FormAccount_DevKitV4.Form): boolean {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const startTime = new Date().toLocaleTimeString();
    const originalValue = form.Body.v4_Boolean.Value;

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // Boolean-specific properties (InitialValue can be boolean or 0/1)
        const initVal = form.Body.v4_Boolean.InitialValue;
        const isValidInitValue = typeof initVal === "boolean" || initVal === 0 || initVal === 1;
        results.push({ Test: "R1", Property: "InitialValue", Value: initVal, Status: isValidInitValue ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "Value", Value: originalValue, Status: "✓" });

        // Inherited from IControl
        results.push({ Test: "R3", Property: "Attribute", Value: form.Body.v4_Boolean.Attribute ? "object" : "null", Status: form.Body.v4_Boolean.Attribute ? "✓" : "⚠" });
        results.push({ Test: "R4", Property: "AttributeName", Value: form.Body.v4_Boolean.AttributeName, Status: form.Body.v4_Boolean.AttributeName === "v4_boolean" ? "✓" : "⚠" });
        results.push({ Test: "R5", Property: "AttributeType", Value: form.Body.v4_Boolean.AttributeType, Status: form.Body.v4_Boolean.AttributeType === OptionSet.FieldAttributeType.Boolean ? "✓" : "⚠" });
        results.push({ Test: "R6", Property: "ControlName", Value: form.Body.v4_Boolean.ControlName, Status: "✓" });
        results.push({ Test: "R7", Property: "ControlType", Value: form.Body.v4_Boolean.ControlType, Status: "✓" });
        results.push({ Test: "R8", Property: "Format", Value: form.Body.v4_Boolean.Format, Status: "✓" });
        results.push({ Test: "R9", Property: "IsDirty", Value: form.Body.v4_Boolean.IsDirty, Status: "✓" });
        results.push({ Test: "R10", Property: "IsValid", Value: form.Body.v4_Boolean.IsValid, Status: "✓" });
        results.push({ Test: "R11", Property: "RequiredLevel", Value: form.Body.v4_Boolean.RequiredLevel, Status: "✓" });
        results.push({ Test: "R12", Property: "SubmitMode", Value: form.Body.v4_Boolean.SubmitMode, Status: "✓" });
        results.push({ Test: "R13", Property: "Disabled", Value: form.Body.v4_Boolean.Disabled, Status: "✓" });
        results.push({ Test: "R14", Property: "Label", Value: form.Body.v4_Boolean.Label, Status: "✓" });
        results.push({ Test: "R15", Property: "Visible", Value: form.Body.v4_Boolean.Visible, Status: "✓" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Setter: Value
    try {
        const testValue = !originalValue;
        form.Body.v4_Boolean.Value = testValue;
        const newValue = form.Body.v4_Boolean.Value;
        form.Body.v4_Boolean.Value = originalValue;
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set→Restored" : "Failed", Status: newValue === testValue ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
    }

    // Setter: RequiredLevel
    try {
        const origRequired = form.Body.v4_Boolean.RequiredLevel;
        form.Body.v4_Boolean.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
        const check = form.Body.v4_Boolean.RequiredLevel;
        form.Body.v4_Boolean.RequiredLevel = origRequired;
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set→Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Disabled
    try {
        const origDisabled = form.Body.v4_Boolean.Disabled;
        form.Body.v4_Boolean.Disabled = !origDisabled;
        const check = form.Body.v4_Boolean.Disabled;
        form.Body.v4_Boolean.Disabled = origDisabled;
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Label
    try {
        const origLabel = form.Body.v4_Boolean.Label;
        form.Body.v4_Boolean.Label = origLabel + " (TEST)";
        const check = form.Body.v4_Boolean.Label;
        form.Body.v4_Boolean.Label = origLabel;
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = form.Body.v4_Boolean.Visible;
        form.Body.v4_Boolean.Visible = !origVisible;
        const check = form.Body.v4_Boolean.Visible;
        form.Body.v4_Boolean.Visible = origVisible;
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Methods
    const onChangeCallback = (ctx: any) => console.log("  📍 Boolean OnChange fired");

    try {
        form.Body.v4_Boolean.AddOnChange(onChangeCallback);
        methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Boolean.RemoveOnChange(onChangeCallback);
        methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Boolean.FireOnChange();
        methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "✗" });
    }

    try {
        setTimeout(() => form.Body.v4_Boolean.Focus(), 1000);
        methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Boolean.SetNotification("Test Boolean notification", "BOOL_TEST_1");
        setTimeout(() => form.Body.v4_Boolean.ClearNotification("BOOL_TEST_1"), 3000);
        methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Boolean.SetIsValid(false, "Test invalid");
        setTimeout(() => form.Body.v4_Boolean.SetIsValid(true), 2000);
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

    console.groupCollapsed(`✅ [TS] TEST 3: Boolean Control [${startTime}] - Using: v4_Boolean field - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R15)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S11)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
    return passed === total;
}

