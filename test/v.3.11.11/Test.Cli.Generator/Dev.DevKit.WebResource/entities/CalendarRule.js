//@ts-check
///<reference path="CalendarRule.d.ts" />
"use strict";
var formCalendarRule_Information = (function () {
	"use strict";
	/** @type DevKit.FormCalendarRule_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCalendarRule_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();