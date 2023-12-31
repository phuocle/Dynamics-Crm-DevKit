//@ts-check
///<reference path="msdyn_timeoffcalendar.d.ts" />
"use strict";
var formmsdyn_timeoffcalendar_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_timeoffcalendar_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_timeoffcalendar_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();