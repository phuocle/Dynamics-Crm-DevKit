//@ts-check
///<reference path="msdyn_extendedusersetting.d.ts" />
"use strict";
var formmsdyn_extendedusersetting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_extendedusersetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_extendedusersetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();