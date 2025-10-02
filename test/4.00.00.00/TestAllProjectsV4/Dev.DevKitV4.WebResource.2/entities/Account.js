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
		if (form && form.ExecutionContext.IsInitialLoad()) {

		}
	}
	//BEGIN ON LOAD ========================================================
	/** @param {any} executionContext */
	async function UiAddLoaded(executionContext) {
		await loadAccount();
		async function loadAccount()
		{
			// Using FetchXML - entity name is auto-extracted
			var fetchXml = "?fetchXml=<fetch><entity name='account'><attribute name='name'/></entity></fetch>";
            var rows = await form.WebApi.RetrieveRecords(DevKitV4.AccountApi, fetchXml);
			// Using OData - must provide entity name
			// var rows = await form.WebApi.RetrieveRecords(DevKitV4.AccountApi, 'account', '?$select=name&$top=3');
			var row = await form.WebApi.RetrieveRecord(DevKitV4.AccountApi, form.EntityName, form.EntityId);
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