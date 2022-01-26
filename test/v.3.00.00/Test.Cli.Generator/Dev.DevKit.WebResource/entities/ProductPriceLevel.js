//@ts-check
///<reference path="ProductPriceLevel.d.ts" />
"use strict";
var formProductPriceLevel_Information = (function () {
	"use strict";
	/** @type DevKit.FormProductPriceLevel_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormProductPriceLevel_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formProduct_Price_List = (function () {
	"use strict";
	/** @type DevKit.FormProduct_Price_List */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormProduct_Price_List(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();