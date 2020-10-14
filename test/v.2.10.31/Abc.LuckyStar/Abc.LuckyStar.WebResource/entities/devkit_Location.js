//@ts-check
///<reference path="devkit_Location.d.ts" />
"use strict";
var formLocation = (function () {
	"use strict";
	/** @type { LuckyStar.FormLocation} */
	let form = null;
	async function onLoad(executionContext) {
		form = new LuckyStar.FormLocation(executionContext);



	}
	async function onSave(executionContext) {

	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formQuick_Create_Location = (function () {
	"use strict";
	async function onLoad(executionContext) {
	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();