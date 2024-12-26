//@ts-check
///<reference path="Letter.d.ts" />
"use strict";
var formLetter = (function () {
	"use strict";
	/** @type DevKit.FormLetter */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormLetter(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();