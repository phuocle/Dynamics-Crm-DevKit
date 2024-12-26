//@ts-check
///<reference path="ProcessSession.d.ts" />
"use strict";
var formProcessSession_Information = (function () {
	"use strict";
	/** @type DevKit.FormProcessSession_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormProcessSession_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();