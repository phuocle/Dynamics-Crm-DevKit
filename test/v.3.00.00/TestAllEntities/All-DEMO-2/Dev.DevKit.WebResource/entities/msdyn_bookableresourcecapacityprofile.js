//@ts-check
///<reference path="msdyn_bookableresourcecapacityprofile.d.ts" />
"use strict";
var formmsdyn_bookableresourcecapacityprofile_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_bookableresourcecapacityprofile_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_bookableresourcecapacityprofile_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();