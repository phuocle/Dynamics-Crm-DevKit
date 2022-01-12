//@ts-check
///<reference path="msdyn_FunctionalLocation.d.ts" />
"use strict";
var formFunctional_Location_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormFunctional_Location_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormFunctional_Location_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_FunctionalLocation_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_FunctionalLocation_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_FunctionalLocation_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();