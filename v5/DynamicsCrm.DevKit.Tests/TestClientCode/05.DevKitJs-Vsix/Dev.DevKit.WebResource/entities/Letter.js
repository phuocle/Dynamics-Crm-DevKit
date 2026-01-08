//@ts-check
///<reference path="Letter.d.ts" />
"use strict";

//var formLetter = (function () {
//	"use strict";
//	/** @type {DevKit.FormLetter} */
//	let form;
//	/** @param {any} executionContext */
//	async function onLoad(executionContext) {
//		form = new DevKit.FormLetter(executionContext);
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