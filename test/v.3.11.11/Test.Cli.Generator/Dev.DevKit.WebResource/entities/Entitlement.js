//@ts-check
///<reference path="Entitlement.d.ts" />
"use strict";
var formEntitlement = (function () {
	"use strict";
	/** @type DevKit.FormEntitlement */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormEntitlement(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();