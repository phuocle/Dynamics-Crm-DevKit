//@ts-check
///<reference path="msdyn_ocliveworkitemcharacteristic.d.ts" />
"use strict";
var formmsdyn_ocliveworkitemcharacteristic_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocliveworkitemcharacteristic_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocliveworkitemcharacteristic_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();