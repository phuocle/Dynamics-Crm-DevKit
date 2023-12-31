//@ts-check
///<reference path="activitymonitor.d.ts" />
"use strict";
var formActivity_monitor_main_form = (function () {
	"use strict";
	/** @type DevKit.FormActivity_monitor_main_form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormActivity_monitor_main_form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();