//@ts-check
///<reference path="BookableResourceBookingHeader.d.ts" />
"use strict";
var formBookableResourceBookingHeader_Information = (function () {
	"use strict";
	/** @type DevKit.FormBookableResourceBookingHeader_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBookableResourceBookingHeader_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();