//@ts-check
///<reference path="InvoiceDetail.d.ts" />
"use strict";
var formInvoiceDetail_Information = (function () {
	"use strict";
	/** @type DevKit.FormInvoiceDetail_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormInvoiceDetail_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formInvoiceDetail = (function () {
	"use strict";
	/** @type DevKit.FormInvoiceDetail */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormInvoiceDetail(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formProject = (function () {
	"use strict";
	/** @type DevKit.FormProject */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormProject(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();