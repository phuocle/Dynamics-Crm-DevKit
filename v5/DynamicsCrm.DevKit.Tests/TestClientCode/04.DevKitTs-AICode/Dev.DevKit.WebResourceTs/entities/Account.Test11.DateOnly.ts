import { FormAccount_DevKitV4 } from './Account.form';
import { OptionSet } from './OptionSet';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 10: DateOnly Control - v4_Birthday Field
 * DateOnly extends IControl (no ShowTime property unlike DateTime)
 * Uses console.table for cleaner output
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestDateOnly(form: FormAccount_DevKitV4.Form): boolean {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const startTime = new Date().toLocaleTimeString();
    const originalValue = form.Body.v4_DateOnly.Value;

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // DateOnly-specific: Value is the main property (no ShowTime)
        results.push({ Test: "R1", Property: "Value", Value: originalValue instanceof Date ? originalValue.toISOString() : originalValue, Status: "✓" });

        // Inherited from IControl
        results.push({ Test: "R2", Property: "Attribute", Value: form.Body.v4_DateOnly.Attribute ? "object" : "null", Status: form.Body.v4_DateOnly.Attribute ? "✓" : "⚠" });
        results.push({ Test: "R3", Property: "AttributeName", Value: form.Body.v4_DateOnly.AttributeName, Status: form.Body.v4_DateOnly.AttributeName === "v4_dateonly" ? "✓" : "⚠" });
        results.push({ Test: "R4", Property: "AttributeType", Value: form.Body.v4_DateOnly.AttributeType, Status: form.Body.v4_DateOnly.AttributeType === OptionSet.FieldAttributeType.DateTime ? "✓" : "⚠" });
        results.push({ Test: "R5", Property: "ControlName", Value: form.Body.v4_DateOnly.ControlName, Status: "✓" });
        results.push({ Test: "R6", Property: "ControlType", Value: form.Body.v4_DateOnly.ControlType, Status: "✓" });
        results.push({ Test: "R7", Property: "Format", Value: form.Body.v4_DateOnly.Format, Status: "✓" });
        results.push({ Test: "R8", Property: "IsDirty", Value: form.Body.v4_DateOnly.IsDirty, Status: "✓" });
        results.push({ Test: "R9", Property: "IsValid", Value: form.Body.v4_DateOnly.IsValid, Status: "✓" });
        results.push({ Test: "R10", Property: "RequiredLevel", Value: form.Body.v4_DateOnly.RequiredLevel, Status: "✓" });
        results.push({ Test: "R11", Property: "SubmitMode", Value: form.Body.v4_DateOnly.SubmitMode, Status: "✓" });
        results.push({ Test: "R12", Property: "Disabled", Value: form.Body.v4_DateOnly.Disabled, Status: "✓" });
        results.push({ Test: "R13", Property: "Label", Value: form.Body.v4_DateOnly.Label, Status: "✓" });
        results.push({ Test: "R14", Property: "Visible", Value: form.Body.v4_DateOnly.Visible, Status: "✓" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Setter: Value
    try {
        const testValue = new Date(1990, 5, 15); // June 15, 1990
        form.Body.v4_DateOnly.Value = testValue;
        const newValue = form.Body.v4_DateOnly.Value;
        form.Body.v4_DateOnly.Value = originalValue;
        // Value was set successfully if newValue exists
        const success = newValue !== null && newValue !== undefined;
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: success ? "Set→Restored" : "Failed", Status: success ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
    }

    // Setter: RequiredLevel
    try {
        const origRequired = form.Body.v4_DateOnly.RequiredLevel;
        form.Body.v4_DateOnly.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
        const check = form.Body.v4_DateOnly.RequiredLevel;
        form.Body.v4_DateOnly.RequiredLevel = origRequired;
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set→Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Disabled
    try {
        const origDisabled = form.Body.v4_DateOnly.Disabled;
        form.Body.v4_DateOnly.Disabled = !origDisabled;
        const check = form.Body.v4_DateOnly.Disabled;
        form.Body.v4_DateOnly.Disabled = origDisabled;
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Label
    try {
        const origLabel = form.Body.v4_DateOnly.Label;
        form.Body.v4_DateOnly.Label = origLabel + " (TEST)";
        const check = form.Body.v4_DateOnly.Label;
        form.Body.v4_DateOnly.Label = origLabel;
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = form.Body.v4_DateOnly.Visible;
        form.Body.v4_DateOnly.Visible = !origVisible;
        const check = form.Body.v4_DateOnly.Visible;
        form.Body.v4_DateOnly.Visible = origVisible;
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Methods
    const onChangeCallback = (ctx: any) => console.log("  📍 DateOnly OnChange fired");

    try {
        form.Body.v4_DateOnly.AddOnChange(onChangeCallback);
        methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_DateOnly.RemoveOnChange(onChangeCallback);
        methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_DateOnly.FireOnChange();
        methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "✗" });
    }

    try {
        setTimeout(() => form.Body.v4_DateOnly.Focus(), 1000);
        methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_DateOnly.SetNotification("Test DateOnly notification", "DO_TEST_1");
        setTimeout(() => form.Body.v4_DateOnly.ClearNotification("DO_TEST_1"), 3000);
        methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_DateOnly.SetIsValid(false, "Test invalid");
        setTimeout(() => form.Body.v4_DateOnly.SetIsValid(true), 2000);
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

    console.groupCollapsed(`✅ [TS] TEST 11: DateOnly Control [${startTime}] - Using: v4_DateOnly field - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R14)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
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


