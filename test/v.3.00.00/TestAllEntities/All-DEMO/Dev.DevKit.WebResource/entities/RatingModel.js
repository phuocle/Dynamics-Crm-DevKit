//@ts-check
///<reference path="RatingModel.d.ts" />
"use strict";
var formRatingModel_Information = (function () {
	"use strict";
	/** @type DevKit.FormRatingModel_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormRatingModel_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formRatingModel_Omnichannel_Information = (function () {
	"use strict";
	/** @type DevKit.FormRatingModel_Omnichannel_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormRatingModel_Omnichannel_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();