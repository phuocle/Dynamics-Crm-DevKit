//@ts-check
///<reference path="Account.d.ts" />
"use strict";
var formAccount = (function () {
	"use strict";
	/** @type {DevKit.FormAccount} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount(executionContext);
		registerEvents();
		form.UiAddLoaded(UiAddLoaded);
		TestTyping();
	}
	function TestTyping() {
		form.AddOnPostSave(AddOnPostSave);
		form.AddOnSave(AddOnSave);
		form.Attributes.forEach((item, index) => { });
		form.ClearFormNotification("ABC");
		form.Close();
		form.Controls.forEach((item, index) => { });
		form.DataAddOnLoad(DataAddOnLoad);
		var a1 = form.DataIsDirty;
		var a2 = form.DataIsValid;
		form.DataRemoveOnLoad(DataAddOnLoad);
		var a3 = form.DataXml;
		var a4 = form.EntityId;
		var a5 = form.EntityIsDirty;
		var a6 = form.EntityIsValid
		var a7 = form.EntityName;
		var a8 = form.EntityReference;
		var a81 = form.EntityReference.entityType;
		var a82 = form.EntityReference.id;
		var a83 = form.EntityReference.name;
		var a9 = form.FormId;
		var a10 = form.FormIsVisible("ABC");
		var a11 = form.FormLabel;
		form.FormNavigateToFormId("ABC");
		form.FormNavigateToFormLabel("ABC");
		form.FormSetVisible("ABC", false);
		var a12 = form.FormType;
		var a13 = form.PrimaryAttributeValue;
		form.Refresh();
		form.RefreshRibbon();
		form.RemoveOnPostSave(AddOnPostSave);
		form.Save();
		form.SetFormEntityName("ABC");
		form.SetFormNotification("ABC", OptionSet.FormNotificationLevel.Info, "ABC");
		form.UiAddLoaded(UiAddLoaded);
		form.UiRemoveOnLoad(UiAddLoaded);
		var a14 = form.ViewPortHeight;
		var a15 = form.ViewPortWidth;
		function AddOnPostSave() {
		}
		function AddOnSave() {
		}
		function DataAddOnLoad() {

		}
	}
	function registerEvents() {
		if (form.ExecutionContext.IsInitialLoad()) {
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
var formAccount_DevKitV4 = (function () {
	"use strict";
	/** @type {DevKit.FormAccount_DevKitV4} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount_DevKitV4(executionContext);
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
	/** @type {DevKit.FormAccount_for_Interactive_experience} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount_for_Interactive_experience(executionContext);
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
	/** @type {DevKit.FormAccount_Quick_Create} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount_Quick_Create(executionContext);
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
	/** @type {DevKit.FormAccount_Information} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount_Information(executionContext);
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