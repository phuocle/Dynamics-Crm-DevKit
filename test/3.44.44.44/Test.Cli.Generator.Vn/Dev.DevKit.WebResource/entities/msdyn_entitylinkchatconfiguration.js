//@ts-check
///<reference path="msdyn_entitylinkchatconfiguration.d.ts" />
"use strict";
var formCau_hinh_cuoc_tro_chuyen_lien_ket_thuc_the = (function () {
	"use strict";
	/** @type DevKit.FormCau_hinh_cuoc_tro_chuyen_lien_ket_thuc_the */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCau_hinh_cuoc_tro_chuyen_lien_ket_thuc_the(executionContext);
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