//@ts-check
///<reference path="Discount.d.ts" />
"use strict";
var formDiscount_Information = (function () {
	"use strict";
	/** @type DevKit.FormDiscount_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormDiscount_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();