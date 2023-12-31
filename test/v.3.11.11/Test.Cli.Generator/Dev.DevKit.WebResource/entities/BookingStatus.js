//@ts-check
///<reference path="BookingStatus.d.ts" />
"use strict";
var formBookingStatus_Information = (function () {
	"use strict";
	/** @type DevKit.FormBookingStatus_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBookingStatus_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();