//@ts-check
///<reference path="TopicModel.d.ts" />
"use strict";
var formTopicModel_Information = (function () {
	"use strict";
	/** @type DevKit.FormTopicModel_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTopicModel_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();