//@ts-check
///<reference path="msdyn_inventoryadjustmentproduct.d.ts" />
"use strict";
var formmsdyn_inventoryadjustmentproduct_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_inventoryadjustmentproduct_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_inventoryadjustmentproduct_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formQuick_Create_Inventory_Adjustment_Product = (function () {
	"use strict";
	/** @type DevKit.FormQuick_Create_Inventory_Adjustment_Product */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormQuick_Create_Inventory_Adjustment_Product(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();