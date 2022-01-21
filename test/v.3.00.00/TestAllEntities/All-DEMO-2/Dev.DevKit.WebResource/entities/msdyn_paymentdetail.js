//@ts-check
///<reference path="msdyn_paymentdetail.d.ts" />
"use strict";
var formmsdyn_paymentdetail_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_paymentdetail_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_paymentdetail_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();