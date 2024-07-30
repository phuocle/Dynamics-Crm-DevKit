//@ts-check
///<reference path="Theme.d.ts" />
"use strict";
var formChu_de = (function () {
	"use strict";
	/** @type DevKit.FormChu_de */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormChu_de(executionContext);
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