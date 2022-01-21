//@ts-check
///<reference path="ChannelPropertyGroup.d.ts" />
"use strict";
var formChannel_Property_Group = (function () {
	"use strict";
	/** @type DevKit.FormChannel_Property_Group */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormChannel_Property_Group(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();