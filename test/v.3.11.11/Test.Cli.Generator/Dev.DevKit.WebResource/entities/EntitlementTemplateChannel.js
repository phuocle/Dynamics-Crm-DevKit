//@ts-check
///<reference path="EntitlementTemplateChannel.d.ts" />
"use strict";
var formEntitlement_Template_Channel = (function () {
	"use strict";
	/** @type DevKit.FormEntitlement_Template_Channel */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormEntitlement_Template_Channel(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();