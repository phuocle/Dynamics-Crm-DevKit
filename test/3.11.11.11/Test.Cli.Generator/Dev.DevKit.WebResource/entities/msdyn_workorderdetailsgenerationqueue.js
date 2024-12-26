//@ts-check
///<reference path="msdyn_workorderdetailsgenerationqueue.d.ts" />
"use strict";
var formmsdyn_workorderdetailsgenerationqueue_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_workorderdetailsgenerationqueue_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_workorderdetailsgenerationqueue_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();