//@ts-check
///<reference path="msdyn_ocsitdimportconfig.d.ts" />
"use strict";
var formmsdyn_ocsitdimportconfig_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocsitdimportconfig_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocsitdimportconfig_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();