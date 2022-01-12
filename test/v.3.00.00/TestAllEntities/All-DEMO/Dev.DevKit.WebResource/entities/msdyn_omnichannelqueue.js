//@ts-check
///<reference path="msdyn_omnichannelqueue.d.ts" />
"use strict";
var formmsdyn_omnichannelqueue_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_omnichannelqueue_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_omnichannelqueue_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();