//@ts-check
///<reference path="msdyn_purchaseordersubstatus.d.ts" />
"use strict";
var formmsdyn_purchaseordersubstatus_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_purchaseordersubstatus_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_purchaseordersubstatus_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();