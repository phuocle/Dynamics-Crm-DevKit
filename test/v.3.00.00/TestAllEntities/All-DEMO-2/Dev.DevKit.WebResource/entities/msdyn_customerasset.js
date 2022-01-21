//@ts-check
///<reference path="msdyn_customerasset.d.ts" />
"use strict";
var formCustomer_Asset = (function () {
	"use strict";
	/** @type DevKit.FormCustomer_Asset */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCustomer_Asset(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formCustomer_Asset_Mobile = (function () {
	"use strict";
	/** @type DevKit.FormCustomer_Asset_Mobile */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCustomer_Asset_Mobile(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formCustomer_Asset_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormCustomer_Asset_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCustomer_Asset_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();