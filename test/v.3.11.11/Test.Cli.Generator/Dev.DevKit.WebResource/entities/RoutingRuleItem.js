//@ts-check
///<reference path="RoutingRuleItem.d.ts" />
"use strict";
var formRule_Item = (function () {
	"use strict";
	/** @type DevKit.FormRule_Item */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormRule_Item(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();