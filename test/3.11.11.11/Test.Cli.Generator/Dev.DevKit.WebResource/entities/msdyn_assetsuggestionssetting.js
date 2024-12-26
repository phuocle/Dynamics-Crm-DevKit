//@ts-check
///<reference path="msdyn_assetsuggestionssetting.d.ts" />
"use strict";
var formmsdyn_assetsuggestionssetting_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_assetsuggestionssetting_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_assetsuggestionssetting_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();