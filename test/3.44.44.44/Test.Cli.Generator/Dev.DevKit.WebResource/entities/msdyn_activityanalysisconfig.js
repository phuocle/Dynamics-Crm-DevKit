﻿//@ts-check
///<reference path="msdyn_activityanalysisconfig.d.ts" />
"use strict";
var formmsdyn_activityanalysisconfig_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_activityanalysisconfig_Information */
	var form = null;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_activityanalysisconfig_Information(executionContext);
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
var formmsdyn_activityanalysisconfig_Information2 = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_activityanalysisconfig_Information2 */
	var form = null;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_activityanalysisconfig_Information2(executionContext);
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