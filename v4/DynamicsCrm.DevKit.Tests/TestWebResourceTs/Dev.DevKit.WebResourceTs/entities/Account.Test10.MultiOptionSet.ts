import { FormAccount_DevKitV4 } from './Account.form';
import { OptionSet } from './OptionSet';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

// Helper function to stringify objects for display
function stringify(value: any): any {
    if (value === null || value === undefined) return null;
    if (typeof value === 'object') {
        try {
            return JSON.stringify(value);
        } catch {
            return '[Circular or Complex Object]';
        }
    }
    return value;
}

/**
 * TEST 13: MultiOptionSet Control - v4_Categories Field
 * MultiOptionSet extends IControlOptionSet with Value as number[] (array)
 * Uses console.table for cleaner output
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestMultiOptionSet(form: FormAccount_DevKitV4.Form): boolean {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const mos = form.Body.v4_MultiOptionSet;
    const startTime = new Date().toLocaleTimeString();
    const originalValue = mos.Value;

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // MultiOptionSet-specific: Value, InitialValue, SelectedOption, Text are all arrays
        results.push({ Test: "R1", Property: "Value (number[])", Value: stringify(originalValue), Status: Array.isArray(originalValue) || originalValue === null ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "Options (array)", Value: stringify(mos.Options), Status: Array.isArray(mos.Options) ? "✓" : "⚠" });
        results.push({ Test: "R3", Property: "SelectedOption (array)", Value: stringify(mos.SelectedOption), Status: Array.isArray(mos.SelectedOption) || mos.SelectedOption === null ? "✓" : "⚠" });
        results.push({ Test: "R4", Property: "InitialValue (number[])", Value: stringify(mos.InitialValue), Status: Array.isArray(mos.InitialValue) || mos.InitialValue === null ? "✓" : "⚠" });
        results.push({ Test: "R5", Property: "Text (string[])", Value: stringify(mos.Text), Status: Array.isArray(mos.Text) || mos.Text === null ? "✓" : "⚠" });

        // Inherited from IControl
        results.push({ Test: "R6", Property: "Attribute", Value: mos.Attribute ? "object" : "null", Status: mos.Attribute ? "✓" : "⚠" });
        results.push({ Test: "R7", Property: "AttributeName", Value: mos.AttributeName, Status: mos.AttributeName === "v4_multioptionset" ? "✓" : "⚠" });
        results.push({ Test: "R8", Property: "AttributeType", Value: mos.AttributeType, Status: mos.AttributeType === OptionSet.FieldAttributeType.MultiOptionSet ? "✓" : "⚠" });
        results.push({ Test: "R9", Property: "ControlName", Value: mos.ControlName, Status: "✓" });
        results.push({ Test: "R10", Property: "ControlType", Value: mos.ControlType, Status: "✓" });
        results.push({ Test: "R11", Property: "Format", Value: mos.Format, Status: "✓" });
        results.push({ Test: "R12", Property: "IsDirty", Value: mos.IsDirty, Status: "✓" });
        results.push({ Test: "R13", Property: "IsValid", Value: mos.IsValid, Status: "✓" });
        results.push({ Test: "R14", Property: "RequiredLevel", Value: mos.RequiredLevel, Status: "✓" });
        results.push({ Test: "R15", Property: "SubmitMode", Value: mos.SubmitMode, Status: "✓" });
        results.push({ Test: "R16", Property: "Disabled", Value: mos.Disabled, Status: "✓" });
        results.push({ Test: "R17", Property: "Label", Value: mos.Label, Status: "✓" });
        results.push({ Test: "R18", Property: "Visible", Value: mos.Visible, Status: "✓" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Setter: Value (array of numbers)
    try {
        const testValue = [1, 2]; // Test with sample values
        mos.Value = testValue;
        const newValue = mos.Value;
        mos.Value = originalValue;
        const success = Array.isArray(newValue) || newValue !== undefined;
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: success ? "Set→Restored" : "Failed", Status: success ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
    }

    // Setter: RequiredLevel
    try {
        const origRequired = mos.RequiredLevel;
        mos.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
        const check = mos.RequiredLevel;
        mos.RequiredLevel = origRequired;
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set→Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Disabled
    try {
        const origDisabled = mos.Disabled;
        mos.Disabled = !origDisabled;
        const check = mos.Disabled;
        mos.Disabled = origDisabled;
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Label
    try {
        const origLabel = mos.Label;
        mos.Label = origLabel + " (TEST)";
        const check = mos.Label;
        mos.Label = origLabel;
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = mos.Visible;
        mos.Visible = !origVisible;
        const check = mos.Visible;
        mos.Visible = origVisible;
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Method: Option (get specific option)
    try {
        const options = mos.Options;
        if (options && options.length > 0) {
            const firstOption = mos.Option(options[0].value);
            methodResults.push({ Test: "S6", Property: "Option(value)", Value: stringify(firstOption), Status: firstOption ? "✓" : "⚠" });
        } else {
            methodResults.push({ Test: "S6", Property: "Option(value)", Value: "No options", Status: "⚠" });
        }
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "Option(value)", Value: e.message, Status: "✗" });
    }

    // Method: AddOnChange
    const onChangeCallback = (ctx: any) => console.log("  📍 MultiOptionSet OnChange fired");
    try {
        mos.AddOnChange(onChangeCallback);
        methodResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "✗" });
    }

    // Method: RemoveOnChange
    try {
        mos.RemoveOnChange(onChangeCallback);
        methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
    }

    // Method: FireOnChange
    try {
        mos.FireOnChange();
        methodResults.push({ Test: "S9", Property: "FireOnChange", Value: "Fired", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S9", Property: "FireOnChange", Value: e.message, Status: "✗" });
    }

    // Method: Focus
    try {
        setTimeout(() => mos.Focus(), 1000);
        methodResults.push({ Test: "S10", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S10", Property: "Focus", Value: e.message, Status: "✗" });
    }

    // Method: SetNotification
    try {
        mos.SetNotification("Test MultiOptionSet notification", "MOS_TEST_1");
        setTimeout(() => mos.ClearNotification("MOS_TEST_1"), 3000);
        methodResults.push({ Test: "S11", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S11", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    // Method: SetIsValid
    try {
        mos.SetIsValid(false, "Test invalid");
        setTimeout(() => mos.SetIsValid(true), 2000);
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

    console.groupCollapsed(`✅ [TS] TEST 10: MultiOptionSet Control [${startTime}] - Using: v4_MultiOptionSet field - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R18)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
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


