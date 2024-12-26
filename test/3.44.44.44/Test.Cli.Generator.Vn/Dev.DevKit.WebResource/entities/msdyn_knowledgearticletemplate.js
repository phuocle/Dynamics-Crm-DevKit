//@ts-check
///<reference path="msdyn_knowledgearticletemplate.d.ts" />
"use strict";
var formmsdyn_knowledgearticletemplate_Main_Form = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_knowledgearticletemplate_Main_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_knowledgearticletemplate_Main_Form(executionContext);
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