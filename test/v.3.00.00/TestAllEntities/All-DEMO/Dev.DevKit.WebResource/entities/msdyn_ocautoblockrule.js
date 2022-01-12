//@ts-check
///<reference path="msdyn_ocautoblockrule.d.ts" />
"use strict";
var formmsdyn_ocautoblockrule_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_ocautoblockrule_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_ocautoblockrule_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();