//@ts-check
///<reference path="msdyn_incidenttypecharacteristic.d.ts" />
"use strict";
var formIncident_Type_Characteristic_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormIncident_Type_Characteristic_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormIncident_Type_Characteristic_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_incidenttypecharacteristic_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_incidenttypecharacteristic_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_incidenttypecharacteristic_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();