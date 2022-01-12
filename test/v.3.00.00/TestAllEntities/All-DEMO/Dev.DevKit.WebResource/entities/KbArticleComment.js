//@ts-check
///<reference path="KbArticleComment.d.ts" />
"use strict";
var formKbArticleComment_Information = (function () {
	"use strict";
	/** @type DevKit.FormKbArticleComment_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormKbArticleComment_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();