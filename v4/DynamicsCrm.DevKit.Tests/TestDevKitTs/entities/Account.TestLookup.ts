import { AccountForm } from './generator/Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 1: Lookup Control - PrimaryContactId Field
 * Uses console.table for cleaner output
 * 
 * Convention:
 * - R-Index: ReadOnly properties (R1, R2, R3...)
 * - S-Index: Setters & Methods (S1, S2, S3...)
 */
export function TestLookup(form: AccountForm.Form): void {
    const results: TestResult[] = [];
    const lookup = form.Body.v4_Lookup;
    const startTime = new Date().toLocaleTimeString();
    const originalDefaultView = lookup.DefaultView;

    // =====================================================
    // READONLY PROPERTIES (R-Index)
    // =====================================================
    try {
        const currentValue = lookup.Value;
        const hasValue = currentValue && currentValue.length > 0;

        results.push({ Test: "R1", Property: "Value", Value: hasValue ? `${currentValue[0].name} (${currentValue[0].entityType})` : "(empty)", Status: "✓" });
        results.push({ Test: "R2", Property: "IsPartyList", Value: lookup.IsPartyList, Status: lookup.IsPartyList === false ? "✓" : "⚠" });
        results.push({ Test: "R3", Property: "EntityTypes", Value: JSON.stringify(lookup.EntityTypes), Status: "✓" });
        results.push({ Test: "R4", Property: "DefaultView", Value: originalDefaultView, Status: "✓" });
        results.push({ Test: "R5", Property: "Visible", Value: lookup.Visible, Status: "✓" });
        results.push({ Test: "R6", Property: "Disabled", Value: lookup.Disabled, Status: "✓" });
        results.push({ Test: "R7", Property: "ControlType", Value: lookup.ControlType, Status: lookup.ControlType === "lookup" ? "✓" : "⚠" });
        results.push({ Test: "R8", Property: "ControlName", Value: lookup.ControlName, Status: "✓" });
        results.push({ Test: "R9", Property: "AttributeName", Value: lookup.AttributeName, Status: "✓" });
        results.push({ Test: "R10", Property: "AttributeType", Value: lookup.AttributeType, Status: "✓" });
        results.push({ Test: "R11", Property: "RequiredLevel", Value: lookup.RequiredLevel, Status: "✓" });
        results.push({ Test: "R12", Property: "SubmitMode", Value: lookup.SubmitMode, Status: "✓" });
        results.push({ Test: "R13", Property: "IsValid", Value: lookup.IsValid, Status: "✓" });
        results.push({ Test: "R14", Property: "IsDirty", Value: lookup.IsDirty, Status: "✓" });
        results.push({ Test: "R15", Property: "Format", Value: lookup.Format, Status: "✓" });
        results.push({ Test: "R16", Property: "Attribute", Value: lookup.Attribute ? "object" : "null", Status: lookup.Attribute ? "✓" : "⚠" });

    } catch (error: any) {
        results.push({ Test: "ERR", Property: "Error", Value: error.message, Status: "✗" });
    }

    // =====================================================
    // SETTERS & METHODS (S-Index)
    // =====================================================
    const methodResults: TestResult[] = [];

    const preSearchCallback = (ctx: any) => {
        const filterXml = "<filter type='and'><condition attribute='statecode' operator='eq' value='0' /></filter>";
        lookup.AddCustomFilter(filterXml, "contact");
        console.log("  📍 PreSearch fired - filter applied");
    };

    const tagClickCallback = (ctx: any) => {
        console.log("  📍 LookupTagClick fired - tag was clicked");
    };

    // Setters
    try {
        const testViewId = "{00000000-0000-0000-0000-000000000002}";
        lookup.DefaultView = testViewId;
        const newView = lookup.DefaultView;
        lookup.DefaultView = originalDefaultView;
        methodResults.push({ Test: "S1", Property: "DefaultView (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "DefaultView (set)", Value: e.message, Status: "✗" });
    }

    try {
        const originalTypes = lookup.EntityTypes;
        lookup.EntityTypes = ["contact"];
        const newTypes = lookup.EntityTypes;
        lookup.EntityTypes = originalTypes;
        methodResults.push({ Test: "S2", Property: "EntityTypes (set)", Value: "Set→Restored", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "EntityTypes (set)", Value: e.message, Status: "✗" });
    }

    // Methods
    try {
        lookup.AddPreSearch(preSearchCallback);
        methodResults.push({ Test: "S3", Property: "AddPreSearch", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "AddPreSearch", Value: e.message, Status: "✗" });
    }

    try {
        lookup.RemovePreSearch(preSearchCallback);
        methodResults.push({ Test: "S4", Property: "RemovePreSearch", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "RemovePreSearch", Value: e.message, Status: "✗" });
    }

    try {
        lookup.AddLookupTagClick(tagClickCallback);
        methodResults.push({ Test: "S5", Property: "AddLookupTagClick", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "AddLookupTagClick", Value: e.message, Status: "✗" });
    }

    try {
        lookup.RemoveLookupTagClick(tagClickCallback);
        methodResults.push({ Test: "S6", Property: "RemoveLookupTagClick", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "RemoveLookupTagClick", Value: e.message, Status: "✗" });
    }

    try {
        lookup.AddCustomView(
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
        lookup.SetNotification("Test notification", "TEST_1");
        setTimeout(() => lookup.ClearNotification("TEST_1"), 3000);
        methodResults.push({ Test: "S8", Property: "SetNotification", Value: "Set (clears in 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        setTimeout(() => lookup.Focus(), 4000);
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

    console.groupCollapsed(`🔍 TEST 1: Lookup Control [${startTime}] - Using: PrimaryContactId field - ${passed}/${total}`);

    console.log("%c📋 ReadOnly Properties (R1-R16)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Setters & Methods (S1-S9)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}
