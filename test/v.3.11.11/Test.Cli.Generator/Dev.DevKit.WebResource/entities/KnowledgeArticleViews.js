//@ts-check
///<reference path="KnowledgeArticleViews.d.ts" />
"use strict";
var formKnowledgeArticleViews = (function () {
	"use strict";
	/** @type DevKit.FormKnowledgeArticleViews */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormKnowledgeArticleViews(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formKnowledgeArticleViews_MainInteractionCentric = (function () {
	"use strict";
	/** @type DevKit.FormKnowledgeArticleViews_MainInteractionCentric */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormKnowledgeArticleViews_MainInteractionCentric(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();