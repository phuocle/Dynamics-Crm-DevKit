//@ts-check
///<reference path="msdyusd_answer.d.ts" />
"use strict";
var formmsdyusd_answer_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_answer_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_answer_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();