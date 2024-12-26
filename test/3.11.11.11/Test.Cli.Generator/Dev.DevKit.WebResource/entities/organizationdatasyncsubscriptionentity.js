//@ts-check
///<reference path="organizationdatasyncsubscriptionentity.d.ts" />
"use strict";
var formorganizationdatasyncsubscriptionentity_Information = (function () {
	"use strict";
	/** @type DevKit.Formorganizationdatasyncsubscriptionentity_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formorganizationdatasyncsubscriptionentity_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();