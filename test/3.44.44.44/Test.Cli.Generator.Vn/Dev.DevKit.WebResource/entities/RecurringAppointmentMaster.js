//@ts-check
///<reference path="RecurringAppointmentMaster.d.ts" />
"use strict";
var formCuoc_hen_Lap_lai = (function () {
	"use strict";
	/** @type DevKit.FormCuoc_hen_Lap_lai */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCuoc_hen_Lap_lai(executionContext);
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