//@ts-check
///<reference path="msdyn_tour.d.ts" />
"use strict";
var formmsdyn_tour_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_tour_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_tour_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();