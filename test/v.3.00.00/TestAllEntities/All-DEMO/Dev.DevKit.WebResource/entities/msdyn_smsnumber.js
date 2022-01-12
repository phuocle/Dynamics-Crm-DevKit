//@ts-check
///<reference path="msdyn_smsnumber.d.ts" />
"use strict";
var formmsdyn_smsnumber_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_smsnumber_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_smsnumber_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();