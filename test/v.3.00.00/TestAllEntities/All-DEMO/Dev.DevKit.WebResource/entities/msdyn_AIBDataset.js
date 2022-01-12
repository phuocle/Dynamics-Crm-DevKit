//@ts-check
///<reference path="msdyn_AIBDataset.d.ts" />
"use strict";
var formmsdyn_AIBDataset_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_AIBDataset_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_AIBDataset_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();