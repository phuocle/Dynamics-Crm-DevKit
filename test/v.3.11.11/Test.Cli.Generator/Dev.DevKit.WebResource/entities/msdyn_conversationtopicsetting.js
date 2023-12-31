//@ts-check
///<reference path="msdyn_conversationtopicsetting.d.ts" />
"use strict";
var formmsdyn_conversationtopicsetting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_conversationtopicsetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_conversationtopicsetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();