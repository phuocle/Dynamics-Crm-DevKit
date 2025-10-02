//@ts-check
///<reference path="Account.d.ts" />
"use strict";
var formAccount = (function () {
	"use strict";
	/** @type {DevKitV4.FormAccount} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKitV4.FormAccount(executionContext);
		registerEvents();
		form.UiAddLoaded(UiAddLoaded);
	}
	function registerEvents() {
		if (form.ExecutionContext.IsInitialLoad()) {
		}
	}
	//BEGIN ON LOAD ========================================================
	/** @param {any} executionContext */
	async function UiAddLoaded(executionContext) {
		//await testRetrieveRecord();
		//await testRetrieveRecords();
		//await testLookup();
		//await testString();
		//await testInteger();
		//await testMoney();
		//await testOptionSet();
		//await testMultiOptionSet();
		//await testDecimal();
		//await testFloat();
		await testDateTime();

		/**************************************************************************
		 * TEST: RetrieveRecord Function - All Overloads
		 **************************************************************************/
		async function testRetrieveRecord() {
			console.log("========== Testing RetrieveRecord ==========");

			try {
				// Test 1: Promise-based with options parameter
				console.log("Test 1: RetrieveRecord with options (Promise-based)");
				var record1 = await form.WebApi.RetrieveRecord(
					DevKitV4.AccountApi,
					form.EntityName,
					form.EntityId,
					"?$select=name,accountnumber,telephone1"
				);
				console.log("✓ Test 1 Result:", record1);
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 1 Error:", error.message);
			}

			try {
				// Test 2: Promise-based without options (defaults to ?$select=*)
				console.log("Test 2: RetrieveRecord without options (Promise-based)");
				var record2 = await form.WebApi.RetrieveRecord(
					DevKitV4.AccountApi,
					form.EntityName,
					form.EntityId
				);
				console.log("✓ Test 2 Result:", record2);
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 2 Error:", error.message);
			}

			try {
				// Test 3: Callback-based with options parameter
				console.log("Test 3: RetrieveRecord with options (Callback-based)");
				form.WebApi.RetrieveRecord(
					DevKitV4.AccountApi,
					form.EntityName,
					form.EntityId,
					"?$select=name,revenue",
					function(record3) {
						console.log("✓ Test 3 Success Callback Result:", record3);
					},
					function(error) {
						console.error("✗ Test 3 Error Callback:", error.message);
					}
				);
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 3 Error:", error.message);
			}

			try {
				// Test 4: Callback-based without options (defaults to ?$select=*)
				console.log("Test 4: RetrieveRecord without options (Callback-based)");
				form.WebApi.RetrieveRecord(
					DevKitV4.AccountApi,
					form.EntityName,
					form.EntityId,
					function(record4) {
						console.log("✓ Test 4 Success Callback Result:", record4);
					},
					function(error) {
						console.error("✗ Test 4 Error Callback:", error.message);
					}
				);
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 4 Error:", error.message);
			}

			console.log("========== RetrieveRecord Tests Completed ==========\n");
		}

		/**************************************************************************
		 * TEST: RetrieveRecords Function - All Overloads
		 **************************************************************************/
		async function testRetrieveRecords() {
			console.log("========== Testing RetrieveRecords ==========");

			try {
				// Test 1: FetchXML Promise-based (entity name auto-extracted)
				console.log("Test 1: RetrieveRecords with FetchXML (Promise-based)");
				var fetchXml1 = "<fetch top='3'><entity name='account'><attribute name='name'/><attribute name='accountnumber'/></entity></fetch>";
				var records1 = await form.WebApi.RetrieveRecords(DevKitV4.AccountApi, fetchXml1);
				console.log("✓ Test 1 Result Count:", records1.length, "Records:", records1);
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 1 Error:", error.message);
			}

			try {
				// Test 2: FetchXML Promise-based with maxPageSize (entity name auto-extracted)
				console.log("Test 2: RetrieveRecords with FetchXML and maxPageSize (Promise-based)");
				var fetchXml2 = "<fetch><entity name='account'><attribute name='name'/><attribute name='telephone1'/></entity></fetch>";
				var records2 = await form.WebApi.RetrieveRecords(DevKitV4.AccountApi, fetchXml2, 5);
				console.log("✓ Test 2 Result Count:", records2.length, "Records:", records2);
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 2 Error:", error.message);
			}

			try {
				// Test 3: FetchXML Callback-based (entity name auto-extracted)
				console.log("Test 3: RetrieveRecords with FetchXML (Callback-based)");
				var fetchXml3 = "<fetch top='2'><entity name='account'><attribute name='name'/><attribute name='revenue'/></entity></fetch>";
				form.WebApi.RetrieveRecords(
					DevKitV4.AccountApi,
					fetchXml3,
					function(records3) {
						console.log("✓ Test 3 Success Callback Count:", records3.length, "Records:", records3);
					},
					function(error) {
						console.error("✗ Test 3 Error Callback:", error.message);
					}
				);
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 3 Error:", error.message);
			}

			try {
				// Test 4: OData Promise-based (entity name must be provided)
				console.log("Test 4: RetrieveRecords with OData (Promise-based)");
				var records4 = await form.WebApi.RetrieveRecords(
					DevKitV4.AccountApi,
					'account',
					'?$select=name,accountnumber&$top=3'
				);
				console.log("✓ Test 4 Result Count:", records4.length, "Records:", records4);
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 4 Error:", error.message);
			}

			try {
				// Test 5: OData Promise-based with maxPageSize (entity name must be provided)
				console.log("Test 5: RetrieveRecords with OData and maxPageSize (Promise-based)");
				var records5 = await form.WebApi.RetrieveRecords(
					DevKitV4.AccountApi,
					'account',
					'?$select=name,telephone1',
					5
				);
				console.log("✓ Test 5 Result Count:", records5.length, "Records:", records5);
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 5 Error:", error.message);
			}

			try {
				// Test 6: OData Callback-based (entity name must be provided)
				console.log("Test 6: RetrieveRecords with OData (Callback-based)");
				form.WebApi.RetrieveRecords(
					DevKitV4.AccountApi,
					'account',
					'?$select=name,revenue&$top=2',
					function(records6) {
						console.log("✓ Test 6 Success Callback Count:", records6.length, "Records:", records6);
					},
					function(error) {
						console.error("✗ Test 6 Error Callback:", error.message);
					}
				);
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 6 Error:", error.message);
			}

			try {
				// Test 7: OData Callback-based with maxPageSize (entity name must be provided)
				console.log("Test 7: RetrieveRecords with OData, maxPageSize and Callback");
				form.WebApi.RetrieveRecords(
					DevKitV4.AccountApi,
					'account',
					'?$select=name,accountnumber',
					3,
					function(records7) {
						console.log("✓ Test 7 Success Callback Count:", records7.length, "Records:", records7);
					},
					function(error) {
						console.error("✗ Test 7 Error Callback:", error.message);
					}
				);
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 7 Error:", error.message);
			}

			try {
				// Test 8: OData without options (should get all records - be careful with this!)
				console.log("Test 8: RetrieveRecords with OData without filter");
				var records8 = await form.WebApi.RetrieveRecords(
					DevKitV4.AccountApi,
					'account'
				);
				console.log("✓ Test 8 Result Count:", records8.length, "Records:", records8);
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 8 Error:", error.message);
			}

			console.log("========== RetrieveRecords Tests Completed ==========\n");
		}

		/**************************************************************************
		 * TEST: Lookup Control - PrimaryContactId Field
		 * This test demonstrates all available methods and properties for Lookup controls
		 **************************************************************************/
		async function testLookup() {
			console.log("╔════════════════════════════════════════════════════════════════╗");
			console.log("║        TESTING LOOKUP CONTROL: PrimaryContactId                ║");
			console.log("╚════════════════════════════════════════════════════════════════╝");

			const lookup = form.Body.PrimaryContactId;

			try {
				// Test 1: Get current lookup value
				console.log("📋 Test 1: Get Lookup Value");
				console.log("─────────────────────────────────────────────────────────");
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
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 1 Error:", error.message);
			}

			try {
				// Test 2: Check if it's a PartyList lookup
				console.log("📋 Test 2: Check IsPartyList Property");
				console.log("─────────────────────────────────────────────────────────");
				const isPartyList = lookup.IsPartyList;
				console.log(`✓ IsPartyList: ${isPartyList}`);
				console.log(`  (PrimaryContactId should be 'false' - single lookup)`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 2 Error:", error.message);
			}

			try {
				// Test 3: Get Entity Types allowed
				console.log("📋 Test 3: Get Allowed Entity Types");
				console.log("─────────────────────────────────────────────────────────");
				const entityTypes = lookup.EntityTypes;
				console.log("✓ Allowed Entity Types:", entityTypes);
				console.log(`  (Should contain: 'contact')`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 3 Error:", error.message);
			}

			try {
				// Test 4: Get Default View
				console.log("📋 Test 4: Get Default View GUID");
				console.log("─────────────────────────────────────────────────────────");
				const defaultView = lookup.DefaultView;
				console.log(`✓ Default View: ${defaultView}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 4 Error:", error.message);
			}

			try {
				// Test 5: Get Control Visibility
				console.log("📋 Test 5: Get Control Visibility");
				console.log("─────────────────────────────────────────────────────────");
				const isVisible = lookup.Visible;
				console.log(`✓ Visible: ${isVisible}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 5 Error:", error.message);
			}

			try {
				// Test 6: Get Control Disabled State
				console.log("📋 Test 6: Get Control Disabled State");
				console.log("─────────────────────────────────────────────────────────");
				const isDisabled = lookup.Disabled;
				console.log(`✓ Disabled: ${isDisabled}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 6 Error:", error.message);
			}

			try {
				// Test 7: Get Control Type
				console.log("📋 Test 7: Get Control Type");
				console.log("─────────────────────────────────────────────────────────");
				const controlType = lookup.ControlType;
				console.log(`✓ Control Type: ${controlType}`);
				console.log(`  (Should be: 'lookup')`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 7 Error:", error.message);
			}

			try {
				// Test 8: Get Control and Attribute Names
				console.log("📋 Test 8: Get Control and Attribute Names");
				console.log("─────────────────────────────────────────────────────────");
				const controlName = lookup.ControlName;
				const attributeName = lookup.AttributeName;
				console.log(`✓ Control Name: ${controlName}`);
				console.log(`✓ Attribute Name: ${attributeName}`);
				console.log(`  (Both should be: 'primarycontactid')`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 8 Error:", error.message);
			}

			try {
				// Test 9: Get Attribute Properties
				console.log("📋 Test 9: Get Attribute Properties");
				console.log("─────────────────────────────────────────────────────────");
				// Access properties directly from the control (IControl interface)
				console.log(`✓ Attribute Name: ${lookup.AttributeName}`);
				console.log(`  Attribute Type: ${lookup.AttributeType}`);
				console.log(`  Required Level: ${lookup.RequiredLevel}`);
				console.log(`  Submit Mode: ${lookup.SubmitMode}`);
				console.log(`  Is Valid: ${lookup.IsValid}`);
				console.log(`  Is Dirty: ${lookup.IsDirty}`);
				console.log(`  Format: ${lookup.Format}`);

				// Also show that Attribute object exists (for advanced scenarios)
				const attribute = lookup.Attribute;
				if (attribute) {
					console.log(`  ℹ Attribute object available: ${typeof attribute}`);
					// The Attribute object provides methods like getValue(), setValue(), etc.
					// It's the underlying Xrm.Attributes.Attribute object
				} else {
					console.log("  ⚠ Attribute object is null/undefined");
				}
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 9 Error:", error.message);
			}

			try {
				// Test 10: Test AddPreSearch event (add filter for active contacts only)
				console.log("📋 Test 10: Add PreSearch Event Handler");
				console.log("─────────────────────────────────────────────────────────");
				lookup.AddPreSearch(function(executionContext) {
					console.log("  ⚡ PreSearch event fired!");
					// Add filter to show only active contacts
					const filterXml = "<filter type='and'><condition attribute='statecode' operator='eq' value='0' /></filter>";
					lookup.AddCustomFilter(filterXml, "contact");
					console.log("  ✓ Custom filter added: Show only active contacts");
				});
				console.log("✓ PreSearch event handler registered");
				console.log("  (Will filter for active contacts when lookup is opened)");
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 10 Error:", error.message);
			}

			try {
				// Test 11: Add custom view for the lookup
				console.log("📋 Test 11: Add Custom View to Lookup");
				console.log("─────────────────────────────────────────────────────────");
				const customViewId = "00000000-0000-0000-0000-000000000001"; // Dummy GUID
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
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 11 Error:", error.message);
			}

			try {
				// Test 12: Test SetValue (programmatically set a lookup value)
				console.log("📋 Test 12: Set Lookup Value (if contact exists)");
				console.log("─────────────────────────────────────────────────────────");

				// First, try to get a contact record to set
				try {
					/** @type {function(any): any} */
					const ContactApi = function(/** @type {any} */ data) { return data; };
					const contacts = await form.WebApi.RetrieveRecords(
						ContactApi,
						'contact',
						'?$select=contactid,fullname&$top=1'
					);

					if (contacts && contacts.length > 0) {
						const contact = contacts[0];
						const lookupValue = [{
							id: contact.contactid,
							name: contact.fullname,
							entityType: 'contact'
						}];

						// Store original value to restore later
						const originalValue = lookup.Value;

						// Set new value
						lookup.Value = lookupValue;
						console.log("✓ Lookup value set successfully");
						console.log(`  Contact ID: ${contact.contactid}`);
						console.log(`  Contact Name: ${contact.fullname}`);

						// Restore original value after 2 seconds
						setTimeout(function() {
							lookup.Value = originalValue;
							console.log("  ↩ Original value restored");
						}, 2000);
					} else {
						console.log("ℹ No contacts found to test SetValue");
					}
				} catch (/** @type {any} */ apiError) {
					console.log("ℹ Could not retrieve contacts:", apiError.message);
				}
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 12 Error:", error.message);
			}

			try {
				// Test 13: Test Clear Value
				console.log("📋 Test 13: Clear Lookup Value (and restore)");
				console.log("─────────────────────────────────────────────────────────");
				const originalValue = lookup.Value;

				if (originalValue && originalValue.length > 0) {
					// Clear the value
					lookup.Value = [];
					console.log("✓ Lookup value cleared");

					// Restore after 2 seconds
					setTimeout(function() {
						lookup.Value = originalValue;
						console.log("  ↩ Original value restored");
					}, 2000);
				} else {
					console.log("ℹ Field is already empty, cannot demonstrate clear");
				}
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 13 Error:", error.message);
			}

			try {
				// Test 14: Test notification methods
				console.log("📋 Test 14: Test Notification Methods");
				console.log("─────────────────────────────────────────────────────────");

				// Add error notification
				lookup.SetNotification("This is a test error notification", "TEST_ERROR_1");
				console.log("✓ Error notification set");

				// Clear notification after 3 seconds
				setTimeout(function() {
					lookup.ClearNotification("TEST_ERROR_1");
					console.log("  ↩ Notification cleared");
				}, 3000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 14 Error:", error.message);
			}

			try {
				// Test 15: Test SetFocus
				console.log("📋 Test 15: Test SetFocus Method");
				console.log("─────────────────────────────────────────────────────────");
				setTimeout(function() {
					lookup.Focus();
					console.log("✓ Focus set to PrimaryContactId lookup");
				}, 4000);
				console.log("ℹ Will set focus in 4 seconds...");
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 15 Error:", error.message);
			}

			console.log("╔════════════════════════════════════════════════════════════════╗");
			console.log("║           LOOKUP CONTROL TESTS COMPLETED                       ║");
			console.log("╚════════════════════════════════════════════════════════════════╝");
		}

		/**************************************************************************
		 * TEST: String Control - Name Field
		 * This test demonstrates all available methods and properties for String controls
		 **************************************************************************/
		async function testString() {
			console.log("╔════════════════════════════════════════════════════════════════╗");
			console.log("║          TESTING STRING CONTROL: Name Field                    ║");
			console.log("╚════════════════════════════════════════════════════════════════╝");

			const stringControl = form.Body.Name;

			try {
				// Test 1: Get current string value
				console.log("📋 Test 1: Get String Value");
				console.log("─────────────────────────────────────────────────────────");
				const currentValue = stringControl.Value;
				console.log(`✓ Current Value: "${currentValue}"`);
				console.log(`  Type: ${typeof currentValue}`);
				console.log(`  Length: ${currentValue ? currentValue.length : 0} characters`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 1 Error:", error.message);
			}

			try {
				// Test 2: Get Control and Attribute Names
				console.log("📋 Test 2: Get Control and Attribute Names");
				console.log("─────────────────────────────────────────────────────────");
				console.log(`✓ Control Name: ${stringControl.ControlName}`);
				console.log(`✓ Attribute Name: ${stringControl.AttributeName}`);
				console.log(`  (Both should be: 'name')`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 2 Error:", error.message);
			}

			try {
				// Test 3: Get Attribute Properties
				console.log("📋 Test 3: Get Attribute Properties");
				console.log("─────────────────────────────────────────────────────────");
				console.log(`✓ Attribute Name: ${stringControl.AttributeName}`);
				console.log(`  Attribute Type: ${stringControl.AttributeType}`);
				console.log(`  Control Type: ${stringControl.ControlType}`);
				console.log(`  Required Level: ${stringControl.RequiredLevel}`);
				console.log(`  Submit Mode: ${stringControl.SubmitMode}`);
				console.log(`  Is Valid: ${stringControl.IsValid}`);
				console.log(`  Is Dirty: ${stringControl.IsDirty}`);
				console.log(`  Format: ${stringControl.Format}`);
				console.log(`  Max Length: ${stringControl.MaxLength}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 3 Error:", error.message);
			}

			try {
				// Test 4: Get Control Visibility
				console.log("📋 Test 4: Get Control Visibility");
				console.log("─────────────────────────────────────────────────────────");
				const isVisible = stringControl.Visible;
				console.log(`✓ Visible: ${isVisible}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 4 Error:", error.message);
			}

			try {
				// Test 5: Get Control Disabled State
				console.log("📋 Test 5: Get Control Disabled State");
				console.log("─────────────────────────────────────────────────────────");
				const isDisabled = stringControl.Disabled;
				console.log(`✓ Disabled: ${isDisabled}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 5 Error:", error.message);
			}

			try {
				// Test 6: Get Control Label
				console.log("📋 Test 6: Get Control Label");
				console.log("─────────────────────────────────────────────────────────");
				const label = stringControl.Label;
				console.log(`✓ Label: "${label}"`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 6 Error:", error.message);
			}

			try {
				// Test 7: Set String Value (and restore)
				console.log("📋 Test 7: Set String Value (and restore)");
				console.log("─────────────────────────────────────────────────────────");
				const originalValue = stringControl.Value;
				console.log(`  Original Value: "${originalValue}"`);

				// Set new value
				const testValue = `${originalValue} (MODIFIED)`;
				stringControl.Value = testValue;
				console.log(`✓ New Value Set: "${testValue}"`);

				// Restore original value after 2 seconds
				setTimeout(function() {
					stringControl.Value = originalValue;
					console.log(`  ↩ Original value restored: "${originalValue}"`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 7 Error:", error.message);
			}

			try {
				// Test 8: Test Notification Methods
				console.log("📋 Test 8: Test Notification Methods");
				console.log("─────────────────────────────────────────────────────────");

				// Add error notification
				stringControl.SetNotification("This is a test error notification for Name field", "TEST_STRING_ERROR_1");
				console.log("✓ Error notification set");

				// Clear notification after 3 seconds
				setTimeout(function() {
					stringControl.ClearNotification("TEST_STRING_ERROR_1");
					console.log("  ↩ Notification cleared");
				}, 3000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 8 Error:", error.message);
			}

			try {
				// Test 9: Test SetFocus Method
				console.log("📋 Test 9: Test SetFocus Method");
				console.log("─────────────────────────────────────────────────────────");
				setTimeout(function() {
					stringControl.Focus();
					console.log("✓ Focus set to Name field");
				}, 4000);
				console.log("ℹ Will set focus in 4 seconds...");
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 9 Error:", error.message);
			}

			try {
				// Test 10: Test Visibility Toggle (and restore)
				console.log("📋 Test 10: Test Visibility Toggle");
				console.log("─────────────────────────────────────────────────────────");
				const originalVisibility = stringControl.Visible;
				console.log(`  Original Visibility: ${originalVisibility}`);

				// Hide the control
				stringControl.Visible = false;
				console.log("✓ Control hidden");

				// Restore visibility after 2 seconds
				setTimeout(function() {
					stringControl.Visible = originalVisibility;
					console.log(`  ↩ Visibility restored: ${originalVisibility}`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 10 Error:", error.message);
			}

			try {
				// Test 11: Test Disabled Toggle (and restore)
				console.log("📋 Test 11: Test Disabled Toggle");
				console.log("─────────────────────────────────────────────────────────");
				const originalDisabled = stringControl.Disabled;
				console.log(`  Original Disabled State: ${originalDisabled}`);

				// Disable the control
				stringControl.Disabled = true;
				console.log("✓ Control disabled");

				// Restore disabled state after 2 seconds
				setTimeout(function() {
					stringControl.Disabled = originalDisabled;
					console.log(`  ↩ Disabled state restored: ${originalDisabled}`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 11 Error:", error.message);
			}

			try {
				// Test 12: Test Label Change (and restore)
				console.log("📋 Test 12: Test Label Change");
				console.log("─────────────────────────────────────────────────────────");
				const originalLabel = stringControl.Label;
				console.log(`  Original Label: "${originalLabel}"`);

				// Change label
				stringControl.Label = `${originalLabel} (TEST)`;
				console.log(`✓ Label changed to: "${stringControl.Label}"`);

				// Restore label after 2 seconds
				setTimeout(function() {
					stringControl.Label = originalLabel;
					console.log(`  ↩ Label restored: "${originalLabel}"`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 12 Error:", error.message);
			}

			console.log("╔════════════════════════════════════════════════════════════════╗");
			console.log("║           STRING CONTROL TESTS COMPLETED                       ║");
			console.log("╚════════════════════════════════════════════════════════════════╝");
		}

		/**************************************************************************
		 * TEST: Integer Control - NumberOfEmployees Field
		 * This test demonstrates all available methods and properties for Integer controls
		 **************************************************************************/
		async function testInteger() {
			console.log("╔════════════════════════════════════════════════════════════════╗");
			console.log("║      TESTING INTEGER CONTROL: NumberOfEmployees                ║");
			console.log("║      (Located in Header section)                               ║");
			console.log("╚════════════════════════════════════════════════════════════════╝");

			const intControl = form.Header.NumberOfEmployees;

			try {
				// Test 1: Get current integer value
				console.log("📋 Test 1: Get Integer Value");
				console.log("─────────────────────────────────────────────────────────");
				const currentValue = intControl.Value;
				console.log(`✓ Current Value: ${currentValue}`);
				console.log(`  Type: ${typeof currentValue}`);
				console.log(`  Is Number: ${typeof currentValue === 'number'}`);
				console.log(`  Is Integer: ${Number.isInteger(currentValue)}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 1 Error:", error.message);
			}

			try {
				// Test 2: Get Control and Attribute Names
				console.log("📋 Test 2: Get Control and Attribute Names");
				console.log("─────────────────────────────────────────────────────────");
				console.log(`✓ Control Name: ${intControl.ControlName}`);
				console.log(`✓ Attribute Name: ${intControl.AttributeName}`);
				console.log(`  (Both should be: 'numberofemployees')`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 2 Error:", error.message);
			}

			try {
				// Test 3: Get Attribute Properties
				console.log("📋 Test 3: Get Attribute Properties");
				console.log("─────────────────────────────────────────────────────────");
				console.log(`✓ Attribute Name: ${intControl.AttributeName}`);
				console.log(`  Attribute Type: ${intControl.AttributeType}`);
				console.log(`  Control Type: ${intControl.ControlType}`);
				console.log(`  Required Level: ${intControl.RequiredLevel}`);
				console.log(`  Submit Mode: ${intControl.SubmitMode}`);
				console.log(`  Is Valid: ${intControl.IsValid}`);
				console.log(`  Is Dirty: ${intControl.IsDirty}`);
				console.log(`  Format: ${intControl.Format}`);
				console.log(`  Min Value: ${intControl.Min}`);
				console.log(`  Max Value: ${intControl.Max}`);
				console.log(`  Precision: ${intControl.Precision}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 3 Error:", error.message);
			}

			try {
				// Test 4: Get Control Visibility
				console.log("📋 Test 4: Get Control Visibility");
				console.log("─────────────────────────────────────────────────────────");
				const isVisible = intControl.Visible;
				console.log(`✓ Visible: ${isVisible}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 4 Error:", error.message);
			}

			try {
				// Test 5: Get Control Disabled State
				console.log("📋 Test 5: Get Control Disabled State");
				console.log("─────────────────────────────────────────────────────────");
				const isDisabled = intControl.Disabled;
				console.log(`✓ Disabled: ${isDisabled}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 5 Error:", error.message);
			}

			try {
				// Test 6: Get Control Label
				console.log("📋 Test 6: Get Control Label");
				console.log("─────────────────────────────────────────────────────────");
				const label = intControl.Label;
				console.log(`✓ Label: "${label}"`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 6 Error:", error.message);
			}

			try {
				// Test 7: Set Integer Value (and restore)
				console.log("📋 Test 7: Set Integer Value (and restore)");
				console.log("─────────────────────────────────────────────────────────");
				const originalValue = intControl.Value;
				console.log(`  Original Value: ${originalValue}`);

				// Set new value (add 100 to current value, or set to 100 if null)
				const testValue = (originalValue || 0) + 100;
				intControl.Value = testValue;
				console.log(`✓ New Value Set: ${testValue}`);

				// Restore original value after 2 seconds
				setTimeout(function() {
					intControl.Value = originalValue;
					console.log(`  ↩ Original value restored: ${originalValue}`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 7 Error:", error.message);
			}

			try {
				// Test 8: Test Min/Max Validation
				console.log("📋 Test 8: Test Min/Max Validation");
				console.log("─────────────────────────────────────────────────────────");
				const minValue = intControl.Min;
				const maxValue = intControl.Max;
				console.log(`✓ Min Value: ${minValue !== null && minValue !== undefined ? minValue : 'No limit'}`);
				console.log(`✓ Max Value: ${maxValue !== null && maxValue !== undefined ? maxValue : 'No limit'}`);

				if (minValue !== null && minValue !== undefined) {
					console.log(`  ℹ Values below ${minValue} will be rejected`);
				}
				if (maxValue !== null && maxValue !== undefined) {
					console.log(`  ℹ Values above ${maxValue} will be rejected`);
				}
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 8 Error:", error.message);
			}

			try {
				// Test 9: Test Decimal Value Handling
				console.log("📋 Test 9: Test Decimal Value Handling");
				console.log("─────────────────────────────────────────────────────────");
				const originalValue = intControl.Value;

				// Try to set a decimal value
				console.log("  ℹ Attempting to set decimal value: 123.45");
				intControl.Value = 123.45;

				// Check what value was actually set
				const actualValue = intControl.Value;
				console.log(`✓ Actual Value Set: ${actualValue}`);
				console.log(`  Is Integer: ${Number.isInteger(actualValue)}`);
				console.log(`  ℹ Dynamics 365 may round or truncate decimal values`);

				// Restore original value immediately
				setTimeout(function() {
					intControl.Value = originalValue;
					console.log(`  ↩ Original value restored: ${originalValue}`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 9 Error:", error.message);
			}

			try {
				// Test 10: Test Notification Methods
				console.log("📋 Test 10: Test Notification Methods");
				console.log("─────────────────────────────────────────────────────────");

				// Add error notification
				intControl.SetNotification("This is a test error notification for NumberOfEmployees", "TEST_INT_ERROR_1");
				console.log("✓ Error notification set");

				// Clear notification after 3 seconds
				setTimeout(function() {
					intControl.ClearNotification("TEST_INT_ERROR_1");
					console.log("  ↩ Notification cleared");
				}, 3000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 10 Error:", error.message);
			}

			try {
				// Test 11: Test SetFocus Method
				console.log("📋 Test 11: Test SetFocus Method");
				console.log("─────────────────────────────────────────────────────────");
				setTimeout(function() {
					intControl.Focus();
					console.log("✓ Focus set to NumberOfEmployees field");
				}, 4000);
				console.log("ℹ Will set focus in 4 seconds...");
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 11 Error:", error.message);
			}

			try {
				// Test 12: Test Visibility Toggle (and restore)
				console.log("📋 Test 12: Test Visibility Toggle");
				console.log("─────────────────────────────────────────────────────────");
				const originalVisibility = intControl.Visible;
				console.log(`  Original Visibility: ${originalVisibility}`);

				// Hide the control
				intControl.Visible = false;
				console.log("✓ Control hidden");

				// Restore visibility after 2 seconds
				setTimeout(function() {
					intControl.Visible = originalVisibility;
					console.log(`  ↩ Visibility restored: ${originalVisibility}`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 12 Error:", error.message);
			}

			try {
				// Test 13: Test Disabled Toggle (and restore)
				console.log("📋 Test 13: Test Disabled Toggle");
				console.log("─────────────────────────────────────────────────────────");
				const originalDisabled = intControl.Disabled;
				console.log(`  Original Disabled State: ${originalDisabled}`);

				// Disable the control
				intControl.Disabled = true;
				console.log("✓ Control disabled");

				// Restore disabled state after 2 seconds
				setTimeout(function() {
					intControl.Disabled = originalDisabled;
					console.log(`  ↩ Disabled state restored: ${originalDisabled}`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 13 Error:", error.message);
			}

			try {
				// Test 14: Test Label Change (and restore)
				console.log("📋 Test 14: Test Label Change");
				console.log("─────────────────────────────────────────────────────────");
				const originalLabel = intControl.Label;
				console.log(`  Original Label: "${originalLabel}"`);

				// Change label
				intControl.Label = `${originalLabel} (TEST)`;
				console.log(`✓ Label changed to: "${intControl.Label}"`);

				// Restore label after 2 seconds
				setTimeout(function() {
					intControl.Label = originalLabel;
					console.log(`  ↩ Label restored: "${originalLabel}"`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 14 Error:", error.message);
			}

			try {
				// Test 15: Test Null/Zero Handling
				console.log("📋 Test 15: Test Null/Zero Handling");
				console.log("─────────────────────────────────────────────────────────");
				const originalValue = intControl.Value;
				console.log(`  Original Value: ${originalValue}`);

				// Set to zero
				intControl.Value = 0;
				console.log(`✓ Value set to: 0`);
				console.log(`  Current Value: ${intControl.Value}`);

				setTimeout(function() {
					// Set to null (clear the field)
					/** @type {any} */ (intControl).Value = null;
					console.log(`✓ Value set to: null (cleared)`);
					console.log(`  Current Value: ${intControl.Value}`);

					// Restore original value after another 2 seconds
					setTimeout(function() {
						intControl.Value = originalValue;
						console.log(`  ↩ Original value restored: ${originalValue}`);
					}, 2000);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 15 Error:", error.message);
			}

			console.log("╔════════════════════════════════════════════════════════════════╗");
			console.log("║         INTEGER CONTROL TESTS COMPLETED                        ║");
			console.log("╚════════════════════════════════════════════════════════════════╝");
		}

		/**************************************************************************
		 * TEST: Money Control - Revenue Field
		 * This test demonstrates all available methods and properties for Money controls
		 **************************************************************************/
		async function testMoney() {
			console.log("╔════════════════════════════════════════════════════════════════╗");
			console.log("║        TESTING MONEY CONTROL: Revenue                          ║");
			console.log("║        (Located in Header section)                             ║");
			console.log("╚════════════════════════════════════════════════════════════════╝");

			const moneyControl = form.Header.Revenue;

			try {
				// Test 1: Get current money value
				console.log("📋 Test 1: Get Money Value");
				console.log("─────────────────────────────────────────────────────────");
				const currentValue = moneyControl.Value;
				console.log(`✓ Current Value: ${currentValue}`);
				console.log(`  Type: ${typeof currentValue}`);
				console.log(`  Is Number: ${typeof currentValue === 'number'}`);
				console.log(`  Formatted: $${currentValue !== null ? currentValue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}) : 'null'}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 1 Error:", error.message);
			}

			try {
				// Test 2: Get Control and Attribute Names
				console.log("📋 Test 2: Get Control and Attribute Names");
				console.log("─────────────────────────────────────────────────────────");
				console.log(`✓ Control Name: ${moneyControl.ControlName}`);
				console.log(`✓ Attribute Name: ${moneyControl.AttributeName}`);
				console.log(`  (Both should be: 'revenue')`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 2 Error:", error.message);
			}

			try {
				// Test 3: Get Attribute Properties
				console.log("📋 Test 3: Get Attribute Properties");
				console.log("─────────────────────────────────────────────────────────");
				console.log(`✓ Attribute Name: ${moneyControl.AttributeName}`);
				console.log(`  Attribute Type: ${moneyControl.AttributeType}`);
				console.log(`  Control Type: ${moneyControl.ControlType}`);
				console.log(`  Required Level: ${moneyControl.RequiredLevel}`);
				console.log(`  Submit Mode: ${moneyControl.SubmitMode}`);
				console.log(`  Is Valid: ${moneyControl.IsValid}`);
				console.log(`  Is Dirty: ${moneyControl.IsDirty}`);
				console.log(`  Format: ${moneyControl.Format}`);
				console.log(`  Min Value: ${moneyControl.Min}`);
				console.log(`  Max Value: ${moneyControl.Max}`);
				console.log(`  Precision: ${moneyControl.Precision}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 3 Error:", error.message);
			}

			try {
				// Test 4: Get Control Visibility
				console.log("📋 Test 4: Get Control Visibility");
				console.log("─────────────────────────────────────────────────────────");
				const isVisible = moneyControl.Visible;
				console.log(`✓ Visible: ${isVisible}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 4 Error:", error.message);
			}

			try {
				// Test 5: Get Control Disabled State
				console.log("📋 Test 5: Get Control Disabled State");
				console.log("─────────────────────────────────────────────────────────");
				const isDisabled = moneyControl.Disabled;
				console.log(`✓ Disabled: ${isDisabled}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 5 Error:", error.message);
			}

			try {
				// Test 6: Get Control Label
				console.log("📋 Test 6: Get Control Label");
				console.log("─────────────────────────────────────────────────────────");
				const label = moneyControl.Label;
				console.log(`✓ Label: "${label}"`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 6 Error:", error.message);
			}

			try {
				// Test 7: Set Money Value (and restore)
				console.log("📋 Test 7: Set Money Value (and restore)");
				console.log("─────────────────────────────────────────────────────────");
				const originalValue = moneyControl.Value;
				console.log(`  Original Value: $${originalValue !== null ? originalValue.toLocaleString('en-US', {minimumFractionDigits: 2}) : 'null'}`);

				// Set new value (add 50000 to current value, or set to 1000000 if null)
				const testValue = (originalValue || 0) + 50000;
				moneyControl.Value = testValue;
				console.log(`✓ New Value Set: $${testValue.toLocaleString('en-US', {minimumFractionDigits: 2})}`);

				// Restore original value after 2 seconds
				setTimeout(function() {
					moneyControl.Value = originalValue;
					console.log(`  ↩ Original value restored: $${originalValue !== null ? originalValue.toLocaleString('en-US', {minimumFractionDigits: 2}) : 'null'}`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 7 Error:", error.message);
			}

			try {
				// Test 8: Test Min/Max Validation
				console.log("📋 Test 8: Test Min/Max Validation");
				console.log("─────────────────────────────────────────────────────────");
				const minValue = moneyControl.Min;
				const maxValue = moneyControl.Max;
				console.log(`✓ Min Value: ${minValue !== null && minValue !== undefined ? '$' + minValue.toLocaleString('en-US', {minimumFractionDigits: 2}) : 'No limit'}`);
				console.log(`✓ Max Value: ${maxValue !== null && maxValue !== undefined ? '$' + maxValue.toLocaleString('en-US', {minimumFractionDigits: 2}) : 'No limit'}`);

				if (minValue !== null && minValue !== undefined) {
					console.log(`  ℹ Values below $${minValue.toLocaleString('en-US', {minimumFractionDigits: 2})} will be rejected`);
				}
				if (maxValue !== null && maxValue !== undefined) {
					console.log(`  ℹ Values above $${maxValue.toLocaleString('en-US', {minimumFractionDigits: 2})} will be rejected`);
				}
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 8 Error:", error.message);
			}

			try {
				// Test 9: Test Decimal Precision
				console.log("📋 Test 9: Test Decimal Precision");
				console.log("─────────────────────────────────────────────────────────");
				const originalValue = moneyControl.Value;
				const precision = moneyControl.Precision;

				console.log(`  Current Precision: ${precision} decimal places`);
				console.log(`  ℹ Attempting to set value with high precision: 123456.789`);
				moneyControl.Value = 123456.789;

				const actualValue = moneyControl.Value;
				console.log(`✓ Actual Value Set: $${actualValue !== null ? actualValue.toLocaleString('en-US', {minimumFractionDigits: precision, maximumFractionDigits: precision}) : 'null'}`);
				console.log(`  ℹ Value rounded to ${precision} decimal places`);

				// Restore original value immediately
				setTimeout(function() {
					moneyControl.Value = originalValue;
					console.log(`  ↩ Original value restored: $${originalValue !== null ? originalValue.toLocaleString('en-US', {minimumFractionDigits: 2}) : 'null'}`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 9 Error:", error.message);
			}

			try {
				// Test 10: Test Notification Methods
				console.log("📋 Test 10: Test Notification Methods");
				console.log("─────────────────────────────────────────────────────────");

				// Add error notification
				moneyControl.SetNotification("This is a test error notification for Revenue field", "TEST_MONEY_ERROR_1");
				console.log("✓ Error notification set");

				// Clear notification after 3 seconds
				setTimeout(function() {
					moneyControl.ClearNotification("TEST_MONEY_ERROR_1");
					console.log("  ↩ Notification cleared");
				}, 3000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 10 Error:", error.message);
			}

			try {
				// Test 11: Test SetFocus Method
				console.log("📋 Test 11: Test SetFocus Method");
				console.log("─────────────────────────────────────────────────────────");
				setTimeout(function() {
					moneyControl.Focus();
					console.log("✓ Focus set to Revenue field");
				}, 4000);
				console.log("ℹ Will set focus in 4 seconds...");
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 11 Error:", error.message);
			}

			try {
				// Test 12: Test Visibility Toggle (and restore)
				console.log("📋 Test 12: Test Visibility Toggle");
				console.log("─────────────────────────────────────────────────────────");
				const originalVisibility = moneyControl.Visible;
				console.log(`  Original Visibility: ${originalVisibility}`);

				// Hide the control
				moneyControl.Visible = false;
				console.log("✓ Control hidden");

				// Restore visibility after 2 seconds
				setTimeout(function() {
					moneyControl.Visible = originalVisibility;
					console.log(`  ↩ Visibility restored: ${originalVisibility}`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 12 Error:", error.message);
			}

			try {
				// Test 13: Test Disabled Toggle (and restore)
				console.log("📋 Test 13: Test Disabled Toggle");
				console.log("─────────────────────────────────────────────────────────");
				const originalDisabled = moneyControl.Disabled;
				console.log(`  Original Disabled State: ${originalDisabled}`);

				// Disable the control
				moneyControl.Disabled = true;
				console.log("✓ Control disabled");

				// Restore disabled state after 2 seconds
				setTimeout(function() {
					moneyControl.Disabled = originalDisabled;
					console.log(`  ↩ Disabled state restored: ${originalDisabled}`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 13 Error:", error.message);
			}

			try {
				// Test 14: Test Label Change (and restore)
				console.log("📋 Test 14: Test Label Change");
				console.log("─────────────────────────────────────────────────────────");
				const originalLabel = moneyControl.Label;
				console.log(`  Original Label: "${originalLabel}"`);

				// Change label
				moneyControl.Label = `${originalLabel} (TEST)`;
				console.log(`✓ Label changed to: "${moneyControl.Label}"`);

				// Restore label after 2 seconds
				setTimeout(function() {
					moneyControl.Label = originalLabel;
					console.log(`  ↩ Label restored: "${originalLabel}"`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 14 Error:", error.message);
			}

			try {
				// Test 15: Test Null/Zero Handling
				console.log("📋 Test 15: Test Null/Zero Handling");
				console.log("─────────────────────────────────────────────────────────");
				const originalValue = moneyControl.Value;
				console.log(`  Original Value: $${originalValue !== null ? originalValue.toLocaleString('en-US', {minimumFractionDigits: 2}) : 'null'}`);

				// Set to zero
				moneyControl.Value = 0;
				console.log(`✓ Value set to: $0.00`);
				console.log(`  Current Value: $${moneyControl.Value !== null ? moneyControl.Value.toLocaleString('en-US', {minimumFractionDigits: 2}) : 'null'}`);

				setTimeout(function() {
					// Set to null (clear the field)
					/** @type {any} */ (moneyControl).Value = null;
					console.log(`✓ Value set to: null (cleared)`);
					console.log(`  Current Value: ${moneyControl.Value}`);

					// Restore original value after another 2 seconds
					setTimeout(function() {
						moneyControl.Value = originalValue;
						console.log(`  ↩ Original value restored: $${originalValue !== null ? originalValue.toLocaleString('en-US', {minimumFractionDigits: 2}) : 'null'}`);
					}, 2000);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 15 Error:", error.message);
			}

			try {
				// Test 16: Test Negative Values
				console.log("📋 Test 16: Test Negative Values");
				console.log("─────────────────────────────────────────────────────────");
				const originalValue = moneyControl.Value;

				// Set negative value
				moneyControl.Value = -25000;
				console.log(`✓ Negative value set: -$25,000.00`);
				console.log(`  Current Value: $${moneyControl.Value !== null ? moneyControl.Value.toLocaleString('en-US', {minimumFractionDigits: 2}) : 'null'}`);
				console.log(`  ℹ Some money fields may allow negative values (debts, losses)`);

				// Restore original value after 2 seconds
				setTimeout(function() {
					moneyControl.Value = originalValue;
					console.log(`  ↩ Original value restored: $${originalValue !== null ? originalValue.toLocaleString('en-US', {minimumFractionDigits: 2}) : 'null'}`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 16 Error:", error.message);
			}

			console.log("╔════════════════════════════════════════════════════════════════╗");
			console.log("║           MONEY CONTROL TESTS COMPLETED                        ║");
			console.log("╚════════════════════════════════════════════════════════════════╝");
		}

		/**************************************************************************
		 * TEST: OptionSet Control (Single Select Picklist)
		 * Field: AccountCategoryCode - Category
		 * Values: Preferred_Customer = 1, Standard = 2
		 **************************************************************************/
		async function testOptionSet() {
			console.log("╔════════════════════════════════════════════════════════════════╗");
			console.log("║           OPTIONSET CONTROL TESTS                              ║");
			console.log("║           Field: AccountCategoryCode (Category)                ║");
			console.log("║           Location: Body                                       ║");
			console.log("╚════════════════════════════════════════════════════════════════╝");
			console.log("");

			/** @type {DevKit.Controls.OptionSet} */
			const optionSetControl = form.Body.AccountCategoryCode;

			try {
				// Test 1: Get OptionSet Value (returns number)
				console.log("⚡ Test 1: Get OptionSet Value");
				const value = optionSetControl.Value;
				console.log(`✓ Current Value (numeric): ${value}`);
				console.log(`  Type: ${typeof value}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 1 Error:", error.message);
			}

			try {
				// Test 2: Get Control and Attribute Names
				console.log("⚡ Test 2: Get Control and Attribute Names");
				console.log(`✓ Control Name: ${optionSetControl.ControlName}`);
				console.log(`✓ Attribute Name: ${optionSetControl.AttributeName}`);
				console.log(`✓ Control Type: ${optionSetControl.ControlType}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 2 Error:", error.message);
			}

			try {
				// Test 3: Get Selected Option (returns text and value)
				console.log("⚡ Test 3: Get Selected Option Details");
				const selectedOption = optionSetControl.SelectedOption;
				if (selectedOption) {
					console.log(`✓ Selected Option:`);
					console.log(`  Text: "${selectedOption.text}"`);
					console.log(`  Value: ${selectedOption.value}`);
				} else {
					console.log(`  ℹ No option selected (null)`);
				}
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 3 Error:", error.message);
			}

			try {
				// Test 4: Get Text of Selected Option
				console.log("⚡ Test 4: Get Text of Selected Option");
				const text = optionSetControl.Text;
				console.log(`✓ Selected Option Text: "${text}"`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 4 Error:", error.message);
			}

			try {
				// Test 5: Get All Available Options
				console.log("⚡ Test 5: Get All Available Options");
				const options = optionSetControl.Options;
				console.log(`✓ Available Options (${options.length} total):`);
				for (const option of options) {
					console.log(`  [${option.value}] "${option.text}"`);
				}
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 5 Error:", error.message);
			}

			try {
				// Test 6: Get Control Options (includes blank option)
				console.log("⚡ Test 6: Get Control Options");
				const controlOptions = optionSetControl.ControlOptions;
				console.log(`✓ Control Options (${controlOptions.length} total, includes blank):`);
				for (const option of controlOptions) {
					if (option.value === null || option.value === undefined) {
						console.log(`  [null] "(Blank)"`);
					} else {
						console.log(`  [${option.value}] "${option.text}"`);
					}
				}
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 6 Error:", error.message);
			}

			try {
				// Test 7: Get Specific Option by Value
				console.log("⚡ Test 7: Get Specific Option by Value");
				const preferredCustomer = optionSetControl.Option(1); // Preferred_Customer
				const standard = optionSetControl.Option(2); // Standard
				console.log(`✓ Option by Value (1): "${preferredCustomer?.text}" = ${preferredCustomer?.value}`);
				console.log(`✓ Option by Value (2): "${standard?.text}" = ${standard?.value}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 7 Error:", error.message);
			}

			try {
				// Test 8: Get Specific Option by Text
				console.log("⚡ Test 8: Get Specific Option by Text");
				const option = optionSetControl.Option("Preferred Customer");
				if (option) {
					console.log(`✓ Option by Text: "${option.text}" = ${option.value}`);
				} else {
					console.log(`  ℹ Option not found or text doesn't match exactly`);
				}
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 8 Error:", error.message);
			}

			try {
				// Test 9: Get Initial Value (value when form loaded)
				console.log("⚡ Test 9: Get Initial Value");
				const initialValue = optionSetControl.InitialValue;
				console.log(`✓ Initial Value: ${initialValue}`);
				console.log(`  ℹ This is the value when the form was loaded`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 9 Error:", error.message);
			}

			try {
				// Test 10: Get Visibility Status
				console.log("⚡ Test 10: Get Visibility Status");
				const visible = optionSetControl.Visible;
				console.log(`✓ Is Visible: ${visible}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 10 Error:", error.message);
			}

			try {
				// Test 11: Get Disabled Status
				console.log("⚡ Test 11: Get Disabled Status");
				const disabled = optionSetControl.Disabled;
				console.log(`✓ Is Disabled: ${disabled}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 11 Error:", error.message);
			}

			try {
				// Test 12: Get Label
				console.log("⚡ Test 12: Get Label");
				const label = optionSetControl.Label;
				console.log(`✓ Label: "${label}"`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 12 Error:", error.message);
			}

			try {
				// Test 13: Set Value and Observe Change
				console.log("⚡ Test 13: Set Value to 'Preferred Customer' (1)");
				const originalValue = optionSetControl.Value;
				console.log(`  📋 Original Value: ${originalValue}`);

				await new Promise(resolve => setTimeout(resolve, 2000));
				optionSetControl.Value = 1; // Preferred_Customer
				console.log(`✓ Value set to: 1 (Preferred Customer)`);
				console.log(`  Current Text: "${optionSetControl.Text}"`);

				// Restore after 2 seconds
				setTimeout(function() {
					/** @type {any} */ (optionSetControl).Value = originalValue;
					console.log(`  ↩ Original value restored: ${originalValue}`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 13 Error:", error.message);
			}

			try {
				// Test 14: Clear Value (set to null)
				console.log("⚡ Test 14: Clear Value (set to null)");
				const originalValue = optionSetControl.Value;

				await new Promise(resolve => setTimeout(resolve, 4000));
				/** @type {any} */ (optionSetControl).Value = null;
				console.log(`✓ Value cleared (set to null)`);
				console.log(`  Current Value: ${optionSetControl.Value}`);
				console.log(`  Current Text: "${optionSetControl.Text}"`);

				// Restore after 2 seconds
				setTimeout(function() {
					optionSetControl.Value = originalValue;
					console.log(`  ↩ Original value restored: ${originalValue}`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 14 Error:", error.message);
			}

			try {
				// Test 15: Add Notification
				console.log("⚡ Test 15: Add Notification");
				await new Promise(resolve => setTimeout(resolve, 6000));
				optionSetControl.AddNotification({
					messages: ["This is a test notification for Category field"],
					notificationLevel: OptionSet.FieldNotificationLevel.Error,
					uniqueId: "TEST_OPTIONSET_NOTIF"
				});
				console.log(`✓ Notification added with ID: TEST_OPTIONSET_NOTIF`);
				console.log(`  Message: "This is a test notification for Category field"`);

				// Clear notification after 3 seconds
				setTimeout(function() {
					optionSetControl.ClearNotification("TEST_OPTIONSET_NOTIF");
					console.log(`  ↩ Notification cleared`);
				}, 3000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 15 Error:", error.message);
			}

			try {
				// Test 16: Set Focus
				console.log("⚡ Test 16: Set Focus to Control");
				await new Promise(resolve => setTimeout(resolve, 9000));
				optionSetControl.Focus();
				console.log(`✓ Focus set to AccountCategoryCode control`);
				console.log(`  ⚡ The control should now be highlighted and focused`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 16 Error:", error.message);
			}

			try {
				// Test 17: Toggle Visibility
				console.log("⚡ Test 17: Toggle Visibility");
				await new Promise(resolve => setTimeout(resolve, 13000));
				const originalVisible = optionSetControl.Visible;
				optionSetControl.Visible = false;
				console.log(`✓ Visibility set to: false (control hidden)`);

				// Restore after 2 seconds
				setTimeout(function() {
					optionSetControl.Visible = originalVisible;
					console.log(`  ↩ Visibility restored to: ${originalVisible}`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 17 Error:", error.message);
			}

			try {
				// Test 18: Toggle Disabled State
				console.log("⚡ Test 18: Toggle Disabled State");
				await new Promise(resolve => setTimeout(resolve, 15000));
				const originalDisabled = optionSetControl.Disabled;
				optionSetControl.Disabled = true;
				console.log(`✓ Disabled set to: true (control is read-only)`);

				// Restore after 2 seconds
				setTimeout(function() {
					optionSetControl.Disabled = originalDisabled;
					console.log(`  ↩ Disabled restored to: ${originalDisabled}`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 18 Error:", error.message);
			}

			try {
				// Test 19: Change Label
				console.log("⚡ Test 19: Change Label Text");
				await new Promise(resolve => setTimeout(resolve, 17000));
				const originalLabel = optionSetControl.Label;
				optionSetControl.Label = "TEST: Modified Category Label";
				console.log(`✓ Label changed from "${originalLabel}" to "TEST: Modified Category Label"`);

				// Restore after 2 seconds
				setTimeout(function() {
					optionSetControl.Label = originalLabel;
					console.log(`  ↩ Label restored to: "${originalLabel}"`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 19 Error:", error.message);
			}

			console.log("╔════════════════════════════════════════════════════════════════╗");
			console.log("║         OPTIONSET CONTROL TESTS COMPLETED                      ║");
			console.log("╚════════════════════════════════════════════════════════════════╝");
		}

		/**************************************************************************
		 * TEST: MultiOptionSet Control (Multi-Select Picklist)
		 * Field: devkit_CategoryCode - Category Code
		 * Values: Business=1, Family=2, Social=3, Sales=4, Other=5, Stakeholder=1000, Sales_Team=1001, Service=1002
		 **************************************************************************/
		async function testMultiOptionSet() {
			console.log("╔════════════════════════════════════════════════════════════════╗");
			console.log("║       MULTI-OPTIONSET CONTROL TESTS                            ║");
			console.log("║       Field: devkit_CategoryCode (Category Code)               ║");
			console.log("║       Location: Body                                           ║");
			console.log("╚════════════════════════════════════════════════════════════════╝");
			console.log("");

			/** @type {DevKit.Controls.MultiOptionSet} */
			const multiOptionSetControl = form.Body.devkit_CategoryCode;

			try {
				// Test 1: Get MultiOptionSet Value (returns array of numbers)
				console.log("⚡ Test 1: Get MultiOptionSet Value");
				const value = multiOptionSetControl.Value;
				console.log(`✓ Current Value (array): [${value?.join(', ')}]`);
				console.log(`  Type: ${Array.isArray(value) ? 'Array' : typeof value}`);
				console.log(`  Length: ${value?.length || 0} selected`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 1 Error:", error.message);
			}

			try {
				// Test 2: Get Control and Attribute Names
				console.log("⚡ Test 2: Get Control and Attribute Names");
				console.log(`✓ Control Name: ${multiOptionSetControl.ControlName}`);
				console.log(`✓ Attribute Name: ${multiOptionSetControl.AttributeName}`);
				console.log(`✓ Control Type: ${multiOptionSetControl.ControlType}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 2 Error:", error.message);
			}

			try {
				// Test 3: Get Selected Options (returns array of text/value objects)
				console.log("⚡ Test 3: Get Selected Options Details");
				const selectedOptions = multiOptionSetControl.SelectedOption;
				if (selectedOptions && selectedOptions.length > 0) {
					console.log(`✓ Selected Options (${selectedOptions.length}):`);
					for (const option of selectedOptions) {
						console.log(`  [${option.value}] "${option.text}"`);
					}
				} else {
					console.log(`  ℹ No options selected (empty array)`);
				}
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 3 Error:", error.message);
			}

			try {
				// Test 4: Get Text of Selected Options
				console.log("⚡ Test 4: Get Text of Selected Options");
				const text = multiOptionSetControl.Text;
				console.log(`✓ Selected Options Text: "${text}"`);
				console.log(`  ℹ Multiple selections are separated by semicolon`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 4 Error:", error.message);
			}

			try {
				// Test 5: Get All Available Options
				console.log("⚡ Test 5: Get All Available Options");
				const options = multiOptionSetControl.Options;
				console.log(`✓ Available Options (${options.length} total):`);
				for (const option of options) {
					console.log(`  [${option.value}] "${option.text}"`);
				}
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 5 Error:", error.message);
			}

			try {
				// Test 6: Get Control Options
				console.log("⚡ Test 6: Get Control Options");
				const controlOptions = multiOptionSetControl.ControlOptions;
				console.log(`✓ Control Options (${controlOptions.length} total):`);
				for (const option of controlOptions) {
					console.log(`  [${option.value}] "${option.text}"`);
				}
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 6 Error:", error.message);
			}

			try {
				// Test 7: Get Specific Option by Value
				console.log("⚡ Test 7: Get Specific Option by Value");
				const business = multiOptionSetControl.Option(1); // Business
				const family = multiOptionSetControl.Option(2); // Family
				const social = multiOptionSetControl.Option(3); // Social
				console.log(`✓ Option by Value (1): "${business?.text}" = ${business?.value}`);
				console.log(`✓ Option by Value (2): "${family?.text}" = ${family?.value}`);
				console.log(`✓ Option by Value (3): "${social?.text}" = ${social?.value}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 7 Error:", error.message);
			}

			try {
				// Test 8: Get Initial Value (value when form loaded)
				console.log("⚡ Test 8: Get Initial Value");
				const initialValue = multiOptionSetControl.InitialValue;
				console.log(`✓ Initial Value: ${initialValue}`);
				console.log(`  ℹ This is the value when the form was loaded`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 8 Error:", error.message);
			}

			try {
				// Test 9: Get Visibility Status
				console.log("⚡ Test 9: Get Visibility Status");
				const visible = multiOptionSetControl.Visible;
				console.log(`✓ Is Visible: ${visible}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 9 Error:", error.message);
			}

			try {
				// Test 10: Get Disabled Status
				console.log("⚡ Test 10: Get Disabled Status");
				const disabled = multiOptionSetControl.Disabled;
				console.log(`✓ Is Disabled: ${disabled}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 10 Error:", error.message);
			}

			try {
				// Test 11: Get Label
				console.log("⚡ Test 11: Get Label");
				const label = multiOptionSetControl.Label;
				console.log(`✓ Label: "${label}"`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 11 Error:", error.message);
			}

			try {
				// Test 12: Set Single Value
				console.log("⚡ Test 12: Set Single Value [1] (Business)");
				const originalValue = multiOptionSetControl.Value;
				console.log(`  📋 Original Value: [${originalValue?.join(', ')}]`);

				await new Promise(resolve => setTimeout(resolve, 2000));
				multiOptionSetControl.Value = [1]; // Business only
				console.log(`✓ Value set to: [1] (Business)`);
				console.log(`  Current Text: "${multiOptionSetControl.Text}"`);

				// Restore after 2 seconds
				setTimeout(function() {
					/** @type {any} */ (multiOptionSetControl).Value = originalValue;
					console.log(`  ↩ Original value restored: [${originalValue?.join(', ')}]`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 12 Error:", error.message);
			}

			try {
				// Test 13: Set Multiple Values
				console.log("⚡ Test 13: Set Multiple Values [1, 2, 3] (Business, Family, Social)");
				const originalValue = multiOptionSetControl.Value;

				await new Promise(resolve => setTimeout(resolve, 4000));
				multiOptionSetControl.Value = [1, 2, 3]; // Business, Family, Social
				console.log(`✓ Value set to: [1, 2, 3]`);
				console.log(`  Current Text: "${multiOptionSetControl.Text}"`);
				console.log(`  ℹ Multiple selections visible in UI`);

				// Restore after 2 seconds
				setTimeout(function() {
					/** @type {any} */ (multiOptionSetControl).Value = originalValue;
					console.log(`  ↩ Original value restored: [${originalValue?.join(', ')}]`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 13 Error:", error.message);
			}

			try {
				// Test 14: Clear All Values (set to empty array or null)
				console.log("⚡ Test 14: Clear All Values");
				const originalValue = multiOptionSetControl.Value;

				await new Promise(resolve => setTimeout(resolve, 6000));
				multiOptionSetControl.Value = [];
				console.log(`✓ All values cleared (empty array)`);
				console.log(`  Current Value: [${multiOptionSetControl.Value?.join(', ')}]`);
				console.log(`  Current Text: "${multiOptionSetControl.Text}"`);

				// Restore after 2 seconds
				setTimeout(function() {
					/** @type {any} */ (multiOptionSetControl).Value = originalValue;
					console.log(`  ↩ Original value restored: [${originalValue?.join(', ')}]`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 14 Error:", error.message);
			}

			try {
				// Test 15: Add Notification
				console.log("⚡ Test 15: Add Notification");
				await new Promise(resolve => setTimeout(resolve, 8000));
				multiOptionSetControl.AddNotification({
					messages: ["This is a test notification for Category Code field"],
					notificationLevel: OptionSet.FieldNotificationLevel.Error,
					uniqueId: "TEST_MULTIOPTION_NOTIF"
				});
				console.log(`✓ Notification added with ID: TEST_MULTIOPTION_NOTIF`);
				console.log(`  Message: "This is a test notification for Category Code field"`);

				// Clear notification after 3 seconds
				setTimeout(function() {
					multiOptionSetControl.ClearNotification("TEST_MULTIOPTION_NOTIF");
					console.log(`  ↩ Notification cleared`);
				}, 3000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 15 Error:", error.message);
			}

			try {
				// Test 16: Set Focus
				console.log("⚡ Test 16: Set Focus to Control");
				await new Promise(resolve => setTimeout(resolve, 11000));
				multiOptionSetControl.Focus();
				console.log(`✓ Focus set to devkit_CategoryCode control`);
				console.log(`  ⚡ The control should now be highlighted and focused`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 16 Error:", error.message);
			}

			try {
				// Test 17: Toggle Visibility
				console.log("⚡ Test 17: Toggle Visibility");
				await new Promise(resolve => setTimeout(resolve, 15000));
				const originalVisible = multiOptionSetControl.Visible;
				multiOptionSetControl.Visible = false;
				console.log(`✓ Visibility set to: false (control hidden)`);

				// Restore after 2 seconds
				setTimeout(function() {
					multiOptionSetControl.Visible = originalVisible;
					console.log(`  ↩ Visibility restored to: ${originalVisible}`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 17 Error:", error.message);
			}

			try {
				// Test 18: Toggle Disabled State
				console.log("⚡ Test 18: Toggle Disabled State");
				await new Promise(resolve => setTimeout(resolve, 17000));
				const originalDisabled = multiOptionSetControl.Disabled;
				multiOptionSetControl.Disabled = true;
				console.log(`✓ Disabled set to: true (control is read-only)`);

				// Restore after 2 seconds
				setTimeout(function() {
					multiOptionSetControl.Disabled = originalDisabled;
					console.log(`  ↩ Disabled restored to: ${originalDisabled}`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 18 Error:", error.message);
			}

			try {
				// Test 19: Change Label
				console.log("⚡ Test 19: Change Label Text");
				await new Promise(resolve => setTimeout(resolve, 19000));
				const originalLabel = multiOptionSetControl.Label;
				multiOptionSetControl.Label = "TEST: Modified Category Code Label";
				console.log(`✓ Label changed from "${originalLabel}" to "TEST: Modified Category Code Label"`);

				// Restore after 2 seconds
				setTimeout(function() {
					multiOptionSetControl.Label = originalLabel;
					console.log(`  ↩ Label restored to: "${originalLabel}"`);
				}, 2000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 19 Error:", error.message);
			}

			console.log("╔════════════════════════════════════════════════════════════════╗");
			console.log("║     MULTI-OPTIONSET CONTROL TESTS COMPLETED                    ║");
			console.log("╚════════════════════════════════════════════════════════════════╝");
		}

		/**************************************************************************
		 * TEST: Decimal Control - v4_Decimal Field
		 * Tests all methods and properties for decimal number controls with precision
		 **************************************************************************/
		async function testDecimal() {
			console.log("╔════════════════════════════════════════════════════════════════╗");
			console.log("║     DECIMAL CONTROL TESTS - v4_Decimal Field                  ║");
			console.log("╚════════════════════════════════════════════════════════════════╝");
			console.log("");

			const decimalControl = form.Body.v4_Decimal;

			try {
				// Test 1: Get Decimal Value
				console.log("Test 1: Get Decimal Value");
				const value = decimalControl.Value;
				console.log(`  ✓ Current Decimal Value: ${value}`);
				console.log(`  ℹ Type: ${typeof value}, Is null: ${value === null}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 1 Error:", error.message);
			}

			try {
				// Test 2: Get Control and Attribute Names
				console.log("Test 2: Get Control and Attribute Names");
				const controlName = decimalControl.ControlName;
				const attributeName = decimalControl.AttributeName;
				console.log(`  ✓ Control Name: ${controlName}`);
				console.log(`  ✓ Attribute Name: ${attributeName}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 2 Error:", error.message);
			}

			try {
				// Test 3: Get Precision (Decimal Places)
				console.log("Test 3: Get Precision (Decimal Places)");
				const precision = decimalControl.Precision;
				console.log(`  ✓ Decimal Precision: ${precision} decimal places`);
				console.log(`  ℹ This determines how many digits can appear after the decimal point`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 3 Error:", error.message);
			}

			try {
				// Test 4: Get Min and Max Values
				console.log("Test 4: Get Min and Max Values");
				const minValue = decimalControl.Min;
				const maxValue = decimalControl.Max;
				console.log(`  ✓ Minimum Value: ${minValue}`);
				console.log(`  ✓ Maximum Value: ${maxValue}`);
				console.log(`  ℹ Valid range: ${minValue} to ${maxValue}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 4 Error:", error.message);
			}

			try {
				// Test 5: Get Control Type
				console.log("Test 5: Get Control Type");
				const controlType = decimalControl.ControlType;
				console.log(`  ✓ Control Type: ${controlType}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 5 Error:", error.message);
			}

			try {
				// Test 6: Get Attribute Type
				console.log("Test 6: Get Attribute Type");
				const attributeType = decimalControl.AttributeType;
				console.log(`  ✓ Attribute Type: ${attributeType}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 6 Error:", error.message);
			}

			try {
				// Test 7: Get Format
				console.log("Test 7: Get Format");
				const format = decimalControl.Format;
				console.log(`  ✓ Format: ${format}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 7 Error:", error.message);
			}

			try {
				// Test 8: Get IsDirty Status
				console.log("Test 8: Get IsDirty Status");
				const isDirty = decimalControl.IsDirty;
				console.log(`  ✓ Is Dirty: ${isDirty}`);
				console.log(`  ℹ Indicates if the field value has been modified`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 8 Error:", error.message);
			}

			try {
				// Test 9: Get Visibility Status
				console.log("Test 9: Get Visibility Status");
				const isVisible = decimalControl.Visible;
				console.log(`  ✓ Is Visible: ${isVisible}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 9 Error:", error.message);
			}

			try {
				// Test 10: Get Disabled Status
				console.log("Test 10: Get Disabled Status");
				const isDisabled = decimalControl.Disabled;
				console.log(`  ✓ Is Disabled: ${isDisabled}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 10 Error:", error.message);
			}

			try {
				// Test 11: Get Label
				console.log("Test 11: Get Label");
				const label = decimalControl.Label;
				console.log(`  ✓ Label: "${label}"`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 11 Error:", error.message);
			}

			try {
				// Test 12: Set Decimal Value with Precision
				console.log("Test 12: Set Decimal Value with Precision");
				const originalValue = decimalControl.Value;
				console.log(`  ℹ Original value: ${originalValue}`);
				decimalControl.Value = 123.456789;
				console.log(`  ✓ Set decimal value to: 123.456789`);
				const newValue = decimalControl.Value;
				console.log(`  ⚡ Stored value (after precision applied): ${newValue}`);
				console.log(`  ℹ Note: Value is rounded based on field precision`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 12 Error:", error.message);
			}

			try {
				// Test 13: Set Negative Decimal Value
				console.log("Test 13: Set Negative Decimal Value");
				decimalControl.Value = -99.99;
				console.log(`  ✓ Set negative decimal value to: -99.99`);
				const negValue = decimalControl.Value;
				console.log(`  ⚡ Current value: ${negValue}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 13 Error:", error.message);
			}

			try {
				// Test 14: Set Zero Value
				console.log("Test 14: Set Zero Value");
				decimalControl.Value = 0;
				console.log(`  ✓ Set decimal value to: 0`);
				const zeroValue = decimalControl.Value;
				console.log(`  ⚡ Current value: ${zeroValue}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 14 Error:", error.message);
			}

			try {
				// Test 15: Clear Value (Set to Null)
				console.log("Test 15: Clear Value (Set to Null)");
				decimalControl.Value = /** @type {any} */ (null);
				console.log(`  ✓ Cleared decimal value (set to null)`);
				const clearedValue = decimalControl.Value;
				console.log(`  ⚡ Current value: ${clearedValue}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 15 Error:", error.message);
			}

			try {
				// Test 16: Set Precision (Dynamic Change)
				console.log("Test 16: Set Precision (Dynamic Change)");
				const originalPrecision = decimalControl.Precision;
				console.log(`  ℹ Original precision: ${originalPrecision}`);
				decimalControl.Value = 123.456789;
				console.log(`  ℹ Set value to: 123.456789`);
				decimalControl.Precision = 2;
				console.log(`  ✓ Changed precision to: 2 decimal places`);
				const valuePrecision2 = decimalControl.Value;
				console.log(`  ⚡ Value with 2 decimals: ${valuePrecision2}`);
				decimalControl.Precision = 1;
				console.log(`  ✓ Changed precision to: 1 decimal places`);
				const valuePrecision1 = decimalControl.Value;
				console.log(`  ⚡ Value with 1 decimals: ${valuePrecision1}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 16 Error:", error.message);
			}

			try {
				// Test 17: Add Notification
				console.log("Test 17: Add Notification");
				decimalControl.AddNotification({
					messages: ["Please enter a valid decimal number"],
					notificationLevel: OptionSet.FieldNotificationLevel.Error,
					uniqueId: "decimal_error_notification"
				});
				console.log(`  ✓ Error notification added to decimal field`);
				console.log(`  ℹ Check the UI for red 'X' icon next to the field`);
				// Clear notification after delay
				setTimeout(() => {
					decimalControl.ClearNotification("decimal_error_notification");
					console.log(`  ↩ Notification cleared`);
				}, 3000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 17 Error:", error.message);
			}

			try {
				// Test 18: Set Focus
				console.log("Test 18: Set Focus");
				setTimeout(() => {
					decimalControl.Focus();
					console.log(`  ✓ Focus set on decimal field`);
					console.log(`  ℹ The decimal field should be highlighted/active`);
				}, 3500);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 18 Error:", error.message);
			}

			try {
				// Test 19: Toggle Visibility
				console.log("Test 19: Toggle Visibility");
				const originalVisibility = decimalControl.Visible;
				setTimeout(() => {
					decimalControl.Visible = false;
					console.log(`  ✓ Decimal field hidden`);
				}, 4000);
				setTimeout(() => {
					decimalControl.Visible = true;
					console.log(`  ✓ Decimal field shown again`);
				}, 5000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 19 Error:", error.message);
			}

			try {
				// Test 20: Toggle Disabled State
				console.log("Test 20: Toggle Disabled State");
				const originalDisabled = decimalControl.Disabled;
				setTimeout(() => {
					decimalControl.Disabled = true;
					console.log(`  ✓ Decimal field disabled`);
				}, 5500);
				setTimeout(() => {
					decimalControl.Disabled = false;
					console.log(`  ✓ Decimal field enabled again`);
				}, 6500);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 20 Error:", error.message);
			}

			try {
				// Test 21: Change Label
				console.log("Test 21: Change Label");
				const originalLabel = decimalControl.Label;
				console.log(`  ℹ Original label: "${originalLabel}"`);
				setTimeout(() => {
					decimalControl.Label = "Modified Decimal Label";
					console.log(`  ✓ Label changed to: "Modified Decimal Label"`);
				}, 7000);
				setTimeout(() => {
					decimalControl.Label = originalLabel;
					console.log(`  ↩ Label restored to: "${originalLabel}"`);
				}, 8000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 21 Error:", error.message);
			}

			console.log("╔════════════════════════════════════════════════════════════════╗");
			console.log("║     DECIMAL CONTROL TESTS COMPLETED                            ║");
			console.log("╚════════════════════════════════════════════════════════════════╝");
		}

		/**************************************************************************
		 * TEST: Float (Double) Control - v4_Float Field
		 * Tests all methods and properties for floating-point number controls
		 **************************************************************************/
		async function testFloat() {
			console.log("╔════════════════════════════════════════════════════════════════╗");
			console.log("║     FLOAT (DOUBLE) CONTROL TESTS - v4_Float Field             ║");
			console.log("╚════════════════════════════════════════════════════════════════╝");
			console.log("");

			const floatControl = form.Body.v4_Float;

			try {
				// Test 1: Get Float Value
				console.log("Test 1: Get Float Value");
				const value = floatControl.Value;
				console.log(`  ✓ Current Float Value: ${value}`);
				console.log(`  ℹ Type: ${typeof value}, Is null: ${value === null}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 1 Error:", error.message);
			}

			try {
				// Test 2: Get Control and Attribute Names
				console.log("Test 2: Get Control and Attribute Names");
				const controlName = floatControl.ControlName;
				const attributeName = floatControl.AttributeName;
				console.log(`  ✓ Control Name: ${controlName}`);
				console.log(`  ✓ Attribute Name: ${attributeName}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 2 Error:", error.message);
			}

			try {
				// Test 3: Get Precision (Decimal Places)
				console.log("Test 3: Get Precision (Decimal Places)");
				const precision = floatControl.Precision;
				console.log(`  ✓ Float Precision: ${precision} decimal places`);
				console.log(`  ℹ Float/Double typically allows up to 5 decimal places`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 3 Error:", error.message);
			}

			try {
				// Test 4: Get Min and Max Values
				console.log("Test 4: Get Min and Max Values");
				const minValue = floatControl.Min;
				const maxValue = floatControl.Max;
				console.log(`  ✓ Minimum Value: ${minValue}`);
				console.log(`  ✓ Maximum Value: ${maxValue}`);
				console.log(`  ℹ Valid range: ${minValue} to ${maxValue}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 4 Error:", error.message);
			}

			try {
				// Test 5: Get Control Type
				console.log("Test 5: Get Control Type");
				const controlType = floatControl.ControlType;
				console.log(`  ✓ Control Type: ${controlType}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 5 Error:", error.message);
			}

			try {
				// Test 6: Get Attribute Type
				console.log("Test 6: Get Attribute Type");
				const attributeType = floatControl.AttributeType;
				console.log(`  ✓ Attribute Type: ${attributeType}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 6 Error:", error.message);
			}

			try {
				// Test 7: Get Format
				console.log("Test 7: Get Format");
				const format = floatControl.Format;
				console.log(`  ✓ Format: ${format}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 7 Error:", error.message);
			}

			try {
				// Test 8: Get IsDirty Status
				console.log("Test 8: Get IsDirty Status");
				const isDirty = floatControl.IsDirty;
				console.log(`  ✓ Is Dirty: ${isDirty}`);
				console.log(`  ℹ Indicates if the field value has been modified`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 8 Error:", error.message);
			}

			try {
				// Test 9: Get Visibility Status
				console.log("Test 9: Get Visibility Status");
				const isVisible = floatControl.Visible;
				console.log(`  ✓ Is Visible: ${isVisible}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 9 Error:", error.message);
			}

			try {
				// Test 10: Get Disabled Status
				console.log("Test 10: Get Disabled Status");
				const isDisabled = floatControl.Disabled;
				console.log(`  ✓ Is Disabled: ${isDisabled}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 10 Error:", error.message);
			}

			try {
				// Test 11: Get Label
				console.log("Test 11: Get Label");
				const label = floatControl.Label;
				console.log(`  ✓ Label: "${label}"`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 11 Error:", error.message);
			}

			try {
				// Test 12: Set Float Value with High Precision
				console.log("Test 12: Set Float Value with High Precision");
				const originalValue = floatControl.Value;
				console.log(`  ℹ Original value: ${originalValue}`);
				floatControl.Value = 3.14159265358979;
				console.log(`  ✓ Set float value to: 3.14159265358979 (Pi)`);
				const newValue = floatControl.Value;
				console.log(`  ⚡ Stored value: ${newValue}`);
				console.log(`  ℹ Note: Float maintains precision up to 5 decimal places`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 12 Error:", error.message);
			}

			try {
				// Test 13: Set Scientific Notation Value
				console.log("Test 13: Set Scientific Notation Value");
				floatControl.Value = 1.23e-4;
				console.log(`  ✓ Set scientific notation value: 1.23e-4`);
				const sciValue = floatControl.Value;
				console.log(`  ⚡ Current value: ${sciValue}`);
				console.log(`  ℹ Equivalent to: 0.000123`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 13 Error:", error.message);
			}

			try {
				// Test 14: Set Large Float Value
				console.log("Test 14: Set Large Float Value");
				floatControl.Value = 9999999.99999;
				console.log(`  ✓ Set large float value to: 9999999.99999`);
				const largeValue = floatControl.Value;
				console.log(`  ⚡ Current value: ${largeValue}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 14 Error:", error.message);
			}

			try {
				// Test 15: Set Negative Float Value
				console.log("Test 15: Set Negative Float Value");
				floatControl.Value = -273.15;
				console.log(`  ✓ Set negative float value to: -273.15 (absolute zero in Celsius)`);
				const negValue = floatControl.Value;
				console.log(`  ⚡ Current value: ${negValue}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 15 Error:", error.message);
			}

			try {
				// Test 16: Set Zero Value
				console.log("Test 16: Set Zero Value");
				floatControl.Value = 0.0;
				console.log(`  ✓ Set float value to: 0.0`);
				const zeroValue = floatControl.Value;
				console.log(`  ⚡ Current value: ${zeroValue}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 16 Error:", error.message);
			}

			try {
				// Test 17: Clear Value (Set to Null)
				console.log("Test 17: Clear Value (Set to Null)");
				floatControl.Value = /** @type {any} */ (null);
				console.log(`  ✓ Cleared float value (set to null)`);
				const clearedValue = floatControl.Value;
				console.log(`  ⚡ Current value: ${clearedValue}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 17 Error:", error.message);
			}

			try {
				// Test 18: Set Precision (Dynamic Change)
				console.log("Test 18: Set Precision (Dynamic Change)");
				const originalPrecision = floatControl.Precision;
				console.log(`  ℹ Original precision: ${originalPrecision}`);
				floatControl.Value = 123.456789;
				console.log(`  ℹ Set value to: 123.456789`);
				floatControl.Precision = 2;
				console.log(`  ✓ Changed precision to: 2 decimal places`);
				const valuePrecision2 = floatControl.Value;
				console.log(`  ⚡ Value with 2 decimals: ${valuePrecision2}`);
				floatControl.Precision = 1;
				console.log(`  ✓ Changed precision to: 1 decimal places`);
				const valuePrecision1 = floatControl.Value;
				console.log(`  ⚡ Value with 1 decimals: ${valuePrecision1}`);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 18 Error:", error.message);
			}

			try {
				// Test 19: Add Notification
				console.log("Test 19: Add Notification");
				floatControl.AddNotification({
					messages: ["Please enter a valid floating-point number"],
					notificationLevel: OptionSet.FieldNotificationLevel.Error,
					uniqueId: "float_error_notification"
				});
				console.log(`  ✓ Error notification added to float field`);
				console.log(`  ℹ Check the UI for red 'X' icon next to the field`);
				// Clear notification after delay
				setTimeout(() => {
					floatControl.ClearNotification("float_error_notification");
					console.log(`  ↩ Notification cleared`);
				}, 3000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 19 Error:", error.message);
			}

			try {
				// Test 20: Set Focus
				console.log("Test 20: Set Focus");
				setTimeout(() => {
					floatControl.Focus();
					console.log(`  ✓ Focus set on float field`);
					console.log(`  ℹ The float field should be highlighted/active`);
				}, 3500);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 20 Error:", error.message);
			}

			try {
				// Test 21: Toggle Visibility
				console.log("Test 21: Toggle Visibility");
				const originalVisibility = floatControl.Visible;
				setTimeout(() => {
					floatControl.Visible = false;
					console.log(`  ✓ Float field hidden`);
				}, 4000);
				setTimeout(() => {
					floatControl.Visible = true;
					console.log(`  ✓ Float field shown again`);
				}, 5000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 21 Error:", error.message);
			}

			try {
				// Test 22: Toggle Disabled State
				console.log("Test 22: Toggle Disabled State");
				const originalDisabled = floatControl.Disabled;
				setTimeout(() => {
					floatControl.Disabled = true;
					console.log(`  ✓ Float field disabled`);
				}, 5500);
				setTimeout(() => {
					floatControl.Disabled = false;
					console.log(`  ✓ Float field enabled again`);
				}, 6500);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 22 Error:", error.message);
			}

			try {
				// Test 23: Change Label
				console.log("Test 23: Change Label");
				const originalLabel = floatControl.Label;
				console.log(`  ℹ Original label: "${originalLabel}"`);
				setTimeout(() => {
					floatControl.Label = "Modified Float Label";
					console.log(`  ✓ Label changed to: "Modified Float Label"`);
				}, 7000);
				setTimeout(() => {
					floatControl.Label = originalLabel;
					console.log(`  ↩ Label restored to: "${originalLabel}"`);
				}, 8000);
				console.log("");
			} catch (/** @type {any} */ error) {
				console.error("✗ Test 23 Error:", error.message);
			}

			console.log("╔════════════════════════════════════════════════════════════════╗");
			console.log("║     FLOAT (DOUBLE) CONTROL TESTS COMPLETED                     ║");
			console.log("╚════════════════════════════════════════════════════════════════╝");
		}

		/**************************************************************************
		 * TEST: DateTime Control (CreatedOn field - Read-only system field)
		 * Tests comprehensive DateTime control functionality including:
		 * - ShowTime property (get/set)
		 * - Date value operations (get/set)
		 * - Date component methods (getFullYear, getMonth, getDate)
		 * - Time component methods (getHours, getMinutes, getSeconds)
		 * - Date formatting and manipulation
		 * - Time zone handling (UTC vs local)
		 * - UI interactions (visibility, label, notifications)
		 *
		 * Note: CreatedOn is a read-only system field that stores when the record was created
		 * Uses UTC date/time with "User Local" behavior (timezone adjusted for display)
		 **************************************************************************/
		async function testDateTime() {
			console.log("╔════════════════════════════════════════════════════════════════╗");
			console.log("║         DATETIME CONTROL TESTS (CreatedOn Field)              ║");
			console.log("╚════════════════════════════════════════════════════════════════╝");

			try {
				// Get the DateTime control reference
				const dateTimeControl = form.Body.CreatedOn;

				// Test 1: Get current DateTime value
				console.log("\n📋 Test 1: Get DateTime Value");
				const currentValue = dateTimeControl.Value;
				if (currentValue) {
					console.log("  ✓ Current DateTime value:", currentValue);
					console.log("  ℹ Type:", typeof currentValue);
					console.log("  ℹ Is Date object:", currentValue instanceof Date);
					console.log("  ℹ ISO String:", currentValue.toISOString());
					console.log("  ℹ UTC String:", currentValue.toUTCString());
					console.log("  ℹ Local String:", currentValue.toString());
				} else {
					console.log("  ℹ DateTime value is null (record not yet created)");
				}

				// Test 2: Get control name
				console.log("\n📋 Test 2: Get Control Name");
				const controlName = dateTimeControl.ControlName;
				console.log("  ✓ Control Name:", controlName);

				// Test 3: Get attribute name
				console.log("\n📋 Test 3: Get Attribute Name");
				const attributeName = dateTimeControl.Attribute.Name;
				console.log("  ✓ Attribute Name:", attributeName);

				// Test 4: Get ShowTime property (initial state)
				console.log("\n📋 Test 4: Get ShowTime Property");
				const showTime = dateTimeControl.ShowTime;
				console.log("  ✓ ShowTime:", showTime);
				console.log("  ℹ If true: displays date and time");
				console.log("  ℹ If false: displays date only");

				// Test 5: Get control type
				console.log("\n📋 Test 5: Get Control Type");
				const controlType = dateTimeControl.ControlType;
				console.log("  ✓ Control Type:", controlType);
				console.log("  ℹ Expected: 'standard' for DateTime control");

				// Test 6: Get attribute type
				console.log("\n📋 Test 6: Get Attribute Type");
				const attributeType = dateTimeControl.Attribute.Type;
				console.log("  ✓ Attribute Type:", attributeType);
				console.log("  ℹ Expected: 'datetime' for DateTime fields");

				// Test 7: Get format
				console.log("\n📋 Test 7: Get Format");
				const format = dateTimeControl.Attribute.Format;
				console.log("  ✓ Format:", format);
				console.log("  ℹ Possible values: 'date' (date only) or 'datetime' (date and time)");

				// Test 8: Extract date components (using UTC methods)
				console.log("\n📋 Test 8: Extract Date Components (UTC)");
				if (currentValue) {
					const year = currentValue.getUTCFullYear();
					const month = currentValue.getUTCMonth() + 1; // 0-indexed, so add 1
					const day = currentValue.getUTCDate();
					const dayOfWeek = currentValue.getUTCDay(); // 0=Sunday, 6=Saturday
					const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
					console.log("  ✓ UTC Year:", year);
					console.log("  ✓ UTC Month:", month);
					console.log("  ✓ UTC Day:", day);
					console.log("  ✓ UTC Day of Week:", dayOfWeek, `(${dayNames[dayOfWeek]})`);
				}

				// Test 9: Extract time components (using UTC methods)
				console.log("\n📋 Test 9: Extract Time Components (UTC)");
				if (currentValue) {
					const hours = currentValue.getUTCHours();
					const minutes = currentValue.getUTCMinutes();
					const seconds = currentValue.getUTCSeconds();
					const milliseconds = currentValue.getUTCMilliseconds();
					console.log("  ✓ UTC Hours:", hours);
					console.log("  ✓ UTC Minutes:", minutes);
					console.log("  ✓ UTC Seconds:", seconds);
					console.log("  ✓ UTC Milliseconds:", milliseconds);
					console.log(`  ℹ Formatted time: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
				}

				// Test 10: Extract date components (using local methods)
				console.log("\n📋 Test 10: Extract Date Components (Local Time Zone)");
				if (currentValue) {
					const year = currentValue.getFullYear();
					const month = currentValue.getMonth() + 1;
					const day = currentValue.getDate();
					const dayOfWeek = currentValue.getDay();
					const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
					console.log("  ✓ Local Year:", year);
					console.log("  ✓ Local Month:", month);
					console.log("  ✓ Local Day:", day);
					console.log("  ✓ Local Day of Week:", dayOfWeek, `(${dayNames[dayOfWeek]})`);
				}

				// Test 11: Extract time components (using local methods)
				console.log("\n📋 Test 11: Extract Time Components (Local Time Zone)");
				if (currentValue) {
					const hours = currentValue.getHours();
					const minutes = currentValue.getMinutes();
					const seconds = currentValue.getSeconds();
					const milliseconds = currentValue.getMilliseconds();
					console.log("  ✓ Local Hours:", hours);
					console.log("  ✓ Local Minutes:", minutes);
					console.log("  ✓ Local Seconds:", seconds);
					console.log("  ✓ Local Milliseconds:", milliseconds);
					console.log(`  ℹ Formatted time: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
				}

				// Test 12: Get time zone offset
				console.log("\n📋 Test 12: Get Time Zone Offset");
				if (currentValue) {
					const timezoneOffset = currentValue.getTimezoneOffset();
					const offsetHours = Math.abs(Math.floor(timezoneOffset / 60));
					const offsetMinutes = Math.abs(timezoneOffset % 60);
					const offsetSign = timezoneOffset > 0 ? '-' : '+';
					console.log("  ✓ Time Zone Offset (minutes):", timezoneOffset);
					console.log(`  ℹ UTC${offsetSign}${offsetHours.toString().padStart(2, '0')}:${offsetMinutes.toString().padStart(2, '0')}`);
					console.log("  ℹ Positive offset means local time is behind UTC");
					console.log("  ℹ Negative offset means local time is ahead of UTC");
				}

				// Test 13: Check if field is required
				console.log("\n📋 Test 13: Check Required Level");
				const requiredLevel = dateTimeControl.Attribute.RequiredLevel;
				console.log("  ✓ Required Level:", requiredLevel);
				console.log("  ℹ 'none' = optional, 'required' = mandatory, 'recommended' = suggested");

				// Test 14: Check if field is read-only
				console.log("\n📋 Test 14: Check Read-Only State");
				const isReadOnly = dateTimeControl.Attribute.IsReadOnly;
				console.log("  ✓ Is Read-Only:", isReadOnly);
				console.log("  ℹ CreatedOn is typically read-only (system field)");

				// Test 15: Get isDirty status
				console.log("\n📋 Test 15: Get isDirty Status");
				const isDirty = dateTimeControl.Attribute.IsDirty;
				console.log("  ✓ Is Dirty:", isDirty);
				console.log("  ℹ Indicates if value has been modified since form load");

				// Test 16: Get visibility state
				console.log("\n📋 Test 16: Get Visibility State");
				const isVisible = dateTimeControl.Visible;
				console.log("  ✓ Is Visible:", isVisible);

				// Test 17: Get disabled state
				console.log("\n📋 Test 17: Get Disabled State");
				const isDisabled = dateTimeControl.Disabled;
				console.log("  ✓ Is Disabled:", isDisabled);

				// Test 18: Get label
				console.log("\n📋 Test 18: Get Label");
				const label = dateTimeControl.Label;
				console.log("  ✓ Label:", label);

				// Test 19: Calculate time since creation (if value exists)
				console.log("\n📋 Test 19: Calculate Time Since Creation");
				if (currentValue) {
					const now = new Date();
					const diffMs = now.getTime() - currentValue.getTime();
					const diffSeconds = Math.floor(diffMs / 1000);
					const diffMinutes = Math.floor(diffSeconds / 60);
					const diffHours = Math.floor(diffMinutes / 60);
					const diffDays = Math.floor(diffHours / 24);
					console.log("  ✓ Time since creation:");
					console.log(`    ℹ ${diffDays} days, ${diffHours % 24} hours, ${diffMinutes % 60} minutes, ${diffSeconds % 60} seconds`);
					console.log(`    ℹ Total milliseconds: ${diffMs}`);
				}

				// Test 20: Set ShowTime to false (hide time portion)
				console.log("\n⚡ Test 20: Set ShowTime to False (Show Date Only)");
				console.log("  ℹ This will hide the time portion in the UI");
				dateTimeControl.ShowTime = false;
				console.log("  ✓ ShowTime set to: false");
				console.log("  ℹ Control now displays date only (time hidden)");

				// Test 21: Set ShowTime to true (show time portion)
				console.log("\n⚡ Test 21: Set ShowTime to True (Show Date and Time)");
				setTimeout(() => {
					try {
						console.log("  ℹ Restoring ShowTime to original state");
						dateTimeControl.ShowTime = true;
						console.log("  ✓ ShowTime set to: true");
						console.log("  ℹ Control now displays both date and time");
					} catch (/** @type {any} */ error) {
						console.error("  ✗ Error setting ShowTime:", error.message);
					}
				}, 1000);

				// Test 22: Add notification to control
				console.log("\n⚡ Test 22: Add Notification");
				setTimeout(() => {
					try {
						const uniqueId = "dateTimeNotification_" + Date.now();
						dateTimeControl.AddNotification({
							uniqueId: uniqueId,
							messages: ["This is a read-only system field that stores the record creation date/time"],
							notificationLevel: OptionSet.FieldNotificationLevel.Recommendation
						});
						console.log("  ✓ Notification added with ID:", uniqueId);
						console.log("  ℹ Check the form UI to see the notification");
					} catch (/** @type {any} */ error) {
						console.error("  ✗ Error adding notification:", error.message);
					}
				}, 2000);

				// Test 23: Clear notification
				console.log("\n⚡ Test 23: Clear Notification");
				setTimeout(() => {
					try {
						dateTimeControl.ClearNotification("dateTimeNotification_" + Date.now());
						console.log("  ✓ Notification cleared");
					} catch (/** @type {any} */ error) {
						console.error("  ✗ Error clearing notification:", error.message);
					}
				}, 4000);

				// Test 24: Set focus to control
				console.log("\n⚡ Test 24: Set Focus to Control");
				setTimeout(() => {
					try {
						dateTimeControl.Focus();
						console.log("  ✓ Focus set to DateTime control");
						console.log("  ℹ Check the form UI - cursor should be in this field");
					} catch (/** @type {any} */ error) {
						console.error("  ✗ Error setting focus:", error.message);
					}
				}, 5000);

				// Test 25: Toggle visibility
				console.log("\n⚡ Test 25: Toggle Visibility (Hide then Show)");
				setTimeout(() => {
					try {
						dateTimeControl.Visible = false;
						console.log("  ✓ Control hidden");
					} catch (/** @type {any} */ error) {
						console.error("  ✗ Error hiding control:", error.message);
					}
				}, 6000);

				setTimeout(() => {
					try {
						dateTimeControl.Visible = true;
						console.log("  ✓ Control shown again");
					} catch (/** @type {any} */ error) {
						console.error("  ✗ Error showing control:", error.message);
					}
				}, 7000);

				// Test 26: Change label
				console.log("\n⚡ Test 26: Change Label");
				setTimeout(() => {
					try {
						const originalLabel = dateTimeControl.Label;
						dateTimeControl.Label = "Record Created (Test Label)";
						console.log("  ✓ Label changed to: 'Record Created (Test Label)'");
						console.log("  ℹ Original label:", originalLabel);
					} catch (/** @type {any} */ error) {
						console.error("  ✗ Error changing label:", error.message);
					}
				}, 8000);

				// Test 27: Restore original label
				setTimeout(() => {
					try {
						dateTimeControl.Label = "Created On";
						console.log("  ✓ Label restored to: 'Created On'");
					} catch (/** @type {any} */ error) {
						console.error("  ✗ Error restoring label:", error.message);
					}
				}, 9000);

				console.log("\n╔════════════════════════════════════════════════════════════════╗");
				console.log("║     DATETIME CONTROL TESTS COMPLETED                           ║");
				console.log("╚════════════════════════════════════════════════════════════════╝");
				console.log("  ✓ Total Tests: 27");
				console.log("  ℹ Tests 1-19: Read operations and date/time extraction");
				console.log("  ℹ Tests 20-27: UI operations (ShowTime, notifications, focus, visibility, label)");
				console.log("  ℹ Execution time: ~10 seconds (includes UI validation delays)");
				console.log("\n  ℹ Key Features Tested:");
				console.log("    • ShowTime property for date/time display control");
				console.log("    • Date component extraction (year, month, day, day of week)");
				console.log("    • Time component extraction (hours, minutes, seconds, milliseconds)");
				console.log("    • UTC vs Local time zone handling");
				console.log("    • Time zone offset calculation");
				console.log("    • Time duration calculations");
				console.log("    • Date formatting (ISO, UTC, local)");
				console.log("    • Read-only system field behavior");
				console.log("    • UI interactions (notifications, focus, visibility, labels)");

			} catch (/** @type {any} */ error) {
				console.error("✗ Error in DateTime control tests:", error.message);
				console.error("Stack trace:", error.stack);
			}
		}

	}
	//END ON LOAD ==========================================================
	//BEGIN ON CHANGE ======================================================

	//END ON CHANGE ========================================================
	//BEGIN PRE SEARCH =====================================================

	//END PRE SEARCH =======================================================
	//BEGIN OTHERS =========================================================

	//END OTHERS ===========================================================
	return {
		OnLoad: onLoad
	};
})();