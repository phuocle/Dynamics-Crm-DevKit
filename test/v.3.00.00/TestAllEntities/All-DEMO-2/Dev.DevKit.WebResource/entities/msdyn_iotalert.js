//@ts-check
///<reference path="msdyn_iotalert.d.ts" />
"use strict";
var formmsdyn_iotalert_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_iotalert_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_iotalert_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();