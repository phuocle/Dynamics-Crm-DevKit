//@ts-check
///<reference path="Team.d.ts" />
"use strict";
var formTeam_New_Form = (function () {
	"use strict";
	/** @type DevKit.FormTeam_New_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTeam_New_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formTeam = (function () {
	"use strict";
	/** @type DevKit.FormTeam */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTeam(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formTeam_form_Business = (function () {
	"use strict";
	/** @type DevKit.FormTeam_form_Business */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTeam_form_Business(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();