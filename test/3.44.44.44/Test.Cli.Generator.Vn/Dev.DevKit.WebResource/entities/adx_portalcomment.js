//@ts-check
///<reference path="adx_portalcomment.d.ts" />
"use strict";
var formPortal_Comment = (function () {
	"use strict";
	/** @type DevKit.FormPortal_Comment */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPortal_Comment(executionContext);
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