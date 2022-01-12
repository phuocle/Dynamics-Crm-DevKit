//@ts-check
///<reference path="DynamicPropertyOptionSetItem.d.ts" />
"use strict";
var formPropertyOptionSetItem = (function () {
	"use strict";
	/** @type DevKit.FormPropertyOptionSetItem */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPropertyOptionSetItem(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formPropertyOptionSetItem2 = (function () {
	"use strict";
	/** @type DevKit.FormPropertyOptionSetItem2 */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPropertyOptionSetItem2(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();