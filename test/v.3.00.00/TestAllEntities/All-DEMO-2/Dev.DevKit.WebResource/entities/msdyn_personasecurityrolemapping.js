//@ts-check
///<reference path="msdyn_personasecurityrolemapping.d.ts" />
"use strict";
var formmsdyn_personasecurityrolemapping_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_personasecurityrolemapping_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_personasecurityrolemapping_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();