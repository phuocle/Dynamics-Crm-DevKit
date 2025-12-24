import { FormAccount_DevKitV4 } from './generator/Account.form';
import { AccountApi } from './generator/Account.webapi';
import { OptionSet } from './generator/OptionSet';

interface TestResult {
    Test: string;
    Property: string;
    Value: any;
    Status: string;
}

/**
 * TEST 6: WebApi - Early-bound style coding
 * Tests RetrieveRecord and RetrieveRecords with various overloads
 * 
 * Convention:
 * - R-Index: ReadOnly properties / Promise-based tests (R1, R2, R3...)
 * - S-Index: Setters & Methods / Additional tests (S1, S2, S3...)
 */
export async function TestWebApi(form: FormAccount_DevKitV4.Form): Promise<void> {
    const results: TestResult[] = [];
    const methodResults: TestResult[] = [];
    const startTime = new Date().toLocaleTimeString();

    // =====================================================
    // WEBAPI OBJECT TESTS (R-Index)
    // =====================================================

    // R1: Create empty Account object via AccountApi factory
    try {
        const newAccount = new AccountApi();
        newAccount.Name = 'Test Account';
        newAccount.Telephone1 = '123-456-7890';
        newAccount.IndustryCode = OptionSet.Account.IndustryCode.Consulting;
        results.push({
            Test: "R1",
            Property: "AccountApi (create)",
            Value: `Name="${newAccount.Name}", Entity ready`,
            Status: newAccount.Entity ? "✓" : "✗"
        });
    } catch (e: any) {
        results.push({ Test: "R1", Property: "AccountApi (create)", Value: e.message, Status: "✗" });
    }

    // R2: Test Entity object structure
    try {
        const account = new AccountApi();
        account.Name = 'Entity Test';
        const entity = account.Entity;
        results.push({
            Test: "R2",
            Property: "Entity object",
            Value: entity ? `Keys: ${Object.keys(entity).join(', ')}` : "null",
            Status: entity && typeof entity === 'object' ? "✓" : "✗"
        });
    } catch (e: any) {
        results.push({ Test: "R2", Property: "Entity object", Value: e.message, Status: "✗" });
    }

    // R3: Test EntityName property
    try {
        const account = new AccountApi();
        results.push({
            Test: "R3",
            Property: "EntityName",
            Value: account.EntityName,
            Status: account.EntityName === 'account' ? "✓" : "✗"
        });
    } catch (e: any) {
        results.push({ Test: "R3", Property: "EntityName", Value: e.message, Status: "✗" });
    }

    // R4: Test EntityCollectionName property
    try {
        const account = new AccountApi();
        results.push({
            Test: "R4",
            Property: "EntityCollectionName",
            Value: account.EntityCollectionName,
            Status: account.EntityCollectionName === 'accounts' ? "✓" : "✗"
        });
    } catch (e: any) {
        results.push({ Test: "R4", Property: "EntityCollectionName", Value: e.message, Status: "✗" });
    }

    // R5: Test FormattedValue property exists
    try {
        const account = new AccountApi();
        results.push({
            Test: "R5",
            Property: "FormattedValue",
            Value: account.FormattedValue ? "object exists" : "null",
            Status: account.FormattedValue ? "✓" : "✗"
        });
    } catch (e: any) {
        results.push({ Test: "R5", Property: "FormattedValue", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // WEBAPI RETRIEVE RECORD TESTS (S-Index)
    // =====================================================

    // S1: RetrieveRecord - Promise-based with options
    try {
        const record = await form.WebApi.RetrieveRecord(
            AccountApi,
            form.EntityName,
            form.EntityId,
            "?$select=name,telephone1,industrycode"
        );
        methodResults.push({
            Test: "S1",
            Property: "RetrieveRecord (Promise+Options)",
            Value: record.Name ? `Name="${record.Name}"` : "Retrieved",
            Status: "✓"
        });
    } catch (e: any) {
        methodResults.push({ Test: "S1", Property: "RetrieveRecord (Promise+Options)", Value: e.message, Status: "✗" });
    }

    // S2: RetrieveRecord - Promise-based without options
    try {
        const record = await form.WebApi.RetrieveRecord(
            AccountApi,
            form.EntityName,
            form.EntityId
        );
        methodResults.push({
            Test: "S2",
            Property: "RetrieveRecord (Promise)",
            Value: record.AccountId ? "Retrieved with all fields" : "Retrieved",
            Status: "✓"
        });
    } catch (e: any) {
        methodResults.push({ Test: "S2", Property: "RetrieveRecord (Promise)", Value: e.message, Status: "✗" });
    }

    // S3: RetrieveRecord - Access FormattedValue
    try {
        const record = await form.WebApi.RetrieveRecord(
            AccountApi,
            form.EntityName,
            form.EntityId,
            "?$select=name,industrycode"
        );
        const formattedIndustry = record.FormattedValue?.IndustryCode;
        methodResults.push({
            Test: "S3",
            Property: "FormattedValue.IndustryCode",
            Value: formattedIndustry ? `"${formattedIndustry}"` : "(empty)",
            Status: "✓"
        });
    } catch (e: any) {
        methodResults.push({ Test: "S3", Property: "FormattedValue.IndustryCode", Value: e.message, Status: "✗" });
    }

    // S4: RetrieveRecords - FetchXML Promise-based
    try {
        const fetchXml = "<fetch top='3'><entity name='account'><attribute name='name'/><attribute name='accountnumber'/></entity></fetch>";
        const records = await form.WebApi.RetrieveRecords(AccountApi, fetchXml);
        methodResults.push({
            Test: "S4",
            Property: "RetrieveRecords (FetchXML)",
            Value: `Count: ${records.length}`,
            Status: records.length >= 0 ? "✓" : "✗"
        });
    } catch (e: any) {
        methodResults.push({ Test: "S4", Property: "RetrieveRecords (FetchXML)", Value: e.message, Status: "✗" });
    }

    // S5: RetrieveRecords - FetchXML with maxPageSize
    try {
        const fetchXml = "<fetch><entity name='account'><attribute name='name'/><attribute name='telephone1'/></entity></fetch>";
        const records = await form.WebApi.RetrieveRecords(AccountApi, fetchXml, 5);
        methodResults.push({
            Test: "S5",
            Property: "RetrieveRecords (FetchXML+PageSize)",
            Value: `Count: ${records.length} (max 5)`,
            Status: records.length >= 0 ? "✓" : "✗"
        });
    } catch (e: any) {
        methodResults.push({ Test: "S5", Property: "RetrieveRecords (FetchXML+PageSize)", Value: e.message, Status: "✗" });
    }

    // S6: RetrieveRecords - OData Promise-based
    try {
        const records = await form.WebApi.RetrieveRecords(
            AccountApi,
            'account',
            '?$select=name,accountnumber&$top=3'
        );
        methodResults.push({
            Test: "S6",
            Property: "RetrieveRecords (OData)",
            Value: `Count: ${records.length}`,
            Status: records.length >= 0 ? "✓" : "✗"
        });
    } catch (e: any) {
        methodResults.push({ Test: "S6", Property: "RetrieveRecords (OData)", Value: e.message, Status: "✗" });
    }

    // S7: RetrieveRecords - OData with maxPageSize
    try {
        const records = await form.WebApi.RetrieveRecords(
            AccountApi,
            'account',
            '?$select=name,telephone1',
            5
        );
        methodResults.push({
            Test: "S7",
            Property: "RetrieveRecords (OData+PageSize)",
            Value: `Count: ${records.length} (max 5)`,
            Status: records.length >= 0 ? "✓" : "✗"
        });
    } catch (e: any) {
        methodResults.push({ Test: "S7", Property: "RetrieveRecords (OData+PageSize)", Value: e.message, Status: "✗" });
    }

    // S8: Set property and verify Entity update
    try {
        const account = new AccountApi();
        account.Name = 'Update Test';
        account.Revenue = 1000000;
        account.NumberOfEmployees = 50;
        account.CreditOnHold = true;
        const entity = account.Entity;
        const hasName = entity && entity.name === 'Update Test';
        const hasRevenue = entity && entity.revenue === 1000000;
        methodResults.push({
            Test: "S8",
            Property: "Entity update on set",
            Value: `Name: ${hasName}, Revenue: ${hasRevenue}`,
            Status: hasName && hasRevenue ? "✓" : "⚠"
        });
    } catch (e: any) {
        methodResults.push({ Test: "S8", Property: "Entity update on set", Value: e.message, Status: "✗" });
    }

    // =====================================================
    // OUTPUT
    // =====================================================
    const allResults = [...results, ...methodResults];
    const passed = allResults.filter(r => r.Status === "✓").length;
    const warnings = allResults.filter(r => r.Status === "⚠").length;
    const failed = allResults.filter(r => r.Status === "✗").length;
    const total = allResults.length;

    console.groupCollapsed(`🌐 TEST 6: WebApi [${startTime}] - Early-bound style - ${passed}/${total}`);

    console.log("%c📋 AccountApi Factory Tests (R1-R5)", "font-weight: bold; font-size: 14px; color: #4CAF50;");
    console.table(results);

    console.log("%c⚡ WebApi Methods (S1-S8)", "font-weight: bold; font-size: 14px; color: #2196F3;");
    console.table(methodResults);

    console.log(`%c✅ Summary: ${passed}/${total} passed` +
        (warnings > 0 ? ` | ⚠ ${warnings} warnings` : '') +
        (failed > 0 ? ` | ✗ ${failed} failed` : ''),
        "font-weight: bold; color: #4CAF50; font-size: 14px;");

    console.groupEnd();
}
