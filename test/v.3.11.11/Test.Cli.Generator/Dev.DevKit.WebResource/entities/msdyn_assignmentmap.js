//@ts-check
///<reference path="msdyn_assignmentmap.d.ts" />
"use strict";
var formmsdyn_assignmentmap_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_assignmentmap_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_assignmentmap_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();