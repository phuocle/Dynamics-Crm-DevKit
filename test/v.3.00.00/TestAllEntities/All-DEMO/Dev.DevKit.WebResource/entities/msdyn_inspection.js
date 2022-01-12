//@ts-check
///<reference path="msdyn_inspection.d.ts" />
"use strict";
var formmsdyn_inspection_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_inspection_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_inspection_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();