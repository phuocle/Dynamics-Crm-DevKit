//@ts-check
///<reference path="msdyn_bookingrule.d.ts" />
"use strict";
var formmsdyn_bookingrule_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_bookingrule_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_bookingrule_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();