//@ts-check
///<reference path="EmailSignature.d.ts" />
"use strict";
var formEmail_signature = (function () {
	"use strict";
	/** @type DevKit.FormEmail_signature */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormEmail_signature(executionContext);
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