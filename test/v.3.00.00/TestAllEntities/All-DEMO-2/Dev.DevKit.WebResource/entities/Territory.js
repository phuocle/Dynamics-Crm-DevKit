//@ts-check
///<reference path="Territory.d.ts" />
"use strict";
var formTerritory_Information = (function () {
	"use strict";
	/** @type DevKit.FormTerritory_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTerritory_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formTerritory_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormTerritory_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTerritory_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();