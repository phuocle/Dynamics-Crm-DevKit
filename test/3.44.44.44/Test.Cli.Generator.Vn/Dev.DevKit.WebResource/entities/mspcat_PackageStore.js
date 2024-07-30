//@ts-check
///<reference path="mspcat_PackageStore.d.ts" />
"use strict";
var formGoi = (function () {
	"use strict";
	/** @type DevKit.FormGoi */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormGoi(executionContext);
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