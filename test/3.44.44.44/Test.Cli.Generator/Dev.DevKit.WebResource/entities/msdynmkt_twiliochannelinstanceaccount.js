//@ts-check
///<reference path="msdynmkt_twiliochannelinstanceaccount.d.ts" />
"use strict";
var formmsdynmkt_twiliochannelinstanceaccount_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdynmkt_twiliochannelinstanceaccount_Information */
	var form = null;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdynmkt_twiliochannelinstanceaccount_Information(executionContext);
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