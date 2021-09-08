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
		//debugger;
		var form = new DevKit.FormAccount(executionContext);
		//if (form.FormType === OptionSet.FormType.Update) {
		//	form.Body.Name.Disabled = true;
		//	form.Body.ModifiedOn.ShowTime = false;
		//}

		form.SidePanes.Create({
			canClose: false,
			title: "PHUOC - SIDE PANE",
			paneId: "PANEID",
			hideHeader: true,
		}, function (pane) {
			form.SidePanes.DisplayState = OptionSet.SidePaneState.Collapsed;
			pane.navigate({
				pageType: "entitylist",
				entityName: "account",
			});
			var p = form.SidePanes.Get("PANEID");

			var t = form.SidePanes.GetAll().getLength()

			debugger;

			p.badge = 2;

		});




		//form.SidePanes.DisplayState = OptionSet.SidePaneState.Collapsed;
		//Xrm.App.sidePanes.state = 0;
		//form.SidePanes.Create({}, function (pane) {
		//	pane.close();
		//	pane.select();
		//	pane.navigate();
		//	pane.badge = 1;
		//	pane.width = 111;
		//});
		//var pane = form.SidePanes.Get("ABC");
		//var selectedPane = form.SidePanes.GetSelected();
		//var panes = form.SidePanes.GetAll();
		//form.SidePanes.State = OptionSet.SidePane.Open // 0, 1

    }
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();