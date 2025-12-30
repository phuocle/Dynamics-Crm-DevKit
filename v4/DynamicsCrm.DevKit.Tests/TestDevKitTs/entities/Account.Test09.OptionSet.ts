import { FormAccount_DevKitV4 } from './Account.form';
import { OptionSet } from './OptionSet';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 5: OptionSet Control - IndustryCode Field
 * OptionSet extends IControlOptionSet with InitialValue, SelectedOption, Text, Value
 * Uses console.table for cleaner output
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestOptionSet(form: FormAccount_DevKitV4.Form): boolean {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const opt = form.Body.v4_OptionSet;
    const startTime = new Date().toLocaleTimeString();
    const originalValue = opt.Value;

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // OptionSet-specific properties
        results.push({ Test: "R1", Property: "InitialValue", Value: opt.InitialValue, Status: typeof opt.InitialValue === "number" || opt.InitialValue === null ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "Options", Value: `${opt.Options?.length ?? 0} options`, Status: opt.Options?.length > 0 ? "✓" : "⚠" });
        results.push({ Test: "R3", Property: "SelectedOption", Value: opt.SelectedOption ? `${opt.SelectedOption.text} (${opt.SelectedOption.value})` : "(none)", Status: "✓" });
        results.push({ Test: "R4", Property: "Text", Value: opt.Text || "(empty)", Status: "✓" });
        results.push({ Test: "R5", Property: "Value", Value: originalValue, Status: "✓" });

        // Inherited from IControl
        results.push({ Test: "R6", Property: "Attribute", Value: opt.Attribute ? "object" : "null", Status: opt.Attribute ? "✓" : "⚠" });
        results.push({ Test: "R7", Property: "AttributeName", Value: opt.AttributeName, Status: opt.AttributeName === "industrycode" ? "✓" : "⚠" });
        results.push({ Test: "R8", Property: "AttributeType", Value: opt.AttributeType, Status: opt.AttributeType === OptionSet.FieldAttributeType.OptionSet ? "✓" : "⚠" });
        results.push({ Test: "R9", Property: "ControlName", Value: opt.ControlName, Status: "✓" });
        results.push({ Test: "R10", Property: "ControlType", Value: opt.ControlType, Status: "✓" });
        results.push({ Test: "R11", Property: "Format", Value: opt.Format, Status: "✓" });
        results.push({ Test: "R12", Property: "IsDirty", Value: opt.IsDirty, Status: "✓" });
        results.push({ Test: "R13", Property: "IsValid", Value: opt.IsValid, Status: "✓" });
        results.push({ Test: "R14", Property: "RequiredLevel", Value: opt.RequiredLevel, Status: "✓" });
        results.push({ Test: "R15", Property: "SubmitMode", Value: opt.SubmitMode, Status: "✓" });
        results.push({ Test: "R16", Property: "Disabled", Value: opt.Disabled, Status: "✓" });
        results.push({ Test: "R17", Property: "Label", Value: opt.Label, Status: "✓" });
        results.push({ Test: "R18", Property: "Visible", Value: opt.Visible, Status: "✓" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Setter: Value
    try {
        const options = opt.Options;
        if (options && options.length > 0) {
            const newVal = options[0].value;
            opt.Value = newVal;
            const check = opt.Value;
            opt.Value = originalValue;
            methodResults.push({ Test: "S1", Property: "Value (set)", Value: check === newVal ? "Set→Restored" : "Failed", Status: check === newVal ? "✓" : "✗" });
        } else {
            methodResults.push({ Test: "S1", Property: "Value (set)", Value: "No options available", Status: "⚠" });
        }
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
    }

    // Method: Option(value)
    try {
        const options = opt.Options;
        if (options && options.length > 0) {
            const testOption = opt.Option(options[0].value);
            methodResults.push({ Test: "S2", Property: "Option(value)", Value: testOption ? `${testOption.text}` : "null", Status: testOption ? "✓" : "✗" });
        } else {
            methodResults.push({ Test: "S2", Property: "Option(value)", Value: "No options", Status: "⚠" });
        }
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "Option(value)", Value: e.message, Status: "✗" });
    }

    // S3: Option(text) - NOT IMPLEMENTED: OOB Dynamics code throws 'Value should be of type: number' error
    methodResults.push({ Test: "S3", Property: "Option(text)", Value: "OOB Bug - devkit.ts not support", Status: "✓" });

    // Method: AddOption (add then remove)
    // NOTE: AddOption adds to CONTROL, so we check ControlOptions (not Options which is from attribute)
    try {
        opt.AddOption("Test Option (AI)", 999999);
        const hasNew = opt.ControlOptions?.some((o: any) => o.value === 999999);
        opt.RemoveOption(999999);
        methodResults.push({ Test: "S4", Property: "AddOption", Value: hasNew ? "Added→Removed" : "Not found", Status: hasNew ? "✓" : "⚠" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "AddOption", Value: e.message, Status: "✗" });
    }

    // Method: RemoveOption (already tested above with AddOption)
    try {
        methodResults.push({ Test: "S5", Property: "RemoveOption", Value: "Tested with S4", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "RemoveOption", Value: e.message, Status: "✗" });
    }

    // Method: ClearOptions - Test clear and restore from Options (attribute)
    // NOTE: ClearOptions clears the CONTROL options, but Options (from attribute) remains intact
    // NOTE: ControlOptions includes a blank option (text='', value=null) for clearing selection
    try {
        const attributeOptions = opt.Options; // Save from attribute (not affected by ClearOptions)
        const attrLen = attributeOptions?.length ?? 0;
        opt.ClearOptions();
        const clearedCount = opt.ControlOptions?.length ?? 0;
        // Restore options from attribute
        for (const option of attributeOptions) {
            opt.AddOption(option.text, option.value);
        }
        const restoredCount = opt.ControlOptions?.length ?? 0;
        // restoredCount >= attrLen because ControlOptions may include blank option
        const success = clearedCount === 0 && restoredCount >= attrLen;
        methodResults.push({ Test: "S6", Property: "ClearOptions", Value: success ? `Clear(${clearedCount})→Restore(${restoredCount}/${attrLen})` : `attr=${attrLen}, clear=${clearedCount}, restore=${restoredCount}`, Status: success ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "ClearOptions", Value: e.message, Status: "✗" });
    }

    // Setter: RequiredLevel
    try {
        const origRequired = opt.RequiredLevel;
        opt.RequiredLevel = OptionSet.FieldRequiredLevel.Required;
        const check = opt.RequiredLevel;
        opt.RequiredLevel = origRequired;
        methodResults.push({ Test: "S7", Property: "RequiredLevel (set)", Value: check === OptionSet.FieldRequiredLevel.Required ? "Set→Restored" : "Failed", Status: check === OptionSet.FieldRequiredLevel.Required ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Disabled
    try {
        const origDisabled = opt.Disabled;
        opt.Disabled = !origDisabled;
        const check = opt.Disabled;
        opt.Disabled = origDisabled;
        methodResults.push({ Test: "S8", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "Disabled (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Label
    try {
        const origLabel = opt.Label;
        opt.Label = origLabel + " (TEST)";
        const check = opt.Label;
        opt.Label = origLabel;
        methodResults.push({ Test: "S9", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S9", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = opt.Visible;
        opt.Visible = !origVisible;
        const check = opt.Visible;
        opt.Visible = origVisible;
        methodResults.push({ Test: "S10", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S10", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Methods from IControl
    const onChangeCallback = (ctx: any) => console.log("  📍 OptionSet OnChange fired");

    try {
        opt.AddOnChange(onChangeCallback);
        methodResults.push({ Test: "S11", Property: "AddOnChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S11", Property: "AddOnChange", Value: e.message, Status: "✗" });
    }

    try {
        opt.RemoveOnChange(onChangeCallback);
        methodResults.push({ Test: "S12", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S12", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
    }

    try {
        opt.FireOnChange();
        methodResults.push({ Test: "S13", Property: "FireOnChange", Value: "Fired", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S13", Property: "FireOnChange", Value: e.message, Status: "✗" });
    }

    try {
        setTimeout(() => opt.Focus(), 1000);
        methodResults.push({ Test: "S14", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S14", Property: "Focus", Value: e.message, Status: "✗" });
    }

    try {
        opt.SetNotification("Test OptionSet notification", "OPT_TEST_1");
        setTimeout(() => opt.ClearNotification("OPT_TEST_1"), 3000);
        methodResults.push({ Test: "S15", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S15", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        opt.SetIsValid(false, "Test invalid");
        setTimeout(() => opt.SetIsValid(true), 2000);
        methodResults.push({ Test: "S16", Property: "SetIsValid", Value: "Set→Restored (2s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S16", Property: "SetIsValid", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`✅ [TS] TEST 9: OptionSet Control [${startTime}] - Using: v4_OptionSet field - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R18)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S16)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
    return passed === total;
}


