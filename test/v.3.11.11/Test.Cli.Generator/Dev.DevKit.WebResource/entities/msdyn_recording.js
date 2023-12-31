//@ts-check
///<reference path="msdyn_recording.d.ts" />
"use strict";
var formmsdyn_recording_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_recording_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_recording_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();