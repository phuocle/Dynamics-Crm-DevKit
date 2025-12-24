import { FormAccount_DevKitV4 } from './generator/Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 3: Memo Control - Description Field
 * Memo extends IControlText with MaxLength property
 * Uses console.table for cleaner output
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestMemo(form: FormAccount_DevKitV4.Form): void {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const memo = form.Body.v4_Memo;
    const startTime = new Date().toLocaleTimeString();
    const originalValue = memo.Value;

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // Memo-specific properties
        results.push({ Test: "R1", Property: "MaxLength", Value: memo.MaxLength, Status: typeof memo.MaxLength === "number" ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "Value", Value: originalValue ? `"${originalValue.substring(0, 50)}${originalValue.length > 50 ? '...' : ''}"` : "(empty)", Status: "✓" });

        // Inherited from IControl
        results.push({ Test: "R3", Property: "Attribute", Value: memo.Attribute ? "object" : "null", Status: memo.Attribute ? "✓" : "⚠" });
        results.push({ Test: "R4", Property: "AttributeName", Value: memo.AttributeName, Status: memo.AttributeName === "description" ? "✓" : "⚠" });
        results.push({ Test: "R5", Property: "AttributeType", Value: memo.AttributeType, Status: memo.AttributeType === "memo" ? "✓" : "⚠" });
        results.push({ Test: "R6", Property: "ControlName", Value: memo.ControlName, Status: "✓" });
        results.push({ Test: "R7", Property: "ControlType", Value: memo.ControlType, Status: "✓" });
        results.push({ Test: "R8", Property: "Format", Value: memo.Format, Status: "✓" });
        results.push({ Test: "R9", Property: "IsDirty", Value: memo.IsDirty, Status: "✓" });
        results.push({ Test: "R10", Property: "IsValid", Value: memo.IsValid, Status: "✓" });
        results.push({ Test: "R11", Property: "RequiredLevel", Value: memo.RequiredLevel, Status: "✓" });
        results.push({ Test: "R12", Property: "SubmitMode", Value: memo.SubmitMode, Status: "✓" });
        results.push({ Test: "R13", Property: "Disabled", Value: memo.Disabled, Status: "✓" });
        results.push({ Test: "R14", Property: "Label", Value: memo.Label, Status: "✓" });
        results.push({ Test: "R15", Property: "Visible", Value: memo.Visible, Status: "✓" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================
    try {
        // Setter: Value
        memo.Value = (originalValue || "") + " [TEST]";
        const newValue = memo.Value;
        memo.Value = originalValue;
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue?.includes("[TEST]") ? "Set→Restored" : "Failed", Status: newValue?.includes("[TEST]") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
    }

    try {
        // Setter: RequiredLevel
        const origRequired = memo.RequiredLevel;
        memo.RequiredLevel = "required";
        const check = memo.RequiredLevel;
        memo.RequiredLevel = origRequired;
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === "required" ? "Set→Restored" : "Failed", Status: check === "required" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
    }

    try {
        // Setter: Disabled
        const origDisabled = memo.Disabled;
        memo.Disabled = !origDisabled;
        const check = memo.Disabled;
        memo.Disabled = origDisabled;
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "✗" });
    }

    try {
        // Setter: Label
        const origLabel = memo.Label;
        memo.Label = origLabel + " (TEST)";
        const check = memo.Label;
        memo.Label = origLabel;
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    try {
        // Setter: Visible
        const origVisible = memo.Visible;
        memo.Visible = !origVisible;
        const check = memo.Visible;
        memo.Visible = origVisible;
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Methods
    const onChangeCallback = (ctx: any) => console.log("  📍 Memo OnChange fired");

    try {
        memo.AddOnChange(onChangeCallback);
        methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "✗" });
    }

    try {
        memo.RemoveOnChange(onChangeCallback);
        methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
    }

    try {
        memo.FireOnChange();
        methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "✗" });
    }

    try {
        setTimeout(() => memo.Focus(), 1000);
        methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "✗" });
    }

    try {
        memo.SetNotification("Test Memo notification", "MEMO_TEST_1");
        setTimeout(() => memo.ClearNotification("MEMO_TEST_1"), 3000);
        methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        memo.SetIsValid(false, "Test invalid");
        setTimeout(() => memo.SetIsValid(true), 2000);
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

    console.groupCollapsed(`📝 TEST 2: Memo Control [${startTime}] - Using: Description field - ${passed}/${total}`);

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
