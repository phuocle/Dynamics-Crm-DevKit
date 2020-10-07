//@ts-check
///<reference path="devkit_Location.d.ts" />
"use strict";
var formLocation = (function () {
	"use strict";
	/** @type {Tomato.FormLocation } */
	var form = null;
	async function onLoad(executionContext) {
		form = new Tomato.FormLocation(executionContext);

		setTimeout(function () {
			console.clear();

			CheckLoadForm();
			CheckFormBody();
			CheckFormTab();
			CheckFormHeader();
			CheckFormFooter();
			CheckFormProcess();
			CheckFormProcess1();
			CheckQuickForm();
			CheckFormNavigation();
			CheckUtility()
			CheckSubgrid();
			CheckExecutionContext();

		}, 5000);
	}

	function CheckLoadForm() {
		IsTrue(form.EntityName, "devkit_location", "devKit.LoadForm - form.EntityName");
    }

	function CheckFormBody() {
		IsTrue(form.Body.devkit_Name.Value, "Location 1", "devKit.LoadFields(formContext, body) - form.Body.devkit_Name.Value");
	}

	function CheckFormTab() {
		IsTrue(form.Body.Tab.tab3.Label, "tab3", "devKit.LoadTabs(formContext, tab); - form.Body.Tab.tab3.Label");
		IsTrue(form.Body.Tab.tab3.Section.tab3sec1.Label, "sec1", "SECTION - form.Body.Tab.tab3.Section.tab3sec1.Label");
	}

	function CheckFormHeader() {
		IsTrue(form.Header.devkit_AccountId.Value[0].name, "A. Datum Corporation (sample)", "devKit.LoadFields(formContext, header, \"header_\"); - form.Header.devkit_AccountId.Value[0].name");
	}

	function CheckFormFooter() {
		IsTrue(form.Footer.statuscode.Value, OptionSet.devkit_Location.statuscode.Active, "devKit.LoadFields(formContext, footer, \"footer_\"); - form.Footer.statuscode.Value");
	}

	function CheckFormProcess() {
		IsTrue(form.Process.ActiveStage.Name, "Stage 2", "devKit.LoadProcess(formContext)");
    }

	function CheckFormProcess1() {
		IsTrue(form.Process.BPF_Location_2.devkit_ContactId.Value[0].name, "Jim Glynn (sample)", "process.BPF_Location_2 - form.Process.BPF_Location_2.devkit_ContactId.Value[0].name");
    }

	function CheckQuickForm() {
		IsTrue(form.QuickForm.quickViewContact.Visible, true, "form.QuickForm.quickViewContact.Visible");
		IsTrue(form.QuickForm.quickViewContact.Body.FirstName.Value, "Jim",  "------ BUG ------ Jim - form.QuickForm.quickViewContact.Body.FirstName.Value");
		IsTrue(form.QuickForm.quickViewContact.Body.FirstName.Visible, true, "true - form.QuickForm.quickViewContact.Body.FirstName.Visible");
		form.QuickForm.quickViewContact.Body.EMailAddress1.Visible = false;
		form.QuickForm.quickViewContact.Body.LastName.Label = "NEW LAST NAME";
    }

	function CheckFormNavigation() {
		form.Navigation.nav_devkit_devkit_location_account_LocationId.Label = "AAA";
		form.Navigation.navAudit.Label = "BBB";
		form.Navigation.nav_devkit_devkit_location_contact_LocationId.Label = "CCC";
	}
	function CheckUtility() {
		IsTrue(form.Utility.UserSettings.Roles.getLength(), 2, "form.Utility.UserSettings.Roles.getLength() = 2");
	}
	function CheckSubgrid() {
		IsTrue(form.Grid.panelContact.TotalRecordCount, 2, "form.Grid.panelContact.TotalRecordCount = 2");
		IsTrue(form.Grid.panelContact.Rows.getLength(), 2, "form.Grid.panelContact.Rows.getLength() = 2");
	}
	function CheckExecutionContext() {
		form.ExecutionContext.SetSharedVariable("A", "BA");
		IsTrue(form.ExecutionContext.GetSharedVariable("A"), "BA", "form.ExecutionContext.GetSharedVariable");
	}

	function IsTrue(value1, value2, message) {
		if (_.isEqual(value1, value2)) {
			console.log("PASSED: " + message);
		}
		else {
			console.log("FAILED: " + message);
        }
    }

	async function onSave(executionContext) {
		IsTrue(form.Grid.panelAccount.TotalRecordCount, 1, "form.Grid.gridAccount.TotalRecordCount = 1");
	}
		return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
//var formQuick_Create_Location = (function () {
//	"use strict";
//	async function onLoad(executionContext) {
//	}
//	async function onSave(executionContext) {
//	}
//	return {
//		OnLoad: onLoad,
//		OnSave: onSave
//	};
//})();