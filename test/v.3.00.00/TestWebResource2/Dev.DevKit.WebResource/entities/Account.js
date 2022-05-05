//@ts-check
///<reference path="Account.d.ts" />
"use strict";
var formAccount = (function () {
	"use strict";
	/** @type DevKit.FormAccount */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formAccount_for_Interactive_experience = (function () {
	"use strict";
	/** @type DevKit.FormAccount_for_Interactive_experience */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount_for_Interactive_experience(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formAccount_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormAccount_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount_Quick_Create(executionContext);

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
	/** @type DevKit.FormInformation */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormInformation(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();