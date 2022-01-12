//@ts-check
///<reference path="msdyn_incidenttyperecommendationrunhistory.d.ts" />
"use strict";
var formmsdyn_incidenttyperecommendationrunhistory_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_incidenttyperecommendationrunhistory_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_incidenttyperecommendationrunhistory_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();