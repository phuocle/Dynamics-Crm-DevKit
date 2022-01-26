//@ts-check
///<reference path="BookableResourceGroup.d.ts" />
"use strict";
var formBookableResourceGroup_Information = (function () {
	"use strict";
	/** @type DevKit.FormBookableResourceGroup_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBookableResourceGroup_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();