//@ts-check
///<reference path="BulkOperation.d.ts" />
"use strict";
var formQuick_Campaign = (function () {
	"use strict";
	/** @type DevKit.FormQuick_Campaign */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormQuick_Campaign(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formQuick_Campaign_deprecated = (function () {
	"use strict";
	/** @type DevKit.FormQuick_Campaign_deprecated */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormQuick_Campaign_deprecated(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();