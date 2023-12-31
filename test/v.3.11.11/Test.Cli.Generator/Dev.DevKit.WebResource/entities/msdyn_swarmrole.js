//@ts-check
///<reference path="msdyn_swarmrole.d.ts" />
"use strict";
var formmsdyn_swarmrole_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_swarmrole_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_swarmrole_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();