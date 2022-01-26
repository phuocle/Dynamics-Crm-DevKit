//@ts-check
///<reference path="OfficeGraphDocument.d.ts" />
"use strict";
var formOfficeGraphDocument_Information = (function () {
	"use strict";
	/** @type DevKit.FormOfficeGraphDocument_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormOfficeGraphDocument_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();