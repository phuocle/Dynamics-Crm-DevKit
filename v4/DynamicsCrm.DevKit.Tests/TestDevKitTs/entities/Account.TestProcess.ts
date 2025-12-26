import { FormAccount_DevKitV4 } from './generator/Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 26: Process Control (BPF) - v4_AccountBPF
 * Process extends IProcess (standard Client API) and includes BPF-specific fields
 */
export function TestProcess(form: FormAccount_DevKitV4.Form): void {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const process = form.Process;
    const startTime = new Date().toLocaleTimeString();

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // Standard IProcess properties
        results.push({ Test: "R1", Property: "ActiveProcess", Value: process.ActiveProcess ? process.ActiveProcess.Name : "null", Status: "✓" });
        results.push({ Test: "R2", Property: "ActiveStage", Value: process.ActiveStage ? process.ActiveStage.Name : "null", Status: "✓" });
        results.push({ Test: "R3", Property: "InstanceId", Value: process.InstanceId, Status: "✓" });
        results.push({ Test: "R4", Property: "InstanceName", Value: process.InstanceName, Status: "✓" });
        results.push({ Test: "R5", Property: "Status", Value: process.Status, Status: "✓" });
        results.push({ Test: "R6", Property: "DisplayState", Value: process.DisplayState, Status: "✓" });
        results.push({ Test: "R7", Property: "Visible", Value: process.Visible, Status: "✓" });

        // BPF Specific Fields (Typed Check)
        const bpf = process.AccountBPF;
        if (bpf) {
            results.push({ Test: "R8", Property: "BPF.Name", Value: bpf.Name ? "Control Found" : "Missing", Status: bpf.Name ? "✓" : "✗" });
            results.push({ Test: "R9", Property: "BPF.IndustryCode", Value: bpf.IndustryCode ? "Control Found" : "Missing", Status: bpf.IndustryCode ? "✓" : "✗" });
        } else {
            results.push({ Test: "R8", Property: "v4_AccountBPF", Value: "Missing", Status: "✗" });
        }
    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Method: MoveNext / MovePrevious
    try {
        // Just calling to verify definition, callback logs status
        process.MoveNext((result: any) => console.log("  📍 MoveNext Callback:", result));
        methodResults.push({ Test: "S1", Property: "MoveNext", Value: "Called", Status: "✓" });

        process.MovePrevious((result: any) => console.log("  📍 MovePrevious Callback:", result));
        methodResults.push({ Test: "S2", Property: "MovePrevious", Value: "Called", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S1/S2", Property: "Move Nav", Value: e.message, Status: "✗" });
    }

    // Method: SetActiveProcess / SetActiveStage
    try {
        // We pass empty strings or dummy IDs just to ensure method signature matches at runtime/compile time
        // In a real run, this might fail logic but we want to know if function exists
        const dummyId = "00000000-0000-0000-0000-000000000000";
        process.SetActiveProcess(dummyId, (status: any) => console.log("  📍 SetActiveProcess:", status));
        methodResults.push({ Test: "S3", Property: "SetActiveProcess", Value: "Called", Status: "✓" });

        process.SetActiveStage(dummyId, (status: any) => console.log("  📍 SetActiveStage:", status));
        methodResults.push({ Test: "S4", Property: "SetActiveStage", Value: "Called", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3/S4", Property: "Set Active", Value: e.message, Status: "✗" });
    }



    // Events: Add/Remove OnStageChange
    const stageChangeCb = (ctx: any) => console.log("  📍 OnStageChange");
    try {
        process.AddOnStageChange(stageChangeCb);
        process.RemoveOnStageChange(stageChangeCb);
        methodResults.push({ Test: "S7", Property: "Add/RemoveOnStageChange", Value: "Registered & Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "Stage Events", Value: e.message, Status: "✗" });
    }

    // Events: Add/Remove OnProcessStatusChange
    const statusChangeCb = (ctx: any) => console.log("  📍 OnProcessStatusChange");
    try {
        process.AddOnProcessStatusChange(statusChangeCb);
        process.RemoveOnProcessStatusChange(statusChangeCb);
        methodResults.push({ Test: "S8", Property: "Add/RemoveOnProcessStatusChange", Value: "Registered & Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "Status Events", Value: e.message, Status: "✗" });
    }

    // Setters: DisplayState, Visible
    try {
        const origState = process.DisplayState;
        process.DisplayState = "expanded"; // Try setting
        const checkState = process.DisplayState;
        process.DisplayState = origState; // Restore

        const origVis = process.Visible;
        process.Visible = !origVis;
        const checkVis = process.Visible;
        process.Visible = origVis;

        methodResults.push({ Test: "S9", Property: "DisplayState/Visible (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S9", Property: "Props Set", Value: e.message, Status: "✗" });
    }


    // =====================================================
    // OUTPUT
    // =====================================================
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`✅ TEST 26: Process Control (BPF) [${startTime}] - Using: v4_AccountBPF - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R9)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S9)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}
