//@ts-check
///<reference path="KnowledgeSearchModel.d.ts" />
"use strict";
var formKnowledgeSearchModel_Information = (function () {
	"use strict";
	/** @type DevKit.FormKnowledgeSearchModel_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormKnowledgeSearchModel_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();