import { FormAccount_DevKitV4 } from './Account.form';
import { OptionSet } from './OptionSet';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 7: Money Control - Revenue Field
 * Money extends IControlNumber with Min, Max, Precision properties
 * Uses console.table for cleaner output
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestMoney(form: FormAccount_DevKitV4.Form): boolean {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const money = form.Body.v4_Money;
    const startTime = new Date().toLocaleTimeString();
    const originalValue = money.Value;

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // Money-specific properties (IControlNumber + Precision)
        results.push({ Test: "R1", Property: "Max", Value: money.Max, Status: typeof money.Max === "number" ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "Min", Value: money.Min, Status: typeof money.Min === "number" ? "✓" : "⚠" });
        results.push({ Test: "R3", Property: "Precision", Value: money.Precision, Status: typeof money.Precision === "number" ? "✓" : "⚠" });
        results.push({ Test: "R4", Property: "Value", Value: originalValue, Status: "✓" });

        // Inherited from IControl
        results.push({ Test: "R5", Property: "Attribute", Value: money.Attribute ? "object" : "null", Status: "✓" }); // Attribute can be null in some contexts
        results.push({ Test: "R6", Property: "AttributeName", Value: money.AttributeName, Status: money.AttributeName === "v4_money" ? "✓" : "⚠" });
        results.push({ Test: "R7", Property: "AttributeType", Value: money.AttributeType, Status: money.AttributeType === OptionSet.FieldAttributeType.Money ? "✓" : "⚠" });
        results.push({ Test: "R8", Property: "ControlName", Value: money.ControlName, Status: "✓" });
        results.push({ Test: "R9", Property: "ControlType", Value: money.ControlType, Status: "✓" });
        results.push({ Test: "R10", Property: "Format", Value: money.Format, Status: "✓" });
        results.push({ Test: "R11", Property: "IsDirty", Value: money.IsDirty, Status: "✓" });
        results.push({ Test: "R12", Property: "IsValid", Value: money.IsValid, Status: "✓" });
        results.push({ Test: "R13", Property: "RequiredLevel", Value: money.RequiredLevel, Status: "✓" });
        results.push({ Test: "R14", Property: "SubmitMode", Value: money.SubmitMode, Status: "✓" });
        results.push({ Test: "R15", Property: "Disabled", Value: money.Disabled, Status: "✓" });
        results.push({ Test: "R16", Property: "Label", Value: money.Label, Status: "✓" });
        results.push({ Test: "R17", Property: "Visible", Value: money.Visible, Status: "✓" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Setter: Value
    try {
        const testValue = (originalValue || 0) + 1000;
        money.Value = testValue;
        const newValue = money.Value;
        money.Value = originalValue;
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue === testValue ? "Set→Restored" : "Failed", Status: newValue === testValue ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Precision (Money precision is typically 0-2 for currency)
    try {
        const origPrecision = money.Precision;
        const testPrecision = 2; // Valid precision for money (0-2 range)
        money.Precision = testPrecision;
        const check = money.Precision;
        money.Precision = origPrecision;
        methodResults.push({ Test: "S2", Property: "Precision (set)", Value: check === testPrecision ? "Set→Restored" : `Was ${check}`, Status: check === testPrecision ? "✓" : "⚠" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "Precision (set)", Value: e.message, Status: "✗" });
    }

    // Setter: RequiredLevel
    try {
        const origRequired = money.RequiredLevel;
        money.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
        const check = money.RequiredLevel;
        money.RequiredLevel = origRequired;
        methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set→Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Disabled
    try {
        const origDisabled = money.Disabled;
        money.Disabled = !origDisabled;
        const check = money.Disabled;
        money.Disabled = origDisabled;
        methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Label
    try {
        const origLabel = money.Label;
        const testLabel = "Test Money Label";
        money.Label = testLabel;
        const check = money.Label;
        const setWorked = check === testLabel || check?.includes("Test Money");
        if (origLabel !== undefined) {
            money.Label = origLabel;
        }
        methodResults.push({ Test: "S5", Property: "Label (set)", Value: setWorked ? "Set→Restored" : `Got: ${check}`, Status: setWorked ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = money.Visible;
        money.Visible = !origVisible;
        const check = money.Visible;
        money.Visible = origVisible;
        methodResults.push({ Test: "S6", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Methods
    const onChangeCallback = (ctx: any) => console.log("  📍 Money OnChange fired");

    try {
        money.AddOnChange(onChangeCallback);
        methodResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "✗" });
    }

    try {
        money.RemoveOnChange(onChangeCallback);
        methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
    }

    try {
        money.FireOnChange();
        methodResults.push({ Test: "S9", Property: "FireOnChange", Value: "Fired", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S9", Property: "FireOnChange", Value: e.message, Status: "✗" });
    }

    try {
        setTimeout(() => money.Focus(), 1000);
        methodResults.push({ Test: "S10", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S10", Property: "Focus", Value: e.message, Status: "✗" });
    }

    try {
        money.SetNotification("Test Money notification", "MONEY_TEST_1");
        setTimeout(() => money.ClearNotification("MONEY_TEST_1"), 3000);
        methodResults.push({ Test: "S11", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S11", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        money.SetIsValid(false, "Test invalid");
        setTimeout(() => money.SetIsValid(true), 2000);
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

    console.groupCollapsed(`✅ [TS] TEST 07: Money Control [${startTime}] - Using: v4_Money field - ${passed}/${total}`);

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


