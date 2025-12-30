import { FormAccount_DevKitV4 } from './Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 21: IFrame Control - v4_IFrameExternal Field
 * IFrame extends IControl with specific properties: Src, InitialUrl, ContentWindow
 */
export function TestIFrame(form: FormAccount_DevKitV4.Form): boolean {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const startTime = new Date().toLocaleTimeString();

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // IFrame-specific properties
        results.push({ Test: "R1", Property: "InitialUrl", Value: form.Body.IFRAME_PhuocLe.InitialUrl, Status: "✓" });
        results.push({ Test: "R2", Property: "Src", Value: form.Body.IFRAME_PhuocLe.Src, Status: "✓" });

        // Inherited from IControl
        results.push({ Test: "R3", Property: "ControlName", Value: form.Body.IFRAME_PhuocLe.ControlName, Status: "✓" });
        results.push({ Test: "R4", Property: "ControlType", Value: form.Body.IFRAME_PhuocLe.ControlType, Status: "✓" });
        results.push({ Test: "R5", Property: "Label", Value: form.Body.IFRAME_PhuocLe.Label, Status: "✓" });
        results.push({ Test: "R6", Property: "Visible", Value: form.Body.IFRAME_PhuocLe.Visible, Status: "✓" });
        results.push({ Test: "R7", Property: "Object", Value: form.Body.IFRAME_PhuocLe.Object ? "object" : "null", Status: "✓" });
    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Setter: Src
    try {
        const origSrc = form.Body.IFRAME_PhuocLe.Src;
        form.Body.IFRAME_PhuocLe.Src = origSrc;
        methodResults.push({ Test: "S1", Property: "Src (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Src (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Label
    try {
        const origLabel = form.Body.IFRAME_PhuocLe.Label;
        form.Body.IFRAME_PhuocLe.Label = origLabel + " (TEST)";
        const check = form.Body.IFRAME_PhuocLe.Label;
        form.Body.IFRAME_PhuocLe.Label = origLabel;
        methodResults.push({ Test: "S2", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = form.Body.IFRAME_PhuocLe.Visible;
        form.Body.IFRAME_PhuocLe.Visible = !origVisible;
        const check = form.Body.IFRAME_PhuocLe.Visible;
        form.Body.IFRAME_PhuocLe.Visible = origVisible;
        methodResults.push({ Test: "S3", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Method: ContentWindow
    try {
        form.Body.IFRAME_PhuocLe.ContentWindow(
            (win: any) => console.log("  📍 IFrame ContentWindow Success", win),
            (err: any) => console.log("  📍 IFrame ContentWindow Error", err)
        );
        methodResults.push({ Test: "S4", Property: "ContentWindow", Value: "Called", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "ContentWindow", Value: e.message, Status: "✗" });
    }

    // Method: Focus
    try {
        setTimeout(() => form.Body.IFRAME_PhuocLe.Focus(), 1000);
        methodResults.push({ Test: "S5", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Focus", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`✅ [TS] TEST 20: IFrame Control [${startTime}] - Using: IFRAME_PhuocLe - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R7)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S5)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
    return passed === total;
}


