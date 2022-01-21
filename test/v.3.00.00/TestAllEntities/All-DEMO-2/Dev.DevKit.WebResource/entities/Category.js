//@ts-check
///<reference path="Category.d.ts" />
"use strict";
var formCategory = (function () {
	"use strict";
	/** @type DevKit.FormCategory */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCategory(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formCategory_Main_Interactive = (function () {
	"use strict";
	/** @type DevKit.FormCategory_Main_Interactive */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCategory_Main_Interactive(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formCategory_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormCategory_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCategory_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();