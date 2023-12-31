//@ts-check
///<reference path="Metric.d.ts" />
"use strict";
var formMetric_Information = (function () {
	"use strict";
	/** @type DevKit.FormMetric_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormMetric_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();