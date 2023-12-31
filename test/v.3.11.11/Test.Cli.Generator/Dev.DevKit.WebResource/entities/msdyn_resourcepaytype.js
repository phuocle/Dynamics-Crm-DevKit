//@ts-check
///<reference path="msdyn_resourcepaytype.d.ts" />
"use strict";
var formmsdyn_resourcepaytype_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_resourcepaytype_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_resourcepaytype_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();