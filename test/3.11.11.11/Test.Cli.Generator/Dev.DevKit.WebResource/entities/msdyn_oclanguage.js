//@ts-check
///<reference path="msdyn_oclanguage.d.ts" />
"use strict";
var formmsdyn_oclanguage_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_oclanguage_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_oclanguage_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();