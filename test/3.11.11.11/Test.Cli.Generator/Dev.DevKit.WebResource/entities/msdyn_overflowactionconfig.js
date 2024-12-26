//@ts-check
///<reference path="msdyn_overflowactionconfig.d.ts" />
"use strict";
var formmsdyn_overflowactionconfig_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_overflowactionconfig_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_overflowactionconfig_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();