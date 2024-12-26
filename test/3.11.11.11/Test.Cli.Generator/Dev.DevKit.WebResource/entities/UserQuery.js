//@ts-check
///<reference path="UserQuery.d.ts" />
"use strict";
var formUserQuery_Information = (function () {
	"use strict";
	/** @type DevKit.FormUserQuery_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormUserQuery_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();