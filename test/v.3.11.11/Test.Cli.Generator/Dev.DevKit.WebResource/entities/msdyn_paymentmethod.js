//@ts-check
///<reference path="msdyn_paymentmethod.d.ts" />
"use strict";
var formmsdyn_paymentmethod_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_paymentmethod_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_paymentmethod_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();