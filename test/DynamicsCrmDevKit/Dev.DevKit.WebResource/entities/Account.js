//@ts-check
///<reference path="Account.d.ts" />
"use strict";
var formAccount = (function () {
	"use strict";
	async function onLoad(executionContext) {
		var form = new DevKit.FormAccount(executionContext);
	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();