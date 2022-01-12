//@ts-check
///<reference path="msdyn_wqdatasource.d.ts" />
"use strict";
var formmsdyn_wqdatasource_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_wqdatasource_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_wqdatasource_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();