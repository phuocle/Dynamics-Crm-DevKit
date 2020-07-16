//@ts-check
///<reference path="devkit_Location.d.ts" />
"use strict";
var formLocation = (function () {
	"use strict";
	async function onLoad(executionContext) {
		var form = new Tomato.FormLocation(executionContext);
		form.QuickForm.qwAccount.Body.
	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formQuick_Create_Location = (function () {
	"use strict";
	async function onLoad(executionContext) {
	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();