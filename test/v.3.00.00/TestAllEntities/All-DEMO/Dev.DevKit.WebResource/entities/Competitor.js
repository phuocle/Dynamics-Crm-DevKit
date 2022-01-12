//@ts-check
///<reference path="Competitor.d.ts" />
"use strict";
var formCompetitor = (function () {
	"use strict";
	/** @type DevKit.FormCompetitor */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCompetitor(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formCompetitor2 = (function () {
	"use strict";
	/** @type DevKit.FormCompetitor2 */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCompetitor2(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formCompetitor_Information = (function () {
	"use strict";
	/** @type DevKit.FormCompetitor_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCompetitor_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();