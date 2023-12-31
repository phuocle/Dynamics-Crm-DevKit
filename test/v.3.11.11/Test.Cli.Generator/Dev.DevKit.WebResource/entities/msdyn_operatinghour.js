//@ts-check
///<reference path="msdyn_operatinghour.d.ts" />
"use strict";
var formmsdyn_operatinghour_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_operatinghour_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_operatinghour_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formOperating_hours = (function () {
	"use strict";
	/** @type DevKit.FormOperating_hours */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormOperating_hours(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();