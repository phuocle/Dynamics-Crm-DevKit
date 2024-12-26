//@ts-check
///<reference path="msdyn_slakpi.d.ts" />
"use strict";
var formmsdyn_slakpi_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_slakpi_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_slakpi_Information(executionContext);
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
var formSLA_KPI_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormSLA_KPI_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSLA_KPI_Quick_Create(executionContext);
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