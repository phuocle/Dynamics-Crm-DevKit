//@ts-check
///<reference path="msdyn_sessionevent.d.ts" />
"use strict";
var formSession_event_Form = (function () {
	"use strict";
	/** @type DevKit.FormSession_event_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSession_event_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();