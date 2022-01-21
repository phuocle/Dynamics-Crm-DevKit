//@ts-check
///<reference path="msdyn_shipvia.d.ts" />
"use strict";
var formmsdyn_shipvia_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_shipvia_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_shipvia_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();