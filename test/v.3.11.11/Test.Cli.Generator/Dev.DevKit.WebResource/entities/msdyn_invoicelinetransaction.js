//@ts-check
///<reference path="msdyn_invoicelinetransaction.d.ts" />
"use strict";
var formmsdyn_invoicelinetransaction_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_invoicelinetransaction_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_invoicelinetransaction_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_invoicelinetransaction_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_invoicelinetransaction_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_invoicelinetransaction_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();