//@ts-check
///<reference path="conversationtranscript.d.ts" />
"use strict";
var formconversationtranscript_Information = (function () {
	"use strict";
	/** @type DevKit.Formconversationtranscript_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formconversationtranscript_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();