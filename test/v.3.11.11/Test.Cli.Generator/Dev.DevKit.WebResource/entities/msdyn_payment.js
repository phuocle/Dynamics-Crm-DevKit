//@ts-check
///<reference path="msdyn_payment.d.ts" />
"use strict";
var formmsdyn_payment_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_payment_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_payment_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formPayment_Mobile = (function () {
	"use strict";
	/** @type DevKit.FormPayment_Mobile */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPayment_Mobile(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();