//@ts-check
///<reference path="msdyn_kmfederatedsearchconfig.d.ts" />
"use strict";
var formSearch_provider_Main_form = (function () {
	"use strict";
	/** @type DevKit.FormSearch_provider_Main_form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSearch_provider_Main_form(executionContext);
		registerEvents();
		await onLoadData();
	}
	function registerEvents() {
		if (form.ExecutionContext.IsInitialLoad()) {
		}
	}
	//BEGIN ON LOAD ========================================================
	async function onLoadData() {
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