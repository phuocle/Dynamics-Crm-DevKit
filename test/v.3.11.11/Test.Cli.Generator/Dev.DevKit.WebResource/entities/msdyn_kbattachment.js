//@ts-check
///<reference path="msdyn_kbattachment.d.ts" />
"use strict";
var formmsdyn_kbattachment_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_kbattachment_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_kbattachment_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();