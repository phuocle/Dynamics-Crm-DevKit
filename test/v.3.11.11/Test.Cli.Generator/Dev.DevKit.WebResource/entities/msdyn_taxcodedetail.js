//@ts-check
///<reference path="msdyn_taxcodedetail.d.ts" />
"use strict";
var formmsdyn_taxcodedetail_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_taxcodedetail_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_taxcodedetail_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();