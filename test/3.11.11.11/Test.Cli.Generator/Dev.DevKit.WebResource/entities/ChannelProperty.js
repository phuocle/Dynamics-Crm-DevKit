//@ts-check
///<reference path="ChannelProperty.d.ts" />
"use strict";
var formChannel_Property = (function () {
	"use strict";
	/** @type DevKit.FormChannel_Property */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormChannel_Property(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();