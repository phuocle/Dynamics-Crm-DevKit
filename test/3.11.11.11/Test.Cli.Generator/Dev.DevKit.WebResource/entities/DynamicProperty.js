//@ts-check
///<reference path="DynamicProperty.d.ts" />
"use strict";
var formProperty = (function () {
	"use strict";
	/** @type DevKit.FormProperty */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormProperty(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formProperty_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormProperty_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormProperty_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();