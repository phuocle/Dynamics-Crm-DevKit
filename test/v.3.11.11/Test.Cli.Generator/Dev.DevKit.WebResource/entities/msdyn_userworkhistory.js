//@ts-check
///<reference path="msdyn_userworkhistory.d.ts" />
"use strict";
var formmsdyn_userworkhistory_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_userworkhistory_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_userworkhistory_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();