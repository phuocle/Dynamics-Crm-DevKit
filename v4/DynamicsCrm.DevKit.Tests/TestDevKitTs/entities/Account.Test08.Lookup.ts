import { FormAccount_DevKitV4 } from './Account.form';
import { OptionSet } from './OptionSet';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 1: Lookup Control - v4_Lookup Field
 * Uses console.table for cleaner output
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestLookup(form: FormAccount_DevKitV4.Form): boolean {
    const results: TestResult[] = [];
    const startTime = new Date().toLocaleTimeString();
    const originalDefaultView = form.Body.v4_Lookup.DefaultView;

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        const currentValue = form.Body.v4_Lookup.Value;
        const hasValue = currentValue && currentValue.length > 0;

        results.push({ Test: "R1", Property: "Value", Value: hasValue ? `${currentValue[0].name} (${currentValue[0].entityType})` : "(empty)", Status: "✓" });
        results.push({ Test: "R2", Property: "IsPartyList", Value: form.Body.v4_Lookup.IsPartyList, Status: form.Body.v4_Lookup.IsPartyList === false ? "✓" : "⚠" });
        results.push({ Test: "R3", Property: "EntityTypes", Value: JSON.stringify(form.Body.v4_Lookup.EntityTypes), Status: "✓" });
        results.push({ Test: "R4", Property: "DefaultView", Value: originalDefaultView, Status: "✓" });
        results.push({ Test: "R5", Property: "Visible", Value: form.Body.v4_Lookup.Visible, Status: "✓" });
        results.push({ Test: "R6", Property: "Disabled", Value: form.Body.v4_Lookup.Disabled, Status: "✓" });
        results.push({ Test: "R7", Property: "ControlType", Value: form.Body.v4_Lookup.ControlType, Status: form.Body.v4_Lookup.ControlType === OptionSet.FieldControlType.Lookup ? "✓" : "⚠" });
        results.push({ Test: "R8", Property: "ControlName", Value: form.Body.v4_Lookup.ControlName, Status: "✓" });
        results.push({ Test: "R9", Property: "AttributeName", Value: form.Body.v4_Lookup.AttributeName, Status: "✓" });
        results.push({ Test: "R10", Property: "AttributeType", Value: form.Body.v4_Lookup.AttributeType, Status: "✓" });
        results.push({ Test: "R11", Property: "RequiredLevel", Value: form.Body.v4_Lookup.RequiredLevel, Status: "✓" });
        results.push({ Test: "R12", Property: "SubmitMode", Value: form.Body.v4_Lookup.SubmitMode, Status: "✓" });
        results.push({ Test: "R13", Property: "IsValid", Value: form.Body.v4_Lookup.IsValid, Status: "✓" });
        results.push({ Test: "R14", Property: "IsDirty", Value: form.Body.v4_Lookup.IsDirty, Status: "✓" });
        results.push({ Test: "R15", Property: "Format", Value: form.Body.v4_Lookup.Format, Status: "✓" });
        results.push({ Test: "R16", Property: "Attribute", Value: form.Body.v4_Lookup.Attribute ? "object" : "null", Status: form.Body.v4_Lookup.Attribute ? "✓" : "⚠" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================
    const methodResults: TestResult[] = [];

    const preSearchCallback = (ctx: any) => {
        const filterXml = "<filter type='and'><condition attribute='statecode' operator='eq' value='0' /></filter>";
        form.Body.v4_Lookup.AddCustomFilter(filterXml, "contact");
        console.log("  📍 PreSearch fired - filter applied");
    };

    const tagClickCallback = (ctx: any) => {
        console.log("  📍 LookupTagClick fired - tag was clicked");
    };

    // Setters
    try {
        const testViewId = "{00000000-0000-0000-0000-000000000002}";
        form.Body.v4_Lookup.DefaultView = testViewId;
        const newView = form.Body.v4_Lookup.DefaultView;
        form.Body.v4_Lookup.DefaultView = originalDefaultView;
        methodResults.push({ Test: "S1", Property: "DefaultView (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "DefaultView (set)", Value: e.message, Status: "✗" });
    }

    try {
        const originalTypes = form.Body.v4_Lookup.EntityTypes;
        form.Body.v4_Lookup.EntityTypes = ["contact"];
        const newTypes = form.Body.v4_Lookup.EntityTypes;
        form.Body.v4_Lookup.EntityTypes = originalTypes;
        methodResults.push({ Test: "S2", Property: "EntityTypes (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "EntityTypes (set)", Value: e.message, Status: "✗" });
    }

    // Methods
    try {
        form.Body.v4_Lookup.AddPreSearch(preSearchCallback);
        methodResults.push({ Test: "S3", Property: "AddPreSearch", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "AddPreSearch", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Lookup.RemovePreSearch(preSearchCallback);
        methodResults.push({ Test: "S4", Property: "RemovePreSearch", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "RemovePreSearch", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Lookup.AddLookupTagClick(tagClickCallback);
        methodResults.push({ Test: "S5", Property: "AddLookupTagClick", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "AddLookupTagClick", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Lookup.RemoveLookupTagClick(tagClickCallback);
        methodResults.push({ Test: "S6", Property: "RemoveLookupTagClick", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "RemoveLookupTagClick", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Lookup.AddCustomView(
            "00000000-0000-0000-0000-000000000001",
            "contact",
            "Active Contacts (Custom View)",
            "<fetch><entity name='contact'><attribute name='fullname'/></entity></fetch>",
            "<grid name='resultset'><row name='result' id='contactid'><cell name='fullname' width='200'/></row></grid>",
            false
        );
        methodResults.push({ Test: "S7", Property: "AddCustomView", Value: "Added", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "AddCustomView", Value: e.message, Status: "✗" });
    }

    try {
        form.Body.v4_Lookup.SetNotification("Test notification", "TEST_1");
        setTimeout(() => form.Body.v4_Lookup.ClearNotification("TEST_1"), 3000);
        methodResults.push({ Test: "S8", Property: "SetNotification", Value: "Set (clears in 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        setTimeout(() => form.Body.v4_Lookup.Focus(), 4000);
        methodResults.push({ Test: "S9", Property: "Focus", Value: "Scheduled (4s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S9", Property: "Focus", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`✅ [TS] TEST 8: Lookup Control [${startTime}] - Using: v4_Lookup field - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R16)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S9)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
    return passed === total;
}


