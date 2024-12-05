//@ts-check
///<reference path="msdyncrm_gwennolfeatureconfiguration.d.ts" />
"use strict";
var formmsdyncrm_gwennolfeatureconfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyncrm_gwennolfeatureconfiguration_Information */
	var form = null;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyncrm_gwennolfeatureconfiguration_Information(executionContext);
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