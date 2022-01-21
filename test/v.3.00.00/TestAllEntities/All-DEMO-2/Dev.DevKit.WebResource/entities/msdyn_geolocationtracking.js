//@ts-check
///<reference path="msdyn_geolocationtracking.d.ts" />
"use strict";
var formmsdyn_geolocationtracking_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_geolocationtracking_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_geolocationtracking_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();