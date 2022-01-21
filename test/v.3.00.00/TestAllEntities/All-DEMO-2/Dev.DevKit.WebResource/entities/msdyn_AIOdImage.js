//@ts-check
///<reference path="msdyn_AIOdImage.d.ts" />
"use strict";
var formmsdyn_AIOdImage_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_AIOdImage_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_AIOdImage_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();