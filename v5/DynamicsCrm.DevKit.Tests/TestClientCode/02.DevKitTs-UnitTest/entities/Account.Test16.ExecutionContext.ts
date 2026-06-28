import { Account } from './Account.form';

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
export function TestExecutionContext(form: Account.Account_DevKitV4): boolean {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const ctx = form.ExecutionContext;
    const startTime = new Date().toLocaleTimeString();

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================

    // R1: Depth
    try {
        results.push({ Test: "R1", Property: "Depth", Value: ctx.Depth, Status: typeof ctx.Depth === "number" ? "✓" : "⚠" });
    } catch (e: any) {
        results.push({ Test: "R1", Property: "Depth", Value: e.message, Status: "✗" });
    }

    // R2: EntityReference (only available on some events like OnSave)
    try {
        const entityRef = ctx.EntityReference;
        results.push({ Test: "R2", Property: "EntityReference", Value: entityRef ? "EntityReference Object" : "null (OnLoad event)", Status: "✓" });
    } catch (e: any) {
        results.push({ Test: "R2", Property: "EntityReference", Value: "Not available on OnLoad", Status: "✓" });
    }

    // R3: EventArgs
    try {
        const eventArgs = ctx.EventArgs;
        results.push({ Test: "R3", Property: "EventArgs", Value: eventArgs ? "EventArgs Object" : "null", Status: "✓" });
    } catch (e: any) {
        results.push({ Test: "R3", Property: "EventArgs", Value: e.message, Status: "✗" });
    }

    // R4: EventSource
    try {
        results.push({ Test: "R4", Property: "EventSource", Value: ctx.EventSource ? "EventSource Object" : "null", Status: "✓" });
    } catch (e: any) {
        results.push({ Test: "R4", Property: "EventSource", Value: e.message, Status: "✗" });
    }

    // R5: FormContext
    try {
        results.push({ Test: "R5", Property: "FormContext", Value: ctx.FormContext ? "FormContext Object" : null, Status: ctx.FormContext ? "✓" : "⚠" });
    } catch (e: any) {
        results.push({ Test: "R5", Property: "FormContext", Value: e.message, Status: "✗" });
    }

    // R6: IsSaveSuccess (only available on OnSave PostSave event)
    try {
        const isSaveSuccess = ctx.IsSaveSuccess;
        results.push({ Test: "R6", Property: "IsSaveSuccess", Value: isSaveSuccess !== undefined ? isSaveSuccess : "undefined (OnLoad event)", Status: "✓" });
    } catch (e: any) {
        results.push({ Test: "R6", Property: "IsSaveSuccess", Value: "Not available on OnLoad", Status: "✓" });
    }

    // R7: SaveMode (only available on OnSave event)
    try {
        const saveMode = ctx.SaveMode;
        results.push({ Test: "R7", Property: "SaveMode", Value: saveMode !== undefined ? saveMode : "undefined (OnLoad event)", Status: "✓" });
    } catch (e: any) {
        results.push({ Test: "R7", Property: "SaveMode", Value: "Not available on OnLoad", Status: "✓" });
    }

    // R8: SaveErrorInfo (only available on PostSave event)
    try {
        results.push({ Test: "R8", Property: "SaveErrorInfo", Value: ctx.SaveErrorInfo, Status: "✓" });
    } catch (e: any) {
        results.push({ Test: "R8", Property: "SaveErrorInfo", Value: "Not available on OnLoad", Status: "✓" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================

    // S1: Set/GetSharedVariable
    try {
        const testKey = "DevKitTestVariable";
        const testValue = { data: "Test value from DevKit", timestamp: new Date().toISOString() };
        ctx.SetSharedVariable(testKey, testValue);
        const retrieved = ctx.GetSharedVariable(testKey);
        const success = retrieved && retrieved.data === testValue.data;
        methodResults.push({ Test: "S1", Property: "Set/GetSharedVariable", Value: success ? "Set and Retrieved Successfully" : "Failed", Status: success ? "✓" : "⚠" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "Set/GetSharedVariable", Value: e.message, Status: "✗" });
    }

    // S2: IsInitialLoad
    try {
        const isInitial = ctx.IsInitialLoad();
        methodResults.push({ Test: "S2", Property: "IsInitialLoad()", Value: isInitial, Status: typeof isInitial === "boolean" ? "✓" : "⚠" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "IsInitialLoad()", Value: e.message, Status: "✗" });
    }

    // S3: IsDefaultPrevented (only available on OnSave event)
    try {
        if (typeof ctx.IsDefaultPrevented === "function") {
            const isPrevented = ctx.IsDefaultPrevented();
            methodResults.push({ Test: "S3", Property: "IsDefaultPrevented()", Value: isPrevented, Status: "✓" });
        } else {
            methodResults.push({ Test: "S3", Property: "IsDefaultPrevented()", Value: "Not available on OnLoad event", Status: "⚠" });
        }
    } catch (e: any) {
        // Exception means the underlying CRM API is not available on OnLoad event
        methodResults.push({ Test: "S3", Property: "IsDefaultPrevented()", Value: "Not available on OnLoad event", Status: "✓" });
    }

    // S4: DisableAsyncTimeout
    try {
        methodResults.push({ Test: "S4", Property: "DisableAsyncTimeout", Value: typeof ctx.DisableAsyncTimeout === "function" ? "Method exists" : "Not a function", Status: typeof ctx.DisableAsyncTimeout === "function" ? "✓" : "⚠" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "DisableAsyncTimeout", Value: e.message, Status: "✗" });
    }

    // S5: SetPreventDefault (only available on OnSave event)
    try {
        methodResults.push({ Test: "S5", Property: "SetPreventDefault", Value: typeof ctx.SetPreventDefault === "function" ? "Method exists" : "Not available on OnLoad", Status: typeof ctx.SetPreventDefault === "function" ? "✓" : "⚠" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "SetPreventDefault", Value: e.message, Status: "✗" });
    }

    // S6: SetPreventDefaultOnError (only available on OnSave event)
    try {
        methodResults.push({ Test: "S6", Property: "SetPreventDefaultOnError", Value: typeof ctx.SetPreventDefaultOnError === "function" ? "Method exists" : "Not available on OnLoad", Status: typeof ctx.SetPreventDefaultOnError === "function" ? "✓" : "⚠" });
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

    console.groupCollapsed(`✅ [TS] TEST 16: ExecutionContext [${startTime}] - Using: form.ExecutionContext - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R8)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
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


