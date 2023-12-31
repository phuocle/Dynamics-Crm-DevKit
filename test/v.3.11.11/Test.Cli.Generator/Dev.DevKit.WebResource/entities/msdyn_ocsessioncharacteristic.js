//@ts-check
///<reference path="msdyn_ocsessioncharacteristic.d.ts" />
"use strict";
var formmsdyn_ocsessioncharacteristic_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocsessioncharacteristic_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocsessioncharacteristic_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();