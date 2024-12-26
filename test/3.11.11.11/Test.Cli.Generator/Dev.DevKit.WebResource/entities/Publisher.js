//@ts-check
///<reference path="Publisher.d.ts" />
"use strict";
var formPublisher_Information = (function () {
	"use strict";
	/** @type DevKit.FormPublisher_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPublisher_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();