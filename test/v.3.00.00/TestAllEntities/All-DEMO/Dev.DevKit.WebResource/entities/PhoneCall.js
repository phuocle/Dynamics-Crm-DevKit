//@ts-check
///<reference path="PhoneCall.d.ts" />
"use strict";
var formPhone_Call = (function () {
	"use strict";
	/** @type DevKit.FormPhone_Call */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPhone_Call(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formPhone_Call_for_Interactive_experience = (function () {
	"use strict";
	/** @type DevKit.FormPhone_Call_for_Interactive_experience */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPhone_Call_for_Interactive_experience(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formPhone_call_quick_create_form = (function () {
	"use strict";
	/** @type DevKit.FormPhone_call_quick_create_form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPhone_call_quick_create_form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();