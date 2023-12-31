//@ts-check
///<reference path="flowsession.d.ts" />
"use strict";
var formflowsession_Information = (function () {
	"use strict";
	/** @type DevKit.Formflowsession_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formflowsession_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();