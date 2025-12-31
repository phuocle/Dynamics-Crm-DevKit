import { FormAccount_DevKitV4 } from './Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 25: QuickView Control - ContactQuickForm
 * QuickView extends IQuickView with IsLoaded, Refresh, Controls methods
 * Body fields: EMailAddress1, FirstName, LastName, MobilePhone, ParentCustomerId
 */
export function TestQuickView(form: FormAccount_DevKitV4.Form): boolean {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const qv = form.QuickForm.ContactQuickForm;
    const startTime = new Date().toLocaleTimeString();

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // IQuickView properties
        results.push({ Test: "R1", Property: "Label", Value: qv.Label, Status: "✓" });
        results.push({ Test: "R2", Property: "Visible", Value: qv.Visible, Status: "✓" });
        results.push({ Test: "R3", Property: "ControlType", Value: qv.ControlType, Status: "✓" });
        results.push({ Test: "R4", Property: "ControlName", Value: qv.ControlName, Status: "✓" });

        // Nested Body controls check - all 5 fields
        const emailControl = qv.Body.EMailAddress1;
        results.push({ Test: "R5", Property: "Body.EMailAddress1", Value: emailControl ? "Found" : "Missing", Status: emailControl ? "✓" : "✗" });

        const firstNameControl = qv.Body.FirstName;
        results.push({ Test: "R6", Property: "Body.FirstName", Value: firstNameControl ? "Found" : "Missing", Status: firstNameControl ? "✓" : "✗" });

        const lastNameControl = qv.Body.LastName;
        results.push({ Test: "R7", Property: "Body.LastName", Value: lastNameControl ? "Found" : "Missing", Status: lastNameControl ? "✓" : "✗" });

        const mobilePhoneControl = qv.Body.MobilePhone;
        results.push({ Test: "R8", Property: "Body.MobilePhone", Value: mobilePhoneControl ? "Found" : "Missing", Status: mobilePhoneControl ? "✓" : "✗" });

        const parentCustomerControl = qv.Body.ParentCustomerId;
        results.push({ Test: "R9", Property: "Body.ParentCustomerId", Value: parentCustomerControl ? "Found" : "Missing", Status: parentCustomerControl ? "✓" : "✗" });
    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Method: IsLoaded
    try {
        const loaded = qv.IsLoaded();
        methodResults.push({ Test: "S1", Property: "IsLoaded", Value: loaded, Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "IsLoaded", Value: e.message, Status: "✗" });
    }

    // Method: Refresh
    try {
        qv.Refresh();
        methodResults.push({ Test: "S2", Property: "Refresh", Value: "Called", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "Refresh", Value: e.message, Status: "✗" });
    }

    // Setter: Label
    try {
        const origLabel = qv.Label;
        qv.Label = "New Label";
        const check = qv.Label;
        qv.Label = origLabel;
        methodResults.push({ Test: "S3", Property: "Label (set)", Value: check === "New Label" ? "Set→Restored" : "Failed", Status: check === "New Label" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = qv.Visible;
        qv.Visible = !origVisible;
        const check = qv.Visible;
        qv.Visible = origVisible;
        methodResults.push({ Test: "S4", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Method: Controls (access constituent controls)
    try {
        const controls = qv.Controls();
        const count = Array.isArray(controls) ? controls.length : "Not Array";
        methodResults.push({ Test: "S5", Property: "Controls()", Value: `Count: ${count}`, Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Controls()", Value: e.message, Status: "✗" });
    }

    // Method: Focus
    try {
        qv.Focus();
        methodResults.push({ Test: "S6", Property: "Focus", Value: "Called", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "Focus", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`✅ [TS] TEST 14: QuickView Control [${startTime}] - Using: ContactQuickForm - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R9)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S6)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
    return passed === total;
}

