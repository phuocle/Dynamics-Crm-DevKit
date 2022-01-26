//@ts-check
///<reference path="msdyn_rmareceipt.d.ts" />
"use strict";
var formRMA_Receipt = (function () {
	"use strict";
	/** @type DevKit.FormRMA_Receipt */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormRMA_Receipt(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();