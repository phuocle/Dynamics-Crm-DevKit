import { AccountForm } from './generator/Account.form';

/**
 * TEST: Lookup Control - PrimaryContactId Field
 * This test demonstrates all available methods and properties for Lookup controls
 */
export function TestLookup(form: AccountForm.Form): void {
    console.clear();
    console.log("╔════════════════════════════════════════════════════════════════╗");
    console.log("║        TESTING LOOKUP CONTROL: PrimaryContactId                ║");
    console.log("║        Started at: " + new Date().toLocaleTimeString().padEnd(41) + "║");
    console.log("╚════════════════════════════════════════════════════════════════╝");
    console.log("");

    const lookup = form.Body.PrimaryContactId;

    // Test 1: Get current lookup value
    try {
        console.log("⚡ Test 1: Get Lookup Value");
        const currentValue = lookup.Value;
        if (currentValue && currentValue.length > 0) {
            console.log("✓ Current Value Found:");
            currentValue.forEach((ref, index) => {
                console.log(`  [${index}] ID: ${ref.id}`);
                console.log(`      Name: ${ref.name}`);
                console.log(`      Type: ${ref.entityType}`);
            });
        } else {
            console.log("ℹ No value currently set (field is empty)");
        }
        console.log("");
    } catch (error: any) {
        console.error("✗ Test 1 Error:", error.message);
    }

    // Test 2: Check if it's a PartyList lookup
    try {
        console.log("⚡ Test 2: Check IsPartyList Property");
        const isPartyList = lookup.IsPartyList;
        console.log(`✓ IsPartyList: ${isPartyList}`);
        console.log(`  (PrimaryContactId should be 'false' - single lookup)`);
        console.log("");
    } catch (error: any) {
        console.error("✗ Test 2 Error:", error.message);
    }

    // Test 3: Get Entity Types allowed
    try {
        console.log("⚡ Test 3: Get Allowed Entity Types");
        const entityTypes = lookup.EntityTypes;
        console.log("✓ Allowed Entity Types:", entityTypes);
        console.log(`  (Should contain: 'contact')`);
        console.log("");
    } catch (error: any) {
        console.error("✗ Test 3 Error:", error.message);
    }

    // Test 4: Get Default View
    try {
        console.log("⚡ Test 4: Get Default View GUID");
        const defaultView = lookup.DefaultView;
        console.log(`✓ Default View: ${defaultView}`);
        console.log("");
    } catch (error: any) {
        console.error("✗ Test 4 Error:", error.message);
    }

    // Test 5: Get Control Visibility
    try {
        console.log("⚡ Test 5: Get Control Visibility");
        const isVisible = lookup.Visible;
        console.log(`✓ Visible: ${isVisible}`);
        console.log("");
    } catch (error: any) {
        console.error("✗ Test 5 Error:", error.message);
    }

    // Test 6: Get Control Disabled State
    try {
        console.log("⚡ Test 6: Get Control Disabled State");
        const isDisabled = lookup.Disabled;
        console.log(`✓ Disabled: ${isDisabled}`);
        console.log("");
    } catch (error: any) {
        console.error("✗ Test 6 Error:", error.message);
    }

    // Test 7: Get Control Type
    try {
        console.log("⚡ Test 7: Get Control Type");
        const controlType = lookup.ControlType;
        console.log(`✓ Control Type: ${controlType}`);
        console.log(`  (Should be: 'lookup')`);
        console.log("");
    } catch (error: any) {
        console.error("✗ Test 7 Error:", error.message);
    }

    // Test 8: Get Control and Attribute Names
    try {
        console.log("⚡ Test 8: Get Control and Attribute Names");
        const controlName = lookup.ControlName;
        const attributeName = lookup.AttributeName;
        console.log(`✓ Control Name: ${controlName}`);
        console.log(`✓ Attribute Name: ${attributeName}`);
        console.log(`  (Both should be: 'primarycontactid')`);
        console.log("");
    } catch (error: any) {
        console.error("✗ Test 8 Error:", error.message);
    }

    // Test 9: Get Attribute Properties
    try {
        console.log("⚡ Test 9: Get Attribute Properties");
        console.log(`✓ Attribute Name: ${lookup.AttributeName}`);
        console.log(`  Attribute Type: ${lookup.AttributeType}`);
        console.log(`  Required Level: ${lookup.RequiredLevel}`);
        console.log(`  Submit Mode: ${lookup.SubmitMode}`);
        console.log(`  Is Valid: ${lookup.IsValid}`);
        console.log(`  Is Dirty: ${lookup.IsDirty}`);
        console.log(`  Format: ${lookup.Format}`);

        const attribute = lookup.Attribute;
        if (attribute) {
            console.log(`  ℹ Attribute object available: ${typeof attribute}`);
        } else {
            console.log("  ⚠ Attribute object is null/undefined");
        }
        console.log("");
    } catch (error: any) {
        console.error("✗ Test 9 Error:", error.message);
    }

    // Test 10: Test AddPreSearch event
    try {
        console.log("⚡ Test 10: Add PreSearch Event Handler");
        lookup.AddPreSearch((executionContext: any) => {
            console.log("  ⚡ PreSearch event fired!");
            const filterXml = "<filter type='and'><condition attribute='statecode' operator='eq' value='0' /></filter>";
            lookup.AddCustomFilter(filterXml, "contact");
            console.log("  ✓ Custom filter added: Show only active contacts");
        });
        console.log("✓ PreSearch event handler registered");
        console.log("  (Will filter for active contacts when lookup is opened)");
        console.log("");
    } catch (error: any) {
        console.error("✗ Test 10 Error:", error.message);
    }

    // Test 11: Add custom view for the lookup
    try {
        console.log("⚡ Test 11: Add Custom View to Lookup");
        const customViewId = "00000000-0000-0000-0000-000000000001";
        const fetchXml = `
            <fetch>
                <entity name='contact'>
                    <attribute name='fullname' />
                    <attribute name='emailaddress1' />
                    <attribute name='telephone1' />
                    <order attribute='fullname' descending='false' />
                    <filter type='and'>
                        <condition attribute='statecode' operator='eq' value='0' />
                    </filter>
                </entity>
            </fetch>`;
        const layoutXml = `
            <grid name='resultset' jump='fullname' select='1' icon='1' preview='1'>
                <row name='result' id='contactid'>
                    <cell name='fullname' width='200' />
                    <cell name='emailaddress1' width='150' />
                    <cell name='telephone1' width='150' />
                </row>
            </grid>`;

        lookup.AddCustomView(
            customViewId,
            "contact",
            "Active Contacts (Custom View)",
            fetchXml,
            layoutXml,
            false
        );
        console.log("✓ Custom view added successfully");
        console.log("  View Name: 'Active Contacts (Custom View)'");
        console.log("  Shows: Full Name, Email, Phone");
        console.log("");
    } catch (error: any) {
        console.error("✗ Test 11 Error:", error.message);
    }

    // Test 12: Test notification methods
    try {
        console.log("⚡ Test 12: Test Notification Methods");
        lookup.SetNotification("This is a test error notification", "TEST_ERROR_1");
        console.log("✓ Error notification set");

        setTimeout(() => {
            lookup.ClearNotification("TEST_ERROR_1");
            console.log("  ↩ Notification cleared (after 3s)");
        }, 3000);
        console.log("");
    } catch (error: any) {
        console.error("✗ Test 12 Error:", error.message);
    }

    // Test 13: Test SetFocus
    try {
        console.log("⚡ Test 13: Test SetFocus Method");
        setTimeout(() => {
            lookup.Focus();
            console.log("✓ Focus set to PrimaryContactId lookup (after 4s)");
        }, 4000);
        console.log("ℹ Will set focus in 4 seconds...");
        console.log("");
    } catch (error: any) {
        console.error("✗ Test 13 Error:", error.message);
    }

    console.log("╔════════════════════════════════════════════════════════════════╗");
    console.log("║           LOOKUP CONTROL TESTS COMPLETED                       ║");
    console.log("╚════════════════════════════════════════════════════════════════╝");
}
