﻿//@ts-check
///<reference path="UII_context.d.ts" />
"use strict";
var formUII_context_Information = (function () {
	"use strict";
	/** @type DevKit.FormUII_context_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormUII_context_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();