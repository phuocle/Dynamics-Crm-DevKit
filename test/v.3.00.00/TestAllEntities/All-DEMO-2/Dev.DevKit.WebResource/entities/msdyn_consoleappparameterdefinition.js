//@ts-check
///<reference path="msdyn_consoleappparameterdefinition.d.ts" />
"use strict";
var formmsdyn_consoleappparameterdefinition_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_consoleappparameterdefinition_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_consoleappparameterdefinition_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();