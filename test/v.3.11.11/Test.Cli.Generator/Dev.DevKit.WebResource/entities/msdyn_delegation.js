//@ts-check
///<reference path="msdyn_delegation.d.ts" />
"use strict";
var formmsdyn_delegation_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_delegation_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_delegation_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();