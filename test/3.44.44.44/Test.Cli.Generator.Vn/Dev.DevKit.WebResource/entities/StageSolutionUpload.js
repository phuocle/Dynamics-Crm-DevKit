﻿//@ts-check
///<reference path="StageSolutionUpload.d.ts" />
"use strict";
var formStageSolutionUpload_Information = (function () {
	"use strict";
	/** @type DevKit.FormStageSolutionUpload_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormStageSolutionUpload_Information(executionContext);
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