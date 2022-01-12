//@ts-check
///<reference path="msdyn_roleutilization.d.ts" />
"use strict";
var formmsdyn_roleutilization_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_roleutilization_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_roleutilization_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();