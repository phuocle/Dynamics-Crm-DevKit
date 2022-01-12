//@ts-check
///<reference path="msdyn_sikeyvalueconfig.d.ts" />
"use strict";
var formmsdyn_sikeyvalueconfig_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_sikeyvalueconfig_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_sikeyvalueconfig_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();