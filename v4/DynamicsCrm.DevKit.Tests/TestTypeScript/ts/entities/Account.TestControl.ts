import { AccountForm } from './generator/Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 0: IControl Interface - Name Field (String)
 * This tests the base IControl interface that all controls inherit from
 * Uses console.table for cleaner output
 */
export function TestControl(form: AccountForm.Form): void {
    const results: TestResult[] = [];
    const control = form.Body.Name; // String control inherits from IControl
    const startTime = new Date().toLocaleTimeString();
    const originalValue = control.Value;

    // =====================================================
    // PROPERTIES (readonly)
    // =====================================================
    try {
        results.push({
            Test: "P1",
            Property: "Attribute",
            Value: control.Attribute ? "object" : "null",
            Status: control.Attribute ? "✓" : "⚠"
        });

        results.push({
            Test: "P2",
            Property: "AttributeName",
            Value: control.AttributeName,
            Status: control.AttributeName === "name" ? "✓" : "⚠"
        });

        results.push({
            Test: "P3",
            Property: "AttributeType",
            Value: control.AttributeType,
            Status: control.AttributeType === "string" ? "✓" : "⚠"
        });

        results.push({
            Test: "P4",
            Property: "ControlName",
            Value: control.ControlName,
            Status: "✓"
        });

        results.push({
            Test: "P5",
            Property: "ControlType",
            Value: control.ControlType,
            Status: "✓"
        });

        results.push({
            Test: "P6",
            Property: "Format",
            Value: control.Format,
            Status: "✓"
        });

        results.push({
            Test: "P7",
            Property: "IsDirty",
            Value: control.IsDirty,
            Status: "✓"
        });

        results.push({
            Test: "P8",
            Property: "IsValid",
            Value: control.IsValid,
            Status: "✓"
        });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Properties Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // PROPERTIES (getter/setter)
    // =====================================================
    const setterResults: TestResult[] = [];

    try {
        // RequiredLevel
        const origRequired = control.RequiredLevel;
        control.RequiredLevel = "required";
        const newRequired = control.RequiredLevel;
        control.RequiredLevel = origRequired;
        setterResults.push({
            Test: "S1",
            Property: "RequiredLevel",
            Value: `${origRequired}→required→restored`,
            Status: newRequired === "required" ? "✓" : "✗"
        });
    } catch (e: any) {
        setterResults.push({ Test: "S1", Property: "RequiredLevel", Value: e.message, Status: "✗" });
    }

    try {
        // SubmitMode
        const origSubmit = control.SubmitMode;
        control.SubmitMode = "always";
        const newSubmit = control.SubmitMode;
        control.SubmitMode = origSubmit;
        setterResults.push({
            Test: "S2",
            Property: "SubmitMode",
            Value: `${origSubmit}→always→restored`,
            Status: newSubmit === "always" ? "✓" : "✗"
        });
    } catch (e: any) {
        setterResults.push({ Test: "S2", Property: "SubmitMode", Value: e.message, Status: "✗" });
    }

    try {
        // Disabled
        const origDisabled = control.Disabled;
        control.Disabled = true;
        const newDisabled = control.Disabled;
        control.Disabled = origDisabled;
        setterResults.push({
            Test: "S3",
            Property: "Disabled",
            Value: `${origDisabled}→true→restored`,
            Status: newDisabled === true ? "✓" : "✗"
        });
    } catch (e: any) {
        setterResults.push({ Test: "S3", Property: "Disabled", Value: e.message, Status: "✗" });
    }

    try {
        // Label
        const origLabel = control.Label;
        control.Label = origLabel + " (TEST)";
        const newLabel = control.Label;
        control.Label = origLabel;
        setterResults.push({
            Test: "S4",
            Property: "Label",
            Value: `"${origLabel}"→modified→restored`,
            Status: newLabel.includes("(TEST)") ? "✓" : "✗"
        });
    } catch (e: any) {
        setterResults.push({ Test: "S4", Property: "Label", Value: e.message, Status: "✗" });
    }

    try {
        // Visible
        const origVisible = control.Visible;
        control.Visible = false;
        const newVisible = control.Visible;
        control.Visible = origVisible;
        setterResults.push({
            Test: "S5",
            Property: "Visible",
            Value: `${origVisible}→false→restored`,
            Status: newVisible === false ? "✓" : "✗"
        });
    } catch (e: any) {
        setterResults.push({ Test: "S5", Property: "Visible", Value: e.message, Status: "✗" });
    }

    try {
        // Value
        control.Value = originalValue + " (MODIFIED)";
        const newValue = control.Value;
        control.Value = originalValue;
        setterResults.push({
            Test: "S6",
            Property: "Value",
            Value: `modified→restored`,
            Status: newValue?.includes("(MODIFIED)") ? "✓" : "✗"
        });
    } catch (e: any) {
        setterResults.push({ Test: "S6", Property: "Value", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // METHODS
    // =====================================================
    const methodResults: TestResult[] = [];

    // OnChange handlers
    const onChangeCallback = (ctx: any) => console.log("  📍 OnChange fired");
    try {
        control.AddOnChange(onChangeCallback);
        methodResults.push({ Test: "M1", Property: "AddOnChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M1", Property: "AddOnChange", Value: e.message, Status: "✗" });
    }

    try {
        control.RemoveOnChange(onChangeCallback);
        methodResults.push({ Test: "M2", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M2", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
    }

    // OnOutputChange handlers (for modern controls)
    const outputChangeCallback = (ctx: any) => console.log("  📍 OutputChange fired");
    try {
        control.AddOnOutputChange(outputChangeCallback);
        methodResults.push({ Test: "M3", Property: "AddOnOutputChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M3", Property: "AddOnOutputChange", Value: e.message, Status: "✗" });
    }

    try {
        control.RemoveOnOutputChange(outputChangeCallback);
        methodResults.push({ Test: "M4", Property: "RemoveOnOutputChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M4", Property: "RemoveOnOutputChange", Value: e.message, Status: "✗" });
    }

    // FireOnChange
    try {
        control.FireOnChange();
        methodResults.push({ Test: "M5", Property: "FireOnChange", Value: "Fired", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M5", Property: "FireOnChange", Value: e.message, Status: "✗" });
    }

    // Focus
    try {
        setTimeout(() => control.Focus(), 1000);
        methodResults.push({ Test: "M6", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M6", Property: "Focus", Value: e.message, Status: "✗" });
    }

    // Notifications
    try {
        control.SetNotification("Test notification from IControl", "CTRL_TEST_1");
        setTimeout(() => control.ClearNotification("CTRL_TEST_1"), 3000);
        methodResults.push({ Test: "M7", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M7", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        const cleared = control.ClearNotification("NONEXISTENT");
        methodResults.push({ Test: "M8", Property: "ClearNotification", Value: `Result: ${cleared}`, Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M8", Property: "ClearNotification", Value: e.message, Status: "✗" });
    }

    // AddNotification
    try {
        control.AddNotification({
            messages: ["Recommendation from test"],
            notificationLevel: "RECOMMENDATION",
            uniqueId: "CTRL_TEST_2"
        });
        setTimeout(() => control.ClearNotification("CTRL_TEST_2"), 3000);
        methodResults.push({ Test: "M9", Property: "AddNotification", Value: "Added (clears 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M9", Property: "AddNotification", Value: e.message, Status: "✗" });
    }

    // SetIsValid
    try {
        control.SetIsValid(false, "Test invalid message");
        setTimeout(() => control.SetIsValid(true), 2000);
        methodResults.push({ Test: "M10", Property: "SetIsValid", Value: "Set→Restored (2s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M10", Property: "SetIsValid", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    // Calculate summary first for header
    const allResults = [...results, ...setterResults, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`🎛️ TEST 0: IControl Interface [${startTime}] - Using: Name field - ${passed}/${total}`);

    console.log("%c📋 Properties (readonly) - 8 items", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c🔄 Properties (getter/setter) - 6 items", "font-weight: bold; font-size: 14px; color: #FF9800;");
    console.table(setterResults);

    console.log("%c⚡ Methods - 10 items", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    // Summary
    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}
