//@ts-check
///<reference path="msdyn_routingrulesetsetting.d.ts" />
"use strict";
var formmsdyn_routingrulesetsetting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_routingrulesetsetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_routingrulesetsetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();