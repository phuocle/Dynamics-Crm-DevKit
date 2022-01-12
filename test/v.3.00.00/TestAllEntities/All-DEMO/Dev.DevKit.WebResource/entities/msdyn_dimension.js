//@ts-check
///<reference path="msdyn_dimension.d.ts" />
"use strict";
var formmsdyn_dimension_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_dimension_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_dimension_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_dimension_New_Form = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_dimension_New_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_dimension_New_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();