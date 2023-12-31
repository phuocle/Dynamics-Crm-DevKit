//@ts-check
///<reference path="Quote.d.ts" />
"use strict";
var formQuote_Field_Service_Information = (function () {
	"use strict";
	/** @type DevKit.FormQuote_Field_Service_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormQuote_Field_Service_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formQuote_Project_Information = (function () {
	"use strict";
	/** @type DevKit.FormQuote_Project_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormQuote_Project_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formQuote = (function () {
	"use strict";
	/** @type DevKit.FormQuote */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormQuote(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formQuote2 = (function () {
	"use strict";
	/** @type DevKit.FormQuote2 */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormQuote2(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();