//@ts-check
///<reference path="msdyn_customengagementctx.d.ts" />
"use strict";
var formmsdyn_customengagementctx_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_customengagementctx_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_customengagementctx_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();