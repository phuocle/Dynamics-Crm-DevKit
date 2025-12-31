//@ts-check
///<reference path="Account.d.ts" />
"use strict";
var formAccount = (function () {
	"use strict";
	/** @type DevKit.FormAccount */
	var form = null;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount(executionContext);
		form.UiAddLoaded(UiAddLoaded);
		registerEvents();
	}
	function registerEvents() {
		if (form.ExecutionContext.IsInitialLoad()) {
		}
	}
	//BEGIN ON LOAD ========================================================
	async function UiAddLoaded(executionContext) {
		form.Body.Name.Disabled = true;
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