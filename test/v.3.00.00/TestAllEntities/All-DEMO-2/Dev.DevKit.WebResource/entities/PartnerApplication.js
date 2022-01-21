//@ts-check
///<reference path="PartnerApplication.d.ts" />
"use strict";
var formPartner_Application_Main_Form = (function () {
	"use strict";
	/** @type DevKit.FormPartner_Application_Main_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPartner_Application_Main_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();