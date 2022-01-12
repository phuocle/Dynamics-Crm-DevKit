//@ts-check
///<reference path="msdyn_Personalsoundsetting.d.ts" />
"use strict";
var formmsdyn_Personalsoundsetting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_Personalsoundsetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_Personalsoundsetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();