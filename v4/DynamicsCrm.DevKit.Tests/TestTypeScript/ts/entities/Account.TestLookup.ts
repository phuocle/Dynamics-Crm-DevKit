import { AccountForm } from './generator/Account.form';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST: Lookup Control - PrimaryContactId Field
 * Uses console.table for cleaner output
 */
export function TestLookup(form: AccountForm.Form): void {
    console.clear();

    const results: TestResult[] = [];
    const lookup = form.Body.PrimaryContactId;
    const startTime = new Date().toLocaleTimeString();

    // Collect all test results
    try {
        // Test 1: Value
        const currentValue = lookup.Value;
        const hasValue = currentValue && currentValue.length > 0;
        results.push({
            Test: "1",
            Property: "Value",
            Value: hasValue ? `${currentValue[0].name} (${currentValue[0].entityType})` : "(empty)",
            Status: "✓"
        });

        // Test 2: IsPartyList
        results.push({
            Test: "2",
            Property: "IsPartyList",
            Value: lookup.IsPartyList,
            Status: lookup.IsPartyList === false ? "✓" : "⚠"
        });

        // Test 3: EntityTypes
        results.push({
            Test: "3",
            Property: "EntityTypes",
            Value: JSON.stringify(lookup.EntityTypes),
            Status: "✓"
        });

        // Test 4: DefaultView (getter)
        const originalDefaultView = lookup.DefaultView;
        results.push({
            Test: "4",
            Property: "DefaultView",
            Value: originalDefaultView,
            Status: "✓"
        });

        // Test 5: Visible
        results.push({
            Test: "5",
            Property: "Visible",
            Value: lookup.Visible,
            Status: "✓"
        });

        // Test 6: Disabled
        results.push({
            Test: "6",
            Property: "Disabled",
            Value: lookup.Disabled,
            Status: "✓"
        });

        // Test 7: ControlType
        results.push({
            Test: "7",
            Property: "ControlType",
            Value: lookup.ControlType,
            Status: lookup.ControlType === "lookup" ? "✓" : "⚠"
        });

        // Test 8: ControlName & AttributeName
        results.push({
            Test: "8a",
            Property: "ControlName",
            Value: lookup.ControlName,
            Status: "✓"
        });
        results.push({
            Test: "8b",
            Property: "AttributeName",
            Value: lookup.AttributeName,
            Status: "✓"
        });

        // Test 9: Attribute Properties
        results.push({
            Test: "9a",
            Property: "AttributeType",
            Value: lookup.AttributeType,
            Status: "✓"
        });
        results.push({
            Test: "9b",
            Property: "RequiredLevel",
            Value: lookup.RequiredLevel,
            Status: "✓"
        });
        results.push({
            Test: "9c",
            Property: "SubmitMode",
            Value: lookup.SubmitMode,
            Status: "✓"
        });
        results.push({
            Test: "9d",
            Property: "IsValid",
            Value: lookup.IsValid,
            Status: "✓"
        });
        results.push({
            Test: "9e",
            Property: "IsDirty",
            Value: lookup.IsDirty,
            Status: "✓"
        });
        results.push({
            Test: "9f",
            Property: "Format",
            Value: lookup.Format,
            Status: "✓"
        });
        results.push({
            Test: "9g",
            Property: "Attribute",
            Value: lookup.Attribute ? "object" : "null",
            Status: lookup.Attribute ? "✓" : "⚠"
        });

    } catch (error: any) {
        results.push({
            Test: "ERR",
            Property: "Error",
            Value: error.message,
            Status: "✗"
        });
    }

    // Test 10-17: Methods (these have side effects, log separately)
    const methodResults: TestResult[] = [];

    // Store callback references for removal tests
    const preSearchCallback = (ctx: any) => {
        const filterXml = "<filter type='and'><condition attribute='statecode' operator='eq' value='0' /></filter>";
        lookup.AddCustomFilter(filterXml, "contact");
        console.log("  📍 PreSearch fired - filter applied");
    };

    const tagClickCallback = (ctx: any) => {
        console.log("  📍 LookupTagClick fired - tag was clicked");
    };

    // Test 10: AddPreSearch
    try {
        lookup.AddPreSearch(preSearchCallback);
        methodResults.push({ Test: "10", Property: "AddPreSearch", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "10", Property: "AddPreSearch", Value: e.message, Status: "✗" });
    }

    // Test 11: RemovePreSearch
    try {
        lookup.RemovePreSearch(preSearchCallback);
        methodResults.push({ Test: "11", Property: "RemovePreSearch", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "11", Property: "RemovePreSearch", Value: e.message, Status: "✗" });
    }

    // Test 12: AddLookupTagClick
    try {
        lookup.AddLookupTagClick(tagClickCallback);
        methodResults.push({ Test: "12", Property: "AddLookupTagClick", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "12", Property: "AddLookupTagClick", Value: e.message, Status: "✗" });
    }

    // Test 13: RemoveLookupTagClick
    try {
        lookup.RemoveLookupTagClick(tagClickCallback);
        methodResults.push({ Test: "13", Property: "RemoveLookupTagClick", Value: "Removed", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "13", Property: "RemoveLookupTagClick", Value: e.message, Status: "✗" });
    }

    // Test 14: AddCustomView
    try {
        lookup.AddCustomView(
            "00000000-0000-0000-0000-000000000001",
            "contact",
            "Active Contacts (Custom View)",
            "<fetch><entity name='contact'><attribute name='fullname'/></entity></fetch>",
            "<grid name='resultset'><row name='result' id='contactid'><cell name='fullname' width='200'/></row></grid>",
            false
        );
        methodResults.push({ Test: "14", Property: "AddCustomView", Value: "Added", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "14", Property: "AddCustomView", Value: e.message, Status: "✗" });
    }

    // Test 15: SetNotification / ClearNotification
    try {
        lookup.SetNotification("Test notification", "TEST_1");
        setTimeout(() => lookup.ClearNotification("TEST_1"), 3000);
        methodResults.push({ Test: "15", Property: "SetNotification", Value: "Set (clears in 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "15", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    // Test 16: Focus
    try {
        setTimeout(() => lookup.Focus(), 4000);
        methodResults.push({ Test: "16", Property: "Focus", Value: "Scheduled (4s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "16", Property: "Focus", Value: e.message, Status: "✗" });
    }

    // Test 17: DefaultView (setter) - test set and restore
    try {
        const testViewId = "{00000000-0000-0000-0000-000000000002}";
        lookup.DefaultView = testViewId;
        const newView = lookup.DefaultView;
        lookup.DefaultView = originalDefaultView; // restore
        methodResults.push({ Test: "17", Property: "DefaultView (set)", Value: `Set→Restored`, Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "17", Property: "DefaultView (set)", Value: e.message, Status: "✗" });
    }

    // Test 18: EntityTypes (setter) - test set and restore  
    try {
        const originalTypes = lookup.EntityTypes;
        lookup.EntityTypes = ["contact", "account"];
        const newTypes = lookup.EntityTypes;
        lookup.EntityTypes = originalTypes; // restore
        methodResults.push({ Test: "18", Property: "EntityTypes (set)", Value: `Set→Restored`, Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "18", Property: "EntityTypes (set)", Value: e.message, Status: "✗" });
    }

    // === OUTPUT: Single grouped log ===
    console.group(`🔍 LOOKUP TEST: PrimaryContactId [${startTime}]`);

    console.log("%c📋 Properties (16 items)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ Methods (9 items)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    // Summary
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}
