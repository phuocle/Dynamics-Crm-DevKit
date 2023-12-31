//@ts-check
///<reference path="BookableResourceBooking.d.ts" />
"use strict";
var formBooking_and_Work_Order = (function () {
	"use strict";
	/** @type DevKit.FormBooking_and_Work_Order */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBooking_and_Work_Order(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formBookableResourceBooking_Information = (function () {
	"use strict";
	/** @type DevKit.FormBookableResourceBooking_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBookableResourceBooking_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formResource_Booking_Mobile_Deprecated = (function () {
	"use strict";
	/** @type DevKit.FormResource_Booking_Mobile_Deprecated */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormResource_Booking_Mobile_Deprecated(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();