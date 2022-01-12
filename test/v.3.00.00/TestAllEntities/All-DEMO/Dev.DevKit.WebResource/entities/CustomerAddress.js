//@ts-check
///<reference path="CustomerAddress.d.ts" />
"use strict";
var formCustomerAddress_Information = (function () {
	"use strict";
	/** @type DevKit.FormCustomerAddress_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCustomerAddress_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();