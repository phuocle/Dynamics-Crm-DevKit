//@ts-check
///<reference path="msdyusd_form.d.ts" />
"use strict";
var formmsdyusd_form_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_form_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_form_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();