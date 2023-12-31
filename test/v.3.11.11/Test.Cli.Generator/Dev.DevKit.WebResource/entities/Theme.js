//@ts-check
///<reference path="Theme.d.ts" />
"use strict";
var formTheme = (function () {
	"use strict";
	/** @type DevKit.FormTheme */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTheme(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();