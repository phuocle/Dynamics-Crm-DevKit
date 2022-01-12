//@ts-check
///<reference path="BookableResource.d.ts" />
"use strict";
var formBookable_Resource_Mobile = (function () {
	"use strict";
	/** @type DevKit.FormBookable_Resource_Mobile */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBookable_Resource_Mobile(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formBookableResource_Information = (function () {
	"use strict";
	/** @type DevKit.FormBookableResource_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBookableResource_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();