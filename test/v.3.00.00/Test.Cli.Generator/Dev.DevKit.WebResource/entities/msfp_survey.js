﻿//@ts-check
///<reference path="msfp_survey.d.ts" />
"use strict";
var formmsfp_survey_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsfp_survey_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsfp_survey_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();