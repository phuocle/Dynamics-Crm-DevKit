//@ts-check
///<reference path="Calendar.d.ts" />
"use strict";
var formCalendar_Information = (function () {
	"use strict";
	/** @type DevKit.FormCalendar_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCalendar_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();