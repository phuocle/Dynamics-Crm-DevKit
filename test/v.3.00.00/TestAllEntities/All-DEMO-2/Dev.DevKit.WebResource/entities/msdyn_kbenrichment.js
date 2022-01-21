//@ts-check
///<reference path="msdyn_kbenrichment.d.ts" />
"use strict";
var formmsdyn_kbenrichment_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_kbenrichment_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_kbenrichment_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();