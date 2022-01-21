//@ts-check
///<reference path="msdyn_agreement.d.ts" />
"use strict";
var formmsdyn_agreement_Agreement = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_agreement_Agreement */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_agreement_Agreement(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formAgreement_Mobile = (function () {
	"use strict";
	/** @type DevKit.FormAgreement_Mobile */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAgreement_Mobile(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();