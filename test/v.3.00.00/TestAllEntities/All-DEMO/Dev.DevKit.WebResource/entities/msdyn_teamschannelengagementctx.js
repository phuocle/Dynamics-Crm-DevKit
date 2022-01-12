//@ts-check
///<reference path="msdyn_teamschannelengagementctx.d.ts" />
"use strict";
var formmsdyn_teamschannelengagementctx_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_teamschannelengagementctx_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_teamschannelengagementctx_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();