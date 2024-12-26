//@ts-check
///<reference path="msdyn_entitylinkchatconfiguration.d.ts" />
"use strict";
var formEntity_link_chat_configuration = (function () {
	"use strict";
	/** @type DevKit.FormEntity_link_chat_configuration */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormEntity_link_chat_configuration(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();