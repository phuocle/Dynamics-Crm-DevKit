//@ts-check
///<reference path="GoalRollupQuery.d.ts" />
"use strict";
var formGoalRollupQuery_Information = (function () {
	"use strict";
	/** @type DevKit.FormGoalRollupQuery_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormGoalRollupQuery_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();