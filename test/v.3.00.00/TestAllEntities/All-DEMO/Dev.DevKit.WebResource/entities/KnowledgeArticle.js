//@ts-check
///<reference path="KnowledgeArticle.d.ts" />
"use strict";
var formKnowledge_Article = (function () {
	"use strict";
	/** @type DevKit.FormKnowledge_Article */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormKnowledge_Article(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formKnowledge_Article_for_Interactive_experience = (function () {
	"use strict";
	/** @type DevKit.FormKnowledge_Article_for_Interactive_experience */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormKnowledge_Article_for_Interactive_experience(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formKnowledge_Article_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormKnowledge_Article_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormKnowledge_Article_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();