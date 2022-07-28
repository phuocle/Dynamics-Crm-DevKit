//@ts-check
///<reference path="msdyn_playbookactivity.d.ts" />
"use strict";
var formmsdyn_playbookactivity_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_playbookactivity_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_playbookactivity_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();