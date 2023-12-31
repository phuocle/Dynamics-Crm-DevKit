//@ts-check
///<reference path="Post.d.ts" />
"use strict";
var formPost_Information = (function () {
	"use strict";
	/** @type DevKit.FormPost_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPost_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();