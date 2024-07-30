//@ts-check
///<reference path="TranslationProcess.d.ts" />
"use strict";
var formTranslationProcess = (function () {
	"use strict";
	/** @type DevKit.FormTranslationProcess */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTranslationProcess(executionContext);
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