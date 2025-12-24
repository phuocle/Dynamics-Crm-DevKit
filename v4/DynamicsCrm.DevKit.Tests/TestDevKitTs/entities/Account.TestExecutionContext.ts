import { FormAccount_DevKitV4 } from './generator/Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 16: ExecutionContext - form.ExecutionContext
 * IExecutionContext interface for form event handlers with execution context access
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestExecutionContext(form: FormAccount_DevKitV4.Form): void {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const ctx = form.ExecutionContext;
    const startTime = new Date().toLocaleTimeString();

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        results.push({ Test: "R1", Property: "Depth", Value: ctx.Depth, Status: typeof ctx.Depth === "number" ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "EntityReference", Value: ctx.EntityReference, Status: "✓" });
        results.push({ Test: "R3", Property: "EventArgs", Value: ctx.EventArgs, Status: "✓" });
        results.push({ Test: "R4", Property: "EventSource", Value: ctx.EventSource, Status: "✓" });
        results.push({ Test: "R5", Property: "FormContext", Value: ctx.FormContext ? "FormContext Object" : null, Status: ctx.FormContext ? "✓" : "⚠" });
        results.push({ Test: "R6", Property: "IsSaveSuccess", Value: ctx.IsSaveSuccess, Status: "✓" });
        results.push({ Test: "R7", Property: "SaveErrorInfo", Value: ctx.SaveErrorInfo, Status: "✓" });
        results.push({ Test: "R8", Property: "SaveMode", Value: ctx.SaveMode, Status: "✓" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Props Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // Method: SetSharedVariable / GetSharedVariable
    try {
        const testKey = "DevKitTestVariable";
        const testValue = { data: "Test value from DevKit", timestamp: new Date().toISOString() };
        ctx.SetSharedVariable(testKey, testValue);
        const retrieved = ctx.GetSharedVariable(testKey);
        const success = retrieved && retrieved.data === testValue.data;
        methodResults.push({ Test: "S1", Property: "Set/GetSharedVariable", Value: success ? "Set and Retrieved Successfully" : "Failed", Status: success ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Set/GetSharedVariable", Value: e.message, Status: "✗" });
    }

    // Method: IsInitialLoad
    try {
        const isInitial = ctx.IsInitialLoad();
        methodResults.push({ Test: "S2", Property: "IsInitialLoad()", Value: isInitial, Status: typeof isInitial === "boolean" ? "✓" : "⚠" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "IsInitialLoad()", Value: e.message, Status: "✗" });
    }

    // Method: IsDefaultPrevented
    try {
        const isPrevented = ctx.IsDefaultPrevented();
        methodResults.push({ Test: "S3", Property: "IsDefaultPrevented()", Value: isPrevented, Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "IsDefaultPrevented()", Value: e.message, Status: "✗" });
    }

    // Method: DisableAsyncTimeout (only valid in OnSave, we just test it exists)
    try {
        const hasMethod = typeof ctx.DisableAsyncTimeout === "function";
        methodResults.push({ Test: "S4", Property: "DisableAsyncTimeout", Value: hasMethod ? "Method exists" : "Not a function", Status: hasMethod ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "DisableAsyncTimeout", Value: e.message, Status: "✗" });
    }

    // Method: SetPreventDefault (only valid in OnSave, we just test it exists)
    try {
        const hasMethod = typeof ctx.SetPreventDefault === "function";
        methodResults.push({ Test: "S5", Property: "SetPreventDefault", Value: hasMethod ? "Method exists" : "Not a function", Status: hasMethod ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "SetPreventDefault", Value: e.message, Status: "✗" });
    }

    // Method: SetPreventDefaultOnError (only valid in OnSave, we just test it exists)
    try {
        const hasMethod = typeof ctx.SetPreventDefaultOnError === "function";
        methodResults.push({ Test: "S6", Property: "SetPreventDefaultOnError", Value: hasMethod ? "Method exists" : "Not a function", Status: hasMethod ? "✓" : "✗" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "SetPreventDefaultOnError", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`🎯 TEST 16: ExecutionContext [${startTime}] - Using: form.ExecutionContext - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R8)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S6)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}
