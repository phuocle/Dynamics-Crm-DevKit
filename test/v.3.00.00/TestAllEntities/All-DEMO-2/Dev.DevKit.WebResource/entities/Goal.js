//@ts-check
///<reference path="Goal.d.ts" />
"use strict";
var formGoal_Information = (function () {
	"use strict";
	/** @type DevKit.FormGoal_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormGoal_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();