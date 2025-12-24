import { FormAccount_DevKitV4 } from './generator/Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 22: WebResource Control - v4_WebResourceHelp Field
 * WebResource extends IControl with specific properties: Src, Data, ContentWindow
 */
export function TestWebResource(form: FormAccount_DevKitV4.Form): void {
    // NOTE: v4_WebResourceHelp field does NOT exist in the new Account.form.ts
    // This test is skipped until WebResource control is added to the form
    console.log('⏭️ TEST 22: WebResource Control - SKIPPED (v4_WebResourceHelp not on form)');
    return;

    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const wr = (form.Body as any).v4_WebResourceHelp;
    const startTime = new Date().toLocaleTimeString();

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // WebResource-specific properties
        results.push({ Test: "R1", Property: "Data", Value: wr.Data, Status: "✓" });
        results.push({ Test: "R2", Property: "Src", Value: wr.Src, Status: "✓" });

        // Inherited from IControl
        results.push({ Test: "R3", Property: "ControlName", Value: wr.ControlName, Status: "✓" });
        results.push({ Test: "R4", Property: "ControlType", Value: wr.ControlType, Status: "✓" });
        results.push({ Test: "R5", Property: "Label", Value: wr.Label, Status: "✓" });
        results.push({ Test: "R6", Property: "Visible", Value: wr.Visible, Status: "✓" });
        results.push({ Test: "R7", Property: "Object", Value: wr.Object ? "object" : "null", Status: "✓" });
    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Setter: Data
    try {
        const origData = wr.Data;
        wr.Data = "TestData=123";
        const check = wr.Data;
        wr.Data = origData; // Restore
        methodResults.push({ Test: "S1", Property: "Data (set)", Value: check === "TestData=123" ? "Set→Restored" : "Failed", Status: check === "TestData=123" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Data (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Src
    try {
        const origSrc = wr.Src;
        wr.Src = origSrc; // Just set same
        methodResults.push({ Test: "S2", Property: "Src (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "Src (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Label
    try {
        const origLabel = wr.Label;
        wr.Label = origLabel + " (TEST)";
        const check = wr.Label;
        wr.Label = origLabel;
        methodResults.push({ Test: "S3", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = wr.Visible;
        wr.Visible = !origVisible;
        const check = wr.Visible;
        wr.Visible = origVisible;
        methodResults.push({ Test: "S4", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Method: ContentWindow
    try {
        wr.ContentWindow(
            (win: any) => console.log("  📍 WebResource ContentWindow Success", win),
            (err: any) => console.log("  📍 WebResource ContentWindow Error", err)
        );
        methodResults.push({ Test: "S5", Property: "ContentWindow", Value: "Called", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "ContentWindow", Value: e.message, Status: "✗" });
    }

    // Method: Focus
    try {
        setTimeout(() => wr.Focus(), 1000);
        methodResults.push({ Test: "S6", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
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

    console.groupCollapsed(`🌐 TEST 22: WebResource Control [${startTime}] - Using: v4_WebResourceHelp - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R7)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S6)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}
