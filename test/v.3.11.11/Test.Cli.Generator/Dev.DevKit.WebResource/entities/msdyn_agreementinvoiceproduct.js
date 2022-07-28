//@ts-check
///<reference path="msdyn_agreementinvoiceproduct.d.ts" />
"use strict";
var formAgreement_Invoice_Product_Mobile = (function () {
	"use strict";
	/** @type DevKit.FormAgreement_Invoice_Product_Mobile */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAgreement_Invoice_Product_Mobile(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_agreementinvoiceproduct_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_agreementinvoiceproduct_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_agreementinvoiceproduct_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();