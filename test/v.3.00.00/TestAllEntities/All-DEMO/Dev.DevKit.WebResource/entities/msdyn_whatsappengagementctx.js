//@ts-check
///<reference path="msdyn_whatsappengagementctx.d.ts" />
"use strict";
var formmsdyn_whatsappengagementctx_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_whatsappengagementctx_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_whatsappengagementctx_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();