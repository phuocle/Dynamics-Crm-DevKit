//@ts-check
///<reference path="Contact.d.ts" />
"use strict";
var formContact = (function () {
	"use strict";
	async function onLoad(executionContext) {
		var f = new LuckyStar.FormAccount(executionContext);
	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formContact_Quick_Create = (function () {
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
var formInformation = (function () {
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