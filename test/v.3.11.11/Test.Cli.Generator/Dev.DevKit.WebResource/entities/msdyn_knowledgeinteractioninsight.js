//@ts-check
///<reference path="msdyn_knowledgeinteractioninsight.d.ts" />
"use strict";
var formmsdyn_knowledgeinteractioninsight_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_knowledgeinteractioninsight_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_knowledgeinteractioninsight_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();