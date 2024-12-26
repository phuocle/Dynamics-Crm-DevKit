//@ts-check
///<reference path="ProductAssociation.d.ts" />
"use strict";
var formProduct_Association = (function () {
	"use strict";
	/** @type DevKit.FormProduct_Association */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormProduct_Association(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();