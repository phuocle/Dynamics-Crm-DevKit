//@ts-check
///<reference path="msdyn_incidenttypessetup.d.ts" />
"use strict";
var formmsdyn_incidenttypessetup_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_incidenttypessetup_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_incidenttypessetup_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();