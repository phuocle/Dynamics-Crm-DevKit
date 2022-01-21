//@ts-check
///<reference path="msdyn_agreementinvoicesetup.d.ts" />
"use strict";
var formAgreement_Invoice_Setup_Mobile = (function () {
	"use strict";
	/** @type DevKit.FormAgreement_Invoice_Setup_Mobile */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAgreement_Invoice_Setup_Mobile(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_agreementinvoicesetup_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_agreementinvoicesetup_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_agreementinvoicesetup_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();