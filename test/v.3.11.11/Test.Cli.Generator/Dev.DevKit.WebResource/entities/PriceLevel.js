//@ts-check
///<reference path="PriceLevel.d.ts" />
"use strict";
var formPrice_Level = (function () {
	"use strict";
	/** @type DevKit.FormPrice_Level */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPrice_Level(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formPrice_List_Quick_Create_5x5 = (function () {
	"use strict";
	/** @type DevKit.FormPrice_List_Quick_Create_5x5 */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPrice_List_Quick_Create_5x5(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();