//@ts-check
///<reference path="msdyn_bookableresourceassociation.d.ts" />
"use strict";
var formmsdyn_bookableresourceassociation_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_bookableresourceassociation_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_bookableresourceassociation_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();