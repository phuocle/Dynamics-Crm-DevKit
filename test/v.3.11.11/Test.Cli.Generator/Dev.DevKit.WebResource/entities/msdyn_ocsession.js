//@ts-check
///<reference path="msdyn_ocsession.d.ts" />
"use strict";
var formOmnichannel_session_form = (function () {
	"use strict";
	/** @type DevKit.FormOmnichannel_session_form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormOmnichannel_session_form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();