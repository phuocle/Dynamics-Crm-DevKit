import { FormAccount_DevKitV4 } from './Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 26: WebResource Control - WebResource_DevKitV4 Field
 * WebResource extends IControl with specific properties: Src, Data, ContentWindow, Object
 *
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestWebResource(form: FormAccount_DevKitV4.Form): boolean {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const startTime = new Date().toLocaleTimeString();

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // R1: ControlType
        results.push({ Test: "R1", Property: "ControlType", Value: form.Body.WebResource_DevKitV4.ControlType, Status: form.Body.WebResource_DevKitV4.ControlType ? "✓" : "⚠" });

        // R2: ControlName
        results.push({ Test: "R2", Property: "ControlName", Value: form.Body.WebResource_DevKitV4.ControlName, Status: form.Body.WebResource_DevKitV4.ControlName ? "✓" : "⚠" });

        // R3: Label
        results.push({ Test: "R3", Property: "Label", Value: form.Body.WebResource_DevKitV4.Label, Status: form.Body.WebResource_DevKitV4.Label !== undefined ? "✓" : "⚠" });

        // R4: Visible
        results.push({ Test: "R4", Property: "Visible", Value: form.Body.WebResource_DevKitV4.Visible, Status: typeof form.Body.WebResource_DevKitV4.Visible === "boolean" ? "✓" : "⚠" });

        // R5: Src
        results.push({ Test: "R5", Property: "Src", Value: form.Body.WebResource_DevKitV4.Src ? form.Body.WebResource_DevKitV4.Src.substring(0, 60) + "..." : "null", Status: form.Body.WebResource_DevKitV4.Src !== undefined ? "✓" : "⚠" });

        // R6: Object (returns the WebResource HTML element)
        results.push({ Test: "R6", Property: "Object", Value: form.Body.WebResource_DevKitV4.Object ? "HTMLIFrameElement" : "null", Status: form.Body.WebResource_DevKitV4.Object !== undefined ? "✓" : "⚠" });

        // R7: ContentWindow (method that returns promise or uses callbacks)
        results.push({ Test: "R7", Property: "ContentWindow", Value: typeof form.Body.WebResource_DevKitV4.ContentWindow === "function" ? "Method exists" : "Not a function", Status: typeof form.Body.WebResource_DevKitV4.ContentWindow === "function" ? "✓" : "⚠" });
    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // S1: Src (set)
    try {
        const origSrc = form.Body.WebResource_DevKitV4.Src;
        form.Body.WebResource_DevKitV4.Src = origSrc;
        methodResults.push({ Test: "S1", Property: "Src (set)", Value: "Set to same value", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Src (set)", Value: e.message, Status: "✗" });
    }

    // S2: Visible (set)
    try {
        const origVisible = form.Body.WebResource_DevKitV4.Visible;
        form.Body.WebResource_DevKitV4.Visible = !origVisible;
        form.Body.WebResource_DevKitV4.Visible = origVisible;
        methodResults.push({ Test: "S2", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // S3: Label (set)
    try {
        const origLabel = form.Body.WebResource_DevKitV4.Label;
        form.Body.WebResource_DevKitV4.Label = origLabel + " (TEST)";
        const check = form.Body.WebResource_DevKitV4.Label;
        form.Body.WebResource_DevKitV4.Label = origLabel;
        methodResults.push({ Test: "S3", Property: "Label (set)", Value: check && check.includes("(TEST)") ? "Set→Restored" : "Set (label may be empty)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "Label (set)", Value: e.message, Status: "✗" });
    }

    // S4: Focus
    try {
        setTimeout(() => form.Body.WebResource_DevKitV4.Focus(), 1000);
        methodResults.push({ Test: "S4", Property: "Focus", Value: "Scheduled (1s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Focus", Value: e.message, Status: "✗" });
    }

    // S5: Disabled (if available)
    try {
        const origDisabled = form.Body.WebResource_DevKitV4.Disabled;
        form.Body.WebResource_DevKitV4.Disabled = !origDisabled;
        form.Body.WebResource_DevKitV4.Disabled = origDisabled;
        methodResults.push({ Test: "S5", Property: "Disabled (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Disabled (set)", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`✅ [TS] TEST 26: WebResource Control [${startTime}] - Using: WebResource_DevKitV4 - ${passed}/${total}`);
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



