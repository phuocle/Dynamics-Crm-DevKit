//@ts-check
///<reference path="SLAKPIInstance.d.ts" />
"use strict";
var formSLA_KPI_Instance = (function () {
	"use strict";
	/** @type DevKit.FormSLA_KPI_Instance */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSLA_KPI_Instance(executionContext);
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