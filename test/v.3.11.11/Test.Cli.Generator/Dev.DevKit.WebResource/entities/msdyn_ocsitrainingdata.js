//@ts-check
///<reference path="msdyn_ocsitrainingdata.d.ts" />
"use strict";
var formmsdyn_ocsitrainingdata_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocsitrainingdata_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocsitrainingdata_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();