//@ts-check
///<reference path="Account.d.ts" />
"use strict";
var formAccount = (function () {
	"use strict";
	/** @type {DevKit.FormAccount_DevKitV4} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount_DevKitV4(executionContext);
		registerEvents();
		form.UiAddLoaded(UiAddLoaded);
	}
	function registerEvents() {
		if (form.ExecutionContext.IsInitialLoad()) {
		}
	}
	//BEGIN ON LOAD ========================================================
	/** @param {any} executionContext */
	async function UiAddLoaded(executionContext) {
		setTimeout(async () => {
			console.clear();

			// Test 0: IControl Interface (base for all controls)
			TestControl();

		}, 1000);
	}

	function TestControl() {
		//code test control
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