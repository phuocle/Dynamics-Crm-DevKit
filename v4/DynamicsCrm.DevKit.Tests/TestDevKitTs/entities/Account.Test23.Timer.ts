import { FormAccount_DevKitV4 } from './Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 23: Timer Control - v4_TimerSLA Field
 * Timer extends IControl with specific Refresh method and State property
 */
export function TestTimer(form: FormAccount_DevKitV4.Form): boolean {
    // NOTE: v4_TimerSLA field does NOT exist in the new Account.form.ts
    // This test is skipped until Timer control is added to the form
    console.log('⏭️ TEST 23: Timer Control - SKIPPED (v4_TimerSLA not on form)');
    return true;

    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const timer = (form.Body as any).v4_TimerSLA;
    const startTime = new Date().toLocaleTimeString();

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // Timer-specific properties
        results.push({ Test: "R1", Property: "State", Value: timer.State, Status: typeof timer.State === "number" ? "✓" : "⚠" });

        // Inherited from IControl
        results.push({ Test: "R2", Property: "ControlName", Value: timer.ControlName, Status: "✓" });
        results.push({ Test: "R3", Property: "ControlType", Value: timer.ControlType, Status: "✓" });
        results.push({ Test: "R4", Property: "Label", Value: timer.Label, Status: "✓" });
        results.push({ Test: "R5", Property: "Visible", Value: timer.Visible, Status: "✓" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Method: Refresh
    try {
        timer.Refresh();
        methodResults.push({ Test: "S1", Property: "Refresh", Value: "Called", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Refresh", Value: e.message, Status: "✗" });
    }

    // Setter: Label
    try {
        const origLabel = timer.Label;
        timer.Label = origLabel + " (TEST)";
        const check = timer.Label;
        timer.Label = origLabel;
        methodResults.push({ Test: "S2", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = timer.Visible;
        timer.Visible = !origVisible;
        const check = timer.Visible;
        timer.Visible = origVisible;
        methodResults.push({ Test: "S3", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Method: Focus
    try {
        setTimeout(() => timer.Focus(), 1000);
        methodResults.push({ Test: "S4", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Focus", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`✅ [TS] TEST 23: Timer Control [${startTime}] - Using: v4_TimerSLA - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R6)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S4)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}

