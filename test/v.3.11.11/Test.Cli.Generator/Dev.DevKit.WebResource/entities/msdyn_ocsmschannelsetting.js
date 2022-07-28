//@ts-check
///<reference path="msdyn_ocsmschannelsetting.d.ts" />
"use strict";
var formmsdyn_ocsmschannelsetting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocsmschannelsetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocsmschannelsetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();