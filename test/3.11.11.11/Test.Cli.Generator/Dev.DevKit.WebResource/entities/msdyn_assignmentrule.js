//@ts-check
///<reference path="msdyn_assignmentrule.d.ts" />
"use strict";
var formmsdyn_assignmentrule_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_assignmentrule_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_assignmentrule_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();