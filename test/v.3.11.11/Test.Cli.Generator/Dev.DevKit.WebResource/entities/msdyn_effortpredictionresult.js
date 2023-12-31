//@ts-check
///<reference path="msdyn_effortpredictionresult.d.ts" />
"use strict";
var formEffort_estimate_results = (function () {
	"use strict";
	/** @type DevKit.FormEffort_estimate_results */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormEffort_estimate_results(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();