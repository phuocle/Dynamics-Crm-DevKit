//@ts-check
///<reference path="ProductSubstitute.d.ts" />
"use strict";
var formProductSubstitute = (function () {
	"use strict";
	/** @type DevKit.FormProductSubstitute */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormProductSubstitute(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formProductSubstitute_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormProductSubstitute_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormProductSubstitute_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();