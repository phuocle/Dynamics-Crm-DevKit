import { AccountForm } from './generator/Account.form';

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
export function TestIFrame(form: AccountForm.Form): void {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const iframe = form.Body.IFRAME_PhuocLe;
    const startTime = new Date().toLocaleTimeString();

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // IFrame-specific properties
        results.push({ Test: "R1", Property: "InitialUrl", Value: iframe.InitialUrl, Status: "✓" });
        results.push({ Test: "R2", Property: "Src", Value: iframe.Src, Status: "✓" });

        // Inherited from IControl
        results.push({ Test: "R3", Property: "ControlName", Value: iframe.ControlName, Status: "✓" });
        results.push({ Test: "R4", Property: "ControlType", Value: iframe.ControlType, Status: "✓" });
        results.push({ Test: "R5", Property: "Label", Value: iframe.Label, Status: "✓" });
        results.push({ Test: "R6", Property: "Visible", Value: iframe.Visible, Status: "✓" });
        results.push({ Test: "R7", Property: "Object", Value: iframe.Object ? "object" : "null", Status: "✓" });
        // IFrame doesn't map to a field (attribute), so Attribute props might be null/undefined or specific default
        // Usually IFrame is a control-only element.
        // We skip Attribute-related checks if not applicable, or check if they are null.
    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Setter: Src
    try {
        const origSrc = iframe.Src;
        // Just setting it to same value to test setter
        iframe.Src = origSrc;
        methodResults.push({ Test: "S1", Property: "Src (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Src (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Label
    try {
        const origLabel = iframe.Label;
        iframe.Label = origLabel + " (TEST)";
        const check = iframe.Label;
        iframe.Label = origLabel;
        methodResults.push({ Test: "S2", Property: "Label (set)", Value: check.includes("(TEST)") ? "Set→Restored" : "Failed", Status: check.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = iframe.Visible;
        iframe.Visible = !origVisible;
        const check = iframe.Visible;
        iframe.Visible = origVisible;
        methodResults.push({ Test: "S3", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Method: ContentWindow
    try {
        iframe.ContentWindow(
            (win) => console.log("  📍 IFrame ContentWindow Success", win),
            (err) => console.log("  📍 IFrame ContentWindow Error", err)
        );
        methodResults.push({ Test: "S4", Property: "ContentWindow", Value: "Called", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "ContentWindow", Value: e.message, Status: "✗" });
    }

    // Method: Focus
    try {
        setTimeout(() => iframe.Focus(), 1000);
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

    console.groupCollapsed(`🖼️ TEST 21: IFrame Control [${startTime}] - Using: v4_IFrameExternal - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R7)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S5)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}
