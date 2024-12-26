//@ts-check
///<reference path="msdyn_lineengagementctx.d.ts" />
"use strict";
var formmsdyn_lineengagementctx_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_lineengagementctx_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_lineengagementctx_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();