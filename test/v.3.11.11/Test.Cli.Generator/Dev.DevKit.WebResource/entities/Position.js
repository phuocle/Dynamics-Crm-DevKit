//@ts-check
///<reference path="Position.d.ts" />
"use strict";
var formPosition = (function () {
	"use strict";
	/** @type DevKit.FormPosition */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPosition(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();