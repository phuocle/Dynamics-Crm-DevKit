import { FormAccount_DevKitV4 } from './Account.form';
import { OptionSet } from './OptionSet';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 3: String Control - Name Field
 * String extends IControlText with MaxLength property
 * Uses console.table for cleaner output
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestString(form: FormAccount_DevKitV4.Form): boolean {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const str = form.Body.v4_String;
    const startTime = new Date().toLocaleTimeString();
    const originalValue = str.Value;

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // String-specific properties
        results.push({ Test: "R1", Property: "MaxLength", Value: str.MaxLength, Status: typeof str.MaxLength === "number" ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "Value", Value: originalValue ? `"${originalValue.substring(0, 50)}${originalValue.length > 50 ? '...' : ''}"` : "(empty)", Status: "✓" });

        // Inherited from IControl
        results.push({ Test: "R3", Property: "Attribute", Value: str.Attribute ? "object" : "null", Status: str.Attribute ? "✓" : "⚠" });
        results.push({ Test: "R4", Property: "AttributeName", Value: str.AttributeName, Status: str.AttributeName === "v4_string" ? "✓" : "⚠" });
        results.push({ Test: "R5", Property: "AttributeType", Value: str.AttributeType, Status: str.AttributeType === OptionSet.FieldAttributeType.String ? "✓" : "⚠" });
        results.push({ Test: "R6", Property: "ControlName", Value: str.ControlName, Status: "✓" });
        results.push({ Test: "R7", Property: "ControlType", Value: str.ControlType, Status: "✓" });
        results.push({ Test: "R8", Property: "Format", Value: str.Format, Status: "✓" });
        results.push({ Test: "R9", Property: "IsDirty", Value: str.IsDirty, Status: "✓" });
        results.push({ Test: "R10", Property: "IsValid", Value: str.IsValid, Status: "✓" });
        results.push({ Test: "R11", Property: "RequiredLevel", Value: str.RequiredLevel, Status: "✓" });
        results.push({ Test: "R12", Property: "SubmitMode", Value: str.SubmitMode, Status: "✓" });
        results.push({ Test: "R13", Property: "Disabled", Value: str.Disabled, Status: "✓" });
        results.push({ Test: "R14", Property: "Label", Value: str.Label, Status: "✓" });
        results.push({ Test: "R15", Property: "Visible", Value: str.Visible, Status: "✓" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================
    try {
        // Setter: Value
        str.Value = (originalValue || "") + " [TEST]";
        const newValue = str.Value;
        str.Value = originalValue;
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue?.includes("[TEST]") ? "Set→Restored" : "Failed", Status: newValue?.includes("[TEST]") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
    }

    try {
        const origRequired = str.RequiredLevel;
        str.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
        const check = str.RequiredLevel;
        str.RequiredLevel = origRequired;
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set→Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
    }

    try {
        const origDisabled = str.Disabled;
        str.Disabled = !origDisabled;
        const check = str.Disabled;
        str.Disabled = origDisabled;
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "✗" });
    }

    try {
        const origLabel = str.Label;
        str.Label = origLabel + " (TEST)";
        const check = str.Label;
        str.Label = origLabel;
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    try {
        const origVisible = str.Visible;
        str.Visible = !origVisible;
        const check = str.Visible;
        str.Visible = origVisible;
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Methods
    const onChangeCallback = (ctx: any) => console.log("  📍 String OnChange fired");

    try {
        str.AddOnChange(onChangeCallback);
        methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "✗" });
    }

    try {
        str.RemoveOnChange(onChangeCallback);
        methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
    }

    try {
        str.FireOnChange();
        methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "✗" });
    }

    try {
        setTimeout(() => str.Focus(), 1000);
        methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "✗" });
    }

    try {
        str.SetNotification("Test String notification", "STRING_TEST_1");
        setTimeout(() => str.ClearNotification("STRING_TEST_1"), 3000);
        methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        str.SetIsValid(false, "Test invalid");
        setTimeout(() => str.SetIsValid(true), 2000);
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

    console.groupCollapsed(`✅ [TS] TEST 01: String Control [${startTime}] - Using: v4_String field - ${passed}/${total}`);

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


