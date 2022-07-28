//@ts-check
///<reference path="TopicModelConfiguration.d.ts" />
"use strict";
var formTopicModelConfiguration_Information = (function () {
	"use strict";
	/** @type DevKit.FormTopicModelConfiguration_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTopicModelConfiguration_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();