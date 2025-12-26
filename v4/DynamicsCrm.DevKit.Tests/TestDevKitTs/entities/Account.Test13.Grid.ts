import { FormAccount_DevKitV4 } from './Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 11: Grid Control - Contacts Subgrid
 * Grid provides access to subgrid data and operations
 * Uses console.table for cleaner output
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestGrid(form: FormAccount_DevKitV4.Form): void {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const startTime = new Date().toLocaleTimeString();

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // Grid-specific properties
        results.push({ Test: "R1", Property: "EntityName", Value: form.Grid.Contacts.EntityName, Status: form.Grid.Contacts.EntityName ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "FetchXml", Value: form.Grid.Contacts.FetchXml ? form.Grid.Contacts.FetchXml.substring(0, 50) + "..." : null, Status: form.Grid.Contacts.FetchXml ? "✓" : "⚠" });
        results.push({ Test: "R3", Property: "GridType", Value: form.Grid.Contacts.GridType, Status: typeof form.Grid.Contacts.GridType === "number" ? "✓" : "⚠" });

        // Relationship
        const rel = form.Grid.Contacts.Relationship;
        results.push({ Test: "R4", Property: "Relationship.name", Value: rel?.name, Status: rel ? "✓" : "⚠" });
        results.push({ Test: "R5", Property: "Relationship.navPropName", Value: rel?.navigationPropertyName, Status: rel ? "✓" : "⚠" });
        results.push({ Test: "R6", Property: "Relationship.type", Value: rel?.relationshipType, Status: rel ? "✓" : "⚠" });

        // Rows
        const rows = form.Grid.Contacts.Rows;
        results.push({ Test: "R7", Property: "Rows.getLength()", Value: rows?.getLength(), Status: rows ? "✓" : "⚠" });

        // SelectedRows
        const selectedRows = form.Grid.Contacts.SelectedRows;
        results.push({ Test: "R8", Property: "SelectedRows.getLength()", Value: selectedRows?.getLength(), Status: selectedRows ? "✓" : "⚠" });

        // TotalRecordCount
        results.push({ Test: "R9", Property: "TotalRecordCount", Value: form.Grid.Contacts.TotalRecordCount, Status: typeof form.Grid.Contacts.TotalRecordCount === "number" ? "✓" : "⚠" });

        // ViewSelector
        const vs = form.Grid.Contacts.ViewSelector;
        results.push({ Test: "R10", Property: "ViewSelector", Value: vs ? "object" : "null", Status: vs ? "✓" : "⚠" });
        results.push({ Test: "R11", Property: "ViewSelector.Visible", Value: vs?.Visible, Status: vs ? "✓" : "⚠" });

        // Visible
        results.push({ Test: "R12", Property: "Visible", Value: form.Grid.Contacts.Visible, Status: typeof form.Grid.Contacts.Visible === "boolean" ? "✓" : "⚠" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Method: Url
    try {
        const url = form.Grid.Contacts.Url(1);
        methodResults.push({ Test: "S1", Property: "Url(1)", Value: url ? url.substring(0, 50) + "..." : "null", Status: url ? "✓" : "⚠" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Url(1)", Value: e.message, Status: "✗" });
    }

    // Setter: Visible
    try {
        const origVisible = form.Grid.Contacts.Visible;
        form.Grid.Contacts.Visible = !origVisible;
        const check = form.Grid.Contacts.Visible;
        form.Grid.Contacts.Visible = origVisible;
        methodResults.push({ Test: "S2", Property: "Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "Visible (set)", Value: e.message, Status: "✗" });
    }

    // Method: AddOnLoad
    const onLoadCallback = (ctx: any) => console.log("  📍 Grid OnLoad fired");
    try {
        form.Grid.Contacts.AddOnLoad(onLoadCallback);
        methodResults.push({ Test: "S3", Property: "AddOnLoad", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "AddOnLoad", Value: e.message, Status: "✗" });
    }

    // Method: RemoveOnLoad
    try {
        form.Grid.Contacts.RemoveOnLoad(onLoadCallback);
        methodResults.push({ Test: "S4", Property: "RemoveOnLoad", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "RemoveOnLoad", Value: e.message, Status: "✗" });
    }

    // Method: Refresh
    try {
        if (typeof form.Grid.Contacts.Refresh === "function") {
            methodResults.push({ Test: "S5", Property: "Refresh", Value: "Available", Status: "✓" });
        } else {
            methodResults.push({ Test: "S5", Property: "Refresh", Value: "Not a function", Status: "✗" });
        }
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Refresh", Value: e.message, Status: "✗" });
    }

    // Method: RefreshRibbon
    try {
        if (typeof form.Grid.Contacts.RefreshRibbon === "function") {
            methodResults.push({ Test: "S6", Property: "RefreshRibbon", Value: "Available", Status: "✓" });
        } else {
            methodResults.push({ Test: "S6", Property: "RefreshRibbon", Value: "Not a function", Status: "✗" });
        }
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "RefreshRibbon", Value: e.message, Status: "✗" });
    }

    // Method: OpenRelatedGrid
    try {
        if (typeof form.Grid.Contacts.OpenRelatedGrid === "function") {
            methodResults.push({ Test: "S7", Property: "OpenRelatedGrid", Value: "Available", Status: "✓" });
        } else {
            methodResults.push({ Test: "S7", Property: "OpenRelatedGrid", Value: "Not a function", Status: "✗" });
        }
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "OpenRelatedGrid", Value: e.message, Status: "✗" });
    }

    // Test Rows iteration
    try {
        const rows = form.Grid.Contacts.Rows;
        if (rows && rows.getLength() > 0) {
            const firstRow = rows.get(0);
            methodResults.push({ Test: "S8", Property: "Rows.get(0)", Value: firstRow?.EntityId || "no EntityId", Status: firstRow ? "✓" : "⚠" });
        } else {
            methodResults.push({ Test: "S8", Property: "Rows.get(0)", Value: "No rows", Status: "⚠" });
        }
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "Rows.get(0)", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`✅ TEST 11: Grid Control [${startTime}] - Using: Contacts subgrid - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R12)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S8)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}


