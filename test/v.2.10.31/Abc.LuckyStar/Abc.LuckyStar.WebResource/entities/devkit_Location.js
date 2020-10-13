//@ts-check
///<reference path="devkit_Location.d.ts" />
"use strict";
var formLocation = (function () {
	"use strict";
	async function onLoad(executionContext) {
		var form = new LuckyStar.FormLocation(executionContext);
		form.Header.BodyVisible = true;
		form.Header.CommandBarVisible = true;
		form.Header.TabNavigatorVisible = true;
		form.Footer.BodyVisible = true;
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