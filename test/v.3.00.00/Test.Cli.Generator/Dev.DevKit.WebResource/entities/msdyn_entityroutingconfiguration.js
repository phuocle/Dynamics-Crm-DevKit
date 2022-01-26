//@ts-check
///<reference path="msdyn_entityroutingconfiguration.d.ts" />
"use strict";
var formmsdyn_entityroutingconfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_entityroutingconfiguration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_entityroutingconfiguration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();