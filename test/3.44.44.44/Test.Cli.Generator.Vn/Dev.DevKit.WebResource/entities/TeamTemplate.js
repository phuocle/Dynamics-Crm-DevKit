//@ts-check
///<reference path="TeamTemplate.d.ts" />
"use strict";
var formTeamTemplate = (function () {
	"use strict";
	/** @type DevKit.FormTeamTemplate */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTeamTemplate(executionContext);
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