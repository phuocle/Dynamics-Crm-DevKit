//@ts-check
///<reference path="msdyn_3dmodel.d.ts" />
"use strict";
var formmsdyn_3dmodel_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_3dmodel_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_3dmodel_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();