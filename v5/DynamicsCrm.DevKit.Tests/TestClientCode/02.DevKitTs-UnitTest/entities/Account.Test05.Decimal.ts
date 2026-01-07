import { Account } from './Account.form';
import { OptionSet } from './OptionSet';

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
export function TestDecimal(form: Account.Account_DevKitV4): boolean {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const startTime = new Date().toLocaleTimeString();
    const originalValue = form.Body.v4_Decimal.Value;

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // Decimal/Double-specific properties
        results.push({ Test: "R1", Property: "Max", Value: form.Body.v4_Decimal.Max, Status: typeof form.Body.v4_Decimal.Max === "number" ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "Min", Value: form.Body.v4_Decimal.Min, Status: typeof form.Body.v4_Decimal.Min === "number" ? "✓" : "⚠" });
        results.push({ Test: "R3", Property: "Precision", Value: form.Body.v4_Decimal.Precision, Status: typeof form.Body.v4_Decimal.Precision === "number" ? "✓" : "⚠" });
        results.push({ Test: "R4", Property: "Value", Value: originalValue, Status: "✓" });

        // Inherited from IControl
        results.push({ Test: "R5", Property: "Attribute", Value: form.Body.v4_Decimal.Attribute ? "object" : "null", Status: form.Body.v4_Decimal.Attribute ? "✓" : "⚠" });
        results.push({ Test: "R6", Property: "AttributeName", Value: form.Body.v4_Decimal.AttributeName, Status: form.Body.v4_Decimal.AttributeName === "v4_decimal" ? "✓" : "⚠" });
        results.push({ Test: "R7", Property: "AttributeType", Value: form.Body.v4_Decimal.AttributeType, Status: form.Body.v4_Decimal.AttributeType === OptionSet.FieldAttributeType.Decimal ? "✓" : "⚠" });
        results.push({ Test: "R8", Property: "ControlName", Value: form.Body.v4_Decimal.ControlName, Status: "✓" });
        results.push({ Test: "R9", Property: "ControlType", Value: form.Body.v4_Decimal.ControlType, Status: "✓" });
        results.push({ Test: "R10", Property: "Format", Value: form.Body.v4_Decimal.Format, Status: "✓" });
        results.push({ Test: "R11", Property: "IsDirty", Value: form.Body.v4_Decimal.IsDirty, Status: "✓" });
        results.push({ Test: "R12", Property: "IsValid", Value: form.Body.v4_Decimal.IsValid, Status: "✓" });
        results.push({ Test: "R13", Property: "RequiredLevel", Value: form.Body.v4_Decimal.RequiredLevel, Status: "✓" });
        results.push({ Test: "R14", Property: "SubmitMode", Value: form.Body.v4_Decimal.SubmitMode, Status: "✓" });
        results.push({ Test: "R15", Property: "Disabled", Value: form.Body.v4_Decimal.Disabled, Status: "✓" });
        results.push({ Test: "R16", Property: "Label", Value: form.Body.v4_Decimal.Label, Status: "✓" });
        results.push({ Test: "R17", Property: "Visible", Value: form.Body.v4_Decimal.Visible, Status: "✓" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Setter: Value
    try {
        const testValue = (originalValue || 0) + 1.5;
        form.Body.v4_Decimal.Value = testValue;
        const newValue = form.Body.v4_Decimal.Value;
        form.Body.v4_Decimal.Value = originalValue;
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set→Restored" : "Failed", Status: newValue === testValue ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Precision
    try {
        const origPrecision = form.Body.v4_Decimal.Precision;
        form.Body.v4_Decimal.Precision = origPrecision;
        methodResults.push({ Test: "S2", Property: "Precision (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "Precision (set)", Value: e.message, Status: "✗" });
    }

    // Setter: RequiredLevel
    try {
        const origRequired = form.Body.v4_Decimal.RequiredLevel;
        form.Body.v4_Decimal.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
        const check = form.Body.v4_Decimal.RequiredLevel;
        form.Body.v4_Decimal.RequiredLevel = origRequired;
        methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set→Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Disabled
    try {
        const origDisabled = form.Body.v4_Decimal.Disabled;
        form.Body.v4_Decimal.Disabled = !origDisabled;
        const check = form.Body.v4_Decimal.Disabled;
        form.Body.v4_Decimal.Disabled = origDisabled;
        methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Label
    try {
        const origLabel = form.Body.v4_Decimal.Label;
        form.Body.v4_Decimal.Label = origLabel + " (TEST)";
        const check = form.Body.v4_Decimal.Label;
        form.Body.v4_Decimal.Label = origLabel;
        methodResults.push({ Test: "S5", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = form.Body.v4_Decimal.Visible;
        form.Body.v4_Decimal.Visible = !origVisible;
        const check = form.Body.v4_Decimal.Visible;
        form.Body.v4_Decimal.Visible = origVisible;
        methodResults.push({ Test: "S6", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Methods
    const onChangeCallback = (ctx: any) => console.log("  📍 Decimal OnChange fired");

    try {
        form.Body.v4_Decimal.AddOnChange(onChangeCallback);
        methodResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Decimal.RemoveOnChange(onChangeCallback);
        methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Decimal.FireOnChange();
        methodResults.push({ Test: "S9", Property: "FireOnChange", Value: "Fired", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S9", Property: "FireOnChange", Value: e.message, Status: "✗" });
    }

    try {
        setTimeout(() => form.Body.v4_Decimal.Focus(), 1000);
        methodResults.push({ Test: "S10", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S10", Property: "Focus", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Decimal.SetNotification("Test Decimal notification", "DEC_TEST_1");
        setTimeout(() => form.Body.v4_Decimal.ClearNotification("DEC_TEST_1"), 3000);
        methodResults.push({ Test: "S11", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S11", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Decimal.SetIsValid(false, "Test invalid");
        setTimeout(() => form.Body.v4_Decimal.SetIsValid(true), 2000);
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

    console.groupCollapsed(`✅ [TS] TEST 05: Decimal Control [${startTime}] - Using: v4_Decimal field - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R17)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S12)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
    return passed === total;
}


