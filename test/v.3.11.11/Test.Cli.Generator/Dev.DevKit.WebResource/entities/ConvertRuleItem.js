//@ts-check
///<reference path="ConvertRuleItem.d.ts" />
"use strict";
var formRecord_Creation_and_Update_Rule_Item = (function () {
	"use strict";
	/** @type DevKit.FormRecord_Creation_and_Update_Rule_Item */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormRecord_Creation_and_Update_Rule_Item(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formRecord_Creation_and_Update_Rule_Item_UCI = (function () {
	"use strict";
	/** @type DevKit.FormRecord_Creation_and_Update_Rule_Item_UCI */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormRecord_Creation_and_Update_Rule_Item_UCI(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();