//@ts-check
///<reference path="QueueItem.d.ts" />
"use strict";
var formQueueItem_Information = (function () {
	"use strict";
	/** @type DevKit.FormQueueItem_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormQueueItem_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();