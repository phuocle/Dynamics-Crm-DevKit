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

        // Test 4: DefaultView
        results.push({
            Test: "4",
            Property: "DefaultView",
            Value: lookup.DefaultView,
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

    // Test 10-13: Methods (these have side effects, log separately)
    const methodResults: TestResult[] = [];

    try {
        lookup.AddPreSearch((ctx: any) => {
            const filterXml = "<filter type='and'><condition attribute='statecode' operator='eq' value='0' /></filter>";
            lookup.AddCustomFilter(filterXml, "contact");
        });
        methodResults.push({ Test: "10", Property: "AddPreSearch", Value: "Registered", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "10", Property: "AddPreSearch", Value: e.message, Status: "✗" });
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
        methodResults.push({ Test: "11", Property: "AddCustomView", Value: "Added", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "11", Property: "AddCustomView", Value: e.message, Status: "✗" });
    }

    try {
        lookup.SetNotification("Test notification", "TEST_1");
        setTimeout(() => lookup.ClearNotification("TEST_1"), 3000);
        methodResults.push({ Test: "12", Property: "SetNotification", Value: "Set (clears in 3s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "12", Property: "SetNotification", Value: e.message, Status: "✗" });
    }

    try {
        setTimeout(() => lookup.Focus(), 4000);
        methodResults.push({ Test: "13", Property: "Focus", Value: "Scheduled (4s)", Status: "✓" });
    } catch (e: any) {
        methodResults.push({ Test: "13", Property: "Focus", Value: e.message, Status: "✗" });
    }

    // === OUTPUT: Single grouped log ===
    console.group(`🔍 LOOKUP TEST: PrimaryContactId [${startTime}]`);

    console.log("%c📋 Properties", "font-weight: bold; font-size: 14px;");
    console.table(results);

    console.log("%c⚡ Methods", "font-weight: bold; font-size: 14px;");
    console.table(methodResults);

    // Summary
    const passed = [...results, ...methodResults].filter(r => r.Status === "✓").length;
    const total = results.length + methodResults.length;
    console.log(`%c✅ Summary: ${passed}/${total} passed`, "font-weight: bold; color: green; font-size: 14px;");

    console.groupEnd();
}
