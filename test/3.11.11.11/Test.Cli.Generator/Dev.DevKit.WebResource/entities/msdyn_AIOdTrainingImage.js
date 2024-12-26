//@ts-check
///<reference path="msdyn_AIOdTrainingImage.d.ts" />
"use strict";
var formmsdyn_AIOdTrainingImage_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_AIOdTrainingImage_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_AIOdTrainingImage_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();