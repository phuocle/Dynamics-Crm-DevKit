//@ts-check
///<reference path="msdyn_oclinechannelconfig.d.ts" />
"use strict";
var formmsdyn_oclinechannelconfig_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_oclinechannelconfig_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_oclinechannelconfig_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();