//@ts-check
///<reference path="TeamTemplate.d.ts" />
"use strict";
var formTeamTemplate = (function () {
	"use strict";
	/** @type DevKit.FormTeamTemplate */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTeamTemplate(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();