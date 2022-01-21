//@ts-check
///<reference path="msdyn_knowledgearticleimage.d.ts" />
"use strict";
var formmsdyn_knowledgearticleimage_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_knowledgearticleimage_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_knowledgearticleimage_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();