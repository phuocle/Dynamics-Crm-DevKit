//@ts-check
///<reference path="mspcat_PackageStore.d.ts" />
"use strict";

//var formPackages = (function () {
//	"use strict";
//	/** @type {DevKit.FormPackages} */
//	let form;
//	/** @param {any} executionContext */
//	async function onLoad(executionContext) {
//		form = new DevKit.FormPackages(executionContext);
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