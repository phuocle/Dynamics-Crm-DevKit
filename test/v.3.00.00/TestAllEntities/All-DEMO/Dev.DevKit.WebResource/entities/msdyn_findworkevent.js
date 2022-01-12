//@ts-check
///<reference path="msdyn_findworkevent.d.ts" />
"use strict";
var formmsdyn_findworkevent_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_findworkevent_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_findworkevent_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();