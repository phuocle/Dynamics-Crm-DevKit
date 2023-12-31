//@ts-check
///<reference path="msdyn_workorderproduct.d.ts" />
"use strict";
var formmsdyn_workorderproduct_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_workorderproduct_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_workorderproduct_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formWork_Order_Product_Mobile = (function () {
	"use strict";
	/** @type DevKit.FormWork_Order_Product_Mobile */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormWork_Order_Product_Mobile(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();