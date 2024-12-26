//@ts-check
///<reference path="msdyn_geofence.d.ts" />
"use strict";
var formmsdyn_geofence_Main_Form = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_geofence_Main_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_geofence_Main_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_geofence_New_Form = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_geofence_New_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_geofence_New_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();