//@ts-check
///<reference path="Email.d.ts" />
"use strict";
var formEmail = (function () {
	"use strict";
	/** @type {DevKit.FormEmail} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormEmail(executionContext);
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
var formEmail_for_Interactive_experience = (function () {
	"use strict";
	/** @type {DevKit.FormEmail_for_Interactive_experience} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormEmail_for_Interactive_experience(executionContext);
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
var formEnhanced_Email = (function () {
	"use strict";
	/** @type {DevKit.FormEnhanced_Email} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormEnhanced_Email(executionContext);
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
var formEmail_Wizard = (function () {
	"use strict";
	/** @type {DevKit.FormEmail_Wizard} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormEmail_Wizard(executionContext);
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