//@ts-check
///<reference path="msdyn_playbookinstance.d.ts" />
"use strict";
var formmsdyn_playbookinstance_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_playbookinstance_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_playbookinstance_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();