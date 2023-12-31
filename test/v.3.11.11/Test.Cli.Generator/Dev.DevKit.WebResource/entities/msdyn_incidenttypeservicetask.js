//@ts-check
///<reference path="msdyn_incidenttypeservicetask.d.ts" />
"use strict";
var formIncident_Type_Service_Task_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormIncident_Type_Service_Task_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormIncident_Type_Service_Task_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_incidenttypeservicetask_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_incidenttypeservicetask_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_incidenttypeservicetask_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();