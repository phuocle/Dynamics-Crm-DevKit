//@ts-check
///<reference path="msdyn_cdsentityengagementctx.d.ts" />
"use strict";
var formmsdyn_cdsentityengagementctx_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_cdsentityengagementctx_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_cdsentityengagementctx_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();