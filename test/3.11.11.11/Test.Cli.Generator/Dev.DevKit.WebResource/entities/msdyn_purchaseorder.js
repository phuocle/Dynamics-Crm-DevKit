//@ts-check
///<reference path="msdyn_purchaseorder.d.ts" />
"use strict";
var formPurchase_Order = (function () {
	"use strict";
	/** @type DevKit.FormPurchase_Order */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPurchase_Order(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formPurchase_Order_Mobile = (function () {
	"use strict";
	/** @type DevKit.FormPurchase_Order_Mobile */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPurchase_Order_Mobile(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();