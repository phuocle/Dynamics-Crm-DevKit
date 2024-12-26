//@ts-check
///<reference path="msdyn_rmaproduct.d.ts" />
"use strict";
var formmsdyn_rmaproduct_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_rmaproduct_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_rmaproduct_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();