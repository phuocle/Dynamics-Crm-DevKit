//@ts-check
///<reference path="msdyn_fieldcomputation.d.ts" />
"use strict";
var formmsdyn_fieldcomputation_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_fieldcomputation_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_fieldcomputation_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();