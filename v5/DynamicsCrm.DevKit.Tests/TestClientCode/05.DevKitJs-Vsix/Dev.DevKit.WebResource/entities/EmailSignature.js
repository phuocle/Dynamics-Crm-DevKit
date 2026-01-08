//@ts-check
///<reference path="EmailSignature.d.ts" />
"use strict";

//var formEmail_signature = (function () {
//	"use strict";
//	/** @type {DevKit.FormEmail_signature} */
//	let form;
//	/** @param {any} executionContext */
//	async function onLoad(executionContext) {
//		form = new DevKit.FormEmail_signature(executionContext);
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