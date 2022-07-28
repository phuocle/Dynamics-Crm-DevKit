//@ts-check
///<reference path="msdyn_migrationtracker.d.ts" />
"use strict";
var formMigration_Tracker = (function () {
	"use strict";
	/** @type DevKit.FormMigration_Tracker */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormMigration_Tracker(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();