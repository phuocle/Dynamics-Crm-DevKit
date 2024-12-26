//@ts-check
///<reference path="LanguageLocale.d.ts" />
"use strict";
var formBan_dia_Ngon_ngu = (function () {
	"use strict";
	/** @type DevKit.FormBan_dia_Ngon_ngu */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBan_dia_Ngon_ngu(executionContext);
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