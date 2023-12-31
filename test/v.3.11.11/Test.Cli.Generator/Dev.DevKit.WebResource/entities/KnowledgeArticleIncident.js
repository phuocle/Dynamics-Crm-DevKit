//@ts-check
///<reference path="KnowledgeArticleIncident.d.ts" />
"use strict";
var formKnowledge_Article_Incident = (function () {
	"use strict";
	/** @type DevKit.FormKnowledge_Article_Incident */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormKnowledge_Article_Incident(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formKnowledge_Article_Incident_for_Interactive_experience = (function () {
	"use strict";
	/** @type DevKit.FormKnowledge_Article_Incident_for_Interactive_experience */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormKnowledge_Article_Incident_for_Interactive_experience(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();