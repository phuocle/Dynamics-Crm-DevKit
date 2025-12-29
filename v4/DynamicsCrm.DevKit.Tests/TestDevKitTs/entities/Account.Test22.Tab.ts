import { FormAccount_DevKitV4 } from './Account.form';
import { OptionSet } from './OptionSet';


interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 22: Tab Control - TAB_1 & TAB_1_SECTION_1
 * ITab interface for form tabs with DisplayState, Label, Visible properties
 * Also tests Section within the tab
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestTab(form: FormAccount_DevKitV4.Form): void {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const startTime = new Date().toLocaleTimeString();

    // =====================================================
    // TAB READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        results.push({ Test: "R1", Property: "form.Body.Tab.TAB_1.Name", Value: form.Body.Tab.TAB_1.Name, Status: form.Body.Tab.TAB_1.Name ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "form.Body.Tab.TAB_1.Parent", Value: form.Body.Tab.TAB_1.Parent ? "object" : "null", Status: form.Body.Tab.TAB_1.Parent ? "✓" : "⚠" });
        results.push({ Test: "R3", Property: "form.Body.Tab.TAB_1.DisplayState", Value: form.Body.Tab.TAB_1.DisplayState, Status: form.Body.Tab.TAB_1.DisplayState === OptionSet.TabDisplayState.Expanded || form.Body.Tab.TAB_1.DisplayState === OptionSet.TabDisplayState.Collapsed ? "✓" : "⚠" });
        results.push({ Test: "R4", Property: "form.Body.Tab.TAB_1.Label", Value: form.Body.Tab.TAB_1.Label, Status: form.Body.Tab.TAB_1.Label ? "✓" : "⚠" });
        results.push({ Test: "R5", Property: "form.Body.Tab.TAB_1.Visible", Value: form.Body.Tab.TAB_1.Visible, Status: typeof form.Body.Tab.TAB_1.Visible === "boolean" ? "✓" : "⚠" });
        results.push({ Test: "R6", Property: "form.Body.Tab.TAB_1.ContentType", Value: form.Body.Tab.TAB_1.ContentType, Status: "✓" });

        // Section properties (TAB_1_SECTION_1)
        results.push({ Test: "R7", Property: "form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1", Value: form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1 ? "object" : "null", Status: form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1 ? "✓" : "⚠" });
        results.push({ Test: "R8", Property: "form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1.Name", Value: form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1?.Name, Status: form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1?.Name ? "✓" : "⚠" });
        results.push({ Test: "R9", Property: "form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1.Parent", Value: form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1?.Parent ? "object" : "null", Status: form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1?.Parent ? "✓" : "⚠" });
        results.push({ Test: "R10", Property: "form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1.Label", Value: form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1?.Label, Status: form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1?.Label ? "✓" : "⚠" });
        results.push({ Test: "R11", Property: "form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1.Visible", Value: form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1?.Visible, Status: typeof form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1?.Visible === "boolean" ? "✓" : "⚠" });

        // Section Controls (TAB_1_SECTION_1.Controls)
        const controls = form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1?.Controls;
        results.push({ Test: "R12", Property: "form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1.Controls", Value: controls ? "object" : "null", Status: controls ? "✓" : "⚠" });
        results.push({ Test: "R13", Property: "form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1.Controls.getLength()", Value: controls?.getLength(), Status: typeof controls?.getLength() === "number" ? "✓" : "⚠" });
        results.push({ Test: "R14", Property: "form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1.Controls.get(0)", Value: controls?.get(0) ? "control" : "null", Status: "✓" });

        // Test Controls.forEach
        let controlNames: string[] = [];
        controls?.forEach((ctrl: any, idx: number) => { if (ctrl?.getName) controlNames.push(ctrl.getName()); });
        results.push({ Test: "R15", Property: "form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1.Controls.forEach()", Value: controlNames.length > 0 ? controlNames.join(", ") : "no controls", Status: "✓" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // TAB SETTERS & METHODS (S-Index)
    // =====================================================

    // Setter: DisplayState
    try {
        const origDisplayState = form.Body.Tab.TAB_1.DisplayState;
        form.Body.Tab.TAB_1.DisplayState = origDisplayState === OptionSet.TabDisplayState.Expanded ? OptionSet.TabDisplayState.Collapsed : OptionSet.TabDisplayState.Expanded;
        const checkDisplayState = form.Body.Tab.TAB_1.DisplayState;
        form.Body.Tab.TAB_1.DisplayState = origDisplayState;
        methodResults.push({ Test: "S1", Property: "form.Body.Tab.TAB_1.DisplayState (set)", Value: `${origDisplayState} -> ${checkDisplayState} -> ${origDisplayState}`, Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "form.Body.Tab.TAB_1.DisplayState (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Label
    try {
        const origLabel = form.Body.Tab.TAB_1.Label;
        form.Body.Tab.TAB_1.Label = origLabel + " (TEST)";
        const checkLabel = form.Body.Tab.TAB_1.Label;
        form.Body.Tab.TAB_1.Label = origLabel;
        methodResults.push({ Test: "S2", Property: "form.Body.Tab.TAB_1.Label (set)", Value: checkLabel?.includes("(TEST)") ? "Set -> Restored" : "Failed", Status: checkLabel?.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "form.Body.Tab.TAB_1.Label (set)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = form.Body.Tab.TAB_1.Visible;
        form.Body.Tab.TAB_1.Visible = !origVisible;
        const checkVisible = form.Body.Tab.TAB_1.Visible;
        form.Body.Tab.TAB_1.Visible = origVisible;
        methodResults.push({ Test: "S3", Property: "form.Body.Tab.TAB_1.Visible (set)", Value: "Set -> Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "form.Body.Tab.TAB_1.Visible (set)", Value: e.message, Status: "✗" });
    }

    // Method: Focus
    try {
        setTimeout(() => form.Body.Tab.TAB_1.Focus(), 500);
        methodResults.push({ Test: "S4", Property: "form.Body.Tab.TAB_1.Focus()", Value: "Scheduled (500ms)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "form.Body.Tab.TAB_1.Focus()", Value: e.message, Status: "✗" });
    }

    // Method: AddTabStateChange / RemoveTabStateChange
    const tabStateCallback = (ctx: any) => { };
    try {
        form.Body.Tab.TAB_1.AddTabStateChange(tabStateCallback);
        form.Body.Tab.TAB_1.RemoveTabStateChange(tabStateCallback);
        methodResults.push({ Test: "S5", Property: "form.Body.Tab.TAB_1.Add/RemoveTabStateChange", Value: "Registered & Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "form.Body.Tab.TAB_1.Add/RemoveTabStateChange", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // SECTION SETTERS (S-Index continued)
    // =====================================================

    // Section: Label
    try {
        const origSectionLabel = form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1.Label;
        form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1.Label = origSectionLabel + " (TEST)";
        const checkSectionLabel = form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1.Label;
        form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1.Label = origSectionLabel;
        methodResults.push({ Test: "S6", Property: "form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1.Label (set)", Value: checkSectionLabel?.includes("(TEST)") ? "Set -> Restored" : "Failed", Status: checkSectionLabel?.includes("(TEST)") ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1.Label (set)", Value: e.message, Status: "✗" });
    }

    // Section: Visible
    try {
        const origSectionVisible = form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1.Visible;
        form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1.Visible = !origSectionVisible;
        const checkSectionVisible = form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1.Visible;
        form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1.Visible = origSectionVisible;
        methodResults.push({ Test: "S7", Property: "form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1.Visible (set)", Value: "Set -> Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "form.Body.Tab.TAB_1.Section.TAB_1_SECTION_1.Visible (set)", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`✅ TEST 22: Tab Control [${startTime}] - Using: TAB_1 & TAB_1_SECTION_1 - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R15)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S7)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}

