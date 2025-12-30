import { FormAccount_DevKitV4 } from './Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 24: Knowledge Control - v4_KnowledgeSearch Field
 * Knowledge extends IControl with SearchQuery, SelectedResults and specific events
 */
export function TestKnowledge(form: FormAccount_DevKitV4.Form): boolean {
    // NOTE: v4_KnowledgeSearch field does NOT exist in the new Account.form.ts
    // This test is skipped until Knowledge control is added to the form
    console.groupCollapsed('✅ [TS] TEST 24: Knowledge Control - SKIPPED (v4_KnowledgeSearch not on form)');
    console.groupEnd();
    return true;

    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const kb = (form.Body as any).v4_KnowledgeSearch;
    const startTime = new Date().toLocaleTimeString();

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // Knowledge-specific properties
        results.push({ Test: "R1", Property: "SelectedResults", Value: kb.SelectedResults ? "object" : "null", Status: "✓" });

        // Inherited from IControl
        results.push({ Test: "R2", Property: "ControlName", Value: kb.ControlName, Status: "✓" });
        results.push({ Test: "R3", Property: "ControlType", Value: kb.ControlType, Status: "✓" });
        results.push({ Test: "R4", Property: "Label", Value: kb.Label, Status: "✓" });
        results.push({ Test: "R5", Property: "Visible", Value: kb.Visible, Status: "✓" });
    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Property: SearchQuery (Get/Set)
    try {
        const origQuery = kb.SearchQuery;
        kb.SearchQuery = "test query";
        const check = kb.SearchQuery;
        kb.SearchQuery = origQuery || ""; // Restore
        methodResults.push({ Test: "S1", Property: "SearchQuery (set)", Value: check === "test query" ? "Set→Restored" : "Failed", Status: check === "test query" ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "SearchQuery (set)", Value: e.message, Status: "✗" });
    }

    // Method: OpenSearchResult
    try {
        // Just calling it to check existence, resultNumber 1 might not exist but method should run
        const result = kb.OpenSearchResult(1, "Inline");
        methodResults.push({ Test: "S2", Property: "OpenSearchResult", Value: `Called (returned ${result})`, Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "OpenSearchResult", Value: e.message, Status: "✗" });
    }

    // Method: AddPostSearch / RemovePostSearch
    const postSearchCallback = () => { };
    try {
        kb.AddPostSearch(postSearchCallback);
        kb.RemovePostSearch(postSearchCallback);
        methodResults.push({ Test: "S3", Property: "Add/RemovePostSearch", Value: "Registered & Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "Add/RemovePostSearch", Value: e.message, Status: "✗" });
    }

    // Method: AddResultOpened / RemoveResultOpened
    const resultOpenedCallback = () => { };
    try {
        kb.AddResultOpened(resultOpenedCallback);
        kb.RemoveResultOpened(resultOpenedCallback);
        methodResults.push({ Test: "S4", Property: "Add/RemoveResultOpened", Value: "Registered & Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "Add/RemoveResultOpened", Value: e.message, Status: "✗" });
    }

    // Method: AddSelection / RemoveSelection
    const selectionCallback = () => { };
    try {
        kb.AddSelection(selectionCallback);
        kb.RemoveSelection(selectionCallback);
        methodResults.push({ Test: "S5", Property: "Add/RemoveSelection", Value: "Registered & Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Add/RemoveSelection", Value: e.message, Status: "✗" });
    }

    // Inherited Methods
    try {
        setTimeout(() => kb.Focus(), 1000);
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

    console.groupCollapsed(`✅ [TS] TEST 24: Knowledge Control [${startTime}] - Using: v4_KnowledgeSearch - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R5)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S6)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}

