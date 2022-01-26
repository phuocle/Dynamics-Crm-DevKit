//@ts-check
///<reference path="MailMergeTemplate.d.ts" />
"use strict";
var formMailMergeTemplate_Information = (function () {
	"use strict";
	/** @type DevKit.FormMailMergeTemplate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormMailMergeTemplate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();