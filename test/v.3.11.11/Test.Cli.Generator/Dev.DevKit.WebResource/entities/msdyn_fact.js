//@ts-check
///<reference path="msdyn_fact.d.ts" />
"use strict";
var formmsdyn_fact_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_fact_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_fact_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();