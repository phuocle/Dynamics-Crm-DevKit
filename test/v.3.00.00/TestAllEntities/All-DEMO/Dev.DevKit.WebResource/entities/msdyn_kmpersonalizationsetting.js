//@ts-check
///<reference path="msdyn_kmpersonalizationsetting.d.ts" />
"use strict";
var formmsdyn_kmpersonalizationsetting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_kmpersonalizationsetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_kmpersonalizationsetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();