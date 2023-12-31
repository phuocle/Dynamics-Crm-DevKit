//@ts-check
///<reference path="EmailSignature.d.ts" />
"use strict";
var formEmail_signature = (function () {
	"use strict";
	/** @type DevKit.FormEmail_signature */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormEmail_signature(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();