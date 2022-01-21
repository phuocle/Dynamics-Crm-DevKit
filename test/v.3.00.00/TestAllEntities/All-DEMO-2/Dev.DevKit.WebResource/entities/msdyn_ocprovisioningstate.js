//@ts-check
///<reference path="msdyn_ocprovisioningstate.d.ts" />
"use strict";
var formmsdyn_ocprovisioningstate_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocprovisioningstate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocprovisioningstate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();