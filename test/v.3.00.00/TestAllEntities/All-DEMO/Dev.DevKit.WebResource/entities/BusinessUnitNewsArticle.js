//@ts-check
///<reference path="BusinessUnitNewsArticle.d.ts" />
"use strict";
var formBusinessUnitNewsArticle_Information = (function () {
	"use strict";
	/** @type DevKit.FormBusinessUnitNewsArticle_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBusinessUnitNewsArticle_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();