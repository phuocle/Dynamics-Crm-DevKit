//@ts-check
///<reference path="PostFollow.d.ts" />
"use strict";
var formPostFollow_Information = (function () {
	"use strict";
	/** @type DevKit.FormPostFollow_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormPostFollow_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();