//@ts-check
///<reference path="EntitlementChannel.d.ts" />
"use strict";
var formEntitlement_Channel = (function () {
	"use strict";
	/** @type DevKit.FormEntitlement_Channel */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormEntitlement_Channel(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();