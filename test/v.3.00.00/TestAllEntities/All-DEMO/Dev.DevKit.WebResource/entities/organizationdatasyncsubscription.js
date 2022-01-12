//@ts-check
///<reference path="organizationdatasyncsubscription.d.ts" />
"use strict";
var formorganizationdatasyncsubscription_Information = (function () {
	"use strict";
	/** @type DevKit.Formorganizationdatasyncsubscription_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formorganizationdatasyncsubscription_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();