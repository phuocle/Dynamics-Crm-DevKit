//@ts-check
///<reference path="msdyn_attribute.d.ts" />
"use strict";
var formmsdyn_attribute_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_attribute_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_attribute_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();