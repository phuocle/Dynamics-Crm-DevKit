//@ts-check
///<reference path="msdyn_incidenttyperesolution.d.ts" />
"use strict";
var formIncident_Type_Resolution_Quick_Create_Form = (function () {
	"use strict";
	/** @type DevKit.FormIncident_Type_Resolution_Quick_Create_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormIncident_Type_Resolution_Quick_Create_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_incidenttyperesolution_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_incidenttyperesolution_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_incidenttyperesolution_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();