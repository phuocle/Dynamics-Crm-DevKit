//@ts-check
///<reference path="msdyn_agreementbookingservicetask.d.ts" />
"use strict";
var formAgreement_Booking_Service_Task_Mobile = (function () {
	"use strict";
	/** @type DevKit.FormAgreement_Booking_Service_Task_Mobile */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAgreement_Booking_Service_Task_Mobile(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_agreementbookingservicetask_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_agreementbookingservicetask_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_agreementbookingservicetask_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();