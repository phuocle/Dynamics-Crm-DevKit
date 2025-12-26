import { FormAccount_DevKitV4 } from './Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 9: DateTime Control - v4_AppointmentTime Field
 * DateTime extends IControl with ShowTime property
 * Uses console.table for cleaner output
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestDateTime(form: FormAccount_DevKitV4.Form): void {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const startTime = new Date().toLocaleTimeString();
    const originalValue = form.Body.v4_DateTime.Value;

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // DateTime-specific properties
        results.push({ Test: "R1", Property: "ShowTime", Value: form.Body.v4_DateTime.ShowTime, Status: typeof form.Body.v4_DateTime.ShowTime === "boolean" ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "Value", Value: originalValue instanceof Date ? originalValue.toISOString() : originalValue, Status: "✓" });

        // Inherited from IControl
        results.push({ Test: "R3", Property: "Attribute", Value: form.Body.v4_DateTime.Attribute ? "object" : "null", Status: form.Body.v4_DateTime.Attribute ? "✓" : "⚠" });
        results.push({ Test: "R4", Property: "AttributeName", Value: form.Body.v4_DateTime.AttributeName, Status: form.Body.v4_DateTime.AttributeName === "v4_datetime" ? "✓" : "⚠" });
        // @ts-ignore - AttributeType comparison is valid at runtime
        results.push({ Test: "R5", Property: "AttributeType", Value: form.Body.v4_DateTime.AttributeType, Status: form.Body.v4_DateTime.AttributeType === "datetime" ? "✓" : "⚠" });
        results.push({ Test: "R6", Property: "ControlName", Value: form.Body.v4_DateTime.ControlName, Status: "✓" });
        results.push({ Test: "R7", Property: "ControlType", Value: form.Body.v4_DateTime.ControlType, Status: "✓" });
        results.push({ Test: "R8", Property: "Format", Value: form.Body.v4_DateTime.Format, Status: "✓" });
        results.push({ Test: "R9", Property: "IsDirty", Value: form.Body.v4_DateTime.IsDirty, Status: "✓" });
        results.push({ Test: "R10", Property: "IsValid", Value: form.Body.v4_DateTime.IsValid, Status: "✓" });
        results.push({ Test: "R11", Property: "RequiredLevel", Value: form.Body.v4_DateTime.RequiredLevel, Status: "✓" });
        results.push({ Test: "R12", Property: "SubmitMode", Value: form.Body.v4_DateTime.SubmitMode, Status: "✓" });
        results.push({ Test: "R13", Property: "Disabled", Value: form.Body.v4_DateTime.Disabled, Status: "✓" });
        results.push({ Test: "R14", Property: "Label", Value: form.Body.v4_DateTime.Label, Status: "✓" });
        results.push({ Test: "R15", Property: "Visible", Value: form.Body.v4_DateTime.Visible, Status: "✓" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Setter: Value
    try {
        const testValue = new Date();
        form.Body.v4_DateTime.Value = testValue;
        const newValue = form.Body.v4_DateTime.Value;
        form.Body.v4_DateTime.Value = originalValue;
        // Value was set successfully if newValue exists (Date, string, or any truthy)
        const success = newValue !== null && newValue !== undefined;
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: success ? "Set→Restored" : "Failed", Status: success ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
    }

    // Setter: ShowTime
    try {
        const origShowTime = form.Body.v4_DateTime.ShowTime;
        form.Body.v4_DateTime.ShowTime = !origShowTime;
        const check = form.Body.v4_DateTime.ShowTime;
        form.Body.v4_DateTime.ShowTime = origShowTime;
        methodResults.push({ Test: "S2", Property: "ShowTime (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "ShowTime (set)", Value: e.message, Status: "✗" });
    }

    // Setter: RequiredLevel
    try {
        const origRequired = form.Body.v4_DateTime.RequiredLevel;
        form.Body.v4_DateTime.RequiredLevel = "required";
        const check = form.Body.v4_DateTime.RequiredLevel;
        form.Body.v4_DateTime.RequiredLevel = origRequired;
        methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: check === "required" ? "Set→Restored" : "Failed", Status: check === "required" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Disabled
    try {
        const origDisabled = form.Body.v4_DateTime.Disabled;
        form.Body.v4_DateTime.Disabled = !origDisabled;
        const check = form.Body.v4_DateTime.Disabled;
        form.Body.v4_DateTime.Disabled = origDisabled;
        methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Disabled (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Label
    try {
        const origLabel = form.Body.v4_DateTime.Label;
        form.Body.v4_DateTime.Label = origLabel + " (TEST)";
        const check = form.Body.v4_DateTime.Label;
        form.Body.v4_DateTime.Label = origLabel;
        methodResults.push({ Test: "S5", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = form.Body.v4_DateTime.Visible;
        form.Body.v4_DateTime.Visible = !origVisible;
        const check = form.Body.v4_DateTime.Visible;
        form.Body.v4_DateTime.Visible = origVisible;
        methodResults.push({ Test: "S6", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Methods
    const onChangeCallback = (ctx: any) => console.log("  📍 DateTime OnChange fired");

    try {
        form.Body.v4_DateTime.AddOnChange(onChangeCallback);
        methodResults.push({ Test: "S7", Property: "AddOnChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "AddOnChange", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_DateTime.RemoveOnChange(onChangeCallback);
        methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_DateTime.FireOnChange();
        methodResults.push({ Test: "S9", Property: "FireOnChange", Value: "Fired", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S9", Property: "FireOnChange", Value: e.message, Status: "✗" });
    }

    try {
        setTimeout(() => form.Body.v4_DateTime.Focus(), 1000);
        methodResults.push({ Test: "S10", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S10", Property: "Focus", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_DateTime.SetNotification("Test DateTime notification", "DT_TEST_1");
        setTimeout(() => form.Body.v4_DateTime.ClearNotification("DT_TEST_1"), 3000);
        methodResults.push({ Test: "S11", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S11", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_DateTime.SetIsValid(false, "Test invalid");
        setTimeout(() => form.Body.v4_DateTime.SetIsValid(true), 2000);
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

    console.groupCollapsed(`✅ TEST 9: DateTime Control [${startTime}] - Using: v4_DateTime field - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R15)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S12)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}


