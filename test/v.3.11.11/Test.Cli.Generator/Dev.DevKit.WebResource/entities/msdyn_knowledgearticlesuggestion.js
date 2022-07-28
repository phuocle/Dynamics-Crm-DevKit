//@ts-check
///<reference path="msdyn_knowledgearticlesuggestion.d.ts" />
"use strict";
var formmsdyn_knowledgearticlesuggestion_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_knowledgearticlesuggestion_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_knowledgearticlesuggestion_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();