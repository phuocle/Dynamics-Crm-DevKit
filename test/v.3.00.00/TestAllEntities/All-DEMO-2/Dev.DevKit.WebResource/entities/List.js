//@ts-check
///<reference path="List.d.ts" />
"use strict";
var formMarketing_List = (function () {
	"use strict";
	/** @type DevKit.FormMarketing_List */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormMarketing_List(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formMarketing_List_Light = (function () {
	"use strict";
	/** @type DevKit.FormMarketing_List_Light */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormMarketing_List_Light(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();