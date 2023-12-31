//@ts-check
///<reference path="Product.d.ts" />
"use strict";
var formProduct = (function () {
	"use strict";
	/** @type DevKit.FormProduct */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormProduct(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formProduct_family_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormProduct_family_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormProduct_family_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formProduct_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormProduct_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormProduct_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formProduct_Quick_Create_FS_5x5 = (function () {
	"use strict";
	/** @type DevKit.FormProduct_Quick_Create_FS_5x5 */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormProduct_Quick_Create_FS_5x5(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formProduct_Project_Information = (function () {
	"use strict";
	/** @type DevKit.FormProduct_Project_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormProduct_Project_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();