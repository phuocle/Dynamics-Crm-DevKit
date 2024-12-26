//@ts-check
///<reference path="msdyn_solutionhistorydatasource.d.ts" />
"use strict";
var formThong_tin = (function () {
	"use strict";
	/** @type DevKit.FormThong_tin */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormThong_tin(executionContext);
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