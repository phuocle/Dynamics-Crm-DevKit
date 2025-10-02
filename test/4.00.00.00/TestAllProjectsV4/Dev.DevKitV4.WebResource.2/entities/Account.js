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
		await testRetrieveRecord();
		await testRetrieveRecords();

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
var formAccount_for_Interactive_experience = (function () {
	"use strict";
	/** @type {DevKitV4.FormAccount_for_Interactive_experience} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKitV4.FormAccount_for_Interactive_experience(executionContext);
		registerEvents();
		form.UiAddLoaded(UiAddLoaded);
	}
	function registerEvents() {
		if (form && form.ExecutionContext.IsInitialLoad()) {
		}
	}
	//BEGIN ON LOAD ========================================================
	/** @param {any} executionContext */
	async function UiAddLoaded(executionContext) {
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
var formAccount_Quick_Create = (function () {
	"use strict";
	/** @type {DevKitV4.FormAccount_Quick_Create} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKitV4.FormAccount_Quick_Create(executionContext);
		registerEvents();
		form.UiAddLoaded(UiAddLoaded);
	}
	function registerEvents() {
		if (form && form.ExecutionContext.IsInitialLoad()) {
		}
	}
	//BEGIN ON LOAD ========================================================
	/** @param {any} executionContext */
	async function UiAddLoaded(executionContext) {
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
var formAccount_Information = (function () {
	"use strict";
	/** @type {DevKitV4.FormAccount_Information} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKitV4.FormAccount_Information(executionContext);
		registerEvents();
		form.UiAddLoaded(UiAddLoaded);
	}
	function registerEvents() {
		if (form && form.ExecutionContext.IsInitialLoad()) {
		}
	}
	//BEGIN ON LOAD ========================================================
	/** @param {any} executionContext */
	async function UiAddLoaded(executionContext) {
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