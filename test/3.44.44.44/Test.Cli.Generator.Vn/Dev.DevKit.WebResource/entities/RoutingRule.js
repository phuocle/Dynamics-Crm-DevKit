//@ts-check
///<reference path="RoutingRule.d.ts" />
"use strict";
var formBo_quy_tac_dinh_tuyen = (function () {
	"use strict";
	/** @type DevKit.FormBo_quy_tac_dinh_tuyen */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBo_quy_tac_dinh_tuyen(executionContext);
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