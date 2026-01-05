//@ts-check
///<reference path="Account.d.ts" />
"use strict";
var formAccount = (function () {
	"use strict";
	/** @type {DevKit.FormAccount} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount(executionContext);
		registerEvents();
		form.UiAddLoaded(UiAddLoaded);
		await TestTyping();
	}
	async function TestTyping() {
		form.AddOnPostSave(AddOnPostSave);
		form.AddOnSave(AddOnSave);
		form.Attributes.forEach((item, index) => { });
		form.ClearFormNotification("ABC");
		form.Close();
		form.Controls.forEach((item, index) => { });
		form.DataAddOnLoad(DataAddOnLoad);
		var a1 = form.DataIsDirty;
		var a2 = form.DataIsValid;
		form.DataRemoveOnLoad(DataAddOnLoad);
		var a3 = form.DataXml;
		var a4 = form.EntityId;
		var a5 = form.EntityIsDirty;
		var a6 = form.EntityIsValid
		var a7 = form.EntityName;
		var a8 = form.EntityReference;
		var a8_1 = form.EntityReference.entityType;
		var a8_2 = form.EntityReference.id;
		var a8_3 = form.EntityReference.name;
		var a9 = form.FormId;
		var a10 = form.FormIsVisible("ABC");
		var a11 = form.FormLabel;
		form.FormNavigateToFormId("ABC");
		form.FormNavigateToFormLabel("ABC");
		form.FormSetVisible("ABC", false);
		var a12 = form.FormType;
		var a13 = form.PrimaryAttributeValue;
		form.Refresh();
		form.RefreshRibbon();
		form.RemoveOnPostSave(AddOnPostSave);
		form.Save();
		form.SetFormEntityName("ABC");
		form.SetFormNotification("ABC", OptionSet.FormNotificationLevel.Info, "ABC");
		form.UiAddLoaded(UiAddLoaded);
		form.UiRemoveOnLoad(UiAddLoaded);
		var a14 = form.ViewPortHeight;
		var a15 = form.ViewPortWidth;

		form.Copilot.ExecuteEvent("ABC", "DEF")?.then(data => { });
		form.Copilot.ExecuteEvent("ABC", "DEF", ok, cancel);
		var a16 = await form.Copilot.ExecuteEvent("ABC", "DEF");
		form.Copilot.ExecutePrompt("ABC")?.then(data => { });
		form.Copilot.ExecutePrompt("ACB", ok, cancel);
		var a17 = await form.Copilot.ExecutePrompt("ABC");

		form.Grid.Contacts.AddOnLoad(AddOnLoad);
		var a18 = form.Grid.Contacts.EntityName;
		var a19 = form.Grid.Contacts.FetchXml;
		var a20 = form.Grid.Contacts.GridType;
		form.Grid.Contacts.OpenRelatedGrid();
		form.Grid.Contacts.Refresh();
		form.Grid.Contacts.RefreshRibbon();
		var a21 = form.Grid.Contacts.Relationship;
		var a21_1 = form.Grid.Contacts.Relationship.attributeName;
		var a21_2 = form.Grid.Contacts.Relationship.name;
		var a21_3 = form.Grid.Contacts.Relationship.navigationPropertyName;
		var a21_4 = form.Grid.Contacts.Relationship.relationshipType;
		var a21_5 = form.Grid.Contacts.Relationship.roleType;
		form.Grid.Contacts.RemoveOnLoad(AddOnLoad);
		form.Grid.Contacts.Rows.forEach((row, indexRow) => {
			row.Columns.forEach((column, indexColumn) => {
				column.ClearNotification("ABC");
				var a27 = column.Disabled;
				var a28 = column.Label;
				var a29 = column.Name;
				var a30 = column.RequiredLevel;
				column.SetNotification("ABC", "DEF");
				var a31 = column.Value;
			});
			var a22 = row.EntityId;
			var a23 = row.EntityName;
			var a24 = row.EntityReference;
			var a24_1 = row.EntityReference.id;
			var a24_2 = row.EntityReference.entityType;
			var a25_3 = row.EntityReference.name;
			var a26 = row.PrimaryAttributeValue;
		});
		form.Grid.Contacts.SelectedRows.forEach((row, index) => {
		});
		var a32 = form.Grid.Contacts.TotalRecordCount;
		var a33 = form.Grid.Contacts.Url(0);
		var a34 = form.Grid.Contacts.Url(1);
		var a35 = form.Grid.Contacts.ViewSelector;
		var a35_1 = form.Grid.Contacts.ViewSelector.CurrentView;
		var a35_1_1 = form.Grid.Contacts.ViewSelector.CurrentView.entityType;
		var a35_1_2 = form.Grid.Contacts.ViewSelector.CurrentView.id;
		var a35_1_3 = form.Grid.Contacts.ViewSelector.CurrentView.name;
		var a35_2 = form.Grid.Contacts.ViewSelector.Visible;

		var a36 = form.Header.BodyVisible;
		var a37 = form.Header.CommandBarVisible;
		var a38 = form.Header.TabNavigatorVisible;
		var a39 = form.Header.NumberOfEmployees.Value;

		form.Navigation.navActivities.Focus();
		var a40 = form.Navigation.navActivities.Id;
		var a41 = form.Navigation.navActivities.Label;
		var a42 = form.Navigation.navActivities.Visible;

		form.Process.ActivePath.forEach((stage, indexStage) => {
			var a43 = stage.AllowCreateNew;
			var a44 = stage.Category;
			var a45 = stage.EntityName;
			var a46 = stage.Id;
			var a47 = stage.Name;
			var a48 = stage.Status;
			stage.Steps.forEach((step, indexStep) => {
				var a49 = step.Attribute;
				var a50 = step.Name;
				var a51 = step.Progress;
				var a52 = step.Required;
				step.SetProgress(OptionSet.ProcessProgress.Completed);
			});
		});
		var a53 = form.Process.ActiveProcess;
		var a53_1 = form.Process.ActiveProcess.Id;
		var a53_2 = form.Process.ActiveProcess.IsRendered;
		var a53_3 = form.Process.ActiveProcess.Name;
		form.Process.ActiveProcess.Stages.forEach((stage, stageIndex) => {
		});
		var a54 = form.Process.ActiveStage.AllowCreateNew;
		var a55 = form.Process.ActiveStage.Category;
		var a56 = form.Process.ActiveStage.EntityName;
		var a57 = form.Process.ActiveStage.Id;
		var a58 = form.Process.ActiveStage.Name;
		var a59 = form.Process.ActiveStage.Status;
		form.Process.ActiveStage.Steps.forEach((step, stepIndex) => { });
		form.Process.AddOnPreProcessStatusChange(AddOnPreProcessStatusChange);
		form.Process.AddOnPreStageChange(AddOnPreStageChange);
		form.Process.AddOnProcessStatusChange(AddOnProcessStatusChange);
		form.Process.AddOnStageChange(AddOnStageChange);
		form.Process.AddOnStageSelected(AddOnStageSelected);
		form.Process.RemoveOnPreProcessStatusChange(AddOnPreProcessStatusChange);
		form.Process.RemoveOnPreStageChange(AddOnPreStageChange);
		form.Process.RemoveOnProcessStatusChange(AddOnProcessStatusChange);
		form.Process.RemoveOnStageChange(AddOnStageChange);
		form.Process.RemoveOnStageSelected(AddOnStageSelected);
		var a60 = form.Process.DisplayState;
		form.Process.EnabledProcesses((processes) => {
			var a61 = processes[0].ProcessId;
			var a62 = processes[0].ProcessName;
		});
		var a63 = form.Process.InstanceId;
		var a64 = form.Process.InstanceName;
		form.Process.MoveNext((value) => { });
		form.Process.MovePrevious((value) => { });
		form.Process.ProcessInstances((processes) => {
			var a65 = processes[0].CreatedOn;
			var a66 = processes[0].CreatedOnDate;
			var a67 = processes[0].InstanceId;
			var a68 = processes[0].InstanceName;
			var a69 = processes[0].ProcessId;
			var a70 = processes[0].ProcessName;
			var a71 = processes[0].Status;
		});
		form.Process.Reflow(true, "ABC", "DEF");
		var a72 = form.Process.SelectedStage.AllowCreateNew;
		form.Process.SetActiveProcess("A-A-A-A-A", ok);
		form.Process.SetActiveProcessInstance("A-A-A-A-A", ok);
		form.Process.SetActiveStage("A-A-A-A-A", ok);
		var a73 = form.Process.Status;
		var a74 = form.Process.Visible;
		var a75 = form.Process.AccountBPF.Name_1.Value;

		var a76 = form.QuickForm.contactquickform.ControlName;
		var a77 = form.QuickForm.contactquickform.ControlParent;
		form.QuickForm.contactquickform.Controls.forEach((control, index) => { });
		var a78 = form.QuickForm.contactquickform.ControlType;
		var a79 = form.QuickForm.contactquickform.Disabled;
		form.QuickForm.contactquickform.Focus();
		var a81 = form.QuickForm.contactquickform.IsLoaded();
		var a80 = form.QuickForm.contactquickform.Label
		form.QuickForm.contactquickform.Refresh();
		var a82 = form.QuickForm.contactquickform.Visible;



		function AddOnStageSelected() { }
		function AddOnStageChange() { }
		function AddOnProcessStatusChange() { }
		function AddOnPreStageChange() { }
		function AddOnPreProcessStatusChange() { }
		function ok() { }
		function cancel() { }
		function AddOnPostSave() { }
		function AddOnSave() { }
		function DataAddOnLoad() { }
		function AddOnLoad() { }
	}
	function registerEvents() {
		if (form.ExecutionContext.IsInitialLoad()) {
		}
	}
	//BEGIN ON LOAD ========================================================
	/** @param {any} executionContext */
	async function UiAddLoaded(executionContext) {
	}
	//END ON LOAD ==========================================================
	//BEGIN ON CHANGE ======================================================

	//END ON CHANGE ========================================================
	//BEGIN PRE SEARCH =====================================================

	//END PRE SEARCH =======================================================
	//BEGIN OTHERS =========================================================

	//END OTHERS ===========================================================
	return {
		OnLoad: onLoad
	};
})();
var formAccount_DevKitV4 = (function () {
	"use strict";
	/** @type {DevKit.FormAccount_DevKitV4} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount_DevKitV4(executionContext);
		registerEvents();
		form.UiAddLoaded(UiAddLoaded);
	}
	function registerEvents() {
		if (form.ExecutionContext.IsInitialLoad()) {
		}
	}
	//BEGIN ON LOAD ========================================================
	/** @param {any} executionContext */
	async function UiAddLoaded(executionContext) {
	}
	//END ON LOAD ==========================================================
	//BEGIN ON CHANGE ======================================================

	//END ON CHANGE ========================================================
	//BEGIN PRE SEARCH =====================================================

	//END PRE SEARCH =======================================================
	//BEGIN OTHERS =========================================================

	//END OTHERS ===========================================================
	return {
		OnLoad: onLoad
	};
})();
var formAccount_for_Interactive_experience = (function () {
	"use strict";
	/** @type {DevKit.FormAccount_for_Interactive_experience} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount_for_Interactive_experience(executionContext);
		registerEvents();
		form.UiAddLoaded(UiAddLoaded);
	}
	function registerEvents() {
		if (form.ExecutionContext.IsInitialLoad()) {
		}
	}
	//BEGIN ON LOAD ========================================================
	/** @param {any} executionContext */
	async function UiAddLoaded(executionContext) {
	}
	//END ON LOAD ==========================================================
	//BEGIN ON CHANGE ======================================================

	//END ON CHANGE ========================================================
	//BEGIN PRE SEARCH =====================================================

	//END PRE SEARCH =======================================================
	//BEGIN OTHERS =========================================================

	//END OTHERS ===========================================================
	return {
		OnLoad: onLoad
	};
})();
var formAccount_Quick_Create = (function () {
	"use strict";
	/** @type {DevKit.FormAccount_Quick_Create} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount_Quick_Create(executionContext);
		registerEvents();
		form.UiAddLoaded(UiAddLoaded);
	}
	function registerEvents() {
		if (form.ExecutionContext.IsInitialLoad()) {
		}
	}
	//BEGIN ON LOAD ========================================================
	/** @param {any} executionContext */
	async function UiAddLoaded(executionContext) {
	}
	//END ON LOAD ==========================================================
	//BEGIN ON CHANGE ======================================================

	//END ON CHANGE ========================================================
	//BEGIN PRE SEARCH =====================================================

	//END PRE SEARCH =======================================================
	//BEGIN OTHERS =========================================================

	//END OTHERS ===========================================================
	return {
		OnLoad: onLoad
	};
})();
var formAccount_Information = (function () {
	"use strict";
	/** @type {DevKit.FormAccount_Information} */
	let form;
	/** @param {any} executionContext */
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount_Information(executionContext);
		registerEvents();
		form.UiAddLoaded(UiAddLoaded);
	}
	function registerEvents() {
		if (form.ExecutionContext.IsInitialLoad()) {
		}
	}
	//BEGIN ON LOAD ========================================================
	/** @param {any} executionContext */
	async function UiAddLoaded(executionContext) {
	}
	//END ON LOAD ==========================================================
	//BEGIN ON CHANGE ======================================================

	//END ON CHANGE ========================================================
	//BEGIN PRE SEARCH =====================================================

	//END PRE SEARCH =======================================================
	//BEGIN OTHERS =========================================================

	//END OTHERS ===========================================================
	return {
		OnLoad: onLoad
	};
})();