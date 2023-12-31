//@ts-check
///<reference path="msdyn_resourceassignment.d.ts" />
"use strict";
var formmsdyn_resourceassignment_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_resourceassignment_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_resourceassignment_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();