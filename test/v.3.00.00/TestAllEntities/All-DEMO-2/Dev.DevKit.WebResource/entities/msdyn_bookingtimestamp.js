//@ts-check
///<reference path="msdyn_bookingtimestamp.d.ts" />
"use strict";
var formBooking_Timestamp_Mobile = (function () {
	"use strict";
	/** @type DevKit.FormBooking_Timestamp_Mobile */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBooking_Timestamp_Mobile(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_bookingtimestamp_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_bookingtimestamp_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_bookingtimestamp_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();