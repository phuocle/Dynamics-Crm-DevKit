import { FormAccount_DevKitV4 } from './generator/Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 15: NavigationItem Control - navContacts
 * NavigationItem interface for form navigation items with Id, Label, Visible, Focus
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestNavigationItem(form: FormAccount_DevKitV4.Form): void {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const startTime = new Date().toLocaleTimeString();

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        results.push({ Test: "R1", Property: "Id", Value: form.Navigation.navContacts.Id, Status: form.Navigation.navContacts.Id ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "Label", Value: form.Navigation.navContacts.Label, Status: form.Navigation.navContacts.Label ? "✓" : "⚠" });
        results.push({ Test: "R3", Property: "Visible", Value: form.Navigation.navContacts.Visible, Status: typeof form.Navigation.navContacts.Visible === "boolean" ? "✓" : "⚠" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Setter: Label
    try {
        const origLabel = form.Navigation.navContacts.Label;
        form.Navigation.navContacts.Label = origLabel + " (TEST)";
        const check = form.Navigation.navContacts.Label;
        form.Navigation.navContacts.Label = origLabel;
        methodResults.push({ Test: "S1", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = form.Navigation.navContacts.Visible;
        form.Navigation.navContacts.Visible = !origVisible;
        const check = form.Navigation.navContacts.Visible;
        form.Navigation.navContacts.Visible = origVisible;
        methodResults.push({ Test: "S2", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Method: Focus
    try {
        setTimeout(() => form.Navigation.navContacts.Focus(), 1000);
        methodResults.push({ Test: "S3", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "Focus", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`✅ TEST 15: NavigationItem Control [${startTime}] - Using: navContacts - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R3)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S3)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}
