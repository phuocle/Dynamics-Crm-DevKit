//@ts-check
///<reference path="Connection.d.ts" />
"use strict";
var formConnection_Information = (function () {
	"use strict";
	/** @type DevKit.FormConnection_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormConnection_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();