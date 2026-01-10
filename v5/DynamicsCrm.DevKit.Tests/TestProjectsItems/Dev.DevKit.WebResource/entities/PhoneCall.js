//@ts-check
///<reference path="PhoneCall.d.ts" />
"use strict";
var formPhone_Call = (function () {
	"use strict";
	/** @type {DevKit.FormPhone_Call} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormPhone_Call(executionContext);
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
var formPhone_Call_for_Interactive_experience = (function () {
	"use strict";
	/** @type {DevKit.FormPhone_Call_for_Interactive_experience} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormPhone_Call_for_Interactive_experience(executionContext);
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
var formPhone_call_quick_create_form = (function () {
	"use strict";
	/** @type {DevKit.FormPhone_call_quick_create_form} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormPhone_call_quick_create_form(executionContext);
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