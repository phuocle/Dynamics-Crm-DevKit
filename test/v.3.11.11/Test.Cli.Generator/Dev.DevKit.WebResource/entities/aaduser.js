//@ts-check
///<reference path="aaduser.d.ts" />
"use strict";
var formaaduser_Information = (function () {
	"use strict";
	/** @type DevKit.Formaaduser_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formaaduser_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();