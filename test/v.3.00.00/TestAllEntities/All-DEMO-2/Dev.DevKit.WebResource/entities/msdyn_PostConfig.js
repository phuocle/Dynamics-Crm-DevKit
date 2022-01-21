//@ts-check
///<reference path="msdyn_PostConfig.d.ts" />
"use strict";
var formmsdyn_PostConfig_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_PostConfig_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_PostConfig_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();