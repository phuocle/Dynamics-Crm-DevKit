//@ts-check
///<reference path="msdyn_ocfbapplication.d.ts" />
"use strict";
var formmsdyn_ocfbapplication_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocfbapplication_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocfbapplication_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();