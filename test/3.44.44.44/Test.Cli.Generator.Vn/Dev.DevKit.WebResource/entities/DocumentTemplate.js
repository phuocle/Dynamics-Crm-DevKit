//@ts-check
///<reference path="DocumentTemplate.d.ts" />
"use strict";
var formthong_tin = (function () {
	"use strict";
	/** @type DevKit.Formthong_tin */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formthong_tin(executionContext);
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