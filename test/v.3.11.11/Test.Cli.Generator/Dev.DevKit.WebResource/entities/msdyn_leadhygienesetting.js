//@ts-check
///<reference path="msdyn_leadhygienesetting.d.ts" />
"use strict";
var formmsdyn_leadhygienesetting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_leadhygienesetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_leadhygienesetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();