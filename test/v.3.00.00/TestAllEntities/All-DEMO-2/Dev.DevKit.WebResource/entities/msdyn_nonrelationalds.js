//@ts-check
///<reference path="msdyn_nonrelationalds.d.ts" />
"use strict";
var formmsdyn_nonrelationalds_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_nonrelationalds_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_nonrelationalds_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();