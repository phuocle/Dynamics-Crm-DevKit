//@ts-check
///<reference path="PartnerApplication.d.ts" />
"use strict";
var formBieu_mau_chinh_ung_dung_doi_tac = (function () {
	"use strict";
	/** @type DevKit.FormBieu_mau_chinh_ung_dung_doi_tac */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBieu_mau_chinh_ung_dung_doi_tac(executionContext);
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