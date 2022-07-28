//@ts-check
///<reference path="msdyn_occhannelapimethodmapping.d.ts" />
"use strict";
var formmsdyn_occhannelapimethodmapping_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_occhannelapimethodmapping_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_occhannelapimethodmapping_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();