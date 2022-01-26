//@ts-check
///<reference path="msdyn_projectteam.d.ts" />
"use strict";
var formmsdyn_projectteam_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_projectteam_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_projectteam_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_projectteam_New_Form = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_projectteam_New_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_projectteam_New_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();