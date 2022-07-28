//@ts-check
///<reference path="msdyn_incidenttyperecommendationresult.d.ts" />
"use strict";
var formmsdyn_incidenttyperecommendationresult_Information = (function () {
	"use strict";
	/** @type DevKit.Formmsdyn_incidenttyperecommendationresult_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.Formmsdyn_incidenttyperecommendationresult_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();