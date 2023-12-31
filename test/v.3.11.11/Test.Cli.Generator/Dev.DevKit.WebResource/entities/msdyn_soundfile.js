//@ts-check
///<reference path="msdyn_soundfile.d.ts" />
"use strict";
var formmsdyn_soundfile_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_soundfile_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_soundfile_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();