//@ts-check
///<reference path="msdyusd_task.d.ts" />
"use strict";
var formmsdyusd_task_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_task_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_task_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();