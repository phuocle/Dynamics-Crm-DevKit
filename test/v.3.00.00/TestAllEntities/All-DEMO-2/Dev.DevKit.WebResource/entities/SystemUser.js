//@ts-check
///<reference path="SystemUser.d.ts" />
"use strict";
var formApplication_User = (function () {
	"use strict";
	/** @type DevKit.FormApplication_User */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormApplication_User(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formSystemUser_Information = (function () {
	"use strict";
	/** @type DevKit.FormSystemUser_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSystemUser_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formUser = (function () {
	"use strict";
	/** @type DevKit.FormUser */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormUser(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formUser_form_Business = (function () {
	"use strict";
	/** @type DevKit.FormUser_form_Business */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormUser_form_Business(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formUser_Information_Form = (function () {
	"use strict";
	/** @type DevKit.FormUser_Information_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormUser_Information_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();