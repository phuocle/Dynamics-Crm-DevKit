//@ts-check
///<reference path="Fax.d.ts" />
"use strict";
var formFax = (function () {
	"use strict";
	/** @type DevKit.FormFax */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormFax(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();