//@ts-check
///<reference path="msdyn_facebookengagementctx.d.ts" />
"use strict";
var formmsdyn_facebookengagementctx_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_facebookengagementctx_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_facebookengagementctx_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();