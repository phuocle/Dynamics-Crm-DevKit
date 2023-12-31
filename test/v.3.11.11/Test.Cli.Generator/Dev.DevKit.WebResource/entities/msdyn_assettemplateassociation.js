//@ts-check
///<reference path="msdyn_assettemplateassociation.d.ts" />
"use strict";
var formAsset_Template_Association_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormAsset_Template_Association_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAsset_Template_Association_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_assettemplateassociation_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_assettemplateassociation_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_assettemplateassociation_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();