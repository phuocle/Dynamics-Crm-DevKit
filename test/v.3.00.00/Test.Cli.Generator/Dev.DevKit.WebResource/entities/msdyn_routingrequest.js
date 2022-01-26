//@ts-check
///<reference path="msdyn_routingrequest.d.ts" />
"use strict";
var formmsdyn_routingrequest_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_routingrequest_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_routingrequest_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();