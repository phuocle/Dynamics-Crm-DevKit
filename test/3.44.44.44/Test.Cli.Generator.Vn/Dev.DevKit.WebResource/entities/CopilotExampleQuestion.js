//@ts-check
///<reference path="CopilotExampleQuestion.d.ts" />
"use strict";
var formCopilotExampleQuestion_main_form = (function () {
	"use strict";
	/** @type DevKit.FormCopilotExampleQuestion_main_form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCopilotExampleQuestion_main_form(executionContext);
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
var formCopilotExampleQuestion_Information = (function () {
	"use strict";
	/** @type DevKit.FormCopilotExampleQuestion_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCopilotExampleQuestion_Information(executionContext);
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