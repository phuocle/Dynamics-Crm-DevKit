//@ts-check
///<reference path="msdyn_ocwechatchannelconfig.d.ts" />
"use strict";
var formmsdyn_ocwechatchannelconfig_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocwechatchannelconfig_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocwechatchannelconfig_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();