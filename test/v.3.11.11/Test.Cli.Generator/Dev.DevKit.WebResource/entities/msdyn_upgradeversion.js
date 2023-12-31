//@ts-check
///<reference path="msdyn_upgradeversion.d.ts" />
"use strict";
var formmsdyn_upgradeversion_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_upgradeversion_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_upgradeversion_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();