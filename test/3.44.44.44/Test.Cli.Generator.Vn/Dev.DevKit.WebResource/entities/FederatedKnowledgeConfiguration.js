//@ts-check
///<reference path="FederatedKnowledgeConfiguration.d.ts" />
"use strict";
var formFederatedKnowledgeConfiguration_main_form = (function () {
	"use strict";
	/** @type DevKit.FormFederatedKnowledgeConfiguration_main_form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormFederatedKnowledgeConfiguration_main_form(executionContext);
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