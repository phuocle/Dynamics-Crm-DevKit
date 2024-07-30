//@ts-check
///<reference path="Position.d.ts" />
"use strict";
var formVi_tri = (function () {
	"use strict";
	/** @type DevKit.FormVi_tri */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormVi_tri(executionContext);
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