//@ts-check
///<reference path="ConvertRule.d.ts" />
"use strict";
var formRecord_Creation_and_Update_Rule_UCI = (function () {
	"use strict";
	/** @type DevKit.FormRecord_Creation_and_Update_Rule_UCI */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormRecord_Creation_and_Update_Rule_UCI(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formRecord_Creation_and_Update_Rule_Web_Client = (function () {
	"use strict";
	/** @type DevKit.FormRecord_Creation_and_Update_Rule_Web_Client */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormRecord_Creation_and_Update_Rule_Web_Client(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();