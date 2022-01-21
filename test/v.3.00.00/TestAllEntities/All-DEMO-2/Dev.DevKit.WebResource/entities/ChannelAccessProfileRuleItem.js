//@ts-check
///<reference path="ChannelAccessProfileRuleItem.d.ts" />
"use strict";
var formChannelAccessProfileRuleItem_Information = (function () {
	"use strict";
	/** @type DevKit.FormChannelAccessProfileRuleItem_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormChannelAccessProfileRuleItem_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();