//@ts-check
///<reference path="msdyn_agreementbookingservice.d.ts" />
"use strict";
var formAgreement_Booking_Service_Mobile = (function () {
	"use strict";
	/** @type DevKit.FormAgreement_Booking_Service_Mobile */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAgreement_Booking_Service_Mobile(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_agreementbookingservice_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_agreementbookingservice_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_agreementbookingservice_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();