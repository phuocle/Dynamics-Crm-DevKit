//@ts-check
///<reference path="ActivityMimeAttachment.d.ts" />
"use strict";
var formActivityMimeAttachment_Information = (function () {
	"use strict";
	/** @type DevKit.FormActivityMimeAttachment_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormActivityMimeAttachment_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();