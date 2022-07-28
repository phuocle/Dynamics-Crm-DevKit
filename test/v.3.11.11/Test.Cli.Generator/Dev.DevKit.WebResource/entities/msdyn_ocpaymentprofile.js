//@ts-check
///<reference path="msdyn_ocpaymentprofile.d.ts" />
"use strict";
var formmsdyn_ocpaymentprofile_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocpaymentprofile_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocpaymentprofile_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();