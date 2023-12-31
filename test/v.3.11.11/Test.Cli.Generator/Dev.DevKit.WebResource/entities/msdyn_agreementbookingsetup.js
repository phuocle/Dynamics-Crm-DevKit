//@ts-check
///<reference path="msdyn_agreementbookingsetup.d.ts" />
"use strict";
var formAgreement_Booking_Setup = (function () {
	"use strict";
	/** @type DevKit.FormAgreement_Booking_Setup */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAgreement_Booking_Setup(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formAgreement_Booking_Setup_Mobile = (function () {
	"use strict";
	/** @type DevKit.FormAgreement_Booking_Setup_Mobile */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAgreement_Booking_Setup_Mobile(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();