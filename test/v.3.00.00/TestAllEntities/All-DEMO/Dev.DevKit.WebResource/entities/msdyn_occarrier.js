//@ts-check
///<reference path="msdyn_occarrier.d.ts" />
"use strict";
var formmsdyn_occarrier_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_occarrier_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_occarrier_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();