//@ts-check
///<reference path="msdyn_casetopicsummary.d.ts" />
"use strict";
var formmsdyn_casetopicsummary_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_casetopicsummary_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_casetopicsummary_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();