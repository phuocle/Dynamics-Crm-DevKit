//@ts-check
///<reference path="KnowledgeBaseRecord.d.ts" />
"use strict";
var formKnowledge_Base_Articles = (function () {
	"use strict";
	/** @type DevKit.FormKnowledge_Base_Articles */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormKnowledge_Base_Articles(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();