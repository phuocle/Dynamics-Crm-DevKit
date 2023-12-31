//@ts-check
///<reference path="msdyn_ModelPreviewStatus.d.ts" />
"use strict";
var formmsdyn_ModelPreviewStatus_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ModelPreviewStatus_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ModelPreviewStatus_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();