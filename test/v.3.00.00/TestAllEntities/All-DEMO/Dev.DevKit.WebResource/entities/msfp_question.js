//@ts-check
///<reference path="msfp_question.d.ts" />
"use strict";
var formmsfp_question_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsfp_question_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsfp_question_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();