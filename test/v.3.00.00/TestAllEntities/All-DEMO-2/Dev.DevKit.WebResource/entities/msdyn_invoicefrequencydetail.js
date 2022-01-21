//@ts-check
///<reference path="msdyn_invoicefrequencydetail.d.ts" />
"use strict";
var formmsdyn_invoicefrequencydetail_Project_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_invoicefrequencydetail_Project_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_invoicefrequencydetail_Project_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();