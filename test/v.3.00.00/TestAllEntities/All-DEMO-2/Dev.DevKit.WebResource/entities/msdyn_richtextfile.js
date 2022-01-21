//@ts-check
///<reference path="msdyn_richtextfile.d.ts" />
"use strict";
var formmsdyn_richtextfile_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_richtextfile_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_richtextfile_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();