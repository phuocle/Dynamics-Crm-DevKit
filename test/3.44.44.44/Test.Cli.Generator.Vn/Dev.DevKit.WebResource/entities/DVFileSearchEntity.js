//@ts-check
///<reference path="DVFileSearchEntity.d.ts" />
"use strict";
var formDVFileSearchEntity_main_form = (function () {
	"use strict";
	/** @type DevKit.FormDVFileSearchEntity_main_form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormDVFileSearchEntity_main_form(executionContext);
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