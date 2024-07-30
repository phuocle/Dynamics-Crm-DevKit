//@ts-check
///<reference path="mspp_webfile.d.ts" />
"use strict";
var formmspp_webfile_Information = (function () {
	"use strict";
	/** @type DevKit.Formmspp_webfile_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmspp_webfile_Information(executionContext);
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