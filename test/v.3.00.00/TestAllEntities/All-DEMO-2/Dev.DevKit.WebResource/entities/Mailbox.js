//@ts-check
///<reference path="Mailbox.d.ts" />
"use strict";
var formMailbox_Information = (function () {
	"use strict";
	/** @type DevKit.FormMailbox_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormMailbox_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();