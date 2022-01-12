//@ts-check
///<reference path="DataPerformance.d.ts" />
"use strict";
var formDataPerformance_Information = (function () {
	"use strict";
	/** @type DevKit.FormDataPerformance_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormDataPerformance_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();