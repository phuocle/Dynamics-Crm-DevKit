//@ts-check
///<reference path="msdyn_sentimentanalysis.d.ts" />
"use strict";
var formmsdyn_sentimentanalysis_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_sentimentanalysis_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_sentimentanalysis_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();