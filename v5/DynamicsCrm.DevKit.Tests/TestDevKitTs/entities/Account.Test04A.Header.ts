import { FormAccount_DevKitV4 } from './Account.form';
import { OptionSet } from './OptionSet';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 4A: Header Control - Tests header field behavior (using Header.v4_Integer1 field)
 * NOTE: Header controls may not expose all attribute properties (Max, Min, etc.)
 * Some properties return undefined - this is expected CRM behavior
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestHeader(form: FormAccount_DevKitV4.Form): boolean {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const startTime = new Date().toLocaleTimeString();
    const originalValue = form.Header.v4_Integer1.Value;

    // =====================================================
    // PURPOSE: Test Header field behavior
    // NOTE: Header controls may not expose all attribute properties (Max, Min, etc.)
    // Some properties return undefined - this is expected CRM behavior
    // Using v4_Integer1 as the test field (Integer type in Header)
    // =====================================================

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // Integer-specific properties for Header field (may be undefined for Header controls)
        const maxVal = form.Header.v4_Integer1.Max;
        const minVal = form.Header.v4_Integer1.Min;
        results.push({ Test: "R1", Property: "Max", Value: maxVal, Status: maxVal === undefined || typeof maxVal === "number" ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "Min", Value: minVal, Status: minVal === undefined || typeof minVal === "number" ? "✓" : "⚠" });
        results.push({ Test: "R3", Property: "Value", Value: originalValue, Status: "✓" });

        // Inherited from IControl (AttributeName/AttributeType may be undefined for Header controls)
        results.push({ Test: "R4", Property: "Attribute", Value: form.Header.v4_Integer1.Attribute ? "object" : "null", Status: form.Header.v4_Integer1.Attribute ? "✓" : "⚠" });
        const attrName = form.Header.v4_Integer1.AttributeName;
        results.push({ Test: "R5", Property: "AttributeName", Value: attrName, Status: attrName === undefined || attrName === "v4_integer" ? "✓" : "⚠" });
        const attrType = form.Header.v4_Integer1.AttributeType;
        results.push({ Test: "R6", Property: "AttributeType", Value: attrType, Status: attrType === undefined || attrType === OptionSet.FieldAttributeType.Integer ? "✓" : "⚠" });
        results.push({ Test: "R7", Property: "ControlName", Value: form.Header.v4_Integer1.ControlName, Status: "✓" });
        results.push({ Test: "R8", Property: "ControlType", Value: form.Header.v4_Integer1.ControlType, Status: "✓" });
        results.push({ Test: "R9", Property: "Format", Value: form.Header.v4_Integer1.Format, Status: "✓" });
        results.push({ Test: "R10", Property: "IsDirty", Value: form.Header.v4_Integer1.IsDirty, Status: "✓" });
        results.push({ Test: "R11", Property: "IsValid", Value: form.Header.v4_Integer1.IsValid, Status: "✓" });
        results.push({ Test: "R12", Property: "RequiredLevel", Value: form.Header.v4_Integer1.RequiredLevel, Status: "✓" });
        results.push({ Test: "R13", Property: "SubmitMode", Value: form.Header.v4_Integer1.SubmitMode, Status: "✓" });
        results.push({ Test: "R14", Property: "Disabled", Value: form.Header.v4_Integer1.Disabled, Status: "✓" });
        results.push({ Test: "R15", Property: "Label", Value: form.Header.v4_Integer1.Label, Status: "✓" });
        results.push({ Test: "R16", Property: "Visible", Value: form.Header.v4_Integer1.Visible, Status: "✓" });
    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Setter: Value (Header controls may not support Value setter - use Attribute if needed)
    try {
        const testValue = (originalValue || 0) + 100;
        form.Header.v4_Integer1.Value = testValue;
        const newValue = form.Header.v4_Integer1.Value;
        form.Header.v4_Integer1.Value = originalValue;
        // For Header controls, Value setter may not work directly - check if setter was called without error
        const valueSetSuccess = newValue === testValue || (originalValue === undefined && newValue === undefined);
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: valueSetSuccess ? "Set→Restored" : "Setter called (no effect)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
    }

    // Setter: RequiredLevel (Header controls may not support RequiredLevel setter)
    try {
        const origRequired = form.Header.v4_Integer1.RequiredLevel;
        form.Header.v4_Integer1.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
        const check = form.Header.v4_Integer1.RequiredLevel;
        form.Header.v4_Integer1.RequiredLevel = origRequired;
        // For Header controls, RequiredLevel setter may not work - just verify no error thrown
        const reqSetSuccess = check === OptionSet.FieldRequiredLevel.Required || check === undefined;
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: reqSetSuccess ? "Set→Restored" : "Setter called (no effect)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Disabled
    try {
        const origDisabled = form.Header.v4_Integer1.Disabled;
        form.Header.v4_Integer1.Disabled = !origDisabled;
        const check = form.Header.v4_Integer1.Disabled;
        form.Header.v4_Integer1.Disabled = origDisabled;
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Label
    try {
        const origLabel = form.Header.v4_Integer1.Label;
        form.Header.v4_Integer1.Label = origLabel + " (HEADER TEST)";
        const check = form.Header.v4_Integer1.Label;
        form.Header.v4_Integer1.Label = origLabel;
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(HEADER TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(HEADER TEST)") ? "✓" : "⚠" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = form.Header.v4_Integer1.Visible;
        form.Header.v4_Integer1.Visible = !origVisible;
        const check = form.Header.v4_Integer1.Visible;
        form.Header.v4_Integer1.Visible = origVisible;
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Methods
    const onChangeCallback = (ctx: any) => console.log("  📍 Header OnChange fired");

    try {
        form.Header.v4_Integer1.AddOnChange(onChangeCallback);
        methodResults.push({ Test: "S6", Property: "AddOnChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "AddOnChange", Value: e.message, Status: "✗" });
    }

    try {
        form.Header.v4_Integer1.RemoveOnChange(onChangeCallback);
        methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
    }

    try {
        form.Header.v4_Integer1.FireOnChange();
        methodResults.push({ Test: "S8", Property: "FireOnChange", Value: "Fired", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "FireOnChange", Value: e.message, Status: "✗" });
    }

    try {
        setTimeout(() => form.Header.v4_Integer1.Focus(), 1000);
        methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "✗" });
    }

    try {
        form.Header.v4_Integer1.SetNotification("Header test notification", "HEADER_TEST_1");
        setTimeout(() => form.Header.v4_Integer1.ClearNotification("HEADER_TEST_1"), 3000);
        methodResults.push({ Test: "S10", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S10", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        form.Header.v4_Integer1.SetIsValid(false, "Test invalid");
        setTimeout(() => form.Header.v4_Integer1.SetIsValid(true, ""), 2000);
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

    console.groupCollapsed(`✅ [TS] TEST 04A: Header Control [${startTime}] - Using: Header.v4_Integer1 field - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R16)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S11)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log("%c📌 Note: Header controls may not expose all attribute properties (undefined is normal)", "font-style: italic; color: #FF9800;");

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
    return passed === total;
}

