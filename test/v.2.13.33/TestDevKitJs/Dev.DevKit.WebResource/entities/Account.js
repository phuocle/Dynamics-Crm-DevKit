//@ts-check
///<reference path="Account.d.ts" />
"use strict";
var formAccount = (function () {
	"use strict";
	async function onLoad(executionContext) {
		checkIsFormUpdate(executionContext);
	}
	async function onSave(executionContext) {
	}
	function checkIsFormUpdate(executionContext) {
		var form = new DevKit.FormAccount(executionContext);
		if (form.FormType === OptionSet.FormType.Update) {
			form.Body.Name.Disabled = true;
			form.Body.ModifiedOn.ShowTime = false;
		}

		form.SidePanes.Create({}, function (pane) {
			pane.close();
			pane.select();
			pane.navigate();
			pane.badge = 1;
			pane.width = 111;
		});
		var pane = form.SidePanes.Get("ABC");
		var selectedPane = form.SidePanes.GetSelected();
		var panes = form.SidePanes.GetAll();
		form.SidePanes.State = OptionSet.SidePane.Open // 0, 1

    }
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();