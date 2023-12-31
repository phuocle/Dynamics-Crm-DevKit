//@ts-check
///<reference path="msdyn_skillattachmentruleitem.d.ts" />
"use strict";
var formmsdyn_skillattachmentruleitem_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_skillattachmentruleitem_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_skillattachmentruleitem_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();