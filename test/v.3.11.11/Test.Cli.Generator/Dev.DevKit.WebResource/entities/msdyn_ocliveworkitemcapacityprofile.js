//@ts-check
///<reference path="msdyn_ocliveworkitemcapacityprofile.d.ts" />
"use strict";
var formmsdyn_ocliveworkitemcapacityprofile_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocliveworkitemcapacityprofile_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocliveworkitemcapacityprofile_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();