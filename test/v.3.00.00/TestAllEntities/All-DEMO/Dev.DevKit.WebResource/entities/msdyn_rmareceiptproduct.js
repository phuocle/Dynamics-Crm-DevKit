//@ts-check
///<reference path="msdyn_rmareceiptproduct.d.ts" />
"use strict";
var formmsdyn_rmareceiptproduct_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_rmareceiptproduct_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_rmareceiptproduct_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();