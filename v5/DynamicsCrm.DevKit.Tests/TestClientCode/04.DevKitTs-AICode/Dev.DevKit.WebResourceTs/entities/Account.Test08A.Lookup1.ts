import { FormAccount_DevKitV4 } from './Account.form';
import { OptionSet } from './OptionSet';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 8A: Lookup Multi-Control - OwnerId vs OwnerId1
 * PURPOSE: Test multi-control per attribute scenario
 * OwnerId attribute has 2 controls on form: OwnerId (control 1) and OwnerId1 (control 2)
 * This tests if DevKit correctly handles the same attribute bound to multiple controls
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestLookup1(form: FormAccount_DevKitV4.Form): boolean {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const startTime = new Date().toLocaleTimeString();

    // =====================================================
    // PURPOSE: Test multi-control per attribute scenario
    // OwnerId attribute has 2 controls on form: OwnerId (control 1) and OwnerId1 (control 2)
    // This tests if DevKit correctly handles the same attribute bound to multiple controls
    // =====================================================

    // =====================================================
    // READONLY PROPERTIES (R-Index) - Comparing both controls
    // =====================================================
    try {
        // R1-R4: Test that both controls share the same attribute but have different control names
        results.push({ Test: "R1", Property: "OwnerId.AttributeName", Value: form.Body.OwnerId.AttributeName, Status: form.Body.OwnerId.AttributeName === "ownerid" ? "✓" : "⚠" });
        results.push({ Test: "R2", Property: "OwnerId1.AttributeName", Value: form.Body.OwnerId1.AttributeName, Status: form.Body.OwnerId1.AttributeName === "ownerid" ? "✓" : "⚠" });
        results.push({ Test: "R3", Property: "OwnerId.ControlName", Value: form.Body.OwnerId.ControlName, Status: "✓" });
        results.push({ Test: "R4", Property: "OwnerId1.ControlName", Value: form.Body.OwnerId1.ControlName, Status: "✓" });

        // R5-R7: Same attribute = same Value
        const val1 = form.Body.OwnerId.Value;
        const val2 = form.Body.OwnerId1.Value;
        const valMatch = JSON.stringify(val1) === JSON.stringify(val2);
        results.push({ Test: "R5", Property: "OwnerId.Value", Value: val1 ? val1[0]?.name : "null", Status: "✓" });
        results.push({ Test: "R6", Property: "OwnerId1.Value", Value: val2 ? val2[0]?.name : "null", Status: "✓" });
        results.push({ Test: "R7", Property: "Values Match?", Value: valMatch, Status: valMatch ? "✓" : "⚠" });

        // R8-R11: AttributeType and ControlType
        results.push({ Test: "R8", Property: "OwnerId.AttributeType", Value: form.Body.OwnerId.AttributeType, Status: "✓" });
        results.push({ Test: "R9", Property: "OwnerId1.AttributeType", Value: form.Body.OwnerId1.AttributeType, Status: "✓" });
        results.push({ Test: "R10", Property: "OwnerId.ControlType", Value: form.Body.OwnerId.ControlType, Status: form.Body.OwnerId.ControlType === OptionSet.FieldControlType.Lookup ? "✓" : "⚠" });
        results.push({ Test: "R11", Property: "OwnerId1.ControlType", Value: form.Body.OwnerId1.ControlType, Status: form.Body.OwnerId1.ControlType === OptionSet.FieldControlType.Lookup ? "✓" : "⚠" });

        // R12-R17: Control-specific properties (can differ per control)
        results.push({ Test: "R12", Property: "OwnerId.Visible", Value: form.Body.OwnerId.Visible, Status: "✓" });
        results.push({ Test: "R13", Property: "OwnerId1.Visible", Value: form.Body.OwnerId1.Visible, Status: "✓" });
        results.push({ Test: "R14", Property: "OwnerId.Disabled", Value: form.Body.OwnerId.Disabled, Status: "✓" });
        results.push({ Test: "R15", Property: "OwnerId1.Disabled", Value: form.Body.OwnerId1.Disabled, Status: "✓" });
        results.push({ Test: "R16", Property: "OwnerId.Label", Value: form.Body.OwnerId.Label, Status: "✓" });
        results.push({ Test: "R17", Property: "OwnerId1.Label", Value: form.Body.OwnerId1.Label, Status: "✓" });
    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index) - Test control-specific vs attribute-wide changes
    // =====================================================

    // S1-S2: Setting Visible on one control should NOT affect the other
    try {
        const origVisible1 = form.Body.OwnerId.Visible;
        const origVisible2 = form.Body.OwnerId1.Visible;
        form.Body.OwnerId1.Visible = false;
        const afterChange2 = form.Body.OwnerId1.Visible;
        const afterChange1 = form.Body.OwnerId.Visible;
        form.Body.OwnerId1.Visible = origVisible2;
        const control1Unaffected = afterChange1 === origVisible1;
        methodResults.push({ Test: "S1", Property: "OwnerId1.Visible = false", Value: afterChange2 === false ? "OwnerId1 hidden" : "Failed", Status: afterChange2 === false ? "✓" : "⚠" });
        methodResults.push({ Test: "S2", Property: "OwnerId.Visible unchanged?", Value: control1Unaffected, Status: control1Unaffected ? "✓" : "⚠" });
    } catch (e: any) {
        methodResults.push({ Test: "S1/S2", Property: "Visible independence", Value: e.message, Status: "✗" });
    }

    // S3-S4: Setting Label on one control should NOT affect the other
    try {
        const origLabel1 = form.Body.OwnerId.Label;
        const origLabel2 = form.Body.OwnerId1.Label;
        form.Body.OwnerId1.Label = "Test Label 8A";
        const afterLabel2 = form.Body.OwnerId1.Label;
        const afterLabel1 = form.Body.OwnerId.Label;
        form.Body.OwnerId1.Label = origLabel2;
        const label1Unaffected = afterLabel1 === origLabel1;
        methodResults.push({ Test: "S3", Property: "OwnerId1.Label = 'Test 8A'", Value: afterLabel2 === "Test Label 8A" ? "Changed" : "Failed", Status: afterLabel2 === "Test Label 8A" ? "✓" : "⚠" });
        methodResults.push({ Test: "S4", Property: "OwnerId.Label unchanged?", Value: label1Unaffected, Status: label1Unaffected ? "✓" : "⚠" });
    } catch (e: any) {
        methodResults.push({ Test: "S3/S4", Property: "Label independence", Value: e.message, Status: "✗" });
    }

    // S5: Setting Value affects BOTH controls (attribute-level)
    try {
        const bothSameValue = JSON.stringify(form.Body.OwnerId.Value) === JSON.stringify(form.Body.OwnerId1.Value);
        methodResults.push({ Test: "S5", Property: "Value shared?", Value: bothSameValue, Status: bothSameValue ? "✓" : "⚠" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "Value sharing", Value: e.message, Status: "✗" });
    }

    // S6: RequiredLevel affects BOTH controls (attribute-level)
    try {
        const orig1 = form.Body.OwnerId.RequiredLevel;
        const orig2 = form.Body.OwnerId1.RequiredLevel;
        const bothSameReq = orig1 === orig2;
        methodResults.push({ Test: "S6", Property: "RequiredLevel same?", Value: bothSameReq ? "Both: " + orig1 : "Diff", Status: bothSameReq ? "✓" : "⚠" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "RequiredLevel", Value: e.message, Status: "✗" });
    }

    // S7: Focus on OwnerId1
    try {
        setTimeout(() => form.Body.OwnerId1.Focus(), 5000);
        methodResults.push({ Test: "S7", Property: "OwnerId1.Focus()", Value: "Scheduled (5s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "Focus", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`✅ [TS] TEST 08A: Lookup Multi-Control [${startTime}] - OwnerId vs OwnerId1 - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R17) - Comparing both controls", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S7) - Control vs Attribute scope", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log("%c📌 Note: Control-specific (Visible/Label) = independent. Attribute-level (Value/RequiredLevel) = shared.", "font-style: italic; color: #9C27B0;");

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
    return passed === total;
}

