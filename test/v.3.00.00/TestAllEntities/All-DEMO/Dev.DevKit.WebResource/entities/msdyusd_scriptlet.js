//@ts-check
///<reference path="msdyusd_scriptlet.d.ts" />
"use strict";
var formmsdyusd_scriptlet_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyusd_scriptlet_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyusd_scriptlet_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();