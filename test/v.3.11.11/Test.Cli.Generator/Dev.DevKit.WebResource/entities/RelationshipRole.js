//@ts-check
///<reference path="RelationshipRole.d.ts" />
"use strict";
var formRelationshipRole_Information = (function () {
	"use strict";
	/** @type DevKit.FormRelationshipRole_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormRelationshipRole_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();