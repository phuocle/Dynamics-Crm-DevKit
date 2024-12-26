//@ts-check
///<reference path="ConvertRule.d.ts" />
"use strict";
var formQuy_tac_tao_va_cap_nhat_ban_ghi = (function () {
	"use strict";
	/** @type DevKit.FormQuy_tac_tao_va_cap_nhat_ban_ghi */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormQuy_tac_tao_va_cap_nhat_ban_ghi(executionContext);
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