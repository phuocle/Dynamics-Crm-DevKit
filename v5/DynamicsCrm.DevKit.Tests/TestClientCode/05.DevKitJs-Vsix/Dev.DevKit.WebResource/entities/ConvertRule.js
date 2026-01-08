//@ts-check
///<reference path="ConvertRule.d.ts" />
"use strict";

//var formRecord_Creation_and_Update_Rule = (function () {
//	"use strict";
//	/** @type {DevKit.FormRecord_Creation_and_Update_Rule} */
//	let form;
//	/** @param {any} executionContext */
//	async function onLoad(executionContext) {
//		form = new DevKit.FormRecord_Creation_and_Update_Rule(executionContext);
//		registerEvents();
//		form.UiAddLoaded(UiAddLoaded);
//	}
//	function registerEvents() {
//		if (form.ExecutionContext.IsInitialLoad()) {
//		}
//	}
//	//BEGIN ON LOAD ========================================================
//	/** @param {any} executionContext */
//	async function UiAddLoaded(executionContext) {
//	}
//	//END ON LOAD ==========================================================
//	//BEGIN ON CHANGE ======================================================
//
//	//END ON CHANGE ========================================================
//	//BEGIN PRE SEARCH =====================================================
//
//	//END PRE SEARCH =======================================================
//	//BEGIN OTHERS =========================================================
//
//	//END OTHERS ===========================================================
//	return {
//		OnLoad: onLoad
//	};
//})();