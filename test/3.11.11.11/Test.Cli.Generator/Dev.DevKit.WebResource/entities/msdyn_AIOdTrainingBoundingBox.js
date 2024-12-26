//@ts-check
///<reference path="msdyn_AIOdTrainingBoundingBox.d.ts" />
"use strict";
var formmsdyn_AIOdTrainingBoundingBox_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_AIOdTrainingBoundingBox_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_AIOdTrainingBoundingBox_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();