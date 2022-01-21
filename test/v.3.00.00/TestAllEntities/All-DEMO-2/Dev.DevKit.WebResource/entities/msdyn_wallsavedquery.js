//@ts-check
///<reference path="msdyn_wallsavedquery.d.ts" />
"use strict";
var formmsdyn_wallsavedquery_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_wallsavedquery_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_wallsavedquery_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();