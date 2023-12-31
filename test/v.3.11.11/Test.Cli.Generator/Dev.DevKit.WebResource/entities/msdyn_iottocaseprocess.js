//@ts-check
///<reference path="msdyn_iottocaseprocess.d.ts" />
"use strict";
var formmsdyn_iottocaseprocess_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_iottocaseprocess_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_iottocaseprocess_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();