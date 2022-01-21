//@ts-check
///<reference path="msdyn_systemuserschedulersetting.d.ts" />
"use strict";
var formmsdyn_systemuserschedulersetting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_systemuserschedulersetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_systemuserschedulersetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();