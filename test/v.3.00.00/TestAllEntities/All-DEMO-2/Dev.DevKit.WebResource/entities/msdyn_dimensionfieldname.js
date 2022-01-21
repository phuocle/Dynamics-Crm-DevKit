//@ts-check
///<reference path="msdyn_dimensionfieldname.d.ts" />
"use strict";
var formmsdyn_dimensionfieldname_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_dimensionfieldname_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_dimensionfieldname_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();