//@ts-check
///<reference path="MobileOfflineProfile.d.ts" />
"use strict";
var formCau_hinh_Mobile_Offline = (function () {
	"use strict";
	/** @type DevKit.FormCau_hinh_Mobile_Offline */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCau_hinh_Mobile_Offline(executionContext);
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