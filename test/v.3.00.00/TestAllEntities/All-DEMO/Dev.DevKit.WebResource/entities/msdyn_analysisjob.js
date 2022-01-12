//@ts-check
///<reference path="msdyn_analysisjob.d.ts" />
"use strict";
var formmsdyn_analysisjob_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_analysisjob_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_analysisjob_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();