//@ts-check
///<reference path="SyncError.d.ts" />
"use strict";
var formLoi_dong_bo = (function () {
	"use strict";
	/** @type DevKit.FormLoi_dong_bo */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormLoi_dong_bo(executionContext);
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