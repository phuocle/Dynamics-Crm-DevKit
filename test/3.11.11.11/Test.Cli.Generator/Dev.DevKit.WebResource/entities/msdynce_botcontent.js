//@ts-check
///<reference path="msdynce_botcontent.d.ts" />
"use strict";
var formmsdynce_botcontent_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdynce_botcontent_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdynce_botcontent_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();