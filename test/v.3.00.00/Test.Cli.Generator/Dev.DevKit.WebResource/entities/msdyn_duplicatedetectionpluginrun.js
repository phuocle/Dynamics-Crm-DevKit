//@ts-check
///<reference path="msdyn_duplicatedetectionpluginrun.d.ts" />
"use strict";
var formmsdyn_duplicatedetectionpluginrun_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_duplicatedetectionpluginrun_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_duplicatedetectionpluginrun_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();