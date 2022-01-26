//@ts-check
///<reference path="KbArticle.d.ts" />
"use strict";
var formKbArticle_Information = (function () {
	"use strict";
	/** @type DevKit.FormKbArticle_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormKbArticle_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();