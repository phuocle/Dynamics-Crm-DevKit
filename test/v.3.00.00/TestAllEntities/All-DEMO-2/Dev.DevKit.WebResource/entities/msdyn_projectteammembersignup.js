//@ts-check
///<reference path="msdyn_projectteammembersignup.d.ts" />
"use strict";
var formmsdyn_projectteammembersignup_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_projectteammembersignup_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_projectteammembersignup_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();