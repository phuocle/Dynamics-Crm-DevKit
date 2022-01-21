//@ts-check
///<reference path="msdyn_entityconfiguration.d.ts" />
"use strict";
var formmsdyn_entityconfiguration_Main_Form = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_entityconfiguration_Main_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_entityconfiguration_Main_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();