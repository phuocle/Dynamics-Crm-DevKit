//@ts-check
///<reference path="Contact.d.ts" />
"use strict";
var formContact = (function () {
	"use strict";
	/** @type DevKit.FormContact */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormContact(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();