//@ts-check
///<reference path="msdyn_ocliveworkitem.d.ts" />
"use strict";
var formConversation_Form = (function () {
	"use strict";
	/** @type DevKit.FormConversation_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormConversation_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formCustomer_summary = (function () {
	"use strict";
	/** @type DevKit.FormCustomer_summary */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCustomer_summary(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();