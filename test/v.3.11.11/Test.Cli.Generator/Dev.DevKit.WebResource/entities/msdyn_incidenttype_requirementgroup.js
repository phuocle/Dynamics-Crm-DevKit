//@ts-check
///<reference path="msdyn_incidenttype_requirementgroup.d.ts" />
"use strict";
var formIncident_Type_Requirement_Group_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormIncident_Type_Requirement_Group_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormIncident_Type_Requirement_Group_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_incidenttype_requirementgroup_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_incidenttype_requirementgroup_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_incidenttype_requirementgroup_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();