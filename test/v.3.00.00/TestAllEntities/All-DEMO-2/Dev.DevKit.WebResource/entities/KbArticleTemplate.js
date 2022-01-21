//@ts-check
///<reference path="KbArticleTemplate.d.ts" />
"use strict";
var formKbArticleTemplate_Information = (function () {
	"use strict";
	/** @type DevKit.FormKbArticleTemplate_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormKbArticleTemplate_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();