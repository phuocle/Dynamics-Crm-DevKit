//@ts-check
///<reference path="msdyn_paymentterm.d.ts" />
"use strict";
var formmsdyn_paymentterm_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_paymentterm_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_paymentterm_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();