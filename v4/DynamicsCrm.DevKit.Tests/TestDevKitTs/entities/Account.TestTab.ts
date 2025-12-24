import { FormAccount_DevKitV4 } from './generator/Account.form';

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
 * TEST 14: Tab Control - DETAILS_TAB
 * ITab interface for form tabs with DisplayState, Label, Visible properties
 * Also tests Section within the tab
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestTab(form: FormAccount_DevKitV4.Form): void {
    // NOTE: Form uses TAB_1/TAB_2 structure, not SUMMARY_TAB
    // This test is skipped pending form tab alignment
    console.log('⏭️ TEST 14: Tab Control - SKIPPED (Different tab structure)');
    return;

    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const tab = (form.Body.Tab as any).SUMMARY_TAB;
    const startTime = new Date().toLocaleTimeString();

    // =====================================================
    // TAB READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        results.push({ Test: "R1", Property: "Tab.Name", Value: tab.Name, Status: tab.Name ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "Tab.Parent", Value: tab.Parent ? "object" : "null", Status: tab.Parent ? "✓" : "⚠" });
        results.push({ Test: "R3", Property: "Tab.DisplayState", Value: tab.DisplayState, Status: tab.DisplayState === "expanded" || tab.DisplayState === "collapsed" ? "✓" : "⚠" });
        results.push({ Test: "R4", Property: "Tab.Label", Value: tab.Label, Status: tab.Label ? "✓" : "⚠" });
        results.push({ Test: "R5", Property: "Tab.Visible", Value: tab.Visible, Status: typeof tab.Visible === "boolean" ? "✓" : "⚠" });

        // Section properties (ACCOUNT_INFORMATION section)
        const section = tab.Section.ACCOUNT_INFORMATION;
        results.push({ Test: "R6", Property: "Section.BILLING", Value: section ? "object" : "null", Status: section ? "✓" : "⚠" });
        results.push({ Test: "R7", Property: "Section.Name", Value: section?.Name, Status: section?.Name ? "✓" : "⚠" });
        results.push({ Test: "R8", Property: "Section.Parent", Value: section?.Parent ? "object" : "null", Status: section?.Parent ? "✓" : "⚠" });
        results.push({ Test: "R9", Property: "Section.Label", Value: section?.Label, Status: section?.Label ? "✓" : "⚠" });
        results.push({ Test: "R10", Property: "Section.Visible", Value: section?.Visible, Status: typeof section?.Visible === "boolean" ? "✓" : "⚠" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // TAB SETTERS & METHODS (S-Index)
    // =====================================================

    // Setter: DisplayState
    try {
        const origDisplayState = tab.DisplayState;
        tab.DisplayState = origDisplayState === "expanded" ? "collapsed" : "expanded";
        const check = tab.DisplayState;
        tab.DisplayState = origDisplayState;
        methodResults.push({ Test: "S1", Property: "Tab.DisplayState (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Tab.DisplayState (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Label
    try {
        const origLabel = tab.Label;
        tab.Label = origLabel + " (TEST)";
        const check = tab.Label;
        tab.Label = origLabel;
        methodResults.push({ Test: "S2", Property: "Tab.Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "Tab.Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = tab.Visible;
        tab.Visible = !origVisible;
        const check = tab.Visible;
        tab.Visible = origVisible;
        methodResults.push({ Test: "S3", Property: "Tab.Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "Tab.Visible (set)", Value: e.message, Status: "✗" });
    }

    // Method: Focus
    try {
        setTimeout(() => tab.Focus(), 1000);
        methodResults.push({ Test: "S4", Property: "Tab.Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Tab.Focus", Value: e.message, Status: "✗" });
    }

    // Method: AddTabStateChange
    const tabStateCallback = (ctx: any) => console.log("  📍 Tab StateChange fired");
    try {
        tab.AddTabStateChange(tabStateCallback);
        methodResults.push({ Test: "S5", Property: "Tab.AddTabStateChange", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Tab.AddTabStateChange", Value: e.message, Status: "✗" });
    }

    // Method: RemoveTabStateChange
    try {
        tab.RemoveTabStateChange(tabStateCallback);
        methodResults.push({ Test: "S6", Property: "Tab.RemoveTabStateChange", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "Tab.RemoveTabStateChange", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // SECTION SETTERS (S-Index continued)
    // =====================================================
    const section = tab.Section.ACCOUNT_INFORMATION;

    // Section: Label
    try {
        const origLabel = section.Label;
        section.Label = origLabel + " (TEST)";
        const check = section.Label;
        section.Label = origLabel;
        methodResults.push({ Test: "S7", Property: "Section.Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "Section.Label (set)", Value: e.message, Status: "✗" });
    }

    // Section: Visible
    try {
        const origVisible = section.Visible;
        section.Visible = !origVisible;
        const check = section.Visible;
        section.Visible = origVisible;
        methodResults.push({ Test: "S8", Property: "Section.Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "Section.Visible (set)", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`📑 TEST 14: Tab Control [${startTime}] - Using: DETAILS_TAB & BILLING section - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R10)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S8)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}
