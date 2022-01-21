//@ts-check
///<reference path="msdyn_entitlementapplication.d.ts" />
"use strict";
var formmsdyn_entitlementapplication_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_entitlementapplication_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_entitlementapplication_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();