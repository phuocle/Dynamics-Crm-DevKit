//@ts-check
///<reference path="availabletimesdatasource.d.ts" />
"use strict";
var formavailabletimesdatasource_Information = (function () {
	"use strict";
	/** @type DevKit.Formavailabletimesdatasource_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formavailabletimesdatasource_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();