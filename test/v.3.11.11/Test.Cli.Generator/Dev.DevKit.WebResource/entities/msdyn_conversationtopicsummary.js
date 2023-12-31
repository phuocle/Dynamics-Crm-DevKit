//@ts-check
///<reference path="msdyn_conversationtopicsummary.d.ts" />
"use strict";
var formmsdyn_conversationtopicsummary_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_conversationtopicsummary_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_conversationtopicsummary_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();