//@ts-check
///<reference path="msdyn_resourcerequest.d.ts" />
"use strict";
var formmsdyn_resourcerequest_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_resourcerequest_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_resourcerequest_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formmsdyn_resourcerequest_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_resourcerequest_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_resourcerequest_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();