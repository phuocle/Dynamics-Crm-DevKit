//@ts-check
///<reference path="msdyn_casetopicsetting.d.ts" />
"use strict";
var formmsdyn_casetopicsetting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_casetopicsetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_casetopicsetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();