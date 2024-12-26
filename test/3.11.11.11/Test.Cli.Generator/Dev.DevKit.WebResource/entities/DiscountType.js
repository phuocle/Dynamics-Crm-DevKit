//@ts-check
///<reference path="DiscountType.d.ts" />
"use strict";
var formDiscountType_Information = (function () {
	"use strict";
	/** @type DevKit.FormDiscountType_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormDiscountType_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();