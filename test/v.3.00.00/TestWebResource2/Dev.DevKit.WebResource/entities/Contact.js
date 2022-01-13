//@ts-check
///<reference path="Contact.d.ts" />
"use strict";
var formContact = (function () {
	"use strict";
	/** @type DevKit.FormContact */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormContact(executionContext);
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
	/** @type DevKit.FormContact_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormContact_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formContact_Information = (function () {
	"use strict";
	/** @type DevKit.FormContact_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormContact_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();