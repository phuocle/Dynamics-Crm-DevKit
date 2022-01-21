//@ts-check
///<reference path="msdyn_propertytemplateassociation.d.ts" />
"use strict";
var formmsdyn_propertytemplateassociation_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_propertytemplateassociation_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_propertytemplateassociation_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formProperty_Template_Association_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormProperty_Template_Association_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormProperty_Template_Association_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();