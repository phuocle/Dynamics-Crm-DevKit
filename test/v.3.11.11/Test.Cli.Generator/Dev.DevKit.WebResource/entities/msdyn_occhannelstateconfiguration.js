//@ts-check
///<reference path="msdyn_occhannelstateconfiguration.d.ts" />
"use strict";
var formmsdyn_occhannelstateconfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_occhannelstateconfiguration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_occhannelstateconfiguration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();