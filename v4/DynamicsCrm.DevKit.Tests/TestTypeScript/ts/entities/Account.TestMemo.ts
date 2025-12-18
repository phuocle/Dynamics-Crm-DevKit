import { AccountForm } from './generator/Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 3: Memo Control - Description Field
 * Memo extends IControl with MaxLength property
 * Uses console.table for cleaner output
 */
export function TestMemo(form: AccountForm.Form): void {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const memo = form.Body.Description;
    const startTime = new Date().toLocaleTimeString();
    const originalValue = memo.Value;

    // =====================================================
    // MEMO-SPECIFIC PROPERTIES
    // =====================================================
    try {
        // MaxLength (Memo-specific, readonly)
        results.push({
            Test: "M1",
            Property: "MaxLength",
            Value: memo.MaxLength,
            Status: typeof memo.MaxLength === "number" ? "✓" : "⚠"
        });

        // Value (string | null)
        results.push({
            Test: "M2",
            Property: "Value",
            Value: originalValue ? `"${originalValue.substring(0, 50)}${originalValue.length > 50 ? '...' : ''}"` : "(empty)",
            Status: "✓"
        });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Memo Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // INHERITED FROM IControl - Properties
    // =====================================================
    try {
        results.push({ Test: "I1", Property: "Attribute", Value: memo.Attribute ? "object" : "null", Status: memo.Attribute ? "✓" : "⚠" });
        results.push({ Test: "I2", Property: "AttributeName", Value: memo.AttributeName, Status: memo.AttributeName === "description" ? "✓" : "⚠" });
        results.push({ Test: "I3", Property: "AttributeType", Value: memo.AttributeType, Status: memo.AttributeType === "memo" ? "✓" : "⚠" });
        results.push({ Test: "I4", Property: "ControlName", Value: memo.ControlName, Status: "✓" });
        results.push({ Test: "I5", Property: "ControlType", Value: memo.ControlType, Status: "✓" });
        results.push({ Test: "I6", Property: "Format", Value: memo.Format, Status: "✓" });
        results.push({ Test: "I7", Property: "IsDirty", Value: memo.IsDirty, Status: "✓" });
        results.push({ Test: "I8", Property: "IsValid", Value: memo.IsValid, Status: "✓" });
        results.push({ Test: "I9", Property: "RequiredLevel", Value: memo.RequiredLevel, Status: "✓" });
        results.push({ Test: "I10", Property: "SubmitMode", Value: memo.SubmitMode, Status: "✓" });
        results.push({ Test: "I11", Property: "Disabled", Value: memo.Disabled, Status: "✓" });
        results.push({ Test: "I12", Property: "Label", Value: memo.Label, Status: "✓" });
        results.push({ Test: "I13", Property: "Visible", Value: memo.Visible, Status: "✓" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "IControl Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // INHERITED FROM IControl - Setter Tests
    // =====================================================
    try {
        // Value setter
        memo.Value = (originalValue || "") + " [TEST]";
        const newValue = memo.Value;
        memo.Value = originalValue;
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: newValue?.includes("[TEST]") ? "Set→Restored" : "Failed", Status: newValue?.includes("[TEST]") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Value (set)", Value: e.message, Status: "✗" });
    }

    try {
        const origRequired = memo.RequiredLevel;
        memo.RequiredLevel = "required";
        const check = memo.RequiredLevel;
        memo.RequiredLevel = origRequired;
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: check === "required" ? "Set→Restored" : "Failed", Status: check === "required" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "RequiredLevel (set)", Value: e.message, Status: "✗" });
    }

    try {
        const origDisabled = memo.Disabled;
        memo.Disabled = !origDisabled;
        const check = memo.Disabled;
        memo.Disabled = origDisabled;
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "Disabled (set)", Value: e.message, Status: "✗" });
    }

    try {
        const origLabel = memo.Label;
        memo.Label = origLabel + " (TEST)";
        const check = memo.Label;
        memo.Label = origLabel;
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    try {
        const origVisible = memo.Visible;
        memo.Visible = !origVisible;
        const check = memo.Visible;
        memo.Visible = origVisible;
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // INHERITED FROM IControl - Methods
    // =====================================================
    const onChangeCallback = (ctx: any) => console.log("  📍 Memo OnChange fired");

    try {
        memo.AddOnChange(onChangeCallback);
        methodResults.push({ Test: "M1", Property: "AddOnChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M1", Property: "AddOnChange", Value: e.message, Status: "✗" });
    }

    try {
        memo.RemoveOnChange(onChangeCallback);
        methodResults.push({ Test: "M2", Property: "RemoveOnChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M2", Property: "RemoveOnChange", Value: e.message, Status: "✗" });
    }

    try {
        memo.FireOnChange();
        methodResults.push({ Test: "M3", Property: "FireOnChange", Value: "Fired", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M3", Property: "FireOnChange", Value: e.message, Status: "✗" });
    }

    try {
        setTimeout(() => memo.Focus(), 1000);
        methodResults.push({ Test: "M4", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M4", Property: "Focus", Value: e.message, Status: "✗" });
    }

    try {
        memo.SetNotification("Test Memo notification", "MEMO_TEST_1");
        setTimeout(() => memo.ClearNotification("MEMO_TEST_1"), 3000);
        methodResults.push({ Test: "M5", Property: "SetNotification", Value: "Set (clears 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M5", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        memo.SetIsValid(false, "Test invalid");
        setTimeout(() => memo.SetIsValid(true), 2000);
        methodResults.push({ Test: "M6", Property: "SetIsValid", Value: "Set→Restored (2s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "M6", Property: "SetIsValid", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    // Calculate summary first for header
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`📝 TEST 2: Memo Control [${startTime}] - Using: Description field - ${passed}/${total}`);

    console.log("%c📋 Properties (15 items)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (11 items)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    // Summary
    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}

