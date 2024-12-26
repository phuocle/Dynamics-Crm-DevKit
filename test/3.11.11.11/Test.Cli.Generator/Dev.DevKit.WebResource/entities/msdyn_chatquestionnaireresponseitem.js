//@ts-check
///<reference path="msdyn_chatquestionnaireresponseitem.d.ts" />
"use strict";
var formmsdyn_chatquestionnaireresponseitem_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_chatquestionnaireresponseitem_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_chatquestionnaireresponseitem_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();