//@ts-check
///<reference path="msdyn_ocoutboundconfiguration.d.ts" />
"use strict";
var formmsdyn_ocoutboundconfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocoutboundconfiguration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocoutboundconfiguration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();