//@ts-check
///<reference path="Feedback.d.ts" />
"use strict";
var formFeedback = (function () {
	"use strict";
	/** @type DevKit.FormFeedback */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormFeedback(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formFeedback_MainIC = (function () {
	"use strict";
	/** @type DevKit.FormFeedback_MainIC */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormFeedback_MainIC(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formFeedback_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormFeedback_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormFeedback_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();