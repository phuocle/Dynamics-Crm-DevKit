//@ts-check
///<reference path="msdyn_agreementbookingproduct.d.ts" />
"use strict";
var formAgreement_Booking_Product_Mobile = (function () {
	"use strict";
	/** @type DevKit.FormAgreement_Booking_Product_Mobile */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAgreement_Booking_Product_Mobile(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_agreementbookingproduct_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_agreementbookingproduct_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_agreementbookingproduct_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();