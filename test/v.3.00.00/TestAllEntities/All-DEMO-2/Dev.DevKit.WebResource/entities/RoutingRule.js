//@ts-check
///<reference path="RoutingRule.d.ts" />
"use strict";
var formRouting_Rule_Set = (function () {
	"use strict";
	/** @type DevKit.FormRouting_Rule_Set */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormRouting_Rule_Set(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();