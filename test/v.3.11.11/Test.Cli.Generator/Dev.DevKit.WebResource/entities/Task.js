//@ts-check
///<reference path="Task.d.ts" />
"use strict";
var formTask = (function () {
	"use strict";
	/** @type DevKit.FormTask */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTask(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formTask_for_Interactive_experience = (function () {
	"use strict";
	/** @type DevKit.FormTask_for_Interactive_experience */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTask_for_Interactive_experience(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formTask_quick_create_form = (function () {
	"use strict";
	/** @type DevKit.FormTask_quick_create_form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTask_quick_create_form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();