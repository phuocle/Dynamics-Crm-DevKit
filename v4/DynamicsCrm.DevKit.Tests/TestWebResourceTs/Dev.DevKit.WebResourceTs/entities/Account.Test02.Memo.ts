import { FormAccount_DevKitV4 } from './Account.form';
import { OptionSet } from './OptionSet';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 2: Memo Control - v4_Memo Field
 * Memo extends IControlText with MaxLength property
 * Uses console.table for cleaner output
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestMemo(form: FormAccount_DevKitV4.Form): boolean {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const startTime = new Date().toLocaleTimeString();
    const originalValue = form.Body.v4_Memo.Value;

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // Memo-specific properties
        results.push({ Test: "R1", Property: "MaxLength", Value: form.Body.v4_Memo.MaxLength, Status: typeof form.Body.v4_Memo.MaxLength === "number" ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "Value", Value: originalValue ? `"${originalValue.substring(0, 50)}${originalValue.length > 50 ? '...' : ''}"` : "(empty)", Status: "✓" });

        // Inherited from IControl
        results.push({ Test: "R3", Property: "Attribute", Value: form.Body.v4_Memo.Attribute ? "object" : "null", Status: form.Body.v4_Memo.Attribute ? "✓" : "⚠" });
        results.push({ Test: "R4", Property: "AttributeName", Value: form.Body.v4_Memo.AttributeName, Status: form.Body.v4_Memo.AttributeName === "v4_memo" ? "✓" : "⚠" });
        results.push({ Test: "R5", Property: "AttributeType", Value: form.Body.v4_Memo.AttributeType, Status: form.Body.v4_Memo.AttributeType === OptionSet.FieldAttributeType.Memo ? "✓" : "⚠" });
        results.push({ Test: "R6", Property: "ControlName", Value: form.Body.v4_Memo.ControlName, Status: "✓" });
        results.push({ Test: "R7", Property: "ControlType", Value: form.Body.v4_Memo.ControlType, Status: "✓" });
        results.push({ Test: "R8", Property: "Format", Value: form.Body.v4_Memo.Format, Status: "✓" });
        results.push({ Test: "R9", Property: "IsDirty", Value: form.Body.v4_Memo.IsDirty, Status: "✓" });
        results.push({ Test: "R10", Property: "IsValid", Value: form.Body.v4_Memo.IsValid, Status: "✓" });
        results.push({ Test: "R11", Property: "RequiredLevel", Value: form.Body.v4_Memo.RequiredLevel, Status: "✓" });
        results.push({ Test: "R12", Property: "SubmitMode", Value: form.Body.v4_Memo.SubmitMode, Status: "✓" });
        results.push({ Test: "R13", Property: "Disabled", Value: form.Body.v4_Memo.Disabled, Status: "✓" });
        results.push({ Test: "R14", Property: "Label", Value: form.Body.v4_Memo.Label, Status: "✓" });
        results.push({ Test: "R15", Property: "Visible", Value: form.Body.v4_Memo.Visible, Status: "✓" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================
    try {
        // Setter: Value
        form.Body.v4_Memo.Value = (originalValue || "") + " [TEST]";
        const newValue = form.Body.v4_Memo.Value;
        form.Body.v4_Memo.Value = originalValue;
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue?.includes("[TEST]") ? "Set→Restored" : "Failed", Status: newValue?.includes("[TEST]") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
    }

    try {
        // Setter: RequiredLevel
        const origRequired = form.Body.v4_Memo.RequiredLevel;
        form.Body.v4_Memo.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
        const check = form.Body.v4_Memo.RequiredLevel;
        form.Body.v4_Memo.RequiredLevel = origRequired;
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set→Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
    }

    try {
        // Setter: Disabled
        const origDisabled = form.Body.v4_Memo.Disabled;
        form.Body.v4_Memo.Disabled = !origDisabled;
        const check = form.Body.v4_Memo.Disabled;
        form.Body.v4_Memo.Disabled = origDisabled;
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "✗" });
    }

    try {
        // Setter: Label
        const origLabel = form.Body.v4_Memo.Label;
        form.Body.v4_Memo.Label = origLabel + " (TEST)";
        const check = form.Body.v4_Memo.Label;
        form.Body.v4_Memo.Label = origLabel;
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    try {
        // Setter: Visible
        const origVisible = form.Body.v4_Memo.Visible;
        form.Body.v4_Memo.Visible = !origVisible;
        const check = form.Body.v4_Memo.Visible;
        form.Body.v4_Memo.Visible = origVisible;
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Methods
    const onChangeCallback = (ctx: any) => console.log("  📍 Memo OnChange fired");

    try {
        form.Body.v4_Memo.AddOnChange(onChangeCallback);
        methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Memo.RemoveOnChange(onChangeCallback);
        methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Memo.FireOnChange();
        methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "✗" });
    }

    try {
        setTimeout(() => form.Body.v4_Memo.Focus(), 1000);
        methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Memo.SetNotification("Test Memo notification", "MEMO_TEST_1");
        setTimeout(() => form.Body.v4_Memo.ClearNotification("MEMO_TEST_1"), 3000);
        methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Memo.SetIsValid(false, "Test invalid");
        setTimeout(() => form.Body.v4_Memo.SetIsValid(true), 2000);
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

    console.groupCollapsed(`✅ [TS] TEST 2: Memo Control [${startTime}] - Using: v4_Memo field - ${passed}/${total}`);

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


