//@ts-check
///<reference path="SyncError.d.ts" />
"use strict";

//var formSync_Error = (function () {
//	"use strict";
//	/** @type {DevKit.FormSync_Error} */
//	let form;
//	/** @param {any} executionContext */
//	async function onLoad(executionContext) {
//		form = new DevKit.FormSync_Error(executionContext);
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