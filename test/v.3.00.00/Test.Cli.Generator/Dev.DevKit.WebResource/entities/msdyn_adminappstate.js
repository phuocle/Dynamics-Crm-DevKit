//@ts-check
///<reference path="msdyn_adminappstate.d.ts" />
"use strict";
var formmsdyn_adminappstate_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_adminappstate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_adminappstate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();