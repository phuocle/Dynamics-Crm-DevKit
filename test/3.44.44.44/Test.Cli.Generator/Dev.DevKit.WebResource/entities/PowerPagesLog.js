﻿//@ts-check
///<reference path="PowerPagesLog.d.ts" />
"use strict";
var formPowerPagesLog_Information = (function () {
	"use strict";
	/** @type DevKit.FormPowerPagesLog_Information */
	var form = null;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormPowerPagesLog_Information(executionContext);
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