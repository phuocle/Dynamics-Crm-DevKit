//@ts-check
///<reference path="msdyn_agreementinvoicedate.d.ts" />
"use strict";
var formmsdyn_agreementinvoicedate_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_agreementinvoicedate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_agreementinvoicedate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();