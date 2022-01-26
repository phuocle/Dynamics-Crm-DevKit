//@ts-check
///<reference path="msdyn_purchaseorderreceipt.d.ts" />
"use strict";
var formPurchase_Order_Receipt = (function () {
	"use strict";
	/** @type DevKit.FormPurchase_Order_Receipt */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPurchase_Order_Receipt(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formPurchase_Order_Receipt_Mobile = (function () {
	"use strict";
	/** @type DevKit.FormPurchase_Order_Receipt_Mobile */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPurchase_Order_Receipt_Mobile(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();