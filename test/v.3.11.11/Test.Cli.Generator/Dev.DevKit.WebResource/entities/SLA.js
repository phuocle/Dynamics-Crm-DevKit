//@ts-check
///<reference path="SLA.d.ts" />
"use strict";
var formSLA = (function () {
	"use strict";
	/** @type DevKit.FormSLA */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSLA(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();