﻿//@ts-check
///<reference path="LeadToOpportunitySalesProcess.d.ts" />
"use strict";
var formLeadToOpportunitySalesProcesses = (function () {
	"use strict";
	/** @type DevKit.FormLeadToOpportunitySalesProcesses */
	var form = null;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormLeadToOpportunitySalesProcesses(executionContext);
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