//@ts-check
///<reference path="QuoteClose.d.ts" />
"use strict";
var formQuoteClose_Information = (function () {
	"use strict";
	/** @type DevKit.FormQuoteClose_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormQuoteClose_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();