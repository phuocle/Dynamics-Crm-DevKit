//@ts-check
///<reference path="appnotification.d.ts" />
"use strict";
var formappnotification_Information = (function () {
	"use strict";
	/** @type DevKit.Formappnotification_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formappnotification_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();