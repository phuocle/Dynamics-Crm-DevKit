//@ts-check
///<reference path="msdyn_uniquenumber.d.ts" />
"use strict";
var formmsdyn_uniquenumber_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_uniquenumber_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_uniquenumber_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();