//@ts-check
///<reference path="msdyn_geofenceevent.d.ts" />
"use strict";
var formmsdyn_geofenceevent_Main_Form = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_geofenceevent_Main_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_geofenceevent_Main_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();