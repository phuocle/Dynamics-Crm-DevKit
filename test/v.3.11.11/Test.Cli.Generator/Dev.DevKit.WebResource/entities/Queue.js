//@ts-check
///<reference path="Queue.d.ts" />
"use strict";
var formQueue_Information = (function () {
	"use strict";
	/** @type DevKit.FormQueue_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormQueue_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formOmnichannel_queue = (function () {
	"use strict";
	/** @type DevKit.FormOmnichannel_queue */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormOmnichannel_queue(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formQueue = (function () {
	"use strict";
	/** @type DevKit.FormQueue */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormQueue(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formQueue_Hub_Form = (function () {
	"use strict";
	/** @type DevKit.FormQueue_Hub_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormQueue_Hub_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();