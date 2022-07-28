//@ts-check
///<reference path="msdyn_bookingjournal.d.ts" />
"use strict";
var formBooking_Journal_Mobile = (function () {
	"use strict";
	/** @type DevKit.FormBooking_Journal_Mobile */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBooking_Journal_Mobile(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_bookingjournal_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_bookingjournal_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_bookingjournal_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();