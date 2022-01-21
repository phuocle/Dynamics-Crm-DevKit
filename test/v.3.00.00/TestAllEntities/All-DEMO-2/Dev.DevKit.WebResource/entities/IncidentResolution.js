//@ts-check
///<reference path="IncidentResolution.d.ts" />
"use strict";
var formCase_Resolution_Quick_Create_Form = (function () {
	"use strict";
	/** @type DevKit.FormCase_Resolution_Quick_Create_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCase_Resolution_Quick_Create_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formIncidentResolution_Information = (function () {
	"use strict";
	/** @type DevKit.FormIncidentResolution_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormIncidentResolution_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();