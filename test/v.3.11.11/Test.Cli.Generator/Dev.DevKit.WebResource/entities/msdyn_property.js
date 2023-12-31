//@ts-check
///<reference path="msdyn_property.d.ts" />
"use strict";
var formmsdyn_property_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_property_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_property_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formProperty_Definition_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormProperty_Definition_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormProperty_Definition_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();