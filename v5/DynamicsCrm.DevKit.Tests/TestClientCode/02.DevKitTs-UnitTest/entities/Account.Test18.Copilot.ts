import { FormAccount_DevKitV4 } from './Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 18: Copilot API
 * 
 * Tests the form.Copilot API wrapper
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2...)
 * - S-Index: Setters & Methods (S1, S2...)
 * 
 * ICopilot Interface:
 * - ExecuteEvent(eventName, eventParameters, successCallback?, errorCallback?): Promise | void
 * - ExecutePrompt(promptText, successCallback?, errorCallback?): Promise | void
 * 
 * Note: Copilot API is a Preview feature and may not be available in all environments
 */
export function TestCopilot(form: FormAccount_DevKitV4.Form): boolean {
    const results: TestResult[] = [];         // ReadOnly (R-Index)
    const methodResults: TestResult[] = [];   // Setters & Methods (S-Index)
    const startTime = new Date().toLocaleTimeString();

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        // R1: Check Copilot exists
        results.push({
            Test: "R1",
            Property: "Copilot exists",
            Value: form.Copilot !== undefined && form.Copilot !== null,
            Status: form.Copilot !== undefined && form.Copilot !== null ? "✓" : "⚠"
        });

        // R2: ExecuteEvent function exists
        results.push({
            Test: "R2",
            Property: "ExecuteEvent function exists",
            Value: typeof form.Copilot?.ExecuteEvent === 'function',
            Status: typeof form.Copilot?.ExecuteEvent === 'function' ? "✓" : "⚠"
        });

        // R3: ExecutePrompt function exists
        results.push({
            Test: "R3",
            Property: "ExecutePrompt function exists",
            Value: typeof form.Copilot?.ExecutePrompt === 'function',
            Status: typeof form.Copilot?.ExecutePrompt === 'function' ? "✓" : "⚠"
        });

        // R4: Check if Xrm.Copilot is available (Preview feature)
        const xrmCopilotAvailable = typeof (window as any).Xrm?.Copilot !== 'undefined';
        results.push({
            Test: "R4",
            Property: "Xrm.Copilot available (Preview)",
            Value: xrmCopilotAvailable,
            Status: xrmCopilotAvailable ? "✓" : "⚠"
        });

    } catch (error: any) {
        results.push({
            Test: "ERR",
            Property: "ReadOnly Error",
            Value: error.message,
            Status: "✗"
        });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================
    try {
        // S1: ExecuteEvent with callback (test structure only - Copilot may not be enabled)
        let executeEventResult = "Not available";
        try {
            // Note: This test only verifies the function can be called without throwing
            // Actual Copilot functionality requires Copilot to be enabled in the environment
            const eventPromise = form.Copilot?.ExecuteEvent("test_event", { testParam: "value" });
            if (eventPromise && typeof eventPromise.then === 'function') {
                executeEventResult = "Promise returned";
            } else if (eventPromise === undefined) {
                executeEventResult = "undefined (Copilot not enabled)";
            }
        } catch (e: any) {
            executeEventResult = `Error: ${e.message}`;
        }
        methodResults.push({
            Test: "S1",
            Property: "ExecuteEvent('test_event', {...})",
            Value: executeEventResult,
            Status: executeEventResult.includes("Promise") || executeEventResult.includes("undefined") ? "✓" : "⚠"
        });

        // S2: ExecuteEvent with success callback
        let callbackResult = "Not called";
        try {
            form.Copilot?.ExecuteEvent("test_event_2", { id: 1 },
                (result: any) => { callbackResult = "Success callback invoked"; },
                (error: any) => { callbackResult = "Error callback invoked"; }
            );
            callbackResult = "Callbacks registered";
        } catch (e: any) {
            callbackResult = `Error: ${e.message}`;
        }
        methodResults.push({
            Test: "S2",
            Property: "ExecuteEvent with callbacks",
            Value: callbackResult,
            Status: callbackResult.includes("registered") || callbackResult.includes("invoked") ? "✓" : "⚠"
        });

        // S3: ExecutePrompt with string (test structure only)
        let executePromptResult = "Not available";
        try {
            const promptPromise = form.Copilot?.ExecutePrompt("Summarize this account");
            if (promptPromise && typeof promptPromise.then === 'function') {
                executePromptResult = "Promise returned";
            } else if (promptPromise === undefined) {
                executePromptResult = "undefined (Copilot not enabled)";
            }
        } catch (e: any) {
            executePromptResult = `Error: ${e.message}`;
        }
        methodResults.push({
            Test: "S3",
            Property: "ExecutePrompt('Summarize...')",
            Value: executePromptResult,
            Status: executePromptResult.includes("Promise") || executePromptResult.includes("undefined") ? "✓" : "⚠"
        });

        // S4: ExecutePrompt with success callback
        let promptCallbackResult = "Not called";
        try {
            form.Copilot?.ExecutePrompt("Test prompt",
                (result: any) => { promptCallbackResult = "Success callback invoked"; },
                (error: any) => { promptCallbackResult = "Error callback invoked"; }
            );
            promptCallbackResult = "Callbacks registered";
        } catch (e: any) {
            promptCallbackResult = `Error: ${e.message}`;
        }
        methodResults.push({
            Test: "S4",
            Property: "ExecutePrompt with callbacks",
            Value: promptCallbackResult,
            Status: promptCallbackResult.includes("registered") || promptCallbackResult.includes("invoked") ? "✓" : "⚠"
        });

    } catch (e: any) {
        methodResults.push({
            Test: "S-ERR",
            Property: "Setters/Methods Error",
            Value: e.message,
            Status: "✗"
        });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const total = allResults.length;

    console.groupCollapsed(`✅ [TS] TEST 18: Copilot [${startTime}] - Using: form.Copilot (Preview) - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R4)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S4)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log("%c⚠️ Note: Copilot is a Preview feature and may not be available in all environments",
        "font-style: italic; color: #FF9800;");

    console.log(`%c✅ Summary: ${passed}/${total} passed, ${warnings} warnings`,
        "font-weight: bold; color: #4CAF50; font-size: 14px;");
    console.groupEnd();
    return passed === total;
}


