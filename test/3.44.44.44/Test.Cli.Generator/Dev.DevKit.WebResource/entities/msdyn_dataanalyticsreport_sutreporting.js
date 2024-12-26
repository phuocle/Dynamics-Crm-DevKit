//@ts-check
///<reference path="msdyn_dataanalyticsreport_sutreporting.d.ts" />
"use strict";
var formmsdyn_dataanalyticsreport_sutreporting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_dataanalyticsreport_sutreporting_Information */
	var form = null;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_dataanalyticsreport_sutreporting_Information(executionContext);
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