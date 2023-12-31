//@ts-check
///<reference path="msdyn_templateforproperties.d.ts" />
"use strict";
var formmsdyn_templateforproperties_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_templateforproperties_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_templateforproperties_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();