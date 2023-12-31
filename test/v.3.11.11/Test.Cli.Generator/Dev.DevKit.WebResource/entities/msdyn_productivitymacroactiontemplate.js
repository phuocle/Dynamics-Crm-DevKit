//@ts-check
///<reference path="msdyn_productivitymacroactiontemplate.d.ts" />
"use strict";
var formmsdyn_productivitymacroactiontemplate_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_productivitymacroactiontemplate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_productivitymacroactiontemplate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();