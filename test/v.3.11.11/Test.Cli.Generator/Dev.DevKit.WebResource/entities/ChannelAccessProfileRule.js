//@ts-check
///<reference path="ChannelAccessProfileRule.d.ts" />
"use strict";
var formChannelAccessProfileRule_Information = (function () {
	"use strict";
	/** @type DevKit.FormChannelAccessProfileRule_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormChannelAccessProfileRule_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();