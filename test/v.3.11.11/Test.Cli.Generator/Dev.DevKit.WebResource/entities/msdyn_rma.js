//@ts-check
///<reference path="msdyn_rma.d.ts" />
"use strict";
var formRMA = (function () {
	"use strict";
	/** @type DevKit.FormRMA */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormRMA(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();