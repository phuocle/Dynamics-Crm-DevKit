//@ts-check
///<reference path="msdyn_knowledgearticlesuggestiondatasource.d.ts" />
"use strict";
var formmsdyn_knowledgearticlesuggestiondatasource_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_knowledgearticlesuggestiondatasource_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_knowledgearticlesuggestiondatasource_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();