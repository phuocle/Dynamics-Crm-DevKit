//@ts-check
///<reference path="Email.d.ts" />
"use strict";
var formBulk_Email = (function () {
	"use strict";
	/** @type DevKit.FormBulk_Email */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBulk_Email(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formEmail = (function () {
	"use strict";
	/** @type DevKit.FormEmail */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormEmail(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formEmail_for_Interactive_experience = (function () {
	"use strict";
	/** @type DevKit.FormEmail_for_Interactive_experience */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormEmail_for_Interactive_experience(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formEnhanced_Email = (function () {
	"use strict";
	/** @type DevKit.FormEnhanced_Email */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormEnhanced_Email(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formEmail_Wizard = (function () {
	"use strict";
	/** @type DevKit.FormEmail_Wizard */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormEmail_Wizard(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();