//@ts-check
///<reference path="msdyn_ocrecording.d.ts" />
"use strict";
var formmsdyn_ocrecording_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocrecording_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocrecording_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();