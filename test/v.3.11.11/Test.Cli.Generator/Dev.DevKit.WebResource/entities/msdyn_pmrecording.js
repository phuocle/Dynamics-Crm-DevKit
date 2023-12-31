//@ts-check
///<reference path="msdyn_pmrecording.d.ts" />
"use strict";
var formmsdyn_pmrecording_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_pmrecording_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_pmrecording_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();