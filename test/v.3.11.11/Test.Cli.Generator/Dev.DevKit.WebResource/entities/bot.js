//@ts-check
///<reference path="bot.d.ts" />
"use strict";
var formbot_Information = (function () {
	"use strict";
	/** @type DevKit.Formbot_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formbot_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();