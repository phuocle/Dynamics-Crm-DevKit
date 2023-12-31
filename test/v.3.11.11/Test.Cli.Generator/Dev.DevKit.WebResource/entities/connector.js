//@ts-check
///<reference path="connector.d.ts" />
"use strict";
var formconnector_Information = (function () {
	"use strict";
	/** @type DevKit.Formconnector_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formconnector_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();