//@ts-check
///<reference path="msdyn_knowledgesearchinsight.d.ts" />
"use strict";
var formmsdyn_knowledgesearchinsight_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_knowledgesearchinsight_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_knowledgesearchinsight_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();