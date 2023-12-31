//@ts-check
///<reference path="msdyn_fieldservicesetting.d.ts" />
"use strict";
var formmsdyn_fieldservicesetting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_fieldservicesetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_fieldservicesetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();